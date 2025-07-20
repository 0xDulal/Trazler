import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ToastContext } from "../../context/ToastContext";
import LoadingAnimation from "../ui/LoadingAnimation";

const VerifyEmail = () => {
      const navigate = useNavigate();
      const { Backend_URL, getUserData, isLoggedIn, isLoading, userData } = useContext(AuthContext);
      const [Loading, setLoading] = useState(false);
      const { pushToast } = useContext(ToastContext);
      const inputRefs = useRef([]);

      // Check authentication on component mount
      useEffect(() => {
            if (!isLoading) {
                  if (!isLoggedIn) {
                        pushToast("Please login to verify your email", "error");
                        navigate("/404");
                        return;
                  }
                  
                  // If user is already verified, redirect them
                  if (userData?.isVerified) {
                        pushToast("Your email is already verified", "success");
                        navigate("/");
                        return;
                  }
            }
      }, [isLoading, isLoggedIn, userData, navigate, pushToast]);

      // Show loading while checking authentication
      if (isLoading) {
            return (
                  <div className="flex items-center justify-center h-screen">
                        <div className="text-2xl text-white">Loading...</div>
                  </div>
            );
      }

      // Don't render anything if not logged in (will redirect)
      if (!isLoggedIn) {
            return null;
      }

      // Don't render if already verified (will redirect)
      if (userData?.isVerified) {
            return null;
      }

      const HandleInputChange = (e, index) => {
            const value = e.target.value;
            if (value.length > 0 && index < inputRefs.current.length - 1) {
                  inputRefs.current[index + 1].focus();
            } else if (value.length === 0 && index > 0) {
                  inputRefs.current[index - 1].focus();
            }
      };
      const handleKeyDown = (e, index) => {
            if (e.key === "Backspace" && index > 0 && e.target.value === "") {
                  inputRefs.current[index - 1].focus();
            }
      };
      const handlePaste = (e) => {
            const pastedData = e.clipboardData.getData("text").split("");
            pastedData.forEach((char, index) => {
                  if (inputRefs.current[index]) {
                        inputRefs.current[index].value = char;
                        inputRefs.current[index].dispatchEvent(
                              new Event("input", { bubbles: true })
                        );
                  }
            });
            inputRefs.current[pastedData.length - 1].focus();
      };
      const handleSubmit = async (e) => {
            e.preventDefault();
            setLoading(true);
            const otp = inputRefs.current.map((input) => input.value).join("");
            if (otp.length < 6) {
                  pushToast("Please enter a valid 6-digit code.", "warning");
                  setLoading(false);
                  return;
            }
            try {
                  axios.defaults.withCredentials = true;
                  const response = await axios.post(
                        `${Backend_URL}/api/auth/verify-account`,
                        { otp },
                  );
                  if (response.data.success) {
                        pushToast("Email verified successfully!", "success");
                        // Update user data to reflect verification
                        getUserData();
                        navigate("/");
                  } else {
                        pushToast(
                              response.data.message || "Verification failed. Please check your code.",
                              "error"
                        );
                        setLoading(false);
                  }
            } catch (error) {
                  console.error("Verification error:", error);
                  if (error.response?.status === 401) {
                        pushToast("Session expired. Please login again.", "error");
                        navigate("/login");
                  } else {
                        pushToast(
                              error.response?.data?.message || "An error occurred while verifying your account.",
                              "error"
                        );
                  }
                  setLoading(false);
            }
      };

      // Add resend verification email function
      const handleResendCode = async () => {
            try {
                  const response = await axios.post(
                        `${Backend_URL}/api/auth/send-verification-email`,
                        {},
                        { withCredentials: true }
                  );
                  if (response.data.success) {
                        pushToast("Verification code sent!", "success");
                  } else {
                        pushToast(response.data.message || "Failed to send verification code", "error");
                  }
            } catch (error) {
                  console.error("Resend error:", error);
                  pushToast("Failed to resend verification code", "error");
            }
      };

      return (
            <div className="bg-[url('/src/assets/img/HeroImage.jpg')] bg-cover bg-center">
                  <div className="flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white font-outfit h-screen w-screen bg-black/50">
                        <form className="bg-slate-900 p-8 rounded-lg shadow-lg text-sm">
                              <h1 className="text-white text-2xl font-semibold text-center mb-8">
                                    Verify Email
                              </h1>
                              <p className="text-center mb-6 text-indigo-300">
                                    Enter the 6-digit code sent to {userData?.email}
                              </p>
                              <div className="flex justify-baseline mb-8">
                                    {Array(6)
                                          .fill(0)
                                          .map((_, index) => (
                                                <input
                                                      key={index}
                                                      ref={(e) =>
                                                            (inputRefs.current[
                                                                  index
                                                            ] = e)
                                                      }
                                                      onInput={(e) => {
                                                            HandleInputChange(
                                                                  e,
                                                                  index
                                                            );
                                                      }}
                                                      onKeyDown={(e) =>
                                                            handleKeyDown(
                                                                  e,
                                                                  index
                                                            )
                                                      }
                                                      onPaste={handlePaste}
                                                      type="text"
                                                      maxLength="1"
                                                      className="w-12 h-12 text-center text-2xl bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 mx-1"
                                                />
                                          ))}
                              </div>
                              {Loading ? (
                                    <LoadingAnimation />
                              ) : (
                                    <button
                                          type="submit"
                                          className="w-full bg-indigo-500 hover:bg-indigo-600 transition py-2.5 rounded text-white font-medium"
                                          onClick={handleSubmit}
                                    >
                                          Verify Email
                                    </button>
                              )}

                              <p className="text-center mt-4">
                                    Didn't receive the code?{" "}
                                    <button
                                          type="button"
                                          className="text-indigo-400 hover:underline"
                                          onClick={handleResendCode}
                                    >
                                          Resend Code
                                    </button>
                              </p>
                              
                              <p className="text-center mt-2">
                                    <button
                                          type="button"
                                          className="text-gray-400 hover:underline text-sm"
                                          onClick={() => navigate("/")}
                                    >
                                          Skip for now
                                    </button>
                              </p>
                        </form>
                  </div>
            </div>
      );
};

export default VerifyEmail;

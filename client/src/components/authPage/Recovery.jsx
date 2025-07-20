import { Binary, KeyRound, Mail } from "lucide-react";
import React, { useContext, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingAnimation from "../ui/LoadingAnimation";
import { ToastContext } from "../../context/ToastContext";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Recovery = () => {
      const navigate = useNavigate();
      const { Backend_URL } = useContext(AuthContext);
      const { pushToast } = useContext(ToastContext);
      const [email, setEmail] = useState("");
      const [otp, setOtp] = useState("");
      const [password, setPassword] = useState("");
      const [loading, setLoading] = useState(false);
      const [otpLoading, setOtpLoading] = useState(false);
      const [timer, setTimer] = useState(0);
      const intervalRef = useRef(null);

      useEffect(() => {
            if (timer > 0) {
                  intervalRef.current = setInterval(() => {
                        setTimer((prev) => prev - 1);
                  }, 1000);
            } else {
                  clearInterval(intervalRef.current);
            }
            return () => clearInterval(intervalRef.current);
      }, [timer]);

      const handleOtpResend = async () => {
            if (!email) {
                  pushToast("Please enter your email", "error");
                  return;
            }
            setOtpLoading(true);
            setTimer(30);
            try {
                  axios.defaults.withCredentials = true;
                  const response = await axios.post(
                        `${Backend_URL}/api/auth/send-reset-otp`,
                        { email }
                  );
                  console.log(response);
                  if (response.data.success) {
                        pushToast("Recovery OTP sent successfully!", "success");
                  } else if (response.data.success === false) {
                        pushToast(response.data.message, "error");
                        setTimer(0);
                  } else {
                        pushToast("Failed to send recovery email", "error");
                  }
            } catch (error) {
                  console.error("Error sending recovery email:", error);
                  pushToast("Error sending recovery email", "error");
                  clearInterval(intervalRef.current);
            }
      };
      const handlePasswordReset = async (e) => {
            console.log(email, otp, password);
            e.preventDefault();
            setLoading(true);
            if (!email || !otp || !password) {
                  pushToast("Please fill in all fields", "error");
                  setLoading(false);
                  return;
            }
            if (otp.length < 6) {
                  pushToast("Please enter a valid 6-digit OTP", "error");
                  setLoading(false);
                  return;
            }
            try {
                  axios.defaults.withCredentials = true;
                  const response = await axios.post(
                        `${Backend_URL}/api/auth/reset-password`,
                        { email, otp, "newPassword": password }
                  );
                  console.log(response)
                  if (response.data.success) {
                        pushToast("Password reset successfully!", "success");
                        navigate("/login");
                  } else {
                        pushToast(response.data.message || "Reset failed", "error");
                  }
            } catch (error) {
                  console.error("Error resetting password:", error);
                  pushToast("Error resetting password", "error");
            } finally {
                  setLoading(false);
            }
      };

      return (
            <div className="bg-[url('/src/assets/img/HeroImage.jpg')] bg-cover bg-center">
                  <div className="flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white font-outfit h-screen w-screen bg-black/50">
                        <form className="bg-slate-900 text-indigo-300 max-w-[340px] w-full mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
                              <h2 className="text-2xl font-bold mb-9 text-center text-white">
                                    Recover Account
                              </h2>
                              <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2 relative">
                                    <Mail size={16} />
                                    <input
                                          value={email}
                                          disabled={otpLoading || timer > 0}
                                          onChange={(e) =>
                                                setEmail(e.target.value)
                                          }
                                          className="w-full outline-none bg-transparent py-2.5"
                                          type="email"
                                          placeholder="Email"
                                          required
                                    />
                                    <button
                                          onClick={(e) => {
                                                e.preventDefault();
                                                if (timer === 0)
                                                      handleOtpResend();
                                          }}
                                          type="button"
                                          disabled={timer > 0}
                                          className={`w-[80px] text-white hover:text-indigo-300 transition absolute right-0 my-2 bg-indigo-500/25 rounded gap-1 pl-2 py-2.5 z-10 ${
                                                timer > 0
                                                      ? "opacity-50 cursor-not-allowed"
                                                      : ""
                                          }`}
                                    >
                                          {timer > 0 ? `${timer}s` : "Send OTP"}
                                    </button>
                              </div>
                              {otpLoading && (
                                    <div>
                                          <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2 relative">
                                                <Binary size={16} />

                                                <input
                                                      value={otp}
                                                      onChange={(e) =>
                                                            setOtp(
                                                                  e.target.value
                                                            )
                                                      }
                                                      maxLength={6}
                                                      className="w-full outline-none bg-transparent py-2.5"
                                                      type="text"
                                                      placeholder="Paste your OTP here"
                                                      required
                                                />
                                          </div>
                                          <div className="flex items-center mt-2 mb-4 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
                                                <KeyRound size={16} />
                                                <input
                                                      value={password}
                                                      onChange={(e) =>
                                                            setPassword(
                                                                  e.target.value
                                                            )
                                                      }
                                                      className="w-full outline-none bg-transparent py-2.5"
                                                      type="password"
                                                      placeholder="New  Password"
                                                      required
                                                />
                                          </div>
                                          {loading ? (
                                                <LoadingAnimation />
                                          ) : (
                                                <button
                                                      onClick={handlePasswordReset}
                                                      type="submit"
                                                      className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600/90 transition py-2.5 rounded text-white font-medium"
                                                >
                                                      Sign Up
                                                </button>
                                          )}
                                    </div>
                              )}

                              <p className="text-center mt-4">
                                    Already have an account?{" "}
                                    <a
                                          className=" underline"
                                          onClick={() => navigate("/login")}
                                          href="#"
                                    >
                                          Login
                                    </a>
                              </p>
                        </form>
                  </div>
            </div>
      );
};

export default Recovery;

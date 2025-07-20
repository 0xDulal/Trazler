/* eslint-disable no-unused-vars */
import axios from "axios";
import { KeyRound, Mail, UserRoundPen } from "lucide-react";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { AuthContext } from "../../context/AuthContext";
import { ToastContext } from "../../context/ToastContext";
import LoadingAnimation from "../ui/LoadingAnimation";

const SignUp = () => {
      const navigate = useNavigate();
      const { Backend_URL } = useContext(AuthContext);
      const { pushToast } = useContext(ToastContext);
      const [loading, setLoading] = useState(false);
      const [fullName, setFullName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const handleSubmit = async (e) => {
            e.preventDefault();
            setLoading(true);
            if (!fullName || !email || !password) {
                  pushToast("Please fill in all fields", "error");
                  setLoading(false);
                  return;
            }
            if (
                  !email.includes("@") ||
                  !email.includes(".") ||
                  email.length < 5
            ) {
                  pushToast("Please enter a valid email address", "error");
                  setLoading(false);
                  return;
            }
            if (password.length < 6) {
                  pushToast("Password must be at least 6 characters", "error");
                  setLoading(false);
                  return;
            }
            try {
                  axios.defaults.withCredentials = true;
                  const response = await axios.post(
                        `${Backend_URL}/api/auth/register`,
                        {
                              name: fullName,
                              email,
                              password,
                        }
                  );
                  if (response.status === 200 || response.status === 201) {
                        try {
                              axios.defaults.withCredentials = true;
                              const { data } = await axios.post(
                                    `${Backend_URL}/api/auth/send-verification-email`
                              );
                              if (data.success) {
                                    pushToast(
                                          "Sucessfully Created Your Account",
                                          "success"
                                    );
                              }
                              setTimeout(() => {
                                    if (data.success) {
                                          pushToast(
                                                "Verification email sent!",
                                                "success"
                                          );
                                    } else {
                                          pushToast(
                                                "Failed to send verification email",
                                                "error"
                                          );
                                          setLoading(false);
                                    }
                              }, 2000);
                        } catch (error) {
                              pushToast(
                                    "Error sending verification email",
                                    "error"
                              );
                              setLoading(false);
                        }
                        navigate("/verify");
                  } else {
                        toast.error("Registration failed");
                        setLoading(false);
                  }
            } catch (error) {
                  setLoading(false);
                  if (error.response) {
                        const { status, data } = error.response;

                        if (data && data.message) {
                              toast.error(data.message);
                        } else if (status === 400) {
                              toast.error("Invalid email or password");
                        } else if (status === 401) {
                              toast.error("Unauthorized: Invalid credentials");
                        } else if (status === 500) {
                              toast.error(
                                    "Server error. Please try again later"
                              );
                        } else {
                              toast.error(`Error: ${status}`);
                        }
                  } else if (error.request) {
                        console.error("Network error:", error.request);
                        toast.error(
                              "Network error. Please check your connection"
                        );
                  } else {
                        console.error("Error:", error.message);
                        toast.error("An unexpected error occurred");
                  }
            }
      };
      return (
            <div className="bg-[url('/src/assets/img/HeroImage.jpg')] bg-cover bg-center">
                  <div className="flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white font-outfit h-screen w-screen bg-black/50">
                        <form className="bg-slate-900 text-indigo-300 max-w-[340px] w-full mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
                              <h2 className="text-2xl font-bold mb-9 text-center text-white">
                                    Create an Account
                              </h2>
                              <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
                                    <UserRoundPen size={16} />
                                    <input
                                          value={fullName}
                                          onChange={(e) =>
                                                setFullName(e.target.value)
                                          }
                                          className="w-full outline-none bg-transparent py-2.5"
                                          type="name"
                                          placeholder="Full Name"
                                          required
                                    />
                              </div>
                              <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
                                    <Mail size={16} />
                                    <input
                                          value={email}
                                          onChange={(e) =>
                                                setEmail(e.target.value)
                                          }
                                          className="w-full outline-none bg-transparent py-2.5"
                                          type="email"
                                          placeholder="Email"
                                          required
                                    />
                              </div>
                              <div className="flex items-center mt-2 mb-4 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
                                    <KeyRound size={16} />
                                    <input
                                          value={password}
                                          onChange={(e) =>
                                                setPassword(e.target.value)
                                          }
                                          className="w-full outline-none bg-transparent py-2.5"
                                          type="password"
                                          placeholder=" Choose Password"
                                          required
                                    />
                              </div>
                              {loading ? (
                                    <LoadingAnimation />
                              ) : (
                                    <button
                                          onClick={handleSubmit}
                                          type="submit"
                                          className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600/90 transition py-2.5 rounded text-white font-medium"
                                    >
                                          Sign Up
                                    </button>
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

export default SignUp;

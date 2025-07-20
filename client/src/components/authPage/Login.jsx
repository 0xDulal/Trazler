/* eslint-disable no-unused-vars */
import { KeyRound, Mail } from "lucide-react";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import LoadingAnimation from "../ui/LoadingAnimation";
import { ToastContext } from "../../context/ToastContext";

const Login = () => {
      const navigate = useNavigate();
      const { Backend_URL, setIsLoggedIn, getUserData, setUserData } =
            useContext(AuthContext);
      const { pushToast } = useContext(ToastContext);
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [Loading, setLoading] = useState(false);
      const handleSubmit = async (e) => {
            e.preventDefault();
            setLoading(true);

            if (!email || !password) {
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
                  pushToast(
                        "Password must be at least 6 characters long",
                        "error"
                  );
                  setLoading(false);
                  return;
            }

            try {
                  axios.defaults.withCredentials = true;
                  const response = await axios.post(
                        `${Backend_URL}/api/auth/login`,
                        {
                              email,
                              password,
                        }
                  );

                  if (response.status === 200 && response.data.success) {
                        const loggedInUser = response.data.user;
                        setLoading(false);
                        pushToast("Login successful!", "success");

                        setIsLoggedIn(true);
                        getUserData();
                        if (loggedInUser) {
                              setUserData(loggedInUser);
                              if (!loggedInUser.isVerified) {
                                    try {
                                          axios.defaults.withCredentials = true;
                                          const { data } = await axios.post(
                                                `${Backend_URL}/api/auth/send-verification-email`
                                          );
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
                                          }
                                    } catch (error) {
                                          pushToast(
                                                "Error sending verification email",
                                                "error"
                                          );
                                    }
                                    navigate("/verify");
                              } else {
                                    navigate("/");
                              }
                        }
                        setTimeout(() => {
                              getUserData();
                        }, 200);
                  } else {
                        setLoading(false);
                        pushToast(
                              "Login failed. Please check your credentials.",
                              "error"
                        );
                  }
            } catch (error) {
                  setLoading(false);
                  if (error.response) {
                        const { status, data } = error.response;
                        if (data && data.message) {
                              pushToast(data.message, "error");
                        } else if (status === 400) {
                              pushToast("Invalid email or password", "error");
                        } else if (status === 401) {
                              pushToast(
                                    "Unauthorized: Invalid credentials",
                                    "error"
                              );
                        } else if (status === 500) {
                              pushToast(
                                    "Server error. Please try again later",
                                    "error"
                              );
                        } else {
                              pushToast(`Error: ${status}`, "error");
                        }
                  } else if (error.request) {
                        console.error("Network error:", error.request);
                        pushToast(
                              "Network error. Please check your connection",
                              "error"
                        );
                  } else {
                        pushToast("An unexpected error occurred", "error");
                  }
            }
      };
      return (
            <div className="bg-[url('/src/assets/img/HeroImage.jpg')] bg-cover bg-center">
                  <div className="flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white font-outfit h-screen w-screen bg-black/50">
                        <form className="bg-slate-900 text-indigo-300 max-w-[340px] w-full mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
                              <h2 className="text-2xl font-bold mb-9 text-center text-white">
                                    Welcome Back
                              </h2>
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
                                          className="w-full outline-none bg-transparent py-2.5 "
                                          type="password"
                                          placeholder=" Password"
                                          required
                                    />
                              </div>
                              <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-1">
                                          <input
                                                id="checkbox"
                                                type="checkbox"
                                          />
                                          <label htmlFor="checkbox">
                                                Remember me
                                          </label>
                                    </div>
                                    <a
                                          className=" underline cursor-pointer"
                                          onClick={() => navigate("/recover")}
                                    >
                                          Forgot Password
                                    </a>
                              </div>
                              <button
                                    type="submit"
                                    className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600/90 transition py-2.5 rounded text-white font-medium "
                                    onClick={handleSubmit}
                              >
                                    {Loading ? <LoadingAnimation /> : "Log In"}
                              </button>
                              <p className="text-center mt-4">
                                    Don't have an account?{" "}
                                    <a
                                          onClick={() => navigate("/signup")}
                                          className=" underline cursor-pointer"
                                    >
                                          Signup
                                    </a>
                              </p>
                        </form>
                  </div>
            </div>
      );
};

export default Login;

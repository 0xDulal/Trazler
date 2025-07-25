import React, { useContext } from "react";
import WhiteLogo from "../assets/logoWhite.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BookKey, Menu, Search, X } from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { ToastContext } from "../context/ToastContext";

const NavBar = () => {
      const isUserPath = useLocation().pathname.includes('/user');
      const { userData, setIsLoggedIn, Backend_URL, setUserData } =
            useContext(AuthContext);
      const { pushToast } = useContext(ToastContext);
      const navLinks = [
            { name: "Home", path: "/" },
            { name: "Hotels", path: "/" },
            { name: "Experiance", path: "/" },
            { name: "About", path: "/" },
      ];
      const [isScrolled, setIsScrolled] = React.useState(false);
      const [isMenuOpen, setIsMenuOpen] = React.useState(false);
      const navigate = useNavigate();
      const sendVerificationEmail = async () => {
            try {
                  axios.defaults.withCredentials = true;
                  const { data } = await axios.post(
                        `${Backend_URL}/api/auth/send-verification-email`
                  );
                  if (data.success) {
                        pushToast("Verification email sent successfully!", "success");
                  } else {
                        pushToast("Failed to send verification email", "error");
                  }
            } catch (error) {
                  console.error("Error sending verification email:", error);
                  pushToast("Error sending verification email", "error");
            }
      };

      const handleLogout = async () => {
            try {
                  axios.defaults.withCredentials = true;
                  const { data } = await axios.post(
                        `${Backend_URL}/api/auth/logout`
                  );
                  data.success && setIsLoggedIn(false);
                  data.success && setUserData(null);
                  pushToast("Logged out successfully", "success");
                  navigate("/");
            } catch (error) {
                  console.error("Error during logout:", error);
                  pushToast("Error logging out", "error");
            }
      };
      React.useEffect(() => {
            const handleScroll = () => {
                  setIsScrolled(window.scrollY > 10);
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      return (
            <nav
                  className={`fixed top-0 left-0  w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
                        isScrolled
                              ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
                              : "py-4 md:py-6"
                  } ${isUserPath ? "bg-indigo-900" : ""}`}
            >
                  {/* Logo */}
                  <Link to={"/"}>
                        <img
                              src={WhiteLogo}
                              alt="logo"
                              className={`h-9 ${
                                    isScrolled && "invert opacity-80"
                              }`}
                        />
                  </Link>

                  {/* Desktop Nav */}
                  <div className="hidden md:flex items-center gap-4 lg:gap-8">
                        {navLinks.map((link, i) => (
                              <a
                                    key={i}
                                    href={link.path}
                                    className={`group flex flex-col gap-0.5 ${
                                          isScrolled
                                                ? "text-gray-700"
                                                : "text-white"
                                    }`}
                              >
                                    {link.name}
                                    <div
                                          className={`${
                                                isScrolled
                                                      ? "bg-gray-700"
                                                      : "bg-white"
                                          } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
                                    />
                              </a>
                        ))}
                        <button
                              className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${
                                    isScrolled ? "text-black" : "text-white"
                              } transition-all`}
                        >
                              Dashboard
                        </button>
                  </div>

                  {/* Desktop Right */}
                  <div className="hidden md:flex items-center gap-4">
                        <Search
                              color="#ffffff"
                              strokeWidth={2.5}
                              className={`${
                                    isScrolled && "invert"
                              } h-7 transition-all duration-500 font-white`}
                        />
                        {userData ? (
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-black text-white relative group">
                                    {userData.name.charAt(0).toUpperCase()}
                                    <div className="absolute hidden group-hover:block top-0 right-0 text-black rounded z-10 pt-10">
                                          <ul className="list-none m-0 p-2 bg-gray-100 text-sm">
                                                {!userData.isVerified && (
                                                      <li
                                                            onClick={
                                                                  sendVerificationEmail
                                                            }
                                                            className="py-1 px-2 hover:bg-gray-200 cursor-pointer"
                                                      >
                                                            <Link to="/verify">
                                                                  Verify Email
                                                            </Link>
                                                      </li>
                                                )}
                                                <li className="py-1 px-2 hover:bg-gray-200 cursor-pointer">
                                                      <Link to="/user/profile">
                                                            Profile
                                                      </Link>
                                                </li>
                                                <li
                                                      onClick={handleLogout}
                                                      className="py-1 px-2 hover:bg-gray-200 cursor-pointer pr-10"
                                                >
                                                      LogOut
                                                </li>
                                          </ul>
                                    </div>
                              </div>
                        ) : (
                              <button
                                    onClick={() => navigate("/login")}
                                    className={`px-8 py-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                                          isScrolled
                                                ? "text-black bg-white"
                                                : "text-white bg-black"
                                    }`}
                              >
                                    Login
                              </button>
                        )}
                  </div>

                  {/* Mobile Menu Button */}
                  <div className="flex items-center gap-3 md:hidden">
                        {isMenuOpen ? (
                              ""
                        ) : (
                              <Menu
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className={`h-6 w-6 cursor-pointer ${
                                          isScrolled ? "invert" : ""
                                    }`}
                                    color="#ffffff"
                              />
                        )}
                  </div>

                  {/* Mobile Menu */}
                  <div
                        className={`fixed top-0 left-0 w-full h-screen bg-white/50 text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
                              isMenuOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                  >
                        <button
                              className="absolute top-4 right-4"
                              onClick={() => setIsMenuOpen(false)}
                        >
                              <X strokeWidth={2.5} />
                        </button>

                        {navLinks.map((link, i) => (
                              <a
                                    key={i}
                                    href={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                              >
                                    {link.name}
                              </a>
                        ))}

                        <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
                              Dashboard
                        </button>

                        <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
                              Login
                        </button>
                  </div>
            </nav>
      );
};

export default NavBar;

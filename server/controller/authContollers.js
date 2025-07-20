import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import transporter from "../config/nodemailer.js";

export const registerUser = async (req, res) => {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
            return res.json({
                  success: false,
                  message: "All fields are required",
            });
      }
      try {
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                  return res.json({
                        success: false,
                        message: "User already exists",
                  });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({
                  name,
                  email,
                  password: hashedPassword,
            });
            await user.save();
            const jwtToken = jwt.sign(
                  { id: user._id },
                  process.env.JWT_SECRET,
                  {
                        expiresIn: "1d",
                  }
            );
            res.cookie("token", jwtToken, {
                  httpOnly: true,
                  secure: process.env.NODE_ENV === "production",
                  sameSite:
                        process.env.NODE_ENV === "production"
                              ? "none"
                              : "strict",
                  maxAge: 24 * 60 * 60 * 1000,
            });
            const mailOptions = {
                  from: process.env.SENDER_EMAIL,
                  to: email,
                  subject: "Welcome to Trazler",
                  text: `Hello ${name},\n\nThank you for registering with Trazler. We are excited to have you on board!\n\n
                  Your account ${email} has been created successfully. You can now log in using your email and password.\n\n
                  Best regards,\nTrazler Team`,
            };
            await transporter.sendMail(mailOptions);
            return res.status(201).json({
                  success: true,
                  message: "User registered successfully",
                  user: {
                        id: user._id,
                        name: user.name,
                        email: user.email,
                  },
            });
      } catch (error) {
            return res.status(500).json({
                  success: false,
                  message: "Internal Server error",
                  error: error.message,
            });
      }
};

export const loginUser = async (req, res) => {
      const { email, password } = req.body;
      console.log("Login request received:", { email, password: password ? "***" : "missing" });
      
      if (!email || !password) {
            console.log("Missing credentials - email:", !!email, "password:", !!password);
            return res.json({
                  success: false,
                  message: "Email and Password are required",
            });
      }
      try {
            const user = await User.findOne({ email }).select("+password");
            if (!user) {
                  return res.json({
                        success: false,
                        message: "User not found",
                  });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                  return res.json({
                        success: false,
                        message: "Invalid credentials",
                  });
            }
            const jwtToken = jwt.sign(
                  { id: user._id },
                  process.env.JWT_SECRET,
                  {
                        expiresIn: "1d",
                  }
            );
            res.cookie("token", jwtToken, {
                  httpOnly: true,
                  secure: process.env.NODE_ENV === "production",
                  sameSite:
                        process.env.NODE_ENV === "production"
                              ? "none"
                              : "strict",
                  maxAge: 24 * 60 * 60 * 1000,
            });
            
            console.log("Cookie set with token:", jwtToken.substring(0, 20) + "...");
            console.log("NODE_ENV:", process.env.NODE_ENV);
            console.log("Cookie options:", {
                  httpOnly: true,
                  secure: process.env.NODE_ENV === "production",
                  sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            });
            
            return res.status(200).json({
                  success: true,
                  message: "Login successful",
                  user: {
                        id: user._id,
                        name: user.name,
                        email: user.email,
                        isVerified: user.isVerified,
                  },
            });
      } catch (error) {
            return res.status(500).json({
                  success: false,
                  message: "Internal Server error",
                  error: error.message,
            });
      }
};

export const logoutUser = async (req, res) => {
      try {
            res.clearCookie("token", {
                  httpOnly: true,
                  secure: process.env.NODE_ENV === "production",
                  sameSite:
                        process.env.NODE_ENV === "production"
                              ? "none"
                              : "strict",
            });
            return res.status(200).json({
                  success: true,
                  message: "logout successful",
            });
      } catch (error) {
            return res.status(500).json({
                  success: false,
                  message: "Internal Server error",
                  error: error.message,
            });
      }
};
export const sendVerificationOtp = async (req, res) => {
      try {
            const userId = req.userId;
            if (!userId) {
                  return res.json({
                        success: false,
                        message: "User ID is required",
                  });
            }
            const user = await User.findById(userId);
            if (!user) {
                  return res.json({
                        success: false,
                        message: "User not found",
                  });
            }
            const otp = Math.floor(100000 + Math.random() * 900000).toString();
            user.verifyOtp = otp;
            user.verifyOtpExpires = Date.now() + 5 * 60 * 1000; // OTP valid for 10 minutes
            await user.save();

            const mailOptions = {
                  from: process.env.SENDER_EMAIL,
                  to: user.email,
                  subject: "Verification OTP",
                  text: `Your verification OTP is ${otp}. It is valid for 5 minutes.`,
            };
            await transporter.sendMail(mailOptions);

            return res.status(200).json({
                  success: true,
                  message: "OTP sent successfully",
            });
      } catch (error) {
            return res.status(500).json({
                  success: false,
                  message: "Internal Server error",
                  error: error.message,
            });
      }
};
export const verifyOtp = async (req, res) => {
      try {
            const userId = req.userId;
            const { otp } = req.body;
            if (!userId || !otp) {
                  return res.json({
                        success: false,
                        message: "Please provide user OTP",
                  });
            }
            const user = await User.findById(userId);
            if (!user) {
                  return res.status(200).json({
                        success: false,
                        message: "User not found",
                  });
            }
            if (user.verifyOtp !== otp || user.verifyOtp === "") {
                  return res.status(200).json({
                        success: false,
                        message: "Invalid OTP",
                  });
            }
            if (Date.now() > user.verifyOtpExpires) {
                  return res.json({
                        success: false,
                        message: "OTP has expired",
                  });
            }
            user.isVerified = true;
            user.verifyOtp = "";
            user.verifyOtpExpires = 0;
            await user.save();
            return res.status(200).json({
                  success: true,
                  message: "User verified successfully",
            });
      } catch (error) {
            return res.status(500).json({
                  success: false,
                  message: "Internal Server error",
                  error: error.message,
            });
      }
};
export const isAuthenticated = async (req, res) => {
      try {
            return res.status(200).json({
                  success: true,
                  message: "User is authenticated",
            });
      } catch (error) {
            return res.status(500).json({
                  success: false,
                  message: "Internal Server error",
                  error: error.message,
            });
      }
};
export const sendResetOtp = async (req, res) => {
      try {
            const { email } = req.body;
            console.log("Email received for reset OTP:", email);
            if (!email) {
                  return res.json({
                        success: false,
                        message: "Email is required",
                  });
            }
            const user = await User.findOne({ email });
            if (!user) {
                  return res.json({
                        success: false,
                        message: "User not found",
                  });
            }
            const otp = Math.floor(100000 + Math.random() * 900000).toString();
            user.resetOtp = otp;
            user.resetOtpExpires = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes
            await user.save();

            const mailOptions = {
                  from: process.env.SENDER_EMAIL,
                  to: user.email,
                  subject: "Password Reset",
                  text: `Your password reset OTP is ${otp}. Use this OTP to proceed with resetting your password.`,
            };
            await transporter.sendMail(mailOptions);

            return res.status(200).json({
                  success: true,
                  message: "OTP sent successfully",
            });
      } catch (error) {
            return res.status(500).json({
                  success: false,
                  message: "Internal Server error",
                  error: error.message,
            });
      }
};
export const resetPassword = async (req, res) => {
      try {
            const { email, otp, newPassword } = req.body;
            if (!email || !otp || !newPassword) {
                  return res.json({
                        success: false,
                        message: "Email, OTP and new password are required",
                  });
            }
            const user = await User.findOne({ email });
            // Debug: log the full user object to inspect resetOtp
            console.log("User object:", user);

            // If resetOtp is empty, it means either OTP was not set or has already been used/reset.
            // You may want to check if you are calling sendResetOtp before resetPassword,
            // and ensure that user.save() is successful after setting resetOtp in sendResetOtp.
            if (!user) {
                  return res.json({
                        success: false,
                        message: "User not found",
                  });
            }
            console.log("OTP IS" + otp);
            console.log("Mongo OTP is" + user.resetOtp);
            if (user.resetOtp !== otp || user.resetOtp === "") {
                  return res.json({
                        success: false,
                        message: "Invalid OTP",
                  });
            }
            if (Date.now() > user.resetOtpExpires) {
                  return res.json({
                        success: false,
                        message: "OTP has expired",
                  });
            }
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            user.password = hashedPassword;
            user.resetOtp = "";
            user.resetOtpExpires = 0;
            await user.save();
            return res.status(200).json({
                  success: true,
                  message: "Password reset successfully",
            });
      } catch (error) {
            return res.status(500).json({
                  success: false,
                  message: "Internal Server error",
                  error: error.message,
            });
      }
};

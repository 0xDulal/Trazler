import express from 'express';
import cors from 'cors';
import { isAuthenticated, loginUser, logoutUser, registerUser, resetPassword, sendResetOtp, sendVerificationOtp, verifyOtp } from '../controller/authContollers.js';
import userAuth from '../Middleware/userAuth.js';

const authRoutes = express.Router();

authRoutes.post('/register', registerUser);

authRoutes.post('/login', loginUser);

authRoutes.post('/logout', logoutUser);

authRoutes.post('/send-verification-email', userAuth, sendVerificationOtp);

authRoutes.post('/verify-account', userAuth, verifyOtp);
authRoutes.get('/is-auth', userAuth, isAuthenticated);
authRoutes.post('/send-reset-otp', sendResetOtp);
authRoutes.post('/reset-password', resetPassword);

export default authRoutes;


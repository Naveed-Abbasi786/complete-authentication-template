import { Router } from "express";
import {
  forgetPassword,
  login,
  logout,
  refreshToken,
  registerUser,
  resendOtp,
  resetPassword,
  verifyUser,
} from "../controllers/auth.controller.js";
import { verifyJwt } from "../middlewears/auth.middlewares.js";

const router = Router();

// 👤 Normal Auth Routes
router.post("/register", registerUser);
router.post("/verify-otp", verifyUser);
router.post("/resend-otp", resendOtp);
router.post("/login", login);
router.post("/logout", verifyJwt, logout);
router.post("/forget-Password", forgetPassword);
router.post("/reset-password", resetPassword);
router.post("/refresh-token", verifyJwt, refreshToken);

export default router;

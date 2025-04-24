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
import { upload } from "../middlewears/multer.middlewares.js";

const router = Router();

// 👤 Normal Auth Routes

router.post('/register', upload.single('avatar'), registerUser);
router.post("/verify-otp", verifyUser);
router.post("/resend-otp", resendOtp);
router.post("/login", login);
router.post("/logout", verifyJwt, logout);
router.post("/forget-Password", forgetPassword);
router.post("/reset-password", resetPassword);
router.post("/refresh-token", refreshToken);

export default router;

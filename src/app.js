import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config({ path: "./.env" });

export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());




// Routes
import userRoutes from "./routes/auth.route.js";

app.use("/api/auth", userRoutes);


import errorHandler from "./middlewears/errorHandler.js";
app.use(errorHandler);
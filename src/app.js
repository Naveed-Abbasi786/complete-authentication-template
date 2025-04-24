import errorHandler from "./middlewears/errorHandler.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config({ path: "./.env" });

export const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());
app.use(errorHandler);




// Routes
import userRoutes from "./routes/user.route.js";

app.use("/api/auth", userRoutes);


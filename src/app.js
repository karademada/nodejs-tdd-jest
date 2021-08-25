import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import connectDB from "./config/db";

// eslint-disable-next-line import/extensions
import mainRouter from "./api/mainRouter";

const app = express();
connectDB();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use("/search", searchRouter);
// app.use("/user", userRouter);
app.use("/api/v1", mainRouter);

export default app;

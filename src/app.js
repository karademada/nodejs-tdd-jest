import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import connectDB from "./config/db";

// eslint-disable-next-line import/extensions
import searchRouter from "./components/search/routes";

const app = express();
connectDB();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/search", searchRouter);

export default app;

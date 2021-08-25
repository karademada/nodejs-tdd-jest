import express from "express";
import searchRouter from "../components/search/searchRouter";
import userRouter from "../components/user/userRouter";

const mainRouter = express.Router();

mainRouter.use("/sourates", searchRouter);
mainRouter.use("/users", userRouter);

export default mainRouter;

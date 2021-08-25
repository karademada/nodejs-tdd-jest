import { Router } from "express";
import {
  register, login, findAll, findOne, deleteUser, update,
} from "./userController";

const router = Router();

/* GET users listing. */
router.post("/register", register);
router.post("/login", login);
router.get("/", findAll);
router.post("/:userId", findOne);
router.put("/:userId", update);
router.delete("/:userId", deleteUser);

export default router;

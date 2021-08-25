import { Router } from "express";
import { findAll, findAyatByID, findSourateBySuraID } from "./searchController";

const router = Router();

/* GET users listing. */
router.get("/", findAll);
router.get("/ayat/:id", findAyatByID);
router.get("/:id", findSourateBySuraID);

export default router;

import { Router } from "express";
import {
  findAll, findAyatByID, findSourateBySuraID, searchSourateByText,
} from "./searchController";

const router = Router();

/* GET users listing. */
router.get("/search", searchSourateByText);
router.get("/", findAll);
router.get("/ayat/:id", findAyatByID);
router.get("/:id", findSourateBySuraID);

export default router;

import { Router } from "express";
import { searchController, sourateByIdController } from "./controller";

const router = Router();

/* GET users listing. */
router.get("/", searchController);
router.get("/:id", sourateByIdController);

export default router;

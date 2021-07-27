import { Router } from "express";

const router = Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.send({ title: "API TDD JEST Express" });
});

export default router;

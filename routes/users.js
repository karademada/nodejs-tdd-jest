import { Router } from "express";

const router = Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send({ data: "respond with a resource" });
});

export default router;

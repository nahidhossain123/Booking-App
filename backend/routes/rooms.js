import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello get api");
});

export default router;

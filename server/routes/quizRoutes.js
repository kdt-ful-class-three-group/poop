import express from "express";
import quizData from "../../database/seed.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(quizData);
});

export default router; 
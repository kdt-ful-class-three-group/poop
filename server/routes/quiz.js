import express from "express";
import pool from "../config/database.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM QUIZ");
    res.json(rows);
    console.log(rows);
  } catch (error) {
    console.error(error);
  }
});



+router.post("/", async (req, res) => {
  const { question, answer } = req.body;

  try {
    const query = "INSERT INTO quiz(question, answer) VALUES (?, ?)";
    const [result] = await pool.query(query, [ question, answer]);

    res
        .status(201)
        .json({ success: true, quiz: {  question, answer } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, msg: "서버 오류" });
  }
});

export default router;




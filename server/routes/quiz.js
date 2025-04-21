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

export default router;

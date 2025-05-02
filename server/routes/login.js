// server/routes/login.js
import express from "express";
import pool from "../config/database.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM USER");
    res.json(rows);
    console.log(rows);
  } catch (error) {
    console.error(error);
  }
});

router.post("/check-username", async (req, res) => {
  const { username } = req.body;
  try {
    const [rows] = await pool.query("SELECT * FROM USER WHERE user_id = ?", [username]);
    if (rows.length > 0) {
      res.json({ available: false });
    } else {
      res.json({ available: true });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 오류" });
  }
});

export default router;
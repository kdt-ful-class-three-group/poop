import express from "express";
import pool from "../config/database.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.execute("SELECT * FROM HORROR");
    res.json(rows);
  } catch (error) {
    console.error(error);
  }
});

export default router;
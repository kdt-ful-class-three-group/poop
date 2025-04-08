import pool from "../config/database.js";
import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM poopdb");
    req.json(rows);
    console.log(rows);
  } catch (error) {}
});

export default router;

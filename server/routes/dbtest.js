import pool from "../config/database.js";
import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM BOOKMARK");
    res.json(rows);
    console.log(rows);
    // res.send("Hello World");
  } catch (error) {
    console.error(error);
  }
});

export default router;

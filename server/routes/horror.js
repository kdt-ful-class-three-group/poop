import express from "express";
import pool from "../config/database.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM horror");
    res.json(rows);
    console.log(rows);
  } catch (error) {
    console.error(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const {question, answer} = req.body;
    console.log(question, answer);
    pool.query('INSERT INTO horror (question, answer) VALUES (?, ?)', question, answer);
  } catch (error) {
    console.error(error);
  }
})

export default router;
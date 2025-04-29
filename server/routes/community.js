import express from "express";
import pool from "../config/database.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM BOARD");
    res.json(rows);
    console.log(rows);
  } catch (error) {
    console.error(error);
  }
});


// 글 작성 (INSERT)
router.post("/write", async (req, res) => {
  const { user_id, title, content } = req.body;

  console.log('글 작성 요청 :', user_id);

  try {
    await pool.execute('INSERT INTO BOARD (user_id, title, content) VALUES (?, ?, ?)', [user_id, title, content]);
    res.status(200).json({ message: "글 작성 완료" });
  } catch (error) {
    console.error('글 작성 중 오류 발생:', error);
    res.status(500).json({ message: "글 작성 중 오류가 발생했습니다." });
  }
});


export default router;
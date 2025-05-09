// route/community.js

import express from 'express';
import pool from "../config/database.js";
const router = express.Router();

router.get("/post", async (req, res) => {
  try {
    const [posts] = await pool.execute("SELECT * FROM board"); 
    res.status(200).json(posts);  // posts를 보내야 함
    console.log("게시글 데이터", posts);  // 디버깅용
  } catch (err) {
    console.error("Community get error:", err);
    res.status(500).json({
      success: false,
      msg: "서버 내부 에러"
    });
  }
});

router.get('/post/:board_id', async (req, res) => {
  const board_id = req.params.board_id;

  try {
    const [result] = await pool.execute(
      `SELECT board.*, user.user_nick
       FROM board
       JOIN user ON board.user_id = user.id
       WHERE board.board_id = ?`,
      [board_id]
    );

    if (result.length === 0) {
      return res.status(404).json({ success: false, message: "게시글 없음" });
    }

    res.status(200).json(result[0]);
  } catch (err) {
    console.error("Community detail get error:", err);
    res.status(500).json({ success: false, message: "DB 오류" });
  }
});


router.post("/write", async (req, res) => {
  const { title, content, user_id, date } = req.body;
  console.log("글쓰기 요청 body:", req.body);

  try {
    await pool.execute(
      `INSERT INTO board (title, content, user_id, date) VALUES (?, ?, ?, ?)`,
      [title, content, user_id, date]
    );
    res.status(200).json({ msg: "성공" });
  } catch (err) {
    console.error("글 등록 오류:", err);
    res.status(500).json({ msg: "서버 오류" });
  }
});


export default router;
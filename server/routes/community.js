// route/community.js

import express from 'express';
import pool from "../config/database.js";
const router = express.Router();

// ✅ 게시글 전체 목록 조회 (user_nick 포함)
router.get("/post", async (req, res) => {
  try {
    const [posts] = await pool.execute(`
      SELECT board.*, user.user_nick 
      FROM board 
      JOIN user ON board.user_id = user.id
      ORDER BY board.board_id DESC
    `);
    res.status(200).json(posts);
  } catch (err) {
    console.error("Community get error:", err);
    res.status(500).json({ success: false, msg: "서버 내부 에러" });
  }
});

// ✅ 게시글 상세 조회 (user_nick 포함)
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

// ✅ 게시글 작성
router.post("/write", async (req, res) => {
  const { title, content, user_id, date } = req.body;

  try {
    await pool.execute(
      `INSERT INTO board (title, content, user_id,  date) VALUES (?, ?, ?, ?)`,
      [title, content, user_id,  date]
    );
    res.status(200).json({ msg: "성공" });
  } catch (err) {
    console.error("글 등록 오류:", err);
    res.status(500).json({ msg: "서버 오류" });
  }
});

export default router;

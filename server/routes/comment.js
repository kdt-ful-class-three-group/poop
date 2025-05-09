import express from "express";
import pool from "../config/database.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { board_id } = req.query;
  console.log("댓글 요청", { board_id }); // 디버깅용 로그

  try {
    const [comment] = await pool.execute(
      "SELECT * FROM comment WHERE board_id = ?",
      [board_id]
    );
    res.status(200).json(comment);
    console.log("댓글 데이터", comment); // 디버깅용 로그
  } catch (err) {
    console.error("댓글 조회 실패", err);
    res.status(500).json({
      success: false,
      msg: "서버 내부 에러",
    });
  }
});

router.post("/write", async (req, res) => {
  const { content, user_id, board_id } = req.body;
  console.log("작성 요청:", { content, user_id, board_id }); // 디버깅용 로그

  try {
    // board_id가 유효한지 확인
    const [board] = await pool.execute(
      "SELECT * FROM board WHERE board_id = ?",
      [board_id]
    );
    if (board.length === 0) {
      return res
        .status(400)
        .json({ success: false, msg: "유효하지 않은 board_id입니다." });
    }

    // 댓글 저장 (board_id 포함)
    await pool.execute(
      "INSERT INTO comment(content, user_id, board_id) VALUES(?, ?, ?)", // 3개의 컬럼
      [content, user_id, board_id] // 3개의 값
    );
    return res.status(200).json({ msg: "댓글 작성 성공" });
  } catch (err) {
    console.error("댓글 작성 실패:", err);
    res.status(500).json({
      success: false,
      msg: "서버 내부 에러",
    });
  }
});
export default router;

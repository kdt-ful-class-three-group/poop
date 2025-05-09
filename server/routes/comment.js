import express from "express";
import pool from "../config/database.js";

const router = express.Router();



router.get("/", async (req, res) => {
  const { board_id } = req.query;
  console.log("댓글 요청", { board_id }); // 디버깅용 로그

  try {
    const [comment] = await pool.execute(`
      SELECT c.comment_id AS id, c.content, c.date, u.user_nick, u.user_id
      FROM comment AS c
      JOIN user AS u ON c.user_id = u.id
      WHERE c.board_id = ?
    `, [board_id]);

    res.status(200).json(comment);
    console.log("댓글 데이터", comment); // 디버깅용 로그
  } catch (err) {
    console.error("댓글 조회 실패", err);
    res.status(500).json({
      success: false,
      msg: "서버 내부 에러"
    });
  }
})




router.post("/write", async (req, res) => {
  const {content, user_id, board_id} = req.body;
  console.log("작성 요청:", {user_id, content, board_id }); // 디버깅용 로그

  try{
    await pool.execute(
      "INSERT INTO comment(user_id, content, board_id ) VALUES(?, ?, ?)",
      [user_id, content, board_id]
    );
    return res.status(200).json({ msg: "댓글 작성성공" });



  } catch(err){
    console.error("댓글 작성 실패:", err);
    res.status(500).json({
      success: false,
      msg: "서버 내부 에러"
    });
  }

});

export default router;
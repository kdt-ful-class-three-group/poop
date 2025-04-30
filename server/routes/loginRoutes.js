import express from "express";
import pool from "../config/database.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { user_id, password } = req.body;
    console.log("데이터", { user_id, password });

    const [rows] = await pool.execute(
      "SELECT * FROM user WHERE user_id = ? AND password = ?",
      [user_id, password]
    );
    if (rows.length > 0) {
      req.session.user = {
        id: rows[0].id,
        user_id: rows[0].user_id,
        user_nick: rows[0].user_nick,
      };
      console.log("세션", req.session.user);
      return res.status(200).json({
        success: true,
        msg: "로그인 성공",
        user_nick: rows[0].user_nick,
      });
    } else {
      return res.status(401).json({ success: false, msg: "로그인 실패" });
    }
  } catch (err) {
    console.error("로그인 error", err);
    res.status(500).json({
      success: false,
      msg: "서버 내부 에러",
    });
  }
});

export default router;

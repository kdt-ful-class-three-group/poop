import express from "express";
import pool from "../config/database.js";
import bcrypt from "bcryptjs";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { user_id } = req.query;

    console.log("user_id:", user_id); // 디버깅용 로그

    const result = await pool.query("SELECT * FROM users WHERE user_id = $1", [user_id]);

    if (result.rows.length > 0) {
      return res.status(400).json({ msg: "이미 존재하는 사용자입니다." });
    }
    return res.status(200).json({ msg: "사용 가능한 사용자입니다." });
  } catch (err) {
    console.error("Error fetching users:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});


router.get("/check-nick", async (req, res) => {
  try {
    const { user_nick } = req.query;

    console.log("user_nick:", user_nick); // 디버깅용 로그

    const result = await pool.query("SELECT * FROM users WHERE user_nick = $1", [user_nick]);

    if (result.rows.length > 0) {
      return res.status(400).json({ msg: "이미 존재하는 닉네임입니다." });
    }
    return res.status(200).json({ msg: "사용 가능한 닉네임입니다." });
  } catch (err) {
    console.error("Error fetching users:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { user_id, password, email, user_nick, gender, birth_date } = req.body;

    console.log("Register attempt:", {
      user_id,
      password,
      email,
      user_nick,
      gender,
      birth_date,
    }); // 디버깅용 로그

    // 비밀번호 해싱
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // user 테이블에 데이터 삽입
    await pool.query(
      "INSERT INTO users (user_id, password, email, user_nick, gender, birth_date) VALUES ($1, $2, $3, $4, $5, $6)",
      [user_id, hashedPassword, email, user_nick, gender, birth_date]
    );

    const result = await pool.query("SELECT max(id) FROM users");
    // 삽입된 데이터의 id 가져오기
    const userIdFromDb = result.rows[0].max;

    // user_connection 테이블에 데이터 삽입
    await pool.query(
      "INSERT INTO user_connection (user_id) VALUES ($1)",
      [userIdFromDb]
    );

    return res.status(200).json({ msg: "유저 추가성공" });
  } catch (err) {
    console.error("회원가입 실패 :", err);
    res.status(500).json({
      success: false,
      msg: "서버 내부 에러",
    });
  }
});

export default router;

import express from "express";
import pool from "../config/database.js";
import bcrypt from "bcryptjs";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { user_id } = req.query;

    console.log("user_id:", user_id); // 디버깅용 로그

    const [rows] = await pool.execute("SELECT * FROM user WHERE user_id =?", [
      user_id,
    ]);

    if (rows.length > 0) {
      return res.status(400).json({ msg: "이미 존재하는 사용자입니다." });
    }
    return res.status(200).json({ msg: "사용 가능한 사용자입니다." });
  } catch (err) {
    console.error("Error fetching users:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  const connection = await pool.getConnection();
  try {
    const { user_id, password, email, user_nick, gender, birth_date } =
      req.body;

    console.log("Register attempt:", {
      user_id,
      password,
      email,
      user_nick,
      gender,
      birth_date,
    }); // 디버깅용 로그

    await connection.beginTransaction(); // 트랜잭션 시작

    // 비밀번호 해싱
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // user 테이블에 데이터 삽입
    const [result] = await connection.execute(
      "INSERT INTO user (user_id, password, email, user_nick, gender, birth_date) VALUES (?, ?, ?, ?, ?, ?)",
      [user_id, hashedPassword, email, user_nick, gender, birth_date]
    );

    // 삽입된 데이터의 id 가져오기
    const userIdFromDb = result.insertId;

    // user_connection 테이블에 데이터 삽입
    await connection.execute(
      "INSERT INTO user_connection (user_id) VALUES (?)",
      [userIdFromDb]
    );

    await connection.commit(); // 트랜잭션 커밋

    return res.status(200).json({ msg: "유저 추가성공" });
  } catch (err) {
    await connection.rollback(); // 트랜잭션 롤백
    console.error("회원가입 실패 :", err);
    res.status(500).json({
      success: false,
      msg: "서버 내부 에러",
    });
  } finally {
    connection.release(); // 연결 반환
  }
});

export default router;

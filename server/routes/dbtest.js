import pool from "../config/database.js";
import express from "express";
const router = express.Router();
import bcrypt from "bcryptjs";


router.post("/", async (req, res) => {
  try {
    const {admin, password,} = req.body;
    console.log("Register attempt:", { admin, password }); // 디버깅용 로그

    const [adminTable] = await pool.execute(
        "SELECT * FROM admin WHERE admin_nick = ?",
        [admin]
    );
    if (adminTable.length > 0) {
      return res.status(400).json({ msg: "이미 존재하는 사용자입니다." });
    }

    if (!admin || !password) {
      return res.status(400).json({msg:"올바른 값을 입력해주세요"});
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const [result] = await pool.execute(
        "INSERT INTO admin (admin, password) VALUES (?, ?)",
        [admin, hashedPassword]

    );
    return res.status(200).json({
      msg: "회원가입 성공",
      admin
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      msg: "Server error"
    });
  }
});

export default router;

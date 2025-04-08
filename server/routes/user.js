import pool from "../config/database.js";
import express from "express";
const router = express.Router();
import bcrypt from "bcryptjs";

router.post("/", async (req, res) => {
    try {
        const { user_id, password, email, user_nick, gender, birth_date} = req.body;
        console.log("Register attempt:", {user_id, password})

        if (!user_id || !password || !email || !user_nick || gender === undefined || !birth_date) {
            return res.status(400).json({ msg: "필수 항목이 누락되었습니다." });
        }

        const [userTable] = await pool.execute(

            "SELECT * FROM user WHERE user_id = ?",
            [user_id]
        );
        if (userTable.length > 0) {
            return res.status(400).json({ msg: "이미 존재하는 사용자입니다." });
        }

        if (!user_id || !password) {
            return res.status(400).json({msg:"올바른 값을 입력해주세요"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const [result] = await pool.execute(
            "INSERT INTO user (user_id, password,email, user_nick, gender,birth_date) VALUES (?, ?,?, ?, ?, ?)",
            [user_id, hashedPassword, email, user_nick, gender,birth_date]
        );
        return res.status(200).json({
            msg: "회원가입 성공",
            user_id
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

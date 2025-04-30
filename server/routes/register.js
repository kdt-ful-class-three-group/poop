import express from "express";
import pool from "../config/database.js";
const router = express.Router();



router.post("/", async (req,res) => {

    try {
        const {user_id, password, email, user_nick, gender, birth_date} = req.body;
        console.log("Register attempt:", {user_id, password, email, user_nick, gender, birth_date}); // 디버깅용 로그


// userInsert
        await pool.execute(
            "INSERT INTO user (user_id, password, email, user_nick, gender, birth_date) VALUES (?, ?, ?, ?, ?, ?)",
            [user_id, password, email, user_nick, gender, birth_date]
        )

        return res.status(200).json({msg:"유저 추가성공"});

    } catch (err) {
        console.error("Register error:", err);
        res.status(500).json({
            success: false,
            msg: "서버 내부 에러"
        });
    }

}
);

export default router;





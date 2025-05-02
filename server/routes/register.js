import express from "express";
import pool from "../config/database.js";
const router = express.Router();






router.get("/", async (req, res) => {
    try {

        const {user_id} = req.query;

        console.log("user_id:", user_id); // 디버깅용 로그

        const [rows] = await pool.execute("SELECT * FROM user WHERE user_id =?",[user_id]);

        if (rows.length > 0) {
            return res.status(400).json({ msg: "이미 존재하는 사용자입니다." });
        }
        return res.status(200).json({ msg: "사용 가능한 사용자입니다." });


    } catch (err) {
        console.error("Error fetching users:", err);
        return res.status(500).json({ error: "Internal server error" });
    }
});




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





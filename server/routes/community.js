

import express from 'express';
import pool from "../config/database.js";
const router = express.Router();



router.post('/write', async (req, res) => {

    const {title, content, user_id} = req.body;
    console.log("Community write attempt:", {user_id, title, content}); // 디버깅용 로그

    try{
        await pool.execute(
        "INSERT INTO board(user_id, title, content) VALUES(?, ?, ?)",
        [user_id, title, content]
        );

        return res.status(200).json({msg:"글 작성성공"});

    }catch(err){
        console.error("Community write error:", err);
        res.status(500).json({
            success: false,
            msg: "서버 내부 에러"
        });
    }
});

export default router;
import express from "express";
import pool from "../config/database.js";
import bcrypt from "bcryptjs";

const router = express.Router();




router.post("/", async (req, res) => {

  try{
    const{user_id, password} = req.body;

    const[user]= await pool.execute(
      "SELECT * FROM user WHERE user_id = ?",
      [user_id]

    );

    if(!user_id || !password){
      console.error("로그인 시도시 값이 없음", { user_id, password });
    }


    if(user.length === 0){
      return res.status(400).json({ msg: "사용자를 찾을 수 없습니다." });

    }

    const users= user[0];

    if(!password || !users || !users.password){
      console.error("비교할 password가 없음", { password, users });
      return res.status(500).json({ msg: "서버 내부 오류: 비밀번호 없음" });
    }

    // 암호화된 비밀번호 비교 유효성
    const isMatch = await bcrypt.compare(password, users.password);
    if(!isMatch){
      return res.status(400).json({ msg: "비밀번호가 일치하지 않습니다." });
    }


    req.session.users={
      id:user_id
    }
    console.log("Login attempt:", { user_id, password }); // 디버깅용 로그


    console.log("로그인 성공", req.session.users);
    return res.status(200).json({
      msg: "로그인 성공",
      user_id: user_id,
    });




  } catch(err){
    console.error("로그인 실패", err);
    res.status(500).json({msg: "로그인 실패"});
  }
})

export default router;
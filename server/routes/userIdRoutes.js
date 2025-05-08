import express from "express";
import pool from "../config/database.js";
const app = express();
const router = express.Router();
app.use(express.json());
router.post("/", async (req, res) => {
  const { userName } = req.body;
  console.log(userName);
  try {
    // userInsert
    const [userNameTets] = await pool.execute(
      "SELECT * FROM user WHERE user_id = ?",
      [userName]
    );
    if (userNameTets.length > 0) {
      return res.status(200).json({ exists: true }); //* 중복된 값
    } else {
      return res.status(200).json({ exists: false }); //* 사용가능한 값
    }
  } catch (err) {
    console.error("아이디 중복 검사", err);
    res.status(500).json({
      success: false,
      msg: "서버 내부 에러",
    });
  }
});

export default router;

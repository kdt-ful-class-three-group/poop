import express from "express";
import pool from "../config/database.js";
const router = express.Router();

// 퀴즈 목록 가져오기
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM COMMON_SENSE");
    res.json(rows);
    console.log(rows);
  } catch (error) {
    console.error(error);
  }
});

// 퀴즈 등록하기
router.post("/", async (req, res) => {
 
 
  // 데이터 한개 넣기
  // const { question, answer } = req.body;
  
  // try {
  //   const query = "INSERT INTO common_sense (question, answer) VALUES (?, ?)";
  //   const [result] = await pool.query(query, [question, answer]);
  //   res.status(201).json({  message: "common_sense inserted successfully"});
  // } catch (error) {
  //   console.error("DB Insert Error:",error);
  //   res.status(500).json({ error: "Database error" });
  // }
  
  // 데이터 여러개 넣기
  const commonsenses = req.body;
  
  if (!Array.isArray(commonsenses)) {
    return res.status(400).json({ error: "받은 데이터의 형식 잘못 됨" });
  }
  
  try {
  const query = "INSERT INTO common_sense (question, answer) VALUES (?, ?)";
  
  for (const commonsense of commonsenses) {
    const { question, answer } = commonsense;
    await pool.query(query, [question, answer]);
  }
  
  res.status(201).json({ message: "commonsense inserted successfully" });
  }catch (error) {
  console.error("DB Insert Error:", error);
  res.status(500).json({ error: "Database error" });
  }
}
);


export default router;

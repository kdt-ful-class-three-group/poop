import express from "express";
import pool from "../config/database.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM HORROR");
    res.json(rows);
    console.log(rows);
  } catch (error) {
    console.error(error);
  }
});

router.post("/", async (req, res) => {
  
  // 하나의 데이터만 보내기
  // const {question, answer} = req.body;

  // try {
  //     const query = "INSERT INTO horror (question, answer) VALUES (?, ?)";
  //     const [result] = await pool.query(query, [question, answer]);
  //     res.status(201).json({massage: "HORROR inserted successfully"});
  // } catch(error) {
  //   console.error("DB Insert Error:", error); 
  //   res.status(500).json({error: "DB error"})
  // }

  // 여러개의 데이터 보내기
  const horrors = req.body;

  if(!Array.isArray(horrors)){
    return res.status(400).json({error: "받은 데이터 형식 잘못 됨" })
  }

  try {
    const query = "INSERT INTO horror (question, answer) VALUES(?,?)";

    for (const horror of horrors) {
      const { question, answer } = horror;
      await pool.query(query, [question, answer]);
    }

    // Send a success response after all inserts are completed
    res.status(201).json({ message: "HORROR data inserted successfully" });
  } catch (error) {
    console.error("DB Insert Error:", error);
    return res.status(500).json({ error: "DB error" });
  }


})


export default router;

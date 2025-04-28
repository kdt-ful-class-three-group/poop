import express from 'express'
import pool from '../config/database.js'
const router = express.Router()

// get으로 조회
router.get('/',async(req,res)=>{
  try{
    const [rows] = await pool.query("SELECT * FROM COMMON_SENSE")
    res.json(rows)
  }
  catch(err){
    console.error(err)
    res.status(500).json({error:'데이터 조회 실패'})
  }
})

//post로 데이터 추가
router.post('/',async(req,res)=>{
  const {question, answer} = req.body

  //값이 없을 때
  if(!question || !answer){
    return res.status(400).json({error:'값이 없음'})
  }

  try{
    const [rows] = await pool.query('INSERT INTO COMMON_SENSE VALUES (?,?)',[question,answer])
    // 성공시 응답
    res.status(201).json({message:'데이터 추가 완료'})
  }
  catch(err){
    console.error(err)
    res.status(500).json({error:'데이터 추가 실패'})
  }
})

export default router
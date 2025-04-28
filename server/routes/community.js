import express from 'express'
import pool from '../config/database.js'
const router = express.Router()

router.get('/',async(req,res)=>{
  try{
    const [rows] = await pool.execute('SELECT * FROM BOARD')
    res.json(rows)
  }
  catch(err){
    console.error(err)
    res.status(500).json({err:'데이터 조회 실패'})
  }
})

router.post('/',async(req,res)=>{

  const {title,content} = req.body
  try{
    const [rows] = await pool.execute('INSERT INTO BOARD (user_id,title,content) VALUES (?,?,?)',[2,title,content])
    res.status(201).json({message:'데이터 추가 완료'})
  }
  catch(err){
    console.error(err)
    res.status(500).json({error:'데이터 추가 실패'})
  }
})

export default router
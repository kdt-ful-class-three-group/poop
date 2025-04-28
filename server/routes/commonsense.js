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
    res.status(500).json({error:'server error'})
  }
})

//post로 데이터 추가
router.post('/',async(req,res)=>{
  try{

  }
  catch(err){

  }
})

export default router
//user_id,password 

import express from 'express'
import pool from '../config/database.js'
const router = express.Router()

//모든 데이터조회
router.get('/',async (req,res)=>{
  try{
    const [rows] = await pool.execute('SELECT * FROM USER')
    res.json(rows)
  }
  catch(err){
    console.error(err)
  }
})

//특정데이터 조회 - user_id로 확인
router.get('/:user_id',async(req,res)=>{
  const userId = req.params.user_id
  try{
    const [rows] = await pool.execute('SELECT user_id, password FROM USER WHERE user_id = ? ',[userId])
  }
  catch(err){

  }
})

//데이터 추가
router.post('/',async(req,res)=>{
  try{

  }
  catch(err){

  }
})

export default router
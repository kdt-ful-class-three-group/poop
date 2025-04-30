//user_id,password 

import express from 'express'
import pool from '../config/database.js'
const router = express.Router()

//모든 데이터조회
router.get('/',async (req,res)=>{
  try{

  }
  catch(err){

  }
})

//특정데이터 조회 - user_id로 확인
router.get('/:user_id',async(req,res)=>{
  try{

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
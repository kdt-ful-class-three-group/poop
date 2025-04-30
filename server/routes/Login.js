//user_id,password 

import express from 'express'
import pool from '../config/database.js'
const router = express.Router()

//모든 데이터조회
router.get('/',async (req,res)=>{
  try{
    const [rows] = await pool.execute('SELECT user_id,password FROM USER')
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

    //존재하지 않을 때 - 빈 배열 반환
    if(rows.length===0){
      return res.status(404).json({message:'사용자를 찾을 수 없음'})
    }

    //존재하면 한 명만 조회됨
    res.json(rows[0])
  }
  catch(err){
    console.error('DB user 조회 실패',err)
    res.status(500).json({message:'서버 에러'})
  }
})

//로그인 요청 처리
router.post('/login',async(req,res)=>{
  const {user_id, password} = req.body
  try{
    //조회
    const [rows] =await pool.execute('SELECT user_id FROM USER WHERE user_id=? AND password = ?',[user_id,password])

    //값이 없을 때

    //응답 - 세션에 저장

    //성공 - 반환
  }
  catch(err){

  }
})

export default router
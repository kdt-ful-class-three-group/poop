//createPool 가져오기
import pool from '../config/database.js'
//express
import express from 'express'
//router
const router = express.Router()

//데이터 조회
router.get('/',(req,res)=>{
  pool.query(`SELECT * FROM USER`,(err,results)=>{
    if(err){
      console.err('데이터 조회 오류 발생',err)
      return res.json({error:'서버 오류'})
    }
    res.json(results)
  })
})

//내보내기
export default router;
//createPool 가져오기
import pool from '../config/database.js'
//express
import express from 'express'
//router
const router = express.Router()

//데이터 조회
router.get('/',async(req,res)=>{
  try {
    const [rows] = await pool.query(`SELECT * FROM USER`)
    res.json(rows)
    // console.log('db',USER);
  } catch(err){
    console.log(err)
  }
  
})

//내보내기
export default router;
//express
import express from 'express'
const app = express()
//cors
import cors from 'cors'
app.use(cors())
//환경변수
import dotenv from 'dotenv'
dotenv.config()

//라우터
import dbtestRouter from './routes/dbtest.js'

//미들웨어 설정
app.use(express.json())

// 경로 /

// dbtest 라우터 사용


//포트
const PORT = process.env.SERVERPORT;

//실행
app.listen(PORT,()=>{
  console.log(`실행 : http://localhost:${PORT}`)
})
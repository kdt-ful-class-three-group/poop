import express from 'express'
import nodemailer from 'nodemailer'

//transport
import transport from '../utils/mail.js'

//라우터
const router = express.Router()

//인증 코드 전송
router.post('/sendCode',async(req,res)=>{
  const {email} = req.body

  //6자리 랜덤 코드
  const code = String(Math.floor(100000+Math.random()*90000))

  //세션에 저장
  req.session.authCode = code
  req.session.authEmail = email
  req.session.authExpire = Date.now() + 1000*60*5

  //메일 옵션
  const mailOptions = {
    from : process.env.EMAIL_USER,
    to : email,
    subject:'이메일 인증 코드',
    text: `인증 코드는 ${code} 입니다`
  }

  //실행 - 에러 처리
  try{
    await transport.sendMail(mailOptions)
    res.json({message:'이메일 발송 완료',code:code})
  }catch(err){
    console.error(err)
    res.status(500).json({message:'이메일 전송 실패'})
  }
})

//인증 코드 확인
router.post('/checkCode',(req,res)=>{
  // email & code
  const {email, code} = req.body
  //세션
  const {authCode, authEmail, authExpire} = req.session

  //값이 없을 때
  if(!authCode || !authEmail || !authExpire){
    return res.status(400).json({message:'인증 요청 없음'})
  }

  //만료기간
  if(Date.now()>authExpire){
    return res.status(400).json({message:'코드 만료'})
  }

  //조건에 해당할 때
  if(authCode===code && authEmail===email){
    req.session.authCode=null
    res.json({message:'인증 성공'})
  }else {
    res.status(400).json({message:'코드 불일치'})
  }
})

export default router
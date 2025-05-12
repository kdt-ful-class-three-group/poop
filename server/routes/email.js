// server/routes/email.js
import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/send", async (req, res) => {
  const { email } = req.body;

  // 이메일 인증코드 생성 (예: 6자리 랜덤 숫자)
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  req.session.verificationCode = code; // 세션에 저장
  req.session.email = email; // 세션에 이메일 저장

  const transporter = nodemailer.createTransport({
    service: "Gmail", // 또는 다른 SMTP
    auth: {
      user: process.env.EMAIL_ID, // .env에서 불러오는 이메일 주소
      pass: process.env.EMAIL_PW, // 앱 비밀번호 or 실제 비밀번호
    },
  });

  const mailOptions = {
    from: `"Your App Name" <${process.env.EMAIL_ID}>`,
    to: email,
    subject: "회원가입 이메일 인증 코드",
    text: `인증 코드는 ${code} 입니다.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, code: code });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "이메일 전송 실패" });
  }
});

router.post("/verify", (req, res) => {
  const { code } = req.body;

  if (req.session.verificationCode === code) {
    res.status(200).json({ success: true, message: "인증 성공" });
  } else {
    res.status(400).json({ success: false, message: "인증 실패" });
  }
});

export default router;

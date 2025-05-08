import express from "express";
import { sendEmail } from "../utils/mailUtil/mailer.js";
import session from "express-session";

const router = express.Router();

router.post("/", async (req, res) => {
  const { email } = req.body;
  const code = Math.floor(100000 + Math.random() * 900000).toString(); // 6자리 코드 생성


  req.session = req.session || {};
  req.session[email] = code;

  setTimeout(() => {
    delete req.session[email];

  }, 60000); // 5분 후 세션 삭제

  try {
    await sendEmail(email, code);
    res.status(200).json({
      success: true,}
    );


  } catch (err) {
    console.error("이메일 전송 실패:", err);
    res.status(500).json({ msg: "이메일 전송 실패" });
  }
});

router.post("/codeCheck", (req, res) => {
  const {code, email} = req.body;

  if (req.session?.[email] === code) {
    res.status(200).json({ msg: "인증 성공" });
    delete req.session[email];
  } else {
    res.status(400).json({ msg: "인증 실패" });
  }

})

export default router;
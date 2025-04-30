import express from "express";
// import pool from "../config/database.js";
const router = express.Router();

router.post("/", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("세션 삭제 오류 발생");
      return res.status(500).json({ success: false, msg: "세션 삭제 오류" });
    } else {
      res.clearCookie(); // 세션 쿠키 삭제
      console.log("세션 삭제 성공");
      return res.status(200).json({ success: true, msg: "로그아웃 성공" });
    }
  });
});
export default router;

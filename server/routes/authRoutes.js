import express from "express";
import pool from "../config/database.js";
const router = express.Router();

router.get("/check", async (req, res) => {
  if (req.session.user) {
    res.json({
      success: true,
      user: {
        id: req.session.user.id,
        user_nick: req.session.user.user_nick,
        user_email: req.session.user.user_email,
      },
    });
  } else{
    res.status(401).json({ success: false, msg: "로그인 필요" });
  }

})

export default router;
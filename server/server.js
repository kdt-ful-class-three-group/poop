// const express = require('express');
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import quiz from "./routes/quiz.js";
import register from "./routes/register.js";
import loginRoutes from "./routes/loginRoutes.js"; //* 로그인
import loginCheckRoutes from "./routes/loginCheckRoutes.js"; //* 세션 확인;
import logoutRoutes from "./routes/logoutRoutes.js"; //* 로그아웃
import commonsense from "./routes/commonsense.js";
import horror from "./routes/horror.js";
import community from "./routes/community.js";
import session from "express-session";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3030", // 클라이언트 도메인
    credentials: true, // 쿠키를 허용
  })
);
dotenv.config();

app.use(
  session({
    // secret: process.env.SESSION_SECRET,
    secret: "secretKey", // 암호화 키
    resave: false, // 세션 항상 저장할지
    saveUninitialized: true, // 초기화되지 않은 세션 저장할지
    cookie: {
      maxAge: 1000 * 60 * 60, // 1시간 유지 후 쿠키 삭제
    },
  })
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());

app.use("/quiz", quiz);
app.use("/register", register);
app.use("/sense", commonsense);
app.use("/horror", horror);
app.use("/community", community);
app.use("/login", loginRoutes);
app.use("/loginCheck", loginCheckRoutes);
app.use("/logout", logoutRoutes);

const PORT = process.env.SERVERPORT;
app.listen(PORT, () => {
  console.log("Server running on http://localhost:8080");
});

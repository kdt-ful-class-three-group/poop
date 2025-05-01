// const express = require('express');
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import quiz from "./routes/quiz.js";
import register from "./routes/register.js";
import commonsense from './routes/commonsense.js'
import horror from "./routes/horror.js"
import community from "./routes/community.js";
import login from './routes/Login.js'

//세션
import session from 'express-session'

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3030', //클라이언트 도메인
  credentials: true // 쿠키를 허용
}));
dotenv.config();

//세션 미들웨어
app.use(session({
  secret: process.env.SECRETKEY,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60
  }
}))

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());

app.use("/quiz", quiz);
app.use("/register", register);
app.use('/knowledge', commonsense)
app.use("/horror", horror);
app.use("/community", community);
app.use("/login", login);

const PORT = process.env.SERVERPORT;
app.listen(PORT, () => {
  console.log("Server running on http://localhost:8080");
});

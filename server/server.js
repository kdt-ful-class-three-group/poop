// server/server.js
// const express = require('express');
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import quiz from "./routes/quiz.js";
import register from "./routes/register.js";
import commonsense from './routes/commonsense.js'
import horror from "./routes/horror.js"
import community from "./routes/community.js";
import login from "./routes/login.js";
import email from "./routes/email.js";
import session from "express-session";


const app = express();
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3030"], // 나의 프론트 주소
  credentials: true, // 세션 쿠키 허용할 경우 꼭 필요
}))
dotenv.config();

app.use(session({
  secret: 'secret-key', // 세션 암호화 키
  resave: false,
  saveUninitialized: false,
  // 개발 환경에서는 false (HTTPS 아니면 true 하면 안 됨)
  cookie: {secure: false},
}));

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.use("/quiz", quiz);
app.use("/register", register);
app.use('/knowledge',commonsense)
app.use("/horror", horror);
app.use("/community", community);
app.use("/login", login);
app.use("/email", email);

const PORT = process.env.SERVERPORT;
app.listen(PORT, () => {
  console.log("Server running on http://localhost:8080");
});

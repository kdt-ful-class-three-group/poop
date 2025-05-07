// const express = require('express');
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import quiz from "./routes/quiz.js";
import register from "./routes/register.js";
import commonsense from './routes/commonsense.js'
import horror from "./routes/horror.js"
import community from "./routes/community.js";


//메일
import email from './routes/email.js'

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

//세션 & 메일설정
import sessionMiddleware from "./config/auth.js";
app.use(sessionMiddleware)

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());

app.use("/quiz", quiz);
app.use("/register", register);
app.use('/knowledge',commonsense)
app.use("/horror", horror);
app.use("/community", community);
app.use('/authEmail',email)

const PORT = process.env.SERVERPORT;
app.listen(PORT, () => {
  console.log("Server running on http://localhost:8080");
});

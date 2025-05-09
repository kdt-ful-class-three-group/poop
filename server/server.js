// const express = require('express');
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import quiz from "./routes/quiz.js";
import register from "./routes/register.js";
import commonsense from "./routes/commonsense.js";
import horror from "./routes/horror.js";
import community from "./routes/community.js";
import verify from "./routes/emailVerify.js";
import session from "express-session";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3030",
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SECRETKEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 5 * 60 * 1000, // 5분
      httpOnly: true,
      secure: false,
    },
  })
);

dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());

app.use("/quiz", quiz);
app.use("/register", register);
app.use("/knowledge", commonsense);
app.use("/horror", horror);
app.use("/community", community);
app.use("/verifyCode", verify);

const PORT = process.env.SERVERPORT;
app.listen(PORT, () => {
  console.log("Server running on http://localhost:8080");
});

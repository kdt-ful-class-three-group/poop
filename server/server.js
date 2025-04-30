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
import session from "express-session";

const app = express();
app.use(express.json());
dotenv.config();

app.use(cors(
  {
    origin: "http://localhost:3030",
    credentials: true,
    optionsSuccessStatus: 200
  }
));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 10000 * 60 * 60, // 10시간
    },
  })
)

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());

app.use("/quiz", quiz);
app.use("/register", register);
app.use('/sense',commonsense)
app.use("/horror", horror);
app.use("/community", community);
app.use("/login", login);

const PORT = process.env.SERVERPORT;
app.listen(PORT, () => {
  console.log("Server running on http://localhost:8080");
});

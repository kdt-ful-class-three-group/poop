// const express = require('express');
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbtest from "./routes/dbtest.js";
import quizRoutes from "./routes/quizRoutes.js";
import quiz from "./routes/quiz.js";


const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.get("/", (req, res) => {
  res.send("server.js인디 여기가 문제가 있는겨");
});

// app.get("/api/questions", (req, res) => {
//   res.json(quizData);
// });
app.use("/api/questions", quizRoutes);

app.use(express.json());

app.use("/quiz", quiz);

const PORT = process.env.SERVERPORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

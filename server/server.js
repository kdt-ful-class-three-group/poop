// const express = require('express');
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbtest from "./routes/dbtest.js";

// const router = express.Router();
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());

app.use("/dbtest", dbtest);

const PORT = process.env.SERVERPORT;
app.listen(PORT, () => {
  console.log("Server running on http://localhost:8080");
});

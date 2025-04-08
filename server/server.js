// const express = require('express');
import express from "express";
import cors from "cors";
import Router from "express";
import dotenv from "dotenv";
// const router = express.Router();
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.SERVERPORT;
app.listen(PORT, () => {
  console.log("Server running on http://localhost:8080");
});

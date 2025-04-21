import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("접속 테스트");
});

export default router;

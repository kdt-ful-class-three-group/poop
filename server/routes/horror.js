import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  console.log('라우터 접속 확인');
});

export default router;
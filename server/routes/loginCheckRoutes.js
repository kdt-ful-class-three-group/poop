import express from "express";

const router = express.Router();

router.get("/check", (req, res) => {
  if (req.session.user) {
    res.status(200).json({ loggedIn: true, user: req.session.user });
  } else {
    res.status(200).json({ loggedIn: false });
  }
});

export default router;

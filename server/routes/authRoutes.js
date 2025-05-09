router.post("/write", async (req, res) => {
  const { content, user_id, post_id, user_nick } = req.body; // post_id를 클라이언트로부터 받음
  console.log("작성 요청:", { user_id, content, post_id, user_nick }); // 디버깅용 로그

  try {
    // post_id를 기반으로 board_id 조회
    const [result] = await pool.execute(
      "SELECT board_id FROM board WHERE post_id = ?",
      [post_id]
    );

    if (result.length === 0) {
      return res.status(400).json({
        success: false,
        msg: "유효하지 않은 post_id입니다.",
      });
    }

    const board_id = result[0].board_id; // 조회된 board_id

    // 댓글 작성
    await pool.execute(
      "INSERT INTO comment(user_id, content, board_id, user_nick) VALUES(?, ?, ?, ?)",
      [user_id, content, board_id, user_nick]
    );

    return res.status(200).json({ msg: "댓글 작성 성공" });
  } catch (err) {
    console.error("댓글 작성 실패:", err);
    res.status(500).json({
      success: false,
      msg: "서버 내부 에러",
    });
  }
});
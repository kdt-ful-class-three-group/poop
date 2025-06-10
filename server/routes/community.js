import express from 'express';
import pool from "../config/database.js";
const router = express.Router();



router.get("/post", async (req, res) => {
  try {
    const result = await pool.query("SELECT board.*, users.user_nick AS nickname FROM board LEFT JOIN users ON board.user_id = users.id ORDER BY date DESC");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Community get error:", err);
    res.status(500).json({
      success: false,
      msg: "서버 내부 에러"
    });
  }
});

//특정 파일 조회
router.get('/post/:id', async (req, res) => {
  const id = req.params.id
  try {
    const result = await pool.query('SELECT board.*, users.user_nick AS nickname FROM board LEFT JOIN users ON board.user_id = users.id WHERE board_id=$1', [id])
    res.status(200).json(result.rows[0])
    console.log('데이터', result.rows[0]);
  }
  catch (err) {
    console.error("Community get error:", err);
    res.status(500).json({
      success: false,
      msg: "서버 내부 에러"
    });
  }
})

router.post('/write', async (req, res) => {
  const { title, content, user_id } = req.body;
  console.log("Community write attempt:", { user_id, title, content }); // 디버깅용 로그
  const strippedContent = content.replace(/<\/?p>/g, "");
  try {
    await pool.query(
      "INSERT INTO board(user_id, title, content) VALUES($1, $2, $3)",
      [user_id, title, strippedContent]
    );
    return res.status(200).json({ msg: "글 작성성공" });
  } catch (err) {
    console.error("Community write error:", err);
    res.status(500).json({
      success: false,
      msg: "서버 내부 에러"
    });
  }
});

//수정
router.put('/update/:id', async (req, res) => {
  //boarder_id
  const id = req.params.id
  const { title, content } = req.body

  //디버깅
  console.log('수정할 board_id', id)
  console.log('수정할 내용', req.body)

  try {
    await pool.query(`UPDATE board SET title = $1 ,content = $2 WHERE board_id=$3`, [title, content, id])
    return res.status(200).json({ msg: '글 수정 성공' })

  }
  catch (err) {
    console.log('err', err)
    res.status(500).json({
      success: false,
      msg: '서버 내부 에러'
    })
  }
})

//삭제
router.delete('/delete/:id', async (req, res) => {
  // board_id 가져오기
  const id = req.params.id

  //디버깅
  console.log('삭제할 board_id', id)

  try {
    await pool.query(`DELETE FROM board WHERE board_id=$1`, [id])
    return res.status(200).json({ msg: '글 삭제 성공' })
  }
  catch (err) {
    console.log('err', err)
    res.status(500).json({
      success: false,
      msg: '서버 내부 에러'
    })
  }
})

export default router;
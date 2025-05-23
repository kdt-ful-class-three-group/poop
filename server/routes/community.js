import express from 'express';
import pool from "../config/database.js";
const router = express.Router();



router.get("/post", async (req, res) => {
  try {
    const [post] = await pool.execute("SELECT board.*,   user.user_nick AS nickname FROM board LEFT JOIN user ON board.user_id = user.id ORDER BY date DESC");
    res.status(200).json(post);
    console.log("게시글 데이터", post); //디버깅용
  } catch (err) {
    console.error("Community get error:", err);
    res.status(500).json({
      success: false,
      msg: "서버 내부 에러"
    });
  }
});

//특정 파일 조회
router.get('/post/:id',async(req,res)=>{
  const id = req.params.id
  try{
    const [post] = await pool.execute('SELECT board.*, user.user_nick AS nickname FROM board LEFT JOIN user ON board.user_id = user.id WHERE board_id=?',[id])
    res.status(200).json(post)
    console.log('데이터',post)
  }
  catch(err){
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

  try {
    await pool.execute(
      "INSERT INTO board(user_id, title, content) VALUES(?, ?, ?)",
      [user_id, title, content]
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
router.put('/update/:id',async(req,res)=>{
  //boarder_id
  const id = req.params.id
  const {title, content} = req.body

  //디버깅
  console.log('수정할 board_id',id)
  console.log('수정할 내용', req.body)

  try{
    await pool.execute(`UPDATE board SET title = ? ,content = ? WHERE board_id=?`,[title, content,id])
    return res.status(200).json({msg:'글 수정 성공'})
    
  }
  catch(err){
    console.log('err',err)
    res.status(500).json({
      success:false,
      msg:'서버 내부 에러'
    })
  }
})

//삭제
router.delete('/delete/:id',async(req,res)=>{
  // board_id 가져오기
  const id = req.params.id

  //디버깅
  console.log('삭제할 board_id',id)

  try{
    await pool.execute(`DELETE FROM board WHERE board_id=?`,[id])
    return res.status(200).json({msg:'글 삭제 성공'})
  }
  catch(err){
    console.log('err',err)
    res.status(500).json({
      success:false,
      msg:'서버 내부 에러'
    })
  }
})

export default router;
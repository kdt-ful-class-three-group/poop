import express from 'express';
import pool from '../config/database.js'

const commentRouter = express.Router();

commentRouter.get('/test', async (req, res) => {
  const [data] = await pool.execute('SELECT * FROM comment');
  console.log(data);
  res.json(data);
})

export default commentRouter;
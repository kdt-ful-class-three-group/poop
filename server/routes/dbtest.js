import express from 'express';

const commentRouter = express.Router();

commentRouter.get('/test', (req, res) => {
  console.log('들어오는지 확인');
})

export default commentRouter;
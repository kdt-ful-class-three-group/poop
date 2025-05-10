//user_id,password

import express from 'express'
import pool from '../config/database.js'
import session from "express-session";
const router = express.Router()

//모든 데이터조회
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT user_id,password FROM user')
    res.json(rows)
  }
  catch (err) {
    console.error(err)
  }
})

//특정데이터 조회 - user_id로 확인
router.get('/:user_id', async (req, res) => {
  const userId = req.params.user_id
  try {
    const [rows] = await pool.execute('SELECT user_id, password FROM user WHERE user_id = ? ', [userId])

    //존재하지 않을 때 - 빈 배열 반환
    if (rows.length === 0) {
      return res.status(404).json({ message: '사용자를 찾을 수 없음' })
    }

    //존재하면 한 명만 조회됨
    res.json(rows[0])
  }
  catch (err) {
    console.error('DB user 조회 실패', err)
    res.status(500).json({ message: '서버 에러' })
  }
})

//로그인 요청 처리
router.post('/', async (req, res) => {
  const { id, user_id, password, autoLogin, } = req.body
  try {
    if (!user_id || !password) {
      return res.status(400).json({ success: false, message: '아이디와 비밀번호를 입력하세요' })
    }

    //조회
    const [rows] = await pool.execute('SELECT id, user_id, user_nick FROM user WHERE  user_id=? AND password = ?',
      [user_id, password])

    //값이 없을 때
    if (rows.length === 0) {
      return res.status(401).json({ success: false, message: '사용자가 존재하지 않습니다' })
    }

    //응답 - 세션에 저장

    //자동로그인 체크에 따른 만료시간 연장
    if (autoLogin) {
      //3일
      req.session.cookie.maxAge = 1000 * 60 * 60 * 24 * 3
    } else {
      //1시간
      req.session.cookie.maxAge = 1000 * 60 * 60
    }

    console.log('기간확인', req.session.cookie.maxAge)

    req.session.user = {
      id: rows[0].id,
      user_id: rows[0].user_id,
      user_nick: rows[0].user_nick,
    }
    console.log('세션 저장 확인', req.session.user)

    //성공 - 반환
    return res.json({ success: true, message: '로그인 성공', user: req.session.user })


  }
  catch (err) {
    console.error('로그인 처리 중 오류', err)
    return res.status(500).json({ success: false, message: '서버오류' })
  }
})

export default router

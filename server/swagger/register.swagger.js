/**
 * @swagger
 * /register:
 *   post:
 *     summary: 회원가입
 *     description: 새로운 사용자를 등록합니다.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: string
 *                 description: 유저 ID
 *               password:
 *                 type: string
 *                 description: 비밀번호
 *               email:
 *                 type: string
 *                 description: 이메일
 *               user_nick:
 *                 type: string
 *                 description: 닉네임
 *               gender:
 *                 type: integer
 *                 description: "성별 (0: 남성, 1: 여성)"
 *                 enum:
 *                   - 0
 *                   - 1
 *               birth_date:
 *                 type: string
 *                 format: date
 *                 description: 생년월일 (YYYY-MM-DD 형식)
 *     responses:
 *       200:
 *         description: 유저 추가 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: 유저 추가성공
 *       500:
 *         description: 서버 내부 에러
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 msg:
 *                   type: string
 *                   example: 서버 내부 에러
 */
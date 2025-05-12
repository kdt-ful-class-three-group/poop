## 실행 방법

프론트
`cd /client/ npm install npm run dev`
포트 3030에서 열리는지 확인

백
`cd /server/ npm install npm run dev`
포트 8080번에서 열리는지 확인

```

poop
├─ .DS_Store
├─ README.md
├─ client
│  ├─ .DS_Store
│  ├─ .env
│  ├─ README.md
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ img
│  │  │  ├─ arrowLeft.svg
│  │  │  ├─ arrowRight.svg
│  │  │  └─ poopNameImg.svg
│  │  ├─ index.html
│  │  └─ vite.svg
│  ├─ src
│  │  ├─ App.css
│  │  ├─ App.jsx
│  │  ├─ api
│  │  │  └─ fectchApi.js
│  │  ├─ assets
│  │  │  └─ react.svg
│  │  ├─ commonComponents
│  │  │  ├─ Menu.jsx
│  │  │  └─ Nav.jsx
│  │  ├─ components
│  │  │  ├─ BirthInput.jsx
│  │  │  ├─ Button.jsx
│  │  │  ├─ DetailModal.jsx
│  │  │  ├─ EasyLogin.jsx
│  │  │  ├─ Email.jsx
│  │  │  ├─ FindAccount.jsx
│  │  │  ├─ Input.jsx
│  │  │  ├─ LoginInput.jsx
│  │  │  ├─ NavButton.jsx
│  │  │  ├─ NavDiv.jsx
│  │  │  ├─ QuilEditor.jsx
│  │  │  ├─ QuizButton.jsx
│  │  │  ├─ QuizCard.jsx
│  │  │  ├─ QuizControl.jsx
│  │  │  ├─ Register.jsx
│  │  │  ├─ RegisterBirth.jsx
│  │  │  ├─ RegisterEmail.jsx
│  │  │  ├─ RegisterNickname.jsx
│  │  │  ├─ RegisterprevBtn.jsx
│  │  │  ├─ Terms.jsx
│  │  │  └─ ToastPopup.jsx
│  │  ├─ context
│  │  │  ├─ RegisterContext.jsx
│  │  │  └─ loginContext.jsx
│  │  ├─ hooks
│  │  ├─ index.css
│  │  ├─ layout
│  │  │  └─ Layout.jsx
│  │  ├─ main.jsx
│  │  ├─ pages
│  │  │  ├─ AllCategory.jsx
│  │  │  ├─ Community.jsx
│  │  │  ├─ CommunityDetail.jsx
│  │  │  ├─ Home.jsx
│  │  │  ├─ KnowledgeHorror.jsx
│  │  │  ├─ KnowledgeHorrorForm2.jsx
│  │  │  ├─ Login.jsx
│  │  │  ├─ Mypage.jsx
│  │  │  ├─ Quiz.jsx
│  │  │  ├─ Register.jsx
│  │  │  ├─ RegisterBirth.jsx
│  │  │  ├─ RegisterMain.jsx
│  │  │  ├─ RegisterNickname.jsx
│  │  │  ├─ Terms.jsx
│  │  │  └─ Write.jsx
│  │  └─ services
│  │     └─ poopTimeQuizApi.js
│  └─ vite.config.js
├─ database
│  └─ seed.js
└─ server
   ├─ .DS_Store
   ├─ .env
   ├─ config
   │  ├─ database.js
   │  └─ db-test.js
   ├─ middleware
   │  └─ authMiddleware.js
   ├─ models
   ├─ package-lock.json
   ├─ package.json
   ├─ routes
   │  ├─ Login.js
   │  ├─ authRoutes.js
   │  ├─ comment.js
   │  ├─ commonsense.js
   │  ├─ community.js
   │  ├─ dbtest.js
   │  ├─ email.js
   │  ├─ horror.js
   │  ├─ quiz.js
   │  └─ register.js
   ├─ server.js
   ├─ swagger
   │  └─ register.swagger.js
   └─ utils

```

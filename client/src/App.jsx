import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Community from "./pages/Community.jsx";
import CommunityDetail from "./pages/CommunityDetail.jsx";
import Home from "./pages/Home.jsx";
import Horror from "./pages/horror.jsx";
import KnowledgeHorrorForm2 from "./pages/KnowledgeHorrorForm2.jsx";
import Login from "./pages/Login.jsx";
import Quiz from "./pages/Quiz.jsx";
import Mypage from "./pages/Mypage.jsx";
import Admin from "./pages/Admin.jsx";
import Register from "./pages/Register.jsx";
import Layout from "./layout/Layout.jsx";
import Write from "./pages/Write.jsx";

import Nav from "./commonComponents/Nav.jsx";
import { useState } from "react";
function App() {
  const [showDom, setShowDom] = useState(false);
  return (
    <div className="App">
      <Router>
        <Home>
          <Routes>
            {/* Layout 없이 렌더링할 페이지들 */}
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/Community" element={<Community />} />
            <Route
              path="/Community/CommunityDetail"
              element={<CommunityDetail />}
            />
            <Route path="/Community/write" element={<Write />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Mypage" element={<Mypage />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Register" element={<Register />} />
            {/* Layout 적용 구간: path 가 "/KnowledgeHorror" 또는 "/Quiz" 인 경우에만 */}
            <Route
              element={<Layout showDom={showDom} setShowDom={setShowDom} />} // Layout에 상태 전달
            >
              <Route
                path="/KnowledgeHorrorForm2"
                element={<KnowledgeHorrorForm2 />}
              />
              <Route
                path="/Quiz"
                element={<Quiz showDom={showDom} setShowDom={setShowDom} />}
              />
              <Route
                path="/Knowledge"
                element={<Quiz showDom={showDom} setShowDom={setShowDom} />}
              />
              <Route
                path="/horror"
                element={<Horror showDom={showDom} setShowDom={setShowDom} />}
              />
            </Route>
          </Routes>
        </Home>
        <Nav />
      </Router>
    </div>
  );
}

export default App;

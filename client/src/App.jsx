import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Community from "./pages/Community.jsx";
import CommunityDetail from "./pages/CommunityDetail.jsx";
import Home from "./pages/Home.jsx";
import KnowledgeHorror from "./pages/KnowledgeHorror.jsx";
import KnowledgeHorrorForm2 from "./pages/KnowledgeHorrorForm2.jsx";
import Login from "./pages/Login.jsx";
import Quiz from "./pages/Quiz.jsx";
import Mypage from "./pages/Mypage.jsx";
import Admin from "./pages/Admin.jsx";
import Register from "./pages/Register.jsx";
import Terms from "./pages/Terms.jsx";
import Layout from "./layout/Layout.jsx";
import Write from "./pages/Write.jsx";
import RegisterBirth from "./pages/RegisterBirth.jsx";
import RegisterNickname from "./pages/RegisterNickname.jsx";
import AllCategory from "./pages/AllCategory.jsx";

import Nav from "./commonComponents/Nav.jsx";

function App() {
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
            <Route path="/Terms" element={<Terms />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/RegisterBirth" element={<RegisterBirth />} />
            <Route path="/RegisterNickname" element={<RegisterNickname />} />
            {/* Layout 적용 구간: path 가 "/KnowledgeHorror" 또는 "/Quiz" 인 경우에만 */}
            <Route element={<Layout />}>
              <Route path="/Quiz2" element={<AllCategory />} />
              <Route path="/KnowledgeHorror" element={<KnowledgeHorror />} />
              <Route
                path="/KnowledgeHorrorForm2"
                element={<KnowledgeHorrorForm2 />}
              />
              <Route path="/Quiz" element={<AllCategory />}/>
            </Route>
          </Routes>
        </Home>
        <Nav />
      </Router>
    </div>
  );
}

export default App;

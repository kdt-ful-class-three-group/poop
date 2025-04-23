import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Community from "./pages/Community.jsx";
import CommunityDetail from "./pages/CommunityDetail.jsx";
import Home from "./pages/Home.jsx";
import KnowledgeHorror from "./pages/KnowledgeHorror.jsx";
import Login from "./pages/Login.jsx";
import Quiz from "./pages/Quiz.jsx";
import Mypage from "./pages/Mypage.jsx";
import Admin from "./pages/Admin.jsx";
import Register from "./pages/Register.jsx";
import Terms from "./pages/Terms.jsx";
import Layout from "./layout/Layout.jsx";

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
            <Route path="/Login" element={<Login />} />
            <Route path="/Mypage" element={<Mypage />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Terms" element={<Terms />} />
            {/* Layout 적용 구간: path 가 "/KnowledgeHorror" 또는 "/Quiz" 인 경우에만 */}
            <Route element={<Layout />}>
              <Route path="/KnowledgeHorror" element={<KnowledgeHorror />} />
              <Route path="/Quiz" element={<Quiz />} />
            </Route>
          </Routes>
        </Home>
        <Nav />
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Community from './pages/Community.jsx';
import Home from './pages/Home.jsx';
import Horror from './pages/Horror.jsx';
import Knowledge from './pages/Knowledge.jsx';
import Login from './pages/Login.jsx';
import Quiz from './pages/Quiz.jsx';
import Mypage from './pages/Mypage.jsx';
import Admin from './pages/Admin.jsx';
import Register from './pages/Register.jsx';


function App() {

    return (
        <div className = "App">
            <Router>
                <Routes>
                    <Route path ="/" element={<Home />} />
                    <Route path="/Community" element={<Community />} />
                    <Router path="/Horror" element={<Horror />} />
                    <Router path="/Knowledge" element = {<Knowledge />} />
                    <Router path="/Login" element={<Login />} />
                    <Router path="/Quiz" element={<Quiz />} />
                    <Router path="/Mypage" element={<Mypage />} />
                    <Router path="/Admin" element={<Admin />} />
                    <Router path="/Register" element={<Register />} />
                </Routes>

            </Router>
        </div>
    )
}

export default App
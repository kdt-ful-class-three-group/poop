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
        <div className="App">
            
            <Router>
                <Routes>
                    <Route path ="/" element={<Home />} />
                    <Route path="/Community" element={<Community />} />
                    <Route path="/Horror" element={<Horror />} />
                    <Route path="/Knowledge" element = {<Knowledge />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Quiz" element={<Quiz />} />
                    <Route path="/Mypage" element={<Mypage />} />
                    <Route path="/Admin" element={<Admin />} />
                    <Route path="/Register" element={<Register />} />
                </Routes>

            </Router>
        </div>
    )
}

export default App
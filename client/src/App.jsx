import React from 'react';
import {BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Community from './pages/Community';
import Home from './pages/Home';
import Horror from './pages/Horror';
import Knowledge from './pages/Knowledge';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Mypage from './pages/Mypage';
import Admin from './pages/Admin';
import Register from './pages/Register';


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
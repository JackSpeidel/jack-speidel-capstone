import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAnimate } from "framer-motion";
import Nav from './components/Nav/Nav';
import Articles from './components/Articles/Articles';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import HomePage from './pages/HomePage/HomePage';
import Community from './pages/Community/Community';
import Support from './pages/Support/Support';

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const authToken = localStorage.getItem('authToken');

        if (authToken) {
            setIsLoggedIn(true);
        }
    })

  return (
    <div className="App">
        <BrowserRouter>
            < Nav />
            <Routes>
                <Route path='/' element= {< HomePage />}/>
                <Route path='/info' element={< Articles />}/>
                <Route path='/community' element={<Community />}/>
                <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/profile' element={<Profile 
                                                    isLoggedIn={isLoggedIn}
                                                    setIsLoggedIn={setIsLoggedIn} />}/>
                <Route path='/support' element={<Support />}/>
                {/* < BodyNav /> */}
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
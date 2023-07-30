import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAnimate } from "framer-motion";
import Nav from './components/Nav/Nav';
import BodyNav from './components/BodyNav/BodyNav';
import MainCards from './components/MainCards/MainCards';
import AboutUs from './components/AboutUs/AboutUs';
import Articles from './components/Articles/Articles';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import HomePage from './pages/HomePage/HomePage';
import Community from './pages/Community/Community';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            < Nav />
            <Routes>
                <Route path='/' element= {< HomePage />}/>
                <Route path='/info' element={< Articles />}/>
                <Route path='/community' element={<Community />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/profile' element={<Profile />}/>
                {/* < BodyNav /> */}
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
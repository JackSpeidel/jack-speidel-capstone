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

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            < Nav />
            <Routes>
                <Route path='/' element= {
                    <>
                        {/* < AboutUs /> */}
                        < Articles />
                    </>
                }/>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/profile' element={<Profile />}/>
                {/* < BodyNav /> */}
                {/* < MainCards /> */}
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
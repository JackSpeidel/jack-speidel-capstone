import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAnimate } from "framer-motion";
import Nav from './components/Nav/Nav';
import BodyNav from './components/BodyNav/BodyNav';
import MainCards from './components/MainCards/MainCards';
import AboutUs from './components/AboutUs/AboutUs';
import Articles from './components/Articles/Articles';
import Login from './pages/Login/Login';

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
                <Route path='/register' element={<div>register</div>}/>
                {/* < BodyNav /> */}
                {/* < MainCards /> */}
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
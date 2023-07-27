import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAnimate } from "framer-motion";
import Nav from './components/Nav/Nav';
import BodyNav from './components/BodyNav/BodyNav';
import MainCards from './components/MainCards/MainCards';
import AboutUs from './components/AboutUs/AboutUs';
import Articles from './components/Articles/Articles';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        < Nav/>
        {/* < AboutUs /> */}
        < Articles />
        {/* < BodyNav /> */}
        {/* < MainCards /> */}

      </BrowserRouter>
    </div>
  );
}

export default App;
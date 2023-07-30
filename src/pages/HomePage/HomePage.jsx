import './homePage.scss';
import AboutUs from '../../components/AboutUs/AboutUs';
import MainCards from '../../components/MainCards/MainCards';

const HomePage = () => {
  return (
    <div className='home-page'>
        <h1 className='home-page__heading'>welcome!</h1>
        <AboutUs />
        <MainCards />
    </div>
  )
}

export default HomePage
import './homePage.scss';
import AboutUs from '../../components/AboutUs/AboutUs';
import MainCards from '../../components/MainCards/MainCards';
import AnimatedWelcome from '../../components/AnimatedWelcome/AnimatedWelcome';
import { motion } from 'framer-motion';


const HomePage = () => {
    return (
        <div className='home-page'>
            < AnimatedWelcome text='Welcome to upLift!' />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
            >
                <AboutUs />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 5 }}
            >
                <section className='home-page__sub-container'>
                    <h2 className='home-page__subheading'>What are <em>you</em> here for today?</h2>
                </section>
                <MainCards />
            </motion.div>
        </div>
    )
}

export default HomePage
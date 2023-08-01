import './mainCards.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MainCards = () => {

    return (
        <motion.div className='cards'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.3 }}
        >
            <ul className='cards__list'>
                <Link className='cards__link' to={'/info'}>
                    <motion.li whileHover={{
                        scale: 1.1,
                        textShadow: '0px 0px 8px rgb(228, 228, 206)',
                        boxShadow: '0px 0px 8px rgb(228, 228, 206)'
                    }} className='cards__list-item'>information</motion.li>
                </Link>
                <Link className='cards__link' to='/community'>
                    <motion.li whileHover={{
                        scale: 1.1,
                        textShadow: '0px 0px 8px rgb(228, 228, 206)',
                        boxShadow: '0px 0px 8px rgb(228, 228, 206)'
                    }} className='cards__list-item'>community</motion.li>
                </Link>
            </ul>
        </motion.div>
    )
}

export default MainCards;
import './nav.scss';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useState } from 'react';
import user_profile from '../../assets/images/user-alt-1-svgrepo-com.svg'
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator';
import ScrollArrow from '../ScrollArrow/ScrollArrow';

const svgVariants = {
    hidden: { rotate: -360 },
    visible: { rotate: 0,
                transition: {duration: 3},        
    },
}

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 4,
            ease: 'easeInOut'
        },
    },
}


const Nav = () => {
    
    const [fix, setFix] = useState(false);
    
    const stickyNav = () => {
        if (window.scrollY >= 100) {
            setFix(true);
        } else {
            setFix(false);
        }
    }

    window.addEventListener('scroll', stickyNav);

    return (
        <div>
            <header id='nav' className={fix ? 'nav fixed' : 'nav'}>
                <section className='nav__left'>
                    <Link className='nav__text--no-decor' to="/"><motion.svg width="120px" height="120px" className='nav__logo'  viewBox="0 0 22 22" fill="rgb(228, 228, 206)" xmlns="http://www.w3.org/2000/svg"
                    variants={svgVariants}
                    initial='hidden'
                    animate='visible'
                    >
                        <motion.path d="M12.1296 17.8108L10 21H15L12.8704 17.8108M9.5 9.5C9.5 7.84315 10.3431 6.5 12 6.5M19 9C19 15 12.5 18 12.5 18C12.5 18 6 15 6 9C6 4.5 10 3 12.5 3C15 3 19 4.5 19 9Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants}/>
                    </motion.svg></Link>
                </section>
                <section className='nav__right'>
                    <ul className='nav__list'>
                        <Link className='nav__text--no-decor' to='/support'><li className='nav__list-item'>Support</li></Link>
                        <Link className='nav__text--no-decor' to='/login'><li className='nav__list-item'>Login</li></Link>
                        <Link className='nav__text--no-decor' to='/profile'><li className='nav__list-item'><img className='nav__user-image' src={user_profile} alt="" /></li></Link>
                    </ul>
                </section>
            </header>
        </div>
    )
}

export default Nav;
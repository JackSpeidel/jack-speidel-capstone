import './animatedPostWelcome.scss';
import {motion} from 'framer-motion';

const AnimatedPostWelcome = ({ text }) => {

    const letters = Array.from(text);

    const container = {
        hidden: {opacity: 0},
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.05 * i }
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: 'spring',
                damping: 40,
                stiffness: 100,
                repeat: 2,
            },
        },
        hidden: {
            opacity: 0,
            x: 50,
            y: -100,
            transition: {
                type: 'spring',
                damping: 40,
                stiffness: 100,
                repeat: 2
            }
        }
    }

    return (
        <motion.div
        variants={container}
        initial='hidden'
        animate='visible' className='welcome-post'
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index}>{letter}</motion.span>
            ))}
        </motion.div>
    )
}

export default AnimatedPostWelcome;
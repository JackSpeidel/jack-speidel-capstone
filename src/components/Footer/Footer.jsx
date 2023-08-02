import './footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <section className="footer__container">
            <div className='footer__column'>
                <h2 className='footer__heading'>About</h2>
                <h3 className='footer__subheading'>Mission Statement:</h3>
                <p className='footer__body'>We are here for the newly disabled, their friends and family members to help ease the transition between life as you knew it and the life you lead now.</p>
            </div>
            <div className='footer__column'>
                <h2 className='footer__heading'>Contact</h2>
                <Link className='footer__link' target='_blank' rel='noreferrer' to='https://github.com/JackSpeidel'>
                    <h3 className='footer__contact-subheading'>GitHub</h3>
                </Link>
                <Link className='footer__link' to=''>
                    <h3 className='footer__contact-subheading' target='_blank' rel='noreferrer' onClick={() => window.location = 'mailto:speideljackson@gmail.com'}>Contact Me</h3>
                </Link>
            </div>
        </section>
    </div>
  )
}

export default Footer
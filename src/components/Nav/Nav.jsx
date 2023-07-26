import './nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <div className='nav'>
        <section className='nav__left'>
            <h4>Logo goes here</h4>
        </section>
        <section className='nav__right'>
            <ul className='nav__list'>
                <li key={support} className='nav__list-item'>Support</li>
                <li key={login} className='nav__list-item'>Login</li>
            </ul>
        </section>
    </div>
  )
}

export default Nav;
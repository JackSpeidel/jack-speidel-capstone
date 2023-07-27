import './nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <header className='nav'>
        <section className='nav__left'>
            <Link className='nav__text--no-decor' to="/"><h4>Logo goes here</h4></Link>
        </section>
        <section className='nav__right'>
            <ul className='nav__list'>
                <Link className='nav__text--no-decor' to='/support'><li className='nav__list-item'>Support</li></Link>
                <Link className='nav__text--no-decor' to='/login'><li className='nav__list-item'>Login</li></Link>
            </ul>
        </section>
    </header>
  )
}

export default Nav;
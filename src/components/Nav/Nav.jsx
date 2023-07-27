import './nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <header className='nav'>
        <section className='nav__left'>
            <a className='nav__text--no-decor' href=""><h4>Logo goes here</h4></a>
        </section>
        <section className='nav__right'>
            <ul className='nav__list'>
                <a className='nav__text--no-decor' href=''><li className='nav__list-item'>Support</li></a>
                <a className='nav__text--no-decor' href=''><li className='nav__list-item'>Login</li></a>
            </ul>
        </section>
    </header>
  )
}

export default Nav;
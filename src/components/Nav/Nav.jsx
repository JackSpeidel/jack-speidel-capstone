import './nav.scss';
import { Link } from 'react-router-dom';
import balloon from '../../assets/images/balloon-svgrepo-com.svg'
import user_profile from '../../assets/images/user-alt-1-svgrepo-com.svg'

const Nav = () => {

  return (
    <header className='nav'>
        <section className='nav__left'>
            <Link className='nav__text--no-decor' to="/"><img className='nav__logo' src={balloon} alt="" /></Link>
        </section>
        <section className='nav__right'>
            <ul className='nav__list'>
                <Link className='nav__text--no-decor' to='/support'><li className='nav__list-item'>Support</li></Link>
                <Link className='nav__text--no-decor' to='/login'><li className='nav__list-item'>Login</li></Link>
                <Link className='nav__text--no-decor' to='/profile'><li className='nav__list-item'><img className='nav__user-image' src={user_profile} alt="" /></li></Link>
            </ul>
        </section>
    </header>
  )
}

export default Nav;
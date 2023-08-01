import './bodyNav.scss';
import { Link } from 'react-router-dom';

const BodyNav = () => {
  return (
    <div className='body-nav'>
        <ul className='body-nav__list'>
            <li className='body-nav__list-item'>articles</li>
            <li className='body-nav__list-item'>resources</li>
        </ul>
    </div>
  )
}

export default BodyNav;
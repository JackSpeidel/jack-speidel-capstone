import './bodyNav.scss';
import { Link } from 'react-router-dom';

const BodyNav = () => {
  return (
    <div className='body-nav'>
        <div id='articles' className='body-nav__articles'>
            <h5>articles</h5>
        </div>
        <div id='resources' className='body-nav__resources'>
            <h5>resources</h5>
        </div>
    </div>
  )
}

export default BodyNav;
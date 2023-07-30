import './mainCards.scss';
import { Link } from 'react-router-dom';

const MainCards = () => {
  return (
    <div className='cards'>
        <h2 className='cards__heading'>What are you here for?</h2>
        <ul className='cards__list'>
            <Link className='cards__link' to={'/info'}>
                <li className='cards__list-item'>information</li>
            </Link>
            <Link className='cards__link' to='/community'>
                <li className='cards__list-item'>community</li>
            </Link>
        </ul>
    </div>
  )
}

export default MainCards;
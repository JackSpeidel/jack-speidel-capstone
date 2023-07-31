import './profile.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MainCards from '../../components/MainCards/MainCards';

const apiUrl = "http://localhost:5050";

const Profile = () => {

    const [firstName, setFirstName] = useState("");
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    
    const token = sessionStorage.getItem('token')

    
    useEffect(() => {
        if(!token || "") {
            navigate('/login');
            return
        }

        const retrieveData = async () => {

            const { data } = await axios
            .get(`${apiUrl}/api/users/current`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setFirstName(data.first_name);
        }

        retrieveData();
    }, [])

    
    const handleLogout = () => {
        sessionStorage.removeItem('token');
        navigate('/Login');
    }

    return (
        <div className='profile'>
            <h1 className='profile__heading'>Welcome {firstName}!</h1>
            <h2 className='profile__subheading'>Where would you like to go?</h2>
            <div className='profile__cards'>
                < MainCards />
            </div>
            <section className='profile__logout-container'>
                <button className='profile__logout-button' onClick={handleLogout}>Logout</button>
            </section>
        </div>
    )
}

export default Profile
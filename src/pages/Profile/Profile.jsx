import './profile.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const apiUrl = "http://localhost:5050";

const Profile = () => {

    const [firstName, setFirstName] = useState("");
    
    useEffect(() => {
        
        const retrieveData = async () => {
            
            const token = sessionStorage.getItem('token')

            const { data } = await axios.get(`${apiUrl}/api/users/current`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            console.log(data)
            setFirstName(data.first_name);
        }

        retrieveData();
    }, [])

    return (
        <div>
            <h1>Welcome {firstName}!</h1>
        </div>
    )
}

export default Profile
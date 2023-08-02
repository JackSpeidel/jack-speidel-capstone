import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './register.scss';


const apiUrl = 'http://localhost:5050';

const Register = () => {

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;

        try {
            await axios.post(`${apiUrl}/api/users/register`, {
                first_name: form.first_name.value,
                last_name: form.last_name.value,
                email: form.email.value,
                password: form.password.value,
            });

            navigate('/login');

        } catch (error) {
            form.reset();
            setError(error.response.data)
        }
    }

    return (
        <div className='register__height'>
            <form className='register' onSubmit={handleSubmit} action="">
                <h1 className='register__heading'>Register</h1>
                <div className='register__1st-name-container'>
                    <label className='register__label' htmlFor="first-name" >
                        First Name:
                        <input className='register__input' name='first_name' type="text" id='first_name' placeholder="ex. Sir Thomas" />
                    </label>
                </div>
                <div className='register__last-name-container'>
                    <label className='register__label' htmlFor="last-name" >
                        Last Name:
                        <input className='register__input' name='last-name' type="text" id='last_name' placeholder="ex. de los Bunz" />
                    </label>
                </div>
                <div className='register__email-container'>
                    <label className='register__label' htmlFor="email" >
                        Email:
                        <input className='register__input' name='email' type="text" id='email' placeholder='Enter Spam Receiver Here' />
                    </label>
                </div>
                <div className='register__password-container'>
                    <label className='register__label' htmlFor="password" >
                        Password:
                        <input className='register__input' name='password' type="password" id='password' placeholder="🤐   🤐   🤐   🤐   🤐   🤐   🤐" />
                    </label>
                </div>
                <div className='register__button-container'>
                    <button className='register__button'>
                        Register
                    </button>
                    <p className='register__error'>{error}</p>
                </div>
            </form>
            <section className='register__login'>
                <Link className='register__login-link' to='/login'><button className='register__button' >Already have a profile? Go Login!</button></Link>
            </section>
        </div>
    )
}

export default Register
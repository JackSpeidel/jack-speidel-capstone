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
                password: form.password.value
            });

            navigate('/login');

        } catch (error) {
            event.target.reset();
            setError(error.response.data)
        }
    }

    return (
        <div>
            <form className='login' onSubmit={handleSubmit} action="">
                <h1 className='login__heading'>Register</h1>
                <div className='login__1st-name-container'>
                    <label htmlFor="first-name" >
                        First Name:
                        <input className='login__input' name='password' type="text" id='first_name' placeholder="ex. Sir Thomas" />
                    </label>
                </div>
                <div className='login__last-name-container'>
                    <label htmlFor="last-name" >
                        Last Name:
                        <input className='login__input' name='last-name' type="text" id='last_name' placeholder="ex. de los Bunz" />
                    </label>
                </div>
                <div className='login__email-container'>
                    <label htmlFor="email" >
                        Email:
                        <input className='login__input' name='email' type="text" id='email' placeholder='Enter Spam Receiver Here' />
                    </label>
                </div>
                <div className='login__password-container'>
                    <label htmlFor="password" >
                        Password:
                        <input className='login__input' name='password' type="password" id='password' placeholder="🤐   🤐   🤐   🤐   🤐   🤐   🤐" />
                    </label>
                </div>
                <div className='login__button-container'>
                    <button className='login__button'>
                        Register
                    </button>
                </div>
            </form>
            <section className='login__register'>
                <Link className='login__register-link' to='/login'><button>Already have a profile? Go Login!</button></Link>
            </section>
        </div>
    )
}

export default Register
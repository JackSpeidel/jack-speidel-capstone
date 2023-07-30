import './login.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const apiUrl = "http://localhost:5050";

const Login = () => {
    const navigate = useNavigate();

    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;

        try {
            const { data } = await axios.post(
                `${apiUrl}/api/users/login`,
                {
                    email: form.email.value,
                    password: form.password.value
                }
            );

            sessionStorage.setItem('token', data.token);
            
            navigate('/profile');
        } catch (error) {
            setError(error.response.data)
        }
    };

  return (
    <div className='login__container'>
        <form className='login' onSubmit={handleSubmit} action="">
            <h1 className='login__heading'>Log In</h1>
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
            <div>
                <button to='/profile'>Login</button>
            </div>
        </form>
        <section className='login__register'>
            <Link className='login__register-link' to='/register'><button>Need an Account? Click here to register</button></Link>
        </section>
    </div>
  )
}

export default Login
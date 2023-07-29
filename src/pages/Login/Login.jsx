import './login.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';


const Login = () => {
    const navigate = useNavigate();

    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await axios.post(
                'http://localhost:5050/api/users/login',
                {
                    email: event.target.email.value,
                    password: event.target.password.value
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
        </form>
        <section className='login__register'>
            <Link className='login__register-link' to='/register'><p>Need an Account? Click here to register</p></Link>
        </section>
    </div>
  )
}

export default Login
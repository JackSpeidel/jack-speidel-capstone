import './login.scss';  
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login'>
        <section className='login__register'>
            <Link className='login__register-link' to='/register'><p>Need an Account? Click here to register</p></Link>
        </section>
    </div>
  )
}

export default Login
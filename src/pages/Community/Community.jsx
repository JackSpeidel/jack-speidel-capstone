import './community.scss';
import { useEffect, useState } from 'react';
import AnimatedWelcome from '../../components/AnimatedWelcome/AnimatedWelcome';
import axios from 'axios';
import user_icon from '../../assets/images/user-svgrepo-com.svg';
import thaddeus from '../../assets/images/thaddeus_stevens_photo.webp'

const apiUrl = "http://localhost:5050";

const Community = () => {
    
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;

        if(!form.title || !form.content) {
            return alert('Please complete fields to log in') // <p>Please complete fields to log in</p>
        }

        try {
            await axios.post(`${apiUrl}/api/posts/post`, {
                title: form.title.value,
                content: form.content.value
            })
        } catch (error) {
            form.reset();
            setError(error)
        }
    }


    useEffect(() => {
        const retrievePosts = async () => {
            axios.get(`${apiUrl}/posts`)
        }
    })

  return (
    <div className='community'>
        <section className='community__header'>
            {/* < AnimatedWelcome className='community__welcome' text='Welcome to upLift!' /> */}
            <h1 className='community__title'>Welcome Welcome Welcome</h1>
            <h3 className='community__subheading'>Please use this space to post & respond to each other with any questions/comments you may have about being newly disabled.</h3>
        </section>
        <h3 className='community__post-heading'>We would love to hear from you</h3>
        <section className='community__post-form'>
            <form className='community__form' onSubmit={handleSubmit}>
                <label htmlFor="name">{}</label>
                <input className='community__form-title' placeholder='Title Your Post' wrap='hard' type='text' name='title' />
                <textarea className='community__form-text' wrap='hard' type="textarea" placeholder="What's on your mind?" name='content' />
                <button className='community__post-button'>Add a Post</button>
            </form>
        </section>
        <section className='community__posts'>
            <div className='community__post'>
                <img className='community__user-icon' src={user_icon} alt="user icon" />
                <h4 className='community__post-author'>Jack Speidel</h4>
                <p className='community__post-content'>Anyone out here looking for a shoe buddy? 👀</p>
            </div>
            <div className='community__post'>
                <img className='community__user-icon' src={thaddeus} alt="user icon" />
                <h4 className='community__post-author'>Thaddeus Stevens</h4>
                <p className='community__post-content'>I may be able to lend a hand. What's your shoe size?</p>
            </div>
        </section>

    </div>
  )
}

export default Community;
import './community.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import user_icon from '../../assets/images/user-svgrepo-com.svg'

const apiUrl = "http://localhost:5050";

const Community = () => {

    useEffect(() => {
        const retrievePosts = async () => {
            axios.get()
        }
    })

  return (
    <div className='community'>
        <section className='community__header'>
            <h1 className='community__title'>welcome welcome welcome</h1>
            <h3 className='community__subheading'>Please use this space to post & respond to each other with any questions/comments you may have about being newly disabled.</h3>
        </section>
        <section className='community__posts'>
            <div className='community__post'>
                <img className='community__user-icon' src={user_icon} alt="user icon" />
                <h4 className='community__post-author'>Jack Speidel</h4>
                <p className='community__post-content'>Anyone out here looking for a shoe buddy? 👀</p>
            </div>
            <div className='community__post'>
                <img className='community__user-icon' src={user_icon} alt="user icon" />
                <h4 className='community__post-author'>Django Reinhardt</h4>
                <p className='community__post-content'>I can give you a hand!</p>
            </div>
        </section>
        <section className='community__post-form'>
            <form className='community__form' action="">
                <label htmlFor="name">{}</label>
                <textarea className='community__form-text' wrap='hard' type="textarea" placeholder="What's on your mind?" />
                <button className='community__post-button'>Add a Post</button>
            </form>
        </section>
    </div>
  )
}

export default Community;
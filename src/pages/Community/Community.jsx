import './community.scss';
import { useEffect, useState } from 'react';
import AnimatedPostWelcome from '../../components/AnimatedPostWelcome/AnimatedPostWelcome';
import axios from 'axios';
import user_icon from '../../assets/images/user-svgrepo-com.svg';
import thaddeus from '../../assets/images/thaddeus_stevens_photo.webp'

const apiUrl = "http://localhost:5050";

const Community = () => {

    const [error, setError] = useState("");
    const [posts, setPosts] = useState([]);

    console.log(posts);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const token = sessionStorage.getItem("token");

        if (!token) {
            alert('Please login');
        }

        const form = event.target;

        if (!form.title.value || !form.content.value) {
            return alert('Please complete fields to post') // <p>Please complete fields to log in</p>
        }

        try {
            await axios.post(`${apiUrl}/api/posts/post`, {
                title: form.title.value,
                content: form.content.value,
            },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
        } catch (error) {
            form.reset();
            setError(error)
        }
        retrievePosts();
        form.reset();
    }

    const retrievePosts = async () => {
        const {data} = await axios.get(`${apiUrl}/api/posts`);
        setPosts(data);
    }

    useEffect(() => {
        retrievePosts();
    }, [])

    return (
        <div className='community'>
            <section className='community__header'>
                < AnimatedPostWelcome className='community__welcome' text='Welcome Welcome Welcome!' />
                <h3 className='community__subheading'>Please use this space to post & respond to each other with any questions/comments you may have about being newly disabled.</h3>
            </section>
            <h3 className='community__post-heading'>We would love to hear from you</h3>
            <section className='community__post-form'>
                <form className='community__form' onSubmit={handleSubmit}>
                    <label htmlFor="name">{ }</label>
                    <input className='community__form-title' placeholder='Title Your Post' wrap='hard' type='text' name='title' />
                    <textarea className='community__form-text' wrap='hard' type="textarea" placeholder="What's on your mind?" name='content' />
                    <button className='community__post-button'>Add a Post</button>
                </form>
            </section>
            <section className='community__posts'>
                {posts.map((post) => {
                    return (
                        <div key={post.id} className='community__post'>
                            <img className='community__user-icon' src={post.user_photo} alt="user icon" />
                            <h4 className='community__post-author'>{post.first_name} {post.last_name}</h4>
                            <p className='community__post-content'>{post.content}</p>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default Community;
import './articles.scss';
import amputee_with_bicycle from '../../assets/images/daniel-odame-ejKF-tWFMhw-unsplash.jpg';
import amputee_with_beer from '../../assets/images/elevate-GqC_kGJOuaM-unsplash.jpg';
import running_amputee from '../../assets/images/Flickr_-_The_U.S._Army_-_U.S._Army_World_Class_Athlete_Program_Paralympic.jpg';


const Articles = () => {
    return (
        <main className='articles'>
            <section className='articles__article'>
                <div className='articles__image-container'>
                    <img className='articles__image' src={amputee_with_beer} alt="" />
                </div>
                <article className='artciles__article-body'>
                    <h2 className='articles__heading'>Social Events with Compromised Mobility</h2>
                    <p className="articles__info">
                        <a className='articles__author' href="">Jack Speidel</a>
                        <time>2023-7-27 10:35</time>
                    </p>
                    <p className='articles__summary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat assumenda eaque iusto, asperiores deserunt facere incidunt. Accusantium laborum esse nemo omnis in eum modi quibusdam, temporibus cupiditate dolorum veritatis ut.</p>
                </article>
            </section>
            <section className='articles__article'>
                <div className='articles__image-container'>
                    <img className='articles__image' src={running_amputee} alt="" />
                </div>
                <article className='artciles__article-body'>
                    <h2 className='articles__heading'>Able: Exercising with Disability</h2>
                    <p className="articles__info">
                        <a className='articles__author' href="">Thaddeus Stevens</a>
                        <time>2023-7-27 10:35</time>
                    </p>
                    <p className='articles__summary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat assumenda eaque iusto, asperiores deserunt facere incidunt. Accusantium laborum esse nemo omnis in eum modi quibusdam, temporibus cupiditate dolorum veritatis ut.</p>
                </article>
            </section>
            <section className='articles__article'>
                <div className='articles__image-container'>
                    <img className='articles__image' src={amputee_with_bicycle} alt="" />
                </div>
                <article className='artciles__article-body'>
                    <h2 className='articles__heading'>Interview of Daniel Odame</h2>
                    <p className="articles__info">
                        <a className='articles__author' href="">Gordon Lightfoot</a>
                        <time>2023-7-27 10:35</time>
                    </p>
                    <p className='articles__summary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat assumenda eaque iusto, asperiores deserunt facere incidunt. Accusantium laborum esse nemo omnis in eum modi quibusdam, temporibus cupiditate dolorum veritatis ut.</p>
                </article>
            </section>
        </main>
    )
}

export default Articles
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
                    <p className='articles__summary'>In a world that never stops moving, navigating social events with compromised mobility may feel like sailing uncharted waters. But, what if I told you it's more achievable than you think? It's about embracing adaptability, celebrating your unique strength, and the will to stay connected despite physical limitations. Get ready to rediscover the joy of social life, where obstacles transform into opportunities for connection and growth, and your mobility doesn't confine your spirit or limit your social circle. Read on to explore tools, tips, and firsthand advice on how to make every social event a journey worth remembering.</p>
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
                    <p className='articles__summary'>Exercise is a universal pathway to health and vitality, and it's equally accessible to everyone, regardless of physical abilities. Embracing a fitness routine with a disability might present unique challenges, but it also offers profound rewards. Tailoring workouts to individual needs and capabilities is key. From adaptive yoga that nurtures both body and mind, to strength training customized to specific abilities, the options are diverse. Support networks, adaptive equipment, and knowledgeable trainers can make a world of difference. Remember, every step, stretch, or lift is a triumph, amplifying not just physical well-being, but also an unbreakable spirit.</p>
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
                    <p className='articles__summary'>In life's orchestration, some melodies reflect a struggle turned triumph; the story of our next guest, a resilient amputee, is one such symphony. Robbed of a limb but not of spirit, they redefined the possible, transforming adversity into fuel for an inspirational journey. Theirs is a tale of courage, perseverance, and overcoming the unthinkable.</p>
                </article>
            </section>
        </main>
    )
}

export default Articles
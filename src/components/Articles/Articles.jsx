import './articles.scss';
import amputee_with_bicycle from '../../assets/images/daniel-odame-ejKF-tWFMhw-unsplash.jpg'


const Articles = () => {

	return (
		<main className='articles'>
			<section className='articles__article'>
                <div className='articles__image-container'>
				    <img className='articles__image' src={amputee_with_bicycle} alt="" />
                </div>
				<div>
					<h2 className='articles__heading'>Amputees on Parade</h2>
                    <p className="articles__info">
                        <a className='articles__author' href="">Jack Speidel</a>
                        <time>2023-7-27 10:35</time>
                    </p>
					<p className='articles__summary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat assumenda eaque iusto, asperiores deserunt facere incidunt. Accusantium laborum esse nemo omnis in eum modi quibusdam, temporibus cupiditate dolorum veritatis ut.</p>
				</div>
			</section>
			<section className='articles__article'>
                <div className='articles__image-container'>
				    <img className='articles__image' src={amputee_with_bicycle} alt="" />
                </div>
				<div>
					<h2 className='articles__heading'>Amputees on Parade</h2>
                    <p className="articles__info">
                        <a className='articles__author' href="">Jack Speidel</a>
                        <time>2023-7-27 10:35</time>
                    </p>
					<p className='articles__summary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat assumenda eaque iusto, asperiores deserunt facere incidunt. Accusantium laborum esse nemo omnis in eum modi quibusdam, temporibus cupiditate dolorum veritatis ut.</p>
				</div>
			</section>
            <section className='articles__article'>
                <div className='articles__image-container'>
				    <img className='articles__image' src={amputee_with_bicycle} alt="" />
                </div>
				<div>
					<h2 className='articles__heading'>Amputees on Parade</h2>
                    <p className="articles__info">
                        <a className='articles__author' href="">Jack Speidel</a>
                        <time>2023-7-27 10:35</time>
                    </p>
					<p className='articles__summary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat assumenda eaque iusto, asperiores deserunt facere incidunt. Accusantium laborum esse nemo omnis in eum modi quibusdam, temporibus cupiditate dolorum veritatis ut.</p>
				</div>
			</section>
		</main>
	)
}

export default Articles;
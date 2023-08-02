import './aboutUs.scss'

const AboutUs = () => {
	return (
		<div className='about'>
			<section className='about__heading'>
				<h2 className='about__title'>What we're here for</h2>
			</section>
			<section className='about__body'>
				<p className='about__text'>This site is for newly disabled individuals and those close to them who are looking for resources and a community of people just like you.</p>
                <p className='about__text'>In short, we're here for each other 🦾</p>
			</section>
		</div>
	)
}

export default AboutUs;
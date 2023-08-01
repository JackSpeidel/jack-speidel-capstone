import './support.scss';
import { Link } from 'react-router-dom';
import ButtonMailTo from '../../components/ButtonMailTo/ButtonMailTo';

const Support = () => {


  return (
    <div className='support'>
        <h1 className='support__heading'>Support</h1>
        <h2 className='support__subheading'>What kind of support are you looking for?</h2>
        <section className='support__cards'>
            <section className='support__card'>
                <h4>If you're in crisis and are in need of immediate assistance, please call 911</h4>
            </section>
            <section className='support__card'>
                <h4>If you need mental health assistance, please refer to the following:</h4>
                <Link className='support__link' to={'https://www.crisistextline.org/'}>
                    <p>Crisis Text Line</p>
                </Link>
                <Link className='support__link' to={'https://www.nimh.nih.gov/health/find-help'}>
                    <p>National Institute of Mental Health</p>
                </Link>
                <Link className='support__link' to={'https://www.samhsa.gov/find-help'}>
                    <p>Substance Abuse and Mental Health Services Administration</p>
                </Link>
            </section>
            <section className='support__card'>
                <h4>If you just need some tech support, please reach out to <span >{'support@uplift.biz'}</span></h4>
            </section>
        </section>
    </div>
  )
}

export default Support;
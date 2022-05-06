import { aboutHomeData } from '../../../../data'
import './style.scss'

export default function Services() {
    return (
        <section className='about-home'>
            <div className='container'>
                <div className='row content-wrapper'>
                    <div className='col-lg-6 item-wrapper'>
                        <div className='section-title'>
                            <h2 className='title'>{aboutHomeData.title}</h2>
                            <h3 className='subtitle'>{aboutHomeData.subtitle}</h3>
                        </div>
                        <p className='featured-text'><span className='featured-text-mark'> | </span>{aboutHomeData.text}</p>
                    </div>
                    <div className='col-lg-6 item-wrapper'>
                        <img src={aboutHomeData.imgUrl} alt='Agro agua' />
                    </div>
                </div>
            </div>
        </section >
    )
}
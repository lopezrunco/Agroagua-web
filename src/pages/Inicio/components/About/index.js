import { aboutHomeData } from '../../../../data'
import './style.scss'

export default function Services() {
    return (
        <div className='about-home'>
            <div className='container'>
                <div className='row content-wrapper'>
                    <div className='col-lg-6 item-wrapper'>
                        <h5>{aboutHomeData.subtitle}</h5>
                        <h2>{aboutHomeData.title}</h2>
                        <p>{aboutHomeData.text}</p>
                    </div>
                    <div className='col-lg-6 item-wrapper'>
                        <img src={aboutHomeData.imgUrl} alt='Agro agua' />
                    </div>
                </div>
            </div>
        </div >
    )
}
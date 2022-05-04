import { wappInfoHomeData } from '../../../../data'
import './style.scss'

export default function WhatsappLink() {
    return (
        <div className='wapp-link-home'>
            <div className='container'>
                <div className='row content-wrapper'>
                    <div className='col-lg-9 item-wrapper'>
                        <h2>{wappInfoHomeData.title} <span>{wappInfoHomeData.number}</span></h2>
                    </div>
                    <div className='col-lg-3 item-wrapper'>
                        <a href={wappInfoHomeData.link} target='_blank' rel="noreferrer">{wappInfoHomeData.button}</a>
                    </div>
                </div>
            </div>
        </div >
    )
}
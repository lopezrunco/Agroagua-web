import { wappInfoHomeData } from '../../../../data'
import CurvyBorderTop from '../../../../components/CurvyBorderTop'
import CurvyBorderBottom from '../../../../components/CurvyBorderBottom'
import './style.scss'

export default function WhatsappLink() {
    return (
        <>
            <CurvyBorderTop color='#f6fafe' />
            <section className='wapp-link-home'>
                <div className='container'>
                    <div className='row content-wrapper'>
                        <div className='col-12 item-wrapper'>
                            <h1><span>{wappInfoHomeData.title}</span> {wappInfoHomeData.number}</h1>
                            <p>{wappInfoHomeData.text}</p>
                            <a className='button button-lg primary-button' href={wappInfoHomeData.link} target='_blank' rel="noreferrer">{wappInfoHomeData.button}</a>
                        </div>
                    </div>
                </div>
            </section >
            <CurvyBorderBottom color='#f6fafe' />
        </>
    )
}
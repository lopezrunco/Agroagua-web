import { contactInfo } from '../../data'
import './style.scss'

export default function Bottom() {
    return (
        <>
            <svg className="bottom-curvy-border" viewBox="0 0 1440 184">
                <g><path className="f-bg-wave" d="M1285.4,81.2c-34,12.5-98.3,33.1-186.9,39.8c-230.8,17.6-274.8-85-472.8-71.3 c-182,12.6-219.4,104.5-345.3,65.2C237.9,101.6,177,70.7,91.6,81.2c-31.7,4-62.6,13-91.6,26.6V184h1440V0 C1392.2,33.7,1340.3,61,1285.4,81.2z" fill='#120d48'></path></g>
            </svg>
            <div className='bottom'>
                <div className='container'>
                    <div className='row content-wrapper'>
                        {contactInfo.map(({ iconClassName, text, link, id }) => (
                            <div className='col-lg-3 item-wrapper' key={id}>
                                <a href={link} target='_blank' rel="noreferrer">
                                    <i className={`${iconClassName} icon`}></i>
                                    <p>{text}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
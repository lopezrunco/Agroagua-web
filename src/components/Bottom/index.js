import { contactInfo } from '../../data'
import './style.scss'

export default function Bottom() {
    return (
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
    )
}
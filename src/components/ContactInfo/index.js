import { contactInfo } from '../../data'
import './style.scss'

export default function ContactInfo() {
    return (
        <div className='contact-info'>
            <div className='row'>
                <div className='col-12 content-wrapper'>
                    {contactInfo.map(({ iconClassName, text, link, id }) => (
                        <div className='item-wrapper' key={id}>
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
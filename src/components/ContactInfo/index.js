import { contactInfo, openingHoursInfo } from '../../data'
import './style.scss'

export default function ContactInfo() {
    return (
        <section className='contact-info'>
            <div className='row'>
                <div className='col-12 content-wrapper'>
                    <div className='item-wrapper'>
                        <h4><span className='featured-text-mark'>| </span>Datos de contacto</h4>
                        {contactInfo.map(({ iconClassName, text, link, id }) => (
                            <a href={link} target='_blank' rel="noreferrer" key={id}>
                                <i className={`${iconClassName} icon`}></i>
                                <p>{text}</p>
                            </a>
                        ))}
                    </div>
                    <div className='item-wrapper'>
                    <h4><span className='featured-text-mark'>| </span>Horarios</h4>
                            {openingHoursInfo.map(({ day, hours }) => (
                                <p>{day}: <span>{hours}</span></p>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
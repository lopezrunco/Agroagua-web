import { servicesHomeData } from '../../../../data'
import './style.scss'

export default function Services() {
    return (
        <div className='services-home-grid'>
            <div className='container'>
                <div className='row content-wrapper'>
                    {servicesHomeData.map(({ iconClassName, title, text, id }) => (
                        <div className='col-lg-3 item-wrapper' key={id}>
                            <i className={`${iconClassName} icon`}></i>
                            <h5>{title}</h5>
                            <p>{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
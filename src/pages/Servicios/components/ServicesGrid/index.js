import { servicesPageData } from '../../../../data'
import './style.scss'

export default function ServicesGrid() {
    return (
        <div className='services-grid'>
            <div className='container'>
                <div className='row content-wrapper'>
                    {servicesPageData.map(({ iconClassName, title, text, id }) => (
                        <div className='col-lg-4 item-wrapper' key={id}>
                            <div className='icon-wrapper'>
                            <i className={`${iconClassName} icon`}></i>
                            </div>
                            <h5>{title}</h5>
                            <p>{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
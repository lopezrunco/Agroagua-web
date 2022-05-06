import { servicesPageData } from '../../../../data'
import './style.scss'

export default function Services() {
    return (
        <section className='services-home-grid'>
            <div className='container'>
                <div className='row content-wrapper'>
                    {servicesPageData.map(({ iconClassName, title, text, id }, index) => (
                        index < 3 && ( // Only shows the first 3 items
                            <div className='col-lg-4' key={id}>
                                <div className='item-wrapper'>
                                    <i className={`${iconClassName} icon`}></i>
                                    <h5>{title}</h5>
                                    <p>{text}</p>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </section>
    )
}
import { servicesPageData } from '../../../../data'
import './style.scss'

export default function ServicesGrid() {
    return (
        <section className='services-grid'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 section-title'>
                        <h2 className='title'>Nuestros servicios</h2>
                        <h3 className='subtitle'>¿Qué ofrecemos?</h3>
                    </div>
                </div>
                <div className='row content-wrapper'>
                    {servicesPageData.map(({ iconClassName, title, text, id }, index) => (
                        <div className='col-lg-4' key={id}>
                            <div className='item-wrapper'>
                                <div className='icon-wrapper'>
                                    <i className={`${iconClassName} icon`}></i>
                                </div>
                                <h5>{title}</h5>
                                <p>{text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
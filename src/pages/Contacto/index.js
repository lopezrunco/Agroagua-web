import ContactForm from '../../components/ContactForm'
import ContactInfo from '../../components/ContactInfo'

export default function Contacto() {
    return (
        <section className="container">
            <div className='row'>
                <div className='section-title'>
                    <h2 className='title'>Contacto</h2>
                    <div className='separator'></div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 d-flex justify-content-start">
                    <ContactForm />
                </div>
                <div className="col-lg-6">
                    <ContactInfo />
                </div>
            </div>
        </section>
    )
}
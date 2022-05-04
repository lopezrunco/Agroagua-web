import ContactForm from '../../components/ContactForm'
import ContactInfo from '../../components/ContactInfo'

export default function Contacto() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <ContactForm />
                </div>
                <div className="col-lg-4">
                    <ContactInfo />
                </div>
            </div>
        </div>
    )
}
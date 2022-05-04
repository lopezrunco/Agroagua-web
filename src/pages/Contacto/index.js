import ContactForm from "../../components/ContactForm"

export default function Contacto() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <ContactForm />
                </div>
                <div className="col-lg-4">
                    <p>Contact data</p>
                </div>
            </div>
        </div>
    )
}
import { useState } from 'react'
import './style.scss'


export default function ContactForm() {
    const [showAlert, setShowAlert] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()
        console.log('Sent!')
    }

    return (
        <div className='contact-form'>
            <form id="form" method="POST" onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-lg-6 group'>
                        <label htmlFor="name">Nombre: </label>
                        <input type="text" name="name" />
                    </div>
                    <div className='col-lg-6 group'>
                        <label htmlFor="lastname">Apellido: </label>
                        <input type="text" name="lastname" />
                    </div>
                    <div className='col-lg-6 group'>
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" />
                    </div>
                    <div className='col-lg-6 group'>
                        <label htmlFor="tel">Teléfono: </label>
                        <input type='tel' name="tel" />
                    </div>
                    <div className='col-12 group'>
                        <label>Mensaje: </label>
                        <textarea rows="5" name="message"></textarea>
                    </div>
                    <div>
                        <div>
                            <button type="submit" className="button">
                                Send Message
                            </button>
                        </div>
                        {showAlert && (
                            <div>
                                <div className="sended-msj-alert" id="sended-msj-alert">
                                    <i className="fas fa-check"></i>
                                    <p>Message sent successfully!</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </form >
        </div>
    )
}
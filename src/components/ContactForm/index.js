import './style.scss'

export default function ContactForm() {
    return (
        <div className='contact-form d-flex justify-content-start'>
            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSd0GFk6HKB2izpisEgs5ipG3sGTvKTkuHZMK2DZpPRKCo1UmA/viewform?embedded=true" 
                width="100%" 
                height="820" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0">Cargando…</iframe>
        </div>
    )
}
import './style.scss'

export default function ContactForm() {
    return (
        <div className='contact-form'>
            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSd0GFk6HKB2izpisEgs5ipG3sGTvKTkuHZMK2DZpPRKCo1UmA/viewform?embedded=true" 
                width="100%" 
                height="820" 
                frameborder="0" 
                marginheight="0" 
                marginwidth="0">Cargando…</iframe>
        </div>
    )
}
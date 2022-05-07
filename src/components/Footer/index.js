import './style.scss'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col content-wrapper'>
                        <small>© Agroagua {new Date().getFullYear()} | Todos los derechos reservados </small>
                        <small>Desarrollo: <a href="http://creativo.com.uy/" target='_blank' rel="noreferrer">Creativo Multimedia</a></small>
                    </div>
                </div>
            </div>
        </footer>
    )
}
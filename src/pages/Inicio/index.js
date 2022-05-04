import Services from './components/Services'
import About from './components/About'
import WhatsappLink from './components/WhatsappLink'
import LastsWorks from '../../components/LastsWorks'

export default function Inicio() {
    return (
        <>
            <h1>Inicio</h1>
            <Services />
            <About />
            <WhatsappLink />
            <LastsWorks />
        </>
    )
}
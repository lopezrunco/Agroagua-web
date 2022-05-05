import Services from './components/Services'
import About from './components/About'
import WhatsappLink from './components/WhatsappLink'
import LastsWorks from '../../components/LastsWorks'
import HeroSection from './components/HeroSection'

export default function Inicio() {
    return (
        <>
            <HeroSection />
            <Services />
            <About />
            <WhatsappLink />
            <LastsWorks />
        </>
    )
}
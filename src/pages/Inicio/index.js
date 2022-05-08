import Services from './components/Services'
import About from './components/About'
import WhatsappLink from './components/WhatsappLink'
import LastsWorksHome from './components/LastsWorksHome'
import HeroSection from './components/HeroSection'

export default function Inicio() {
    return (
        <>
            <HeroSection />
            <Services />
            <About />
            <WhatsappLink />
            <LastsWorksHome />
        </>
    )
}
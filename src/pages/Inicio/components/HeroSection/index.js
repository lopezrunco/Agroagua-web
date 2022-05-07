import { heroSectionData } from '../../../../data'
import borderImg from '../../../../assets/border-hero-img.png'
import './style.scss'

export default function HeroSection() {
    return (
        <>
        <div className="hero-section">
            <div className='overcolor'>
                <div className="container f-column">
                    <div className="content-wrapper f-column">
                        <h1>{heroSectionData.title}<span>{heroSectionData.titleSpan}</span></h1>
                        <p>{heroSectionData.text}</p>
                        <div className='button-group'>
                            <a className='button button-lg primary-button' href={heroSectionData.mainButtonLink}>{heroSectionData.mainButton}</a>
                            <a className='button button-lg secondary-button' href={heroSectionData.secondaryButtonLink}>{heroSectionData.secondaryButton}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='hero-curvy-border'>
            <img src={borderImg} alt='Agro agua' />
        </div>
        </>
    )
}
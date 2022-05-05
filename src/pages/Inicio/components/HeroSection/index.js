import { heroSectionData } from '../../../../data'
import './style.scss'

export default function HeroSection() {
    return (
        <div className="hero-section">
            <div className='overcolor'>
                <div className="container f-column">
                    <div className="content-wrapper f-column">
                        <h1>{heroSectionData.title}<span>{heroSectionData.titleSpan}</span></h1>
                        <p>{heroSectionData.text}</p>
                        <div className='f-row'>
                            <a href={heroSectionData.mainButtonLink}>{heroSectionData.mainButton}</a>
                            <a href={heroSectionData.secondaryButtonLink}>{heroSectionData.secondaryButton}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
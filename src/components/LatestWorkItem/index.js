import { useState } from 'react'
import './style.scss'

export default function LatestWorkItem(props) {
    const [openImage, setOpenImage] = useState(false)
    const handleClick = () => setOpenImage(!openImage)
    openImage ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"

    return (
        <>
            <div className='col-lg-4 last-work-item-wrapper' onClick={handleClick}>
                <img src={props.imgSource} alt='Agroagua trabajos' />
            </div>
            {openImage && (
                <div className='image-viewer' onClick={handleClick}>
                    <div className='container'>
                        <div className='img-wrapper'>
                            <img src={props.imgSource} alt={'Agro agua trabajos'} />
                            <i className="fas fa-times-circle close-icon"></i>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
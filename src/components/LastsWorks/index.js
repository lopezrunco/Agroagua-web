import { lastsWorks } from '../../data'
import './style.scss'

export default function LastsWorks() {
    return (
        <>
            <div className='lasts-works-home-grid'>
                <div className='container'>
                    <div className='row content-wrapper'>
                        {lastsWorks.map(({ imgUrl, id }) => (
                            <div className='col-lg-4 item-wrapper' key={id}>
                                <img src={imgUrl} alt='Agroagua trabajos' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
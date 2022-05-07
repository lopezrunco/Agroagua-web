import { lastsWorks } from '../../data'
import LatestWorkItem from '../LatestWorkItem'
import './style.scss'

export default function LastsWorks() {
    return (
        <section className='lasts-works-home-grid'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='section-title'>
                            <h2 className='title'>Últimos trabajos</h2>
                            <h3 className='subtitle'>¿Qué hacemos?</h3>
                        </div>
                    </div>
                </div>
                <div className='row content-wrapper'>
                    {lastsWorks.map(({ imgUrl, id }, index) => (
                        index < 3 && <LatestWorkItem imgSource={imgUrl} key={id} />
                    ))}
                </div>
            </div>
        </section>
    )
}
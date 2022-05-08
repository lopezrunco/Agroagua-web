import { lastsWorks } from '../../../../data'
import LatestWorkItem from '../../../../components/LatestWorkItem'
import './style.scss'

export default function LastsWorks() {
    return (
        <section className='lasts-works-grid'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='section-title'>
                            <h2 className='title'>Últimos trabajos</h2>
                            <div className='separator'></div>
                        </div>
                    </div>
                </div>
                <div className='row content-wrapper'>
                    {lastsWorks.map(({ imgUrl, id }, index) => (
                        <LatestWorkItem imgSource={imgUrl} key={id} />
                    ))}
                </div>
            </div>
        </section>
    )
}
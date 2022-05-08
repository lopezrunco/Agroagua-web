import { clientsData } from '../../../../data'
import './style.scss'

export default function Clients() {
    return (
        <div className='clients'>
            <div className='container'>
                <div className='row'>
                    <div className='section-title'>
                        <h2 className='title'>Nuestros clientes</h2>
                        <div className='separator'></div>
                    </div>
                </div>
                <div className='row'>
                    {clientsData.map(({ imgUrl, link, name, id }) => (
                        <div className='col-lg-4 mb-4' key={id}>
                            <a href={link} target='_blank' className='item-wrapper' rel="noreferrer">
                                <img src={imgUrl} alt={name} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
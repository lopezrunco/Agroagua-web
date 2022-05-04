import { clientsData } from '../../../../data'
import './style.scss'

export default function Clients() {
    return (
        <div className='clients'>
            <div className='container'>
                <div className='content-wrapper'>
                    {clientsData.map(({ imgUrl, id }) => (
                        <div className='item-wrapper' key={id}>
                            <img src={imgUrl} alt='Agro agua Clientes' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
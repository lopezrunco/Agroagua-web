import './style.scss'

export default function Map() {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className='section-title'>
                        <h2 className='title'>Dónde estamos</h2>
                        <div className="separator"></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="map">
                        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14004.265305062554!2d-56.227943936948165!3d-34.080618773946064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a11d46f6f53a03%3A0xab2b868c5d312abc!2sAgroagua!5e0!3m2!1ses-419!2sin!4v1652013776619!5m2!1ses-419!2sin"
                            width="100%"
                            height="450"
                            allowFullScreen="yes"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </>
    )
}
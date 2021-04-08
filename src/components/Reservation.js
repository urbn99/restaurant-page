import React from 'react'

const Reservation = () => {
    return (
        <section className='reservation ' id='location'>

            <div className='reservation-section'>
                <h2>ZAPRASZAMY DO ODWIEDZENIA NASZEGO LOKALU</h2>
                <h2>OD 12 DO 24 PRZEZ CAŁY TYDZIEŃ</h2>
                <h2>ul. KRUCZA 4 / 21</h2>
                <br/>
                <h2>LUB DO ZŁOŻENIA ZAMÓWIENIA TELEFONICZNIE</h2>
                <h2>+48 123 123 123</h2>
            </div>

            <div className='map'>
                <iframe 
                    title='iframe' 
                    className='iframe' 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13825.257854622674!2d21.00817745163829!3d52.225519481601985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c92692e49%3A0xc2e97ae5311f2dc2!2sPa%C5%82ac%20Kultury%20i%20Nauki!5e0!3m2!1spl!2spl!4v1617302214131!5m2!1spl!2spl"
                ></iframe>
            </div>            
        </section>
    )
}

export default Reservation

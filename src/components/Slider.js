import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import data from '../datas/photosSlider';

const Slider = () => {

    const [photos, setPhotos] = useState(data);
    const [index, setIndex] = useState(0);

    //zapętlenie zdjęć
    useEffect(() => {
        const lastIndex = photos.length - 1;
        if (index < 0) {
            //cofanie, wyświetlenie ostatniej osoby
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            //powrót do początku listy
            setIndex(0)
        }
        
    }, [index, photos])

    //automatyczna zmiana zdjęć
    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 3000);
        return () => clearInterval(slider);
    }, [index])


    return (
        <section className='section'>

            <div className="section-slider">
                {photos.map((photo, photoIndex) => {
                    const { id, image } = photo
                    //slajder
                    let position = 'nextSlide'
                    if (photoIndex === index) {
                        position = 'activeSlide';
                    }
                    if (photoIndex === index - 1 || (index === 0 && photoIndex === photos.length - 1)) {
                        position = 'lastSlide';
                    }

                    return (

                        <main className={position} key={id}>

                            <img src={image} alt={''} className='food-image' />

                        </main>
                    )
                })}
                <button className="prev" onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft />
                </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                    <FiChevronRight />
                </button>
            </div>
        </section>
    )
}

export default Slider

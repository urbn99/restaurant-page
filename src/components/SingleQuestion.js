import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function Question({ title, info }) {

    //domyślne ustawienie zakrycia informacji
    const [showInfo, setShowInfo] = useState(false);

    return <article className='question'>
        <header>
            <h4>{title}</h4>
            <button className='btn' onClick={() => setShowInfo(!showInfo)}>
                {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
        </header>
        {
            //jeżeli showInfo === true to pokazuje info
            showInfo && <p>{info}</p>
        }

    </article>;
}

export default Question
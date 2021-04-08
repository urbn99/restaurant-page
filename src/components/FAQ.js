import React, { useState } from 'react';
//baza danych
import data from '../datas/questions';
import SingleQuestion from './SingleQuestion';

function Faq() {
    //pobranie listy pytań 
    const [questions, setQuestions] = useState(data);

    return (
        <div className='own-main' id='faq'>
            <div className="container">
                <h2>MASZ PYTANIE ?</h2>
                <section className='info'>
                    {
                        questions.map((question) => {
                            return (
                                <SingleQuestion key={question.id}{...question} />
                            );
                        })
                    }
                </section>
            </div>
            
        </div>

    );
}

export default Faq
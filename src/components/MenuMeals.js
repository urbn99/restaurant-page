import React from 'react';

const Meals = ({ items }) => {


    return (
        <div className='section-center2'>
            {items.map((menuItem) => {
                const { id, title, img, desc, price } = menuItem;
                return (
                    <article key={id} className="menu-item">
                        <img src={img} alt={title} className='photo' />
                        <div className="item-info">
                            <header>
                                <h4>{title}</h4>
                                <h5 className="price">{price} ZŁ</h5>
                            </header>
                            <p className='item-text'>{desc}</p>
                        </div>
                    </article>
                )
            })}
        </div>
    );
};

export default Meals;
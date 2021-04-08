import React from 'react';

const Categories = ({ filterItems }) => {



    return (
        <div className="btn-container">
            <button className='filter-btn' onClick={() => filterItems('all')}>
                WSZYSTKO
             </button>
            <button className='filter-btn' onClick={() => filterItems('appetizer')}>
                PRZYSTAWKI
            </button>
            <button className='filter-btn' onClick={() => filterItems('breakfast')}>
                ŚNIADANIA
            </button>
            <button className='filter-btn' onClick={() => filterItems('lunch')}>
                OBIAD
            </button>
            
        </div>
    );
};

export default Categories;
import React, { useState } from 'react';
import items from '../datas/menu';
import MenuCategories from './MenuCategories'
import MenuMeals from './MenuMeals'


const Menu = () => {
    
    
    const [menuItems, setMenuItems] = useState(items);

    //filtrowanie produktów do kategorii
    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(items);
            return;

        }
        const newItems = items.filter((item) => item.category === category)
        setMenuItems(newItems);

    };

    return (
        <section className="menu section" id='menu'>

            <div className="title">
                <h2>NASZE MENU</h2>
            </div>
            
            <MenuCategories filterItems={filterItems}/>
            <MenuMeals items={menuItems} />
        </section>
    )

}

export default Menu

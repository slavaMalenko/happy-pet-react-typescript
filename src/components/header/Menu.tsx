import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type MenuItems = {
    name: string,
    link: string
}

interface IMenu {
    items: MenuItems[],
    activeItem: string,
    changeActiveItem: (item: string) => void
}

const Menu: React.FC<IMenu> = ({ items, activeItem, changeActiveItem }) => {
    return (
        <div className="menu">
            <ul className="menu__items">
                {items.map((item, index) => 
                    <li key={`${item}_${index}`} className="menu__item">
                        <Link
                            onClick={() => changeActiveItem(item.link)}
                            to={item.link}
                            className={classNames(
                                'menu__link',
                                { 'menu__link--active': item.link === activeItem },
                            )}
                        >
                            {item.name}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Menu;
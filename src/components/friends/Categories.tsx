import React from 'react';
import classNames from 'classnames';
import { ICategoriesAnimals } from '../pages/Friends';

interface ICategories {
    items: ICategoriesAnimals[],
    onClickItem: (category: string | null) => void,
    activeItemCategories: string | null
}

const Categories: React.FC<ICategories> = React.memo(({ items, activeItemCategories, onClickItem }) =>
    <ul className="categories__items">
        <li className="categories__item">
            <p
                className={classNames(
                    'categories__item-link',
                    { 'categories__item-link--active': activeItemCategories === null }
                )}
                onClick={() => onClickItem(null)}
            >
                Все
            </p>
        </li>

        {items.map((item, index) =>
            <li key={`${item}_${index}`} className="categories__item">
                <p
                    className={classNames(
                        'categories__item-link',
                        { 'categories__item-link--active': activeItemCategories === item.category }
                    )}
                    onClick={() => onClickItem(item.category)}
                >
                    {item.name}
                </p>
            </li>
        )}
    </ul >
)


export default Categories;
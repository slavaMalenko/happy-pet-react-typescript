import React, { useState } from 'react';
import classNames from 'classnames';
import arrow from '../../assets/img/header/arrow.png';

interface ISort {
    items: { name: string, value: string }[],
    activeItemSort: string,
    onClickItem: (sort: string) => void
}

type emptyFunction = () => void;

const Sort: React.FC<ISort> = React.memo(({ items, activeItemSort, onClickItem }) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    
    const changeVisiblePopup: emptyFunction = () => setVisiblePopup(!visiblePopup);
    const initialVisiblePopup: emptyFunction = () => setVisiblePopup(false);

    const activeSortLink = items.find(item => item.value === activeItemSort)?.name;

    return (
        <div className="sort">
            <div className="sort__case">
                <p
                    onClick={changeVisiblePopup}
                    className="sort__case-text">

                    <img
                        className={classNames(
                            "sort__case-img",
                            { "sort__case-img--rotate": visiblePopup }
                        )}
                        src={arrow}
                        alt="Стрелка"
                    />
                    Сортировать по:
                </p>
                <span className="sort__case-link">{activeSortLink}</span>

                <div className="sort__list">
                    <ul className="sort__list-items">
                        {visiblePopup &&
                            items.map((item, index) => 
                                <li
                                    key={`${item}_${index}`}
                                    onClick={() => {
                                        onClickItem(item.value)
                                        initialVisiblePopup()
                                    }}
                                    className={classNames(
                                        "sort__list-item",
                                        { "sort__list-item--active": activeItemSort === item.value }
                                    )}
                                >
                                    {item.name}
                                </li>
                        )}
                    </ul>
                </div>
            </div>
        </div >
    )
})

export default Sort;
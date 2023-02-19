import React from 'react';
import { IAnimal } from '../types';

interface IAnimals {
    items: IAnimal[] | null,
    changeCartPriceAndAnimalName: (price: number, name: string | null) => void
}

const Animals: React.FC<IAnimals> = ({ items, changeCartPriceAndAnimalName }) =>
    <div className="animals">
        {items && items.map(({ imageUrl, name, description, kind, ageValue, age, price }, index) => (
            <div key={`${imageUrl}_${index}`} className="animal">
                <div className="animal-bcg">
                    <img className="animal__img" src={imageUrl} alt="" />

                    <div className="animal__info">
                        <h3 className="animal__info-name">{name}</h3>
                        <p className="animal__info-description">"{description}"</p>
                    </div>

                    <div className="animal__bottom">
                        <p className="animal__bottom-desc">
                            <span className="animal__bottom-value">Порода: </span>
                            <span className="animal__bottom-kind">{kind} </span>
                        </p>

                        <p className="animal__bottom-desc">
                            <span className="animal__bottom-value">Возраст: </span>
                            {age} {ageValue}
                        </p>

                        <div className="animal__price">
                            <button
                                className="animal__price-button"
                                onClick={() => changeCartPriceAndAnimalName(price, name)}
                            >
                                Подружиться
                            </button>
                            <p className="animal__price-value">{price} ₽</p>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>

export default Animals;
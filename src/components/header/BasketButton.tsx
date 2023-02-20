import React from 'react';
import classNames from 'classnames';
import { useAppDicpatch, useAppSelector } from '../../redux/store';
import basket from '../../assets/img/header/basket.png';
import arrow from '../../assets/img/header/arrow.png';
import { clearCart, setOrderCode, setPhoneNumber } from '../../redux/redusers/cart';

const BasketButton: React.FC = () => {
    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const changeVisiblePopup = (): void => {
        setVisiblePopup(!visiblePopup);
    }
    const initialVisiblePopup = (): void => {
        setVisiblePopup(false);
    }

    const {
        totalPrice,
        animalName,
        orderCode,
        phoneNumber
    } = useAppSelector(({ cart: { totalPrice, animalName, orderCode, phoneNumber } }) =>
    ({
        totalPrice,
        animalName,
        orderCode,
        phoneNumber
    })
    )
    // TODO Тренировка GIT
    const dispatch = useAppDicpatch();

    const clearAllCart = () => {
        if (totalPrice !== 0) {
            console.log(`Корзина была наполнена на ${totalPrice} рублей`);
            dispatch(clearCart());
        }
        initialVisiblePopup();
    }

    const getOrderNumber = (): void => {
        if (orderCode === null && phoneNumber) {
            const getRandomNumber = (): number | string => Math.random().toString(36).substr(2, 1);
            const randomArray = [
                getRandomNumber(),
                getRandomNumber(),
                getRandomNumber(),
                getRandomNumber(),
                getRandomNumber(),
                getRandomNumber(),
                getRandomNumber(),
                getRandomNumber(),
            ];
            dispatch(setOrderCode(randomArray.join('')))
        }
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event): void => {
        dispatch(setPhoneNumber(event.target.value))
    }

    return (
        <button className="basket">
            <div className="basket__link">
                <img className=" basket__link-img" src={basket} alt="Корзина" onClick={changeVisiblePopup} />
            </div>

            <div className="basket__list">
                <span className="basket__list-price" onClick={changeVisiblePopup}>{totalPrice} ₽</span>

                <div className="basket__list-cart">
                    {visiblePopup &&
                        <div className="basket__list-cart-info">
                            <div className="basket__list-cart-phone">
                                {(!orderCode && totalPrice) ? <input type="text" value={phoneNumber} className="basket__list-cart-input" onChange={handleChange} /> : null}
                            </div>

                            <div className="basket__list-buttons-items">
                                <button
                                    className={classNames(
                                        "basket__list-button-item",
                                        { "basket__list-button-item--disabled": !animalName || (orderCode && animalName && phoneNumber) }
                                    )}
                                    onClick={getOrderNumber} disabled={!animalName && !phoneNumber}>
                                    {(orderCode && animalName && phoneNumber) ? 'Заказ принят!' : 'Заказать'}
                                </button>

                                <button
                                    className={classNames(
                                        "basket__list-button-item",
                                        "basket__list-button-item--white",
                                        { "basket__list-button-item--white-disabled": !animalName || (orderCode && animalName) }
                                    )}
                                    onClick={clearAllCart}
                                    disabled={!totalPrice}>
                                    Очистить корзину
                                </button>
                            </div>

                            {orderCode && animalName && phoneNumber && <div className="basket__list-cart-code">Код вашего заказа: <span className="basket__list-cart-code--border">{orderCode}</span></div>}
                            {animalName && orderCode && phoneNumber && <div className="basket__list-cart-name">{animalName} уже в пути!</div>}
                        </div>

                    }
                </div>

                <img
                    className={classNames(
                        "basket__list-arrow",
                        { "basket__list-arrow--rotate": visiblePopup }
                    )}
                    src={arrow} alt="" />
            </div>
        </button>
    )
}

export default BasketButton;
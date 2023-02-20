import React from 'react';
import { Link } from 'react-router-dom';

import Menu from './Menu';

import logo from '../../assets/img/header/logo.png';
import tel from '../../assets/img/header/tel.png';
import { setMenuActive, setMenuActiveHome } from '../../redux/redusers/menu';
import { useAppDicpatch, useAppSelector } from '../../redux/store';
import BasketButton from './BasketButton';
// TODO исправить
// TODO подправить
// TODO подрезать

const menuItems = [
    { name: 'Главная', link: '/' },
    { name: 'Друзья', link: '/friends' },
    { name: 'О сервисе', link: '/service' },
    { name: 'Контакты', link: '/contacts' },
]

const Header: React.FC = () => {
    const dispatch = useAppDicpatch();
    const { menuActiveItem } = useAppSelector(({ menu }) => ({ menuActiveItem: menu.activeItem }));

    React.useEffect(() => {
        dispatch(setMenuActive(window.location.pathname));
    }, [dispatch])

    const changeActiveItem = (item: string): void => {
        dispatch(setMenuActive(item));
    }
    const changeActiveItemHome = (): void => {
        dispatch(setMenuActiveHome());
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <Link
                        className="logo"
                        to='/'
                        onClick={changeActiveItemHome}
                    >
                        <div className="logo__img">
                            <img className="logo__img-photo" src={logo} alt="Логотип" />
                        </div>
                        <span className="logo__text">HAPPY PET</span>
                    </Link>

                    <Menu
                        items={menuItems}
                        activeItem={menuActiveItem}
                        changeActiveItem={changeActiveItem}
                    />

                    <button className="tel">
                        <img className="tel__img" src={tel} alt="Телефон" />
                        <span className="tel__cont">+7 978 884 43-78</span>
                    </button>

                    <BasketButton />
                </div>
            </div>
        </header>
    )
}

export default Header;
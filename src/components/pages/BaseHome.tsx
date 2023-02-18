import { Link } from 'react-router-dom';
import animals from '../../assets/img/animals.png';
import dog from '../../assets/img/top/dog.png';
import parrot from '../../assets/img/top/parrot.png';
import { setCategoryBird, setCategoryDog } from '../../redux/redusers/filters';
import { setMenuActiveFriends } from '../../redux/redusers/menu';
import { useAppDicpatch } from '../../redux/store';

const BaseHome: React.FC = () => {
    const dispatch = useAppDicpatch();

    const changeAnimalsDog = () => {
        dispatch(setCategoryDog())
        dispatch(setMenuActiveFriends())
    }
    const changeAnimalsParrot = () => {
        dispatch(setCategoryBird())
        dispatch(setMenuActiveFriends())
    }
    const changeMenuActive = () => {
        dispatch(setMenuActiveFriends())
    }

    return (
        <section className="base">
            <img className="intro" src={animals} alt="Животные" />

            <div className="description">
                <h1 className="description__head">Твой новый друг <br /> с доставкой на дом</h1>
                <p className="description__item">Онлайн-магазин породистых домашних животных подарит тебе нового друга в несколько кликов. Действуй!</p>
                <Link
                    className="description__button"
                    onClick={changeMenuActive}
                    to="/friends"
                >
                    Посмотреть друзей
                </Link>
            </div>

            <div className="top">
                <h3 className="top__head">Топ месяца:</h3>

                <ul className="top__items">
                    <li className="top__item">
                        <Link
                            onClick={changeAnimalsDog}
                            to="/friends"
                            className="top__item-link"
                        >
                            <span className="top__item-head">Собаки</span>
                            <img className="top__item-img top__item-img--center" src={dog} alt="Собаки" />
                        </Link>
                    </li>

                    <li className="top__item">
                        <Link
                            onClick={changeAnimalsParrot}
                            to="/friends"
                            className="top__item-link"
                        >
                            <span className="top__item-head top__item-head--arrow">Попугаи</span>
                            <img className="top__item-img" src={parrot} alt="Попугаи" />
                        </Link>
                    </li>
                </ul>
            </div>
        </section >
    )
}

export default BaseHome;
import React from 'react';
import axios from 'axios';
import { TAnimalСategories } from '../types';
import { useAppSelector, useAppDicpatch } from '../../redux/store';
import { addAnimals, changeIsLoader } from '../../redux/redusers/animals';
import { setCategory, setSortBy } from '../../redux/redusers/filters';
import { addTotalPrice, setAnimalName } from '../../redux/redusers/cart';
import Sort from '../friends/Sort';
import Categories from '../friends/Categories';
import Animals from '../friends/Animals';
import AnimalLoader from '../friends/AnimalLoader';

const sort = [
    { name: "возрасту", value: "age" },
    { name: "цене", value: "price" },
]

export interface ICategoriesAnimals extends TAnimalСategories { name: string };
const categories: ICategoriesAnimals[] = [
    { name: "Собаки", category: "dog" },
    { name: "Кошки", category: "cat" },
    { name: "Птицы", category: "bird" },
    { name: "Рыбы", category: "fish" },
]

const Friends: React.FC = () => {
    const {
        category,
        sortBy,
        animals,
        isLoader
    } = useAppSelector(({ 
        filters: { category, sortBy },
        animals: { items: animals, isLoader },
    }) => ({
        category,
        sortBy,
        animals,
        isLoader,
    }))

    const dispatch = useAppDicpatch();
    React.useEffect(() => {
        dispatch(changeIsLoader(true));
        axios
            .get(`http://localhost:3001/friends?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=desc`)
            .then(({ data }) => {
                dispatch(addAnimals(data));
                dispatch(changeIsLoader(false));
            })
    }, [sortBy, category, dispatch])


    const onClickItemCategory = React.useCallback((category: string | null): void => {
        dispatch(setCategory(category));
    }, [dispatch]);

    const onClickItemSortBy = React.useCallback((sort: string): void => {
        dispatch(setSortBy(sort));
    }, [dispatch]);

    const changeCartPriceAndAnimalName = (price: number, name: string | null): void => {
        dispatch(addTotalPrice(price))
        dispatch(setAnimalName(name))
    }

    return (
        <section className="friends">
            <div className="categories">
                <Sort
                    items={sort}
                    activeItemSort={sortBy}
                    onClickItem={onClickItemSortBy}
                />

                <Categories
                    items={categories}
                    activeItemCategories={category}
                    onClickItem={onClickItemCategory}
                />
            </div>
            {
                isLoader
                    ? Array(4).fill(0).map((item, index) => <AnimalLoader key={index} />)
                    : <Animals
                        items={animals}
                        changeCartPriceAndAnimalName={changeCartPriceAndAnimalName}
                    />
            }
        </section>
    )
}

export default Friends;
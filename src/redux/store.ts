import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import menuSlice from "./redusers/menu";
import filtersSlice from "./redusers/filters";
import cartSlice from "./redusers/cart";
import animalsSlice from "./redusers/animals";

const store = configureStore({
    reducer: {
        menu: menuSlice,
        filters: filtersSlice,
        cart: cartSlice,
        animals: animalsSlice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDicpatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
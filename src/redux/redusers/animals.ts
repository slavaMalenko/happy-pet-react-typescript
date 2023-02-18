import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAnimal } from '../../components/types';

type animalsState = {
    items: IAnimal[] | null,
    isLoader: boolean
}

const initialState: animalsState = {
    items: null,
    isLoader: false
}

const animals = createSlice({
    name: "animal",
    initialState,
    reducers: {
        addAnimals(state, action: PayloadAction<IAnimal[]>) {
            state.items = action.payload;
        },
        changeIsLoader(state, action: PayloadAction<boolean>) {
            state.isLoader = action.payload;
        }
    }
})

export const {addAnimals, changeIsLoader} = animals.actions;
export default animals.reducer;
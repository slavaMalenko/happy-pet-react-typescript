import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type filtersState = {
    sortBy: string,
    category: string | null,
}

const initialState: filtersState = {
    sortBy: 'age',
    category: null,
}

const filters = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategory(state, action: PayloadAction<string | null>) {
            state.category = action.payload;
        },
        setCategoryDog(state) {
            state.category = "dog";
        },
        setCategoryBird(state) {
            state.category = "bird";
        },
        setSortBy(state, action: PayloadAction<string>) {
            state.sortBy = action.payload;
        }
    }
})

export const {setCategory, setCategoryDog, setCategoryBird, setSortBy} = filters.actions;
export default filters.reducer;
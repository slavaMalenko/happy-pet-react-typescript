import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type menuState = {
    activeItem: string
}

const initialState: menuState = {
    activeItem: '/'
}

const menu = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenuActive(state, action: PayloadAction<string>) {
            state.activeItem = action.payload;
        },
        setMenuActiveHome(state) {
            state.activeItem = '/';
        },
        setMenuActiveFriends(state) {
            state.activeItem = '/friends';
        }
    }
})

export const {setMenuActive, setMenuActiveHome, setMenuActiveFriends} = menu.actions;
export default menu.reducer;
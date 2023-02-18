import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type cartState = {
    totalPrice: number,
    animalName: string | null,
    orderCode: string | null,
    phoneNumber: string | number | undefined
}

const initialState: cartState = {
    totalPrice: 0,
    animalName: null,
    orderCode: null,
    phoneNumber: undefined
}

const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addTotalPrice(state, action: PayloadAction<number>) {
            if (state.totalPrice === 0) state.totalPrice = state.totalPrice + action.payload;
        },
        clearCart: () => {
            return initialState;
        },
        setPhoneNumber(state, action: PayloadAction<string | number | undefined>) {
            state.phoneNumber = action.payload;
        },
        setOrderCode(state, action: PayloadAction<string | null>) {
            state.orderCode = action.payload;
        },
        setAnimalName(state, action: PayloadAction<string | null>) {
            state.animalName = action.payload;
        }
    }
})

export const {addTotalPrice, clearCart, setPhoneNumber, setOrderCode, setAnimalName} = cart.actions;
export default cart.reducer;
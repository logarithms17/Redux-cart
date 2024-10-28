import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}
console.log(initialState.items)
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            //CHECK IF ACTION.PAYLOAD.NAME IS ALREADY IN THE LIST
            const existingItem = state.items.find(item => item.name === action.payload.name)
            if (existingItem) {
                console.log("Item already exists:", existingItem);
                return
            } else {
                state.items.push({ ...action.payload });
                // state.items.push(action.payload)
            }
            
        },
        addAmount: (state, action) => {
            const index = state.items.findIndex(item => item.name === action.payload.name)
            state.items[index].amount += 1
        },
        deductAmount: (state, action) => {
            const index = state.items.findIndex(item => item.title === action.payload.title)
            if (state.items[index].amount < 2) {
                state.items.splice(index, 1)
            } else {
                state.items[index].amount -= 1
            }
            
        }
    }
})

export const {addItem, addAmount, deductAmount} = cartSlice.actions

export default cartSlice.reducer
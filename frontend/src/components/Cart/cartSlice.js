import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: [],
    },
    reducers: {
        addToCart(state, action) {
           const product = state.cartList.find(item => item.id === action.payload.id && item.size === action.payload.size)
           if(product) {
                state.cartList.map(item => {
                    if(item.id === product.id && item.size == product.size) {
                        item.quantily = parseInt(item.quantily) + parseInt(action.payload.quantily)
                    }
                    return item
                })
           }
           else {
               state.cartList.push(action.payload)
           }
        },
        removeFromCart(state, action) {
            state.cartList = state.cartList.filter(item => {
                return (item.id === action.payload.id && item.size !== action.payload.size) || item.id !== action.payload.id
            })
        },
        changeQuantily(state, action) {
            state.cartList = state.cartList.map(item => {
                if(item.id === action.payload.id && item.size === action.payload.size) {
                    item.quantily = action.payload.newQuantily
                }
                return item
            })  
        },
        removeAllFromCart(state) {
            state.cartList = []
        }
    }
})

const { actions, reducer } = cartSlice
const { addToCart, removeFromCart, changeQuantily, removeAllFromCart } = actions

export default reducer
export { addToCart, removeFromCart, changeQuantily, removeAllFromCart }
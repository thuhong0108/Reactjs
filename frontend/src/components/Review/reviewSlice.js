import { createSlice } from '@reduxjs/toolkit'

const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        reviewList: []
    },
    reducers: {
        addToReview(state, action) {
            state.reviewList.push(action.payload)
        }
    }
})

const { actions, reducer } = reviewSlice
const { addToReview } = actions

export default reducer
export { addToReview }
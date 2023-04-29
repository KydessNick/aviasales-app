import { createSlice } from '@reduxjs/toolkit'

// import { CHEAP } from '../../constants'

export const priceFilterSlice = createSlice({
    name: 'priceFilter',
    initialState: 'CHEAP',
    reducers: {
        setPriceFilter: (state, action) => (state = action.payload),
    },
})

export const { setPriceFilter } = priceFilterSlice.actions

export default priceFilterSlice.reducer

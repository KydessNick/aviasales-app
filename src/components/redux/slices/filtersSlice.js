import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    all: true,
    transfers: {
        0: true,
        1: true,
        2: true,
        3: true,
    },
    transfersCount: [0, 1, 2, 3],
}

const isAllTransfers = (obj) => {
    const values = Object.values(obj)
    const filteredValues = values.filter((val) => val === true)
    return values.length === filteredValues.length
}

const setAlltoValue = (obj, value) => {
    console.log(Object.entries(obj))
    console.log(value)
    const entries = Object.entries(obj).map((el) => {
        // console.log(el)
        return [el[0], value]
    })
    console.log(entries)
    console.log(Object.fromEntries(entries))
    return Object.fromEntries(entries)
}

const setTransfersCount = (obj) => {
    const keys = Object.keys(obj)
    return keys.reduce((arr, value) => {
        if (obj[value]) arr.push(Number(value))
        return arr
    }, [])
}

const filterTransferSlice = createSlice({
    name: 'filterTransfer',
    initialState,
    reducers: {
        setTransfersFilter: (state, action) => {
            state.transfers = { ...state.transfers, ...action.payload }
            state.all = isAllTransfers(state.transfers)
            state.transfersCount = setTransfersCount(state.transfers)
            return state
        },
        setAllTransfers: (state, action) => {
            console.log(action.payload)
            state = { ...action.payload, transfers: { ...setAlltoValue(state.transfers, action.payload.all) } }
            state.transfersCount = setTransfersCount(state.transfers)
            return state
        },
    },
})

export const { setTransfersFilter, setAllTransfers } = filterTransferSlice.actions

export default filterTransferSlice.reducer

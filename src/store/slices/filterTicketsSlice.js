import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const hasAnyEquiv = (a1, a2) => {
    const set1 = new Set(a1)
    const set2 = new Set(a2)

    const set = new Set([...set1, ...set2])
    const res = set.size < set1.size + set2.size

    return res
}

const filterByTransfers = (tickets, transfersCount) => {
    if (transfersCount.length === 0) return []
    if (transfersCount.length === 4) return tickets
    return tickets.filter((ticket) => {
        const stopsCounts = ticket.segments.map((segment) => segment.stops.length)
        return hasAnyEquiv(transfersCount, stopsCounts)
    })
}

const sortTicketsByCompare = (tickets, compareFunction) => [...tickets].sort(compareFunction)

const compareByPrice = (a, b) => a.price - b.price

const sumDuration = (segments) =>
    segments.reduce((sum, seg) => {
        sum += seg.duration
        return sum
    }, 0)

const compareByDuration = (a, b) => sumDuration(a.segments) - sumDuration(b.segments)

export const filterTickets = createAsyncThunk('filterTickets', (_, { getState }) => {
    const filtred = filterByTransfers(getState().tickets.tickets, getState().transfersFilter.transfersCount)
    return filtred
})

export const sortTickets = createAsyncThunk('sortTickets', (_, { getState }) => {
    switch (getState().priceFilter) {
        case 'CHEAP':
            return sortTicketsByCompare(getState().filteredTickets, compareByPrice)
        case 'FAST':
            return sortTicketsByCompare(getState().filteredTickets, compareByDuration)
        default:
            return getState().filteredTickets
    }
})

export const filteredTicketsSlice = createSlice({
    name: 'filteredTickets',
    initialState: [],
    reducers: {},
    extraReducers: {
        [filterTickets.fulfilled]: (state, action) => action.payload,
        [sortTickets.fulfilled]: (state, action) => action.payload,
    },
})

export default filteredTicketsSlice.reducer

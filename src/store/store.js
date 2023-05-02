import { configureStore } from '@reduxjs/toolkit'

import AviasalesServise from '../servises/aviasalesServises'

import filterTransfersReducer from './slices/filtersSlice'
import priceFilterReducer from './slices/priceFilterSlice'
import searchIDSliceReducer from './slices/searchIdSlice'
import ticktsSliceReducer from './slices/searchTicketsSlice'
import filteredTicketsSliceReducer from './slices/filterTicketsSlice'

const store = configureStore({
    reducer: {
        priceFilter: priceFilterReducer,
        transfersFilter: filterTransfersReducer,
        searchID: searchIDSliceReducer,
        tickets: ticktsSliceReducer,
        filteredTickets: filteredTicketsSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: new AviasalesServise(),
            },
            immutableCheck: { warnAfter: 512 },
            serializableCheck: { warnAfter: 512 },
        }),
})

export default store

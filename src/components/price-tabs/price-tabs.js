import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { sortTickets } from '../redux/slices/filterTicketsSlice'
import { setPriceFilter } from '../redux/slices/priceFilterSlice'
import Tabs from '../tabs/tabs'

function PriceTabs() {
    const tabs = [
        { name: 'CHEAP', label: 'Самый дешевый' },
        { name: 'FAST', label: 'Самый быстрый' },
        // { name: 'OPTIMAL', label: 'Оптимальный' },
    ]

    const filter = useSelector((state) => state.priceFilter)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(sortTickets())
    }, [filter])

    const changeHandler = useCallback(
        (value) => {
            dispatch(setPriceFilter(value))
        },
        [dispatch]
    )

    return <Tabs tabs={tabs} selectedTab={filter} onSelect={changeHandler} />
}

export default PriceTabs

import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setTransfersFilter, setAllTransfers } from '../redux/slices/filtersSlice'
import { filterTickets, sortTickets } from '../redux/slices/filterTicketsSlice'

import styles from './Filters.module.scss'

const checkboxFilters = [
    { id: 'all', name: 'all-transfers', label: 'Все' },
    { id: 0, name: 'no-transfer', label: 'Без пересадок' },
    { id: 1, name: '1_transfer', label: '1 пересадка' },
    { id: 2, name: '2_transfers', label: '2 пересадки' },
    { id: 3, name: '3_transfers', label: '3 пересадки' },
]

function Filters() {
    const filtersValue = useSelector((state) => state.transfersFilter)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(filterTickets()).then(() => dispatch(sortTickets()))
    }, [filtersValue])

    const changeHandler = useCallback(
        (id, value) => {
            console.log('c')
            dispatch(id === 'all' ? setAllTransfers({ [id]: !value }) : setTransfersFilter({ [id]: !value }))
        },
        [dispatch]
    )

    const transfers = checkboxFilters.map((el) => {
        let htmlFor = `checkbox-${el.name}`
        let value = el.id === 'all' ? filtersValue.all : filtersValue.transfers[el.id]
        return (
            <label htmlFor={htmlFor} className={styles.label} key={el.name}>
                <input
                    className={styles.input}
                    type="checkbox"
                    id={htmlFor}
                    checked={value}
                    onChange={() => changeHandler(el.id, value)}
                />
                <span className={styles.span}>{el.label}</span>
            </label>
        )
    })

    return (
        <form className={styles.filters}>
            <legend className={styles.title}>Количество пересадок</legend>
            {transfers}
        </form>
    )
}

export default React.memo(Filters)

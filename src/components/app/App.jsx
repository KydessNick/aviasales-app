import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CardList from '../CardList/CardList'
import Filters from '../Filters/Filters'
import Layout from '../Layout/Layout'
import Header from '../Header/Header'
import PriceTabs from '../price-tabs/PriceTabs'
import Loader from '../Loader/loader'
import ErrorAlert from '../ErrorAlert/ErrorAlert'
import { fetchSearchID } from '../redux/slices/searchIdSlice'
import { fetchTickets } from '../redux/slices/searchTicketsSlice'
import { filterTickets, sortTickets } from '../redux/slices/filterTicketsSlice'

import styles from './App.module.scss'

const App = () => {
    const dispatch = useDispatch()
    const searchID = useSelector((state) => state.searchID)
    const tickets = useSelector((state) => state.tickets)

    useEffect(() => {
        if (!searchID.id) dispatch(fetchSearchID())
        if (searchID.id && !tickets.stop && tickets.status !== 'loading' && tickets.status !== 'failed') {
            dispatch(fetchTickets(searchID.id))
                .then(() => dispatch(filterTickets()))
                .then(() => dispatch(sortTickets()))
        }
    }, [dispatch, searchID.id, tickets])

    return (
        <div className={styles.app}>
            <Header />
            <main>
                <Layout aside={<Filters />}>
                    <PriceTabs />
                    {!tickets.stop && searchID.status !== 'error' && tickets.status !== 'failed' && <Loader />}
                    {searchID.status === 'loading' && <Loader />}

                    {(searchID.status === 'error' || tickets.status === 'failed') && (
                        <ErrorAlert description="Ошибка при загрузке билетов, попробуйте позднее" />
                    )}
                    <CardList />
                </Layout>
            </main>
        </div>
    )
}

export default App

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import Card from '../card'
import CardList from '../card-list/card-list'
import Filters from '../filters/filters'
import Layout from '../layout/layout'
import Header from '../header/header'
import PriceTabs from '../price-tabs/price-tabs'
import Loader from '../loader/loader'
import ErrorAlert from '../errorAlert/errorAlert'
import { fetchSearchID } from '../redux/slices/searchIdSlice'
import { fetchTickets } from '../redux/slices/searchTicketsSlice'
import { filterTickets, sortTickets } from '../redux/slices/filterTicketsSlice'

import styles from './app.module.scss'

function App() {
    // const tickets = [
    //     {
    //         price: 92650,
    //         carrier: 'BT',
    //         segments: [
    //             {
    //                 origin: 'MOW',
    //                 destination: 'HKT',
    //                 date: '2023-05-24T17:55:58.877Z',
    //                 duration: 1086,
    //                 stops: ['DEL', 'HKG'],
    //             },
    //             {
    //                 origin: 'HKT',
    //                 destination: 'MOW',
    //                 date: '2024-02-27T08:37:08.952Z',
    //                 duration: 727,
    //                 stops: [],
    //             },
    //         ],
    //     },
    //     {
    //         price: 92650,
    //         carrier: 'BT',
    //         segments: [
    //             {
    //                 origin: 'MOW',
    //                 destination: 'HKT',
    //                 date: '2023-05-24T17:55:58.877Z',
    //                 duration: 1086,
    //                 stops: ['DEL', 'HKG'],
    //             },
    //             {
    //                 origin: 'HKT',
    //                 destination: 'MOW',
    //                 date: '2024-02-27T08:37:08.952Z',
    //                 duration: 727,
    //                 stops: [],
    //             },
    //         ],
    //     },
    //     {
    //         price: 92650,
    //         carrier: 'BT',
    //         segments: [
    //             {
    //                 origin: 'MOW',
    //                 destination: 'HKT',
    //                 date: '2023-05-24T17:55:58.877Z',
    //                 duration: 1086,
    //                 stops: ['DEL', 'HKG'],
    //             },
    //             {
    //                 origin: 'HKT',
    //                 destination: 'MOW',
    //                 date: '2024-02-27T08:37:08.952Z',
    //                 duration: 727,
    //                 stops: [],
    //             },
    //         ],
    //     },
    //     {
    //         price: 92650,
    //         carrier: 'BT',
    //         segments: [
    //             {
    //                 origin: 'MOW',
    //                 destination: 'HKT',
    //                 date: '2023-05-24T17:55:58.877Z',
    //                 duration: 1086,
    //                 stops: ['DEL', 'HKG'],
    //             },
    //             {
    //                 origin: 'HKT',
    //                 destination: 'MOW',
    //                 date: '2024-02-27T08:37:08.952Z',
    //                 duration: 727,
    //                 stops: [],
    //             },
    //         ],
    //     },
    //     {
    //         price: 92650,
    //         carrier: 'BT',
    //         segments: [
    //             {
    //                 origin: 'MOW',
    //                 destination: 'HKT',
    //                 date: '2023-05-24T17:55:58.877Z',
    //                 duration: 1086,
    //                 stops: ['DEL', 'HKG'],
    //             },
    //             {
    //                 origin: 'HKT',
    //                 destination: 'MOW',
    //                 date: '2024-02-27T08:37:08.952Z',
    //                 duration: 727,
    //                 stops: [],
    //             },
    //         ],
    //     },
    // ]

    const dispatch = useDispatch()
    const searchID = useSelector((state) => state.searchID)
    const tickets = useSelector((state) => state.tickets)
    // console.log(tickets)

    useEffect(() => {
        console.log(tickets)
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
                    {/* <CardList tickets={tickets} /> */}
                    <CardList />
                    {/* <button className={styles['show-more-btn']}> Показать еще 5 билетов</button> */}
                </Layout>
            </main>
        </div>
    )
}

export default App

// {
//     "name": "movies-app",
//     "version": "0.1.0",
//     "private": true,
//     "dependencies": {
//         "@testing-library/jest-dom": "^5.16.5",
//         "@testing-library/react": "^13.4.0",
//         "@testing-library/user-event": "^13.5.0",
//         "antd": "^5.1.7",
//         "date-fns": "^2.29.3",
//         "lodash": "^4.17.21",
//         "lodash.debounce": "^4.0.8",
//         "react": "^18.2.0",
//         "react-detect-offline": "^2.4.5",
//         "react-dom": "^18.2.0",
//         "react-scripts": "5.0.1",
//         "web-vitals": "^2.1.4",
//         "classnames": "^2.3.2",
//         "react-redux": "^8.0.5",
//         "redux": "^4.2.0",
//         "redux-devtools-extension": "^2.13.9",
//         "redux-thunk": "^2.4.2"
//     },
//     "scripts": {
//         "start": "react-scripts start",
//         "build": "react-scripts build",
//         "test": "react-scripts test",
//         "eject": "react-scripts eject",
//         "lint": "eslint --debug src/",
//         "lint:fix": "eslint --debug src/ --fix",
//         "format": "prettier --write src/**/*.js"
//     },
//     "eslintConfig": {
//         "extends": [
//             "react-app",
//             "react-app/jest"
//         ]
//     },
//     "browserslist": {
//         "production": [
//             ">0.2%",
//             "not dead",
//             "not op_mini all"
//         ],
//         "development": [
//             "last 1 chrome version",
//             "last 1 firefox version",
//             "last 1 safari version"
//         ]
//     },
//     "devDependencies": {
//         "eslint": "^8.2.0",
//         "eslint-config-airbnb": "^19.0.4",
//         "eslint-config-prettier": "^8.6.0",
//         "eslint-plugin-import": "^2.25.3",
//         "eslint-plugin-jsx-a11y": "^6.5.1",
//         "eslint-plugin-prettier": "^4.2.1",
//         "eslint-plugin-react": "^7.32.2",
//         "eslint-plugin-react-hooks": "^4.3.0",
//         "lint-staged": "^13.1.0",
//         "prettier": "2.8.3"
//     }
// }

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Card from '../card/card'

import styles from './cardlist.module.scss'

function CardList() {
    const filteredTickets = useSelector((state) => state.filteredTickets)

    const [cardsOnPage, setCardOnPage] = useState(5)

    useEffect(() => {
        if (cardsOnPage > 5) setCardOnPage(5)
    }, [filteredTickets])

    const items = (tickets, count) => {
        const cardlist = []
        console.log(count)
        if (!tickets) return cardlist
        for (let i = 0; i < count; i++) {
            const ticket = tickets[i]
            cardlist.push(<Card key={`${ticket.price}${ticket.carrier}${ticket.segments[0].date}`} ticket={ticket} />)
        }
        console.log(cardlist)
        return cardlist
    }

    if (!filteredTickets || filteredTickets.length === 0)
        return <div className={styles.noResults}>Рейсов, подходящих под заданные фильтры, не найдено</div>

    return (
        <ul className={styles.list}>
            {items(filteredTickets, cardsOnPage)}
            <button className={styles['show-more-btn']} onClick={() => setCardOnPage(cardsOnPage + 5)}>
                Показать еще 5 билетов
            </button>
        </ul>
    )
}

export default React.memo(CardList)

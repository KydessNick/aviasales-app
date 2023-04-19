import React from 'react'

import Card from '../card/card'

import styles from './cardlist.module.scss'

// import styles from './cardlist.module.scss'

const CardList = ({ tickets }) => {
    let idCounter = 0
    const items = tickets.map((el, ind) => {
        console.log(ind)
        return <Card key={idCounter++} ticket={el} />
    })
    return (
        <ul className={styles.list}>
            {items}
            <button className={styles['show-more-btn']}> Показать еще 5 билетов</button>
        </ul>
    )
}

export default CardList

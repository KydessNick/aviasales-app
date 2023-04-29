import { add } from 'date-fns'
import React from 'react'

import styles from './card.module.scss'

const datePrettier = (date) => {
    return date.getHours() + ':' + date.getMinutes()
}

const dateWithDuration = (date, duration) => {
    const hours = Math.floor(duration / 60)
    const minutes = duration % 60
    const added = add(date, {
        years: 0,
        months: 0,
        weeks: 0,
        days: 0,
        hours,
        minutes,
        seconds: 0,
    })
    return datePrettier(added)
}

const displayEnd = (arr) => {
    return arr.length > 0 ? (arr.length > 1 ? 'ки' : 'ка') : 'ок'
}

const Card = (props) => {
    const { ticket } = props
    const { price, carrier, segments } = ticket

    const items = segments.map((el, i) => {
        const date = new Date(el.date)
        const hours = Math.floor(el.duration / 60)
        const minutes = el.duration % 60
        const stops = el.stops
        return (
            <div className={styles.info} key={i}>
                <div className={styles['info-item']}>
                    <h3 className={styles.subtitle}>
                        {el.origin} – {el.destination}
                    </h3>
                    <span className={styles.text}>
                        {datePrettier(date)} – {dateWithDuration(date, el.duration)}
                    </span>
                </div>
                <div className={styles['info-item']}>
                    <h3 className={styles.subtitle}>В пути</h3>
                    <span className={styles.text}>
                        {hours}ч {minutes}м
                    </span>
                </div>
                <div className={styles['info-item']}>
                    <h3 className={styles.subtitle}>
                        {stops.length} Пересад{displayEnd(stops)}
                    </h3>
                    <span className={styles.text}>{stops.join(', ')}</span>
                </div>
            </div>
        )
    })

    return (
        <li className={styles.card}>
            <header className={styles.header}>
                <h2 className={styles.title}>{price} Р</h2>
                <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt={`${ticket.carrier} logo`} />
            </header>
            {items}
        </li>
    )
}

export default React.memo(Card)

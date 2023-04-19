import React from 'react'

import styles from './filters.module.scss'

const Filters = () => {
    return (
        <div className={styles.filters}>
            <h2 className={styles.title}>Количество пересадок</h2>
            <label className={styles.label}>
                <input type="checkbox" id="filter-all" className={styles.input} />
                <span htmlFor="filter-all" className={styles.span}>
                    Все
                </span>
            </label>
            <label className={styles.label}>
                <input type="checkbox" id="filter-no-transfer" className={styles.input} />
                <span htmlFor="filter-all" className={styles.span}>
                    Без пересадок
                </span>
            </label>
            <label className={styles.label}>
                <input type="checkbox" id="filter-one-transfer" className={styles.input} />
                <span htmlFor="filter-all" className={styles.span}>
                    1 пересадка
                </span>
            </label>
            <label className={styles.label}>
                <input type="checkbox" id="filter-two-transfers" className={styles.input} />
                <span htmlFor="filter-all" className={styles.span}>
                    2 пересадки
                </span>
            </label>
            <label className={styles.label}>
                <input type="checkbox" id="filter-three-transfers" className={styles.input} />
                <span htmlFor="filter-all" className={styles.span}>
                    3 пересадки
                </span>
            </label>
        </div>
    )
}

export default Filters

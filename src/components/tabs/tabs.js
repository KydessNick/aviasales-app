import React from 'react'

import styles from './tabs.module.scss'

const Tabs = ({ tabs }) => {
    const items = tabs.map((tab, i) => {
        const classNames = [styles.tabs__tab]
        //временное применения стиля active
        if (i === 0) classNames.push(styles.active)
        return (
            <button className={classNames.join(' ')} type="button" key={tab.name}>
                {tab.label}
            </button>
        )
    })
    return <div className={styles.tabs}>{items}</div>
}

export default Tabs

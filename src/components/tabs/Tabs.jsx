import React from 'react'

import styles from './Tabs.module.scss'

const Tabs = ({ tabs, selectedTab, onSelect }) => {
    const items = tabs.map((tab) => {
        const classNames = [styles.tabs__tab]
        if (tab.name === selectedTab) classNames.push(styles.active)
        return (
            <button className={classNames.join(' ')} type="button" key={tab.name} onClick={() => onSelect(tab.name)}>
                {tab.label}
            </button>
        )
    })
    return <div className={styles.tabs}>{items}</div>
}

export default React.memo(Tabs)

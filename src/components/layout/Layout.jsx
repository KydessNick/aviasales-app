import React from 'react'

import styles from './Layout.module.scss'

const Layout = ({ aside, children }) => {
    return (
        <div className={styles.layout}>
            <aside className={styles.layout__aside}>{aside}</aside>
            <section className={styles.layout__section}>{children}</section>
        </div>
    )
}

export default Layout

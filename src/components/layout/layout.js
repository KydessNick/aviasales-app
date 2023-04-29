import React from 'react'

import styles from './layout.module.scss'

const Layout = ({ aside, children }) => {
    // console.log(children)
    return (
        <div className={styles.layout}>
            <aside className={styles.layout__aside}>{aside}</aside>
            <section className={styles.layout__section}>{children}</section>
        </div>
    )
}

export default Layout

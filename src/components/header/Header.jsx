import React from 'react'

import logo from './ImgLogo/Logo.svg'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.header__logo} src={logo} alt="logo" />
        </header>
    )
}

export default Header

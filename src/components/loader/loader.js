import React from 'react'
import { Spin } from 'antd'

import styles from './loader.module.scss'

function Loader() {
    return <Spin size="large" tip="Loading" className={styles.appLoader} />
}

export default Loader

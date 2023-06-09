import React from 'react'
import { Alert } from 'antd'

import styles from './ErrorAlert.module.scss'

const ErrorAlert = ({ description }) => {
    return <Alert className={styles.errorMessage} message="ERROR" description={description} type="error" showIcon />
}

export default ErrorAlert

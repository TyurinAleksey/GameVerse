import React from 'react'
import styles from './ErrorMessage.module.scss'

function ErrorMessage() {
  return (
    <>
        <h2 className={styles.error}>По данному запросу не удалоснь найти ничего...</h2>
    </>
  )
}

export default ErrorMessage;
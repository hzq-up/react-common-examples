import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styles from './app.module.scss'

function App() {

  return (
    <div className={styles.container}>
      <h2>时间线</h2>
      <p className={styles.desc}>这是一个时间线组件的展示!</p>
      <div className={styles.timeLineBox}>

      </div>
    </div>
  )
}

export default App

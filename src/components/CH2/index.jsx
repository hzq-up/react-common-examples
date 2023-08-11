import styles from './index.module.scss'

// 自定义H2
export default function CH2({ style, children }) {
  return (
    <h2 style={style} className={styles.h}>{children}</h2>
  )
}
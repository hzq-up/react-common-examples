import styles from './index.module.scss'

// 自定义块盒子容器
export default function DescriptBlock({ children }) {
  return (
    <div className={styles.description}>
      {children}
    </div>
  )
}
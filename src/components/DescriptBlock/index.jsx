import styles from './index.module.scss'
function DescriptBlock({ children }) {
  return (
    <div className={styles.description}>
      {children}
    </div>
  )
}

export default DescriptBlock;
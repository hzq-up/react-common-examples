import styles from './index.module.scss'

// 自定义按钮
export default function CButton({className, style, onClick,children}) {
  return (
    <button className={`${className} ${styles.btn}`} style={style} onClick={onClick}>{children}</button>
  )
}
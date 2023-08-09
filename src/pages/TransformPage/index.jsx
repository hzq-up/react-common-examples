import { useState } from 'react'
import styles from './index.module.scss'
export default function TransformPage() {

  const [isTransform, setIsTransform] = useState(false);

  return (
    <div className={styles.container}>
      <h2>transfrom 多个值的执行顺序</h2>
      <div className={styles.description}>
        <p>transfrom 多个值的执行顺序是从右向左执行的，执行过程中的变形原点默认是图形最开始所在位置的中心点。</p>
      </div>
      <br />
      <br />
      <div className={styles.example}>
        <div className={styles.description}>
          <p >操作：x、y周平移100px，然后顺时针旋转100度</p>
          <button className={styles.btn} onClick={() => {
            setIsTransform(!isTransform)
          }}>执行操作</button>
        </div>
        <br />
        <div className={`${styles.box} ${isTransform && styles['transform-xy-100-rotate-100deg']}`}></div>
      </div>
    </div>
  )
}
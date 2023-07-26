import styles from './index.module.scss'
import boxImg from '@/assets/images/box.jpg'
function BoxMove() {


  return (
    <div className={styles.container}>
      <div className={styles.boxImg}>
        <img src={boxImg}></img>
        <div className={styles.box}>

        </div>
      </div>
    </div>
  )
}

export default BoxMove
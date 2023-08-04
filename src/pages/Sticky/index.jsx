import styles from './index.module.scss'
export default function Sticky() {

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <p >设置了sticky粘性定位的元素，定位是相对于第一个拥有滚动机制(无论是通过设置 overflow、overflow-x、overflow-y 还是 overflow:auto 等方式)的祖先元素。</p>
      </div>
      <div className={styles.main}>
        <h3>粘性定位Sticky</h3>
        <br />
        <div className={styles['sticky-example']}>
          <div>
            <h4 className={styles.title}>今日热榜</h4>
            <p>测试一下这个</p>
            <p>测试一下这个</p>
            <p>测试一下这个</p>
            <p>测试一下这个</p>
            <p>测试一下这个</p>
            <p>测试一下这个</p>
            <p>测试一下这个</p>
            <p>测试一下这个</p>
            <p>测试一下这个</p>
            <p>测试一下这个</p>
          </div>
          <div>
            <h4 className={styles.title}>周热榜</h4>
            <p>测试一下这个</p>
            <p>测试一下这个</p>
            <p>测试一下这个</p>
            <p>测试一下这个</p>
            <p>测试一下这个</p>
            <p>测试一下这个</p>
            <p>测试一下这个</p>
            <p>测试一下这个</p>
            <p>测试一下这个</p>
            <p>测试一下这个</p>
          </div>
          <div>
            <h4 className={styles.title}>月热榜</h4>
            <p>测试一下这个</p>
            <p>测试一下这个</p>
            <p>测试一下这个</p>
            <p>测试一下这个</p>
            <p>测试一下这个</p>
            <p>测试一下这个</p>
            <p>测试一下这个</p>
            <p>测试一下这个</p>
            <p>测试一下这个</p>
          </div>
        </div>
      </div>
    </div>
  )
}

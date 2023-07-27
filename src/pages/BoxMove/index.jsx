import { useEffect, useRef } from 'react'
import styles from './index.module.scss'
function BoxMove() {
  useEffect(() => {
    const imgContainer = document.querySelector(`.${styles.gridContainer}`)
    const imgs = document.querySelectorAll(`.${styles.boxImg} img`)
    const box = document.querySelector(`.${styles.box}`)
    for (const img of imgs) {
      img.onmouseenter = (e) => {
        const imgWidth = e.target.offsetWidth;
        const x = e.target.offsetLeft;
        const y = e.target.offsetTop;
        console.log(x, y)
        console.log(y - styles.gap.replace('px') + 'px')
        box.style.setProperty('top', y - styles.gap.replace('px', '') + 'px')
        box.style.setProperty('left', x - styles.gap.replace('px', '') + 'px')
        // const lineLength = 
      }
    }
    // .onmouseenter = () => {
    //   console.log('aa')
    // }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        {
          Array.from(new Array(9)).map((item, i) => {
            return <div key={i} className={styles.boxImg}>
              <img src={new URL(`@/assets/images/a1.jpg`, import.meta.url).href}></img>
            </div>
          })
        }
        <div className={styles.box}>

        </div>
      </div>
    </div>
  )
}

export default BoxMove
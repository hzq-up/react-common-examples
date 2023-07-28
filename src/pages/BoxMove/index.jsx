import { useEffect } from 'react'
import styles from './index.module.scss'
function BoxMove() {
  useEffect(() => {
    const imgs = document.querySelectorAll(`.${styles.boxImg} img`)
    const box = document.querySelector(`.${styles.box}`)
    for (const img of imgs) {
      img.onmouseenter = (e) => {
        // const imgWidth = e.target.offsetWidth;
        const x = e.target.offsetLeft;
        const y = e.target.offsetTop;

        box.style.setProperty('--x', x + 'px')
        box.style.setProperty('--y', y + 'px')
      }
    }
  }, [])


  const getImgSrc = (image) => {
    const src = `src/assets/images/${image}`
    return src;
  }

  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        {
          Array.from(new Array(9)).map((item, i) => {
            return <div key={i} className={styles.boxImg}>
              <img src={getImgSrc(`a${i + 1}.jpg`)}></img>
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
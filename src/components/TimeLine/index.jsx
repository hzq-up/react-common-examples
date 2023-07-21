import styles from './index.module.scss'

export default function TimeLine({ data = [] }) {

  return (
    <div className={styles.timeLineBox}>
      {
        data?.map(item => {
          return (
            <div className={styles.timeLine} key={item.time}>
              <div className={styles.topWrap}>
                <span className={styles.dot}></span>
                <span className={`${styles.time} ${styles.gapLeft8}`}>{item.time}</span>
              </div>
              <div className={styles.content}>
                <div>
                  <div className={styles.text}>
                    {
                      item.url
                        ? <a href={item.url} target='_blank'>{item.text}</a>
                        : item.text
                    }
                  </div>
                </div>
              </div>
            </div>

          )
        })
      }
    </div>
  )
}

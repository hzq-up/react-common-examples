import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styles from './app.module.scss'

function App() {

  const initData = [
    {
      time: '2020-06-30',
      text: '拿毕业证，大学生活结束了！',
    },
    {
      time: '2021-01-07 17:44',
      text: '在掘金发表了第一篇文章，归纳了 JavaScript 数组高阶函数',
      url: 'https://juejin.cn/post/6914951772922445832'
    },
    {
      time: '2021-03-28',
      text: '孤身一人前往深圳谋求发展。',
    },
    {
      time: '2021-05-01 16:20',
      text: '做了两个多小时的公交去大梅沙看海。',
    },
  ]

  return (
    <div className={styles.container}>
      <h2>时间线</h2>
      <p className={styles.desc}>这是一个时间线组件的展示!</p>
      <div className={styles.timeLineBox}>

        {
          initData.map(item => {
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
    </div>
  )
}

export default App

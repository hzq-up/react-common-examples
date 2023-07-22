import { Link } from "react-router-dom";
import TimeLinePage from '@/pages/TimeLinePage'
import styles from './index.module.scss'

export default function Index() {


  return (
    <div className={styles.container}>
      <div className={styles.siderBar}>
        <nav>
          <ul>
            <li>
              <Link to={'/timeLine'}>时间线</Link>
            </li>
            <li>
              <Link to={'/testPage'}>testPage</Link>
            </li>
            <li>
              <a href={`/contacts/2`}>错误页面</a>
            </li>
          </ul>
        </nav>
      </div>
      <main className={styles.main}>
        {/*TODO 根据路由显示对应的组件 */}
        <TimeLinePage></TimeLinePage>
      </main>
    </div>
  )
}

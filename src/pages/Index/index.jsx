import { Outlet, NavLink } from "react-router-dom";
import styles from './index.module.scss'

export default function Index() {


  return (
    <div className={styles.container}>
      <div className={styles.siderBar}>
        <nav>
          <ul>
            <li>
              <NavLink
                to={'/timeLine'}
                className={({ isActive, isPending }) =>
                  isPending ? styles.pending : isActive ? styles.active : ""
                }>
                时间线
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/testPage'}
                className={({ isActive, isPending }) =>
                  isPending ? styles.pending : isActive ? styles.active : ""
                }>
                testPage
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/cssText'}
                className={({ isActive, isPending }) =>
                  isPending ? styles.pending : isActive ? styles.active : ""
                }>
                Css文字相关
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/boxMove'}
                className={({ isActive, isPending }) =>
                  isPending ? styles.pending : isActive ? styles.active : ""
                }>
                boxMove
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/sticky'}
                className={({ isActive, isPending }) =>
                  isPending ? styles.pending : isActive ? styles.active : ""
                }>
                粘性定位Sticky
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/transformPage'}
                className={({ isActive, isPending }) =>
                  isPending ? styles.pending : isActive ? styles.active : ""
                }>
                css:transform
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/gradient'}
                className={({ isActive, isPending }) =>
                  isPending ? styles.pending : isActive ? styles.active : ""
                }>
                css:彩色斑马条纹边框
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/cssFilter'}
                className={({ isActive, isPending }) =>
                  isPending ? styles.pending : isActive ? styles.active : ""
                }>
                Css Filter
              </NavLink>
            </li>
            <li>
              <a href={`/contacts/2`}>错误页面</a>
            </li>
          </ul>
        </nav>
      </div>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

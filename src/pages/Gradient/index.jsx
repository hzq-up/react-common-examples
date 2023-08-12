import CH2 from '@/components/CH2'
import styles from './index.module.scss'
export default function Gradient() {

  // TODO 让框里面的文字超出的部分隐藏，并且显示省略号
  return (
    <div className={styles.container}>
      <CH2>彩色斑马条纹边框</CH2>
      <div className={styles.cardWrap}>
        <div className={styles.card}>
          <p className={styles.content}>
            React是一个流行的JavaScript前端框架，专注于构建用户界面。它由Facebook开发并开源，已经在Web开发领域取得了广泛的应用。
            React的核心概念之一是组件化。开发者可以将用户界面划分为多个独立的组件，每个组件负责特定的功能。这种模块化的方法使代码更易于管理、维护和重用。通过使用JSX（JavaScript XML），开发者可以在代码中以类似HTML的方式描述界面结构，这使得编写和理解界面变得更加直观。
            下面是我随便写的介绍，我乱编的哈！
          </p>
        </div>
      </div>
    </div>
  )
}

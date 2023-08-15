import styles from './index.module.scss'
function CUl({children}) {
  return ( 
    <ul className={styles.CUl}>
      {children}
    </ul>
   );
}

export default CUl;
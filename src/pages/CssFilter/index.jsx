import CButton from '@/components/CButton';
import CH2 from '@/components/CH2';
import DescriptBlock from '@/components/DescriptBlock';
import { useState } from 'react';
import styles from './index.module.scss'
function CssFilter() {

  const [toggle, setToggle] = useState(false)

  return (
    <div className={styles.container}>
      <CH2>毛玻璃效果</CH2>
      <br />
      <DescriptBlock>
        使用 backdrop-filter 属性，可以给一个元素的背面区域添加图形效果（如模糊、颜色偏移），从而创建出一种“毛玻璃”效果。
      </DescriptBlock>
      <br />
      <div className={styles.frostedGlassExample}>
        <div className={styles.frostedGlass}>
          AndyHu.com
        </div>
      </div>
      <br />
      <br />
      <CH2>灰度效果</CH2>
      <br />
      <DescriptBlock>
        使用 filter 属性，可以给元素添加图形效果（如模糊、颜色偏移），从而创建出一种“灰度”效果。
      </DescriptBlock>
      <br />
      <p>看下面例子：鼠标移入切换灰度效果</p>
      <br />
      <br />
      <div className={`${styles.grayscaleExample}`}>
        <img src="https://picsum.photos/3000/300" alt="" />
        <div className={`${styles.grayscale}`}></div>
      </div>
    </div>
  );
}

export default CssFilter;
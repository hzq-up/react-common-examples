import CButton from "@/components/CButton";
import CH2 from "@/components/CH2";
import CUl from "@/components/CUl";
import DescriptBlock from "@/components/DescriptBlock";
import { useState } from "react";
import styles from './index.module.scss'

function CssText() {

  const [toggle, setToggle] = useState(false);
  const [toggleBold, setToggleBold] = useState(false);

  return (
    <div className={styles.container}>
      <CH2>文字描边：text-shadow | -webkit-text-stroke</CH2>
      <DescriptBlock>
        <p>text-shadow：文字阴影</p>
        <p>-webkit-text-stroke：文字描边</p>
      </DescriptBlock>
      <br />
      <h4>这两个css属性都可以实现文字描边效果</h4>
      <br />
      <CButton onClick={() => setToggle(!toggle)}>切换文字透明</CButton>&emsp;
      <CButton onClick={() => setToggleBold(!toggleBold)}>切换粗体</CButton>
      <CUl>
        <li>text-shadow 可以通过设置六个方向的阴影来模拟文字描边效果，浏览器兼容性比较好，但通过放大可以看到描边效果不够平滑，且文字设置透明后，会显示阴影的颜色</li>
        <br />
        <div className={styles.exampleTextShadow}>
          <div className={`${styles.textShadow} ${toggle ? styles.textTransparent : ''} ${toggleBold ? styles.textBold : ''}`}>文字描边</div>
        </div>
        <br />
        <li>-webkit-text-stroke 设置文字描边效果，虽然浏览器兼容性不太好，但描边效果平滑，且可设置文字透明</li>
        <br />
        <div className={styles.exampleTextStroke}>
          <div className={`${styles.textStroke} ${toggle ? styles.textTransparent : ''} ${toggleBold ? styles.textBold : ''}`}>文字描边</div>
        </div>
        <br />
      </CUl>
      <br />
    </div>
  );
}

export default CssText;
## 介绍
styed-components 是一个基于 JavaScript 的样式库，它通过标签模板字符串的方式样式化组件，它允许我们使用 JavaScript 直接编写 CSS 样式，并且样式是组件级隔离。


## 基础用法
首先导入模块 styled-components,
`import styled from 'styled-components'`；</br>

然后我们可以通过这个 `styled` 函数创建 `React`组件(component) 或标签(tagname)。既然创建的是 `React` 组件，使用的时候当做普通的 `React` 组件使用就行了。

通过 `styled.tagname` 这种**标签模板字符串**的语法来创建样式化组件，其中 `tagname` 就是 html 的标签名。

### 创建自定义样式化标签
```javascript
  const Button = styled.button`
    background: blue;
    border-radius: 3px;
    border: none;
    color: white;
  `
```

```javascript
<Button>Click Me</Button>
```

### 样式化组件的样式可以被继承，也可以被覆盖
```javascript
  const Button = styled.button`
    background: blue;
    border-radius: 3px;
    border: none;
    color: white;
  `

  const TomatoButton = styled(Button)`
    background: tomato;
  `
```
```javascript
<Button>Click Me</Button>
<TomatoButton>Click Me</TomatoButton>
```


### 通过传参创建动态样式
```javascript
const padding = '10px'
export const Section = styled.section`
  color: white;

  /* ES 的插值语法引入变量 */
  padding: ${padding};

  /* 通过组件props 传参 */
  background: ${props => props.$background};
`
```
使用的时候传入 background 参数即可
```javascript
<Section $background={'red'}>
  Section
</Section>
```
> 注意：使用 ES 的插值语法时，不支持 伪类选择器、媒体查询、嵌套等！


> **注意：带 $ 的参数是临时属性(Transient props)不会作用底层 React 节点或渲染到 DOM 元素，而是仅作为插值函数的参数。**


### `styledComponent`(样式化组件)可以像普通的React组件一样使用任何属性，如果该属性是有效属性，便会作用于 HTML 节点，否则仅作为插值函数的参数。


```javascript
export const MyInput = styled.input`
  border: 1px red solid;
  padding:${props => props.padding};
`
```

```javascript
<MyInput type={"password"} padding={'10px'}></MyInput>
```


### 用 .attrs 给样式化组件添加属性值
> styled-components 允许你给样式化组件添加属性，这些属性会作用于组件的 HTML 节点，而不是作为插值函数的参数,
> 
> 注意：.attrs 方法只接受一个参数，即样式化组件的静态属性对象或者是一个返回属性对象的函数。

在平常开发中，通常有这么几种使用方式
* 设置默认属性 添加通用样式
```javascript
export const MyInput = styled.input.attrs({
  type: 'password',
  style: {
    padding: '10px'
  }
})`
  border: 1px red solid;
`
```
```javascript
<MyInput></MyInput>
```

* 动态计算属性值

用函数属性来根据组件的 props 动态计算属性值。基于不同条件给组件添加属性值
```javascript
export const MyButton = styled.button.attrs(props => ({
  style: {
    backgroundColor: props.variant === 'primary' ? 'blue' : 'gray'
  }
}))
  `
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  `
```

```javascript
<MyButton variant='primary'>主题按钮</MyButton>
```

* 提供默认交互行为
```javascript
export const MyButton = styled.button.attrs(props => ({
  style: {
    backgroundColor: props.variant === 'primary' ? 'blue' : 'gray'
  },
  onClick: () => console.log('Button clicked!'),
}))
  `
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  `
```

```javascript
<MyButton variant='primary'>主题按钮</MyButton>
```

### 多态属性(polymorphic prop) as
多态属性是指你可以在组件中通过一个属性来控制最终渲染的 HTML 元素类型或自定义组件类型。

比如我们写导航栏组件的时候，有些是菜单栏，有些是按钮，有些是链接，但所有的样式都相同，这时候我们可以通过这个多态属性来控制最终渲染成什么html标签或者自定义组件。

* 使用多态属性动态创建标签
```javascript
export const Component = styled.div`
  font-family: "Microsoft YaHei";
  padding: 10px 10px;
  line-height: 1;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: 14px;
  background-color: blue;
  color: white;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
`;

```

```javascript
// 这个样式化组件最终会渲染成 a 标签
<Component as="a" href="https://www.baidu.com">button</Component>
<br/>
// 这个样式化组件最终会渲染成 button 标签
<Component
  as="button"
  onClick={() => alert('这是个按钮')}
>
  button
</Component>
```

* 使用 `forwardedAs` 属性来传递被包裹组件的多态属性值。

如果一个组件被另一个或多个组件包裹着，外层组件可以通过 `forwardedAs` 属性来传递多态属(`as`)性值到内部组件。

看下面例子：

```javascript
export const Component = styled.button`
  font-family: "Microsoft YaHei";
  padding: 10px 10px;
  line-height: 1;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: 14px;
  background-color: blue;
  color: white;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
`;

export const WrappedButton = (props) => {

  return <div>
    <Component {...props} />
  </div>;
}


// 使用 styled() 高阶组件包装 Component，并传递 as 属性
const WrappedComponent = styled(WrappedButton)`
  /* 这里可以添加额外样式 */
`;
```

```javascript
<WrappedComponent forwardedAs="a" href="https://www.baidu.com">
  Wrapped Link Button
</WrappedComponent>
```

### 控制属性传递（属性过滤器）
> 默认情况下，所有被包裹组件的属性值都会被传递到内部组件。而临时属性不会传递到最终渲染的 react 组件上。那假如我需要动态控制某些属性值能不能传递到最终渲染的 react 组件上时，就可以通过 `shouldForwardProp` 属性来控制。可以它当做一个属性过滤函数，类似 `Array.filter` 方法。

```javascript
export const Comp = styled('div').withConfig({
  shouldForwardProp: (prop) => !['customProp'].includes(prop),
})`
  color: ${props => props.color};
`;
```

```javascript
  <Comp color='red' customProp="test">hello</Comp>
```

**注意：这里面的变量color不能使用临时属性(带$的属性)，临时属性的值是不会传递到最终渲染的组件上**

## 高阶用法

### 使用 `ThemeProvider` 定义主题
> 通过 `ThemeProvider` 可以将定义的主题样式注入到组件树中其下方任意位置的所有样式组件中，或者可以说是：将定义的样式作用在被 `ThemeProvider` 包裹的所有子组件上。

```javascript
const Box = styled.div`
  color: ${props => props.theme.color};
`
```

```javascript
import {ThemeProvider} from "styled-components";

// theme: 一个对象，将作为 theme 注入到组件树下样式组件的所有插值中。
<ThemeProvider theme={{ color: 'green' }}>
  <Box>ThemeProvider</Box>
</ThemeProvider>
```


### 从 `ThemeProvider` 中获取当前主题样式 `theme`

* 使用 `withTheme` 高阶组件获取

```javascript
import { withTheme } from 'styled-components'

function MyComponent({theme}){
  return <div>{JSON.stringify(theme)}</div>
}

export default withTheme(MyComponent)
```

* 使用 `useTheme` 钩子函数获取

```javascript
import { useTheme } from 'styled-components'


export default function MyComponent() {
  const theme = useTheme()
  return <div>
    当前自定义主题:
    <br/>
    {JSON.stringify(theme)}
  </div>
}
```

* 使用 `ThemeConsumer` 组件将当前主题样式传递给子函数
 
```javascript
import { ThemeConsumer } from 'styled-components'

export default function OrderList({theme}) {
  return (
    <ThemeConsumer>
      {theme => <div>The theme color is {theme.color}.</div>}
    </ThemeConsumer>
  )
}
```


### 通过 `css` 方法定义样式
> 有时候，仅仅是为了给组件添加某个额外的样式，如果通过 `styled()` 方法创建组件，那就会显得有些繁琐。这时，我们可以通过 `css` 方法来添加额外组件。它适用于普通 HTML 标签和组件，并支持任何样式化组件(`styled component`)支持的所有内容，包括基于 props、主题和自定义组件进行调整。

> 要启用对 css 属性的支持，您必须使用 Babel 插件。 

例如：下面的例子：

```javascript
import styled from 'styled-components/macro'

<div
  css={`
    background: papayawhip;
    color: ${props => props.theme.colors.text};
  `}
/>

<Button
  css="padding: 0.5em 1em;"
/>
```

Babel 插件将任何带有 css 属性的元素转换为样式化组件(`styled component`)。上面的diamante将会转换成：

```javascript
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: papayawhip;
  color: ${props => props.theme.colors.text};
`

const StyledButton = styled(Button)`
  padding: 0.5em 1em;
`

<StyledDiv />
<StyledButton />

```

### 使用 `createGlobalStyle` 创建全局样式 
> 通常，样式化组件会自动将范围限定为本组件内，样式组件级隔离；而全局样式组件允许我们创建一个样式表，该样式表会作用域全局，所有组件该样式表。

例如：透明通常给 `body` margin padding 以及动态的修改背景，
```javascript
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${props => (props.$whiteColor ? 'white' : 'black')};
  }
```

```javascript
<GlobalStyle $whiteColor />
```

> 被 `<ThemeProvider>` 包裹着的全局样式组件 (`<GlobalStyle/>`) 也可以访问到 `<ThemeProvider>` 中定义的主题样式

```javascript
<ThemeProvider theme={{ fontFamily: 'Helvetica Neue' }}>
  <React.Fragment>
    <GlobalStyle $whiteColor />
  </React.Fragment>
</ThemeProvider>
```

### 用 `css` 函数创建样式块
> 我们可以通过 `css` 函数创建一个样式块，该函数接收一个带有 CSS 和插值的标记模板文字的参数,返回一个插值数组，它是一个扁平化的数据结构，我们可以将其作为插值本身进行传递。

```javascript
export const commonCss = css`
  color: white;
  background-color: #1677FF;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  color:  ${props => props.$color ? props.$color : 'white'};
`

export const MyButton = styled.button`
  ${props => props.$primary ? commonCss : 'color: blue'}
`
```

```javascript
<MyButton $primary $color="black">按钮</MyButton>
```

### 创建动画关键帧
使用 `keyframes` 函数创建动画关键帧辅助函数，改函数返回要在动画声明中使用的关键帧模型,可以在返回的模型上使用 `getName()` 获取生成的动画名称

> **注意： 在 styled-components v3 及以下版本中， keyframes 帮助器直接返回动画名称，而不是使用 getName 方法返回对象。**

```javascript
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const FadeInButton = styled.button`
  animation: 1s ${fadeIn} ease-out;
`
```

```javascript
<FadeInButton>按钮</FadeInButton>
```

## 源码解析
> 首先拉取 styled-components 仓库，然后找到 /packages/styled-components 文件夹，核心代码都放在这个文件夹里；为了方便，后面会把 styled-components 简写为 sc。

### 如何阅读源代码？
当我们对该项目有所了解的时候，我个人通常是采用那面两种方法结合使用。
* 第一种：当我们使用过该项目的一些 api ，对于某个功能是如何实现的，带着这个问题去看，比如当我们使用 styled 函数的时候，我们会想到 styled 函数应该是通过 `document.createElement` 来创建 `<style>` 标签来实现样式化的，然后全局搜索 `document.createElement` 快速定位到。这种方式适合看具体单独的某个功能如何实现。
* 第二种：从入口文件看起，根据导入、导出的文件，找到对应的文件，一层一层剥开，但是这种在比较复杂的项目中，可能需要花比较长的时间才能理清逻辑。这个时候我们就需要通过打断点的方式，来调试代码，找到一些关键函数的调用关系，梳理清楚主要逻辑。

对于 sc 这个项目我是采用两种方式结合使用。

### makeStyleTag 创建 style 标签
一开始我就通过 `document.createElement('style')` 定位到 `makeStyleTag` 函数。代码所在文件：


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c94449e6de974b0ab4792aa385888c71~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=244&h=485&e=png&b=202429)

代码非常简单易懂，这是去掉类型后的代码：

```javascript
export const makeStyleTag = (target) => {
  const head = document.head;
  const parent = target || head;
  const style = document.createElement('style');
  // style 标签的插入位置
  const prevStyle = findLastStyleTag(parent);
  const nextSibling = prevStyle !== undefined ? prevStyle.nextSibling : null;

  // 自定义属性 data-set
  style.setAttribute(SC_ATTR, SC_ATTR_ACTIVE);
  style.setAttribute(SC_ATTR_VERSION, SC_VERSION);

  const nonce = getNonce();

  // 设置 style 标签的 nonce 属性：一种加密的随机数（一次使用的数字）
  if (nonce) style.setAttribute('nonce', nonce);

  // 在父节点里的最后一个子节点的位置插入新的 style 节点
  parent.insertBefore(style, nextSibling);

  return style;
};
```
我们可以看到，这个函数主要做了以下几件事：
1. 获取父节点，如果没有传入，则默认获取 `document.head`
2. 获取父节点的最后一个 `<style>` 标签，如果没有，则返回 `null`
3. 创建 `<style>` 标签，并设置了自定义属性
4. 设置 `<style>` 标签的 `nonce` 属性
5. 将 `<style>` 标签插入到父节点的最后一个子节点的位置，然后返回 style 节点。

### 标签模板字符串
通过第一篇文章，我们知道通过 `styled.div` 和 `styled.div()` 都能创建一个样式化的 `<div>` 标签，这是怎么回事？来看一个例子：


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b8e541617c34459fbb94d41b93ee9cad~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=601&h=116&e=png&b=212225)

这其实是 ES6 的一个新语法：[模板字符串](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals)，在这可以把它看做是一个函数，接受传参。

### styled 函数
我们找到入口文件：packages/styled-components/src/index.ts，
```javascript
import styled from './constructors/styled';

export * from './base';
export {
  CSSKeyframes,
  CSSObject,
  CSSProp,
  CSSProperties,
  CSSPseudos,
  DefaultTheme,
  ExecutionContext,
  ExecutionProps,
  IStyledComponent,
  IStyledComponentFactory,
  IStyledStatics,
  PolymorphicComponent,
  PolymorphicComponentProps,
  RuleSet,
  Runtime,
  StyledObject,
  StyledOptions,
  WebTarget,
} from './types';
export { styled as default, styled };

```
默认导出的 styled 函数是从 packages/styled-components/src/constructors/styled.tsx 导出的，找到它，去掉类型后的代码方便阅读。

```javascript 
import createStyledComponent from '../models/StyledComponent';

// HTML 标签列表
import domElements from '../utils/domElements';
import constructWithOptions from './constructWithOptions';

// 创建基础的 styled 方法
const baseStyled = (tag) =>
 constructWithOptions(createStyledComponent, tag);
 
const styled = baseStyled;

// 实现通过 styled[domElement] 和 styled(domElement) 都能创建样式化组件
domElements.forEach(domElement => {
 styled[domElement] = baseStyled(domElement);
});

export default styled;

```
### componentConstructor 构造样式化组件

我们看到通过 `styled` 函数是基础的 `styled` 方法：`baseStyled` 调用了 `constructWithOptions` 方法,找到 `constructWithOptions` 方法所在的 src/constructors/constructWithOptions.ts，去掉类型后关键的代码如下

```javascript
import css from './css';

export default function constructWithOptions(componentConstructor, tag, options) {

 const templateFunction = (initialStyles, ...interpolations) =>
   componentConstructor(tag, options, css(initialStyles, ...interpolations));
 
 // 返回样式化组件
 return templateFunction;
 
}
```
`constructWithOptions` 函数的核心是 `templateFunction` 方法，它调用组件的构造方法 `componentConstructor`返回一个样式化组件(携带样式的组件)。


源码解析参考链接:

https://blog.csdn.net/dKnightL/article/details/120825367

https://juejin.cn/post/6885911421167599623#heading-4

https://juejin.cn/post/6905166914234875911

https://github.com/wangpin34/blog/issues/49

https://www.51cto.com/article/719419.html


链接：
https://styled-components.com/docs/api#primary

https://styled-components.com/docs/advanced#tagged-template-literals

https://styled-components.com/docs/basics

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


链接：
https://styled-components.com/docs/api#primary

https://styled-components.com/docs/advanced#tagged-template-literals

https://styled-components.com/docs/basics

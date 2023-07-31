export default function Index() {

  let lastExecutionTime = Date.now();
  const interval = 1000; // 定时器的执行频率为1秒
  
  const doSomething = () => {
    // 执行你的定时任务
    console.log('执行定时任务');
  
    // 更新上次执行时间
    lastExecutionTime = Date.now();
  };
  
  const animationLoop = () => {
    const currentTime = Date.now();
    const elapsedTime = currentTime - lastExecutionTime;
  
    // 当距离上次执行的时间大于等于定时器的频率时，执行任务
    if (elapsedTime >= interval) {
      doSomething();
    }
  
    // 继续执行下一帧
    requestAnimationFrame(animationLoop);
  };
  
  // 开始动画循环
  animationLoop();

  return (
    <div >
      测试切换tab页面任然执行定时任务
    </div>
  )
}

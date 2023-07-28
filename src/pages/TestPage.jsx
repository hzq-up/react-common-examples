export default function Index() {


  let lastExecutionTime = Date.now();
  const interval = 1000; // 定时器的执行频率为1秒
  
  const doSomething = () => {
    // 执行你的定时任务
    console.log('执行定时任务');
  
    // 更新上次执行时间
    lastExecutionTime = Date.now();
  
    // 使用 requestAnimationFrame 来触发下一次定时任务
    requestAnimationFrame(doSomething);
  };
  
  // 开始执行定时任务
  // requestAnimationFrame(doSomething);

  return (
    <div >
      测试切换tab页面任然执行定时任务
    </div>
  )
}

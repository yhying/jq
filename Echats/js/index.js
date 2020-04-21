window.onload = function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('chart1'));
  var myChart2 = echarts.init(document.getElementById('chart2'));

  // 指定图表的配置项和数据
  var option = {
    color: ['#749f83'],
    /* 系列柱的颜色 */
    backgroundColor: '#2f4554',
    title: {
      text: '前端人才市场需求分析',
      left: 'center',
      padding: 12,
      textStyle: {
        color: '#fff',
        fontSize: 24,
      }
    },
    grid: {
      /* 坐标系位置 */
      left: '5%',
      right: '5%',
      top: '10%',
      bottom: '5%',
      containLabel: true
    },
    tooltip: {},
    legend: {
      data: ['销量'],
      left:'20%',
      top:'10%',
      textStyle: {
        color: '#fff',
      }
    },
    xAxis: {
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisLine: {
        lineStyle: {
          color: '#fff' /* X或Y轴颜色 */
        }
      },
      nameTextStyle: {
        fontSize: 18
      }
    },
    yAxis: {
      nameTextStyle: {
        fontSize: 18
      },
      axisLine: {
        lineStyle: {
          color: '#fff' /* X或Y轴颜色 */
        }
      }
    },
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  let res = [
    [100, 300, 600, 900, 1200, 3000, 500],
    [200, 400, 800, 500, 2000, 1000, 400],
    [300, 700, 500, 940, 100, 3000, 1500]
  ]
  // 设置定时器定时刷新数据
  setInterval(freshData,2000)
  function freshData(){
    let i=Math.floor(Math.random()*res.length)
    // console.log(i)
    option.series[0].data = res[i]
    // console.log(option.series)
    myChart.setOption(option);
  }
  freshData();
  // 自适应
  window.onresize=function(){ /* 监听窗口变化 */
    console.log(1111)
    myChart.resize(); /* 图表自适应 */
    myChart2.resize();
  }

  // 折线图
  var option2 = {
    color: ['#749f83'],
    /* 系列柱的颜色 */
    backgroundColor: '#2f4554',
    title: {
      text: '前端人才市场需求分析',
      left: 'center',
      padding: 12,
      textStyle: {
        color: '#fff',
        fontSize: 24,
      }
    },
    grid: {
      /* 坐标系位置 */
      left: '5%',
      right: '5%',
      top: '10%',
      bottom: '5%',
      containLabel: true
    },
    tooltip: {
    },
    legend: {
      data: ['销量'],
      left:'20%',
      top:'10%',
      textStyle: {
        color: '#fff',
      }
    },
    xAxis: {
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      nameTextStyle: {
        fontSize: 18
      },
      axisLine: {
        lineStyle: {
          color: '#fff' /* X或Y轴颜色 */
        }
      }
    },
    yAxis: {
      nameTextStyle: {
        fontSize: 18
      },
      axisLine: {
        lineStyle: {
          color: '#fff' /* X或Y轴颜色 */
        }
      }
    },
    series: [{
      name: '销量',
      type: 'line',
      data: [5, 20, 36, 10, 10, 20]
    }]
  };
  myChart2.setOption(option2);
}
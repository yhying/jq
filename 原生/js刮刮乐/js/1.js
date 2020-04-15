window.onload = function () {
    // 获取画布元素
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')
    // ctx.lineWidth=3; /* 线条宽度 */
    // ctx.strokeStyle='red' /* 线条颜色 */
    // ctx.moveTo(10,10) /* 起始地点 */
    // ctx.lineTo(100,10) /* 去往地点 */
    // ctx.stroke() /* 执行 */
    // 鼠标拖动事件
    // canvas.onmousemove=function(e){
    //     ctx.lineTo(e.clientX,e.clientY)
    //     ctx.stroke()
    // }

    // 矩形
    ctx.rect(0, 0, 300, 100) /* 左上角X,左上角Y,width,height */
    ctx.fillStyle = '#ccc' /* 矩形填充颜色 */
    ctx.fill() /* 执行填充 */
    // 按下事件
    canvas.onmousedown = function (e) {
        canvas.onmousemove = function (e) {
            ctx.clearRect(e.clientX, e.clientY, 20, 20)
        }
    }
    // 松开事件
    canvas.onmouseup = function (e) {
        canvas.onmousemove = null; /* 清除滑动事件 */
    }
    // 中奖信息
    var arr = ['五百万', '海景别墅', '香港三日游', '4999现金', 'vivoX21一部', '5元', '谢谢惠顾']
    var price = document.querySelector('.price')
    // 取随机数
    let i = Math.floor(Math.random() * arr.length)
    price.innerHTML = arr[i]
}
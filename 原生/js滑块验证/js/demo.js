window.onload = function () {
    var box = document.querySelector('.box')
    var btn = document.querySelector('.btn')
    var bgc = document.querySelector('.bg')
    var text = document.querySelector('.text')
    // 验证是否通过
    var flag=false;
    // console.log(box.offsetWidth)
    // console.log(btn.offsetWidth)
    btn.onmousedown = function (e) {
        // 按下后与x轴的距离
        var downMoveX = e.clientX
        // console.log(downMoveX)
        btn.onmousemove = function (e2) {
            var MoveX = e2.clientX - downMoveX
            // console.log(MoveX)
            // console.log(btn.offsetWidth)
            if (MoveX > 0) {
                this.style.left = MoveX + 'px'
                bgc.style.width = MoveX + 'px'
                if (MoveX >= (box.offsetWidth - btn.offsetWidth)) {
                    flag=true;
                    text.innerHTML = '验证成功'
                    text.style.color = '#fff'
                    // 事件清除
                    this.onmousemove = null;
                    this.onmousedown = null;
                    setInterval(() => {
                        box.style.display = 'none'
                    }, 2000)
                }
            } else {
                this.style.left = 0;
            }
        }
    }
    btn.onmouseup = function (e) {
        this.onmousemove = null;
        if(flag) return;
        this.style.left = 0;
        bgc.style.width = 0;
    }
}

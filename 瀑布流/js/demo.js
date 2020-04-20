// $(function () {   /* 等到dom加载完成执行 */
//     waterFull();
// })
$(window).on('load',function(){  /* 等到图片，dom都加载完成执行 */
    waterFull();
})
function waterFull() {
    // 求出列数
    let box = $('.box')
    let boxWidth = box.outerWidth(); /* 当前图片宽度 outerWidth(),innerWidth(); */
    let ScreenWidth = $(window).width(); /* 当前窗口宽度 */
    let cols = parseInt(ScreenWidth / boxWidth);
    console.log(cols)
    // 创建存储高度数组
    let heightArr = [];
    // 遍历图片，除第一排不需要定位，取高度，其他排定位处理
    $.each(box, function (i, item) {
        // console.log(item)
        let boxHeight = $(item).outerHeight();
        if (i < cols) {
            heightArr[i] = boxHeight
        } else {
            // 最小图片高度
            let minBoxheight = Math.min(...heightArr);
            let minBoxIndex = $.inArray(minBoxheight, heightArr)
            $(item).css({
                position: 'absolute',
                left: minBoxIndex * boxWidth + 'px',
                top: minBoxheight + 'px'
            })
            // 高度追加
            heightArr[minBoxIndex] += boxHeight
        }
    })
}
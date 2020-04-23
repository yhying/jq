$(function () {
    let pageNum = 1 /* 页码 */
    let pageSize = 4 /* 条数 */
    showData(pageNum++,pageSize);
    // console.log($(window))
    // 滚动条触底 注意，html,body 不能设置100%高度，否则滚动无效
    $(window).scroll(function () {   
        console.log(this)
        let scrollTop =Math.ceil($(this).scrollTop()) /* 滚动条与顶部高度 */
        let curHeight = $(this).height() /* 当前可视页面高度 */ 
        let totalHeight = $(document).height() /* 页面的内容总高度 */
        // console.log(scrollTop, curHeight, totalHeight)
        if(scrollTop+curHeight>=totalHeight){
            alert('加载到底了')
            showData(pageNum++,pageSize)  /* 滚到底部，页码加一 */
        }
    })
});

function showData(pageNum,pageSize) {
    $.ajax({
        type: 'GET',
        // url: 'http://localhost:3001/api/index/list/'+pageNum+'/'+pageSize,  /*  */
        url: 'http://localhost:3001/api/index/list',
        dataType: 'json',
        success: function (res) {
            let data = res.data.data
            console.log(data)
            $.each(data, (index, item) => {
                $('.main ul').append(`<li class="lists">
                <img data-original="${item.list_img}" src="img/load.gif">
                <label>
                    <b class="discount">折扣价:${item.list_price}</b>
                    <span class="price-text">原价:${item.list_uprice}</span>
                </label>
            </li>`)
            })
            $('.main ul img').lazyload({
                effect: "fadeIn",
                // threshold:200
            })
        }
    })
}
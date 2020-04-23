$(function () {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/api/index/list',
        dataType: 'json',
        success: function (res) {
            let data = res.data.data
            console.log(data)
            $.each(data, (index, item) => {
                $('.main ul').append(`<li class="lists">
                <img src="${item.list_img}" alt="">
                <label>
                    <b class="discount">折扣价:${item.list_price}</b>
                    <span class="price-text">原价:${item.list_uprice}</span>
                </label>
            </li>`)
            })
        }
    })
})
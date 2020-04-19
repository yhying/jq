$(function () {
    // 获得焦点，用户名
    $('.login-content input').on('focus', function () {
        $(this).next().fadeOut()
        $('.msg-tip').fadeOut(1000);
    })
    // 失去焦点
    $('.login-content input').on('blur', function () {
        let filter, text1, text2;
        console.log($(this).attr('name'))
        switch ($(this).attr('name')) {
            case 'mobile':
                text1 = '手机号不能为空',
                    text2 = '手机号格式不对',
                    filter = /^1[3456789]\d{9}$/;
                break;
            case 'password':
                text1 = '密码不能为空',
                    text2 = '密码必须字母开头6-18位',
                    filter = /^[a-zA-Z]\w{5,17}$/; /* 密码必须字母开头6-18位*/
                break;
        }
        valida($(this), filter, text1, text2)
    })
    // $('.mobile').on('blur', function () {
    //     let val = $(this).val()
    //     let filter = /^1[3456789]\d{9}$/;
    //     valida($(this),filter,'手机号不能为空','手机号格式不对')
    // })
    // // 失去焦点
    // $('.password').on('blur', function () {
    //     let val = $(this).val()
    //     let filter = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/; /* 字母和数字 */
    //     valida($(this),filter,'密码不能为空','密码必须包含字母和数字')
    // })
    // 验证方法
    function valida(cur, filter, text1, txet2) {
        if (cur.val() == '') {
            cur.next().fadeIn().text(text1)
        } else if (!filter.test(cur.val())) {
            cur.next().fadeIn().text(txet2)
        } else {
            cur.next().fadeOut()
        }
    }
    // 点击登录
    $('.login-content .login').on('click', function () {
        let _mobile = $.trim($('.mobile').val())
        let _password = $.trim($('.password').val())
        let data = {
            mobile: _mobile,
            password: _password
        }
        if (!_mobile || !_password || $('.panel .error-tip').is(':visible')) {
            $('.msg-tip').fadeIn(1000);
        } else {
            $.ajax({
                type: 'POST',
                url: 'http://localhost:3001/api/login',
                data: data,
                dataType: 'json',
                success: function (res) {
                    if(res.code=='200'){
                        $('.msg-tip').fadeOut(1000);
                        window.location.href='https://github.com/yhying'
                    }
                }
            })
        }
    })
})
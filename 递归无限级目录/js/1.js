var data = [{
    name: 'IT互联网',
    child: [{
            name: '编程语言',
            child: [{
                name: 'java'
            }, {
                name: 'C#',
                child: [{
                    name: 'unit1'
                }, {
                    name: 'unit2',
                    
                }]

            }]
        },
        {
            name: '移动开发',
            child: [{
                name: 'android开发'
            }, {
                name: 'ios开发'
            }]
        }
    ]
}, {
    name: '设计创作',
    child: [{
            name: '平面设计',
            child: [{
                name: '电商美工'
            }, {
                name: '综合平面设计'
            }]
        },
        {
            name: 'UI设计',
            child: [{
                name: '交互设计'
            }, {
                name: 'webUi设计'
            }]
        }
    ]
}, {
    name: '升学考研',
    child: [{
        name: '考研',
        child: [{
            name: '大学'
        }, {
            name: '高中'
        }]
    }]
}]
$(function () {
    // 拼接,已知层级，3层
    // var str = '<ul>'
    // data.forEach(item => {
    //     str += `<li>${item.name}`
    //     if (item.child) {
    //         console.log(item.child)
    //         str += '<ul>'
    //         str+='</li>'
    //         item.child.forEach(item2 => {
    //             str += `<li>${item2.name}`
    //             if(item2.child){
    //                 str+='<ul>'
    //                 item2.child.forEach(item3=>{
    //                     str+=`<li>${item3.name}`
    //                 })
    //                 str+='</ul>' 
    //                 str+='</li>'
    //             }
    //         })
    //         str += '</ul>'
    //     }
    // })
    // str += '</ul>'
    // $('.lists').html(str)

    // 递归展现多级(未知)
    function createTree(data) {
        var str = '<ul>'
        data.forEach(item => {
            str += `<li><span>-</span>${item.name}`
            if (item.child) {
                str += createTree(item.child)
            }
            str += '</li>'
        })
        str += '</ul>'
        return str;
    }
    // 传入data数据
    $('.lists').html(createTree(data))

    // 点击收缩事件
    $('.lists ul li span').on('click', function () {
        event.stopPropagation() /* 阻止事件冒泡 */
        // console.log($(this).parent())
        if ($(this).parent().find('ul').is(':visible')) {
            // 隐藏
            $(this).parent().find('ul').hide()
            $(this).parent().find('span').text('+')
        } else {
            // 显示
            $(this).parent().find('ul').show()
            $(this).parent().find('span').text('-')
        }
    })
})
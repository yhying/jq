const express=require('express')
const app=express();

// 跨域解决(后端解决)
app.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	//Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
	res.header('Access-Control-Allow-Headers', 'Content-Type,token');  /* 自定义header，拼接*/
	res.header('Access-Control-Allow-Methods', '*');
	res.header('Content-Type', 'application/json;charset=utf-8');
	next();
});
app.get('/api/index/list', (req, res) => {
    res.send({
        code:200,
		data: {
			success: true,
			data:[
                {list_id:1,list_name:'经典百搭型外套',list_img:'img/commodity1.jpg',list_price:349,list_uprice:228.7},
                {list_id:2,list_name:'穿梭恋人，保暖又迷人',list_img:'img/commodity2.jpg',list_price:549,list_uprice:428.7},
                {list_id:3,list_name:'春夏睡衣风',list_img:'img/commodity3.jpg',list_price:149,list_uprice:28.7},
                {list_id:4,list_name:'秋季外套',list_img:'img/commodity4.jpg',list_price:649,list_uprice:528.7},
                {list_id:5,list_name:'圆领长袖X',list_img:'img/commodity2.jpg',list_price:49,list_uprice:28.7},
                {list_id:6,list_name:'可爱迷人百褶裙',list_img:'img/commodity3.jpg',list_price:1349,list_uprice:1228.7},
            ]
		}
    })
})
app.listen(3000, function () {
    console.log('服务器启动，端口3000')
})
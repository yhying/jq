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
app.get('/api/index/list/num/size', (req, res) => {
    res.send({
        code:200,
		data: {
			success: true,
			data:[
                {list_id:1,list_name:'经典百搭型外套',list_img:'https://s5.mogucdn.com/mlcdn/c45406/200411_8b53e374e2al04l2keag269e95i24_3999x5999.jpg_320x428.v1cAC.40.webp',list_price:349,list_uprice:228.7},
                {list_id:2,list_name:'穿梭恋人，保暖又迷人',list_img:'https://s5.mogucdn.com/mlcdn/c45406/190417_54adhdf66h7lhl2610ddb6e6cj201_640x960.jpg_320x428.v1cAC.40.webp',list_price:549,list_uprice:428.7},
                {list_id:3,list_name:'春夏睡衣风',list_img:'https://s5.mogucdn.com/mlcdn/c45406/180927_0hjc9jk79icfffh9ddk279i726a0k_640x960.jpg_320x428.v1cAC.40.webp',list_price:149,list_uprice:28.7},
                {list_id:4,list_name:'秋季外套',list_img:'https://s5.mogucdn.com/mlcdn/c45406/200413_2edd3hh971g6h8edjj43l72160k8d_3999x5999.jpg_320x428.v1cAC.40.webp',list_price:649,list_uprice:528.7},
                {list_id:5,list_name:'圆领长袖X',list_img:'https://s5.mogucdn.com/mlcdn/55cf19/190707_81kjl3e1b4jf558kcj5d66g7cf9a3_640x960.jpg_320x428.v1cAC.40.webp',list_price:49,list_uprice:28.7},
                {list_id:6,list_name:'可爱迷人百褶裙',list_img:'https://s5.mogucdn.com/mlcdn/c45406/190812_44ik9agich7i7fg7c33761gi9b91d_640x960.jpg_320x428.v1cAC.40.webp',list_price:1349,list_uprice:1228.7},
                {list_id:7,list_name:'经典百搭型外套',list_img:'https://s5.mogucdn.com/mlcdn/c45406/190901_826e2cca3dg0ajd5d4f7602ghcg4l_640x960.jpg_320x428.v1cAC.40.webp',list_price:349,list_uprice:228.7},
                {list_id:8,list_name:'穿梭恋人，保暖又迷人',list_img:'https://s5.mogucdn.com/mlcdn/55cf19/191119_6j509b6glid8j6gh8cga3c3de5f3k_800x800.jpg_320x428.v1cAC.40.webp',list_price:549,list_uprice:428.7},
                {list_id:9,list_name:'春夏睡衣风',list_img:'https://s5.mogucdn.com/mlcdn/c45406/190901_0hg425h34f87a5fhdk78353dh68b2_640x960.jpg_320x428.v1cAC.40.webp',list_price:149,list_uprice:28.7},
                {list_id:10,list_name:'秋季外套',list_img:'https://s5.mogucdn.com/mlcdn/c45406/190619_2d2868hl06876i2i5gi0kdgdg49cg_640x960.jpg_320x428.v1cAC.40.webp',list_price:649,list_uprice:528.7},
                {list_id:11,list_name:'圆领长袖X',list_img:'https://s5.mogucdn.com/mlcdn/c45406/200314_6l8jjdll6a4ke33kef04f8h89k9hb_640x960.jpg_320x428.v1cAC.40.webp',list_price:49,list_uprice:28.7},
                {list_id:12,list_name:'可爱迷人百褶裙',list_img:'https://s5.mogucdn.com/mlcdn/17f85e/200402_32cc5ebjf7ajalhd41126fb9cbf80_640x960.jpg_320x428.v1cAC.40.webp',list_price:1349,list_uprice:1228.7},
            ]
		}
    })
})
app.listen(3001, function () {
    console.log('服务器启动，端口3000')
})
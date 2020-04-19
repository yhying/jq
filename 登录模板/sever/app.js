const express=require('express');
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
app.post('/api/login', (req, res) => {
    res.send({
        code:200,
		data: {
			success: true,
			msg: "判断是否登录"
		}
    })
})
app.listen(3001, function () {
    console.log('服务器启动，端口3001')
})
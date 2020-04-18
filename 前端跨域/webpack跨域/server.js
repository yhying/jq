const express = require('express');
const app = express();

// 跨域解决(后端解决)
// app.all('*', function(req, res, next) {
// 	res.header('Access-Control-Allow-Origin', '*');
// 	//Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
// 	res.header('Access-Control-Allow-Headers', 'Content-Type,token');  /* 自定义header，拼接*/
// 	res.header('Access-Control-Allow-Methods', '*');
// 	res.header('Content-Type', 'application/json;charset=utf-8');
// 	next();
// });

// cros处理
// const allowCrossDomain = function (req, res, next) {
//     // 请求源 
//     res.header('Access-Control-Allow-Origin', '*');
//     // 请求头 X-token
//     res.header('Access-Control-Allow-Headers', '*');
//     // 请求方法
//     res.header('Access-Control-Allow-Methods', '*');
//     next();
// }
// app.use(allowCrossDomain)

// 前端中间件解决跨域 npm i webpack-dev-middleware -S 前后端绑一起启动，未分离
let webpack=require('webpack');
let middle=require('webpack-dev-middleware');
let compiler=webpack(require('./webpack.config'));
app.use(middle(compiler))

app.get('/api/user', (req, res) => {
    res.send({
        name: 'yhy'
    })
})
app.listen(3001, function () {
    console.log('服务器启动，端口3001')
})
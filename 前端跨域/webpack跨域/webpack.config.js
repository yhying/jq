const path = require('path'); /* nodejs里面导入依赖包 */
const htmlWebpackPlugin=require('html-webpack-plugin')
module.exports = {
    // 入口，模块化
    entry: './src/main.js',
    // 出口文件
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        /* 调用path对象的resolve方法 */
        publicPath: '/' /* 资源路径 */
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:'index.html',
            template:'index.html'
        })
    ]
}

module.exports = {
    publicPath: './',

    devServer: {
        open: true,
        host: 'localhost',
        port: '8080',
        proxy: {
            '/': {//业务类的接口请求地址，这里的api可以是后端的工程名
                changeOrigin: true,
                ws: true,
                target: 'http://localhost:8085'
            }
        }
    }
}
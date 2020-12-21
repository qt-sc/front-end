
module.exports = {
    publicPath: './',

    devServer: {
        open: true,
        host: 'localhost',
        port: '8080',
        proxy: {
            '/api': {//业务类的接口请求地址，这里的api可以是后端的工程名
                changeOrigin: true,
                ws: true,
                target: 'http://172.18.178.56',
                // target: 'http://localhost:8085',
                pathRewrite: {
                    '^api' : '/'
                }
            }
        }
    }
}
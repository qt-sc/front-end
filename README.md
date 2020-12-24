# servicehw

## 项目部署

+ 下载该仓库代码；
+ 执行 `npm install` 安装依赖；
+ 完成服务配置：node.js 路径设置，package.json 文件等；
+ 执行 `npm run dev` 运行前端服务。

## 运行配置

在 vue.config.js 文件可以设置前端服务程序运行的IP，端口；并指定后端服务程序代理的地址，如下：

```js
devServer: {
	open: true,
	host: 'localhost', // 前端服务程序运行的IP
	port: '8080',	// 前端服务程序运行的端口
	proxy: {
		'/': { //业务类的接口请求地址
			changeOrigin: true,
			ws: true,
			target: 'http://localhost:8085', // 后端服务程序代理的地址
		}
	}
}
```



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

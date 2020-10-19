module.exports = {
   // 对服务器的配置
  devServer: {
    host: 'localhost', // host和port设置nodejs启动服务的端口
    port: 8888,
    proxy:{ // 代理跨域
      '/api': { // 遇到'/api'路径时进行下面的操作
        target: 'http://mall-pre.springboot.cn', // 将'/api'前面的源地址换成这个,和下面的参数配合使用
        changeOrigin: true,
        pathRewrite: {
          '/api':'' // 将最后路径中的'/api'替换成''
        }
      }
    }
  }
}
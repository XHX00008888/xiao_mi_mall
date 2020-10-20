import Mock from 'mockjs'
// 使用mock插件的方式进行mock，相当于服务器在nodejs中直接提供数据，浏览器不会请求数据
Mock.mock('/api/user/login', {
  "status": 0,
    "data": {
        "id": 12,
        "username": "admin",
        "email": "admin@51purse.com",
        "phone": null,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    }
})
# 搭建一个静态服务器
### 1. 首先理解http、fs、url、path的含义：
```
var http = require('http')
//创建一个服务器
var fs = require('fs')
//读写文件、数据
var url = require('url')
//自动解析url得到信息
var path = require('path')
//处理url，mac和windows和Linux上面文件路径写法不一样，用path就能自动处理识别url路径写法
```
### 2. 创建一个服务器并开启端口
```
var server = http.createServer(function(request, response){
    sampleRoot(path.join(__dirname + '/sample'),request,response)
})
server.listen(9000)
```
*__dirname是nodejs里面内置的变量，代表当前文件所在文件夹*
这里另外添加了一个function sampleRoot(){}传递参数

### 3. 针对路由进行判断
+ 在function sampleRoot里面首先，声明变量pathObj，通过查看pathObj.pathname的值可以判断出用户输入的url的路由

+ 此时进行判断如果用户没有输入其他内容，直接访问localhost:9000,那么就将pathObj.pathname的值加上文件名，即‘test.html’
+ 如果输入其他的路由，服务器则提示404 not found

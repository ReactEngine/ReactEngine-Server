# ReactEngine Sever   
    
基于[Stringloop](https://strongloop.com)的 API Server.
    
# URL    
[Server URL](http://127.0.0.1:3000)    
[Explorer](http://127.0.0.1:3000/explorer)    
[PM](http://127.0.0.1:8701/explorer)    
    
## 运行    
### 以测试环境运行    
NODE_ENV="development" node .    
查看所有调试信息: DEBUG=*,-strong-remoting:* NODE_ENV="development" node .    
    
###以正式环境运行    
NODE_ENV="production" node .    
    
### 以服务方式运行    
后台运行: slc start    
查看后台日志: slc ctl log-dump    
关闭: slc ctl stop    
具体参考 [strong-pm](http://strong-pm.io)    
    
### 开发阶段 自动重启    
nodemon  
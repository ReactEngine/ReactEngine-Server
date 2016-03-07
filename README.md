# ReactEngine
一个基于 [Reac Native](https://facebook.github.io/react-native) + [React Web](https://github.com/taobaofed/react-web) + [Strongloop](https://strongloop.com) 的完整开发框架.  
目的: 快速开发,原则上一个 JS 工程师可以搞定 iOS/Android/Web/Server 开发.

## 目录结构
当前目录: 参考[Strongloop 工程结构](https://docs.strongloop.com/display/public/LB/Standard+project+structure)  
client: react-native 工程(含有 react-web 扩展).  
server: strongloop server.  
其他文件:    
	nodemon.json: nodemon 配置文件,用于开发阶段 watch 文件更改并自动重启 server.  

## 文档参考
[client/README.md](./client/README.md)  
[server/README.md](./server/README.md)  
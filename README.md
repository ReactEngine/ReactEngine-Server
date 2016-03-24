# ReactEngine
一个基于 [Reac Native](https://facebook.github.io/react-native) + [Redux](https://github.com/reactjs/redux) + [Strongloop](https://strongloop.com) 的快速开发框架.  
目的: 快速开发,原则上一个 JS 工程师可以搞定 iOS/Android/Server 开发.

## Server
ReactEngine 的默认服务器,基于 [Strongloop](https://strongloop.com) 的 API Server.  
### 目录结构
参考 [Strongloop 工程结构](https://docs.strongloop.com/display/public/LB/Standard+project+structure)  
其他文件:     
	```nodemon.json```: nodemon 配置文件,用于开发阶段 watch 文件更改并自动重启 server.  
### 如何运行 
#### 使用 Docker
docker run -tid --name ReactEngine --net="host" --restart=on-failure:3 -u node -v /data/ReactEngine:/data -v /log/ReactEngine:/log leapas/reactengine

#### 本地环境搭建
##### 1. 环境准备 
安装**最新版** Nodejs: 详见 [nodejs.org](https://nodejs.org/en/download/)   
安装 Strongloop: 执行 ```npm install -g strongloop```  
安装 Mysql-Server, 并创建数据库 ```Todos```
##### 2. Clone 仓库并安装依赖:
```
git clone https://github.com/ReactEngine/ReactEngine-Server.git
cd ReactEngine-Server  
npm install -d
```
##### 3. 修改 ```server/datasources.json``` 中的配置:
```
  "TodosDSMysql": {
    "host": "10.10.10.148", //改为你的 Mysql 服务器的 ip 地址
    "port": 3306, 			//改为你的 Mysql 服务器的端口
    "database": "Todos", 	//改为你的 Mysql 服务器数据库名称
    "username": "Todos", 	//改为你的 Mysql 服务器用户名
    "password": "Todos", 	//改为你的 Mysql 服务器密码
    "name": "TodosDSMysql",
    "connector": "mysql",
    "debug": "true",
  }
```
确保以上的用户名和密码有权限访问该数据库.  
##### 4. 启动 Server
执行以下命令以启动 Server:
```      
NODE_ENV="development" node . 
```    
说明: 设置环境变量 ```NODE_ENV="development"``` 是为了让 Server 以开发模式运行,你也可以设置 	```NODE_ENV="production"```让 Server 以生产环境运行,这两种模式在配置有细微的差别(详见 [Environment-specific configuration](https://docs.strongloop.com/display/public/LB/Environment-specific+configuration)).  
       
另外,如果你希望 watch 文件以便有文件更改后自动重启 Server,请安装 nodemon:
```
npm install -g nodemon
```
并在当前目录下运行命令 ```nodemon``` 以启动服务器.

##### 5. 检查
当看到 Console 输出:
```
Web server listening at: http://0.0.0.0:3000
Browse your REST API at http://0.0.0.0:3000/explorer
```
说明服务器启动成功.  
当服务器启动后,你可以使用浏览器打开 [http://127.0.0.1:3000](http://127.0.0.1:3000) 以查看 Server 状态,   
或打开 [http://127.0.0.1:3000/explorer](http://127.0.0.1:3000/explorer) 以查看 API Explorer.   

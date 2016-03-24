#!/bin/bash

. $HOME/.nvm/nvm.sh

#设置环境变量, 默认为production
if [ $1 ]
then
    ENV=$1
else
    ENV="production"
fi

echo "ENV: "${ENV}
sudo chmod -R 777 /log

# NODE_ENV=${ENV} node server/server.js

NODE_ENV=${ENV} pm2 --no-daemon start server/server.js

# 启动webservice
#slc start 

# 绑定webservice端口号
#slc ctl env-set webservice "PORT"=3000
# Version 1.3

FROM leapas/node:4.2.4

USER node

ENV HOME=/home/node
# ENV DEBIAN_FRONTEND=noninteractive
ENV BASE_DIR=$HOME/ReactEngine

# 安装依赖
RUN sudo DEBIAN_FRONTEND=noninteractive apt-get -y update && \
    sudo DEBIAN_FRONTEND=noninteractive apt-get install -y libkrb5-dev libavahi-compat-libdnssd-dev

WORKDIR $BASE_DIR

RUN . $HOME/.nvm/nvm.sh && \
    npm install -g pm2 && \
    mkdir -p $HOME/.ssh && \
    ssh-keyscan github.com >> $HOME/.ssh/known_hosts && \
    echo "" > $HOME/.ssh/id_rsa && \
    chmod 400 $HOME/.ssh/id_rsa

# 防止 docker buid 缓存
ENV REFRESHED_AT 2016324.01

# git clone 并安装依赖
RUN cd $HOME && \
    sudo rm -rf $BASE_DIR && \
    git clone --quiet https://github.com/ReactEngine/ReactEngine-Server.git $BASE_DIR && \
	cd $BASE_DIR && \
	. $HOME/.nvm/nvm.sh && \
	npm install && \
    chmod -R 777 $BASE_DIR/start.sh

CMD ["/home/node/ReactEngine/start.sh"]

RUN sudo DEBIAN_FRONTEND=noninteractive apt-get clean && \
	sudo rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
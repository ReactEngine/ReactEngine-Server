# ReactEngine Server
docker run -tid --name ReactEngine --net="host" --restart=on-failure:3 -u node -v /data/ReactEngine:/data -v /log/ReactEngine:/log leapas/reactengine
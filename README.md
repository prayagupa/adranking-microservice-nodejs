

# Ad Selection Micro Service

```
npm install
node app.js 
```
Build docker image
----------------------
```
docker build -t node-app .
```

Run docker
----------
```
docker run --rm -it node-app
```

```
docker inspect elated_bhaskara | grep IP
docker exec -it elated_bhaskara bash

docker exec -it elated_bhaskara bash
root@a2edf9a3aad8:/usr/src/app# cat /etc/hosts 
172.17.0.4	a2edf9a3aad8
127.0.0.1	localhost
::1	localhost ip6-localhost ip6-loopback
fe00::0	ip6-localnet
ff00::0	ip6-mcastprefix
ff02::1	ip6-allnodes
ff02::2	ip6-allrouters
172.17.0.4	elated_bhaskara
172.17.0.4	elated_bhaskara.bridge


```

uses
-----
https://github.com/nodejs/docker-node

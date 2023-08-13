# 博客部署
> 部署使用nginx，打包成dist目录后配置到对应的nginx目录即可，整体比较简单
> 默认打包命令是 npm run docs:build，也可以在package.json文件修改打包命令

## Nginx安装
```shell
# 安装编译软件
yum install -y gcc-c++
yum install -y pcre pcre-devel
yum install -y openssl openssl-devel
yum install -y zlib zlib-devel

# 下载nginx软件
wget https://nginx.org/download/nginx-1.22.0.tar.gz

# 解压软件
tar -zxf nginx-1.22.0.tar.gz
cd nginx-1.22.0

# 配置nginx
./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module
# 构建和安装   
# 增加模块重新编译后make后替换编译产物nginx即可，make install 会重装
make && make install

# 配置环境变量
export PATH=/usr/local/nginx/sbin:$PATH
# 重新加载环境变量
source /etc/profile

# 查看Nginx配置是否正确
nginx -t

# 启动Nginx
nginx

```

## Nginx配置文件修改
```nginx
#user  nobody;
worker_processes  4;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    #access_log  logs/access.log  main;
    
    # 隐藏版本号
    server_tokens off;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    gzip  on;

    server {
        listen       80;
        server_name  freewheeling.top;
        location / {
            # 创建freewheeling存放页面
            root   freewheeling;
            index  index.html index.htm;
        }

        # 将请求转成https
        rewrite ^(.*)$ https://$host$1 permanent;
    }
    
    
    server {
        listen       443 ssl;
        server_name  freewheeling.top;
        ssl_certificate      /usr/local/nginx/freewheeling_conf/freewheeling.top.pem;
        ssl_certificate_key  /usr/local/nginx/freewheeling_conf/freewheeling.top.key;
        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;
        ssl_ciphers  HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers  on;
        location / {
            # 此处存放打包后的dist内容
            root   /work/front_end/freewheeling/dist;
            index  index.html index.htm;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   freewheeling;
        } 
    }

}
```
## 配置文件修改后重新部署
```shell
nginx -s reload

```
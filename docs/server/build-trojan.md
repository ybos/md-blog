# Trojan的构建及应用
## V2Ray 和 Trojan 的区别
### Trojan 比 V2Ray 更安全?
V2Ray 的 WS + TLS 协议跟 Trojan 差不多, 如果使用第三方监听工具检测, 这两者的流量和普通流量表现均一致, 这是两者的共性.
### Trojan 比 V2Ray 更快?
Trojan 的原理是直接模仿互联网最安全的协议 `https`所以它在加解密的环节更迅速, 这是由协议本身决定的.
V2Ray 在使用 WS + TLS 传输的过程中进行了两次加密.
仅从真正的流量的传输速度来看, Trojan 在原理上快于 V2Ray, 只因 Trojan 更简单.
## Trojan 的部署
### 部署 Nginx / SSL
这里采用的是 `宝塔运维工具`:

1. 将域名指向到新创建的站点;
2. 申请 `Let's encrtypt 证书`并设置为到期自动续约;
3. 记录 SSL 证书位置, 默认在 `/www/server/panel/vhost/cert/`目录内;
4. SSL 证书更名: fullchain.pem -> fullchain.crt | privkey.pem -> privkey.key
```
cp fullchain.pem fullchain.crt
cp privkey.pem privkey.key
```
### 安装 Trojan

1. 下载并安装 Trojan, 如果无法访问节点, 可用过拷贝 or wget 等方式自行解决:
```
sudo bash -c "$(curl -fsSL https://raw.githubusercontent.com/trojan-gfw/trojan-quickstart/master/trojan-quickstart.sh)"
```

2. 修改配置文件 `/usr/local/etc/trojan/config.json`, 重点关注以下字段:
   1. `local_port`: 监听的端口, 默认是 443, 不建议修改成其他端口
   2. `remote_addr`和 `remote_port`: 非 trojan 协议时, 将请求转发到这个地址和端口, 默认是本机地址和 80 端口
   3. `password`: 密码, 需要几个密码填写几行, **最后一行结尾不可以加逗号**
   4. `cert`和 `key`: 域名证书和密钥, 注意在运维工具中查看证书地址
   5. `key_password`: 证书的密码, 默认是没有的, 如果有就填上
   6. `alpn`: 建议填两行 http/1.1 和 h2, 保持默认也没问题
### 启动 Trojan

1. 设置开机启动
```
systemctl enable trojan
```

2. 启动 trojan
```
systemctl start trojan
```

3. 如果无法启动 Trojan 请检查一下几点:
   1. 配置信息, 是否有错误的格式
   2. nginx 是否占用了 443 端口
## Trojan 和 Nginx 共用 80 端口

## Trojan 和 Nginx 共用 443 端口
通过 SNI 它要求在一个 IP 有多个 TLS 服务站点的情况下, 客户端在初始 TLS 握手期间指定要连接的站点.
Nginx 支持基于 SNI 的 4 层转发, 识别 SNI 信息

## 参考

1. [Trojan+Nginx+WordPress个人博客，共用443端口！所有访问全部开启HTTPS，Trojan终极伪装！](https://www.v2rayssr.com/trojanwordpress.html)
2. [Trojan 共用 443 端口方案](https://www.chengxiaobai.com/trouble-maker/trojan-shared-443-port-scheme)(原理清晰 + 实践)

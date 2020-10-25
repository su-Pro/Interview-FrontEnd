*本文借鉴了腾讯的一篇关于QUIC的文章[http3](https://mp.weixin.qq.com/s/iF0wbV5o7HVjGG_Cb-RcOg)*
## 核心
**QUIC丢掉了TCP、TSL的包袱，基于UDP，并对TCP、TLS、HTTP/2的经验加以借鉴、改进，实现了一个安全高效可靠的HTTP通信协议。**
**凭借着0RTT建立链接、平滑的连接迁移、基本消除了队头阻塞、改进了拥塞控制和流量控制等优秀的特性，QUIC在绝大多数场景下获得了比HTTP/2更好的效果**

## 特性
![Http3](https://hzy-1301560453.cos.ap-shanghai.myqcloud.com/2020/pictures/20201022123111.png)
- 0RTT
- 多路数据流
- TLS
- 有序交付
- 快速握手
- 可靠性

### 详细了解握手过程
HTTP/3 首次连接只需要 1 RTT，后面的连接更是只需 0 RTT，意味着客户端发给服务端的第一个包就带有请求数据

**对比HTTP2和3**
![20201022123323](https://hzy-1301560453.cos.ap-shanghai.myqcloud.com/2020/pictures/20201022123323.png)

**关于QUIC协议连接1RTT**
![20201022123549](https://hzy-1301560453.cos.ap-shanghai.myqcloud.com/2020/pictures/20201022123549.png)
**Step1**：首次连接时，客户端发送 Inchoate Client Hello 给服务端，用于请求连接；

**Step2**：服务端生成 g、p、a，根据 g、p 和 a 算出 A，然后将 g、p、A 放到 Server Config 中再发送 Rejection 消息给客户端；

**Step3**：客户端接收到 g、p、A 后，自己再生成 b，根据 g、p、b 算出 B，根据 A、p、b 算出初始密钥 K。B 和 K 算好后，客户端会用 K 加密 HTTP 数据，连同 B 一起发送给服务端；

**Step4**：服务端接收到 B 后，根据 a、p、B 生成与客户端同样的密钥，再用这密钥解密收到的 HTTP 数据。为了进一步的安全（前向安全性），服务端会更新自己的随机数 a 和公钥，再生成新的密钥 S，然后把公钥通过 Server Hello 发送给客户端。连同 Server Hello 消息，还有 HTTP 返回数据；

**Step5**：客户端收到 Server Hello 后，生成与服务端一致的新密钥 S，后面的传输都使用 S 加密。

### Http3的优化
1. 传输单元：Packet
2. 基于UDP
3. 拥塞控制
     - 慢启动
     - 拥塞避免
     - 快速重传 => 超时计时器
     - 快速恢复
   - ![20201022123935](https://hzy-1301560453.cos.ap-shanghai.myqcloud.com/2020/pictures/20201022123935.png)
4. 前向纠错FEC
5. 单调底层Packet Nmuber： 如果数据丢失那么标记增大，这样可以知道是原始请求还是重传请求。
6. ACK Delay: 接受多个数据才回复一个ACK
7. 流量控制: 单条Stream，接收窗口随着数据多了，就慢慢缩小。（**当满足条件：当满足flow control receive offset - consumed bytes) < (max receive window / 2)，接收方告诉发送方，可以多发送点数据数据过来，接受窗口增大。**）
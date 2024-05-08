(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1574:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"大厂都是怎么做-mysqltoredis-同步的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#大厂都是怎么做-mysqltoredis-同步的"}},[t._v("#")]),t._v(" 大厂都是怎么做 MySQLtoRedis 同步的?")]),t._v(" "),n("p",[t._v("之前我们在"),n("RouterLink",{attrs:{to:"/back-end-storage/02/04.html"}},[t._v("《MySQL 如何应对高并发（一）：使用缓存保护 MySQL》")]),t._v("这一节课中，讲到了 Read/Write Through 和 Cache Aside 这几种更新缓存的策略，这几种策略都存在缓存穿透的可能，如果缓存没有命中，那就穿透缓存去访问数据库获取数据。")],1),t._v(" "),n("p",[t._v("一般情况下，只要我们做好缓存预热，这个缓存的命中率很高，能穿透缓存打到数据库上的请求比例就非常低，这些缓存的策略都是没问题的。但是如果说，"),n("strong",[t._v("我们的 Redis 缓存服务的是一个超大规模的系统")]),t._v("，那就又不一样了。")]),t._v(" "),n("p",[t._v("今天这节课，我们来说一下，在超大规模系统中缓存会面临什么样的问题，以及应该使用什么样的策略来更新缓存。")]),t._v(" "),n("h2",{attrs:{id:"缓存穿透-超大规模系统的不能承受之痛"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#缓存穿透-超大规模系统的不能承受之痛"}},[t._v("#")]),t._v(" 缓存穿透：超大规模系统的不能承受之痛")]),t._v(" "),n("p",[t._v("我们上节课讲到了如何构建 Redis 集群，由于集群可以水平扩容，那只要集群足够大，理论上支持海量并发也不是问题。但是，因为并发请求的数量这个基数太大了，即使有很小比率的请求穿透缓存，打到数据库上请求的绝对数量仍然不小。加上大促期间的流量峰值，还是存在缓存穿透引发雪崩的风险。")]),t._v(" "),n("p",[t._v("那这个问题怎么解决呢？其实方法你也想得到，不让请求穿透缓存不就行了？反正现在存储也便宜，只要你买得起足够多的服务器，Redis 集群的容量就是无限的。不如 "),n("strong",[t._v("把全量的数据都放在 Redis 集群里面，处理读请求的时候，干脆只读 Redis，不去读数据库")]),t._v("。这样就完全没有「缓存穿透」的风险了，实际上很多大厂它就是这么干的。")]),t._v(" "),n("p",[t._v("在 Redis 中缓存全量的数据，又引发了一个新的问题，那就是，"),n("strong",[t._v("如何来更新缓存中的数据呢")]),t._v("？因为我们取消了缓存穿透的机制，这种情况下，从缓存读到数据可以直接返回，如果没读到数据，那就只能返回错误了！所以，当系统更新数据库的数据之后，必须及时去更新缓存。")]),t._v(" "),n("p",[t._v("说到这儿，又绕回到那个老问题上了：怎么保证 Redis 中的数据和数据库中的数据同步更新？我们之前讲过用分布式事务来解决数据一致性的问题，但是这些方法都不太适合用来更新缓存，"),n("strong",[t._v("因为分布式事务，对数据更新服务有很强的侵入性")]),t._v("。我们拿下单服务来说，如果为了更新缓存增加一个分布式事务，无论我们用哪种分布式事务，或多或少都会影响下单服务的性能。还有一个问题是，如果 Redis 本身出现故障，写入数据失败，还会导致下单失败，等于是降低了下单服务性能和可用性，这样肯定不行。")]),t._v(" "),n("p",[t._v("**对于像订单服务这类核心的业务，一个可行的方法是，我们启动一个更新订单缓存的服务，接收订单变更的 MQ 消息，然后更新 Redis 中缓存的订单数据。**因为这类核心的业务数据，使用方非常多，本来就需要发消息，增加一个消费订阅基本没什么成本，订单服务本身也不需要做任何更改。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(424),alt:"img"}})]),t._v(" "),n("p",[t._v("唯一需要担心的一个问题是，如果丢消息了怎么办？因为现在消息是缓存数据的唯一来源，一旦出现丢消息，缓存里缺失的那条数据永远不会被补上。所以，必须保证整个消息链条的可靠性，不过好在现在的 MQ 集群，比如像 Kafka 或者 RocketMQ，它都有高可用和高可靠的保证机制，只要你正确配置好，是可以满足数据可靠性要求的。")]),t._v(" "),n("p",[t._v("像订单服务这样，本来就有现成的数据变更消息可以订阅，这样更新缓存还是一个不错的选择，因为实现起来很简单，对系统的其他模块完全没有侵入。")]),t._v(" "),n("h2",{attrs:{id:"使用-binlog-实时更新-redis-缓存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-binlog-实时更新-redis-缓存"}},[t._v("#")]),t._v(" 使用 Binlog 实时更新 Redis 缓存")]),t._v(" "),n("p",[t._v("如果我们要缓存的数据，本来没有一份数据更新的 MQ 消息可以订阅怎么办？很多大厂都采用的，也是更通用的解决方案是这样的。")]),t._v(" "),n("p",[t._v("数据更新服务只负责处理业务逻辑，更新 MySQL，完全不用管如何去更新缓存。"),n("strong",[t._v("负责更新缓存的服务，把自己伪装成一个 MySQL 的从节点，从 MySQL 接收 Binlog，解析 Binlog 之后，可以得到实时的数据变更信息")]),t._v("，然后根据这个变更信息去更新 Redis 缓存。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(425),alt:"img"}})]),t._v(" "),n("p",[t._v("这种收 Binlog 更新缓存的方案，和刚刚我们讲到的，收 MQ 消息更新缓存的方案，其实它们的实现思路是一样的，都是异步订阅实时数据变更信息，去更新 Redis。只不过，直接读取 Binlog 这种方式，它的通用性更强。不要求订单服务再发订单消息了，订单更新服务也不用费劲去解决「发消息失败怎么办？」这种数据一致性问题了。")]),t._v(" "),n("p",[t._v("而且，在整个缓存更新链路上，减少了一个收发 MQ 的环节，从 MySQL 更新到 Redis 更新的时延更短，出现故障的可能性也更低，所以很多大厂更青睐于这种方案。")]),t._v(" "),n("p",[n("strong",[t._v("这个方案唯一的缺点是，实现订单缓存更新服务有点儿复杂")]),t._v("，毕竟不像收消息，拿到的直接就是订单数据，解析 Binlog 还是挺麻烦的。")]),t._v(" "),n("p",[t._v("有很多开源的项目就提供了订阅和解析 MySQL Binlog 的功能，下面我们以比较常用的开源项目 Canal 为例，来演示一下如何实时接收 Binlog 更新 Redis 缓存。")]),t._v(" "),n("p",[n("strong",[t._v("Canal 模拟 MySQL 主从复制的交互协议")]),t._v("，"),n("strong",[t._v("把自己伪装成一个 MySQL 的从节点")]),t._v("，向 MySQL 主节点发送 dump 请求，MySQL 收到请求后，就会开始推送 Binlog 给 Canal，Canal 解析 Binlog 字节流之后，转换为便于读取的结构化数据，供下游程序订阅使用。下图是 Canal 的工作原理：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(426),alt:"img"}})]),t._v(" "),n("p",[t._v("在我们这个示例中，MySQL 和 Redis 都运行在本地的默认端口上，MySQL 的端口为 3306，Redis 的端口为 6379。为了便于大家操作，我们还是以"),n("RouterLink",{attrs:{to:"/back-end-storage/01/04.html"}},[t._v("《事务：账户余额总是对不上账，怎么办？》")]),t._v("这节课中的账户余额表 account_balance 作为演示数据。")],1),t._v(" "),n("p",[t._v("首先，下载并解压 Canal 最新的 1.1.4 版本到本地：")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://github.com/alibaba/canal/releases/download/canal-1.1.4/canal.deployer-1.1.4.tar.gz\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" zvfx canal.deployer-1.1.4.tar.gz\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("然后来配置 MySQL，我们需要在 MySQL 的配置文件中开启 Binlog，并设置 Binlog 的格式为 ROW 格式。")]),t._v(" "),n("div",{staticClass:"language-properties line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-properties"}},[n("code",[t._v("[mysqld]\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("log-bin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("mysql-bin # 开启Binlog")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("binlog-format")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("ROW # 设置Binlog格式为ROW")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("server_id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("1 # 配置一个ServerID")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("p",[t._v("给 Canal 开一个专门的 MySQL 用户并授权，确保这个用户有复制 Binlog 的权限：")]),t._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USER")]),t._v(" canal IDENTIFIED "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'canal'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GRANT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLICATION")]),t._v(" SLAVE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLICATION")]),t._v(" CLIENT "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'canal'")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@'%'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nFLUSH "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIVILEGES")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("重启一下 MySQL，确保所有的配置生效。重启后检查一下当前的 Binlog 文件和位置：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(427),alt:"img"}})]),t._v(" "),n("p",[t._v("记录下 File 和 Position 两列的值，然后我们来配置 Canal。编辑 Canal 的实例配置文件 "),n("code",[t._v("canal/conf/example/instance.properties")]),t._v("，以便让 Canal 连接到我们的 MySQL 上。")]),t._v(" "),n("div",{staticClass:"language-properties line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-properties"}},[n("code",[n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("canal.instance.gtidon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("false")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# position info")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("canal.instance.master.address")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("127.0.0.1:3306")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("canal.instance.master.journal.name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("binlog.000009")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("canal.instance.master.position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("155")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("canal.instance.master.timestamp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("canal.instance.master.gtid")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# username/password")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("canal.instance.dbUsername")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("canal")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("canal.instance.dbPassword")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("canal")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("canal.instance.connectionCharset")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("UTF-8")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("canal.instance.defaultDatabaseName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("test")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# table regex")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("canal.instance.filter.regex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v(".*\\\\..")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])]),n("p",[t._v("这个配置文件需要配置 MySQL 的连接地址、库名、用户名和密码之外，还需要配置 "),n("code",[t._v("canal.instance.master.journal.name")]),t._v("  和 "),n("code",[t._v("canal.instance.master.position")]),t._v("  这两个属性，取值就是刚刚记录的 File 和 Position 两列。然后就可以启动 Canal 服务了：")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("canal/bin/startup.sh\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("启动之后看一下日志文件 "),n("code",[t._v("canal/logs/example/example.log")]),t._v("，如果里面没有报错，就说明启动成功并连接到我们的 MySQL 上了。")]),t._v(" "),n("p",[t._v("Canal 服务启动后，"),n("strong",[t._v("会开启一个端口（11111）等待客户端连接")]),t._v("，客户端连接上 Canal 服务之后，可以从 Canal 服务拉取数据，每拉取一批数据，正确写入 Redis 之后，给 Canal 服务返回处理成功的响应。如果发生客户端程序宕机或者处理失败等异常情况，Canal 服务没收到处理成功的响应，下次客户端来拉取的还是同一批数据，这样就可以保证顺序并且不会丢数据。")]),t._v(" "),n("p",[t._v("接下来我们来开发账户余额缓存的更新程序，以下的代码都是用 Java 语言编写的：")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Message")]),t._v(" message "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" connector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWithoutAck")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("batchSize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取指定数量的数据")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" batchId "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" size "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntries")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("batchId "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" size "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("processEntries")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntries")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" jedis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        connector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ack")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("batchId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 提交确认")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throwable")]),t._v(" t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        connector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("rollback")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("batchId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理失败, 回滚数据")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br")])]),n("p",[t._v("这个程序逻辑也不复杂，程序启动并连接到 Canal 服务后，就不停地拉数据，如果没有数据就睡一会儿，有数据就调用 processEntries 方法处理更新缓存。每批数据更新成功后，就调用 ack 方法给 Canal 服务返回成功响应，如果失败抛异常就回滚。下面是 processEntries 方法的主要代码：")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CanalEntry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RowData")]),t._v(" rowData "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" rowChage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRowDatasList")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eventType "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CanalEntry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EventType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DELETE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除")]),t._v("\n        jedis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("del")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("row2Key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user_id"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rowData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBeforeColumnsList")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eventType "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CanalEntry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EventType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("INSERT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插入")]),t._v("\n        jedis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("row2Key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user_id"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rowData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAfterColumnsList")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("row2Value")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rowData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAfterColumnsList")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新")]),t._v("\n        jedis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("row2Key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user_id"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rowData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAfterColumnsList")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("row2Value")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rowData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAfterColumnsList")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])]),n("p",[t._v("这里面根据事件类型来分别处理，如果 MySQL 中的数据删除了，就删除 Redis 中对应的数据。如果是更新和插入操作，那就调用 Redis 的 SET 命令来写入数据。")]),t._v(" "),n("p",[t._v("把这个账户缓存更新服务启动后，我们来验证一下，我们在账户余额表插入一条记录：")]),t._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[t._v("mysql"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" account_balance "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("888")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NOW")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("999")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("然后来看一下 Redis 缓存：")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" get "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("888")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("log_id"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("999"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("balance"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("100"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("user_id"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("888"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("timestamp"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("2020-03-08 16:18:10"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('}"')]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("可以看到数据已经自动同步到 Redis 中去了")]),t._v(" "),n("h2",{attrs:{id:"小结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),n("p",[t._v("在处理超大规模并发的场景时，由于并发请求的数量非常大，即使少量的缓存穿透，也有可能打死数据库引发雪崩效应。对于这种情况，我们 "),n("strong",[t._v("可以缓存全量数据来彻底避免缓存穿透问题")]),t._v("。")]),t._v(" "),n("p",[t._v("对于缓存数据更新的方法，可以订阅数据更新的 MQ 消息来异步更新缓存，更通用的方法是，把缓存更新服务伪装成一个 MySQL 的从节点，订阅 MySQL 的 Binlog，通过 Binlog 来更新 Redis 缓存。")]),t._v(" "),n("p",[t._v("需要特别注意的是，无论是用 MQ 还是 Canal 来异步更新缓存，对整个更新服务的数据可靠性和实时性要求都比较高，数据丢失或者更新慢了，都会造成 Redis 中的数据与 MySQL 中数据不同步。在把这套方案应用到生产环境中去的时候，需要考虑一旦出现不同步问题时的降级或补偿方案。")]),t._v(" "),n("h2",{attrs:{id:"思考题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思考题"}},[t._v("#")]),t._v(" 思考题")]),t._v(" "),n("p",[t._v("如果出现缓存不同步的情况，在你负责的业务场景下，该如何降级或者补偿？")]),t._v(" "),n("p",[t._v("答：设置一个合理的缓存过期时间，这样即使出现缓存不同步，等缓存过期后就会自动恢复。再比如，识别用户手动刷新操作，强制重新加载缓存数据（但要注意防止大量缓存穿透）。还可以在管理员的后台系统中，预留一个手动清除缓存的功能，必要的时候人工干预。")]),t._v(" "),n("h2",{attrs:{id:"拓展知识"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#拓展知识"}},[t._v("#")]),t._v(" 拓展知识")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("全量数据缓存，缓存同步有个时间差，这该如何处理？")]),t._v(" "),n("p",[t._v("就像 MySQL 主从同步时延一样，只能接受它。一般这个时延都是毫米级的，不会对业务有很大影响。")])]),t._v(" "),n("li",[n("p",[t._v("对交易数据进行缓存，单个简单，批量查询如何？")]),t._v(" "),n("p",[t._v("一般批量查询的时候可以用 Redis 的集合数据结构，比如 SET，SET 中的 Value 可以保存交易编号，而不用保存交易数据。")])])])])}),[],!1,null,null,null);s.default=e.exports},424:function(t,s,a){t.exports=a.p+"assets/img/7cec502808318409dbc719c0b1cbbc8e.7cec5028.jpg"},425:function(t,s,a){t.exports=a.p+"assets/img/918380c0e43de2f4ef7ad5e8e9d5d212.918380c0.jpg"},426:function(t,s,a){t.exports=a.p+"assets/img/452211795717190e55c5b0ff2ab208e4.45221179.jpg"},427:function(t,s,a){t.exports=a.p+"assets/img/01293d0ccc372418f3e01c785e204b8f.01293d0c.png"}}]);
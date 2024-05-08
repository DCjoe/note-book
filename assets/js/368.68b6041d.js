(window.webpackJsonp=window.webpackJsonp||[]).push([[368],{1764:function(s,a,e){"use strict";e.r(a);var t=e(13),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_029-对项目的-redis-cluster-实验多-master-写入、读写分离、高可用性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_029-对项目的-redis-cluster-实验多-master-写入、读写分离、高可用性"}},[s._v("#")]),s._v(" 029. 对项目的 redis cluster 实验多 master 写入、读写分离、高可用性")]),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#实验多-master-写入-海量数据的分布式存储"}},[s._v("实验多 master 写入 -> 海量数据的分布式存储")])]),e("li",[e("a",{attrs:{href:"#实验不同-master-各自的-slave-读取-读写分离"}},[s._v("实验不同 master 各自的 slave 读取 -> 读写分离")])]),e("li",[e("a",{attrs:{href:"#实验自动故障切换-高可用性"}},[s._v("实验自动故障切换 -> 高可用性")])])])]),e("p"),s._v(" "),e("p",[s._v("上一章节 将 redis cluster 搭建起来了")]),s._v(" "),e("p",[s._v("redis cluster 提供了多个 master，数据可以分布式存储在多个 master 上; 每个 master 都带着 slave，自动就做读写分离; 每个 master 如果故障，那么就会自动将 slave 切换成 master，高可用")]),s._v(" "),e("p",[s._v("redis cluster 的基本功能，来测试一下")]),s._v(" "),e("h2",{attrs:{id:"实验多-master-写入-海量数据的分布式存储"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实验多-master-写入-海量数据的分布式存储"}},[s._v("#")]),s._v(" 实验多 master 写入 -> 海量数据的分布式存储")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@eshop-cache01 ~]# redis-cli -h eshop-cache01 -p 7001\neshop-cache01:7001> set mykey1 v1\nOK\neshop-cache01:7001> set mykey2 v2\n(error) MOVED 14119 192.168.99.172:7005\neshop-cache01:7001>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("先登录其中一台机器，然后写入数据，会发现 mykey2 error 了，这是告诉你需要到 172 上面去执行写入。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-cache02 ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-cli -h 192.168.99.172 -p 7005")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.172:700"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("5")]),s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" mykey2 v2\nOK\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.172:700"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("5")]),s._v(">")]),s._v(" get mykey2\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"v2"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.172:700"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("5")]),s._v(">")]),s._v(" get mykey1\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" MOVED "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1860")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.170:7001\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.172:700"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("5")]),s._v(">")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("在提示的上面执行写入数据，能看到成功了，但是读取 myke1 又提示需要到他对应的 master 上去读取")]),s._v(" "),e("p",[s._v("原因是：每个 master 都会计算这个 key 对应的 CRC16 值，然后对 16384个 hashslot 取模，找到 key 对应的 hashslot，找到 hashslot 对应的 master")]),s._v(" "),e("p",[s._v("如果对应的 master 就在自己本地的话，自己就处理掉了")]),s._v(" "),e("p",[s._v("但是如果计算出来的 hashslot 在其他 master 上，那么就会给客户端返回一个 moved error，告诉你，你得到哪个 master 上去执行这条写入的命令")]),s._v(" "),e("p",[s._v("什么叫做多 master 的写入？就是每条数据只能存在于一个 master 上，不同的 master 负责存储不同的数据，这个就是分布式的数据存储")]),s._v(" "),e("p",[s._v("比如：100w 条数据，5 个 master，每个 master 就负责存储 20w 条数据，分布式数据存储")]),s._v(" "),e("blockquote",[e("p",[s._v("以下内容是讲师独白 + 扩展知识角度")])]),s._v(" "),e("p",[s._v("我除了大型的 java 系统架构，还专注在大数据系统架构、分布式、分布式存储\nhadoop hdfs、分布式资源调度 hadoop yarn、分布式计算 hadoop mapreduce/hive、分布式的 nosql 数据库 hbase、分布式的协调 zookeeper、分布式通用计算引擎 spark、分布式的实时计算引擎 storm 这些方面。讲解的角度不一样")]),s._v(" "),e("p",[s._v("如果你要处理海量数据，就涉及到了一个名词，叫做大数据，只要涉及到大数据，那么其实就会涉及到分布式")]),s._v(" "),e("p",[s._v("如 redis cluster 就是分布式的")]),s._v(" "),e("p",[s._v("因为我来讲 java 系统的架构，有时候跟其他人不一样，不是纯搞 java，但是我因为工作时间很长，早期专注做 java 架构好多年，大数据兴起，就一直专注大数据系统架构")]),s._v(" "),e("p",[s._v("大数据相关的系统，也涉及很多的 java 系统架构，高并发、高可用、高性能、可扩展、分布式系统等很复杂的架构")]),s._v(" "),e("p",[s._v("所以会给大家稍微拓展一下知识面，从不同的角度去讲解一块知识")]),s._v(" "),e("p",[s._v("redis 高并发、高性能、每日上亿流量的大型电商网站的商品详情页系统的缓存架构，面对这个需求来讲解的，redis 是作为大规模缓存架构中的底层的核心存储的支持")]),s._v(" "),e("p",[s._v("高并发、高性能、每日上亿流量，对 redis 深入讲解一些原理：")]),s._v(" "),e("ul",[e("li",[s._v("redis 持久化 -> 灾难的时候，做数据恢复，")]),s._v(" "),e("li",[s._v("复制 -> 读写分离，扩容 slave，支撑更高的读吞吐，redis 怎么支撑读 QPS 超过 10 万，几十万;")]),s._v(" "),e("li",[s._v("哨兵，在 redis 主从，一主多从，怎么保证 99.99% 可用性; redis cluster，海量数据")])]),s._v(" "),e("p",[s._v("java 架构课，架构思路和设计是很重要的，但是另外一点，我希望能够带着大家用真正 java 架构师的角度去看待一些技术，而不是仅仅停留在技术的一些细节的点")]),s._v(" "),e("p",[s._v("给大家从一些大数据的角度，去分析一下我们 java 架构领域中的一些技术")]),s._v(" "),e("p",[s._v("天下武功，都出自一脉，研究过各种大数据的系统，比如 redis cluster 讲解了很多原理，它跟 elasticsearch 很多底层的分布式原理，都是类似的")]),s._v(" "),e("p",[s._v("如：redis AOF，fsync")]),s._v(" "),e("p",[s._v("elasticsearch 建立索引的时候，先写内存缓存，每秒钟把数据刷入 os cache，接下来再每隔一定时间 fsync 到磁盘上去")]),s._v(" "),e("p",[s._v("redis cluster，写可以到任意 master，任意 master 计算 key 的 hashslot 以后，告诉 client，重定向，路由到其他 mater 去执行，分布式存储的一个经典的做法")]),s._v(" "),e("p",[s._v("elasticsearch 建立索引的时候，也会根据 doc id/routing value，做路由，路由到某个其他节点，重定向到其他节点去执行")]),s._v(" "),e("p",[s._v("分布式的一些系统，如 hadoop，spark，storm 里面很多核心的思想都是类似的")]),s._v(" "),e("h2",{attrs:{id:"实验不同-master-各自的-slave-读取-读写分离"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实验不同-master-各自的-slave-读取-读写分离"}},[s._v("#")]),s._v(" 实验不同 master 各自的 slave 读取 -> 读写分离")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-cache01 ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-cli -h 192.168.99.171 -p 7004")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.171:700"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("4")]),s._v(">")]),s._v(" get mykey2\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" MOVED "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("14119")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.172:7005\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.171:700"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("4")]),s._v(">")]),s._v(" get mykey1\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" MOVED "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1860")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.170:7001\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.171:700"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("4")]),s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("readonly")]),s._v("\nOK\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.171:700"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("4")]),s._v(">")]),s._v(" get mykey2\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" MOVED "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("14119")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.172:7005\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.171:700"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("4")]),s._v(">")]),s._v(" get mykey1\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"v1"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("可以看到在 salve 节点上登录之后，一开始获取数据会报错，但是带上 readonly 指令后，再次获取只要是对应 master 的 salve 就能获取到数据")]),s._v(" "),e("p",[s._v("注意：check 命令查看到的集群信息，一个 M 一个 S，不要以为这个顺序就是互相对应的。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@eshop-cache01 ~]# redis-trib.rb check eshop-cache01:7001\n>>> Performing Cluster Check (using node eshop-cache01:7001)\nM: 3807711e01cd28509d7ba9839e601058bf2a30cf eshop-cache01:7001\n   slots:0-5460 (5461 slots) master\n   1 additional replica(s)\nS: 9247dfb394441619da9da5b75b62b034c3f420e5 192.168.99.172:7006\n   slots: (0 slots) slave\n   replicates cb2256b653cf5b7b3f9d1478cfa2953cc334c5bf\nM: cb2256b653cf5b7b3f9d1478cfa2953cc334c5bf 192.168.99.172:7005\n   slots:10923-16383 (5461 slots) master\n   1 additional replica(s)\nS: a174fe6613862db8985f82caac58bde91dfbd664 192.168.99.171:7004\n   slots: (0 slots) slave\n   replicates 3807711e01cd28509d7ba9839e601058bf2a30cf\nM: 0ff0e8ab05a8b032aeacf24e0c7fea77be3f5c55 192.168.99.171:7003\n   slots:5461-10922 (5462 slots) master\n   1 additional replica(s)\nS: b0d66be3b15e117696c50a781ff24a842456733d 192.168.99.170:7002\n   slots: (0 slots) slave\n   replicates 0ff0e8ab05a8b032aeacf24e0c7fea77be3f5c55\n[OK] All nodes agree about slots configuration.\n>>> Check for open slots...\n>>> Check slots coverage...\n[OK] All 16384 slots covered.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("p",[s._v("可以通过命令 info 命令查看，可以看到 7004 才是 7001 的从节点")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("192.168.99.171:7004> info\n....\n# Replication\nrole:slave\nmaster_host:192.168.99.170\nmaster_port:7001\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("后面，马上把 redis 架构给讲完之后，就开始讲解业务系统的开发，包括高并发的商品详情页系统的大型的缓存架构，jedis cluster 相关 api 去封装和测试对 redis cluster 的访问")]),s._v(" "),e("p",[s._v("jedis cluster api，就可以自动针对多个 master 进行写入和读取")]),s._v(" "),e("p",[s._v("redis-cli -c 启动，就会自动进行各种底层的重定向的操作")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-cache01 ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-cli -h 192.168.99.171 -p 7004 -c")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.171:700"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("4")]),s._v(">")]),s._v(" get mykey1\n-"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Redirected to slot "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1860")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" located at "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.170:7001\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"v1"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.170:700"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" get mykey2\n-"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Redirected to slot "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("14119")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" located at "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.172:7005\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"v2"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("实验 redis cluster 的读写分离的时候，会发现有一定的限制性，默认情况下 redis cluster 的核心的理念，主要是用 slave 做高可用的，每个 master 挂一两个 slave，主要是做数据的热备，还有 master 故障时的主备切换，实现高可用的")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("redis cluster 默认是不支持 slave 节点读或者写的，跟我们手动基于 replication 搭建的主从架构不一样的")])]),s._v(" "),e("p",[s._v("slave node 上 使用 readonly，get，这个时候才能在 slave node 进行读取")]),s._v(" "),e("p",[s._v("redis cluster 主从架构是出来，读写分离，复杂了点也可以做，但是 jedis 客户端，对 redis cluster 的读写分离支持不太好的")]),s._v(" "),e("p",[e("strong",[s._v("默认的话就是读和写都到 master 上去执行的")])]),s._v(" "),e("p",[s._v("如果你要让最流行的 jedis 做 redis cluster 的读写分离的访问，那可能还得自己修改一点 jedis 的源码，成本比较高")]),s._v(" "),e("p",[s._v("核心的思路，在 redis cluster 中，就没有所谓的读写分离的概念了")]),s._v(" "),e("p",[s._v("读写分离是为了什么？主要是因为要建立一主多从的架构，才能横向任意扩展 slave node 去支撑更大的读吞吐量")]),s._v(" "),e("p",[s._v("redis cluster 的架构下，实际上本身 master 就是可以任意扩展的，你如果要支撑更大的读吞吐量，或者写吞吐量，或者数据量，都可以直接对 master 进行横向扩展就可以了，也可以实现支撑更高的读吞吐的效果")]),s._v(" "),e("p",[s._v("这个结论不会去跟大家直接讲解的，很多东西都要带着一些疑问，未知，实际经过一些实验和操作之后，让你体会的更加深刻一些")]),s._v(" "),e("p",[s._v("画外音：这个我很赞同，现在我是终于明白了为什么说 redis cluster 读写分离，但是又不是 replication 读写分离，他们的区别很深刻了")]),s._v(" "),e("p",[s._v("redis cluster 主从架构、读写分离，没说错没有撒谎，但是支持不太好，在 server 层面、jedis client 层面也不太好。")]),s._v(" "),e("p",[s._v("所以说扩容 master，跟之前扩容 slave，效果是一样的")]),s._v(" "),e("h2",{attrs:{id:"实验自动故障切换-高可用性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实验自动故障切换-高可用性"}},[s._v("#")]),s._v(" 实验自动故障切换 -> 高可用性")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 查看哪一个是 master\n[root@eshop-cache01 ~]# redis-trib.rb check eshop-cache01:7001\n>>> Performing Cluster Check (using node eshop-cache01:7001)\nM: 3807711e01cd28509d7ba9839e601058bf2a30cf eshop-cache01:7001\n   slots:0-5460 (5461 slots) master\n   1 additional replica(s)\nS: 9247dfb394441619da9da5b75b62b034c3f420e5 192.168.99.172:7006\n   slots: (0 slots) slave\n   replicates cb2256b653cf5b7b3f9d1478cfa2953cc334c5bf\nM: cb2256b653cf5b7b3f9d1478cfa2953cc334c5bf 192.168.99.172:7005\n   slots:10923-16383 (5461 slots) master\n   1 additional replica(s)\nS: a174fe6613862db8985f82caac58bde91dfbd664 192.168.99.171:7004\n   slots: (0 slots) slave\n   replicates 3807711e01cd28509d7ba9839e601058bf2a30cf\nM: 0ff0e8ab05a8b032aeacf24e0c7fea77be3f5c55 192.168.99.171:7003\n   slots:5461-10922 (5462 slots) master\n   1 additional replica(s)\nS: b0d66be3b15e117696c50a781ff24a842456733d 192.168.99.170:7002\n   slots: (0 slots) slave\n   replicates 0ff0e8ab05a8b032aeacf24e0c7fea77be3f5c55\n[OK] All nodes agree about slots configuration.\n>>> Check for open slots...\n>>> Check slots coverage...\n[OK] All 16384 slots covered.\n\n# 我这里 7001 是 master\n# kill 掉它\n[root@eshop-cache01 ~]# ps -ef | grep redis\nroot     27419     1  0 09:25 ?        00:00:31 /usr/local/bin/redis-server 192.168.99.170:7001 [cluster]\nroot     27424     1  0 09:25 ?        00:00:31 /usr/local/bin/redis-server 192.168.99.170:7002 [cluster]\nroot     27505 27464  0 11:00 pts/2    00:00:00 grep redis\n[root@eshop-cache01 ~]# kill 27419\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br")])]),e("p",[s._v("再次运行 check 的时候就会发现少了一个节点，然而 master 节点却还是 3 个。\n7004 变成 master 了")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@eshop-cache01 ~]# redis-trib.rb check eshop-cache01:7002\n>>> Performing Cluster Check (using node eshop-cache01:7002)\nS: b0d66be3b15e117696c50a781ff24a842456733d eshop-cache01:7002\n   slots: (0 slots) slave\n   replicates 0ff0e8ab05a8b032aeacf24e0c7fea77be3f5c55\nM: a174fe6613862db8985f82caac58bde91dfbd664 192.168.99.171:7004\n   slots:0-5460 (5461 slots) master\n   0 additional replica(s)\nM: cb2256b653cf5b7b3f9d1478cfa2953cc334c5bf 192.168.99.172:7005\n   slots:10923-16383 (5461 slots) master\n   1 additional replica(s)\nS: 9247dfb394441619da9da5b75b62b034c3f420e5 192.168.99.172:7006\n   slots: (0 slots) slave\n   replicates cb2256b653cf5b7b3f9d1478cfa2953cc334c5bf\nM: 0ff0e8ab05a8b032aeacf24e0c7fea77be3f5c55 192.168.99.171:7003\n   slots:5461-10922 (5462 slots) master\n   1 additional replica(s)\n[OK] All nodes agree about slots configuration.\n>>> Check for open slots...\n>>> Check slots coverage...\n[OK] All 16384 slots covered.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])]),e("p",[s._v("这个时候连接到 7004 上去读写都能正常使用，且能获取到 7001 上写入的数据")]),s._v(" "),e("p",[s._v("然后重启 7001，再次查看他的状态，发现 7001 被自动转为 slave 了")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@eshop-cache01 ~]# /etc/init.d/redis_7001 start\nStarting Redis server...\n[root@eshop-cache01 ~]# redis-trib.rb check eshop-cache01:7001\n>>> Performing Cluster Check (using node eshop-cache01:7001)\nS: 3807711e01cd28509d7ba9839e601058bf2a30cf eshop-cache01:7001\n   slots: (0 slots) slave\n   replicates a174fe6613862db8985f82caac58bde91dfbd664\nS: 9247dfb394441619da9da5b75b62b034c3f420e5 192.168.99.172:7006\n   slots: (0 slots) slave\n   replicates cb2256b653cf5b7b3f9d1478cfa2953cc334c5bf\nM: a174fe6613862db8985f82caac58bde91dfbd664 192.168.99.171:7004\n   slots:0-5460 (5461 slots) master\n   1 additional replica(s)\nS: b0d66be3b15e117696c50a781ff24a842456733d 192.168.99.170:7002\n   slots: (0 slots) slave\n   replicates 0ff0e8ab05a8b032aeacf24e0c7fea77be3f5c55\nM: cb2256b653cf5b7b3f9d1478cfa2953cc334c5bf 192.168.99.172:7005\n   slots:10923-16383 (5461 slots) master\n   1 additional replica(s)\nM: 0ff0e8ab05a8b032aeacf24e0c7fea77be3f5c55 192.168.99.171:7003\n   slots:5461-10922 (5462 slots) master\n   1 additional replica(s)\n[OK] All nodes agree about slots configuration.\n>>> Check for open slots...\n>>> Check slots coverage...\n[OK] All 16384 slots covered.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br")])]),e("p",[s._v("通过登录 7004 查看信息也是一样的")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@eshop-cache01 ~]# redis-cli -h 192.168.99.171 -p 7004\n192.168.99.171:7004> info replication\n# Replication\nrole:master\nconnected_slaves:1\nslave0:ip=192.168.99.170,port=7001,state=online,offset=421,lag=1\nmaster_repl_offset:421\nrepl_backlog_active:1\nrepl_backlog_size:1048576\nrepl_backlog_first_byte_offset:2\nrepl_backlog_histlen:420\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("在这里发现，之前使用 info 命令返回了一大堆信息，但是其中就包含了 replication，原来这个 info 命令后面可以跟一个具体的项，就只返回该了")]),s._v(" "),e("p",[s._v("总的感觉上来说，redis cluster 还是很强大。这个思路对于缓存来说比数据库考虑得要少，但是针对缓存场景来说，的确是很赞的一种设计")])])}),[],!1,null,null,null);a.default=n.exports}}]);
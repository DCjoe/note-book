(window.webpackJsonp=window.webpackJsonp||[]).push([[371],{1768:function(s,v,e){"use strict";e.r(v);var r=e(13),_=Object(r.a)({},(function(){var s=this,v=s.$createElement,e=s._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_034-redis-阶段性总结-1t-以上海量数据-10-万以上-qps-高并发-99-99-高可用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_034-redis-阶段性总结-1t-以上海量数据-10-万以上-qps-高并发-99-99-高可用"}},[s._v("#")]),s._v(" 034. redis 阶段性总结：1T 以上海量数据+10 万以上 QPS 高并发+ 99.99% 高可用")]),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#讲解-redis-是为了什么"}},[s._v("讲解 redis 是为了什么？")])]),e("li",[e("a",{attrs:{href:"#讲解的-redis-可以实现什么效果"}},[s._v("讲解的 redis 可以实现什么效果？")])]),e("li",[e("a",{attrs:{href:"#redis-的第一套企业级的架构"}},[s._v("redis 的第一套企业级的架构")])]),e("li",[e("a",{attrs:{href:"#redis-的第二套企业级架构"}},[s._v("redis 的第二套企业级架构")])]),e("li",[e("a",{attrs:{href:"#我们现在课程讲解的项目进展到哪里了"}},[s._v("我们现在课程讲解的项目进展到哪里了？")])])])]),e("p"),s._v(" "),e("h2",{attrs:{id:"讲解-redis-是为了什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#讲解-redis-是为了什么"}},[s._v("#")]),s._v(" 讲解 redis 是为了什么？")]),s._v(" "),e("p",[s._v("本课程主题：高并发、亿级流量、高性能、海量数据的场景，电商网站的商品详情页系统的缓存架构")]),s._v(" "),e("p",[s._v("商品详情页系统，大型电商网站，会有很多部分组成，但是支撑高并发、亿级流量的，主要就是其中的大型的缓存架构，在这个大型的缓存架构中，redis 是最最基础的一层")]),s._v(" "),e("p",[s._v("高并发，缓存架构中除了 redis，还有其他的组成部分，但是 redis 至关重要，因为大量的离散请求，随机请求")]),s._v(" "),e("ul",[e("li",[s._v("离散请求：各种你未知的用户过来的请求，上千万用户过来访问，每个用户访问 10 次;")]),s._v(" "),e("li",[s._v("集中式请求：1 个用户过来，一天访问 1 亿次")])]),s._v(" "),e("p",[s._v("大量的离散请求场景下，支撑商品展示的最重要的，就是 redis cluster，去抗住每天上亿的请求流量，支撑高并发的访问")]),s._v(" "),e("p",[s._v("redis cluster 在整个缓存架构中，如何跟其他几个部分搭配起来组成一个大型的缓存系统，后面再讲")]),s._v(" "),e("h2",{attrs:{id:"讲解的-redis-可以实现什么效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#讲解的-redis-可以实现什么效果"}},[s._v("#")]),s._v(" 讲解的 redis 可以实现什么效果？")]),s._v(" "),e("p",[s._v("我之前一直在 redis 的各个知识点的讲解之前都强调一下，我们要讲解的每个知识点，要解决的问题是什么？")]),s._v(" "),e("p",[s._v("比如 持久化、复制（主从架构）、哨兵（高可用，主备切换）、redis cluster（海量数据+横向扩容+高可用/主备切换）")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("持久化：高可用的一部分")]),s._v(" "),e("p",[s._v("在发生 redis 集群灾难的情况下（比如说部分 master + slave 全部死掉了），如何快速进行数据恢复，快速实现服务可用，才能实现整个系统的高可用")])]),s._v(" "),e("li",[e("p",[s._v("复制：主从架构")]),s._v(" "),e("p",[s._v("master -> slave 复制，读写分离的架构，写 master，读 slave，横向扩容 slave 支撑更高的读吞吐，")]),s._v(" "),e("p",[s._v("主要解决读高并发，10万，20万，30万，上百万，QPS，横向扩容")])]),s._v(" "),e("li",[e("p",[s._v("哨兵：高可用")]),s._v(" "),e("p",[s._v("结合主从架构使用，在 master 故障的时候，快速将 slave 切换成 master，实现快速的灾难恢复，实现高可用性")])]),s._v(" "),e("li",[e("p",[s._v("redis cluster：")]),s._v(" "),e("p",[s._v("多 master 读写、数据分布式的存储、横向扩容、水平扩容、快速支撑高达的数据量 + 更高的读写 QPS、自动进行 master -> slave 的主备切换，高可用")])])]),s._v(" "),e("p",[s._v("这几块知识讲解完之后，就明白了：是让底层的缓存系统（redis），实现能够任意水平扩容，支撑海量数据（1T+，几十 T，10G * 600 redis = 6T），支撑很高的读写 QPS（redis 单机在几万 QPS，10 台，几十万 QPS），高可用性（给我们每个 redis 实例都做好 AOF+RDB 的备份策略+容灾策略，slave -> master 主备切换）")]),s._v(" "),e("p",[s._v("最终实现：1T+ 海量数据、10 万+ 读写 QPS、99.99% 高可用性")]),s._v(" "),e("h2",{attrs:{id:"redis-的第一套企业级的架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-的第一套企业级的架构"}},[s._v("#")]),s._v(" redis 的第一套企业级的架构")]),s._v(" "),e("p",[s._v("如果你的数据量不大，单 master 就可以容纳，一般来说你的缓存的总量在 10G 以内就可以，那么建议按照以下架构去部署 redis")]),s._v(" "),e("ul",[e("li",[s._v("redis 持久化")]),s._v(" "),e("li",[s._v("备份方案")]),s._v(" "),e("li",[s._v("容灾方案")]),s._v(" "),e("li",[s._v("replication（主从 + 读写分离）")]),s._v(" "),e("li",[s._v("sentinal（哨兵集群，3 个节点，高可用性）")])]),s._v(" "),e("p",[s._v("这套方案可以支撑：")]),s._v(" "),e("ul",[e("li",[s._v("数据量在 10G 以内")]),s._v(" "),e("li",[s._v("写 QPS 在几万左右")]),s._v(" "),e("li",[s._v("读 QPS 可以上 10 万以上（随你的需求，水平扩容 slave 节点就可以）")]),s._v(" "),e("li",[s._v("可用性在 99.99%")])]),s._v(" "),e("h2",{attrs:{id:"redis-的第二套企业级架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-的第二套企业级架构"}},[s._v("#")]),s._v(" redis 的第二套企业级架构")]),s._v(" "),e("p",[s._v("如果你的数据量很大，比如我们课程的 topic，大型电商网站的商品详情页的架构（对标那些国内排名前三的大电商网站，如 "),e("code",[s._v("*宝，*东，*宁易购")]),s._v("），数据量是很大的，需要支撑海量数据")]),s._v(" "),e("p",[s._v("那么就建议使用 redis cluster，多 master 分布式存储数据，水平扩容，")]),s._v(" "),e("ul",[e("li",[s._v("数据量 1T+ 以上没问题，只要扩容 master 即可")]),s._v(" "),e("li",[s._v("上 10万 的读写 QPS，99.99% 高可用性")])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("redis cluster 读写分离支持不太好，readonly 才能去 slave 上读,\n所以只需要横向扩容 master 即可")])]),s._v(" "),e("p",[s._v("支撑 99.99% 可用性，也没问题，slave -> master的主备切换，冗余 slave 去进一步提升可用性的方案（每个 master 挂一个 slave，但是整个集群再加个 3 个 slave 冗余一下）")]),s._v(" "),e("p",[s._v("我们课程里，两套架构都讲解了，后续的业务系统的开发，主要是基于 redis cluster 去做")]),s._v(" "),e("p",[s._v("从架构的角度，我们的 redis 是可以做到的，水平扩容，只要机器足够，到 1T 数据量，50 万读写 QPS，99.99%")]),s._v(" "),e("h2",{attrs:{id:"我们现在课程讲解的项目进展到哪里了"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#我们现在课程讲解的项目进展到哪里了"}},[s._v("#")]),s._v(" 我们现在课程讲解的项目进展到哪里了？")]),s._v(" "),e("p",[s._v("我们要做后续的业务系统的开发，redis 的架构部署好是第一件事情，也是非常重要的，也是你作为一个架构师而言，在对系统进行设计的时候，你必须要考虑到底层的 redis 的并发、性能、能支撑的数据量、可用性")]),s._v(" "),e("p",[s._v("redis：水平扩容，海量数据，上 10 万的读写 QPS，99.99% 高可用性")]),s._v(" "),e("p",[s._v("从架构的角度，我们的 redis 是可以做到的，水平扩容，只要机器足够，到 1T 数据量，50 万读写 QPS，99.99%")]),s._v(" "),e("p",[s._v("正式开始做大型电商网站的商品详情页系统，大规模的缓存架构设计")])])}),[],!1,null,null,null);v.default=_.exports}}]);
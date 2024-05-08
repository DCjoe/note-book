(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{1650:function(_,v,i){"use strict";i.r(v);var s=i(13),t=Object(s.a)({},(function(){var _=this,v=_.$createElement,s=_._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[s("h1",{attrs:{id:"_128-商品详情页动态渲染系统-大型网站的多机房-4级-缓存架构设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_128-商品详情页动态渲染系统-大型网站的多机房-4级-缓存架构设计"}},[_._v("#")]),_._v(" 128. 商品详情页动态渲染系统：大型网站的多机房 4级 缓存架构设计")]),_._v(" "),s("p",[_._v("多机房缓存，主从缓存集群通过同步，各个机房读取自己机房的从集群，防止跨集群访问集群")]),_._v(" "),s("h2",{attrs:{id:"本地缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地缓存"}},[_._v("#")]),_._v(" 本地缓存")]),_._v(" "),s("p",[_._v("使用 nginx shared dict 作为 local cache，http-lua-module 的 shared dict 可以作为缓存，\n"),s("strong",[_._v("而且 reload nginx 不会丢失")])]),_._v(" "),s("p",[_._v("也可以使用 nginx proxy cache 做 local cache")]),_._v(" "),s("p",[_._v("双层 nginx 部署，一层接入，一层应用，接入层用 hash 路由策略提升缓存命中率，比如")]),_._v(" "),s("ul",[s("li",[_._v("库存缓存数据的 TP99 为 5s，本地缓存命中率 25%，redis 命中率 28%，回源命中率 47% （回源就是数据直连服务 + 主集群）")]),_._v(" "),s("li",[_._v("一次普通秒杀活动的命中率，本地缓存 55%，分布式 redis 命中率 15%，回源命中率 27%")])]),_._v(" "),s("p",[_._v("使用 hash 路由策略，最高可以提升命中率达到 10%；（分发层把同一个商品 ID 分发到同一个应用层 nginx 上）")]),_._v(" "),s("p",[_._v("全缓存链路维度化存储，如果有 3个 维度的数据，只有其中 1个 过期了，那么只要获取那 1个 过期的数据即可，\nnginx local cache 的过期时间一般设置为 30min，到后端的流量会减少至少 3 倍")]),_._v(" "),s("h2",{attrs:{id:"_4-级缓存的作用是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-级缓存的作用是什么"}},[_._v("#")]),_._v(" 4 级缓存的作用是什么？")]),_._v(" "),s("ul",[s("li",[s("p",[_._v("nginx 本地缓存：抗热点数据，小内存缓存访问最频繁的数据")])]),_._v(" "),s("li",[s("p",[_._v("各个机房的 redis 集群：")]),_._v(" "),s("p",[_._v("抗大量离散数据，采用一致性 hash 策略构建分布式 redis 缓存集群")])]),_._v(" "),s("li",[s("p",[_._v("tomcat 中的动态服务本地 jvm 堆缓存")]),_._v(" "),s("ul",[s("li",[_._v("支持在一个请求中多次读取一个数据，或者与该数据相关的数据")]),_._v(" "),s("li",[_._v("作为 redis 崩溃的备用防线")]),_._v(" "),s("li",[_._v("固定缓存一些访问频繁更改较少的数据，比如分类、品牌等数据")]),_._v(" "),s("li",[_._v("对缓存过期时间为 redis 过期时间的一半")])])]),_._v(" "),s("li",[s("p",[_._v("主 redis 集群")]),_._v(" "),s("ul",[s("li",[_._v("命中率非常低，小于 5%； （为什么?应该是跟过期时间有关系把？前 2级 缓存都没有到这里一般也不会有？）")]),_._v(" "),s("li",[_._v("防止主从同步延迟导致的数据读取 miss；从集群还未同步到，会通过数据直连服务请求主集群")]),_._v(" "),s("li",[_._v("防止各个机房的从 redis 集群崩溃之后，全量走依赖服务会导致雪崩，主 redis 集群是后背防线")])])]),_._v(" "),s("li",[s("p",[_._v("主 redis 集群：采取多机房一主三从的高可用部署架构")]),_._v(" "),s("p",[s("img",{attrs:{src:i(472),alt:""}})]),_._v(" "),s("p",[_._v("如上图：redis 集群部署采取双机房一主三活的架构：")]),_._v(" "),s("ul",[s("li",[_._v("机房 A ：部署主集群 + 一个从集群，")]),_._v(" "),s("li",[_._v("机房 B ：部署一个从集群（从机房 A 主集群）+ 一个从集群（从机房 B 从集群）")])]),_._v(" "),s("p",[_._v("双机房一主三活的架构，保证了机房 A 彻底故障的时候，机房 B 还有一套备用的集群，可以升级为一主一从")]),_._v(" "),s("p",[_._v("如果采取机房 A 部署一主一从，机房 B 一从，那么机房 A 故障时，机房 B 的一从承载所有读写压力，压力过大，很难承受")])])])])}),[],!1,null,null,null);v.default=t.exports},472:function(_,v,i){_.exports=i.p+"assets/img/markdown-img-paste-20190712230951795.e29f442d.png"}}]);
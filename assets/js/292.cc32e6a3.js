(window.webpackJsonp=window.webpackJsonp||[]).push([[292],{1648:function(v,t,_){"use strict";_.r(t);var a=_(13),s=Object(a.a)({},(function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"_195-商品详情页前端介绍-课程总结-java-架构师展望"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_195-商品详情页前端介绍-课程总结-java-架构师展望"}},[v._v("#")]),v._v(" 195. 商品详情页前端介绍&课程总结& Java 架构师展望")]),v._v(" "),_("p",[v._v("本章是最后一讲，我们最后，相当于我们已经有了两套系统")]),v._v(" "),_("ul",[_("li",[v._v("第一套：商品服务 + 动态渲染系统")]),v._v(" "),_("li",[v._v("第二套：库存/价格服务+ OneService 系统")]),v._v(" "),_("li",[v._v("第三部分：前端页面")])]),v._v(" "),_("h2",{attrs:{id:"核心思路"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#核心思路"}},[v._v("#")]),v._v(" 核心思路")]),v._v(" "),_("ol",[_("li",[v._v("时效性比较低的数据（服务端渲染）")])]),v._v(" "),_("p",[v._v("更新的时候发送消息到 mq，专门有一套数据同步服务+数据聚合服务来进行数据的加工和处理")]),v._v(" "),_("p",[v._v("前端页面，请求商品详情页的时候，nginx 会走多级缓存策略（nginx local cache -> 本机房 redis 集群 -> 数据直连服务 -> 本地 jvm cache -> redis 主集群 -> 依赖服务），将时效性比较低的数据，全部加载到内存中，然后动态渲染到 html 中")]),v._v(" "),_("p",[v._v("前端 html 展示出来的时候，上来就有一些动态渲染出来的数据")]),v._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[v._v("时效性比较高的数据")])]),v._v(" "),_("p",[v._v("依赖服务每次更新数据库的时候，直接就更新 redis 缓存了，mysql+redis 双写")]),v._v(" "),_("p",[v._v("前端 html 在展示出来以后，立即会对时效性要求比较高的数据，比如库存、价格、促销、推荐、广告，发送 ajax 请求到后盾")]),v._v(" "),_("p",[v._v("后端 nginx 接收到请求之后，就会将请求转发给 one service 系统，one service 系统代理了所有几十个服务的接口，统一代理、统一降级、预处理、合并接口、统一监控")]),v._v(" "),_("p",[v._v("由 one service 系统发送请求给后端的一些服务，那些服务优先读 redis，如果没有则读 mysql，然后再重新刷入 redis")]),v._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[v._v("商品介绍")])]),v._v(" "),_("p",[v._v("写的时候，采取的是分段存储策略，之前介绍过了")]),v._v(" "),_("p",[v._v("读的时候，也是在用户滚屏的时候，动态的异步 ajax 加载，分段加载商品介绍，不要一次性将所有的商品介绍都加载出来")]),v._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),_("p",[v._v("你学到了哪些东西？")]),v._v(" "),_("ul",[_("li",[v._v("第一版：深入 redis、缓存架构、hystrix 高可用")]),v._v(" "),_("li",[v._v("第二版：完整的亿级流量商品详情页的系统架构，spring cloud+jenkins+docker 的微服务项目实战")])]),v._v(" "),_("h2",{attrs:{id:"最后说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#最后说明"}},[v._v("#")]),v._v(" 最后说明")]),v._v(" "),_("p",[v._v("单课，是不可能真的将所有东西讲的面面俱到的")]),v._v(" "),_("p",[v._v("如果要从职业生涯去考虑，比如说从月薪十几 k 的中级工程师到月薪二十多 k 的高级工程师，或者从高级工程师到月薪三十多 k，四十多 k 的架构师，\n至少需要付出 1~2 年的时间，非常系统的去学习完整的架构师的知识，才能够达到")])])}),[],!1,null,null,null);t.default=s.exports}}]);
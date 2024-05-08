(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{1690:function(t,a,e){"use strict";e.r(a);var _=e(13),v=Object(_.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_170-商品详情页动态渲染系统-消息队列架构升级之刷数据与高优先级队列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_170-商品详情页动态渲染系统-消息队列架构升级之刷数据与高优先级队列"}},[t._v("#")]),t._v(" 170. 商品详情页动态渲染系统：消息队列架构升级之刷数据与高优先级队列")]),t._v(" "),e("h2",{attrs:{id:"什么是刷数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是刷数据"}},[t._v("#")]),t._v(" 什么是刷数据？")]),t._v(" "),e("p",[t._v("刷数据就是全量刷新 redis 中的数据，那么此操作一般在以下场景中需要：")]),t._v(" "),e("ol",[e("li",[t._v("代码 bug")]),t._v(" "),e("li",[t._v("上线新功能")]),t._v(" "),e("li",[t._v("某个对象字段改动，如 status 字段，以前存储的是数值，现在要改成 open、send 等字符串")])]),t._v(" "),e("p",[t._v("这个时候就需要全量的刷新数据了，而且一般都是在晚上凌晨时，依赖服务会大量的更新数据，大量的请求会进入到消息队列中，\n此时系统压力会非常大，可能会影响夜间一些正常用户的购买行为等")]),t._v(" "),e("p",[t._v("解决这个场景，就是单独开一个刷数据队列，选择在晚上凌晨时来消费该队列中的请求")]),t._v(" "),e("h2",{attrs:{id:"高优先级队列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高优先级队列"}},[t._v("#")]),t._v(" 高优先级队列")]),t._v(" "),e("p",[t._v("所谓高优先级，比如一些活动促销，希望快速的响应。那么这个时候就可以单独开一个高优先级队列，\n来单独处理这种加急的场景。")]),t._v(" "),e("h2",{attrs:{id:"业务实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#业务实现"}},[t._v("#")]),t._v(" 业务实现")]),t._v(" "),e("p",[t._v("总之，以上两个队列基本上是在消息队列架构中比较重要和基础的队列，\n一个是等待时机消息，一个是能让加急的消息能快速处理；\n核心原理就是，合理拆分消息，不和普通消息混合在一起。")]),t._v(" "),e("p",[t._v("新增以下队列")]),t._v(" "),e("ul",[e("li",[t._v("refresh-data-change-queue")]),t._v(" "),e("li",[t._v("refresh-aggr-data-change-queue")]),t._v(" "),e("li",[t._v("hight-priority-data-change-queue")]),t._v(" "),e("li",[t._v("hight-priority-aggr-data-change-queue")])]),t._v(" "),e("ol",[e("li",[t._v("在商品服务的增删改中就要支持 3 中队列事件的操作")])]),t._v(" "),e("p",[t._v("视频中是给了一个 operationType 标识，选择走哪个队列就走哪个队列。\n2. 数据同步中也是需要单独创建一个消费者来消费，然后投递到聚合服务队列中\n3. 数据聚合服务中也是需要单独的消费者来消费")]),t._v(" "),e("p",[t._v("总的来说，与普通消息处理流程类似，只是从源头事件上走了不同的队列")]),t._v(" "),e("p",[t._v("本章就不练习了，因为没有太理解这样做在实际业务场景中要怎么去解决什么业务？\n原理是明白，拆分不同的队列，支持不同的特性业务。")])])}),[],!1,null,null,null);a.default=v.exports}}]);
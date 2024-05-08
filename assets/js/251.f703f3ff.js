(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{1592:function(t,a,e){"use strict";e.r(a);var _=e(13),v=Object(_.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_036-cache-aside-pattern-缓存-数据库读写模式的分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_036-cache-aside-pattern-缓存-数据库读写模式的分析"}},[t._v("#")]),t._v(" 036. Cache Aside Pattern 缓存+数据库读写模式的分析")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#cache-aside-pattern"}},[t._v("Cache Aside Pattern")])]),e("li",[e("a",{attrs:{href:"#为什么是删除缓存-而不是更新缓存呢"}},[t._v("为什么是删除缓存，而不是更新缓存呢？")])]),e("li",[e("a",{attrs:{href:"#在数据更新的时候是否需要更新缓存"}},[t._v("在数据更新的时候是否需要更新缓存？")])])])]),e("p"),t._v(" "),e("p",[t._v("最经典的缓存 + 数据库读写的模式：cache aside pattern")]),t._v(" "),e("h2",{attrs:{id:"cache-aside-pattern"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cache-aside-pattern"}},[t._v("#")]),t._v(" Cache Aside Pattern")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("读的时候，先读缓存，缓存没有的话，那么就读数据库，然后取出数据后放入缓存，同时返回响应")])]),t._v(" "),e("li",[e("p",[t._v("更新的时候，先删除缓存，然后再更新数据库")])])]),t._v(" "),e("h2",{attrs:{id:"为什么是删除缓存-而不是更新缓存呢"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么是删除缓存-而不是更新缓存呢"}},[t._v("#")]),t._v(" 为什么是删除缓存，而不是更新缓存呢？")]),t._v(" "),e("p",[t._v("原因很简单，很多时候复杂点的缓存的场景，缓存不简单是数据库中直接取出来的值")]),t._v(" "),e("p",[t._v("比如：商品详情页的系统，修改库存，只是修改了某个表的某些字段，但是要真正把这个影响的最终的库存计算出来，可能还需要从其他表查询一些数据，然后进行一些复杂的运算，才能最终计算出。现在最新的库存是多少，然后才能将库存更新到缓存中去")]),t._v(" "),e("p",[t._v("再比如：可能更新了某个表的一个字段，然后其对应的缓存，是需要查询另外两个表的数据，并进行运算，才能计算出缓存最新的值的")]),t._v(" "),e("p",[t._v("数据变更，然后 "),e("strong",[t._v("主动")]),t._v(" 更新缓存的代价是很高的")]),t._v(" "),e("p",[t._v("是不是说，每次修改数据库的时候，都一定要将其对应的缓存去更新一份？也许有的场景是这样的，但是对于比较复杂的缓存数据计算的场景，就不是这样了")]),t._v(" "),e("p",[t._v("如果你频繁修改一个缓存涉及的多个表，那么这个缓存会被频繁的更新，频繁的更新缓存，但是问题在于，这个缓存到底会不会被频繁访问到？")]),t._v(" "),e("p",[t._v("举个例子，一个缓存涉及的表的字段，在 1 分钟内就修改了 20 次，或者是 100 次，那么缓存更新 20 次，100 次; 但是这个缓存在 1 分钟内就被读取了 1 次，有大量的冷数据")]),t._v(" "),e("p",[t._v("热冷数据的 28 黄金法则：20% 的数据，占用了 80% 的访问量")]),t._v(" "),e("p",[t._v("实际上，如果你只是删除缓存的话，那么 1 分钟内，这个缓存不过就重新计算一次而已，开销大幅度降低")]),t._v(" "),e("p",[t._v("每次数据过来，就只是删除缓存，然后修改数据库，如果这个缓存，在 1 分钟内只是被访问了 1 次，那么只有那 1 次缓存是要被重新计算的，用缓存才去算缓存")]),t._v(" "),e("p",[t._v("其实删除缓存，而不是更新缓存，就是一个 lazy 计算的思想，不要每次都重新做复杂的计算，不管它会不会用到，而是让它到需要被使用的时候再重新计算")]),t._v(" "),e("p",[t._v("mybatis、hibernate 就是懒加载思想")]),t._v(" "),e("p",[t._v("比如：查询一个部门，部门带了一个员工的 list，没有必要说每次查询部门，都里面的 1000 个员工的数据也同时查出来啊，80% 的情况，查这个部门，就只是要访问这个部门的信息就可以了，先查部门，同时要访问里面的员工，那么这个时候只有在你要访问里面的员工的时候，才会去数据库里面查询 1000 个员工")]),t._v(" "),e("p",[t._v("小结：这里「为什么是删除缓存，而不是更新缓存呢？」的问题，刚开始是没有上下文环境的，我自己一看就懵逼了，删除和更新有什么区别呢？原来问题是：在数据更新的时候是否需要更新缓存？")]),t._v(" "),e("h2",{attrs:{id:"在数据更新的时候是否需要更新缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在数据更新的时候是否需要更新缓存"}},[t._v("#")]),t._v(" 在数据更新的时候是否需要更新缓存？")]),t._v(" "),e("p",[t._v("不需要更新缓存，28 法则，数据被使用到的时候才去加载")])])}),[],!1,null,null,null);a.default=v.exports}}]);
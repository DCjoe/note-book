(window.webpackJsonp=window.webpackJsonp||[]).push([[572],{2074:function(t,e,a){"use strict";a.r(e);var l=a(13),n=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[t._v("#")]),t._v(" MySQL")]),t._v(" "),a("h2",{attrs:{id:"mysql基础知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql基础知识"}},[t._v("#")]),t._v(" MySQL基础知识")]),t._v(" "),a("ol",[a("li",[t._v("事务并发执行遇到的问题")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("脏写\n如果"),a("strong",[t._v("一个事务修改了另外一个未提交事务修改过的数据")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("时间序号")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Session A")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Session B")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("①")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BEGIN;")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("②")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BEGIN;")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("③")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("update table set name='张三' where id = 1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("④")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("update table set name='李四' where id = 1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("⑤")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("ROLLBACK;")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("⑥")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("COMMIT;")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("p",[t._v("***Session B***中的事务进行回滚后，**"),a("em",[t._v("Session A"),a("em",[a("strong",[t._v("的更新不存在，这种现象就是")]),t._v("脏写")])])])]),t._v(" "),a("li",[a("p",[t._v("脏读")]),t._v(" "),a("p",[t._v("如果"),a("strong",[t._v("一个事务读到了列外一个未提交事务修改的数据")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("时间序号")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Session A")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Session B")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("①")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BEGIN;")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BEGIN;")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("②")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("update table set name='张三' where id = 1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("③")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("select name from table where id = 1"),a("br"),t._v("（读到的name是“张三“,发生了脏读）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("④")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("⑤")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("COMMIT;")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("⑥")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("ROLLBACK;")])])])])]),t._v(" "),a("li",[a("p",[t._v("不可重复读")]),t._v(" "),a("p",[t._v("如果"),a("strong",[t._v("一个事务只能读到列外一个已经提交的事务修改过的数据，并且其他事务每对该数据进行修改并提交后，该事务都能查询到最新值")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("时间序号")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Session A")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Session B")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("①")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BEGIN;")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("②")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("select name from table where id = 1;"),a("br"),t._v("(此时读到name是“李二”)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("③")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("update table set name='张三' where id = 1;")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("④")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("select name from table where id = 1;"),a("br"),t._v("(此时读到name是“张三”)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("⑤")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("update table set name='李四' where id = 1;")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("⑥")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("select name from table where id = 1;"),a("br"),t._v("(此时读到name是“李四”)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])])]),t._v(" "),a("li",[a("p",[t._v("幻读")]),t._v(" "),a("p",[t._v("如果"),a("strong",[t._v("一个事务先根据某些条件查询出一些记录，之后另一个事务又向表中插入了符合这些条件的记录，原先 的事务再次按照该条件查询时，能把另一个事务插入的记录也读出来")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("时间序号")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Session A")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Session B")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("①")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BEGIN;")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("②")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("select name from table where id > 0;"),a("br"),t._v(" (此时读到name是“李二”)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("③")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("insert into table values(2,'张三')")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("④")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("select name from table where id > 0;"),a("br"),t._v(" (此时读到name是“李二”,“张三”)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])])])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("事务隔离级别")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("隔离级别")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("脏读")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("不可重复读")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("幻读")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("read uncommited（未提交读）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("read commited（已提交读）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✖")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("repeatable read（可重复读）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✖")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✖")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("serializable（可串行化）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✖")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✖")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✖")])])])]),t._v(" "),a("h2",{attrs:{id:"mysql索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql索引"}},[t._v("#")]),t._v(" MySQL索引")]),t._v(" "),a("h2",{attrs:{id:"mysql锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql锁"}},[t._v("#")]),t._v(" MySQL锁")]),t._v(" "),a("h2",{attrs:{id:"mysql优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql优化"}},[t._v("#")]),t._v(" MySQL优化")])])}),[],!1,null,null,null);e.default=n.exports}}]);
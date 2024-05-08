(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{1753:function(s,a,e){"use strict";e.r(a);var t=e(13),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_018-在项目中部署-redis-的读写分离架构-包含节点间认证口令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_018-在项目中部署-redis-的读写分离架构-包含节点间认证口令"}},[s._v("#")]),s._v(" 018. 在项目中部署 redis 的读写分离架构（包含节点间认证口令）")]),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#启用复制-部署-slave-node"}},[s._v("启用复制，部署 slave node")])]),e("li",[e("a",{attrs:{href:"#强制读写分离"}},[s._v("强制读写分离")])]),e("li",[e("a",{attrs:{href:"#集群安全认证"}},[s._v("集群安全认证")])]),e("li",[e("a",{attrs:{href:"#读写分离架构的测试"}},[s._v("读写分离架构的测试")]),e("ul",[e("li",[e("a",{attrs:{href:"#在-master-上写数据"}},[s._v("在 master 上写数据")])]),e("li",[e("a",{attrs:{href:"#在-slave-上获取数据"}},[s._v("在 slave 上获取数据")])])])])])]),e("p"),s._v(" "),e("p",[s._v("之前几讲都是在铺垫各种 redis replication 的原理和知识，那么关键是怎么搭建呢？")]),s._v(" "),e("p",[s._v("本章讲解 一主一从，往主节点去写，在从节点去读，可以读到，主从架构就搭建成功了")]),s._v(" "),e("h2",{attrs:{id:"启用复制-部署-slave-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启用复制-部署-slave-node"}},[s._v("#")]),s._v(" 启用复制，部署 slave node")]),s._v(" "),e("p",[s._v("在 eshop-cache02 上安装 redis，"),e("RouterLink",{attrs:{to:"/cache-pdp/redis/007.html"}},[s._v("可参考之前的章节")]),s._v(" 中的「安装单机版 redis」与\n「redis 的生产环境启动方案」")],1),s._v(" "),e("p",[s._v("安装好之后，开启 "),e("code",[s._v("slaveof <masterip> <masterport>")]),s._v(" 属性，把该机器变成 slave node")]),s._v(" "),e("p",[s._v("/etc/redis/6379.conf")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("slaveof eshop-cache01 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"强制读写分离"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强制读写分离"}},[s._v("#")]),s._v(" 强制读写分离")]),s._v(" "),e("p",[s._v("基于主从复制架构，实现读写分离")]),s._v(" "),e("p",[s._v("/etc/redis/6379.conf")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该属性已经默认开启，")]),s._v("\nslave-read-only "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("开启了只读的 redis slave node，会拒绝所有的写操作，这样可以强制搭建成读写分离的架构")]),s._v(" "),e("h2",{attrs:{id:"集群安全认证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集群安全认证"}},[s._v("#")]),s._v(" 集群安全认证")]),s._v(" "),e("p",[s._v("master 上启用安全认证：requirepass")]),s._v(" "),e("p",[s._v("eshop-cache01/etc/redis/6379.conf")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("requirepass redis-pass\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("slave 上使用连接口令：masterauth")]),s._v(" "),e("p",[s._v("eshop-cache02/etc/redis/6379.conf")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("masterauth redis-pass\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("也就是 master 启用密码，slave 要持有相同的密码才能连接上")]),s._v(" "),e("p",[s._v("配置完成后，记得重启")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/init.d/\nredis-cli "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v("\n./redis_6379 start\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),e("p",[s._v("由于配置名称都一样，不要上传错了。")])]),s._v(" "),e("h2",{attrs:{id:"读写分离架构的测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#读写分离架构的测试"}},[s._v("#")]),s._v(" 读写分离架构的测试")]),s._v(" "),e("ul",[e("li",[s._v("先启动主节点，eshop-cache01 上的 redis实例")]),s._v(" "),e("li",[s._v("再启动从节点，eshop-cache02 上的 redis实例")])]),s._v(" "),e("p",[s._v("在 eshop-cache01 上尝试获取数据")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-cache01 init.d"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-cli")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get k1\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" NOAUTH Authentication required.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("会发现报错了，原因是之前我们开启了密码，这个时候要怎么连接 redis-cli 呢？")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-cache01 init.d"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-cli -h")]),s._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.2")]),s._v(".8\n\nUsage: redis-cli "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTIONS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("cmd "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("arg "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("arg "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  -h "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("hostname"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("      Server "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n  -p "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("port"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("          Server port "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n  -s "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("socket"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        Server socket "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("overrides "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v(" and port"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n  -a "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("password"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("      Password to use when connecting to the server.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("可以看到帮助命令需要使用 -a 来指定密码")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-cache01 init.d"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-cli -a redis-pass")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get k1\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nil"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意，在关闭 redis 的时候同样也需要使用密码")]),s._v("\n\nredis-cli -a redis-pass "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h3",{attrs:{id:"在-master-上写数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-master-上写数据"}},[s._v("#")]),s._v(" 在 master 上写数据")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@eshop-cache01 init.d]# redis-cli -a redis-pass\n127.0.0.1:6379> set k1 123456\nOK\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"在-slave-上获取数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-slave-上获取数据"}},[s._v("#")]),s._v(" 在 slave 上获取数据")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@eshop-cache02 init.d]# redis-cli\n127.0.0.1:6379> get k1\n(nil)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("发现没有获取到数据，这是怎么回事呢？那么一般说明我们的 slave 可能配置有问题。")]),s._v(" "),e("p",[s._v("这个时候要是能看到日志就好了，在 "),e("code",[s._v("eshop-cache02/etc/redis/6379.conf")]),s._v("中，\n配置上 "),e("code",[s._v("logfile /etc/redis/log.log")]),s._v(" 重启后可以看到日志中出现不能连接到 master")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@eshop-cache02 redis]# ll\ntotal 52\n-rw-r--r-- 1 root root 46774 Mar 23  2019 6379.conf\n-rw-r--r-- 1 root root  2719 Mar 19 05:14 log.log\n[root@eshop-cache02 redis]# tail -f log.log\n24489:S 19 Mar 05:14:28.768 # Error condition on socket for SYNC: Connection refused\n24489:S 19 Mar 05:14:29.789 * Connecting to MASTER eshop-cache01:6379\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("原因是：/etc/redis/6379.conf 中的 bind 属性配置没有放开")]),s._v(" "),e("p",[s._v("默认是绑定的 127.0.0.1，只能本机访问 redis。改成本机的内外 ip 地址就可以对外提供服务了，这里由于之前配置了 hosts 映射，使用 hostname")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# bind 127.0.0.1   \nbind 127.0.0.1 eshop-cache01\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("bind 可以写多条，如果没有 127 的ip，使用 redis-cli 会默认连接 127 的 ip，这样你自己也不能使用这个本机简便的登录方式了")]),s._v(" "),e("p",[s._v("如果已经使用 redis-cli 连接不上怎么办？需要自己带上 ip 地址访问，如下：\nredis-cli -h eshop-cache02 shutdown")])]),s._v(" "),e("p",[s._v("记得是每个 redis 节点上都要修改成绑定自己机器的 hontname")]),s._v(" "),e("p",[s._v("对外开放访问后（bind 127.0.0.1 eshop-cache01） 终于连接上了")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('[root@eshop-cache02 init.d]# ./redis_6379 start\nStarting Redis server...\n[root@eshop-cache02 init.d]# redis-cli\n127.0.0.1:6379> get k1   # 能获取到 master 上的数据\n"123456"\n127.0.0.1:6379> info replication   # 查看信息\n# Replication\nrole:slave\nmaster_host:eshop-cache01     # 可以看到 master 的信息\nmaster_port:6379\nmaster_link_status:up\nmaster_last_io_seconds_ago:1\nmaster_sync_in_progress:0\nslave_repl_offset:253\nslave_priority:100\nslave_read_only:1\nconnected_slaves:0\nmaster_repl_offset:0\nrepl_backlog_active:0\nrepl_backlog_size:1048576\nrepl_backlog_first_byte_offset:0\nrepl_backlog_histlen:0\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);
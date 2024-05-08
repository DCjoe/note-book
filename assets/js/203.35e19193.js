(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{1773:function(s,a,n){"use strict";n.r(a);var r=n(13),t=Object(r.a)({},(function(){var s=this,a=s.$createElement,r=s._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"_066-纯手工集群部署"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_066-纯手工集群部署"}},[s._v("#")]),s._v(" 066. 纯手工集群部署")]),s._v(" "),r("h2",{attrs:{id:"确认是否安装了依赖"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#确认是否安装了依赖"}},[s._v("#")]),s._v(" 确认是否安装了依赖")]),s._v(" "),r("ul",[r("li",[s._v("java 1.7 +")]),s._v(" "),r("li",[s._v("pythong 2.6.6 该软件之前被安装过")])]),s._v(" "),r("h2",{attrs:{id:"storm-安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#storm-安装"}},[s._v("#")]),s._v(" storm 安装")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("cd /usr/local\ntar -zxvf apache-storm-1.1.0.tar.gz\nmv apache-storm-1.1.0 storm\n\n# 配置环境变量，添加 /usr/local/bin\nvi ~/.bashrc\nsource ~/.bashrc\n\n# 查看 storm 版本\nstorm version\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br")])]),r("h2",{attrs:{id:"修改-storm-配置文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#修改-storm-配置文件"}},[s._v("#")]),s._v(" 修改 storm 配置文件")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v('mkdir /var/storm\nvi /usr/local/storm/conf/storm.yaml\n# 需要修改的配置内容如下：\n# -------------------------\nstorm.zookeeper.servers:\n     - "192.168.99.170"\n     - "192.168.99.171"\n     - "192.168.99.172"\n# storm.zookeeper.port: 2181\nnimbus.seeds: ["192.168.99.170"]\n\nstorm.local.dir: "/var/storm"\n\n# 指定每个机器上可以启动多少个 worker，一个端口号代表一个\nsupervisor.slots.ports:\n    - 6700\n    - 6701\n    - 6702\n    - 6703\n\n# -------------------------\n')])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br"),r("span",{staticClass:"line-number"},[s._v("11")]),r("br"),r("span",{staticClass:"line-number"},[s._v("12")]),r("br"),r("span",{staticClass:"line-number"},[s._v("13")]),r("br"),r("span",{staticClass:"line-number"},[s._v("14")]),r("br"),r("span",{staticClass:"line-number"},[s._v("15")]),r("br"),r("span",{staticClass:"line-number"},[s._v("16")]),r("br"),r("span",{staticClass:"line-number"},[s._v("17")]),r("br"),r("span",{staticClass:"line-number"},[s._v("18")]),r("br"),r("span",{staticClass:"line-number"},[s._v("19")]),r("br"),r("span",{staticClass:"line-number"},[s._v("20")]),r("br"),r("span",{staticClass:"line-number"},[s._v("21")]),r("br")])]),r("p",[s._v("一台装好了，再装另外的几台，通过 scp 命令 copy")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("scp ~/.bashrc root@eshop-cache02:~/\nscp -r /usr/local/storm/ root@eshop-cache02:/usr/local/\n\n并创建 mkdir /var/storm 和刷新环境变量文件 source ~/.bashrc\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br")])]),r("p",[s._v("一共创建三个节点：在 eshop-cache01、eshop-cache02、eshop-cache03")]),s._v(" "),r("h2",{attrs:{id:"启动-storm-集群和-ui-界面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#启动-storm-集群和-ui-界面"}},[s._v("#")]),s._v(" 启动 storm 集群和 ui 界面")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("# 一个节点 在 01 上\nstorm nimbus >/dev/null 2>&1 &\n# 三个节点\nstorm supervisor >/dev/null 2>&1 &\n# 也是需要三个节点，否则在 ui 中访问 8000 端口的日志浏览会404\nstorm logviewer > /dev/null 2>&1 &\n# 一个节点 在 01 上\nstorm ui >/dev/null 2>&1 &\n\n# 可以通过 jps 命令查看是否已经启动\n[root@eshop-cache01 conf]# jps\n10116 Jps\n1576 Kafka\n1447 QuorumPeerMain\n9944 nimbus   这里已经被启动了\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br"),r("span",{staticClass:"line-number"},[s._v("11")]),r("br"),r("span",{staticClass:"line-number"},[s._v("12")]),r("br"),r("span",{staticClass:"line-number"},[s._v("13")]),r("br"),r("span",{staticClass:"line-number"},[s._v("14")]),r("br"),r("span",{staticClass:"line-number"},[s._v("15")]),r("br")])]),r("p",[s._v("ui 访问地址："),r("code",[s._v("http://eshop-cache01:8080/index.html")])]),s._v(" "),r("p",[r("img",{attrs:{src:n(548),alt:""}})])])}),[],!1,null,null,null);a.default=t.exports},548:function(s,a,n){s.exports=n.p+"assets/img/markdown-img-paste-20190519171446988.9635fbb1.png"}}]);
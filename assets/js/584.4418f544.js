(window.webpackJsonp=window.webpackJsonp||[]).push([[584],{2104:function(s,a,n){"use strict";n.r(a);var t=n(13),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"linux-常用知识"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux-常用知识"}},[s._v("#")]),s._v(" linux 常用知识")]),s._v(" "),n("p",[s._v("新机器使用如下命令升级软件或者依赖包")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("yum -y update\n# 或\nyum -y upgrade\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"环境变量配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境变量配置"}},[s._v("#")]),s._v(" 环境变量配置")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 系统环境变量文件：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/profile\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 刷新配置文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 专门的环境变量")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" ~/.bashrc\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bashrc\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"nodejs-安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-安装"}},[s._v("#")]),s._v(" nodejs 安装")]),s._v(" "),n("h3",{attrs:{id:"yum-安装-强烈建议"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yum-安装-强烈建议"}},[s._v("#")]),s._v(" yum 安装(强烈建议)")]),s._v(" "),n("p",[s._v("此方式添加有好处，因为在后面的 yarn 安装中，yarn 依赖 nodejs，使用 yum -y yarn 的时候，\n依赖下载的是旧版本的 nodejs（6.x）")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 添加 yum 源的脚本，8.x 可以修改成你需要的版本\ncurl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -\n\nyum -y nodejs\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"已编译安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#已编译安装"}},[s._v("#")]),s._v(" 已编译安装")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://nodejs.org/dist/v10.15.3/node-v10.15.3-linux-x64.tar.xz\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xvf node-v10.15.3-linux-x64.tar.xz\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("配置环境变量，增加到  /etc/profile 中")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export NODE_HOME=/usr/local/node-v10.15.3-linux-x64\nexport PATH=$NODE_HOME/bin:$PATH\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"源码编译安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#源码编译安装"}},[s._v("#")]),s._v(" 源码编译安装")]),s._v(" "),n("p",[s._v("以下方式，我自己编译回报错，安装不成功")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 手动安装的都在该目录下安装")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个是已经编译好的，配置环境变量就可以 wget https://nodejs.org/dist/v10.15.3/node-v10.15.3-linux-x64.tar.xz")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载指定版本的源码压缩包")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://nodejs.org/dist/v10.15.3/node-v10.15.3.tar.gz\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xvf node-v10.15.3.tar.gz\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc gcc-c++\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译与安装")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" node-v10.15.3\n./configure "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证是否成功")]),s._v("\nnode -v\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h2",{attrs:{id:"yarn-安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yarn-安装"}},[s._v("#")]),s._v(" yarn 安装")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://yarn.bootcss.com/docs/install/#centos-stable",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网安装方式"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("官网安装很简单，这里简单记录下")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" --silent --location https://dl.yarnpkg.com/rpm/yarn.repo "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/yum.repos.d/yarn.repo\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[547],{2021:function(s,t,a){"use strict";a.r(t);var n=a(13),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[s._v("#")]),s._v(" 环境变量")]),s._v(" "),a("p",[s._v("Git 总是在一个 "),a("code",[s._v("bash shell")]),s._v(" 中运行，并借助一些 shell 环境变量来决定它的运行方式。 有时候，知道它们是什么以及它们如何让 Git 按照你想要的方式去运行会很有用。 这里不会列出所有的 Git 环境变量，但我们会涉及最有的那部分。")]),s._v(" "),a("h2",{attrs:{id:"全局行为"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局行为"}},[s._v("#")]),s._v(" 全局行为")]),s._v(" "),a("p",[s._v("像通常的程序一样，Git 的常规行为依赖于环境变量。")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("GIT_EXEC_PATH")])]),s._v(" "),a("p",[s._v("决定 Git 到哪找它的子程序 （像 git-commit, git-diff 等等）。 你可以用 "),a("code",[s._v("git --exec-path")]),s._v(" 来查看当前设置.")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("HOME")])]),s._v(" "),a("p",[s._v("通常不会考虑修改 "),a("strong",[s._v("HOME")]),s._v(" 这个变量（太多其它东西都依赖它），这是 Git 查找全局配置文件的地方。 如果你想要一个包括全局配置的真正的便携版 Git， 你可以在便携版 Git 的 shell 配置中覆盖 HOME 设置。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("PREFIX")])]),s._v(" "),a("p",[s._v("也类似，除了用于系统级别的配置。 Git 在 "),a("code",[s._v("$PREFIX/etc/gitconfig")]),s._v("  查找此文件.")]),s._v(" "),a("p",[s._v("如果设置了 "),a("strong",[s._v("GIT_CONFIG_NOSYSTEM")]),s._v("，就禁用系统级别的配置文件。 这在系统配置影响了你的命令，而你又无权限修改的时候很有用。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("GIT_PAGER")])]),s._v(" "),a("p",[s._v("控制在命令行上显示多页输出的程序。 如果这个没有设置，就会用 PAGER .")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("GIT_EDITOR")])]),s._v(" "),a("p",[s._v("当用户需要编辑一些文本（比如提交信息）时， Git 会启动这个编辑器。 如果没设置，就会用 EDITOR 。")])])]),s._v(" "),a("h2",{attrs:{id:"版本库位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本库位置"}},[s._v("#")]),s._v(" 版本库位置")]),s._v(" "),a("p",[s._v("Git 用了几个变量来确定它如何与当前版本库交互。")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("GIT_DIR")])]),s._v(" "),a("p",[s._v("是 "),a("code",[s._v(".git")]),s._v(" 目录的位置. 如果这个没有设置， Git 会按照目录树逐层向上查找  "),a("code",[s._v(".git")]),s._v("  目录，直到到达 "),a("code",[s._v("~")]),s._v(" 或 "),a("code",[s._v("/")]),s._v(" 。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("GIT_CEILING_DIRECTORIES")])]),s._v(" "),a("p",[s._v("控制查找 "),a("code",[s._v(".git")]),s._v(" 目录的行为。 如果你访问加载很慢的目录（如那些磁带机上的或通过网络连接访问的），你可能会想让 Git 早点停止尝试，尤其是 shell 构建时调用了 Git 。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("GIT_WORK_TREE")])]),s._v(" "),a("p",[s._v("是非空版本库的工作目录的根路径 如果没指定，就使用 "),a("code",[s._v("$GIT_DIR")]),s._v(" 的父目录。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("GIT_INDEX_FILE")])]),s._v(" "),a("p",[s._v("是索引文件的路径（只有非空版本库有）")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("GIT_OBJECT_DIRECTORY")]),s._v(" .")]),s._v(" "),a("p",[s._v("用来指定 "),a("code",[s._v(".git/objects")]),s._v("  目录的位置。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("GIT_ALTERNATE_OBJECT_DIRECTORIES")])]),s._v(" "),a("p",[s._v("一个冒号分割的列表 (格式类似 "),a("code",[s._v("/dir/one:/dir/two:…")]),s._v(" ) 用来告诉 Git 到哪里去找不在 GIT_OBJECT_DIRECTORY 目录中的对象. 如果你有很多项目有相同内容的大文件，这个可以用来避免存储过多备份。")])])]),s._v(" "),a("h2",{attrs:{id:"路径规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路径规则"}},[s._v("#")]),s._v(" 路径规则")]),s._v(" "),a("p",[s._v("所谓 "),a("code",[s._v("pathspec")]),s._v("  是指你在 Git 中如何指定路径， 包括通配符的使用。 它们会在 "),a("code",[s._v(".gitignore")]),s._v(" 文件中用到，命令行里也会用到 （ "),a("code",[s._v("git add *.c")]),s._v(" ）。")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("GIT_GLOB_PATHSPECS and GIT_NOGLOB_PATHSPECS")])]),s._v(" "),a("p",[s._v("控制通配符在路径规则中的默认行为。 如果 GIT_GLOB_PATHSPECS 设置为 1, 通配符表现为通配符（这是默认设置）; 如果 GIT_NOGLOB_PATHSPECS 设置为 1，通配符仅匹配字面。意思是 "),a("code",[s._v("*.c")]),s._v("  只会匹配 "),a("em",[s._v("文件名是")]),s._v(" "),a("code",[s._v("*.c")]),s._v(" 的文件， 而不是以  "),a("code",[s._v(".c")]),s._v("  结尾的文件。 你可以在各个路径规格中用  "),a("code",[s._v(":(glob)")]),s._v("  或  "),a("code",[s._v(":(literal)")]),s._v("  开头来覆盖这个配置，如  "),a("code",[s._v(":(glob)*.c")]),s._v(" 。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("GIT_LITERAL_PATHSPECS")])]),s._v(" "),a("p",[s._v("禁用上面的两种行为；通配符将不能用，前缀覆盖也不能用。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("GIT_ICASE_PATHSPECS")])]),s._v(" "),a("p",[s._v("让所有的路径规格忽略大小写。")])])]),s._v(" "),a("h2",{attrs:{id:"提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交"}},[s._v("#")]),s._v(" 提交")]),s._v(" "),a("p",[s._v("Git 提交对象的创建通常最后是由 "),a("code",[s._v("git-commit-tree")]),s._v("  来完成， "),a("code",[s._v("git-commit-tree")]),s._v("  用这些环境变量作主要的信息源。 仅当这些值不存在才回退到预置的值。")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("GIT_AUTHOR_NAME")]),s._v(" 是 "),a("code",[s._v("author")]),s._v(" 字段的可读的名字。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("GIT_AUTHOR_EMAIL")]),s._v(" 是 "),a("code",[s._v("author")]),s._v(" 字段的邮件。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("GIT_AUTHOR_DATE")]),s._v(" 是"),a("code",[s._v("author")]),s._v(" 字段的时间戳。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("GIT_COMMITTER_NAME")]),s._v(" 是 "),a("code",[s._v("committer")]),s._v(" 字段的可读的名字。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("GIT_COMMITTER_EMAIL")]),s._v(" 是 "),a("code",[s._v("committer")]),s._v(" 字段的邮件。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("GIT_COMMITTER_DATE")]),s._v(" 是 "),a("code",[s._v("committer")]),s._v(" 字段的时间戳。")])])]),s._v(" "),a("p",[s._v("如果 user.email 没有配置， 就会用到 "),a("strong",[s._v("EMAIL")]),s._v(" 指定的邮件地址。 如果 "),a("em",[s._v("这个")]),s._v(" 也没有设置， Git 继续回退使用系统用户和主机名。")]),s._v(" "),a("h2",{attrs:{id:"网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络"}},[s._v("#")]),s._v(" 网络")]),s._v(" "),a("p",[s._v("Git 使用 curl 库通过 HTTP来完成网络操作， 所以 "),a("strong",[s._v("GIT_CURL_VERBOSE")]),s._v(" 告诉 Git 显示所有由那个库产生的消息。 这跟在命令行执行 "),a("code",[s._v("curl -v")]),s._v("  差不多。")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("GIT_SSL_NO_VERIFY")])]),s._v(" "),a("p",[s._v("告诉 Git 不用验证 SSL 证书。 这在有些时候是需要的， 例如你用一个自己签名的证书通过 HTTPS 来提供 Git 服务， 或者你正在搭建 Git 服务器，还没有安装完全的证书。")])]),s._v(" "),a("li",[a("p",[s._v("如果 Git 操作在网速低于 "),a("strong",[s._v("GIT_HTTP_LOW_SPEED_LIMIT")]),s._v(" 字节／秒，并且持续 "),a("strong",[s._v("GIT_HTTP_LOW_SPEED_TIME")]),s._v(" 秒以上的时间，Git 会终止那个操作。 这些值会覆盖 "),a("code",[s._v("http.lowSpeedLimit")]),s._v("  和 "),a("code",[s._v("http.lowSpeedTime")]),s._v("  配置的值。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("GIT_HTTP_USER_AGENT")])]),s._v(" "),a("p",[s._v("设置 Git 在通过 HTTP 通讯时用到的 user-agent。 默认值类似于 "),a("code",[s._v("git/2.0.0")]),s._v(" 。")])])]),s._v(" "),a("h2",{attrs:{id:"比较和合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比较和合并"}},[s._v("#")]),s._v(" 比较和合并")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("GIT_DIFF_OPTS")])]),s._v(" "),a("p",[s._v("这个有点起错名字了 有效值仅支持 "),a("code",[s._v("-u<n>")]),s._v("  或  "),a("code",[s._v("–unified=<n>")]),s._v(" ，用来控制在 "),a("code",[s._v("git diff")]),s._v(" 命令中显示的内容行数。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("GIT_EXTERNAL_DIFF")])]),s._v(" "),a("p",[s._v("用来覆盖 "),a("code",[s._v("diff.external")]),s._v(" 配置的值。 如果设置了这个值， 当执行 Git "),a("code",[s._v("git diff")]),s._v(" 时，Git 会调用该程序。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("GIT_DIFF_PATH_COUNTER")]),s._v(" 和 "),a("strong",[s._v("GIT_DIFF_PATH_TOTAL")])]),s._v(" "),a("p",[s._v("对于 GIT_EXTERNAL_DIFF 或 "),a("code",[s._v("diff.external")]),s._v(" 指定的程序有用。 前者表示在一系列文件中哪个是被比较的（从 1 开始），后者表示每批文件的总数。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("GIT_MERGE_VERBOSITY")]),s._v(" 控制递归合并策略的输出。 允许的值有下面这些：")]),s._v(" "),a("ul",[a("li",[s._v("0 什么都不输出，除了可能会有一个错误信息。")]),s._v(" "),a("li",[s._v("1 只显示冲突。")]),s._v(" "),a("li",[s._v("2 还显示文件改变。")]),s._v(" "),a("li",[s._v("3 显示因为没有改变被跳过的文件。")]),s._v(" "),a("li",[s._v("4 显示处理的所有路径。")]),s._v(" "),a("li",[s._v("5 显示详细的调试信息。")])]),s._v(" "),a("p",[s._v("默认值是 2.")])])]),s._v(" "),a("h2",{attrs:{id:"调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调试"}},[s._v("#")]),s._v(" 调试")]),s._v(" "),a("p",[s._v("想 "),a("em",[s._v("真正地")]),s._v(" 知道 Git 正在做什么? Git 内置了相当完整的跟踪信息，你需要做的就是把它们打开。 这些变量的可以用的值如下：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("true")]),s._v("、 "),a("code",[s._v("1")]),s._v("  或  "),a("code",[s._v("2")]),s._v("  – 跟踪类别写到标准错误输出.")]),s._v(" "),a("li",[s._v("以  "),a("code",[s._v("/")]),s._v("  开头的绝对路径 – 跟踪输出会被写到那个文件。")])]),s._v(" "),a("p",[a("strong",[s._v("GIT_TRACE")]),s._v("  控制常规跟踪，它并不适用于特殊情况。 它跟踪的范围包括别名的展开和其他子程序的委托。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GIT_TRACE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" lga\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":12:49.877982 git.c:554               trace: exec: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git-lga'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":12:49.878369 run-command.c:341       trace: run_command: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git-lga'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":12:49.879529 git.c:282               trace: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" expansion: lga "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'log'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--graph'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--pretty=oneline'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--abbrev-commit'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--decorate'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--all'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":12:49.879885 git.c:349               trace: built-in: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'log'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--graph'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--pretty=oneline'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--abbrev-commit'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--decorate'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--all'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":12:49.899217 run-command.c:341       trace: run_command: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'less'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":12:49.899675 run-command.c:192       trace: exec: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'less'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[a("strong",[s._v("GIT_TRACE_PACK_ACCESS")]),s._v(" 控制访问打包文件的跟踪信息 第一个字段是被访问的打包文件，第二个是文件的偏移量：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GIT_TRACE_PACK_ACCESS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":10:12.081397 sha1_file.c:2088        .git/objects/pack/pack-c3fa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".291e.pack "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":10:12.081886 sha1_file.c:2088        .git/objects/pack/pack-c3fa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".291e.pack "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("34662")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":10:12.082115 sha1_file.c:2088        .git/objects/pack/pack-c3fa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".291e.pack "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("35175")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# […]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":10:12.087398 sha1_file.c:2088        .git/objects/pack/pack-e80e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".e3d2.pack "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56914983")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":10:12.087419 sha1_file.c:2088        .git/objects/pack/pack-e80e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".e3d2.pack "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14303666")]),s._v("\nOn branch master\nYour branch is up-to-date with "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'origin/master'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nnothing to commit, working directory clean\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[a("strong",[s._v("GIT_TRACE_PACKET")]),s._v(" 打开网络操作包级别的跟踪信息")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GIT_TRACE_PACKET")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" ls-remote origin\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":15:14.867043 pkt-line.c:46           packet:          git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# service=git-upload-pack")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":15:14.867071 pkt-line.c:46           packet:          git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" 0000\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":15:14.867079 pkt-line.c:46           packet:          git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" 97b8860c071898d9e162678ea1035a8ced2f8b1f HEAD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("0multi_ack thin-pack side-band side-band-64k ofs-delta shallow no-progress include-tag multi_ack_detailed no-done "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("symref")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("HEAD:refs/heads/master "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("agent")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("git/2.0.4\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":15:14.867088 pkt-line.c:46           packet:          git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" 0f20ae29889d61f2e93ae00fd34f1cdb53285702 refs/heads/ab/add-interactive-show-diff-func-name\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":15:14.867094 pkt-line.c:46           packet:          git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" 36dc827bc9d17f80ed4f326de21247a5d1341fbc refs/heads/ah/doc-gitk-config\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# […]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[a("strong",[s._v("GIT_TRACE_PERFORMANCE")]),s._v(" 控制性能数据的日志打印。 输出显示了每个 Git 命令调用花费的时间。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GIT_TRACE_PERFORMANCE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" gc\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":18:19.499676 trace.c:414             performance: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.374835000")]),s._v(" s: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" command: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pack-refs'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--all'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--prune'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":18:19.845585 trace.c:414             performance: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.343020000")]),s._v(" s: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" command: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'reflog'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'expire'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--all'")]),s._v("\nCounting objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("170994")]),s._v(", done.\nDelta compression using up to "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" threads.\nCompressing objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("43413")]),s._v("/43413"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\nWriting objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("170994")]),s._v("/170994"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\nTotal "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("170994")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("126176")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", reused "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("170524")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("125706")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":18:23.567927 trace.c:414             performance: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.715349000")]),s._v(" s: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" command: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pack-objects'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--keep-true-parents'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--honor-pack-keep'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--non-empty'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--all'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--reflog'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--unpack-unreachable=2.weeks.ago'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--local'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--delta-base-offset'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.git/objects/pack/.tmp-49190-pack'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":18:23.584728 trace.c:414             performance: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000910000")]),s._v(" s: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" command: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'prune-packed'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":18:23.605218 trace.c:414             performance: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.017972000")]),s._v(" s: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" command: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'update-server-info'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":18:23.606342 trace.c:414             performance: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.756312000")]),s._v(" s: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" command: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'repack'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-d'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-l'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-A'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--unpack-unreachable=2.weeks.ago'")]),s._v("\nChecking connectivity: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("170994")]),s._v(", done.\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":18:25.225424 trace.c:414             performance: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.616423000")]),s._v(" s: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" command: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'prune'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--expire'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2.weeks.ago'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":18:25.232403 trace.c:414             performance: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.001051000")]),s._v(" s: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" command: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rerere'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gc'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":18:25.233159 trace.c:414             performance: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.112217000")]),s._v(" s: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" command: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gc'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[a("strong",[s._v("GIT_TRACE_SETUP")]),s._v(" 显示 Git 发现的关于版本库和交互环境的信息")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GIT_TRACE_SETUP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":19:47.086765 trace.c:315             setup: git_dir: .git\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":19:47.087184 trace.c:316             setup: worktree: /Users/ben/src/git\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":19:47.087191 trace.c:317             setup: cwd: /Users/ben/src/git\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":19:47.087194 trace.c:318             setup: prefix: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("null"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nOn branch master\nYour branch is up-to-date with "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'origin/master'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nnothing to commit, working directory clean\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"其它"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[s._v("#")]),s._v(" 其它")]),s._v(" "),a("p",[s._v("如果指定了 "),a("strong",[s._v("GIT_SSH")]),s._v("， Git 连接 SSH 主机时会用指定的程序代替 ssh 。 它会被用 "),a("code",[s._v("$GIT_SSH [username@]host [-p <port>] <command>")]),s._v("  的命令方式调用。 这不是配置定制 ssh 调用方式的最简单的方法; 它不支持额外的命令行参数， 所以你必须写一个封装脚本然后让 GIT_SSH 指向它。 可能用 "),a("code",[s._v("~/.ssh/config")]),s._v(" 会更简单。")]),s._v(" "),a("p",[a("strong",[s._v("GIT_ASKPASS")]),s._v(" 覆盖了 core.askpass 配置。 这是 Git 需要向用户请求验证时用到的程序，它接受一个文本提示作为命令行参数，并在 stdout 中返回应答。 (查看 "),a("RouterLink",{attrs:{to:"/git-scm/07/14.html"}},[s._v("凭证存储")]),s._v("_ 访问更多相关内容)")],1),s._v(" "),a("p",[a("strong",[s._v("GIT_NAMESPACE")]),s._v(" 控制有命令空间的引用的访问，与 "),a("code",[s._v("–namespace")]),s._v("  标志是相同的. 这主要在服务器端有用， 如果你想在一个版本库中存储单个版本库的多个 fork, 只要保持引用是隔离的就可以。")]),s._v(" "),a("p",[a("strong",[s._v("GIT_FLUSH")]),s._v(" 强制 Git 在向标准输出增量写入时使用没有缓存的 I/O。 设置为 1 让 Git 刷新更多， 设置为 0 则使所有的输出被缓存。 默认值（若此变量未设置）是根据活动和输出模式的不同选择合适的缓存方案。")]),s._v(" "),a("p",[a("strong",[s._v("GIT_REFLOG_ACTION")]),s._v(" 让你可以指定描述性的文字写到 reflog 中。 这有个例子：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ GIT_REFLOG_ACTION=\"my action\" git commit --allow-empty -m 'my message'\n[master 9e3d55a] my message\n$ git reflog -1\n9e3d55a HEAD@{0}: my action: my message\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);
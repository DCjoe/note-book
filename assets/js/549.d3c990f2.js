(window.webpackJsonp=window.webpackJsonp||[]).push([[549],{2023:function(t,i,s){"use strict";s.r(i);var r=s(13),v=Object(r.a)({},(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git-内部原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-内部原理"}},[t._v("#")]),t._v(" Git 内部原理")]),t._v(" "),s("p",[t._v("无论是从之前的章节直接跳到本章，还是读完了其余章节一直到这—— "),s("strong",[t._v("你都将在本章见识到 Git 的内部工作原理和实现方式")]),t._v("。 我们发现学习这部分内容 "),s("strong",[t._v("对于理解 Git 的用途和强大至关重要")]),t._v("。不过也有人认为这些内容对于初学者而言可能难以理解且过于复杂。 因此我们把这部分内容放在最后一章，在学习过程中可以先阅读这部分，也可以晚点阅读这部分，这取决于你自己。")]),t._v(" "),s("p",[t._v("无论如何，既然已经读到了这里，就让我们开始吧。 首先要弄明白一点，从 "),s("strong",[t._v("根本上来讲 Git 是一个内容寻址（content-addressable）文件系统")]),t._v("，"),s("strong",[t._v("并在此之上提供了一个版本控制系统的用户界面")]),t._v("。 马上你就会学到这意味着什么。")]),t._v(" "),s("p",[t._v("早期的 Git（主要是 1.5 之前的版本）的用户界面要比现在复杂的多，因为它更侧重于作为一个文件系统，而不是一个打磨过的版本控制系统。 不时会有一些陈词滥调抱怨早期那个晦涩复杂的 Git 用户界面；不过最近几年来，它已经被改进到不输于任何其他版本控制系统地清晰易用了。")]),t._v(" "),s("p",[t._v("内容寻址文件系统层是一套相当酷的东西，所以在本章我们会先讲解这部分内容。随后我们会学习传输机制和版本库管理任务——你迟早会和它们打交道。")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/git-scm/10/01.html"}},[t._v("底层命令和高层命令")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/git-scm/10/02.html"}},[t._v("Git 对象")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/git-scm/10/03.html"}},[t._v("Git 引用")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/git-scm/10/04.html"}},[t._v("包文件")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/git-scm/10/05.html"}},[t._v("引用规格")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/git-scm/10/06.html"}},[t._v("传输协议")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/git-scm/10/07.html"}},[t._v("维护与数据恢复")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/git-scm/10/08.html"}},[t._v("环境变量")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/git-scm/10/09.html"}},[t._v("总结")])],1)])])}),[],!1,null,null,null);i.default=v.exports}}]);
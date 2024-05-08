(window.webpackJsonp=window.webpackJsonp||[]).push([[464],{1909:function(e,r,t){"use strict";t.r(r);var o=t(13),l=Object(o.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"tf-idf-算法以及向量空间模型算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tf-idf-算法以及向量空间模型算法"}},[e._v("#")]),e._v(" TF&IDF 算法以及向量空间模型算法")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#boolean-model"}},[e._v("boolean model")])]),t("li",[t("a",{attrs:{href:"#tf-idf"}},[e._v("TF/IDF")])]),t("li",[t("a",{attrs:{href:"#vector-space-model"}},[e._v("vector space model")])]),t("li",[t("a",{attrs:{href:"#query-vector"}},[e._v("query vector")])]),t("li",[t("a",{attrs:{href:"#doc-vector"}},[e._v("doc vector")])])])]),t("p"),e._v(" "),t("p",[e._v("es 里的得分算法主要是 3 部分")]),e._v(" "),t("ul",[t("li",[e._v("boolean model")]),e._v(" "),t("li",[e._v("TF/IDF")]),e._v(" "),t("li",[e._v("vector space model 向量空间模型算法")])]),e._v(" "),t("p",[e._v("前面两个只是简单的过一下，主要是向量空间模型算法")]),e._v(" "),t("h2",{attrs:{id:"boolean-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#boolean-model"}},[e._v("#")]),e._v(" boolean model")]),e._v(" "),t("p",[e._v("类似 and 这种逻辑操作符，先过滤出包含指定 term 的 doc")]),e._v(" "),t("blockquote",[t("p",[e._v("举个例子")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('query "hello world" --\x3e 过滤出包含 --\x3e hello / world / hello & world 的 doc\nbool --\x3e must/must not/should --\x3e 过滤 --\x3e 包含 / 不包含 / 可能包含\ndoc --\x3e 经过条件过滤之后，这些步骤是不打分数 --\x3e 正或反 true or false --\x3e 为了减少后续要计算的 doc 的数量，提升性能\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("h2",{attrs:{id:"tf-idf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tf-idf"}},[e._v("#")]),e._v(" TF/IDF")]),e._v(" "),t("p",[e._v("详细请参考 "),t("RouterLink",{attrs:{to:"/elasticsearch-core/search-engine/55-tf-idf.html"}},[e._v("相关度评分 TF&IDF 算法独家解密")])],1),e._v(" "),t("p",[e._v("简单或就是计算单个 term 在 doc 中的分数")]),e._v(" "),t("p",[e._v("比如要查询 content 中查询「hello world」")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("doc1: java is my favourite programming language, hello world !!!\ndoc2: hello java, you are very good, oh hello world!!!\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("hello 对 doc1 的评分")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("TF: term frequency")]),e._v(" "),t("p",[e._v("找到 hello 在 doc1 中出现了几次，1次，会根据出现的次数给个分数\n一个 term 在一个 doc 中，出现的次数越多，那么最后给的相关度评分就会越高")])]),e._v(" "),t("li",[t("p",[e._v("IDF：inversed document frequency")]),e._v(" "),t("p",[e._v("找到 hello 在所有的 doc 中出现的次数，3 次\n一个 term 在所有的 doc 中，出现的次数越多，那么最后给的相关度评分就会越低")])]),e._v(" "),t("li",[t("p",[e._v("length norm")]),e._v(" "),t("p",[e._v("hello 搜索的那个 field 的长度，field 长度越长，给的相关度评分越低;\nfield 长度越短，给的相关度评分越高")])])]),e._v(" "),t("p",[e._v("最后，会将 hello 这个 term，对 doc1 的分数，综合 TF，IDF，length norm，计算出来一个综合性的分数")]),e._v(" "),t("p",[e._v("hello world --\x3e doc1 --\x3e hello 对 doc1的分数，world 对 doc1 的分数 --\x3e 但是最后 hello world query 要对 doc1 有一个总的分数 --\x3e vector space model")]),e._v(" "),t("h2",{attrs:{id:"vector-space-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vector-space-model"}},[e._v("#")]),e._v(" vector space model")]),e._v(" "),t("p",[e._v("这个是一个数学上的概念，很复杂。这里举例让你明白大概是个什么东西、")]),e._v(" "),t("p",[e._v("计算多个 term 对一个 doc 的总分数")]),e._v(" "),t("h2",{attrs:{id:"query-vector"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-vector"}},[e._v("#")]),e._v(" query vector")]),e._v(" "),t("p",[e._v("hello world --\x3e es 会根据 hello world 在所有 doc 中的评分情况，计算出一个 query vector，query 向量")]),e._v(" "),t("ul",[t("li",[e._v("hello 这个 term，给的基于所有 doc 的一个评分就是 2")]),e._v(" "),t("li",[e._v("world 这个 term，给的基于所有 doc 的一个评分就是 5")])]),e._v(" "),t("p",[e._v("query vertor 就是 [2, 5]")]),e._v(" "),t("h2",{attrs:{id:"doc-vector"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#doc-vector"}},[e._v("#")]),e._v(" doc vector")]),e._v(" "),t("p",[e._v("3 个 doc,会给每一个 doc，拿每个 term 计算出一个分数来，hello 有一个分数，world 有一个分数，再拿所有 term 的分数组成一个 doc vector")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("doc1：包含 hello --\x3e [2, 0]\ndoc2：包含 world --\x3e [0, 5]\ndoc3：包含 hello, world --\x3e [2, 5]\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("画在一个图中（图也很简单，不截图了），取每个 doc vector 对 query vector 的弧度，给出每个 doc 对多个 term 的总分数")]),e._v(" "),t("p",[e._v("每个 doc vector 计算出对 query vector 的弧度，最后基于这个弧度给出一个 doc 相对于 query 中多个 term 的总分数\n弧度越大，分数月底; 弧度越小，分数越高")]),e._v(" "),t("p",[e._v("如果是多个 term，那么就是线性代数来计算，无法用图表示")]),e._v(" "),t("p",[e._v("这个反正也没有看懂。知道是这么个名词就行了")])])}),[],!1,null,null,null);r.default=l.exports}}]);
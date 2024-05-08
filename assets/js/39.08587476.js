(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1246:function(v,_,t){v.exports=t.p+"assets/img/1cd2e944f38d6a7f1d0386bdd9b92669.1cd2e944.png"},1247:function(v,_,t){v.exports=t.p+"assets/img/3f4fefec9e47bcef963a8a9883108820.3f4fefec.jpg"},1248:function(v,_,t){v.exports=t.p+"assets/img/94f9f732161731923c11da7af8d6bf5a.94f9f732.jpg"},1249:function(v,_,t){v.exports=t.p+"assets/img/8c71eb65099105743e22d107f71c544c.8c71eb65.jpeg"},1250:function(v,_,t){v.exports=t.p+"assets/img/d26bada830115ef399d234d332650d6f.d26bada8.png"},1251:function(v,_,t){v.exports=t.p+"assets/img/dcfed0b2ac6db88625536de50ab85ea2.dcfed0b2.png"},1252:function(v,_,t){v.exports=t.p+"assets/img/9d51971d51ea295b33584c0f72b21e95.9d51971d.jpg"},2059:function(v,_,t){"use strict";t.r(_);var a=t(13),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"中台落地第二步-企业数字化全景规划-define"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中台落地第二步-企业数字化全景规划-define"}},[v._v("#")]),v._v(" 中台落地第二步：企业数字化全景规划 Define")]),v._v(" "),a("p",[v._v("上一讲，我们通过 Discovery 从三个不同的角度和方向，对企业内外部环境进行充分的信息收集之后，得到了非常多的信息。那这一讲我们就来讲一讲，如何通过对这些信息的分析和收敛，运用企业架构方法，最终分析形成企业的数字化全景规划，并最终推导出我们 PD 的一个重要产出物，也就是一个中台落地建设的演进路线图。")]),v._v(" "),a("p",[v._v("那首先需要给你介绍一下什么是 "),a("strong",[v._v("企业级架构方法")]),v._v("。")]),v._v(" "),a("p",[v._v("企业架构方法如 Zachman、TOGAF 等，最长的已经有 20 多年的历史了，可以说已经非常成熟了。其中应用最广的应该就属 TOGAF 了，在市场上占据了至少半壁江山，也最为我们所了解。TOGAF 的基本思路，就是从企业最新的愿景战略以及运营模式出发，设计企业的 To-Be 业务架构，然后依次推导，一步一步推导数据架构、应用架构、技术架构，就是这样一个过程。")]),v._v(" "),a("p",[a("img",{attrs:{src:t(1246),alt:"img"}})]),v._v(" "),a("p",[v._v("我们现在在做以中台为潜在预设目标的企业数字化全景规划时，也参考了 TOGAF 的这个思路，基于 Discovery 发散收集来的各个维度的信息，在 Define 阶段结合自上而下企业战略分解的举措和自下而上现有业务架构梳理和分析的问题及痛点，重新设计新的业务架构，并进一步推导出其它的相关的架构设计。")]),v._v(" "),a("p",[v._v("只不过相对于传统的企业架构方法，整个过程做了剪裁和轻量化处理，引入了 "),a("strong",[v._v("事件风暴")]),v._v("、"),a("strong",[v._v("DDD 工作坊")]),v._v(" 等协作互动形式，整个过程各个关键角色充分讨论，协作共创，力争在过程的轻量前提下，还能保证结果的准确与一致。")]),v._v(" "),a("p",[v._v("但这里有一个关键点，因为前面提到过中台从架构层面就是 "),a("strong",[v._v("平台型的企业架构")]),v._v("，那对比过去我们常做的系统型企业架构，如何从企业整体的视角，更准确地识别出多业务线之间的共性业务元素，对我们来讲也是个不小的新挑战。")]),v._v(" "),a("p",[v._v("为了解决这个问题，前面讲方法论概述的时候其实已经提到过，我们是在整个企业架构设计的过程中 "),a("strong",[v._v("融入了领域驱动设计（DDD）")]),v._v("，结合事件风暴，对业务流程背后的问题域进行分析，以及通过不同业务线的问题域重合度分析，帮助我们透过流程洞见企业各业务的本质，寻找共性业务元素。")]),v._v(" "),a("p",[v._v("给这个过程做个比喻，就像是给业务照了一个 B 超一样，帮助我们更好地透过现象看到内在的实质。")]),v._v(" "),a("p",[v._v("对于企业架构方法，例如 TOGAF 的相关资料比较多，这里就不展开了，我在最后的总结里会给你一些参考资料，你可以进一步拓展阅读。")]),v._v(" "),a("p",[v._v("那利用剩下的篇幅，我想着重讲一些在企业架构设计实施过程中与中台相关的常见问题。")]),v._v(" "),a("h2",{attrs:{id:"中台复用的能力类型到底有几种"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中台复用的能力类型到底有几种"}},[v._v("#")]),v._v(" 中台复用的能力类型到底有几种？")]),v._v(" "),a("p",[v._v("第一个问题，如果说中台就是企业级能力复用平台，那在做企业架构设计的过程中：")]),v._v(" "),a("ul",[a("li",[v._v("我们到底要在不同业务线中寻找哪几类共性能力？")]),v._v(" "),a("li",[v._v("我们经常讲的业务中台中的业务到底又具体指的是什么呢？")]),v._v(" "),a("li",[v._v("那为什么中台一般都是业务、数据、技术这三者的组合呢？")])]),v._v(" "),a("p",[v._v("为了回答这几个问题，先来给你看一个模型：")]),v._v(" "),a("p",[a("img",{attrs:{src:t(1247),alt:"img"}})]),v._v(" "),a("p",[v._v("这是哈佛大学出版社 2006 年出版的一本讲企业架构战略的书里提到的一个商业运营模型（Business Operating Model），它提出两个象限：")]),v._v(" "),a("ul",[a("li",[v._v("横轴代表标准化（Standardization），标准化越高，你可以简单理解成企业就是通过业务模式（业务功能 + 业务流程）的复用实现业务线的扩展。比如像电商网站的各个垂直网站，或是全球化，都是通过将电商的业务模式复用，通过复用到不同的垂直领域，或是不同的地区来实现不同业务线的扩展。")]),v._v(" "),a("li",[v._v("纵轴代表集成（Integration），也可以理解成数据集成，这种运营模式的企业就是通过对数据的复用，来实现业务线的扩展的。比如最常见的像腾讯，通过对微信用户数据的集成和复用（导流），来帮助新的业务线（例如游戏）快速扩展。")])]),v._v(" "),a("p",[v._v("那为什么要提到这个模型呢，因为这里的 「商业运营模型」 就很像我们中台里的能力复用方式，即你复用的到底是业务模式；还是复用的是业务数据；还是两者都不是，只是复用了更底层的技术部分。")]),v._v(" "),a("p",[a("img",{attrs:{src:t(1248),alt:"img"}})]),v._v(" "),a("p",[v._v("我来稍微解释一下。")]),v._v(" "),a("p",[v._v("如果两条业务线，数据也是一套，业务流程也一模一样，那很简单，它们其实就可以共用一套系统，这也就是我们最常见的大单体系统。但这越来越成为一个反模式，除非在一些标准化极高的场景，例如核心财务系统。")]),v._v(" "),a("p",[v._v("如果两个不同的业务线之间，业务模式很相似，但是数据反而需要隔离开，那就是右下的区域。一般可以通过业务中台来沉淀通用抽象的业务流程，或者直接使用多租户的企业内部 SaaS 来实现业务模式的复用。在这个象限，业务中台与 SaaS 的区别只是抽象粒度和层次的不同，本质上要解决的问题都是一样的，即 "),a("strong",[v._v("业务模式复用")]),v._v("。")]),v._v(" "),a("p",[v._v("SaaS 抽象层次高，更靠近业务，但对于业务的标准化要求高，灵活度小。业务中台正好反之，抽象层次较 SaaS 低，介于 PaaS 和 SaaS 之间（所以很多企业管业务中台叫 ApplicationPaaS，或是 BussinessPaaS），离业务较 SaaS 远一些，但更灵活。这也回答了很多人困扰的业务中台与 SaaS 的区别问题。")]),v._v(" "),a("p",[v._v("这里可以多说一句，国外最近出现了一种 Headless Commerce（无头电商），去年也出现过 Headless CMS。我认为这波国外 Headless 的趋势，就很像是国内的中台一样，也是在 PaaS 和 SaaS 之间在找到一个新的抽象层次而已。")]),v._v(" "),a("p",[v._v("好，说完了右下，再来说左上，指的是那些 "),a("strong",[v._v("虽然业务模式不同，但是可以通过数据的集成、打通与复用来实现业务线扩展的场景")]),v._v("，一般也可以通过业务中台和数据中台来解决。因为业务中台里承载的也有数据，或是说业务中台生产的就是业务数据。")]),v._v(" "),a("p",[v._v("而前面提到过，数据中台则是对于业务中台生产的数据，进行二次加工，例如一些大数据计算、跨域的业务数据整合计算或是一些 AI 赋能场景。")]),v._v(" "),a("p",[v._v("好了，希望通过上述的分析，能帮你理解这些不同中台（包括业务中台，数据中台，技术中台，以及业务中台与 SaaS，业务中台与数据中台）的概念和差别。")]),v._v(" "),a("p",[v._v("而回到一开始的问题，我们到底要在不同业务线中寻找哪几类共性能力？现在也非常清晰了，总结下来基本上就是四类："),a("strong",[v._v("业务数据、业务功能、业务流程以及通用的技术能力")]),v._v("。")]),v._v(" "),a("h2",{attrs:{id:"通过领域分析识别共性能力"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过领域分析识别共性能力"}},[v._v("#")]),v._v(" 通过领域分析识别共性能力")]),v._v(" "),a("p",[v._v("既然企业可复用的能力就是以上这四大类，那抛开相对独立的技术能力不谈，对于剩下的业务数据、业务功能和业务流程三类共性业务能力，具体来说，我们要如何识别呢？")]),v._v(" "),a("p",[v._v("还是举极客地产的例子，对于 "),a("strong",[v._v("物业业务线和长租公寓业务线")]),v._v(" 这两条业务线，表面上看起来解决的是完全不同的问题。但是这并不能代表这两条业务线之间没有业务数据、业务功能或是业务流程复用的场景呀，"),a("strong",[v._v("比如最直接的就是打通连接物业的业主数据和长租公寓的用户数据")]),v._v("，通过例如最简单的积分机制共享，来实现物业业主向长租公寓用户的转化，实现用户的导流和新业务热启动，加速新兴业务的快速发展。")]),v._v(" "),a("p",[v._v("那到底怎么才能透过业务流程识别出有哪些类似的能力复用场景呢？没错，就是 "),a("strong",[v._v("领域驱动设计（DDD）")]),v._v("。")]),v._v(" "),a("p",[v._v("我们就是对于已经梳理的业务，又深入了一层，使用领域驱动设计结合事件风暴（EventStorming）这两个工具，通过工作坊的形式来对业务流程背后的 "),a("strong",[v._v("问题空间")]),v._v(" 和 "),a("strong",[v._v("解空间")]),v._v(" 做进一步的分析，识别出关键聚合，再通过跨业务线的 "),a("strong",[v._v("问题域")]),v._v(" 叠加投影，找出大家共同关注的问题空间和聚合，从而继续扩展来做共性场景和能力识别。")]),v._v(" "),a("p",[v._v("这里我说了很多词，像问题空间、解空间、问题域、聚合，这些都是 DDD 的常用术语，很好理解。如果你还不熟悉 DDD，建议先自己查一查再回来看。当然了，专栏最后的总结部分我也会给你推荐一些相关的学习资料。")]),v._v(" "),a("p",[a("img",{attrs:{src:t(1249),alt:"img"}})]),v._v(" "),a("p",[v._v("而整个过程也是采用头脑风暴和工作坊的形式。")]),v._v(" "),a("p",[v._v("回到极客地产的例子，大家在一起充分讨论，展开对物业业务线和长租公寓业务线的事件风暴，结合领域驱动设计战略部分的问题域分析以及聚合分析，我们就能知道这两个不同的业务线，有哪些问题空间是重合的，比如客户域或是运营域的部分。")]),v._v(" "),a("p",[v._v("然后再对问题域展开，就能识别到在这些重合的问题空间下，到底有哪些共性的业务数据、业务功能和业务流程，从而完成复用能力的识别。")]),v._v(" "),a("h2",{attrs:{id:"中台与微服务有什么区别和联系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中台与微服务有什么区别和联系"}},[v._v("#")]),v._v(" 中台与微服务有什么区别和联系?")]),v._v(" "),a("p",[v._v("说完了业务，我们再来谈谈在技术架构设计中，大家最关心也是同样感到困扰的另外一个问题，就是业务中台与微服务架构有什么关系？这也是谈及中台时经常会被问到的问题，至少能排到 Top5 里，正好讲到技术架构部分，我稍微谈一下我的理解。")]),v._v(" "),a("p",[v._v("先给出我的答案：这俩没关系！")]),v._v(" "),a("p",[v._v("是不是有点反直觉，毕竟这两个概念经常被一起提，很多讲业务中台的书讲到技术架构也都在讲微服务，你怎么说这俩没关系呢？")]),v._v(" "),a("p",[v._v("别急，且听我慢慢道来。")]),v._v(" "),a("p",[v._v("总的来说，业务中台与微服务解决的是不同的问题，也处于不同的抽象层次。")]),v._v(" "),a("p",[v._v("前面提到了业务中台解决的是 "),a("strong",[v._v("业务领域的业务（数据、功能、流程）复用的问题")]),v._v("，而微服务架构作为一种轻量级分布式技术架构，解决的是 "),a("strong",[v._v("技术领域的「组件编译时依赖」造成的问题")]),v._v("。")]),v._v(" "),a("p",[v._v("而且业务中台不一定是微服务架构的，微服务架构也不一定是为了解决能力复用的问题。")]),v._v(" "),a("p",[v._v("首先来看业务中台。业务中台要 "),a("strong",[v._v("解决的是业务能力如何快速复用的问题")]),v._v("，就算背后是一个大单体，只要暴露出来的 API 能够满足业务能力快速复用的目的也是可以的。这个很容易理解，那我就着重解释一下我对于微服务架构的看法。")]),v._v(" "),a("p",[v._v("提到微服务，不得不说目前被业界普遍接受并采用的我司首席科学家 Martin Fowler 给微服务下的定义：")]),v._v(" "),a("p",[a("img",{attrs:{src:t(1250),alt:"img"}})]),v._v(" "),a("p",[v._v("这里边有个关键点，我认为没有引起大家足够的重视，以致于我认为目前市面上绝大多数的号称微服务架构的系统从老马的定义上来看，都是伪微服务架构。这个关键点就是 "),a("strong",[v._v("能够被独立地部署")]),v._v("，我认为翻译成 「能够被独立地交付」 更贴切，而这点也是我认为评判一个微服务架构是否能发挥其价值的关键因素。")]),v._v(" "),a("p",[v._v("这也是我前边提到的「组件编译时依赖」的问题。其实组件化一直是大家都追求的，例如我们常见的 jar 包和各种开源的组件本身就是很好的组件化封装。微服务从技术上看无非是 "),a("strong",[v._v("将组件间的依赖点从「编译时」推后到了「运行时」")]),v._v(" 而已。")]),v._v(" "),a("p",[v._v("不要小看这一点变化，带来的好处是非常多的。因为依赖被推迟到了「运行时」，才可能实现类似于 「组件独立交付」、「组件运行时动态扩展」、「组件技术异构」等好处，但同样也需要承担分布式架构带来的复杂度作为代价。")]),v._v(" "),a("p",[v._v("那为什么说大多数的微服务架构都是伪的呢？因为有集成测试或其他因素存在，导致实际上并没有做到真正的独立交付（注意不是部署）。为此我还写过一篇文章《你的微服务敢独立交付么？》，讲的就是如何在不需要集成测试的情况下，利用契约测试的策略设计真正实现微服务的独立交付，充分释放微服务架构的价值，有兴趣的话可以看一看。")]),v._v(" "),a("p",[a("img",{attrs:{src:t(1251),alt:"img"}})]),v._v(" "),a("p",[v._v("还有微服务架构要想真正发挥价值，主要一点就是其中的「服务」要做到足够稳定（说来容易做起来具难）。")]),v._v(" "),a("p",[v._v("所以，业务中台与微服务架构并没有啥直接关系，只是因为微服务架构运行时依赖的低耦合特性，通常被用于实现业务中台中不同能力单元的团队分离、技术分离、交付周期分离等特性而已，只能算是一对好搭档。")]),v._v(" "),a("h2",{attrs:{id:"平台型企业架构设计概览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#平台型企业架构设计概览"}},[v._v("#")]),v._v(" 平台型企业架构设计概览")]),v._v(" "),a("p",[v._v("最后我们还是快速过一遍，一个完整的平台型企业架构的规划过程。")]),v._v(" "),a("ol",[a("li",[a("p",[v._v("首先通过各条业务线的现有业务架构分析，再结合识别的痛点做的根因分析，做业务架构上的改进与设计，从而对于现有的业务架构进行改进，设计出新的改进后的业务架构，解决现在痛点背后的问题。")])]),v._v(" "),a("li",[a("p",[v._v("同时还要参考战略分解后对于各条业务线的目标和举措，融入 To-Be 业务架构的设计当中，使新的业务架构设计同时匹配企业战略要求以及解决短期战术痛点。")])]),v._v(" "),a("li",[a("p",[v._v("对于改进后的业务架构，做跨业务线的比对和分析，就能帮助我们发现不同业务线的业务功能及业务流程的重叠情况，为后续中台建设的必要性判断提供业务层面上的支撑和输入。")])]),v._v(" "),a("li",[a("p",[v._v("使用领域驱动设计（DDD）的战略部分，针对于每条业务线，做问题域和限界上下文分析，以及关键聚合的识别，从而试图穿越流程，从领域的角度深入一层审视业务的本质，到底是在解决哪些问题空间的问题，并通过问题域的划分（核心、通用、支撑），区分问题空间对于企业的重要性。")])]),v._v(" "),a("li",[a("p",[v._v("类似于业务架构，同样对于各条业务线分析出来的领域分析视图，做横向比对和投影，从领域层识别不同的业务线中的问题域、限界上下文以及聚合的重合度。这么可能比较抽象，你可以理解成类似于将几张半透明的画摞在一起，来找相交部分一样。帮助我们识别业务数据以及业务模式（功能 + 流程）上的深层次共性能力。")])]),v._v(" "),a("li",[a("p",[v._v("结合现有的业务架构及应用架构，做各条线的应用架构设计改进，并通过 As-is 和 To-Be 的应用架构做 Gap 分析，产出 IT 建设的具体机会点，这样的机会点就类似于新建一个 CRM 系统之类的。")])]),v._v(" "),a("li",[a("p",[v._v("再基于跨域的业务架构分析和跨域的领域分析，讨论判断多条业务线的业务重合度，并详细识别重合更多是在业务模式级别的重合（出行、电商）、业务功能级别的重合（登录，购物车）、还是业务领域（用户数据打通）级别的重合。基于讨论结果，决定是否有必要引入中台层建设，以及根据重合情况，详细展开规划中台层的应用架构。")])]),v._v(" "),a("li",[a("p",[v._v("最后再分析当前现状与 To-Be 的最终规划之间的差距，产出具体的机会点列表，并且基于多维度（常见的例如战略重要性、紧急程度、成本、资源就绪情况、技术就绪情况、风险、痛点 Mapping 等）做优先级排序，产生最终的路线图。")])])]),v._v(" "),a("p",[a("img",{attrs:{src:t(1252),alt:"img"}})]),v._v(" "),a("h2",{attrs:{id:"总结思考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结思考"}},[v._v("#")]),v._v(" 总结思考")]),v._v(" "),a("p",[v._v("通过本讲与上一讲对于一个完整 Discovery 和 Define 过程的讲解，我们就完成了一个从行业和企业战略目标及愿景出发，到最终形成基于中台的企业级架构的完整过程。当然这个过程要比文字描述的复杂得多，不过通过讲述，希望你能建立一个平台型企业级架构梳理的全貌。")]),v._v(" "),a("p",[v._v("看到此时，你可能会问，我只是想做个中台，需要搞这么麻烦的战略规划吗？")]),v._v(" "),a("p",[v._v("我的回答非常肯定："),a("strong",[v._v("非常必要")]),v._v("。")]),v._v(" "),a("p",[v._v("因为从我经历的很多实际的中台建设案例来看，很多都是因为缺少了这样一个 Discovery 和 Define 的过程，导致中台的建设目标非常模糊，只有一些高大上的口号，并没有想清楚到底需不需要建设中台，以及中台建设到底对于企业代表着什么。")]),v._v(" "),a("p",[v._v("还有些情况，当我们最后收敛后，发现虽然中台建设的必要性是存在的，但是对于当前企业和行业的现状，并不是优先级最高的事情，或是并不具备相关条件，这个时候贸然开展中台建设也是非常危险的。")]),v._v(" "),a("p",[v._v("只有到这里，通过 Discovery 和 Define 的分析，得出我们确实需要一个业务中台，并且优先级也非常高，那接下来如何建设业务中台呢？下一讲我继续为你带来第二层的发散（Design）与收敛（Delivery）。")]),v._v(" "),a("p",[v._v("最后给你留几个思考题：")]),v._v(" "),a("ul",[a("li",[v._v("你之前听说、了解或使用过企业架构方法吗？")]),v._v(" "),a("li",[v._v("你有使用企业架构的方法来做中台的整体规划吗？")]),v._v(" "),a("li",[v._v("在企业级的中台规划层面你有什么问题和经验可以分享吗？")])])])}),[],!1,null,null,null);_.default=s.exports}}]);
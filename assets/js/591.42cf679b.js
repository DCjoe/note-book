(window.webpackJsonp=window.webpackJsonp||[]).push([[591],{2113:function(a,t,s){"use strict";s.r(t);var n=s(13),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"bean-概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bean-概述"}},[a._v("#")]),a._v(" Bean 概述")]),a._v(" "),s("p",[a._v("Spring IoC 容器管理一个或多个 bean。这些 bean 是使用您提供给容器的配置元数据创建的（例如，以 XML "),s("code",[a._v("<bean/>")]),a._v(" 定义的形式）。")]),a._v(" "),s("p",[a._v("在容器本身中，这些 bean 定义表示为 BeanDefinition 对象，其中包含（以及其他信息）以下元数据：")]),a._v(" "),s("ul",[s("li",[a._v("一个包限定的类名：通常是被定义的 bean 的实际实现类。")]),a._v(" "),s("li",[a._v("Bean 行为配置元素，用于说明 bean 在容器中的行为方式（范围、生命周期回调等）。")]),a._v(" "),s("li",[a._v("对 bean 完成工作所需的其他 bean 的引用。这些引用也称为协作者或依赖项。")]),a._v(" "),s("li",[a._v("要在新创建的对象中设置的其他配置设置——例如，池的大小限制或在管理连接池的 bean 中使用的连接数。")])]),a._v(" "),s("p",[a._v("这些元数据转换为每个 beanDefinition 的一组属性，")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[a._v("Property")])]),a._v(" "),s("th",[s("strong",[a._v("解释")])])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("Class （类）")]),a._v(" "),s("td",[a._v("实例化 Bean")])]),a._v(" "),s("tr",[s("td",[a._v("Name （Bean 名称）")]),a._v(" "),s("td",[a._v("Bean 的命名")])]),a._v(" "),s("tr",[s("td",[a._v("Scope （Bean 的范围）")]),a._v(" "),s("td",[a._v("Bean 的范围")])]),a._v(" "),s("tr",[s("td",[a._v("Constructor arguments （构造参数）")]),a._v(" "),s("td",[a._v("依赖注入")])]),a._v(" "),s("tr",[s("td",[a._v("Properties （属性）")]),a._v(" "),s("td",[a._v("依赖注入")])]),a._v(" "),s("tr",[s("td",[a._v("Autowiring mode（自动装配模式）")]),a._v(" "),s("td",[a._v("自动装配协作者")])]),a._v(" "),s("tr",[s("td",[a._v("Lazy initialization mode （懒加载模式）")]),a._v(" "),s("td",[a._v("延迟初始化的 Bean")])]),a._v(" "),s("tr",[s("td",[a._v("Initialization method （初始化方法）")]),a._v(" "),s("td",[a._v("初始化回调")])]),a._v(" "),s("tr",[s("td",[a._v("Destruction method （销毁方法）")]),a._v(" "),s("td",[a._v("销毁回调")])])])]),a._v(" "),s("p",[a._v("除了通过 BeanDefinition 定义元数据让 Spring 创建 Bean 之外，ApplicationContext 还允许注册由用户自己创建的 Bean 到容器中")]),a._v(" "),s("p",[s("a",{attrs:{name:"DIxQ6"}})]),a._v(" "),s("h2",{attrs:{id:"命名-bean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命名-bean"}},[a._v("#")]),a._v(" 命名 Bean")]),a._v(" "),s("p",[a._v("每个 Bean 都有一个或多个唯一标识符（容器中唯一），一个 Bean 通常只有一个标识符，如果有多个，可以将多余的视为别名")]),a._v(" "),s("p",[a._v("在 XML 文件中可以使用 id 或 name 属性（或则两者来指定），一般使用字母数字来表示一个 Bean 的名称，如 myBean、someService 等。如果要指定多个名称的话可以使用英文 "),s("code",[a._v(",")]),a._v("、"),s("code",[a._v(";")]),a._v(" 分隔。")]),a._v(" "),s("p",[a._v("如果想通过名称应用这个 Bean ，可以通过 ref 元素或则服务定位器查找；也可以不提供 id 或  name，容器会为该 Bean 生成一个唯一名称（一般采用简单的类名，并将首字母小写），不提供名称的动机一般是在 "),s("strong",[a._v("内部 Bean")]),a._v(" 和 "),s("strong",[a._v("自动装配协作者")]),a._v(" 的场景中")]),a._v(" "),s("p",[s("a",{attrs:{name:"pIMmh"}})]),a._v(" "),s("h3",{attrs:{id:"在-bean-定义之外为-bean-起别名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-bean-定义之外为-bean-起别名"}},[a._v("#")]),a._v(" 在 Bean 定义之外为 Bean 起别名")]),a._v(" "),s("p",[a._v("前面说到，在 Bean 定义中可以为 Bean 提供多个名称，但是还可以在 Bean 定义外为 Bean 提供任意个等效的别名，比如下面这样")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("alias")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("fromName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("alias")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("toName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("这个使用场景一般是在大型系统中，或则在一些应用程序中的每个组件通过使用特定于该组件本身的 bean 名称来引用公共的依赖项。")]),a._v(" "),s("p",[a._v("比如下面这个，A 组件使用别名 subsystemA-dataSource 来引用一个公共的数据源，每个组件和主应用程序都可以通过一个唯一的名称来引用数据源，并且保证不会与任何其他定义冲突（有效地创建命名空间），但它们引用的是同一个 bean。")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("alias")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("myApp-dataSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("alias")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("subsystemA-dataSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("alias")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("myApp-dataSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("alias")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("subsystemB-dataSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v(":::tips\nJAVA 配置中的 @Bean 中也可以配置别名\n:::")]),a._v(" "),s("p",[s("a",{attrs:{name:"pR4Oe"}})]),a._v(" "),s("h2",{attrs:{id:"实例化-bean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例化-bean"}},[a._v("#")]),a._v(" 实例化 Bean")]),a._v(" "),s("p",[a._v("bean 定义本质上是创建一个或多个对象的方法，当需要创建实例时，容器会根据 bean 定义中的配置元数据来创建（或获取）实际的对象")]),a._v(" "),s("p",[a._v("也就是 bean 标签中指定的 class 属性。指定的是一个类的限定名称，如果是嵌套类名，如下面这种")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("example")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SomeThing")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("OtherThing")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("那么 OtherThing 的类名可以使用美元符号 ("),s("code",[a._v("$")]),a._v(") 或点 ("),s("code",[a._v(".")]),a._v(") 分隔： "),s("code",[a._v("com.example.SomeThing$OtherThingor")]),a._v("、"),s("code",[a._v("com.example.SomeThing.OtherThing")]),a._v("。")]),a._v(" "),s("p",[s("a",{attrs:{name:"dbLiZ"}})]),a._v(" "),s("h3",{attrs:{id:"使用构造函数实例化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用构造函数实例化"}},[a._v("#")]),a._v(" 使用构造函数实例化")]),a._v(" "),s("p",[a._v("使用构造函数进行实例化时，所有普通类都可以被 Spring 所使用并兼容，一般会使用默认的空参构造函数实例化。使用默认的无惨构成函数时，下面这样定义就可以了")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("bean")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("exampleBean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("examples.ExampleBean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("bean")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("anotherExample"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("examples.ExampleBeanTwo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("当然也可以使用有参构造函数实例化，这个需要参阅后续的 "),s("a",{attrs:{href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-factory-collaborators",target:"_blank",rel:"noopener noreferrer"}},[a._v("注入依赖项"),s("OutboundLink")],1),a._v("。")]),a._v(" "),s("p",[s("a",{attrs:{name:"pmqnP"}})]),a._v(" "),s("h3",{attrs:{id:"使用静态工厂方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用静态工厂方法"}},[a._v("#")]),a._v(" 使用静态工厂方法")]),a._v(" "),s("p",[a._v("如下面这个类")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClientService")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClientService")]),a._v(" clientService "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClientService")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClientService")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClientService")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("createInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" clientService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("想要使用 createInstance 这个静态方法实例化 ClientService，可以使用 bean 标签中的 factory-method 属性")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("bean")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("clientService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("examples.ClientService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("factory-method")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("createInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("有关在工厂返回对象后向工厂方法提供（可选）参数和设置对象实例属性的机制的详细信息，请参阅 "),s("a",{attrs:{href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-factory-properties-detailed",target:"_blank",rel:"noopener noreferrer"}},[a._v("依赖项和配置详述"),s("OutboundLink")],1),a._v("。")]),a._v(" "),s("p",[s("a",{attrs:{name:"PlScu"}})]),a._v(" "),s("h3",{attrs:{id:"使用实例工厂方法进行实例化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用实例工厂方法进行实例化"}},[a._v("#")]),a._v(" 使用实例工厂方法进行实例化")]),a._v(" "),s("p",[a._v("与静态工厂方法类似，不过使用实例工厂方法进行实例化是从容器中调用现有 bean 的非静态方法来创建新 bean。")]),a._v(" "),s("p",[a._v("比如要调用 createClientServiceInstance 获取实例")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DefaultServiceLocator")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClientService")]),a._v(" clientService "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClientServiceImpl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClientService")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("createClientServiceInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" clientService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("就可以这样写")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 空参构造实例化 DefaultServiceLocator --\x3e")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("bean")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("serviceLocator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("examples.DefaultServiceLocator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- inject any dependencies required by this locator bean --\x3e")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("bean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 注意这里没有 class 属性，使用 factory-bean 指向容器中已有的 bean --\x3e")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("bean")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("clientService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("factory-bean")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("serviceLocator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("factory-method")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("createClientServiceInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("p",[a._v("这样一来，你就可以在一个实例对象中定义多个工厂方法了，如下所示")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DefaultServiceLocator")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClientService")]),a._v(" clientService "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClientServiceImpl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AccountService")]),a._v(" accountService "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AccountServiceImpl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClientService")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("createClientServiceInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" clientService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AccountService")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("createAccountServiceInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" accountService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br")])]),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("bean")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("serviceLocator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("examples.DefaultServiceLocator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- inject any dependencies required by this locator bean --\x3e")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("bean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("bean")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("clientService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("factory-bean")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("serviceLocator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("factory-method")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("createClientServiceInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("bean")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("accountService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("factory-bean")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("serviceLocator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("factory-method")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("createAccountServiceInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("p",[a._v("这种方法表明， factory bean 本身可以通过依赖注入 (DI) 进行管理和配置\n:::tips\n在 Spring 文档中，「factory bean」是指在 Spring 容器中配置并通过 实例 或 静态工厂方法 创建对象的 bean。相比之下， FactoryBean（注意大写）指的是特定于 Spring 的 FactoryBean 实现类。\n:::")]),a._v(" "),s("p",[s("a",{attrs:{name:"TIJDl"}})]),a._v(" "),s("h3",{attrs:{id:"确定-bean-的运行时类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#确定-bean-的运行时类型"}},[a._v("#")]),a._v(" 确定 Bean 的运行时类型")]),a._v(" "),s("p",[a._v("特定 bean 的运行时类型很难确定。bean 元数据定义中的指定类只是一个初始类引用，可能与声明的工厂方法结合，或者是一个 FactoryBean 类，可能导致 bean 的不同运行时类型的类，或则像上面那样使用实例工厂方法进行实例化的场景，仅通过 factory-bean 指定的名称解析。此外，AOP 代理可以使用基于接口的代理来包装 bean 实例，并有限地公开目标 bean 的实际类型（仅其实现的接口）。")]),a._v(" "),s("p",[a._v("了解特定 bean 的实际运行时类型的推荐方法是 BeanFactory.getType 调用指定的 bean 名称。这将考虑上述所有情况，并返回 BeanFactory 所需的对象类型。getBean调用将返回相同的bean名称。")]),a._v(" "),s("p",[a._v("所以可以使用：")]),a._v(" "),s("ul",[s("li",[s("code",[a._v('BeanFactory.getType("beanName")')]),a._v(" ：获取对应 bean 的 Class 对象")]),a._v(" "),s("li",[s("code",[a._v('BeanFactory.getBean("beanName")')]),a._v("：则是获取对应 bean 的 实例对象")])])])}),[],!1,null,null,null);t.default=e.exports}}]);
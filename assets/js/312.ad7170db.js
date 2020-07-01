(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{325:function(v,_,t){"use strict";t.r(_);var d=t(0),e=Object(d.a)({},(function(){var v=this.$createElement;this._self._c;return this._m(0)}),[function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"作用域-scopes-和字段-fields"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用域-scopes-和字段-fields"}},[v._v("#")]),v._v(" 作用域(Scopes)和字段(Fields)")]),v._v(" "),t("p",[v._v("通过使用聚合函数，请求将会在每个域内以时间和 "),t("strong",[v._v("是否分组键(Group Key)")]),v._v(" 进行分组。")]),v._v(" "),t("h2",{attrs:{id:"全局作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局作用域"}},[v._v("#")]),v._v(" "),t("code",[v._v("全局")]),v._v("作用域")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("名称")]),v._v(" "),t("th",[v._v("备注")]),v._v(" "),t("th",[v._v("是否分组键")]),v._v(" "),t("th",[v._v("数据类型")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("name")]),v._v(" "),t("td",[v._v("表示每个请求对应的服务名称")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("serviceInstanceName")]),v._v(" "),t("td",[v._v("表示引用的服务实例 id 的名称")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("endpoint")]),v._v(" "),t("td",[v._v("表示每个请求的端路径")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("latency")]),v._v(" "),t("td",[v._v("表示每个请求的耗时")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("int(单位：毫秒)")])]),v._v(" "),t("tr",[t("td",[v._v("status")]),v._v(" "),t("td",[v._v("表示请求成功还是失败的状态")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("bool(true 表示成功)")])]),v._v(" "),t("tr",[t("td",[v._v("responseCode")]),v._v(" "),t("td",[v._v("如果该请求是 HTTP 请求, 则表示 HTTP 响应的状态码. 如 200, 404, 302")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("int")])]),v._v(" "),t("tr",[t("td",[v._v("type")]),v._v(" "),t("td",[v._v("表示请求类型，例如: Database, HTTP, RPC, gRPC")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("enum")])])])]),v._v(" "),t("h2",{attrs:{id:"服务作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务作用域"}},[v._v("#")]),v._v(" "),t("code",[v._v("服务")]),v._v("作用域")]),v._v(" "),t("p",[v._v("从服务的每个请求计算度量数据。")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("名称")]),v._v(" "),t("th",[v._v("备注")]),v._v(" "),t("th",[v._v("是否分组键")]),v._v(" "),t("th",[v._v("数据类型")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("id")]),v._v(" "),t("td",[v._v("表示服务的唯一标识")]),v._v(" "),t("td",[v._v("是")]),v._v(" "),t("td",[v._v("int")])]),v._v(" "),t("tr",[t("td",[v._v("name")]),v._v(" "),t("td",[v._v("表示服务的名称")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("serviceInstanceName")]),v._v(" "),t("td",[v._v("表示引用的服务实例 id 的名称")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("endpointName")]),v._v(" "),t("td",[v._v("表示端点的名称, 如 HTTP URI 的完整路径")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("latency")]),v._v(" "),t("td",[v._v("表示每个请求的耗时")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("int")])]),v._v(" "),t("tr",[t("td",[v._v("status")]),v._v(" "),t("td",[v._v("表示请求成功还是失败的状态")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("bool(true 表示成功)")])]),v._v(" "),t("tr",[t("td",[v._v("responseCode")]),v._v(" "),t("td",[v._v("如果该请求是 HTTP 请求, 表示 HTTP 请求的响应码")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("int")])]),v._v(" "),t("tr",[t("td",[v._v("type")]),v._v(" "),t("td",[v._v("表示每个请求的类型, 如: Database(数据库), HTTP, RPC, gRPC")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("enum")])])])]),v._v(" "),t("h2",{attrs:{id:"服务实例作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务实例作用域"}},[v._v("#")]),v._v(" "),t("code",[v._v("服务实例")]),v._v("作用域")]),v._v(" "),t("p",[v._v("从服务实例的每个请求计算度量数据。")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("名称")]),v._v(" "),t("th",[v._v("备注")]),v._v(" "),t("th",[v._v("是否分组键")]),v._v(" "),t("th",[v._v("数据类型")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("id")]),v._v(" "),t("td",[v._v("表示服务实例的唯一标识，通常是一个数值")]),v._v(" "),t("td",[v._v("是")]),v._v(" "),t("td",[v._v("int")])]),v._v(" "),t("tr",[t("td",[v._v("name")]),v._v(" "),t("td",[v._v("表示服务实例名称。 例如 "),t("code",[v._v("ip:port@Service Name")]),v._v(".  "),t("strong",[v._v("提醒")]),v._v(": 现在原生代理使用 "),t("code",[v._v("processId@Service name")]),v._v(" 作为服务实例名称, 当需要在聚合中设置筛选器时，这个毫无用处。")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("serviceName")]),v._v(" "),t("td",[v._v("表示服务的名称")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("endpointName")]),v._v(" "),t("td",[v._v("表示端点的名称, 如 HTTP URI 的完整路径.")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("latency")]),v._v(" "),t("td",[v._v("表示每个请求的耗时")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("int")])]),v._v(" "),t("tr",[t("td",[v._v("status")]),v._v(" "),t("td",[v._v("表示请求成功还是失败的状态")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("bool(true 表示成功)")])]),v._v(" "),t("tr",[t("td",[v._v("responseCode")]),v._v(" "),t("td",[v._v("如果该请求是 HTTP 请求, 则表示 HTTP 响应的状态码. 如 200, 404, 302.")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("int")])]),v._v(" "),t("tr",[t("td",[v._v("type")]),v._v(" "),t("td",[v._v("表示请求类型，例如: Database, HTTP, RPC, gRPC")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("enum")])])])]),v._v(" "),t("h3",{attrs:{id:"服务实例二级作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务实例二级作用域"}},[v._v("#")]),v._v(" "),t("code",[v._v("服务实例")]),v._v("二级作用域")]),v._v(" "),t("p",[v._v("当服务实例是一个 JVM 并且通过 javaagent 收集时, 计算服务实例的度量指标.")]),v._v(" "),t("h4",{attrs:{id:"_1-serviceinstancejvmcpu-作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-serviceinstancejvmcpu-作用域"}},[v._v("#")]),v._v(" 1. "),t("code",[v._v("ServiceInstanceJVMCPU")]),v._v(" 作用域")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("名称")]),v._v(" "),t("th",[v._v("备注")]),v._v(" "),t("th",[v._v("是否分组键")]),v._v(" "),t("th",[v._v("数据类型")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("id")]),v._v(" "),t("td",[v._v("表示服务实例的唯一标识，通常是一个数值")]),v._v(" "),t("td",[v._v("是")]),v._v(" "),t("td",[v._v("int")])]),v._v(" "),t("tr",[t("td",[v._v("name")]),v._v(" "),t("td",[v._v("表示服务实例名称。 例如 "),t("code",[v._v("ip:port@Service Name")]),v._v(".  "),t("strong",[v._v("提醒")]),v._v(": 现在原生代理使用 "),t("code",[v._v("processId@Service name")]),v._v(" 作为服务实例名称, 当需要在聚合中设置筛选器时，这个毫无用处。")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("serviceName")]),v._v(" "),t("td",[v._v("表示服务的名称")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("usePercent")]),v._v(" "),t("td",[v._v("表示 CPU 耗时百分比")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("double")])])])]),v._v(" "),t("h4",{attrs:{id:"_2-serviceinstancejvmmemory-作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-serviceinstancejvmmemory-作用域"}},[v._v("#")]),v._v(" 2. "),t("code",[v._v("ServiceInstanceJVMMemory")]),v._v(" 作用域")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("名称")]),v._v(" "),t("th",[v._v("备注")]),v._v(" "),t("th",[v._v("是否分组键")]),v._v(" "),t("th",[v._v("数据类型")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("id")]),v._v(" "),t("td",[v._v("表示服务实例的唯一标识，通常是一个数值")]),v._v(" "),t("td",[v._v("是")]),v._v(" "),t("td",[v._v("int")])]),v._v(" "),t("tr",[t("td",[v._v("name")]),v._v(" "),t("td",[v._v("表示服务实例名称。 例如 "),t("code",[v._v("ip:port@Service Name")]),v._v(".  "),t("strong",[v._v("提醒")]),v._v(": 现在原生代理使用 "),t("code",[v._v("processId@Service name")]),v._v(" 作为服务实例名称, 当需要在聚合中设置筛选器时，这个毫无用处。")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("serviceName")]),v._v(" "),t("td",[v._v("表示服务的名称")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("heapStatus")]),v._v(" "),t("td",[v._v("表示该指标是否是堆的指标")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("bool")])]),v._v(" "),t("tr",[t("td",[v._v("init")]),v._v(" "),t("td",[v._v("参考 JVM 文档")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("long")])]),v._v(" "),t("tr",[t("td",[v._v("max")]),v._v(" "),t("td",[v._v("参考 JVM 文档")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("long")])]),v._v(" "),t("tr",[t("td",[v._v("used")]),v._v(" "),t("td",[v._v("参考 JVM 文档")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("long")])]),v._v(" "),t("tr",[t("td",[v._v("committed")]),v._v(" "),t("td",[v._v("参考 JVM 文档")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("long")])])])]),v._v(" "),t("h4",{attrs:{id:"_3-serviceinstancejvmmemorypool-作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-serviceinstancejvmmemorypool-作用域"}},[v._v("#")]),v._v(" 3. "),t("code",[v._v("ServiceInstanceJVMMemoryPool")]),v._v(" 作用域")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("名称")]),v._v(" "),t("th",[v._v("备注")]),v._v(" "),t("th",[v._v("是否分组键")]),v._v(" "),t("th",[v._v("数据类型")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("id")]),v._v(" "),t("td",[v._v("表示服务实例的唯一标识，通常是一个数值")]),v._v(" "),t("td",[v._v("是")]),v._v(" "),t("td",[v._v("int")])]),v._v(" "),t("tr",[t("td",[v._v("name")]),v._v(" "),t("td",[v._v("表示服务实例名称。 例如 "),t("code",[v._v("ip:port@Service Name")]),v._v(".  "),t("strong",[v._v("提醒")]),v._v(": 现在原生代理使用 "),t("code",[v._v("processId@Service name")]),v._v(" 作为服务实例名称, 当需要在聚合中设置筛选器时，这个毫无用处。")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("serviceName")]),v._v(" "),t("td",[v._v("表示服务的名称")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("poolType")]),v._v(" "),t("td",[v._v("根据不同的 JVM 版本, 可能包括 CODE_CACHE_USAGE, NEWGEN_USAGE, OLDGEN_USAGE, SURVIVOR_USAGE, PERMGEN_USAGE, METASPACE_USAGE")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("enum")])]),v._v(" "),t("tr",[t("td",[v._v("init")]),v._v(" "),t("td",[v._v("参考 JVM 文档")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("long")])]),v._v(" "),t("tr",[t("td",[v._v("max")]),v._v(" "),t("td",[v._v("参考 JVM 文档")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("long")])]),v._v(" "),t("tr",[t("td",[v._v("used")]),v._v(" "),t("td",[v._v("参考 JVM 文档")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("long")])]),v._v(" "),t("tr",[t("td",[v._v("committed")]),v._v(" "),t("td",[v._v("参考 JVM 文档")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("long")])])])]),v._v(" "),t("h4",{attrs:{id:"_4-serviceinstancejvmgc-作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-serviceinstancejvmgc-作用域"}},[v._v("#")]),v._v(" 4. "),t("code",[v._v("ServiceInstanceJVMGC")]),v._v(" 作用域")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("名称")]),v._v(" "),t("th",[v._v("备注")]),v._v(" "),t("th",[v._v("是否分组键")]),v._v(" "),t("th",[v._v("数据类型")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("id")]),v._v(" "),t("td",[v._v("表示服务实例的唯一标识，通常是一个数值")]),v._v(" "),t("td",[v._v("是")]),v._v(" "),t("td",[v._v("int")])]),v._v(" "),t("tr",[t("td",[v._v("name")]),v._v(" "),t("td",[v._v("表示服务实例名称。 例如 "),t("code",[v._v("ip:port@Service Name")]),v._v(".  "),t("strong",[v._v("提醒")]),v._v(": 现在原生代理使用 "),t("code",[v._v("processId@Service name")]),v._v(" 作为服务实例名称, 当需要在聚合中设置筛选器时，这个毫无用处。")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("serviceName")]),v._v(" "),t("td",[v._v("表示服务的名称")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("phrase")]),v._v(" "),t("td",[v._v("包括 NEW/OLD")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("Enum")])]),v._v(" "),t("tr",[t("td",[v._v("time")]),v._v(" "),t("td",[v._v("GC 耗时")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("long")])]),v._v(" "),t("tr",[t("td",[v._v("count")]),v._v(" "),t("td",[v._v("GC 次数")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("long")])])])]),v._v(" "),t("h2",{attrs:{id:"端点-作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#端点-作用域"}},[v._v("#")]),v._v(" "),t("code",[v._v("端点")]),v._v(" 作用域")]),v._v(" "),t("p",[v._v("计算服务中每个端点请求的度量指标。")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("名称")]),v._v(" "),t("th",[v._v("备注")]),v._v(" "),t("th",[v._v("是否分组键")]),v._v(" "),t("th",[v._v("数据类型")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("id")]),v._v(" "),t("td",[v._v("表示端点的唯一标识，通常是一个数值")]),v._v(" "),t("td",[v._v("是")]),v._v(" "),t("td",[v._v("int")])]),v._v(" "),t("tr",[t("td",[v._v("name")]),v._v(" "),t("td",[v._v("表示端点的名称, 如 HTTP URI 的完整路径.")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("serviceName")]),v._v(" "),t("td",[v._v("表示服务的名称")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("serviceInstanceName")]),v._v(" "),t("td",[v._v("表示引用的服务实例 id 的名称.")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("latency")]),v._v(" "),t("td",[v._v("表示每个请求的耗时")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("int")])]),v._v(" "),t("tr",[t("td",[v._v("status")]),v._v(" "),t("td",[v._v("表示请求成功还是失败的状态")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("bool(true 表示成功)")])]),v._v(" "),t("tr",[t("td",[v._v("responseCode")]),v._v(" "),t("td",[v._v("如果该请求是 HTTP 请求, 则表示 HTTP 响应的状态码. 如 200, 404, 302.")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("int")])]),v._v(" "),t("tr",[t("td",[v._v("type")]),v._v(" "),t("td",[v._v("表示请求类型，例如: Database, HTTP, RPC, gRPC")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("enum")])])])]),v._v(" "),t("h2",{attrs:{id:"服务关系-作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务关系-作用域"}},[v._v("#")]),v._v(" "),t("code",[v._v("服务关系")]),v._v(" 作用域")]),v._v(" "),t("p",[v._v("计算服务与服务之间每个请求的度量指标。")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("名称")]),v._v(" "),t("th",[v._v("备注")]),v._v(" "),t("th",[v._v("是否分组键")]),v._v(" "),t("th",[v._v("数据类型")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("sourceServiceId")]),v._v(" "),t("td",[v._v("表示源服务的 ID")]),v._v(" "),t("td",[v._v("是")]),v._v(" "),t("td",[v._v("int")])]),v._v(" "),t("tr",[t("td",[v._v("sourceServiceName")]),v._v(" "),t("td",[v._v("表示源服务的名称")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("sourceServiceInstanceName")]),v._v(" "),t("td",[v._v("表示源服务实例名称")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("destServiceId")]),v._v(" "),t("td",[v._v("表示目标服务的 ID")]),v._v(" "),t("td",[v._v("是")]),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("destServiceName")]),v._v(" "),t("td",[v._v("表示目标服务的名称")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("destServiceInstanceName")]),v._v(" "),t("td",[v._v("表示目标服务实例名称")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("endpoint")]),v._v(" "),t("td",[v._v("表示本次调用中使用的端点")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("componentId")]),v._v(" "),t("td",[v._v("表示本次调用中使用到的组件 ID")]),v._v(" "),t("td",[v._v("是")]),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("latency")]),v._v(" "),t("td",[v._v("表示每个请求的耗时")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("int")])]),v._v(" "),t("tr",[t("td",[v._v("status")]),v._v(" "),t("td",[v._v("表示请求成功还是失败的状态")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("bool(true 表示成功)")])]),v._v(" "),t("tr",[t("td",[v._v("responseCode")]),v._v(" "),t("td",[v._v("如果该请求是 HTTP 请求, 则表示 HTTP 响应的状态码. 如 200, 404, 302.")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("int")])]),v._v(" "),t("tr",[t("td",[v._v("type")]),v._v(" "),t("td",[v._v("表示请求类型，例如: Database, HTTP, RPC, gRPC")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("enum")])]),v._v(" "),t("tr",[t("td",[v._v("detectPoint")]),v._v(" "),t("td",[v._v("Represent where is the relation detected. Values: client, server, proxy.")]),v._v(" "),t("td",[v._v("是")]),v._v(" "),t("td",[v._v("enum")])])])]),v._v(" "),t("h2",{attrs:{id:"服务实例关系-作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务实例关系-作用域"}},[v._v("#")]),v._v(" "),t("code",[v._v("服务实例关系")]),v._v(" 作用域")]),v._v(" "),t("p",[v._v("计算服务实例与服务实例之间每个请求的度量指标。")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("名称")]),v._v(" "),t("th",[v._v("备注")]),v._v(" "),t("th",[v._v("是否分组键")]),v._v(" "),t("th",[v._v("数据类型")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("sourceServiceInstanceId")]),v._v(" "),t("td",[v._v("表示源服务实例的 ID")]),v._v(" "),t("td",[v._v("是")]),v._v(" "),t("td",[v._v("int")])]),v._v(" "),t("tr",[t("td",[v._v("sourceServiceName")]),v._v(" "),t("td",[v._v("表示源服务的名称")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("sourceServiceInstanceName")]),v._v(" "),t("td",[v._v("表示源服务实例名称")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("destServiceName")]),v._v(" "),t("td",[v._v("表示目标服务的名称")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("destServiceInstanceId")]),v._v(" "),t("td",[v._v("表示目标服务实例 ID")]),v._v(" "),t("td",[v._v("是")]),v._v(" "),t("td",[v._v("int")])]),v._v(" "),t("tr",[t("td",[v._v("destServiceInstanceName")]),v._v(" "),t("td",[v._v("表示目标服务实例名称")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("endpoint")]),v._v(" "),t("td",[v._v("表示本次调用中使用的端点")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("componentId")]),v._v(" "),t("td",[v._v("表示本次调用中使用到的组件 ID")]),v._v(" "),t("td",[v._v("是")]),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("latency")]),v._v(" "),t("td",[v._v("表示每个请求的耗时")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("int")])]),v._v(" "),t("tr",[t("td",[v._v("status")]),v._v(" "),t("td",[v._v("表示请求成功还是失败的状态")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("bool(true 表示成功)")])]),v._v(" "),t("tr",[t("td",[v._v("responseCode")]),v._v(" "),t("td",[v._v("如果该请求是 HTTP 请求, 则表示 HTTP 响应的状态码. 如 200, 404, 302.")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("int")])]),v._v(" "),t("tr",[t("td",[v._v("type")]),v._v(" "),t("td",[v._v("表示请求类型，例如: Database, HTTP, RPC, gRPC")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("enum")])]),v._v(" "),t("tr",[t("td",[v._v("detectPoint")]),v._v(" "),t("td",[v._v("Represent where is the relation detected. Values: client, server, proxy.")]),v._v(" "),t("td",[v._v("是")]),v._v(" "),t("td",[v._v("enum")])])])]),v._v(" "),t("h2",{attrs:{id:"端点关系-作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#端点关系-作用域"}},[v._v("#")]),v._v(" "),t("code",[v._v("端点关系")]),v._v(" 作用域")]),v._v(" "),t("p",[v._v("计算端点之间依赖的度量指标。这种关系通常难以探测，, 而且还要依赖于追踪库来传播上个端点。所以 "),t("code",[v._v("EndpointRelation")]),v._v(" 范围聚合，仅仅在使用 SkyWalking 原生代理进行追踪的情况下才有效，包括自动打点代理(如 Java, .NET), OpenCensus SkyWalking exporter 以及其他传播追踪上下文的实现.")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("名称")]),v._v(" "),t("th",[v._v("备注")]),v._v(" "),t("th",[v._v("是否分组键")]),v._v(" "),t("th",[v._v("数据类型")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("endpointId")]),v._v(" "),t("td",[v._v("表示此依赖中的父端点 ID")]),v._v(" "),t("td",[v._v("是")]),v._v(" "),t("td",[v._v("int")])]),v._v(" "),t("tr",[t("td",[v._v("endpoint")]),v._v(" "),t("td",[v._v("表示此依赖中的父端点")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("childEndpointId")]),v._v(" "),t("td",[v._v("表示此关系中, 被父端点(第一行)使用的端点的 ID")]),v._v(" "),t("td",[v._v("是")]),v._v(" "),t("td",[v._v("int")])]),v._v(" "),t("tr",[t("td",[v._v("childEndpoint")]),v._v(" "),t("td",[v._v("表示此关系中, 被父端点(第二行)使用的端点")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("rpcLatency")]),v._v(" "),t("td",[v._v("表示从父端点到子端点之间 RPC 的耗时, 不包括父端点本身的耗时")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("int")])]),v._v(" "),t("tr",[t("td",[v._v("componentId")]),v._v(" "),t("td",[v._v("表示本次调用中使用到的组件 ID")]),v._v(" "),t("td",[v._v("是")]),v._v(" "),t("td",[v._v("string")])]),v._v(" "),t("tr",[t("td",[v._v("status")]),v._v(" "),t("td",[v._v("表示请求成功还是失败的状态")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("bool(true 表示成功)")])]),v._v(" "),t("tr",[t("td",[v._v("responseCode")]),v._v(" "),t("td",[v._v("如果该请求是 HTTP 请求, 则表示 HTTP 响应的状态码. 如 200, 404, 302.")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("int")])]),v._v(" "),t("tr",[t("td",[v._v("type")]),v._v(" "),t("td",[v._v("表示请求类型，例如: Database, HTTP, RPC, gRPC")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("enum")])]),v._v(" "),t("tr",[t("td",[v._v("detectPoint")]),v._v(" "),t("td",[v._v("Represent where is the relation detected. Values: client, server, proxy.")]),v._v(" "),t("td",[v._v("是")]),v._v(" "),t("td",[v._v("enum")])])])])])}],!1,null,null,null);_.default=e.exports}}]);
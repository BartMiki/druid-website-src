"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[687],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(r),c=a,h=p["".concat(d,".").concat(c)]||p[c]||m[c]||i;return r?n.createElement(h,l(l({ref:t},s),{},{components:r})):n.createElement(h,l({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7734:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],o={id:"query-context",title:"Query context",sidebar_label:"Query context"},d=void 0,u={unversionedId:"querying/query-context",id:"querying/query-context",title:"Query context",description:"\x3c!--",source:"@site/docs/26.0.0/querying/query-context.md",sourceDirName:"querying",slug:"/querying/query-context",permalink:"/docs/26.0.0/querying/query-context",draft:!1,tags:[],version:"current",frontMatter:{id:"query-context",title:"Query context",sidebar_label:"Query context"},sidebar:"docs",previous:{title:"Using query caching",permalink:"/docs/26.0.0/querying/using-caching"},next:{title:"Timeseries",permalink:"/docs/26.0.0/querying/timeseriesquery"}},s={},p=[{value:"General parameters",id:"general-parameters",level:2},{value:"Druid SQL parameters",id:"druid-sql-parameters",level:2},{value:"Parameters by query type",id:"parameters-by-query-type",level:2},{value:"TopN",id:"topn",level:3},{value:"Timeseries",id:"timeseries",level:3},{value:"Join filter",id:"join-filter",level:3},{value:"GroupBy",id:"groupby",level:3},{value:"Vectorization parameters",id:"vectorization-parameters",level:2}],m={toc:p},c="wrapper";function h(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)(c,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The query context is used for various query configuration parameters. Query context parameters can be specified in\nthe following ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("a",{parentName:"li",href:"/docs/26.0.0/querying/sql-api"},"Druid SQL"),", context parameters are provided either in a JSON object named ",(0,i.kt)("inlineCode",{parentName:"li"},"context")," to the\nHTTP POST API, or as properties to the JDBC connection."),(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("a",{parentName:"li",href:"/docs/26.0.0/querying/"},"native queries"),", context parameters are provided in a JSON object named ",(0,i.kt)("inlineCode",{parentName:"li"},"context"),".")),(0,i.kt)("p",null,"Note that setting query context will override both the default value and the runtime properties value in the format of\n",(0,i.kt)("inlineCode",{parentName:"p"},"druid.query.default.context.{property_key}")," (if set). "),(0,i.kt)("h2",{id:"general-parameters"},"General parameters"),(0,i.kt)("p",null,"Unless otherwise noted, the following parameters apply to all query types."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"timeout")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.server.http.defaultQueryTimeout")),(0,i.kt)("td",{parentName:"tr",align:null},"Query timeout in millis, beyond which unfinished queries will be cancelled. 0 timeout means ",(0,i.kt)("inlineCode",{parentName:"td"},"no timeout")," (up to the server-side maximum query timeout, ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.server.http.maxQueryTimeout"),"). To set the default timeout and maximum timeout, see ",(0,i.kt)("a",{parentName:"td",href:"/docs/26.0.0/configuration/#broker"},"Broker configuration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"priority")),(0,i.kt)("td",{parentName:"tr",align:null},"The default priority is one of the following: ",(0,i.kt)("ul",null,(0,i.kt)("li",null,"Value of ",(0,i.kt)("inlineCode",{parentName:"td"},"priority")," in the query context, if set"),(0,i.kt)("li",null,"The value of the runtime property ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.query.default.context.priority"),", if set and not null"),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"0")," if the priority is not set in the query context or runtime properties"))),(0,i.kt)("td",{parentName:"tr",align:null},"Query priority. Queries with higher priority get precedence for computational resources.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"lane")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"Query lane, used to control usage limits on classes of queries. See ",(0,i.kt)("a",{parentName:"td",href:"/docs/26.0.0/configuration/#broker"},"Broker configuration")," for more details.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"queryId")),(0,i.kt)("td",{parentName:"tr",align:null},"auto-generated"),(0,i.kt)("td",{parentName:"tr",align:null},"Unique identifier given to this query. If a query ID is set or known, this can be used to cancel the query")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"brokerService")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"Broker service to which this query should be routed. This parameter is honored only by a broker selector strategy of type ",(0,i.kt)("em",{parentName:"td"},"manual"),". See ",(0,i.kt)("a",{parentName:"td",href:"/docs/26.0.0/design/router#router-strategies"},"Router strategies")," for more details.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"useCache")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"Flag indicating whether to leverage the query cache for this query. When set to false, it disables reading from the query cache for this query. When set to true, Apache Druid uses ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.broker.cache.useCache")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.historical.cache.useCache")," to determine whether or not to read from the query cache")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"populateCache")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"Flag indicating whether to save the results of the query to the query cache. Primarily used for debugging. When set to false, it disables saving the results of this query to the query cache. When set to true, Druid uses ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.broker.cache.populateCache")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.historical.cache.populateCache")," to determine whether or not to save the results of this query to the query cache")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"useResultLevelCache")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"Flag indicating whether to leverage the result level cache for this query. When set to false, it disables reading from the query cache for this query. When set to true, Druid uses ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.broker.cache.useResultLevelCache")," to determine whether or not to read from the result-level query cache")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"populateResultLevelCache")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"Flag indicating whether to save the results of the query to the result level cache. Primarily used for debugging. When set to false, it disables saving the results of this query to the query cache. When set to true, Druid uses ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.broker.cache.populateResultLevelCache")," to determine whether or not to save the results of this query to the result-level query cache")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bySegment")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},'Native queries only. Return "by segment" results. Primarily used for debugging, setting it to ',(0,i.kt)("inlineCode",{parentName:"td"},"true")," returns results associated with the data segment they came from")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"finalize")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"N/A")),(0,i.kt)("td",{parentName:"tr",align:null},'Flag indicating whether to "finalize" aggregation results. Primarily used for debugging. For instance, the ',(0,i.kt)("inlineCode",{parentName:"td"},"hyperUnique")," aggregator returns the full HyperLogLog sketch instead of the estimated cardinality when this flag is set to ",(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"maxScatterGatherBytes")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.server.http.maxScatterGatherBytes")),(0,i.kt)("td",{parentName:"tr",align:null},"Maximum number of bytes gathered from data processes such as Historicals and realtime processes to execute a query. This parameter can be used to further reduce ",(0,i.kt)("inlineCode",{parentName:"td"},"maxScatterGatherBytes")," limit at query time. See ",(0,i.kt)("a",{parentName:"td",href:"/docs/26.0.0/configuration/#broker"},"Broker configuration")," for more details.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"maxQueuedBytes")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.broker.http.maxQueuedBytes")),(0,i.kt)("td",{parentName:"tr",align:null},"Maximum number of bytes queued per query before exerting backpressure on the channel to the data server. Similar to ",(0,i.kt)("inlineCode",{parentName:"td"},"maxScatterGatherBytes"),", except unlike that configuration, this one will trigger backpressure rather than query failure. Zero means disabled.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"serializeDateTimeAsLong")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"If true, DateTime is serialized as long in the result returned by Broker and the data transportation between Broker and compute process")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"serializeDateTimeAsLongInner")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"If true, DateTime is serialized as long in the data transportation between Broker and compute process")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"enableParallelMerge")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"Enable parallel result merging on the Broker. Note that ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.processing.merge.useParallelMergePool")," must be enabled for this setting to be set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),". See ",(0,i.kt)("a",{parentName:"td",href:"/docs/26.0.0/configuration/#broker"},"Broker configuration")," for more details.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"parallelMergeParallelism")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.processing.merge.pool.parallelism")),(0,i.kt)("td",{parentName:"tr",align:null},"Maximum number of parallel threads to use for parallel result merging on the Broker. See ",(0,i.kt)("a",{parentName:"td",href:"/docs/26.0.0/configuration/#broker"},"Broker configuration")," for more details.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"parallelMergeInitialYieldRows")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.processing.merge.task.initialYieldNumRows")),(0,i.kt)("td",{parentName:"tr",align:null},"Number of rows to yield per ForkJoinPool merge task for parallel result merging on the Broker, before forking off a new task to continue merging sequences. See ",(0,i.kt)("a",{parentName:"td",href:"/docs/26.0.0/configuration/#broker"},"Broker configuration")," for more details.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"parallelMergeSmallBatchRows")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.processing.merge.task.smallBatchNumRows")),(0,i.kt)("td",{parentName:"tr",align:null},"Size of result batches to operate on in ForkJoinPool merge tasks for parallel result merging on the Broker. See ",(0,i.kt)("a",{parentName:"td",href:"/docs/26.0.0/configuration/#broker"},"Broker configuration")," for more details.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"useFilterCNF")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"If true, Druid will attempt to convert the query filter to Conjunctive Normal Form (CNF). During query processing, columns can be pre-filtered by intersecting the bitmap indexes of all values that match the eligible filters, often greatly reducing the raw number of rows which need to be scanned. But this effect only happens for the top level filter, or individual clauses of a top level 'and' filter. As such, filters in CNF potentially have a higher chance to utilize a large amount of bitmap indexes on string columns during pre-filtering. However, this setting should be used with great caution, as it can sometimes have a negative effect on performance, and in some cases, the act of computing CNF of a filter can be expensive. We recommend hand tuning your filters to produce an optimal form if possible, or at least verifying through experimentation that using this parameter actually improves your query performance with no ill-effects.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"secondaryPartitionPruning")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"Enable secondary partition pruning on the Broker. The Broker will always prune unnecessary segments from the input scan based on a filter on time intervals, but if the data is further partitioned with hash or range partitioning, this option will enable additional pruning based on a filter on secondary partition dimensions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"enableJoinLeftTableScanDirect")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"This flag applies to queries which have joins. For joins, where left child is a simple scan with a filter,  by default, druid will run the scan as a query and the join the results to the right child on broker. Setting this flag to true overrides that behavior and druid will attempt to push the join to data servers instead. Please note that the flag could be applicable to queries even if there is no explicit join. since queries can internally translated into a join by the SQL planner.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"debug")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Flag indicating whether to enable debugging outputs for the query. When set to false, no additional logs will be produced (logs produced will be entirely dependent on your logging level). When set to true, the following addition logs will be produced:",(0,i.kt)("br",null),"- Log the stack trace of the exception (if any) produced by the query")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"setProcessingThreadNames")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether processing thread names will be set to ",(0,i.kt)("inlineCode",{parentName:"td"},"queryType_dataSource_intervals")," while processing a query. This aids in interpreting thread dumps, and is on by default. Query overhead can be reduced slightly by setting this to ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),". This has a tiny effect in most scenarios, but can be meaningful in high-QPS, low-per-segment-processing-time scenarios.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"maxNumericInFilters")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-1")),(0,i.kt)("td",{parentName:"tr",align:null},"Max limit for the amount of numeric values that can be compared for a string type dimension when the entire SQL WHERE clause of a query translates only to an ",(0,i.kt)("a",{parentName:"td",href:"/docs/26.0.0/querying/filters#or"},"OR")," of ",(0,i.kt)("a",{parentName:"td",href:"/docs/26.0.0/querying/filters#bound-filter"},"Bound filter"),". By default, Druid does not restrict the amount of of numeric Bound Filters on String columns, although this situation may block other queries from running. Set this parameter to a smaller value to prevent Druid from running queries that have prohibitively long segment processing times. The optimal limit requires some trial and error; we recommend starting with 100.  Users who submit a query that exceeds the limit of ",(0,i.kt)("inlineCode",{parentName:"td"},"maxNumericInFilters")," should instead rewrite their queries to use strings in the ",(0,i.kt)("inlineCode",{parentName:"td"},"WHERE")," clause instead of numbers. For example, ",(0,i.kt)("inlineCode",{parentName:"td"},"WHERE someString IN (\u2018123\u2019, \u2018456\u2019)"),". This value cannot exceed the set system configuration ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.sql.planner.maxNumericInFilters"),". This value is ignored if ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.sql.planner.maxNumericInFilters")," is not set explicitly.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"inSubQueryThreshold")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"2147483647")),(0,i.kt)("td",{parentName:"tr",align:null},"Threshold for minimum number of values in an IN clause to convert the query to a JOIN operation on an inlined table rather than a predicate. A threshold of 0 forces usage of an inline table in all cases; a threshold of ","[Integer.MAX_VALUE]"," forces usage of OR in all cases.")))),(0,i.kt)("h2",{id:"druid-sql-parameters"},"Druid SQL parameters"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/sql-query-context"},"SQL query context")," for query context parameters specific to Druid SQL queries."),(0,i.kt)("h2",{id:"parameters-by-query-type"},"Parameters by query type"),(0,i.kt)("p",null,"Some query types offer context parameters specific to that query type."),(0,i.kt)("h3",{id:"topn"},"TopN"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"minTopNThreshold")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1000")),(0,i.kt)("td",{parentName:"tr",align:null},"The top minTopNThreshold local results from each segment are returned for merging to determine the global topN.")))),(0,i.kt)("h3",{id:"timeseries"},"Timeseries"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"skipEmptyBuckets")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Disable timeseries zero-filling behavior, so only buckets with results will be returned.")))),(0,i.kt)("h3",{id:"join-filter"},"Join filter"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"enableJoinFilterPushDown")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"Controls whether a join query will attempt filter push down, which reduces the number of rows that have to be compared in a join operation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"enableJoinFilterRewrite")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"Controls whether filter clauses that reference non-base table columns will be rewritten into filters on base table columns.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"enableJoinFilterRewriteValueColumnFilters")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Controls whether Druid rewrites non-base table filters on non-key columns in the non-base table. Requires a scan of the non-base table.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"enableRewriteJoinToFilter")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"Controls whether a join can be pushed partial or fully to the base table as a filter at runtime.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"joinFilterRewriteMaxSize")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"10000")),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum size of the correlated value set used for filter rewrites. Set this limit to prevent excessive memory use.")))),(0,i.kt)("h3",{id:"groupby"},"GroupBy"),(0,i.kt)("p",null,"See the list of ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/groupbyquery#advanced-configurations"},"GroupBy query context")," parameters available on the groupBy\nquery page."),(0,i.kt)("h2",{id:"vectorization-parameters"},"Vectorization parameters"),(0,i.kt)("p",null,"The GroupBy and Timeseries query types can run in ",(0,i.kt)("em",{parentName:"p"},"vectorized")," mode, which speeds up query execution by processing\nbatches of rows at a time. Not all queries can be vectorized. In particular, vectorization currently has the following\nrequirements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'All query-level filters must either be able to run on bitmap indexes or must offer vectorized row-matchers. These\ninclude "selector", "bound", "in", "like", "regex", "search", "and", "or", and "not".'),(0,i.kt)("li",{parentName:"ul"},"All filters in filtered aggregators must offer vectorized row-matchers."),(0,i.kt)("li",{parentName:"ul"},'All aggregators must offer vectorized implementations. These include "count", "doubleSum", "floatSum", "longSum", "longMin",\n"longMax", "doubleMin", "doubleMax", "floatMin", "floatMax", "longAny", "doubleAny", "floatAny", "stringAny",\n"hyperUnique", "filtered", "approxHistogram", "approxHistogramFold", and "fixedBucketsHistogram" (with numerical input). '),(0,i.kt)("li",{parentName:"ul"},"All virtual columns must offer vectorized implementations. Currently for expression virtual columns, support for vectorization is decided on a per expression basis, depending on the type of input and the functions used by the expression. See the currently supported list in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/26.0.0/misc/math-expr#vectorization-support"},"expression documentation"),"."),(0,i.kt)("li",{parentName:"ul"},'For GroupBy: All dimension specs must be "default" (no extraction functions or filtered dimension specs).'),(0,i.kt)("li",{parentName:"ul"},"For GroupBy: No multi-value dimensions."),(0,i.kt)("li",{parentName:"ul"},'For Timeseries: No "descending" order.'),(0,i.kt)("li",{parentName:"ul"},"Only immutable segments (not real-time)."),(0,i.kt)("li",{parentName:"ul"},"Only ",(0,i.kt)("a",{parentName:"li",href:"/docs/26.0.0/querying/datasource#table"},"table datasources")," (not joins, subqueries, lookups, or inline datasources).")),(0,i.kt)("p",null,"Other query types (like TopN, Scan, Select, and Search) ignore the ",(0,i.kt)("inlineCode",{parentName:"p"},"vectorize")," parameter, and will execute without\nvectorization. These query types will ignore the ",(0,i.kt)("inlineCode",{parentName:"p"},"vectorize")," parameter even if it is set to ",(0,i.kt)("inlineCode",{parentName:"p"},'"force"'),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"vectorize")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"Enables or disables vectorized query execution. Possible values are ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," (disabled), ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," (enabled if possible, disabled otherwise, on a per-segment basis), and ",(0,i.kt)("inlineCode",{parentName:"td"},"force")," (enabled, and groupBy or timeseries queries that cannot be vectorized will fail). The ",(0,i.kt)("inlineCode",{parentName:"td"},'"force"')," setting is meant to aid in testing, and is not generally useful in production (since real-time segments can never be processed with vectorized execution, any queries on real-time data will fail). This will override ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.query.default.context.vectorize")," if it's set.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"vectorSize")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"512")),(0,i.kt)("td",{parentName:"tr",align:null},"Sets the row batching size for a particular query. This will override ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.query.default.context.vectorSize")," if it's set.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"vectorizeVirtualColumns")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"Enables or disables vectorized query processing of queries with virtual columns, layered on top of ",(0,i.kt)("inlineCode",{parentName:"td"},"vectorize")," (",(0,i.kt)("inlineCode",{parentName:"td"},"vectorize")," must also be set to true for a query to utilize vectorization). Possible values are ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," (disabled), ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," (enabled if possible, disabled otherwise, on a per-segment basis), and ",(0,i.kt)("inlineCode",{parentName:"td"},"force")," (enabled, and groupBy or timeseries queries with virtual columns that cannot be vectorized will fail). The ",(0,i.kt)("inlineCode",{parentName:"td"},'"force"')," setting is meant to aid in testing, and is not generally useful in production. This will override ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.query.default.context.vectorizeVirtualColumns")," if it's set.")))))}h.isMDXComponent=!0}}]);
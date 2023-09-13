"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5615],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=a.createContext({}),l=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(m.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,m=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,g=p["".concat(m,".").concat(d)]||p[d]||u[d]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"segment-optimization",title:"Segment size optimization"},m=void 0,l={unversionedId:"operations/segment-optimization",id:"operations/segment-optimization",title:"Segment size optimization",description:"\x3c!--",source:"@site/docs/latest/operations/segment-optimization.md",sourceDirName:"operations",slug:"/operations/segment-optimization",permalink:"/docs/latest/operations/segment-optimization",draft:!1,tags:[],version:"current",frontMatter:{id:"segment-optimization",title:"Segment size optimization"},sidebar:"docs",previous:{title:"Basic cluster tuning",permalink:"/docs/latest/operations/basic-cluster-tuning"},next:{title:"Mixed workloads",permalink:"/docs/latest/operations/mixed-workloads"}},c={},p=[{value:"Learn more",id:"learn-more",level:2}],u={toc:p},d="wrapper";function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In Apache Druid, it's important to optimize the segment size because"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Druid stores data in segments. If you're using the ",(0,r.kt)("a",{parentName:"li",href:"/docs/latest/ingestion/rollup"},"best-effort roll-up")," mode,\nincreasing the segment size might introduce further aggregation which reduces the dataSource size."),(0,r.kt)("li",{parentName:"ol"},"When a query is submitted, that query is distributed to all Historicals and realtime tasks\nwhich hold the input segments of the query. Each process and task picks a thread from its own processing thread pool\nto process a single segment. If segment sizes are too large, data might not be well distributed between data\nservers, decreasing the degree of parallelism possible during query processing.\nAt the other extreme where segment sizes are too small, the scheduling\noverhead of processing a larger number of segments per query can reduce\nperformance, as the threads that process each segment compete for the fixed\nslots of the processing pool.")),(0,r.kt)("p",null,"It would be best if you can optimize the segment size at ingestion time, but sometimes it's not easy\nespecially when it comes to stream ingestion because the amount of data ingested might vary over time. In this case,\nyou can create segments with a sub-optimized size first and optimize them later using ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/data-management/compaction"},"compaction"),"."),(0,r.kt)("p",null,"You may need to consider the followings to optimize your segments."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Number of rows per segment: it's generally recommended for each segment to have around 5 million rows.\nThis setting is usually ",(0,r.kt)("em",{parentName:"li"},"more"),' important than the below "segment byte size".\nThis is because Druid uses a single thread to process each segment,\nand thus this setting can directly control how many rows each thread processes,\nwhich in turn means how well the query execution is parallelized.'),(0,r.kt)("li",{parentName:"ul"},"Segment byte size: it's recommended to set 300 ~ 700MB. If this value\ndoesn't match with the \"number of rows per segment\", please consider optimizing\nnumber of rows per segment rather than this value.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"}," The above recommendation works in general, but the optimal setting can\nvary based on your workload. For example, if most of your queries\nare heavy and take a long time to process each row, you may want to make\nsegments smaller so that the query processing can be more parallelized.\nIf you still see some performance issue after optimizing segment size,\nyou may need to find the optimal settings for your workload.")),(0,r.kt)("p",null,"There might be several ways to check if the compaction is necessary. One way\nis using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-metadata-tables#system-schema"},"System Schema"),". The\nsystem schema provides several tables about the current system status including the ",(0,r.kt)("inlineCode",{parentName:"p"},"segments")," table.\nBy running the below query, you can get the average number of rows and average size for published segments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT\n  "start",\n  "end",\n  version,\n  COUNT(*) AS num_segments,\n  AVG("num_rows") AS avg_num_rows,\n  SUM("num_rows") AS total_num_rows,\n  AVG("size") AS avg_size,\n  SUM("size") AS total_size\nFROM\n  sys.segments A\nWHERE\n  datasource = \'your_dataSource\' AND\n  is_published = 1\nGROUP BY 1, 2, 3\nORDER BY 1, 2, 3 DESC;\n')),(0,r.kt)("p",null,"Please note that the query result might include overshadowed segments.\nIn this case, you may want to see only rows of the max version per interval (pair of ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"end"),")."),(0,r.kt)("p",null,"Once you find your segments need compaction, you can consider the below two options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Turning on the ",(0,r.kt)("a",{parentName:"li",href:"/docs/latest/design/coordinator#automatic-compaction"},"automatic compaction of Coordinators"),".\nThe Coordinator periodically submits ",(0,r.kt)("a",{parentName:"li",href:"/docs/latest/ingestion/tasks#compact"},"compaction tasks")," to re-index small segments.\nTo enable the automatic compaction, you need to configure it for each dataSource via Coordinator's dynamic configuration.\nFor more information, see ",(0,r.kt)("a",{parentName:"li",href:"/docs/latest/data-management/automatic-compaction"},"Automatic compaction"),"."),(0,r.kt)("li",{parentName:"ul"},"Running periodic Hadoop batch ingestion jobs and using a ",(0,r.kt)("inlineCode",{parentName:"li"},"dataSource"),"\ninputSpec to read from the segments generated by the Kafka indexing tasks. This might be helpful if you want to compact a lot of segments in parallel.\nDetails on how to do this can be found on the ",(0,r.kt)("a",{parentName:"li",href:"/docs/latest/data-management/update"},"Updating existing data")," section\nof the data management page.")),(0,r.kt)("h2",{id:"learn-more"},"Learn more"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For an overview of compaction and how to submit a manual compaction task, see ",(0,r.kt)("a",{parentName:"li",href:"/docs/latest/data-management/compaction"},"Compaction"),"."),(0,r.kt)("li",{parentName:"ul"},"To learn how to enable and configure automatic compaction, see ",(0,r.kt)("a",{parentName:"li",href:"/docs/latest/data-management/automatic-compaction"},"Automatic compaction"),".")))}g.isMDXComponent=!0}}]);
(self.webpackChunkhhow_09_github_io=self.webpackChunkhhow_09_github_io||[]).push([[3676],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=i,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var m=2;m<l;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3606:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var a=n(2122),i=n(9756),l=(n(7294),n(3905)),r=["components"],o={},s={unversionedId:"infra/kustomization-helm-migration",id:"infra/kustomization-helm-migration",isDocsHomePage:!1,title:"Kustomization to Helm 3 Migration",description:"Intro",source:"@site/docs/infra/1-kustomization-helm-migration.md",sourceDirName:"infra",slug:"/infra/kustomization-helm-migration",permalink:"/infra/kustomization-helm-migration",editUrl:"https://github.com/hhow09/hhow09.github.io/blob/source/docs/infra/1-kustomization-helm-migration.md",version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LSM Tree",permalink:"/data-structure/lsm-tree"},next:{title:"Closure",permalink:"/js/js-closure"}},m=[{value:"Intro",id:"intro",children:[]},{value:"Migrate to Helm",id:"migrate-to-helm",children:[{value:"Values",id:"values",children:[]},{value:"Steps",id:"steps",children:[]},{value:"Named Templates",id:"named-templates",children:[]}]},{value:"Notes",id:"notes",children:[{value:"1. Can we specify multiple values in Helm command?",id:"1-can-we-specify-multiple-values-in-helm-command",children:[]},{value:"2. How to compare two YAML files ?",id:"2-how-to-compare-two-yaml-files-",children:[]},{value:"3. Can we dynamically assign Values in Helm command?",id:"3-can-we-dynamically-assign-values-in-helm-command",children:[]},{value:"4. Can we do templating <code>prefix-{{ .Values.foo }}</code> in Value files?",id:"4-can-we-do-templating-prefix--valuesfoo--in-value-files",children:[]},{value:"5. Use Values v.s. Template",id:"5-use-values-vs-template",children:[]},{value:"6. Can Helm escape <code>{{</code> and <code>}}</code>",id:"6-can-helm-escape--and-",children:[]},{value:"7. Can we use some template outside current Chart ?",id:"7-can-we-use-some-template-outside-current-chart-",children:[]}]}],p={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"intro"},"Intro"),(0,l.kt)("p",null,"Currently we are using ",(0,l.kt)("a",{parentName:"p",href:"https://kustomize.io/"},"kustomize")," to manage Kubernetes resources."),(0,l.kt)("p",null,"With a base YAML, there are different dimensions (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"environment"),"s, ",(0,l.kt)("inlineCode",{parentName:"p"},"pool"),"s, ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster"),"s ) of variants we need to apply. The ",(0,l.kt)("strong",{parentName:"p"},"inheritence")," style of architecrue result in nested overlay folder structure like follow. This impairs readability."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 deploy\n\u2502   \u251c\u2500\u2500 hpa.yaml\n\u2502   \u251c\u2500\u2500 deployment.yaml\n\u2502   \u2514\u2500\u2500 kustomization.yaml\n\u251c\u2500\u2500 overlay\n\u2502   \u251c\u2500\u2500 env1\n\u2502   |     \u251c\u2500\u2500 deploy\n\u2502   |     |     \u251c\u2500\u2500 kustomization.yaml\n\u2502   |     |     \u2514\u2500\u2500 patch.yaml\n|   |     \u2514\u2500\u2500 overlay\n\u2502   |           \u251c\u2500\u2500 pool1\n|   |           |       \u251c\u2500\u2500 deploy\n|   |           |       \u2514\u2500\u2500 overlay...\n\u2502   |           \u2514\u2500\u2500 pool2\n\u2502   \u251c\u2500\u2500 env2\n\u2502   \u251c\u2500\u2500 env3\n")),(0,l.kt)("p",null,"Secondly, for template that only different in values like ",(0,l.kt)("inlineCode",{parentName:"p"},"pool"),", for simplicity, we do NOT maintaining every ",(0,l.kt)("inlineCode",{parentName:"p"},"pool")," overlay, instead using placeholders trick (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"__POOL__"),") and replace it after ",(0,l.kt)("inlineCode",{parentName:"p"},"kustomize")," rendered. This makes the logic complex."),(0,l.kt)("h2",{id:"migrate-to-helm"},"Migrate to Helm"),(0,l.kt)("p",null,"After investigating ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm"),", another templating tool with different functionality and concept. The concept is more about ",(0,l.kt)("inlineCode",{parentName:"p"},"composition")," compared to the ",(0,l.kt)("strong",{parentName:"p"},"inheritence")," style of ",(0,l.kt)("a",{parentName:"p",href:"https://kustomize.io/"},"kustomize"),"."),(0,l.kt)("p",null,"Helm and kustomize are not equivilant, Helm can do more than templating. Here I only use the templating funcions to replace kustomize."),(0,l.kt)("p",null,"With Helm we could template with variables and assign variables in different ",(0,l.kt)("strong",{parentName:"p"},"values files"),'. Therefore can "flatten" the overlay structure using values files. In short it is using ',(0,l.kt)("inlineCode",{parentName:"p"},"values")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"template")," logic/functions to replace ",(0,l.kt)("inlineCode",{parentName:"p"},"overlay")," logic."),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/chart_template_guide/values_files/"},"Values")," is one of the ",(0,l.kt)("strong",{parentName:"p"},"built-in objects")," of Helm. It comes from:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"values.yaml")," file in the chart "),(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"values.yaml")," file of a parent chart if this is a subchart"),(0,l.kt)("li",{parentName:"ol"},"Dynamically passed arguments in CLI with ",(0,l.kt)("inlineCode",{parentName:"li"},"--set")," (such as ",(0,l.kt)("inlineCode",{parentName:"li"},"helm install --set foo=bar ./mychart"),")")),(0,l.kt)("h3",{id:"steps"},"Steps"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create Helm ",(0,l.kt)("inlineCode",{parentName:"li"},"Chart"),"s with repect to each base YAML."),(0,l.kt)("li",{parentName:"ol"},"Copy the base YAML into ",(0,l.kt)("inlineCode",{parentName:"li"},"Chart")," ",(0,l.kt)("inlineCode",{parentName:"li"},"templates")),(0,l.kt)("li",{parentName:"ol"},"Convert kustomize ",(0,l.kt)("inlineCode",{parentName:"li"},"overlays")," into ",(0,l.kt)("inlineCode",{parentName:"li"},"Values")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"named template")," logics.",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"value files naming convention ",(0,l.kt)("inlineCode",{parentName:"li"},"value-${env}-${pool}-${cluster}"),", refering to original overlay logic but a flattened version."),(0,l.kt)("li",{parentName:"ol"},"migrate ",(0,l.kt)("inlineCode",{parentName:"li"},"env")," overlays into ",(0,l.kt)("inlineCode",{parentName:"li"},"values-{env}.yaml")),(0,l.kt)("li",{parentName:"ol"},"migrate ",(0,l.kt)("inlineCode",{parentName:"li"},"pool")," overlays into ",(0,l.kt)("inlineCode",{parentName:"li"},"values-{env}-{pool}.yaml")))),(0,l.kt)("li",{parentName:"ol"},"Test the output, compare with existing ones.")),(0,l.kt)("h3",{id:"named-templates"},"Named Templates"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/chart_template_guide/named_templates/"},"Named Templates"),"\nWhere does template ",(0,l.kt)("inlineCode",{parentName:"p"},'{{ include "some_template" . }}')," come from ?"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"template file ",(0,l.kt)("inlineCode",{parentName:"li"},"_helpers.tpl")),(0,l.kt)("li",{parentName:"ol"},"defined in ",(0,l.kt)("inlineCode",{parentName:"li"},"template")," files")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'{{ define "MY.NAME" }}\n  # body of template here\n{{ end }}\n')),(0,l.kt)("h2",{id:"notes"},"Notes"),(0,l.kt)("h3",{id:"1-can-we-specify-multiple-values-in-helm-command"},"1. Can we specify multiple values in Helm command?"),(0,l.kt)("p",null,"Yes, with ",(0,l.kt)("inlineCode",{parentName:"p"},"helm template chartName -f my-first-value.yaml -f my-second-value.yaml...")," and the priority would from right to left. Helm will merge value files for us. "),(0,l.kt)("p",null,"Therefore we can minimize the duplication of values files"),(0,l.kt)("h3",{id:"2-how-to-compare-two-yaml-files-"},"2. How to compare two YAML files ?"),(0,l.kt)("p",null,"During migration, we need to ensure the new method has exactly same output as original one.\nWith 2 YAMLs with ",(0,l.kt)("strong",{parentName:"p"},"effectively")," same contents, fields or array could be different in order. There is no simple way to compare if two YAMLs are ",(0,l.kt)("strong",{parentName:"p"},"effectively")," same. "),(0,l.kt)("h4",{id:"solution-1"},"Solution 1"),(0,l.kt)("p",null,"Noted that ",(0,l.kt)("a",{parentName:"p",href:"http://yaml.org/spec/1.2-old/spec.html#id2759572"},"YAML is a superset of JSON"),'. So "every JSON file is also a valid YAML file". '),(0,l.kt)("p",null,"We could compare two YAMLs with 1) convert YAML to JSON 2) sort some specific keys 3) perform ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/xlwings/jsondiff"},"json diff")),(0,l.kt)("h4",{id:"solution-2"},"Solution 2"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/homeport/dyff"},"dyff"),": A diff tool for YAML files, and sometimes JSON"),(0,l.kt)("h3",{id:"3-can-we-dynamically-assign-values-in-helm-command"},"3. Can we dynamically assign Values in Helm command?"),(0,l.kt)("p",null,"Yes, ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/chart_template_guide/values_files/"},"reference"),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"helm template --set foo=bar ./mychart")," "),(0,l.kt)("h3",{id:"4-can-we-do-templating-prefix--valuesfoo--in-value-files"},"4. Can we do templating ",(0,l.kt)("inlineCode",{parentName:"h3"},"prefix-{{ .Values.foo }}")," in Value files?"),(0,l.kt)("p",null,"No, templating only works in ",(0,l.kt)("inlineCode",{parentName:"p"},"template")," files (a.k.a ",(0,l.kt)("inlineCode",{parentName:"p"},"templates")," folder inside Chart)"),(0,l.kt)("h3",{id:"5-use-values-vs-template"},"5. Use Values v.s. Template"),(0,l.kt)("p",null,"Yaml files are key-value pairs."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"if different situation only differ in value, simply use ",(0,l.kt)("inlineCode",{parentName:"li"},"Values")),(0,l.kt)("li",{parentName:"ol"},"if different situation also different in fields, we can ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"if value is simple key-value pair (just like ",(0,l.kt)("inlineCode",{parentName:"li"},"new HashMap<String, String>"),", or ",(0,l.kt)("inlineCode",{parentName:"li"},"List<Map>"),"), we could use golang ",(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/docs/chart_template_guide/control_structures/"},"template functions")," like ",(0,l.kt)("inlineCode",{parentName:"li"},"range"))),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"{{- range $key, $val := .Values.kvpairs }}\n    {{ $key }}: {{ $val }}\n{{- end }}\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"if logic is more complex we could define ",(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/docs/chart_template_guide/named_templates/"},"Named Templates")," in ",(0,l.kt)("inlineCode",{parentName:"li"},"_helpers.tpl")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"include")," it for certain condition.")))),(0,l.kt)("h3",{id:"6-can-helm-escape--and-"},"6. Can Helm escape ",(0,l.kt)("inlineCode",{parentName:"h3"},"{{")," and ",(0,l.kt)("inlineCode",{parentName:"h3"},"}}")),(0,l.kt)("p",null,"Yes, in template."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ref: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/helm/helm/issues/2798"},"Can Helm support to ignore {{expr}} which is just for configuration but not render?"))),(0,l.kt)("h3",{id:"7-can-we-use-some-template-outside-current-chart-"},"7. Can we use some template outside current Chart ?"),(0,l.kt)("p",null,"Yes, see ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/library_charts/"},"Library Charts")))}u.isMDXComponent=!0}}]);
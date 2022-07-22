(self.webpackChunkhhow_09_github_io=self.webpackChunkhhow_09_github_io||[]).push([[216],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return c}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return n?i.createElement(h,r(r({ref:t},d),{},{components:n})):i.createElement(h,r({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2247:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var i=n(2122),a=n(9756),o=(n(7294),n(3905)),r=["components"],l={},s={unversionedId:"db/dynamodb-modeling",id:"db/dynamodb-modeling",isDocsHomePage:!1,title:"How to model one-to-many relationships in DynamoDB",description:"Original Post",source:"@site/docs/db/1-dynamodb-modeling.md",sourceDirName:"db",slug:"/db/dynamodb-modeling",permalink:"/db/dynamodb-modeling",editUrl:"https://github.com/hhow09/hhow09.github.io/blob/source/docs/db/1-dynamodb-modeling.md",version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LSM Tree",permalink:"/data-structure/lsm-tree"},next:{title:"Transaction Phenomenas",permalink:"/db/transaction-phenomena"}},p=[{value:"Original Post",id:"original-post",children:[]},{value:"Basics of one-to-many relationships",id:"basics-of-one-to-many-relationships",children:[{value:"How do I fetch information about the parent entity when retrieving one or more of the related entities?",id:"how-do-i-fetch-information-about-the-parent-entity-when-retrieving-one-or-more-of-the-related-entities",children:[]}]},{value:"Denormalization by using a complex attribute",id:"denormalization-by-using-a-complex-attribute",children:[{value:"Example",id:"example",children:[]},{value:"When to use",id:"when-to-use",children:[]}]},{value:"Denormalization by duplicating data",id:"denormalization-by-duplicating-data",children:[{value:"Example",id:"example-1",children:[]},{value:"When to use",id:"when-to-use-1",children:[]}]},{value:"Composite primary key + the Query API action",id:"composite-primary-key--the-query-api-action",children:[{value:"Example",id:"example-2",children:[]},{value:"It can support",id:"it-can-support",children:[]}]},{value:"Secondary index + the Query API action",id:"secondary-index--the-query-api-action",children:[{value:"Example - using Composite primary key + the Query API action",id:"example---using-composite-primary-key--the-query-api-action",children:[]},{value:"Example Secondary index",id:"example-secondary-index",children:[]},{value:"When to use",id:"when-to-use-2",children:[]}]},{value:"Composite sort keys with hierarchical data",id:"composite-sort-keys-with-hierarchical-data",children:[{value:"Example",id:"example-3",children:[]},{value:"access pattern",id:"access-pattern",children:[]},{value:"When to use",id:"when-to-use-3",children:[]}]}],d={toc:p};function m(e){var t=e.components,l=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"original-post"},"Original Post"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.alexdebrie.com/posts/dynamodb-one-to-many/"},"How to model one-to-many relationships in DynamoDB")),(0,o.kt)("h2",{id:"basics-of-one-to-many-relationships"},"Basics of one-to-many relationships"),(0,o.kt)("h3",{id:"how-do-i-fetch-information-about-the-parent-entity-when-retrieving-one-or-more-of-the-related-entities"},"How do I fetch information about the parent entity when retrieving one or more of the related entities?"),(0,o.kt)("h4",{id:"in-rdb"},"in RDB"),(0,o.kt)("p",null,"using a foreign key in one table to refer to a record in another table and using a SQL ",(0,o.kt)("inlineCode",{parentName:"p"},"JOIN")," at query time to combine the two tables."),(0,o.kt)("h4",{id:"in-nosql"},"in NoSQL"),(0,o.kt)("p",null,"there are multiple ways depending on the ",(0,o.kt)("strong",{parentName:"p"},"access pattern"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Denormalization by using a complex attribute"),(0,o.kt)("li",{parentName:"ol"},"Denormalization by duplicating data"),(0,o.kt)("li",{parentName:"ol"},"Composite primary key + the Query API action"),(0,o.kt)("li",{parentName:"ol"},"Secondary index + the Query API action"),(0,o.kt)("li",{parentName:"ol"},"Composite sort keys with hierarchical data")),(0,o.kt)("h2",{id:"denormalization-by-using-a-complex-attribute"},"Denormalization by using a complex attribute"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"MANY")," entity is an attribute of list type inside ",(0,o.kt)("strong",{parentName:"p"},"ONE")," (parent)"),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"a customer might have multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"Address")),(0,o.kt)("h4",{id:"in-sql"},"in SQL"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"1-sql",src:n(400).Z})),(0,o.kt)("h4",{id:"in-nosql-1"},"in NoSQL"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"1-nosql",src:n(4615).Z})),(0,o.kt)("h3",{id:"when-to-use"},"When to use"),(0,o.kt)("h4",{id:"1-do-you-have-any-access-patterns-based-on-the-values-in-the-complex-attribute"},"1. Do you have any access patterns based on the values in the complex attribute?"),(0,o.kt)("p",null,"No, In this example we don't need to ",(0,o.kt)("strong",{parentName:"p"},"Fetch a Customer by his or her mailing address"),". "),(0,o.kt)("h4",{id:"2-is-the-amount-of-data-in-the-complex-attribute-unbounded"},"2. Is the amount of data in the complex attribute unbounded?"),(0,o.kt)("p",null,"No, In this example the amount of address is limited."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A single DynamoDB item cannot exceed 400KB of data.")),(0,o.kt)("p",null,"If it might grows unbounded, we should separate to single table."),(0,o.kt)("h2",{id:"denormalization-by-duplicating-data"},"Denormalization by duplicating data"),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("strong",{parentName:"p"},"ONE")," into the attribute of ",(0,o.kt)("strong",{parentName:"p"},"MANY")),(0,o.kt)("h3",{id:"example-1"},"Example"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Book")," Table might have duplicate ",(0,o.kt)("inlineCode",{parentName:"p"},"Auther")," value. "),(0,o.kt)("h4",{id:"in-sql-1"},"in SQL"),(0,o.kt)("p",null,"by ",(0,o.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/second-normal-form-2nf/"},"2nd normal form")," we should save ",(0,o.kt)("inlineCode",{parentName:"p"},"Auther"),"in a single table and ",(0,o.kt)("strong",{parentName:"p"},"JOIN")," the author data when reading it.\n",(0,o.kt)("img",{alt:"2-sql",src:n(2674).Z})),(0,o.kt)("h4",{id:"in-nosql-2"},"in NoSQL"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If data is immutable"),", we should directly save ",(0,o.kt)("inlineCode",{parentName:"p"},"Auther")," in the attribute of ",(0,o.kt)("inlineCode",{parentName:"p"},"Book")," Table."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"2-nosql",src:n(5667).Z})),(0,o.kt)("h3",{id:"when-to-use-1"},"When to use"),(0,o.kt)("h4",{id:"1-is-the-duplicated-information-immutable"},"1. Is the duplicated information immutable?"),(0,o.kt)("h4",{id:"2-if-the-data-does-change-how-often-does-it-change-and-how-many-items-include-the-duplicated-information"},"2. If the data does change, how often does it change and how many items include the duplicated information?"),(0,o.kt)("p",null,"It will make ",(0,o.kt)("strong",{parentName:"p"},"UPDATE")," operation complex and inefficient. "),(0,o.kt)("p",null,"However if it's read heavy, it still worthy."),(0,o.kt)("h2",{id:"composite-primary-key--the-query-api-action"},"Composite primary key + the Query API action"),(0,o.kt)("p",null,"with ",(0,o.kt)("inlineCode",{parentName:"p"},"Partition Overloading"),", save ",(0,o.kt)("strong",{parentName:"p"},"ONE")," and ",(0,o.kt)("strong",{parentName:"p"},"MANY")," in single table without hierarchy."),(0,o.kt)("h3",{id:"example-2"},"Example"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ORG")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"USER")," is one-to-many relationship"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ORG")," as ",(0,o.kt)("strong",{parentName:"li"},"Partition Key")," and overloading multiple entity type in ",(0,o.kt)("strong",{parentName:"li"},"sort key")," such as ",(0,o.kt)("inlineCode",{parentName:"li"},"METADATA")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"USER"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"3-nosql",src:n(3191).Z})),(0,o.kt)("h3",{id:"it-can-support"},"It can support"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Retrieve an Organization."),(0,o.kt)("li",{parentName:"ol"},"Retrieve an Organization and all Users within the Organization."),(0,o.kt)("li",{parentName:"ol"},"Retrieve only the Users within an Organization."),(0,o.kt)("li",{parentName:"ol"},"Retrieve a specific User. ( If you know both the Organization name and the User\u2019s username)")),(0,o.kt)("h2",{id:"secondary-index--the-query-api-action"},"Secondary index + the Query API action"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Multiple levels of one-many relationship"),(0,o.kt)("li",{parentName:"ul"},"When searching at a particular level in the hierarchy, you ",(0,o.kt)("strong",{parentName:"li"},"DO NOT")," want all subitems in that level rather than just the items in that level.")),(0,o.kt)("h3",{id:"example---using-composite-primary-key--the-query-api-action"},"Example - using Composite primary key + the Query API action"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"4-nosql",src:n(9229).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Multiple levels of ",(0,o.kt)("strong",{parentName:"li"},"one-many")," relationship: E.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"ORG")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"USER")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Tickets")),(0,o.kt)("li",{parentName:"ul"},"For 1st level, ",(0,o.kt)("inlineCode",{parentName:"li"},"ORG")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"USER")," we could deal with ",(0,o.kt)("inlineCode",{parentName:"li"},"Composite primary key + the Query API action"),". Then primary key of ",(0,o.kt)("inlineCode",{parentName:"li"},"User")," becomes ",(0,o.kt)("inlineCode",{parentName:"li"},"ORG#<OrgName>#USER#<UserName>")),(0,o.kt)("li",{parentName:"ul"},"For 2nd level, ",(0,o.kt)("inlineCode",{parentName:"li"},"USER")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Tickets"),", If we keep adding the composite primary key, primary key of ",(0,o.kt)("inlineCode",{parentName:"li"},"Ticket")," becomes ",(0,o.kt)("inlineCode",{parentName:"li"},"ORG#<OrgName>#USER#<UserName>#Ticket#<TicketId>"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"However in this design, we may also get lots of ",(0,o.kt)("inlineCode",{parentName:"li"},"Ticket")," when querying by ",(0,o.kt)("inlineCode",{parentName:"li"},"ORG")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"USER"),".")),(0,o.kt)("h3",{id:"example-secondary-index"},"Example Secondary index"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"4-nosql 2",src:n(3134).Z}),"\n",(0,o.kt)("img",{alt:"4-nosql 3",src:n(4639).Z})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Model ",(0,o.kt)("strong",{parentName:"li"},"Ticket")," items to be in a separate item collection."),(0,o.kt)("li",{parentName:"ol"},"Create a global secondary index (",(0,o.kt)("strong",{parentName:"li"},"GSI"),") named ",(0,o.kt)("inlineCode",{parentName:"li"},"GSI1")," whose keys are ",(0,o.kt)("inlineCode",{parentName:"li"},"GSI1PK")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"GSI1SK"),"."),(0,o.kt)("li",{parentName:"ol"},"For both our ",(0,o.kt)("inlineCode",{parentName:"li"},"Ticket")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"User")," items, add values for ",(0,o.kt)("inlineCode",{parentName:"li"},"GSI1PK")," (",(0,o.kt)("inlineCode",{parentName:"li"},"ORG#<OrgName>#USER#<UserName>"),").")),(0,o.kt)("p",null,"Then we could access ",(0,o.kt)("inlineCode",{parentName:"p"},"User - Tickets")," items with ",(0,o.kt)("inlineCode",{parentName:"p"},"GSI"),"."),(0,o.kt)("h3",{id:"when-to-use-2"},"When to use"),(0,o.kt)("p",null,"When you don't want to change the original access access pattern: you don't need ",(0,o.kt)("inlineCode",{parentName:"p"},"Ticket")," when querying ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"Org"),", we could use ",(0,o.kt)("strong",{parentName:"p"},"GSI"),"."),(0,o.kt)("h2",{id:"composite-sort-keys-with-hierarchical-data"},"Composite sort keys with hierarchical data"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Multiple levels of ",(0,o.kt)("strong",{parentName:"li"},"one-many")," relationship."),(0,o.kt)("li",{parentName:"ul"},"When searching at a particular level in the hierarchy, you want all subitems in that level rather than just the items in that level.")),(0,o.kt)("h3",{id:"example-3"},"Example"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"5-nosql",src:n(9270).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Multiple levels of ",(0,o.kt)("strong",{parentName:"li"},"one-many")," relationship: E.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"Country")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"State")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"City")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"ZIP"))),(0,o.kt)("h3",{id:"access-pattern"},"access pattern"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Find all locations in a given ",(0,o.kt)("inlineCode",{parentName:"li"},"country"),". Use a Query with a key condition expression of ",(0,o.kt)("inlineCode",{parentName:"li"},"PK = <Country>"),", where Country is the country you want."),(0,o.kt)("li",{parentName:"ol"},"Find all locations in a given country and state. Use a Query with a condition expression of ",(0,o.kt)("inlineCode",{parentName:"li"},"PK = <Country> AND begins_with(SK, '<State>#'"),"."),(0,o.kt)("li",{parentName:"ol"},"Find all locations in a given country, state, and city. Use a Query with a condition expression of ",(0,o.kt)("inlineCode",{parentName:"li"},"PK = <Country> AND begins_with(SK, '<State>#<City>'"),"."),(0,o.kt)("li",{parentName:"ol"},"Find all locations in a given country, state, city, and zip code. Use a Query with a condition expression of ",(0,o.kt)("inlineCode",{parentName:"li"},"PK = <Country> AND begins_with(SK, '<State>#<City>#<ZipCode>'"),".")),(0,o.kt)("h3",{id:"when-to-use-3"},"When to use"),(0,o.kt)("p",null,"When searching at a particular level in the hierarchy, you want all subitems in that level rather than just the items in that level."))}m.isMDXComponent=!0},4615:function(e,t,n){"use strict";t.Z=n.p+"assets/images/1-nosql-be32215919e64f970ac6a56987ab480e.png"},400:function(e,t,n){"use strict";t.Z=n.p+"assets/images/1-sql-5356f1af59b7f6a4db5eb2b82ee67b1b.png"},5667:function(e,t,n){"use strict";t.Z=n.p+"assets/images/2-nosql-9c8688c2f25fd50538dee0c5bbdbdd05.png"},2674:function(e,t,n){"use strict";t.Z=n.p+"assets/images/2-sql-38550739f3962205d4900d6e90217c21.png"},3191:function(e,t,n){"use strict";t.Z=n.p+"assets/images/3-nosql-d130fdd004150b191d202e326c6d45a4.png"},9229:function(e,t,n){"use strict";t.Z=n.p+"assets/images/4-nosql-a3ec4daa12bce9aec133e48f496a66e8.png"},3134:function(e,t,n){"use strict";t.Z=n.p+"assets/images/4-nosql2-2d0e5ecd4167de97ab8ea3abe38f811f.png"},4639:function(e,t,n){"use strict";t.Z=n.p+"assets/images/4-nosql3-6362a8373c93d3bee9cfe87ef3d1cad6.png"},9270:function(e,t,n){"use strict";t.Z=n.p+"assets/images/5-nosql-514ad42ba75632300d4245af6e24646a.png"}}]);
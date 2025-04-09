"use strict";(self.webpackChunkdocs_fintesk_com=self.webpackChunkdocs_fintesk_com||[]).push([[7396],{28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}},52977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"developers/core-api-concepts/changes-to-the-api","title":"Changes to the API","description":"Fintesk\u2019s API together with our Developer Platform is constantly evolving to cover additional product functionality. By introducing changes to the API, we aim to enhance your API experience by adding new features and functionality.","source":"@site/docs/developers/core-api-concepts/changes-to-the-api.md","sourceDirName":"developers/core-api-concepts","slug":"/developers/core-api-concepts/changes-to-the-api","permalink":"/developers/core-api-concepts/changes-to-the-api","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Developers","permalink":"/tags/developers"},{"inline":true,"label":"Fintesk Api","permalink":"/tags/fintesk-api"},{"inline":true,"label":"Core Api Concepts","permalink":"/tags/core-api-concepts"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1740182400000,"sidebarPosition":2,"frontMatter":{"id":"changes-to-the-api","title":"Changes to the API","sidebar_position":2,"tags":["Developers","Fintesk Api","Core Api Concepts"],"last_update":{"date":"2025-02-22T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"About the Fintesk API","permalink":"/developers/core-api-concepts/core-api-concepts-about-fintesk-api"},"next":{"title":"Requests","permalink":"/developers/core-api-concepts/core-api-concepts-requests"}}');var s=n(74848),r=n(28453);const a={id:"changes-to-the-api",title:"Changes to the API",sidebar_position:2,tags:["Developers","Fintesk Api","Core Api Concepts"],last_update:{date:new Date("2025-02-22T00:00:00.000Z"),author:"Fabrizzio Andrioli"}},o="Changes to the API",l={},d=[{value:"Types of changes",id:"types-of-changes",level:2}];function c(e){const t={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",header:"header",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"changes-to-the-api",children:"Changes to the API"})}),"\n",(0,s.jsx)(t.p,{children:"Fintesk\u2019s API together with our Developer Platform is constantly evolving to cover additional product functionality. By introducing changes to the API, we aim to enhance your API experience by adding new features and functionality."}),"\n",(0,s.jsx)(t.p,{children:"Do take note that from time to time, we may introduce breaking changes in order to improve the API. Read on to find out how we communicate changes and what types of changes we introduce."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["All changes to the Fintesk API are announced via our ",(0,s.jsx)(t.a,{href:"../../fintesk/changelog",children:"Changelog"}),". Make sure to subscribe to stay up to date!"]})}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["Occasionally, we announce new API endpoints in the ",(0,s.jsx)(t.strong,{children:"Beta version"})," with the goal of gathering customer feedback. Please note that Beta endpoints may be subject to breaking changes."]})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"types-of-changes",children:"Types of changes"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"#types-of-changes"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"Changes to the Fintesk API can be divided into breaking and non-breaking changes."}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.strong,{children:"breaking change"})," is a backward incompatible change that may require updating your app.",(0,s.jsx)(t.br,{}),"\n","A ",(0,s.jsx)(t.strong,{children:"non-breaking change"})," is typically a new addition to the API that can be implemented at your own pace and choosing."]}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["We aim to announce ",(0,s.jsx)(t.strong,{children:"breaking changes"})," via our ",(0,s.jsx)(t.a,{href:"../../fintesk/changelog",children:"Changelog"})," at least ",(0,s.jsx)(t.strong,{children:"60 days"})," in advance to give you adequate time to adopt the changes."]})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Breaking changes"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Non-breaking changes"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Removing a resource"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Adding a new endpoint"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Removing an endpoint"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Adding a new optional parameter"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Removing a parameter"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Adding a new response field"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Removing a response field"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Changing the order of response fields"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Modifying an endpoint\u2019s URI"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Changing an error message"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Modifying the name of a parameter or field"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Fixing an HTTP response code"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Modifying required parameters"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Adding a required parameter"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Changing the data type of an existing field or parameter"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Reducing API limits"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Restricting OAuth scopes"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Introducing a new validation"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);
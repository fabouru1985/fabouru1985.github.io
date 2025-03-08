"use strict";(self.webpackChunkdocs_fintesk_com=self.webpackChunkdocs_fintesk_com||[]).push([[6881],{52264:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"kb/importing-data/importing-data-into-fintesk-with-spreadsheets","title":"Importing data into Fintesk with spreadsheets","description":"You can import your data to Fintesk from XLS, XLSX and CSV spreadsheet files, allowing you to add deals, organizations, persons, products, notes and activities all at the same time.","source":"@site/docs/kb/importing-data/importing-data-into-fintesk-with-spreadsheets.md","sourceDirName":"kb/importing-data","slug":"/kb/importing-data/importing-data-into-fintesk-with-spreadsheets","permalink":"/kb/importing-data/importing-data-into-fintesk-with-spreadsheets","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Getting started","permalink":"/tags/getting-started"},{"inline":true,"label":"Importing data","permalink":"/tags/importing-data"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1741132800000,"sidebarPosition":2,"frontMatter":{"id":"importing-data-into-fintesk-with-spreadsheets","title":"Importing data into Fintesk with spreadsheets","sidebar_position":2,"tags":["Getting started","Importing data"],"last_update":{"date":"2025-03-05T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Changing the field type of a custom field","permalink":"/kb/importing-data/changing-the-field-type-of-a-custom-field"},"next":{"title":"Import fields","permalink":"/kb/importing-data/import-fields"}}');var s=i(74848),r=i(28453);const a={id:"importing-data-into-fintesk-with-spreadsheets",title:"Importing data into Fintesk with spreadsheets",sidebar_position:2,tags:["Getting started","Importing data"],last_update:{date:new Date("2025-03-05T00:00:00.000Z"),author:"Fabrizzio Andrioli"}},o=void 0,d={},l=[{value:"Getting ready for an import",id:"getting-ready-for-an-import",level:2},{value:"Mandatory fields",id:"mandatory-fields",level:2},{value:"Custom fields",id:"custom-fields",level:2},{value:"Initiating your import",id:"initiating-your-import",level:2},{value:"After your import",id:"after-your-import",level:2}];function c(e){const t={a:"a",admonition:"admonition",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["You can import your data to Fintesk from XLS, XLSX and CSV spreadsheet files, allowing you to add ",(0,s.jsx)(t.a,{href:"../../kb/deals/deals-what-they-are-and-how-to-add-them",children:"deals"}),", ",(0,s.jsx)(t.a,{href:"../../kb/contacts/contacts-persons-and-organizations",children:"organizations"}),", ",(0,s.jsx)(t.a,{href:"../../kb/contacts/contacts-persons-and-organizations",children:"persons"}),", ",(0,s.jsx)(t.a,{href:"../../kb/products",children:"products"}),", ",(0,s.jsx)(t.a,{href:"../../kb/detail-view/how-can-i-add-notes-to-a-deal-or-contact",children:"notes"})," and ",(0,s.jsx)(t.a,{href:"../../kb/activities",children:"activities"})," all at the same time."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," Importing data into Fintesk is only available for users with the correct global permission enabled."]})}),"\n",(0,s.jsxs)(t.p,{children:["Before getting started, check out our article on ",(0,s.jsx)(t.a,{href:"/",children:"how your data is organized"})," in Fintesk. It\u2019s important to understand how the data you\u2019re importing will fit into the Fintesk data structure."]}),"\n",(0,s.jsxs)(t.p,{children:["Download our sample spreadsheet ",(0,s.jsx)(t.a,{href:"../../kb/importing-data/importing-sample-import-spreadsheets",children:"here"})," for a practice import."]}),"\n",(0,s.jsxs)(t.p,{children:["You can also read more about CRM data import and export in ",(0,s.jsx)(t.a,{href:"https://www.fintesk.com/es/caracteristicas/importacion-exportacion-de-datos?utm_source=fintesk-docs",children:"this post"}),"."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"getting-ready-for-an-import",children:"Getting ready for an import"}),"\n",(0,s.jsx)(t.p,{children:"Before you import, consider the data you\u2019re adding to Fintesk and format your spreadsheet accordingly."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Are you trying to import a list of contacts (persons and organizations?)"}),"\n",(0,s.jsx)(t.li,{children:"Do you want to import contacts and create an open deal for each one?"}),"\n",(0,s.jsx)(t.li,{children:"Do you want to import contacts, open deals, and create activities for those deals?"}),"\n",(0,s.jsx)(t.li,{children:"Do you want to import contacts, open deals with activities, and attach notes?"}),"\n",(0,s.jsx)(t.li,{children:"Or open new deals for contacts that already exist in Fintesk?"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Some spreadsheet formatting tips:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Remove formulas \u2013"})," Use a fresh spreadsheet without any formulas. If you have a spreadsheet that uses formulas or data-linking to generate the contents of a cell, copy the data from your spreadsheet into a fresh sheet without the formulas."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"One tab per spreadsheet \u2013"})," Your spreadsheet should only have one tab containing data. If your spreadsheet has more than one tab, copy and paste the tabs into individual files and import them one at a time."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"No special symbols \u2013"})," Your spreadsheet can\u2019t have symbols for numeric or monetary fields. For example, a column for deal value should just include the number \u201c100\u201d and not the symbol \u201c$100\u201d."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Spreadsheet size limit \u2013"})," There is no maximum limit on the number of spreadsheet columns, but the maximum file size is 50MB, with a limit of 50,000 rows per spreadsheet."]}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"mandatory-fields",children:"Mandatory fields"}),"\n",(0,s.jsx)(t.p,{children:"When importing data to Fintesk from a spreadsheet, include the mandatory fields for each item. Each mandatory field needs a separate column in your spreadsheet mapped to the corresponding field in Fintesk."}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," If you don\u2019t import your data with the mandatory fields, it will create no items, and a ",(0,s.jsx)(t.a,{href:"../../kb/importing-data/importing-errors-and-skip-files",children:"skip file"})," will be generated."]})}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"To import"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"You need these mandatory fields"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Deals"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Any deal field"}),"\n",(0,s.jsx)(t.li,{children:"Person name OR organization name"}),"\n",(0,s.jsx)(t.li,{children:"(deal title recommended)"}),"\n"]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Persons"})}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Person name"}),"\n"]}),(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," Email and phone are recommended for avoiding duplicates"]})})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Organization"})}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Organization name"}),"\n"]}),(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," Address is recommended for avoiding duplicates"]})})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Products"})}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Product name"}),"\n"]}),(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," Product Code is recommended for avoiding duplicates"]})})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Notes"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Content"}),"\n",(0,s.jsx)(t.li,{children:"Deal, contact, OR lead information"}),"\n"]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Activities"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Any activity field"}),"\n"]})})]})]})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"custom-fields",children:"Custom fields"}),"\n",(0,s.jsx)(t.p,{children:"If your spreadsheet has data for deals or contacts that isn\u2019t covered by default fields, add a custom field before importing so your data has somewhere to be mapped."}),"\n",(0,s.jsx)(t.p,{children:"For example, \u201cjob title\u201d is not a default field in Fintesk. To include this information in your import, create a custom person field, then map the spreadsheet column to the newly created field. We recommend a text or single option field."}),"\n",(0,s.jsxs)(t.p,{children:["You can also create custom fields during the mapping stage of your import. Learn more about custom fields in ",(0,s.jsx)(t.a,{href:"../../kb/data-fields/custom-fields",children:"this article"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"idf01",src:i(40949).A+"",width:"530",height:"322"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"initiating-your-import",children:"Initiating your import"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Step 1: Upload your file"})}),"\n",(0,s.jsxs)(t.p,{children:["Go to \u201c",(0,s.jsx)(t.strong,{children:"..."}),"\u201d ",(0,s.jsx)(t.strong,{children:"(More)> Import data >"})," ",(0,s.jsxs)(t.a,{href:"https://app.fintesk.com/tools/import#history",children:[(0,s.jsx)(t.strong,{children:"From a spreadsheet"}),"."]})," Click ",(0,s.jsx)(t.strong,{children:"'From a spreadsheet'"})," and select the file you intend to import. Fintesk supports Excel (.xls and .xlsx) and .csv files."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"idf02",src:i(39092).A+"",width:"1260",height:"385"}),"\n",(0,s.jsx)(t.strong,{children:"Step 2: Mapping"})]}),"\n",(0,s.jsx)(t.p,{children:"To import your data to Fintesk, map each column in your spreadsheet to the relevant icon and field in the mapping step. You can hover over the icon to see what type of data it refers to in Fintesk."}),"\n",(0,s.jsx)(t.p,{children:"The auto-recognition feature will automatically match the column header to the fields in Fintesk. Any unrecognized fields must be dragged from the Fintesk fields (right) to their appropriate spreadsheet columns (left). Use the search bar to find Fintesk field names more easily."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"idf03",src:i(23209).A+"",width:"1268",height:"884"}),"\n",(0,s.jsx)(t.strong,{children:"Note:"})," You can learn more about mapping in ",(0,s.jsx)(t.a,{href:"../../kb/importing-data/importing-mapping-your-fields",children:"this article"})," or advanced mapping in ",(0,s.jsx)(t.a,{href:"../../kb/importing-data/importing-advanced-mapping",children:"this article"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Once you are finished mapping, click \u201c",(0,s.jsx)(t.strong,{children:"Next"}),".\u201d"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Step 3: Preview and finish"})}),"\n",(0,s.jsxs)(t.p,{children:["In the next window, choose what to do if duplicates are found in your spreadsheet. If Fintesk detects a duplicate record in your spreadsheet or Fintesk data, it will consolidate this into one entry. You can learn more about how Fintesk detects duplicates during importing in ",(0,s.jsx)(t.a,{href:"../../kb/importing-data/how-to-avoid-duplicates-during-an-import",children:"this article"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"idf04",src:i(44058).A+"",width:"1259",height:"381"}),"\nThis page also shows a preview of your data after the import."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"idf05",src:i(24097).A+"",width:"1259",height:"789"}),"\nOnce you\u2019ve previewed your import, select \u201c",(0,s.jsx)(t.strong,{children:"Start import"}),".\u201d"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"after-your-import",children:"After your import"}),"\n",(0,s.jsx)(t.p,{children:"After your import, you will see a confirmation page with an overview of the imported data."}),"\n",(0,s.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},40949:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/idf01-de7d079279c949d473e7b21bdbd033ed.jpeg"},39092:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/idf02-5065cce2468e44770522cba99fb59e74.jpeg"},23209:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/idf03-56c7c83b548fc7b3d9055e5a9f89c96d.gif"},44058:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/idf04-49de74b34690222102e90e01dc211e2d.jpeg"},24097:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/idf05-04be7a961da7c3b0e88cb38d4bb0f220.jpeg"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(96540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
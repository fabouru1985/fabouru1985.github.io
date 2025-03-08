"use strict";(self.webpackChunkdocs_fintesk_com=self.webpackChunkdocs_fintesk_com||[]).push([[6736],{31754:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"developers/core-api-concepts/core-api-concepts-custom-fields","title":"Custom fields","description":"Custom fields allow you to add additional data to your Fintesk account that isn\'t included by default. Each deal, organization, person, and product item can contain custom fields. We have 16 different field types available, each with its own uses.","source":"@site/docs/developers/core-api-concepts/core-api-concepts-custom-fields.md","sourceDirName":"developers/core-api-concepts","slug":"/developers/core-api-concepts/core-api-concepts-custom-fields","permalink":"/developers/core-api-concepts/core-api-concepts-custom-fields","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Developers","permalink":"/tags/developers"},{"inline":true,"label":"Fintesk Api","permalink":"/tags/fintesk-api"},{"inline":true,"label":"Core Api Concepts","permalink":"/tags/core-api-concepts"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1740182400000,"sidebarPosition":8,"frontMatter":{"id":"core-api-concepts-custom-fields","title":"Custom fields","sidebar_position":8,"tags":["Developers","Fintesk Api","Core Api Concepts"],"last_update":{"date":"2025-02-22T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"HTTP status codes","permalink":"/developers/core-api-concepts/core-api-concepts-http-status-codes"},"next":{"title":"Knowledge Base","permalink":"/category/knowledge-base"}}');var s=l(74848),n=l(28453);const d={id:"core-api-concepts-custom-fields",title:"Custom fields",sidebar_position:"08",tags:["Developers","Fintesk Api","Core Api Concepts"],last_update:{date:new Date("2025-02-22T00:00:00.000Z"),author:"Fabrizzio Andrioli"}},r="Custom fields",o={},a=[{value:"Creating a custom field",id:"creating-a-custom-field",level:2},{value:"Naming a custom field",id:"naming-a-custom-field",level:2},{value:"Updating a custom field",id:"updating-a-custom-field",level:2},{value:"Deleting a custom field",id:"deleting-a-custom-field",level:2},{value:"Types of custom fields",id:"types-of-custom-fields",level:2},{value:"How to find out if a field is a custom field",id:"how-to-find-out-if-a-field-is-a-custom-field",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"custom-fields",children:"Custom fields"})}),"\n",(0,s.jsxs)(t.p,{children:["Custom fields allow you to add additional data to your Fintesk account that isn't included by default. Each ",(0,s.jsx)(t.strong,{children:"deal"}),", ",(0,s.jsx)(t.strong,{children:"organization"}),", ",(0,s.jsx)(t.strong,{children:"person"}),", and ",(0,s.jsx)(t.strong,{children:"product"})," item can contain custom fields. We have ",(0,s.jsx)(t.a,{href:"/docs/core-api-concepts-custom-fields#types-of-custom-fields",children:"16 different field types"})," available, each with its own uses."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"creating-a-custom-field",children:"Creating a custom field"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"#creating-a-custom-field"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"URL"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Useful for"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"POST"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"../../fintesk/api-v1#tag/DealFields/operation/addDealField",children:(0,s.jsx)(t.code,{children:"/dealFields"})})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Adding a new deal field."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"POST"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"../../fintesk/api-v1#tag/OrganizationFields/operation/addOrganizationField",children:(0,s.jsx)(t.code,{children:"/organizationFields"})})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Adding a new organization field"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"POST"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"../../fintesk/api-v1#tag/PersonFields/operation/addPersonField",children:(0,s.jsx)(t.code,{children:"/personFields"})})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Adding a new person field"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"POST"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"../../fintesk/api-v1#tag/ProductFields/operation/addProductField",children:(0,s.jsx)(t.code,{children:"/productFields"})})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Adding a new product field"})]})]})]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Note that custom fields cannot be duplicated to multiple different Fintesk accounts. You can add the custom fields with the same name and field type to different accounts but they'll have different values for ",(0,s.jsx)(t.code,{children:"key"})," parameters referenced in our API."]})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"naming-a-custom-field",children:"Naming a custom field"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"#naming-a-custom-field"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.p,{children:["All custom fields are referenced as randomly generated 24-character hashes in the dataset, for example, ",(0,s.jsx)(t.code,{children:"671a4610084c309cd93e5939"})," - it may look like our office cat walked across the laptop, but this actually is a key for a custom field in our API dataset."]}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["These 24-character custom fields (for example, ",(0,s.jsx)(t.code,{children:"671a4610084c309cd93e5939"}),") are not shown in our API Reference as they ",(0,s.jsx)(t.strong,{children:"differ for each Fintesk account"}),", but they can be seen in the API requests and responses as well as used in the requests when adding new items or updating existing ones."]})}),"\n",(0,s.jsxs)(t.p,{children:["You can\u2019t rename the reference of the custom field (the field API key), but you can rename the ",(0,s.jsx)(t.code,{children:"name"})," of a custom field that\u2019s visible to the User."]}),"\n",(0,s.jsxs)(t.p,{children:["Inside Fintesk, you can find the API key of a field by going to ",(0,s.jsx)(t.em,{children:"Settings > Data fields"})," and choosing the entity (deal/person/organization/product). When you hover over the row of a custom field, a three-dot menu appears on the right-hand side. From there, choose ",(0,s.jsx)(t.em,{children:"Copy API key"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:""}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"updating-a-custom-field",children:"Updating a custom field"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"#updating-a-custom-field"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"URL"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Useful for"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"PUT"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"../../fintesk/api-v1#tag/DealFields/operation/updateDealField",children:(0,s.jsx)(t.code,{children:"/dealFields/{id}"})})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Updating a Deal field."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"PUT"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"../../fintesk/api-v1##tag/OrganizationFields/operation/updateOrganizationField",children:(0,s.jsx)(t.code,{children:"/organizationFields/{id}"})})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Updating an organization field"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"PUT"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"../../fintesk/api-v1#tag/PersonFields/operation/updatePersonField",children:(0,s.jsx)(t.code,{children:"/personFields/{id}"})})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Updating a person field"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"PUT"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"../../fintesk/api-v1#tag/ProductFields/operation/updateProductField",children:(0,s.jsx)(t.code,{children:"/productFields/{id}"})})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Updating a product field"})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"deleting-a-custom-field",children:"Deleting a custom field"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"#deleting-a-custom-field"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["We don't recommend deleting a custom field, because it might permanently remove all data. In case you do delete by mistake, there's a chance that you can get it back by ",(0,s.jsx)(t.a,{href:"https://fintesk.com/es/soporte/contactanos/?utm_source=fintesk-docs",children:"contacting"})," our awesome support team."]})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"URL"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Useful for"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"DELETE"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"../../fintesk/api-v1#tag/DealFields/operation/deleteDealField",children:(0,s.jsx)(t.code,{children:"/dealFields/{id}"})})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Marking a deal field as deleted."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"DELETE"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"../../fintesk/api-v1#tag/OrganizationFields/operation/deleteOrganizationField",children:(0,s.jsx)(t.code,{children:"/organizationFields/{id}"})})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Marking an organization field as deleted"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"DELETE"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"../../fintesk/api-v1#tag/PersonFields/operation/deletePersonField",children:(0,s.jsx)(t.code,{children:"/personFields/{id}"})})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Marking a person field as deleted"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"DELETE"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"../../fintesk/api-v1#tag/ProductFields/operation/deleteProductField",children:(0,s.jsx)(t.code,{children:"/productFields/{id}"})})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Marking a product field as deleted"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["After a custom field is deleted, it will no longer appear in API responses. All ",(0,s.jsx)(t.code,{children:"POST"})," requests mentioning a custom field will ignore it."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"types-of-custom-fields",children:"Types of custom fields"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"#types-of-custom-fields"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"See below the 16 different types of custom fields available:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"field_type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Useful for"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Additional info"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Text"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"VarcharField"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The text field is used to store texts up to 255 characters"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Billing addresses, (short) comments, email addresses"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Large text"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"TextField"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The large text field is used to store texts longer than usual"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Comments, descriptions"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Numerical"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"NumberField"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The numeric field is used to store data such as the amount of commission or other custom numerical data"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Commission, priority level"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The value should be numeric with a maximum precision (decimal places) of 16. If a number exceeds the maximum precision, it will stay without the full precision."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Monetary"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"MonetaryField"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The monetary field is used to store data such as the amount of commission"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Commission, amounts"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The currency of the field will match the user\u2019s default currency setting unless specified otherwise in the request. The format of the field is determined by the user\u2019s locale."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Multiple options"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"MultipleChoiceField"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The multiple options field lets you predefine a list of values to choose from. Multiple option fields can have a max of 10,000 options per field."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Industry type, competitors, region"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Single option"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"ChoiceField"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The single option field lets you predefine a list of values out of which one can be selected.Single option fields can have a max of 10,000 options per field."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Lead type, category, industry"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"User"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"UserField"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The user field can contain one user amongst users of your Fintesk account*"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Tech contacts, previous deal owners"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Organization"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"OrganizationField"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The organization field can contain one organization out of all the organizations stored on your Fintesk account*"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Related parties, partner organizations"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Person"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"PersonField"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The person field can contain one person out of all the contacts stored on your Fintesk account*"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Related parties, tech contacts"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Phone"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"PhonesField"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"A phone number field can contain a phone number (naturally) or a Skype Name with a click-to-call functionality"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Skype names, phone numbers"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"No auto-formatting"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Time"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"TimeField"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The time field is used to store times, picked from a handy inline time picker"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Delivery times, lunchtime"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Time range"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"TimeRangeField"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The time range field is used to store time ranges picked from a handy inline time picker"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Office hours, the best time to contact"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Date"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"DateField"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Date field is used to store dates picked from a handy inline calendar"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Delivery dates, deadlines"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The format of the field is determined by the user\u2019s locale"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Date range"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"DateRangeField"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The date range field is used to store date ranges picked from a handy inline calendar"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Event dates, completion estimates"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.p,{children:"Coming soon"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"}}),(0,s.jsx)(t.th,{style:{textAlign:"left"}}),(0,s.jsx)(t.th,{style:{textAlign:"left"}}),(0,s.jsx)(t.th,{style:{textAlign:"left"}}),(0,s.jsx)(t.th,{style:{textAlign:"left"}})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Address"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"AddressField"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Address field is used to store addresses"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Event places, office locations (when separate from business address)"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The address field can hold all parts of address components \u2013 including City, tate, Zip Code, and Country \u2013 so there\u2019s no need to create separate address fields for each address component. You can use Google Maps autocomplete textfield to enter addresses and visualize them on a map. You\u2019ll also be able to filter items based on specific address criteria."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Autocomplete"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"VarcharField"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The text field is used to store texts up to 255 characters and can autocomplete from the text previously inserted into this field"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Custom options (e.g., tagging), email addresses"})]})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["* ",(0,s.jsx)(t.em,{children:"Doesn\u2019t link the item with the user, person, or organization for statistics or any other form of ownership or relation, but can be used for filtering."})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"how-to-find-out-if-a-field-is-a-custom-field",children:"How to find out if a field is a custom field"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"#how-to-find-out-if-a-field-is-a-custom-field"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"system_flag"})," parameter in the response body of an entity\u2019s fields can be used to identify if the field is a custom field:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"true"})," \u2013 a custom field"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"false"})," \u2013 Fintesk default field"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "_id": "671a460f084c309cd93e58c4",\n\n  "active_flag": true,\n  "add_deal_modal_visible_flag": false,\n  "add_organization_modal_visible_flag": false,\n  "add_person_modal_visible_flag": false,\n  "add_product_modal_visible_flag": false,\n  "add_time": "2024-10-24 13:05:19",\n  "add_visible_flag": false,\n  "alias": "next_activity_subject",\n  "allow_bulk_edit_flag": false,\n  "allow_filtering_flag": false,\n  "allow_select_column_flag": false,\n  "complex_flag": false,\n  "created_by_user_id": "671a460f084c309cd93e5848",\n  "delete_flag": false,\n  "details_visible_flag": false,\n  "edit_flag": false,\n  "entity_id": "671a460f084c309cd93e584b",\n  "entity_key": "Deals",\n  "entity_referenced": null,\n  "field_type_class": "TextField",\n  "field_type_id": "671a460f084c309cd93e5855",\n  "flow_flag": false,\n  "help_text": "This field can have 255 characters at maximun",\n  "importable_flag": false,\n  "important_flag": false,\n  "internal_id": 91,\n  "key": "next_activity_subject",\n  "last_updated_by_user_id": "671a460f084c309cd93e5848",\n  "link": null,\n  "mandatory_flag": false,\n  "name": "next_activity_subject",\n  "options": [],\n  "order_nbr": 4,\n  "owner_id": "671a460f084c309cd93e5848",\n  "search_field": null,\n  "searchable_flag": false,\n  "sort_field": "next_activity_subject",\n  "sortable_flag": true,\n  "subfield_flag": false,\n  "subfields": [],\n  "system_flag": true,\n  "update_time": "2024-10-24 13:05:18",\n  "visible_in_exports_flag": false\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,l)=>{l.d(t,{R:()=>d,x:()=>r});var i=l(96540);const s={},n=i.createContext(s);function d(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);
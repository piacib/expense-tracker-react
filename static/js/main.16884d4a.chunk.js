(this["webpackJsonpexpense-tracker-react"]=this["webpackJsonpexpense-tracker-react"]||[]).push([[0],{21:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var c,r=n(1),a=n.n(r),s=n(11),i=n.n(s),o=n(2),u=(n(21),{body:"#f7f7f7",text:"#363537",toggleBorder:"#FFF",background:"#363537"}),j={body:"#363537",text:"#FAFAFA",toggleBorder:"#6B8096",background:"#999"},l=n(16),d=n(4),b=function(t,e){switch(e.type){case"DELETE_TRANSACTION":return Object(d.a)(Object(d.a)({},t),{},{transactions:t.transactions.filter((function(t){return t.id!==e.payload}))});case"ADD_TRANSACTION":return Object(d.a)(Object(d.a)({},t),{},{transactions:[e.payload].concat(Object(l.a)(t.transactions))});default:return t}},x=n(12),O=n(6),h=Object(O.b)(c||(c=Object(x.a)(["\n    body { \n        background: ",";\n        color: ",";\n        font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;\n        transition: all 0.50s linear;\n    }\n    .inc-exp-container {\n        background: ",";\n        transition: all 0.40s linear;\n    }\n"])),(function(t){return t.theme.body}),(function(t){return t.theme.text}),(function(t){return t.theme.body})),m=n(0),f={transactions:[{id:1,text:"Flower",amount:-20},{id:2,text:"Salary",amount:300},{id:3,text:"Book",amount:-25},{id:4,text:"Camera",amount:150}]},p=Object(r.createContext)(f),v=function(t){var e=t.children,n=Object(r.useReducer)(b,f),c=Object(o.a)(n,2),a=c[0],s=c[1];return Object(m.jsxs)(p.Provider,{value:{transactions:a.transactions,deleteTransaction:function(t){s({type:"DELETE_TRANSACTION",payload:t})},addTransaction:function(t){s({type:"ADD_TRANSACTION",payload:t})}},children:[Object(m.jsx)(h,{}),e]})},g=function(){var t=Object(r.useContext)(p).transactions.map((function(t){return t.amount})).reduce((function(t,e){return t+e}),0).toFixed(2);return Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{children:"Your Balance"}),Object(m.jsxs)("h1",{id:"balance",children:["$",t]})]})},y=function(){return Object(m.jsx)("h2",{children:"Expense Tracker"})},N=function(){var t=Object(r.useContext)(p).transactions.map((function(t){return t.amount})),e=t.filter((function(t){return t>0})).reduce((function(t,e){return t+e}),0).toFixed(2),n=(-1*t.filter((function(t){return t<0})).reduce((function(t,e){return t+e}),0)).toFixed(2);return Object(m.jsxs)("div",{className:"inc-exp-container",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{children:"Income"}),Object(m.jsxs)("p",{className:"money plus",children:["$",e]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{children:"Expense"}),Object(m.jsxs)("p",{className:"money minus",children:["$",n]})]})]})},T=function(t){var e=t.transaction,n=e.amount>0?"+":"-",c=Object(r.useContext)(p).deleteTransaction;return Object(m.jsxs)("li",{className:e.amount>0?"plus":"minus",children:[e.text," ",Object(m.jsxs)("span",{children:[n,"$",Math.abs(e.amount)]}),Object(m.jsx)("button",{onClick:function(){return c(e.id)},className:"delete-btn",children:"x"})]})},C=function(){var t=Object(r.useContext)(p).transactions;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h3",{children:"History"}),Object(m.jsx)("ul",{id:"list",className:"list",children:t.map((function(t){return Object(m.jsx)(T,{transaction:t},t.id)}))})]})},F=function(){var t=Object(r.useState)(""),e=Object(o.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)(0),s=Object(o.a)(a,2),i=s[0],u=s[1],j=Object(r.useContext)(p).addTransaction;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h3",{children:"Add new transaction"}),Object(m.jsxs)("form",{id:"form",onSubmit:function(t){t.preventDefault();var e={id:Math.floor(1e6*Math.random()),text:n,amount:+i};j(e)},children:[Object(m.jsxs)("div",{className:"form-control",children:[Object(m.jsx)("label",{htmlFor:"text",children:"Text"}),Object(m.jsx)("input",{type:"text",id:"text",value:n,onChange:function(t){return c(t.target.value)},placeholder:"Enter text..."})]}),Object(m.jsxs)("div",{className:"form-control",children:[Object(m.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(m.jsx)("br",{}),"(negative - expense, positive - income) "]}),Object(m.jsx)("input",{type:"number",id:"amount",value:i,onChange:function(t){return u(t.target.value)},placeholder:"Enter amount..."})]}),Object(m.jsx)("button",{className:"btn",children:"Add transaction"})]})]})},A=function(){var t=Object(r.useState)("light"),e=Object(o.a)(t,2),n=e[0],c=e[1];return Object(m.jsx)(O.a,{theme:"light"===n?u:j,children:Object(m.jsxs)(v,{children:[Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)(y,{}),Object(m.jsxs)("label",{className:"switch",children:[Object(m.jsx)("input",{type:"checkbox",onClick:function(){c("light"===n?"dark":"light")}}),Object(m.jsx)("span",{className:"slider round"})]})]}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(g,{}),Object(m.jsx)(N,{}),Object(m.jsx)(C,{}),Object(m.jsx)(F,{})]})]})})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),a(t),s(t)}))};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(A,{})}),document.getElementById("root")),k()}},[[25,1,2]]]);
//# sourceMappingURL=main.16884d4a.chunk.js.map
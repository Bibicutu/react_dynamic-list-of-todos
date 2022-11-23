(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),n=c(2),l=c(1),i=(c(10),c(11),c(3)),d=c.n(i),o=c(0),r=function(e){var t=e.todos,c=e.currentTodo,s=e.setCurrentTodo,a=Object(l.useCallback)((function(e){s(e)}),[c]);return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(o.jsx)("td",{className:"is-vcentered",children:e.id}),Object(o.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:d()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){a(e)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:d()("far",{"fa-eye":!c||c.id!==e.id,"fa-eye-slash":c&&c.id===e.id})})})})})]},e.id)}))})]})},j=function(e){var t=e.statusFilter,c=e.setStatusFilter,s=e.titleFilter,a=e.setTitleFilter,n=Object(l.useCallback)((function(e){a(e.target.value)}),[s]),i=Object(l.useCallback)((function(e){c(e.target.value)}),[t]),d=Object(l.useCallback)((function(){a("")}),[s]);return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:i,children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",value:s,onChange:n,className:"input",placeholder:"Search..."}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),s&&Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:d})})]})]})};function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(13);var u=function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})},h=function(e){var t=e.todo,c=e.setCurrentTodo,s=Object(l.useState)(null),a=Object(n.a)(s,2),i=a[0],r=a[1],j=Object(l.useState)(!0),h=Object(n.a)(j,2),m=h[0],O=h[1];Object(l.useEffect)((function(){var e;(e=t.userId,b("/users/".concat(e))).then((function(e){r(e)})).then((function(){O(!1)}))}));var x=Object(l.useCallback)((function(){c(null)}),[]);return Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),m?Object(o.jsx)(u,{}):Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:x})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(o.jsx)("strong",{className:d()({"has-text-success":t.completed,"has-text-danger":!t.completed}),children:t.completed?"Done":"Planned"})," by ",i&&Object(o.jsx)("a",{href:"mailto:".concat(i.email),children:i.name})]})]})]})]})},m=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(""),i=Object(n.a)(a,2),d=i[0],m=i[1],O=Object(l.useState)("all"),x=Object(n.a)(O,2),f=x[0],p=x[1],N=Object(l.useState)(!0),v=Object(n.a)(N,2),y=v[0],C=v[1],g=Object(l.useState)(null),k=Object(n.a)(g,2),w=k[0],S=k[1];Object(l.useEffect)((function(){b("/todos").then((function(e){s(e)})).then((function(){C(!1)}))}),[]);var T=c.filter((function(e){switch(f){case"all":return e.title.toLowerCase().includes(d.toLowerCase());case"active":return!e.completed&&e.title.toLowerCase().includes(d.toLowerCase());case"completed":return e.completed&&e.title.toLowerCase().includes(d.toLowerCase());default:return e}}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(j,{statusFilter:f,setStatusFilter:p,titleFilter:d,setTitleFilter:m})}),Object(o.jsx)("div",{className:"block",children:y?Object(o.jsx)(u,{}):Object(o.jsx)(r,{todos:T,currentTodo:w,setCurrentTodo:S})})]})})}),w&&Object(o.jsx)(h,{todo:w,setCurrentTodo:S})]})};a.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6da39f0c.chunk.js.map
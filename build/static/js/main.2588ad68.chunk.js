(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{19:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c(0),a=c.n(o),r=c(10),s=c.n(r),i=(c(8),c(19),c(13)),d=c(6),l=c(2),j=function(e){var t=Object(o.useState)(""),c=Object(l.a)(t,2),a=c[0],r=c[1],s=Object(o.useState)(!1),i=Object(l.a)(s,1)[0],d=Object(o.useState)(""),j=Object(l.a)(d,2),u=j[0],b=j[1];return Object(n.jsx)("form",{onSubmit:function(t){if(t.preventDefault(),!u&&a.length>0){var c={todo:a,isChecked:i,updatedAt:Date.now(),createdAt:Date.now(),id:e.generateId()};e.onAdd(c),r("")}else b("Todo must be entered")},className:"m-0 p-0",children:Object(n.jsxs)("div",{className:"row my-2",children:[Object(n.jsxs)("div",{className:"form-group col-6 ml-auto my-0",children:[Object(n.jsx)("input",{className:"form-control",type:"text",placeholder:"Write what to do",onChange:function(e){return function(e){r(e.target.value),0===e.target.value.length?b("Todo must be entered"):b("")}(e)},value:a}),u?Object(n.jsx)("pre",{style:{color:"red"},children:u}):""]}),Object(n.jsx)("div",{className:"col-2 mr-auto",children:Object(n.jsx)("button",{className:"btn btn-primary",children:"Add"})})]})})},u=c(12),b=c.n(u),h=function(e){var t=e.todo;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"row m-1",children:[Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("input",{id:"todo".concat(t.id),className:"form-check-input",type:"checkbox",checked:t.isChecked,onChange:function(c){return e.checkedTodo(t.id)}}),Object(n.jsxs)("label",{htmlFor:"todo".concat(t.id),children:[" ",t.isChecked?Object(n.jsx)("del",{children:t.todo}):t.todo]})]}),Object(n.jsx)("div",{className:"float-right",children:Object(n.jsx)("div",{className:"btn btn-danger  mr-2",onClick:function(c){return e.deleteTodo(t.id)},children:" Delete "})})]}),Object(n.jsx)("div",{className:"row mx-2 font-weight-light",children:Object(n.jsx)("span",{className:"bg-light",children:b()(t.updatedAt).fromNow()})})]})};var O=function(e){var t=Object(o.useState)("btn-primary"),c=Object(l.a)(t,1)[0],a=Object(o.useState)("btn-outline-primary"),r=Object(l.a)(a,1)[0],s=e.todoList,i=e.setToDoList,j=Object(o.useState)(c),u=Object(l.a)(j,2),b=u[0],O=u[1],f=Object(o.useState)(r),m=Object(l.a)(f,2),v=m[0],x=m[1],g=Object(o.useState)(!1),p=Object(l.a)(g,2),N=p[0],k=p[1],S=function(e){i(function(e,t){for(var c=Object(d.a)(e),n=0;n<c.length;n++)c[n].id===t&&(c[n].isChecked=!c[n].isChecked,c[n].updatedAt=Date.now());return c}(s,e))},w=function(e){for(var t=[],c=0;c<s.length;c++)s[c].id===e||t.push(s[c]);i(t)};return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"d-flex",children:Object(n.jsxs)("div",{className:"btn-group my-2 mx-auto",role:"group",children:[Object(n.jsx)("div",{className:"btn ".concat(b),onClick:function(e){O(c),x(r),k(!1)},children:"Todo"}),Object(n.jsx)("div",{className:"btn ".concat(v),onClick:function(e){O(r),x(c),k(!0)},children:"Done"})]})}),Object(n.jsx)("ul",{className:"list-group",children:s.sort((function(e,t){return new Date(t.updatedAt)-new Date(e.updatedAt)})).filter((function(e){return e.isChecked===N})).map((function(e,t){return Object(n.jsx)("li",{className:"list-group-item",children:Object(n.jsx)(h,{todo:e,checkedTodo:S,deleteTodo:w})},t)}))})]})},f=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];Object(o.useEffect)((function(){var e=localStorage.getItem("tier-todo-list");if(e){var t=JSON.parse(e);s(t),a(t)}}),[]),Object(o.useEffect)((function(){localStorage.setItem("tier-todo-list",JSON.stringify(c))}),[c]);var r=function(){for(var e=c[0]?c.length+1:1,t=!0;t;){t=!1;for(var n=0;n<c.length;n++)if(c[n].id===e){t=!0,e++;break}}return e},s=function(e){for(var t=0;t<e.length;t++)void 0===e[t].id&&(e[t].id=r()),void 0===e[t].createdAt&&(e[t].createdAt=Date.now()),void 0===e[t].updatedAt&&(e[t].updatedAt=Date.now())};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j,{onAdd:function(e){a([e].concat(Object(d.a)(c)))},generateId:r}),Object(n.jsx)(O,{todoList:c,setToDoList:a})]})};var m=function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)(i.a,{children:Object(n.jsx)(f,{path:"/Todos/"})})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,28)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),o(e),a(e),r(e)}))};s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),v()}},[[27,1,2]]]);
//# sourceMappingURL=main.2588ad68.chunk.js.map
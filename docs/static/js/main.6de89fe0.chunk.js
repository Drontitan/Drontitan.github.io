(this["webpackJsonplearn-react"]=this["webpackJsonplearn-react"]||[]).push([[0],{16:function(e,t,a){},28:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),s=a.n(r),l=(a(28),a(4)),i=(a(22),a(16),a(3)),o=a.n(i),b=a(8),u=a(1);function j(e){return Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsxs)(b.a,{className:"navbar-brand",to:"/",children:[e.tittle," "]}),Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(u.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(b.a,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(b.a,{className:"nav-link",to:"/about",children:"About"})})]}),e.searchbar?Object(u.jsxs)("form",{className:"d-flex",children:[Object(u.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(u.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):" "]})]})})}j.defaultProps={tittle:"Your tittle here ",searchbar:!0},j.propTyes={tittle:o.a.string,searchbar:o.a.bool.isRequired};var d=a(18),m=a(19),h=a(23),O=a(21),p=(n.Component,a(7)),g=function(){var e=Object(p.c)((function(e){return e.changethenumber})),t=Object(p.b)();return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{classNameName:"main-div",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"Increment/Decrement counter"}),Object(u.jsx)("h4",{children:"using React and Redux"}),Object(u.jsxs)("div",{className:"quantity",children:[Object(u.jsx)("a",{className:"quantity__minus",title:"Decrement",onClick:function(){return t({type:"Decrement"})},children:Object(u.jsx)("span",{children:"-"})}),Object(u.jsx)("input",{name:"quantity",type:"text",className:"quantity__input",value:e}),Object(u.jsx)("a",{className:"quantity__plus",title:"Increment",onClick:function(){return t({type:"Increment",payload:5})},children:Object(u.jsx)("span",{children:"+"})})]})]})})})};var v=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=Object(n.useState)([e]),a=Object(l.a)(t,2),c=a[0];return a[1],Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(c))}),[c]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(g,{})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))},N=a(11),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Increment":return e+t.payload;case"Decrement":return e-1;default:return e}},S=Object(N.a)({changethenumber:f}),_=Object(N.b)(S,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());_.subscribe((function(){return console.log(_.getState())})),s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(p.a,{store:_,children:Object(u.jsx)(v,{})})}),document.getElementById("root")),x()}},[[36,1,2]]]);
//# sourceMappingURL=main.6de89fe0.chunk.js.map
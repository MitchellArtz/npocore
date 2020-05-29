(this["webpackJsonpnpocore-client"]=this["webpackJsonpnpocore-client"]||[]).push([[0],{31:function(e,a,t){e.exports=t(41)},41:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),o=t.n(l),i=t(9),c=t(10),s=t(12),m=t.n(s),u=t(15),v=t(6),E=t(24),p=t.n(E);t(19),t(13),t(17);var g=function(){var e=Object(n.useState)({}),a=Object(v.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)(Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(p.a.get("organization"));case 2:console.log(t);case 3:case"end":return e.stop()}}),e)}))),[]),r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("img",{className:"npocore-logo",src:"img/npocore.png",alt:""})),r.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbar-target"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbar-target"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/contact"},"Contact")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/featured"},"Featured")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/map"},"Map")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link",to:"/organizations"},"Organizations")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/posts"},"Posts")),void 0==t?r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"btn btn-info npo-button",href:"/login"},"Login/Register")):r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/organizations/"+t._id},"My Organization")),void 0!=t?r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/logout"},"Logout")):r.a.createElement("span",null)))))},d=t(28);var f=function(){var e=Object(n.useState)([]),a=Object(v.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)([]),c=Object(v.a)(o,2),s=c[0],E=c[1],p=function(){var e=Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("http://localhost:3000/api/get-organizations",{method:"GET",mode:"no-cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){E(e),l(e)})).catch((function(e){console.log("Exception:",e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){document.title="NPO Core - Organizations",p()}),[]);var g=function(e){var a=e.target;a.parentNode.style.display="none",a.parentNode.parentNode.parentNode.querySelector("p").className=""};return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement("title",null,"NPO Core - A List of Nonprofit Organizations for High School & College Students"),r.a.createElement("meta",{name:"description",content:"Look at our huge, curated list of nonprofit organizations that we've built up! Find a nonprofit organization to join, partner with, or simply get in contact with here on NPO Core!"})),r.a.createElement("div",{className:"pb-5"},r.a.createElement("h1",{className:"mt-4"},"Organizations"),r.a.createElement("small",null,"If you would like your nonprofit organization removed from NPO Core, please ",r.a.createElement(i.b,{to:"/contact"},"contact us"),"."),r.a.createElement("div",{className:"filters mt-3"},r.a.createElement("input",{className:"form-control search-bar",type:"text",placeholder:"Filter",onChange:function(e){var a=e.target.value.toLowerCase();if(""===a)p();else{var n=t.filter((function(e){return e.name.toLowerCase().includes(a)}));E(n)}}}),r.a.createElement("select",{onChange:function(e){var a=e.target.value;a?E(t.filter((function(e){return e.gender===a}))):p()},required:!0},r.a.createElement("option",{value:""},"Gender"),r.a.createElement("option",{value:"Everyone"},"Everyone"),r.a.createElement("option",{value:"Male"},"Male"),r.a.createElement("option",{value:"Female"},"Female"),r.a.createElement("option",{value:"Non-binary"},"Non-binary")),r.a.createElement("select",{onChange:function(e){var a=e.target.value;a?E(t.filter((function(e){return e.cause===a}))):p()},required:!0},r.a.createElement("option",{value:""},"Cause"),r.a.createElement("option",{value:"Animal Welfare"},"Animal Welfare"),r.a.createElement("option",{value:"Arts and Culture"},"Arts and Culture"),r.a.createElement("option",{value:"Children"},"Children"),r.a.createElement("option",{value:"Civil Rights and Social Action"},"Civil Rights and Social Action"),r.a.createElement("option",{value:"Disaster Relief"},"Disaster Relief"),r.a.createElement("option",{value:"Economic Empowerment"},"Economic Empowerment"),r.a.createElement("option",{value:"Education"},"Education"),r.a.createElement("option",{value:"Environment"},"Environment"),r.a.createElement("option",{value:"Health"},"Health"),r.a.createElement("option",{value:"Human Rights"},"Human Rights"),r.a.createElement("option",{value:"Politics"},"Politics"),r.a.createElement("option",{value:"Poverty Alleviation"},"Poverty Alleviation"),r.a.createElement("option",{value:"Science and Technology"},"Science and Technology"),r.a.createElement("option",{value:"Social Services"},"Social Services")),r.a.createElement("select",{onChange:function(e){var a=e.target.value;a?E(t.filter((function(e){return e.interests.includes(a)}))):p()},required:!0},r.a.createElement("option",{value:""},"Interest"),r.a.createElement("option",{value:"Members"},"Members"),r.a.createElement("option",{value:"Partnerships"},"Partnerships"),r.a.createElement("option",{value:"Sponsors"},"Sponsors"),r.a.createElement("option",{value:"Clients"},"Clients"),r.a.createElement("option",{value:"Opportunities"},"Opportunities")),r.a.createElement("button",{className:"refresh-organizations",onClick:p},r.a.createElement("img",{src:"/img/refresh.svg",alt:""}))),r.a.createElement("div",{className:"organizations mt-5"},s?s.map((function(e,a){return r.a.createElement("div",{className:"organization",key:a},r.a.createElement("div",{className:"organization-header"},r.a.createElement("h5",null,e.name),r.a.createElement("div",{className:"organization-resources"},r.a.createElement("a",{href:"mailto:{organization.email}",target:"_"},e.email?r.a.createElement("img",{src:"/img/email.svg",alt:"{organization.name} Email Address"}):null),r.a.createElement("a",{href:e.website,target:"_"},r.a.createElement("img",{src:"/img/link.svg",alt:"{organization.name} Website"})))),r.a.createElement("div",null,r.a.createElement("strong",null,"Gender:")," ",e.gender),r.a.createElement("div",null,r.a.createElement("strong",null,"Cause:")," ",e.cause),r.a.createElement("p",{className:"organization-description"},r.a.createElement("strong",null,"Description:")," ",e.description),r.a.createElement("div",{className:"text-right mb-2"},r.a.createElement("button",{className:"btn btn-link p-0",onClick:g},r.a.createElement("small",null,"Read More"))),r.a.createElement("div",{className:"organization-interests"},(e.interests||[]).map((function(e,a){return r.a.createElement("small",null,e)}))))})):r.a.createElement("div",{className:"text-center"},r.a.createElement("small",null,"No organizations yet!")))))};var h=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(c.c,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"hover-container"},r.a.createElement(c.a,{path:"/organizations",component:f})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.132dd094.chunk.js.map
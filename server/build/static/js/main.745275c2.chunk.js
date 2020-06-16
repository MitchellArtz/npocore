(this["webpackJsonpnpocore-client"]=this["webpackJsonpnpocore-client"]||[]).push([[0],{31:function(e,t,a){e.exports=a(41)},41:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),o=a.n(r),c=a(9),i=a(11),s=a(10),m=a.n(s),u=a(13),p=a(3),E=a(44);a(21),a(17),a(19);var d=function(){var e=Object(n.useState)({}),t=Object(p.a)(e,2),a=t[0],r=t[1],o=Object(E.a)(["name"]),i=Object(p.a)(o,2),s=i[0];return i[1],Object(n.useEffect)(Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(s.organization);case 2:case"end":return e.stop()}}),e)}))),[]),l.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand",href:"/"},l.a.createElement("img",{src:"/static/img/npocore.png",alt:"NPO Core Logo"})),l.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbar-target"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbar-target"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/contact"},"Contact")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{className:"nav-link",to:"/organizations"},"Organizations")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{className:"nav-link",to:"/opportunities"},"Opportunities")),void 0==a?l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"btn btn-info npo-button",href:"/login"},"Login/Register")):l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("a",{className:"nav-link",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},a.logo?l.a.createElement("div",{className:"image-cropper-container"},l.a.createElement("div",{className:"image-cropper"},l.a.createElement("img",{className:"nav-logo",src:"https://npocore.s3-us-west-2.amazonaws.com/"+a.logo,alt:""}))):l.a.createElement("div",{className:"image-cropper"},l.a.createElement("img",{className:"nav-logo",src:"/static/img/no-logo.png",alt:""}))),l.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},l.a.createElement("a",{className:"dropdown-item",href:"/@"+a.idName},"View my organization"),l.a.createElement("div",{className:"dropdown-divider"}),l.a.createElement("a",{className:"dropdown-item",href:"/logout"},"Logout")))))))},g=a(14);var v=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),c=Object(p.a)(o,2),i=c[0],s=c[1],E=Object(n.useState)([]),d=Object(p.a)(E,2),v=d[0],f=d[1],h=Object(n.useState)(!1),N=Object(p.a)(h,2),b=N[0],y=N[1],O=Object(n.useState)(""),j=Object(p.a)(O,2),w=j[0],C=j[1],k=Object(n.useState)(""),S=Object(p.a)(k,2),z=S[0],x=S[1],A=Object(n.useState)(""),P=Object(p.a)(A,2),L=P[0],R=P[1],T=Object(n.useState)(""),F=Object(p.a)(T,2),D=F[0],H=F[1],M=function(){var e=Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/get-organizations",{method:"GET",mode:"no-cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){s(e),r(e);var t=e.filter((function(e){return 1==e.featured}));f(t)})).catch((function(e){console.log("Exception:",e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){M()}),[]),Object(n.useEffect)((function(){q()}),[w,z,L,D]);var q=function(){var e=a;e=B(e),e=G(e),e=_(e),e=W(e),s(e)},B=function(e){var t=w.toLowerCase();return""===t?e:e.filter((function(e){return e.name.toLowerCase().includes(t)}))},G=function(e){return z?e.filter((function(e){return e.targetAudiences.includes(z)})):e},_=function(e){return L?e.filter((function(e){return e.causes.includes(L)})):e},W=function(e){return D?e.filter((function(e){return!!e.interests&&e.interests.includes(D)})):e},J=function(e){var t=e.target;t.parentNode.style.display="none",t.parentNode.parentNode.parentNode.querySelector("p").className=""},Y=function(e){y(!b)};return l.a.createElement("div",null,l.a.createElement(g.a,null,l.a.createElement("title",null,"NPO Core - Nonprofit Organizations"),l.a.createElement("meta",{name:"description",content:"Look at our huge, curated list of nonprofit organizations that we've built up! Find a nonprofit organization to join, partner with, or simply get in contact with here on NPO Core!"})),l.a.createElement("div",{className:"pb-5"},l.a.createElement("div",{className:"options"},l.a.createElement("h1",{className:"mt-4"},"Organizations"),l.a.createElement("a",{className:"solid-cta-button",href:"/organizations/map"},"Check out our organization map!")),l.a.createElement("div",{className:"organizations mt-5"},v?v.map((function(e,t){return l.a.createElement("div",{className:"organization",key:t},l.a.createElement("div",{className:"image-cropper-container"},l.a.createElement("div",{style:{height:"50px"},className:"image-cropper"},e.logo?l.a.createElement("img",{src:"https://npocore.s3-us-west-2.amazonaws.com/"+e.logo,alt:""}):l.a.createElement("img",{src:"/static/img/no-logo.png",alt:""})),e.verifiedNonprofit?l.a.createElement("img",{className:"nonprofit-badge",src:"/static/img/icons/501c3.svg",alt:""}):l.a.createElement("span",null)),l.a.createElement("div",null,l.a.createElement("div",{className:"organization-header"},l.a.createElement("h4",null,l.a.createElement("a",{href:"/@"+e.idName},e.name)),l.a.createElement("div",{className:"organization-resources"},l.a.createElement("a",{href:"mailto:{organization.email}",target:"_"},e.email?l.a.createElement("img",{src:"/img/email.svg",alt:"{organization.name} Email Address"}):null),l.a.createElement("a",{href:"/@"+e.idName},l.a.createElement("img",{style:{transform:"translateY(-2px)"},src:"/img/link.svg",alt:"{organization.name}"})))),e.location.name?l.a.createElement("div",null,l.a.createElement("strong",null,"Location:")," ",e.location.name):l.a.createElement("span",null),l.a.createElement("div",null,l.a.createElement("strong",null,"Target Audiences:")," ",e.targetAudiences.join(", ")),l.a.createElement("div",null,l.a.createElement("strong",null,"Causes:")," ",e.causes.join(", ")),l.a.createElement("p",{className:"organization-description"},l.a.createElement("strong",null,"Description:")," ",e.description),l.a.createElement("div",{className:"text-right mb-2"},l.a.createElement("button",{className:"btn btn-link p-0",onClick:J},l.a.createElement("small",null,"Read More"))),l.a.createElement("div",{className:"organization-interests"},(e.interests||[]).map((function(e,t){return l.a.createElement("small",null,e)})))))})):l.a.createElement("div",{className:"text-center"},l.a.createElement("small",null,"No featured organizations yet!"))),l.a.createElement("div",{className:"mt-4 text-right"},b?l.a.createElement("button",{className:"toggle-filter",onClick:Y},"Filters \u2191"):l.a.createElement("button",{className:"toggle-filter",onClick:Y},"Filters \u2193")),b?l.a.createElement("div",{className:"filters mt-3"},l.a.createElement("input",{className:"form-control search-bar",type:"text",placeholder:"Filter by Name",onChange:function(e){return C(e.target.value)}}),l.a.createElement("select",{onChange:function(e){return x(e.target.value)},required:!0},l.a.createElement("option",{value:""},"All Target Audiences"),l.a.createElement("option",{value:"Everyone"},"Everyone"),l.a.createElement("option",{value:"Kids"},"Kids"),l.a.createElement("option",{value:"Teens"},"Teens"),l.a.createElement("option",{value:"Adults"},"Adults"),l.a.createElement("option",{value:"Seniors"},"Seniors"),l.a.createElement("option",{value:"Groups"},"Groups")),l.a.createElement("select",{onChange:function(e){return R(e.target.value)},required:!0},l.a.createElement("option",{value:""},"All Causes"),l.a.createElement("option",{value:"Advocacy and Human Rights"},"Advocacy and Human Rights"),l.a.createElement("option",{value:"Animal Welfare"},"Animal Welfare"),l.a.createElement("option",{value:"Arts and Culture"},"Arts and Culture"),l.a.createElement("option",{value:"Children and Youth"},"Children and Youth"),l.a.createElement("option",{value:"Civil Rights and Social Action"},"Civil Rights and Social Action"),l.a.createElement("option",{value:"Crisis Support"},"Crisis Support"),l.a.createElement("option",{value:"Disaster Relief"},"Disaster Relief"),l.a.createElement("option",{value:"Emergency and Safety"},"Emergency and Safety"),l.a.createElement("option",{value:"Education"},"Education"),l.a.createElement("option",{value:"Environment"},"Environment"),l.a.createElement("option",{value:"Female Empowerment"},"Female Empowerment"),l.a.createElement("option",{value:"Health"},"Health"),l.a.createElement("option",{value:"Homeless and Housing"},"Homeless and Housing"),l.a.createElement("option",{value:"Politics"},"Politics"),l.a.createElement("option",{value:"LGBTQ+"},"LGBTQ+"),l.a.createElement("option",{value:"Race and Ethnicity"},"Race and Ethnicity"),l.a.createElement("option",{value:"Poverty Alleviation"},"Poverty Alleviation"),l.a.createElement("option",{value:"Science and Technology"},"Science and Technology"),l.a.createElement("option",{value:"Social Services"},"Social Services"),l.a.createElement("option",{value:"Veterans and Military Families"},"Veterans and Military Families")),l.a.createElement("select",{onChange:function(e){return H(e.target.value)},required:!0},l.a.createElement("option",{value:""},"All Interests"),l.a.createElement("option",{value:"Members"},"Members"),l.a.createElement("option",{value:"Partnerships"},"Partnerships"),l.a.createElement("option",{value:"Sponsors"},"Sponsors"),l.a.createElement("option",{value:"Clients"},"Clients"),l.a.createElement("option",{value:"Opportunities"},"Opportunities"))):l.a.createElement("span",null),l.a.createElement("div",{className:"organizations mt-5"},i?i.map((function(e,t){return l.a.createElement("div",{className:"organization",key:t},l.a.createElement("div",{className:"image-cropper-container"},l.a.createElement("div",{style:{height:"50px"},className:"image-cropper"},l.a.createElement("a",{href:"/@"+e.idName},e.logo?l.a.createElement("img",{src:"https://npocore.s3-us-west-2.amazonaws.com/"+e.logo,alt:""}):l.a.createElement("img",{src:"/static/img/no-logo.png",alt:""}))),e.verifiedNonprofit?l.a.createElement("img",{className:"nonprofit-badge",src:"/static/img/icons/501c3.svg",alt:""}):l.a.createElement("span",null)),l.a.createElement("div",null,l.a.createElement("div",{className:"organization-header"},l.a.createElement("h4",null,l.a.createElement("a",{style:{color:"black"},href:"/@"+e.idName},e.name)),l.a.createElement("div",{className:"organization-resources"},l.a.createElement("a",{href:"mailto:{organization.email}",target:"_"},e.email?l.a.createElement("img",{src:"/img/email.svg",alt:"{organization.name} Email Address"}):null),l.a.createElement("a",{href:"/@"+e.idName},l.a.createElement("img",{style:{transform:"translateY(-2px)"},src:"/img/link.svg",alt:"{organization.name}"})))),e.location.name?l.a.createElement("div",null,l.a.createElement("strong",null,"Location:")," ",e.location.name):l.a.createElement("span",null),l.a.createElement("div",null,l.a.createElement("strong",null,"Target Audiences:")," ",e.targetAudiences.join(", ")),l.a.createElement("div",null,l.a.createElement("strong",null,"Causes:")," ",e.causes.join(", ")),l.a.createElement("p",{className:"organization-description"},l.a.createElement("strong",null,"Description:")," ",e.description),l.a.createElement("div",{className:"text-right mb-2"},l.a.createElement("button",{className:"btn btn-link p-0",onClick:J},l.a.createElement("small",null,"Read More"))),l.a.createElement("div",{className:"organization-interests"},(e.interests||[]).map((function(e,t){return l.a.createElement("small",null,e)})))))})):l.a.createElement("div",{className:"text-center"},l.a.createElement("small",null,"No organizations yet!")))))};var f=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),c=Object(p.a)(o,2),i=c[0],s=c[1],E=Object(n.useState)([]),d=Object(p.a)(E,2),v=d[0],f=d[1],h=Object(n.useState)(!1),N=Object(p.a)(h,2),b=N[0],y=N[1],O=Object(n.useState)(""),j=Object(p.a)(O,2),w=j[0],C=j[1],k=Object(n.useState)(""),S=Object(p.a)(k,2),z=S[0],x=S[1],A=Object(n.useState)(""),P=Object(p.a)(A,2),L=P[0],R=P[1],T=function(){var e=Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/get-posts",{method:"GET",mode:"no-cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){s(e),r(e);var t=e.filter((function(e){return 1==e.featured}));f(t)})).catch((function(e){console.log("Exception:",e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){T()}),[]),Object(n.useEffect)((function(){F()}),[w,z,L]);var F=function(){var e=a;e=D(e),e=H(e),e=M(e),s(e)},D=function(e){var t=w.toLowerCase();return""===t?e:e.filter((function(e){return e.title.toLowerCase().includes(t)}))},H=function(e){var t=z.toLowerCase();return""===t?e:e.filter((function(e){return e.content.toLowerCase().includes(t)}))},M=function(e){return L?e.filter((function(e){return e.type.includes(L)})):e},q=function(e){var t=e.target;t.parentNode.style.display="none",t.parentNode.parentNode.parentNode.querySelector("p").className=""},B=function(e){y(!b)};return l.a.createElement("div",null,l.a.createElement(g.a,null,l.a.createElement("title",null,"NPO Core - Nonprofit Organization Opportunity Posts - Opportunities for everyone!")),l.a.createElement("div",{className:"py-5"},v.length?l.a.createElement("h1",null,"Featured Opportunity Posts"):l.a.createElement("span",null),l.a.createElement("div",{className:"organizations mt-5"},v?v.map((function(e,t){return l.a.createElement("div",{className:"post",key:t},e.image?l.a.createElement("div",{className:"post-header"},l.a.createElement("img",{className:"post-header-image",src:"https://npocore.s3-us-west-2.amazonaws.com/"+e.image,alt:""})):l.a.createElement("span",null),l.a.createElement("div",{className:"p-3"},l.a.createElement("h3",null,e.title),l.a.createElement("strong",null,"By: ",l.a.createElement("a",{href:"/@"+e.creator.idName},e.creator.name)),l.a.createElement("br",null),l.a.createElement("small",null,"Posted: ",new Date(e.datetimePosted).toLocaleDateString("en-US")),l.a.createElement("p",{className:"post-content mt-3"},e.content),l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{id:e._id,className:"btn btn-link p-0",onClick:q},l.a.createElement("small",null,"Read More"))),l.a.createElement("p",null,l.a.createElement("small",{className:"type"},e.type)),l.a.createElement("a",{style:{backgroundColor:e.button.color,borderColor:e.button.color},className:"solid-cta-button",href:e.button.link,target:"_blank"},e.button.text)))})):l.a.createElement("div",{className:"text-center"},l.a.createElement("small",null,"No featured posts yet!"))),l.a.createElement("h1",{className:"mt-5"},"Opportunity Posts"),l.a.createElement("p",null,"Check out all of the opportunities that our registered NPOs have posted!"),l.a.createElement("div",{className:"text-right"},b?l.a.createElement("button",{className:"toggle-filter",onClick:B},"Filters \u2191"):l.a.createElement("button",{className:"toggle-filter",onClick:B},"Filters \u2193")),b?l.a.createElement("div",{className:"filters my-3"},l.a.createElement("input",{className:"form-control search-bar",type:"text",placeholder:"Filter by Title",onChange:function(e){return C(e.target.value)}}),l.a.createElement("input",{className:"form-control search-bar",type:"text",placeholder:"Filter by Content",onChange:function(e){return x(e.target.value)}}),l.a.createElement("select",{onChange:function(e){return R(e.target.value)},required:!0},l.a.createElement("option",{value:""},"All Post Types"),l.a.createElement("option",{value:"Announcement"},"Announcement"),l.a.createElement("option",{value:"Event"},"Event"),l.a.createElement("option",{value:"Opportunity"},"Opportunity"),l.a.createElement("option",{value:"Job Opening"},"Job Opening"))):l.a.createElement("span",null),l.a.createElement("div",{className:"posts mt-4"},i?i.map((function(e,t){return l.a.createElement("div",{className:"post",key:t},l.a.createElement("div",{className:"post-header"},e.image?l.a.createElement("img",{className:"post-header-image",src:"https://npocore.s3-us-west-2.amazonaws.com/"+e.image,alt:""}):l.a.createElement("span",null)),l.a.createElement("div",{className:"p-3"},l.a.createElement("h3",null,e.title),l.a.createElement("strong",null,"By: ",l.a.createElement("a",{href:"/@"+e.creator.idName},e.creator.name)),l.a.createElement("br",null),l.a.createElement("small",null,"Posted: ",new Date(e.datetimePosted).toLocaleDateString("en-US")),l.a.createElement("p",{className:"post-content mt-3"},e.content),l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{id:e._id,className:"btn btn-link p-0",onClick:q},l.a.createElement("small",null,"Read More"))),l.a.createElement("p",null,l.a.createElement("small",{className:"type"},e.type)),l.a.createElement("a",{style:{backgroundColor:e.button.color,borderColor:e.button.color},className:"solid-cta-button",href:e.button.link,target:"_blank"},e.button.text)))})):l.a.createElement("div",{className:"text-center"},l.a.createElement("small",null,"No opportunity posts yet!")))))};var h=function(){return l.a.createElement("div",null,l.a.createElement(g.a,null,l.a.createElement("title",null,"NPO Core - Page not found!")),l.a.createElement("div",{className:"float-container"},l.a.createElement("h1",null,"404 - Page not found!"),l.a.createElement("p",null,"We're sorry, but we couldn't find the page you were looking for! Please make sure you were given or typed in the URL you were looking for correctly, or please ",l.a.createElement("a",{href:"/contact"},"contact us")," if you believe this is a true issue. So sorry for the inconvenience!"),l.a.createElement("div",{className:"cta-buttons"},l.a.createElement("a",{className:"ghost-cta-button",href:"/contact"},"Contact us"),l.a.createElement("a",{className:"solid-cta-button",href:"/"},"Return to home page"))))};var N=function(){return l.a.createElement("div",null,l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"hover-container"},l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/organizations",component:v}),l.a.createElement(i.a,{path:"/opportunities",component:f}),l.a.createElement(i.a,{component:h})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.745275c2.chunk.js.map
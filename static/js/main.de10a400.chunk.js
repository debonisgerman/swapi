(this.webpackJsonpswapi=this.webpackJsonpswapi||[]).push([[0],{44:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n.n(c),r=n(17),s=n.n(r),i=n(7),o=n(6),l=n.n(o),d=n(18),j=n(8),u=n(19),h=n.n(u),b=n(0);var p=function(){var t=Object(c.useState)([]),e=Object(j.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(!0),s=Object(j.a)(r,2),o=s[0],u=s[1];Object(c.useEffect)((function(){(function(){var t=Object(d.a)(l.a.mark((function t(){var e,n,c,r,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h()("https://swapi.dev/api/planets/");case 2:for(e=t.sent,n=e.data.results,c=0;c<n.length;c++)for(r=Object.keys(n[c]),s=0;s<r.length;s++)n[c][r[s]]=isNaN(parseFloat(n[c][r[s]]))?n[c][r[s]]:parseFloat(n[c][r[s]]);a(n.sort((function(t,e){return t.name>e.name?1:-1}))),u(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var p=function(t,e){var c="asc";t.target.classList.contains("active")&&t.target.classList.contains("asc")&&(c="desc");for(var r=document.querySelector(".table-head tr").children,s=0;s<r.length;s++)r[s].className=r[s].className.split("active").join("").split(" asc").join("").split(" desc").join(""),r[s].innerText=r[s].innerText.split(" \u2b07\ufe0f").join("").split(" \u2b06\ufe0f").join("");t.target.className="active ".concat(c);var o="asc"===c?Object(i.a)(n.sort((function(t,n){return t[e]>n[e]?1:-1}))):Object(i.a)(n.sort((function(t,n){return t[e]>n[e]?-1:1})));t.target.innerText=t.target.innerText+("asc"===c?" \u2b06\ufe0f":" \u2b07\ufe0f"),a(o)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Star Wars Planets"}),o?Object(b.jsx)("h3",{children:"Fetching data..."}):Object(b.jsxs)("table",{id:"table",border:"0",cellSpacing:"0",cellPadding:"0",children:[Object(b.jsx)("thead",{className:"table-head",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{className:"desktop",onClick:function(t){return p(t,"climate")},children:"Climate"}),Object(b.jsx)("th",{onClick:function(t){return p(t,"diameter")},children:"Diameter"}),Object(b.jsx)("th",{className:"desktop",onClick:function(t){return p(t,"gravity")},children:"Gravity"}),Object(b.jsx)("th",{className:"active asc",onClick:function(t){return p(t,"name")},children:"Name \u2b06\ufe0f"}),Object(b.jsx)("th",{className:"desktop",onClick:function(t){return p(t,"orbital_period")},children:"Orbital Period"}),Object(b.jsx)("th",{onClick:function(t){return p(t,"population")},children:"Population"}),Object(b.jsx)("th",{className:"desktop",onClick:function(t){return p(t,"rotation_period")},children:"Rotation Period"}),Object(b.jsx)("th",{className:"desktop",onClick:function(t){return p(t,"surface_water")},children:"Surface Water"}),Object(b.jsx)("th",{onClick:function(t){return p(t,"terrain")},children:"Terrain"})]})}),Object(b.jsx)("tbody",{className:"table-body",children:n.map((function(t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"desktop",children:t.climate}),Object(b.jsx)("td",{children:t.diameter}),Object(b.jsx)("td",{className:"desktop",children:t.gravity}),Object(b.jsx)("td",{children:t.name}),Object(b.jsx)("td",{className:"desktop",children:t.orbital_period}),Object(b.jsx)("td",{children:t.population}),Object(b.jsx)("td",{className:"desktop",children:t.rotation_period}),Object(b.jsx)("td",{className:"desktop",children:t.surface_water}),Object(b.jsx)("td",{children:t.terrain})]},t.name)}))})]})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),r(t),s(t)}))};n(44);s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),O()}},[[45,1,2]]]);
//# sourceMappingURL=main.de10a400.chunk.js.map
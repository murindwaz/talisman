webpackJsonp([6],{0:function(e,t,u){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var n=u(3),a=r(n),o=u(31),l=u(34),i=r(l),c=u(392),d=r(c),q=function(e){return a["default"].createElement("span",null,a["default"].createElement("strong",null,"N:")," ",e.noun," - ",a["default"].createElement("strong",null,"V:")," ",e.verb)},s=function(e,t){return e.noun===t.noun||e.verb===t.verb};(0,o.render)(a["default"].createElement(i["default"],{algorithm:d["default"],codeRenderer:q,comparator:s}),document.getElementById("schinke-mount"))},34:function(e,t,u){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=u(3),a=r(n),o=u(25),l=u(21),i=r(l),c=function(e){return e},d=function(e,t){return e===t},q=(0,o.compose)((0,o.withState)("wordOne","setWordOne",""),(0,o.withState)("wordTwo","setWordTwo","")),s=q(function(e){var t=e.algorithm,u=e.codeRenderer,r=void 0===u?c:u,n=e.comparator,o=void 0===n?d:n,l=e.wordOne,q=e.wordTwo,s=e.setWordOne,f=e.setWordTwo,$=l?t(l):null,m=q?t(q):null,b=$?r($):"",v=m?r(m):"",p="·",g="default";return $&&m&&(o($,m)?(p="=~",g="success"):(p="!~",g="error")),a["default"].createElement("table",null,a["default"].createElement("tbody",null,a["default"].createElement("tr",null,a["default"].createElement("td",null,a["default"].createElement(i["default"],{placeholder:"Word 1",value:l,onChange:function(e){return s(e.target.value)},status:g})),a["default"].createElement("td",{style:{width:"15%",textAlign:"center"}},a["default"].createElement("strong",null,p)),a["default"].createElement("td",null,a["default"].createElement(i["default"],{placeholder:"Word 2",value:q,onChange:function(e){return f(e.target.value)},status:g}))),a["default"].createElement("tr",null,a["default"].createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},b," "),a["default"].createElement("td",null),a["default"].createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},v," "))))});t["default"]=s},392:function(e,t){"use strict";function u(e){return e.replace(/j/g,"i").replace(/v/g,"u")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){var u=[],r=!0,n=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(u.push(o.value),!t||u.length!==t);r=!0);}catch(i){n=!0,a=i}finally{try{!r&&l["return"]&&l["return"]()}finally{if(n)throw a}}return u}return function(t,u){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,u);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t["default"]=function(e){var t=u(e.toLowerCase().replace(/[^a-z]/g,"")),l=t.replace(/que$/,"");if(t!==l&&n.has(t))return{noun:t,verb:t};for(var i=l,c=l,d=0,q=a.length;q>d;d++){var s=i.replace(a[d],"");if(s!==l){i=s;break}}for(var f=0,$=o.length;$>f;f++){var m=r(o[f],2),b=m[0],v=m[1];if(b.test(c)){var p=new RegExp((v?"(.{2,})":"")+b.source);c=c.replace(p,v||"");break}}return{noun:i.length>1?i:l,verb:c.length>1?c:l}};var n=new Set(["atque","quoque","neque","itaque","absque","apsque","abusque","adaeque","adusque","denique","deque","susque","oblique","peraeque","plenisque","quandoque","quisque","quaeque","cuiusque","cuique","quemque","quamque","quaque","quique","quorumque","quarumque","quibusque","quosque","quasque","quotusquisque","quousque","ubique","undique","usque","uterque","utique","utroque","utribique","torque","coque","concoque","contorque","detorque","decoque","excoque","extorque","obtorque","optorque","retorque","recoque","attorque","incoque","intorque","praetorque"]),a=[/ibus$/,/ius$/,/ae$/,/am$/,/as$/,/em$/,/es$/,/ia$/,/is$/,/nt$/,/os$/,/ud$/,/um$/,/us$/,/a$/,/e$/,/i$/,/o$/,/u$/],o=[[/iuntur$/,"$1i"],[/erunt$/,"$1i"],[/untur$/,"$1i"],[/iunt$/,"$1i"],[/unt$/,"$1i"],[/beris$/,"$1bi"],[/bor$/,"$1bi"],[/bo$/,"$1bi"],[/ero$/,"$1eri"],[/mini$/],[/ntur$/],[/stis$/],[/mur$/],[/mus$/],[/ris$/],[/sti$/],[/tis$/],[/tur$/],[/ns$/],[/nt$/],[/ri$/],[/m$/],[/r$/],[/s$/],[/t$/]]}});
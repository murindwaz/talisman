webpackJsonp([2],{0:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var u=r(3),s=n(u),o=r(31),i=r(34),a=n(i),l=r(383),g=n(l),f=r(384),c=n(f),d=r(385),b=n(d),h=r(386),S=n(h),E=r(101),p=n(E),A=r(387),m=n(A),v=r(388),$=n(v),y=function(t){return"["+t[0]+", "+t[1]+"]"},K=function(t,e){return t[0]===e[0]||t[0]===e[1]||t[1]===e[0]||t[1]===e[1]};(0,o.render)(s["default"].createElement(a["default"],{algorithm:g["default"]}),document.getElementById("caverphone-original-mount")),(0,o.render)(s["default"].createElement(a["default"],{algorithm:l.revisited}),document.getElementById("caverphone-revisited-mount")),(0,o.render)(s["default"].createElement(a["default"],{algorithm:c["default"]}),document.getElementById("cologne-mount")),(0,o.render)(s["default"].createElement(a["default"],{algorithm:b["default"],codeRenderer:y,comparator:K}),document.getElementById("double-metaphone-mount")),(0,o.render)(s["default"].createElement(a["default"],{algorithm:S["default"]}),document.getElementById("metaphone-mount")),(0,o.render)(s["default"].createElement(a["default"],{algorithm:p["default"]}),document.getElementById("mra-mount")),(0,o.render)(s["default"].createElement(a["default"],{algorithm:m["default"]}),document.getElementById("nysiis-original-mount")),(0,o.render)(s["default"].createElement(a["default"],{algorithm:A.refined}),document.getElementById("nysiis-refined-mount")),(0,o.render)(s["default"].createElement(a["default"],{algorithm:$["default"]}),document.getElementById("soundex-mount"))},9:function(t,e){"use strict";function r(t){return"string"==typeof t?t.split(""):t}function n(t){for(var e="string"==typeof t,n=r(t),u=[],s=0,o=n.length,i=null;o>s;s++)n[s]!==i&&(i=n[s],u.push(i));return e?u.join(""):u}function u(t){for(var e=Math.random(),r=t.length,n=0,u=0;r>u;u++)if(n+=t[u],n>=e)return u;return r-1}Object.defineProperty(e,"__esModule",{value:!0}),e.seq=r,e.squeeze=n,e.weightedRandomIndex=u},19:function(t,e,r){"use strict";function n(t){return t=s(t),t&&t.replace(o,u).replace(g,"")}var u=r(69),s=r(49),o=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,i="\\u0300-\\u036f\\ufe20-\\ufe23",a="\\u20d0-\\u20f0",l="["+i+a+"]",g=RegExp(l,"g");t.exports=n},34:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var u=r(3),s=n(u),o=r(25),i=r(21),a=n(i),l=function(t){return t},g=function(t,e){return t===e},f=(0,o.compose)((0,o.withState)("wordOne","setWordOne",""),(0,o.withState)("wordTwo","setWordTwo","")),c=f(function(t){var e=t.algorithm,r=t.codeRenderer,n=void 0===r?l:r,u=t.comparator,o=void 0===u?g:u,i=t.wordOne,f=t.wordTwo,c=t.setWordOne,d=t.setWordTwo,b=i?e(i):null,h=f?e(f):null,S=b?n(b):"",E=h?n(h):"",p="·",A="default";return b&&h&&(o(b,h)?(p="=~",A="success"):(p="!~",A="error")),s["default"].createElement("table",null,s["default"].createElement("tbody",null,s["default"].createElement("tr",null,s["default"].createElement("td",null,s["default"].createElement(a["default"],{placeholder:"Word 1",value:i,onChange:function(t){return c(t.target.value)},status:A})),s["default"].createElement("td",{style:{width:"15%",textAlign:"center"}},s["default"].createElement("strong",null,p)),s["default"].createElement("td",null,s["default"].createElement(a["default"],{placeholder:"Word 2",value:f,onChange:function(t){return d(t.target.value)},status:A}))),s["default"].createElement("tr",null,s["default"].createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},S," "),s["default"].createElement("td",null),s["default"].createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},E," "))))});e["default"]=c},69:function(t,e){"use strict";function r(t){return n[t]}var n={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss"};t.exports=r},101:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function u(t){if("string"!=typeof t)throw Error("talisman/phonetics/mra: the given name is not a string.");var e=(0,i["default"])(t).toUpperCase().replace(/[^A-Z]/g,"");e=e.charAt(0)+e.slice(1).replace(/[AEIOU]/g,""),e=(0,s.squeeze)(e);var r=Math.min(3,e.length-3);return e.slice(0,3)+e.substr(e.length-r,r)}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=u;var s=r(9),o=r(19),i=n(o)},383:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function u(t){for(;t.length<10;)t+="1";return t.slice(0,10)}function s(t,e){if("string"!=typeof e)throw Error("talisman/phonetics/caverphone: the given name is not a string.");e=(0,a["default"])(e).toLowerCase().replace(/[^a-z]/g,"");for(var r=l[t],n=0,s=r.length;s>n;n++){var i=o(r[n],2),g=i[0],f=i[1];e=e.replace(g,f)}return u(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.revisited=e.original=void 0;var o=function(){function t(t,e){var r=[],n=!0,u=!1,s=void 0;try{for(var o,i=t[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(a){u=!0,s=a}finally{try{!n&&i["return"]&&i["return"]()}finally{if(u)throw s}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=r(19),a=n(i),l={original:[[/e$/g,""],[/^(cou|rou|tou|enou|trou)gh/g,"$12f"],[/^gn/g,"2n"],[/^mb/g,"m2"],[/cq/g,"2q"],[/ci/g,"si"],[/ce/g,"se"],[/cy/g,"sy"],[/tch/g,"2ch"],[/c/g,"k"],[/q/g,"k"],[/x/g,"k"],[/v/g,"f"],[/dg/g,"2g"],[/tio/g,"sio"],[/tia/g,"sia"],[/d/g,"t"],[/ph/g,"fh"],[/b/g,"p"],[/sh/g,"s2"],[/z/g,"s"],[/^[aieou]/g,"A"],[/[aeiou]/g,"3"],[/i/g,"y"],[/^y3/g,"Y3"],[/^y/g,"A"],[/y/g,"3"],[/3gh3/g,"3kh3"],[/gh/g,"22"],[/g/g,"k"],[/s+/g,"S"],[/t+/g,"T"],[/p+/g,"P"],[/k+/g,"K"],[/f+/g,"F"],[/m+/g,"M"],[/n+/g,"N"],[/w3/g,"W3"],[/wh3/g,"Wh3"],[/w$/g,"3"],[/w/g,"2"],[/^h/g,"A"],[/h/g,"2"],[/r3/g,"R3"],[/r$/g,"3"],[/r/g,"2"],[/l3/g,"L3"],[/l$/g,"3"],[/l/g,"2"],[/2/g,""],[/3$/g,"A"],[/3/g,""]],revisited:[[/e$/g,""],[/^(cou|rou|tou|enou|trou)gh/g,"$12f"],[/^gn/g,"2n"],[/mb$/g,"mb"],[/cq/g,"2q"],[/c([iey])/g,"s$1"],[/tch/g,"2ch"],[/[cqx]/g,"k"],[/v/g,"f"],[/dg/g,"2g"],[/ti([oa])/g,"si$1"],[/d/g,"t"],[/ph/g,"fh"],[/b/g,"p"],[/sh/g,"s2"],[/z/g,"s"],[/^[aeiou]/g,"A"],[/[aeiou]/g,"3"],[/j/g,"y"],[/^y3/g,"Y3"],[/^y/g,"A"],[/y/g,"3"],[/3gh3/g,"3kh3"],[/gh/g,"22"],[/g/g,"k"],[/s+/g,"S"],[/t+/g,"T"],[/p+/g,"P"],[/k+/g,"K"],[/f+/g,"F"],[/m+/g,"M"],[/n+/g,"N"],[/w3/g,"W3"],[/wh3/g,"Wh3"],[/w$/g,"3"],[/w/g,"2"],[/^h/g,"A"],[/h/g,"2"],[/r3/g,"R3"],[/r$/g,"3"],[/r/g,"2"],[/l3/g,"L3"],[/l$/g,"3"],[/l/g,"2"],[/2/g,""],[/3$/g,"A"],[/3/g,""]]},g=s.bind(null,"original"),f=s.bind(null,"revisited");e["default"]=g,e.original=g,e.revisited=f},384:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function u(t){return t.replace(/Ä/g,"A").replace(/Ö/g,"O").replace(/Ü/g,"U").replace(/ß/g,"SS").replace(/PH/g,"F")}function s(t){if("string"!=typeof t)throw Error("talisman/phonetics/cologne: the given name is not a string.");t=(0,a["default"])(u(t.toUpperCase())).replace(/[^A-Z]/g,"");for(var e=[],r=0,n=t.length;n>r;r++){var s=t[r],i=l[s];if(void 0!==i)e.push(i);else if("D"===s||"T"===s)e.push(g.has(t[r+1])?8:2);else if("C"===s){var h=t[r-1],S=t[r+1];!h&&f.has(S)||c.has(S)&&!d.has(h)?e.push(4):e.push(8)}else"X"===s&&e.push(b.has(t[r-1])?8:48)}return e=(0,o.squeeze)(e).filter(function(t,e){return!e||t}),e.join("")}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=s;var o=r(9),i=r(19),a=n(i),l={H:null,A:0,E:0,I:0,O:0,U:0,J:0,Y:0,B:1,P:1,F:3,V:3,W:3,G:4,K:4,Q:4,L:5,M:6,N:6,R:7,S:8,Z:8},g=new Set(["C","S","Z"]),f=new Set(["A","H","K","L","O","Q","R","U","X"]),c=new Set(["A","H","K","O","Q","U","X"]),d=new Set(["S","Z"]),b=new Set(["C","Q","K"])},385:function(t,e){"use strict";function r(t){return i.test(t)}function n(t){return 1===t.length&&a.has(t)}function u(t){if("string"!=typeof t)throw Error("talisman/phonetics/doubleMetaphone: the given word is not a string.");for(var e=t.toUpperCase()+"     ",r=o.test(e.slice(0,2))?1:0,u=t.length,i=u-1,a=[],l=[],g=r;;){if(g>u||a.length>=4&&l.length>=4)break;var f=e[g],c=1;n(f)&&(g||(a.push("A"),l.push("A")));var d=E[f];if(d){var b=d(e,g,i,u),h=s(b,3),S=h[0],p=void 0===S?null:S,A=h[1],m=void 0===A?null:A,v=h[2],$=void 0===v?1:v;c=$,p&&(a=a.concat(p)),m&&(l=l.concat(m))}g+=c}return[a.join("").slice(0,4),l.join("").slice(0,4)]}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){var r=[],n=!0,u=!1,s=void 0;try{for(var o,i=t[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(a){u=!0,s=a}finally{try{!n&&i["return"]&&i["return"]()}finally{if(u)throw s}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e["default"]=u;var o=/^GN|KN|PN|WR|PS$/,i=/W|K|CZ|WITZ/,a=new Set(["A","E","I","O","U","Y"]),l=new Set(["HARAC","HARIS"]),g=new Set(["HOR","HYM","HIA","HEM"]),f=new Set(["VAN ","VON "]),c=new Set(["ORCHES","ARCHIT","ORCHID"]),d=new Set(["T","S"]),b=new Set(["A","O","U","E"]),h=new Set(["L","R","N","M","B","H","F","V","W"," "]),S=new Set(["CE","CI"]),E={B:function(t,e){return["P","P","B"===t.substr(e+1,1)?2:1]},CH:function(t,e){return e&&"CHAE"===t.substr(e,4)?["K","X",2]:e||!l.has(t.substr(e+1,5))&&!g.has(t.substr(e+1,3))||"CHORE"===t.substr(0,5)?f.has(t.substr(0,4))||"SCH"===t.substr(0,3)||c.has(t.substr(e-2,6))||d.has(t.substr(e+2,1))||(!e||b.has(t.substr(e-1,1)))&&h.has(t.substr(e+2,1))?["K","K",2]:e?["MC"===t.substr(0,2)?"K":"X","K",2]:["X","X",2]:["K","K",2]},CC:function(t,e){return/^I|E|H$/.test(t.substr(e+2,1))&&"HU"!==t.substr(e+2,2)?1===e&&"A"===t.substr(e-1,1)||/^UCCE(E|S)$/.test(t.substr(e-1,5))?[["K","S"],["K","S"],3]:["X","X",3]:["K","K",2]},C:function(t,e){if(e>1&&n(t.substr(e-2,1))&&"ACH"===t.substr(e-1,3)&&"I"!==t.substr(e+2,1)&&("E"!==t.substr(e+2,1)||/^(B|M)ACHER$/.test(t.substr(e-2,6))))return["K","K",2];if(!e&&"CAESAR"===t.substr(e,6))return["S","S",2];if("CHIA"===t.substr(e,4))return["K","K",2];if("CH"===t.substr(e,2))return E.CH(t,e);if("CZ"===t.substr(e,2)&&"WICZ"!==t.substr(e-2,4))return["S","X",2];if("CIA"===t.substr(e+1,3))return["X","X",3];if("CC"===t.substr(e,2)&&1!==e&&"M"!==t.substr(0,1))return E.CC(t,e);if(/^C(K|G|Q)$/.test(t.substr(e,2)))return["K","K",2];if(/^C(I|E|Y)$/.test(t.substr(e,2)))return["S",/^CI(O|E|A)$/.test(t.substr(e,3))?"X":"S",2];if(/^ (C|Q|G)$/.test(t.substr(e+1,2)))return["K","K",3];var r=1;return/^C|K|Q$/.test(t.substr(e+1,1))&&!S.has(t.substr(e+1,2))&&(r=2),["K","K",r]},"Ç":function(){return["S","S",1]},D:function(t,e){return"DG"===t.substr(e,2)?/^I|E|Y$/.test(t.substr(e+2,1))?["J","J",3]:[["T","K"],["T","K"],2]:["T","T",/^D(T|D)$/.test(t.substr(e,2))?2:1]},F:function(t,e){return["F","F","F"===t.substr(e+1,1)?2:1]},GH:function(t,e){return e&&!n(t.substr(e-1,1))?["K","K",2]:e?e>1&&/^B|H|D$/.test(t.substr(e-2,1))||e>2&&/^B|H|D$/.test(t.substr(e-3,1))||e>3&&/^B|H$/.test(t.substr(e-4,1))?[null,null,2]:e>2&&"U"===t.substr(e-1,1)&&/^C|G|L|R|T$/.test(t.substr(e-3,1))?["F","F",2]:e&&"I"!==t.substr(e-1,1)?["K","K",2]:[null,null,2]:"I"===t.substr(e+2,1)?["J","J",2]:["K","K",2]},GN:function(t,e){return 1===e&&n(t.substr(0,1))&&!r(t)?[["K","N"],"N",2]:"EY"===t.substr(e+2,2)||"Y"===t.substr(e+1,1)||r(t)?[["K","N"],["K","N"],2]:["N",["K","N"],2]},G:function(t,e){var n=t.substr(e+1,1),u=t.substr(e+1,2);return"H"===n?E.GH(t,e):"N"===n?E.GN(t,e):"LI"!==u||r(t)?(e||"Y"!==n&&!/^(E(S|P|B|L|Y|I|R)|I(B|L|N|E))$/.test(u))&&("ER"!==u&&"Y"!==n||/^(D|R|M)ANGER$/.test(t.substr(0,6))||/^E|I$/.test(t.substr(e-1,1))||/^(R|O)GY$/.test(t.substr(e-1,3)))?/^E|I|Y$/.test(n)||/^(A|O)GGI$/.test(t.substr(e-1,4))?/^V(A|O)N /.test(t.substr(0,4))||"SCH"===t.substr(0,3)||t.substr(e+1,!1)?["K","K",2]:"IER "===t.substr(e+1,4)?["J","J",2]:["J","K",2]:["K","K","G"===n?2:1]:["K","J",2]:[["K","L"],"L",2]},H:function(t,e){return e&&!n(t.substr(e-1,1))||!n(t.substr(e+1,1))?[null,null,1]:["H","H",2]},J:function(t,e,u){if("JOSE"===t.substr(e,4)||"SAN "===t.substr(0,4))return!e&&" "===t.substr(e+4,1)||"SAN "===t.substr(0,4)?["H","H",1]:["J","H",1];var s="J"===t.substr(e+1,1)?2:1;return e||"JOSE"===t.substr(e,4)?n(t.substr(e-1,1))&&!r(t)&&/^A|O$/.test(t.substr(e+1,1))?["J","H",s]:u===e?["J",null,s]:/^L|T|K|S|N|M|B|Z$/.test(t.substr(e+1,1))||/^S|K|L$/.test(t.substr(e-1,1))?[null,null,s]:["J","J",s]:["J","A",s]},K:function(t,e){return["K","K","K"===t.substr(e+1,1)?2:1]},L:function(t,e,r,n){return"L"===t.substr(e+1,1)?e===n-3&&/^(ILL(O|A)|ALLE)$/.test(t.substr(e-1,4))||/^(A|O)S$/.test(t.substr(r-1,2)||/^A|O$/.test(t.substr(r,1)))&&"ALLE"===t.substr(e-1,4)?["L",null,2]:["L","L",2]:["L","L",1]},M:function(t,e,r){return"UMB"===t.substr(e-1,3)&&(e===r-1||"ER"===t.substr(e+2,2))||"M"===t.substr(e+1,1)?["M","M",2]:["M","M",1]},N:function(t,e){return["N","N","N"===t.substr(e+1,1)?2:1]},"Ñ":function(){return["N","N",1]},P:function(t,e){return"H"===t.substr(e+1,1)?["F","F",2]:["P","P",/^P|B$/.test(t.substr(e+1,1))?2:1]},Q:function(t,e){return["K","K","Q"===t.substr(e+1,1)?2:1]},R:function(t,e,n){var u="R"===t.substr(e+1,1)?2:1;return e!==n||r(t)||"IE"!==t.substr(e-2,2)||/^M(E|A)$/.test(t.substr(e-4,2))?["R","R",u]:[null,"R",u]},SH:function(t,e){return/^H(EIM|OEK|OLM|OLZ)$/.test(t.substr(e+1,4))?["S","S",2]:["X","X",2]},SC:function(t,e){return"H"===t.substr(e+2,1)?/^OO|ER|EN|UY|ED|EM$/.test(t.substr(e+3,2))?[/^E(R|N)$/.test(t.substr(e+3,2))?"X":["S","K"],["S","K"],3]:["X",e||n(t.substr(3,1))||"W"===t.substr(e+3,1)?"X":"S",3]:/^I|E|Y$/.test(t.substr(e+2,1))?["S","S",3]:[["S","K"],["S","K"],3]},S:function(t,e,n){return/^(I|Y)SL$/.test(t.substr(e-1,3))?[null,null,1]:e||"SUGAR"!==t.substr(e,5)?"SH"===t.substr(e,2)?E.SH(t,e):/^SI(O|A)$/.test(t.substr(e,3))||"SIAN"===t.substr(e,4)?["S",r(t)?"S":"X",3]:!e&&/^M|N|L|W$/.test(t.substr(e+1,1))||"Z"===t.substr(e+1,1)?["S","X","Z"===t.substr(e+1,1)?2:1]:"SC"===t.substr(e,2)?E.SC(t,e):[n===e&&/^(A|O)I$/.test(t.substr(e-2,2))?null:"S","S",/^S|Z$/.test(t.substr(e+1,1))?2:1]:["X","S",1]},TH:function(t,e){return/^(O|A)M$/.test(t.substr(e+2,2))||/^V(A|O)N /.test(t.substr(0,4))||"SCH"===t.substr(0,3)?["T","T",2]:["0","T",2]},T:function(t,e){return"TION"===t.substr(e,4)||/^T(IA|CH)$/.test(t.substr(e,3))?["X","X",3]:"TH"===t.substr(e,2)||"TTH"===t.substr(e,3)?E.TH(t,e):["T","T",/^T|D$/.test(t.substr(e+1,1))?2:1]},V:function(t,e){return["F","F","V"===t.substr(e+1,1)?2:1]},W:function(t,e,r){if("WR"===t.substr(e,2))return["R","R",2];var u=[],s=[];return!e&&n(t.substr(e+1,1)||"WH"===t.substr(e,2))&&(u.push("A"),s.push(n(t.substr(e+1,1))?"F":"A")),e===r&&n(t.substr(e-1,1))||"SCH"===t.substr(0,3)||/^EWSKI|EWSKY|OWSKI|OWSKY$/.test(t.substr(e-1,5))?[u,s.concat("F"),1]:/^WI(C|T)Z$/.test(t.substr(e,4))?[u.concat(["T","S"]),s.concat(["F","X"]),4]:[u,s,1]},X:function(t,e,r){if(!e)return["S","S",1];var n=/^C|X$"/.test(t.substr(e+1,1))?2:1;return e===r&&/^(I|E)AU$/.test(t.substr(e-3,3))||/^(A|O)U$/.test(t.substr(e-2,2))?[null,null,n]:[["K","S"],["K","S"],n]},Z:function(t,e){if("H"===t.substr(e+1,1))return["J","J",2];var n="Z"===t.substr(e+1,1)?2:1;return/^Z(O|I|A)$/.test(t.substr(e+1,2))||e&&r(t)&&"T"===t.substr(e-1,1)?["S",["T","S"],n]:["S","S",n]}}},386:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function u(t){if("string"!=typeof t)throw Error("talisman/phonetics/metaphone: the given word is not a string.");for(var e=(0,o["default"])(t).toLowerCase().replace(/[^a-z]/g,""),r=0,n=i.length;n>r;r++)e=e.replace(i[r][0],i[r][1]);return e.toUpperCase()}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=u;var s=r(19),o=n(s),i=[[/([bcdfhjklmnpqrstvwxyz])\1+/g,"$1"],[/^ae/g,"E"],[/^[gkp]n/g,"N"],[/^wr/g,"R"],[/^x/g,"S"],[/^wh/g,"W"],[/mb$/g,"M"],[/(?!^)sch/g,"SK"],[/th/g,"0"],[/t?ch|sh/g,"X"],[/c(?=ia)/g,"X"],[/[st](?=i[ao])/g,"X"],[/s?c(?=[iey])/g,"S"],[/[cq]/g,"K"],[/dg(?=[iey])/g,"J"],[/d/g,"T"],[/g(?=h[^aeiou])/g,""],[/gn(ed)?/g,"N"],[/([^g]|^)g(?=[iey])/g,"$1J"],[/g+/g,"K"],[/ph/g,"F"],[/([aeiou])h(?=\b|[^aeiou])/g,"$1"],[/[wy](?![aeiou])/g,""],[/z/g,"S"],[/v/g,"F"],[/(?!^)[aeiou]+/g,""]]},387:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function u(t,e){if("string"!=typeof e)throw Error("talisman/phonetics/nysiis: the given name is not a string.");e=(0,a["default"])(e).toUpperCase().trim().replace(/[^A-Z]/g,"");for(var r=l[t],n=0,u=r.first.length;u>n;n++){var i=s(r.first[n],2),g=i[0],f=i[1];e=e.replace(g,f)}var c=e.charAt(0);"original"===t&&(e=e.slice(1));for(var d=0,b=r.second.length;b>d;d++){var h=s(r.second[d],2),g=h[0],f=h[1];e=e.replace(g,f)}return c+(0,o.squeeze)(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.refined=e.original=void 0;var s=function(){function t(t,e){var r=[],n=!0,u=!1,s=void 0;try{for(var o,i=t[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(a){u=!0,s=a}finally{try{!n&&i["return"]&&i["return"]()}finally{if(u)throw s}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=r(9),i=r(19),a=n(i),l={original:{first:[[/JR$/g,""],[/SR$/g,""],[/^MAC/g,"MCC"],[/^KN/g,"NN"],[/^K/g,"C"],[/^(PH|PF)/g,"FF"],[/^SCH/g,"SSS"],[/(EE|IE)$/g,"Y"],[/(DT|RT|RD|NT|ND)$/g,"D"]],second:[[/EV/g,"AF"],[/[EIOU]/g,"A"],[/Q/g,"G"],[/Z/g,"S"],[/(M|KN)/g,"N"],[/K/g,"C"],[/SCH/g,"SSS"],[/PH/g,"FF"],[/([^A])H/g,"$1"],[/(.)H[^A]/g,"$1"],[/AW/g,"A"],[/S$/g,""],[/AY$/g,"Y"],[/A$/g,""]]},refined:{first:[[/JR$/g,""],[/SR$/g,""],[/(S|Z)$/g,""],[/MAC/g,"MC"],[/PH/g,"F"],[/IX$/g,"IC"],[/EX$/g,"EC"],[/(YE|EE|IE)/g,"Y"],[/(DT|RT|RD|NT|ND)$/g,"D"],[/(.+)EV/g,"$1EF"]],second:[[/([AEIOU]+)W/g,"$1"],[/[EIOU]/g,"A"],[/AA+/g,"A"],[/GHT/g,"GT"],[/DG/g,"G"],[/PH/g,"F"],[/(.+)HA/g,"$1A"],[/A+H/g,"A"],[/KN/g,"N"],[/K/g,"C"],[/(.+)M/g,"$1N"],[/(.+)Q/g,"$1G"],[/(SH|SCH)/g,"S"],[/YW/g,"Y"],[/(.+)Y(.+)/g,"$1A$2"],[/WR/g,"R"],[/(.+)Z/g,"$1S"],[/AY$/g,"Y"],[/A+$/g,""],[/^\w/g,""]]}},g=u.bind(null,"original"),f=u.bind(null,"refined");e["default"]=g,e.original=g,e.refined=f},388:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function u(t){for(;t.length<4;)t+="0";return t.slice(0,4)}function s(t){if("string"!=typeof t)throw Error("talisman/phonetics/soundex: the given name is not a string.");t=(0,a["default"])(t).toUpperCase().replace(/[^A-Z]/g,"");for(var e=t.charAt(0),r="",n=1,s=t.length;s>n;n++)"D"!==f[t[n]]&&(r+=f[t[n]]);r.charAt(0)===f[e]&&(r=r.slice(1));var i=(0,o.squeeze)(r).replace(/0/g,"");return u(e+i)}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=s;var o=r(9),i=r(19),a=n(i),l="AEIOUYWHBPFVCSKGJQXZDTLMNR".split(""),g="000000DD111122222222334556".split(""),f={};l.forEach(function(t,e){return f[t]=g[e]})}});
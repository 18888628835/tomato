(this.webpackJsonptomato=this.webpackJsonptomato||[]).push([[7],{301:function(e,t,n){"use strict";var a=n(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},c=n(82),i=function(e,t){return a.createElement(c.a,Object.assign({},e,{ref:t,icon:r}))};i.displayName="UserOutlined";t.a=a.forwardRef(i)},308:function(e,t,n){"use strict";n.r(t);var a=n(93),r=n.n(a),c=n(94),i=n(92),o=n(88),s=n(78),l=n(6),u=n(0),d=n(3),p=n.n(d),f=n(8),m=n.n(f),g=n(64),h=n.n(g),v=n(9),j=n.n(v),x=n(87),b=n(60);function O(e){var t=e.className,n=e.direction,a=e.index,r=e.marginDirection,c=e.children,i=e.split,o=e.wrap,s=u.useContext(w),l=s.horizontalSize,d=s.verticalSize,f=s.latestIndex,g={};return"vertical"===n?a<f&&(g={marginBottom:l/(i?2:1)}):g=p()(p()({},a<f&&m()({},r,l/(i?2:1))),o&&{paddingBottom:d}),null===c||void 0===c?null:u.createElement(u.Fragment,null,u.createElement("div",{className:t,style:g},c),a<f&&i&&u.createElement("span",{className:"".concat(t,"-split"),style:g},i))}var z=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},w=u.createContext({latestIndex:0,horizontalSize:0,verticalSize:0}),y={small:8,middle:16,large:24};var C=function(e){var t,n=u.useContext(b.b),a=n.getPrefixCls,r=n.space,c=n.direction,i=e.size,o=void 0===i?(null===r||void 0===r?void 0:r.size)||"small":i,s=e.align,l=e.className,d=e.children,f=e.direction,g=void 0===f?"horizontal":f,v=e.prefixCls,C=e.split,S=e.style,k=e.wrap,E=void 0!==k&&k,B=z(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),N=u.useMemo((function(){return(Array.isArray(o)?o:[o,o]).map((function(e){return function(e){return"string"===typeof e?y[e]:e||0}(e)}))}),[o]),M=h()(N,2),P=M[0],L=M[1],I=Object(x.a)(d,{keepEmpty:!0});if(0===I.length)return null;var R=void 0===s&&"horizontal"===g?"center":s,q=a("space",v),A=j()(q,"".concat(q,"-").concat(g),(t={},m()(t,"".concat(q,"-rtl"),"rtl"===c),m()(t,"".concat(q,"-align-").concat(R),R),t),l),U="".concat(q,"-item"),D="rtl"===c?"marginLeft":"marginRight",_=0,Q=I.map((function(e,t){return null!==e&&void 0!==e&&(_=t),u.createElement(O,{className:U,key:"".concat(U,"-").concat(t),direction:g,index:t,marginDirection:D,split:C,wrap:E},e)}));return u.createElement("div",p()({className:A,style:p()(p()({},E&&{flexWrap:"wrap",marginBottom:-L}),S)},B),u.createElement(w.Provider,{value:{horizontalSize:P,verticalSize:L,latestIndex:_}},Q))},S=n(309),k=n(107),E=n(79),B=n(27),N=n(86),M=n(301),P={icon:function(e,t){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M81.8 537.8a60.3 60.3 0 010-51.5C176.6 286.5 319.8 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c-192.1 0-335.4-100.5-430.2-300.2z",fill:t}},{tag:"path",attrs:{d:"M512 258c-161.3 0-279.4 81.8-362.7 254C232.6 684.2 350.7 766 512 766c161.4 0 279.5-81.8 362.7-254C791.4 339.8 673.3 258 512 258zm-4 430c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z",fill:t}},{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258s279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766z",fill:e}},{tag:"path",attrs:{d:"M508 336c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z",fill:e}}]}},name:"eye",theme:"twotone"},L=n(82),I=function(e,t){return u.createElement(L.a,Object.assign({},e,{ref:t,icon:P}))};I.displayName="EyeTwoTone";var R=u.forwardRef(I),q={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},A=function(e,t){return u.createElement(L.a,Object.assign({},e,{ref:t,icon:q}))};A.displayName="EyeInvisibleOutlined";var U=u.forwardRef(A);function D(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 345px;\n  margin: 0 auto;\n  > h1 {\n    text-align: center;\n  }\n  .signUp {\n    width: 100%;\n    margin-bottom: 20px;\n  }\n"]);return D=function(){return e},e}var _=E.a.section(D());t.default=function(){var e=Object(u.useState)({account:"",password:"",password_confirmation:""}),t=Object(o.a)(e,2),n=t[0],a=t[1],s=function(e){a((function(t){return Object(i.a)(Object(i.a)({},t),e)}))},d=function(){var e=Object(c.a)(r.a.mark((function e(){var t,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.account,a=n.password,c=n.password_confirmation,e.prev=1,e.next=4,N.a.post("sign_up/user",{account:t,password:a,password_confirmation:c});case 4:alert("\u6ce8\u518c\u6210\u529f"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),alert(e.t0.response.data.errors.account[0]);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(_,{children:[Object(l.jsx)("h1",{children:"\u6ce8\u518c\u756a\u8304\u571f\u8c46\uff01"}),Object(l.jsxs)(C,{direction:"vertical",size:"large",children:[Object(l.jsx)(S.a,{size:"large",placeholder:"\u8bf7\u8f93\u5165\u8d26\u53f7",prefix:Object(l.jsx)(M.a,{}),onBlur:function(e){s({account:e.target.value})}}),Object(l.jsx)(S.a.Password,{size:"large",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",iconRender:function(e){return e?Object(l.jsx)(R,{}):Object(l.jsx)(U,{})},onBlur:function(e){s({password:e.target.value})}}),Object(l.jsx)(S.a.Password,{size:"large",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",iconRender:function(e){return e?Object(l.jsx)(R,{}):Object(l.jsx)(U,{})},onBlur:function(e){s({password_confirmation:e.target.value})}}),Object(l.jsx)(k.a,{className:"signUp",onClick:d,children:"\u5b8c\u6210\u6ce8\u518c"})]}),Object(l.jsxs)("span",{children:["\u5982\u679c\u60a8\u6709\u8d26\u53f7\uff0c\u8bf7",Object(l.jsx)(B.b,{to:"/",children:Object(l.jsx)(k.a,{type:"link",children:"\u767b\u5f55"})})]})]})}},86:function(e,t,n){"use strict";var a=n(103),r=n.n(a).a.create({baseURL:"https://gp-server.hunger-valley.com/",headers:{"t-app-id":"23428m5P3TFxUWgDpjgfAkNo","t-app-secret":"7sSqdQDvUrGrBTBi7FDCeevi"}});r.interceptors.request.use((function(e){var t=localStorage.getItem("x-token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(function(e){return Promise.reject(e)})),r.interceptors.response.use((function(e){return e.headers["x-token"]&&localStorage.setItem("x-token",e.headers["x-token"]),e}),(function(e){return Promise.reject(e)})),t.a=r}}]);
//# sourceMappingURL=7.5363ebbe.chunk.js.map
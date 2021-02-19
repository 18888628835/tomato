(this.webpackJsonptomato=this.webpackJsonptomato||[]).push([[8],{307:function(e,n,t){"use strict";t.r(n);var r=t(92),o=t(93),a=t.n(o),c=t(94),i=t(88),s=t(6),u=t(0),d=t.n(u),l=t(86),f=t(78),p=t(79);function j(){var e=Object(f.a)(["\n  > svg {\n    width: 30px;\n    height: 30px;\n  }\n"]);return j=function(){return e},e}var h=p.a.div(j()),m=function(e){return Object(s.jsx)(h,{children:Object(s.jsx)("svg",{className:"icon","aria-hidden":"true",children:Object(s.jsx)("use",{xlinkHref:"#icon-".concat(e.iconName)})})})};function b(){var e=Object(f.a)(["\n  padding: 0 64px;\n  display: flex;\n  justify-content: space-between;\n  height: 40px;\n  border-bottom: 1px solid #eeeeee;\n  .userMenu {\n    display: flex;\n    align-items: center;\n  }\n  .logo {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .loginOut {\n    border: 1px solid red;\n  }\n"]);return b=function(){return e},e}var x=p.a.header(b()),O=d.a.memo((function(e){return Object(s.jsxs)(x,{children:[Object(s.jsxs)("div",{className:"logo",children:[Object(s.jsx)(m,{iconName:"fanqie"}),"\u756a\u8304\u95f9\u949f"]}),e.children]})}));function v(){var e=Object(f.a)(["\n  overflow: hidden;\n  display: flex;\n  padding: 20px;\n  justify-content: space-around;\n  @media (max-width: 600px) {\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  > div {\n    overflow: hidden;\n    border: 1px solid #3333;\n    border-radius: 10px;\n    padding: 20px;\n    @media (max-width: 600px) {\n      flex: 1;\n    }\n    @media (min-width: 600px) {\n      width: calc(50% - 8px);\n    }\n\n    margin-bottom: 10px;\n  }\n"]);return v=function(){return e},e}var g=p.a.main(v()),T=d.a.memo((function(e){return Object(s.jsx)(g,{children:e.children})})),y=t(309),k=t(316),w="ADD_TASK",D="UPDATE_TASK",F="SET_DESCRIPTION",U="SET_EDIT",N=d.a.memo((function(e){var n=e.description,t=e.dispatch,r=e.onAddTask;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(y.a,{placeholder:"\u65b0\u589e\u4efb\u52a1",onChange:function(e){t({type:F,formData:e.target.value})},onKeyUp:function(e){"Enter"===e.key&&r()},value:n,suffix:Object(s.jsx)(k.a,{onClick:function(){return r()}})})})})),_=t(310),S=t(313),E=t(317);function L(){var e=Object(f.a)(["\n  overflow-y: auto;\n  max-height: 445px;\n  overflow-x: hidden;\n  > div {\n    display: flex;\n    border-bottom: 1px solid #3333;\n    padding: 8px 0;\n    &:hover {\n      background-color: #fff3d2;\n    }\n    .describe {\n      margin-left: 16px;\n    }\n    .input {\n      border: 0;\n      height: 20px;\n      outline: none;\n      background-color: transparent;\n      color: grey;\n    }\n  }\n  .centerLine {\n    text-decoration: line-through;\n    color: gainsboro;\n  }\n"]);return L=function(){return e},e}var C=_.a.Panel,A=p.a.div(L()),I=function(e){return e.filter((function(e){return!1===e.deleted}))},M=function(e){return I(e).filter((function(e){return!1===e.completed}))},G=function(e){return I(e).filter((function(e){return!0===e.completed}))},P=d.a.memo((function(e){var n=e.todoList,t=e.onUpdateTask,r=e.dispatch,o=e.edit,a=function(e){return e.map((function(e){return Object(s.jsxs)("div",{className:!0===e.completed?"centerLine":"",children:[Object(s.jsx)(S.a,{checked:e.completed,onChange:function(n){t(e.id,{completed:n.target.checked})}}),Object(s.jsx)("span",{className:"describe",onDoubleClick:function(){r({type:U,formData:[e.id]})},children:o[0]===e.id?(n=e.description,a=e.id,Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{className:"input",autoFocus:!0,defaultValue:n,onKeyUp:function(e){"Enter"===e.key&&(t(a,{description:e.target.value}),r({type:U,formData:[]}))},onBlur:function(e){t(a,{description:e.target.value})}}),Object(s.jsxs)("span",{children:[Object(s.jsx)(k.a,{style:{cursor:"pointer",color:"grey"},onClick:function(e){r({type:U,formData:[]})}}),Object(s.jsx)(E.a,{style:{color:"grey",margin:"0 10px"},onClick:function(){t(a,{deleted:!0})}})]})]})):e.description})]},e.id);var n,a}))};return Object(s.jsxs)(A,{children:[a(M(n)),Object(s.jsx)(_.a,{style:{border:"none",background:"none"},defaultActiveKey:["1"],ghost:!0,children:Object(s.jsx)(C,{header:"\u6700\u8fd1\u5b8c\u6210\u7684",children:a(G(n))},"1")})]})})),z=t(311),H=t(107),K=t(314),B=t(318),R=t(1),q=t(27),J=d.a.memo((function(e){var n=Object(R.f)(),t=Object(s.jsx)(z.a,{children:Object(s.jsx)(z.a.Item,{onClick:function(){localStorage.setItem("x-token",""),n.push("/")},children:Object(s.jsx)("span",{children:"\u6ce8\u9500"})})});return Object(s.jsx)("div",{className:e.className,children:""===e.user?Object(s.jsx)(H.a,{children:Object(s.jsx)(q.b,{to:"/",children:"\u767b\u5f55"})}):Object(s.jsx)(K.a,{overlay:t,children:Object(s.jsxs)("span",{className:"ant-dropdown-link",children:[e.user," ",Object(s.jsx)(B.a,{})]})})})})),Q=t(296),V={edit:[],todoList:[],description:""},W=function(e,n){switch(n.type){case w:case D:return Object(r.a)(Object(r.a)({},e),{},{todoList:n.formData});case F:return Object(r.a)(Object(r.a)({},e),{},{description:n.formData});case U:return Object(r.a)(Object(r.a)({},e),{},{edit:n.formData})}},X=function(){var e=Object(u.useReducer)(W,V),n=Object(i.a)(e,2),t=n[0],r=n[1],o=t.edit,s=t.todoList,d=t.description,f=function(){var e=Object(c.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("todos",{description:d}).then(null,(function(e){return console.log(e)}));case 2:(n=e.sent)&&(console.log(n),r({type:w,formData:[n.data.resource].concat(Object(Q.a)(s))}),r({type:F,formData:""}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(n,t){var o,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.put("todos/".concat(n),t);case 2:o=e.sent,c=s.map((function(e){return e.id===n?o.data.resource:e})),r({type:D,formData:c});case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return{getTodoList:function(){var e=Object(c.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("todos").then(null,(function(e){return console.log(e)}));case 2:(n=e.sent)&&r({type:D,formData:n.data.resources});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),onAddTask:f,edit:o,todoList:s,description:d,dispatch:r,onUpdateTask:p}},Y=t(303),Z=t(315),$=t(312),ee=t(319);function ne(){var e=Object(f.a)(["\n  width: 100%;\n  border: 1px solid #d9d9d9;\n  padding: 4px 11px;\n  text-align: center;\n  position: relative;\n  .closeIcon {\n    display: block;\n    position: absolute;\n    right: -5px;\n    top: -5px;\n    background-color: white;\n  }\n  .progress {\n    background-color: #d9d9d9;\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: -1;\n  }\n"]);return ne=function(){return e},e}var te=p.a.div(ne()),re=function(e){return Object(s.jsxs)(te,{children:[Object(s.jsx)(Z.a,{title:"\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u4e2a\u756a\u8304\u5417?",onConfirm:function(){e.finishTomato({aborted:!0}),$.b.success("\u5220\u9664\u6210\u529f")},okText:"\u5220\u9664",cancelText:"\u64a4\u9500",children:Object(s.jsx)(ee.a,{className:"closeIcon"})}),e.children]})},oe=d.a.memo((function(e){var n,t,r,o=Object(u.useState)(Math.floor(e.time)),a=Object(i.a)(o,2),c=a[0],d=a[1];n=Math.floor(c/1e3%60),t=Math.floor(c/1e3/60),r="".concat(t<10?"0".concat(t):t,":").concat(n<10?"0".concat(n):n);var l=100*(1-c/e.duration),f=Object(u.useRef)(null);return Object(u.useEffect)((function(){return f.current=setTimeout((function(){c>0?d(c-1e3):e.getUnFinishTomato()}),1e3),function(){clearTimeout(f.current)}})),Object(s.jsxs)(re,{finishTomato:e.finishTomato,children:[Object(s.jsx)("div",{className:"progress",style:{width:"".concat(l,"%"),height:"31px"}}),Object(s.jsx)("span",{children:r})]})}));function ae(){var e=Object(f.a)(["\n  padding: 15px;\n  .tomato_title {\n    display: flex;\n    justify-content: space-between;\n    > span:nth-child(1) {\n      color: #999999;\n      font-size: 16px;\n    }\n    > span:nth-child(2) {\n      color: #666666;\n      font-size: 12px;\n    }\n  }\n  .tomato_list {\n    > li {\n      display: flex;\n      > span:nth-child(1) {\n        color: #999999;\n        font-size: 14px;\n        margin-right: 15px;\n      }\n    }\n  }\n"]);return ae=function(){return e},e}var ce=p.a.section(ae()),ie=d.a.memo((function(e){return Object(s.jsx)(ce,{children:e.finishedGroup.map((function(e){var n=Object(i.a)(e,2),t=n[0],r=n[1];return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"tomato_title",children:[Object(s.jsx)("span",{children:t}),Object(s.jsxs)("span",{children:["\u672c\u65e5\u5b8c\u6210",r.length,"\u4e2a\u756a\u8304"]})]}),Object(s.jsx)("ul",{className:"tomato_list",children:r.map((function(e){return Object(s.jsxs)("li",{children:[Object(s.jsxs)("span",{children:[e.startTime,"-",e.endTime]}),Object(s.jsx)("span",{children:e.description?e.description:"\u6ca1\u6709\u63cf\u8ff0  "})]},e.id)}))})]},t)}))})})),se=d.a.memo((function(e){var n,t=e.startTomatoes,o=e.getUnFinishTomato,a=e.unFinishTomato,c=e.setUnFinishTomato,i=e.finishedGroup,d=e.finishTomato;if(Object(u.useEffect)((function(){o()}),[]),void 0===a)n=Object(s.jsx)(H.a,{block:!0,onClick:function(){t()},children:"\u5f00\u59cb\u756a\u8304"});else{var l=Date.parse(a.started_at),f=a.duration,p=(new Date).getTime();if(console.log(l),p-l>f)n=Object(s.jsx)(re,{finishTomato:d,children:Object(s.jsx)(y.a,{bordered:!1,placeholder:"\u8bf7\u8f93\u5165\u4f60\u521a\u521a\u5b8c\u6210\u7684\u4efb\u52a1",value:a.description,onChange:function(e){c(Object(r.a)(Object(r.a)({},a),{},{description:e.target.value}))},onPressEnter:function(){d({description:a.description})}})});else if(p-l<f){var j=l+f-p;n=Object(s.jsx)(oe,{time:j,duration:f,getUnFinishTomato:o,finishTomato:d})}}return Object(s.jsxs)(s.Fragment,{children:[n,Object(s.jsx)(Y.a,{}),e.children,Object(s.jsx)(ie,Object(r.a)({},{finishedGroup:i}))]})})),ue=t(147),de=t.n(ue);function le(){var e=Object(f.a)(["\n  li {\n    list-style: none;\n  }\n  padding: 20px;\n  .history {\n    background-color: #d6d6d6;\n    text-align: center;\n  }\n  .hide {\n    display: none;\n  }\n  .show {\n    display: block;\n  }\n  > ul {\n    display: flex;\n    > li {\n      :hover {\n        background-color: #f0eeee;\n      }\n      padding: 16px 24px;\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      color: #666666;\n      border: 1px solid #e9e9e9;\n      > span:nth-child(2) {\n        color: #999999;\n      }\n      > span:nth-child(3) {\n        font-size: 30px;\n      }\n    }\n  }\n"]);return le=function(){return e},e}var fe=p.a.section(le()),pe=d.a.memo((function(e){var n=de()().get("month"),t=e.todoList.filter((function(e){return e.completed&&!0!==e.deleted})),r=e.finishedTomatoes.filter((function(e){return de()(e.ended_at).month()===n})),o=[["\u7edf\u8ba1\u5386\u53f2",n+1+"\u6708\u7d2f\u79ef",r.length],["\u756a\u8304\u5386\u53f2","\u5b8c\u6210\u756a\u8304",e.finishedTomatoes.length],["\u4efb\u52a1\u5386\u53f2","\u5b8c\u6210\u4efb\u52a1",t.length]];return Object(s.jsx)(fe,{children:Object(s.jsx)("ul",{children:o.map((function(e,n){return Object(s.jsx)("li",{onClick:function(){},children:e.map((function(e){return Object(s.jsx)("span",{children:e},e)}))},e[0])}))})})})),je=function(){var e=Object(u.useState)([]),n=Object(i.a)(e,2),t=n[0],o=n[1],s=Object(u.useState)({}),d=Object(i.a)(s,2),f=d[0],p=d[1],j=function(e){return e.filter((function(e){return null!==e.ended_at&&""!==e.description&&!0!==e.aborted}))},h=j(t).map((function(e){return e.startTime=de()(e.created_at).format("HH:mm"),e.endTime=de()(e.ended_at).format("HH:mm"),e.endDate=de()(e.ended_at).format("MM\u6708DD\u65e5"),e})),m=Array.from(function(e){var n=new Map;return e.forEach((function(e){n.has(e.endDate)?n.get(e.endDate).push(e):n.set(e.endDate,[e])})),n}(h)),b=function(){var e=Object(c.a)(a.a.mark((function e(){var n,t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("tomatoes");case 3:n=e.sent,o(n.data.resources),t=n.data.resources.filter((function(e){return!e.description&&!e.ended_at&&!e.aborted}))[0],p(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.put("tomatoes/".concat(f.id),Object(r.a)(Object(r.a)({},n),{},{ended_at:(new Date).toISOString()})).then(null,(function(e){throw new Error(e)}));case 2:b();case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return{setTomatoes:o,startTomatoes:function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("tomatoes",{duration:15e5}).then(null,(function(e){throw new Error(e)}));case 2:b();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getUnFinishTomato:b,tomatoes:t,unFinishTomato:f,getFinishedTomatoes:j,setUnFinishTomato:p,finishedTomatoes:h,finishedGroup:m,finishTomato:x}};n.default=function(){var e=Object(u.useState)(""),n=Object(i.a)(e,2),t=n[0],o=n[1],d=X(),f=d.edit,p=d.todoList,j=d.description,h=d.dispatch,m=d.getTodoList,b=d.onAddTask,x=d.onUpdateTask,v=je(),g=v.startTomatoes,y=v.getUnFinishTomato,k=v.unFinishTomato,w=v.setUnFinishTomato,D=v.finishedGroup,F=v.finishTomato,U=v.finishedTomatoes,_=v.tomatoes;Object(u.useEffect)((function(){S(),m()}),[]);var S=function(){var e=Object(c.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(l.a)("/me");case 3:return n=e.sent,e.next=6,o(n.data.account);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(O,{children:Object(s.jsx)(J,Object(r.a)({className:"userMenu"},{user:t}))}),Object(s.jsxs)(T,{children:[Object(s.jsx)("div",{children:Object(s.jsx)(se,Object(r.a)({},{startTomatoes:g,getUnFinishTomato:y,unFinishTomato:k,setUnFinishTomato:w,finishedGroup:D,finishTomato:F}))}),Object(s.jsxs)("div",{children:[Object(s.jsx)(N,Object(r.a)({},{description:j,dispatch:h,onAddTask:b})),Object(s.jsx)(Y.a,{}),Object(s.jsx)(P,Object(r.a)({},{todoList:p,onUpdateTask:x,edit:f,dispatch:h}))]})]}),Object(s.jsx)(pe,Object(r.a)({},{finishedTomatoes:U,todoList:p,tomatoes:_}))]})}},86:function(e,n,t){"use strict";var r=t(103),o=t.n(r).a.create({baseURL:"https://gp-server.hunger-valley.com/",headers:{"t-app-id":"23428m5P3TFxUWgDpjgfAkNo","t-app-secret":"7sSqdQDvUrGrBTBi7FDCeevi"}});o.interceptors.request.use((function(e){var n=localStorage.getItem("x-token");return n&&(e.headers.Authorization="Bearer ".concat(n)),e}),(function(e){return Promise.reject(e)})),o.interceptors.response.use((function(e){return e.headers["x-token"]&&localStorage.setItem("x-token",e.headers["x-token"]),e}),(function(e){return Promise.reject(e)})),n.a=o}}]);
//# sourceMappingURL=8.58a3eef2.chunk.js.map
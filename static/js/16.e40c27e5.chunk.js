(this.webpackJsonphoang_ty=this.webpackJsonphoang_ty||[]).push([[16],{620:function(e,t,n){"use strict";var a=n(5),i=n(13),c=n(81),s=n(0),l=(n(4),n(19)),d=n(25),o=n(34),r=s.forwardRef((function(e,t){var n=e.classes,c=e.className,d=e.component,r=void 0===d?"div":d,u=e.disableGutters,b=void 0!==u&&u,j=e.fixed,m=void 0!==j&&j,h=e.maxWidth,O=void 0===h?"lg":h,x=Object(i.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return s.createElement(r,Object(a.a)({className:Object(l.a)(n.root,c,m&&n.fixed,b&&n.disableGutters,!1!==O&&n["maxWidth".concat(Object(o.a)(String(O)))]),ref:t},x))}));t.a=Object(d.a)((function(e){return{root:Object(c.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,n){var a=e.breakpoints.values[n];return 0!==a&&(t[e.breakpoints.up(n)]={maxWidth:a}),t}),{}),maxWidthXs:Object(c.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(c.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(c.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(c.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(c.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(r)},666:function(e,t,n){},667:function(e,t,n){},668:function(e,t,n){"use strict";var a=n(1),i=n(0),c=n.n(i),s=n(62),l=(n(666),n(278)),d=(n(667),n(70)),o=n(201),r=n(35),u=n.n(r),b=Object(o.a)((function(){return{buttonCustom:{height:"25px !important"}}})),j=function(e){var t=b(),n=e.item,i=e.borderNone,c=e.updateListSelectedHandle;console.log("\ud83d\ude80 ~ file: index.js ~ line 17 ~ SelectedItem ~ item",n);var l=function(e){c({id:n.id,quantity:e})};return Object(a.jsxs)("div",{className:u()("selected-item-container",{"border-none":i}),children:[Object(a.jsx)("p",{className:"name-txt",children:null===n||void 0===n?void 0:n.name}),Object(a.jsxs)("p",{className:"name-txt",children:[Object(s.a)(null===n||void 0===n?void 0:n.price)," VN\u0110"]}),Object(a.jsx)(d.e,{handleDecrement:function(){(null===n||void 0===n?void 0:n.quantity)>0&&l((null===n||void 0===n?void 0:n.quantity)-1)},handleIncrement:function(){l((null===n||void 0===n?void 0:n.quantity)+1)},customStyle:t.buttonCustom,value:(null===n||void 0===n?void 0:n.quantity)||null})]})},m=n(290),h=function(e){var t=e.listSelected,n=e.updateListSelectedHandle,i=e.branch,c=t.reduce((function(e,t){return e+t.quantity}),0);return Object(a.jsx)("div",{className:"selected-component-container",children:Object(a.jsxs)(l.a,{container:!0,children:[Object(a.jsx)("p",{className:"header-title",children:"\u0110A\u0303 CHO\u0323N"}),Object(a.jsxs)(l.a,{item:!0,lg:9,sm:12,xs:12,children:[Object(a.jsxs)("div",{className:"header-table",children:[Object(a.jsx)("p",{className:"table-name  food_name_title",children:"T\xean m\xf3n"}),Object(a.jsx)("p",{className:"table-name",children:"\u0110\u01a1n gi\xe1"}),Object(a.jsx)("p",{className:"table-name",children:"S\u1ed1 l\u01b0\u1ee3ng"})]}),Object(a.jsx)("div",{className:"main-content-wrapper",children:Object(a.jsx)("div",{className:"main-content",children:t.map((function(e,i){return Object(a.jsx)(j,{item:e,borderNone:t.length===i+1,updateListSelectedHandle:n})}))})})]}),Object(a.jsx)("div",{className:"divider_line"}),Object(a.jsx)(l.a,{item:!0,lg:3,sm:12,xs:12,children:Object(a.jsxs)("div",{className:"request-container",children:[Object(a.jsx)("p",{className:"title-request",children:"S\u1ed1 l\u01b0\u1ee3ng"}),Object(a.jsxs)("div",{className:"row-section",children:[Object(a.jsx)("p",{className:"quantity-txt",children:"S\u1ed1 m\xf3n"}),Object(a.jsxs)("p",{className:"quantity-value",children:["x ",t.length]})]}),Object(a.jsx)("div",{style:{width:"100%",height:"1px",backgroundColor:"black"}}),Object(a.jsxs)("div",{className:"row-section",children:[Object(a.jsx)("p",{className:"quantity-txt",children:"S\u1ed1 ph\u1ea7n"}),Object(a.jsxs)("p",{className:"quantity-value",children:["x ",c]})]}),Object(a.jsx)("div",{style:{width:"100%",height:"1px",backgroundColor:"black"}}),Object(a.jsxs)("div",{className:"row-section",children:[Object(a.jsx)("p",{className:"quantity-txt",children:"T\u1ea1m t\xednh"}),Object(a.jsxs)("p",{className:"temp-total-money",children:[Object(s.a)(t.reduce((function(e,t){return e+t.price*t.quantity}),0))," ","VN\u0110"]})]}),Object(a.jsx)("div",{className:"row-section",children:Object(a.jsx)("p",{className:"note-txt",children:"C\xf3 th\u1ec3 ph\xe1t sinh th\xeam chi ph\xed trong qu\xe1 tr\xecnh s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 t\u1ea1i nh\xe0 h\xe0ng"})}),Object(a.jsx)(m.a,{listSelected:t,branch:i})]})})]})})};t.a=c.a.memo(h)},903:function(e,t,n){},940:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(6),c=n(21),s=n(0),l=n.n(s),d=n(27),o=n(283),r=n(36),u=n(56),b=n(82),j=n(127),m=n(12),h=n(278),O=n(620),x=n(70),p=(n(903),n(668)),v=function(e){var t,n,i,c,s,l=e.branch,d=e.onAddItemClick,o=e.updateListSelectedHandle;return Object(a.jsxs)(h.a,{container:!0,direction:"column",className:"voucher-container",children:[Object(a.jsx)(x.a,{items:[{name:"G\u1ecdi m\xf3n",url:"/order"},{name:l.name,url:"/order/".concat(l.id),state:{branch:l}}]}),Object(a.jsxs)(O.a,{maxWidth:"lg",children:[Object(a.jsx)(x.n,{title:l.name,customStyle:"title-header"}),(null===(t=e.listSelected)||void 0===t?void 0:t.length)>0?Object(a.jsx)(p.a,{listSelected:e.listSelected,updateListSelectedHandle:o,onBookingClick:e.onBookingClick,branch:l}):null]}),Object(a.jsxs)(O.a,{maxWidth:"lg",children:[Object(a.jsx)(h.a,{container:!0,spacing:3,direction:"row",style:{marginTop:"32px"},children:null===(n=e.listMenu)||void 0===n||null===(i=n.data)||void 0===i?void 0:i.map((function(e){return Object(a.jsx)(x.i,{onAddItemClick:d,branch:l,item:e,updateListSelectedHandle:o})}))}),(null===(c=e.listMenu)||void 0===c?void 0:c.data.length)<(null===(s=e.listMenu)||void 0===s?void 0:s.total)&&Object(a.jsx)(h.a,{container:!0,className:"box-button",children:Object(a.jsx)(x.b,{onClick:e.onSeeMoreClick,item:!0,title:"XEM TH\xcaM",customStyle:"custom-button"})})]})]})},g=l.a.memo(v);t.default=Object(d.b)((function(e){return{listSelected:Object(o.a)(e)}}),(function(e){return Object(b.b)({addListSelectedHandle:j.a,updateListSelectedHandle:j.i},e)}))((function(e){var t,n,l,o,b=Object(d.c)(),h=(null===e||void 0===e||null===(t=e.location)||void 0===t||null===(n=t.state)||void 0===n?void 0:n.branch)||{},O=(null===e||void 0===e||null===(l=e.location)||void 0===l||null===(o=l.state)||void 0===o?void 0:o.type)||{},x=Object(s.useState)({page:1,size:12,data:[]}),p=Object(c.a)(x,2),v=p[0],f=p[1],N=Object(d.d)(r.a);return Object(s.useEffect)((function(){(null===h||void 0===h?void 0:h.id)&&b(Object(j.d)(v.page,v.size,Object(i.a)(Object(i.a)({},O),{},{branch_id:h.id}),(function(e){var t=Object(i.a)(Object(i.a)({},v),{},{data:e.menu,total:e.total});f(t)})))}),[]),console.log("branch",h,e),Object(a.jsx)(g,Object(i.a)(Object(i.a)({branch:h,onBookingClick:function(){b(N?Object(u.b)({type:m.d.MODAL_BOOKING_FOOD,order:e.listSelected}):Object(u.b)({type:m.d.FORCE_USER_LOGIN,order:e.listSelected}))},listMenu:v,listSelected:e.listSelected},e),{},{onAddItemClick:function(t){N?e.addListSelectedHandle(t):b(Object(u.b)({type:m.d.FORCE_USER_LOGIN,order:e.listSelected}))},onSeeMoreClick:function(){(null===h||void 0===h?void 0:h.id)&&b(Object(j.d)(v.page+1,v.size,Object(i.a)(Object(i.a)({},O),{},{branch_id:h.id}),(function(e){var t=Object(i.a)(Object(i.a)({},v),{},{data:v.data.concat(e.menu),total:e.total});f(t)})))}}))}))}}]);
(this.webpackJsonphoang_ty=this.webpackJsonphoang_ty||[]).push([[38],{620:function(t,e,a){"use strict";var i=a(5),n=a(13),o=a(81),c=a(0),d=(a(4),a(19)),s=a(25),l=a(34),u=c.forwardRef((function(t,e){var a=t.classes,o=t.className,s=t.component,u=void 0===s?"div":s,r=t.disableGutters,v=void 0!==r&&r,b=t.fixed,p=void 0!==b&&b,h=t.maxWidth,m=void 0===h?"lg":h,j=Object(n.a)(t,["classes","className","component","disableGutters","fixed","maxWidth"]);return c.createElement(u,Object(i.a)({className:Object(d.a)(a.root,o,p&&a.fixed,v&&a.disableGutters,!1!==m&&a["maxWidth".concat(Object(l.a)(String(m)))]),ref:e},j))}));e.a=Object(s.a)((function(t){return{root:Object(o.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:t.spacing(2),paddingRight:t.spacing(2),display:"block"},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(t.breakpoints.values).reduce((function(e,a){var i=t.breakpoints.values[a];return 0!==i&&(e[t.breakpoints.up(a)]={maxWidth:i}),e}),{}),maxWidthXs:Object(o.a)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),maxWidthSm:Object(o.a)({},t.breakpoints.up("sm"),{maxWidth:t.breakpoints.values.sm}),maxWidthMd:Object(o.a)({},t.breakpoints.up("md"),{maxWidth:t.breakpoints.values.md}),maxWidthLg:Object(o.a)({},t.breakpoints.up("lg"),{maxWidth:t.breakpoints.values.lg}),maxWidthXl:Object(o.a)({},t.breakpoints.up("xl"),{maxWidth:t.breakpoints.values.xl})}}),{name:"MuiContainer"})(u)},802:function(t,e,a){},950:function(t,e,a){"use strict";a.r(e);var i=a(1),n=a(6),o=a(21),c=a(0),d=a.n(c),s=a(27),l=a(50),u=a(278),r=a(620),v=a(70),b=a(63),p=(a(802),function(t){var e,a,n,o,c,d,s=Object(b.f)();return Object(i.jsxs)(u.a,{container:!0,direction:"column",className:"voucher-container",children:[Object(i.jsx)(v.a,{items:[{name:"Phi\u1ebfu \u01b0u \u0111\xe3i",url:"/voucher"},{name:null===(e=t.voucherType)||void 0===e?void 0:e.name,url:"/voucher/see-all/".concat(null===(a=t.voucherType)||void 0===a?void 0:a.id),state:{voucherType:t.voucherType}}]}),Object(i.jsx)(r.a,{maxWidth:"lg",children:Object(i.jsx)(v.n,{title:"E-Voucher",customStyle:"title-header"})}),Object(i.jsx)(r.a,{maxWidth:"lg",children:Object(i.jsx)(u.a,{container:!0,spacing:3,direction:"row",style:{marginTop:"32px"},children:null===(n=t.listVoucher)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.map((function(t){return Object(i.jsx)(v.o,{onItemClick:function(t){s.push("/voucher/".concat(t.id))},item:t})}))})}),(null===(c=t.listVoucher)||void 0===c?void 0:c.data.length)<(null===(d=t.listVoucher)||void 0===d?void 0:d.total)&&Object(i.jsx)(u.a,{container:!0,className:"box-button",children:Object(i.jsx)(v.b,{onClick:t.onSeeMoreClick,item:!0,title:"XEM TH\xcaM",customStyle:"custom-button"})})]})}),h=d.a.memo(p);e.default=function(t){var e,a,d=Object(c.useState)({data:[],page:1,size:9,total:0}),u=Object(o.a)(d,2),r=u[0],v=u[1],b=Object(s.c)();return Object(c.useEffect)((function(){var e,a,i,o;(null===t||void 0===t||null===(e=t.match)||void 0===e||null===(a=e.params)||void 0===a?void 0:a.id)&&b(Object(l.v)(r.page,r.size,{voucher_type:parseInt(null===t||void 0===t||null===(i=t.match)||void 0===i||null===(o=i.params)||void 0===o?void 0:o.id,10)},(function(e){console.log("listVoucher",t),v((function(t){return Object(n.a)(Object(n.a)(Object(n.a)({},t),e),{},{data:t.data.concat(e.data)})}))})))}),[]),Object(i.jsx)(h,{onSeeMoreClick:function(){var e,a,i,o;(null===t||void 0===t||null===(e=t.match)||void 0===e||null===(a=e.params)||void 0===a?void 0:a.id)&&b(Object(l.v)(r.page+1,r.size,{voucher_type:parseInt(null===t||void 0===t||null===(i=t.match)||void 0===i||null===(o=i.params)||void 0===o?void 0:o.id,10)},(function(t){v((function(e){return Object(n.a)(Object(n.a)(Object(n.a)({},e),t),{},{data:e.data.concat(t.data)})}))})))},voucherType:null===t||void 0===t||null===(e=t.location)||void 0===e||null===(a=e.state)||void 0===a?void 0:a.voucherType,listVoucher:r})}}}]);
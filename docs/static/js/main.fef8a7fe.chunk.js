(this["webpackJsonpdeploy-me"]=this["webpackJsonpdeploy-me"]||[]).push([[0],{116:function(e,t,c){},120:function(e,t,c){},151:function(e,t,c){},152:function(e,t,c){},164:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(46),i=c.n(a),o=(c(76),c(30)),l=c.n(o),r=c(47),j=c(13),u=c(10),d=c(24),b=c(20),h=c(39),O=c.n(h),p=(c(116),c.p+"static/media/food-icon.4148b5d3.svg"),m=c.p+"static/media/TriangleLogo.d264e9ed.svg",x=c.p+"static/media/eventLogo.97c0ca4f.svg",f=c(2),g=function(e){var t=e.searchData,c=e.setSelected,n=e.searchType,s=e.searchCategory,a=e.introModalOpen,i=e.locationModalOpen,o=Object(u.g)();return a||i||"/Map"===o.pathname?null:t==={}||null===t||void 0===t?Object(f.jsxs)("div",{className:"loader",children:[Object(f.jsx)("h1",{children:"Loading..."}),Object(f.jsx)(O.a,{type:"TailSpin",color:"#00BFFF",height:80,width:80})]}):0===t.total?Object(f.jsx)("h1",{children:"No Results Found"}):"events?"===n?Object(f.jsx)("div",{children:t.events.map((function(e){return Object(f.jsx)(b.c,{latitude:e.latitude,longitude:e.longitude,children:Object(f.jsx)("button",{className:"marker-btn",onClick:function(){c(e)},children:Object(f.jsx)("img",{src:x,alt:"Event Icon"})})})}))}):Object(f.jsx)("div",{children:t.businesses.map((function(e,t){return Object(f.jsx)(b.c,{latitude:e.coordinates.latitude,longitude:e.coordinates.longitude,children:Object(f.jsx)("button",{className:"marker-btn",onClick:function(){c(e)},children:"food"===s?Object(f.jsx)("img",{src:p,alt:"restaurant Icon"}):Object(f.jsx)("img",{src:m,alt:"Explore Result Icon"})})},e.id)}))})},v=(c(120),function(e){var t=e.selected,c=e.setSelected,n=e.searchType,s=e.setResultData,a=e.handleMapDetailClick;return t?"events?"===n?Object(f.jsx)("div",{children:Object(f.jsxs)(b.d,{latitude:t.latitude,longitude:t.longitude,onClose:function(){c(null)},children:[Object(f.jsx)("h2",{children:t.name}),Object(f.jsx)("h3",{children:t.description}),Object(f.jsx)("h3",{children:t.time_start}),Object(f.jsx)("h3",{children:t.time_end}),Object(f.jsx)("img",{className:"popup-img",src:t.image_url,alt:t.id})]})}):Object(f.jsx)("div",{children:Object(f.jsx)(b.d,{latitude:t.coordinates.latitude,longitude:t.coordinates.longitude,closeOnClick:!1,onClose:function(){c(null)},children:Object(f.jsxs)("div",{className:"popup",children:[Object(f.jsx)("h2",{className:"popup-name",children:t.name}),Object(f.jsx)("div",{className:"popup-img-container",children:Object(f.jsx)("img",{className:"popup-img",src:t.image_url,alt:t.id})}),Object(f.jsxs)("h3",{className:"popup-type",children:["Type: ",t.categories.map((function(e){return Object(f.jsxs)("span",{children:[e.title,", "]})}))]}),Object(f.jsx)("button",{className:"popup-moreInfo-btn",onClick:function(){s({businesses:[t]}),a()},children:"See More Info"})]})})}):null}),y={right:10,bottom:25},N=function(e){var t=e.searchData,c=e.viewport,s=e.setViewport,a=e.mapRef,i=e.children,o=e.searchType,l=e.searchCategory,r=e.introModalOpen,u=e.locationModalOpen,h=e.setResultData,O=e.handleMapDetailClick,p=Object(n.useState)(null),m=Object(j.a)(p,2),x=m[0],N=m[1];return Object(f.jsx)("div",{children:Object(f.jsxs)(b.e,Object(d.a)(Object(d.a)({mapStyle:"mapbox://styles/mapbox/outdoors-v11"},c),{},{height:"90vh",width:"100vw",ref:a,mapboxApiAccessToken:"pk.eyJ1IjoidGpjb250aTEyIiwiYSI6ImNrbjZjMmZtYzA1b2kyd296ZDB6b2NpY3MifQ.wiau2nuEVcukUiXpDBuE4Q",onViewportChange:function(e){s(e)},children:[Object(f.jsx)(b.b,{style:y}),Object(f.jsx)(g,{searchData:t,setSelected:N,searchType:o,searchCategory:l,introModalOpen:r,locationModalOpen:u}),Object(f.jsx)(v,{selected:x,setSelected:N,searchType:o,setResultData:h,handleMapDetailClick:O}),i]}))})},C=c(71),k=function(e){var t=e.setViewport,c=e.viewport,s=e.setSearchViewport,a=e.mapRef,i=e.containerRef,o=e.closeLocationModal,l=e.introModalOpen,r=Object(n.useCallback)((function(e){t(e)}),[]),j=Object(n.useCallback)((function(e){!function(e){s(e)}(e);return r(Object(d.a)(Object(d.a)({},e),{transitionDuration:1e3}))}),[r]);return Object(n.useEffect)((function(){j()}),[]),l?null:Object(f.jsx)("div",{children:Object(f.jsx)(C.a,Object(d.a)(Object(d.a)({},c),{},{mapRef:a,mapboxApiAccessToken:"pk.eyJ1IjoidGpjb250aTEyIiwiYSI6ImNrbjZjMmZtYzA1b2kyd296ZDB6b2NpY3MifQ.wiau2nuEVcukUiXpDBuE4Q",containerRef:i,onViewportChange:j,onResult:o,onError:function(e){console.log(e)}}))})},S=c(14),w=(c(151),function(e){var t=e.setIntroModalOpen;return Object(f.jsx)("header",{children:Object(f.jsxs)("nav",{children:[Object(f.jsx)(S.c,{to:"/",exact:!0,activeClassName:"selected",className:"item",children:Object(f.jsx)("span",{onClick:function(){t(!0)},children:"Home"})}),Object(f.jsx)(S.c,{to:"/Map",activeClassName:"selected",className:"item",children:"Map"}),Object(f.jsx)(S.c,{to:"/CustomSearch",activeClassName:"selected",className:"item",children:"Custom Search"})]})})}),M=(c(152),function(e){var t=e.handleSubmit,c=e.handleCityChange,n=e.handleTermChange,s=e.handleNumOfResultsChange;return Object(f.jsx)("div",{class:"page-container",children:Object(f.jsxs)("div",{className:"custom-search-container",children:[Object(f.jsx)("div",{className:"left-container"}),Object(f.jsxs)("div",{className:"right-container",children:[Object(f.jsxs)("div",{className:"title-container",children:[Object(f.jsx)("i",{class:"fas fa-search"}),Object(f.jsx)("h1",{children:"Custom Search"})]}),Object(f.jsxs)("form",{onSubmit:t,className:"custom-form",children:[Object(f.jsx)("label",{htmlFor:"city",className:"label-city",children:"Type In a City"}),Object(f.jsx)("input",{placeholder:"City",type:"text",className:"input-city",id:"city",name:"city",onChange:c}),Object(f.jsx)("label",{htmlFor:"category",className:"label-category",children:"Type In a Category"}),Object(f.jsx)("input",{placeholder:"Search Term",type:"text",className:"input-category",id:"category",name:"category",onChange:n}),Object(f.jsx)("label",{htmlFor:"numResults",className:"label-num-results",children:"Choose Number of Results:"}),Object(f.jsxs)("select",{name:"numResults",id:"numResults",className:"num-results",onChange:s,children:[Object(f.jsx)("option",{value:"1",children:"1"}),Object(f.jsx)("option",{value:"5",children:"5"}),Object(f.jsx)("option",{value:"10",children:"10"}),Object(f.jsx)("option",{value:"15",children:"15"}),Object(f.jsx)("option",{value:"20",children:"20"}),Object(f.jsx)("option",{value:"25",children:"25"}),Object(f.jsx)("option",{value:"30",children:"30"}),Object(f.jsx)("option",{value:"35",children:"35"}),Object(f.jsx)("option",{value:"40",children:"40"}),Object(f.jsx)("option",{value:"45",children:"45"}),Object(f.jsx)("option",{value:"50",children:"50"})]}),Object(f.jsx)("input",{type:"submit"})]})]})]})})}),R=c(50),D=c.n(R),I={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",height:"90vh",width:"90vw",backgroundColor:"rgba(255,255,255,0.5",textAlign:"center"}};D.a.setAppElement("#root");var T=function(e){var t=e.isOpen,c=(e.close,e.children);return Object(f.jsx)("div",{children:Object(f.jsx)(D.a,{isOpen:t,style:I,contentLabel:"Example Modal",children:c})})},E=c.p+"static/media/TitleLogo.d45b470c.svg",L=c.p+"static/media/Food-icon-start.59821059.svg",F=c.p+"static/media/Explore-icon-start.5ada1f98.svg",A=c.p+"static/media/Event-icon-start.ce5158a9.svg",V=(c(66),function(e){var t=e.isOpen,c=e.close,n=e.openLocationModal,s=e.setSearchCategory,a=e.setSearchType;return Object(f.jsx)("div",{children:Object(f.jsx)(T,{isOpen:t,close:c,children:Object(f.jsxs)("div",{className:"intro-modal-container",children:[Object(f.jsx)("h1",{children:Object(f.jsx)("img",{className:"title-logo",src:E,alt:"App Logo with title that says GetAway"})}),Object(f.jsxs)("div",{className:"btn-container",children:[Object(f.jsx)(S.b,{to:"/Search",children:Object(f.jsxs)("button",{className:"start-btn",onClick:function(){a("businesses/search?categories="),s("food"),c(),n()},children:[Object(f.jsx)("img",{src:L,alt:"Food Icon"}),Object(f.jsx)("h2",{children:"Food"})]})}),Object(f.jsx)(S.b,{to:"/Search",children:Object(f.jsxs)("button",{className:"start-btn",onClick:function(){a("businesses/search?categories="),s("axethrowing,beachvolleyball,beaches,bungeejumping,climbing,escapegames,experiences,hiking,rock_climbing,sailing,skiing,snorkeling,arcades,gardens,outdoormovies,festivals,jazzandblues,artmuseums,wineries,hotsprings,tastingclasses,breweries,coffee,foodtrucks,streetvendors,tea,beertours,localflavor,bars,beergardens"),c(),n()},children:[Object(f.jsx)("img",{src:F,alt:"Explore Icon"}),Object(f.jsx)("h2",{children:"Explore"})]})}),Object(f.jsx)(S.b,{to:"/Search",children:Object(f.jsxs)("button",{className:"start-btn",onClick:function(){a("events?"),c(),n()},children:[Object(f.jsx)("img",{src:A,alt:"Event Icon"}),Object(f.jsx)("h2",{children:"Events"})]})})]})]})})})}),J=(c(162),function(e){var t=e.isOpen,c=e.close,n=e.setIntroModalOpen,s=e.getUserLocation,a=e.containerRef;return Object(f.jsx)("div",{children:Object(f.jsx)(T,{isOpen:t,close:c,children:Object(f.jsxs)("div",{className:"location-modal-container",children:[Object(f.jsx)("h1",{className:"location-h1",children:"Where Do You Want To Search?"}),Object(f.jsx)("div",{id:"search-container",ref:a}),Object(f.jsx)("p",{className:"location-or",children:"Or"}),Object(f.jsxs)("div",{className:"location-modal-btn-container",children:[Object(f.jsx)("button",{className:"search-by-location-btn",onClick:function(){c(),s()},children:"Current Location"}),Object(f.jsx)(S.b,{to:"/",children:Object(f.jsx)("button",{className:"back-btn",onClick:function(){c(),n(!0)},children:"Back"})})]})]})})})}),Z=(c(163),function(e){var t=e.resultData,c=Object(n.useState)(null),s=Object(j.a)(c,2),a=s[0],i=s[1];return Object(n.useEffect)((function(){i(null)}),[]),Object(n.useEffect)((function(){i(t)}),[t]),console.log(a),null===a||void 0===a?Object(f.jsxs)("div",{className:"loader",children:[Object(f.jsx)("h1",{children:"Loading..."}),Object(f.jsx)(O.a,{type:"TailSpin",color:"#00BFFF",height:80,width:80})]}):Object(f.jsxs)("div",{className:"all-results",children:[Object(f.jsxs)("h2",{className:"num-results-display",children:["Number Of Results: ",a.businesses.length]}),a.businesses.map((function(e){return Object(f.jsxs)("div",{className:"result-container",children:[Object(f.jsx)("hr",{}),Object(f.jsx)("h3",{className:"result-title",children:e.name}),Object(f.jsx)("div",{className:"result-img-container",children:Object(f.jsx)("img",{className:"result-img",src:e.image_url,alt:"business"})}),Object(f.jsxs)("p",{className:"open-status",children:["We are currently ",Object(f.jsx)("span",{className:"open-span",children:e.is_closed?"Closed":"Open"})]}),Object(f.jsx)("h3",{className:"location",children:"Location:"}),Object(f.jsxs)("div",{className:"address-div",children:[Object(f.jsx)("p",{children:e.location.address1}),Object(f.jsxs)("p",{children:[e.location.city,", ",e.location.state,", ",e.location.zip_code]})]}),Object(f.jsx)("a",{className:"website-link",href:e.url,children:"Visit Website"})]})}))]})});function z(){var e=Object(n.useState)({latitude:28.5421109,longitude:-81.3790304,zoom:10}),t=Object(j.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(null),i=Object(j.a)(a,2),o=i[0],d=i[1],b=Object(n.useState)(null),h=Object(j.a)(b,2),O=h[0],p=h[1],m=Object(n.useState)("businesses/search?categories="),x=Object(j.a)(m,2),g=x[0],v=x[1],y=Object(n.useState)(""),C=Object(j.a)(y,2),S=C[0],R=C[1],D=Object(n.useState)(null),I=Object(j.a)(D,2),T=I[0],E=I[1],L=Object(n.useState)(!0),F=Object(j.a)(L,2),A=F[0],z=F[1],B=Object(n.useState)(!1),G=Object(j.a)(B,2),H=G[0],P=G[1],Y=Object(u.f)(),q=Object(n.useState)(null),_=Object(j.a)(q,2),U=_[0],K=_[1],Q=Object(n.useState)(null),X=Object(j.a)(Q,2),W=X[0],$=X[1],ee=Object(n.useState)(1),te=Object(j.a)(ee,2),ce=te[0],ne=te[1],se=Object(n.useState)(null),ae=Object(j.a)(se,2),ie=ae[0],oe=ae[1],le="https://project2-proxy.herokuapp.com/https://api.yelp.com/v3/businesses/search?",re="ZB9NGTJjyDR7J4kVDHguHd6u5fz9cHk48Z210lq7OPKFQyU8iyKGNxRPJ9sZpPLo1AEqoRDDuwILdXAq6dvjMz3GOa0oXqhPviUZC_ut6JOA4DOfKsJ1HonqJCZuYHYx",je=function(){var e=Object(r.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(le,"term=").concat(W,"&location=").concat(U,"&limit=").concat(ce),{method:"GET",headers:{Authorization:"Bearer ".concat(re)}});case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,oe(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),ue=function(){Y.push("/SearchResults")},de=function(){P(!1)},be=Object(n.useRef)(),he=Object(n.useRef)(null),Oe=function(e){var t=e.coords;E({latitude:t.latitude,longitude:t.longitude}),s({latitude:t.latitude,longitude:t.longitude,width:"100vw",height:"95vh",zoom:12})},pe="https://project2-proxy.herokuapp.com/https://api.yelp.com/v3/",me="ZB9NGTJjyDR7J4kVDHguHd6u5fz9cHk48Z210lq7OPKFQyU8iyKGNxRPJ9sZpPLo1AEqoRDDuwILdXAq6dvjMz3GOa0oXqhPviUZC_ut6JOA4DOfKsJ1HonqJCZuYHYx",xe=function(){var e=Object(r.a)(l.a.mark((function e(t){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,fetch("".concat(pe).concat(g).concat(S,"&latitude=").concat(t.latitude,"&longitude=").concat(t.longitude,"&limit=50"),{method:"GET",headers:{Authorization:"Bearer ".concat(me)}});case 5:return c=e.sent,e.next=8,c.json();case 8:n=e.sent,p(n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){xe(T)}),[T]),Object(n.useEffect)((function(){xe(o)}),[o]),Object(f.jsx)("div",{children:Object(f.jsxs)(u.c,{children:[Object(f.jsxs)(u.a,{exact:!0,path:"/",children:[Object(f.jsx)(w,{}),Object(f.jsx)(V,{isOpen:A,close:function(){z(!1)},openLocationModal:function(){P(!0)},setSearchCategory:R,setSearchType:v}),Object(f.jsx)(N,{viewport:c,setViewport:s,introModalOpen:A})]}),Object(f.jsxs)(u.a,{exact:!0,path:"/Search",children:[Object(f.jsx)(w,{setIntroModalOpen:z}),Object(f.jsx)(N,{searchData:O,viewport:c,setViewport:s,mapRef:be,searchType:g,searchCategory:S,introModalOpen:A,locationModalOpen:H,setResultData:oe,handleMapDetailClick:ue,children:Object(f.jsx)(k,{setViewport:s,viewport:c,setSearchViewport:d,mapRef:be,containerRef:he,closeLocationModal:de,introModalOpen:A})}),Object(f.jsx)(J,{isOpen:H,close:de,setIntroModalOpen:z,getUserLocation:function(){navigator.geolocation.getCurrentPosition(Oe)},containerRef:he})]}),Object(f.jsxs)(u.a,{path:"/Map",children:[Object(f.jsx)(w,{setIntroModalOpen:z}),Object(f.jsx)(N,{viewport:c,setViewport:s,mapRef:be,handleMapDetailClick:ue,children:Object(f.jsx)(k,{setViewport:s,viewport:c,setSearchViewport:d,mapRef:be,setResultData:oe})})]}),Object(f.jsxs)(u.a,{path:"/CustomSearch",children:[Object(f.jsx)(w,{setIntroModalOpen:z}),Object(f.jsx)(M,{handleSubmit:function(e){e.preventDefault(),console.log(U,W,ce),je(),Y.push("/SearchResults")},handleCityChange:function(e){K(e.target.value)},handleTermChange:function(e){$(e.target.value)},handleNumOfResultsChange:function(e){ne(e.target.value)}})]}),Object(f.jsxs)(u.a,{path:"/SearchResults",children:[Object(f.jsx)(w,{setIntroModalOpen:z}),Object(f.jsx)(Z,{resultData:ie})]})]})})}var B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,166)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(S.a,{children:Object(f.jsx)(z,{})})}),document.getElementById("root")),B()},66:function(e,t,c){},76:function(e,t,c){}},[[164,1,2]]]);
//# sourceMappingURL=main.fef8a7fe.chunk.js.map
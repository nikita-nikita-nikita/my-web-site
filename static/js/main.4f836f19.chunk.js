(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{159:function(e,t,a){e.exports=a.p+"static/media/me.3643d8ed.jpg"},173:function(e,t,a){e.exports=a(341)},178:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){},185:function(e,t,a){},274:function(e,t,a){},275:function(e,t,a){},303:function(e,t,a){},322:function(e,t,a){},323:function(e,t,a){},324:function(e,t,a){},325:function(e,t,a){},326:function(e,t,a){},327:function(e,t,a){},329:function(e,t,a){},330:function(e,t,a){},331:function(e,t,a){},332:function(e,t,a){},336:function(e,t,a){},337:function(e,t,a){},338:function(e,t,a){},341:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(40),l=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(178);var s=a(34),i=a(78),o=a(14),m=function(){return r.a.createElement("h2",{className:"no-footer"},"Not Found!")},u=a(28),d=(a(183),function(e){var t=e.link,a=e.title;return r.a.createElement("div",{className:"info-card-container"},r.a.createElement("img",{src:t,className:"img",alt:a}),r.a.createElement("h2",{className:"title"},a))}),p=(a(184),Object(s.c)((function(e){return{links:e.technologies}}),null)((function(e){var t=e.links,a=Object(n.useState)(!1),c=Object(u.a)(a,2),l=c[0],s=c[1];return r.a.createElement("div",{className:"technologies-section"},r.a.createElement("div",null,r.a.createElement("div",Object.assign({className:"info-cards".concat(l?" toggled":"")},function(e){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?{onMouseOver:function(){e(!0)},onMouseOut:function(){e(!1)}}:{onClick:function(t){(t.target.classList.contains("info-cards")||t.target.classList.contains("technologies-title"))&&e((function(e){return!e}))}}}(s)),r.a.createElement("h1",{className:"technologies-title"},"Technologies"),t.map((function(e,t){var a=e.link,n=e.title;return r.a.createElement(d,{key:t,link:a,title:n})})))))}))),E=(a(185),a(50)),h=function(e){var t=e.title,a=e.children,c=Object(n.useState)(!0),l=Object(u.a)(c,2),s=l[0],i=l[1],o=function(e){var t=e.target.className;("popup-body"===t||t.includes("popup-close-btn")||t.includes("close icon"))&&i(!1)};return r.a.createElement("div",{className:s?"popup open":"popup close"},r.a.createElement("div",{className:"popup-body",onClick:o},r.a.createElement("div",{className:"popup-content"},r.a.createElement("h2",{className:"popup-title"},t),a,r.a.createElement("div",{className:"popup-close"},r.a.createElement("button",{className:"popup-close-btn",onClick:o},r.a.createElement(E.a,{name:"close"}))))))},f=function(){return r.a.createElement(h,{title:"Welcome to my website"},"I glad to see you here, wanderer.\nDon't know why you here, but it's good especially for me.\nThis site was made by using react and typescript")},b=function(){return r.a.createElement("div",{className:"no-footer"},r.a.createElement(p,null),r.a.createElement(f,null))},g=(a(274),a(275),a(350)),v=function(e){var t=e.avatar,a=e.linkToProfile,c=e.name,l=e.nickname,s=Object(n.useState)(!1),i=Object(u.a)(s,2),o=i[0],m=i[1],d=Object(n.useState)(!1),p=Object(u.a)(d,2),h=p[0],f=p[1],b=Object(n.useRef)();return r.a.createElement("div",{className:"link-card"},r.a.createElement("div",{className:"account-info"},r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},t?r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"avatar-link",src:t,alt:"Avatar"})):r.a.createElement("img",{className:"avatar-link",src:"https://forwardsummit.ca/wp-content/uploads/2019/01/avatar-default.png",alt:"Avatar"}),r.a.createElement("p",{className:"nickname"},l))),r.a.createElement("div",{className:"content-below"},r.a.createElement("p",{className:"icon-link"},r.a.createElement(E.a,{name:c})),r.a.createElement("div",{className:"input-container"},r.a.createElement(g.a,{fluid:!0,value:l,ref:function(e){b=e}})),r.a.createElement("button",{className:"copy-link-button",onClick:function(e){b.select(),document.execCommand("copy"),e.target.focus(),m(!0)},onMouseOver:function(e){var t=e.target;!(t.classList.contains("arrow")||t.classList.contains("tooltip")||t.classList.contains("tooltip-text"))&&f(!0)},onMouseOut:function(){return f(!1)},onBlur:function(){return m(!1)},"aria-describedby":"tooltip-".concat(c)},"Copy ",r.a.createElement(E.a,{name:"copy"}),r.a.createElement("div",{className:"tooltip",role:"tooltip","aria-hidden":!h,style:{opacity:h?1:0},id:"tooltip-".concat(c)},r.a.createElement("div",{className:"tooltip-text"},o?"Copied":"Copy to clipboard"),r.a.createElement("div",{className:"arrow"})))))},w=a(351),y=a(348),N=function(){return r.a.createElement(w.a,{active:!0},r.a.createElement(y.a,null))},k=(a(303),a(33)),O=a(11),j=a.n(O),x=a(32),S=a(76),_=a(58),P=a.n(_),C=new function e(){Object(S.a)(this,e),this.getInstagram=function(){return P.a.get("https://www.instagram.com/nikita_good_guy/?__a=1").then((function(e){var t=e.data.graphql.user,a=t.profile_pic_url_hd,n=t.username;return{avatar:a,nickname:n,name:"instagram",linkToProfile:"https://www.instagram.com/".concat(n,"/")}}))},this.getGithub=function(){return P.a.get("https://api.github.com/users/nikita-nikita-nikita").then((function(e){var t=e.data,a=t.avatar_url,n=t.login;return{avatar:a,nickname:n,name:"github",linkToProfile:"https://github.com/".concat(n)}}))},this.getTelegram=Object(x.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{nickname:"@STALINNASHPRESIDENT",name:"telegram",linkToProfile:"tg://tele.gg/STALINNASHPRESIDENT"});case 1:case"end":return e.stop()}}),e)}))),this.getGmail=Object(x.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{nickname:"neymarenko123@gmail.com",name:"mail",linkToProfile:"mailto:neymarenko123@gmail.com?Body"});case 1:case"end":return e.stop()}}),e)})))};C.getGithub();var L={loadLinks:function(){return function(){var e=Object(x.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("load"),e.t0=t,e.t1="LOAD_POSTS",e.next=5,C.getGithub();case 5:return e.t2=e.sent,e.next=8,C.getInstagram();case 8:return e.t3=e.sent,e.next=11,C.getGmail();case 11:return e.t4=e.sent,e.next=14,C.getTelegram();case 14:return e.t5=e.sent,e.t6=[e.t2,e.t3,e.t4,e.t5],e.t7={type:e.t1,payload:e.t6},(0,e.t0)(e.t7),e.abrupt("return",{});case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},deleteLinks:function(){return function(e){e({type:"DELETE_POSTS"})}}},T=Object(s.c)((function(e){return{links:e.links}}),(function(e){return Object(k.bindActionCreators)(L,e)}))((function(e){var t=e.links,a=e.loadLinks,c=e.deleteLinks,l=Object(n.useState)(!0),s=Object(u.a)(l,2),i=s[0],o=s[1];return Object(n.useEffect)((function(){return a().then((function(){return o(!1)})),function(){return c()}}),[a,c]),i?r.a.createElement(N,null):r.a.createElement("div",{className:"links"},t.map((function(e){return r.a.createElement(v,e)})))})),A=function(){return r.a.createElement("main",{className:"no-footer"},r.a.createElement(T,null))},I=(a(322),a(323),function(e){var t=e.imgLink,a=e.children,n=e.fullScreenCardClass,c=e.isRandomObject,l=e.isStarWars,s=e.isVertical,i=e.isInsideContainer;return r.a.createElement("div",{className:"character-card"+"".concat(n?" full-screen-character-card":"").concat(c?" random-object":"").concat(s?" vertical":"").concat(i?" inside-container":"").concat(l?" sw-card-color":"")},r.a.createElement("img",{src:t,className:"character-img",alt:"avatar"}),r.a.createElement("ul",{className:"stats"},a))}),R=a(159),W=a.n(R),D=(a(324),function(e){var t=e.title,a=e.children,n=e.style;return r.a.createElement("label",{className:"beautiful-label",style:n},r.a.createElement("input",{type:"checkbox",className:"about-checkbox"}),r.a.createElement("div",{className:"checkbox-content"},r.a.createElement("strong",{className:"about-paragraph"},t),r.a.createElement("div",{className:"triangle"}),r.a.createElement("ul",null,a)))}),M="Nikita",H=17,B="male",F="blue",G=function(){return r.a.createElement("main",{className:"about-page no-footer"},r.a.createElement("h1",{className:"content-before-footer"},"About me"),r.a.createElement(I,{imgLink:W.a,fullScreenCardClass:!0,isInsideContainer:!0},r.a.createElement("li",{className:"name"},M),r.a.createElement("li",null,"Age: ",H),r.a.createElement("li",null,"Gender: ",B),r.a.createElement("li",null,"Eye color: ",F)),r.a.createElement("div",{className:"about-content"},r.a.createElement("h2",null,"A little bit more about me"),r.a.createElement("div",{className:"about-text"},r.a.createElement(D,{title:"Education",style:{width:"33%"}},r.a.createElement("li",null,"2005-2008 Kindergarten"),r.a.createElement("li",null,"2008-2015 School \u2116 96"),r.a.createElement("li",null,"2015-2019 Lyceum \u2116 142"),r.a.createElement("li",null,"2015-Nowadays Igor Sikorsky Kiev Polytechnic Institute")),r.a.createElement(D,{title:"Hobby",style:{width:"33%"}},r.a.createElement("li",null,"Programming"),r.a.createElement("li",null,"Football"),r.a.createElement("li",null,"Volleyball"),r.a.createElement("li",null,"Math")),r.a.createElement(D,{title:"Character",style:{width:"33%"}},r.a.createElement("li",null,"Purposeful"),r.a.createElement("li",null,"Team player"),r.a.createElement("li",null,"I like to improve myself and cats")))))},U=(a(325),function(){return r.a.createElement("h2",{className:"no-footer"},"Games page")}),J=(a(326),a(160)),K=a.n(J),V=a(15),q=(a(327),function(){return r.a.createElement("nav",{className:"sw-control-panel"},r.a.createElement("div",{className:"sw-link sw-characters-link"},r.a.createElement(V.a,{to:"/my-web-site/sw/persons/"},r.a.createElement("p",{className:"sw-link-text"},"Characters"))),r.a.createElement("div",{className:"sw-link sw-planets-link"},r.a.createElement(V.a,{to:"/my-web-site/sw/planets/"},r.a.createElement("p",{className:"sw-link-text"},"Planets"))),r.a.createElement("div",{className:"sw-link sw-starships-link"},r.a.createElement(V.a,{to:"/my-web-site/sw/starships/"},r.a.createElement("p",{className:"sw-link-text"},"Starships"))))}),$=(a(329),a(330),function(e){var t=e.img,a=e.children,n=e.isFullScreen;return r.a.createElement(I,{imgLink:t,isRandomObject:!n,isStarWars:!0,fullScreenCardClass:n},a)}),z=a(164),Q=function(e){var t=e.randomObjects,a=(t=void 0===t?{}:t).person,c=t.planet,l=t.starship,s=Object(n.useState)(!1),i=Object(u.a)(s,2),o=i[0],m=i[1];return r.a.createElement("div",{className:"sw-full-screen-width"},a&&c&&l?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sw-random-objects-big-container min-width-1000"},r.a.createElement($,{img:a.img},r.a.createElement("li",{className:"name"},a.name),r.a.createElement("li",null,"Height: ",a.height),r.a.createElement("li",null,"Gender: ",a.gender),r.a.createElement("li",null,"Eye color: ",a.eyeColor)),r.a.createElement($,{img:c.img},r.a.createElement("li",{className:"name"},c.name),r.a.createElement("li",null,"Diameter: ",c.diameter),r.a.createElement("li",null,"Population: ",c.population),r.a.createElement("li",null,"Rotation period: ",c.rotationPeriod)),r.a.createElement($,{img:l.img},r.a.createElement("li",{className:"name"},l.name),r.a.createElement("li",null,"Model: ",l.model),r.a.createElement("li",null,"Starship class: ",l.starshipClass),r.a.createElement("li",null,"Cost in credits: ",l.costInCredits))),r.a.createElement("div",{onClick:function(){return m(!o)},className:"sw-random-objects-small-container max-width-1000"},r.a.createElement("button",null,o?"Hide random characters":"Show random characters"),o?r.a.createElement("div",{className:"sw-random-objects-small"},r.a.createElement($,{img:a.img,isFullScreen:!0},r.a.createElement("li",{className:"name"},a.name),r.a.createElement("li",null,"Height: ",a.height),r.a.createElement("li",null,"Gender: ",a.gender),r.a.createElement("li",null,"Eye color: ",a.eyeColor)),r.a.createElement($,{img:c.img,isFullScreen:!0},r.a.createElement("li",{className:"name"},c.name),r.a.createElement("li",null,"Diameter: ",c.diameter),r.a.createElement("li",null,"Population: ",c.population),r.a.createElement("li",null,"Rotation period: ",c.rotationPeriod)),r.a.createElement($,{img:l.img,isFullScreen:!0},r.a.createElement("li",{className:"name"},l.name),r.a.createElement("li",null,"Model: ",l.model),r.a.createElement("li",null,"Starship class: ",l.starshipClass),r.a.createElement("li",null,"Cost in credits: ",l.costInCredits))):null)):r.a.createElement(z.a,{animation:"grow",as:"div"}))},X=function(e){return function(){return{type:"LOAD_PERSON_LIST",payload:e}}},Y=function(e){return{type:"PUT_SW_LIST",payload:e}},Z=function(e){return{type:"PUT_SW_CHARACTER",payload:{person:e}}},ee=function(e){return{type:"PUT_SW_CHARACTER",payload:{planet:e}}},te=function(e){return{type:"PUT_SW_CHARACTER",payload:{starship:e}}},ae=(a(331),function(){return r.a.createElement("div",{className:"sw-hello-h1-container"},r.a.createElement("h1",{className:"sw-hello-h1"},"Welcome to star wars word, jedi, choose the category"),r.a.createElement("p",null,"Arrow will help you"))}),ne=(a(332),a(77)),re=a.n(ne),ce=function(e){var t=e.list,a=e.deleteList,c=e.loadList,l=e.object,s=Object(o.g)();return Object(n.useEffect)((function(){return c(),l&&s.push(l.id),function(){a()}}),[a,c,s,l]),t?r.a.createElement("ul",{className:"sw-list"},t.map((function(e){return r.a.createElement(V.a,{to:e.id},r.a.createElement("li",{key:e.id.toString()},e.name))}))):r.a.createElement("div",{className:"sw-list"},r.a.createElement(re.a,{animation:"grow"}))},le=(a(336),function(e){var t=e.children,a=e.object,c=e.id,l=e.loadFunction;return Object(n.useEffect)((function(){l(c)}),[l,c]),a?r.a.createElement("div",{className:"sw-container-character"},r.a.createElement(I,{imgLink:a.img,isVertical:!0,fullScreenCardClass:!0,isInsideContainer:!0,isStarWars:!0},t)):r.a.createElement("div",{className:"sw-container-character"},r.a.createElement(re.a,{animation:"grow"}))}),se=function(e){var t=e.planet,a=e.loadPlanet,n=e.id;return r.a.createElement(le,{loadFunction:a,id:n,object:t},r.a.createElement("li",{className:"name"},null===t||void 0===t?void 0:t.name),r.a.createElement("li",null,"Diameter: ",null===t||void 0===t?void 0:t.diameter),r.a.createElement("li",null,"Population: ",null===t||void 0===t?void 0:t.population),r.a.createElement("li",null,"Rotation period: ",null===t||void 0===t?void 0:t.rotationPeriod))},ie=function(e){var t=e.person,a=e.loadPerson,n=e.id;return r.a.createElement(le,{loadFunction:a,id:n,object:t},r.a.createElement("li",{className:"name"},null===t||void 0===t?void 0:t.name),r.a.createElement("li",null,"Height: ",null===t||void 0===t?void 0:t.height),r.a.createElement("li",null,"Gender: ",null===t||void 0===t?void 0:t.gender),r.a.createElement("li",null,"Eye color: ",null===t||void 0===t?void 0:t.eyeColor))},oe=function(e){var t=e.starship,a=e.id,n=e.loadStarship;return r.a.createElement(le,{loadFunction:n,id:a,object:t},r.a.createElement("li",{className:"name"},null===t||void 0===t?void 0:t.name),r.a.createElement("li",null,"Model: ",null===t||void 0===t?void 0:t.model),r.a.createElement("li",null,"Starship class: ",null===t||void 0===t?void 0:t.starshipClass),r.a.createElement("li",null,"Cost in credits: ",null===t||void 0===t?void 0:t.costInCredits))},me={loadRandomObjects:function(){return{type:"LOAD_RANDOM_OBJECTS"}},loadPersonList:X("people"),loadStarshipList:X("starships"),loadPlanetList:X("planets"),deleteList:function(){return{type:"PUT_SW_LIST",payload:null}},loadPerson:function(e){return{type:"LOAD_SW_PERSON",payload:e}},loadPlanet:function(e){return{type:"LOAD_SW_PLANET",payload:e}},loadStarship:function(e){return{type:"LOAD_SW_STARSHIP",payload:e}}},ue=Object(s.c)((function(e){var t=e.starWars,a=t.randomObjects,n=t.list,r=t.object;return{randomObjects:a,list:n,planet:null===r||void 0===r?void 0:r.planet,starship:null===r||void 0===r?void 0:r.starship,person:null===r||void 0===r?void 0:r.person}}),me)((function(e){var t=e.loadRandomObjects,a=e.randomObjects,c=e.loadStarshipList,l=e.loadPlanetList,s=e.loadPersonList,i=e.list,m=e.deleteList,u=e.loadPlanet,d=e.loadStarship,p=e.loadPerson,E=e.planet,h=e.person,f=e.starship;return Object(n.useEffect)((function(){t()}),[t]),K()((function(){return t()}),5e3),r.a.createElement("main",{className:"no-footer full-screen sw-color sw-main-page"},r.a.createElement(Q,{randomObjects:a}),r.a.createElement(q,null),r.a.createElement(o.b,{exact:!0,path:"/my-web-site/sw",component:ae}),r.a.createElement(o.b,{path:"/my-web-site/sw/persons",render:function(){return r.a.createElement(ce,{object:h,list:i,deleteList:m,loadList:s})}}),r.a.createElement(o.b,{path:"/my-web-site/sw/planets",render:function(){return r.a.createElement(ce,{object:E,list:i,deleteList:m,loadList:l})}}),r.a.createElement(o.b,{path:"/my-web-site/sw/starships",render:function(){return r.a.createElement(ce,{object:f,list:i,deleteList:m,loadList:c})}}),r.a.createElement(o.b,{path:"/my-web-site/sw/persons/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(ie,{person:h,id:t,loadPerson:p})}}),r.a.createElement(o.b,{path:"/my-web-site/sw/planets/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(se,{planet:E,id:t,loadPlanet:u})}}),r.a.createElement(o.b,{path:"/my-web-site/sw/starships/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(oe,{starship:f,id:t,loadStarship:d})}}))})),de=function(){return r.a.createElement(ue,null)},pe=(a(337),function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=function(){return c((function(e){return!e}))};return r.a.createElement("header",{className:"header no-footer"},r.a.createElement("nav",{className:"nav-header"},r.a.createElement("div",{className:"burger-menu header-just-on-small-display"},r.a.createElement("div",{className:"burger-menu"},r.a.createElement("button",{className:"burger-menu-btn header-text",onClick:l},r.a.createElement(E.a,{name:"bars"})),a?r.a.createElement("ul",null,r.a.createElement("li",{className:"header-text",onClick:l},r.a.createElement(V.b,{className:"header-text",to:"/my-web-site/"},r.a.createElement(E.a,{name:"home"}))),r.a.createElement("li",{className:"header-text",onClick:l},r.a.createElement(V.b,{className:"header-text",to:"/my-web-site/games"},"Games")),r.a.createElement("li",{className:"header-text",onClick:l},r.a.createElement(V.b,{className:"header-text",to:"/my-web-site/links"},"Links")),r.a.createElement("li",{className:"header-text",onClick:l},r.a.createElement(V.b,{className:"header-text",to:"/my-web-site/about"},"About")),r.a.createElement("li",{className:"header-text",onClick:l},r.a.createElement(V.b,{className:"header-text",to:"/my-web-site/sw"},"Star Wars"))):null)),r.a.createElement("div",{className:"logo-container header-just-on-big-display"},r.a.createElement("h2",{className:"logo header-text"},r.a.createElement(V.b,{className:"header-text",to:"/my-web-site/"},r.a.createElement(E.a,{name:"home"})))),r.a.createElement("div",{className:"header-just-on-big-display"},r.a.createElement("ul",{className:"header-nav-list"},r.a.createElement("li",{className:"header-text"},r.a.createElement(V.b,{className:"header-text",to:"/my-web-site/games"},"Games")),r.a.createElement("li",{className:"header-text"},r.a.createElement(V.b,{className:"header-text",to:"/my-web-site/links"},"Links")),r.a.createElement("li",{className:"header-text"},r.a.createElement(V.b,{className:"header-text",to:"/my-web-site/about"},"About")),r.a.createElement("li",{className:"header-text"},r.a.createElement(V.b,{className:"header-text",to:"/my-web-site/sw"},"Star Wars"))))))}),Ee=(a(338),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("nav",{className:"nav-footer"},r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:"https://github.com/nikita-nikita-nikita"},r.a.createElement(E.a,{name:"github"}),"GitHub")),r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:"https://ru.reactjs.org/"},r.a.createElement(E.a,{name:"react"}),"React")),r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:"https://nodejs.org/uk/"},r.a.createElement(E.a,{name:"node js"}),"Node js"))),r.a.createElement("div",{className:"footer-text"},"Some useful text in footer"))}),he=function(){return r.a.createElement(o.a,{to:"/my-web-site"})},fe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(pe,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/",exact:!0,component:he}),r.a.createElement(o.b,{path:"/my-web-site",exact:!0,component:b}),r.a.createElement(o.b,{path:"/my-web-site/links",component:A}),r.a.createElement(o.b,{path:"/my-web-site/about",component:G}),r.a.createElement(o.b,{path:"/my-web-site/games",component:U}),r.a.createElement(o.b,{path:"/my-web-site/sw/",component:de}),r.a.createElement(o.b,{path:"*",exact:!0,component:m})),r.a.createElement(Ee,null))},be=a(35),ge=a(151),ve=a(161),we=a(163),ye=a(26),Ne=[{link:"https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/full/react.png",title:"React"},{link:"https://cdn.worldvectorlogo.com/logos/css3.svg",title:"CSS"},{link:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",title:"HTML"},{link:"https://cdn.iconscout.com/icon/free/png-512/redux-283024.png",title:"Redux"},{link:"https://cdn.worldvectorlogo.com/logos/apollo-graphql-compact.svg",title:"Apollo"},{link:"https://user-images.githubusercontent.com/4254571/67077774-a4533c80-f1af-11e9-9433-d836ef6f137d.png",title:"React saga"},{link:"https://polyakovdmitriy.ru/wp-content/uploads/2019/05/nodejs.png.pagespeed.ce_.9zN9M5IW0F.png",title:"Node js"},{link:"https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",title:"Express js"},{link:"https://cdn.worldvectorlogo.com/logos/socket-io.svg",title:"Socket.io"},{link:"https://www.ict360.cloud/wp-content/uploads/2017/10/mongo.png",title:"Mongo db"}],ke=new function e(){var t=this;Object(S.a)(this,e),this._apiBase="https://swapi.dev/api/",this._imageBase="https://starwars-visualguide.com/assets/img/",this._validIds={planets:[],starships:[],persons:[]},this.getResource=function(){var e=Object(x.a)(j.a.mark((function e(a){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("".concat(t._apiBase).concat(a));case 2:if("OK"===(n=e.sent).statusText||""===n.statusText){e.next=5;break}throw new Error("Could not fetch status: ".concat(n.status));case 5:return e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getImagePerson=function(e){return"".concat(t._imageBase,"characters/").concat(t._extractId(e),".jpg")},this.getImagePlanet=function(e){return"".concat(t._imageBase,"planets/").concat(t._extractId(e),".jpg")},this.getImageStarship=function(e){return"".concat(t._imageBase,"starships/").concat(t._extractId(e),".jpg")},this.getAllObjects=function(){var e=Object(x.a)(j.a.mark((function e(a){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(a,"/"));case 2:return n=e.sent,e.abrupt("return",n.results.map(t._transformArrayResponse));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getPerson=function(){var e=Object(x.a)(j.a.mark((function e(a){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("people/".concat(a,"/"));case 2:return n=e.sent,e.abrupt("return",t._transformPeople(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getPlanet=function(){var e=Object(x.a)(j.a.mark((function e(a){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("planets/".concat(a,"/"));case 2:return n=e.sent,e.abrupt("return",t._transformPlanet(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getStarship=function(){var e=Object(x.a)(j.a.mark((function e(a){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("starships/".concat(a,"/"));case 2:return n=e.sent,e.abrupt("return",t._transformStarship(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getRandomObjects=Object(x.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),this._extractId=function(e){return e.url.match(/\/([0-9]*)\/$/)[1]},this._transformPlanet=function(e){return{id:t._extractId(e),img:t.getImagePlanet(e),name:e.name,population:e.population,rotationPeriod:e.rotation_period,diameter:e.diameter}},this._transformPeople=function(e){return{id:t._extractId(e),img:t.getImagePerson(e),name:e.name,gender:e.gender,height:e.height,eyeColor:e.eye_color}},this._transformStarship=function(e){return{id:t._extractId(e),img:t.getImageStarship(e),name:e.name,model:e.model,costInCredits:e.cost_in_credits,starshipClass:e.starship_class}},this._transformArrayResponse=function(e){return{id:t._extractId(e),name:e.name}}},Oe=a(22);function je(e,t){var a=e-.5+Math.random()*(t-e+1);return Math.round(a)}var xe=j.a.mark(Te),Se=j.a.mark(Ae),_e=j.a.mark(Ie),Pe=j.a.mark(Re),Ce=j.a.mark(We),Le=j.a.mark(De);function Te(){var e,t,a,n;return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(Oe.a)((function(){return ke.getPerson(je(1,10))}));case 2:return e=r.sent,r.next=5,Object(Oe.a)((function(){return ke.getPlanet(je(2,10))}));case 5:return t=r.sent,a=[5,9,10],r.next=9,Object(Oe.a)((function(){return ke.getStarship(a[je(0,2)])}));case 9:return n=r.sent,r.next=12,Object(Oe.b)({type:"PUT_RANDOM_OBJECTS",payload:{planet:t,starship:n,person:e}});case 12:case"end":return r.stop()}}),xe)}function Ae(e){var t;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(Oe.a)((function(){return ke.getAllObjects(e.payload)}));case 2:return t=a.sent,a.next=5,Object(Oe.b)(Y(t));case 5:case"end":return a.stop()}}),Se)}function Ie(e){var t;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(Oe.a)((function(){return ke.getPerson(e.payload)}));case 2:return t=a.sent,a.next=5,Object(Oe.b)(Z(t));case 5:case"end":return a.stop()}}),_e)}function Re(e){var t;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(Oe.a)((function(){return ke.getPlanet(e.payload)}));case 2:return t=a.sent,a.next=5,Object(Oe.b)(ee(t));case 5:case"end":return a.stop()}}),Pe)}function We(e){var t;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(Oe.a)((function(){return ke.getStarship(e.payload)}));case 2:return t=a.sent,a.next=5,Object(Oe.b)(te(t));case 5:case"end":return a.stop()}}),Ce)}function De(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Oe.c)("LOAD_RANDOM_OBJECTS",Te);case 2:return e.next=4,Object(Oe.c)("LOAD_PERSON_LIST",Ae);case 4:return e.next=6,Object(Oe.c)("LOAD_SW_PERSON",Ie);case 6:return e.next=8,Object(Oe.c)("LOAD_SW_PLANET",Re);case 8:return e.next=10,Object(Oe.c)("LOAD_SW_STARSHIP",We);case 10:case"end":return e.stop()}}),Le)}var Me={object:{},list:[],randomObjects:{}},He=a(162),Be=Object(ye.a)(),Fe=Object(we.a)(),Ge=[ve.a,Fe,Object(ge.a)(Be)],Ue={technologies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne;return e},links:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_POSTS":return t.payload;case"DELETE_POSTS":return[];default:return e}},starWars:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PUT_SW_LIST":return Object(be.a)(Object(be.a)({},e),{},{list:t.payload});case"PUT_SW_CHARACTER":return Object(be.a)(Object(be.a)({},e),{},{object:Object(be.a)(Object(be.a)({},e.object),t.payload)});case"PUT_RANDOM_OBJECTS":return Object(be.a)(Object(be.a)({},e),{},{randomObjects:t.payload});default:return e}}},Je=Object(He.composeWithDevTools)(k.applyMiddleware.apply(void 0,Ge)),Ke=Object(k.combineReducers)(Object(be.a)({router:Object(i.b)(Be)},Ue)),Ve=Object(k.createStore)(Ke,{},Je);Fe.run(De);var qe=Ve,$e=function(){return r.a.createElement(s.a,{store:qe},r.a.createElement(i.a,{history:Be},r.a.createElement(fe,null)))},ze=(a(339),a(340),document.getElementById("root"));l.a.render(r.a.createElement($e,null),ze),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[173,1,2]]]);
//# sourceMappingURL=main.4f836f19.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{DL7G:function(e,a,t){"use strict";var n=t("q1tI"),i=t.n(n),r=t("vOnD"),o=t("dI71"),c=t("JCAc"),s=t("Qdst"),l=t("ILyh"),d=function(e){var a=Object(c.a)(e,{activeKey:"onSelect"}),t=a.id,r=a.generateChildId,o=a.onSelect,d=a.activeKey,u=a.transition,m=a.mountOnEnter,f=a.unmountOnExit,b=a.children,v=Object(n.useMemo)((function(){return r||function(e,a){return t?t+"-"+a+"-"+e:null}}),[t,r]),p=Object(n.useMemo)((function(){return{onSelect:o,activeKey:d,transition:u,mountOnEnter:m||!1,unmountOnExit:f||!1,getControlledId:function(e){return v(e,"tabpane")},getControllerId:function(e){return v(e,"tab")}}}),[o,d,u,m,f,v]);return i.a.createElement(s.a.Provider,{value:p},i.a.createElement(l.a.Provider,{value:o||null},b))},u=t("wx14"),m=t("zLVn"),f=t("TSYQ"),b=t.n(f),v=t("vUet"),p=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.as,r=void 0===n?"div":n,o=e.className,c=Object(m.a)(e,["bsPrefix","as","className"]),s=Object(v.a)(t,"tab-content");return i.a.createElement(r,Object(u.a)({ref:a},c,{className:b()(o,s)}))})),O=t("7xGa");var y=i.a.forwardRef((function(e,a){var t=function(e){var a=Object(n.useContext)(s.a);if(!a)return e;var t=a.activeKey,i=a.getControlledId,r=a.getControllerId,o=Object(m.a)(a,["activeKey","getControlledId","getControllerId"]),c=!1!==e.transition&&!1!==o.transition,d=Object(l.b)(e.eventKey);return Object(u.a)({},e,{active:null==e.active&&null!=d?Object(l.b)(t)===d:e.active,id:i(e.eventKey),"aria-labelledby":r(e.eventKey),transition:c&&(e.transition||o.transition||O.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:o.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:o.unmountOnExit})}(e),r=t.bsPrefix,o=t.className,c=t.active,d=t.onEnter,f=t.onEntering,p=t.onEntered,y=t.onExit,N=t.onExiting,j=t.onExited,E=t.mountOnEnter,x=t.unmountOnExit,h=t.transition,g=t.as,C=void 0===g?"div":g,k=(t.eventKey,Object(m.a)(t,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),w=Object(v.a)(r,"tab-pane");if(!c&&!h&&x)return null;var P=i.a.createElement(C,Object(u.a)({},k,{ref:a,role:"tabpanel","aria-hidden":!c,className:b()(o,w,{active:c})}));return h&&(P=i.a.createElement(h,{in:c,onEnter:d,onEntering:f,onEntered:p,onExit:y,onExiting:N,onExited:j,mountOnEnter:E,unmountOnExit:x},P)),i.a.createElement(s.a.Provider,{value:null},i.a.createElement(l.a.Provider,{value:null},P))}));y.displayName="TabPane";var N=y,j=function(e){function a(){return e.apply(this,arguments)||this}return Object(o.a)(a,e),a.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},a}(i.a.Component);j.Container=d,j.Content=p,j.Pane=N;var E=j,x=t("3Z9Z"),h=t("JI6e"),g=(t("K9S6"),i.a.createContext(null));g.displayName="NavbarContext";var C=g,k=i.a.createContext(null);k.displayName="CardContext";var w=k,P=t("rQNl"),K=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,r=e.children,o=e.as,c=void 0===o?"div":o,s=Object(m.a)(e,["bsPrefix","className","children","as"]);return t=Object(v.a)(t,"nav-item"),i.a.createElement(c,Object(u.a)({},s,{ref:a,className:b()(n,t)}),r)}));K.displayName="NavItem";var I=K;var S=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return null!=e})).reduce((function(e,a){if("function"!==typeof a)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?a:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];e.apply(this,n),a.apply(this,n)}}),null)};function L(e){return!e||"#"===e.trim()}var R=i.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"a":t,r=e.disabled,o=e.onKeyDown,c=Object(m.a)(e,["as","disabled","onKeyDown"]),s=function(e){var a=c.href,t=c.onClick;(r||L(a))&&e.preventDefault(),r?e.stopPropagation():t&&t(e)};return L(c.href)&&(c.role=c.role||"button",c.href=c.href||"#"),r&&(c.tabIndex=-1,c["aria-disabled"]=!0),i.a.createElement(n,Object(u.a)({ref:a},c,{onClick:s,onKeyDown:S((function(e){" "===e.key&&(e.preventDefault(),s(e))}),o)}))}));R.displayName="SafeAnchor";var T=R,A=t("VWqr"),M={disabled:!1,as:T},W=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.disabled,r=e.className,o=e.href,c=e.eventKey,s=e.onSelect,l=e.as,d=Object(m.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return t=Object(v.a)(t,"nav-link"),i.a.createElement(A.a,Object(u.a)({},d,{href:o,ref:a,eventKey:c,as:l,disabled:n,onSelect:s,className:b()(r,t,n&&"disabled")}))}));W.displayName="NavLink",W.defaultProps=M;var D=W,H=i.a.forwardRef((function(e,a){var t,r,o,s=Object(c.a)(e,{activeKey:"onSelect"}),l=s.as,d=void 0===l?"div":l,f=s.bsPrefix,p=s.variant,O=s.fill,y=s.justify,N=s.navbar,j=s.className,E=s.children,x=s.activeKey,h=Object(m.a)(s,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),g=Object(v.a)(f,"nav"),k=!1,K=Object(n.useContext)(C),I=Object(n.useContext)(w);return K?(r=K.bsPrefix,k=null==N||N):I&&(o=I.cardHeaderBsPrefix),i.a.createElement(P.a,Object(u.a)({as:d,ref:a,activeKey:x,className:b()(j,(t={},t[g]=!k,t[r+"-nav"]=k,t[o+"-"+p]=!!o,t[g+"-"+p]=!!p,t[g+"-fill"]=O,t[g+"-justified"]=y,t))},h),E)}));H.displayName="Nav",H.defaultProps={justify:!1,fill:!1},H.Item=I,H.Link=D;var q=H,z=t("YdCC"),V=t("U1MP"),B=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,r=e.variant,o=e.as,c=void 0===o?"img":o,s=Object(m.a)(e,["bsPrefix","className","variant","as"]),l=Object(v.a)(t,"card-img");return i.a.createElement(c,Object(u.a)({ref:a,className:b()(r?l+"-"+r:l,n)},s))}));B.displayName="CardImg",B.defaultProps={variant:null};var J=B,_=Object(V.a)("h5"),G=Object(V.a)("h6"),X=Object(z.a)("card-body"),F=Object(z.a)("card-title",{Component:_}),U=Object(z.a)("card-subtitle",{Component:G}),Y=Object(z.a)("card-link",{Component:"a"}),Z=Object(z.a)("card-text",{Component:"p"}),Q=Object(z.a)("card-header"),$=Object(z.a)("card-footer"),ee=Object(z.a)("card-img-overlay"),ae=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.bg,c=e.text,s=e.border,l=e.body,d=e.children,f=e.as,p=void 0===f?"div":f,O=Object(m.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=Object(v.a)(t,"card"),N=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return i.a.createElement(w.Provider,{value:N},i.a.createElement(p,Object(u.a)({ref:a},O,{className:b()(r,y,o&&"bg-"+o,c&&"text-"+c,s&&"border-"+s)}),l?i.a.createElement(X,null,d):d))}));ae.displayName="Card",ae.defaultProps={body:!1},ae.Img=J,ae.Title=F,ae.Subtitle=U,ae.Body=X,ae.Link=Y,ae.Text=Z,ae.Header=Q,ae.Footer=$,ae.ImgOverlay=ee;var te=ae,ne=i.a.createContext(null);ne.displayName="AccordionContext";var ie=ne;var re,oe=i.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"button":t,o=e.children,c=e.eventKey,s=e.onClick,d=Object(m.a)(e,["as","children","eventKey","onClick"]),f=function(e,a){var t=Object(n.useContext)(ie),i=Object(n.useContext)(l.a);return function(n){i&&i(e===t?null:e,n),a&&a(n)}}(c,s);return"button"===r&&(d.type="button"),i.a.createElement(r,Object(u.a)({ref:a,onClick:f},d),o)})),ce=t("7j6X"),se=t("YECM"),le=t("dRu9"),de=t("z+q/"),ue={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function me(e,a){var t=a["offset"+e[0].toUpperCase()+e.slice(1)],n=ue[e];return t+parseInt(Object(ce.a)(a,n[0]),10)+parseInt(Object(ce.a)(a,n[1]),10)}var fe=((re={})[le.c]="collapse",re[le.d]="collapsing",re[le.b]="collapsing",re[le.a]="collapse show",re),be={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:me},ve=i.a.forwardRef((function(e,a){var t=e.onEnter,r=e.onEntering,o=e.onEntered,c=e.onExit,s=e.onExiting,l=e.className,d=e.children,f=e.dimension,v=void 0===f?"height":f,p=e.getDimensionValue,O=void 0===p?me:p,y=Object(m.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),N="function"===typeof v?v():v,j=Object(n.useMemo)((function(){return S((function(e){e.style[N]="0"}),t)}),[N,t]),E=Object(n.useMemo)((function(){return S((function(e){var a="scroll"+N[0].toUpperCase()+N.slice(1);e.style[N]=e[a]+"px"}),r)}),[N,r]),x=Object(n.useMemo)((function(){return S((function(e){e.style[N]=null}),o)}),[N,o]),h=Object(n.useMemo)((function(){return S((function(e){e.style[N]=O(N,e)+"px",Object(de.a)(e)}),c)}),[c,O,N]),g=Object(n.useMemo)((function(){return S((function(e){e.style[N]=null}),s)}),[N,s]);return i.a.createElement(le.e,Object(u.a)({ref:a,addEndListener:se.a},y,{"aria-expanded":y.role?y.in:null,onEnter:j,onEntering:E,onEntered:x,onExit:h,onExiting:g}),(function(e,a){return i.a.cloneElement(d,Object(u.a)({},a,{className:b()(l,d.props.className,fe[e],"width"===N&&"width")}))}))}));ve.defaultProps=be;var pe=ve,Oe=i.a.forwardRef((function(e,a){var t=e.children,r=e.eventKey,o=Object(m.a)(e,["children","eventKey"]),c=Object(n.useContext)(ie);return i.a.createElement(pe,Object(u.a)({ref:a,in:c===r},o),i.a.createElement("div",null,i.a.Children.only(t)))}));Oe.displayName="AccordionCollapse";var ye=Oe,Ne=i.a.forwardRef((function(e,a){var t=Object(c.a)(e,{activeKey:"onSelect"}),n=t.as,r=void 0===n?"div":n,o=t.activeKey,s=t.bsPrefix,d=t.children,f=t.className,p=t.onSelect,O=Object(m.a)(t,["as","activeKey","bsPrefix","children","className","onSelect"]),y=b()(f,Object(v.a)(s,"accordion"));return i.a.createElement(ie.Provider,{value:o||null},i.a.createElement(l.a.Provider,{value:p||null},i.a.createElement(r,Object(u.a)({ref:a},O,{className:y}),d)))}));Ne.displayName="Accordion",Ne.Toggle=oe,Ne.Collapse=ye;var je=Ne,Ee=t("j3gy"),xe=t("Gglf"),he=i.a.createElement,ge=Object(r.b)(h.a).withConfig({displayName:"TabWrap__CardWrap",componentId:"mv6inv-0"})(["height:200px;display:flex;align-items:flex-end;overflow:hidden;&:before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;transform:translateX(0);transition:all 1s cubic-bezier(0.64,0.04,0.35,1);transition-delay:","s;background-color:#10151b;z-index:5;}"],e=>e.delay),Ce=({animation:e,tabs:a,isSlice:t,isSkills:i})=>{var{mobile:r,desktop:o}=Object(xe.f)();return Object(n.useEffect)(()=>{a.map(e=>e.content&&e.content.map(e=>e.delay=Number(Math.random().toFixed(2))))},[]),he(E.Container,{id:"portfolio-tabs",defaultActiveKey:a[0].key,transition:!1},he(q,{variant:"pills",className:Object(xe.a)({animation:e,className:"tab-wrap"})},a.map((e,a)=>he(q.Item,{key:"".concat(e.key,"_").concat(a),className:"tab-item"},he(q.Link,{eventKey:e.key,className:"tab-link"},e.label)))),he(E.Content,{className:Object(xe.a)({animation:e,className:"tab-content-wrap"})},a.map((a,n)=>he(E.Pane,{key:"tab_".concat(n),eventKey:a.key},i?he(je,{defaultActiveKey:!r&&"panel1"},a.content.map((e,a)=>he(te,{key:"skill_".concat(a),className:"skill-row"},he(te.Header,{className:"skill-header"},he(je.Toggle,{as:te.Header,eventKey:r?e.value:"panel1",className:"skill-toggle"},he("p",{className:"skill-name"},e.name),he(Ee.f,{src:e.icon,className:"skill-icon"}))),he(je.Collapse,{eventKey:r?e.value:"panel1",className:"skill-collapse"},he(te.Body,{className:"skill-body"},he("p",{className:"skill-description"},e.description)))))):he(x.a,null,a.content&&(e=>t?e:e.slice(0,6))(a.content).map((a,t)=>he(ge,{key:"card_".concat(t),xs:a.size.xs,md:a.size.md,lg:a.size.lg,xl:a.size.xl,delay:a.delay,className:Object(xe.a)({animation:e,className:"card-wrap"})},he(Ee.a,{link:a.link,className:"project-nav-link"}),he(Ee.f,{src:a.img,className:"project-image"}),he("h6",{className:"project-title"},a.title),o&&he("p",{className:"project-link",children:"View project"}))))))))};t.d(a,"a",(function(){return Ce}))},Fmqa:function(e,a,t){},HH4N:function(e,a,t){},"J/vo":function(e,a,t){},"O+Xb":function(e,a,t){},O0dW:function(e,a,t){},Vbca:function(e,a,t){},dLGX:function(e,a,t){"use strict";var n=t("q1tI"),i=t.n(n),r=t("wEEd"),o=t("3Z9Z"),c=t("JI6e"),s=t("7vrA"),l=t("Gglf"),d=t("j3gy"),u=(t("J/vo"),i.a.createElement),m=(e,a)=>"".concat(-e/4,"px ").concat(-a/8,"px"),f=({firstLoad:e,animation:a})=>{var{mobile:t,desktop:n}=Object(l.f)(),[i,f]=Object(r.b)(()=>({xy:[0,0],config:{mass:9,tension:136,friction:81}}));return u("section",{id:"main-section",className:"section",onMouseMove:({clientX:e,clientY:a})=>f({xy:[e,a]})},u(d.t,{display:!n,direction:t?"right":"left",className:Object(l.a)({firstLoad:e,animation:a})}),u(d.A,{firstLoad:e,display:!t}),u(s.a,{fluid:!0},u(o.a,null,u(c.a,{xs:12,lg:6,className:Object(l.a)({firstLoad:e,animation:a,className:"col-info"})},u(d.f,{isDot:!0,display:!n,className:Object(l.a)({firstLoad:e,animation:a})}),u(d.r,{isContentWhite:!0,className:"sub-title"},"We Are ",u("span",null,"WEB-Studio")),u(d.r,{main:!0,isContentWhite:!0,className:"title",title:"MANTICORE"})),u(c.a,{xs:12,lg:6},u(d.b,{props:i,move:m,firstLoad:e,animation:a})))))},b=(t("Vbca"),i.a.createElement),v=({animation:e})=>{var{desktop:a}=Object(l.f)();return b("section",{id:"about-section",className:"section"},b(s.a,{fluid:!0},b(o.a,null,b(c.a,{xs:12},b(d.r,{main:!0,className:e?"on-enter":"on-leave",title:"\u041e \u043d\u0430\u0441",isContentWhite:!0})),b(c.a,{xs:12},b(d.f,{isDot:!0,display:!a}),b("div",{className:"text-box ".concat(e?"on-enter":"on-leave")},b(d.n,{isContentWhite:!0,className:"about-desc"},"\u0420\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u043c \u043a\u0440\u0435\u0430\u0442\u0438\u0432\u043d\u044b\u0435 \u0441\u0430\u0439\u0442\u044b \u0438 \u0431\u0440\u0435\u043d\u0434\u0438\u043d\u0433\u0438, \u0437\u0430\u0442\u043e\u0447\u0435\u043d\u043d\u044b\u0435 \u043f\u043e\u0434 \u0431\u0438\u0437\u043d\u0435\u0441 \u043a\u043b\u0438\u0435\u043d\u0442\u0430. \u041d\u0430\u0448 \u043f\u043e\u0434\u0445\u043e\u0434 \u043d\u0430\u0446\u0435\u043b\u0435\u043d \u043d\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043c\u043e\u0433\u0430\u0442\u044c \u0431\u0438\u0437\u043d\u0435\u0441\u0443 \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c, \u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043e\u043f\u044b\u0442."),b(d.a,{link:"/about",className:"about-link"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435")),b(d.f,{src:"/images/statue-about.png",className:"about-statue ".concat(e?"on-enter":"on-leave")})))))},p=t("rqqs"),O=(t("O0dW"),t("Fmqa"),i.a.createElement),y=({animation:e})=>O("section",{id:"services-section",className:"section main-services-section"},O(s.a,{className:"section-wrapper"},O(d.r,{main:!0,title:"\u0423\u0441\u043b\u0443\u0433\u0438",isContentWhite:!0,className:Object(l.a)({animation:e})}),O(o.a,{className:Object(l.a)({animation:e,className:"row-service"})},p.e.map((a,t)=>O(c.a,{key:"service_".concat(t),xs:12,md:6,className:Object(l.a)({animation:e,className:"col-service"})},O(d.a,{link:a.link},O(o.a,{className:"services-card"},O(c.a,{xs:12,lg:6},O(d.f,{src:a.img,className:"services-image ".concat(t===p.e.length-1?"other":"")})),O(c.a,{xs:12,lg:6},O("div",{className:"services-info"},O(d.r,{isContentWhite:!0,className:"services-title",title:a.name}),O(d.n,{isContentWhite:!0,className:"services-desc",children:a.desc})))))))))),N=t("DL7G"),j=(t("HH4N"),t("O+Xb"),i.a.createElement),E=({animation:e,isPortfolio:a})=>j("section",{id:"portfolio-section",className:"section"},j(d.s,null,j(N.a,{tabs:p.d,animation:e,isSlice:a}),!a&&j("div",{className:Object(l.a)({animation:e,className:"link-wrap"})},j(d.a,{link:"/portfolio",className:"see-all-link"},"\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0441\u0435"))));t.d(a,"b",(function(){return f})),t.d(a,"a",(function(){return v})),t.d(a,"d",(function(){return y})),t.d(a,"c",(function(){return E}))}}]);
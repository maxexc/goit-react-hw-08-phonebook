"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[406],{9131:function(e,t,n){var a=n(5861),o=n(4687),r=n.n(o),i=n(2431),s=n(2147),c=n(2791),l=n(6668),u=n(184);t.Z=function(){var e=(0,c.useCallback)(function(){var e=(0,a.Z)(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.R)(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),t=(0,c.useCallback)(function(){var e=(0,a.Z)(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return(0,u.jsx)(i.Z,{id:"tsparticles",init:e,loaded:t,options:{background:{color:{value:"#ffffff"},image:"url(".concat(l,")"),position:"50% 50%",repeat:"no-repeat",size:"cover"},backgroundMask:{cover:{color:{value:{r:255,g:255,b:255}}},enable:!0},fullScreen:{zIndex:-1},interactivity:{events:{onClick:{enable:!1,mode:"push"},onHover:{enable:!0,mode:"bubble",parallax:{force:60}}},modes:{attract:{distance:200,duration:.4,easing:"ease-out-quad",factor:1,maxSpeed:50,speed:1},bounce:{distance:200},bubble:{distance:200,duration:2,mix:!1,opacity:1,size:80,divs:{distance:200,duration:.4,mix:!1,selectors:[]}},connect:{distance:80,links:{opacity:.5},radius:60},grab:{distance:400,links:{blink:!1,consent:!1,opacity:1}},push:{default:!0,groups:[],quantity:4},remove:{quantity:2},repulse:{distance:200,duration:.4,factor:100,speed:1,maxSpeed:50,easing:"ease-out-quad",divs:{distance:200,duration:.4,factor:100,speed:1,maxSpeed:50,easing:"ease-out-quad",selectors:[]}},trail:{delay:1,pauseOnStop:!1,quantity:1},light:{area:{gradient:{start:{value:"#ffffff"},stop:{value:"#000000"}},radius:1e3},shadow:{color:{value:"#000000"},length:2e3}}}},particles:{color:{value:"#ffffff"},move:{attract:{rotate:{x:600,y:1200}},enable:!0,outModes:{bottom:"out",left:"out",right:"out",top:"out"}},number:{density:{enable:!0},value:80},opacity:{animation:{speed:1,minimumValue:.1}},size:{random:{enable:!0},value:{min:1,max:10},animation:{speed:40,minimumValue:.1}},life:{count:0,delay:{random:{enable:!1,minimumValue:0},value:0,sync:!1},duration:{random:{enable:!1,minimumValue:1e-4},value:0,sync:!1}},roll:{darken:{enable:!1,value:0},enable:!1,enlighten:{enable:!1,value:0},mode:"vertical",speed:25},tilt:{random:{enable:!1,minimumValue:0},value:0,animation:{enable:!1,speed:0,decay:0,sync:!1},direction:"clockwise",enable:!1},twinkle:{lines:{enable:!1,frequency:.05,opacity:1},particles:{enable:!1,frequency:.05,opacity:1}},wobble:{distance:5,enable:!1,speed:{angle:50,move:10}},orbit:{animation:{count:0,enable:!1,speed:1,decay:0,sync:!1},enable:!1,opacity:1,rotation:{random:{enable:!1,minimumValue:0},value:45},width:1},links:{blink:!1,color:{value:"#ffffff"},consent:!1,distance:150,enable:!0,frequency:1,opacity:1,shadow:{blur:5,color:{value:"#000"},enable:!1},triangles:{enable:!1,frequency:1},width:1,warp:!1},repulse:{random:{enable:!1,minimumValue:0},value:0,enabled:!1,distance:1,duration:1,factor:1,speed:1}}}})}},9406:function(e,t,n){n.r(t),n.d(t,{Login:function(){return ge},default:function(){return he}});var a=n(1614),o=n(9439),r=n(9434),i=n(9273),s=n(2791),c=n(6151),l=n(3400),u=n(6743),d=n(6126),f=n(4554),p=n(8096),m=n(4925),v=n(292),g=n(5335),h=n(3817),y=n(6554),b=n(5648),x=n(4942),T=n(1413),E=n(3366);function Z(e,t){if(null==e)return{};var n,a,o=(0,E.Z)(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var C=n(3433),w=n(8182),I=["theme","type"],_=["delay","staleId"],k=function(e){return"number"==typeof e&&!isNaN(e)},L=function(e){return"string"==typeof e},O=function(e){return"function"==typeof e},R=function(e){return L(e)||O(e)?e:null},N=function(e){return(0,s.isValidElement)(e)||L(e)||O(e)||k(e)};function j(e){var t=e.enter,n=e.exit,a=e.appendPosition,o=void 0!==a&&a,r=e.collapse,i=void 0===r||r,c=e.collapseDuration,l=void 0===c?300:c;return function(e){var a=e.children,r=e.position,c=e.preventExitTransition,u=e.done,d=e.nodeRef,f=e.isIn,p=o?"".concat(t,"--").concat(r):t,m=o?"".concat(n,"--").concat(r):n,v=(0,s.useRef)(0);return(0,s.useLayoutEffect)((function(){var e,t=d.current,n=p.split(" "),a=function e(a){var o;a.target===d.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===v.current&&"animationcancel"!==a.type&&(o=t.classList).remove.apply(o,(0,C.Z)(n)))};(e=t.classList).add.apply(e,(0,C.Z)(n)),t.addEventListener("animationend",a),t.addEventListener("animationcancel",a)}),[]),(0,s.useEffect)((function(){var e=d.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var a=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=a+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,u,l):u()};f||(c?t():(v.current=1,e.className+=" ".concat(m),e.addEventListener("animationend",t)))}),[f]),s.createElement(s.Fragment,null,a)}}function M(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var P={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(a){var o=setTimeout((function(){a.apply(void 0,(0,C.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},z=function(e){var t=e.theme,n=e.type,a=Z(e,I);return s.createElement("svg",(0,T.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},a))},S={info:function(e){return s.createElement(z,(0,T.Z)({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return s.createElement(z,(0,T.Z)({},e),s.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return s.createElement(z,(0,T.Z)({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return s.createElement(z,(0,T.Z)({},e),s.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return s.createElement("div",{className:"Toastify__spinner"})}};function D(e){var t=(0,s.useReducer)((function(e){return e+1}),0),n=(0,o.Z)(t,2)[1],a=(0,s.useState)([]),r=(0,o.Z)(a,2),i=r[0],c=r[1],l=(0,s.useRef)(null),u=(0,s.useRef)(new Map).current,d=function(e){return-1!==i.indexOf(e)},f=(0,s.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:d,getToast:function(e){return u.get(e)}}).current;function p(e){var t=e.containerId;!f.props.limit||t&&f.containerId!==t||(f.count-=f.queue.length,f.queue=[])}function m(e){c((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function v(){var e=f.queue.shift();h(e.toastContent,e.toastProps,e.staleId)}function g(e,t){var a=t.delay,o=t.staleId,r=Z(t,_);if(N(e)&&!function(e){return!l.current||f.props.enableMultiContainer&&e.containerId!==f.props.containerId||u.has(e.toastId)&&null==e.updateId}(r)){var i=r.toastId,c=r.updateId,d=r.data,p=f.props,g=function(){return m(i)},y=null==c;y&&f.count++;var b,x,E=(0,T.Z)((0,T.Z)((0,T.Z)({},p),{},{style:p.toastStyle,key:f.toastKey++},r),{},{toastId:i,updateId:c,data:d,closeToast:g,isIn:!1,className:R(r.className||p.toastClassName),bodyClassName:R(r.bodyClassName||p.bodyClassName),progressClassName:R(r.progressClassName||p.progressClassName),autoClose:!r.isLoading&&(b=r.autoClose,x=p.autoClose,!1===b||k(b)&&b>0?b:x),deleteToast:function(){var e=M(u.get(i),"removed");u.delete(i),P.emit(4,e);var t=f.queue.length;if(f.count=null==i?f.count-f.displayedToast:f.count-1,f.count<0&&(f.count=0),t>0){var a=null==i?f.props.limit:1;if(1===t||1===a)f.displayedToast++,v();else{var o=a>t?t:a;f.displayedToast=o;for(var r=0;r<o;r++)v()}}else n()}});E.iconOut=function(e){var t=e.theme,n=e.type,a=e.isLoading,o=e.icon,r=null,i={theme:t,type:n};return!1===o||(O(o)?r=o(i):(0,s.isValidElement)(o)?r=(0,s.cloneElement)(o,i):L(o)||k(o)?r=o:a?r=S.spinner():function(e){return e in S}(n)&&(r=S[n](i))),r}(E),O(r.onOpen)&&(E.onOpen=r.onOpen),O(r.onClose)&&(E.onClose=r.onClose),E.closeButton=p.closeButton,!1===r.closeButton||N(r.closeButton)?E.closeButton=r.closeButton:!0===r.closeButton&&(E.closeButton=!N(p.closeButton)||p.closeButton);var C=e;(0,s.isValidElement)(e)&&!L(e.type)?C=(0,s.cloneElement)(e,{closeToast:g,toastProps:E,data:d}):O(e)&&(C=e({closeToast:g,toastProps:E,data:d})),p.limit&&p.limit>0&&f.count>p.limit&&y?f.queue.push({toastContent:C,toastProps:E,staleId:o}):k(a)?setTimeout((function(){h(C,E,o)}),a):h(C,E,o)}}function h(e,t,n){var a=t.toastId;n&&u.delete(n);var o={content:e,props:t};u.set(a,o),c((function(e){return[].concat((0,C.Z)(e),[a]).filter((function(e){return e!==n}))})),P.emit(4,M(o,null==o.props.updateId?"added":"updated"))}return(0,s.useEffect)((function(){return f.containerId=e.containerId,P.cancelEmit(3).on(0,g).on(1,(function(e){return l.current&&m(e)})).on(5,p).emit(2,f),function(){u.clear(),P.emit(3,f)}}),[]),(0,s.useEffect)((function(){f.props=e,f.isToastActive=d,f.displayedToast=i.length})),{getToastToRender:function(t){var n=new Map,a=Array.from(u.values());return e.newestOnTop&&a.reverse(),a.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:l,isToastActive:d}}function B(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function q(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function A(e){var t=(0,s.useState)(!1),n=(0,o.Z)(t,2),a=n[0],r=n[1],i=(0,s.useState)(!1),c=(0,o.Z)(i,2),l=c[0],u=c[1],d=(0,s.useRef)(null),f=(0,s.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,s.useRef)(e),m=e.autoClose,v=e.pauseOnHover,g=e.closeToast,h=e.onClick,y=e.closeOnClick;function b(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",Z),document.addEventListener("mouseup",C),document.addEventListener("touchmove",Z),document.addEventListener("touchend",C);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=B(t.nativeEvent),f.y=q(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function x(t){if(f.boundingRect){var n=f.boundingRect,a=n.top,o=n.bottom,r=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=r&&f.x<=i&&f.y>=a&&f.y<=o?E():T()}}function T(){r(!0)}function E(){r(!1)}function Z(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,a&&E(),f.x=B(t),f.y=q(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function C(){document.removeEventListener("mousemove",Z),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",Z),document.removeEventListener("touchend",C);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return u(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,s.useEffect)((function(){p.current=e})),(0,s.useEffect)((function(){return d.current&&d.current.addEventListener("d",T,{once:!0}),O(e.onOpen)&&e.onOpen((0,s.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;O(e.onClose)&&e.onClose((0,s.isValidElement)(e.children)&&e.children.props)}}),[]),(0,s.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||E(),window.addEventListener("focus",T),window.addEventListener("blur",E)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",T),window.removeEventListener("blur",E))}}),[e.pauseOnFocusLoss]);var w={onMouseDown:b,onTouchStart:b,onMouseUp:x,onTouchEnd:x};return m&&v&&(w.onMouseEnter=E,w.onMouseLeave=T),y&&(w.onClick=function(e){h&&h(e),f.canCloseOnClick&&g()}),{playToast:T,pauseToast:E,isRunning:a,preventExitTransition:l,toastRef:d,eventHandlers:w}}function V(e){var t=e.closeToast,n=e.theme,a=e.ariaLabel,o=void 0===a?"close":a;return s.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},s.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function F(e){var t=e.delay,n=e.isRunning,a=e.closeToast,o=e.type,r=void 0===o?"default":o,i=e.hide,c=e.className,l=e.style,u=e.controlledProgress,d=e.progress,f=e.rtl,p=e.isIn,m=e.theme,v=i||u&&0===d,g=(0,T.Z)((0,T.Z)({},l),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:v?0:1});u&&(g.transform="scaleX(".concat(d,")"));var h=(0,w.Z)("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(m),"Toastify__progress-bar--".concat(r),{"Toastify__progress-bar--rtl":f}),y=O(c)?c({rtl:f,type:r,defaultClassName:h}):(0,w.Z)(h,c);return s.createElement("div",(0,x.Z)({role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:y,style:g},u&&d>=1?"onTransitionEnd":"onAnimationEnd",u&&d<1?null:function(){p&&a()}))}var H=function(e){var t=A(e),n=t.isRunning,a=t.preventExitTransition,o=t.toastRef,r=t.eventHandlers,i=e.closeButton,c=e.children,l=e.autoClose,u=e.onClick,d=e.type,f=e.hideProgressBar,p=e.closeToast,m=e.transition,v=e.position,g=e.className,h=e.style,y=e.bodyClassName,b=e.bodyStyle,x=e.progressClassName,E=e.progressStyle,Z=e.updateId,C=e.role,I=e.progress,_=e.rtl,k=e.toastId,L=e.deleteToast,R=e.isIn,N=e.isLoading,j=e.iconOut,M=e.closeOnClick,P=e.theme,z=(0,w.Z)("Toastify__toast","Toastify__toast-theme--".concat(P),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":_},{"Toastify__toast--close-on-click":M}),S=O(g)?g({rtl:_,position:v,type:d,defaultClassName:z}):(0,w.Z)(z,g),D=!!I||!l,B={closeToast:p,type:d,theme:P},q=null;return!1===i||(q=O(i)?i(B):(0,s.isValidElement)(i)?(0,s.cloneElement)(i,B):V(B)),s.createElement(m,{isIn:R,done:L,position:v,preventExitTransition:a,nodeRef:o},s.createElement("div",(0,T.Z)((0,T.Z)({id:k,onClick:u,className:S},r),{},{style:h,ref:o}),s.createElement("div",(0,T.Z)((0,T.Z)({},R&&{role:C}),{},{className:O(y)?y({type:d}):(0,w.Z)("Toastify__toast-body",y),style:b}),null!=j&&s.createElement("div",{className:(0,w.Z)("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!N})},j),s.createElement("div",null,c)),q,s.createElement(F,(0,T.Z)((0,T.Z)({},Z&&!D?{key:"pb-".concat(Z)}:{}),{},{rtl:_,theme:P,delay:l,isRunning:n,isIn:R,closeToast:p,hide:f,type:d,style:E,className:x,controlledProgress:D,progress:I||0}))))},Q=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},G=j(Q("bounce",!0)),U=(j(Q("slide",!0)),j(Q("zoom")),j(Q("flip")),(0,s.forwardRef)((function(e,t){var n=D(e),a=n.getToastToRender,o=n.containerRef,r=n.isToastActive,i=e.className,c=e.style,l=e.rtl,u=e.containerId;function d(e){var t=(0,w.Z)("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":l});return O(i)?i({position:e,rtl:l,defaultClassName:t}):(0,w.Z)(t,R(i))}return(0,s.useEffect)((function(){t&&(t.current=o.current)}),[]),s.createElement("div",{ref:o,className:"Toastify",id:u},a((function(e,t){var n=t.length?(0,T.Z)({},c):(0,T.Z)((0,T.Z)({},c),{},{pointerEvents:"none"});return s.createElement("div",{className:d(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var a=e.content,o=e.props;return s.createElement(H,(0,T.Z)((0,T.Z)({},o),{},{isIn:r(o.toastId),style:(0,T.Z)((0,T.Z)({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(o.key)}),a)})))})))})));U.displayName="ToastContainer",U.defaultProps={position:"top-right",transition:G,autoClose:5e3,closeButton:V,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var W,Y=new Map,X=[],K=1;function J(){return""+K++}function $(e){return e&&(L(e.toastId)||k(e.toastId))?e.toastId:J()}function ee(e,t){return Y.size>0?P.emit(0,e,t):X.push({content:e,options:t}),t.toastId}function te(e,t){return(0,T.Z)((0,T.Z)({},t),{},{type:t&&t.type||e,toastId:$(t)})}function ne(e){return function(t,n){return ee(t,te(e,n))}}function ae(e,t){return ee(e,te("default",t))}ae.loading=function(e,t){return ee(e,te("default",(0,T.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},ae.promise=function(e,t,n){var a,o=t.pending,r=t.error,i=t.success;o&&(a=L(o)?ae.loading(o,n):ae.loading(o.render,(0,T.Z)((0,T.Z)({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,o){if(null!=t){var r=(0,T.Z)((0,T.Z)((0,T.Z)({type:e},s),n),{},{data:o}),i=L(t)?{render:t}:t;return a?ae.update(a,(0,T.Z)((0,T.Z)({},r),i)):ae(i.render,(0,T.Z)((0,T.Z)({},r),i)),o}ae.dismiss(a)},l=O(e)?e():e;return l.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",r,e)})),l},ae.success=ne("success"),ae.info=ne("info"),ae.error=ne("error"),ae.warning=ne("warning"),ae.warn=ae.warning,ae.dark=function(e,t){return ee(e,te("default",(0,T.Z)({theme:"dark"},t)))},ae.dismiss=function(e){Y.size>0?P.emit(1,e):X=X.filter((function(t){return null!=e&&t.options.toastId!==e}))},ae.clearWaitingQueue=function(e){return void 0===e&&(e={}),P.emit(5,e)},ae.isActive=function(e){var t=!1;return Y.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},ae.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,a=Y.get(n||W);return a&&a.getToast(e)}(e,t);if(n){var a=n.props,o=n.content,r=(0,T.Z)((0,T.Z)((0,T.Z)({},a),t),{},{toastId:t.toastId||e,updateId:J()});r.toastId!==e&&(r.staleId=e);var i=r.render||o;delete r.render,ee(i,r)}}),0)},ae.done=function(e){ae.update(e,{progress:1})},ae.onChange=function(e){return P.on(4,e),function(){P.off(4,e)}},ae.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},ae.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},P.on(2,(function(e){W=e.containerId||e,Y.set(W,e),X.forEach((function(e){P.emit(0,e.content,e.options)})),X=[]})).on(3,(function(e){Y.delete(e.containerId||e),0===Y.size&&P.off(0).off(1).off(5)}));var oe,re,ie=n(168),se=n(1087),ce=n(7691),le=ce.ZP.p(oe||(oe=(0,ie.Z)(["\n  margin-top: 30px;\n  text-align: center;\n"]))),ue=(0,ce.ZP)(se.rU)(re||(re=(0,ie.Z)(["\n  color: #1976d2;\n"]))),de=n(5892),fe=n(184);function pe(){var e=(0,r.I0)(),t=(0,s.useState)(""),n=(0,o.Z)(t,2),x=n[0],T=n[1],E=(0,s.useState)(""),Z=(0,o.Z)(E,2),C=Z[0],w=Z[1],I=(0,s.useState)(!1),_=(0,o.Z)(I,2),k=_[0],L=_[1],O=function(e){switch(e.currentTarget.name){case"email":T(e.currentTarget.value);break;case"password":w(e.currentTarget.value);break;default:return}};return(0,fe.jsx)(a.Z,{sx:{display:"flex",justifyContent:"center",alignContent:"center"},children:(0,fe.jsxs)(f.Z,{sx:{width:"420px",textAlign:"center",p:"10px",border:"2px solid #0f7ec9",bgcolor:"#fff",borderRadius:"20px"},children:[(0,fe.jsx)(de.Z,{sx:{fontSize:80,mb:3,color:"#0f7ec9"}}),(0,fe.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=t.currentTarget;""!==n.elements.email.value.trim()?n.elements.password.value.length<6?ae.warn("Password must contain at least 7 characters"):(e((0,i.Ib)({email:n.elements.email.value.trim(),password:n.elements.password.value})),n.reset()):ae.info("Sorry, E-mail field cannot be empty")},autoComplete:"off",children:[(0,fe.jsxs)(f.Z,{sx:{display:"flex",alignItems:"flex-end"},children:[(0,fe.jsx)(g.Z,{sx:{color:"#0f7ec9",mr:1,mb:1}}),(0,fe.jsx)(u.Z,{onChange:O,label:"Email",name:"email",value:x,required:!0,variant:"standard",id:"standard-basic",title:"Email must contain at list '@'. For example user@mail.com",sx:{m:1,width:"100%"}})]}),(0,fe.jsxs)(f.Z,{sx:{display:"flex",alignItems:"flex-end",mb:"30px"},children:[(0,fe.jsx)(h.Z,{sx:{color:"#0f7ec9",mr:1,mb:1}}),(0,fe.jsxs)(p.Z,{sx:{m:1,width:"100%"},variant:"standard",children:[(0,fe.jsx)(m.Z,{htmlFor:"standard-adornment-password",children:"Password"}),(0,fe.jsx)(v.Z,{onChange:O,label:"Password",name:"password",value:C,required:!0,id:"standard-adornment-password",title:"Your Password must include a minimum of 7 characters",type:k?"text":"password",endAdornment:(0,fe.jsx)(d.Z,{position:"end",children:(0,fe.jsx)(l.Z,{"aria-label":"toggle password visibility",onClick:function(){return L((function(e){return!e}))},onMouseDown:function(e){e.preventDefault()},children:k?(0,fe.jsx)(y.Z,{sx:{color:"#0f7ec9"}}):(0,fe.jsx)(b.Z,{})})})})]})]}),(0,fe.jsx)(c.Z,{variant:"contained",type:"submit",children:"Log in"})]}),(0,fe.jsxs)(le,{children:["Don\u2019t have an account yet?"," ",(0,fe.jsx)(ue,{to:"/register",children:"Sign up"})]}),(0,fe.jsx)(U,{position:"top-center",autoClose:1500})]})})}var me=n(9131),ve=n(159),ge=function(){return(0,fe.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexGrow:1,pt:2,pb:2},maxWidth:"xl",children:[(0,fe.jsx)(me.Z,{}),(0,fe.jsx)(ve.ii,{children:"Log in"}),(0,fe.jsx)(pe,{})]})},he=ge},159:function(e,t,n){n.d(t,{Dx:function(){return l},ii:function(){return u},or:function(){return d}});var a,o,r,i=n(168),s=n(7691),c=n(1942),l=s.ZP.h1(a||(a=(0,i.Z)(["\n  font-family: 'Handlee', cursive;\n  font-size: 24px;\n  text-align: center;\n  margin-bottom: 20px;\n  width: 180px;\n  padding-bottom: 5px;\n  border-radius: 10px;\n  background-color: #fff;\n  /* color:  #065b94; */\n"]))),u=s.ZP.h1(o||(o=(0,i.Z)(["\n  font-family: 'Handlee', cursive;\n  font-size: 24px;\n  text-align: center;\n  margin-bottom: 20px;\n  width: 80px;\n  padding-bottom: 5px;\n  border-radius: 10px;\n  background-color: #fff;\n  /* box-shadow: ; */\n  /* color: #0f7ec9; */\n"]))),d=s.ZP.main(r||(r=(0,i.Z)(["\n\nheight: 100vh;\ndisplay: flex;\nflex-direction: column;\n/* justify-content: center; */\nalign-items: center;\n  margin: 0 auto;\n  padding-top: 22px;\n  background-image: url('","');\n"])),c)},6554:function(e,t,n){var a=n(4836);t.Z=void 0;var o=a(n(5649)),r=n(184),i=(0,o.default)((0,r.jsx)("path",{d:"M12 6.5c2.76 0 5 2.24 5 5 0 .51-.1 1-.24 1.46l3.06 3.06c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l2.17 2.17c.47-.14.96-.24 1.47-.24zM3.42 2.45 2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.97-.3 4.31-.82l3.43 3.43 1.41-1.41L3.42 2.45zM12 16.5c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 1.66 1.34 3 3 3 .2 0 .38-.03.57-.07L14.14 16c-.65.32-1.37.5-2.14.5zm2.97-5.33c-.15-1.4-1.25-2.49-2.64-2.64l2.64 2.64z"}),"VisibilityOffSharp");t.Z=i},5648:function(e,t,n){var a=n(4836);t.Z=void 0;var o=a(n(5649)),r=n(184),i=(0,o.default)((0,r.jsx)("path",{d:"M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"VisibilitySharp");t.Z=i},1942:function(e,t,n){e.exports=n.p+"static/media/background.35f28b0a3d196a8c89d6.jpg"},6668:function(e,t,n){e.exports=n.p+"static/media/phonebook-bg.ec18ddec1b7a4b247b10.jpg"}}]);
//# sourceMappingURL=406.a8537350.chunk.js.map
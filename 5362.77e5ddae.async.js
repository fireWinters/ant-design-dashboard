(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[5362],{64335:function(ce,G,i){"use strict";var w=i(67294),A=(0,w.createContext)({});G.Z=A},85224:function(ce,G,i){"use strict";var w=i(22122),A=i(28991),b=i(84305),S=i(75901),z=i(81253),T=i(67294),y=i(94184),$=i.n(y),L=i(97435),a=i(56264),O=i.n(a),I=i(64335),_=["children","className","extra","style","renderContent"],X=function(B){var H=B.children,Y=B.className,j=B.extra,ne=B.style,V=B.renderContent,de=(0,z.Z)(B,_),fe=(0,T.useContext)(S.ZP.ConfigContext),ue=fe.getPrefixCls,J=B.prefixCls||ue("pro"),ve="".concat(J,"-footer-bar"),E=(0,T.useContext)(I.Z),oe=(0,T.useMemo)(function(){var q=E.hasSiderMenu,Q=E.isMobile,ee=E.siderWidth;if(!!q)return ee?Q?"100%":"calc(100% - ".concat(ee,"px)"):"100%"},[E.collapsed,E.hasSiderMenu,E.isMobile,E.siderWidth]),ie=T.createElement(T.Fragment,null,T.createElement("div",{className:"".concat(ve,"-left")},j),T.createElement("div",{className:"".concat(ve,"-right")},H));return(0,T.useEffect)(function(){return!E||!(E==null?void 0:E.setHasFooterToolbar)?function(){}:(E==null||E.setHasFooterToolbar(!0),function(){var q;E==null||(q=E.setHasFooterToolbar)===null||q===void 0||q.call(E,!1)})},[]),T.createElement("div",(0,w.Z)({className:$()(Y,"".concat(ve)),style:(0,A.Z)({width:oe},ne)},(0,L.Z)(de,["prefixCls"])),V?V((0,A.Z)((0,A.Z)((0,A.Z)({},B),E),{},{leftWidth:oe}),ie):ie)};G.Z=X},21349:function(ce,G,i){"use strict";var w=i(84305),A=i(75901),b=i(53645),S=i.n(b),z=i(67294),T=i(94184),y=i.n(T),$=i(64335),L=function(O){var I=(0,z.useContext)($.Z),_=O.children,X=O.contentWidth,M=O.className,B=O.style,H=(0,z.useContext)(A.ZP.ConfigContext),Y=H.getPrefixCls,j=O.prefixCls||Y("pro"),ne=X||I.contentWidth,V="".concat(j,"-grid-content");return z.createElement("div",{className:y()(V,M,{wide:ne==="Fixed"}),style:B},z.createElement("div",{className:"".concat(j,"-grid-content-children")},_))};G.Z=L},75362:function(ce,G,i){"use strict";i.d(G,{ZP:function(){return Mt}});var w=i(38663),A=i(70883),b=i(22122),S=i(96156),z=i(6610),T=i(5991),y=i(10379),$=i(60446),L=i(90484),a=i(67294),O=i(94184),I=i.n(O),_=i(98423),X=i(48717),M=i(65632),B=i(85061),H=i(75164);function Y(o){var e,r=function(l){return function(){e=null,o.apply(void 0,(0,B.Z)(l))}},t=function(){if(e==null){for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];e=(0,H.Z)(r(s))}};return t.cancel=function(){H.Z.cancel(e),e=null},t}function j(){return function(e,r,t){var n=t.value,l=!1;return{configurable:!0,get:function(){if(l||this===e.prototype||this.hasOwnProperty(r))return n;var c=Y(n.bind(this));return l=!0,Object.defineProperty(this,r,{value:c,configurable:!0,writable:!0}),l=!1,c}}}}var ne=i(64019);function V(o){return o!==window?o.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function de(o,e,r){if(r!==void 0&&e.top>o.top-r)return r+e.top}function fe(o,e,r){if(r!==void 0&&e.bottom<o.bottom+r){var t=window.innerHeight-e.bottom;return r+t}}var ue=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],J=[];function ve(){return J}function E(o,e){if(!!o){var r=J.find(function(t){return t.target===o});r?r.affixList.push(e):(r={target:o,affixList:[e],eventHandlers:{}},J.push(r),ue.forEach(function(t){r.eventHandlers[t]=(0,ne.Z)(o,t,function(){r.affixList.forEach(function(n){n.lazyUpdatePosition()})})}))}}function oe(o){var e=J.find(function(r){var t=r.affixList.some(function(n){return n===o});return t&&(r.affixList=r.affixList.filter(function(n){return n!==o})),t});e&&e.affixList.length===0&&(J=J.filter(function(r){return r!==e}),ue.forEach(function(r){var t=e.eventHandlers[r];t&&t.remove&&t.remove()}))}var ie=function(o,e,r,t){var n=arguments.length,l=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,r):t,s;if((typeof Reflect=="undefined"?"undefined":(0,L.Z)(Reflect))==="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,e,r,t);else for(var c=o.length-1;c>=0;c--)(s=o[c])&&(l=(n<3?s(l):n>3?s(e,r,l):s(e,r))||l);return n>3&&l&&Object.defineProperty(e,r,l),l};function q(){return typeof window!="undefined"?window:null}var Q;(function(o){o[o.None=0]="None",o[o.Prepare=1]="Prepare"})(Q||(Q={}));var ee=function(o){(0,y.Z)(r,o);var e=(0,$.Z)(r);function r(){var t;return(0,z.Z)(this,r),t=e.apply(this,arguments),t.state={status:Q.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var n=t.props,l=n.offsetBottom,s=n.offsetTop;return l===void 0&&s===void 0?0:s},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(n){t.placeholderNode=n},t.saveFixedNode=function(n){t.fixedNode=n},t.measure=function(){var n=t.state,l=n.status,s=n.lastAffix,c=t.props.onChange,d=t.getTargetFunc();if(!(l!==Q.Prepare||!t.fixedNode||!t.placeholderNode||!d)){var v=t.getOffsetTop(),m=t.getOffsetBottom(),h=d();if(!!h){var f={status:Q.None},g=V(h),u=V(t.placeholderNode),C=de(u,g,v),p=fe(u,g,m);C!==void 0?(f.affixStyle={position:"fixed",top:C,width:u.width,height:u.height},f.placeholderStyle={width:u.width,height:u.height}):p!==void 0&&(f.affixStyle={position:"fixed",bottom:p,width:u.width,height:u.height},f.placeholderStyle={width:u.width,height:u.height}),f.lastAffix=!!f.affixStyle,c&&s!==f.lastAffix&&c(f.lastAffix),t.setState(f)}}},t.prepareMeasure=function(){if(t.setState({status:Q.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var n},t}return(0,T.Z)(r,[{key:"getTargetFunc",value:function(){var n=this.context.getTargetContainer,l=this.props.target;return l!==void 0?l:n||q}},{key:"componentDidMount",value:function(){var n=this,l=this.getTargetFunc();l&&(this.timeout=setTimeout(function(){E(l(),n),n.updatePosition()}))}},{key:"componentDidUpdate",value:function(n){var l=this.state.prevTarget,s=this.getTargetFunc(),c=(s==null?void 0:s())||null;l!==c&&(oe(this),c&&(E(c,this),this.updatePosition()),this.setState({prevTarget:c})),(n.offsetTop!==this.props.offsetTop||n.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),oe(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var n=this.getTargetFunc(),l=this.state.affixStyle;if(n&&l){var s=this.getOffsetTop(),c=this.getOffsetBottom(),d=n();if(d&&this.placeholderNode){var v=V(d),m=V(this.placeholderNode),h=de(m,v,s),f=fe(m,v,c);if(h!==void 0&&l.top===h||f!==void 0&&l.bottom===f)return}}this.prepareMeasure()}},{key:"render",value:function(){var n=this,l=this.state,s=l.affixStyle,c=l.placeholderStyle,d=this.props,v=d.affixPrefixCls,m=d.children,h=I()((0,S.Z)({},v,!!s)),f=(0,_.Z)(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls"]);return a.createElement(X.Z,{onResize:function(){n.updatePosition()}},a.createElement("div",(0,b.Z)({},f,{ref:this.savePlaceholderNode}),s&&a.createElement("div",{style:c,"aria-hidden":"true"}),a.createElement("div",{className:h,ref:this.saveFixedNode,style:s},a.createElement(X.Z,{onResize:function(){n.updatePosition()}},m))))}}]),r}(a.Component);ee.contextType=M.E_,ie([j()],ee.prototype,"updatePosition",null),ie([j()],ee.prototype,"lazyUpdatePosition",null);var Ue=a.forwardRef(function(o,e){var r=o.prefixCls,t=a.useContext(M.E_),n=t.getPrefixCls,l=n("affix",r),s=(0,b.Z)((0,b.Z)({},o),{affixPrefixCls:l});return a.createElement(ee,(0,b.Z)({},s,{ref:e}))}),We=Ue,$t=i(84305),ge=i(75901),jt=i(59903),Gt=i(81262),Xt=i(30887),Yt=i(59250),Vt=i(94233),Jt=i(49111),Ce=i(28481),Fe=i(30470),R=i(28991),He={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},Ke=He,xe=i(27029),Pe=function(e,r){return a.createElement(xe.Z,(0,R.Z)((0,R.Z)({},e),{},{ref:r,icon:Ke}))};Pe.displayName="ArrowLeftOutlined";var we=a.forwardRef(Pe),ze={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},$e=ze,Ee=function(e,r){return a.createElement(xe.Z,(0,R.Z)((0,R.Z)({},e),{},{ref:r,icon:$e}))};Ee.displayName="ArrowRightOutlined";var je=a.forwardRef(Ee),Ge=i(50344),Xe=i(57254),Ye=i(81555),Ve=function(o,e){var r={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&e.indexOf(t)<0&&(r[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(o);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(o,t[n])&&(r[t[n]]=o[t[n]]);return r},be=function(e){var r=e.prefixCls,t=e.separator,n=t===void 0?"/":t,l=e.children,s=e.overlay,c=e.dropdownProps,d=Ve(e,["prefixCls","separator","children","overlay","dropdownProps"]),v=a.useContext(M.E_),m=v.getPrefixCls,h=m("breadcrumb",r),f=function(C){return s?a.createElement(Ye.Z,(0,b.Z)({overlay:s,placement:"bottom"},c),a.createElement("span",{className:"".concat(h,"-overlay-link")},C,a.createElement(Xe.Z,null))):C},g;return"href"in d?g=a.createElement("a",(0,b.Z)({className:"".concat(h,"-link")},d),l):g=a.createElement("span",(0,b.Z)({className:"".concat(h,"-link")},d),l),g=f(g),l?a.createElement("li",null,g,n&&a.createElement("span",{className:"".concat(h,"-separator")},n)):null};be.__ANT_BREADCRUMB_ITEM=!0;var ye=be,pe=function(e){var r=e.children,t=a.useContext(M.E_),n=t.getPrefixCls,l=n("breadcrumb");return a.createElement("span",{className:"".concat(l,"-separator")},r||"/")};pe.__ANT_BREADCRUMB_SEPARATOR=!0;var Je=pe,Qe=i(18515),ke=i(96159),_e=function(o,e){var r={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&e.indexOf(t)<0&&(r[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(o);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(o,t[n])&&(r[t[n]]=o[t[n]]);return r};function qe(o,e){if(!o.breadcrumbName)return null;var r=Object.keys(e).join("|"),t=o.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),function(n,l){return e[l]||n});return t}function et(o,e,r,t){var n=r.indexOf(o)===r.length-1,l=qe(o,e);return n?a.createElement("span",null,l):a.createElement("a",{href:"#/".concat(t.join("/"))},l)}var Oe=function(e,r){return e=(e||"").replace(/^\//,""),Object.keys(r).forEach(function(t){e=e.replace(":".concat(t),r[t])}),e},tt=function(e,r,t){var n=(0,B.Z)(e),l=Oe(r||"",t);return l&&n.push(l),n},me=function(e){var r=e.prefixCls,t=e.separator,n=t===void 0?"/":t,l=e.style,s=e.className,c=e.routes,d=e.children,v=e.itemRender,m=v===void 0?et:v,h=e.params,f=h===void 0?{}:h,g=_e(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),u=a.useContext(M.E_),C=u.getPrefixCls,p=u.direction,x,Z=C("breadcrumb",r);if(c&&c.length>0){var N=[];x=c.map(function(P){var U=Oe(P.path,f);U&&N.push(U);var W;return P.children&&P.children.length&&(W=a.createElement(Qe.Z,{items:P.children.map(function(F){return{key:F.path||F.breadcrumbName,label:m(F,f,c,tt(N,F.path,f))}})})),a.createElement(ye,{overlay:W,separator:n,key:U||P.breadcrumbName},m(P,f,c,N))})}else d&&(x=(0,Ge.Z)(d).map(function(P,U){return P&&(0,ke.Tm)(P,{separator:n,key:U})}));var K=I()(Z,(0,S.Z)({},"".concat(Z,"-rtl"),p==="rtl"),s);return a.createElement("nav",(0,b.Z)({className:K,style:l},g),a.createElement("ol",null,x))};me.Item=ye,me.Separator=Je;var rt=me,at=rt,nt=i(51890),ot=i(19650),it=i(34952),lt=i(42051),st=function(e,r,t){return!r||!t?null:a.createElement(lt.Z,{componentName:"PageHeader"},function(n){var l=n.back;return a.createElement("div",{className:"".concat(e,"-back")},a.createElement(it.Z,{onClick:function(c){t==null||t(c)},className:"".concat(e,"-back-button"),"aria-label":l},r))})},ct=function(e){return a.createElement(at,e)},dt=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:r==="rtl"?a.createElement(je,null):a.createElement(we,null)},ft=function(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",n=r.title,l=r.avatar,s=r.subTitle,c=r.tags,d=r.extra,v=r.onBack,m="".concat(e,"-heading"),h=n||s||c||d;if(!h)return null;var f=dt(r,t),g=st(e,f,v),u=g||l||h;return a.createElement("div",{className:m},u&&a.createElement("div",{className:"".concat(m,"-left")},g,l&&a.createElement(nt.C,l),n&&a.createElement("span",{className:"".concat(m,"-title"),title:typeof n=="string"?n:void 0},n),s&&a.createElement("span",{className:"".concat(m,"-sub-title"),title:typeof s=="string"?s:void 0},s),c&&a.createElement("span",{className:"".concat(m,"-tags")},c)),d&&a.createElement("span",{className:"".concat(m,"-extra")},a.createElement(ot.Z,null,d)))},ut=function(e,r){return r?a.createElement("div",{className:"".concat(e,"-footer")},r):null},vt=function(e,r){return a.createElement("div",{className:"".concat(e,"-content")},r)},mt=function(e){var r=(0,Fe.Z)(!1),t=(0,Ce.Z)(r,2),n=t[0],l=t[1],s=function(d){var v=d.width;l(v<768,!0)};return a.createElement(M.C,null,function(c){var d,v=c.getPrefixCls,m=c.pageHeader,h=c.direction,f,g=e.prefixCls,u=e.style,C=e.footer,p=e.children,x=e.breadcrumb,Z=e.breadcrumbRender,N=e.className,K=!0;"ghost"in e?K=e.ghost:m&&"ghost"in m&&(K=m.ghost);var P=v("page-header",g),U=function(){return(x==null?void 0:x.routes)?ct(x):null},W=U(),F=x&&"props"in x,te=(f=Z==null?void 0:Z(e,W))!==null&&f!==void 0?f:W,D=F?x:te,ae=I()(P,N,(d={"has-breadcrumb":!!D,"has-footer":!!C},(0,S.Z)(d,"".concat(P,"-ghost"),K),(0,S.Z)(d,"".concat(P,"-rtl"),h==="rtl"),(0,S.Z)(d,"".concat(P,"-compact"),n),d));return a.createElement(X.Z,{onResize:s},a.createElement("div",{className:ae,style:u},D,ft(P,e,h),p&&vt(P,p),ut(P,C)))})},ht=mt,Re=i(81253),Qt=i(18106),Ze=i(16004),Ne=i(64335),gt=i(21349),Ct=i(85224),kt=i(12395),xt=i(83832),Pt=function(e){if(!e)return 1;var r=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/r},Et=function(e){var r=e.children,t=e.style,n=e.className,l=e.markStyle,s=e.markClassName,c=e.zIndex,d=c===void 0?9:c,v=e.gapX,m=v===void 0?212:v,h=e.gapY,f=h===void 0?222:h,g=e.width,u=g===void 0?120:g,C=e.height,p=C===void 0?64:C,x=e.rotate,Z=x===void 0?-22:x,N=e.image,K=e.content,P=e.offsetLeft,U=e.offsetTop,W=e.fontStyle,F=W===void 0?"normal":W,te=e.fontWeight,D=te===void 0?"normal":te,ae=e.fontColor,he=ae===void 0?"rgba(0,0,0,.15)":ae,Te=e.fontSize,Me=Te===void 0?16:Te,Be=e.fontFamily,De=Be===void 0?"sans-serif":Be,Bt=e.prefixCls,Dt=(0,a.useContext)(ge.ZP.ConfigContext),At=Dt.getPrefixCls,Ae=At("pro-layout-watermark",Bt),St=I()("".concat(Ae,"-wrapper"),n),Lt=I()(Ae,s),It=(0,a.useState)(""),Se=(0,Ce.Z)(It,2),Ut=Se[0],Le=Se[1];return(0,a.useEffect)(function(){var le=document.createElement("canvas"),k=le.getContext("2d"),re=Pt(k),Wt="".concat((m+u)*re,"px"),Ft="".concat((f+p)*re,"px"),Ht=P||m/2,Kt=U||f/2;if(le.setAttribute("width",Wt),le.setAttribute("height",Ft),k){k.translate(Ht*re,Kt*re),k.rotate(Math.PI/180*Number(Z));var wt=u*re,Ie=p*re;if(N){var se=new Image;se.crossOrigin="anonymous",se.referrerPolicy="no-referrer",se.src=N,se.onload=function(){k.drawImage(se,0,0,wt,Ie),Le(le.toDataURL())}}else if(K){var zt=Number(Me)*re;k.font="".concat(F," normal ").concat(D," ").concat(zt,"px/").concat(Ie,"px ").concat(De),k.fillStyle=he,k.fillText(K,0,0),Le(le.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[m,f,P,U,Z,F,D,u,p,De,he,N,K,Me]),a.createElement("div",{style:(0,R.Z)({position:"relative"},t),className:St},r,a.createElement("div",{className:Lt,style:(0,R.Z)({zIndex:d,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(m+u,"px"),pointerEvents:"none",backgroundRepeat:"repeat",backgroundImage:"url('".concat(Ut,"')")},l)}))},bt=Et,yt=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"],pt=["children","loading","className","style","footer","affixProps","ghost","fixedHeader","breadcrumbRender"];function Ot(o){return(0,L.Z)(o)==="object"?o:{spinning:o}}var Rt=function(e){var r=e.tabList,t=e.tabActiveKey,n=e.onTabChange,l=e.tabBarExtraContent,s=e.tabProps,c=e.prefixedClassName;return Array.isArray(r)||l?a.createElement(Ze.Z,(0,b.Z)({className:"".concat(c,"-tabs"),activeKey:t,onChange:function(v){n&&n(v)},tabBarExtraContent:l},s),r==null?void 0:r.map(function(d,v){return a.createElement(Ze.Z.TabPane,(0,b.Z)({},d,{tab:d.tab,key:d.key||v}))})):null},Zt=function(e,r,t){return!e&&!r?null:a.createElement("div",{className:"".concat(t,"-detail")},a.createElement("div",{className:"".concat(t,"-main")},a.createElement("div",{className:"".concat(t,"-row")},e&&a.createElement("div",{className:"".concat(t,"-content")},e),r&&a.createElement("div",{className:"".concat(t,"-extraContent")},r))))},_t=function(e){var r=useContext(RouteContext);return React.createElement("div",{style:{height:"100%",display:"flex",alignItems:"center"}},React.createElement(_Breadcrumb,_extends({},r==null?void 0:r.breadcrumb,r==null?void 0:r.breadcrumbProps,e)))},Nt=function(e){var r,t=(0,a.useContext)(Ne.Z),n=e.title,l=e.content,s=e.pageHeaderRender,c=e.header,d=e.prefixedClassName,v=e.extraContent,m=e.style,h=e.prefixCls,f=e.breadcrumbRender,g=(0,Re.Z)(e,yt),u=(0,a.useMemo)(function(){if(!!f)return f},[f]);if(s===!1)return null;if(s)return a.createElement(a.Fragment,null," ",s((0,R.Z)((0,R.Z)({},e),t)));var C=n;!n&&n!==!1&&(C=t.title);var p=(0,R.Z)((0,R.Z)((0,R.Z)({},t),{},{title:C},g),{},{footer:Rt((0,R.Z)((0,R.Z)({},g),{},{breadcrumbRender:f,prefixedClassName:d}))},c),x=p.breadcrumb,Z=(!x||!(x==null?void 0:x.itemRender)&&!(x==null||(r=x.routes)===null||r===void 0?void 0:r.length))&&!f;return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(N){return!p[N]})&&Z&&!l&&!v?null:a.createElement("div",{className:"".concat(d,"-warp")},a.createElement(ht,(0,b.Z)({},p,{breadcrumb:f===!1?void 0:(0,R.Z)((0,R.Z)({},p.breadcrumb),t.breadcrumbProps),breadcrumbRender:u,prefixCls:h}),(c==null?void 0:c.children)||Zt(l,v,d)))},Tt=function(e){var r,t,n=e.children,l=e.loading,s=l===void 0?!1:l,c=e.className,d=e.style,v=e.footer,m=e.affixProps,h=e.ghost,f=e.fixedHeader,g=e.breadcrumbRender,u=(0,Re.Z)(e,pt),C=(0,a.useContext)(Ne.Z),p=(0,a.useContext)(ge.ZP.ConfigContext),x=p.getPrefixCls,Z=e.prefixCls||x("pro"),N="".concat(Z,"-page-container"),K=I()(N,c,(r={},(0,S.Z)(r,"".concat(Z,"-page-container-ghost"),h),(0,S.Z)(r,"".concat(Z,"-page-container-with-footer"),v),r)),P=(0,a.useMemo)(function(){return n?a.createElement(a.Fragment,null,a.createElement("div",{className:"".concat(N,"-children-content")},n),C.hasFooterToolbar&&a.createElement("div",{style:{height:48,marginTop:24}})):null},[n,N,C.hasFooterToolbar]),U=(0,a.useMemo)(function(){var D;return g==!1?!1:g||(u==null||(D=u.header)===null||D===void 0?void 0:D.breadcrumbRender)},[g,u==null||(t=u.header)===null||t===void 0?void 0:t.breadcrumbRender]),W=a.createElement(Nt,(0,b.Z)({},u,{breadcrumbRender:U,ghost:h,prefixCls:void 0,prefixedClassName:N})),F=(0,a.useMemo)(function(){if(a.isValidElement(s))return s;if(typeof s=="boolean"&&!s)return null;var D=Ot(s);return a.createElement(xt.Z,D)},[s]),te=(0,a.useMemo)(function(){var D=F||P;if(e.waterMarkProps||C.waterMarkProps){var ae=(0,R.Z)((0,R.Z)({},C.waterMarkProps),e.waterMarkProps);return a.createElement(bt,ae,D)}return D},[e.waterMarkProps,C.waterMarkProps,F,P]);return a.createElement("div",{style:d,className:K},f&&W?a.createElement(We,(0,b.Z)({offsetTop:C.hasHeader&&C.fixedHeader?C.headerHeight:0},m),W):W,te&&a.createElement(gt.Z,null,te),v&&a.createElement(Ct.Z,{prefixCls:Z},v))},Mt=Tt},56264:function(){},53645:function(){},12395:function(){},70883:function(){},81262:function(){},59903:function(){},34952:function(ce,G,i){"use strict";var w=i(22122),A=i(67294),b=i(15105),S=function(y,$){var L={};for(var a in y)Object.prototype.hasOwnProperty.call(y,a)&&$.indexOf(a)<0&&(L[a]=y[a]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,a=Object.getOwnPropertySymbols(y);O<a.length;O++)$.indexOf(a[O])<0&&Object.prototype.propertyIsEnumerable.call(y,a[O])&&(L[a[O]]=y[a[O]]);return L},z={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},T=A.forwardRef(function(y,$){var L=function(H){var Y=H.keyCode;Y===b.Z.ENTER&&H.preventDefault()},a=function(H){var Y=H.keyCode,j=y.onClick;Y===b.Z.ENTER&&j&&j()},O=y.style,I=y.noStyle,_=y.disabled,X=S(y,["style","noStyle","disabled"]),M={};return I||(M=(0,w.Z)({},z)),_&&(M.pointerEvents="none"),M=(0,w.Z)((0,w.Z)({},M),O),A.createElement("div",(0,w.Z)({role:"button",tabIndex:0,ref:$},X,{onKeyDown:L,onKeyUp:a,style:M}))});G.Z=T}}]);
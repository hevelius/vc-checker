(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[330],{3454:function(e,t,r){"use strict";var n,i;e.exports=(null===(n=r.g.process)||void 0===n?void 0:n.env)&&"object"===typeof(null===(i=r.g.process)||void 0===i?void 0:i.env)?r.g.process:r(7663)},9749:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],s=!0,a=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);s=!0);}catch(u){a=!0,i=u}finally{try{s||null==r.return||r.return()}finally{if(a)throw i}}return o}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,r=e.sizes,n=e.unoptimized,a=void 0!==n&&n,u=e.priority,l=void 0!==u&&u,y=e.loading,m=e.lazyRoot,w=void 0===m?null:m,A=e.lazyBoundary,I=void 0===A?"200px":A,k=e.className,C=e.quality,E=e.width,F=e.height,T=e.style,P=e.objectFit,M=e.objectPosition,L=e.onLoadingComplete,B=e.placeholder,q=void 0===B?"empty":B,N=e.blurDataURL,D=v(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),W=c.useContext(p.ImageConfigContext),U=c.useMemo((function(){var e=b||W||f.imageConfigDefault,t=s(e.deviceSizes).concat(s(e.imageSizes)).sort((function(e,t){return e-t})),r=e.deviceSizes.sort((function(e,t){return e-t}));return g({},e,{allSizes:t,deviceSizes:r})}),[W]),H=D,V=r?"responsive":"intrinsic";"layout"in H&&(H.layout&&(V=H.layout),delete H.layout);var G=x;if("loader"in H){if(H.loader){var J=H.loader;G=function(e){e.config;var t=v(e,["config"]);return J(t)}}delete H.loader}var $="";if(function(e){return"object"===typeof e&&(R(e)||function(e){return void 0!==e.src}(e))}(t)){var Q=R(t)?t.default:t;if(!Q.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(N=N||Q.blurDataURL,$=Q.src,(!V||"fill"!==V)&&(F=F||Q.height,E=E||Q.width,!Q.height||!Q.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}t="string"===typeof t?t:$;var K=z(E),X=z(F),Y=z(C),Z=!l&&("lazy"===y||"undefined"===typeof y);(t.startsWith("data:")||t.startsWith("blob:"))&&(a=!0,Z=!1);S.has(t)&&(Z=!1);var ee,te=o(c.useState(!1),2),re=te[0],ne=te[1],ie=o(h.useIntersection({rootRef:w,rootMargin:I,disabled:!Z}),3),oe=ie[0],se=ie[1],ae=ie[2],ue=!Z||se,le={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de=!1,fe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:P,objectPosition:M};0;0;var he=Object.assign({},T,"raw"===V?{}:fe),pe="blur"!==q||re?{}:{filter:"blur(20px)",backgroundSize:P||"cover",backgroundImage:'url("'.concat(N,'")'),backgroundPosition:M||"0% 0%"};if("fill"===V)le.display="block",le.position="absolute",le.top=0,le.left=0,le.bottom=0,le.right=0;else if("undefined"!==typeof K&&"undefined"!==typeof X){var ye=X/K,me=isNaN(ye)?"100%":"".concat(100*ye,"%");"responsive"===V?(le.display="block",le.position="relative",de=!0,ce.paddingTop=me):"intrinsic"===V?(le.display="inline-block",le.position="relative",le.maxWidth="100%",de=!0,ce.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(K,"%27%20height=%27").concat(X,"%27/%3e")):"fixed"===V&&(le.display="inline-block",le.position="relative",le.width=K,le.height=X)}else 0;var ge={src:_,srcSet:void 0,sizes:void 0};ue&&(ge=j({config:U,src:t,unoptimized:a,layout:V,width:K,quality:Y,sizes:r,loader:G}));var ve=t;0;var be,Se="imagesrcset",_e="imagesizes";Se="imageSrcSet",_e="imageSizes";var we=(i(be={},Se,ge.srcSet),i(be,_e,ge.sizes),be),Re=c.default.useLayoutEffect,je=c.useRef(L),ze=c.useRef(t);c.useEffect((function(){je.current=L}),[L]),Re((function(){ze.current!==t&&(ae(),ze.current=t)}),[ae,t]);var xe=g({isLazy:Z,imgAttributes:ge,heightInt:X,widthInt:K,qualityInt:Y,layout:V,className:k,imgStyle:he,blurStyle:pe,loading:y,config:U,unoptimized:a,placeholder:q,loader:G,srcString:ve,onLoadingCompleteRef:je,setBlurComplete:ne,setIntersection:oe,isVisible:ue},H);return c.default.createElement(c.default.Fragment,null,"raw"===V?c.default.createElement(O,Object.assign({},xe)):c.default.createElement("span",{style:le},de?c.default.createElement("span",{style:ce},ee?c.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,c.default.createElement(O,Object.assign({},xe))),l?c.default.createElement(d.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+ge.src+ge.srcSet+ge.sizes,rel:"preload",as:"image",href:ge.srcSet?void 0:ge.src},we))):null)};var u,l,c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),d=(u=r(3121))&&u.__esModule?u:{default:u},f=r(139),h=r(9246),p=r(8730),y=(r(670),r(2700));function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){for(var t=arguments,r=function(r){var n=null!=t[r]?t[r]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){m(e,t,n[t])}))},n=1;n<arguments.length;n++)r(n);return e}function v(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}l={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai",experimentalLayoutRaw:!1};var b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai",experimentalLayoutRaw:!1},S=new Set,_=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,r=e.src,n=e.width,i=e.quality;0;if(r.endsWith(".svg")&&!t.dangerouslyAllowSVG)return r;return"".concat(y.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,r=e.src,n=e.width,i=e.quality,o=new URL("".concat(t.path).concat(I(r))),s=o.searchParams;s.set("auto",s.get("auto")||"format"),s.set("fit",s.get("fit")||"max"),s.set("w",s.get("w")||n.toString()),i&&s.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,r=e.src,n=e.width,i=e.quality,o=["f_auto","c_limit","w_"+n,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(I(r))}],["akamai",function(e){var t=e.config,r=e.src,n=e.width;return"".concat(t.path).concat(I(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function R(e){return void 0!==e.default}function j(e){var t=e.config,r=e.src,n=e.unoptimized,i=e.layout,o=e.width,a=e.quality,u=e.sizes,l=e.loader;if(n)return{src:r,srcSet:void 0,sizes:void 0};var c=function(e,t,r,n){var i=e.deviceSizes,o=e.allSizes;if(n&&("fill"===r||"responsive"===r||"raw"===r)){for(var a,u=/(^|\s)(1?\d?\d)vw/g,l=[];a=u.exec(n);a)l.push(parseInt(a[2]));if(l.length){var c,d=.01*(c=Math).min.apply(c,s(l));return{widths:o.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===r||"responsive"===r?{widths:i,kind:"w"}:{widths:s(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,i,u),d=c.widths,f=c.kind,h=d.length-1;return{sizes:u||"w"!==f?u:"100vw",srcSet:d.map((function(e,n){return"".concat(l({config:t,src:r,quality:a,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:l({config:t,src:r,quality:a,width:d[h]})}}function z(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function x(e){var t,r=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",n=w.get(r);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(r))}function A(e,t,r,n,i,o){e&&e.src!==_&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(S.add(t),"blur"===n&&o(!0),null===i||void 0===i?void 0:i.current)){var r=e.naturalWidth,s=e.naturalHeight;i.current({naturalWidth:r,naturalHeight:s})}})))}var O=function(e){var t=e.imgAttributes,r=e.heightInt,n=e.widthInt,i=e.qualityInt,o=e.layout,s=e.className,a=e.imgStyle,u=e.blurStyle,l=e.isLazy,d=e.placeholder,f=e.loading,h=e.srcString,p=e.config,y=e.unoptimized,m=e.loader,b=e.onLoadingCompleteRef,S=e.setBlurComplete,_=e.setIntersection,w=e.onLoad,R=e.onError,z=(e.isVisible,v(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible"]));return c.default.createElement(c.default.Fragment,null,c.default.createElement("img",Object.assign({},z,t,"raw"===o?{height:r,width:n}:{},{decoding:"async","data-nimg":o,className:s,style:g({},a,u),ref:c.useCallback((function(e){_(e),(null===e||void 0===e?void 0:e.complete)&&A(e,h,0,d,b,S)}),[_,h,o,d,b,S]),onLoad:function(e){A(e.currentTarget,h,0,d,b,S),w&&w(e)},onError:function(e){"blur"===d&&S(!0),R&&R(e)}})),(l||"blur"===d)&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},z,j({config:p,src:h,unoptimized:y,layout:o,width:n,quality:i,sizes:t.sizes,loader:m}),"raw"===o?{height:r,width:n}:{},{decoding:"async","data-nimg":o,style:a,className:s,loading:f||"lazy"}))))};function I(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],s=!0,a=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);s=!0);}catch(u){a=!0,i=u}finally{try{s||null==r.return||r.return()}finally{if(a)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!a,c=o.useRef(),d=i(o.useState(!1),2),f=d[0],h=d[1],p=i(o.useState(t?t.current:null),2),y=p[0],m=p[1],g=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=l.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=u.get(n):(t=u.get(r),l.push(r));if(t)return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return u.set(r,t={id:r,observer:o,elements:i}),t}(r),i=n.id,o=n.observer,s=n.elements;return s.set(e,t),o.observe(e),function(){if(s.delete(e),o.unobserve(e),0===s.size){o.disconnect(),u.delete(i);var t=l.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:y,rootMargin:r}))}),[n,y,r,f]),v=o.useCallback((function(){h(!1)}),[]);return o.useEffect((function(){if(!a&&!f){var e=s.requestIdleCallback((function(){return h(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){t&&m(t.current)}),[t]),[g,f,v]};var o=r(7294),s=r(4686),a="undefined"!==typeof IntersectionObserver;var u=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9547:function(e,t,r){"use strict";e.exports=r(5988)},7663:function(e){!function(){var t={162:function(e){var t,r,n=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"===typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var a,u=[],l=!1,c=-1;function d(){l&&a&&(l=!1,a.length?u=a.concat(u):c=-1,u.length&&f())}function f(){if(!l){var e=s(d);l=!0;for(var t=u.length;t;){for(a=u,u=[];++c<t;)a&&a[c].run();c=-1,t=u.length}a=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new h(e,t)),1!==u.length||l||s(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}},s=!0;try{t[e](o,o.exports,n),s=!1}finally{s&&delete r[e]}return o.exports}n.ab="//";var i=n(162);e.exports=i}()},5675:function(e,t,r){e.exports=r(9749)},1163:function(e,t,r){e.exports=r(880)},4207:function(e,t,r){var n=r(3454);!function(){"use strict";var t={583:function(e){e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},590:function(e,t,r){t.__esModule=!0,t.computeId=function(e,t){if(!t)return"jsx-"+e;var r=String(t),n=e+r;o[n]||(o[n]="jsx-"+(0,i.default)(e+"-"+r));return o[n]},t.computeSelector=function(e,t){"undefined"===typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var r=e+t;o[r]||(o[r]=t.replace(/__jsx-style-dynamic-selector/g,e));return o[r]};var n,i=(n=r(583))&&n.__esModule?n:{default:n};var o={}},503:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var i="undefined"!==typeof n&&n.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,r=t.name,n=void 0===r?"stylesheet":r,s=t.optimizeForSpeed,u=void 0===s?i:s,l=t.isBrowser,c=void 0===l?"undefined"!==typeof window:l;a(o(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",a("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=c,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,n,s,u=e.prototype;return u.setOptimizeForSpeed=function(e){a("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),a(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(a(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(i||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(a(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(s){return i||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var n=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,n))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(o){i||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];a(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];a(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,r){t&&a(o(t),"makeStyleTag accepts only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return r?i.insertBefore(n,r):i.appendChild(n),n},t=e,(n=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,n),s&&r(t,s),e}();function a(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s},449:function(e,t,r){t.__esModule=!0,t.default=l;var n,i=(n=r(522))&&n.__esModule?n:{default:n},o=r(147),s=r(590);var a=i.default.useInsertionEffect||i.default.useLayoutEffect,u="undefined"!==typeof window?(0,o.createStyleRegistry)():void 0;function l(e){var t=u||(0,o.useStyleRegistry)();return t?"undefined"===typeof window?(t.add(e),null):(a((function(){return t.add(e),function(){t.remove(e)}}),[e.id,String(e.dynamic)]),null):null}l.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return(0,s.computeId)(t,r)})).join(" ")}},147:function(e,t,r){t.__esModule=!0,t.createStyleRegistry=c,t.StyleRegistry=function(e){var t=e.registry,r=e.children,n=(0,i.useContext)(l),o=(0,i.useState)((function(){return n||t||c()}))[0];return i.default.createElement(l.Provider,{value:o},r)},t.useStyleRegistry=function(){return(0,i.useContext)(l)},t.StyleSheetContext=t.StyleSheetRegistry=void 0;var n,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(522)),o=(n=r(503))&&n.__esModule?n:{default:n},s=r(590);function a(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}var u=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,i=t.optimizeForSpeed,s=void 0!==i&&i,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;this._sheet=n||new o.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),n&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,i=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var o=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=o,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.styles=function(e){return function(e,t){return void 0===t&&(t={}),e.map((function(e){var r=e[0],n=e[1];return i.default.createElement("style",{id:"__"+r,key:"__"+r,nonce:t.nonce?t.nonce:void 0,dangerouslySetInnerHTML:{__html:n}})}))}(this.cssRules(),e)},t.getIdAndRules=function(e){var t=e.children,r=e.dynamic,n=e.id;if(r){var i=(0,s.computeId)(n,r);return{styleId:i,rules:Array.isArray(t)?t.map((function(e){return(0,s.computeSelector)(i,e)})):[(0,s.computeSelector)(i,t)]}}return{styleId:(0,s.computeId)(n),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.StyleSheetRegistry=u;var l=(0,i.createContext)(null);function c(){return new u}t.StyleSheetContext=l},522:function(e){e.exports=r(7294)}},i={};function o(e){var r=i[e];if(void 0!==r)return r.exports;var n=i[e]={exports:{}},s=!0;try{t[e](n,n.exports,o),s=!1}finally{s&&delete i[e]}return n.exports}o.ab="//";var s={};!function(){var e=s;e.__esModule=!0,e.style=e.useStyleRegistry=e.createStyleRegistry=e.StyleRegistry=void 0;var t=o(147);e.StyleRegistry=t.StyleRegistry,e.createStyleRegistry=t.createStyleRegistry,e.useStyleRegistry=t.useStyleRegistry;var r,n=(r=o(449))&&r.__esModule?r:{default:r};e.style=n.default}(),e.exports=s}()},5988:function(e,t,r){e.exports=r(4207).style}}]);
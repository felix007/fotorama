/*!
 * Fotorama 4.3.4 | http://fotorama.io/license/
 */
!function(a,b,c,d,e){"use strict";function f(a){var b="bez_"+d.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof d.easing[b]){var c=function(a,b){var c=[null,null],d=[null,null],e=[null,null],f=function(f,g){return e[g]=3*a[g],d[g]=3*(b[g]-a[g])-e[g],c[g]=1-e[g]-d[g],f*(e[g]+f*(d[g]+f*c[g]))},g=function(a){return e[0]+a*(2*d[0]+3*c[0]*a)},h=function(a){for(var b,c=a,d=0;++d<14&&(b=f(c,0)-a,!(Math.abs(b)<.001));)c-=b/g(c);return c};return function(a){return f(h(a),1)}};d.easing[b]=function(b,d,e,f,g){return f*c([a[0],a[1]],[a[2],a[3]])(d/g)+e}}return b}function g(){}function h(a,b,c){return Math.max(isNaN(b)?-1/0:b,Math.min(isNaN(c)?1/0:c,a))}function i(a){return a.match(/ma/)&&a.match(/-?\d+(?!d)/g)[a.match(/3d/)?12:4]}function j(a){return sc?+i(a.css("transform")):+a.css("left").replace("px","")}function k(a,b){var c={};return sc?c.transform="translate3d("+(a+(b?.001:0))+"px,0,0)":c.left=a,c}function l(a){return{"transition-duration":a+"ms"}}function m(a,b){return+String(a).replace(b||"px","")||e}function n(a){return/%$/.test(a)&&m(a,"%")}function o(a){return(!!m(a)||!!m(a,"%"))&&a}function p(a,b,c,d){return(a-(d||0))*(b+(c||0))}function q(a,b,c,d){return-Math.round(a/(b+(c||0))-(d||0))}function r(a){var b=a.data();if(!b.tEnd){var c=a[0],d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"};c.addEventListener(d[$.prefixed("transition")],function(a){b.tProp&&a.propertyName.match(b.tProp)&&b.onEndFn()},!1),b.tEnd=!0}}function s(a,b,c,d){var e,f=a.data();f&&(f.onEndFn=function(){e||(e=!0,clearTimeout(f.tT),c())},f.tProp=b,clearTimeout(f.tT),f.tT=setTimeout(function(){f.onEndFn()},1.5*d),r(a))}function t(a,b,c){if(a.length){var d=a.data();sc?(a.css(l(0)),d.onEndFn=g,clearTimeout(d.tT)):a.stop();var e=u(b,function(){return j(a)});return a.css(k(e,c)),e}}function u(){for(var a,b=0,c=arguments.length;c>b&&(a=b?arguments[b]():arguments[b],"number"!=typeof a);b++);return a}function v(a,b){return Math.round(a+(b-a)/1.5)}function w(){return w.p=w.p||("https://"===c.protocol?"https://":"http://"),w.p}function x(a){var c=b.createElement("a");return c.href=a,c}function y(a,b){if("string"!=typeof a)return a;a=x(a);var c,d;if(a.host.match(/youtube\.com/)&&a.search){if(c=a.search.split("v=")[1]){var e=c.indexOf("&");-1!==e&&(c=c.substring(0,e)),d="youtube"}}else a.host.match(/youtube\.com|youtu\.be/)?(c=a.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),d="youtube"):a.host.match(/vimeo\.com/)&&(d="vimeo",c=a.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""));return c&&d||!b||(c=a.href,d="custom"),c?{id:c,type:d}:!1}function z(a,b,c){var e,f,g=a.video;return"youtube"===g.type?(f=w()+"img.youtube.com/vi/"+g.id+"/default.jpg",e=f.replace(/\/default.jpg$/,"/hqdefault.jpg"),a.thumbsReady=!0):"vimeo"===g.type?d.ajax({url:w()+"vimeo.com/api/v2/video/"+g.id+".json",dataType:"jsonp",success:function(d){a.thumbsReady=!0,A(b,{img:d[0].thumbnail_large,thumb:d[0].thumbnail_small},a.i,c)}}):a.thumbsReady=!0,{img:e,thumb:f}}function A(a,b,c,e){for(var f=0,g=a.length;g>f;f++){var h=a[f];if(h.i===c&&h.thumbsReady){var i={videoReady:!0};i[Fc]=i[Hc]=i[Gc]=!1,e.splice(f,1,d.extend({},h,i,b));break}}}function B(a){function b(a,b,e){var f=a.children("img").eq(0),g=a.attr("href"),h=a.attr("src"),i=f.attr("src"),j=b.video,k=e?y(g,j===!0):!1;k?g=!1:k=j,c(a,f,d.extend(b,{video:k,img:b.img||g||h||i,thumb:b.thumb||i||h||g}))}function c(a,b,c){var e=c.thumb&&c.img!==c.thumb,f=m(c.width||a.attr("width")),g=m(c.height||a.attr("height"));d.extend(c,{width:f,height:g,thumbratio:Q(c.thumbratio||m(c.thumbwidth||b&&b.attr("width")||e||f)/m(c.thumbheight||b&&b.attr("height")||e||g))})}var e=[];return a.children().each(function(){var a=d(this),f=P(d.extend(a.data(),{id:a.attr("id")}));if(a.is("a, img"))b(a,f,!0);else{if(a.is(":empty"))return;c(a,null,d.extend(f,{html:this,_html:a.html()}))}e.push(f)}),e}function C(a){return 0===a.offsetWidth&&0===a.offsetHeight}function D(a){return!d.contains(b.documentElement,a)}function E(a,b,c){a()?b():setTimeout(function(){E(a,b)},c||100)}function F(a){c.replace(c.protocol+"//"+c.host+c.pathname.replace(/^\/?/,"/")+c.search+"#"+a)}function G(a,b,c){var d=a.data(),e=d.measures;if(e&&(!d.l||d.l.W!==e.width||d.l.H!==e.height||d.l.r!==e.ratio||d.l.w!==b.w||d.l.h!==b.h||d.l.m!==c)){var f=e.width,g=e.height,i=b.w/b.h,j=e.ratio>=i,k="scaledown"===c,l="contain"===c,m="cover"===c;j&&(k||l)||!j&&m?(f=h(b.w,0,k?f:1/0),g=f/e.ratio):(j&&m||!j&&(k||l))&&(g=h(b.h,0,k?g:1/0),f=g*e.ratio),a.css({width:Math.ceil(f),height:Math.ceil(g),marginLeft:Math.floor(-f/2),marginTop:Math.floor(-g/2)}),d.l={W:e.width,H:e.height,r:e.ratio,w:b.w,h:b.h,m:c}}return!0}function H(a,b){var c=a[0];c.styleSheet?c.styleSheet.cssText=b:a.html(b)}function I(a,b,c){return b===c?!1:b>=a?"left":a>=c?"right":"left right"}function J(a,b,c,d){if(!c)return!1;if(!isNaN(a))return a-(d?0:1);for(var e,f=0,g=b.length;g>f;f++){var h=b[f];if(h.id===a){e=f;break}}return e}function K(a,b,c){c=c||{},a.each(function(){var a,e=d(this),f=e.data();f.clickOn||(f.clickOn=!0,d.extend(U(e,{onStart:function(b){a=b,(c.onStart||g).call(this,b)},onMove:c.onMove||g,onEnd:function(d){d.moved||c.tail.checked||b.call(this,a)}}),c.tail))})}function L(a,b){return'<div class="'+a+'">'+(b||"")+"</div>"}function M(a){for(var b=a.length;b;){var c=Math.floor(Math.random()*b--),d=a[b];a[b]=a[c],a[c]=d}return a}function N(a){return"[object Array]"==Object.prototype.toString.call(a)&&d.map(a,function(a){return d.extend({},a)})}function O(a,b){oc.scrollLeft(a).scrollTop(b)}function P(a){if(a){var b={};return d.each(a,function(a,c){b[a.toLowerCase()]=c}),b}}function Q(a){if(a){var b=+a;return isNaN(b)?(b=a.split("/"),+b[0]/+b[1]||e):b}}function R(a,b){var c=Math.round(b.pos),e=b.onEnd||g;"undefined"!=typeof b.overPos&&b.overPos!==b.pos&&(c=b.overPos,e=function(){R(a,d.extend({},b,{overPos:b.pos,time:Math.max(zc,b.time/2)}))});var f=d.extend(k(c,b._001),{width:b.width});sc?(a.css(d.extend(l(b.time),f)),b.time>10?s(a,"transform",e,b.time):e()):a.stop().animate(f,b.time,Ic,e)}function S(a,b,c,e,f,h){var i="undefined"!=typeof h;if(i||(f.push(arguments),Array.prototype.push.call(arguments,f.length),!(f.length>1))){a=a||d(a),b=b||d(b);var j=a[0],k=b[0],l="crossfade"===e.method,m=function(){if(!m.done){m.done=!0;var a=(i||f.shift())&&f.shift();a&&S.apply(this,a),(e.onEnd||g)(!!a)}},n=e.time/(h||1);c.not(a.addClass(Pb).removeClass(Ob)).not(b.addClass(Ob).removeClass(Pb)).removeClass(Pb+" "+Ob),a.stop(),b.stop(),l&&k&&a.fadeTo(0,0),a.fadeTo(l?n:1,1,l&&m),b.fadeTo(n,0,m),j&&l||k||m()}}function T(a){var b=(a.touches||[])[0]||a;a._x=b.pageX,a._y=b.clientY}function U(c,e){function f(a){return o=d(a.target),u.checked=r=s=!1,m||u.flow||a.touches&&a.touches.length>1||a.which>1||fb&&fb.type!==a.type&&hb||(r=e.select&&o.is(e.select,t))?r:(q=a.type.match(/^t/),s=o.is("a, a *",t),T(a),n=fb=a,gb=a.type.replace(/down|start/,"move").replace(/Down/,"Move"),p=u.control,(e.onStart||g).call(t,a,{control:p,$target:o}),m=u.flow=!0,(!q||u.go)&&a.preventDefault(),void 0)}function h(a){if(a.touches&&a.touches.length>1||xc&&!a.isPrimary||gb!==a.type||!m)return m&&i(),void 0;T(a);var b=Math.abs(a._x-n._x),c=Math.abs(a._y-n._y),d=b-c,f=(u.go||u.x||d>0)&&!u.noSwipe,h=0>d;q&&!u.checked?(m=f)&&a.preventDefault():(a.preventDefault(),(e.onMove||g).call(t,a,{touch:q})),u.checked=u.checked||f||h}function i(a){var b=m;u.control=m=!1,b&&(u.flow=!1),!b||s&&!u.checked||(a&&a.preventDefault(),hb=!0,clearTimeout(ib),ib=setTimeout(function(){hb=!1},1e3),(e.onEnd||g).call(t,{moved:u.checked,$target:o,control:p,touch:q,startEvent:n,aborted:!a}))}function j(){u.flow||(clearTimeout(l),l=setTimeout(function(){u.flow=!0},10))}function k(){u.flow&&(clearTimeout(l),l=setTimeout(function(){u.flow=!1},yc))}var l,m,n,o,p,q,r,s,t=c[0],u={};return xc?(t[Jc]("MSPointerDown",f,!1),b[Jc]("MSPointerMove",h,!1),b[Jc]("MSPointerCancel",i,!1),b[Jc]("MSPointerUp",i,!1)):(t[Jc]&&(t[Jc]("touchstart",f,!1),t[Jc]("touchmove",h,!1),t[Jc]("touchend",i,!1),b[Jc]("touchstart",j,!1),b[Jc]("touchend",k,!1),b[Jc]("touchcancel",k,!1),a[Jc]("scroll",k,!1)),c.on("mousedown",f),pc.on("mousemove",h).on("mouseup",i)),c.on("click","a",function(a){u.checked&&a.preventDefault()}),u}function V(a,b){function c(c){j=l=c._x,q=d.now(),p=[[q,j]],m=n=C.noMove?0:t(a,b.getPos&&b.getPos(),b._001),(b.onStart||g).call(A,c)}function e(a,b){s=B.min,u=B.max,w=B.snap,x=a.altKey,z=!1,y=b.control,y||c(a)}function f(e,f){y&&(y=!1,c(e)),C.noSwipe||(l=e._x,p.push([d.now(),l]),n=m-(j-l),o=I(n,s,u),s>=n?n=v(n,s):n>=u&&(n=v(n,u)),C.noMove||(a.css(k(n,b._001)),z||(z=!0,f.touch||xc||a.addClass(cc)),(b.onMove||g).call(A,e,{pos:n,edge:o})))}function i(c){if(!y){c.touch||xc||a.removeClass(cc),r=(new Date).getTime();for(var e,f,i,j,k,o,q,t,v,z=r-yc,B=null,C=zc,D=b.friction,E=p.length-1;E>=0;E--){if(e=p[E][0],f=Math.abs(e-z),null===B||i>f)B=e,j=p[E][1];else if(B===z||f>i)break;i=f}q=h(n,s,u);var F=j-l,G=F>=0,H=r-B,I=H>yc,J=!I&&n!==m&&q===n;w&&(q=h(Math[J?G?"floor":"ceil":"round"](n/w)*w,s,u),s=u=q),J&&(w||q===n)&&(v=-(F/H),C*=h(Math.abs(v),b.timeLow,b.timeHigh),k=Math.round(n+v*C/D),w||(q=k),(!G&&k>u||G&&s>k)&&(o=G?s:u,t=k-o,w||(q=o),t=h(q+.03*t,o-50,o+50),C=Math.abs((n-t)/(v/D)))),C*=x?10:1,(b.onEnd||g).call(A,d.extend(c,{pos:n,newPos:q,overPos:t,time:C,moved:I&&w||c.moved}))}}var j,l,m,n,o,p,q,r,s,u,w,x,y,z,A=a[0],B=a.data(),C={};return C=d.extend(U(b.$wrap,{onStart:e,onMove:f,onEnd:i,select:b.select,control:b.control}),C)}function W(){d.each(d.Fotorama.instances,function(a,b){b.index=a})}function X(a){d.Fotorama.instances.push(a),W()}function Y(a){d.Fotorama.instances.splice(a.index,1),W()}var Z={},$=function(a,b,c){function d(a){r.cssText=a}function e(a,b){return typeof a===b}function f(a,b){return!!~(""+a).indexOf(b)}function g(a,b){for(var d in a){var e=a[d];if(!f(e,"-")&&r[e]!==c)return"pfx"==b?e:!0}return!1}function h(a,b,d){for(var f in a){var g=b[a[f]];if(g!==c)return d===!1?a[f]:e(g,"function")?g.bind(d||b):g}return!1}function i(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),f=(a+" "+u.join(d+" ")+d).split(" ");return e(b,"string")||e(b,"undefined")?g(f,b):(f=(a+" "+v.join(d+" ")+d).split(" "),h(f,b,c))}var j,k,l,m="2.6.2",n={},o=b.documentElement,p="modernizr",q=b.createElement(p),r=q.style,s=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),t="Webkit Moz O ms",u=t.split(" "),v=t.toLowerCase().split(" "),w={},x=[],y=x.slice,z=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:p+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',p,'">',a,"</style>"].join(""),j.id=p,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=o.style.overflow,o.style.overflow="hidden",o.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),o.style.overflow=i),!!g},A={}.hasOwnProperty;l=e(A,"undefined")||e(A.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return A.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=y.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(y.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(y.call(arguments)))};return d}),w.csstransforms3d=function(){var a=!!i("perspective");return a};for(var B in w)l(w,B)&&(k=B.toLowerCase(),n[k]=w[B](),x.push((n[k]?"":"no-")+k));return n.addTest=function(a,b){if("object"==typeof a)for(var d in a)l(a,d)&&n.addTest(d,a[d]);else{if(a=a.toLowerCase(),n[a]!==c)return n;b="function"==typeof b?b():b,"undefined"!=typeof enableClasses&&enableClasses&&(o.className+=" "+(b?"":"no-")+a),n[a]=b}return n},d(""),q=j=null,n._version=m,n._prefixes=s,n._domPrefixes=v,n._cssomPrefixes=u,n.testProp=function(a){return g([a])},n.testAllProps=i,n.testStyles=z,n.prefixed=function(a,b,c){return b?i(a,b,c):i(a,"pfx")},n}(a,b),_={ok:!1,is:function(){return!1},request:function(){},cancel:function(){},event:"",prefix:""},ab="webkit moz o ms khtml".split(" ");if("undefined"!=typeof b.cancelFullScreen)_.ok=!0;else for(var bb=0,cb=ab.length;cb>bb;bb++)if(_.prefix=ab[bb],"undefined"!=typeof b[_.prefix+"CancelFullScreen"]){_.ok=!0;break}_.ok&&(_.event=_.prefix+"fullscreenchange",_.is=function(){switch(this.prefix){case"":return b.fullScreen;case"webkit":return b.webkitIsFullScreen;default:return b[this.prefix+"FullScreen"]}},_.request=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},_.cancel=function(){return""===this.prefix?b.cancelFullScreen():b[this.prefix+"CancelFullScreen"]()});var db,eb,fb,gb,hb,ib,jb="fotorama",kb="fullscreen",lb=jb+"__wrap",mb=lb+"--css3",nb=lb+"--video",ob=lb+"--fade",pb=lb+"--slide",qb=lb+"--no-controls",rb=lb+"--no-shadows",sb=lb+"--pan-y",tb=jb+"__stage",ub=tb+"__frame",vb=ub+"--video",wb=tb+"__shaft",xb=tb+"--only-active",yb=jb+"__grab",zb=jb+"__pointer",Ab=jb+"__arr",Bb=Ab+"--disabled",Cb=Ab+"--prev",Db=Ab+"--next",Eb=Ab+"__arr",Fb=jb+"__nav",Gb=Fb+"-wrap",Hb=Fb+"__shaft",Ib=Fb+"--dots",Jb=Fb+"--thumbs",Kb=Fb+"__frame",Lb=Kb+"--dot",Mb=Kb+"--thumb",Nb=jb+"__fade",Ob=Nb+"-front",Pb=Nb+"-rear",Qb=jb+"__shadow",Rb=Qb+"s",Sb=Rb+"--left",Tb=Rb+"--right",Ub=jb+"__active",Vb=jb+"__select",Wb=jb+"--hidden",Xb=jb+"--fullscreen",Yb=jb+"__fullscreen-icon",Zb=jb+"__error",$b=jb+"__loading",_b=jb+"__loaded",ac=_b+"--full",bc=_b+"--img",cc=jb+"__grabbing",dc=jb+"__img",ec=dc+"--full",fc=jb+"__dot",gc=jb+"__thumb",hc=gc+"-border",ic=jb+"__html",jc=jb+"__video",kc=jc+"-play",lc=jc+"-close",mc=jb+"__caption",nc=jb+"__oooo",oc=d(a),pc=d(b),qc="quirks"===c.hash.replace("#",""),rc=$.csstransforms3d,sc=rc&&!qc,tc=rc||"CSS1Compat"===b.compatMode,uc=_.ok,vc=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),wc=!sc||vc,xc=a.navigator.msPointerEnabled,yc=250,zc=300,Ac=5e3,Bc=2,Cc=64,Dc=500,Ec=333,Fc="$stageFrame",Gc="$navDotFrame",Hc="$navThumbFrame",Ic=f([.1,0,.25,1]),Jc="addEventListener";jQuery.Fotorama=function(a,f){function i(){d.each(cd,function(a,b){if(!b.i){b.i=Nd++;var c=y(b.video,!0);if(c){var d={};b.video=c,b.img||b.thumb?b.thumbsReady=!0:d=z(b,cd,Jd),A(cd,{img:d.img,thumb:d.thumb},b.i,Jd)}}})}function j(a){var b="keydown."+jb,c="keydown."+jb+Kd,d="resize."+jb+Kd;a?(pc.on(c,function(a){fd&&27===a.keyCode?(a.preventDefault(),Wc(fd,!0,!0)):(Jd.fullScreen||f.keyboard&&!Jd.index)&&(27===a.keyCode?(a.preventDefault(),Jd.cancelFullScreen()):39===a.keyCode||40===a.keyCode&&Jd.fullScreen?(a.preventDefault(),Jd.show({index:">",slow:a.altKey,direct:!0})):(37===a.keyCode||38===a.keyCode&&Jd.fullScreen)&&(a.preventDefault(),Jd.show({index:"<",slow:a.altKey,direct:!0})))}),Jd.index||pc.off(b).on(b,"textarea, input, select",function(a){!eb.hasClass(kb)&&a.stopPropagation()}),oc.on(d,Jd.resize)):(pc.off(c),oc.off(d))}function k(b){b!==k.f&&(b?(a.html("").addClass(Ld).append(Rd).before(Pd).before(Qd),X(Jd)):(Rd.detach(),Pd.detach(),Qd.detach(),a.html(Od.urtext).removeClass(Ld),Y(Jd)),j(b),k.f=b)}function r(){cd=Jd.data=cd||N(f.data)||B(a),dd=Jd.size=cd.length,!bd.ok&&f.shuffle&&M(cd),i(),je=T(je),dd&&k(!0)}function s(){var a=2>dd||fd;me.noMove=a||ud,me.noSwipe=a||!f.swipe,Td.toggleClass(yb,!me.noMove&&!me.noSwipe),xc&&Rd.toggleClass(sb,!me.noSwipe)}function v(a){a===!0&&(a=""),f.autoplay=Math.max(+a||Ac,1.5*xd)}function w(a){return a?"add":"remove"}function x(){Jd.options=f=P(f),ud="crossfade"===f.transition||"dissolve"===f.transition,od=f.loop&&(dd>2||ud),xd=+f.transitionduration||zc;var a={add:[],remove:[]};dd>1?(pd=f.nav,rd="top"===f.navposition,a.remove.push(Vb),Xd.toggle(f.arrows),rc()):(pd=!1,Xd.hide()),f.autoplay&&v(f.autoplay),vd=m(f.thumbwidth)||Cc,wd=m(f.thumbheight)||Cc,s(),Oc(f,!0),qd="thumbs"===pd,qd?(Nb(dd,"navThumb"),ed=ae,Id=Hc,H(Pd,d.Fotorama.jst.style({w:vd,h:wd,m:Bc,s:Kd,q:!tc})),Zd.addClass(Jb).removeClass(Ib)):"dots"===pd?(Nb(dd,"navDot"),ed=_d,Id=Gc,Zd.addClass(Ib).removeClass(Jb)):(pd=!1,Zd.removeClass(Jb+" "+Ib)),pd&&(rd?Yd.insertBefore(Sd):Yd.insertAfter(Sd),cc.nav=!1,cc(ed,$d,"nav")),sd=f.allowfullscreen,sd?(ee.appendTo(Sd),td=uc&&"native"===sd):(ee.detach(),td=!1),a[w(ud)].push(ob),a[w(!ud)].push(pb),yd=f.shadows&&!wc,a[w(!yd)].push(rb),hb(),Rd.addClass(a.add.join(" ")).removeClass(a.remove.join(" ")),ke=d.extend({},f)}function C(a){return 0>a?(dd+a%dd)%dd:a>=dd?a%dd:a}function T(a){return h(a,0,dd-1)}function U(a){return od?C(a):T(a)}function W(a){return a>0||od?a-1:!1}function Z(a){return dd-1>a||od?a+1:!1}function $(){be.min=od?-1/0:-p(dd-1,le.w,Bc,id),be.max=od?1/0:-p(0,le.w,Bc,id),be.snap=le.w+Bc}function ab(){ce.min=Math.min(0,le.w-$d.width()),ce.max=0,$d.toggleClass(yb,!(ne.noMove=ce.min===ce.max))}function bb(a,b,c){if("number"==typeof a){a=new Array(a);var e=!0}return d.each(a,function(a,d){if(e&&(d=a),"number"==typeof d){var f=cd[C(d)];if(f){var g="$"+b+"Frame",h=f[g];c.call(this,a,d,f,h,g,h&&h.data())}}})}function cb(a,b,c,d){(!zd||"*"===zd&&d===nd)&&(a=o(f.width)||o(a)||Dc,b=o(f.height)||o(b)||Ec,Jd.resize({width:a,ratio:f.ratio||c||a/b},0,d===nd?!0:"*"))}function fb(a,b,c,e,g){bb(a,b,function(a,h,i,j,k,l){function m(a){var b=C(h);Pc(a,{index:b,src:v,frame:cd[b]})}function n(){s.remove(),d.Fotorama.cache[v]="error",i.html&&"stage"===b||!w||w===v?(v&&!i.html?(j.trigger("f:error").removeClass($b).addClass(Zb),m("error")):"stage"===b&&(j.trigger("f:load").removeClass($b+" "+Zb).addClass(_b),m("load"),cb()),l.state="error",!(dd>1)||i.html||i.deleted||i.video||q||(i.deleted=!0,Jd.splice(h,1))):(i[u]=v=w,fb([h],b,c,e,!0))}function o(){var a=r.width,g=r.height,k=a/g;t.measures={width:a,height:g,ratio:k},cb(a,g,k,h),s.off("load error").addClass(dc+(q?" "+ec:"")).prependTo(j),G(s,c||le,e||i.fit||f.fit),d.Fotorama.cache[v]="loaded",l.state="loaded",setTimeout(function(){j.trigger("f:load").removeClass($b+" "+Zb).addClass(_b+" "+(q?ac:bc)),"stage"===b&&m("load")},5)}function p(){var a=10;E(function(){return!Gd||!a--&&!wc},function(){o()})}if(j){var q=Jd.fullScreen&&i.full&&!l.$full&&"stage"===b;if(!l.$img||g||q){var r=new Image,s=d(r),t=s.data();l[q?"$full":"$img"]=s;var u="stage"===b?q?"full":"img":"thumb",v=i[u],w=q?null:i["stage"===b?"thumb":"img"];if("navThumb"===b&&(j=l.$wrap),!v)return n(),void 0;d.Fotorama.cache[v]?function x(){"error"===d.Fotorama.cache[v]?n():"loaded"===d.Fotorama.cache[v]?setTimeout(p,0):setTimeout(x,100)}():(d.Fotorama.cache[v]="*",s.on("load",p).on("error",n)),r.src=v}}})}function gb(a){hb(!0),ue.appendTo(a),te=0,ve(),se=setInterval(ve,200)}function hb(a){a||ue.detach(),clearInterval(se)}function ib(){var a=Jd.activeFrame[Fc];a&&!a.data().state&&(gb(a),a.on("f:load f:error",function(){a.off("f:load f:error"),hb()}))}function Nb(a,b){bb(a,b,function(a,c,e,g,h,i){g||(g=e[h]=Rd[h].clone(),i=g.data(),i.data=e,"stage"===b?(e.html&&d('<div class="'+ic+'"></div>').append(e._html?d(e.html).removeAttr("id").html(e._html):e.html).appendTo(g),f.captions&&e.caption&&d('<div class="'+mc+'"></div>').append(e.caption).appendTo(g),e.video&&g.addClass(vb).append(ge.clone()),Ud=Ud.add(g)):"navDot"===b?_d=_d.add(g):"navThumb"===b&&(i.$wrap=g.children(":first"),ae=ae.add(g),e.video&&g.append(ge.clone())))})}function Ob(a,b,c){return a&&a.length&&G(a,b,c)}function Pb(a){bb(a,"stage",function(a,b,c,e,g,h){if(e){pe[Fc][C(b)]=e.css(d.extend({left:ud?0:p(b,le.w,Bc,id)},ud&&l(0))),D(e[0])&&(e.appendTo(Td),Wc(c.$video));var i=c.fit||f.fit;Ob(h.$img,le,i),Ob(h.$full,le,i)}})}function Qb(a,b){if("thumbs"===pd&&!isNaN(a)){var c=-a,e=-a+le.w;ae.each(function(){var a=d(this),f=a.data(),g=f.eq,h={h:wd},i="cover";h.w=f.w,f.l+f.w<c||f.l>e||Ob(f.$img,h,i)||b&&fb([g],"navThumb",h,i)})}}function cc(a,b,c){if(!cc[c]){var e="nav"===c&&qd,f=0;b.append(a.filter(function(){for(var a,b=d(this),c=b.data(),e=0,f=cd.length;f>e;e++)if(c.data===cd[e]){a=!0,c.eq=e;break}return a||b.remove()&&!1}).sort(function(a,b){return d(a).data().eq-d(b).data().eq}).each(function(){if(e){var a=d(this),b=a.data(),c=Math.round(wd*b.data.thumbratio)||vd;b.l=f,b.w=c,a.css({width:c}),f+=c+Bc}})),cc[c]=!0}}function jc(a){return a-qe>le.w/3}function qc(a){return!(od||je+a&&je-dd+a||fd)}function rc(){Xd.each(function(a){d(this).toggleClass(Bb,qc(a))})}function vc(a){var b,c,d=a.data();return qd?(b=d.l,c=d.w):(b=a.position().left,c=a.width()),{c:b+c/2,min:-b+10*Bc,max:-b+le.w-c-10*Bc}}function Ic(a){var b=Jd.activeFrame[Id].data();R(de,{time:.9*a,pos:b.l,width:b.w-2*Bc})}function Jc(a){var b=cd[a.guessIndex][Id];if(b){var c=ce.min!==ce.max,d=c&&vc(Jd.activeFrame[Id]),e=c&&(a.keep&&Jc.l?Jc.l:h((a.coo||le.w/2)-vc(b).c,d.min,d.max)),f=c&&h(e,ce.min,ce.max),g=.9*a.time;R($d,{time:g,pos:f||0,onEnd:function(){Qb(f,!0)}}),g&&Qb(f),Vc(Zd,I(f,ce.min,ce.max)),Jc.l=e}}function Kc(){Lc(Id),oe[Id].push(Jd.activeFrame[Id].addClass(Ub))}function Lc(a){for(var b=oe[a];b.length;)b.shift().removeClass(Ub)}function Mc(a){var b=pe[a];d.each(hd,function(a,c){delete b[c]}),d.each(b,function(a,c){delete b[a],c.detach()})}function Nc(a){id=jd=je;var b=Jd.activeFrame,c=b[Fc];c&&(Lc(Fc),oe[Fc].push(c.addClass(Ub)),a||Jd.show.onEnd(!0),t(Td,0,!0),Mc(Fc),Pb(hd),$(),ab())}function Oc(a,b){a&&d.extend(le,{width:a.width||le.width,height:a.height,minwidth:a.minwidth,maxwidth:a.maxwidth,minheight:a.minheight,maxheight:a.maxheight,ratio:Q(a.ratio)})&&!b&&d.extend(f,{width:le.width,height:le.height,minwidth:le.minwidth,maxwidth:le.maxwidth,minheight:le.minheight,maxheight:le.maxheight,ratio:le.ratio})}function Pc(b,c,d){a.trigger(jb+":"+b,[Jd,c]),Jd.prevent[b]?delete Jd.prevent[b]:(d||g)()}function Qc(){clearTimeout(Rc.t),Gd=1,f.stopautoplayontouch?Jd.stopAutoplay():Dd=!0}function Rc(){Rc.t=setTimeout(function(){Gd=0},zc+yc)}function Sc(){Dd=!(!fd&&!Ed)}function Tc(){if(clearTimeout(Tc.t),!f.autoplay||Dd)return Jd.autoplay&&(Jd.autoplay=!1,Pc("stopautoplay")),void 0;Jd.autoplay||(Jd.autoplay=!0,Pc("startautoplay"));var a=je,b=Jd.activeFrame[Fc].data();E(function(){return b.state||a!==je},function(){Tc.t=setTimeout(function(){Dd||a!==je||Jd.show(od?">":C(je+1))},f.autoplay)})}function Uc(){Jd.fullScreen&&(Jd.fullScreen=!1,uc&&_.cancel(Md),eb.removeClass(kb),db.removeClass(kb),a.removeClass(Xb).insertAfter(Qd),le=d.extend({},Fd),Wc(fd,!0,!0),$c("x",!1),Jd.resize(),fb(hd,"stage"),O(Bd,Ad),Pc("fullscreenexit"))}function Vc(a,b){yd&&(a.removeClass(Sb+" "+Tb),b&&!fd&&a.addClass(b.replace(/^|\s/g," "+Rb+"--")))}function Wc(a,b,c){b&&(Rd.removeClass(nb),fd=!1,s()),a&&a!==fd&&(a.remove(),Pc("unloadvideo")),c&&(Sc(),Tc())}function Xc(a){Rd.toggleClass(qb,a)}function Yc(a){if(!me.flow){var b=a?a.pageX:Yc.x,c=a&&!qc(jc(b))&&f.click;Yc.p===c||!ud&&f.swipe||!Sd.toggleClass(zb,c)||(Yc.p=c,Yc.x=b)}}function Zc(a,b){var c=a.target,g=d(c);g.hasClass(kc)?Jd.playVideo():c===fe?Jd[(Jd.fullScreen?"cancel":"request")+"FullScreen"]():fd?c===ie&&Wc(fd,!0,!0):Pc("stagetap",e,function(){b?Xc():f.click&&Jd.show({index:a.shiftKey||!jc(a._x)?"<":">",slow:a.altKey,direct:!0})})}function $c(a,b){me[a]=ne[a]=b}function _c(a,b){var c=d(this).data().eq;Jd.show({index:c,slow:a.altKey,direct:!0,coo:a._x-Zd.offset().left,time:b})}function ad(){if(r(),x(),!bd.ok){var a;((a=f.startindex)||f.hash&&c.hash)&&(nd=J(a||c.hash.replace(/^#/,""),cd,0===Jd.index||a,a)),je=id=jd=kd=nd=U(nd)||0}dd?(fd&&Wc(fd,!0),hd=[],Mc(Fc),Jd.show({index:je,time:0}),Jd.resize()):Jd.destroy()}function bd(){bd.ok||(bd.ok=!0,Pc("ready"))}db=db||d("html"),eb=eb||d("body");var cd,dd,ed,fd,gd,hd,id,jd,kd,ld,md,nd,od,pd,qd,rd,sd,td,ud,vd,wd,xd,yd,zd,Ad,Bd,Cd,Dd,Ed,Fd,Gd,Hd,Id,Jd=this,Kd=d.now(),Ld=jb+Kd,Md=a[0],Nd=1,Od=a.data(),Pd=d("<style></style>"),Qd=d(L(Wb)),Rd=d(L(lb)),Sd=d(L(tb)).appendTo(Rd),Td=(Sd[0],d(L(wb)).appendTo(Sd)),Ud=d(),Vd=d(L(Ab+" "+Cb,L(Eb))),Wd=d(L(Ab+" "+Db,L(Eb))),Xd=Vd.add(Wd).appendTo(Sd),Yd=d(L(Gb)),Zd=d(L(Fb)).appendTo(Yd),$d=d(L(Hb)).appendTo(Zd),_d=d(),ae=d(),be=Td.data(),ce=$d.data(),de=d(L(hc)).appendTo($d),ee=d(L(Yb)),fe=ee[0],ge=d(L(kc)),he=d(L(lc)).appendTo(Sd),ie=he[0],je=!1,ke={},le={},me={},ne={},oe={},pe={},qe=0,re=[];Rd[Fc]=d(L(ub)),Rd[Hc]=d(L(Kb+" "+Mb,L(gc))),Rd[Gc]=d(L(Kb+" "+Lb,L(fc))),oe[Fc]=[],oe[Hc]=[],oe[Gc]=[],pe[Fc]={},Jd.prevent={},sc&&Rd.addClass(mb),Od.fotorama=this;var se,te,ue=d(L("",L(nc))),ve=function(){ue.attr("class",nc+" "+nc+"--"+te),te++,te>4&&(te=0)};Jd.startAutoplay=function(a){return Jd.autoplay?this:(Dd=Ed=!1,v(a||f.autoplay),Tc(),this)},Jd.stopAutoplay=function(){return Jd.autoplay&&(Dd=Ed=!0,Tc()),this},Jd.show=function(a){var b;"object"!=typeof a?(b=a,a={}):b=a.index,b=">"===b?jd+1:"<"===b?jd-1:"<<"===b?0:">>"===b?dd-1:b,b=isNaN(b)?J(b,cd,!0):b,b="undefined"==typeof b?je||0:b,Jd.activeIndex=je=U(b),ld=W(je),md=Z(je),hd=[je,ld,md],jd=od?b:je;var c=Math.abs(kd-jd),d=u(a.time,function(){return Math.min(xd*(1+(c-1)/12),2*xd)}),e=a.overPos;a.slow&&(d*=10),Jd.activeFrame=gd=cd[je],Wc(fd,gd.i!==cd[C(id)].i),Nb(hd,"stage"),Pb([jd,W(jd),Z(jd)]),$c("go",!0),Pc("show",a.direct);var g=Jd.show.onEnd=function(b){g.ok||(g.ok=!0,ib(),fb(hd,"stage"),b||Nc(!0),Pc("showend",a.direct),$c("go",!1),Yc(),Sc(),Tc())};if(ud){var i=gd[Fc],j=je!==kd?cd[kd][Fc]:null;S(i,j,Ud,{time:d,method:f.transition,onEnd:g},re)}else R(Td,{pos:-p(jd,le.w,Bc,id),overPos:e,time:d,onEnd:g,_001:!0});if(rc(),pd){Kc();var k=T(je+h(jd-kd,-1,1));Jc({time:d,coo:k!==je&&a.coo,guessIndex:"undefined"!=typeof a.coo?k:je}),qd&&Ic(d)}return Cd="undefined"!=typeof kd&&kd!==je,kd=je,f.hash&&Cd&&!Jd.eq&&F(gd.id||je+1),this},Jd.requestFullScreen=function(){return sd&&!Jd.fullScreen&&(Ad=oc.scrollTop(),Bd=oc.scrollLeft(),O(0,0),$c("x",!0),Fd=d.extend({},le),a.addClass(Xb).appendTo(eb.addClass(kb)),db.addClass(kb),Wc(fd,!0,!0),Jd.fullScreen=!0,td&&_.request(Md),Jd.resize(),fb(hd,"stage"),Pc("fullscreenenter")),this},Jd.cancelFullScreen=function(){return td&&_.is()?_.cancel(b):Uc(),this},b.addEventListener&&b.addEventListener(_.event,function(){!cd||_.is()||fd||Uc()},!1),Jd.resize=function(a){if(!cd)return this;Oc(Jd.fullScreen?{width:"100%",maxwidth:null,minwidth:null,height:"100%",maxheight:null,minheight:null}:P(a),Jd.fullScreen);var b=arguments[1]||0,c=arguments[2],d=le.width,e=le.height,f=le.ratio,g=oc.height()-(pd?Zd.height():0);return o(d)&&(Rd.css({width:d,minWidth:le.minwidth,maxWidth:le.maxwidth}),d=le.w=Rd.width(),e=n(e)/100*g||m(e),e=e||f&&d/f,e&&(d=Math.round(d),e=le.h=Math.round(h(e,n(le.minheight)/100*g||m(le.minheight),n(le.maxheight)/100*g||m(le.maxheight))),Nc(),Sd.addClass(xb).stop().animate({width:d,height:e},b,function(){Sd.removeClass(xb)}),pd&&(Zd.stop().animate({width:d},b),Jc({guessIndex:je,time:b,keep:!0}),qd&&cc.nav&&Ic(b)),zd=c||!0,bd())),qe=Sd.offset().left,this},Jd.setOptions=function(a){return d.extend(f,a),ad(),this},Jd.shuffle=function(){return cd&&M(cd)&&ad(),this},Jd.destroy=function(){return Jd.cancelFullScreen(),Jd.stopAutoplay(),cd=Jd.data=null,k(),hd=[],Mc(Fc),this},Jd.playVideo=function(){var a=Jd.activeFrame,b=a.video,c=je;return"object"==typeof b&&a.videoReady&&(td&&Jd.fullScreen&&Jd.cancelFullScreen(),E(function(){return!_.is()||c!==je},function(){c===je&&(a.$video=a.$video||d(d.Fotorama.jst.video(b)),a.$video.appendTo(a[Fc]),Rd.addClass(nb),fd=a.$video,s(),Pc("loadvideo"))})),this},Jd.stopVideo=function(){return Wc(fd,!0,!0),this},Sd.on("mousemove",Yc),me=V(Td,{onStart:Qc,onMove:function(a,b){Vc(Sd,b.edge)},onEnd:function(a){Vc(Sd),Rc();var b=(xc&&!Hd||a.touch)&&f.arrows;if(a.moved||b&&a.pos!==a.newPos){var c=q(a.newPos,le.w,Bc,id);Jd.show({index:c,time:ud?xd:a.time,overPos:a.overPos,direct:!0})}else a.aborted||Zc(a.startEvent,b)},getPos:function(){return-p(jd,le.w,Bc,id)},_001:!0,timeLow:1,timeHigh:1,friction:2,select:"."+Vb+", ."+Vb+" *",$wrap:Sd}),ne=V($d,{onStart:Qc,onMove:function(a,b){Vc(Zd,b.edge)},onEnd:function(a){function b(){Jc.l=a.newPos,Sc(),Tc(),Qb(a.newPos,!0)}if(Rc(),a.moved)a.pos!==a.newPos?(R($d,{time:a.time,pos:a.newPos,overPos:a.overPos,onEnd:b}),Qb(a.newPos),Vc(Zd,I(a.newPos,ce.min,ce.max))):b();else{var c=a.$target.closest("."+Kb,$d)[0];c&&_c.call(c,a.startEvent)}},timeLow:.5,timeHigh:2,friction:5,$wrap:Zd}),Rd.hover(function(){setTimeout(function(){Gd||(Hd=!0,Xc(!Hd))},0)},function(){Hd&&(Hd=!1,Xc(!Hd))}),K(Xd,function(a){a.preventDefault(),fd?Wc(fd,!0,!0):(Rc(),Jd.show({index:Xd.index(this)?">":"<",slow:a.altKey,direct:!0}))},{onStart:function(){Qc(),me.control=!0},tail:me}),d.each("load push pop shift unshift reverse sort splice".split(" "),function(a,b){Jd[b]=function(){return cd=cd||[],"load"!==b?Array.prototype[b].apply(cd,arguments):arguments[0]&&"object"==typeof arguments[0]&&arguments[0].length&&(cd=arguments[0]),ad(),Jd}}),ad()},d.fn.fotorama=function(a){return this.each(function(){var b=this,c=d(this),e=c.data(),f=e.fotorama;f?f.setOptions(a):E(function(){return!C(b)},function(){e.urtext=c.html(),new d.Fotorama(c,d.extend({},{width:null,minwidth:null,maxwidth:"100%",height:null,minheight:null,maxheight:null,ratio:null,nav:"dots",navposition:"bottom",thumbwidth:Cc,thumbheight:Cc,arrows:!0,click:!0,swipe:!0,allowfullscreen:!1,fit:"contain",transition:"slide",transitionduration:zc,captions:!0,hash:!1,startindex:0,autoplay:!1,stopautoplayontouch:!0,keyboard:!1,loop:!1,shuffle:!1,shadows:!0},a,e))})})},d.Fotorama.instances=[],d.Fotorama.cache={},d=d||{},d.Fotorama=d.Fotorama||{},d.Fotorama.jst=d.Fotorama.jst||{},d.Fotorama.jst.style=function(a){var b,c="";return Z.escape,c+=".fotorama"+(null==(b=a.s)?"":b)+" .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:"+(null==(b=a.m)?"":b)+"px;\nheight:"+(null==(b=a.h)?"":b)+"px}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__thumb-border{\nheight:"+(null==(b=a.h-a.m*(a.q?0:2))?"":b)+"px;\nborder-width:"+(null==(b=a.m)?"":b)+"px;\nmargin-top:"+(null==(b=a.m)?"":b)+"px}"},d.Fotorama.jst.video=function(a){function b(){c+=d.call(arguments,"")}var c="",d=(Z.escape,Array.prototype.join);return c+='<div class="fotorama__video"><iframe src="',b("youtube"==a.type?"http://youtube.com/embed/"+a.id+"?autoplay=1":"vimeo"==a.type?"http://player.vimeo.com/video/"+a.id+"?autoplay=1&amp;badge=0":a.id),c+='" frameborder="0" allowfullscreen></iframe></div>'},d(function(){d("."+jb+':not([data-auto="false"])').fotorama()})}(window,document,location,jQuery);
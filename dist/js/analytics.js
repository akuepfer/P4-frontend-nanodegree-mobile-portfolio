!function(){function t(t,e){return t.href=e}function e(t){ot.set(t)}function n(t){if(100!=t.get(Ln)&&y(Wt(t,wn))%1e4>=100*Yt(t,Ln))throw"abort"}function r(t){if(Et(Wt(t,yn)))throw"abort"}function i(){var t=Tt[P][G];if("http:"!=t&&"https:"!=t)throw"abort"}function a(t){try{At[nt][Y]?e(42):At.XMLHttpRequest&&"withCredentials"in new At.XMLHttpRequest&&e(40)}catch(n){}t.set(Ze,ct(t),!0),t.set(de,Yt(t,de)+1);var r=[];Mt.map(function(e,n){if(n.p){var i=t.get(e);void 0!=i&&i!=n[M]&&("boolean"==typeof i&&(i*=1),r[U](n.p+"="+mt(""+i)))}}),r[U]("z="+Ft()),t.set(he,r[rt]("&"),!0)}function o(t){var e=Wt(t,Vn)||Ct()+"/collect",n=Wt(t,ge);if(!n&&t.get(le)&&(n="beacon"),n){var r=Wt(t,he),i=t.get(ve),i=i||pt;"image"==n?Ot(e,r,i):"xhr"==n&&Rt(e,r,i)||"beacon"==n&&$t(e,r,i)||Gt(e,r,i)}else Gt(e,Wt(t,he),t.get(ve));t.set(ve,pt,!0)}function s(t){var e=At.gaData;e&&(e.expId&&t.set(qe,e.expId),e.expVar&&t.set(Me,e.expVar))}function c(){if(At[nt]&&"preview"==At[nt].loadPurpose)throw"abort"}function u(t){var e=At.gaDevIds;vt(e)&&0!=e[W]&&t.set("&did",e[rt](","),!0)}function f(t){if(!t.get(yn))throw"abort"}function v(t){var n=Yt(t,Je);n>=500&&e(15);var r=Wt(t,fe);if("transaction"!=r&&"item"!=r){var r=Yt(t,Ke),i=(new Date)[L](),a=Yt(t,Qe);if(0==a&&t.set(Qe,i),a=S.round(2*(i-a)/1e3),a>0&&(r=S.min(r+a,20),t.set(Qe,i)),0>=r)throw"abort";t.set(Ke,--r)}t.set(Je,++n)}function h(t,n,r,i){n[t]=function(){try{return i&&e(i),r[$](this,arguments)}catch(n){throw Ut("exc",t,n&&n[X]),n}}}function l(){var t,e,n;if((n=(n=At[nt])?n.plugins:null)&&n[W])for(var r=0;r<n[W]&&!e;r++){var i=n[r];-1<i[X][q]("Shockwave Flash")&&(e=i.description)}if(!e)try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),e=t.GetVariable("$version")}catch(a){}if(!e)try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),e="WIN 6,0,21,0",t.AllowScriptAccess="always",e=t.GetVariable("$version")}catch(o){}if(!e)try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),e=t.GetVariable("$version")}catch(s){}return e&&(t=e[T](/[\d]+/g))&&3<=t[W]&&(e=t[0]+"."+t[1]+" r"+t[2]),e||void 0}function g(t,e,n){"none"==e&&(e="");var r=[],i=It(t);t="__utma"==t?6:2;for(var a=0;a<i[W];a++){var o=(""+i[a])[N](".");o[W]>=t&&r[U]({hash:o[0],R:i[a],O:o})}return 0==r[W]?void 0:1==r[W]?r[0]:d(e,r)||d(n,r)||d(null,r)||r[0]}function d(t,e){var n,r;null==t?n=r=1:(n=y(t),r=y(lt(t,".")?t[et](1):"."+t));for(var i=0;i<e[W];i++)if(e[i][z]==n||e[i][z]==r)return e[i]}function p(t){t=t.get(wn);var e=m(t,0);return"_ga=1."+mt(e+"."+t)}function m(t,e){for(var n=new Date,r=At[nt],i=r.plugins||[],n=[t,r.userAgent,n.getTimezoneOffset(),n.getYear(),n.getDate(),n.getHours(),n.getMinutes()+e],r=0;r<i[W];++r)n[U](i[r].description);return y(n[rt]("."))}function w(t,e){if(e==Tt[P][C])return!1;for(var n=0;n<t[W];n++)if(t[n]instanceof RegExp){if(t[n][B](e))return!0}else if(0<=e[q](t[n]))return!0;return!1}function b(t){return 0<=t[q](".")||0<=t[q](":")}function y(t){var e,n=1,r=0;if(t)for(n=0,e=t[W]-1;e>=0;e--)r=t.charCodeAt(e),n=(n<<6&268435455)+r+(r<<14),r=266338304&n,n=0!=r?n^r>>21:n;return n}var k=encodeURIComponent,_=window,S=Math,x="replace",A="data",T="match",j="port",E="createElement",I="setAttribute",L="getTime",N="split",P="location",V="hasOwnProperty",C="hostname",D="search",G="protocol",O="href",R="action",$="apply",U="push",z="hash",B="test",F="slice",H="cookie",q="indexOf",M="defaultValue",X="name",W="length",Y="sendBeacon",J="prototype",Q="clientWidth",K="target",Z="call",tt="clientHeight",et="substring",nt="navigator",rt="join",it="toLowerCase",at=function(t){this.w=t||[]};at[J].set=function(t){this.w[t]=!0},at[J].encode=function(){for(var t=[],e=0;e<this.w[W];e++)this.w[e]&&(t[S.floor(e/6)]=t[S.floor(e/6)]^1<<e%6);for(e=0;e<t[W];e++)t[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(t[e]||0);return t[rt]("")+"~"};var ot=new at,st=function(t,e){var n=new at(ut(t));n.set(e),t.set(tn,n.w)},ct=function(t){t=ut(t),t=new at(t);for(var e=ot.w[F](),n=0;n<t.w[W];n++)e[n]=e[n]||t.w[n];return new at(e).encode()},ut=function(t){return t=t.get(tn),vt(t)||(t=[]),t},ft=function(t){return"function"==typeof t},vt=function(t){return"[object Array]"==Object[J].toString[Z](Object(t))},ht=function(t){return void 0!=t&&-1<(t.constructor+"")[q]("String")},lt=function(t,e){return 0==t[q](e)},gt=function(t){return t?t[x](/^[\s\xa0]+|[\s\xa0]+$/g,""):""},dt=function(t){var e=Tt[E]("img");return e.width=1,e.height=1,e.src=t,e},pt=function(){},mt=function(t){return k instanceof Function?k(t):(e(28),t)},wt=function(t,n,r,i){try{t.addEventListener?t.addEventListener(n,r,!!i):t.attachEvent&&t.attachEvent("on"+n,r)}catch(a){e(27)}},bt=function(t,e){if(t){var n=Tt[E]("script");n.type="text/javascript",n.async=!0,n.src=t,e&&(n.id=e);var r=Tt.getElementsByTagName("script")[0];r.parentNode.insertBefore(n,r)}},yt=function(){return"https:"==Tt[P][G]},kt=function(){var t=""+Tt[P][C];return 0==t[q]("www.")?t[et](4):t},_t=function(t){var e=Tt.referrer;if(/^https?:\/\//i[B](e)){if(t)return e;t="//"+Tt[P][C];var n=e[q](t);if((5==n||6==n)&&(t=e.charAt(n+t[W]),"/"==t||"?"==t||""==t||":"==t))return;return e}},St=function(t,e){if(1==e[W]&&null!=e[0]&&"object"==typeof e[0])return e[0];for(var n={},r=S.min(t[W]+1,e[W]),i=0;r>i;i++){if("object"==typeof e[i]){for(var a in e[i])e[i][V](a)&&(n[a]=e[i][a]);break}i<t[W]&&(n[t[i]]=e[i])}return n},xt=function(){this.keys=[],this.values={},this.m={}};xt[J].set=function(t,e,n){this.keys[U](t),n?this.m[":"+t]=e:this.values[":"+t]=e},xt[J].get=function(t){return this.m[V](":"+t)?this.m[":"+t]:this.values[":"+t]},xt[J].map=function(t){for(var e=0;e<this.keys[W];e++){var n=this.keys[e],r=this.get(n);r&&t(n,r)}};var At=_,Tt=document,jt=function(){for(var t=At[nt].userAgent+(Tt[H]?Tt[H]:"")+(Tt.referrer?Tt.referrer:""),e=t[W],n=At.history[W];n>0;)t+=n--^e++;return y(t)},Et=function(t){var e=At._gaUserPrefs;if(e&&e.ioo&&e.ioo()||t&&!0===At["ga-disable-"+t])return!0;try{var n=At.external;if(n&&n._gaUserPrefs&&"oo"==n._gaUserPrefs)return!0}catch(r){}return!1},It=function(t){var e=[],n=Tt[H][N](";");t=new RegExp("^\\s*"+t+"=\\s*(.*?)\\s*$");for(var r=0;r<n[W];r++){var i=n[r][T](t);i&&e[U](i[1])}return e},Lt=function(t,n,r,i,a,o){if(a=Et(a)?!1:Vt[B](Tt[P][C])||"/"==r&&Pt[B](i)?!1:!0,!a)return!1;if(n&&1200<n[W]&&(n=n[et](0,1200),e(24)),r=t+"="+n+"; path="+r+"; ",o&&(r+="expires="+new Date((new Date)[L]()+o).toGMTString()+"; "),i&&"none"!=i&&(r+="domain="+i+";"),i=Tt[H],Tt.cookie=r,!(i=i!=Tt[H]))t:{for(t=It(t),i=0;i<t[W];i++)if(n==t[i]){i=!0;break t}i=!1}return i},Nt=function(t){return mt(t)[x](/\(/g,"%28")[x](/\)/g,"%29")},Pt=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Vt=/(^|\.)doubleclick\.net$/i,Ct=function(){return(ae||yt()?"https:":"http:")+"//www.google-analytics.com"},Dt=function(t){this.name="len",this.message=t+"-8192"},Gt=function(t,e,n){if(n=n||pt,2036>=e[W])Ot(t,e,n);else{if(!(8192>=e[W]))throw Ut("len",e[W]),new Dt(e[W]);$t(t,e,n)||Rt(t,e,n)||Ot(t,e,n)}},Ot=function(t,e,n){var r=dt(t+"?"+e);r.onload=r.onerror=function(){r.onload=null,r.onerror=null,n()}},Rt=function(t,e,n){var r=At.XMLHttpRequest;if(!r)return!1;var i=new r;return"withCredentials"in i?(i.open("POST",t,!0),i.withCredentials=!0,i.setRequestHeader("Content-Type","text/plain"),i.onreadystatechange=function(){4==i.readyState&&(n(),i=null)},i.send(e),!0):!1},$t=function(t,e,n){return At[nt][Y]?(2036>=e[W]&&(t+="?"+e,e=""),At[nt][Y](t,e)?(n(),!0):!1):!1},Ut=function(t,e,n){1<=100*S.random()||Et("?")||(t=["t=error","_e="+t,"_v=j36","sr=1"],e&&t[U]("_f="+e),n&&t[U]("_m="+mt(n[et](0,100))),t[U]("aip=1"),t[U]("z="+Ht()),Ot(Ct()+"/collect",t[rt]("&"),pt))},zt=function(){this.t=[]};zt[J].add=function(t){this.t[U](t)},zt[J].D=function(t){try{for(var e=0;e<this.t[W];e++){var n=t.get(this.t[e]);n&&ft(n)&&n[Z](At,t)}}catch(r){}e=t.get(ve),e!=pt&&ft(e)&&(t.set(ve,pt,!0),setTimeout(e,10))};var Bt=function(){return S.round(2147483647*S.random())},Ft=function(){try{var t=new Uint32Array(1);return At.crypto.getRandomValues(t),2147483647&t[0]}catch(e){return Bt()}},Ht=Bt,qt=function(){this.data=new xt},Mt=new xt,Xt=[];qt[J].get=function(t){var e=Kt(t),n=this[A].get(t);return e&&void 0==n&&(n=ft(e[M])?e[M]():e[M]),e&&e.n?e.n(this,t,n):n};var Wt=function(t,e){var n=t.get(e);return void 0==n?"":""+n},Yt=function(t,e){var n=t.get(e);return void 0==n||""===n?0:1*n};qt[J].set=function(t,e,n){if(t)if("object"==typeof t)for(var r in t)t[V](r)&&Jt(this,r,t[r],n);else Jt(this,t,e,n)};var Jt=function(t,e,n,r){if(void 0!=n)switch(e){case yn:pr[B](n)}var i=Kt(e);i&&i.o?i.o(t,e,n,r):t[A].set(e,n,r)},Qt=function(t,e,n,r,i){this.name=t,this.p=e,this.n=r,this.o=i,this.defaultValue=n},Kt=function(t){var e=Mt.get(t);if(!e)for(var n=0;n<Xt[W];n++){var r=Xt[n],i=r[0].exec(t);if(i){e=r[1](i),Mt.set(e[X],e);break}}return e},Zt=function(t){var e;return Mt.map(function(n,r){r.p==t&&(e=r)}),e&&e[X]},te=function(t,e,n,r,i){return t=new Qt(t,e,n,r,i),Mt.set(t[X],t),t[X]},ee=function(t,e){Xt[U]([new RegExp("^"+t+"$"),e])},ne=function(t,e,n){return te(t,e,n,void 0,re)},re=function(){},ie=ht(_.GoogleAnalyticsObject)&&gt(_.GoogleAnalyticsObject)||"ga",ae=!1,oe=te("_br"),se=ne("apiVersion","v"),ce=ne("clientVersion","_v");te("anonymizeIp","aip");var ue=te("adSenseId","a"),fe=te("hitType","t"),ve=te("hitCallback"),he=te("hitPayload");te("nonInteraction","ni"),te("currencyCode","cu"),te("dataSource","ds");var le=te("useBeacon",void 0,!1),ge=te("transport");te("sessionControl","sc",""),te("sessionGroup","sg"),te("queueTime","qt");var de=te("_s","_s");te("screenName","cd");var pe=te("location","dl",""),me=te("referrer","dr"),we=te("page","dp","");te("hostname","dh");var be=te("language","ul"),ye=te("encoding","de");te("title","dt",function(){return Tt.title||void 0}),ee("contentGroup([0-9]+)",function(t){return new Qt(t[0],"cg"+t[1])});var ke=te("screenColors","sd"),_e=te("screenResolution","sr"),Se=te("viewportSize","vp"),xe=te("javaEnabled","je"),Ae=te("flashVersion","fl");te("campaignId","ci"),te("campaignName","cn"),te("campaignSource","cs"),te("campaignMedium","cm"),te("campaignKeyword","ck"),te("campaignContent","cc");var Te=te("eventCategory","ec"),je=te("eventAction","ea"),Ee=te("eventLabel","el"),Ie=te("eventValue","ev"),Le=te("socialNetwork","sn"),Ne=te("socialAction","sa"),Pe=te("socialTarget","st"),Ve=te("l1","plt"),Ce=te("l2","pdt"),De=te("l3","dns"),Ge=te("l4","rrt"),Oe=te("l5","srt"),Re=te("l6","tcp"),$e=te("l7","dit"),Ue=te("l8","clt"),ze=te("timingCategory","utc"),Be=te("timingVar","utv"),Fe=te("timingLabel","utl"),He=te("timingValue","utt");te("appName","an"),te("appVersion","av",""),te("appId","aid",""),te("appInstallerId","aiid",""),te("exDescription","exd"),te("exFatal","exf");var qe=te("expId","xid"),Me=te("expVar","xvar"),Xe=te("_utma","_utma"),We=te("_utmz","_utmz"),Ye=te("_utmht","_utmht"),Je=te("_hc",void 0,0),Qe=te("_ti",void 0,0),Ke=te("_to",void 0,20);ee("dimension([0-9]+)",function(t){return new Qt(t[0],"cd"+t[1])}),ee("metric([0-9]+)",function(t){return new Qt(t[0],"cm"+t[1])}),te("linkerParam",void 0,void 0,p,re);var Ze=te("usage","_u"),tn=te("_um");te("forceSSL",void 0,void 0,function(){return ae},function(t,n,r){e(34),ae=!!r});var en=te("_j1","jid");ee("\\&(.*)",function(t){var e=new Qt(t[0],t[1]),n=Zt(t[0][et](1));return n&&(e.n=function(t){return t.get(n)},e.o=function(t,e,r,i){t.set(n,r,i)},e.p=void 0),e});var nn=ne("_oot"),rn=te("previewTask"),an=te("checkProtocolTask"),on=te("validationTask"),sn=te("checkStorageTask"),cn=te("historyImportTask"),un=te("samplerTask"),fn=te("_rlt"),vn=te("buildHitTask"),hn=te("sendHitTask"),ln=te("ceTask"),gn=te("devIdTask"),dn=te("timingTask"),pn=te("displayFeaturesTask"),mn=ne("name"),wn=ne("clientId","cid"),bn=te("userId","uid"),yn=ne("trackingId","tid"),kn=ne("cookieName",void 0,"_ga"),_n=ne("cookieDomain"),Sn=ne("cookiePath",void 0,"/"),xn=ne("cookieExpires",void 0,63072e3),An=ne("legacyCookieDomain"),Tn=ne("legacyHistoryImport",void 0,!0),jn=ne("storage",void 0,"cookie"),En=ne("allowLinker",void 0,!1),In=ne("allowAnchor",void 0,!0),Ln=ne("sampleRate","sf",100),Nn=ne("siteSpeedSampleRate",void 0,1),Pn=ne("alwaysSendReferrer",void 0,!1),Vn=te("transportUrl"),Cn=te("_r","_r"),Dn=function(t,e,n){this.V=1e4,this.fa=t,this.$=!1,this.B=e,this.ea=n||1},Gn=function(t,e){var n;if(t.fa&&t.$)return 0;if(t.$=!0,e){if(t.B&&Yt(e,t.B))return Yt(e,t.B);if(0==e.get(Nn))return 0}return 0==t.V?0:(void 0===n&&(n=Ft()),0==n%t.V?S.floor(n/t.V)%t.ea+1:0)},On=new Dn(!0,oe,7),Rn=function(t){if(!yt()&&!ae){var e=Gn(On,t);if(e&&!(!At[nt][Y]&&e>=4&&6>=e)){var n=(new Date).getHours(),r=[Ft(),Ft(),Ft()][rt](".");t=(3==e||5==e?"https:":"http:")+"//www.google-analytics.com/collect?z=br.",t+=[e,"A",n,r][rt](".");var i=1!=e%3?"https:":"http:",i=i+"//www.google-analytics.com/collect?z=br.",i=i+[e,"B",n,r][rt](".");7==e&&(i=i[x]("//www.","//ssl.")),n=function(){e>=4&&6>=e?At[nt][Y](i,""):dt(i)},Ft()%2?(dt(t),n()):(n(),dt(t))}}},$n=function(t,e){var n=S.min(Yt(t,Nn),100);if(!(y(Wt(t,wn))%100>=n)&&(n={},Un(n)||zn(n))){var r=n[Ve];void 0==r||1/0==r||isNaN(r)||(r>0?(Bn(n,De),Bn(n,Re),Bn(n,Oe),Bn(n,Ce),Bn(n,Ge),Bn(n,$e),Bn(n,Ue),e(n)):wt(At,"load",function(){$n(t,e)},!1))}},Un=function(t){var e=At.performance||At.webkitPerformance,e=e&&e.timing;if(!e)return!1;var n=e.navigationStart;return 0==n?!1:(t[Ve]=e.loadEventStart-n,t[De]=e.domainLookupEnd-e.domainLookupStart,t[Re]=e.connectEnd-e.connectStart,t[Oe]=e.responseStart-e.requestStart,t[Ce]=e.responseEnd-e.responseStart,t[Ge]=e.fetchStart-n,t[$e]=e.domInteractive-n,t[Ue]=e.domContentLoadedEventStart-n,!0)},zn=function(t){if(At.top!=At)return!1;var e=At.external,n=e&&e.onloadT;return e&&!e.isValidLoadTime&&(n=void 0),n>2147483648&&(n=void 0),n>0&&e.setPageReadyTime(),void 0==n?!1:(t[Ve]=n,!0)},Bn=function(t,e){var n=t[e];(isNaN(n)||1/0==n||0>n)&&(t[e]=void 0)},Fn=function(t){return function(e){"pageview"!=e.get(fe)||t.I||(t.I=!0,$n(e,function(e){t.send("timing",e)}))}},Hn=!1,qn=function(t){if("cookie"==Wt(t,jn)){var n=Wt(t,kn),r=Wn(t),i=Kn(Wt(t,Sn)),a=Jn(Wt(t,_n)),o=1e3*Yt(t,xn),s=Wt(t,yn);if("auto"!=a)Lt(n,r,i,a,s,o)&&(Hn=!0);else{e(32);var c;if(r=[],a=kt()[N]("."),4!=a[W]||(c=a[a[W]-1],parseInt(c,10)!=c)){for(c=a[W]-2;c>=0;c--)r[U](a[F](c)[rt]("."));r[U]("none"),c=r}else c=["none"];for(var u=0;u<c[W];u++)if(a=c[u],t[A].set(_n,a),r=Wn(t),Lt(n,r,i,a,s,o))return void(Hn=!0);t[A].set(_n,"auto")}}},Mn=function(t){if("cookie"==Wt(t,jn)&&!Hn&&(qn(t),!Hn))throw"abort"},Xn=function(t){if(t.get(Tn)){var n=Wt(t,_n),r=Wt(t,An)||kt(),i=g("__utma",r,n);i&&(e(19),t.set(Ye,(new Date)[L](),!0),t.set(Xe,i.R),(n=g("__utmz",r,n))&&i[z]==n[z]&&t.set(We,n.R))}},Wn=function(t){var e=Nt(Wt(t,wn)),n=Qn(Wt(t,_n));return t=Zn(Wt(t,Sn)),t>1&&(n+="-"+t),["GA1",n,e][rt](".")},Yn=function(t,e,n){for(var r,i=[],a=[],o=0;o<t[W];o++){var s=t[o];s.r[n]==e?i[U](s):void 0==r||s.r[n]<r?(a=[s],r=s.r[n]):s.r[n]==r&&a[U](s)}return 0<i[W]?i:a},Jn=function(t){return 0==t[q](".")?t.substr(1):t},Qn=function(t){return Jn(t)[N](".")[W]},Kn=function(t){return t?(1<t[W]&&t.lastIndexOf("/")==t[W]-1&&(t=t.substr(0,t[W]-1)),0!=t[q]("/")&&(t="/"+t),t):"/"},Zn=function(t){return t=Kn(t),"/"==t?1:t[N]("/")[W]},tr=new RegExp(/^https?:\/\/([^\/:]+)/),er=/(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/,nr=function(t){e(48),this.target=t,this.T=!1};nr[J].Q=function(e,n){if(e.tagName){if("a"==e.tagName[it]())return void(e[O]&&t(e,rr(this,e[O],n)));if("form"==e.tagName[it]())return ir(this,e)}return"string"==typeof e?rr(this,e,n):void 0};var rr=function(t,e,n){var r=er.exec(e);r&&3<=r[W]&&(e=r[1]+(r[3]?r[2]+r[3]:"")),t=t[K].get("linkerParam");var i=e[q]("?"),r=e[q]("#");return n?e+=(-1==r?"#":"&")+t:(n=-1==i?"?":"&",e=-1==r?e+(n+t):e[et](0,r)+n+t+e[et](r)),e},ir=function(t,e){if(e&&e[R]){var n=t[K].get("linkerParam")[N]("=")[1];if("get"==e.method[it]()){for(var r=e.childNodes||[],i=0;i<r[W];i++)if("_ga"==r[i][X])return void r[i][I]("value",n);r=Tt[E]("input"),r[I]("type","hidden"),r[I]("name","_ga"),r[I]("value",n),e.appendChild(r)}else"post"==e.method[it]()&&(e.action=rr(t,e[R]))}};nr[J].S=function(n,r,i){function a(i){try{i=i||At.event;var a;t:{var s=i[K]||i.srcElement;for(i=100;s&&i>0;){if(s[O]&&s.nodeName[T](/^a(?:rea)?$/i)){a=s;break t}s=s.parentNode,i--}a={}}("http:"==a[G]||"https:"==a[G])&&w(n,a[C]||"")&&a[O]&&t(a,rr(o,a[O],r))}catch(c){e(26)}}var o=this;if(this.T||(this.T=!0,wt(Tt,"mousedown",a,!1),wt(Tt,"touchstart",a,!1),wt(Tt,"keyup",a,!1)),i){i=function(t){if(t=t||At.event,(t=t[K]||t.srcElement)&&t[R]){var e=t[R][T](tr);e&&w(n,e[1])&&ir(o,t)}};for(var s=0;s<Tt.forms[W];s++)wt(Tt.forms[s],"submit",i)}};var ar,or=function(t,e,n){this.U=en,this.aa=e,(e=n)||(e=(e=Wt(t,mn))&&"t0"!=e?vr[B](e)?"_gat_"+Nt(Wt(t,yn)):"_gat_"+Nt(e):"_gat"),this.Y=e},sr=function(t,e){var n=e.get(vn);e.set(vn,function(e){cr(t,e);var r=n(e);return ur(t,e),r});var r=e.get(hn);e.set(hn,function(e){var n=r(e);return fr(t,e),n})},cr=function(t,e){e.get(t.U)||("1"==It(t.Y)[0]?e.set(t.U,"",!0):e.set(t.U,""+Ht(),!0))},ur=function(t,e){e.get(t.U)&&Lt(t.Y,"1",e.get(Sn),e.get(_n),e.get(yn),6e5)},fr=function(t,e){if(e.get(t.U)){var n=new xt,r=function(t){Kt(t).p&&n.set(Kt(t).p,e.get(t))};r(se),r(ce),r(yn),r(wn),r(t.U),n.set(Kt(Ze).p,ct(e));var i=t.aa;n.map(function(t,e){i+=mt(t)+"=",i+=mt(""+e)+"&"}),i+="z="+Ht(),dt(i),e.set(t.U,"",!0)}},vr=/^gtm\d+$/,hr=function(t,e){var n=t.b;if(!n.get("dcLoaded")){st(n,29),e=e||{};var r;e[kn]&&(r=Nt(e[kn])),r=new or(n,"https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&",r),sr(r,n),n.set("dcLoaded",!0)}},lr=function(t){var e;e=t.get("dcLoaded")?!1:"cookie"!=t.get(jn)?!1:!0,e&&(st(t,51),e=new or(t),cr(e,t),ur(e,t),t.get(e.U)&&(t.set(Cn,1,!0),t.set(Vn,Ct()+"/r/collect",!0)))},gr=function(){var t=At.gaGlobal=At.gaGlobal||{};return t.hid=t.hid||Ht()},dr=function(t,e,n){if(!ar){var r;r=Tt[P][z];var i=At[X],a=/^#?gaso=([^&]*)/;(i=(r=(r=r&&r[T](a)||i&&i[T](a))?r[1]:It("GASO")[0]||"")&&r[T](/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i))&&(Lt("GASO",""+r,n,e,t,0),_._udo||(_._udo=e),_._utcp||(_._utcp=n),t=i[1],bt("https://www.google.com/analytics/web/inpage/pub/inpage.js?"+(t?"prefix="+t+"&":"")+Ht(),"_gasojs")),ar=!0}},pr=/^(UA|YT|MO|GP)-(\d+)-(\d+)$/,mr=function(t){function e(t,e){l.b[A].set(t,e)}function h(t,n){e(t,n),l.filters.add(t)}var l=this;this.b=new qt,this.filters=new zt,e(mn,t[mn]),e(yn,gt(t[yn])),e(kn,t[kn]),e(_n,t[_n]||kt()),e(Sn,t[Sn]),e(xn,t[xn]),e(An,t[An]),e(Tn,t[Tn]),e(En,t[En]),e(In,t[In]),e(Ln,t[Ln]),e(Nn,t[Nn]),e(Pn,t[Pn]),e(jn,t[jn]),e(bn,t[bn]),e(se,1),e(ce,"j36"),h(nn,r),h(rn,c),h(an,i),h(on,f),h(sn,Mn),h(cn,Xn),h(un,n),h(fn,v),h(ln,s),h(gn,u),h(pn,lr),h(vn,a),h(hn,o),h(dn,Fn(this)),wr(this.b,t[wn]),br(this.b),this.b.set(ue,gr()),dr(this.b.get(yn),this.b.get(_n),this.b.get(Sn))},wr=function(t,n){if("cookie"==Wt(t,jn)){Hn=!1;var r;t:{var i=It(Wt(t,kn));if(i&&!(1>i[W])){r=[];for(var a=0;a<i[W];a++){var o;o=i[a][N](".");var s=o.shift();("GA1"==s||"1"==s)&&1<o[W]?(s=o.shift()[N]("-"),1==s[W]&&(s[1]="1"),s[0]*=1,s[1]*=1,o={r:s,s:o[rt](".")}):o=void 0,o&&r[U](o)}if(1==r[W]){e(13),r=r[0].s;break t}if(0!=r[W]){if(e(14),i=Qn(Wt(t,_n)),r=Yn(r,i,0),1==r[W]){r=r[0].s;break t}i=Zn(Wt(t,Sn)),r=Yn(r,i,1),r=r[0]&&r[0].s;break t}e(12)}r=void 0}r||(r=Wt(t,_n),i=Wt(t,An)||kt(),r=g("__utma",i,r),void 0!=r?(e(10),r=r.O[1]+"."+r.O[2]):r=void 0),r&&(t[A].set(wn,r),Hn=!0)}r=t.get(In),(a=(r=Tt[P][r?"href":"search"][T]("(?:&|#|\\?)"+mt("_ga")[x](/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")+"=([^&#]*)"))&&2==r[W]?r[1]:"")&&(t.get(En)?(r=a[q]("."),-1==r?e(22):(i=a[et](r+1),"1"!=a[et](0,r)?e(22):(r=i[q]("."),-1==r?e(22):(a=i[et](0,r),r=i[et](r+1),a!=m(r,0)&&a!=m(r,-1)&&a!=m(r,-2)?e(23):(e(11),t[A].set(wn,r)))))):e(21)),n&&(e(9),t[A].set(wn,mt(n))),t.get(wn)||((r=(r=At.gaGlobal&&At.gaGlobal.vid)&&-1!=r[D](/^(?:utma\.)?\d+\.\d+$/)?r:void 0)?(e(17),t[A].set(wn,r)):(e(8),t[A].set(wn,[Ht()^2147483647&jt(),S.round((new Date)[L]()/1e3)][rt](".")))),qn(t)},br=function(t){var n=At[nt],r=At.screen,i=Tt[P];if(t.set(me,_t(t.get(Pn))),i){var a=i.pathname||"";"/"!=a.charAt(0)&&(e(31),a="/"+a),t.set(pe,i[G]+"//"+i[C]+a+i[D])}r&&t.set(_e,r.width+"x"+r.height),r&&t.set(ke,r.colorDepth+"-bit");var r=Tt.documentElement,o=(a=Tt.body)&&a[Q]&&a[tt],s=[];if(r&&r[Q]&&r[tt]&&("CSS1Compat"===Tt.compatMode||!o)?s=[r[Q],r[tt]]:o&&(s=[a[Q],a[tt]]),r=0>=s[0]||0>=s[1]?"":s[rt]("x"),t.set(Se,r),t.set(Ae,l()),t.set(ye,Tt.characterSet||Tt.charset),t.set(xe,n&&"function"==typeof n.javaEnabled&&n.javaEnabled()||!1),t.set(be,(n&&(n.language||n.browserLanguage)||"")[it]()),i&&t.get(In)&&(n=Tt[P][z])){for(n=n[N](/[?&#]+/),i=[],r=0;r<n[W];++r)(lt(n[r],"utm_id")||lt(n[r],"utm_campaign")||lt(n[r],"utm_source")||lt(n[r],"utm_medium")||lt(n[r],"utm_term")||lt(n[r],"utm_content")||lt(n[r],"gclid")||lt(n[r],"dclid")||lt(n[r],"gclsrc"))&&i[U](n[r]);0<i[W]&&(n="#"+i[rt]("&"),t.set(pe,t.get(pe)+n))}};mr[J].get=function(t){return this.b.get(t)},mr[J].set=function(t,e){this.b.set(t,e)};var yr={pageview:[we],event:[Te,je,Ee,Ie],social:[Le,Ne,Pe],timing:[ze,Be,He,Fe]};mr[J].send=function(t){if(!(1>arguments[W])){var e,n;"string"==typeof arguments[0]?(e=arguments[0],n=[][F][Z](arguments,1)):(e=arguments[0]&&arguments[0][fe],n=arguments),e&&(n=St(yr[e]||[],n),n[fe]=e,this.b.set(n,void 0,!0),this.filters.D(this.b),this.b[A].m={},Rn(this.b))}};var kr,_r,Sr,xr=function(t){return"prerender"==Tt.visibilityState?!1:(t(),!0)},Ar=/^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,Tr=function(t){if(ft(t[0]))this.u=t[0];else{var e=Ar.exec(t[0]);if(null!=e&&4==e[W]&&(this.c=e[1]||"t0",this.e=e[2]||"",this.d=e[3],this.a=[][F][Z](t,1),this.e||(this.A="create"==this.d,this.i="require"==this.d,this.g="provide"==this.d,this.ba="remove"==this.d),this.i&&(3<=this.a[W]?(this.X=this.a[1],this.W=this.a[2]):this.a[1]&&(ht(this.a[1])?this.X=this.a[1]:this.W=this.a[1]))),e=t[1],t=t[2],!this.d)throw"abort";if(this.i&&(!ht(e)||""==e))throw"abort";if(this.g&&(!ht(e)||""==e||!ft(t)))throw"abort";if(b(this.c)||b(this.e))throw"abort";if(this.g&&"t0"!=this.c)throw"abort"}};kr=new xt,Sr=new xt,_r={ec:45,ecommerce:46,linkid:47};var jr=function(e){function n(t){var e=(t[C]||"")[N](":")[0][it](),n=(t[G]||"")[it](),n=1*t[j]||("http:"==n?80:"https:"==n?443:"");return t=t.pathname||"",lt(t,"/")||(t="/"+t),[e,""+n,t]}var r=Tt[E]("a");t(r,Tt[P][O]);var i=(r[G]||"")[it](),a=n(r),o=r[D]||"",s=i+"//"+a[0]+(a[1]?":"+a[1]:"");return lt(e,"//")?e=i+e:lt(e,"/")?e=s+e:!e||lt(e,"?")?e=s+a[2]+(e||o):0>e[N]("/")[0][q](":")&&(e=s+a[2][et](0,a[2].lastIndexOf("/"))+"/"+e),t(r,e),i=n(r),{protocol:(r[G]||"")[it](),host:i[0],port:i[1],path:i[2],G:r[D]||"",url:e||""}},Er={ga:function(){Er.f=[]}};Er.ga(),Er.D=function(t){var e=Er.J[$](Er,arguments),e=Er.f.concat(e);for(Er.f=[];0<e[W]&&!Er.v(e[0])&&(e.shift(),!(0<Er.f[W])););Er.f=Er.f.concat(e)},Er.J=function(t){for(var n=[],r=0;r<arguments[W];r++)try{var i=new Tr(arguments[r]);if(i.g)kr.set(i.a[0],i.a[1]);else{if(i.i){var a=i,o=a.a[0];if(!ft(kr.get(o))&&!Sr.get(o)){_r[V](o)&&e(_r[o]);var s=a.X;if(!s&&_r[V](o)?(e(39),s=o+".js"):e(43),s){s&&0<=s[q]("/")||(s=(ae||yt()?"https:":"http:")+"//www.google-analytics.com/plugins/ua/"+s);var c,u=jr(s),a=void 0,f=u[G],v=Tt[P][G],a="https:"==f||f==v?!0:"http:"!=f?!1:"http:"==v;if(c=a){var a=u,h=jr(Tt[P][O]);if(a.G||0<=a.url[q]("?")||0<=a.path[q]("://"))c=!1;else if(a.host==h.host&&a[j]==h[j])c=!0;else{var l="http:"==a[G]?80:443;c="www.google-analytics.com"==a.host&&(a[j]||l)==l&&lt(a.path,"/plugins/")?!0:!1}}c&&(bt(u.url),Sr.set(o,!0))}}}n[U](i)}}catch(g){}return n},Er.v=function(t){try{if(t.u)t.u[Z](At,Ir.j("t0"));else{var e=t.c==ie?Ir:Ir.j(t.c);if(t.A)"t0"==t.c&&Ir.create[$](Ir,t.a);else if(t.ba)Ir.remove(t.c);else if(e)if(t.i){var n,r=t.a[0],i=t.W;e==Ir||e.get(mn);var a=kr.get(r);if(ft(a)?(e.plugins_=e.plugins_||new xt,e.plugins_.get(r)||e.plugins_.set(r,new a(e,i||{})),n=!0):n=!1,!n)return!0}else if(t.e){var o=t.d,s=t.a,c=e.plugins_.get(t.e);c[o][$](c,s)}else e[t.d][$](e,t.a)}}catch(u){}};var Ir=function(t){e(1),Er.D[$](Er,[arguments])};Ir.h={},Ir.P=[],Ir.L=0,Ir.answer=42;var Lr=[yn,_n,mn];Ir.create=function(t){var e=St(Lr,[][F][Z](arguments));e[mn]||(e[mn]="t0");var n=""+e[mn];return Ir.h[n]?Ir.h[n]:(e=new mr(e),Ir.h[n]=e,Ir.P[U](e),e)},Ir.remove=function(t){for(var e=0;e<Ir.P[W];e++)if(Ir.P[e].get(mn)==t){Ir.P.splice(e,1),Ir.h[t]=null;break}},Ir.j=function(t){return Ir.h[t]},Ir.getAll=function(){return Ir.P[F](0)},Ir.N=function(){"ga"!=ie&&e(49);var t=At[ie];if(!t||42!=t.answer){Ir.L=t&&t.l,Ir.loaded=!0;var n=At[ie]=Ir;if(h("create",n,n.create),h("remove",n,n.remove),h("getByName",n,n.j,5),h("getAll",n,n.getAll,6),n=mr[J],h("get",n,n.get,7),h("set",n,n.set,4),h("send",n,n.send),n=qt[J],h("get",n,n.get),h("set",n,n.set),!yt()&&!ae){t:{for(var n=Tt.getElementsByTagName("script"),r=0;r<n[W]&&100>r;r++){var i=n[r].src;if(i&&0==i[q]("https://www.google-analytics.com/analytics")){e(33),n=!0;break t}}n=!1}n&&(ae=!0)}yt()||ae||!Gn(new Dn)||(e(36),ae=!0),(At.gaplugins=At.gaplugins||{}).Linker=nr,n=nr[J],kr.set("linker",nr),h("decorate",n,n.Q,20),h("autoLink",n,n.S,25),kr.set("displayfeatures",hr),kr.set("adfeatures",hr),t=t&&t.q,vt(t)?Er.D[$](Ir,t):e(50)}},Ir.k=function(){for(var t=Ir.getAll(),e=0;e<t[W];e++)t[e].get(mn)},function(){var t=Ir.N;if(!xr(t)){e(16);var n=!1,r=function(){if(!n&&xr(t)){n=!0;var e=r,i=Tt;i.removeEventListener?i.removeEventListener("visibilitychange",e,!1):i.detachEvent&&i.detachEvent("onvisibilitychange",e)}};wt(Tt,"visibilitychange",r)}}()}(window);
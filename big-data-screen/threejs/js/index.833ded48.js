(function(){"use strict";var e={9705:function(e,n,t){var i=t(9242),o=t(3396);function a(e,n,t,i,a,r){const s=(0,o.up)("vr_canvas");return(0,o.wg)(),(0,o.j4)(s)}const r={ref:"digit_glb",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"}};function s(e,n,t,i,a,s){return(0,o.wg)(),(0,o.iD)("div",r,null,512)}t(7658);var d=t(1114),l=t(4543),c=t(4198),w=t(1989);function h(e){e.parent.remove(e);while(e.children.length>0)h(e.children[0]),e.remove(e.children[0]);e=null}class m{constructor(e,n,t,i,o,a,r,s){this.id="vr_glb_"+Math.random().toString(16).slice(2),this.type="glb",this.name=e,this.addUpdata=a,this.delUpdata=r,this.container=new d.Tme,this.container.position.x=t.x,this.container.position.y=t.y,this.container.position.z=t.z,this.container.userData["diy_type"]="glb",this.container.userData["class"]=this,this.loader=new c.E,this.glb=null,this.animations=null,this.time=Date.now(),this.speed=.01;var l=this;const h=new w._;h.setDecoderPath("./model/"),this.loader.setDRACOLoader(h),this.loaderControl=this.loader.load(o,(function(t){l.glb=t,t.scene.scale.set(n,n,n),t.scene.castShadow=!1,t.scene.rotation.x=i.x,t.scene.rotation.y=i.y,t.scene.rotation.z=i.z;var o=new d.dpR;o.encoding=d.rnI,t.scene.traverse((function(e){e.isMesh&&e.material.map&&(e.material.map.encoding=o.encoding)})),l.container.add(t.scene),l.animations=t.animations,l.animations.length&&(l.mixer=new d.Xcj(t.scene),l.action=l.mixer.clipAction(l.animations[0]),l.addUpdata(l.id,(()=>{let e=Date.now(),n=e-l.time;l.time=e;let t=l.speed*(n/20);l.mixer.update(t)}))),l.container.name="glb_"+e,s(l),l.addAction_f&&l.addAction_f(),l.callback_f&&l.callback_f()}),void 0,(function(e){console.error(e)})),this.geometry=new d.b_z(2,2,30);const m=new d.TOt(this.geometry),u=new d.nls({color:"#000"});this.edgesLine=new d.ejS(m,u),this.edgesLine.position.y=1,this.edgesLine.userData["edgesLine"]=!0,this.container.userData["Selected"]=!1,this.turnSpeed=0}callback(e){this.glb?e(this):this.callback_f=function(){e(this)}}glbCenter(){var e=this.glb.scene,n=new d.ZzF;n.setFromObject(e);var t=new d.Pa4;n.getCenter(t),e.position.sub(t)}changeSize(e){var n=this.glb.scene;this.container.remove(n),n.scale.set(e,e,e),this.container.add(n)}addAction(e,n){if(this.animations){for(var t=this.animations.length,i=0;i<e.length;i++)this.animations[t+i]=e[i];n(this)}else this.addAction_f=function(){for(var t=this.animations.length,i=0;i<e.length;i++)this.animations[t+i]=e[i];n(this)}}addEdge(){this.container.add(this.edgesLine)}delEdge(){this.container.remove(this.edgesLine)}getAction(){return this.animations}autoTurn(e){var n=this.glb.scene;this.delUpdata(this.id+"turn"),"auto-left"==e?this.addUpdata(this.id+"turn",(()=>{this.container.remove(n),n.rotation.y-=this.turnSpeed,this.glbCenter(),this.container.add(n)})):"auto-right"==e&&this.addUpdata(this.id+"turn",(()=>{this.container.remove(n),n.rotation.y+=this.turnSpeed,this.glbCenter(),this.container.add(n)}))}changeAction(e){e<0&&0!=this.animations.length?this.action.stop():this.animations.length?this.animations.length>=e+1?(this.action.stop(),this.action=this.mixer.clipAction(this.animations[e]),this.action.setLoop(d.YKA),this.action.play()):console.warn("Not have this animation!"):console.warn("Not have animation!")}onceAction(e){e<0&&0!=this.animations.length?this.action.stop():this.animations.length?this.animations.length>=e+1?(this.action.stop(),this.action=this.mixer.clipAction(this.animations[e]),this.action.setLoop(d.jAl),this.action.play()):console.warn("Not have this animation!"):console.warn("Not have animation!")}dispose(){this.delUpdata(this.id),this.delUpdata(this.id+"turn"),null!=this.loaderControl&&this.loaderControl.abort(),this.glb&&(this.glb.scene.traverse((function(e){e.isMesh&&(e.geometry.dispose(),e.material.dispose(),e.material.map&&e.material.map.dispose())})),this.container.remove(this.glb.scene),this.mixer&&this.mixer.stopAllAction(),this.glb=null),h(this.container)}}class u{constructor(e,n,t){this.loader=new c.E,this.animations=null;var i=this;const o=new w._;o.setDecoderPath("./model/"),this.loader.setDRACOLoader(o),this.loader.load(e,(function(e){i.animations=e.animations,i.animations.length&&n.addAction(i.animations,t)}),void 0,(function(e){console.error(e)}))}getAction(){return this.animations}}var v={data(){return{autoTurn:!1,viewSize:75}},methods:{getUrlParams(e){let n=new URLSearchParams(window.location.search),t=n.get(e);return t},sceneCallback(){window.assembly&&(window.callback=window.assembly),window.digit_glbCallback&&window.digit_glbCallback("scene",window.callback)},load_vr(e){var n,t=this;window.vr_scene=new d.xsS,window.vr_camera=new d.cPb(this.viewSize,e.offsetWidth/e.offsetHeight,.1,2e3),window.vr_render=new d.CP7({antialias:!0,alpha:!0}),window.vr_render.domElement.style.pointerEvents="none",window.vr_render.precision="mediump",window.vr_render.setSize(e.offsetWidth,e.offsetHeight),window.vr_render.shadowMap.enabled=!0,e.appendChild(window.vr_render.domElement),window.vr_controls=new l.z(window.vr_camera,window.vr_render.domElement),window.vr_controls.dampingFactor=.15,window.vr_controls.rotateSpeed=.6,window.vr_controls.enableDamping=!0,window.vr_controls.enablePan=!1,window.vr_controls.enableZoom=!1,window.vr_controls.update(),window.vr_controls.touches={ONE:d.QmN.ROTATE},window.vr_controls.autoRotateSpeed=3,window.vr_render.domElement.addEventListener("mousedown",(function(){clearTimeout(n),t.autoTurn=!1})),window.vr_render.domElement.addEventListener("mouseup",(function(){n=setTimeout((function(){t.autoTurn=!0}),3e3)})),window.vr_camera.position.set(0,0,100),window.vr_camera.lookAt(0,0,0),window.vr_render.render(window.vr_scene,window.vr_camera),this.animate_vr(),this.changeVR_dom(e),this.wheel_view(window.vr_render.domElement),this.click_vr_module(),this.update_add("加入轨道",(()=>{window.vr_controls.update()}));var i=new d.Mig(10602181);i.intensity=.5,window.vr_scene.add(i);const o=new d.Ox3(5532415,2);o.castShadow=!0,o.shadow.mapSize.width=2048,o.shadow.mapSize.height=2048,o.position.set(-100,100,100),window.vr_scene.add(o);const a=new d.Ox3(16722121,2);a.castShadow=!0,a.shadow.mapSize.width=2048,a.shadow.mapSize.height=2048,a.position.set(100,100,-100),window.vr_scene.add(a);const r=new d.Ox3(16748544,1);r.castShadow=!0,r.shadow.mapSize.width=2048,r.shadow.mapSize.height=2048,r.position.set(10,-100,100),window.vr_scene.add(r),window.digit_glbCallback&&window.digit_glbCallback("scene_Loading_Completed",null)},load_vrJson(e){window.vr_render.domElement.style.pointerEvents="auto",window.assembly&&(window.assembly.dispose(),window.assembly=null);let n=this.assembly_glb(e);window.assembly=n,window.vr_scene.add(n.container)},animate_vr(){window.vr_animate_updata&&window.vr_animate_updata.map((e=>{e.f()})),window.vr_camera.fov=this.viewSize,window.vr_camera.updateProjectionMatrix(),window.vr_controls.autoRotate=this.autoTurn,requestAnimationFrame(this.animate_vr),window.vr_render.render(window.vr_scene,window.vr_camera)},changeVR_dom(e){window.onresize=function(){var n=e.clientWidth,t=e.clientHeight;window.vr_camera.aspect=n/t,window.vr_camera.updateProjectionMatrix(),window.vr_render.setSize(n,t)}},change_WH(){var e=this.$refs.digit_glb,n=e.clientWidth,t=e.clientHeight;window.vr_camera.aspect=n/t,window.vr_camera.updateProjectionMatrix(),window.vr_render.setSize(n,t)},update_add(e,n){window.update_del=this.update_del,window.vr_animate_updata||(window.vr_animate_updata=[]),window.vr_animate_updata.push({name:e,f:n})},update_del(e){window.vr_animate_updata&&window.vr_animate_updata.map(((n,t)=>{n.name==e&&window.vr_animate_updata.splice(t,1)}))},wheel_view(e){e.addEventListener("wheel",t,!1);var n=this;function t(e){e.preventDefault(),e.stopPropagation();var t=e.deltaY||e.detail||0;t=t>0?-1:t<0?1:0,t>0?n.viewSize>40&&(n.viewSize-=1.5):n.viewSize<110&&(n.viewSize+=1.5)}},click_vr_module(){var e=!1,n=!1,t=null;window.vr_render.domElement.addEventListener("mousedown",(function(n){const i=new d.iMs,o=new d.FM8;o.x=(n.clientX-window.vr_render.domElement.getBoundingClientRect().left)/window.vr_render.domElement.offsetWidth*2-1,o.y=-(n.clientY-window.vr_render.domElement.getBoundingClientRect().top)/window.vr_render.domElement.offsetHeight*2+1,i.setFromCamera(o,window.vr_camera);const a=i.intersectObjects(window.vr_scene.children,!0);var r=null;for(let t=0;t<a.length;t++){r=a[t].object;while(r.parent)if(r=r.parent,"glb"==r.userData["diy_type"]){e=!0;break}if(e)break}e&&(t=r)})),window.vr_render.domElement.addEventListener("mouseup",(function(i){const o=new d.iMs,a=new d.FM8;a.x=(i.clientX-window.vr_render.domElement.getBoundingClientRect().left)/window.vr_render.domElement.offsetWidth*2-1,a.y=-(i.clientY-window.vr_render.domElement.getBoundingClientRect().top)/window.vr_render.domElement.offsetHeight*2+1,o.setFromCamera(a,window.vr_camera);const r=o.intersectObjects(window.vr_scene.children,!0);var s=null;for(let e=0;e<r.length;e++){s=r[e].object;while(s.parent)if(s=s.parent,"glb"==s.userData["diy_type"]){n=!0;break}if(n)break}n&&e&&t.userData["class"]&&t.userData["class"].click&&t.userData["class"].click(),t=null,e=!1,n=!1}))},assembly_glb(e){var n=this,t=new m("glb",e.size,{x:0,y:0,z:0},e.rotate,e.data.url,this.update_add,this.update_del,(t=>{t.speed=e.data.animationSpeed,-1!=e.data.animation&&t.changeAction(0),n.sceneCallback("glb"),n.autoTurn=!0}));return t},loadModelAnimation(e,n,t){new u(e,n,(e=>{t(e)}))}},mounted(){window.digit_glb.load_vrJson=this.load_vrJson,window.digit_glb.load_Animation=this.loadModelAnimation,window.digit_glb.upWH=this.change_WH,this.load_vr(this.$refs.digit_glb)}},_=t(89);const p=(0,_.Z)(v,[["render",s]]);var g=p,f={name:"App",data(){return{showImage:!1,srcList:[],isLoad:!0}},components:{vr_canvas:g},methods:{},mounted(){}};const b=(0,_.Z)(f,[["render",a]]);var y=b;const S=(0,i.ri)(y);S.mount("#digit_app")}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var a=n[i]={exports:{}};return e[i](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,i,o,a){if(!i){var r=1/0;for(c=0;c<e.length;c++){i=e[c][0],o=e[c][1],a=e[c][2];for(var s=!0,d=0;d<i.length;d++)(!1&a||r>=a)&&Object.keys(t.O).every((function(e){return t.O[e](i[d])}))?i.splice(d--,1):(s=!1,a<r&&(r=a));if(s){e.splice(c--,1);var l=o();void 0!==l&&(n=l)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[i,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={826:0};t.O.j=function(n){return 0===e[n]};var n=function(n,i){var o,a,r=i[0],s=i[1],d=i[2],l=0;if(r.some((function(n){return 0!==e[n]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(d)var c=d(t)}for(n&&n(i);l<r.length;l++)a=r[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(c)},i=self["webpackChunkshiant_vr"]=self["webpackChunkshiant_vr"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(9705)}));i=t.O(i)})();
//# sourceMappingURL=index.833ded48.js.map
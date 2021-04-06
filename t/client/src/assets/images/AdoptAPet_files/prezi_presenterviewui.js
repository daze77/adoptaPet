;(function(){var baseUrl;var __factory=function(){var React=arguments[0];var ReactDOM=arguments[1];var ReactTransitionGroup=arguments[2];var StyledComponents=arguments[3];var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-25-g6015dbc";},getModuleName:function(){return "prezi_presenterviewui";},getModuleVersion:function(){return "release-2021w06-base-26-gaeb382e";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi_bacon":dependencies[4],"prezi_externalserviceprovider":dependencies[5],"prezi_koi_navigation":dependencies[6],"prezi_utils":dependencies[7]}};})(),React,ReactDOM,ReactTransitionGroup,StyledComponents);};})(arguments);var moduleImpl=(function(){return module(function(l,b,A,h,k){function p(a,d,f=null){return"presenterview2."+a+"."+d+(null!=f?"."+f:"")}var r=l.dependencies.prezi_utils,B=l.dependencies.prezi_bacon,C=l.dependencies.prezi_externalserviceprovider,z=l.dependencies.prezi_koi_navigation,t={};Object.defineProperty(t,"__esModule",{value:!0});var {default:l}=k;const D=l.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 3%;
	padding-right: 3%;

	font-family: RalewayRegular;
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: 0.5px;
`;t.Clock=class extends b.Component{constructor(){super(...arguments);this.state={formattedTime:""}}componentWillMount(){this.createFormattedTime();setInterval(()=>{this.createFormattedTime()},1E3)}createFormattedTime(){this.setState({formattedTime:(new Date).toLocaleTimeString(this.props.language||"en",{hour:"2-digit",minute:"2-digit"})})}render(){return b.createElement(D,null,b.createElement("div",null,this.state.formattedTime))}};l={};Object.defineProperty(l,"__esModule",{value:!0});var {default:h}=
k;l.Button=h.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(255, 255, 255, 0.24);
	border-radius: 4px;
	user-select: none;
	&:hover {
		background-color: rgba(255, 255, 255, 0.4);
		cursor: pointer;
	}
`;var u={};Object.defineProperty(u,"__esModule",{value:!0});var {default:h}=k;const E=h.div`
	display: flex;
	flex-direction: row;
`,F=h.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	font-family: monospace;
	font-style: normal;
	font-weight: bold;
	font-size: 22px;
	line-height: 22px;
`,G=h.div`
	margin-right: 8px;
`,H=h(l.Button)`
	min-width: 55px;
	height: 24px;
	margin-left: 16px;
`,I=h.div`
`;u.Timer=class extends b.Component{constructor(a){super(a);this.timer=null;this.handleButtonClick=()=>{if(this.state.paused){this.props.sendGlassboxEvent("StartPresenterViewTimer");this.props.sendLog("play","timer","click");var a=Object.assign(Object.assign({},this.state),{lastTick:Date.now(),paused:!this.state.paused});this.setState(a);this.startTimer()}else this.props.sendGlassboxEvent("PausePresenterViewTimer"),this.props.sendLog("pause","timer","click"),a=Object.assign(Object.assign({},this.getCurrentTimeState()),
{paused:!this.state.paused}),this.setState(a),this.stopTimer()};this.state={currentMS:0,paused:!1,lastTick:Date.now()};a.sendGlassboxEvent("LoadedPresenterView");this.startTimer()}getCurrentTimeState(){const a=Date.now();return{currentMS:this.state.currentMS+(a-this.state.lastTick),lastTick:a}}startTimer(){null==this.timer&&(this.timer=setInterval(()=>this.setState(this.getCurrentTimeState()),100))}stopTimer(){null!=this.timer&&(clearInterval(this.timer),this.timer=null)}resetTimer(){this.setState({currentMS:0,
lastTick:Date.now()})}getFormattedTime(a){var d=this.state.currentMS,f=Math.floor(d/36E5),c=a?Math.floor(d%36E5/6E4):Math.floor(d/6E4);f=(10>f?"0":"")+f;c=(10>c?"0":"")+c;d=("00"+Math.floor(d%6E4/1E3)).slice(-2);return(a?f+":":"")+c+":"+d}render(){return b.createElement(E,null,b.createElement(F,null,b.createElement(G,{onClick:this.handleButtonClick},b.createElement("span",{className:this.state.paused?"icon-play":"icon-controller-paus"})),b.createElement(I,null,b.createElement("span",null,this.getFormattedTime(!0)))),
b.createElement(H,{onClick:()=>this.resetTimer()},this.props.resetText))}};var v={};Object.defineProperty(v,"__esModule",{value:!0});var {default:h}=k;const J=h.div`
	height: 100%;
	border: 1px solid rgba(255,255,255,0.24);
	border-radius: 4px;
	width: ${({is4By3:a})=>a?"56.12%":"39.5%"}
`,K=h.div`
	display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 16px;
    padding-top: 8px;
    height: 32px;
`,L=h(l.Button)`
	width: 40px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-right: solid 1px rgba(255,255,255,0.24);
`,M=h(l.Button)`
	width: 40px;
	border-top-left-radius: 0px;
	border-bottom-left-radius: 0px;
`,N=h.div`
	padding-top: 8px;
    padding-left: 16px;
    padding-right: 16px;
    height: 88.44%;

    font-family: RalewayRegular;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
	letter-spacing: 0.25px;
	fontSize: ${({fontSize:a})=>a+"px"}
`,O=h.textarea`
	height: 95%;
    width: 100%;
    border: none;
    background-color: inherit;
    resize: none;
    outline: none;
    line-height: normal;
`;v.NarrationArea=class extends b.Component{constructor(a){super(a);this.state={fontSize:a.initialFontSize,narrationText:a.narrationText,textAreaHasFocus:!1}}handleTextAreaChange(a){this.setState({narrationText:a.target.value});this.props.onChange(a.target.value);a.stopPropagation()}componentDidUpdate(){this.state.textAreaHasFocus||this.state.narrationText===this.props.narrationText||this.setState({narrationText:this.props.narrationText})}handleFocus(){this.setState({textAreaHasFocus:!0})}handleBlur(){this.setState({textAreaHasFocus:!1})}render(){return b.createElement(J,
{is4By3:this.props.is4by3},b.createElement(K,null,b.createElement(L,{onClick:()=>this.setState({fontSize:this.state.fontSize-2})},"A-"),b.createElement(M,{onClick:()=>this.setState({fontSize:this.state.fontSize+2})},"A+")),b.createElement(N,{fontSize:this.state.fontSize},b.createElement(O,{id:"narrative-text-area",onChange:(a)=>this.handleTextAreaChange(a),placeholder:this.props.placeholderText,value:this.state.narrationText,disabled:!this.props.editEnabled,onFocus:()=>this.handleFocus(),onBlur:()=>
this.handleBlur()})))}};var q={};Object.defineProperty(q,"__esModule",{value:!0});q.MusicNote=class extends b.Component{constructor(a){super(a)}render(){return b.createElement("div",{"data-lookup":"music-note"},b.createElement("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M19.7917 3L8.33335 5V6V9V16.1423C8.00754 16.0501 7.65693 16 7.29169 16C5.5658 16 4.16669 17.1193 4.16669 18.5C4.16669 19.8807 5.5658 21 7.29169 21C9.01758 21 10.4167 19.8807 10.4167 18.5V8.63636L17.7084 7.36364V14.1423C17.3825 14.0501 17.0319 14 16.6667 14C14.9408 14 13.5417 15.1193 13.5417 16.5C13.5417 17.8807 14.9408 19 16.6667 19C18.3926 19 19.7917 17.8807 19.7917 16.5L19.7917 7L19.7917 4L19.7917 3Z",
fill:"white"})))}};var w={};Object.defineProperty(w,"__esModule",{value:!0});var {default:h}=k;const P=h.div`
	width: 120%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
`,Q=h.div`
	height: 100%;
	margin-right: 16px;
	border-radius: 4px;
	display: flex;
`,R=h.img`
	height: 100%;
	max-height: 100%;
	border-radius: 4px;
`;w.ThumbnailList=class extends b.Component{constructor(a){super(a);this.state={}}render(){const a=this.props.thumbnails.slice(0,this.props.is4by3?6:5).filter((a)=>null!=a).map((a,f)=>b.createElement(Q,{"data-lookup":"thumbnail-container",onClick:()=>this.props.onClick(f)},b.createElement(R,{src:a.src}),a.hasAudio?b.createElement(q.MusicNote,null):null));return b.createElement(P,null,a)}};var x={};Object.defineProperty(x,"__esModule",{value:!0});var {default:k}=k;class y{constructor(){this.path=
[];this.elementThumbnailMap=new Map;this.elementsWithAudio=new Set;this.elementsShowInProgressbar=new Set}getIndex(a){return this.path.indexOf(a)}getByIndex(a){return 0>a||a>=this.path.length?y.defaultPathInfo:this.getByPathElementId(this.path[a])}getByPathElementId(a){return{hasAudio:this.elementsWithAudio.has(a),showInProgressbar:this.elementsShowInProgressbar.has(a),thumbnail:this.elementThumbnailMap.get(a),pathElementId:a}}setElementsShowInProgressbar(a){this.elementsShowInProgressbar=new Set(a)}setElementsWithAudio(a){this.elementsWithAudio=
new Set(a)}updateThumbnail(a,d){this.elementThumbnailMap.set(a,d)}filterPositions(a){const d=[];this.path.forEach((f,c)=>{f=this.getByPathElementId(f);a(f)&&d.push(c)});return d}indexToPathElementId(a){return this.path[a]}getAllStepsNum(){return this.path.length}}y.defaultPathInfo={hasAudio:!1,showInProgressbar:!1,thumbnail:null,pathElementId:null};const S=k.div`
	height: 100%;
	background-color: #152235;
	color: white;
`;var m;(function(a){a.Gap24="Gap24";a.Gap16="Gap16";a.Gap14="Gap14";a.Gap8="Gap8"})(m||(m={}));const n=k.div`
	height: ${({value:a})=>{switch(a){case m.Gap24:return"4.4%";case m.Gap16:return"3%";case m.Gap14:return"2.6%";case m.Gap8:return"1.5%";default:throw r.Utils.assertNever(a);}}}
`,T=k.div`
	width: 19.8%;
`,U=k.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	padding-right: 3%;
`,V=k(l.Button)`
	width: 103px;
	height: 24px;
`,W=k.div`
	width: 103px;
	height: 24px;
`,X=k.div`
	height: 3%;
	padding-left: 3%;
`,Y=k.div`
	height: 43.64%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-left: 3%;
	padding-right: 3%;
`,Z=k.div`
	height: 100%;
	border-radius: 4px;
	width: ${({is4by3:a})=>a?"39.5%":"56.12%"}
`,aa=k.img`
	max-width:100%;
	max-height:100%;
	width: 100%;
	height: 100%;
	border-radius: 4px;
`,ba=k.div`
	height: 3%;
	padding-left: 3%;
`,ca=k.div`
	height: 17.7%;
	padding-left: 3%;
`;x.PresenterView=class extends b.Component{constructor(a){var d;super(a);this.navigationTargetByIndex=(a)=>{var c;a=this.state.pathInfos.getByIndex(a);return null!=a.pathElementId?{kind:e.NavigationTargetKind.pathElementId,pathElementId:a.pathElementId}:{kind:e.NavigationTargetKind.pathElementId,pathElementId:null===(c=this.state.pathInfos.getByIndex(0))||void 0===c?void 0:c.pathElementId}};this.handleNavigatePath=(a)=>{e.setLocalStorageItem(this.oid,"desiredDirection",a)};this.handleShuffleButtonClicked=
()=>{this.sendGlassboxEvent("SwitchPresenterViewScreen");e.setLocalStorageItem(this.oid,"shuffleScreen",null)};this.handleAudioClicked=()=>{const a=this.state.audioMuted;e.setLocalStorageItem(this.oid,"audioMuted",!a);this.setState({audioMuted:!a})};this.sendLog=(a,c,d,b)=>{a=$.extend({},{action:a,object:c,trigger:d,category:"presenter_view_structured"},b);e.setLocalStorageItem(this.oid,"logEvent",a)};this.sendGlassboxEvent=(a,c={})=>{a=Object.assign({eventSchemaName:a},c);e.setLocalStorageItem(this.oid,
"glassboxEvent",a)};this.oid=null!==(d=window.preziOid)&&void 0!==d?d:window.location.pathname.split("/")[2];a=C.ExternalServiceProviderModule.initFullscreenProviderForPresenterView();a.onFullscreenChange(()=>this.handleFullscreenChange());this.state={oid:"",currentPathIndex:0,startPathIndex:0,nextPathIndex:0,currentNarrative:"",currentNavbarThumbnail:null,title:"",language:"en",pathInfos:new y,fullscreenProvider:a,userCanEdit:!1,presenterNotesPlaceholder:"",presenterNotesWarning:"",editorVisibility:"",
detachOverlayText:"",shuffleScreenAvailable:!1,shuffleScreenDescription:"",isFullscreen:a.isInFullscreen(),audioMuted:!1,nextThumbnailRect:null,v2UIStrings:{clickToAddPresenterNotes:"",nextSteps:"",reset:"",switchScreens:""},is4by3:!1}}componentWillMount(){this.getOid();this.listenToLocalStorage();this.addNavigationEventListeners()}componentDidMount(){e.setLocalStorageItem(this.oid,"presenterViewOpened",this.oid)}componentWillUnmount(){this.sendGlassboxEvent("ClosePresenterView")}getBoundingClientRectWithoutSoundNote(a){return a.querySelector("img").getBoundingClientRect()}distanceBetween(a,
d){a=a.getBoundingClientRect();return d.getBoundingClientRect().left-a.left}animateNextSteps(a,d,b){return null==a||null==d?null:a.animate([{transform:"translateX(0px)"},{transform:`translateX(${d}px)`}],b)}animateCurrentStepAndMusicNote(a,d,b,c){if(null!=d){const a=new DOMRect(b.right,b.top,25,24);this.animateToRect(d,a,c)}return this.animateToRect(a,b,c)}animateToRect(a,d,b){if(null==d||null==a)return null;var c=d.left+d.width/2,g=d.top+d.height/2;const f=a.getBoundingClientRect();return a.animate([{transform:"translate(0px, 0px) scale(1)"},
{transform:`translate(${c-(f.left+f.width/2)}px, ${g-(f.top+f.height/2)}px) scale(${d.height/f.height})`}],b)}animateNewElementAppear(a,d,b){var c;const g=document.createElement("img");g.style.position="fixed";g.style.top=a.top.toString()+"px";g.style.left=a.left.toString()+"px";g.style.width=a.width.toString()+"px";g.style.height=a.height.toString()+"px";g.src=null===(c=this.state.pathInfos.getByIndex(d))||void 0===c?void 0:c.thumbnail;document.body.appendChild(g);a=g.animate([{opacity:0},{opacity:1}],
b);a.addEventListener("finish",()=>document.body.removeChild(g));return a}animateToNextFrame(a,d,b){var c={duration:500},g=document.querySelectorAll('[data-lookup="thumbnail-container"]');this.setState({nextPathIndex:d,nextThumbnailRect:0<g.length?g[0].getBoundingClientRect():this.state.nextThumbnailRect});const f=document.querySelector('[data-lookup="current-step"]');switch(a){case "next":if(1<g.length){a=this.distanceBetween(g[1],g[0]);for(var e=1;e<g.length;++e)this.animateNextSteps(g[e],a,c)}a=
g[0].querySelector("img");g=g[0].querySelector("svg");this.animateCurrentStepAndMusicNote(a,g,f.getBoundingClientRect(),c);g=f.animate([{opacity:1},{opacity:0}],c);break;case "prev":if(0<g.length)for(a=this.state.pathInfos.getByIndex(this.state.currentPathIndex).hasAudio?25:0,a=this.getBoundingClientRectWithoutSoundNote(g[0]).width+a+16,e=0;e<g.length;++e)this.animateNextSteps(g[e],a,c);g=0<g.length?this.getBoundingClientRectWithoutSoundNote(g[0]):this.state.nextThumbnailRect;f.style.zIndex="1";const b=
document.querySelector('[data-lookup="music-note"] svg');null!=b&&(b.style.zIndex="2");g=this.animateCurrentStepAndMusicNote(f,b,g,c);a=()=>{f.style.zIndex="unset";null!=b&&(b.style.zIndex="unset")};null!=g?g.addEventListener("finish",a):a();c=this.animateNewElementAppear(f.getBoundingClientRect(),d,c);null==g&&(g=c);break;default:throw r.Utils.assertNever(a);}null!=g&&g.addEventListener("finish",()=>this.setState({currentPathIndex:d,currentNarrative:b}))}getOid(){this.setState({oid:this.oid})}updatePathState(a){const b=
this.state.pathInfos;b.path=a.path;b.setElementsShowInProgressbar(a.pathElementsShownInProgressbar);b.setElementsWithAudio(a.pathElementsWithAudio);this.setState({pathInfos:b})}listenToLocalStorage(){e.cleanupLocalStorage(this.oid);const a=(a,b,d)=>{b=e.generateKey(this.oid,b);a.key===b&&(a={[d||b]:JSON.parse(a.newValue||"null")},this.setState(a))},b=(b)=>{const c=e.generateKey(this.oid,"editorVisibility");b.key===c&&"hidden"!==JSON.parse(b.newValue)&&a(b,"editorVisibility","editorVisibility")},f=
(a)=>{const b=e.generateKey(this.oid,"thumbnails.preview");if(-1<a.key.indexOf(b)&&a.newValue){var c=a.key.split(".").slice(4).join("."),d=this.state.pathInfos,f;r.Utils.createIndexedStorage(e.IndexedDbId).then((a)=>{f=a;return a.read(c)}).then((b)=>{d.updateThumbnail(c,b.value);this.setState({pathInfos:d});window.localStorage.removeItem(a.key);f.delete(c)})}};window.addEventListener("storage",(c)=>{if(c.key===e.generateKey(this.oid,"currentPathElementWithNarrative")){var d=JSON.parse(c.newValue);
if(null==d)return;var h=JSON.parse(c.oldValue);const a=this.state.pathInfos.getIndex(d.pathElementId);h=null!=h?this.state.pathInfos.getIndex(h.pathElementId):-1;const b=a-h;1===Math.abs(b)&&-1!==h?this.animateToNextFrame(0<b?"next":"prev",a,d.text):this.setState({currentPathIndex:a,nextPathIndex:a,currentNarrative:d.text})}c.key===e.generateKey(this.oid,"title")&&(d=JSON.parse(c.newValue||"null"),document.title=d+" | Prezi",this.setState({title:d}));a(c,"language","language");a(c,"userCanEdit","userCanEdit");
a(c,"presenterNotesPlaceholder","presenterNotesPlaceholder");a(c,"presenterNotesWarning","presenterNotesWarning");b(c);a(c,"detachOverlayText","detachOverlayText");a(c,"shuffleScreenAvailable","shuffleScreenAvailable");a(c,"shuffleScreenDescription","shuffleScreenDescription");a(c,"audioMuted","audioMuted");a(c,"v2UIStrings","v2UIStrings");a(c,"is4by3","is4by3");f(c);c.key===e.generateKey(this.oid,"path")&&this.updatePathState(JSON.parse(c.newValue))})}addNavigationEventListeners(){$(window).on("beforeunload",
()=>{e.setLocalStorageItem(this.oid,"presenterViewClosed",null);this.sendLog("close","presenter_view","button")});window.document.addEventListener("keydown",(a)=>{if(document.activeElement!==document.getElementById("narrative-text-area"))switch(a.key){case "ArrowLeft":case "PageUp":this.sendLog("previous_step","presenter_view","keyboard");this.handleNavigatePath({kind:e.NavigationTargetKind.prev});break;case "ArrowRight":case "PageDown":this.sendLog("next_step","presenter_view","keyboard");this.handleNavigatePath({kind:e.NavigationTargetKind.next});
break;case "Home":this.sendLog("home_step","presenter_view","keyboard");this.handleNavigatePath({kind:e.NavigationTargetKind.home});break;case "End":this.sendLog("end_step","presenter_view","keyboard"),this.handleNavigatePath({kind:e.NavigationTargetKind.end})}})}handleNarrativeWritten(a){const b=this.state.pathInfos.getByIndex(this.state.currentPathIndex);null!=b.pathElementId&&(this.sendLog("write","presenter_view","user",{object_id:b.pathElementId}),e.setLocalStorageItem(this.oid,"desiredNarrative",
{text:a,pathElementId:b.pathElementId}))}toggleFullscreen(){this.state.fullscreenProvider.toggleFullscreen(document.getElementById("presenterviewpage"))}handleFullscreenChange(){const a=this.state.fullscreenProvider.isInFullscreen();a?(this.sendGlassboxEvent("PresentInFullScreen"),this.sendLog("fullscreen_enter","presenter_view","button")):(this.sendGlassboxEvent("LeaveFullScreen"),this.sendLog("fullscreen_exit","presenter_view","button"));this.setState({isFullscreen:a})}render(){const a=z.NavigationModule.getNavigationComponent(),
d=this.getNavBarDefaultProps(),f=this.state.currentPathIndex;return b.createElement(S,{"data-lookup":"player"},b.createElement(n,{value:m.Gap16}),b.createElement(t.Clock,{language:this.state.language}),b.createElement(n,{value:m.Gap14}),b.createElement(U,null,b.createElement(u.Timer,{sendLog:this.sendLog,sendGlassboxEvent:this.sendGlassboxEvent,resetText:this.state.v2UIStrings.reset}),b.createElement(T,null),this.state.shuffleScreenAvailable?b.createElement(V,{onClick:this.handleShuffleButtonClicked},
this.state.v2UIStrings.switchScreens):b.createElement(W,null)),b.createElement(n,{value:m.Gap8}),b.createElement(X,null,b.createElement("span",null,this.state.currentPathIndex+1+"/"+this.state.pathInfos.getAllStepsNum())),b.createElement(n,{value:m.Gap8}),b.createElement(Y,null,b.createElement(Z,{is4by3:this.state.is4by3,"data-lookup":"current-step"},b.createElement(aa,{src:this.state.pathInfos.getByIndex(this.state.currentPathIndex).thumbnail})),this.state.pathInfos.getByIndex(this.state.currentPathIndex).hasAudio?
b.createElement(q.MusicNote,null):null,b.createElement(v.NarrationArea,{initialFontSize:20,narrationText:this.state.currentNarrative||"",onChange:(a)=>this.handleNarrativeWritten(a),editEnabled:this.state.userCanEdit,placeholderText:this.state.v2UIStrings.clickToAddPresenterNotes,is4by3:this.state.is4by3})),b.createElement(n,{value:m.Gap24}),b.createElement(ba,null,b.createElement("span",null,this.state.v2UIStrings.nextSteps+":")),b.createElement(n,{value:m.Gap8}),b.createElement(ca,null,b.createElement(w.ThumbnailList,
{thumbnails:[1,2,3,4,5,6].map((a)=>{a=this.state.pathInfos.getByIndex(f+a);return null!=a&&null!=a.thumbnail?{src:a.thumbnail,hasAudio:a.hasAudio}:null}),onClick:(a)=>this.handleNavigatePath(this.navigationTargetByIndex(f+a+1)),is4by3:this.state.is4by3})),b.createElement("div",{className:"pv-navbar-container"},b.createElement(a,Object.assign({},d))))}getNavBarDefaultProps(){const a=this.state.pathInfos.getByIndex(this.state.currentPathIndex),b=this.state.pathInfos.getByIndex(this.state.startPathIndex);
return{isTextZoomOutButton:!1,visibility:z.NavbarVisibility.VISIBLE,hideZoomButtons:!0,pathElementIdsAll:this.state.pathInfos.path,pathElementIdsWithThumbnail:this.state.pathInfos.filterPositions((a)=>a.showInProgressbar).map((a)=>this.state.pathInfos.getByIndex(a).pathElementId),pathElementIdsWithVoiceOver:this.state.pathInfos.filterPositions((a)=>a.hasAudio).map((a)=>this.state.pathInfos.getByIndex(a).pathElementId),currentPathElementId:null!=a.pathElementId?a.pathElementId:this.state.pathInfos.getByIndex(0).pathElementId,
startPathElementId:null!=b.pathElementId?b.pathElementId:this.state.pathInfos.getByIndex(0).pathElementId,hasNext:this.state.currentPathIndex<this.state.pathInfos.getAllStepsNum()-1,hasPrev:0<this.state.currentPathIndex,isPathProgressBarVisible:!0,canHaveFocus:!0,thumbnail:this.state.currentNavbarThumbnail,isFullScreenVisible:!0,isFullscreen:this.state.isFullscreen,mobileClickerProvider:{openPreziRemote:()=>{},disconnectPreziRemote:()=>{}},mobileClickerStatusStream:B.Bacon.newBus(),isMobileClickerPopupVisible:!1,
isMuted:this.state.audioMuted,isZoomInLimitReached:!1,isZoomOutLimitReached:!1,isPresentMode:!1,isEditMode:!0,callbacks:{navBarVisibilityChanged:()=>!0,movePrev:()=>{this.sendLog("previous_step","presenter_view","button");this.handleNavigatePath({kind:e.NavigationTargetKind.prev})},moveNext:()=>{this.sendLog("next_step","presenter_view","button");this.handleNavigatePath({kind:e.NavigationTargetKind.next})},fullscreen:()=>{this.toggleFullscreen()},updateThumbnail:(a)=>{const b=document.createElement("canvas"),
d=new Image;b.width=180;b.height=101;const f=b.getContext("2d");d.onload=()=>{f.drawImage(d,0,0,180,101);this.setState({currentNavbarThumbnail:b})};d.src=this.state.pathInfos.getByPathElementId(a).thumbnail},moveTo:(a)=>{this.sendLog("go_to_path","progress_bar","drag");this.handleNavigatePath({kind:e.NavigationTargetKind.pathElementId,pathElementId:a})},play:()=>{},pause:()=>{},toggleMuted:()=>{this.handleAudioClicked()},restart:()=>{},setAutoplay:()=>{},goHome:()=>{},zoomIn:()=>{},zoomOut:()=>{},
addComment:()=>{},info:()=>{},nextForcedDots:()=>{},openPresenterView:()=>{},openMobileClickerPopup:()=>{}}}}};var e={};Object.defineProperty(e,"__esModule",{value:!0});e.IndexedDbId="presenterViewThumbnails";(function(a){a.next="next";a.prev="prev";a.home="home";a.end="end";a.pathElementId="pathElementId"})(e.NavigationTargetKind||(e.NavigationTargetKind={}));e.setLocalStorageItem=function(a,b,f,c=null){a=p(a,b,c);localStorage.setItem(a,JSON.stringify(f))};e.generateKey=p;e.getLocalStorageItem=function(a,
b,f=null){a=p(a,b,f);try{return JSON.parse(localStorage.getItem(a))}catch(c){return null}};e.removeLocalStorageItem=function(a,b,f=null){a=p(a,b,f);window.localStorage.removeItem(a)};e.cleanupLocalStorage=function(a){a="presenterview2."+a;const b=[];for(let d=0;d<window.localStorage.length;++d){const c=window.localStorage.key(d);c.startsWith(a)&&b.push(c)}b.forEach((a)=>window.localStorage.removeItem(a))};(function(a){a.createPresenterViewUI=function(a,e){(a=window.document.getElementById(a))&&A.render(b.createElement(x.PresenterView,
{isDesktop:e}),a)}})(e.PresenterViewUIModule||(e.PresenterViewUIModule={}));return e});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_presenterviewui",["require","react","react-dom","react-transition-group","styled-components","prezi_bacon","prezi_externalserviceprovider","prezi_koi_navigation","prezi_utils"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_presenterviewui.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("react"),require("react-dom"),require("react-transition-group"),require("styled-components"),require("prezi_bacon"),require("prezi_externalserviceprovider"),require("prezi_koi_navigation"),require("prezi_utils"));}else{this["prezi_presenterviewui"]=__factory(React,ReactDOM,ReactTransitionGroup,StyledComponents,this["prezi_bacon"],this["prezi_externalserviceprovider"],this["prezi_koi_navigation"],this["prezi_utils"]);}}).call(this);
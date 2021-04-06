;(function(){var baseUrl;var __factory=function(){var React=arguments[0];var ReactDOM=arguments[1];var ReactTransitionGroup=arguments[2];var StyledComponents=arguments[3];var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-25-g6015dbc";},getModuleName:function(){return "prezi_widgets";},getModuleVersion:function(){return "release-2021w06-base-26-gaeb382e";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi_bacon":dependencies[4],"prezi_featureswitcher":dependencies[5],"prezi_i18n":dependencies[6],"prezi_logger":dependencies[7],"prezi_utils":dependencies[8]}};})(),React,ReactDOM,ReactTransitionGroup,StyledComponents);};})(arguments);var moduleImpl=(function(){return module(function(oa,kh,Hc,lh,mh){function nh(a){switch(a){case "top":return"\n\t\t\t\ttop: 100%;\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translate(-50%, -50%) rotate(-45deg);\n\t\t\t";case "right":return"\n\t\t\t\ttop: 50%;\n\t\t\t\tleft 0;\n\t\t\t\ttransform: translate(-50%, -50%) rotate(-45deg);\n\t\t\t";case "bottom":return"\n\t\t\t\ttop: 0;\n\t\t\t\tleft 50%;\n\t\t\t\ttransform: translate(-50%, -50%) rotate(-45deg);\n\t\t\t";case "left":return"\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 100%;\n\t\t\t\ttransform: translate(-50%, -50%) rotate(-45deg);\n\t\t\t";
default:return""}}function Ja(a){if(null==a)return null;const {top:b,left:g}=a.getBoundingClientRect(),{scrollTop:c,scrollLeft:d}=document.documentElement;return{top:b+c,left:g+d,width:a.offsetWidth,height:a.offsetHeight}}function Ic(){return document.querySelector("[data-lookup='popup-layer']")}function Jc(a,b,g,c,d,q,p,z){return{brWindow:a,anchor:Ja(b),container:Ja(g),pointerAnchor:Ja(q),position:c,alignment:d,popupCorrection:p,pointerCorrection:z}}function pa(a,b){var e=null!=a.popupCorrection?
a.popupCorrection.x:0;b=b?7:0;if("left"===a.position){var c=a.anchor.left-a.container.width+e;e=a.anchor.left+a.anchor.width-e;return 5<c-b?Math.floor(c):e+a.container.width+b<a.brWindow.width-5?Math.floor(e):5}return"right"===a.position?(c=a.anchor.left+a.anchor.width+e,e=a.anchor.left-a.container.width-e,c+a.container.width+b<a.brWindow.width-5?Math.floor(c):5<e-b?Math.floor(e):Math.floor(a.brWindow.width-5-a.container.width)):Math.floor(Math.max(Math.min(("left"===a.alignment?a.anchor.left:"right"===
a.alignment?a.anchor.left+a.anchor.width-a.container.width:a.anchor.left+(a.anchor.width-a.container.width)/2)+e,a.brWindow.width-a.container.width-5),5))}function Kc(a){const b=pa(a,!0);return"top"===a.position||"bottom"===a.position?b:Math.floor(Math.max(Math.min(b<a.anchor.left?b-7:b+7,a.brWindow.width-a.container.width-5),5))}function Lc(a){const b=pa(a),g=null!=a.pointerCorrection?a.pointerCorrection.x:0;return"left"===a.position||"right"===a.position?null:24>a.container.width?null:Math.floor(Math.min(Math.max(a.pointerAnchor.left+
a.pointerAnchor.width/2-b+g,12),a.container.width-7-5))}function oh(a,b,g,c){let e=a;null!=c&&("left"===a&&b>c.left?e="right":"right"===a&&b<c.left?e="left":"top"===a&&g>c.top?e="bottom":"bottom"===a&&g<c.top&&(e="top"));return e}function Ka(a){return null==a?null:{left:a.top,top:a.left,width:a.height,height:a.width}}function ph(a){switch(a){case "left":return"top";case "right":return"bottom";case "top":return"left";case "bottom":return"right";default:return x.Utils.assertNever(a,`Unknown PopupPosition: ${a}`)}}
function Mc(a){return null==a?null:{x:a.y,y:a.x}}function La(a){return{brWindow:Ka(a.brWindow),anchor:Ka(a.anchor),container:Ka(a.container),position:ph(a.position),alignment:a.alignment,pointerAnchor:Ka(a.pointerAnchor),popupCorrection:Mc(a.popupCorrection),pointerCorrection:Mc(a.pointerCorrection)}}function O(a,e,g="Small"){var d;return d=class extends b.PureComponent{render(){return b.createElement(n.Icon,{iconId:a in c.IconSmallId?c.IconSmallId[a]:c.IconMiniId[a],size:c.IconSize[g],className:this.props.className,
color:this.props.color})}},d.displayName=e,d}function Nc(a){return d.css`
		font-family: ${a.fontFamily};
		font-size: ${a.fontSize}px;
		line-height: ${a.lineHeight}px;
		letter-spacing: ${"normal"===a.letterSpacing?a.letterSpacing:a.letterSpacing+"px"};
		${(b)=>{const e=null==b.textColor?"dark":b.textColor;switch(e){case "dark":return b.active?d.css`color: ${"#1e55eb"}`:d.css`color: ${null!=a.darkColor?a.darkColor:"#374050"}`;case "light":return b.active?d.css`color: ${"#3181ff"}`:d.css`color: ${null!=a.lightColor?a.lightColor:"#ffffff"}`;default:throw Error(`invalid color ${e}`);}}};
		${a.capitalize?d.css`text-transform: uppercase`:""};
	`}function Oc(a,b){a=d.default(qh)`
		${a}
	`;a.displayName=b;return a}function H(a){return Oc(Nc(a),a.displayName)}function Pc(a){function e(a){return{success:!1,t:null,lexer:a}}function g(a,b){return{success:!0,t:b,lexer:a}}function c(a){a.map=(b)=>c((e)=>{e=a(e);return Object.assign(Object.assign({},e),{t:e.success?b(e.t):null})});return a}function d(...a){return c((b)=>{for(let e=0;e<a.length;e++){const g=a[e](b);if(g.success)return g}return e(b)})}function q(a){return c((b)=>{let e=[];for(;;){const g=a(b);if(g.success)e.push(g.t),b=
g.lexer;else break}return g(b,e)})}function p(...a){return c((b)=>{let c=[];var d=b;for(let g=0;g<a.length;g++){d=a[g](d);if(!d.success)return e(b);c.push(d.t);d=d.lexer}return g(d,c)})}const z=(a,b=0)=>a.index+b>=a.text.length,f=(a,b)=>z(a,b)?void 0:a.text[a.index+b],k=(a,b=1)=>Object.assign(Object.assign({},a),{index:a.index+b});var m=(a)=>c((b)=>{for(let g=0;g<a.length;g++)if(f(b,g)!==a[g])return e(b);return g(k(b,a.length),a)}),n=c((a)=>{let b="";for(let e=0;!z(a,e);e++){let g=f(a,e);if(-1!==
"()[]".indexOf(g)||"*"===g&&"*"===f(a,e+1))break;else b+=g}return 0<b.length?g(k(a,b.length),b):e(a)}),t=(e)=>e.map((e)=>(g,c)=>b.createElement(c.bold?a.bold:a.normal,{key:g,inline:!0,disabled:c.disabled,textColor:c.textColor,content:e})),r=c((a)=>z(a)?e(a):g(k(a,1),f(a,0)));r=t(r);t=t(n);n=p(m("["),n,m("]"),m("("),n,m(")")).map((a)=>(e,g)=>b.createElement(rh,{key:e,href:a[4],target:"_blank","aria-disabled":g.disabled},b.createElement(h.Link,{inline:!0,disabled:g.disabled,textColor:g.textColor,content:a[1]})));
m=p(m("**"),q(d(t,n)),m("**")).map((a)=>(e,g)=>{const c=Object.assign(Object.assign({},g),{bold:!0});return b.createElement("span",{key:e},a[1].map((a,b)=>a(b,c)))});const u=q(d(t,n,m,r));return class extends b.PureComponent{constructor(){super(...arguments);this.displayName="Paragraph";this.content="";this.contentItems=[]}render(){this.props.content!==this.content&&(this.content=this.props.content,this.contentItems=null!=this.props.content?u({text:this.content,index:0}).t:[]);return b.createElement("div",
{"data-lookup":this.props.dataLookup,className:this.props.className},...this.contentItems.map((a,b)=>a(b,{disabled:this.props.disabled,textColor:this.props.textColor,bold:!1})))}}}function zb(a,b){return Math.round((a-r.KNOB_HALF_WIDTH)/(b-r.KNOB_WIDTH)*100)/100}function Qc(a){switch(a.current){case c.FillKind.solid:return a.solidFill.color;case c.FillKind.linear:return a.linearFill.startColor;case c.FillKind.radial:return a.radialFill.startColor;case c.FillKind.clear:return null;default:throw Error(a.current);
}}function Rc(a){switch(a.current){case c.FillKind.solid:return null;case c.FillKind.linear:return a.linearFill.endColor;case c.FillKind.radial:return a.radialFill.endColor;case c.FillKind.clear:return null;default:throw Error(a.current);}}function Ma(a){return d.css`
		height: ${Ab[a]}px;
		width: ${Ab[a]}px;
	`}function Bb(a){return(0,m.asPx)((0,m.widthFrom)(a))}function qa(a,b){const e=[];null!=b&&e.push(b);e.push(a.isChecked||a.selected?"0 0 0 2px #3181ff":"0 0 0 1px #d3d6da");return`box-shadow:${e.join(",")}`}function sh(a,e,g,c,d,q,p){return null!=e||null!=c?b.createElement(M.ActionWrapper,{itemDataLookup:a,position:q,popupIds:d,parent:F,onMore:g,primaryAction:e,actions:c,stickyActions:p}):null}function Sc(a){if(a.itemLayout===c.ListItemLayout.dynamic)return 3;switch(a.itemSize){case c.ListItemSize.full:return 1;
case c.ListItemSize.large:case c.ListItemSize.small:return 3;default:return x.Utils.assertNever(a.itemSize)}}function Cb(a){return a.itemLayout===c.ListItemLayout.fixed?m.widthFrom(a):m.placeholderHeight(a)}function Tc(a){return Sc(a)*(Cb(a)+2*m.margin)}function Na(a,b,g,c){return`M${a} ${b} h${g} v${c} h-${g} z `}function th(a){switch(a){case c.ListColumnLayout.normal:return w.sidebarWidth;case c.ListColumnLayout.double:return D.MediumDialogWidth;case c.ListColumnLayout.triple:return D.ExtraLargeDialogWidth;
default:return x.Utils.assertNever(a)}}function fa(a,b){for(const e of a.getElements)a=e(),null!=a&&b(a)}function uh(a){setTimeout(()=>a(),0)}function Uc(a,b){return new Promise((e)=>{const g=b.parentElement,c=a.getBoundingClientRect(),d=g.getBoundingClientRect(),p=c.top<d.top?c.top-d.top:c.bottom>d.bottom?c.bottom-d.bottom:0;if(0===p)e();else{var z=performance.now(),h=z+700,k=g.scrollTop,m=(a)=>{a>h?(g.scrollTop=k+p,e()):(a=(a-z)/700,g.scrollTop=k+p*(.5>a?4*a*a*a:1-Math.pow(-2*a+2,3)/2),requestAnimationFrame(m));
g.dispatchEvent(new Event(f.scrollIntoAnimateEvent))};requestAnimationFrame(m)}})}var Vc=null,Oa=oa.dependencies.prezi_featureswitcher,Wc=oa.dependencies.prezi_logger,vh=oa.dependencies.prezi_utils,wh=oa.dependencies.prezi_bacon,b=kh,d=mh,I=oa.dependencies.prezi_i18n,Db={};Object.defineProperty(Db,"__esModule",{value:!0});Db.WaveForm=class extends b.Component{constructor(a){super(a);this.state={canvasElement:null}}initialize(){var a=this.props.width*(this.props.zoom||1);const b=this.props.height,
g=this.props.buffer.getChannelData(0),c=Math.ceil(g.length/a),d=this.canvas.getContext("2d");a=this.getPoints(a,c,b,g);this.draw(d,a);if(this.props.onDone)this.props.onDone()}componentDidMount(){this.initialize()}componentDidUpdate(){this.initialize()}draw(a,b){a.clearRect(0,0,this.canvas.width,this.canvas.height);a.beginPath();a.moveTo(b[0].x,b[0].y);for(let e=1;e<b.length-2;e++)a.quadraticCurveTo(b[e].x,b[e].y,(b[e].x+b[e+1].x)/2,(b[e].y+b[e+1].y)/2);a.quadraticCurveTo(b[b.length-2].x,b[b.length-
2].y,b[b.length-1].x,b[b.length-1].y);a.closePath();a.fillStyle=this.props.color;a.fill()}getPoints(a,b,c,d){const e=[{x:0,y:c}];for(let g=0;g<a;g+=2){let a=1,v=-1;for(let e=0;e<b;e+=1){const c=d[g*b+e];c<a?a=c:c>v&&(v=c)}e.push({x:g,y:c-(v-a)*c/1.9-1})}e.push({x:a,y:c});return e}render(){return b.createElement("canvas",{ref:(a)=>{this.canvas=a},width:this.props.width*(this.props.zoom||1),height:this.props.height})}};var x=vh,N={},xh=this&&N.__awaiter||function(a,b,c,d){function e(a){return a instanceof
c?a:new c(function(b){b(a)})}return new (c||(c=Promise))(function(c,g){function v(a){try{q(d.next(a))}catch(yb){g(yb)}}function l(a){try{q(d["throw"](a))}catch(yb){g(yb)}}function q(a){a.done?c(a.value):e(a.value).then(v,l)}q((d=d.apply(a,b||[])).next())})};Object.defineProperty(N,"__esModule",{value:!0});N.SvgRepo=class{constructor(a){this.keyToSvgMap=a;this.keyToUrlMap={}}getSize(a){a=this.keyToSvgMap[a];return null==a?null:{width:a.width,height:a.height}}getUrl(a,b,c,d){const e=a+(null==d?"":d);
var g=this.keyToUrlMap[e];if(null==g){a=this.keyToSvgMap[a];if(null==a)return null;g=a.svg;null!=d&&(b=b(d),d=x.Utils.generateUUID(),g=`<svg filter="url(#${d})"
							width="${a.width}"
							height="${a.width}"
							viewBox="${a.viewBox}"
							opacity="${b.a}"
							xmlns="http://www.w3.org/2000/svg"
						>
							<filter id="${d}">
								<feFlood flood-color="${c({r:b.r,g:b.g,b:b.b,a:1})}" result="flood"/>
								<feComposite in="flood" in2="SourceAlpha" operator="in" result="flood_alpha"/>
								<feBlend mode="normal" in="flood_alpha" in2="SourceGraphic"/>
							</filter>
							${g}
						</svg>`);g=x.Utils.svgToUrl(g);this.keyToUrlMap[e]=g}return g}};N.svgRepo=null;N.svgRepoPromise=fetch(oa.getResourceUrl("svgComponents.json")).then((a)=>xh(void 0,void 0,void 0,function*(){N.svgRepo=new N.SvgRepo(yield a.json());return N.svgRepo})).catch((a)=>{Wc.LoggerModule.logException(Wc.LoggerModule.getLoggerManager().createLogger("svgRepoPromise"),"svgRepoPromise","svgRepoPromise",a);return null});var f={noop:function(){},addHash:function(a){return a&&`${"#"===a[0]?"":"#"}${a}`},trimHash:function(a){return a&&
("#"===a[0]?a.substr(1):a)},alphaColor:function(a,b){return(0,f.toCssColor)(Object.assign(Object.assign({},(0,f.parseColorData)(a)),{a:b}))},parseColorData:function(a){let b=a.match(/^#([0-9a-f]{3})$/i);return b?{r:17*parseInt(b[1].charAt(0),16),g:17*parseInt(b[1].charAt(1),16),b:17*parseInt(b[1].charAt(2),16),a:1}:(b=a.match(/^#([0-9a-f]{6})$/i))?{r:parseInt(b[1].substr(0,2),16),g:parseInt(b[1].substr(2,2),16),b:parseInt(b[1].substr(4,2),16),a:1}:(b=a.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d\.]+)\s*\)$/i))?
{r:parseInt(b[1],10),g:parseInt(b[2],10),b:parseInt(b[3],10),a:parseFloat(b[4])}:null},toCssColorIgnoreAlpha:function(a){const b=(a)=>("0"+Math.round(Number(a)).toString(16)).slice(-2).toUpperCase();return`#${b(a.r)}${b(a.g)}${b(a.b)}`},toCssColor:function(a){return 1===a.a?(0,f.toCssColorIgnoreAlpha)(a):`rgba(${a.r}, ${a.g}, ${a.b}, ${a.a})`},isColorValid:function(a){return null!=a&&(a.r&255)===a.r&&0<=a.r&&255>=a.r&&(a.g&255)===a.g&&0<=a.g&&255>=a.g&&(a.b&255)===a.b&&0<=a.b&&255>=a.b&&0<=a.a&&1>=
a.a},isColorLight:function(a){return 200<a.r&&200<a.g&&200<a.b},getColumnCount:function(a,b){switch(a){case c.ListItemSize.small:return 3*(0,f.getLayoutCount)(b);case c.ListItemSize.large:return 2*(0,f.getLayoutCount)(b);case c.ListItemSize.full:return 1*(0,f.getLayoutCount)(b);default:return x.Utils.assertNever(a)}},getLayoutCount:function(a){switch(a){case c.ListColumnLayout.triple:return 3;case c.ListColumnLayout.double:return 2;case c.ListColumnLayout.normal:return 1;default:return x.Utils.assertNever(a)}}};
Object.defineProperty(f,"__esModule",{value:!0});f.scrollIntoAnimateEvent="scrollIntoAnimateEvent";const Eb=(0,f.alphaColor)("#051225",.32),Fb=(0,f.alphaColor)("#051225",.24),Gb=d.css`rgba(0, 0, 0, 0.08)`;f.disabledOpacity=.4;f.BoxShadow={small:`
		0 1px 4px 0 ${Eb},
		0 0 8px -2px ${Fb},
		0 0 0 1px ${Gb}
	`,medium:`
		0 8px 24px 0 ${Eb},
		0 2px 4px -2px ${Fb},
		0 0 0 1px ${Gb}
	`,large:`
		0 16px 48px 0 ${Eb},
		0 8px 16px -4px ${Fb},
		0 0 0 1px ${Gb}
	`};f.onClickWrapper=function(a){return(b)=>{var e=b.detail;if(null==e||1===e)e=a(),null!=e&&e(b);b.stopPropagation()}};f.getArrowType=function(a){switch(a){case "bottom":case "top":return"dropdown";case "left":case "right":return"menu";default:return x.Utils.assertNever(a)}};var aa={};Object.defineProperty(aa,"__esModule",{value:!0});aa.horizontalMargin=20;const Xc=d.default.div`
	display: flex;
	justify-content: ${(a)=>a.justifyContent||"flex-start"};
	align-items: ${(a)=>a.alignItems||"stretch"};
	padding: 0 ${(a)=>a.noMargin?0:aa.horizontalMargin}px;
	flex-wrap: ${(a)=>a.flexWrap||"nowrap"};
	flex-shrink: 0;

	${(a)=>a.width?d.css`width: ${a.width===c.DialogItemCellWidth.single?272:a.width===c.DialogItemCellWidth.double?528:774}px;`:""}
	${(a)=>a.vertical?d.css`flex-direction: column;`:""}
	${(a)=>a.dynamic?d.css`flex-basis: auto; flex-shrink: 1; flex-grow: 1;`:""}
`;Xc.displayName="ItemContainerDiv";aa.ItemContainer=class extends b.PureComponent{render(){return b.createElement(Xc,{"data-widget":this.props.dataWidget,vertical:this.props.kind!==c.ItemContainerKind.horizontal,dynamic:this.props.kind===c.ItemContainerKind.verticalDynamic,justifyContent:this.props.justifyContent,alignItems:this.props.alignItems,flexWrap:this.props.flexWrap,noMargin:this.props.noMargin,width:this.props.width},this.props.children)}};aa.ItemContainer.displayName="ItemContainer";var J=
{};Object.defineProperty(J,"__esModule",{value:!0});J.Observer=class extends b.PureComponent{constructor(){super(...arguments);this.divRef=b.createRef()}constructThreshold(){if(null==this.props.thresholdPercentage||100<this.props.thresholdPercentage||0>=this.props.thresholdPercentage)return[0];if(this.props.recurringThreshold){let a=[0];for(let b=this.props.thresholdPercentage;100>b;b+=this.props.thresholdPercentage)a.push(.01*b);a.push(1);return a}return[.01*this.props.thresholdPercentage]}startObserver(){var a;
this.killObserver();null!=this.props.onIntersect&&null!=this.divRef.current&&(this.observer=new IntersectionObserver((a)=>{this.props.onIntersect(a[0].isIntersecting)},{threshold:this.constructThreshold(),root:null!==(a=this.props.root)&&void 0!==a?a:null}),this.observer.observe(this.divRef.current))}killObserver(){null!=this.observer&&this.observer.disconnect()}componentDidMount(){this.startObserver()}componentDidUpdate(){this.startObserver()}componentWillUnmount(){this.killObserver()}render(){return this.props.item(this.divRef)}};
J.Observer.displayName="Observer";var t={};Object.defineProperty(t,"__esModule",{value:!0});const Yc=d.default.div`
	background: inherit;
	box-shadow: 0 1px 3px rgba(21, 34, 53, 0.5);
	height: ${10}px;
	position: absolute;
	width: ${10}px;
	z-index: ${3E3};

	${({position:a})=>nh(a)}
`;Yc.displayName="Pointer";const Hb=d.default.div`
	background: inherit;
	position: relative;
	border-radius: 4px;
	z-index: ${3020};
	max-height: ${(a)=>`${a.height}px`};
	overflow-y: auto;
	overflow-x: hidden;
`;Hb.displayName="Content";const Zc=d.default.div`
	left: ${(a)=>`${a.left}px`};
	top: ${(a)=>`${a.top}px`};
	visibility: ${(a)=>a.visible?"visible":"hidden"};
	border-radius: 4px;
`,yh=d.default(Zc)`
	width: ${(a)=>`${a.width}px`};
`;class $c extends b.PureComponent{constructor(){super(...arguments);this.setContainerRef=(a)=>this.containerRef=a}setOriginalParent(){const a=Ic();a!==this.containerRef.parentElement&&(this.originalParent=this.containerRef.parentElement,a.appendChild(this.containerRef))}adjustPositionI(){var a;const {anchor:b}=this.props;if(null==window||null==document||null==Ic()||null==this.containerRef||null==b&&null==this.anchor&&null==this.containerRef.parentElement)return!1;this.browserWindow={left:0,top:0,
width:window.innerWidth,height:window.innerHeight};this.anchor=null!==(a=null!==b&&void 0!==b?b:this.anchor)&&void 0!==a?a:this.containerRef.parentElement;this.setOriginalParent();return!0}componentDidMount(){this.adjustPosition()}componentDidUpdate(a){const {anchor:b,pointerAnchor:c}=this.props;a.anchor===b&&a.pointerAnchor===c||this.adjustPosition()}componentWillUnmount(){null!=this.originalParent&&null!=this.containerRef&&this.originalParent.appendChild(this.containerRef)}sendMessage(){Promise.resolve().then(c.PopupAdjustedStream.sendMsg)}}
t.DropdownPopup=class extends $c{constructor(){super(...arguments);this.state={left:0,top:0,width:0,visible:!1};this.adjustPosition=()=>{if(this.adjustPositionI()){var {offsetWidth:a}=this.anchor,b=Jc(this.browserWindow,this.anchor,this.containerRef,"bottom","left",null,{x:4,y:-4},null);this.setState({left:pa(b),top:pa(La(b)),width:a-8,visible:!0})}}}render(){const {id:a,className:e}=this.props,{left:c,top:d,visible:l,width:q}=this.state,p=null!=window?window.innerHeight:1E3,f=null!=this.containerRef?
this.containerRef.getBoundingClientRect().width:100,h=null!=this.containerRef?this.containerRef.getBoundingClientRect().height:100;this.sendMessage();return b.createElement(yh,{left:c,top:d,visible:l,width:q,className:e,ref:this.setContainerRef,"data-lookup":a,"data-popup":"true"},b.createElement(Hb,{height:window.innerHeight-10},this.props.children),b.createElement(J.Observer,{onIntersect:this.adjustPosition,item:(a)=>b.createElement("div",{ref:a,style:{pointerEvents:"none",position:"absolute",top:`${-p}px`,
width:`${f}px`,height:`${p}px`}}),thresholdPercentage:1,recurringThreshold:!0}),b.createElement(J.Observer,{onIntersect:this.adjustPosition,item:(a)=>b.createElement("div",{ref:a,style:{pointerEvents:"none",position:"absolute",top:`${h}px`,width:`${f}px`,height:`${p}px`}}),thresholdPercentage:1,recurringThreshold:!0}))}};t.DropdownPopup.displayName="DropdownPopup";t.StyledDropdownPopup=d.default(t.DropdownPopup)`
	background: ${"#ffffff"};
	border-radius: 4px;
	box-shadow: 0 1px 3px rgba(21, 34, 53, 0.5);
	position: absolute;
	overflow: hidden;
	z-index: ${3010};
`;t.StyledDropdownPopup.displayName="StyledDropdownPopup";t.ContentWrapper=d.default.div`
	position: relative;
	background: inherit;
	border-radius: 4px
`;t.Popup=class extends $c{constructor(){super(...arguments);this.state={left:0,top:0,brWindowHeight:0,pointerLeft:0,pointerTop:0,visible:!1};this.comparePositions=(a,b)=>1<Math.abs(a-b)?b:a;this.adjustPosition=()=>{if(this.adjustPositionI()){var {pointerAnchor:a,position:b,popupCorrection:c,pointerCorrection:d}=this.props,l=null!=this.props.alignment?this.props.alignment:"center";this.pointerAnchor=a||this.pointerAnchor||this.anchor;a=Jc(this.browserWindow,this.anchor,this.containerRef,b,l,this.pointerAnchor,
c,d);this.props.hidePointer?this.setState({left:this.comparePositions(this.state.left,pa(a)),top:this.comparePositions(this.state.left,pa(La(a))),brWindowHeight:a.container.height,visible:!0}):this.setState({left:this.comparePositions(this.state.left,Kc(a)),top:this.comparePositions(this.state.top,Kc(La(a))),pointerLeft:Lc(a),pointerTop:Lc(La(a)),brWindowHeight:a.brWindow.height,visible:!0})}}}render(){const {id:a,className:e,position:c}=this.props,{left:d,top:l,pointerLeft:q,pointerTop:p,visible:f}=
this.state,h={position:oh(c,d,l,Ja(this.anchor))},k=null!=window?window.innerWidth:2E3,m=null!=window?window.innerHeight:1E3,n=null!=this.containerRef?this.containerRef.getBoundingClientRect().width:100,r=null!=this.containerRef?this.containerRef.getBoundingClientRect().height:100,u=window.innerHeight-10,w=("top"===c||"bottom"===c)&&r>=u||this.props.hidePointer;this.sendMessage();return b.createElement(Zc,{left:d,top:l,visible:f,className:e,ref:this.setContainerRef,"data-lookup":a,"data-popup":"true"},
b.createElement(t.ContentWrapper,null,!w&&b.createElement(Yc,Object.assign({},h,{style:{left:q,top:p}})),b.createElement(Hb,{"data-lookup":"content",height:u},this.props.children),b.createElement(J.Observer,{onIntersect:this.adjustPosition,item:(a)=>b.createElement("div",{ref:a,style:{pointerEvents:"none",position:"absolute",top:`${-m}px`,width:`${n}px`,height:`${m}px`}}),thresholdPercentage:1,recurringThreshold:!0}),b.createElement(J.Observer,{onIntersect:this.adjustPosition,item:(a)=>b.createElement("div",
{ref:a,style:{pointerEvents:"none",position:"absolute",top:"0px",left:`${n}px`,width:`${k}px`,height:`${r}px`}}),thresholdPercentage:1,recurringThreshold:!0}),b.createElement(J.Observer,{onIntersect:this.adjustPosition,item:(a)=>b.createElement("div",{ref:a,style:{pointerEvents:"none",position:"absolute",top:`${r}px`,width:`${n}px`,height:`${m}px`}}),thresholdPercentage:1,recurringThreshold:!0}),b.createElement(J.Observer,{onIntersect:this.adjustPosition,item:(a)=>b.createElement("div",{ref:a,style:{pointerEvents:"none",
position:"absolute",top:"0px",left:`${-k}px`,width:`${k}px`,height:`${r}px`}}),thresholdPercentage:1,recurringThreshold:!0})))}};t.Popup.displayName="Popup";t.StyledPopup=d.default(t.Popup)`
	background: ${"#ffffff"};
	border-radius: 4px;
	box-shadow: 0 1px 3px rgba(21, 34, 53, 0.5);
	position: absolute;
	z-index: ${3010};
`;t.StyledPopup.displayName="StyledPopup";t.FixedWidthStyledPopup=d.default(t.StyledPopup)`
	width: ${272}px;
	display: flex;
	flex-direction: column;
`;t.PopupContentWrapper=d.default.div`
	display: flex;
	flex-direction: column;
	padding-top: ${(a)=>a.hasHeader?"0px":"16px"};
	padding-bottom: ${(a)=>a.hasFooter?"0px":"16px"};
	${(a)=>a.height===c.PopupHeight.Short?"max-height: 300px; overflow-x: hidden; overflow-y: auto;":""}
`;const ad=d.default.div`
	padding-top: 8px;
`;ad.displayName="EmptyPopupHeader";const bd=d.default.div`
	padding-bottom: 8px;
`;bd.displayName="EmptyPopupFooter";const cd=d.default.div`
	padding: 8px 0 8px 0;
	border-bottom: 1px solid ${"#dfe1e4"};
`;cd.displayName="StyledPopupHeader";const dd=d.default.div`
	padding: 8px 0 8px 0;
	border-top: 1px solid ${"#dfe1e4"};
`;dd.displayName="StyledPopupFooter";t.PopupHeader=class extends b.PureComponent{render(){return null==this.props.children?b.createElement(ad,null):b.createElement(cd,null,this.props.children)}};t.PopupHeader.displayName="PopupHeader";t.PopupFooter=class extends b.PureComponent{render(){return null==this.props.children?b.createElement(bd,null):b.createElement(dd,null,this.props.children)}};t.PopupFooter.displayName="PopupFooter";t.PopupHeaderWithText=class extends b.PureComponent{render(){return b.createElement(t.PopupHeader,
null,null==this.props.content?null:b.createElement(aa.ItemContainer,{kind:c.ItemContainerKind.horizontal,dataWidget:c.DataWidget.PopupHeader},b.createElement(c.SidebarSectionHeader,{content:this.props.content})))}};t.PopupHeaderWithText.displayName="PopupHeaderWithText";t.default=t.StyledPopup;var A={},zh=this&&A.__rest||function(a,b){var e={},c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&0>b.indexOf(c)&&(e[c]=a[c]);if(null!=a&&"function"===typeof Object.getOwnPropertySymbols){var d=0;for(c=
Object.getOwnPropertySymbols(a);d<c.length;d++)0>b.indexOf(c[d])&&Object.prototype.propertyIsEnumerable.call(a,c[d])&&(e[c[d]]=a[c[d]])}return e};Object.defineProperty(A,"__esModule",{value:!0});const ed=d.default(t.default)`
	background: ${"#051225"};
	opacity: .8;
`;ed.displayName="Tooltip";A.TooltipContainer=d.default.div`
	display: flex;
	flex-direction: column;

	${(a)=>a.fitParent?d.css`
		overflow: hidden;
		flex-grow: 1;
		width: 100%;
		height: 100%;
	`:""};
`;A.TooltipContainer.displayName="TooltipContanier";const fd=d.default.div`
	color: ${"#ffffff"};
	font-family: RalewayMedium;
	font-size: 11px;
	letter-spacing: 0.5px;
	padding: 4px 8px;
	white-space: nowrap;
`;fd.displayName="TooltipText";A.tooltip=(a)=>{const e=class extends b.PureComponent{constructor(){super(...arguments);this.state={visible:!1};this.setWrappedComponentRef=(a)=>this.wrappedComponentRef=Hc.findDOMNode(a);this.show=()=>{this.setState({visible:!0})};this.hide=()=>{this.setState({visible:!1})}}render(){var e=this.props;const {hide:c,tooltipText:d,tooltipPosition:q}=e;e=zh(e,["hide","tooltipText","tooltipPosition"]);const {visible:p}=this.state;return b.createElement(A.TooltipContainer,
{onMouseEnter:this.show,onMouseLeave:this.hide,fitParent:this.props.fitParent},b.createElement(a,Object.assign({},e,{ref:this.setWrappedComponentRef})),null!=d&&!c&&p&&b.createElement(ed,{id:"tooltip",position:q||"bottom",anchor:this.wrappedComponentRef},b.createElement(fd,{onMouseEnter:this.hide},d)))}};e.displayName=`${a.displayName||a.name||"Component"}WithTooltip`;return e};var n={};Object.defineProperty(n,"__esModule",{value:!0});const Ah=d.default.img`
	width: ${(a)=>a.imgSize.width}px;
	height: ${(a)=>a.imgSize.height}px;
	top: ${(a)=>a.hasColorBar?"-1px":void 0};
`;n.ColoredBar=d.default.div`
	border: 1px solid ${f.alphaColor("#000000",.4)};
	border-radius: 2px;
	background: ${(a)=>f.isColorValid(a.startColor)&&f.isColorValid(a.endColor)?`linear-gradient(to right, ${f.toCssColor(a.startColor)}, ${f.toCssColor(a.endColor)})`:"transparent"};
	height: 4px;
	width: ${(a)=>a.size};
	position: relative;
	top: -3px;

`;n.ColoredBar.displayName="ColoredBar";n.Icon=class extends b.PureComponent{constructor(a){super(a);this.state={svgRepo:N.svgRepo};null==this.state.svgRepo&&N.svgRepoPromise.then((a)=>this.setState({svgRepo:a}))}render(){const a=this.state.svgRepo&&this.state.svgRepo.getSize(this.props.iconId),e=this.state.svgRepo&&this.state.svgRepo.getUrl(this.props.iconId,f.parseColorData,f.toCssColor,this.props.color);let g,d;if(this.props.fills)switch(this.props.fills.current){case c.FillKind.radial:g=this.props.fills.radialFill.startColor;
d=this.props.fills.radialFill.endColor;break;case c.FillKind.linear:g=this.props.fills.linearFill.startColor;d=this.props.fills.linearFill.endColor;break;case c.FillKind.clear:g={r:0,g:0,b:0,a:0};d={r:0,g:0,b:0,a:0};break;case c.FillKind.solid:d=g=this.props.fills.solidFill.color;break;default:throw x.Utils.assertNever(this.props.fills.current);}return b.createElement("div",{className:this.props.className},null!=a&&null!=e&&b.createElement(Ah,{imgSize:a,src:e,"data-lookup":this.props.dataLookup,hasColorBar:!!this.props.fills}),
g&&d&&b.createElement(n.ColoredBar,{size:a.width,startColor:g,endColor:d}))}};n.Icon.displayName="Icon";n.IconWithTooltip=A.tooltip(n.Icon);n.IconWithTooltip.displayName="IconWithTooltip";n.ArrowLineLeftIcon=O("ArrowLineLeft","ArrowLineLeftIcon");n.ArrowLineRightIcon=O("ArrowLineRight","ArrowLineRightIcon");n.ChevronDownIcon=O("ChevronDown","ChevronDownIcon");n.CrossIcon=O("Close","CrossIcon");n.CalloutCloseIcon=O("CloseMini","CalloutCloseIcon");n.DropDownIcon=O("Dropdown","DropDownIcon");n.MenuIcon=
O("Menu","MenuIcon");n.CheckmarkIcon=O("Check","CheckmarkIcon");n.CheckmarkMiniIcon=O("CheckMini","CheckmarkMiniIcon");n.WarningIcon=O("Warning","WarningIcon");n.InfoWithCircleIcon=O("InfoWithCircle","InfoWithCircleIcon");var M={};Object.defineProperty(M,"__esModule",{value:!0});const gd=d.default.div`
	position: absolute;
	display: flex;
	flex-direction: row;
	align-items: ${(a)=>a.position===c.ActionWrapperPosition.top?"flex-start":"flex-end"};
	flex-grow: 1;
	height: 100%;
	width: 100%;
`;gd.displayName="ActionWrapperOuterDiv";const hd=d.default.div`
	visibility: ${(a)=>a.visible?"visible":"hidden"};
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	flex-grow: 1;
	padding: 8px;

	${(a)=>a.parent}:hover & {
		visibility: visible;
	}
`;hd.displayName="ActionWrapperInnerDiv";const id=d.default(n.Icon)`
	cursor: default;
	background: ${(a)=>a.disabled?f.alphaColor("#051225",.4):f.alphaColor("#051225",.8)};
	border-radius: 4px;

	${(a)=>a.disabled?"":d.css`
		&:hover {
			background: ${a.backgroundColor?f.alphaColor("#dfab29",.8):f.alphaColor("#1e55eb",.8)};
			box-shadow:inset 0 0 0 1px ${"#ffffff"};
		}`};
`;id.displayName="IconImg";M.IconButton=class extends b.PureComponent{constructor(){super(...arguments);this.displayName="IconButton";this.onMouseDown=(a)=>{a.stopPropagation();a.preventDefault()}}render(){return b.createElement("div",{"data-lookup":this.props.id,onClick:this.props.onClick,"data-popup-opener":!0===this.props.popupOpener,onMouseDown:this.onMouseDown},b.createElement(id,{iconId:this.props.iconId,size:c.IconSize.Small,color:"#ffffff",backgroundColor:this.props.iconId===c.IconSmallId.Lock?
"#dfab29":null,disabled:this.props.disabled}))}};M.IconButtonWithTooltip=A.tooltip(M.IconButton);const Bh=d.default.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;M.ActionWrapper=class extends b.PureComponent{constructor(){super(...arguments);this.onMore=()=>{this.props.onMore(this.getPopupId())};this.handleContextMenu=(a)=>{null!=this.props.onMore&&(a.preventDefault(),this.props.onMore(this.getPopupId()))}}getPopupId(){return`${this.props.itemDataLookup}-popup`}render(){var a;const e=-1!==this.props.popupIds.indexOf(this.getPopupId()),g=null===(a=this.props.actions)||void 0===a?void 0:a[0];return b.createElement(gd,{onContextMenu:this.handleContextMenu,
position:this.props.position},b.createElement(hd,{parent:this.props.parent,visible:this.props.stickyActions||e},null==this.props.primaryAction?null:b.createElement(M.IconButtonWithTooltip,{onClick:f.onClickWrapper(()=>this.props.primaryAction.onClick),id:`${this.props.itemDataLookup}-${this.props.primaryAction.id}`,iconId:this.props.primaryAction.icon,tooltipText:this.props.primaryAction.title}),b.createElement(Bh,null),null==this.props.actions?null:1!==this.props.actions.length||g===c.DropdownMenuSeparatorConst||
"content"in g?null:b.createElement(M.IconButtonWithTooltip,{id:`${this.props.itemDataLookup}-${g.id}`,iconId:g.icon,onClick:f.onClickWrapper(()=>(a)=>g.onClick(a)),tooltipText:g.title,disabled:!g.enabled}),null==this.props.actions?null:1<this.props.actions.length?b.createElement(c.MenuOpener,{id:this.props.itemDataLookup,popupIds:this.props.popupIds,parentIds:[this.props.parent],popupPosition:"bottom",hidePopupPointer:!0,alignment:"right",sidebarItem:b.createElement(M.IconButtonWithTooltip,{id:`${this.props.itemDataLookup}-more`,
iconId:c.IconSmallId.MoreHorizontal,onClick:f.onClickWrapper(()=>this.onMore),tooltipText:I.I18n.ts("Click for more actions"),popupOpener:!0}),actions:this.props.actions}):null))}};M.ActionWrapper.displayName="ActionWrapper";var ha={};Object.defineProperty(ha,"__esModule",{value:!0});ha.AudioWrapper=d.default.div`
	display: flex;
	flex-direction: column;
	position: relative;
	margin: 0 4px;
`;ha.AudioWrapper.displayName="AudioWrapper";const jd=d.default.div`
	display: flex;
	flex-direction: column;
	border: ${"#b1b8be"} solid 1px;
	border-radius: 4px;
	background-color: ${"#bbe8ff"} ;
	overflow: hidden;
	box-sizing: border-box;
`;jd.displayName="WaveFormWrapper";const kd=d.default.div.attrs((a)=>({style:{width:224*a.ratio+"px"}}))`
  position: absolute;
  height: 40px;
  opacity: 0%;
  backdrop-filter: brightness(0.85) saturate(300%);
  ${(a)=>0<a.ratio&&1>a.ratio?d.css`
	opacity: 100%;
	transition: width 0.1s linear;
  `:1===a.ratio?d.css`
	transition: width 0.1s linear, opacity 0.5s ease-out;
	transition-delay: 0s, 0.3s;
  `:""};
 `;kd.displayName="Seeker";ha.Audio=class extends b.PureComponent{constructor(a){super(a);this.initializePlayer=()=>{this.props.audioPlayer.initialize(this.props.audioBuffer,(a)=>{null!=this.props.audioBuffer&&(this.state.dragging||this.setState({isPlaying:a!==this.props.audioBuffer.duration,ratioPlayed:a/this.props.audioBuffer.duration}))},()=>{this.setState({isPlaying:!1})})};this.playOnClick=()=>{this.state.isPlaying?this.props.audioPlayer.pause(this.props.audioBuffer):(this.initializePlayer(),
this.props.audioPlayer.seek(this.props.audioBuffer,1===this.state.ratioPlayed?0:this.props.audioBuffer.duration*this.state.ratioPlayed),this.props.audioPlayer.play(this.props.audioBuffer));1===this.state.ratioPlayed?this.setState({ratioPlayed:0,isPlaying:!this.state.isPlaying}):this.setState({isPlaying:!this.state.isPlaying})};this.setContainerRef=(a)=>{this.containerRef=a};this.onStopDragging=(a)=>{this.draggingCallback(a,!1);this.setState({dragging:!1});window.removeEventListener("mouseup",this.onStopDragging);
window.removeEventListener("mousemove",this.onDragging);null!=this.props.audioBuffer&&this.props.audioPlayer.seek(this.props.audioBuffer,this.props.audioBuffer.duration*this.state.ratioPlayed)};this.onDragging=(a)=>{this.draggingCallback(a,!0)};this.draggingCallback=({clientX:a})=>{if(null!=this.containerRef&&this.state.dragging){var b=this.containerRef.getBoundingClientRect().left+document.body.scrollLeft;this.setState({ratioPlayed:Math.max(0,Math.min(224,a-b))/224})}};this.onMouseDown=()=>{this.setState({dragging:!0});
window.addEventListener("mouseup",this.onStopDragging);window.addEventListener("mousemove",this.onDragging)};this.state={isPlaying:!1,ratioPlayed:0,dragging:!1}}componentWillUnmount(){this.props.audioPlayer.stop(this.props.audioBuffer);window.removeEventListener("mouseup",this.onStopDragging);window.removeEventListener("mousemove",this.onDragging)}componentDidUpdate(a){a.audioBuffer!==this.props.audioBuffer&&this.setState({ratioPlayed:0})}render(){const a={id:this.state.isPlaying?"stop":"play",onClick:()=>
this.playOnClick(),icon:this.state.isPlaying?c.IconSmallId.Pause:c.IconSmallId.Play,enabled:!0,title:this.state.isPlaying?I.I18n.ts("Pause"):I.I18n.ts("Play")};return b.createElement(ha.AudioWrapper,{"data-lookup":this.props.id,onMouseDown:this.onMouseDown,ref:this.setContainerRef},b.createElement(kd,{ratio:this.state.ratioPlayed}),b.createElement(jd,null,b.createElement(Db.WaveForm,{buffer:this.props.audioBuffer,width:222,height:38,color:"#82c8ff"})),b.createElement(M.ActionWrapper,{itemDataLookup:`${this.props.id}-actionWrapper`,
position:c.ActionWrapperPosition.top,popupIds:this.props.popupIds,parent:ha.AudioWrapper,onMore:this.props.onMore,primaryAction:a,actions:this.props.actions,stickyActions:!1}))}};var h={};Object.defineProperty(h,"__esModule",{value:!0});const rh=d.default.a`
	text-decoration: none;
`;class ld extends b.PureComponent{render(){return b.createElement("div",{"data-lookup":this.props.dataLookup,className:this.props.className},this.props.content)}}ld.displayName="Label";const qh=d.default(ld)`
	font-weight: normal;
	font-style: normal;
	font-stretch: normal;
	opacity: ${({disabled:a})=>a?f.disabledOpacity:1};
	${(a)=>a.inline?d.css`display: inline`:""};
`;h.Headline1=H({displayName:"Headline1",fontFamily:"RalewayRegular",fontSize:60,lineHeight:72,letterSpacing:-.5});h.Headline2=H({displayName:"Headline2",fontFamily:"RalewayRegular",fontSize:48,lineHeight:56,letterSpacing:"normal"});h.Headline3=H({displayName:"Headline3",fontFamily:"RalewaySemiBold",fontSize:34,lineHeight:40,letterSpacing:"normal"});h.Headline4=H({displayName:"Headline4",fontFamily:"RalewaySemiBold",fontSize:24,lineHeight:32,letterSpacing:.25});h.Title=H({displayName:"Title",fontFamily:"RalewayBold",
fontSize:24,lineHeight:32,letterSpacing:0,darkColor:"#374050",lightColor:"#ffffff"});h.Subtitle=H({displayName:"Subtitle",fontFamily:"RalewaySemiBold",fontSize:20,lineHeight:24,letterSpacing:.25});h.Body1=H({displayName:"Body1",fontFamily:"RalewayMedium",fontSize:16,lineHeight:24,letterSpacing:.5});h.Body1Alt=H({displayName:"Body1Alt",fontFamily:"RalewayBold",fontSize:16,lineHeight:24,letterSpacing:.5});h.body2Css=Nc({fontFamily:"RalewayMedium",fontSize:14,lineHeight:20,letterSpacing:.25});h.Body2=
Oc(h.body2Css,"Body2");h.Body2Alt=H({displayName:"Body2Alt",fontFamily:"RalewayBold",fontSize:14,lineHeight:20,letterSpacing:.25});h.Body2AltCaps=d.default(h.Body2Alt)`
	text-transform: uppercase;
`;h.Link=H({displayName:"Link",fontFamily:"RalewayMedium",fontSize:14,lineHeight:20,letterSpacing:.25,darkColor:"#1e55eb",lightColor:"#3181ff"});h.Caption=H({displayName:"Caption",fontFamily:"RalewaySemiBold",fontSize:12,lineHeight:16,letterSpacing:.5});h.CaptionError=H({displayName:"CaptionError",fontFamily:"RalewaySemiBold",fontSize:12,lineHeight:16,letterSpacing:.5,darkColor:"#c8002d",lightColor:"#fa375a"});h.Overline=H({displayName:"Overline",fontFamily:"RalewayBold",fontSize:12,lineHeight:16,
letterSpacing:.5,capitalize:!0});h.ButtonLarge=H({displayName:"ButtonLarge",fontFamily:"RalewaySemiBold",fontSize:14,lineHeight:24,letterSpacing:"normal"});h.ButtonSmall=H({displayName:"ButtonSmall",fontFamily:"RalewayBold",fontSize:12,lineHeight:16,letterSpacing:"normal"});h.Body1Paragraph=Pc({normal:h.Body1,bold:h.Body1Alt});h.Body2Paragraph=Pc({normal:h.Body2,bold:h.Body2Alt});var Ib={getSvg:function(a){switch(a){case "Insert":return"url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzgyQzhGRiIgZD0iTTEwIDhWNWExIDEgMCAxIDAtMiAwdjNINWExIDEgMCAxIDAgMCAyaDN2M2ExIDEgMCAwIDAgMiAwdi0zaDNhMSAxIDAgMCAwIDAtMmgtM3ptLTEgOUE4IDggMCAxIDEgOSAxYTggOCAwIDAgMSAwIDE2eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMxRTU1RUIiIGQ9Ik04IDhWNWExIDEgMCAxIDEgMiAwdjNoM2ExIDEgMCAwIDEgMCAyaC0zdjNhMSAxIDAgMCAxLTIgMHYtM0g1YTEgMSAwIDEgMSAwLTJoM3oiLz4KICAgIDwvZz4KPC9zdmc+)";
case "Style":return"url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzFFNTVFQiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMy42NDYgMTYuNzY4bC0xLjQxNC0xLjQxNGEuNS41IDAgMCAxIDAtLjcwOEwxMy42NDYgMy4yMzJhLjUuNSAwIDAgMSAuNzA4IDBsMS40MTQgMS40MTRhLjUuNSAwIDAgMSAwIC43MDhMNC4zNTQgMTYuNzY4YS41LjUgMCAwIDEtLjcwOCAwek0xMiA4LjA2TDE1LjA2IDUgMTQgMy45NCAxMC45NCA3IDEyIDguMDZ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzgyQzhGRiIgZD0iTTYuNzg3IDQuMjEzTDUgMy41bDEuNzg3LS43MTNMNy41IDFsLjcxMyAxLjc4N0wxMCAzLjVsLTEuNzg3LjcxM0w3LjUgNmwtLjcxMy0xLjc4N3ptNy4yODUgNi43MTVMMTMgMTAuNWwxLjA3Mi0uNDI4TDE0LjUgOWwuNDI4IDEuMDcyTDE2IDEwLjVsLTEuMDcyLjQyOEwxNC41IDEybC0uNDI4LTEuMDcyem0tMy05TDEwIDEuNWwxLjA3Mi0uNDI4TDExLjUgMGwuNDI4IDEuMDcyTDEzIDEuNWwtMS4wNzIuNDI4TDExLjUgM2wtLjQyOC0xLjA3MnptLTggMEwyIDEuNWwxLjA3Mi0uNDI4TDMuNSAwbC40MjggMS4wNzJMNSAxLjVsLTEuMDcyLjQyOEwzLjUgM2wtLjQyOC0xLjA3MnoiLz4KICAgIDwvZz4KPC9zdmc+)";
case "Share":return"url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzFFNTVFQiIgZD0iTTguNTc4IDEuMTYzTDUuOTkgNS4yMzJBLjUuNSAwIDAgMCA2LjQxMSA2aDUuMTc4YS41LjUgMCAwIDAgLjQyMi0uNzY4bC0yLjU5LTQuMDdhLjUuNSAwIDAgMC0uODQzIDB6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwQTBBQSIgc3Ryb2tlPSIjMUU1NUVCIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik05IDR2NyIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0iIzgyQzhGRiIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMyA3djcuNWEuNS41IDAgMCAwIC41LjVoMTFhLjUuNSAwIDAgMCAuNS0uNVY3Ii8+CiAgICA8L2c+Cjwvc3ZnPg==)";
case "Remix":return"url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE5Ljk0NCAxMi4wMDF2LS4yQzE5Ljg0IDcuNDc1IDE2LjMxMSA0IDExLjk3NCA0IDcuNTcgNCA0IDcuNTgyIDQgMTIuMDAxUzcuNTcgMjAgMTEuOTc1IDIwYTcuOTMzIDcuOTMzIDAgMCAwIDQuOTEtMS42OTZsLTEuMzcyLTEuNDY3YTUuOTUgNS45NSAwIDAgMS0zLjUzOCAxLjE2NGMtMy4zMDQgMC01Ljk4Mi0yLjY4Ny01Ljk4Mi02czIuNjc4LTYgNS45ODItNmMzLjIzNiAwIDUuODcgMi41NzkgNS45NzUgNS44di4yaC0yLjYwN2wzLjQxIDMuNzk5IDMuNTA2LTMuNzk5aC0yLjMxNXoiLz4KPC9zdmc+)";
default:return x.Utils.assertNever(a)}}};Object.defineProperty(Ib,"__esModule",{value:!0});var k={getButtonClass:function(a){switch(a){case c.ExtendedButtonColor.Ghost:return k.GhostButton;case c.ExtendedButtonColor.Gray:return k.GrayButton;case c.ExtendedButtonColor.Blue:return k.BlueButton;case c.ExtendedButtonColor.Red:return k.RedButton;case c.ExtendedButtonColor.Green:return k.GreenButton;case c.ExtendedButtonColor.Gold:return k.GoldButton;case c.ExtendedButtonColor.Transparent:return k.TransparentButton;
default:return x.Utils.assertNever(a)}}},Jb=this&&k.__rest||function(a,b){var e={},c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&0>b.indexOf(c)&&(e[c]=a[c]);if(null!=a&&"function"===typeof Object.getOwnPropertySymbols){var d=0;for(c=Object.getOwnPropertySymbols(a);d<c.length;d++)0>b.indexOf(c[d])&&Object.prototype.propertyIsEnumerable.call(a,c[d])&&(e[c[d]]=a[c[d]])}return e};Object.defineProperty(k,"__esModule",{value:!0});const md=d.default.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	${(a)=>a.flexibleWidth?d.css`
		flex-grow: 1;
`:""};
`;md.displayName="BaseButtonDiv";k.BaseButton=class extends b.PureComponent{constructor(){super(...arguments);this.onClick=(a)=>{const {disabled:b,onClick:c}=this.props;b||null==c||c(a)}}render(){return b.createElement(md,Object.assign({className:this.props.className,onClick:this.onClick,"data-lookup":this.props.id,disabled:this.props.disabled,flexibleWidth:this.props.flexibleWidth,"data-popup-opener":!0===this.props.popupOpener},this.props.customButtonData||{},this.props.checked===c.CheckedState.checked?
{"data-checked":"checked"}:{}),this.props.children)}};k.BaseButton.displayName="BaseButton";k.SvgIconElementRaw=class extends b.PureComponent{render(){return b.createElement("div",{className:this.props.className})}};const nd=d.default(k.SvgIconElementRaw)`
	background-image: ${({svgIcon:a})=>Ib.getSvg(a)};
	width: 18px;
	height: 18px;
`;nd.displayName="SvgIconElement";const Ch=d.default.div`
	width: 9px;
`,od=d.default.div`
	display: block;
	width: 4px;
	height: 100%;
`;od.displayName="Spacer";const pd=d.default.div`
	display:flex;
	flex-grow: 1;
`;pd.displayName="FlexibleSpace";const qd=d.default.div`
	position: absolute;
	right: 0;
	display: block;
	width: 1px;
	height: 100%;
`;qd.displayName="Divider";k.Button=class extends b.PureComponent{render(){var a,e=this.props;const {icon:g,content:d}=e;e=Jb(e,["icon","content"]);const l=null!=g?b.createElement(nd,{svgIcon:g}):null,q=null!=g?b.createElement(Ch,null):null,p=this.props.size===c.ExtendedButtonSize.Large?h.ButtonLarge:h.ButtonSmall,f=this.props.color||"dark",m="menu"===this.props.showArrow?b.createElement(n.MenuIcon,{color:"light"===f?"#ffffff":null}):"dropdown"===this.props.showArrow?b.createElement(n.DropDownIcon,
{color:"light"===f?"#ffffff":null}):null;return b.createElement(k.BaseButton,Object.assign({},e),l,q,null!=d.icon&&b.createElement(n.Icon,{iconId:d.icon,size:c.IconSize.Small,color:"light"===f?"#ffffff":null,fills:null!==(a=d.fills)&&void 0!==a?a:null}),null!=d.text&&null!=d.icon&&b.createElement(od,null),null!=d.text&&b.createElement(p,{textColor:f,content:d.text}),this.props.showArrow&&this.props.flexibleWidth&&b.createElement(pd,null),this.props.showArrow&&m,this.props.buttonPosition===c.ButtonPosition.left&&
b.createElement(qd,{"data-lookup":"divider"}))}};k.Button.displayName="Button";k.ButtonWithTooltip=A.tooltip(k.Button);k.styledButtonWithTooltip=d.default(k.ButtonWithTooltip)`
	border-radius: ${(a)=>{{let b=4;a.shape===c.ButtonShape.Circle&&(b=a.size===c.ExtendedButtonSize.Small?12:a.size===c.ExtendedButtonSize.Large?16:14);a=a.buttonPosition===c.ButtonPosition.left?`${b}px 0 0 ${b}px`:a.buttonPosition===c.ButtonPosition.right?`0 ${b}px ${b}px 0`:`${b}px`}return a}};
	cursor: default;
	height: ${(a)=>a.size===c.ExtendedButtonSize.Small?"24px":a.size===c.ExtendedButtonSize.PropertyBar?"28px":"32px"};
	margin: ${(a)=>a.size===c.ExtendedButtonSize.PropertyBar?"0px 4px":"8px 4px"};
	opacity: ${(a)=>a.disabled?f.disabledOpacity:1};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	padding: ${(a)=>a.size===c.ExtendedButtonSize.Small?null!=a.buttonPosition?a.buttonPosition===c.ButtonPosition.left?null!=a.content.icon?null!=a.content.text?"0px 9px 0px 4px":"0px 5px 0px 4px":"0px 9px 0px 8px":"0px":null!=a.content.icon?null!=a.content.text?a.showArrow?"0px 4px 0px 4px":"0px 8px 0px 4px":a.shape===c.ButtonShape.Circle?"0px 0px 0px 0px":"0px 4px 0px 4px":a.showArrow?"0px 4px 0px 8px":"0px 8px 0px 8px":a.size===c.ExtendedButtonSize.PropertyBar?null!=a.buttonPosition?a.buttonPosition===
c.ButtonPosition.left?null!=a.content.icon?null!=a.content.text?"2px 9px 2px 4px":"2px 5px 2px 4px":"2px 9px 2px 8px":"2px 0px":null!=a.content.icon?null!=a.content.text?a.showArrow?"2px 4px 2px 4px":"2px 8px 2px 4px":"2px 4px 2px 4px":a.showArrow?"2px 4px 2px 8px":"2px 8px 2px 8px":null!=a.buttonPosition?a.buttonPosition===c.ButtonPosition.left?null!=a.content.icon?null!=a.content.text?"4px 9px 4px 4px":"4px 5px 4px 4px":"4px 17px 4px 16px":"4px 0px":null!=a.content.icon?null!=a.content.text?a.showArrow?
"4px 4px 4px 4px":"4px 16px 4px 4px":"4px 4px 4px 4px":a.showArrow?"4px 4px 4px 16px":"4px 16px 4px 16px"};
	transition: 0.2s;

	${(a)=>a.buttonPosition===c.ButtonPosition.left?d.css`
		margin-right: 0;
	`:a.buttonPosition===c.ButtonPosition.right?d.css`
			margin-left: 0;
		`:""}
`;k.GhostButton=d.default(k.styledButtonWithTooltip)`
	background: transparent;
	box-shadow: inset 0 0 0 1px ${"#b1b8be"};

	${({disabled:a})=>a?"":d.css`
		&:active, &:hover {
			background-color: ${"#ecedef"};
			border-color: ${"#929aa3"};
		}
	`}

	& div[data-lookup="divider"] {
		background-color: ${"#929aa3"};
	}
`;k.GhostButton.displayName="GhostButton";k.GrayButton=d.default(k.styledButtonWithTooltip)`
	background: ${"#d3d6da"};
	border: none;

	${({disabled:a})=>a?"":d.css`
		&:active, &:hover {
			background-color: ${"#b1b8be"};
		}
	`}

	& div[data-lookup="divider"] {
		background-color: ${"#b1b8be"};
	}
`;k.GrayButton.displayName="GrayButton";k.TransparentButton=d.default(k.styledButtonWithTooltip)`
	background: transparent;
	border: none;

	${({disabled:a})=>a?"":d.css`
		&:active, &:hover {
			background-color: ${"#ecedef"};
		}
		&:active {
			z-index: 1;
			box-shadow: 0 0 0 2px ${"#b1b8be"};
		}
	`}

	${({focused:a})=>a?d.css`
		z-index: 1;
		box-shadow: 0 0 0 2px ${"#b1b8be"};
	`:""}

	${({checked:a})=>a===c.CheckedState.checked?d.css`
		background-color: ${"#ecedef"};
	`:""}

`;k.TransparentButton.displayName="TransparentButton";const Dh=d.default(k.GrayButton)`
	background-color: ${"#374050"};
`;k.ToggleButton=class extends b.PureComponent{render(){var a;return b.createElement(rd,{flexibleWidth:null!==(a=this.props.flexibleWidth)&&void 0!==a?a:!1},this.props.pushed?b.createElement(Dh,Object.assign({},this.props,{color:"light"})):b.createElement(k.GrayButton,Object.assign({},this.props,{color:"dark"})))}};k.ToggleButton.displayName="ToggleButton";k.GrayButtonDark=d.default(k.styledButtonWithTooltip).attrs({color:"light"})`
	background-color: ${f.alphaColor("#ffffff",.24)};
	border: none;

	${({disabled:a})=>a?"":d.css`
		&:active, &:hover {
			background-color: ${f.alphaColor("#ffffff",.4)};
		}
	`}

	& div[data-lookup="divider"] {
		background-color: ${f.alphaColor("#ffffff",.4)};
	}
`;k.GrayButtonDark.displayName="GrayButtonDark";k.BlueButton=d.default(k.styledButtonWithTooltip).attrs({color:"light"})`
	background: ${"#1e55eb"};
	border: none;
	${({disabled:a})=>a?"":d.css`
		&:active, &:hover {
			background-color: ${"#192d9b"};
		}
	`}

	& div[data-lookup="divider"] {
		background-color: ${"#192d9b"};
	}
`;k.BlueButton.displayName="BlueButton";k.RedButton=d.default(k.styledButtonWithTooltip).attrs({color:"light"})`
	background: ${"#c8002d"};
	border: none;
	${({disabled:a})=>a?"":d.css`
		&:active, &:hover {
			background-color: ${"#7d002d"};
		}
	`}

	& div[data-lookup="divider"] {
		background-color: ${"#7d002d"};
	}
`;k.RedButton.displayName="RedButton";k.GreenButton=d.default(k.styledButtonWithTooltip).attrs({color:"light"})`
	background: ${"#1aa651"};
	border: none;
	${({disabled:a})=>a?"":d.css`
		&:active, &:hover {
			background-color: ${"#007850"};
		}
	`}

	& div[data-lookup="divider"] {
		background-color: ${"#007850"};
	}
`;k.GreenButton.displayName="GreenButton";k.GoldButton=d.default(k.styledButtonWithTooltip).attrs({color:"light"})`
	background: ${"#dfab29"};
	border: none;
	${({disabled:a})=>a?"":d.css`
		&:active, &:hover {
			background-color: ${"#ff9105"};
		}
	`}

	& div[data-lookup="divider"] {
		background-color: ${"#ff9105"};
	}
`;k.GoldButton.displayName="GoldButton";const rd=d.default.div`
	display: flex;
	flex-direction: row;

	${(a)=>a.flexibleWidth?d.css`
		flex-grow: 1;
	`:""};
`;k.NormalButton=class extends b.PureComponent{render(){var a;const e=(0,k.getButtonClass)(this.props.buttonColor);var c=this.props;const {}=c;c=Jb(c,["buttonColor"]);return b.createElement(rd,{flexibleWidth:null!==(a=this.props.flexibleWidth)&&void 0!==a?a:!1},b.createElement(e,Object.assign({key:`${this.props.id}-button`},c)))}};k.NormalButton.displayName="NormalButton";class sd extends b.PureComponent{render(){var a=this.props;const {}=a;a=Jb(a,["transparent"]);return b.createElement(k.Button,
Object.assign({},a))}}sd.displayName="InputButton";k.StyledInputButton=d.default(sd)`
	background: ${({transparent:a})=>a?"transparent":"#d3d6da"};
	border-radius: 0 4px 4px 0;
	border: none;
	cursor: default;
	height: 30px;
	margin: 0;
	padding: ${(a)=>null!=a.content.icon?"0px 12px":"7px 8px"};
	opacity: ${({disabled:a})=>a?f.disabledOpacity:1};
	white-space: nowrap;

	${({disabled:a,transparent:b})=>a||b?"":d.css`
		&:active, &:hover {
			background-color: ${"#b1b8be"};
		}
	`}
`;k.StyledInputButton.displayName="StyledInputButton";const Pa=d.default.div`
	background: ${({blockColor:a})=>f.isColorValid(a)?f.toCssColor(a):"center / contain no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAABqNJREFUaAXVmm1sFEUYx2dm9+hZbC9KUFteRAgJYIwRiUiCRFQocthE2gM18EFpjWIUDUE+gonxg0oMEl9Ci8aXqO21SCpXKGJIlKSQiERNQELaKEIrEjRt03LH3e74/Kc3l7327rjj9tpzPtzszszO/J7Zedv/c5y5EKSU3L/mhVttK7xIcn4vl3IR43w647JCVS95L5PyHOV1Ut4JYXg7Q83vXeScy3yb59dbwfbt28WPv/4+K8aNWmazzZLJSbnUxRm/zATbYUqrZcFdM7qoPjuX53XZnA1Ab68K1C+2JGuS0h7uYcYkAR2nSkOCsW5b8B5h8B5zotWLhmKDRoVtyUphy0qinElJfjJ4IcWqfc5Fr8HZ2v3BhqO5vpWsDVDgT9TPsaLyS2r8boBxzg5zJoJcTGhrD77/F9KyDSsDG2+T9tVqyeyAlOwRPEed8LPh4U/u/6rht2wNycqAQKDZGLA7PiYj1scbOiYFf7WjpfGHbIEzlauqrXuA2/JN6pj7Uc7LZMu22PlN89u+7cn0HPKuaUAgsPHGAStyFL1OPd7NuNhysKVx77Uqvp78FbV1q03b2hVlvNLHrN7nwpcef6i9HUMzbTDS5lCGv+aZmVekdYaG+O0YLkZJybIDTbtPZnomn7wjM3zlS6L9G85RQ+f5hLLjnonrXp89/Y+WM2d+SVdvWgMAH5Osix700jjfVWZUrd/XtHUoXUX5pv+5cunCmM06PMz23RcbZEPMYN3Ca54UpavfmD2tK50RKYcQhk2/HTlPa7ePZurLHa17duYLmOl5DU9v2ucs953pY8EJk5jJZXjzlYsPphpOtOolBzVhacwDHj0/XvCgejjWx5ZG+1lMcu+H3slf/1S9rDKZltFW4ghYKtVqMzxhD5cZy19xZLt+ma7nnQ0FopfZXPsK62NGxWvm1J1gdOYn3fjX1s2NRe1TWG1oHi0IffHBv87Cbl5nA6/bG+JG/9bSaQNRKaaYHjEv1NR4Wucl3gAswyalMmipLBZ4Wun7yrm9PMbNl8CmNlLHW0i8AT9tJjHb/p52w2MH9+5ZpC10O86l5wFvClY1rf2I2gtWrN7Qic3OFGJJKL6JqjeAgxnONgrWMLa4Da3rywfeyQZWMCNN/eBUiYMZNquDwd1HdYNuxnnDEwzYwAhWMINPGaCOxHRD46kZiW4HN+A1Ew6PuNbMQi1LdJ6nNMmF9xtd0K3YTXgw4eRLER1i6RuEJjPHsdaywr2FmLxuw+tO1ZPZMLwVAp+B8YyQLuBGXCh4JyvYBb5hkUiTodsNcNRRYPgEK9iF+gCnRvEZ6IYBhYYHo2YFu1DqASXiGzZfA8YCHowJVlI+yIBh6WOi7cnLgLGChwEJVmJX+wASI2XhxLEC97mEsYQHl5NV0OqfkD5ygdZlxxoe7UKmUe0TOxkgz+EGuo1KzOFnPOCTWIkdy2gnEiE65cBe8KUyE4tmBTuW0RMoHFfMMj2XyBuvntcAmlXprBBa4xl+XSBTPN7wTlawkxGSP1pTd4k+FG6ms0VlJomwGODjZ7ceOrv9c6C1cbJQGiSpxGQZh1aZrveLAR5scUY6VbMdYFf7ACRulUlCayoDigXeyaiZlQHQ5yFxQyWG0Oo0opjgwQZGsIIZnMoAOBegzyMBKjFihGKCB49mA6t2iCSOD/HJfFKp0ELUNAx1XYBWOVLuQ0WjQ7J6MDo//xQo19K2W+FDoMl7j/YfqDeA6pEA5wKuTRl7t1+KQ8UC73/q+Zuog98GGxg1PO4TBuAGnhE4F6CANZTcUm5f031Q+J6HVmtFIs105LmDwD8DI1h1SDIAlsEzAufCaXEDC3oy+e0KDw/IAevQO2ri0tApE1VPg1HDI04yAAlw68AzAkn7iKecQeIeHcYGvqpmwyaSH16k8d1XZpQsDgbXWCNZUjo4Pjl79gI8I3AunDJK2SA5G+aRQjw84wsPj2EzfY6PfBJyG4BNzu7c17L74kh43CdWoVSZTdXV6z71TGqAPg+Juz7ydz+EVq1Vpnom3zRMWIx55bmknjeZnB9q/Sit4DBqCDkB1ra1fQ7PiJ4TkLjrS2dNcZZx8xpLZSxy9YQe8+WiZGomeLSd8Q1oOHhG4FwIM147/BA/xkgEdktHXRF4djGzrLegPKv6abXBhE015jWTjrMyAIWx0a1K6ehmzZAkM51idWPOeNjRHX6MlpQ1arhQJjapgji6nQ0rQ7L8q4FWDwZFtHLc/2rgNALX0Of/l3/2GGkI7vFWxuvvNv8BCAT6uRuAxUAAAAAASUVORK5CYII=)"};
	border: ${({blockColor:a})=>f.isColorValid(a)&&f.isColorLight(a)?"1px solid #b1b8be":"none"};
	height: 100%;
	width: 100%;
`;Pa.displayName="ColoredBlock";const td=d.default(Pa)`
	width: 50%;
`,Eh=d.default.div`
	display: flex;
	width: 100%;
	height: 100%;
`;class ud extends b.PureComponent{render(){return b.createElement(k.BaseButton,Object.assign({},{className:this.props.className,dataLookup:this.props.dataLookup,disabled:this.props.disabled,id:this.props.id,onClick:this.props.onClick,popupOpener:this.props.popupOpener}),f.isColorValid(this.props.secondColor)?b.createElement(Eh,null,b.createElement(td,{blockColor:this.props.color}),b.createElement(td,{blockColor:this.props.secondColor})):b.createElement(Pa,{blockColor:this.props.color}))}}ud.displayName=
"ColorButton";const Fh=A.tooltip(ud);k.StyledColorButton=d.default(Fh)`
	background: transparent;
	border-radius: 4px;
	border: solid 1px ${"#b1b8be"};
	cursor: default;
	height: 24px;
	margin: 8px 4px;
	padding: 4px;
	opacity: ${({disabled:a})=>a?f.disabledOpacity:1};
	width: 40px;

	${({disabled:a})=>a?"":"\n\t\t&:active, &:hover {\n\t\t\tbackground-color: #ecedef;\n\t\t\tborder-color: #929aa3;\n\t\t}\n\t"}
`;k.StyledColorButton.displayName="StyledColorButton";const Gh=d.default(Pa)`
	border-radius: 4px;
`;class vd extends b.PureComponent{render(){return b.createElement(k.BaseButton,Object.assign({},{className:this.props.className,dataLookup:this.props.dataLookup,disabled:this.props.disabled,id:this.props.id,onClick:this.props.onClick,popupOpener:this.props.popupOpener}),b.createElement(Gh,{blockColor:this.props.color}))}}vd.displayName="CircleColorButton";const Hh=A.tooltip(vd);k.StyledCircleColorButton=d.default(Hh)`
	background: transparent;
	border-radius: 4px;
	border: ${({selected:a})=>a?"1px solid #3181ff":"none"};
	box-shadow: ${({selected:a})=>a?"2px solid #ffffff":"none"};
	cursor: default;
	height: 24px;
	padding: 0;
	margin: 4px;
	width: 24px;
`;k.StyledCircleColorButton.displayName="StyledCircleColorButton";var ra={};Object.defineProperty(ra,"__esModule",{value:!0});const wd=d.default.div`
	display: flex;
	flex-direction: row;
	margin: 4px 0;
`;wd.displayName="CautionContainer";const Ih=d.default.div`
	padding-right: 4px;
`,xd=d.default(h.CaptionError)`
	padding-top: 4px;
`;xd.displayName="StyledCaptionError";const yd=d.default(h.Caption)`
	padding-top: 4px;
`;yd.displayName="StyledCaption";ra.Caution=class extends b.PureComponent{constructor(){super(...arguments);this.displayName="Caution"}render(){return b.createElement(wd,null,b.createElement(Ih,null,this.props.type===c.CautionTypes.Error?b.createElement(n.WarningIcon,{color:"#c8002d"}):b.createElement(n.InfoWithCircleIcon,{color:f.alphaColor("#374050",.4)})),this.props.type===c.CautionTypes.Error?b.createElement(xd,{content:this.props.text}):b.createElement(yd,{disabled:!0,content:this.props.text}))}};
var sa={};Object.defineProperty(sa,"__esModule",{value:!0});const Qa=d.default.div`
	width: 18px;
	height: 18px;
	margin-right: 8px;
	border-radius: 4px;
	cursor: default;

	display: flex;
	flex-shrink: 0;

	background: ${(a)=>a.checked?a.disabled?"#374050":"#1e55eb":"#ffffff"};
	border: 1px solid ${(a)=>a.disabled?"#374050":a.checked?"#1e55eb":"#d3d6da"};
`,Jh=d.default.div`
	display: flex;
	opacity: ${(a)=>a.disabled?f.disabledOpacity:1};
	height: 20px;
	margin: 4px 0;
	user-select: none;
	min-width: 0;

	${(a)=>a.disabled?"":d.css`
		&:hover {
			${Qa} {
				border-color: ${"#929aa3"};
			}
			& input:checked {
				${Qa} {
					border-color: ${"#374050"};
				}
			}
		}`};

	${(a)=>a.highlightCheckboxOnHover?d.css`
		&:hover {
			${Qa} {
				background: ${"#929aa3"};
				${zd} {
					visibility: visible;
				}
			}
		}`:""};
`,Kh=d.default.input`
	display: none;
	visibility: collapse;
`,Lh=d.default(h.Body2)`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	min-width: 0;
	margin: auto;
`,zd=d.default.div`
	color: ${"#ffffff"};
	position: relative;
	top: -4px;
	left: -4px;
	visibility: ${(a)=>a.checked?"visible":"hidden"};
`,Mh=d.default.label`
	display: flex;
	min-width: 0;
	line-height: normal;
	margin-left: 4px;
	margin-right: 4px;
`;sa.Checkbox=class extends b.PureComponent{constructor(){super(...arguments);this.onChange=(a)=>this.props.onCheck(a.target.checked)}componentWillMount(){this.id="checkbox-label-"+sa.Checkbox.lastId++}render(){return b.createElement(Jh,{disabled:this.props.disabled,highlightCheckboxOnHover:!this.props.checked&&!this.props.disabled&&this.props.strongHover},b.createElement(Kh,{id:this.id,name:"checkbox",type:"checkbox",checked:this.props.checked,disabled:this.props.disabled,onChange:this.props.disabled?
null:this.onChange}),b.createElement(Mh,{htmlFor:this.id},b.createElement(Qa,{"data-lookup":this.props.dataLookup,checked:this.props.checked,disabled:this.props.disabled},b.createElement(zd,{checked:this.props.checked},b.createElement(n.CheckmarkMiniIcon,{color:"#ffffff"}))),b.createElement(Lh,{inline:!0,content:this.props.label})))}};sa.Checkbox.lastId=0;sa.Checkbox.defaultProps={disabled:!1};var ba={headerButton:function(a,e){var c;return c=class extends b.PureComponent{render(){return b.createElement(Ad,
{className:this.props.className,onClick:this.props.onClick,"data-lookup":this.props.dataLookup},b.createElement(a,null))}},c.displayName=e,c}};Object.defineProperty(ba,"__esModule",{value:!0});const {default:Kb}=d,Ad=Kb.div`
	background-color: ${"#ffffff"};
	border: none;
	color: ${"#374050"};
	cursor: default;
	height: 24px;
	width: 24px;
`;Ad.displayName="HeaderButton";const Nh=(0,ba.headerButton)(n.ArrowLineLeftIcon,"BackButton"),Oh=(0,ba.headerButton)(n.CrossIcon,"CloseButton"),Bd=Kb(h.Body2AltCaps)`
	flex-grow: 1;
	overflow: hidden;
	text-transform: uppercase;
	text-align: ${(a)=>a.align===c.TitleAlignment.left?"left":"center"};
	text-overflow: ellipsis;
	white-space: nowrap;
	width: auto;
	line-height: 24px;
`;Bd.displayName="Title";const Ph=Kb.div`
	border-bottom: 1px solid ${"#dfe1e4"};
	display: flex;
	padding: 12px 12px 11px ${(a)=>a.hasBack?"12px":a.align===c.TitleAlignment.center?"36px":"24px"};
	width: 100%;
	flex-shrink: 0;
`;ba.DialogAndSidebarHeader=class extends b.PureComponent{constructor(){super(...arguments);this.displayName="DialogAndSidebarHeader"}render(){const a=this.props.container===c.ContainerType.dialog&&null==this.props.onBack?c.TitleAlignment.left:c.TitleAlignment.center;return b.createElement(Ph,{hasBack:null!=this.props.onBack,align:a},this.props.onBack&&b.createElement(Nh,{onClick:this.props.onBack,dataLookup:`${this.props.container}-back-button`}),b.createElement(Bd,{dataLookup:`${this.props.container}-header-text`,
content:this.props.title,align:a}),this.props.onClose&&!this.props.disableClose&&b.createElement(Oh,{onClick:this.props.onClose,dataLookup:`${this.props.container}-close-button`}))}};var Lb={};Object.defineProperty(Lb,"__esModule",{value:!0});const {default:ta}=d,Cd=ta.div`
	flex-grow: 1;
`;Cd.displayName="CollapseSectionWrapper";const Qh=ba.headerButton(n.ChevronDownIcon,"ArrowButton"),Dd=ta(Qh)`
	transform: ${(a)=>a.isOpen?"rotate(180deg)":"rotate(0deg)"};
	transition: transform 0.3s ease;
	cursor: pointer;
	margin: 4px 0;
`;Dd.displayName="AnimatedArrowButton";const Ed=ta.div`
	display: flex;
	flex-direction: row;
	flex-grow: 1;
	padding: 0px 20px;
	cursor: pointer;
`;Ed.displayName="CollapseSectionHeaderWrapper";const Fd=ta(h.Overline)`
	display: flex;
	flex-grow: 1;
	margin: 8px 4px;
`;Fd.displayName="CollapseSectionOverline";const Rh=ta.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	min-height: ${(a)=>a.isOpen?"32px":"0px"};
	height: ${(a)=>a.isOpen?`${a.height+32}px`:"0px"};
	background: ${"#f6f7f9"};
	margin: 8px 0;
	padding-top: ${(a)=>a.isOpen?"16px":"0px"};
	padding-bottom: ${(a)=>a.isOpen?"16px":"0px"};
	transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1),
	padding-top 0.3s cubic-bezier(0.4, 0, 0.2, 1),
	padding-bottom 0.3s cubic-bezier(0.4, 0, 0.2, 1),
	min-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	overflow: hidden;
	border-top: 1px solid ${"#dfe1e4"};
	border-bottom: ${(a)=>a.isOpen?"1px solid #dfe1e4":"unset"};
`,Gd=ta.div`

`;Gd.displayName="CollapseSectionContentWrapper.displayName";class Sh extends b.PureComponent{constructor(){super(...arguments);this.displayName="CollapseSectionHeader"}render(){return b.createElement(Ed,{onClick:this.props.onClick,"data-lookup":`${this.props.id}-header`},b.createElement(Fd,{content:this.props.title}),b.createElement(Dd,{isOpen:this.props.isOpen,onClick:this.props.onClick,dataLookup:`${this.props.id}-arrow-button`}))}}Lb.CollapseSection=class extends b.PureComponent{constructor(){super(...arguments);
this.displayName="CollapseSection";this.state={isOpen:!1,height:0};this.onClick=()=>{this.setState({isOpen:!this.state.isOpen})}}componentDidMount(){this.setState({height:this.containerRef.clientHeight})}componentDidUpdate(){null!=this.containerRef&&this.state.height!==this.containerRef.clientHeight&&this.setState({height:this.containerRef.clientHeight})}render(){return b.createElement(Cd,{"data-lookup":this.props.id},b.createElement(Sh,{title:this.props.title,onClick:this.onClick,isOpen:this.state.isOpen,
id:this.props.id}),b.createElement(Rh,{height:this.state.height,isOpen:this.state.isOpen},b.createElement(Gd,{ref:(a)=>this.containerRef=a},this.props.children)))}};var ua={};Object.defineProperty(ua,"__esModule",{value:!0});const {default:Th}=d;ua.HorizontalSeparator=Th.div`
	${(a)=>a.nospace?"":"margin: 8px 0"};
	border-top: 1px solid ${"#dfe1e4"};
	flex-grow: 1;
`;ua.HorizontalSeparator.displayName="HorizontalSeparator";var Aa={};Object.defineProperty(Aa,"__esModule",{value:!0});const {default:Hd}=d,Uh=Hd.div`
	background: ${(a)=>a.selected?"#ffffff":"#ecedef"};
	text-align: center;
	flex-grow: 1;
	height: 32px;
	display: flex;
	justify-content: center;
	align-items: center;
`,Vh=Hd.div`
	display: flex;
	flex-shrink: 0;
	flex-grow: 1;
`;Aa.SidebarTabMenuButtons=class extends b.PureComponent{render(){return b.createElement(Vh,{className:this.props.className},this.props.options.map((a,e)=>b.createElement(Uh,{key:e,"data-lookup":"tab-menu-button-"+a.id,selected:this.props.activeId===a.id,onClick:()=>{this.setState({activeTabId:a.id});this.props.onChange(a.id)}},b.createElement(h.Body2,{content:a.title}))))}};Aa.SidebarTabMenuButtons.displayName="SidebarTabMenuButtons";var r={};Object.defineProperty(r,"__esModule",{value:!0});const {default:Wh}=
d;r.KNOB_WIDTH=24;r.KNOB_HALF_WIDTH=12;r.Knob=Wh.div`
		border-radius: ${r.KNOB_HALF_WIDTH}px;
		background: ${(a)=>a.knobColor?f.toCssColor(a.knobColor):"#FFF"};
		height: ${r.KNOB_WIDTH}px;
		position: absolute;
		top: ${(a)=>a.top?a.top:void 0};
		left: ${(a)=>a.left?a.left:void 0};
		cursor: grab;
		width: ${r.KNOB_WIDTH}px;
		box-shadow:
			inset 0 0 0 2px ${"#ffffff"},
			${f.BoxShadow.small};
`;r.Knob.displayName="Knob";var Ba={};Object.defineProperty(Ba,"__esModule",{value:!0});const Id=d.default.div`
	background: content-box linear-gradient(to right, ${(a)=>f.toCssColor(a.fromColor)}, ${(a)=>f.toCssColor(a.toColor)});
	border-radius: 8px;
	height: 100%;
	width: 100%;
	position: absolute;
`;Id.displayName="BackgroundPart";const Jd=d.default.div`
	position: absolute;
	height: 100%;
	width: 100%;
	border-radius: 8px;
	background-image:
		linear-gradient(45deg, ${"#b1b8be"} 25%, transparent 25%),
		linear-gradient(-45deg, ${"#b1b8be"} 25%, transparent 25%),
		linear-gradient(45deg, transparent 75%, ${"#b1b8be"} 75%),
		linear-gradient(-45deg, transparent 75%, ${"#b1b8be"} 75%);
	background-size: 12px 12px;
	background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
`;Jd.displayName="Checkered";class Xh extends b.PureComponent{render(){return b.createElement("div",{onClick:this.props.onClick,className:this.props.className},b.createElement(Jd,null),b.createElement(Id,{fromColor:this.props.fromColor,toColor:this.props.toColor}))}}Ba.default=d.default(Xh)`
	position: relative;
	flex-grow: 1;
	height: 16px;
	margin: 4px;
	border-radius: 8px;
	border: 1px solid ${()=>f.alphaColor("#b1b8be",.4)};
`;Ba.default.displayName="StyledGradientColorBar";var Ca={};Object.defineProperty(Ca,"__esModule",{value:!0});const {default:Yh}=d,Kd=Yh.div`
	position: relative;
	flex-grow: 1;
	opacity: ${(a)=>a.disabled?f.disabledOpacity:1}
`;Kd.displayName="StyledColorSlider";Ca.ColorSlider=class extends b.PureComponent{constructor(){super(...arguments);this.state={dragging:!1,left:null,offset:null};this.setContainerRef=(a)=>{this.containerRef=a};this.startDragging=()=>{this.props.disabled||this.setState({dragging:!0,left:null})};this.stopDragging=()=>{if(!this.props.disabled){if(null!=this.containerRef&&null!=this.state.left&&null!=this.state.offset){const {offset:a}=this.state;this.props.onChange(zb(a,this.containerRef.clientWidth),
!0)}this.setState({dragging:!1,left:null})}};this.dragging=({clientX:a})=>{if(!this.props.disabled&&null!=this.containerRef&&this.state.dragging){var {left:b}=this.state;null==b&&(b=this.containerRef.getBoundingClientRect().left+document.body.scrollLeft);var c=this.containerRef.clientWidth;a=Math.min(Math.max(a-b,r.KNOB_HALF_WIDTH),c-r.KNOB_HALF_WIDTH);this.props.onChange(zb(a,c),!1);this.setState({left:b,offset:a})}};this.updateSliderPosition=(a)=>{null!==a&&0<=a&&1>=a&&this.setState({offset:(this.containerRef.clientWidth-
r.KNOB_WIDTH)*a+r.KNOB_HALF_WIDTH})};this.click=(a)=>{if(!this.props.disabled){var b=this.containerRef.getBoundingClientRect().left+document.body.scrollLeft,c=this.containerRef.clientWidth;this.props.onChange(zb(Math.min(Math.max(a.clientX-b,r.KNOB_HALF_WIDTH),c-r.KNOB_HALF_WIDTH),c),!0)}}}componentDidMount(){const {value:a}=this.props;this.updateSliderPosition(a);window.addEventListener("mouseup",this.stopDragging);window.addEventListener("mousemove",this.dragging)}componentDidUpdate(a){const {value:b}=
this.props;b!==a.value&&this.updateSliderPosition(b)}componentWillUnmount(){window.removeEventListener("mouseup",this.stopDragging);window.removeEventListener("mousemove",this.dragging)}render(){return b.createElement(Kd,{disabled:this.props.disabled,"data-lookup":this.props.dataLookup,ref:this.setContainerRef},b.createElement(Ba.default,{onClick:this.click,fromColor:this.props.fromColor,toColor:this.props.toColor}),b.createElement(r.Knob,{knobColor:this.props.color,top:"0px",left:null==this.state.offset?
`calc(50% - ${r.KNOB_HALF_WIDTH}px)`:`${this.state.offset-r.KNOB_HALF_WIDTH}px`,onMouseDown:this.startDragging}))}};Ca.ColorSlider.displayName="ColorSlider";var Ra={};Object.defineProperty(Ra,"__esModule",{value:!0});Ra.ColorPickerLabel=d.default(h.Overline)`
	padding: 8px 4px 4px 4px;
`;var Mb={};Object.defineProperty(Mb,"__esModule",{value:!0});const {default:Ld}=d,Zh=Ld.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`,$h=Ld(Ca.ColorSlider)`
	margin: 4px 8px 4px 4px;
`;Mb.default=class extends b.PureComponent{constructor(){super(...arguments);this.onChange=(a,b)=>{if(this.props.onChange)this.props.onChange(a,b)}}render(){return b.createElement(Zh,null,b.createElement(Ra.ColorPickerLabel,{content:this.props.title}),b.createElement($h,{disabled:null==this.props.color,dataLookup:this.props.dataLookup,onChange:this.onChange,value:null==this.props.color?0:this.props.color.a,color:null==this.props.color?{r:255,g:255,b:255,a:1}:Object.assign(Object.assign({},this.props.color),
{a:1}),fromColor:null==this.props.color?{r:255,g:255,b:255,a:0}:Object.assign(Object.assign({},this.props.color),{a:0}),toColor:null==this.props.color?{r:255,g:255,b:255,a:0}:Object.assign(Object.assign({},this.props.color),{a:1})}))}};var Nb={};Object.defineProperty(Nb,"__esModule",{value:!0});const {default:Md}=d,Nd=Md.div`
	display: flex;
	flex-wrap: wrap;
`;Nd.displayName="CircleColorButtonContainer";Nb.default=(a)=>b.createElement("div",null,null!=a.title&&b.createElement(Ra.ColorPickerLabel,{content:a.title}),b.createElement(Nd,null,a.colors.map((e,c)=>b.createElement(ai,{id:`${a.id}-color-button-${c}`,key:`${a.id}-color-button-${c}`,color:e,onClick:()=>a.onChange(null==e?null:Object.assign(Object.assign({},e),{a:null==a.color?1:a.color.a}),!0),selected:null==e&&null==a.color||null!=e&&null!=a.color&&e.r===a.color.r&&e.g===a.color.g&&e.b===a.color.b}))),
a.extraButtons);const ai=Md(k.BaseButton)`
	width: 24px;
	height: 24px;
	box-shadow: 0 0 0 1px ${(a)=>a.selected?"#1e55eb":f.alphaColor("#b1b8be",.4)};
	border-radius: 4px;
	margin: 4px;
	position: relative;

	&:after {
		content: "";
		position: absolute;
		display: block;

		left: 0;
		top: 0;
		width: 24px;
		height: 24px;

		${(a)=>null==a.color?"background:\n\t\t\t\tno-repeat linear-gradient(to top left,\n\t\t\t\t\t\t\t\trgba(0,0,0,0) 0%,\n\t\t\t\t\t\t\t\trgba(0,0,0,0) calc(50% - 2px),\n\t\t\t\t\t\t\t\t#fa375a 50%,\n\t\t\t\t\t\t\t\trgba(0,0,0,\t0) calc(50% + 2px),\n\t\t\t\t\t\t\t\trgba(0,0,0,0) 100%);\n\t\t\tbackground-size: 20px 20px;\n\t\t\tbackground-position: center;":`background: ${f.toCssColorIgnoreAlpha(a.color)};`}
	 	${(a)=>a.selected?"box-shadow: inset 0 0 0 2px #ffffff;":""}
	 	border-radius: 4px;
	}

`;var P={};Object.defineProperty(P,"__esModule",{value:!0});const Od=d.default.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	max-width: 100%;
`;Od.displayName="Container";const Pd=d.default.div`
	background: transparent;
	display: flex;
	flex-direction: column;
	margin: 8px 4px;
	height: 32px;
	max-width: 100%;
`;Pd.displayName="OuterDiv";const Qd=d.default.div`
	background: ${"#ffffff"};
	border-radius: 4px;
	border: solid 1px ${"#d3d6da"};
	padding: 2px 4px;
	opacity: ${({disabled:a})=>a?f.disabledOpacity:1};
	width: 100%;
	flex-grow: 1;
	display: flex;

	${(a)=>a.opened?d.css`
		box-shadow: 0 0 0 2px ${f.alphaColor("#3181ff",.4)};
		border-color: ${"#1e55eb"};
	`:""}

	${(a)=>a.disabled||a.opened?"":d.css`
		&:hover {
			border-color: ${"#929aa3"};
		}
		&:active {
			box-shadow: 0 0 0 2px ${f.alphaColor("#3181ff",.4)};
			border-color: ${"#1e55eb"};
		}
	`}
`;Qd.displayName="TopDiv";const Rd=d.default.div`
	width: 24px;
	height: 24px;
	display: flex;
`;Rd.displayName="ArrowDiv";const Sd=d.default(n.DropDownIcon)`
	margin: auto;
`;Sd.displayName="StyledDropDownIcon";const Td=d.default(n.MenuIcon)`
	margin: auto;
`;Td.displayName="StyledMenuIcon";class bi extends b.PureComponent{render(){return b.createElement("div",{"data-lookup":this.props.dataLookup,className:`koi-modal dropdown-widget ${this.props.className}`},this.props.children)}}const Ud=d.default(bi)`
	width: 100%;
	padding: 8px 0;
	z-index: ${4E3};
	display: flex;
	flex-direction: column;
	max-height: 220px;
	overflow-y: auto;
`;Ud.displayName="AbsoluteDiv";const Vd=d.default.div`
	background: ${(a)=>a.active?"#f6f7f9":"transparent"};
	display: flex;
	flex-shrink: 0;
	height: 32px;
	width: 100%;
	padding: 0 16px;
	${(a)=>a.disabled?"":d.css`
		&:hover {
			background-color: ${"#f6f7f9"};
		}
	`}
`;Vd.displayName="DropdownRowDiv";const Ob=d.default(h.Body2)`
	flex-grow: 1;
	margin: auto 4px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;Ob.displayName="DropdownLabel";const Wd=d.default(h.ButtonLarge)`
	flex-grow: 1;
	margin: auto 4px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;Wd.displayName="DropdownActiveLabel";class Xd extends b.PureComponent{render(){return b.createElement(Vd,{"data-lookup":this.props.dataLookup,className:this.props.className,onClick:()=>this.props.onChange(this.props.id),disabled:this.props.disabled,active:this.props.active},this.props.children)}}Xd.displayName="DropdownRow";P.DropdownInput=class extends b.PureComponent{render(){return b.createElement(Pd,{id:this.props.id,"data-popup-opener":!0===this.props.popupOpener},b.createElement(Qd,{"data-lookup":this.props.dataLookup,
onClick:this.props.onClick,disabled:this.props.disabled,opened:this.props.opened},b.createElement(Ob,{content:this.props.text,disabled:this.props.textDisabled}),b.createElement(Rd,{"data-lookup":this.props.dataLookup+"-button"},this.props.icon===c.IconSmallId.Dropdown?b.createElement(Sd,null):b.createElement(Td,null))))}};P.DropdownInput.displayName="DropdownInput";P.DropdownInputWithTooltip=A.tooltip(P.DropdownInput);P.Dropdown=class extends b.PureComponent{constructor(){super(...arguments);this.id=
`DropDownPopupId:${x.Utils.nextSerialId()}`;this.onChange=(a)=>this.props.onChange(a,`${this.id}-popup`);this.setPopupRef=(a)=>this.popupRef=a;this.setOuterDivRef=(a)=>this.outerDivRef=a}componentDidUpdate(){null!=this.popupRef&&this.popupRef.adjustPosition()}render(){const a=-1!==this.props.openedIds.indexOf(`${this.id}-popup`),e=this.props.options.find((a)=>a.id===this.props.activeId);return b.createElement(Od,{className:this.props.className},b.createElement("div",{ref:this.setOuterDivRef},b.createElement(P.DropdownInputWithTooltip,
{id:`${this.id}-input`,text:null==e?this.props.placeholderText:e.title,textDisabled:null==e,disabled:this.props.disabled,dataLookup:this.props.dataLookup,opened:a,onClick:a||this.props.disabled?null:()=>this.props.onOpen(`${this.id}-popup`),icon:c.IconSmallId.Dropdown,tooltipText:this.props.tooltipText,fitParent:!0})),a&&!this.props.disabled?b.createElement(t.StyledDropdownPopup,{id:`${this.id}-popup`,ref:this.setPopupRef,anchor:this.outerDivRef},b.createElement(Ud,null,this.props.options.map((a)=>
{var e=a.id===this.props.activeId;const c=e?Wd:Ob;e={id:a.id,active:e,disabled:a.disabled,onChange:this.onChange,dataLookup:null!=this.props.dataLookup?`${this.props.dataLookup}-option-${a.id}`:null};return b.createElement(Xd,Object.assign({key:e.id},e),b.createElement(c,{disabled:a.disabled,content:a.title}))}))):null)}};P.Dropdown.displayName="Dropdown";var Sa={};Object.defineProperty(Sa,"__esModule",{value:!0});const ci=d.default.div`
	${(a)=>null!=a.width?`width: ${a.width}px; flex-grow: initial;`:"flex-grow: 1;"}
`;Sa.default=class extends b.PureComponent{render(){return b.createElement(ci,{width:this.props.width},b.createElement(P.Dropdown,{dataLookup:this.props.dataLookup,openedIds:this.props.openedPopupIds,onOpen:this.props.onOpen,placeholderText:this.getActiveTitle(),disabled:!1,options:this.props.options,activeId:this.props.activeId,onChange:this.props.onChange}))}getActiveTitle(){return this.props.options.find((a)=>a.id===this.props.activeId).title}};var V={rgbToHsv:function(a){const b=a.r,c=a.g;a=
a.b;const d=Math.min(b,c,a),l=Math.max(b,c,a),q=l-d;let p;l===d?p=0:b===l?p=(c-a)/q:c===l?p=2+(a-b)/q:a===l&&(p=4+(b-c)/q);p=Math.min(60*p,360);0>p&&(p+=360);return{h:p,s:0===l?0:q/l*100,v:l/255*1E3/10}},hsvToRgb:function(a){var b=a.h/60,c=a.s/100;a=a.v/100;const d=Math.floor(b)%6;var l=b-Math.floor(b);b=255*a*(1-c);let q=255*a*(1-c*l);c=255*a*(1-c*(1-l));a=Math.round(255*a);c=Math.round(c);b=Math.round(b);q=Math.round(q);l=null;switch(d){case 0:l=[a,c,b];break;case 1:l=[q,a,b];break;case 2:l=[b,
a,c];break;case 3:l=[b,q,a];break;case 4:l=[c,b,a];break;case 5:l=[a,b,q]}return{r:l[0],g:l[1],b:l[2]}}};Object.defineProperty(V,"__esModule",{value:!0});var va={};Object.defineProperty(va,"__esModule",{value:!0});const {default:di}=d;va.ColorWheel=class extends b.PureComponent{constructor(){super(...arguments);this.state={dragging:!1,pos:null};this.setContainerRef=(a)=>{this.canvasRef=a};this.click=(a)=>{this.knobMoved(this.findPosition(a),!0)};this.startDragging=()=>{this.setState({dragging:!0})};
this.stopDragging=()=>{null!=this.state.pos&&this.knobMoved(this.state.pos,!0);this.setState({dragging:!1,pos:null})};this.dragging=(a)=>{this.state.dragging&&(a=this.findPosition(a),this.knobMoved(a,!1),this.setState({pos:a}))}}findPosition(a){var b=this.canvasRef.getBoundingClientRect();let c=a.clientX-b.left-document.body.scrollLeft;a=a.clientY-b.top-document.body.scrollTop;b=this.canvasRef.clientWidth/2;const d=this.canvasRef.clientHeight/2,l=c-b,q=a-d,p=Math.sqrt(l*l+q*q),f=this.canvasRef.clientWidth/
2;p>f&&(c=b+l/p*f,a=d+q/p*f);return{left:c,top:a}}knobMoved(a,b){a=this.getColor(a.left,a.top);null!=a&&(a=V.rgbToHsv(a),this.props.onChange({h:a.h,s:a.s,v:null!=this.props.hsv?this.props.hsv.v:100},b))}componentDidMount(){null!=this.canvasRef&&(this.drawColorWheel(this.canvasRef),window.addEventListener("mouseup",this.stopDragging),window.addEventListener("mousemove",this.dragging))}componentWillUnmount(){window.removeEventListener("mouseup",this.stopDragging);window.removeEventListener("mousemove",
this.dragging)}render(){var a=null;if(null!=this.props.hsv){const [e,c]=this.getXY(this.props.hsv);a=V.hsvToRgb(this.props.hsv);a=b.createElement(r.Knob,{knobColor:Object.assign(Object.assign({},a),{a:1}),onMouseDown:this.startDragging,left:`${e-r.KNOB_HALF_WIDTH}px`,top:`${c-r.KNOB_HALF_WIDTH}px`})}return b.createElement("div",{style:{position:"relative"},className:this.props.className},b.createElement("canvas",{width:this.props.width,height:this.props.height,ref:this.setContainerRef,onClick:this.click,
"data-lookup":this.props.dataLookup}),a)}getColor(a,b){a-=this.props.width/2;const e=this.props.height-b-this.props.height/2;b=Math.sqrt(a*a+e*e)/(this.props.width/2);a=V.hsvToRgb({h:((Math.atan2(e,a)+Math.PI)/(2*Math.PI)*360+180)%360,s:100*b,v:100});return.99>b?Object.assign(Object.assign({},a),{a:1}):1>b?Object.assign(Object.assign({},a),{a:1-(b-.99)/(1-.99)}):null}getXY(a){const b=(a.h-180-180)/360*Math.PI*2;a=a.s/100;return[a*Math.cos(b)*this.props.width/2+this.props.width/2,-(a*Math.sin(b)*this.props.height/
2)+this.props.height/2]}drawColorWheel(a){const b=a.getContext("2d"),c=this.props.width,d=this.props.height;b.fillStyle="rgba(0,0,0,0)";b.fillRect(0,0,c,a.height);for(a=0;a<c;a++)for(let e=0;e<d;e++){const c=this.getColor(a,e);null!=c&&(b.fillStyle=f.toCssColor(c),b.fillRect(a,e,1,1))}}};va.ColorWheel.displayName="ColorWheel";va.default=di(va.ColorWheel)`
	margin:8px 4px;
	display: flex;
`;var B={};Object.defineProperty(B,"__esModule",{value:!0});B.colorwheelSize=224;const Yd=Math.floor(r.KNOB_WIDTH/Math.sqrt(2)),Ta=2*Math.floor(Math.ceil(B.colorwheelSize/Yd)/2)+1,Pb=Ta*Yd,Zd=Math.floor((B.colorwheelSize-Pb)/2),$d=d.default(k.GhostButton)`
	width: ${24}px;
    padding: 0;
    margin: 0 4px;
    box-shadow: none;

    &:hover {
		box-shadow: inset 0 0 0 1px ${"#b1b8be"};
    }

    ${(a)=>a.pushed?d.css`
		background-color: ${"#d3d6da"};
	`:""};
`;$d.displayName="Button";const ae=d.default.div`
	display: flex;
	position: relative;
`;ae.displayName="WrapperDiv";const be=d.default.div`
	margin: 8px 4px;
	display: flex;
	position: relative;
`;be.displayName="CanvasWrapperDiv";const ce=d.default.div`
	display: flex;
	z-index: 2;
`;ce.displayName="ButtonWrapperDiv";const de=d.default.canvas`
	width: ${B.colorwheelSize}px;
	height: ${B.colorwheelSize}px;
	border-radius: ${B.colorwheelSize/2}px;
	border: solid 1px ${"#d3d6da"};
	outline: none;
`;de.displayName="PreviewCanvas";const ei=d.default.div`
	position: fixed;
	z-index: 1;
	background: transparent;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	cursor: crosshair;
`,fi=d.default.div`
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 4px 4px;
`;B.EyedropperButton=class extends b.PureComponent{constructor(){super(...arguments);this.onClick=()=>{this.props.onPicked()}}render(){return b.createElement(ae,null,this.props.pushed&&b.createElement(ei,{"data-lookup":`${this.props.id}-cover`,onClick:this.onClick}),b.createElement(ce,null,b.createElement($d,{pushed:this.props.pushed,onClick:this.props.onClick,id:`${this.props.pushed?"close":"open"}-${this.props.id}-button`,size:c.ExtendedButtonSize.Small,content:{icon:c.IconSmallId.EyeDropper}})))}};
B.EyedropperButton.displayName="EyedropperButton";B.EyedropperWheel=class extends b.PureComponent{constructor(){super(...arguments);this.state={color:{r:255,g:255,b:255,a:1}};this.onKeyDown=(a)=>{this.props.onCanceled();a.stopPropagation();a.preventDefault()}}ensureCanvas(){if(null!=this.canvasRef){if(this.canvasRef.width!==B.colorwheelSize){this.canvasRef.width=B.colorwheelSize;this.canvasRef.height=B.colorwheelSize;const a=this.canvasRef.getContext("2d");a.imageSmoothingEnabled=!1;a.translate(Zd,
Zd)}this.canvasRef.focus();this.canvasRef.onkeydown=this.onKeyDown;var a=document.createElement("canvas");a.width=Ta;a.height=Ta;this.props.snapshotRenderer.drawSampleForMouse(a).then(()=>{if(null!=this.canvasRef){var b=Math.floor(Ta/2);b=a.getContext("2d").getImageData(b,b,1,1).data;b={r:b[0],g:b[1],b:b[2],a:b[3]/255};this.setState({color:b});this.props.onColorChange(b);this.canvasRef.getContext("2d").drawImage(a,0,0,a.width,a.height,0,0,Pb,Pb)}})}}componentDidMount(){this.ensureCanvas()}componentDidUpdate(){this.ensureCanvas()}render(){return b.createElement(be,
null,b.createElement(de,{ref:(a)=>this.canvasRef=a,tabIndex:-1}),b.createElement(fi,null,b.createElement(r.Knob,{knobColor:this.state.color})))}};B.EyedropperWheel.displayName="EyedropperWheel";var Qb={};Object.defineProperty(Qb,"__esModule",{value:!0});const {default:ee}=d,fe=ee.div`
	width: 24px;
	height: 24px;
	box-shadow: 0 0 0 1px ${(a)=>a.isActive?"#1e55eb":f.alphaColor("#b1b8be",.4)};
	border-radius: 4px;
	margin: 0 2px;
	position: relative;

	&:before {
		content: "";
		background: ${"#ffffff"};
		position: absolute;
		display: block;

		top: 10px;
		left: ${(a)=>a.isStart?"22px":"-2px"};
		width: 4px;
		height: 4px;

		transform: rotate(45deg);
		box-shadow: inset 0 0 0 3px ${"#ffffff"}, 0 0 0 1px ${(a)=>a.isActive?"#1e55eb":f.alphaColor("#b1b8be",.4)};
	}

	&:after {
		content: "";
		position: absolute;
		display: block;

		left: 0;
		top: 0;
		width: 24px;
		height: 24px;

		background: ${(a)=>f.toCssColorIgnoreAlpha(a.buttonColor)};
	 	border: solid 3px ${"#ffffff"};
	 	border-radius: 4px;
	}
`;class gi extends b.PureComponent{constructor(){super(...arguments);this.startButtonClicked=()=>{if(null!=this.props.onChange)this.props.onChange(!0)};this.endButtonClicked=()=>{if(null!=this.props.onChange)this.props.onChange(!1)}}render(){return b.createElement("div",{className:this.props.className},b.createElement(fe,{isStart:!0,isActive:this.props.firstColor,buttonColor:this.props.fromColor,id:`${this.props.id}-grad-start-button`,onClick:this.startButtonClicked}),b.createElement(Ba.default,
{fromColor:this.props.fromColor,toColor:this.props.toColor}),b.createElement(fe,{isStart:!1,isActive:!this.props.firstColor,buttonColor:this.props.toColor,id:`${this.props.id}-grad-end-button`,onClick:this.endButtonClicked}))}}Qb.default=ee(gi)`
	display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-grow:1;
    width:0;
    margin: 8px 4px;
`;var y={};Object.defineProperty(y,"__esModule",{value:!0});const ge=d.css`
		${h.body2Css};
		border: none;
		border-radius: 4px;
		height: 30px;
		flex-grow: 1;
		margin: 0;
		outline: none;
		padding: 8px;
		resize: none;

		// Edge specific
		min-width: 30px;

		// hack because ::placeholder does not work
		opacity: ${(a)=>null==a.value||""===a.value?f.disabledOpacity:1};
`;y.Input=d.default.input`
	${ge};
`;y.Input.displayName="Input";const he=d.default.textarea`
	${ge};
	height: auto;
`;he.displayName="Textarea";y.InputContainer=d.default.div`
	border: 1px solid ${({hasError:a})=>a?"#fa375a":"#d3d6da"};
	border-radius: 4px;
	display: flex;
	flex-grow: 1;
	width: 100%;

	opacity: ${(a)=>a.disabled?f.disabledOpacity:1};

	${(a)=>a.hasError||a.disabled?"":d.css`
		&:hover, &:focus {
			border-color: ${"#929aa3"};
		}`};
`;y.InputContainer.displayName="InputContainer";y.BottomText=d.default(h.Caption)`
	font-family: "RalewayBold";
	text-align: right;
	width: 100%;
`;y.BottomText.displayName="BottomText";y.ErrorText=d.default(h.CaptionError)`
	font-family: "RalewayBold";
	text-align: right;
	width: 100%;
`;y.ErrorText.displayName="ErrorText";y.InputComponent=class extends b.PureComponent{constructor(){super(...arguments);this.pendingValue=this.lastInfo=this.inputRef=null;this.updateValue=(a)=>{this.lastInfo={value:a.value,selectionStart:a.selectionStart,selectionEnd:a.selectionEnd};this.pendingValue=this.onComposition?a.value:null;if(this.onComposition)this.forceUpdate();else if(null!=this.props.onValueChange)this.props.onValueChange(a.value)};this.setInputRef=(a)=>{this.inputRef=a};this.onChange=
(a)=>{this.updateValue(a.currentTarget)};this.handleComposition=(a)=>{"compositionend"===a.type?(this.onComposition=!1,this.updateValue(a.currentTarget)):this.onComposition=!0}}componentDidUpdate(){this.componentDidMount()}componentDidMount(){null!=this.lastInfo&&this.lastInfo.value===this.inputRef.value&&document.activeElement===this.inputRef&&(this.inputRef.selectionStart=this.lastInfo.selectionStart,this.inputRef.selectionEnd=this.lastInfo.selectionEnd)}render(){var a,e;const c=null!==(e=null!==
(a=this.pendingValue)&&void 0!==a?a:this.props.value)&&void 0!==e?e:"";null!=this.lastInfo&&(this.lastInfo.value!==this.props.value?this.lastInfo=null:null!=this.inputRef&&this.inputRef.value===this.props.value&&(this.lastInfo.selectionStart=this.inputRef.selectionStart,this.lastInfo.selectionEnd=this.inputRef.selectionEnd));a={"data-prezi-input":"","data-lookup":this.props.id,onKeyDown:this.props.onKeyDown,onChange:this.onChange,onCompositionStart:this.handleComposition,onCompositionUpdate:this.handleComposition,
onCompositionEnd:this.handleComposition,placeholder:this.props.placeholderText,type:this.props.type||"text",value:c,disabled:this.props.disabled,readOnly:this.props.readonly,maxLength:this.props.maxLength,autoFocus:this.props.autofocus,ref:this.setInputRef,size:1};return null==this.props.rows?b.createElement(y.Input,Object.assign({},a)):b.createElement(he,Object.assign({rows:this.props.rows},a))}};y.InputComponent.displayName="InputComponent";class ie extends b.PureComponent{constructor(){super(...arguments);
this.onKeyDown=(a)=>{if(null!=this.props.onEnter&&"Enter"===a.key)this.props.onEnter()}}render(){return b.createElement("div",{className:`widget-input ${this.props.className}`},b.createElement(y.InputContainer,{hasError:this.props.errorText&&""!==this.props.errorText,disabled:this.props.disabled},b.createElement(y.InputComponent,{id:this.props.id,onValueChange:this.props.onValueChange,onKeyDown:this.onKeyDown,placeholderText:this.props.placeholderText,type:this.props.type,value:this.props.value,rows:this.props.rows,
disabled:this.props.disabled,maxLength:this.props.maxLength,readonly:this.props.readonly,autofocus:this.props.autofocus})),null!=this.props.errorText?b.createElement(y.ErrorText,{content:this.props.errorText}):null!=this.props.bottomText&&b.createElement(y.BottomText,{content:this.props.bottomText}))}}ie.displayName="InputField";const hi=A.tooltip(ie);y.StyledInputField=d.default(hi)`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	margin: 8px 4px;
`;y.StyledInputField.displayName="StyledInputField";var ia={};Object.defineProperty(ia,"__esModule",{value:!0});const Rb=d.default(h.ButtonSmall)`
	padding-top: 8px;
	height: auto;
`;Rb.displayName="Label";const Sb=d.default(y.Input)`
	padding: 0;
	height: auto;
`;Sb.displayName="CustomInput";const je=d.default(Sb)`
	text-align: center;
`;je.displayName="CustomCenteredInput";class ii extends b.PureComponent{constructor(){super(...arguments);this.state={inputValue:null!=this.props.value?this.props.value:""};this.updateValue=(a)=>{a=this.trim("string"===typeof a?a:a.currentTarget.value);this.setState({inputValue:a});if(null!=this.props.onChange)this.props.onChange(a)}}trim(a){null!=this.props.prefix&&a.substring(0,this.props.prefix.length)===this.props.prefix&&(a=a.substring(this.props.prefix.length));null!=this.props.suffix&&a.substring(a.length-
this.props.suffix.length)===this.props.suffix&&(a=a.substring(0,a.length-this.props.suffix.length));return a}componentDidMount(){this.setState({inputValue:this.trim(this.props.value||"")})}componentDidUpdate(a){this.props.value!==a.value&&this.setState({inputValue:this.trim(this.props.value||"")})}render(){return b.createElement("div",{className:this.props.className},b.createElement(Rb,{content:this.props.prefix}),this.props.isCentered?b.createElement(je,{"data-prezi-input":!0,"data-lookup":this.props.dataLookup,
onChange:this.updateValue,type:"text",value:this.state.inputValue,size:this.props.size}):b.createElement(Sb,{"data-prezi-input":!0,"data-lookup":this.props.dataLookup,onChange:this.updateValue,type:"text",value:this.state.inputValue,size:this.props.size}),b.createElement(Rb,{content:this.props.suffix}))}}ia.default=d.default(ii)`
	display: flex;
	justify-content: center;
	flex-grow: ${(a)=>a.prefix.length+a.suffix.length+3};
	padding: 0 6px;
	width: 0;
`;var Tb={};Object.defineProperty(Tb,"__esModule",{value:!0});class ji extends b.PureComponent{constructor(){super(...arguments);this.state={lastValue:null,lastColor:null};this.onChange=(a)=>{const b=f.parseColorData("#"+a);null!=b&&(this.setState({lastValue:a,lastColor:b}),this.props.onChange(Object.assign(Object.assign({},b),{a:this.props.color.a}),!0))}}render(){var a=this.state.lastColor;a=null==this.props.color?"":null!=a&&a.r===this.props.color.r&&a.g===this.props.color.g&&a.b===this.props.color.b?
this.state.lastValue:f.toCssColorIgnoreAlpha(this.props.color);return b.createElement("div",{className:this.props.className},b.createElement(ia.default,{dataLookup:`${this.props.dataLookup}`,value:a,size:6,prefix:"#",suffix:"",onChange:this.onChange,isCentered:!1}))}}Tb.default=d.default(ji)`
	flex-grow: 1;
	display: flex;
	border: 1px solid ${"#d3d6da"};
	border-radius: 4px;
	height: 32px;
	margin: 8px 4px;
`;var Ub={};Object.defineProperty(Ub,"__esModule",{value:!0});class ki extends b.PureComponent{constructor(){super(...arguments);this.parseColor=(a)=>this.parseRange(a,255);this.parseAlpha=(a)=>this.parseRange(a,100);this.onChangeRed=this.onChangeI(this.parseColor,(a)=>({r:a}));this.onChangeGreen=this.onChangeI(this.parseColor,(a)=>({g:a}));this.onChangeBlue=this.onChangeI(this.parseColor,(a)=>({b:a}));this.onChangeAlpha=this.onChangeI(this.parseAlpha,(a)=>({a:a/100}))}onChangeI(a,b){return(e)=>
{e=a(e);if(null!=e)this.props.onChange(Object.assign(Object.assign({},this.props.color),b(e)),!0)}}parseRange(a,b){const e=parseInt(a,10);return a!==e.toString(10)||e!==Math.floor(e)||0>e||e>b?null:e}render(){return b.createElement("div",{className:this.props.className},b.createElement(ia.default,{dataLookup:`${this.props.dataLookup}-r`,value:`${null==this.props.color?"":this.props.color.r}`,size:1,prefix:"",suffix:"",onChange:this.onChangeRed,isCentered:!0}),b.createElement(Vb,null),b.createElement(ia.default,
{dataLookup:`${this.props.dataLookup}-g`,value:`${null==this.props.color?"":this.props.color.g}`,size:1,prefix:"",suffix:"",onChange:this.onChangeGreen,isCentered:!0}),b.createElement(Vb,null),b.createElement(ia.default,{dataLookup:`${this.props.dataLookup}-b`,value:`${null==this.props.color?"":this.props.color.b}`,size:1,prefix:"",suffix:"",onChange:this.onChangeBlue,isCentered:!0}),this.props.hasAlpha?b.createElement(Vb,null):null,this.props.hasAlpha?b.createElement(ia.default,{dataLookup:`${this.props.dataLookup}-a`,
value:`${null==this.props.color?"":Math.round(100*this.props.color.a)}`,size:1,prefix:"",suffix:"%",onChange:this.onChangeAlpha,isCentered:!0}):null)}}const Vb=d.default.div`
	border: 1px solid ${"#d3d6da"};
	height: auto;
	width: 1px;
`;Ub.default=d.default(ki)`
	flex-grow: 1;
	display: flex;
	border: 1px solid ${"#d3d6da"};
	border-radius: 4px;
	margin: 8px 4px;
	height: 32px;
`;var Wb={};Object.defineProperty(Wb,"__esModule",{value:!0});class li extends b.PureComponent{constructor(){super(...arguments);this.onChange=(a,b)=>{if(this.props.onChange){const e=this.props.hsv;this.props.onChange({h:e.h,s:e.s,v:100*(1-a)},b)}}}render(){var a=this.props.hsv;const e={className:this.props.className,dataLookup:this.props.dataLookup,onChange:this.onChange};if(null!=a){const b=V.hsvToRgb(Object.assign(Object.assign({},a),{v:0})),c=V.hsvToRgb(Object.assign(Object.assign({},a),{v:100})),
d=V.hsvToRgb(a);a=Object.assign(Object.assign({},e),{value:1-a.v/100,color:Object.assign(Object.assign({},d),{a:1}),fromColor:Object.assign(Object.assign({},c),{a:1}),toColor:Object.assign(Object.assign({},b),{a:1})})}else a=Object.assign(Object.assign({},e),{color:{r:128,g:128,b:128,a:1},fromColor:{r:128,g:128,b:128,a:1},toColor:{r:128,g:128,b:128,a:1},disabled:!0});return b.createElement(Ca.ColorSlider,Object.assign({},a))}}Wb.default=d.default(li)`
	margin: 8px 4px;
`;var K={};Object.defineProperty(K,"__esModule",{value:!0});K.ComboButtonContainer=d.default.div`
	display: flex;
	flex-direction: row;

		${(a)=>a.flexibleWidth?d.css`
			flex-grow: 1
		`:""}

		${(a)=>a.disabled||!a.focused?"":d.css`
			& ${k.TransparentButton} {
				background-color: ${"#ecedef"};
			}
		`}

		${(a)=>a.disabled?"":d.css`
			&:hover ${k.TransparentButton} {
				background-color: ${"#ecedef"};
			}

			&:hover ${k.TransparentButton}:hover {
				background-color: ${"#d3d6da"};
			}
		`}
`;K.ComboButtonContainer.displayName="ComboButtonContainer";K.ComboButton=class extends b.PureComponent{render(){var a;const e=-1!==this.props.popupIds.indexOf(`${this.props.id}-popupOpener-popup`),d={content:this.props.content,size:this.props.size,shape:this.props.shape,disabled:this.props.disabled,id:`${this.props.id}-button`,onClick:this.props.onButtonClick,popupOpener:!1,className:this.props.className,dataLookup:`${this.props.dataLookup}-button`,tooltipText:this.props.tooltipText,tooltipPosition:this.props.tooltipPosition,
fitParent:this.props.fitParent,flexibleWidth:this.props.flexibleWidth,buttonColor:this.props.buttonColor},v={content:{icon:c.IconSmallId.Dropdown},size:this.props.size,shape:this.props.shape,disabled:this.props.disabled,id:`${this.props.id}-dropdown-button`,onClick:this.props.onDropdownClick,popupOpener:!0,className:this.props.className,dataLookup:`${this.props.dataLookup}-dropdown-button`,focused:e,buttonColor:this.props.buttonColor};return b.createElement(K.ComboButtonContainer,{"data-lookup":this.props.id,
focused:e,disabled:this.props.disabled,flexibleWidth:null!==(a=this.props.flexibleWidth)&&void 0!==a?a:!1},b.createElement(c.NormalButton,Object.assign({key:`${this.props.id}-button`},d,{buttonPosition:c.ButtonPosition.left})),b.createElement(c.PopupOpener,{id:`${this.props.id}-popupOpener`,popupIds:this.props.popupIds,parentIds:this.props.parentIds,popupPosition:"bottom",alignment:this.props.alignment,popupCorrection:this.props.size===c.ExtendedButtonSize.PropertyBar?{x:-33,y:0}:{x:0,y:-8},pointerCorrection:{x:-2,
y:0},hidePopupPointer:this.props.hidePopupPointer,popupHeight:this.props.popupHeight,sidebarItem:b.createElement(c.NormalButton,Object.assign({key:`${this.props.id}-dropdown-button`},v,{buttonPosition:c.ButtonPosition.right})),popupHeader:this.props.popupHeader,popupContent:this.props.popupContent,popupFooter:this.props.popupFooter,currentScrollIntoViewIds:this.props.currentScrollIntoViewIds}))}};K.ComboButton.displayName="ComboButton";var L={};Object.defineProperty(L,"__esModule",{value:!0});const {default:Da}=
d,mi=Da.div`
	display: flex;
	flex: 1 0 48px;
	align-items: center;
`,ke=Da.div`
	padding-bottom: 12px;
	width: 272px;
`;ke.displayName="ColorPickerContent";Da(h.ButtonLarge)`
	padding: 6px;
	text-align: center;
	text-transform: uppercase;
`.displayName="Title";const ja=Da.div`
	display: flex;
	margin: 0 20px;
`,le=[{r:140,g:50,b:255},{r:190,g:140,b:255},{r:255,g:90,b:180},{r:250,g:65,b:65},{r:255,g:140,b:0},{r:255,g:210,b:15},{r:250,g:250,b:120},{r:20,g:15,b:175},{r:60,g:80,b:255},{r:50,g:155,b:240},{r:45,g:145,b:70},{r:145,g:210,b:80},{r:25,g:210,b:185},{r:175,g:245,b:220},{r:0,g:0,b:0},{r:130,g:80,b:0},{r:125,g:125,b:125},{r:166,g:166,b:166},{r:230,g:230,b:230},{r:255,g:255,b:255}];L.ColorPickerButton=class extends b.PureComponent{constructor(){super(...arguments);this.getPopupCorrection=(a,b)=>{if(b===
c.ExtendedButtonSize.PropertyBar)return{x:4,y:0};switch(a){case "bottom":return{x:0,y:-8};case "top":return{x:0,y:8};case "left":return{x:4,y:0};case "right":return{x:-4,y:0};default:return x.Utils.assertNever(a)}}}render(){const a=-1!==this.props.openedPopupIds.indexOf(`${this.props.id}-popupOpener-popup`);var e=null==this.props.colorButtonTooltipProps?{}:Object.assign({},this.props.colorButtonTooltipProps);e=this.props.icon?b.createElement(c.NormalButton,Object.assign({key:`${this.props.id}-button`,
content:{icon:this.props.icon,fills:this.props.fills},size:this.props.size,disabled:this.props.disabled,id:`${this.props.id}-button`,onClick:this.props.onColorButtonClick,popupOpener:!0,dataLookup:`${this.props.id}-button`,buttonColor:c.ExtendedButtonColor.Transparent,focused:a},e)):b.createElement(k.StyledColorButton,Object.assign({color:Qc(this.props.fills),secondColor:Rc(this.props.fills),id:`${this.props.id}-color-picker-button`,key:`${this.props.id}-button`,onClick:this.props.onColorButtonClick,
popupOpener:!0,disabled:this.props.disabled,focused:a},e));e=null!=this.props.label?b.createElement(mi,null,e,b.createElement(c.SidebarParagraph,{content:this.props.label})):e;return b.createElement(K.ComboButtonContainer,{"data-lookup":this.props.id,focused:a,disabled:this.props.disabled,flexibleWidth:!1},b.createElement(c.PopupOpener,{id:`${this.props.id}-popupOpener`,popupIds:this.props.openedPopupIds,parentIds:this.props.parentIds,popupPosition:this.props.popupPosition,alignment:this.props.popupAlignment,
popupCorrection:this.getPopupCorrection(null!=this.props.popupPosition?this.props.popupPosition:"bottom",this.props.size),hidePopupPointer:this.props.hidePopupPointer,popupHeight:c.PopupHeight.Full,sidebarItem:e,popupHeader:null,popupContent:[{createReactElement:()=>b.createElement(L.ColorPicker,{expanded:this.props.expanded,onChange:this.props.onChange,title:this.props.title,fills:this.props.fills,colorGrids:this.props.colorGrids,showColorWheel:this.props.showColorWheel,id:`${this.props.id}-popup`,
snapshotRenderer:this.props.snapshotRenderer,onColorpickerDropdownClick:this.props.onColorpickerDropdownClick,openedPopupIds:this.props.openedPopupIds})}],popupFooter:null,currentScrollIntoViewIds:this.props.currentScrollIntoViewIds}))}};L.ColorPickerButton.displayName="ColorPickerButton";L.ColorPicker=class extends b.PureComponent{constructor(a){super(a);this.onFillTypeSelect=(a,b)=>{a!==this.props.fills.current&&this.setState({hsvLastSet:null,colorDataLastSet:null});switch(a){case c.FillKind.solid:this.props.onChange(this.props.fills.solidFill,
Object.assign(Object.assign({},this.props.fills),{current:a}),!0);break;case c.FillKind.linear:this.props.onChange(this.props.fills.linearFill,Object.assign(Object.assign({},this.props.fills),{current:a}),!0);break;case c.FillKind.radial:this.props.onChange(this.props.fills.radialFill,Object.assign(Object.assign({},this.props.fills),{current:a}),!0);break;case c.FillKind.clear:this.props.onChange({fillKind:c.FillKind.clear},Object.assign(Object.assign({},this.props.fills),{current:a}),!0);break;default:throw Error(a);
}this.props.onColorpickerDropdownClick(b)};this.onGradientStateSelect=(a)=>{a!==this.state.firstColorActive&&this.setState({firstColorActive:a,hsvLastSet:null,colorDataLastSet:null})};this.onSelectColorI=(a,b,d)=>{b=null==a?null:Object.assign(Object.assign({},V.hsvToRgb(a)),{a:b});let e,g=Object.assign({},this.props.fills);if(null==a)g.current=c.FillKind.clear,e={fillKind:c.FillKind.clear};else switch(this.props.fills.current){case c.FillKind.solid:e=Object.assign(Object.assign({},this.props.fills.solidFill),
{color:b});g.solidFill=e;break;case c.FillKind.linear:e=this.state.firstColorActive?Object.assign(Object.assign({},this.props.fills.linearFill),{startColor:b}):Object.assign(Object.assign({},this.props.fills.linearFill),{endColor:b});g.linearFill=e;break;case c.FillKind.radial:e=this.state.firstColorActive?Object.assign(Object.assign({},this.props.fills.radialFill),{startColor:b}):Object.assign(Object.assign({},this.props.fills.radialFill),{endColor:b});g.radialFill=e;break;case c.FillKind.clear:e=
Object.assign(Object.assign({},this.props.fills.solidFill),{color:b});g.solidFill=e;g.current=c.FillKind.solid;break;default:throw Error(this.props.fills.current);}this.setState({hsvLastSet:a,colorDataLastSet:b});this.props.onChange(e,g,d)};this.onTabClick=(a)=>{this.setState((b)=>({tabs:Object.assign(Object.assign({},b.tabs),{activeId:a})}))};this.onSelectHsv=(a,b)=>{const e=this.getCurrentColor();this.onSelectColorI(a,null==e?1:e.a,b)};this.onSelectAlpha=(a,b)=>{this.onSelectColorI(this.getCurrentHsv(),
a,b)};this.onSelectColor=(a,b)=>{if(null==a)this.onSelectColorI(null,1,b);else this.onSelectColorI(V.rgbToHsv(a),a.a,b)};this.onRgbDropdownClick=(a,b)=>{L.ColorPicker.initialActiveId=a;this.setState((b)=>({rgbDropdown:Object.assign(Object.assign({},b.rgbDropdown),{activeId:a})}));this.props.onColorpickerDropdownClick(b)};this.onEyedropperButtonClicked=()=>{this.setState((a)=>({isPicking:!a.isPicking,pickingColor:null}))};this.onEyedropperPicked=()=>{this.onSelectColor(this.state.pickingColor,!0);
this.setState({isPicking:!1,pickingColor:null})};this.onEyedropperCanceled=()=>{this.setState({isPicking:!1,pickingColor:null})};this.onEyedropperColorChange=(a)=>{this.setState({pickingColor:a})};this.state={firstColorActive:!0,hsvLastSet:null,colorDataLastSet:null,rgbDropdown:{activeId:L.ColorPicker.initialActiveId,options:[{id:"rgb",title:I.I18n.ts("RGB"),disabled:!1},{id:"hex",title:I.I18n.ts("HEX"),disabled:!1}]},tabs:{activeId:"0",options:[{id:"0",title:I.I18n.ts("Global")},{id:"1",title:I.I18n.ts("Custom")}]},
fillOptions:this.getFillOptions(a.fills),pickingColor:null,isPicking:!1}}componentWillReceiveProps(a){a=this.getFillOptions(a.fills);(a.length!==this.state.fillOptions.length||a.some((a,b)=>a.id!==this.state.fillOptions[b].id))&&this.setState({fillOptions:a})}getCurrentHsv(){const a=this.getCurrentColor();if(null==a)return null;const b=this.state.colorDataLastSet;return null==this.state.hsvLastSet||null==b||a.r!==b.r||a.g!==b.g||a.b!==b.b?V.rgbToHsv(a):this.state.hsvLastSet}getCurrentColor(){const a=
this.getCurrentColorFromProps();return null==this.state.pickingColor?a:Object.assign(Object.assign({},this.state.pickingColor),{a:null!=a?a.a:1})}getCurrentColorFromProps(){switch(this.props.fills.current){case c.FillKind.solid:return this.props.fills.solidFill.color;case c.FillKind.linear:return this.state.firstColorActive?this.props.fills.linearFill.startColor:this.props.fills.linearFill.endColor;case c.FillKind.radial:return this.state.firstColorActive?this.props.fills.radialFill.startColor:this.props.fills.radialFill.endColor;
case c.FillKind.clear:return null;default:throw Error(this.props.fills.current);}}render(){const a=this.getCurrentColor(),e=this.getCurrentHsv();return b.createElement(ke,null,this.renderTitle(this.props.expanded),this.renderFillOptions(e,a),this.renderGradEndSelector(e,a),this.props.showColorWheel&&this.renderColorWheel(e,a),this.props.showColorWheel&&this.renderHexSelector(e,a),(this.props.showColorWheel||(1<this.state.fillOptions.length||this.props.fills.current===c.FillKind.linear||this.props.fills.current===
c.FillKind.radial)&&(this.props.fills.hasAlpha||0<this.props.colorGrids.length))&&b.createElement(ua.HorizontalSeparator,{nospace:!1}),this.renderAlphaSelector(e,a,this.props.isOverlayColorPicker),this.props.fills.hasAlpha&&(this.props.showColorWheel||0<this.props.colorGrids.length)&&b.createElement(ua.HorizontalSeparator,{nospace:!1}),this.renderCustomColorGrids(e,a),this.props.showColorWheel&&this.renderGlobalColors(e,a,!0),!this.props.showColorWheel&&this.renderTabs(),!this.props.showColorWheel&&
"0"===this.state.tabs.activeId&&this.renderGlobalColors(e,a,!1),!this.props.showColorWheel&&"1"===this.state.tabs.activeId&&b.createElement("div",null,this.renderColorWheel(e,a),this.renderHexSelector(e,a)))}getFillOptions(a){const b=[];null!=a.solidFill&&b.push({id:c.FillKind.solid,title:I.I18n.ts("Solid fill"),disabled:!1});null!=a.linearFill&&b.push({id:c.FillKind.linear,title:I.I18n.ts("Linear gradient"),disabled:!1});null!=a.radialFill&&b.push({id:c.FillKind.radial,title:I.I18n.ts("Radial gradient"),
disabled:!1});return b}renderTitle(a){return a?b.createElement(c.ItemContainer,{kind:c.ItemContainerKind.horizontal,dataWidget:c.DataWidget.ColorPickerHeader},b.createElement(c.SidebarSectionHeader,{content:this.props.title})):b.createElement(t.PopupHeaderWithText,{content:this.props.title})}renderFillOptions(){return 1<this.state.fillOptions.length&&b.createElement(ja,null,b.createElement(Sa.default,{dataLookup:`${this.props.id}-fill-selector`,options:this.state.fillOptions,activeId:this.props.fills.current,
onChange:this.onFillTypeSelect,onOpen:this.props.onColorpickerDropdownClick,openedPopupIds:this.props.openedPopupIds}))}renderGradEndSelector(){return(this.props.fills.current===c.FillKind.linear||this.props.fills.current===c.FillKind.radial)&&b.createElement(ja,null,b.createElement(Qb.default,{id:this.props.id,firstColor:this.state.firstColorActive,fromColor:Qc(this.props.fills),toColor:Rc(this.props.fills),onChange:this.onGradientStateSelect}))}renderColorWheel(a){return b.createElement("div",{key:"color-wheel-section"},
b.createElement(ja,{key:"top-row"},this.state.isPicking?b.createElement(B.EyedropperWheel,{key:"eyedropper-wheel",snapshotRenderer:this.props.snapshotRenderer,onColorChange:this.onEyedropperColorChange,onCanceled:this.onEyedropperCanceled}):b.createElement(va.default,{key:"color-wheel",onChange:this.onSelectHsv,width:B.colorwheelSize,height:B.colorwheelSize,hsv:a,dataLookup:`${this.props.id}-colorwheel`})),b.createElement(ja,{key:"bottom-row"},null!=this.props.snapshotRenderer&&b.createElement(B.EyedropperButton,
{id:`${this.props.id}-eyedropper`,key:"button",pushed:this.state.isPicking,onClick:this.onEyedropperButtonClicked,onPicked:this.onEyedropperPicked}),b.createElement(Wb.default,{key:"selector",hsv:a,onChange:this.onSelectHsv,dataLookup:`${this.props.id}-v-selector`})))}renderAlphaSelector(a,c,d){return this.props.fills.hasAlpha&&b.createElement(ja,null,b.createElement(Mb.default,{title:d?I.I18n.ts("Saturation"):I.I18n.ts("Opacity"),color:c,onChange:this.onSelectAlpha,dataLookup:`${this.props.id}-alpha-selector`}))}renderHexSelector(a,
c){return b.createElement(ja,null,b.createElement(Sa.default,{dataLookup:`${this.props.id}-hex-rgba-selector`,options:this.state.rgbDropdown.options,activeId:this.state.rgbDropdown.activeId,onChange:this.onRgbDropdownClick,onOpen:this.props.onColorpickerDropdownClick,width:86,openedPopupIds:this.props.openedPopupIds}),"rgb"===this.state.rgbDropdown.activeId?b.createElement(Ub.default,{dataLookup:`${this.props.id}-rgba`,color:c,onChange:this.onSelectColor,hasAlpha:!1}):b.createElement(Tb.default,{dataLookup:`${this.props.id}-hex`,
color:c,onChange:this.onSelectColor}))}renderGlobalColors(a,b,c){a=this.props.fills.canPickClearFill?[...le,null]:le;return this.renderColorGrid(c?I.I18n.ts("Global colors"):null,a,b,"global",null)}renderCustomColorGrids(a,c){return b.createElement("div",null,this.props.colorGrids.map((a,b)=>this.renderColorGrid(a.title,a.colors,c,null==a.id?`${b}`:a.id,a.buttons)))}renderColorGrid(a,c,d,v,l){return null!=c&&b.createElement(ja,{key:`color-picker-row-${v}`},b.createElement(Nb.default,{id:`${this.props.id}-color-button-grid-${v}`,
colors:c,color:d,title:a,onChange:this.onSelectColor,extraButtons:l}))}renderTabs(){return b.createElement(ni,{activeId:this.state.tabs.activeId,options:this.state.tabs.options,onChange:this.onTabClick})}};L.ColorPicker.displayName="ColorPicker";L.ColorPicker.initialActiveId="rgb";const ni=Da(Aa.SidebarTabMenuButtons)`
	border-top: 1px solid ${"#dfe1e4"};
	margin: 8px 0 16px 0;
`;L.default=L.ColorPickerButton;var Xb={};Object.defineProperty(Xb,"__esModule",{value:!0});const {default:Ea}=d,me=Ea(y.Input)`
	padding-left: 0;
`;me.displayName="CustomColorInput";const ne=Ea(h.ButtonSmall)`
	flex: 0 0 10px;
	margin: 7px 0 8px 7px;
`;ne.displayName="HashLabel";const oi=Ea.div`
	height: 16px;
	width: 100%;
`,pi=Ea.div`
	border: 1px solid ${({hasError:a})=>a?"#fa375a":"#d3d6da"};
	border-radius: 4px;
	display: flex;
	height: 32px;
	width: ${({showColorButton:a})=>a?"calc(100% - 32px)":"100%"};

	&:hover, &:focus {
		border-color: ${({hasError:a})=>a?"#fa375a":"#929aa3"};
	}
`;class qi extends b.PureComponent{constructor(){super(...arguments);this.state={inputValue:null!=this.props.value?this.props.value:""};this.updateValue=(a)=>{a=f.trimHash("string"===typeof a?a:a.currentTarget.value);this.setState({inputValue:a});a=f.parseColorData("#"+a);if(null!=a)this.props.onValueChange(a)};this.onColorButtonClick=()=>{const a=f.parseColorData("#"+this.state.inputValue);if(null!=a)this.props.onValueChange(a)}}componentDidMount(){const {value:a}=this.props;this.setState({inputValue:f.trimHash(a||
"")})}componentDidUpdate(a){const {value:b}=this.props;b!==a.value&&this.setState({inputValue:f.trimHash(b||"")})}componentWillUnmount(){}render(){const {className:a,id:c,selected:d,showColorButton:v}=this.props,{inputValue:l}=this.state,q=f.parseColorData("#"+l),p=null==l||""===l||null!=q,z=v&&null!=q;return b.createElement("div",{className:`widget-input ${a}`},z&&b.createElement(k.StyledCircleColorButton,{id:`${c}-custom-color-indicator`,color:q,onClick:this.onColorButtonClick,selected:d,tooltipText:f.addHash(l.toLowerCase())}),
b.createElement(pi,{hasError:!p,showColorButton:z},b.createElement(ne,{content:"#"}),b.createElement(me,{"data-prezi-input":!0,"data-lookup":c,onChange:this.updateValue,type:"text",value:l})),p?b.createElement(oi,null):b.createElement(y.ErrorText,{content:I.I18n.ts("Invalid color code")}))}}Xb.default=Ea(qi)`
	display: flex;
	flex-wrap: wrap;
	margin: 8px 0;
	width: 100%;
`;var Yb={};Object.defineProperty(Yb,"__esModule",{value:!0});const {default:Ua}=d,ri=Ua.div`
	display: flex;
	flex: 0 0 24px;
`,si=Ua.div`
	padding: 16px 16px 0 16px;
`,ti=Ua(k.StyledColorButton)`
	width: 24px;
`,ui=Ua(Xb.default)`
	margin: 0;
`;Yb.default=class extends b.PureComponent{render(){const a=null==this.props.colorButtonTooltipProps?{}:Object.assign({},this.props.colorButtonTooltipProps);return b.createElement(ri,null,b.createElement(ti,Object.assign({color:this.props.color,id:`${this.props.id}-color-picker-button`,onClick:this.props.onColorButtonClick,popupOpener:!0},a)),this.props.showPopup&&b.createElement(t.default,{id:`${this.props.id}-color-picker-popup`,position:"left"},b.createElement(si,null,b.createElement(ui,{id:this.props.id,
onValueChange:this.props.onColorSelect,showColorButton:!1,selected:!1,value:f.toCssColorIgnoreAlpha(this.props.color)}))))}};var Fa={calculateFeColorMatrixMatrixValues:function(a){const b=a.intensity;return`${1-b} 0   0   0 ${b*a.r/255}
			0 ${1-b} 0   0 ${b*a.g/255}
			0   0 ${1-b} 0 ${b*a.b/255}
			0   0   0   1   0 `}};Object.defineProperty(Fa,"__esModule",{value:!0});Fa.ColorFilter=class extends b.PureComponent{render(){return b.createElement("svg",{width:0,height:0,style:{pointerEvents:"none",opacity:0,position:"absolute",width:0,height:0}},b.createElement("defs",null,b.createElement("filter",{id:this.props.id},b.createElement("feColorMatrix",{colorInterpolationFilters:"sRGB",type:"matrix",values:(0,Fa.calculateFeColorMatrixMatrixValues)(this.props)}))))}};Fa.ColorFilter.defaultProps=
{r:0,g:0,b:0,intensity:0};var Va={};Object.defineProperty(Va,"__esModule",{value:!0});Va.ComboMenuButton=class extends b.PureComponent{render(){var a,e;const d=-1!==this.props.popupIds.indexOf(`${this.props.id}-popupOpener-popup`),v={content:this.props.content,size:this.props.size,shape:this.props.shape,disabled:this.props.disabled,id:`${this.props.id}-button`,onClick:this.props.onButtonClick,popupOpener:!1,className:this.props.className,dataLookup:`${this.props.dataLookup}-button`,tooltipText:this.props.tooltipText,
tooltipPosition:this.props.tooltipPosition,fitParent:this.props.fitParent,flexibleWidth:this.props.flexibleWidth,buttonColor:this.props.buttonColor},l={content:{icon:c.IconSmallId.Dropdown},size:this.props.size,shape:this.props.shape,disabled:this.props.disabled,id:`${this.props.id}-dropdown-button`,onClick:this.props.onDropdownClick,popupOpener:!0,className:this.props.className,dataLookup:`${this.props.dataLookup}-dropdown-button`,buttonColor:this.props.buttonColor,focused:d};return b.createElement(K.ComboButtonContainer,
{"data-lookup":this.props.id,focused:d,disabled:this.props.disabled,flexibleWidth:null!==(a=this.props.flexibleWidth)&&void 0!==a?a:!1},b.createElement(c.NormalButton,Object.assign({key:`${this.props.id}-button`},v,{buttonPosition:c.ButtonPosition.left})),b.createElement(c.MenuOpener,{id:`${this.props.id}-popupOpener`,popupIds:this.props.popupIds,parentIds:this.props.parentIds,popupPosition:this.props.popupPosition,popupCorrection:"bottom"===(null!==(e=this.props.popupPosition)&&void 0!==e?e:"bottom")?
{x:-4,y:-8}:{x:-4,y:8},pointerCorrection:{x:-2,y:0},hidePopupPointer:this.props.hidePopupPointer,alignment:"right",sidebarItem:b.createElement(c.NormalButton,Object.assign({key:`${this.props.id}-dropdown-button`},l,{buttonPosition:c.ButtonPosition.right})),actions:this.props.actions}))}};Va.ComboMenuButton.displayName="ComboMenuButton";var wa={};Object.defineProperty(wa,"__esModule",{value:!0});wa.DialogFooterContainer=d.default.div`
	display: flex;
	flex-direction: row;
	flex-shrink: 0;
	align-items: flex-end;
	padding: 16px 0;
`;wa.DialogFooterContainer.displayName="DialogFooterContainer";const oe=d.default.div`
	display: flex;
	flex: 1;
	padding: 0 0 0 24px;
    margin: 8px 0;
    align-items: center;
	min-height: 32px;
	${(a)=>a.hasCaution?"min-width: 120px;":""};
`;oe.displayName="DialogCautionWrapper";const pe=d.default.div`

`;pe.displayName="DialogButtonsWrapper";wa.DialogFooter=class extends b.PureComponent{constructor(){super(...arguments);this.displayName="DialogFooter"}render(){return b.createElement(wa.DialogFooterContainer,null,b.createElement(oe,{hasCaution:!!this.props.text},this.props.text&&b.createElement(ra.Caution,{text:this.props.text,type:this.props.type})),b.createElement(pe,null,this.props.children))}};var w={};Object.defineProperty(w,"__esModule",{value:!0});w.sidebarWidth=272;w.SidebarRootContainer=
d.default.div`
	background-color: ${"#ffffff"};
	bottom: 0;
	box-shadow: 0 1px 2px 0 rgba(21,34,53,0.25);
	height: calc(100% - 48px);
	position: absolute;
	right: 0;
	top: 48px;
	width: ${w.sidebarWidth}px;
	z-index: ${100};
`;w.SidebarRootContainer.displayName="SidebarRootContainer";w.LeftSidebarRootContainer=d.default(w.SidebarRootContainer)`
	right: unset;
	left: 0;
`;w.LeftSidebarRootContainer.displayName="LeftSidebarRootContainer";const qe=d.default.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
`;qe.displayName="SidebarInnerContainer";const re=d.default.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	overflow-y: auto;
	overflow-x: hidden;
	width: 100%;
`;re.displayName="SidebarScrollableContainer";const Wa=d.default.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;Wa.displayName="SidebarBaseContainer";const se=d.default(Wa)`
	flex-grow: 1;
	width: ${w.sidebarWidth}px;
	& > *:first-child {
		margin-top: 8px;
	}
	& > *:last-child {
		margin-bottom: 8px;
	}
	& > div[data-widget="${()=>c.DataWidget.TabMenuButtons}"]:first-child {
		margin-top: 0;
	}
	& > div[data-widget="${()=>c.DataWidget.VerticalList}"]:first-child {
		margin-top: 0;
	}
	& > div[data-widget="${()=>c.DataWidget.TabMenuButtons}"]:last-child {
		margin-bottom: 0;
	}
	& > div[data-widget="${()=>c.DataWidget.VerticalList}"]:last-child {
		margin-bottom: 0;
	}
`;se.displayName="SidebarContentContainer";w.SidebarHeaderContainer=d.default(Wa)`
	flex-shrink: 0;
	border-bottom: 1px solid ${"#dfe1e4"};
`;w.SidebarHeaderContainer.displayName="SidebarHeaderContainer";w.SidebarFooterContainer=d.default(Wa)`
	flex-shrink: 0;
	border-top: 1px solid ${"#dfe1e4"};
`;w.SidebarFooterContainer.displayName="SidebarFooterContainer";w.SidebarContent=class extends b.PureComponent{render(){return b.createElement(qe,{key:this.props.id,"data-lookup":this.props.id},null==this.props.title?null:b.createElement(ba.DialogAndSidebarHeader,Object.assign({},this.props,{container:c.ContainerType.sidebar})),this.props.header&&b.createElement(w.SidebarHeaderContainer,{"data-lookup":"sidebar-header-container"},this.props.header),b.createElement(re,null,b.createElement(se,{"data-lookup":w.dataLookupSidebarContentContainer},
this.props.children)),this.props.footer&&b.createElement(w.SidebarFooterContainer,{"data-lookup":"sidebar-footer-container"},this.props.footer))}};w.SidebarContent.displayName="SidebarContent";w.dataLookupSidebarContentContainer="sidebar-content-container";var D={};Object.defineProperty(D,"__esModule",{value:!0});const {default:ka}=d;D.MediumDialogWidth=528;D.ExtraLargeDialogWidth=774;const vi=d.keyframes`
  0% {
    transform: translateY(24px);
  }
  100% {
    transform: translateY(0px);
  }
`,te=ka.div`
	width: ${(a)=>{switch(a.dialogType){case c.DialogType.full:return"calc(100vw - 2 * 40px)";case c.DialogType.extraLarge:return`${D.ExtraLargeDialogWidth}px`;case c.DialogType.large:return"600px";case c.DialogType.medium:return`${D.MediumDialogWidth}px`;default:return"400px"}}};
	background: ${"#ffffff"};
	box-shadow: ${f.BoxShadow.large};
	border-radius: ${(a)=>a.radius}px;
	pointer-events: auto;
	min-height: ${(a)=>a.dialogType===c.DialogType.small||a.dialogType===c.DialogType.corner?"172px":"280px"};
	max-height: calc(100vh - 2 * ${40}px);
	display: flex;
	flex-direction: column;
	overflow: hidden;

	${(a)=>!!a.height&&`height: ${a.height}px`}

	${(a)=>a.dialogType===c.DialogType.full&&"height: calc(100vh - 2 * 40px);"}

	    &.${"dialogSlideAnimation"}-appear {
            opacity: 0.01;
        }

        &.${"dialogSlideAnimation"}-appear-active {
            opacity: 1;
            animation: ${vi} ${600}ms cubic-bezier(0.19, 1, 0.22, 1);
        };
`;te.displayName="StyledDialog";const ue=ka.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: ${(a)=>a.dialogType===c.DialogType.corner?"flex-end":"center"};
	justify-content: ${(a)=>a.dialogType===c.DialogType.corner?"left":"center"};
	padding: ${40}px 0px ${40}px ${(a)=>a.dialogType===c.DialogType.corner?"40px":"0px"};
`;ue.displayName="DialogWrapper";const ve=(a,b)=>{if(a.dialogType===c.DialogType.full)return{top:0,bottom:4};a=null!=a.footer||null!=a.caution;return!b.hasScroll&&a?{top:16,bottom:0}:{top:16,bottom:24}},we=ka.div`
	padding: ${(a)=>`${a.topPadding}px 0 ${a.bottomPadding}px 0`};
	overflow-y: auto;
	overflow-x: hidden;
	display: flex;
	flex-direction: column;
	flex: 1;
	border-bottom: ${(a)=>a.hasScroll?"1px solid #dfe1e4":"none"};
`;we.displayName="DialogContent";ka.div`
	overflow-y: auto;
	overflow-x: hidden;
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 0;
`.displayName="PlainContent";const xe=ka.div`
	width: ${(a)=>{switch(a.dialogType){case c.DialogType.full:return"calc(100vw - 2 * 40px)";case c.DialogType.extraLarge:return`${D.ExtraLargeDialogWidth}px`;case c.DialogType.large:return"600px";case c.DialogType.medium:return`${D.MediumDialogWidth}px`;default:return"400px"}}};

	${(a)=>a.dialogType===c.DialogType.full&&"height: 100%;"}
`;xe.displayName="DialogContentInner";const Xa=ka.div`
	padding: 8px 24px 16px 24px;
	justify-content: ${(a)=>a.align};
	display: flex;
`;Xa.displayName="TitleWrapper";const wi=ka.div`
	padding: 0px 24px 16px 24px;
	justify-content: center;
	display: flex;
`;Xa.displayName="TitleWrapper";D.DialogBase=class extends b.PureComponent{constructor(){super(...arguments);this.displayName="DialogBase"}render(){return b.createElement(ue,{dialogType:this.props.dialogType},b.createElement(lh.CSSTransition,{classNames:"dialogSlideAnimation",appear:!0,timeout:{appear:600},enter:!1,exit:!1},b.createElement(te,{"data-lookup":"dialog-wrapper",dialogType:this.props.dialogType,radius:this.props.radius,height:this.props.height,ref:b.createRef()},this.props.children)))}};
D.Dialog=class extends b.PureComponent{constructor(){super(...arguments);this.displayName="Dialog";this.state={hasScroll:!1};this.setContainerRef=(a)=>this.containerRef=a;this.setInnerContainerRef=(a)=>this.innerContainerRef=a;this.checkContentScrollable=()=>{const a=ve(this.props,this.state);this.setState({hasScroll:null!=this.containerRef&&null!=this.innerContainerRef&&this.containerRef.clientHeight-a.top-a.bottom<this.innerContainerRef.scrollHeight})}}componentDidMount(){this.checkContentScrollable()}componentDidUpdate(){this.checkContentScrollable()}getTitleElement(a,
e){return e===c.DialogType.medium||e===c.DialogType.large||e===c.DialogType.extraLarge?b.createElement(Xa,{align:"center"},b.createElement(h.Headline3,{content:a})):b.createElement(Xa,{align:"left"},b.createElement(h.Title,{content:a}))}render(){const a=ve(this.props,this.state);return b.createElement(D.DialogBase,{dialogType:this.props.dialogType,radius:4,height:this.props.height},(this.props.onClose||this.props.onBack)&&b.createElement(ba.DialogAndSidebarHeader,{title:this.props.title,container:c.ContainerType.dialog,
onBack:this.props.onBack,onClose:this.props.onClose,disableClose:!1}),this.props.header&&b.createElement(w.SidebarHeaderContainer,{"data-lookup":"sidebar-header-container"},this.props.header),b.createElement(we,{ref:this.setContainerRef,hasScroll:this.state.hasScroll,topPadding:a.top,bottomPadding:a.bottom},b.createElement(xe,{dialogType:this.props.dialogType,ref:this.setInnerContainerRef},!this.props.onClose&&!this.props.onBack&&this.getTitleElement(this.props.title,this.props.dialogType),(this.props.dialogType===
c.DialogType.medium||this.props.dialogType===c.DialogType.large||this.props.dialogType===c.DialogType.extraLarge)&&!this.props.onClose&&!this.props.onBack&&null!=this.props.subtitle&&b.createElement(wi,null,b.createElement(h.Subtitle,{content:this.props.subtitle})),this.props.children)),(null!=this.props.footer||this.props.caution)&&b.createElement(wa.DialogFooter,{text:this.props.caution?this.props.caution.text:null,type:this.props.caution?this.props.caution.type:null},this.props.footer))}};D.PlainDialog=
class extends b.PureComponent{constructor(){super(...arguments);this.displayName="PlainDialog"}render(){return b.createElement(D.DialogBase,{dialogType:this.props.dialogType,radius:0},this.props.children)}};var Q={};Object.defineProperty(Q,"__esModule",{value:!0});Q.StyledDialogItemRow=d.default.div`
	flex-grow: 1;
	padding: 0px 12px;
	border-bottom: ${(a)=>a.hasBottomBorder?"1px solid #dfe1e4":"none"};
	display: flex;
	flex-direction: row;
	background-color: ${(a)=>a.backgroundColor};
`;Q.StyledDialogItemRow.displayName="DialogItemRow";Q.DialogItemRow=class extends b.PureComponent{render(){return b.createElement(Q.StyledDialogItemRow,Object.assign({},this.props),this.props.children)}};Q.StyledDialogItemCell=d.default.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0px 8px;
	width: ${(a)=>{a:{a=a.width;switch(a){case c.DialogItemCellWidth.single:a=232;break a;case c.DialogItemCellWidth.double:a=480;break a;case c.DialogItemCellWidth.triple:a=728;break a;default:x.Utils.assertNever(a,"Wrong width")}a=void 0}return`${a}px`}};
`;Q.StyledDialogItemCell.displayName="DialogItemCell";Q.DialogItemCell=class extends b.PureComponent{render(){return b.createElement(Q.StyledDialogItemCell,Object.assign({},this.props),this.props.children)}};var Ya={};Object.defineProperty(Ya,"__esModule",{value:!0});const ye=d.default.div`
	position: absolute;
	z-index: ${2E3};
	width: 100%;
	height: 100%;
	background-color: ${(a)=>a.hideOverlay?"none":f.alphaColor("#000000",.4)};
	pointer-events: ${(a)=>a.hideOverlay?"none":"auto"};
`;ye.displayName="Overlay";Ya.DialogOverlay=class extends b.PureComponent{render(){return b.createElement(ye,{hideOverlay:this.props.hideOverlay},this.props.children)}};Ya.DialogOverlay.displayName="DialogOverlay";var Z={};Object.defineProperty(Z,"__esModule",{value:!0});const {default:Zb}=d,ze=Zb.img`
	background-repeat: no-repeat;
	background-position: center;
	//needed for EDITORAPI-952
	margin: auto;
	display: block;
`;ze.displayName="ImageContainer";const Ae=Zb(h.Caption)`
	text-align: center;
	text-transform: uppercase;
`;Ae.displayName="StyledCaption";Z.SidebarIllustration=class extends b.PureComponent{constructor(a){super(a);this.state={svgRepo:N.svgRepo};null==this.state.svgRepo&&N.svgRepoPromise.then((a)=>this.setState({svgRepo:a}))}render(){return null!==this.state.svgRepo?b.createElement("div",{className:this.props.className},b.createElement(ze,{type:this.props.illustrationId,src:this.state.svgRepo.getUrl(this.props.illustrationId,f.parseColorData,f.toCssColor)}),this.props.caption&&b.createElement(Ae,{content:this.props.caption,
disabled:!0})):b.createElement("div",null)}};Z.SidebarIllustration.displayName="SidebarIllustration";Z.StyledSidebarIllustration=Zb(Z.SidebarIllustration)`
	//display is not flex because of a safari issue. See: EDITORAPI-952
	display: block;
	flex-direction: column;
	padding: 8px 24px;
`;Z.StyledSidebarIllustration.displayName="StyledSidebarIllustration";var R={};Object.defineProperty(R,"__esModule",{value:!0});const xi=d.keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`,Be=d.default.div`
	display: flex;
	width: 100%;
	position: relative;
	${(a)=>null==a.ratio?d.css`height: 100%`:d.css`padding-top: ${100/a.ratio}%`};
	min-height: ${(a)=>Ab[a.spinnerSize]}px;
`;Be.displayName="Container";const Ce=d.default.div`
	display: flex;
	margin: auto;
	overflow: hidden;
	${(a)=>Ma(a.spinnerSize)}
`;Ce.displayName="InnerContainer";const De=d.default.div`
	position: absolute;
	display: flex;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
`;De.displayName="MiddleContainer";const Ab={L:112,M:54,S:24,XS:12},Ee={L:"border-width: 5px;",M:"border-width: 4px;",S:"border-width: 3px;",XS:"border-width: 2px;"},yi={L:"56px 56px",M:"27px 27px",S:"12px 12px",XS:"6px 6px"},zi={L:"1.25s",M:"1.125s",S:"1s",XS:"875ms"},Ai={neutral:"#747c87",blue:"#3181ff"},Fe=d.default.div`
	border: solid rgba(142, 147 ,156, .4);
	border-radius: 50%;
	position: absolute;
	${({spinnerSize:a})=>Ma(a)}
	${({spinnerSize:a})=>Ee[a]}
`;Fe.displayName="Circle";const Ge=d.default.div`
	animation: ${xi} ${({spinnerSize:a})=>zi[a]} infinite linear;
	mask-image: linear-gradient(top, #000 50%, rgba(0, 0, 0, 0) 83%);
	-webkit-mask-image: -webkit-linear-gradient(top, #000 50%, rgba(0,0,0,0) 83%);
	overflow: hidden;
	transform-origin: ${({spinnerSize:a})=>yi[a]};
	${({spinnerSize:a})=>Ma(a)}
`;Ge.displayName="LineMask";const He=d.default.div`
	border: solid transparent;
	border-left-color: ${({color:a})=>Ai[a]};
	border-radius: 50%;
	${({spinnerSize:a})=>Ma(a)}
	${({spinnerSize:a})=>Ee[a]}
`;He.displayName="Line";R.Spinner=class extends b.PureComponent{render(){return b.createElement(Be,{draggable:!1,"data-lookup":"spinner",className:this.props.className,ratio:this.props.ratio,spinnerSize:this.props.spinnerSize},b.createElement(De,null,b.createElement(Ce,{spinnerSize:this.props.spinnerSize},b.createElement(Fe,{spinnerSize:this.props.spinnerSize}),b.createElement(Ge,{spinnerSize:this.props.spinnerSize},b.createElement(He,{spinnerSize:this.props.spinnerSize,color:this.props.color})))))}};
R.Spinner.displayName="Spinner";R.ImageSpinner=d.default(R.Spinner)`
	flex-grow: 1;
	pointer-events: none;
	grid-area: 1 / 1;
`;R.ImageSpinner.displayName="ImageSpinner";var Za={};Object.defineProperty(Za,"__esModule",{value:!0});const {default:$b}=d,Ie=$b.div`
	display: block;
	width: 100%;
	max-height: 100%;
	${(a)=>a.noMargin?"":"padding: 16px 0;"}
`;Ie.displayName="ImageComponentWrapper";const Je=$b.img`
	display: flex;
	flex-grow: 1;
	max-width: 100%;
	max-height: 100%;
	margin: auto;
`;Je.displayName="StyledImageComponent";const Bi=$b.div`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 8px;
	margin: auto;
`;Za.Image=class extends b.PureComponent{constructor(){super(...arguments);this.displayName="Image"}render(){return b.createElement(Ie,{noMargin:this.props.noMargin},b.createElement(Je,{"data-lookup":this.props.dataLookup,src:this.props.src}),this.props.title&&b.createElement(Bi,null,b.createElement(h.Caption,{content:this.props.title})))}};var ac={};Object.defineProperty(ac,"__esModule",{value:!0});const {default:S}=d,Ke=S.div`
	${(a)=>a.active?"background: #ecedef;":""};
	width: 100%;
	height: 224px;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
`;Ke.displayName="StyledDropArea";const Le=S.div`
	border: 1px dashed ${"#b1b8be"};
	position: absolute;
	pointer-events: none;
	top: 2px;
	left: 2px;
	right: 2px;
	bottom: 2px;
`;Le.displayName="Border";const Me=S.div`
	padding: 12px 0px;
	min-height: ${(a)=>a.minHeight}px;
	display: flex;
	flex-direction: column;
`;Me.displayName="DropAreaContentWrapper";const Ne=S.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: center;
`;Ne.displayName="DropAreaContent";const Oe=S(Z.SidebarIllustration)`
 	margin: 0px 4px;
`;Oe.displayName="DropAreaIllustration";const bc=S(h.Body2Paragraph)`
 	text-align: center;
 	margin: 8px 4px;
 	max-width: 248px;
`;bc.displayName="DropAreaLabel";const Ga=S.div`
	display: flex;
	padding: 0 ${aa.horizontalMargin}px;
	flex-wrap: nowrap;
	flex-shrink: 0;
	align-items: stretch;
	justify-content: center;
`;Ga.displayName="DropAreaItemContainer";const Pe=S.div`
	width: 100%;
	margin: 8px 4px;
`;Pe.displayName="DropAreaWrapper";const Qe=S.div`
	display: flex;
	flex-direction: column;
	padding: 16px;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;Qe.displayName="ImageWrapper";const Re=S.div`
position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: ${f.alphaColor("#000000",.4)};
	opacity: 0%;

	:hover {
		opacity: 100%;
	}
`;Re.displayName="ImageOverlay";const cc=S.div`
	padding-top: 4px;
`;cc.displayName="DropAreaErrorWrapper";ac.DropArea=class extends b.PureComponent{constructor(){super(...arguments);this.displayName="Droparea";this.state={active:!1};this.setActive=()=>{this.setState({active:!0})};this.setInactive=()=>{this.setState({active:!1})};this.onDrop=(a)=>{this.setState({active:!1});null!=this.getFile(a.dataTransfer)&&(this.props.onDrop(a.dataTransfer.files[0]),a.preventDefault())};this.onDragEnter=(a)=>{a.dataTransfer.dropEffect="copy";a.preventDefault()}}getFile(a){if(null==
a)return null;if(null!=a.files&&1===a.files.length)return a.files[0];if(null!=a.items)for(let c=0;c<a.items.length;c++){var b=a.items[c];b=null!=b&&b.getAsFile();if(null!=b)return b}return null}componentDidMount(){document.addEventListener("dragenter",this.setActive);document.addEventListener("dragover",this.setActive);document.addEventListener("dragleave",this.setInactive);document.addEventListener("dragend",this.setInactive)}componentWillUnmount(){document.removeEventListener("dragenter",this.setActive);
document.removeEventListener("dragover",this.setActive);document.removeEventListener("dragleave",this.setInactive);document.removeEventListener("dragend",this.setInactive)}render(){return b.createElement(Pe,null,b.createElement(Ke,{active:this.state.active,onDrop:this.onDrop,onDragEnter:this.onDragEnter,onDragOver:this.onDragEnter},b.createElement(Le,null),!this.props.url&&b.createElement(Me,{minHeight:this.props.minHeight},b.createElement(Ne,null,this.props.showSpinner&&b.createElement(R.Spinner,
{color:c.SpinnerColor.neutral,spinnerSize:c.SpinnerSize.l}),!this.props.showSpinner&&b.createElement(Ga,null,b.createElement(Oe,{illustrationId:this.props.illustration})),!this.props.showSpinner&&b.createElement(Ga,null,b.createElement(bc,{content:this.props.text})),!this.props.showSpinner&&b.createElement(Ga,null,this.props.children))),this.props.url&&b.createElement(Qe,null,b.createElement(Za.Image,{src:this.props.url,noMargin:!0,dataLookup:`${this.props.dataLookup}-image`}),b.createElement(Re,
null,b.createElement(Ga,null,b.createElement(bc,{content:this.props.text,textColor:"light"}))))),this.props.caption&&b.createElement(cc,null,b.createElement(ra.Caution,{text:this.props.caption,type:c.CautionTypes.Info})),this.props.errorText&&b.createElement(cc,null,b.createElement(ra.Caution,{text:this.props.errorText,type:c.CautionTypes.Error})))}};var la={};Object.defineProperty(la,"__esModule",{value:!0});const {default:$a}=d;$a.div`
	padding: 8px 0;
`.displayName="StyledMenuPopup";const Se=$a.div`
	white-space: nowrap;
	display: flex;
	padding: 4px 16px;
	align-items: center;
	opacity: ${(a)=>a.disabled?f.disabledOpacity:1};
	&:hover {
		background-color: ${"#f6f7f9"}
	}
`;Se.displayName="DropdownMenuItemDiv";const Te=$a(h.Body2)`
	flex-grow: 1;
	padding: 0 8px 0 4px;
`;Te.displayName="MenuItemText";la.DropdownMenuSeparator=$a.div`
	border-bottom: 1px solid ${"#dfe1e4"};
	margin: 8px 0px;
	width: 100%;
`;la.DropdownMenuSeparator.displayName="DropdownMenuSeparator";la.DropdownMenuItem=class extends b.PureComponent{render(){return b.createElement(Se,{"data-lookup":this.props.id,disabled:!1===this.props.enabled,onClick:this.props.enabled?this.props.onClick:null},this.props.icon&&b.createElement(n.Icon,{iconId:this.props.icon,size:c.IconSize.Small}),b.createElement(Te,{content:this.props.title,inline:!0}),b.createElement(h.Body2,{content:this.props.shortcut,inline:!0}))}};la.DropdownMenuItem.displayName=
"DropdownMenuItem";var ab={};Object.defineProperty(ab,"__esModule",{value:!0});const Ue=d.default.div`
	background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='L9' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 0 0' xml:space='preserve'%3E%3Cpath fill='000' d='M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50'%3E%3CanimateTransform attributeName='transform' attributeType='XML' type='rotate' dur='1s' from='0 50 50' to='360 50 50' repeatCount='indefinite' /%3E%3C/path%3E%3C/svg%3E");
	background-position: center;
	background-repeat: no-repeat;
	background-size: 60px;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1001;
`;Ue.displayName="Spinner";const Ve=d.default.iframe`
	width: 100%;
	height: ${(a)=>null!=a.height?a.height:"100%"};
	background: white;
	overflow: hidden;
`;Ve.displayName="StyledIFrame";const We=d.default.div`
	position: relative;
	height: 100%;
	min-height: 400px;
	display: flex;
`;We.displayName="Wrapper";ab.IFrameDialog=class extends b.PureComponent{constructor(){super(...arguments);this.state={iFrameLoaded:!1};this.onIFrameLoad=()=>{this.setState({iFrameLoaded:!0})}}render(){console.log("loaded: ",this.state.iFrameLoaded);const a=b.createElement(We,null,!this.state.iFrameLoaded&&b.createElement(Ue,null),b.createElement(Ve,{src:this.props.src,frameBorder:0,onLoad:this.onIFrameLoad,height:this.props.height}));return null===this.props.title?b.createElement(D.PlainDialog,
{dialogType:this.props.dialogType},a):b.createElement(D.Dialog,{title:this.props.title,onClose:this.props.onClose,subtitle:null,dialogType:this.props.dialogType,footer:null},a)}};ab.IFrameDialog.displayName="IFrameDialog";var C={};Object.defineProperty(C,"__esModule",{value:!0});const {default:E}=d,Xe=E.div`
	height: 40px;
	background: ${"#ffffff"};
	box-shadow: ${f.BoxShadow.small};
	padding-left: ${(a)=>a.paddingLeft}px;
	padding-right: ${(a)=>a.paddingRight}px;
	display: flex;
    justify-content: space-between;
    transition: padding 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
`;Xe.displayName="StyledPropertyBar";const dc=E.div`
	display: flex;
    align-items: center;
    padding: 0 8px;
`;dc.displayName="StyledPropertyBarBlock";const Ye=E(dc)`
	flex-grow: 1;
	overflow: hidden;
`;Ye.displayName="StyledPropertyBarLeftBlock";const Ze=E(k.BaseButton)`
	border-radius: 4px;
	cursor: default;
	height: 28px;
	margin-left: 4px;
	margin-right: 4px;
	opacity: ${(a)=>a.disabled?f.disabledOpacity:1};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: center;
	padding: 2px;
	display: flex;
	align-items: center;
	${(a)=>a.highlighted?"\n\t\tbackground-color: #ecedef;\n\t\tbox-shadow: 0 0 0 2px #b1b8be;\n\t":""}
	${(a)=>a.itemChecked?"\n\t\t\tbackground-color: #ecedef;":""}

	${(a)=>a.disabled?"":d.css`
		&:active, &:hover {
			background-color: ${"#ecedef"};
		}
		&:active {
			box-shadow: 0 0 0 2px ${"#b1b8be"};
		}
	`}

	transition: width 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
`;Ze.displayName="propertyBarItem";A.tooltip(Ze).displayName="PropertyBarItemWithTooltip";E(n.Icon)`
	margin-left: 2px;
	margin-right: 2px;
`.displayName="StyledPropertyBarButtonIcon";E(h.ButtonSmall)`
	margin-left: 2px;
	margin-right: 2px;
	padding: 0 8px;
	min-width: 64px;
	text-align: center;
`.displayName="StyledPropertyBarButtonText";E(n.Icon)`
	padding-left: 6px;
`.displayName="StyledPropertyBarDropdownIcon";E(h.ButtonSmall)`
	padding-left: 6px;
	max-width: 120px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`.displayName="StyledPropertyBarDropdownText";E(h.Overline)`
	padding: 16px 16px 8px 16px;
`.displayName="StyledPropertyBarDropdownHeaderText";E.div`
	display: flex;
	height: 40px;
	align-items: center;
`.displayName="SubmenuRow";const Ci=E(n.CheckmarkIcon)`
	margin: 0 4px;
`,Di=E.img`
	padding-left: ${(a)=>a.paddingLeft}px;
`,Ei=E.div`
	display: flex;
	flex-grow: 1;
	align-items: center;
	&:hover {
		${(a)=>a.disabled?"":"filter: invert(10%);"}
	}
	opacity: ${(a)=>a.disabled?f.disabledOpacity:1};
	${(a)=>a.hasLightColor&&a.selected?"background: #747c87;":a.hasLightColor&&!a.selected?"background: #929aa3;":!a.hasLightColor&&a.selected?"background: #ecedef;":"background: #ffffff;"}
`;C.ImageOption=class extends b.PureComponent{constructor(){super(...arguments);this.onclick=()=>{if(!this.props.disabled)this.props.onclick(this.props.id)}}render(){return b.createElement(Ei,Object.assign({disabled:this.props.disabled,selected:this.props.selected,hasLightColor:this.props.hasLightColor},this.props.selected?{"data-checked":"checked"}:{},{onClick:this.onclick}),this.props.selected&&b.createElement(Ci,{color:this.props.hasLightColor?"#ffffff":"#000000"}),b.createElement(Di,{paddingLeft:this.props.selected?
0:32,src:this.props.imgUrl,"data-lookup":this.props.id}))}};C.ImageOption.displayName="ImageOption";E.div`
	padding-left: 4px;
	padding-right: 4px;
`.displayName="IconWrapper";const $e=E.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	visibility: ${(a)=>a.hidden?"hidden":"visible"};
`;$e.displayName="StyledPropertyBarItemGroup";C.PropertyBarItemGroup=class extends b.PureComponent{render(){return b.createElement($e,{"data-lookup":`propertybar-item-group-${this.props.weight}`,hidden:this.props.hidden,ref:this.props.setRef},this.props.children)}};C.PropertyBarItemGroup.displayName="PropertyBarItemGroup";const Fi=E.div`
	height: ${(a)=>a.separatorSize===c.PropertyBarSeparatorSize.Large?"40px":"28px"};
	border-right: 1px solid ${"#dfe1e4"};
	margin: ${(a)=>a.separatorSize===c.PropertyBarSeparatorSize.Large?"0px":"6px"} 8px;
`;C.PropertyBarSeparator=class extends b.PureComponent{render(){return b.createElement(Fi,{separatorSize:this.props.size,"data-lookup":this.props.id})}};C.PropertyBarSeparator.displayName="PropertyBarSeparator";const Gi=E.div`
	width: ${(a)=>`${a.width}px`};
	height: 20px;
	flex-shrink: 0;
`;C.PropertyBar=class extends b.PureComponent{constructor(){super(...arguments);this.propertyBarLeftBlockRef=this.firstPopupGroupRef=this.lastVisibleGroupRef=this.firstHiddenGroupRef=this.moreGroupRef=this.visibleObserver=this.hiddenObserver=this.moreObserver=null;this.maxGroupIndex=0;this.setMoreGroupRef=(a)=>{this.moreGroupRef=a};this.setFirstHiddenGroupRef=(a)=>{this.firstHiddenGroupRef=a};this.setLastVisibleGroupRef=(a)=>{this.lastVisibleGroupRef=a};this.setFirstPopupGroupRef=(a)=>{this.firstPopupGroupRef=
a};this.setPropertyBarLeftBlockRef=(a)=>{this.propertyBarLeftBlockRef=a};this.state={moreGroupWeight:null,firstHiddenGroupWidth:1E4}}isIntersecting(a){const b=this.propertyBarLeftBlockRef.getBoundingClientRect();a=a.target.getBoundingClientRect();return b.right>=a.right&&b.left<=a.left&&b.top<=a.top&&b.bottom>=a.bottom}createObservers(){this.killObservers();const a=[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1];null!=this.propertyBarLeftBlockRef&&(null!=this.moreGroupRef&&(this.moreObserver=new IntersectionObserver((a)=>
{a.some((a)=>!this.isIntersecting(a))&&(a=this.state.moreGroupWeight,1<this.state.moreGroupWeight&&this.setState({moreGroupWeight:a-1}))},{threshold:a,root:this.propertyBarLeftBlockRef}),this.moreObserver.observe(this.moreGroupRef)),null!=this.firstHiddenGroupRef&&(this.hiddenObserver=new IntersectionObserver((a)=>{a.some((a)=>this.isIntersecting(a))&&(a=this.state.moreGroupWeight,this.setState({moreGroupWeight:a>=this.maxGroupIndex?null:a+1,firstHiddenGroupWidth:a>=this.maxGroupIndex?1E4:this.state.firstHiddenGroupWidth}))},
{threshold:a,root:this.propertyBarLeftBlockRef}),this.hiddenObserver.observe(this.firstHiddenGroupRef)),null!=this.lastVisibleGroupRef&&(this.visibleObserver=new IntersectionObserver((a)=>{a.some((a)=>!this.isIntersecting(a))&&this.setState({moreGroupWeight:this.maxGroupIndex})},{threshold:a,root:this.propertyBarLeftBlockRef}),this.visibleObserver.observe(this.lastVisibleGroupRef)))}killObservers(){null!=this.moreObserver&&this.moreObserver.disconnect();null!=this.hiddenObserver&&this.hiddenObserver.disconnect();
null!=this.visibleObserver&&this.visibleObserver.disconnect()}createGroupedBlock(a){this.maxGroupIndex=0;let e=[],d=[],v=[];const l=-1!==this.props.openedPopupIds.indexOf("more-submenu-button-popupOpener-popup");for(let g=0;g<a.length;g++){let p=a[g];d.push(p);const q=g===a.length-1;if(q||p.isPropertyBarSeparator)this.maxGroupIndex++,null==this.state.moreGroupWeight||this.maxGroupIndex<this.state.moreGroupWeight?(e.push(b.createElement(C.PropertyBarItemGroup,{key:e.length,weight:this.maxGroupIndex,
hidden:!1,setRef:q?this.setLastVisibleGroupRef:null},d.map((a)=>a.createReactElement({key:a.id,popupIds:this.props.openedPopupIds,parentIds:null,currentScrollIntoViewIds:this.props.currentScrollIntoViewIds})))),q&&(this.firstPopupGroupRef=this.firstHiddenGroupRef=this.moreGroupRef=null)):this.maxGroupIndex===this.state.moreGroupWeight?(e.push(b.createElement(C.PropertyBarItemGroup,{key:e.length,weight:this.state.moreGroupWeight,hidden:!1,setRef:this.setMoreGroupRef},[b.createElement(c.SubmenuButton,
{key:"more-submenu-button",id:"more-submenu-button",disabled:!1,onDropdownClick:()=>{this.props.onMoreClick("more-submenu-button-popupOpener-popup")},buttonColor:c.ExtendedButtonColor.Transparent,size:c.ExtendedButtonSize.PropertyBar,popupIds:this.props.openedPopupIds,parentIds:null,content:{icon:c.IconSmallId.MoreHorizontal},actions:[],elements:v,showArrow:!1,popupAlignment:"right",popupPosition:"bottom"})])),e.push(b.createElement(Gi,{key:e.length,width:this.state.firstHiddenGroupWidth,ref:this.setFirstHiddenGroupRef})),
l?v.push(b.createElement(C.PropertyBarItemGroup,{key:v.length,weight:this.maxGroupIndex,hidden:!1,setRef:this.setFirstPopupGroupRef},d.map((a)=>a.createReactElement({key:a.id,popupIds:this.props.openedPopupIds,parentIds:["more-submenu-button-popupOpener-popup"],currentScrollIntoViewIds:this.props.currentScrollIntoViewIds})))):e.push(b.createElement(C.PropertyBarItemGroup,{key:e.length,weight:this.maxGroupIndex,hidden:!0,setRef:this.setFirstPopupGroupRef},d.map((a)=>a.createReactElement({key:a.id,
popupIds:this.props.openedPopupIds,parentIds:null,currentScrollIntoViewIds:this.props.currentScrollIntoViewIds})))),this.lastVisibleGroupRef=null):this.maxGroupIndex>this.state.moreGroupWeight&&v.push(b.createElement(C.PropertyBarItemGroup,{key:v.length,weight:this.maxGroupIndex,hidden:!1},d.map((a)=>a.createReactElement({key:a.id,popupIds:this.props.openedPopupIds,parentIds:["more-submenu-button-popupOpener-popup"],currentScrollIntoViewIds:this.props.currentScrollIntoViewIds})))),d=[]}return e}updateCallback(){if(null!==
this.moreGroupRef&&null!==this.firstPopupGroupRef&&this.firstPopupGroupRef.getBoundingClientRect().width!==this.state.firstHiddenGroupWidth){let a=this.moreGroupRef.getBoundingClientRect().width,b=this.firstPopupGroupRef.getBoundingClientRect().width;this.setState({firstHiddenGroupWidth:this.state.moreGroupWeight===this.maxGroupIndex?b-a:b});this.firstPopupGroupRef=null}else this.createObservers()}componentDidMount(){this.updateCallback()}componentDidUpdate(){this.updateCallback()}componentWillUnmount(){this.killObservers()}render(){return b.createElement(Xe,
{paddingLeft:this.props.paddingLeft,paddingRight:this.props.paddingRight,"data-lookup":"propertybar"},b.createElement(Ye,{"data-lookup":"propertybar-left-block",ref:this.setPropertyBarLeftBlockRef},this.createGroupedBlock(this.props.leftChildren)),b.createElement(dc,{"data-lookup":"propertybar-right-block"},this.props.rightChildren.map((a)=>a.createReactElement({key:a.id,popupIds:this.props.openedPopupIds,parentIds:null,currentScrollIntoViewIds:this.props.currentScrollIntoViewIds}))))}};C.PropertyBar.displayName=
"PropertyBar";var ec={};Object.defineProperty(ec,"__esModule",{value:!0});ec.ImageCheckbox=class extends b.PureComponent{constructor(){super(...arguments);this.displayName="ImageCheckbox";this.onClick=()=>{this.props.onCheck(!this.props.checked)}}render(){return b.createElement(C.ImageOption,{selected:this.props.checked,id:this.props.dataLookup,imgUrl:this.props.imgUrl,hasLightColor:this.props.hasLightColor,disabled:this.props.disabled,onclick:this.onClick})}};var bb={};Object.defineProperty(bb,"__esModule",
{value:!0});const {default:Hi}=d;bb.default=Hi(({children:a,className:c,id:d})=>b.createElement("div",{className:c,"data-lookup":d},a))`
	height: 0;
	left: 0;
	position: absolute;
	top: 0;
	width: 0;
	z-index; ${({zIndex:a})=>a};
`;bb.default.displayName="StyledLayer";var m={asPx:function(a){return null==a?null:`${a}px`},widthFrom:function(a){if(a.listType===c.ListType.numbered)return Ii;switch(a.itemSize){case c.ListItemSize.full:return Ji;case c.ListItemSize.large:return Ki;case c.ListItemSize.small:return Li;default:return x.Utils.assertNever(a.itemSize)}},placeholderHeight:function(a){return Math.max(50,9*((0,m.widthFrom)(a)-2*m.padding)/16+2*m.padding)},getMargin:function(a,b){switch(a){case c.ListColumnLayout.normal:return m.margin;
case c.ListColumnLayout.double:case c.ListColumnLayout.triple:switch(b){case c.ListItemSize.small:return 6;case c.ListItemSize.large:return 7;case c.ListItemSize.full:return 12;default:return x.Utils.assertNever(b)}default:return x.Utils.assertNever(a)}}};Object.defineProperty(m,"__esModule",{value:!0});m.fullWidth=234;m.margin=4;m.padding=1;const Ji=m.fullWidth-2*m.margin,Ki=m.fullWidth/2-2*m.margin,Li=m.fullWidth/3-2*m.margin;m.numberWidth=24;const Ii=m.fullWidth-2*m.numberWidth-2*m.margin,af=d.default.div`
	display: flex;
    flex-direction: column;
	background: transparent;
	padding: ${(0,m.asPx)(m.padding)};
	height: ${(a)=>{a:switch(a.itemLayout){case c.ListItemLayout.dynamic:a="auto";break a;case c.ListItemLayout.fixed:a=Bb(a);break a;default:a=x.Utils.assertNever(a.itemLayout)}return a}};
	width: ${(a)=>Bb(a)};
`;m.SimpleListItemContainer=d.default(af)`
	margin: ${(a)=>(0,m.asPx)((0,m.getMargin)(a.columnLayout,a.itemSize))};
`;m.SimpleListItemContainer.displayName="SimpleListItemContainer";const bf=d.default.div`
	align-self: center;
	flex: 0 0 ${(0,m.asPx)(m.numberWidth)};
	font-size: 13px;
	text-align: center;
	width: ${(0,m.asPx)(m.numberWidth)};
`;bf.displayName="Number";const cf=d.default(af)`
	margin-right: ${(0,m.asPx)(m.numberWidth)};
`;cf.displayName="NumberedItemContainer";const df=d.default.div`
	display: flex;
	margin: ${(0,m.asPx)(m.margin)};
`;df.displayName="NumberedListItem";m.NumberedListItemContainer=class extends b.PureComponent{render(){return b.createElement(df,null,b.createElement(bf,null,this.props.index+1),b.createElement(cf,{itemLayout:this.props.itemLayout,columnLayout:this.props.columnLayout,itemSize:c.ListItemSize.full,listType:c.ListType.numbered,"data-lookup":this.props.dataLookup},this.props.children))}};m.NumberedListItemContainer.displayName="NumberedListItemContainer";const ef=d.default(h.Caption)`
	flex: 1;
	text-align: center;
	height: 16px;
	margin: 0 4px 12px 4px;
	width: ${(a)=>Bb({itemSize:a.itemSize,listType:c.ListType.simple})};
	white-space: ${(a)=>a.multiline?void 0:"nowrap"};
    overflow: hidden;
    text-overflow: ellipsis;
`;ef.displayName="StyledListItemTitleLabel";const ff=A.tooltip(ef);ff.displayName="StyledListItemTitleLabelWithTooltip";m.ListItemDiv=d.default.div`
	display: flex;
	flex-direction: column;
`;m.ListItemDiv.displayName="ListItemDiv";const fc=d.default.div`
	display: flex;
	flex-direction: column;
`;fc.displayName="MiddleDiv";const gf=d.default.div`
	background-image: linear-gradient(to bottom,
		transparent 11px, ${"#1e55eb"} 11px 13px, transparent 13px
	);
	${(a)=>a.forceVisible?d.css`opacity: 1`:d.css`
		opacity: 0;
		${fc}:hover & {
			opacity: 0.5;
		}
		:hover {
			opacity: 1;
		}
	`};
	z-index: ${(a)=>a.zIndex};
	height: 24px;
	margin-top: -12px;
	margin-bottom: -12px;
	margin-left: 24px;
	margin-right: 24px;
	display: flex;
	flex-direction: row;
	justify-content: center;

	& ${k.styledButtonWithTooltip} {
		margin: 0;
	}
`;gf.displayName="AdderDiv";class Ha extends b.PureComponent{render(){return null==this.props.adder?null:b.createElement(gf,{zIndex:this.props.zIndex,forceVisible:this.props.adder.forceVisible},this.props.adder.element)}}Ha.displayName="Adder";m.ListItemWithTitle=class extends b.PureComponent{render(){return b.createElement(m.ListItemDiv,{"data-widget":"ListItem","data-lookup":`listItem-${this.props.index}`,"data-index":this.props.index},b.createElement(Ha,{zIndex:2,adder:this.props.addBeforeButton}),
b.createElement(fc,null,b.createElement(Ha,{zIndex:1,adder:this.props.addBeforeGhost}),this.props.children,this.props.showTitle&&null!=this.props.title?b.createElement(ff,{itemSize:this.props.itemSize,content:this.props.title,multiline:this.props.multiline,tooltipText:this.props.title,tooltipPosition:"bottom"}):null,b.createElement(Ha,{zIndex:1,adder:this.props.addAfterGhost})),b.createElement(Ha,{zIndex:3,adder:this.props.addAfterButton}))}};m.ListItemWithTitle.displayName="ListItemWithTitle";var u=
{createBlendedImageProps:function(a){return{src:a.src,requestImage:a.requestImage,hoverContent:a.hoverContent,info:a.info,title:a.title,blendColor:a.blendColor,checked:a.checked,listItemDataLookup:a.dataLookup,primaryAction:a.primaryAction,onMore:a.onMore,actions:a.actions,actionWrapperPosition:a.actionWrapperPosition,stickyActions:a.stickyActions,popupIds:a.popupIds,label:a.label,badge:a.badge,badgeTooltipText:a.badgeTooltipText,addChecker:a.addChecker,disabled:!1}}};Object.defineProperty(u,"__esModule",
{value:!0});const cb=d.default.div`
	display: flex;
	flex-grow: 1;
	flex-direction: row;
	align-items: center;
	align-self: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	transition: margin 0.1s, width 0.1s, height 0.1s, transform 0.1s;
	${(a)=>a.isChecked?d.css`transform: scale(0.9)`:""};
	${(a)=>qa(a)};
	opacity: ${(a)=>a.disabled?f.disabledOpacity:1};
`;cb.displayName="BaseImageDiv";const db=d.default(cb)`
	position: relative;
	${(a)=>!a.isChecked&&a.isInteractive?d.css`
		&:hover {
			${(a)=>qa(a,f.BoxShadow.small)};
		};
	`:""};
`;db.displayName="ImageDiv";const eb=(a)=>d.css`
	${a.isInteractive&&a.isDraggable?d.css`cursor: grab`:""};
	${!a.isChecked&&a.isInteractive?d.css`
		&:hover {
			${qa(a,f.BoxShadow.medium)};
		}`:""};
`,gc=d.default(cb)`
	position: relative;
	${(a)=>eb(Object.assign(Object.assign({},a),{isDraggable:!0}))};
`;gc.displayName="DroppableImageDiv";const F=d.default.div`
	flex-grow: 1;
	display: grid;
	grid: minmax(0, auto) / minmax(0, auto);
	width: 100%;
	height: 100%;
	position: relative;
	align-items: center;
	justify-items: center;

	&:hover {
		z-index: 1;
	}

	${(a)=>a.addChecker?"\n\t\tbackground-image: linear-gradient(45deg, #d9d9d9 25%, transparent 25%),\n\t\t\tlinear-gradient(-45deg, #d9d9d9 25%, transparent 25%),\n\t\t\tlinear-gradient(45deg, transparent 75%, #d9d9d9 75%),\n\t\t\tlinear-gradient(-45deg, transparent 75%, #d9d9d9 75%);\n\t\tbackground-size: 20px 20px;\n\t\tbackground-position: 0 0, 0 10px, 10px -10px, -10px 0px;\n\t":""}
`;F.displayName="ImgWrapperDiv";const hc=d.default.div`
  min-height: 68px;
  width: 100%;
  padding-top: 56.25%;
  grid-area: 1 / 1;
`;hc.displayName="ImgMinHeightDiv";const hf=d.default.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	display: flex;
`;hf.displayName="ImgLabelDiv";const jf=d.default(h.ButtonSmall)`
	display: flex;
	height: 24px;
	min-width: 24px;
	padding-left: 8px;
	padding-right: 8px;
	align-self: center;
	align-items: center;
	justify-content: center;
	background: ${"#ffffff"};
	box-shadow: 0 0 0 1px ${"#ecedef"};
	margin: 7px;
	border-radius: 12px;
`;jf.displayName="ImgLabel";const kf=d.default.img`
	grid-area: 1 / 1;
	overflow: hidden;
	filter: ${(a)=>null!=a.filterUrl?"url("+a.filterUrl+")":void 0};
	max-width: 100%;
	max-height: 100%;
	opacity: ${(a)=>a.disabled?f.disabledOpacity:1};
	visibility: visible;

	${F}:hover & {
		${(a)=>a.hideOnHover?"visibility: hidden;":""};
`;kf.displayName="StyledImage";const lf=d.default.canvas`
	grid-area: 1 / 1;
	overflow: hidden;
	filter: ${(a)=>null!=a.filterUrl?"url("+a.filterUrl+")":void 0};
	max-width: 100%;
	max-height: 100%;
	opacity: ${(a)=>a.disabled?f.disabledOpacity:1};
	visibility: visible;

	${F}:hover & {
		${(a)=>a.hideOnHover?"visibility: hidden;":""};
`;lf.displayName="StyledCanvas";class mf extends b.PureComponent{constructor(){super(...arguments);this.setCanvasRef=(a)=>this.canvasRef=a}drawCanvas(){null!=this.canvasRef&&(this.canvasRef.width=this.props.canvas.width,this.canvasRef.height=this.props.canvas.height,this.canvasRef.getContext("2d").drawImage(this.props.canvas,0,0))}componentDidMount(){this.drawCanvas()}componentDidUpdate(){this.drawCanvas()}render(){return b.createElement(lf,{ref:this.setCanvasRef,draggable:!1,onDragStart:(a)=>{a.preventDefault()},
title:this.props.title,filterUrl:this.props.filterUrl,disabled:this.props.disabled,hideOnHover:this.props.hideOnHover})}}mf.displayName="CanvasImage";const nf=d.default.img`
	width: 100%;
`;nf.displayName="StyledErrorImage";const of=d.default.div`
	width: 100%;
	display: grid;
	grid: auto / auto;
	flex-grow: 1;
	box-shadow: 0 0 0 1px ${"#d3d6da"};
`;of.displayName="ErrorWrapper";const pf=d.default.div`
	grid-area: 1 / 1;
	display: flex;
	flex: 1;
`;pf.displayName="ErrorImageWrapper";u.ErrorItem=class extends b.PureComponent{render(){return b.createElement(of,{"data-lookup":this.props.dataLookup?`${this.props.dataLookup}`:void 0},b.createElement(hc,null),b.createElement(pf,{"data-lookup":this.props.dataLookup?`${this.props.dataLookup}-image`:void 0},b.createElement(nf,{draggable:!1,src:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='36' viewBox='0 14 64 36' fill='none'%3E%3Cpath d='M24.5 27C24.5 26.7239 24.7239 26.5 25 26.5H39C39.2761 26.5 39.5 26.7239 39.5 27V37C39.5 37.2761 39.2761 37.5 39 37.5H25C24.7239 37.5 24.5 37.2761 24.5 37V27ZM35.3839 28.6161L35.0303 28.9697L35.3839 28.6161C34.8957 28.128 34.1043 28.128 33.6161 28.6161L32 30.2322L30.3839 28.6161C29.8957 28.128 29.1043 28.128 28.6161 28.6161C28.128 29.1043 28.128 29.8957 28.6161 30.3839L30.2322 32L28.6161 33.6161C28.128 34.1043 28.128 34.8957 28.6161 35.3839C29.1043 35.872 29.8957 35.872 30.3839 35.3839L32 33.7678L33.6161 35.3839C34.1043 35.872 34.8957 35.872 35.3839 35.3839C35.872 34.8957 35.872 34.1043 35.3839 33.6161L35.0303 33.9697L35.3839 33.6161L33.7678 32L35.3839 30.3839C35.872 29.8957 35.872 29.1043 35.3839 28.6161Z' fill='%23D3D6DA' stroke='%23D3D6DA'/%3E%3C/svg%3E",
title:this.props.title||""})))}};u.ErrorItem.displayName="ErrorItem";const ic=d.default.img`
	position: absolute;
	top: 4px;
	left: 4px;
	width: 20px;
	height: 20px;
	background: ${(a)=>a.checked?"#1e55eb":"#ffffff"};
	box-shadow:inset 0 0 0 1px ${(a)=>a.checked?"#1e55eb":"#d3d6da"};
	border-radius: 50%;

	transition: background 0.2s ease;

		${F}:hover & {
			background: ${(a)=>a.checked?"#1e55eb":"#929aa3"};
		}
`;ic.displayName="CheckMarkImg";const qf=d.default.img`
	position: absolute;
	max-width: 100%;
	max-height: 100%;
	visibility: hidden;

	${F}:hover & {
		visibility: visible;
  };
`;qf.displayName="StyledHoverImage";const rf=d.default.svg`
	position: absolute;
	max-width: 100%;
	max-height: 100%;
	visibility: hidden;

	${F}:hover & {
		visibility: visible;
	};
`;rf.displayName="StyledSvg";const sf=d.default.video`
	position: absolute;
	width: 100%;
	height: 100%;
	visibility: hidden;

	${F}:hover & {
		visibility: visible;
	};
`;sf.displayName="StyledVideo";const jc=d.default(h.Caption)`
	display: block;
	left: 28px;
	margin: 8px 4px 8px 0;
	text-decoration: none;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	user-select: none;
	opacity: 0;
	cursor: ${(a)=>a.hasLink?"pointer":"default"};

	transform: translate(-8px, 0px);

	transition: transform 0.5s ease, opacity 0.5s ease;

	:hover :visited :active :link :focus {
		text-decoration: none;
	}

	${(a)=>a.hasLink?d.css`
		:after {
			position: absolute;
			bottom: 0;
			left: 0;
			content: "";
			width: 0%;
			height: 1px;
			background: ${"#374050"};

			transition: width 0.2s ease;
		}

		:hover:after {
			width: 100%;
		}
	`:""}

	${F}:hover & {
		transform: translate(0, 0);
		opacity: 0.8;

		${(a)=>a.hasLink?d.css`


			:hover {
				opacity: 1;
			}
		`:""}
	}
`;jc.displayName="InfoText";const tf=d.default.div`
	display: flex;
	flex-direction: row;
	overflow: hidden;
	height: 32px;
`;tf.displayName="InfoWrapper";const uf=A.tooltip(tf);uf.displayName="InfoWrapperWithTooltip";const vf=d.default.div`
	display: flex;
	flex-direction: row;
	background: white;
	overflow: hidden;
	height: 0px;

	${F}:hover & {
		box-shadow: ${f.BoxShadow.small};
		height: 32px;
		transition: height 0.5s ease;
		z-index: 11;
	}
`;vf.displayName="ShadowedInfoWrapper";const wf=d.default.div`
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
  top: 0;
  width: 100%;
  height: calc(100% + 0px);

  ${F}:hover & {
	height: calc(100% + 32px);
	transition: height 0.5s ease;
  }
`;wf.displayName="InfoOverlay";const kc=d.default(n.Icon)`
	display: flex;
	margin: 4px;
	opacity: 0.6;
	cursor: ${(a)=>a.hasLink?"pointer":"default"};
	transition: opacity 0.2s ease;

	${(a)=>a.hasLink?d.css`
		&:hover {
			opacity: 1;
		}`:""}
`;kc.displayName="InfoIcon";const xf=d.default.a`
	height: 32px;
	width: 100%;
	display: flex;
	flex-grow: 1;
	flex-direction: row;
	text-decoration: none;
	overflow: hidden;

	:hover {
		text-decoration: none;
	}
`;xf.displayName="StyledLink";const yf=d.default.div`
	height: 32px;
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-grow: 1;
	overflow: hidden;
`;yf.displayName="StyledWrapper";const fb=d.default.div`
	display: flex;
	flex: 1;
	overflow: hidden;
	text-decoration: none;
`;fb.displayName="Filler";class zf extends b.PureComponent{constructor(){super(...arguments);this.onClick=f.onClickWrapper(()=>null)}render(){return b.createElement(wf,{hasLink:!!this.props.url},b.createElement(vf,null,b.createElement(uf,{tooltipText:null!=this.props.tooltip?this.props.tooltip:this.props.text,tooltipPosition:"bottom",fitParent:null!=this.props.text},null!=this.props.url?b.createElement(xf,{href:this.props.url,target:"_blank",onClick:this.onClick},b.createElement(kc,{iconId:this.props.icon,
size:c.IconSize.Small,color:"#000000",hasLink:!0,dataLookup:`${this.props.listItemDataLookup}-info-icon`}),this.props.text&&b.createElement(fb,null,b.createElement(jc,{content:this.props.text,textColor:"dark",hasLink:!0,dataLookup:`${this.props.listItemDataLookup}-info-text`}))):b.createElement(yf,null,b.createElement(kc,{iconId:this.props.icon,size:c.IconSize.Small,color:"#000000",hasLink:!1,dataLookup:`${this.props.listItemDataLookup}-info-icon`}),this.props.text&&b.createElement(fb,null,b.createElement(jc,
{content:this.props.text,textColor:"dark",hasLink:!1,dataLookup:`${this.props.listItemDataLookup}-info-text`})))),!this.props.text&&b.createElement(fb,null)))}}zf.displayName="ImageInfo";const Mi=d.default.div`
	position: absolute;
	top: calc(100% - 40px);
	left: calc(100% - 40px);
	padding: 8px;
`;class ca extends b.PureComponent{constructor(){super(...arguments);this.hasVideoLoaded=!1;this.onIntersect=(a)=>{a&&this.props.requestImage()};this.handleVideoPlay=()=>{null!=this.props.hoverContent&&this.props.hoverContent.type===c.HoverContentType.video&&this.hasVideoLoaded&&this.videoRef.paused&&(this.videoRef.currentTime=0,this.playPromise=this.videoRef.play())};this.handleVideoPause=()=>{null!=this.props.hoverContent&&this.props.hoverContent.type===c.HoverContentType.video&&null!=this.playPromise&&
this.playPromise.then(()=>this.videoRef.pause())}}componentDidMount(){null!=this.videoRef&&(this.videoRef.oncanplaythrough=()=>{this.hasVideoLoaded=!0})}render(){var a=this.props.src,e=this.props.title,d=this.props.blendColor;let v=null,l=null;null!=d&&(l=`r${d.r}g${d.g}b${d.b}i${d.intensity}`,v=b.createElement(c.ColorFilter,{id:l,intensity:d.intensity,r:d.r,g:d.g,b:d.b}));d=()=>b.createElement(R.ImageSpinner,{spinnerSize:c.SpinnerSize.s,color:c.SpinnerColor.neutral});const q=null==a?d():"aspectRatio"in
a?b.createElement(R.ImageSpinner,{spinnerSize:c.SpinnerSize.s,color:c.SpinnerColor.neutral,ratio:a.aspectRatio.width/a.aspectRatio.height}):"url"in a?null==a.url?d():b.createElement(kf,{draggable:!1,onDragStart:(a)=>{a.preventDefault()},src:a.url,title:e||"",filterUrl:null!=v?"#"+l:void 0,disabled:this.props.disabled,hideOnHover:null!=this.props.hoverContent}):null==a.canvas?d():b.createElement(mf,{canvas:a.canvas,title:e||"",filterUrl:null!=v?"#"+l:void 0,disabled:this.props.disabled,hideOnHover:null!=
this.props.hoverContent});let p=null;this.props.checked===c.CheckedState.checked?p=b.createElement(ic,{src:"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.52494 15.0962L5.98941 11.5606L4.5752 12.9749L8.11073 16.5104L9.52494 17.9246L10.9392 16.5104L19.4244 8.02511L18.0102 6.61089L9.52494 15.0962Z' fill='white'/%3E%3C/svg%3E","data-lookup":`rounded-checkbox-${this.props.listItemDataLookup}`,
checked:!0}):this.props.checked===c.CheckedState.unchecked&&(p=b.createElement(ic,{src:"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.52494 15.0962L5.98941 11.5606L4.5752 12.9749L8.11073 16.5104L9.52494 17.9246L10.9392 16.5104L19.4244 8.02511L18.0102 6.61089L9.52494 15.0962Z' fill='white'/%3E%3C/svg%3E","data-lookup":`rounded-uncheckbox-${this.props.listItemDataLookup}`,checked:!1}));
a=this.props.hoverContent;let f=null;null!=a&&(a.type===c.HoverContentType.image?f=b.createElement(qf,{draggable:!1,src:a.url,title:e||""}):a.type===c.HoverContentType.video&&(f=Oa.FeatureSwitcher.isActive("js-plugin-e2e-run")?b.createElement(rf,{version:"1.1",xmlns:"http://www.w3.org/2000/svg"},b.createElement("rect",{width:"100%",height:"100%",fill:"red"})):b.createElement(sf,{preload:"auto",autoPlay:!1,muted:!0,loop:!0,ref:(a)=>{this.videoRef=a}},b.createElement("source",{src:a.url,type:"video/mp4"}))));
e=this.props.info;const h=null==e?null:b.createElement(zf,{icon:e.icon,text:e.text,url:e.url,tooltip:e.tooltip,listItemDataLookup:this.props.listItemDataLookup}),k=sh(this.props.listItemDataLookup,this.props.primaryAction,this.props.onMore,this.props.actions,this.props.popupIds,this.props.actionWrapperPosition,this.props.stickyActions),m=null!=this.props.badge?b.createElement(Mi,null,b.createElement(M.IconButtonWithTooltip,{id:`${this.props.listItemDataLookup}-badge`,iconId:this.props.badge,onClick:()=>
{},disabled:!0,tooltipText:this.props.badgeTooltipText})):null,n=null==this.props.label?null:b.createElement(hf,null,b.createElement(jf,{content:this.props.label}));return b.createElement(J.Observer,{onIntersect:null==this.props.requestImage?null:this.onIntersect,item:(a)=>b.createElement(F,{"data-lookup":`blended-image-${this.props.listItemDataLookup}`,ref:a,onMouseMove:this.handleVideoPlay,onMouseLeave:this.handleVideoPause,addChecker:this.props.addChecker},b.createElement(hc,null),v,q,f,h,n,k,
m,p)})}}ca.displayName="BlendedImage";d.default.img`
	position: absolute;
	top: 8px;
	left: 8px;
	visibility: hidden;
	background: ${f.alphaColor("#051225",.8)};
	border-radius: 4px;

	${(a)=>!a.isChecked&&a.isInteractive?d.css`

		${db}:hover & {
			visibility: visible;
		}

		${gc}:hover & {
			visibility: visible;
		}

		&:hover {
			background: ${f.alphaColor("#1e55eb",.8)};
			box-shadow:inset 0 0 0 1px ${"#ffffff"};
		}`:""};
`.displayName="EditableImg";u.Image=class extends b.PureComponent{constructor(){super(...arguments);this.onClick=f.onClickWrapper(()=>this.props.disabled?null:this.props.onClick)}render(){return b.createElement(db,{selected:this.props.selected,disabled:this.props.disabled,onClick:this.onClick,"data-lookup":this.props.dataLookup,isChecked:this.props.checked===c.CheckedState.checked,isInteractive:!this.props.disabled},b.createElement(ca,Object.assign({},(0,u.createBlendedImageProps)(this.props))))}};
u.Image.displayName="Image";const lc=d.default(db)`
	position: relative;
	width: 100%;
	height: 100%;
`;lc.displayName="LockedImageDiv";const Af=d.default.img`
	position: absolute;
	left: 8px;
	bottom: 8px;
	width: 24px;
	height: 24px;
	background: ${f.alphaColor("#051225",.8)};
	padding: 4px 6px;
	border-radius: 4px;
	z-index: 2;

		${lc}:hover & {
			background: ${"#dfab29"};
		}
`;Af.displayName="NewLockedImg";const Bf=d.default.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;Bf.displayName="ImageWrapper";const Ni=A.tooltip(Bf);u.LockedImage=class extends b.PureComponent{constructor(){super(...arguments);this.onClick=f.onClickWrapper(()=>this.isInteractive()?this.props.onClick:null)}isInteractive(){return!this.props.disabled}render(){const a={src:this.props.src,requestImage:null,title:this.props.title,blendColor:this.props.blendColor,checked:c.CheckedState.none,disabled:this.props.disabled,primaryAction:null,actions:null,label:null,actionWrapperPosition:null,listItemDataLookup:this.props.dataLookup,
hoverContent:null,info:null,onMore:null,popupIds:null,stickyActions:!1},e=this.isInteractive();return b.createElement(lc,{selected:!1,disabled:this.props.disabled,onClick:this.onClick,onDoubleClick:null,"data-lookup":this.props.dataLookup,isChecked:!1,isInteractive:e},b.createElement(Ni,{tooltipText:this.props.tooltipText,tooltipPosition:"bottom",fitParent:!0},b.createElement(ca,Object.assign({},a)),b.createElement(Af,{src:"data:image/svg+xml,%3Csvg width='12' height='16' viewBox='0 0 12 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4 4C4 2.89543 4.89543 2 6 2C7.10457 2 8 2.89543 8 4V6H4V4ZM2 6V4C2 1.79086 3.79086 0 6 0C8.20914 0 10 1.79086 10 4V6H11C11.5523 6 12 6.44772 12 7V15C12 15.5523 11.5523 16 11 16H1C0.447715 16 0 15.5523 0 15V7C0 6.44772 0.447715 6 1 6H2Z' fill='white'/%3E%3C/svg%3E%0A",
"data-lookup":"lock"})))}};u.LockedImage.displayName="Image";u.DroppableImage=class extends b.PureComponent{constructor(){super(...arguments);this.onDragStart=(a)=>{if(!this.props.disabled&&null!=this.props.getDropData){let b="prezi-data";null!=this.props.preziDataMimeParams&&0<this.props.preziDataMimeParams&&(b+="/"+this.props.preziDataMimeParams);a.dataTransfer.setData(b,JSON.stringify(this.props.getDropData()))}};this.onClick=f.onClickWrapper(()=>this.props.disabled?null:this.props.onClick)}render(){const a=
!this.props.disabled;return b.createElement(gc,{draggable:a&&null!=this.props.getDropData,"data-lookup":this.props.dataLookup,onDragStart:this.onDragStart,selected:this.props.selected,disabled:this.props.disabled,onClick:this.onClick,isChecked:this.props.checked===c.CheckedState.checked,isInteractive:a},b.createElement(ca,Object.assign({},(0,u.createBlendedImageProps)(this.props))))}};u.DroppableImage.displayName="DroppableImage";const mc=d.default.div`
	width: 100%;
	height: 100%;
	background: ${f.alphaColor("#051225",.8)};
	position: absolute;
	display: flex;
	flex-direction: column;
	visibility: hidden;
	z-index: 2;
`;mc.displayName="FolderHoverDiv";const Cf=d.default(cb)`
	border: none;
	border-radius: 4px;
	overflow: hidden;
	position: relative;
	flex-direction: row;
	${(a)=>!a.isChecked&&a.isInteractive?d.css`
		&:hover ${mc} {
			visibility: visible;
		}`:""};
	box-shadow: ${f.BoxShadow.small};
`;Cf.displayName="FolderDiv";const Df=d.default.div`
	width: ${40}px;
	height: ${40}px;
	border: solid 1px ${"#b1b8be"};
	border-radius: ${20}px;
	margin: auto;
	display: flex;
`;Df.displayName="CircleDiv";const Ef=d.default(n.ArrowLineRightIcon).attrs({color:"#ffffff"})`
	margin: auto;
`;Ef.displayName="Arrow";u.Folder=class extends b.PureComponent{constructor(){super(...arguments);this.onClick=f.onClickWrapper(()=>this.props.disabled?null:this.props.onClick)}render(){const a={src:this.props.src,requestImage:this.props.requestImage,title:this.props.title,blendColor:this.props.blendColor,checked:this.props.checked,popupIds:this.props.popupIds,label:this.props.label,disabled:!1,stickyActions:!1,onMore:null,info:null,hoverContent:null,listItemDataLookup:this.props.dataLookup,actionWrapperPosition:null,
actions:null,primaryAction:null};return b.createElement(Cf,Object.assign({},{disabled:this.props.disabled,isChecked:this.props.checked===c.CheckedState.checked,isInteractive:!this.props.disabled,selected:this.props.selected},{onClick:this.onClick,"data-lookup":this.props.dataLookup}),b.createElement(ca,Object.assign({},a)),b.createElement(mc,null,b.createElement(Df,null,b.createElement(Ef,null))))}};const Ff=d.default.div`
	visibility: hidden;
	cursor: default;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`,nc=d.default.div`
	height: 24px;
	display: flex;
	flex-grow: 1;
	background: ${"#374050"};
	border-radius: 4px;
	align-items: center;

	&:hover ${Ff} {
		visibility: visible;
	}
`;nc.displayName="TextListItemDiv";const Gf=d.default.div`
	width: 1px;
	height: 16px;
	margin-left: 4px;
	margin-right: 4px;
	display: flex;
	background: ${"#747c87"};
`;Gf.displayName="TextListItemSeparatorDiv";const Hf=d.default(h.ButtonSmall)`
	white-space: nowrap;
	margin-left: 4px;
	margin-right: 4px;
`;Hf.displayName="TextListItemTitleLabel";const If=d.default(h.Caption)`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	margin-left: 4px;
	margin-right: 4px;
	flex-grow: 1;
`;If.displayName="TextListItemTextLabel";u.TextListItem=class extends b.PureComponent{constructor(){super(...arguments);this.onClick=f.onClickWrapper(()=>this.props.onClick);this.onDelete=f.onClickWrapper(()=>this.props.onDeleteClick)}render(){return b.createElement(nc,{"data-lookup":this.props.dataLookup,onClick:this.onClick},null!=this.props.icon?null!=this.props.tooltipText?b.createElement(n.IconWithTooltip,{tooltipText:this.props.tooltipText,iconId:this.props.icon,size:c.IconSize.Small,color:"#ffffff"}):
b.createElement(n.Icon,{iconId:this.props.icon,size:c.IconSize.Small,color:"#ffffff"}):null,null!=this.props.title?b.createElement(Hf,{content:this.props.title,textColor:"light"}):null,null!=this.props.title&&null!=this.props.text?b.createElement(Gf,null):null,b.createElement(If,{content:this.props.text,textColor:"light"}),null==this.props.onDeleteClick?null:b.createElement(Ff,null,b.createElement("div",{onClick:this.onDelete,"data-lookup":`${this.props.dataLookup}-delete-element`},b.createElement(n.Icon,
{iconId:c.IconSmallId.Trash,size:c.IconSize.Small,color:"#ffffff"}))))}};u.TextListItem.displayName="TextListItem";const Jf=d.default.div`
	display: flex;
	flex-direction: column;
	background: ${"#f6f7f9"};
	padding-top: 4px;
	margin-bottom: 6px;
`;Jf.displayName="TimelineMainItemDiv";const Kf=d.default.div`
	display: flex;
	margin-top: 16px;
	margin-bottom: 8px;
	margin-left: 24px;
	margin-right: 24px;
`;Kf.displayName="TimelineMainTopDiv";const Lf=d.default.div`
	display: flex;
	width: 198px;
	margin: 1px;
	border-radius: 4px;
	& ${F} {
		border-radius: 4px;
		overflow: hidden;
	}
	& ${F} {
		${(a)=>qa(a)};
		${(a)=>eb(a)};
	}
`;Lf.displayName="TimelineMainImageDiv";const Mf=d.default.div`
	display: flex;
	flex-direction: column;
	margin-top: 4px;
	margin-left: -8px;
	width: 24px;
	align-self: flex-start;
	background: white;
`;Mf.displayName="TimelineBadgesDiv";const Nf=d.default.div`
	display: flex;
	flex-direction: column;
	width: 24px;
`;Nf.displayName="TimelineMainBadgesDiv";const oc=d.default.div`
	display: flex;
	flex-direction: column;
	margin-top: 10px;
	margin-bottom: 10px;
`;oc.displayName="TimelineItemDiv";const Of=d.default.div`
	display: flex;
`;Of.displayName="TimelineTopDiv";const pc=d.default(h.Caption)`
	margin-top: 0px;
	margin-bottom: 4px;
	margin-left: 52px;
	margin-right: 48px;
	width: 172px;
	text-align: center;
	height: 16px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`,Pf=d.default(pc)`
	margin-top: 0px;
	margin-bottom: 4px;
	margin-left: 24px;
	margin-right: 48px;
	width: 200px;
`;Pf.displayName="TimelineMainTitleLabel";pc.displayName="TimelineTitleLabel";const Qf=d.default.div`
	display: flex;
	margin-top: 4px;
	margin-bottom: 8px;
	width: 48px;
	align-items: center;
	justify-content: flex-end;
`;Qf.displayName="TimelineLeftDiv";const Rf=d.default.div`
	width: 20px;
	height: 20px;
	margin-right: 2px;
	background: ${"#dfe1e4"};
	border-radius: 10px;
	border-width: 4px;
	border-style: solid;
	border-color: ${"#ffffff"};
`;Rf.displayName="TimelineDotDiv";const Sf=d.default.div`
	display: flex;
	width: 170px;
	margin: 1px;
	${(a)=>a.rounded?d.css`
	& ${F} {
		border-radius: 4px;
		overflow: hidden;
	}`:""};
	& ${F} {
		${(a)=>qa(a)};
		${(a)=>eb(a)};
	}
`;Sf.displayName="TimelineImageDiv";const Tf=(a)=>a.map((a,d)=>b.createElement(n.Icon,{key:d,dataLookup:`badge-${a}`,iconId:a,size:c.IconSize.Small,color:"#b1b8be"})),Uf=d.default.div`
	display: flex;
	flex-direction: column;
`;Uf.displayName="TimelineImageColumnDiv";const Vf=(a)=>a?d.css`
	border-bottom-color: ${"#d3d6da"};
	border-bottom-width: 1px;
	border-bottom-style: solid`:"",Wf=d.default.div`
	display: flex;
	height: 3px;
	${(a)=>Vf(a.showDeck)};
	margin-left: 4px;
	margin-right: 4px;
`;Wf.displayName="TimelineDeckBottom1Div";const Xf=d.default.div`
	display: flex;
	height: 3px;
	${(a)=>Vf(a.showDeck)};
	margin-left: 7px;
	margin-right: 4px;
`;Xf.displayName="TimelineDeckBottom2Div";const Oi=d.default.div`
	display: flex;
	flex-grow: 1;
`,Yf=(a)=>a?d.css`
	border-right-color: ${"#d3d6da"};
	border-right-width: 1px;
	border-right-style: solid`:"",Zf=d.default.div`
	display: flex;
	width: 3px;
	${(a)=>Yf(a.showDeck)};
	margin-top: 8px;
`;Zf.displayName="TimelineDeckRight1Div";const $f=d.default.div`
	display: flex;
	width: 3px;
	${(a)=>Yf(a.showDeck)};
	margin-top: 11px;
`;$f.displayName="TimelineDeckRight2Div";const Pi=d.default.div`
	display: flex;
	width: 12px;
	margin-left: -4px;
	height: 12px;
	${(a)=>a.showDeck?d.css`background: radial-gradient(circle at 0 0, transparent 6px, ${"#d3d6da"} 6px 7px, transparent 7px 9px, ${"#d3d6da"} 9px 10px, transparent 10px)`:""};
`;d.default(h.ButtonSmall)`
	height: 16px;
`.displayName="TimelineNumberLabel";const ag=d.default.div`
	display: flex;
	flex-direction: column;
	width: 4px;
`;ag.displayName="TimelineImageLeftDiv";const bg=d.default.div`
	display: flex;
	flex-direction: column;
	width: 8px;
`;bg.displayName="TimelineImageRightDiv";const cg=d.default.div`
	display: flex;
	height: 4px;
`;cg.displayName="TimelineImageTopDiv";const dg=d.default.div`
	display: flex;
	${(a)=>a.vertical?d.css`flex-direction: column`:""};
	height: 8px;
`;dg.displayName="TimelineImageBottomDiv";class qc extends b.PureComponent{constructor(){super(...arguments);this.onClick=f.onClickWrapper(()=>this.props.disabled?null:this.props.onClick);this.onMouseMove=(a)=>{var b,c;this.props.disabled||(null===(c=null===(b=this.props.reorderCallbacks)||void 0===b?void 0:b.onMouseMove)||void 0===c?void 0:c.call(b,a))};this.onMouseDown=(a)=>{var b,c;this.props.disabled||(null===(c=null===(b=this.props.reorderCallbacks)||void 0===b?void 0:b.onMouseDown)||void 0===
c?void 0:c.call(b,a))}}render(){const a=this.props.selected?{"data-selected":"selected"}:{};return b.createElement(oc,null,b.createElement(Of,null,b.createElement(Qf,null,b.createElement(Rf,null)),b.createElement(ag,null,this.props.imageLeftDiv),b.createElement(Uf,null,b.createElement(cg,null,this.props.imageTopDiv),b.createElement(Sf,Object.assign({"data-lookup":this.props.dataLookup,rounded:this.props.rounded,isChecked:this.props.isChecked,isInteractive:this.props.isInteractive,selected:this.props.selected,
disabled:this.props.disabled,onClick:this.onClick,onMouseMove:this.onMouseMove,onMouseDown:this.onMouseDown,isDraggable:this.props.isDraggable},a),this.props.image),b.createElement(dg,{vertical:this.props.bottomDivVertical},this.props.imageBottomDiv)),b.createElement(bg,null,this.props.imageRightDiv),b.createElement(Mf,{"data-lookup":"badges"},Tf(this.props.badges))),b.createElement(pc,{content:this.props.title}))}}qc.displayName="TimelineImageItem";u.TimelineDeckItem=class extends b.PureComponent{render(){return b.createElement(qc,
{dataLookup:this.props.dataLookup,imageLeftDiv:null,imageTopDiv:null,imageBottomDiv:b.createElement(b.Fragment,null,b.createElement(Wf,{showDeck:this.props.showDeck}),b.createElement(Xf,{showDeck:this.props.showDeck})),imageRightDiv:b.createElement(b.Fragment,null,b.createElement(Oi,null,b.createElement(Zf,{showDeck:this.props.showDeck}),b.createElement($f,{showDeck:this.props.showDeck})),b.createElement(Pi,{showDeck:this.props.showDeck})),image:b.createElement(ca,Object.assign({},(0,u.createBlendedImageProps)(this.props))),
bottomDivVertical:!0,rounded:!0,badges:this.props.badges,title:this.props.title,selected:this.props.selected,disabled:this.props.disabled,isChecked:this.props.checked===c.CheckedState.checked,isInteractive:!this.props.disabled,onClick:this.props.onClick,reorderCallbacks:this.props.reorderCallbacks,isDraggable:this.props.isDraggable})}};u.TimelineDeckItem.displayName="TimelineDeckItem";u.TimelineMainItem=class extends b.PureComponent{constructor(){super(...arguments);this.onClick=f.onClickWrapper(()=>
this.props.disabled?null:this.props.onClick);this.onMouseMove=(a)=>{var b,c;this.props.disabled||(null===(c=null===(b=this.props.reorderCallbacks)||void 0===b?void 0:b.onMouseMove)||void 0===c?void 0:c.call(b,a))};this.onMouseDown=(a)=>{var b,c;this.props.disabled||(null===(c=null===(b=this.props.reorderCallbacks)||void 0===b?void 0:b.onMouseDown)||void 0===c?void 0:c.call(b,a))}}render(){return b.createElement(Jf,{"data-lookup":"timeline-main-item"},b.createElement(Kf,null,b.createElement(Lf,Object.assign({onClick:this.onClick,
"data-lookup":this.props.dataLookup,isChecked:this.props.checked===c.CheckedState.checked,selected:this.props.selected,onMouseMove:this.onMouseMove,onMouseDown:this.onMouseDown,isDraggable:this.props.isDraggable,isInteractive:!this.props.disabled,disabled:this.props.disabled},this.props.selected?{"data-selected":"selected"}:{}),b.createElement(ca,Object.assign({},(0,u.createBlendedImageProps)(this.props)))),b.createElement(Nf,{"data-lookup":"badges"},Tf(this.props.badges))),b.createElement(Pf,{content:this.props.title}))}};
u.TimelineMainItem.displayName="TimelineMainItem";const gb=(a,b)=>d.default.div`
		display: flex;
		width: 3px;
		height: 3px;
		align-self: flex-start;
		margin-${b}: 1px;
		margin-${a}: ${"bottom"===a?5:1}px;
		border-color: ${"#b1b8be"};
		border-${a}-width: 1px;
		border-${a}-style: solid;
		border-${b}-width: 1px;
		border-${b}-style: solid;
	`,eg=gb("top","left");eg.displayName="TimelineFrameTopLeftDiv";const fg=gb("top","right");fg.displayName="TimelineFrameTopRightDiv";const gg=gb("bottom","left");gg.displayName="TimelineFrameBottomLeftDiv";const hg=gb("bottom","right");hg.displayName="TimelineFrameBottomRightDiv";const hb=(a)=>{const b="top"===a||"bottom"===a;return d.default.div`
		display: flex;
		${b?"width":"height"}: 12px;
		${b?"height":"width"}: 3px;
		align-self: flex-start;
		margin-${a}: 1px;
		border-color: ${"#b1b8be"};
		border-${a}-width: 1px;
		border-${a}-style: solid;
	`},rc=hb("top");rc.displayName="TimelineFrameTopDiv";const sc=hb("bottom");sc.displayName="TimelineFrameBottomDiv";const tc=hb("left");tc.displayName="TimelineFrameLeftDiv";const uc=hb("right");uc.displayName="TimelineFrameRightDiv";const ib=d.default.div`
	display: flex;
	flex-basis: 0;
	flex-grow: 1;
`;u.TimelineFrameItem=class extends b.PureComponent{render(){return b.createElement(qc,{dataLookup:this.props.dataLookup,imageLeftDiv:b.createElement(b.Fragment,null,b.createElement(eg,null),b.createElement(tc,null),b.createElement(ib,null),b.createElement(tc,null),b.createElement(gg,null)),imageTopDiv:b.createElement(b.Fragment,null,b.createElement(rc,null),b.createElement(ib,null),b.createElement(rc,null)),imageBottomDiv:b.createElement(b.Fragment,null,b.createElement(sc,null),b.createElement(ib,
null),b.createElement(sc,null)),imageRightDiv:b.createElement(b.Fragment,null,b.createElement(fg,null),b.createElement(uc,null),b.createElement(ib,null),b.createElement(uc,null),b.createElement(hg,null)),image:b.createElement(ca,Object.assign({},(0,u.createBlendedImageProps)(this.props))),bottomDivVertical:!1,rounded:!1,badges:this.props.badges,title:this.props.title,selected:this.props.selected,disabled:this.props.disabled,isChecked:this.props.checked===c.CheckedState.checked,isInteractive:!this.props.disabled,
onClick:this.props.onClick,reorderCallbacks:this.props.reorderCallbacks,isDraggable:this.props.isDraggable})}};u.TimelineFrameItem.displayName="TimelineDeckItem";const Qi=d.default(oc)`
	flex-direction: row;
	margin-top: 10px;
	margin-bottom: 10px;
`,Ri=A.tooltip(d.default.div`
	margin-left: 20px;
	width: 32px;
	height: 32px;
	border-radius: 16px;
	border-color: ${"#ffffff"};
	border-width: 4px;
	border-style: solid;
	background: ${"#374050"};
	justify-content: center;
	align-items: center;
	&:hover {
		background: ${"#747c87"};
	};
	display: flex;
`),Si=d.default.div`
	display: flex;
	margin-right: 48px;
	margin-top: 4px;
	margin-bottom: 4px;
	width: 172px;
	border-radius: 4px;
	${(a)=>qa(a)};
	${(a)=>eb(a)};
	& ${nc} {
		max-width: 100%;
	}
`;u.TimelineTextItem=class extends b.PureComponent{constructor(){super(...arguments);this.onMouseMove=(a)=>{var b,c;null===(c=null===(b=this.props.reorderCallbacks)||void 0===b?void 0:b.onMouseMove)||void 0===c?void 0:c.call(b,a)};this.onMouseDown=(a)=>{var b,c;null===(c=null===(b=this.props.reorderCallbacks)||void 0===b?void 0:b.onMouseDown)||void 0===c?void 0:c.call(b,a)}}render(){return b.createElement(Qi,null,b.createElement(Ri,{"data-lookup":this.props.timelineAction.id,onClick:this.props.timelineAction.onClick,
tooltipPosition:"bottom",tooltipText:this.props.timelineAction.title},b.createElement(n.Icon,{iconId:this.props.timelineAction.icon,size:c.IconSize.Small,color:"#ffffff"})),b.createElement(Si,{isInteractive:!0,isChecked:!1,disabled:!1,selected:!1,onMouseMove:this.onMouseMove,onMouseDown:this.onMouseDown,isDraggable:this.props.isDraggable},b.createElement(u.TextListItem,{text:this.props.text,onClick:this.props.onClick,title:this.props.title,tooltipText:this.props.tooltipText,dataLookup:this.props.dataLookup,
onDeleteClick:this.props.onDeleteClick,icon:this.props.icon})))}};u.TimelineTextItem.displayName="TimelineDeckItem";var jb={};Object.defineProperty(jb,"__esModule",{value:!0});jb.MenuButton=class extends b.PureComponent{constructor(){super(...arguments);this.getPopupCorrection=(a,b)=>{if(b===c.ExtendedButtonSize.PropertyBar)return{x:4,y:0};switch(a){case "bottom":return{x:0,y:-8};case "top":return{x:0,y:8};case "left":return{x:4,y:0};case "right":return{x:-4,y:0};default:return x.Utils.assertNever(a)}}}render(){var a,
d,g;const v=-1!==this.props.popupIds.indexOf(`${this.props.id}-popupOpener-popup`),l={content:this.props.content,size:this.props.size,showArrow:this.props.showArrow?f.getArrowType(null!==(a=this.props.popupPosition)&&void 0!==a?a:"bottom"):null,disabled:this.props.disabled,id:`${this.props.id}-button`,onClick:this.props.onDropdownClick,popupOpener:!0,className:this.props.className,dataLookup:`${this.props.dataLookup}-button`,shape:this.props.shape,tooltipText:this.props.tooltipText,tooltipPosition:this.props.tooltipPosition,
fitParent:this.props.fitParent,flexibleWidth:this.props.flexibleWidth,buttonColor:this.props.buttonColor,focused:v};return b.createElement(K.ComboButtonContainer,{"data-lookup":this.props.id,focused:v,disabled:this.props.disabled,flexibleWidth:null!==(d=this.props.flexibleWidth)&&void 0!==d?d:!1},b.createElement(c.MenuOpener,{id:`${this.props.id}-popupOpener`,popupIds:this.props.popupIds,parentIds:this.props.parentIds,popupPosition:this.props.popupPosition,popupCorrection:this.getPopupCorrection(null!=
this.props.popupPosition?this.props.popupPosition:"bottom",this.props.size),hidePopupPointer:this.props.hidePopupPointer,alignment:null!==(g=this.props.popupAlignment)&&void 0!==g?g:"center",sidebarItem:b.createElement(c.NormalButton,Object.assign({key:`${this.props.id}-button`},l)),actions:this.props.actions,fullWidth:this.props.flexibleWidth}))}};jb.MenuButton.displayName="MenuButton";var kb={};Object.defineProperty(kb,"__esModule",{value:!0});const ig=d.default.div`
	display: flex;

	${(a)=>a.fullWidth?d.css`

		width: 100%;
	`:""}
`;ig.displayName="MenuOpenerWrapper";const jg=d.default.div`
	padding: 8px 0;
`;jg.displayName="StyledMenuPopup";kb.MenuOpener=class extends b.PureComponent{constructor(){super(...arguments);this.setPopupRef=(a)=>this.popupRef=a}componentDidUpdate(){null!=this.popupRef&&this.popupRef.adjustPosition()}render(){var a,d;const g=`${this.props.id}-popup`,v=-1!==this.props.popupIds.indexOf(g);let l=0;return b.createElement(ig,{fullWidth:null!==(a=this.props.fullWidth)&&void 0!==a?a:!1},this.props.sidebarItem,v&&null!=this.props.actions&&1<this.props.actions.length?b.createElement(t.StyledPopup,
{id:g,ref:this.setPopupRef,position:null!==(d=this.props.popupPosition)&&void 0!==d?d:"bottom",hidePointer:this.props.hidePopupPointer,alignment:this.props.alignment,popupCorrection:this.props.popupCorrection,pointerCorrection:this.props.pointerCorrection},b.createElement(jg,null,this.props.actions.map((a,d)=>a===c.DropdownMenuSeparatorConst?b.createElement(c.DropdownMenuSeparator,{key:`${g}-separator-${l++}`}):"content"in a?b.createElement(c.DropdownMenuSectionHeader,{key:d,content:a.content,bottomPadding:a.bottomPadding}):
b.createElement(c.DropdownMenuItem,{id:`${g}-${a.id}`,key:d,onClick:f.onClickWrapper(()=>a.onClick),enabled:a.enabled,icon:a.icon,title:a.title})))):null)}};kb.MenuOpener.displayName="MenuOpener";var xa={};Object.defineProperty(xa,"__esModule",{value:!0});const {default:kg}=d;xa.CloseButton=kg.div`
	background-color: ${f.alphaColor("#000000",.4)};
	border: none;
	border-radius: 8px;
	color: ${"#ffffff"};
	cursor: default;
	height: 16px;
	width: 16px;
	position: absolute;
	right: 8px;
	top: 8px;
	font-size: 10px;
	padding: 3px;
	transition: 0.2s;
	&:hover {
		background-color: ${f.alphaColor("#000000",.8)};
	}
`;xa.CloseButton.displayName="CloseButton";const Ti=kg.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	display: flex;
`;xa.CalloutCloseButton=class extends b.PureComponent{render(){return b.createElement(xa.CloseButton,Object.assign({},this.props,{"data-widget":"callout-close-button"}),b.createElement(Ti,null,b.createElement(n.CalloutCloseIcon,{color:"#ffffff"})))}};var vc={};Object.defineProperty(vc,"__esModule",{value:!0});const {default:wc}=d,xc=wc.div`
	text-align: left;
	display: flex;
	flex-grow: 1;
`;xc.displayName="CalloutNavigationBar";vc.CalloutNavigationBar=class extends b.PureComponent{render(){return b.createElement(xc,null,this.props.steps&&b.createElement(Ui,{inline:!0,content:I.I18n.tsFormatKeys("{currentStep} of {lastStep}",{currentStep:this.props.steps.currentStep,lastStep:this.props.steps.lastStep}),textColor:"light",hasButtons:null!=this.props.buttons,disabled:!0}),b.createElement(Vi,null,this.props.buttons&&this.props.buttons.map((a)=>b.createElement(k.GrayButtonDark,{key:a.id,
id:a.id,onClick:a.onClick,content:{text:a.text},size:c.ExtendedButtonSize.Small}))))}};const Ui=wc(h.Body2Alt)`
	margin: 8px 0px ${(a)=>a.hasButtons?"10px":"4px"} 4px;
	display: flex;
	align-items: flex-end;
`;xc.displayName="CalloutNavigationBar";const Vi=wc.div`
	display: flex;
	justify-content: flex-end;
	flex-wrap: wrap;
	flex: 1;
	text-align: right;
`;var yc={};Object.defineProperty(yc,"__esModule",{value:!0});const {default:zc}=d,lg=zc.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-bottom: 4px;
	overflow: hidden;
	pointer-events: none;
	position: relative;
`;lg.displayName="CalloutMedia";const Wi=zc.img`
	max-width: 100%;
	max-height: 100%;
	margin: auto;
`,Xi=zc.video`
	max-width: 100%;
	max-height: 100%;
	margin: auto;
`;yc.CalloutMediaWrapper=class extends b.PureComponent{render(){return b.createElement(lg,null,this.props.type===c.CalloutMediaTypes.Mp4?Oa.FeatureSwitcher.isActive("js-plugin-e2e-run")?b.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg"},b.createElement("rect",{width:"100%",height:"100%",fill:"red"})):b.createElement(Xi,{autoPlay:!0,loop:!0,onLoadedData:this.props.onLoad},b.createElement("source",{src:this.props.url,type:"video/mp4"})):b.createElement(Wi,{src:this.props.url,
onLoad:this.props.onLoad}))}};var T={};Object.defineProperty(T,"__esModule",{value:!0});T.PositionedTextCallout=class extends b.PureComponent{constructor(){super(...arguments);this.state={}}componentDidMount(){this.positionItems()}componentDidUpdate(){this.positionItems()}positionItems(){var a=this.props.holeBottomRight.x-this.props.holeTopLeft.x,b=this.props.holeBottomRight.y-this.props.holeTopLeft.y;const c=this.div.offsetWidth;var d=this.div.offsetHeight;switch(this.props.anchor){case "bottom":var l=
(a-c)/2;var f=b+7;break;case "left":l=-c-7;f=(b-d)/2;break;case "right":l=a+7;f=(b-d)/2;break;case "top":l=(a-c)/2;f=-d-7;break;default:throw Error(`invalid anchor ${this.props.anchor}`);}l+=this.props.holeTopLeft.x;f+=this.props.holeTopLeft.y;b=Math.max(5,Math.min(l,this.props.canvasWidth-c-5));a=Math.max(5,Math.min(f,this.props.canvasHeight-d-5));var p=b-l,z=a-f;f=l=this.arrowHead.offsetWidth;switch(this.props.anchor){case "top":p=c/2-l/2-p;z=d-f/2;break;case "bottom":p=c/2-l/2-p;z=-f/2;break;case "left":p=
c-l/2-1;z=d/2-f/2-z;break;case "right":p=-l/2-1;z=d/2-f/2-z;break;default:throw Error(`invalid anchor ${this.props.anchor}`);}d="left"===this.props.anchor||"right"===this.props.anchor?Math.max(10,Math.min(z,d-f-10)):z-1;this.arrowHead.style.left=`${Math.round("top"===this.props.anchor||"bottom"===this.props.anchor?Math.max(10,Math.min(p,c-l-10)):p)}px`;this.arrowHead.style.top=`${Math.round(d)}px`;this.div.style.left=`${Math.round(b)}px`;this.div.style.top=`${Math.round(a)}px`;null!=this.closeButton&&
(this.closeButton.style.top=`${this.props.content.title||246===c?8:14}px`)}render(){return b.createElement(T.PositionedTextCalloutDiv,{className:this.props.className,ref:(a)=>this.div=a},b.createElement(Yi,{anchor:this.props.anchor,ref:(a)=>this.arrowHead=a}),this.props.content.media&&b.createElement(yc.CalloutMediaWrapper,{url:this.props.content.media.url,type:this.props.content.media.type,onLoad:this.positionItems.bind(this)}),b.createElement(T.CalloutContentWrapper,null,this.props.content.title&&
b.createElement(mg,{content:this.props.content.title,textColor:"light",hasOnClose:null!=this.props.content.onClose,hasMedia:null!=this.props.content.media}),b.createElement(ng,{hasTitle:null!=this.props.content.title,hasOnClose:null!=this.props.content.onClose,hasMedia:null!=this.props.content.media},b.createElement(og,{content:this.props.content.text,textColor:"light"})),(this.props.content.steps||this.props.content.buttons)&&b.createElement(vc.CalloutNavigationBar,{steps:this.props.content.steps,
buttons:this.props.content.buttons})),this.props.content.onClose&&b.createElement(xa.CalloutCloseButton,{onClick:this.props.content.onClose,ref:(a)=>this.closeButton=Hc.findDOMNode(a)}))}};T.PositionedTextCallout.displayName="PositionedTextCallout";T.PositionedTextCallout.defaultProps={};const mg=d.default(h.Body1Alt)`
	color: ${"#ffffff"};
	margin: 0px 4px 8px 4px;
	padding-right: ${(a)=>a.hasOnClose&&!a.hasMedia?"16px":"0px"};
`;mg.displayName="CalloutTitle";const ng=d.default.div`
	padding-right: ${(a)=>!a.hasOnClose||a.hasTitle||a.hasMedia?"0px":"16px"};
	margin: 0px 4px 4px 4px;
`;ng.displayName="CalloutContent";const og=d.default(h.Body2Paragraph)`
	color: ${"#ffffff"};
`;og.displayName="CalloutParahraph";const Yi=d.default.div`
	border-top: 1px solid ${"#aa85f2"};
	border-right: 1px solid ${"#aa85f2"};
	background: ${"#481F99"};
	position: absolute;
	${(a)=>{switch(a.anchor){case "top":a=135;break;case "bottom":a=-45;break;case "left":a=45;break;case "right":a=-135;break;default:throw Error(`invalid anchor ${a.anchor}`);}return d.css`
			width: ${12}px;
			height: ${12}px;
			transform: rotate(${a}deg);
		`}}
`,Zi=d.keyframes`
  from {
    transform: scale(0.6);
  }

  to {
    transform: scale(1);
  }
`;T.PositionedTextCalloutDiv=d.default.div`
	position: absolute;
	top: 0;
	left: 0;
	min-width: 120px;
	max-width: 248px;
	border: 1px solid ${"#aa85f2"};
	border-radius: 4px;
	padding: 3px;
	box-shadow: ${f.BoxShadow.large};
	z-index: ${10010};
	background: ${"#481F99"};
	visibility: visible;
	animation: ${Zi} 0.2s ease-out;
`;T.PositionedTextCalloutDiv.displayName="PositionedTextCalloutDiv";T.CalloutContentWrapper=d.default.div`
	padding: 8px 8px 4px 8px ;
	display: flex;
	position: relative;
	flex-direction: column;
`;T.CalloutContentWrapper.displayName="CalloutContentWrapper";var lb={};Object.defineProperty(lb,"__esModule",{value:!0});class pg extends b.Component{constructor(){super(...arguments);this.state={width:0,height:0}}componentDidMount(){this.setState({width:this.containerRef.clientWidth,height:this.containerRef.clientHeight})}componentDidUpdate(){null==this.containerRef||this.state.width===this.containerRef.clientWidth&&this.state.height===this.containerRef.clientHeight||this.setState({width:this.containerRef.clientWidth,
height:this.containerRef.clientHeight})}getRelativePoint(a){if(null==this.containerRef)return a;const b=this.containerRef.getBoundingClientRect();return{x:a.x-b.left,y:a.y-b.top}}getRelativeHole(a){return Object.assign(Object.assign({},a),{topLeft:this.getRelativePoint(a.topLeft),bottomRight:this.getRelativePoint(a.bottomRight)})}createHoleSvgString(a){a=this.getRelativeHole(a);const b=a.topLeft.x,c=a.topLeft.y;return this.createShapeString(a.shape,b,c,a.bottomRight.x-b,a.bottomRight.y-c)}createShapeString(a,
b,d,f,l){b=Math.round(8*b)/8;d=Math.round(8*d)/8;f=Math.round(8*f)/8;l=Math.round(8*l)/8;let e,g;switch(a){case c.HoleShape.circle:e=Math.ceil(f/2);g=Math.ceil(l/2);f=2*e;l=2*g;break;case c.HoleShape.rect:g=e=0;break;case c.HoleShape.rounded:g=e=4;break;default:x.Utils.assertNever(a,`Unknown hole shape: ${a}`)}return x.Utils.createRoundedSvgD(b,d,f,l,e,g)}createOverlayLayer(a,c,d){const e=` M 0, 0
			h ${this.state.width}
			v ${this.state.height}
			h -${this.state.width}
			z`;var g=a.map((a)=>this.createHoleSvgString(a));const f=g.filter((b,c)=>a[c].pulse).join(" "),p=`url(#${c}${d}HoleClipPath${g.length-1})`;g=[...g.map((a,g)=>b.createElement("clipPath",{id:`${c}${d}HoleClipPath${g}`},0===g?b.createElement("path",{d:a+e}):b.createElement("path",{d:a+e,clipPath:`url(#${c}${d}HoleClipPath${g-1})`})))];"Overlay"===d&&g.push(b.createElement("path",{fill:this.props.overlay.color?this.props.overlay.color:"#000000",style:{pointerEvents:"painted"},d:e,clipPath:p}));g.push(b.createElement("defs",
null,b.createElement("path",{id:`${c}${d}Holes`,d:f,clipPath:p})));g.push(b.createElement(qg,{animation:$i,xlinkHref:`#${c}${d}Holes`}));g.push(b.createElement(qg,{animation:aj,xlinkHref:`#${c}${d}Holes`}));g.push(b.createElement(rg,{color:"#aa85f2",width:4,xlinkHref:`#${c}${d}Holes`}));g.push(b.createElement(rg,{color:"#481F99",width:2,xlinkHref:`#${c}${d}Holes`}));return g}createOverlay(a){var c=a.trim();if(null===this.props.overlay&&(null===this.props.highlights||0===this.props.highlights.length))return null;
a=null!=this.props.overlay?this.createOverlayLayer(this.props.overlay.holes,c,"Overlay"):[];c=null!=this.props.highlights?this.createOverlayLayer(this.props.highlights,c,"Highlights"):[];return b.createElement("svg",{width:this.state.width,height:this.state.height,style:{pointerEvents:"none",opacity:this.props.overlay?this.props.overlay.opacity:.8}},...[...a,...c])}render(){const {className:a}=this.props,c=(a)=>[["bottom",this.state.width*(this.state.height-a.bottomRight.y)],["left",a.topLeft.x*(this.state.height-
a.topLeft.y)],["right",(this.state.width-a.bottomRight.x)*(this.state.height-a.topLeft.y)],["top",this.state.width*a.topLeft.y]].reduce((a,b)=>a[1]>b[1]?a:b)[0],d=(a)=>{const b=null==a.callout.anchor?c(a):a.callout.anchor;return{holeTopLeft:a.topLeft,holeBottomRight:a.bottomRight,canvasHeight:this.state.height,canvasWidth:this.state.width,anchor:b,content:a.callout}},f=(a,c)=>{a=d(this.getRelativeHole(a));return b.createElement(T.PositionedTextCallout,Object.assign({},a,{key:c}))},l=this.props.overlay?
this.props.overlay.holes.filter((a)=>null!=a.callout).map((a,b)=>f(a,b)):null,q=this.props.highlights?this.props.highlights.filter((a)=>null!=a.callout).map((a,b)=>f(a,b)):null;return b.createElement("div",{id:"widget-spotlight-wrapper","data-lookup":"widget-spotlight-wrapper"},l,q,b.createElement("div",{className:a,ref:(a)=>this.containerRef=a},this.createOverlay(this.props.id)))}}pg.displayName="Spotlight";const $i=d.keyframes`
	0%{
		stroke: ${"#481F99"};
		stroke-width: 0px;
		opacity: 0;
	}
	20%{
		opacity: 0.4;
	}
	90%{
		stroke: ${"#aa85f2"};
		stroke-width: 64px;
		opacity: 0;
	}
	100%{
		stroke: ${"#aa85f2"};
		stroke-width: 64px;
		opacity: 0;
	}
`,aj=d.keyframes`
	0%{
		stroke: ${"#481F99"};
		stroke-width: 0px;
		opacity: 0;
	}
	10%{
		stroke: ${"#481F99"};
		stroke-width: 0px;
		opacity: 0;
	}
	30%{
		opacity: 0.4;
	}
	100%{
		stroke: ${"#aa85f2"};
		stroke-width: 48px;
		opacity: 0;
	}
`,qg=d.default("use")`
	animation-name: ${(a)=>a.animation};
    animation-duration: 3s;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-iteration-count: infinite;
`,rg=d.default("use")`
	stroke: ${(a)=>a.color};
	stroke-width: ${(a)=>a.width}px;
`;lb.StyledSpotlight=d.default(pg)`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: ${1E4};
	pointer-events: none !important;
`;lb.StyledSpotlight.displayName="StyledSpotlight";var mb={};Object.defineProperty(mb,"__esModule",{value:!0});mb.PopupButton=class extends b.PureComponent{render(){var a,d;const g=-1!==this.props.popupIds.indexOf(`${this.props.id}-popupOpener-popup`),v={content:this.props.content,icon:this.props.icon,size:this.props.size,showArrow:this.props.showArrow?f.getArrowType(null!==(a=this.props.popupPosition)&&void 0!==a?a:"left"):null,disabled:this.props.disabled,id:`${this.props.id}-button`,onClick:this.props.onClick,
popupOpener:!0,className:this.props.className,dataLookup:`${this.props.dataLookup}-button`,tooltipText:this.props.tooltipText,tooltipPosition:this.props.tooltipPosition,shape:this.props.shape,fitParent:this.props.fitParent,flexibleWidth:this.props.flexibleWidth,buttonColor:this.props.buttonColor,focused:g};return b.createElement(K.ComboButtonContainer,{"data-lookup":this.props.id,focused:g,disabled:this.props.disabled,flexibleWidth:null!==(d=this.props.flexibleWidth)&&void 0!==d?d:!1},b.createElement(c.PopupOpener,
{id:`${this.props.id}-popupOpener`,popupIds:this.props.popupIds,parentIds:this.props.parentIds,popupPosition:this.props.popupPosition,alignment:this.props.popupAlignment,popupCorrection:{x:4,y:0},hidePopupPointer:this.props.hidePopupPointer,popupHeight:this.props.popupHeight,sidebarItem:b.createElement(c.NormalButton,Object.assign({key:`${this.props.id}-button`},v)),popupHeader:this.props.popupHeader,popupContent:this.props.popupContent,popupFooter:this.props.popupFooter,fullWidth:this.props.flexibleWidth,
currentScrollIntoViewIds:this.props.currentScrollIntoViewIds}))}};mb.PopupButton.displayName="PopupButton";var nb={};Object.defineProperty(nb,"__esModule",{value:!0});d.default.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	max-width: 100%;
`.displayName="DropdownContainer";nb.PopupDropdown=class extends b.PureComponent{render(){return b.createElement(c.PopupOpener,{id:this.props.id,popupIds:this.props.popupIds,parentIds:this.props.parentIds,currentScrollIntoViewIds:this.props.currentScrollIntoViewIds,popupPosition:"left",hidePopupPointer:this.props.hidePopupPointer,popupHeight:this.props.popupHeight,alignment:null,sidebarItem:b.createElement(P.DropdownInputWithTooltip,{disabled:this.props.disabled,id:`${this.props.id}-input`,onClick:this.props.onClick,
className:this.props.className,dataLookup:`${this.props.dataLookup}-input`,text:this.props.text,textDisabled:this.props.textDisabled,opened:-1!==this.props.popupIds.indexOf(`${this.props.id}-popup`),popupOpener:this.props.popupOpener,icon:c.IconSmallId.Menu,tooltipText:this.props.tooltipText,fitParent:!0}," "),popupHeader:this.props.popupHeader,popupContent:this.props.popupContent,popupFooter:this.props.popupFooter,fullWidth:!0})}};nb.PopupDropdown.displayName="PopupDropdown";var ob={};Object.defineProperty(ob,
"__esModule",{value:!0});const sg=d.default.div`
	display: block;

	${(a)=>a.fullWidth?d.css`
		width: 100%;
	`:""}

`;sg.displayName="PopupOpenerWrapper";ob.PopupOpener=class extends b.PureComponent{constructor(){super(...arguments);this.setPopupRef=(a)=>this.popupRef=a}componentDidUpdate(){null!=this.popupRef&&this.popupRef.adjustPosition()}render(){var a;const c=`${this.props.id}-popup`,d=-1!==this.props.popupIds.indexOf(c),f=(a,b)=>{var d;return a.createReactElement({key:b,currentScrollIntoViewIds:this.props.currentScrollIntoViewIds,popupIds:this.props.popupIds,parentIds:[...null!==(d=this.props.parentIds)&&
void 0!==d?d:[],c]})};return b.createElement(sg,{fullWidth:null!==(a=this.props.fullWidth)&&void 0!==a?a:!1},this.props.sidebarItem,d&&b.createElement(t.FixedWidthStyledPopup,{id:c,position:this.props.popupPosition,popupCorrection:this.props.popupCorrection,pointerCorrection:this.props.pointerCorrection,hidePointer:this.props.hidePopupPointer,alignment:this.props.alignment,ref:this.setPopupRef},this.props.popupHeader&&b.createElement(t.PopupHeader,{"data-lookup":this.props.id+"-popup-header-container"},
this.props.popupHeader.map(f)),b.createElement(t.PopupContentWrapper,{height:this.props.popupHeight,hasHeader:null!=this.props.popupHeader,hasFooter:null!=this.props.popupFooter},this.props.popupContent.map(f)),this.props.popupFooter&&b.createElement(t.PopupFooter,{"data-lookup":this.props.id+"-popup-footer-container"},this.props.popupFooter.map(f))))}};ob.PopupOpener.displayName="PopupOpener";var Ac={};Object.defineProperty(Ac,"__esModule",{value:!0});const {default:W}=d,tg=W.div`
	width: 100%;
	background-color: ${"#ffffff"};
	margin-bottom: 4px;
`;tg.displayName="ProgressbarOuterContainer";const bj=W(h.Overline)`
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	width: 210px;
	margin: 8px 24px 0px 24px;
`,ug=W.div`
	padding: 0px 24px 0px 24px;
	display: flex;
`;ug.displayName="ProgressbarContainer";const vg=W.div`
	width: 100%;
`;vg.displayName="ProgressSection";const wg=W.div`
	width: 100%;
`;wg.displayName="ProgressBarWrapper";class cj extends b.PureComponent{constructor(){super(...arguments);this.displayName="ProgressBarBox"}render(){const {percentage:a,errorText:c,caption:d}=this.props,f=null==c?b.createElement(h.Body2,{content:d,inline:!0}):b.createElement(h.CaptionError,{dataLookup:"ppt-progressbar-id-error-text",content:c,inline:!0});return b.createElement(wg,null,b.createElement(xg,null,b.createElement(yg,{"data-percentage":a,"data-lookup":"progressbar-progress-line",percentage:a,
errorText:c})),b.createElement(zg,null,f))}}const xg=W.div`
	background-color: ${"#dfe1e4"};
	height: 8px;
	width: 100%;
	border-radius: 4px;
	overflow: hidden;
	margin: 8px 0px 4px 0px;
`;xg.displayName="ProgressBarBox";const yg=W.div`
	background-color:  ${({errorText:a})=>null==a?"#1e55eb":"#c8002d"};
	transition-duration: 0.35s;
	transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
	width: ${({percentage:a})=>a}%;
	height: 100%;
`;yg.displayName="Filler";const dj=A.tooltip(bj);class ej extends b.PureComponent{constructor(){super(...arguments);this.displayName="ProgressBarBox"}render(){const {id:a,icon:d,onClick:g,className:f}=this.props;return b.createElement(k.StyledInputButton,{className:f,id:a,onClick:()=>g(),transparent:!0,size:c.ExtendedButtonSize.Small,content:{icon:d}})}}const Bc=W(ej)`
	width: 24px;
	height: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 7px 6px 7px 6px;
	margin-left: 8px;
`;Bc.displayName="ProgressBarButton";const Ag=W.div`
	display: flex;
	min-height: 24px;
`;Ag.displayName="ProgressBarControlContainer";const zg=W.div`
	padding-bottom: 8px;
`;zg.displayName="TextContainer";Ac.default=class extends b.PureComponent{constructor(){super(...arguments);this.displayName="ProgressBar"}createCancelButton(){const {onCancel:a}=this.props;return b.createElement(Bc,{id:`${this.props.id}-cancel-button`,onClick:a,icon:c.IconSmallId.Close})}createRestartButton(){const {onRestart:a}=this.props;return b.createElement(Bc,{id:`${this.props.id}-restart-button`,onClick:a,icon:c.IconSmallId.Replay})}createControl(){const {control:a}=this.props;switch(a){case c.ProgressBarControl.Cancel:return this.createCancelButton();
case c.ProgressBarControl.Restart:return this.createRestartButton();case c.ProgressBarControl.None:return null;default:return x.Utils.assertNever(a)}}render(){const {id:a,percentage:c,title:d,caption:f,titleTooltip:l,errorText:q}=this.props;return b.createElement(tg,{"data-lookup":a},b.createElement(dj,{dataLookup:`${a}-label`,tooltipText:l,tooltipPosition:"bottom",content:d}),b.createElement(ug,null,b.createElement(vg,null,b.createElement(Ag,null,b.createElement(cj,{percentage:c,errorText:q,caption:f}),
this.createControl()))))}};var pb={};Object.defineProperty(pb,"__esModule",{value:!0});const {default:Bg}=d,Cg=Bg(k.StyledInputButton)`
	padding-left: 8px;
	padding-right: 8px;
`;Cg.displayName="CloseButton";class Dg extends b.PureComponent{constructor(a){super(a);this.setValue=(a)=>this.props.onValueChange(a);this.onKeyDown=(a)=>{if(null!=this.props.onEnter&&"Enter"===a.key)this.props.onEnter()};this.onSearchButtonClick=()=>{if(null!=this.props.onSearchButtonClick)this.props.onSearchButtonClick()};this.onClearButtonClick=()=>{this.setValue("")}}render(){return b.createElement("div",{className:`widget-input ${this.props.className}`},b.createElement(y.InputContainer,{hasError:this.props.errorText&&
""!==this.props.errorText,disabled:this.props.disabled},b.createElement(y.InputComponent,{id:this.props.id,onValueChange:this.props.disabled?null:this.setValue,onKeyDown:this.props.disabled?null:this.onKeyDown,placeholderText:this.props.placeholderText,type:"text",value:this.props.value,disabled:this.props.disabled,rows:null,readonly:this.props.readonly,maxLength:this.props.maxLength,autofocus:this.props.autofocus}),""!==this.props.value&&null!=this.props.value&&b.createElement(Cg,{id:`${this.props.id}-button-clear`,
disabled:null==this.props.value||""===this.props.value||this.props.disabled,onClick:this.props.disabled?null:this.onClearButtonClick,transparent:!0,size:c.ExtendedButtonSize.Small,content:{icon:c.IconSmallId.Close}}),b.createElement(k.StyledInputButton,{id:`${this.props.id}-button-search`,disabled:null==this.props.value||""===this.props.value||this.props.disabled,onClick:this.props.disabled?null:this.onSearchButtonClick,size:c.ExtendedButtonSize.Large,content:{icon:c.IconSmallId.Search}})),null!=
this.props.errorText?b.createElement(y.ErrorText,{content:this.props.errorText}):null!=this.props.bottomText&&b.createElement(y.BottomText,{content:this.props.bottomText}))}}Dg.displayName="InputField";const fj=A.tooltip(Dg);pb.StyledSearchField=Bg(fj)`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	margin: 8px 4px;
`;pb.StyledSearchField.displayName="StyledSearchField";var qb={};Object.defineProperty(qb,"__esModule",{value:!0});qb.SidebarContainerWithBackground=d.default.div`
	background: ${"#f6f7f9"};
	border-top: 1px solid ${"#dfe1e4"};
	border-bottom: 1px solid ${"#dfe1e4"};
	padding: 8px 0;
	flex: 1;
`;qb.SidebarContainerWithBackground.displayName="SidebarContainerWithBackground";var rb={};Object.defineProperty(rb,"__esModule",{value:!0});const {default:gj}=d;rb.SidebarParagraph=gj(h.Body2Paragraph)`
	margin: 8px 4px;
`;rb.SidebarParagraph.displayName="SidebarParagraph";var X={};Object.defineProperty(X,"__esModule",{value:!0});X.SidebarSectionHeader=d.default(h.Overline)`
	margin: 8px 4px 0;
	padding-bottom: ${(a)=>a.bottomPadding?"8px":""};
`;X.SidebarSectionHeader.displayName="SidebarSectionHeader";const hj=d.default.div`
	margin: 0px 16px;
	& ${X.SidebarSectionHeader} {
		white-space: nowrap;
	}
`;X.DropdownMenuSectionHeader=class extends b.PureComponent{render(){return b.createElement(hj,null,b.createElement(X.SidebarSectionHeader,{active:this.props.active,inline:this.props.inline,content:this.props.content,bottomPadding:this.props.bottomPadding,disabled:this.props.disabled,textColor:this.props.textColor,className:this.props.className,dataLookup:this.props.dataLookup}))}};X.DropdownMenuSectionHeader.displayName="DropdownMenuSectionHeader";var sb={};Object.defineProperty(sb,"__esModule",
{value:!0});const Cc=d.default.div`
	background: content-box ${"#dfe1e4"};
	border-radius: 4px;
	height: 100%;
	width: 100%;
	position: absolute;
	border: 1px solid ${()=>f.alphaColor("#000000",.24)};
`;Cc.displayName="SliderBarBackground";const ij=d.default.div`
	background: content-box ${"#1e55eb"};
	border-radius: 4px;
	height: 100%;
	width: ${(a)=>`calc(((100% - ${r.KNOB_WIDTH}px) * ${a.value}) + ${r.KNOB_HALF_WIDTH}px)`};
	position: absolute;
`;Cc.displayName="SliderBarBackground";class jj extends b.PureComponent{render(){return b.createElement("div",{className:this.props.className},b.createElement(Cc,null),b.createElement(ij,{value:this.props.value}))}}sb.default=d.default(jj)`
	position: relative;
	flex-grow: 1;
	height: 8px;
	margin: 8px 0px;
	border-radius: 4px;
`;sb.default.displayName="StyledSliderBar";var ya={calculateValue:function(a,b,c){a=Math.round((a-r.KNOB_HALF_WIDTH)/(b-r.KNOB_WIDTH)*100)/100;c&&(a=Math.round(a*c)/c);return a}};Object.defineProperty(ya,"__esModule",{value:!0});const {default:tb}=d,Eg=tb.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;Eg.displayName="SliderWrapper";const Fg=tb.div`
	position: relative;
	flex-grow: 1;
	opacity: ${(a)=>a.disabled?f.disabledOpacity:1}
	margin: 4px;
	cursor: ${(a)=>a.dragged?"grab":"default"};
`;Fg.displayName="StyledSlider";const kj=tb.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0px;
`,Gg=tb.div`
	position: absolute;
	top: 10px;
	left: ${(a)=>`${a.left}px`};
	height: 4px;
	width: 4px;
	border-radius: 2px;
	background-color: ${(a)=>a.color};
`;Gg.displayName="StepDot";ya.Slider=class extends b.PureComponent{constructor(){super(...arguments);this.state={dragging:!1,width:null};this.setContainerRef=(a)=>{this.containerRef=a};this.onStartDragging=()=>{this.props.disabled||this.setState({dragging:!0})};this.onStopDragging=(a)=>{this.draggingCallback(a,!1);this.setState({dragging:!1})};this.onDragging=(a)=>{this.draggingCallback(a,!0)};this.draggingCallback=({clientX:a},b)=>{if(!this.props.disabled&&null!=this.containerRef&&this.state.dragging){var c=
this.containerRef.getBoundingClientRect().left+document.body.scrollLeft;a=Math.min(Math.max(a-c,r.KNOB_HALF_WIDTH),this.state.width-r.KNOB_HALF_WIDTH);a=(0,ya.calculateValue)(a,this.state.width,this.props.steps);this.props.onChange(this.props.steps?a*this.props.steps:a,!b)}};this.click=(a)=>{if(!this.props.disabled){var b=this.containerRef.getBoundingClientRect().left+document.body.scrollLeft;a=Math.min(Math.max(a.clientX-b,r.KNOB_HALF_WIDTH),this.state.width-r.KNOB_HALF_WIDTH);a=(0,ya.calculateValue)(a,
this.state.width,this.props.steps);this.props.onChange(this.props.steps?a*this.props.steps:a,!0)}}}componentDidMount(){this.setState({width:this.containerRef.clientWidth});window.addEventListener("mouseup",this.onStopDragging);window.addEventListener("mousemove",this.onDragging)}componentWillUnmount(){window.removeEventListener("mouseup",this.onStopDragging);window.removeEventListener("mousemove",this.onDragging)}render(){function a(a){let c=[];for(let d=0;d<=a.steps;d++){const e=r.KNOB_HALF_WIDTH+
d*(a.width-r.KNOB_WIDTH)/a.steps-2,g=d<a.value?f.alphaColor("#ffffff",.4):f.alphaColor("#000000",.4);c.push(b.createElement(Gg,{key:c.length,left:e,color:g}))}return b.createElement(kj,null,c)}const c=this.props.steps?this.props.value/this.props.steps:this.props.value;return b.createElement(Eg,null,null!=this.props.title&&b.createElement(X.SidebarSectionHeader,{content:this.props.title}),b.createElement(Fg,{disabled:this.props.disabled,dragged:this.state.dragging,"data-lookup":this.props.dataLookup,
ref:this.setContainerRef,onClick:this.click},b.createElement(sb.default,{value:c}),this.props.steps?b.createElement(a,{steps:this.props.steps,value:this.props.value,width:this.state.width}):null,b.createElement(r.Knob,{top:"0px",left:`calc((100% - ${r.KNOB_WIDTH}px) * ${c})`,onMouseDown:this.onStartDragging})))}};ya.Slider.displayName="Slider";var Ia={};Object.defineProperty(Ia,"__esModule",{value:!0});const Hg=d.default.div`
	display: flex;

	${(a)=>a.fullWidth?d.css`
		width: 100%;
	`:""}
`;Hg.displayName="SubmenuOpenerWrapper";d.default.div`
	padding: 8px 0;
`.displayName="StyledMenuPopup";const Ig=d.default.div`
	display: flex;
	height: 40px;
	align-items: center;
`;Ig.displayName="SubmenuRow";Ia.SubmenuOpener=class extends b.PureComponent{constructor(){super(...arguments);this.setPopupRef=(a)=>this.popupRef=a}componentDidUpdate(){null!=this.popupRef&&this.popupRef.adjustPosition()}render(){var a,d;const g=`${this.props.id}-popup`,v=-1!==this.props.popupIds.indexOf(g);return b.createElement(Hg,{fullWidth:null!==(a=this.props.fullWidth)&&void 0!==a?a:!1},this.props.sidebarItem,v&&(null!=this.props.actions&&0<this.props.actions.length||null!=this.props.elements&&
0<this.props.elements.length)?b.createElement(t.StyledPopup,{id:g,ref:this.setPopupRef,position:null!==(d=this.props.popupPosition)&&void 0!==d?d:"bottom",hidePointer:!0,alignment:this.props.alignment,popupCorrection:this.props.popupCorrection},b.createElement(Ig,null,null!=this.props.actions&&1<this.props.actions.length&&this.props.actions.map((a,d)=>{var e;return b.createElement(k.TransparentButton,{id:`${g}-${a.id}`,key:d,onClick:f.onClickWrapper(()=>a.onClick),disabled:!a.enabled,content:{icon:a.icon},
size:c.ExtendedButtonSize.PropertyBar,checked:null!==(e=a.checked)&&void 0!==e?e:c.CheckedState.none})}),this.props.elements)):null)}};Ia.SubmenuOpener.displayName="SubmenuOpener";var ub={};Object.defineProperty(ub,"__esModule",{value:!0});ub.SubmenuButton=class extends b.PureComponent{constructor(){super(...arguments);this.getAlignmentCorrection=(a)=>"left"===a?4:"right"===a?-4:0;this.getPopupCorrection=(a,b,d)=>{b=this.getAlignmentCorrection(b);if(d===c.ExtendedButtonSize.PropertyBar)return{x:b,
y:0};switch(a){case "bottom":return{x:b,y:-8};case "top":return{x:b,y:8};default:return x.Utils.assertNever(a)}}}render(){var a,c,d,v,l;const q=-1!==this.props.popupIds.indexOf(`${this.props.id}-popupOpener-popup`),p={content:this.props.content,size:this.props.size,showArrow:this.props.showArrow?f.getArrowType(null!==(a=this.props.popupPosition)&&void 0!==a?a:"bottom"):null,disabled:this.props.disabled,id:`${this.props.id}-button`,onClick:this.props.onDropdownClick,popupOpener:!0,className:this.props.className,
dataLookup:`${this.props.dataLookup}-button`,shape:this.props.shape,tooltipText:this.props.tooltipText,tooltipPosition:this.props.tooltipPosition,fitParent:this.props.fitParent,flexibleWidth:this.props.flexibleWidth,buttonColor:this.props.buttonColor,focused:q};return b.createElement(K.ComboButtonContainer,{"data-lookup":this.props.id,focused:q,disabled:this.props.disabled,flexibleWidth:null!==(c=this.props.flexibleWidth)&&void 0!==c?c:!1},b.createElement(Ia.SubmenuOpener,{id:`${this.props.id}-popupOpener`,
popupIds:this.props.popupIds,parentIds:this.props.parentIds,popupPosition:this.props.popupPosition,popupCorrection:this.getPopupCorrection(null!==(d=this.props.popupPosition)&&void 0!==d?d:"bottom",null!==(v=this.props.popupAlignment)&&void 0!==v?v:"left",this.props.size),alignment:null!==(l=this.props.popupAlignment)&&void 0!==l?l:"left",sidebarItem:b.createElement(k.NormalButton,Object.assign({key:`${this.props.id}-button`},p)),actions:this.props.actions,elements:this.props.elements,fullWidth:this.props.flexibleWidth}))}};
ub.SubmenuButton.displayName="SubmenuButton";var ma={};Object.defineProperty(ma,"__esModule",{value:!0});const {default:U}=d;class lj extends b.PureComponent{render(){return b.createElement("button",{className:`icon-ellipsis ${this.props.className}`,onClick:this.props.onClick,disabled:this.props.disabled,"data-lookup":this.props.dataLookup})}}const Jg=U(lj)`
	display: flex;
	flex-shrink: 0;
	margin-left: 4px;
	border: solid 1px ${"#d3d6da"};
	border-radius: 50%;
	width: 16px;
	height: 16px;
	opacity: ${({disabled:a})=>a?f.disabledOpacity:1};
	padding: 0px;
	line-height: 8px;
	font-size: 8px;
	text-align: center;
	align-items: center;
	background-color: #ecedef;
	&::before {
		margin-left: 3px;
	};
	${({disabled:a})=>!a&&"\n\t\t&:hover {\n\t\t\tbox-shadow: 0 1px 4px 0 rgba(5, 18, 37, 0.32);\n\t\t}\n\t"}
`;Jg.displayName="CircleButton";const Kg=U(k.SvgIconElementRaw)`
	background-image: ${({svgIcon:a})=>Ib.getSvg(a)};
	width: 24px;
	height: 24px;
`,Dc=U.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	border-radius: 3px;
`;Kg.displayName="RemixIcon";const Lg=U.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	border-radius: 4px;
	border: solid 1px ${"#dfe1e4"};
`;Lg.displayName="MixerThumbnailContainer";class mj extends b.PureComponent{render(){return b.createElement(Lg,{className:this.props.className,onClick:this.props.onClick,"data-lookup":`${this.props.id}-thumbnail`},b.createElement(Mg,{imgUrl:this.props.imgUrl,imgFilterUrl:this.props.imgFilterUrl}),b.createElement(Dc,null,b.createElement(Kg,{svgIcon:"Remix"})))}}class nj extends b.PureComponent{render(){return b.createElement("div",{className:this.props.className})}}const Mg=U(nj)`
	background: transparent url(${({imgUrl:a})=>a}) no-repeat;
	background-position: center;
	background-size: cover;
	height: 100%;
	width: 100%;
	position: absolute;
	border-radius: 3px;

	filter: ${({imgFilterUrl:a})=>null!=a?"url("+a+")":void 0};
`,Ng=U(mj)`
	height: 56px;
	width: 56px;
	margin: 0px 32px;
	opacity: ${({disabled:a})=>a?f.disabledOpacity:1};
	& ${Dc} {
		opacity: 0;
	}
	& ${Mg} {
		opacity: ${({disabled:a})=>a?f.disabledOpacity:1};
	}
	&:hover ${Dc} {
		background-color: ${({disabled:a})=>a?"auto":"rgba(0, 0, 0, 0.56)"};
		opacity: 1;
	}
	${({disabled:a})=>!a&&"\n\t\t&:hover {\n\t\t\tbox-shadow: 0 1px 4px 0 rgba(5, 18, 37, 0.32);\n\t\t}\n\t"}
`;Ng.displayName="MixerThumbnail";ma.Container=U.div`
	display: flex;
	flex-direction: column;
	width: 120px;
`;ma.Container.displayName="Container";const Og=U.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 4px;
`;Og.displayName="TopRow";const Pg=U.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: "RalewayBold";
	font-size: 12px;
	line-height: 16px;
	letter-spacing: 0.4px;
	text-align: center;
	color: #374050;
`;Pg.displayName="BottomRow";const Qg=U.div`
	margin-left: 20px;
	word-break: break-word;
`;Qg.displayName="MixerLabel";class Rg extends b.PureComponent{constructor(){super(...arguments);this.onClick=(a)=>{const {disabled:b,onClick:c}=this.props;b||null==c||c(a)};this.onClickSecondary=(a)=>{const {disabled:b,onClickSecondary:c}=this.props;b||null==c||c(a)}}render(){const {content:a,disabled:d,id:g,imgUrl:f}=this.props;let l=null;null!=this.props.imgBlendColor&&(l=b.createElement(c.ColorFilter,{id:f,intensity:this.props.imgBlendColor.intensity,r:this.props.imgBlendColor.r,g:this.props.imgBlendColor.g,
b:this.props.imgBlendColor.b}));const q=b.createElement(Ng,{disabled:d,imgUrl:f,onClick:this.onClick,id:g,imgFilterUrl:null!=l?"#"+f:void 0});return b.createElement(ma.Container,{className:this.props.className,"data-lookup":g,"data-button-state":d?"disabled":null},b.createElement(Og,null,l,q),b.createElement(Pg,null,b.createElement(Qg,null," ","icon"in a?b.createElement(n.Icon,{iconId:a.icon,size:c.IconSize.Small}):a.text," "),b.createElement(Jg,{disabled:d,onClick:this.onClickSecondary,dataLookup:`${g}_alt`})))}}
Rg.displayName="MixerButton";ma.SimpleMixerButton=U(Rg)`
	margin-left: 4px;
	margin-right: 4px;
`;ma.SimpleMixerButton.displayName="SimpleMixerButton";var vb={};Object.defineProperty(vb,"__esModule",{value:!0});const {default:oj}=d;class Sg extends b.PureComponent{render(){const {items:a}=this.props;return b.createElement("div",{className:this.props.className},a.map((a)=>a))}}Sg.displayName="MixerTab";vb.SimpleMixerTab=oj(Sg)`
	border-radius: 4px;
	border: none;
	cursor: normal;
	padding: 8px;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
`;vb.SimpleMixerTab.displayName="SimpleMixerTab";var da={};Object.defineProperty(da,"__esModule",{value:!0});const {default:za}=d;da.TabMenuContainerWidth="432px";var Y;(function(a){a[a.Left=0]="Left";a[a.Center=1]="Center";a[a.Right=2]="Right"})(Y||(Y={}));class Tg extends b.PureComponent{constructor(){super(...arguments);this.buttonRefs=[];this.setButtonRef=(a)=>(b)=>{this.buttonRefs[a]=b};this.getButtonRef=(a)=>this.buttonRefs[a];this.setPopupRef=(a)=>this.popupRef=a}componentDidUpdate(){null!=
this.popupRef&&this.popupRef.adjustPosition()}render(){const a=[Object.assign(Object.assign({},this.props.leftItem),{buttonType:Y.Left}),Object.assign(Object.assign({},this.props.centerItem),{buttonType:Y.Center}),Object.assign(Object.assign({},this.props.rightItem),{buttonType:Y.Right})].find((a)=>null!=a&&a.id===this.props.activeTabId),c=(b,c)=>null==b?null:{text:b.buttonText,icon:b.buttonIcon,id:b.id,onClick:()=>{if(null!=b.onClick)b.onClick();this.props.onTabChange(b.id===this.props.activeTabId?
null:b.id)},bottom:null==a||b.id!==a.id,left:c===Y.Left,setRef:this.setButtonRef(c),activeId:null==a?null:a.id};return b.createElement("div",{className:this.props.className},b.createElement(Ug,{leftButton:c(this.props.leftItem,Y.Left),centerButton:c(this.props.centerItem,Y.Center),rightButton:c(this.props.rightItem,Y.Right)}),null!=this.buttonRefs[Y.Center]&&null!=a&&null!==a.content&&b.createElement(t.StyledPopup,{ref:this.setPopupRef,anchor:this.getButtonRef(a.buttonType),pointerAnchor:this.getButtonRef(a.buttonType),
id:"tabmenu-popup-id",position:"bottom"},b.createElement(Vg,{content:a.content,className:"popup-content"})))}}Tg.displayName="TabMenu";da.SimpleTabMenu=za(Tg)`
	display: flex;
	flex-direction: column;
	background-color: ${"transparent"};
	width: TabMenuContainerWidth;
	justify-content: space-around;
`;da.SimpleTabMenu.displayName="SimpleTabMenu";class Wg extends b.PureComponent{render(){return b.createElement("div",{className:this.props.className},this.props.content)}}Wg.displayName="ContentContainer";const Vg=za(Wg)`
`;Vg.displayName="SimpleContentContainer";var ea;(function(a){a[a.Left=0]="Left";a[a.Center=1]="Center";a[a.Right=2]="Right"})(ea||(ea={}));class Xg extends b.PureComponent{render(){const a=(a,c)=>null==a?null:b.createElement("div",{ref:a.setRef},b.createElement(Yg,{text:a.text,icon:a.icon,onClick:a.onClick,bottom:a.bottom,left:a.left,id:a.id,roundedLeft:c===ea.Left,roundedRight:c===ea.Right,hasBorder:c!==ea.Center,active:a.activeId===a.id}));return b.createElement("div",{className:this.props.className},
a(this.props.leftButton,ea.Left),a(this.props.centerButton,ea.Center),a(this.props.rightButton,ea.Right))}}Xg.displayName="ButtonContainer";const Ug=za(Xg)`
	display: flex;
	height: ${"48px"};
	align-items: center;
	width: ${da.TabMenuContainerWidth};
`;Ug.displayName="SimpleButtonContainer";da.TabButtonRaw=class extends b.PureComponent{render(){return b.createElement(k.Button,{className:this.props.className,onClick:this.props.onClick,content:{text:this.props.text},id:this.props.id,size:c.ExtendedButtonSize.Large,icon:this.props.icon})}};const pj=za(da.TabButtonRaw)`
	background: transparent;
	width: 144px;
    height: 32px;
	border-radius: ${({roundedLeft:a,roundedRight:b})=>`${a?4:0}px ${b?4:0}px ${b?4:0}px ${a?4:0}px`};
	background-color: ${({active:a})=>a?"#ecedef":"#f6f7f9"};
	border-left: solid ${({hasBorder:a})=>`${a?"1":"0"}`}px  ${"#d3d6da"};
	border-right: solid ${({hasBorder:a})=>`${a?"1":"0"}`}px  ${"#d3d6da"};
	border-top: solid 1px ${"#d3d6da"};
	border-bottom: solid 1px  ${"#d3d6da"};
	justify-content: center;
	text-align: center;
	align-items: center;
	display: flex;
	cursor: normal;
	&:hover {
		background-color: ${({active:a})=>a?"#ecedef":"#f6f7f9"};
		border-color: ${"#b1b8be"};
	}
`,qj=za.div`
`;class Zg extends b.PureComponent{render(){return b.createElement(qj,{className:`${this.props.className}`,"data-popup-opener":!0},b.createElement(pj,{roundedRight:this.props.roundedRight,roundedLeft:this.props.roundedLeft,active:this.props.active,hasBorder:this.props.hasBorder,onClick:this.props.onClick,text:this.props.text,icon:this.props.icon,left:this.props.left,bottom:this.props.left,id:this.props.id}))}}Zg.displayName="TabButtonContainer";const Yg=za(Zg)`
	justify-content: center;
	display: flex;
	margin: 3px 0px;
`;Yg.displayName="SimpleTabButton";var G={};Object.defineProperty(G,"__esModule",{value:!0});G.ButtonContainer=d.default.div`
	display: flex;
	flex-direction: column;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: ${"96px"};
	overflow-wrap: normal;
	padding: 0 2px
`;G.ButtonContainer.displayName="ButtonContainer";G.TextElement=d.default(h.ButtonSmall)`
	text-align: center;
	max-width: 88px;
	color: ${(a)=>a.color};
	word-break: break-word;
`;G.TextElement.displayName="TextElement";G.Container=d.default.div`
	flex-direction: column;
	display: flex;
	border-color: #dfe1e4;
`;G.Container.displayName="Container";const $g=d.default.div`
	font-family: "RalewayRegular";
	display: flex;
	border-top: ${({topBorder:a})=>a?"solid":"none"};
	border-color: #dfe1e4;
	border-width: 1px;
	font-size: 20px;
	justify-content: space-between;
	padding: 8px;
`;$g.displayName="TabMenuButtonRow";const Ec=d.default(n.Icon)`
	border-radius: 16px;
	padding: 4px;
	box-sizing: content-box;
	display: flex;
	opacity: ${(a)=>a.disabled?"0.4":"auto"};
`,rj=d.default.div`
	margin: 4px auto;
`;class ah extends b.PureComponent{constructor(a){super(a);this.onClick=(a)=>{const {disabled:b,onClick:c}=this.props;b||null==c||c(a)};this.state={hover:!1,active:!1}}render(){const {iconClassName:a,id:d,className:g,text:f,disabled:l,color:q}=this.props;return b.createElement(G.ButtonContainer,{className:g,onClick:this.onClick,id:d,"data-lookup":d,"data-button-state":l?"disabled":null},b.createElement(rj,{"data-lookup":`${d}-icon`},b.createElement(Ec,{iconId:a,disabled:l,size:c.IconSize.Small,color:q})),
b.createElement(G.TextElement,{disabled:l,content:f,color:q}))}}ah.displayName="TabMenuButton";G.SimpleTabMenuButton=d.default(ah)`
	&:hover ${Ec} {
		background-color: ${({disabled:a})=>a?"auto":"#ecedef"};
	}
	&:active ${Ec} {
		background-color: ${({disabled:a})=>a?"auto":"#d3d6da"};
	}
`;G.SimpleTabMenuButton.displayName="SimpleTabMenuButton";class bh extends b.PureComponent{createRows(a){const b=[];b.push([]);for(let c=0;c<a.length;++c){const d=b[b.length-1],e=a[c];6<a.length&&d.length>=Math.ceil(a.length/2)?b.push([e]):d.push(e)}return b}render(){const {id:a,className:c,items:d}=this.props,f=this.createRows(d);return b.createElement(G.Container,{className:c,id:a},((a)=>0===a.length||0===a[0].length?null:a.map((a,c)=>b.createElement($g,{key:c,topBorder:0!==c},a.map((a)=>b.createElement(G.SimpleTabMenuButton,
{id:a.id,onClick:a.onClick,iconClassName:a.iconClassName,text:a.text,disabled:a.disabled,key:a.id,color:a.color})))))(f))}}bh.displayName="TabMenuButtonContainer";G.SimpleTabMenuButtonContainer=d.default(bh)`

`;G.SimpleTabMenuButtonContainer.displayName="SimpleTabMenuButtonContainer";var wb={};Object.defineProperty(wb,"__esModule",{value:!0});const ch=d.default.div`
	display: flex;
	position: relative;
`;ch.displayName="ListPlaceholderContainer";const sj=d.keyframes`
	0% {
		background-position: -${m.fullWidth}px 0
	}
	100% {
		background-position: ${m.fullWidth/2}px 0
	}
`,dh=d.default.div`
	animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: ${sj};
    animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
    background: linear-gradient(
    	270deg,
    	rgba(255, 255, 255, 0) 0%,
    	rgba(255, 255, 255, 0.8) 20%,
    	rgba(255, 255, 255, 0.8) 30%,
    	rgba(255, 255, 255, 0) 50%,
    	rgba(255, 255, 255, 0) 100%),
	    ${"#ecedef"};
    background-repeat: no-repeat;
    position: absolute;
    width: 100%;
	height: 100%;
`;dh.displayName="ListPlaceholderBackground";const eh=d.default.svg`
	position: relative;
	width: ${m.fullWidth}px;
    height: ${(a)=>m.asPx(Tc(a))}
`;eh.displayName="ListPlaceholderMask";wb.ListPlaceholder=class extends b.PureComponent{getSvgString(){var a=Tc(this.props);a=[Na(0,0,m.fullWidth,a)];const b=m.widthFrom(this.props),d=Cb(this.props),h=f.getColumnCount(this.props.itemSize,this.props.columnLayout),l=Sc(this.props),q=Cb(this.props)+2*m.margin,p=2*m.margin+b;for(let e=0;e<l;e++)if(this.props.listType===c.ListType.simple)for(let c=0;c<h;c++)a.push(Na(m.margin+c*p,m.margin+e*q,b,d));else a.push(Na(m.margin,e*q+q/2-9,18,18)),a.push(Na(m.margin+
m.numberWidth,m.margin+e*q,b,d));return a.join(" ")}render(){return b.createElement(ch,{draggable:!1,"data-lookup":"listPlaceholder"},b.createElement(dh,null),b.createElement(eh,Object.assign({},this.props),b.createElement("path",{fill:"white",fillRule:"evenodd",d:this.getSvgString()})))}};wb.ListPlaceholder.displayName="ListPlaceholder";var na={};Object.defineProperty(na,"__esModule",{value:!0});const fh=d.default.div`
	display: flex;
	flex-direction: column;
`;fh.displayName="ColumnContainer";const Fc=d.default.div`
	display: flex;
	flex-direction: column;
	height: ${(a)=>a.height}px;
`;Fc.displayName="LazyContainer";const gh=d.default.div`
	display: flex;
	flex-direction: column;
	height: ${(a)=>a.height}px;
`;gh.displayName="VerticalSpacer";const hh=d.default.div`
	display: flex;
	flex-shrink: 0;
	align-items: flex-start;
	justify-content: flex-start;
	${(a)=>a.showTimeline?d.css`
		flex-grow: 1;
		background-image: linear-gradient(to right,
			white, white 34px, ${"#ecedef"} 34px, ${"#ecedef"} 38px, white 38px
		)
	`:""};
	position: relative;
`;hh.displayName="InnerContainer";const Gc=d.default.div`
	display: flex;
	justify-content: center;
	width: ${m.fullWidth}px;
`;Gc.displayName="ContainerDiv";const ih=d.default.div`
	display: flex;
	height: ${({flexGrow:a,isOnPopup:b})=>b||null==a||0===a?"auto":0};
	flex-basis: auto;
	flex-grow: ${({flexGrow:a})=>null==a?0:a};
	flex-shrink: ${({flexGrow:a})=>null==a||0===a?0:1};
	overflow-y: ${({flexGrow:a})=>null!=a&&0!==a?"auto":"hidden"};
	overflow-x: hidden;
	margin: 0 auto;
	${(a)=>a.noMargin?"":d.css`padding: 4px 0 4px ${24-m.getMargin(a.columnLayout,a.itemSize)}px`};
	width: ${(a)=>th(a.columnLayout)}px;
	flex-direction: column;
	border-top: ${(a)=>a.hasScroll?"1px solid #dfe1e4":"none"};
	border-bottom: ${(a)=>a.hasScroll?"1px solid #dfe1e4":"none"};
	[data-widget="${()=>c.DataWidget.TabMenuButtons}"] + * & {
		border-top: none;
	}
`;ih.displayName="VerticalListDiv";na.VerticalList=class extends b.PureComponent{constructor(){super(...arguments);this.containerRef=b.createRef();this.innerContainerRef=b.createRef();this.reorderInfo=null;this.mouseDown=!1;this.state={hasScroll:!1};this.animationInfo=this.windowingInfo=null;this.checkScroll=()=>{this.setState({hasScroll:null!=this.containerRef.current&&null!=this.innerContainerRef.current&&this.containerRef.current.clientHeight<this.innerContainerRef.current.scrollHeight})};this.checkWindowing=
()=>{const a=this.getWindowingInfo();var b=this.windowingInfo;if(null==b?null!=a:null==a?null!=b:b.measured?a.measured?b.visibleTop!==a.visibleTop||b.visibleBottom!==a.visibleBottom:b.measured:a.measured)this.windowingInfo=a,this.forceUpdate()};this.checkWindowingOnIntersect=(a)=>{a&&this.checkWindowing()};this.onScroll=()=>{this.checkScroll();this.checkWindowing()};this.onMouseDown=(a)=>{this.mouseDown=1===a.buttons;this.mouseDownPosition=this.getMousePosition(a)};this.onMouseMove=(a)=>{if(1!==a.buttons)this.mouseDown=
!1;else if(null!=this.innerContainerRef.current&&null==this.reorderInfo&&this.mouseDown){var b=this.getMousePosition(a);5>Math.abs(this.mouseDownPosition.y-b.y)||(this.startReorder(this.mouseDownPosition),a.stopPropagation(),a.preventDefault())}};this.onMouseMoveWhileReorder=(a)=>{null!=this.reorderInfo&&(this.reorderInfo.mousePosition=this.getMousePosition(a));a.stopPropagation();a.preventDefault()};this.onClickWhileReorder=(a)=>{this.mouseDown=!1;if(null!=this.reorderInfo){const {draggedWidget:b,
widgetInfos:c,itemIds:d,targetWidget:f}=this.reorderInfo;a.preventDefault();a.stopPropagation();if(null==f)fa(b,(a)=>{a.style.transition="transform 100ms";a.style.transform=null});else{const a=f.index<b.index?f.top-b.top:f.bottom-b.bottom;fa(b,(b)=>{b.style.transition="transform 100ms";b.style.transform=`translateY(${a}px)`})}setTimeout(()=>{fa(b,(a)=>{a.style.position=null;a.style.zIndex=null});for(const a of c)fa(a,(a)=>{a.style.transform=null;a.style.transition=null});if(null!=f&&b.index!==f.index)this.props.onReorderEnd(b.index,
b.getElements.length,f.index,d)},100);this.cancelReorder()}};this.requestAdditionalItemsIfIdle=(a)=>{var b,d;a&&this.props.progress===c.ListProgress.idle&&(null===(d=(b=this.props).requestAdditionalItems)||void 0===d?void 0:d.call(b))}}getListItemInfos(a){if(this.isWindowing(a)){const b=this.innerContainerRef.current.getBoundingClientRect().top;return a.items.map((a,c)=>({index:c,id:a.id,top:b+a.top,bottom:b+a.bottom,getElement:()=>{var a;return null===(a=this.innerContainerRef.current)||void 0===
a?void 0:a.querySelector(`[data-widget="ListItem"][data-index="${c}"]`)}}))}return Array.from(this.innerContainerRef.current.querySelectorAll('[data-widget="ListItem"]')).map((b)=>{const c=b.getBoundingClientRect(),d=parseInt(b.getAttribute("data-index"),10);return{id:a.items[d].id,getElement:()=>b,top:c.top,bottom:c.bottom,index:d}})}startReorder(a){var b,c,d,f,h,p=this.getListItemInfos(this.props),k=p.find((b)=>b.top<=a.y&&a.y<=b.bottom);if(null!=k){var m=this.getItemIds(this.props),n=null===(c=
(b=this.props).onReorderStart)||void 0===c?void 0:c.call(b,k.index,m);b=null!==(d=null===n||void 0===n?void 0:n.forbiddenIndices)&&void 0!==d?d:[];d=null!==(f=null===n||void 0===n?void 0:n.startIndex)&&void 0!==f?f:k.index;f=null!==(h=null===n||void 0===n?void 0:n.count)&&void 0!==h?h:1;p.sort((a,b)=>a.index-b.index);h=[];for(n=0;n<p.length;){k=n===d?f:1;c=p.slice(n,n+k);const a=c[0].top,b=c[k-1].bottom;c={getElements:c.map((a)=>a.getElement),top:a,bottom:b,index:h.length,center:(a+b)/2,height:b-
a};h.push(c);n+=k}p=h[d];d=[];f=p.height/2;for(n=0;n<h.length;n++)k=h[n],n<p.index?d.push(k.center+f):n>p.index&&d.push(k.center-f);f=this.getScrollContainer();fa(p,(a)=>{a.style.position="relative";a.style.zIndex="100"});this.reorderInfo={draggedWidget:p,targetWidget:p,widgetInfos:h,dragStart:a,mousePosition:a,centerLimits:d,forbiddenIndices:b,startScrollTop:null===f||void 0===f?void 0:f.scrollTop,maxScrollTop:null==f?0:f.scrollHeight-f.clientHeight,scrollContainer:f,itemIds:m};this.handleReorder(this.reorderInfo);
document.addEventListener("mousemove",this.onMouseMoveWhileReorder,!0);document.addEventListener("click",this.onClickWhileReorder,!0)}}getItemIds(a){return a.items.map((a)=>a.id)}handleReorder(a){if(this.reorderInfo===a&&null!=this.innerContainerRef.current){var {draggedWidget:b,widgetInfos:c,mousePosition:d,maxScrollTop:f,scrollContainer:h}=this.reorderInfo,k=(()=>{if(null==h)return 0;var a=h.getBoundingClientRect();const b=d.y-(a.top+40);if(0>b)return b/40;a=d.y-(a.bottom-40);return 0<a?a/40:0})();
0!==k&&(h.scrollTop=Math.max(0,Math.min(f,h.scrollTop+Math.sign(k)+15*k)));f=this.getDragDeltaY(d);k=this.getTargetWidget(f);if(k.index!==this.reorderInfo.targetWidget.index&&0>this.reorderInfo.forbiddenIndices.indexOf(k.index)){this.reorderInfo.targetWidget=k;var {minIndex:m,maxIndex:n,dy:r}=k.index<b.index?{minIndex:k.index,maxIndex:b.index-1,dy:b.height}:{minIndex:b.index+1,maxIndex:k.index,dy:-b.height};for(const a of c)a.index===b.index?this.translateY(b,f):m<=a.index&&a.index<=n?this.translateY(a,
r,500):fa(a,(a)=>{a.style.transform=null})}else this.translateY(b,f);requestAnimationFrame(()=>this.handleReorder(a))}}getDragDeltaY(a){const {dragStart:b,scrollContainer:c,startScrollTop:d}=this.reorderInfo;return a.y-b.y+(null==c?0:c.scrollTop-d)}getTargetWidget(a){const {draggedWidget:b,widgetInfos:c,centerLimits:d}=this.reorderInfo;a=b.center+a;for(let b=0;;b++)if(b===d.length||a<d[b])return c[b]}cancelReorder(){this.mouseDown=!1;null!=this.reorderInfo&&(this.reorderInfo=null,document.removeEventListener("mousemove",
this.onMouseMoveWhileReorder,!0),document.removeEventListener("click",this.onClickWhileReorder,!0))}getMousePosition(a){return{x:a.pageX,y:a.pageY}}translateY(a,b,c){fa(a,(a)=>{a.style.transition=null==c?null:`transform ${c}ms`;a.style.transform=0===b?null:`translateY(${b}px)`})}getSnapshotBeforeUpdate(a){const b=this.props.showTimeline!==a.showTimeline||!x.Utils.arrayEquals(this.getItemIds(this.props),this.getItemIds(a));b&&this.cancelReorder();let c=null;b&&this.props.animate&&null!=this.containerRef.current&&
(c={listItemInfos:this.getListItemInfos(a)});b&&null!=this.animationInfo&&this.cancelAnimation();return c}withAllAnimatedElement(a,b){for(const {info:b,startDy:c,endDy:d}of this.animationInfo.movedItemInfos){const e=b.getElement();null!=e&&a(e,c,d)}for(const c of this.animationInfo.fadeInItemInfos)a=c.getElement(),null!=a&&b(a)}componentDidUpdate(a,b,c){this.ensureScrollIntoAnimateListener();this.checkScroll();if(null!=c){a=this.containerRef.current.getBoundingClientRect();b=[];const e=[],f=window.innerHeight;
c=new Map(c.listItemInfos.map((a)=>[a.id,a]));for(const g of this.getListItemInfos(this.props)){var d=c.get(g.id);const h=a.top<=g.bottom&&g.top<=a.bottom;if(null==d)h&&e.push(g);else{const c=a.top<=d.bottom&&d.top<=a.bottom;if(!h&&!c)continue;d=(d.top+d.bottom)/2-(g.top+g.bottom)/2;const e=Math.max(-f,Math.min(f,d));b.push({info:g,startDy:c?d:e,endDy:h?0:d-e})}}const g={fadeInItemInfos:e,movedItemInfos:b};this.animationInfo=g;null!=this.windowingInfo&&this.forceUpdate();requestAnimationFrame(()=>
{g===this.animationInfo&&(this.withAllAnimatedElement((a,b)=>{a.style.zIndex="1";a.style.transform=`translateY(${b}px)`},(a)=>a.style.opacity="0"),requestAnimationFrame(()=>{g===this.animationInfo&&(this.withAllAnimatedElement((a,b,c)=>{a.style.transition="transform 500ms";a.style.transform=`translateY(${c}px)`},(a)=>{a.style.transition="opacity 250ms  250ms";a.style.opacity="1"}),setTimeout(()=>{g===this.animationInfo&&(this.cancelAnimation(),null!=this.windowingInfo&&this.forceUpdate())},500))}))})}}cancelAnimation(){this.withAllAnimatedElement((a)=>
a.style.cssText=null,(a)=>a.style.cssText=null);this.animationInfo=null}ensureScrollIntoAnimateListener(){null!=this.containerRef.current&&(this.containerRef.current.removeEventListener(f.scrollIntoAnimateEvent,this.checkWindowing),this.containerRef.current.addEventListener(f.scrollIntoAnimateEvent,this.checkWindowing))}componentDidMount(){this.checkScroll();window.addEventListener("resize",this.checkScroll);this.ensureScrollIntoAnimateListener()}componentWillUnmount(){window.removeEventListener("resize",
this.checkScroll);this.cancelReorder()}isWindowing(a){const b=a.items;a=f.getColumnCount(a.itemSize,a.columnLayout);return 50<b.length&&1===a&&null!=b[b.length-1].bottom}getWindowingInfo(){if(!this.isWindowing(this.props))return null;if(null==this.containerRef.current||null==this.innerContainerRef.current)return{measured:!1};const a=this.containerRef.current.getBoundingClientRect(),b=this.innerContainerRef.current.getBoundingClientRect().top;return{measured:!0,visibleTop:a.top-b,visibleBottom:a.bottom-
b}}render(){const a=f.getColumnCount(this.props.itemSize,this.props.columnLayout),d=1===a&&null!=this.props.onReorderEnd?{onMouseDown:this.onMouseDown,onMouseMove:this.onMouseMove}:null,g=this.props.items;this.windowingInfo=this.getWindowingInfo();if(null!=this.windowingInfo){var h=g[g.length-1].bottom;if(this.windowingInfo.measured){let a=0,c=0;const e=[],f=this.windowingInfo.visibleTop,k=this.windowingInfo.visibleBottom,l=(a)=>b.createElement(J.Observer,{key:`spacer-${c}`,onIntersect:this.checkWindowingOnIntersect,
item:(c)=>b.createElement(gh,{ref:c,height:a})});g.forEach((b,g)=>{var h=k<b.top;h=!(b.bottom<f)&&!h;g=null!=this.reorderInfo&&g===this.reorderInfo.draggedWidget.index;const m=0<=this.props.currentScrollIntoViewIds.indexOf(b.id),n=null!=this.animationInfo&&this.animationInfo.movedItemInfos.some((a)=>a.info.id===b.id);if(h||g||m||n)a!==b.top&&(e.push(l(b.top-a)),c++),e.push(b.createElement(d)),a=b.bottom});h>a&&e.push(l(h-a));h=[b.createElement(Fc,{key:"lazy",height:h},e)]}else h=[b.createElement(Fc,
{key:"lazy",height:h})]}else{const c=[];g.forEach((b,e)=>{e=c[e%a];null==e&&(e=[],c.push(e));e.push(b.createElement(d))});h=c.map((a,c)=>b.createElement(fh,{key:c},a))}const k=this.props.progress!==c.ListProgress.finished;return b.createElement(ih,{onScroll:this.onScroll,ref:this.containerRef,flexGrow:this.props.flexGrow,"data-lookup":this.props.id,hasScroll:this.state.hasScroll,isOnPopup:this.props.isOnPopup,columnLayout:this.props.columnLayout,itemSize:this.props.itemSize,noMargin:this.props.noMargin},
k&&0===g.length?b.createElement(J.Observer,{onIntersect:this.requestAdditionalItemsIfIdle,item:(a)=>b.createElement(Gc,{ref:a},b.createElement(wb.ListPlaceholder,{columnLayout:this.props.columnLayout,itemLayout:this.props.itemLayout,itemSize:this.props.itemSize,listType:this.props.listType}))}):null,b.createElement(hh,{"data-lookup":na.dataLookupListContainer,ref:this.innerContainerRef,showTimeline:this.props.showTimeline},h),k&&0!==g.length?b.createElement(J.Observer,{onIntersect:this.requestAdditionalItemsIfIdle,
item:(a)=>b.createElement(Gc,{ref:a},b.createElement(R.Spinner,{spinnerSize:c.SpinnerSize.m,color:c.SpinnerColor.neutral}))}):null)}getScrollContainer(){let a=this.containerRef.current;if(null==a)return null;if(null!=this.props.flexGrow)return a;for(;;){a=a.parentElement;if(null==a)return null;if("sidebar-content-container"===a.getAttribute("data-lookup"))return a.parentElement}}};na.VerticalList.displayName="VerticalList";na.dataLookupListContainer="list-container";var xb={};Object.defineProperty(xb,
"__esModule",{value:!0});const tj=d.default.div`
	width: 100%;
	padding-bottom: 56.25%;
	position: relative;
	margin-bottom: 8px;
`,uj=d.default.iframe`
	width: 100%;
	height: 100%;
	position: absolute;
`;xb.Video=class extends b.PureComponent{constructor(a){super(a);this.state={muted:!1};this.state={muted:a.muted};require(["https://player.vimeo.com/api/player.js"],(a)=>{this.VimeoModule=a;this.registerEventListeners()})}constructUrl(a){return Oa.FeatureSwitcher.isActive("js-plugin-e2e-run")?x.Utils.svgToUrl('<svg version="1.1" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t<rect width="100%" height="100%" fill="red"/>\n\t\t\t</svg>'):`https://player.vimeo.com/video/${a.videoId}
			?autoplay=${!0===a.autoplay?"1":"0"}
			?quality=1080p&muted=${!0===a.muted?"1":"0"}`}componentDidMount(){this.registerEventListeners()}componentDidUpdate(){this.registerEventListeners()}registerEventListeners(){if(!Oa.FeatureSwitcher.isActive("js-plugin-e2e-run")&&null!=this.refs&&null!=this.VimeoModule&&null!=this.iframe&&null==this.VimeoPlayer){this.VimeoPlayer=new this.VimeoModule(this.iframe);if(null!=this.props.onPlay)this.VimeoPlayer.on("play",()=>this.props.onPlay());if(null!=this.props.onPause)this.VimeoPlayer.on("pause",()=>
this.props.onPause());if(null!=this.props.onLoaded)this.VimeoPlayer.on("loaded",()=>this.props.onLoaded());if(null!=this.props.onEnded)this.VimeoPlayer.on("ended",()=>this.props.onEnded());if(null!=this.props.onMute||null!=this.props.onUnmute)this.VimeoPlayer.on("volumechange",(a)=>{if(0===a.volume&&!this.state.muted){if(this.setState({muted:!0}),null!=this.props.onMute)this.props.onMute()}else if(0!==a.volume&&this.state.muted&&(this.setState({muted:!1}),null!=this.props.onUnmute))this.props.onUnmute()})}}render(){const a=
this.props.playerKind;switch(a){case c.PlayerKind.vimeo:return b.createElement(tj,{"data-lookup":"video-wrapper"},b.createElement(uj,{ref:(a)=>this.iframe=a,id:"videoPlayer",src:this.constructUrl(this.props),frameBorder:"0",allowFullScreen:!0}));default:return x.Utils.assertNever(a,`Unknown PlayerKind: ${a}`)}}};xb.Video.displayName="Video";var c={};Object.defineProperty(c,"__esModule",{value:!0});(function(a){a.AssetError="icon-large-asset-error";a.Camera="icon-large-camera";a.Explore="icon-large-explore";
a.ExploreOutline="icon-large-explore-outline";a.File="icon-large-file";a.FileUpload="icon-large-file-upload";a.GoLive="icon-large-go-live";a.Heart="icon-large-heart";a.HeartOutline="icon-large-heart-outline";a.HelpWithCircle="icon-large-help-with-circle";a.Image="icon-large-image";a.Insert="icon-large-insert";a.Login="icon-large-login";a.MyLibrary="icon-large-my-library";a.NoCamera="icon-large-no-camera";a.Pause="icon-large-pause";a.Play="icon-large-play";a.Plus="icon-large-plus";a.Recent="icon-large-recent";
a.RecentOutline="icon-large-recent-outline";a.Replay="icon-large-replay";a.Reuse="icon-large-reuse";a.Search="icon-large-search";a.StaffPick="icon-large-staff-pick";a.Style="icon-large-style"})(c.IconLargeId||(c.IconLargeId={}));(function(a){a.CheckMini="icon-mini-check-mini";a.CloseMini="icon-mini-close-mini"})(c.IconMiniId||(c.IconMiniId={}));(function(a){a.AddUser="icon-small-add-user";a.AlignCenter="icon-small-align-center";a.AlignContentBottom="icon-small-align-content-bottom";a.AlignContentCenter=
"icon-small-align-content-center";a.AlignContentLeft="icon-small-align-content-left";a.AlignContentMiddle="icon-small-align-content-middle";a.AlignContentRight="icon-small-align-content-right";a.AlignContentTop="icon-small-align-content-top";a.AlignJustify="icon-small-align-justify";a.AlignLeft="icon-small-align-left";a.AlignRight="icon-small-align-right";a.Animation="icon-small-animation";a.ArrowBoldUp="icon-small-arrow-bold-up";a.ArrowLineLeft="icon-small-arrow-line-left";a.ArrowLineRight="icon-small-arrow-line-right";
a.ArrowsAndLines="icon-small-arrows-and-lines";a.AssetError="icon-small-asset-error";a.Audio="icon-small-audio";a.AverageHeight="icon-small-average-height";a.AverageWidth="icon-small-average-width";a.Backward="icon-small-backward";a.Bold="icon-small-bold";a.Bookmark="icon-small-bookmark";a.BorderColor="icon-small-border-color";a.BorderWeight="icon-small-border-weight";a.BrandKit="icon-small-brand-kit";a.Brush="icon-small-brush";a.BulletPoint="icon-small-bullet-point";a.Camera="icon-small-camera";
a.Caption="icon-small-caption";a.Charts="icon-small-charts";a.Chat="icon-small-chat";a.Check="icon-small-check";a.ChevronDown="icon-small-chevron-down";a.ChevronLeft="icon-small-chevron-left";a.ChevronRight="icon-small-chevron-right";a.ChevronUp="icon-small-chevron-up";a.Clicker="icon-small-clicker";a.Close="icon-small-close";a.Code="icon-small-code";a.Comment="icon-small-comment";a.Copy="icon-small-copy";a.CoverSettings="icon-small-cover-settings";a.Crop="icon-small-crop";a.Crown="icon-small-crown";
a.Css="icon-small-css";a.CustomStartingpoint="icon-small-custom-startingpoint";a.Cycle="icon-small-cycle";a.DecreaseTextSize="icon-small-decrease-text-size";a.DistributeHorizontal="icon-small-distribute-horizontal";a.DistributeVertical="icon-small-distribute-vertical";a.Docs="icon-small-docs";a.Download="icon-small-download";a.Draft="icon-small-draft";a.Dropbox="icon-small-dropbox";a.Dropdown="icon-small-dropdown";a.Edit="icon-small-edit";a.EditImage="icon-small-edit-image";a.Equations="icon-small-equations";
a.ExitFullScreen="icon-small-exit-full-screen";a.Explore="icon-small-explore";a.ExploreOutline="icon-small-explore-outline";a.Export="icon-small-export";a.EyeDropper="icon-small-eye-dropper";a.FadeIn="icon-small-fade-in";a.FadeOut="icon-small-fade-out";a.File="icon-small-file";a.FileUpload="icon-small-file-upload";a.FillColor="icon-small-fill-color";a.Folder="icon-small-folder";a.FolderWithUser="icon-small-folder-with-user";a.Forward="icon-small-forward";a.Fullscreen="icon-small-fullscreen";a.GoLive=
"icon-small-go-live";a.GoogleClassroom="icon-small-google-classroom";a.GoogleDrive="icon-small-google-drive";a.GoogleSlides="icon-small-google-slides";a.Hamburger="icon-small-hamburger";a.Heart="icon-small-heart";a.HeartBroken="icon-small-heart-broken";a.HeartOutline="icon-small-heart-outline";a.Help="icon-small-help";a.HelpWithCircle="icon-small-help-with-circle";a.HiddenNew="icon-small-hidden-new";a.Home="icon-small-home";a.Icon="icon-small-icon";a.Image="icon-small-image";a.Import="icon-small-import";
a.IncreaseTextSize="icon-small-increase-text-size";a.Indent="icon-small-indent";a.Info="icon-small-info";a.InfoWithCircle="icon-small-info-with-circle";a.Insert="icon-small-insert";a.Italic="icon-small-italic";a.Lab="icon-small-lab";a.Layout="icon-small-layout";a.LineThicker="icon-small-line-thicker";a.LineThinner="icon-small-line-thinner";a.Link="icon-small-link";a.LivePrezi="icon-small-live-prezi";a.Lock="icon-small-lock";a.Login="icon-small-login";a.Logout="icon-small-logout";a.MacOS="icon-small-mac-o-s";
a.Mail="icon-small-mail";a.Menu="icon-small-menu";a.MiniZebra="icon-small-mini-zebra";a.Minus="icon-small-minus";a.MoreHorizontal="icon-small-more-horizontal";a.MoreVertical="icon-small-more-vertical";a.MyLibrary="icon-small-my-library";a.NewTopic="icon-small-new-topic";a.NoCamera="icon-small-no-camera";a.NotEditable="icon-small-not-editable";a.Offline="icon-small-offline";a.OneDrive="icon-small-one-drive";a.OpenInNew="icon-small-open-in-new";a.Outdent="icon-small-outdent";a.Path="icon-small-path";
a.Pause="icon-small-pause";a.PdfFile="icon-small-pdf-file";a.Photo="icon-small-photo";a.PlanetTopic="icon-small-planet-topic";a.Play="icon-small-play";a.Plus="icon-small-plus";a.Ppt="icon-small-ppt";a.Presentation="icon-small-presentation";a.PresenterNotes="icon-small-presenter-notes";a.Preview="icon-small-preview";a.PreziDesign="icon-small-prezi-design";a.Public="icon-small-public";a.Recent="icon-small-recent";a.RecentOultine="icon-small-recent-oultine";a.Redo="icon-small-redo";a.Remove="icon-small-remove";
a.Replay="icon-small-replay";a.ResizeEnlarge="icon-small-resize-enlarge";a.ResizeShrink="icon-small-resize-shrink";a.Reuse="icon-small-reuse";a.Scale="icon-small-scale";a.Screen="icon-small-screen";a.ScreenRatio="icon-small-screen-ratio";a.Search="icon-small-search";a.Settings="icon-small-settings";a.Shape="icon-small-shape";a.Share="icon-small-share";a.Shuffle="icon-small-shuffle";a.StackTopic="icon-small-stack-topic";a.Staffpick="icon-small-staffpick";a.Star="icon-small-star";a.Stop="icon-small-stop";
a.Storyblocks="icon-small-storyblocks";a.StoryblocksCom="icon-small-storyblocks-com";a.Style="icon-small-style";a.Sync="icon-small-sync";a.SyncOutline="icon-small-sync-outline";a.Synced="icon-small-synced";a.Syntax="icon-small-syntax";a.Tag="icon-small-tag";a.Text="icon-small-text";a.TextBackground="icon-small-text-background";a.TextForeground="icon-small-text-foreground";a.Trash="icon-small-trash";a.Trim="icon-small-trim";a.UnGroup="icon-small-un-group";a.Undo="icon-small-undo";a.Unlisted="icon-small-unlisted";
a.Unsplash="icon-small-unsplash";a.Upload="icon-small-upload";a.User="icon-small-user";a.UserWithCircle="icon-small-user-with-circle";a.UserWithScreen="icon-small-user-with-screen";a.Users="icon-small-users";a.Video="icon-small-video";a.VolumeOff="icon-small-volume-off";a.VolumeOn="icon-small-volume-on";a.Warning="icon-small-warning";a.Windows="icon-small-windows";a.Xml2="icon-small-xml2";a.ZoomArea="icon-small-zoom-area";a.ZoomIn="icon-small-zoom-in";a.ZoomOut="icon-small-zoom-out"})(c.IconSmallId||
(c.IconSmallId={}));(function(a){a.Analytics="illustration-large-light-analytics";a.BrowserRedirect="illustration-large-light-browser-redirect";a.EmailRedirect="illustration-large-light-email-redirect";a.Error="illustration-large-light-error";a.HappyRectangle="illustration-large-light-happy-rectangle";a.MyLibrary="illustration-large-light-my-library";a.NoCamera="illustration-large-light-no-camera";a.NoResults="illustration-large-light-no-results";a.Offline="illustration-large-light-offline";a.SadRectangle=
"illustration-large-light-sad-rectangle";a.UnlockPremiumContent="illustration-large-light-unlock-premium-content"})(c.IllustrationLargeLightId||(c.IllustrationLargeLightId={}));(function(a){a.Audio="illustration-small-audio";a.Camera="illustration-small-camera";a.CloudUpload="illustration-small-cloud-upload";a.CreatePreziColor="illustration-small-create-prezi-color";a.CreateVideo="illustration-small-create-video";a.CreateVideoColor="illustration-small-create-video-color";a.GoLiveColor="illustration-small-go-live-color";
a.Image="illustration-small-image";a.Import="illustration-small-import";a.Pdf="illustration-small-pdf";a.Ppt="illustration-small-ppt";a.PptColor="illustration-small-ppt-color";a.Prezi="illustration-small-prezi";a.PreziColor="illustration-small-prezi-color";a.Video="illustration-small-video"})(c.IllustrationSmallId||(c.IllustrationSmallId={}));c.SidebarAnimationTime=300;c.DialogAnimationTime=600;(function(a){a.neutral="neutral";a.blue="blue"})(c.SpinnerColor||(c.SpinnerColor={}));(function(a){a.l=
"L";a.m="M";a.s="S";a.xs="XS"})(c.SpinnerSize||(c.SpinnerSize={}));(function(a){a.nowrap="nowrap";a.wrap="wrap";a.wrapReverse="wrap-reverse"})(c.FlexWrap||(c.FlexWrap={}));(function(a){a.simple="simple";a.numbered="numbered"})(c.ListType||(c.ListType={}));(function(a){a.full="Full";a.large="Large";a.small="Small"})(c.ListItemSize||(c.ListItemSize={}));(function(a){a.dynamic="Dynamic";a.fixed="Fixed"})(c.ListItemLayout||(c.ListItemLayout={}));(function(a){a.normal="normal";a["double"]="double";a.triple=
"triple"})(c.ListColumnLayout||(c.ListColumnLayout={}));(function(a){a.solid="solid";a.linear="linear";a.radial="radial";a.clear="clear"})(c.FillKind||(c.FillKind={}));(function(a){a.none="none";a.unchecked="unchecked";a.checked="checked"})(c.CheckedState||(c.CheckedState={}));(function(a){a.video="video";a.image="image"})(c.HoverContentType||(c.HoverContentType={}));(function(a){a[a.snapTargetRegularPlanet=1]="snapTargetRegularPlanet";a[a.snapTargetSlideOnPlanet=2]="snapTargetSlideOnPlanet";a[a.snapTargetSlideOnOverview=
4]="snapTargetSlideOnOverview";a[a.showPlaceholder=8]="showPlaceholder"})(c.PreziDataMimeParam||(c.PreziDataMimeParam={}));(function(a){a[a.Small=0]="Small";a[a.Large=1]="Large";a[a.PropertyBar=2]="PropertyBar"})(c.ExtendedButtonSize||(c.ExtendedButtonSize={}));(function(a){a[a.Micro=0]="Micro";a[a.Mini=1]="Mini";a[a.Small=2]="Small";a[a.Large=3]="Large"})(c.IconSize||(c.IconSize={}));(function(a){a[a.Rounded=0]="Rounded";a[a.Circle=1]="Circle"})(c.ButtonShape||(c.ButtonShape={}));(function(a){a[a.Gray=
0]="Gray";a[a.Ghost=1]="Ghost";a[a.Blue=2]="Blue";a[a.Red=3]="Red";a[a.Green=4]="Green";a[a.Gold=5]="Gold";a[a.Transparent=6]="Transparent"})(c.ExtendedButtonColor||(c.ExtendedButtonColor={}));(function(a){a.left="left";a.right="right"})(c.ButtonPosition||(c.ButtonPosition={}));(function(a){a.top="top";a.bottom="bottom"})(c.ActionWrapperPosition||(c.ActionWrapperPosition={}));(function(a){a.Small="small";a.Large="large"})(c.PropertyBarSeparatorSize||(c.PropertyBarSeparatorSize={}));(function(a){a[a.Info=
0]="Info";a[a.Error=1]="Error"})(c.CautionTypes||(c.CautionTypes={}));(function(a){a.left="left";a.center="center"})(c.TitleAlignment||(c.TitleAlignment={}));(function(a){a.horizontal="horizontal";a.vertical="vertical";a.verticalDynamic="verticalDynamic"})(c.ItemContainerKind||(c.ItemContainerKind={}));(function(a){a.DialogItemRow="DialogItemRow";a.Buttons="Buttons";a.DropArea="DropArea";a.ProgressBar="ProgressBar";a.HorizontalSeparator="HorizontalSeparator";a.SectionHeader="SectionHeader";a.Label=
"Label";a.Caution="Caution";a.Checkbox="Checkbox";a.Textarea="Textarea";a.SearchField="SearchField";a.Dropdown="Dropdown";a.PopupButton="PopupButton";a.ComboButton="ComboButton";a.ComboMenuButton="ComboMenuButton";a.PopupDropdown="PopupDropdown";a.ColorPicker="ColorPicker";a.SimpleColorPicker="SimpleColorPicker";a.TabMenuButtons="TabMenuButtons";a.Illustration="Illustration";a.VimeoVideo="VimeoVideo";a.Spinner="Spinner";a.Image="Image";a.ImageCheckbox="ImageCheckbox";a.CollapseSection="CollapseSection";
a.ContainerWithColoredBackground="ContainerWithColoredBackground";a.VerticalList="VerticalList";a.Paragraph="Paragraph";a.ColorPickerHeader="ColorPickerHeader";a.PopupHeader="PopupHeader";a.Slider="Slider";a.Audio="Audio"})(c.DataWidget||(c.DataWidget={}));(function(a){a.single="single";a["double"]="double";a.triple="triple"})(c.DialogItemCellWidth||(c.DialogItemCellWidth={}));(function(a){a.dialog="dialog";a.sidebar="sidebar"})(c.ContainerType||(c.ContainerType={}));(function(a){a.full="Full";a.extraLarge=
"ExtraLarge";a.large="Large";a.medium="Medium";a.small="Small";a.corner="Corner"})(c.DialogType||(c.DialogType={}));(function(a){a.Short="Short";a.Full="Full"})(c.PopupHeight||(c.PopupHeight={}));(function(a){a.finished="finished";a.working="working";a.idle="idle"})(c.ListProgress||(c.ListProgress={}));(function(a){a.circle="circle";a.rect="rect";a.rounded="rounded"})(c.HoleShape||(c.HoleShape={}));(function(a){a[a.Image=0]="Image";a[a.Mp4=1]="Mp4"})(c.CalloutMediaTypes||(c.CalloutMediaTypes={}));
(c.PlayerKind||(c.PlayerKind={})).vimeo="vimeo";(function(a){a.Restart="Restart";a.Cancel="Cancel";a.None="None"})(c.ProgressBarControl||(c.ProgressBarControl={}));c.Audio=ha.Audio;c.ColorButton=k.StyledColorButton;c.ColorPickerButton=L.ColorPickerButton;c.ColorPickerSidebar=L.ColorPicker;c.DroppableImage=u.DroppableImage;c.Image=u.Image;c.Folder=u.Folder;c.ErrorItem=u.ErrorItem;c.LockedImage=u.LockedImage;c.TextListItem=u.TextListItem;c.TimelineMainItem=u.TimelineMainItem;c.TimelineDeckItem=u.TimelineDeckItem;
c.TimelineFrameItem=u.TimelineFrameItem;c.TimelineTextItem=u.TimelineTextItem;c.PopupButton=mb.PopupButton;c.PopupDropdown=nb.PopupDropdown;c.ComboButton=K.ComboButton;c.ComboButtonContainer=K.ComboButtonContainer;c.ComboMenuButton=Va.ComboMenuButton;c.MenuButton=jb.MenuButton;c.SubmenuButton=ub.SubmenuButton;c.NormalButton=k.NormalButton;c.ToggleButton=k.ToggleButton;c.MixerButton=ma.SimpleMixerButton;c.TabMenuButtonContainer=G.SimpleTabMenuButtonContainer;c.MixerTab=vb.SimpleMixerTab;c.TabMenu=
da.SimpleTabMenu;c.InputField=y.StyledInputField;c.SearchField=pb.StyledSearchField;c.Layer=bb.default;c.Popup=t.default;c.ProgressBar=Ac.default;c.SidebarRootContainer=w.SidebarRootContainer;c.LeftSidebarRootContainer=w.LeftSidebarRootContainer;c.SidebarContent=w.SidebarContent;c.HorizontalSeparator=ua.HorizontalSeparator;c.SidebarIllustration=Z.StyledSidebarIllustration;c.SmallSidebarIllustration=Z.SidebarIllustration;c.TestSidebarHeader=ba.DialogAndSidebarHeader;c.SidebarSectionHeader=X.SidebarSectionHeader;
c.Spinner=R.Spinner;c.VerticalList=na.VerticalList;c.Spotlight=lb.StyledSpotlight;c.SimpleColorPicker=Yb.default;c.Checkbox=sa.Checkbox;c.ImageCheckbox=ec.ImageCheckbox;c.ImageComponent=Za.Image;c.Slider=ya.Slider;c.Dropdown=P.Dropdown;c.PopupOpener=ob.PopupOpener;c.MenuOpener=kb.MenuOpener;c.SubmenuOpener=Ia.SubmenuOpener;c.ColorFilter=Fa.ColorFilter;c.SidebarContainerWithBackground=qb.SidebarContainerWithBackground;c.DropArea=ac.DropArea;c.SidebarTabMenu=Aa.SidebarTabMenuButtons;c.Icon=n.Icon;c.Dialog=
D.Dialog;c.DialogOverlay=Ya.DialogOverlay;c.IFrameDialog=ab.IFrameDialog;c.ItemContainer=aa.ItemContainer;c.DialogItemRow=Q.DialogItemRow;c.DialogItemCell=Q.DialogItemCell;c.Video=xb.Video;c.PropertyBar=C.PropertyBar;c.PropertyBarItemGroup=C.PropertyBarItemGroup;c.PropertyBarSeparator=C.PropertyBarSeparator;c.DropdownMenuItem=la.DropdownMenuItem;c.DropdownMenuSeparator=la.DropdownMenuSeparator;c.DropdownMenuSectionHeader=X.DropdownMenuSectionHeader;c.CollapseSection=Lb.CollapseSection;c.DropdownMenuSeparatorConst=
"Separator";c.SimpleListItemContainer=m.SimpleListItemContainer;c.NumberedListItemContainer=m.NumberedListItemContainer;c.ListItemWithTitle=m.ListItemWithTitle;c.Headline1=h.Headline1;c.Headline2=h.Headline2;c.Headline3=h.Headline3;c.Headline4=h.Headline4;c.Title=h.Title;c.Subtitle=h.Subtitle;c.Body1=h.Body1;c.Body1Alt=h.Body1Alt;c.Body2=h.Body2;c.Body2Alt=h.Body2Alt;c.Body2AltCaps=h.Body2AltCaps;c.Link=h.Link;c.Caption=h.Caption;c.CaptionError=h.CaptionError;c.Overline=h.Overline;c.ButtonLarge=h.ButtonLarge;
c.ButtonSmall=h.ButtonSmall;c.Body1Paragraph=h.Body1Paragraph;c.Body2Paragraph=h.Body2Paragraph;c.SidebarParagraph=rb.SidebarParagraph;c.Caution=ra.Caution;c.toCssColor=f.toCssColor;c.toCssColorIgnoreAlpha=f.toCssColorIgnoreAlpha;c.toColorData=f.parseColorData;c.sidebarWidth=w.sidebarWidth;c.leftSidebarWidth=w.sidebarWidth;c.PopupAdjustedStream=function(){const a=wh.Bacon.newBus();return{getStream:()=>a,sendMsg:()=>{a.push()}}}();c.scrollIntoView=function(a){return new Promise((b)=>{uh(()=>{let c=
document.querySelector(a.map((a)=>`[data-lookup="${a}"]`).join(" "));for(;null!=c&&!c.hasAttribute("data-widget");)c=c.parentElement;if(null!=c){var d=[];for(let a=c.parentElement;null!=a;a=a.parentElement)switch(a.getAttribute("data-lookup")){case na.dataLookupListContainer:d.push(Uc(c,a));break;case w.dataLookupSidebarContentContainer:d.push(Uc(c,a));Promise.all(d).then(()=>b());return}}b()})})};Vc=c;var jh=document.createElement("style");jh.textContent=".widget-input input::-webkit-input-placeholder{color:#374050}.widget-input input::-moz-placeholder{color:#374050}.widget-input input:-ms-input-placeholder{color:#374050}.widget-input input::-ms-input-placeholder{color:#374050}.widget-input input::placeholder{color:#374050}.widget-input input::-webkit-input-placeholder:hover, .widget-input input::-webkit-input-placeholder:focus, .widget-input input::-webkit-input-placeholder:active{color:#374050}.widget-input input::-moz-placeholder:hover, .widget-input input::-moz-placeholder:focus, .widget-input input::-moz-placeholder:active{color:#374050}.widget-input input:-ms-input-placeholder:hover, .widget-input input:-ms-input-placeholder:focus, .widget-input input:-ms-input-placeholder:active{color:#374050}.widget-input input::-ms-input-placeholder:hover, .widget-input input::-ms-input-placeholder:focus, .widget-input input::-ms-input-placeholder:active{color:#374050}.widget-input input::placeholder:hover,.widget-input input::placeholder:focus,.widget-input input::placeholder:active{color:#374050}\n";
document.body.appendChild(jh);return Vc});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_widgets",["require","react","react-dom","react-transition-group","styled-components","prezi_bacon","prezi_featureswitcher","prezi_i18n","prezi_logger","prezi_utils"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_widgets.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("react"),require("react-dom"),require("react-transition-group"),require("styled-components"),require("prezi_bacon"),require("prezi_featureswitcher"),require("prezi_i18n"),require("prezi_logger"),require("prezi_utils"));}else{this["prezi_widgets"]=__factory(React,ReactDOM,ReactTransitionGroup,StyledComponents,this["prezi_bacon"],this["prezi_featureswitcher"],this["prezi_i18n"],this["prezi_logger"],this["prezi_utils"]);}}).call(this);
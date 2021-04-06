;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-25-g6015dbc";},getModuleName:function(){return "prezi_shape_and_arc_editor";},getModuleVersion:function(){return "release-2021w06-base-26-gaeb382e";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi.geometry":dependencies[0],"prezi_cet_model_editor":dependencies[1],"prezi_editor_commander":dependencies[2],"prezi_featureswitcher":dependencies[3],"prezi_i18n":dependencies[4],"prezi_logger":dependencies[5],"prezi_plugin_api":dependencies[6],"prezi_plugin_meta":dependencies[7],"prezi_utils":dependencies[8],"prezi_widgets":dependencies[9]}};})());};})(arguments);var moduleImpl=(function(){return module(function(f){function L(b,a,c,p){a*=.5;let h="";const m={moveTo:(a,b)=>h+=`M ${a} ${b}`,lineTo:(a,b)=>h+=`L ${a} ${b}`,quadraticCurveTo:(a,b,q,c)=>h+=`Q ${a} ${b} ${q} ${c}`};var l=-Math.abs(b)/2;b=Math.abs(b)/2;m.moveTo(l+a,0-a);m.lineTo(b-7.2*a,0-a);var k=4*a,q=6*a,w=8*a,e=b-q,d=0-k;q=b-q;var t=0+k,g=b-w,n=0+k,f=b-(3.2*a+k),u=0+a;m.lineTo(b-w,0-k);m.quadraticCurveTo(e,d,b,0);m.quadraticCurveTo(q,t,g,n);m.lineTo(f,u);b=0+a;e=.4*a;d=-.4*a;k=-a;w=l+.6*a;q=0-a;m.lineTo(l+.6*a,0+a);m.quadraticCurveTo(l,
b,l,e);m.lineTo(l,d);m.quadraticCurveTo(l,k,w,q);h+="Z";return`<path
				fill="${c}"
				opacity="${p}"
				d="${h}"
			/>`}function M(b){switch(b){case n.ShapePresetKind.rectangle:return{kind:"rectangle",width:100/90*160,height:100};case n.ShapePresetKind.square:return{kind:"rectangle",width:100,height:100};case n.ShapePresetKind.circle:return{kind:"circle",width:100,height:100};case n.ShapePresetKind.triangle:return{kind:"triangle",width:100,height:100};default:throw Error(`invalid ShapePresetKind ${b}`);}}var N=f.dependencies.prezi_featureswitcher,H=f.dependencies.prezi_widgets,I=f.dependencies["prezi.geometry"],
e=f.dependencies.prezi_cet_model_editor,g=f.dependencies.prezi_i18n,x=f.dependencies.prezi_logger,d=f.dependencies.prezi_plugin_api,u=f.dependencies.prezi_editor_commander,J=f.dependencies.prezi_plugin_meta,A=f.dependencies.prezi_utils,n={};Object.defineProperty(n,"__esModule",{value:!0});(function(b){b[b.rectangle=0]="rectangle";b[b.square=1]="square";b[b.circle=2]="circle";b[b.triangle=3]="triangle"})(n.ShapePresetKind||(n.ShapePresetKind={}));n.attrs=function(b){return`${Object.keys(b).map((a)=>
`${a}="${b[a]}"`).join(" ")}`};var B={createArcPreset:function(b,a,c){if(null==a.fill||null==a.fill.color)return null;const p=a.fill.color,h=null!=a.fill.alpha?a.fill.alpha:1;let m=null!=a.arc&&0<=a.thickness?a.thickness:0;var l=120+m;a=(a,q,c,l,e)=>{var k={x:-a/2,y:-q/2,width:a,height:q};a=[k.x,k.y,k.width,k.height];q=k.width;var w=k.height;e=e?`<rect ${n.attrs(k)} fill="${u.toCssColor(u.getBgColor(p,h))}" />`:"";a:switch(k=u.toCssColor(p),b){case "line":{const a=.5*m;c=`<path
				stroke="${k}"
				stroke-width="${m}"
				stroke-opacity="${h}"
				stroke-linecap="round"
				stroke-linejoin="miter"
				d="${`M ${-Math.abs(c)/2+a} 0 L ${Math.abs(c)/2-a} 0`}"
			/>`}break a;case "arrow":c=L(c,m,k,h);break a;default:throw Error(`invalid arckkind ${b}`);}return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${a}"
					width="${q}" height="${w}">
					${e}
					<g ${l?'transform="rotate(-45)"':""}>
						${c}
					</g>
				</svg>`};l=a(l,l,120,!0,!0);a=a(E.width,E.height,E.width,!1,!1);return{presetKind:"arc",kind:b,style:c,thumbnail:A.Utils.svgToUrl(l),smallThumbnail:A.Utils.svgToUrl(a),hasLightColor:u.hasLightColor(p,h)}}};Object.defineProperty(B,"__esModule",{value:!0});const E={width:216,height:36};var C={createShapePreset:function(b,a,c){const [p,h,m,l]=null!=a.fill&&a.fill.fillKind===e.base.FillKind.solid?[a.fill.color,null!=a.fill.alpha?a.fill.alpha:1,a.fill.color,null!=a.fill.alpha?a.fill.alpha:1]:null!=
a.fill&&a.fill.fillKind===e.base.FillKind.linear?[a.fill.gradientStartColor,null!=a.fill.gradientStartAlpha?a.fill.gradientStartAlpha:1,a.fill.gradientEndColor,null!=a.fill.gradientEndAlpha?a.fill.gradientEndAlpha:1]:[null,1,null,1];if(null==p||null==m)return null;const k=null!=a.border&&0<=a.border.thickness?a.border.thickness:0,q=null!=a.border&&0<=a.border.thickness?a.border.color:null,w=null!=a.border&&null!=a.border.alpha?a.border.alpha:1,d=null!=q?q:p,g=null!=q?w:h,t=1.2*(100+k);var y=(a,c,
e,y,r)=>{const f={x:-(a/c)*t/2+e/2,y:-t/2,width:a/c*t+e,height:t};e=[f.x,f.y,f.width,f.height];var v=u.toCssColor(p),x=u.toCssColor(m),D;if(D=r)D=`<rect
				stroke="${u.toCssColor(q)}"
				stroke-width="${k}"
				stroke-opacity="${w}"
				stroke-linecap="round"
				stroke-linejoin="round"
				fill="${"url(#fill)"}"

				x="${-t/2}"
				y="${-t/2}"
				width="${t}"
				height="${t}"
			/>`;y=!r&&y?`<rect ${n.attrs(f)} fill="${u.toCssColor(u.getBgColor(d,g))}"/>`:"";if(r=!r)a:switch(r=u.toCssColor(q),b){case n.ShapePresetKind.rectangle:r=`<rect
				stroke="${r}"
				stroke-width="${k}"
				stroke-opacity="${w}"
				stroke-linecap="round"
				stroke-linejoin="round"
				fill="${"url(#fill)"}"

				x="${-50}"
				y="${-28.125}"
				width="${100}"
				height="${56.25}"
			/>`;break a;case n.ShapePresetKind.circle:r=`<circle
				stroke="${r}"
				stroke-width="${k}"
				stroke-opacity="${w}"
				stroke-linecap="round"
				stroke-linejoin="round"
				fill="${"url(#fill)"}"
				cx="0"
				cy="0"
				r="50"
			/>`;break a;case n.ShapePresetKind.triangle:r=`<polygon
				stroke="${r}"
				stroke-width="${k}"
				stroke-opacity="${w}"
				stroke-linecap="round"
				stroke-linejoin="round"
				fill="${"url(#fill)"}"
				points="0 -50 -50 50 50 50"
			/>`;break a;case n.ShapePresetKind.square:r=`<rect
				stroke="${r}"
				stroke-width="${k}"
				stroke-opacity="${w}"
				stroke-linecap="round"
				stroke-linejoin="round"
				fill="${"url(#fill)"}"

				x="${-50}"
				y="${-50}"
				width="${100}"
				height="${100}"
			/>`;break a;default:throw Error(`invalid ShapePresetKind ${b}`);}return`<svg xmlns="http://www.w3.org/2000/svg"
					viewBox="${e}"
					width="${a}" height="${c}">
				<defs>
					<linearGradient id="fill" gradientTransform="rotate(90)">
						<stop offset="0" stop-color="${v}" stop-opacity="${h}" />
						<stop offset="1" stop-color="${x}" stop-opacity="${l}" />
					</linearGradient>
					</defs>
					${D}
					${y}
					${r}
				</svg>`};a=y(t,t,0,!0,!1);const f=y(F.width,F.height,F.paddingRight,!1,!1);y=y(t,t,0,!1,!0);return Object.assign(Object.assign({},M(b)),{presetKind:"shape",style:c,fullThumbnail:A.Utils.svgToUrl(y),thumbnail:A.Utils.svgToUrl(a),smallThumbnail:A.Utils.svgToUrl(f),shapePresetKind:b,hasLightColor:u.hasLightColor(d,g)})}};Object.defineProperty(C,"__esModule",{value:!0});const F={width:96,height:48,paddingRight:0};var v={};Object.defineProperty(v,"__esModule",{value:!0});var O=e.base.getArrowHeadLength,
G=e.base.ObjectKind,K=e.base.readerIs,z;(function(b){b.none="none";b.shape="shape";b.arc="arc"})(z||(z={}));v.ShapeAndArcEditorPlugin=class{init(b){this.longRunningExecutor=u.createLongRunningExecutor(this.session);this.uiRoot=b.declareUI({shapePresets:[],arcPresets:[],chainLinkPresets:[],propertyBar:{type:z.none},activePresetSelector:null,currentTopicId:null,selectedSizes:new Map,networkStatus:d.NetworkStatus.Online},(a,b)=>{this.registerSidebar(b,{id:v.ShapeAndArcEditorPlugin.shapeSidebarId,presets:a.shapePresets,
title:g.I18n.ts("Shape"),menu:{weight:50,iconId:d.IconSmallId.Shape},log:{closeSidebar:(a)=>a.logCloseShapeSidebar(),openSidebar:(a)=>a.logShowShapeInsertOptions(),menuClick:(a)=>a.logClickTabMenuItem({tab_menu_item:"SHAPE"})}});this.registerSidebar(b,{id:v.ShapeAndArcEditorPlugin.arcSidebarId,presets:a.arcPresets,title:g.I18n.ts("Arrow & line"),menu:{weight:51,iconId:d.IconSmallId.ArrowsAndLines},log:{closeSidebar:(a)=>a.logCloseLineArrowSidebar(),openSidebar:(a)=>a.logShowLineArrowInsertOptions(),
menuClick:(a)=>a.logClickTabMenuItem({tab_menu_item:"ARROW_LINE"})}});this.createPropertyBarItems(a,b);this.createUpdatePresetMenuItem(a,b)});b.onStyleSheetChange(()=>{this.generateThumbnails(this.uiRoot)});b.onSelectionChange((a)=>{0<a.allObjects.length||null!=this.uiRoot.getState().currentTopicId?this.session.document.read((a)=>{this.updateState(a)}):this.uiRoot.setState({propertyBar:{type:z.none},activePresetSelector:null})});b.onDocumentChange(()=>{this.session.document.read((a)=>{this.updateState(a)})});
b.onCurrentTopicChange((a)=>{this.uiRoot.setState({currentTopicId:a});this.session.document.read((a)=>{this.updateState(a)})});b.onNetworkStatusChange((a)=>{this.uiRoot.setState({networkStatus:a})})}updateState(b){const a=this.getEditedObjectsReadonly(b),c=a.filter(K(e.base.ObjectKind.shape)),d=a.filter(K(e.base.ObjectKind.arc)),h=new Set([...c,...d].map((a)=>{a=a.presetSelector;return null==a?null:(a.typeName||"*")+"."+(a.className||"*")})),m=this.uiRoot.getState().currentTopicId,l=b.lookup.base(m);
let k;k=l&&l.is(e.base.ObjectKind.topic)?l.zoomLayoutBox.asReferenceFrame:l&&l.is(e.base.ObjectKind.page)?l.referenceFrame:b.overview.referenceFrame;b=c.filter((a)=>"rectangle"===a.shapeKind).length===a.length&&0<a.length;this.uiRoot.setState({activePresetSelector:1===h.size?h.values().next().value:null,currentTopicId:m,propertyBar:v.ShapeAndArcEditorPlugin.propertyBarOfSelectedObjects(a.length,c,d),cornerRadius:b?v.ShapeAndArcEditorPlugin.currentRadius(c):null,selectedSizes:new Map(a.map((a)=>{const b=
a.layoutBox.withReferenceFrame(k).size;return[a.id,Math.min(b.height,b.width)/2]}))})}static propertyBarOfSelectedObjects(b,a,c){return a.length===b&&0<b?{type:z.shape,shapeKind:a[0].shapeKind,presetStyleClass:a[0].shapeStyle,backgroundFills:a[0].fills,canDecreaseThickness:null!=a[0].border&&null!=a[0].border.thickness,borderColor:a[0].border.color}:c.length===b&&0<b?{type:z.arc,arcKind:c[0].arcKind,presetStyleClass:c[0].arcStyle,fills:c[0].fills}:{type:z.none}}static currentRadius(b){return b.map((a)=>
a.cornerRadius).reduceRight((a,b)=>Math.max(a,b))}processMessage(b){switch(b){case "openShapeInsertSidebar":this.uiRoot.sidebar.open(v.ShapeAndArcEditorPlugin.shapeSidebarId);break;case "openArcInsertSidebar":this.uiRoot.sidebar.open(v.ShapeAndArcEditorPlugin.arcSidebarId);break;default:throw Error(`unexpected message: ${b}`);}}createPropertyBarItems(b,a){const c=b.propertyBar;if(c.type===z.shape){const p=b.shapePresets.filter((a)=>a.kind===c.shapeKind&&a.shapePresetKind!==n.ShapePresetKind.square);
a.createPropertyBarItem((a)=>a.popupButton((a)=>({id:"shape-editor-presets",tooltipText:g.I18n.ts("Style presets"),content:{text:g.I18n.ts("Style presets")},weight:0,parent:d.PropertyBarId.Left,popupHeader:[a.sectionHeader({content:g.I18n.ts("Style presets")})],popupContent:[a.simpleList((a)=>({items:p.map((b)=>a.image({id:b.style,src:{url:b.fullThumbnail},dataLookup:b.style,onClick:(a)=>{this.executeShapeCommand(a,"set preset",(a)=>{x.avro.Avro.createDefaultLogger().logModifiedObject({object_type:a,
modify_action:"OBJECT_PRESET",topic_relationship:a,object_id:a.id});a.shapeStyle=b.style})}})),itemLayout:d.ListItemLayout.fixed,itemType:d.ListItemType.small,showTitle:!1,progress:d.ListProgress.finished,flexGrow:1,activeId:c.presetStyleClass})),a.infoMessage(g.I18n.ts("Style presets generate automatically and change according to your color scheme."))]})));a.createPropertyBarItem((a)=>a.popupButton((a)=>({id:"shape-editor-background-color",parent:d.PropertyBarId.Left,weight:1,tooltipText:g.I18n.ts("Fill color"),
content:{text:g.I18n.ts("Fill color"),icon:d.IconSmallId.FillColor,fills:Object.assign(Object.assign({},c.backgroundFills),{radialFill:null,canPickClearFill:!0})},hideArrow:!0,popupContent:[a.colorPicker({id:"shape-editor-background-color-picker",title:g.I18n.ts("Fill color"),showThemeColors:!0,expanded:!0,fills:Object.assign({},c.backgroundFills),onChange:(a,b)=>this.longRunningExecutor.update("shape-background-color",a,b,(a,b)=>{this.getEditedObjectsMutable(a).forEach((a)=>{a.is(e.base.ObjectKind.shape)&&
(a.fill=b.newFill)});this.updateState(a)},(a)=>{this.logShapeChanges(a)})}),...null!=this.uiRoot.getState().cornerRadius?[a.separator(),a.slider({title:g.I18n.ts("Corner Radius"),onChange:(a,b)=>this.longRunningExecutor.update("shape-background-corner-radius",a,b,(a,b)=>{const c=100*b.value;this.uiRoot.setState({cornerRadius:c});const h=this.uiRoot.getState().selectedSizes,k=Array.from(h.values()).reduceRight((a,b)=>Math.min(a,b));this.getEditedObjectsMutable(a).forEach((a)=>{a.is(e.base.ObjectKind.shape)&&
(a.cornerRadius=c*k/h.get(a.id))});this.updateState(a)},(a)=>{this.logShapeChanges(a)}),value:this.uiRoot.getState().cornerRadius/100})]:[]]})));a.createPropertyBarItem((a)=>a.separator({id:"shape-separator",size:d.PropertyBarSeparatorSize.Small,parent:d.PropertyBarId.Left,weight:2}));a.createPropertyBarItem((a)=>a.submenu({id:"shape-editor-thickness",title:g.I18n.ts("Border thickness"),tooltip:g.I18n.ts("Border thickness"),parent:d.PropertyBarId.Left,weight:3,icon:d.IconSmallId.BorderWeight,items:[{id:"shape-editor-decrease-thickness",
icon:d.IconSmallId.Minus,tooltip:g.I18n.ts("Decrease thickness"),enabled:c.canDecreaseThickness,onClick:(a)=>{this.executeShapeCommand(a,"thickness",(a)=>{let b=(null==a.border.thickness?-1:a.border.thickness)-this.getThicknessStepEditor(a);a.border=Object.assign(Object.assign({},a.border),{thickness:0>b?null:b})})}},{id:"shape-editor-increase-thickness",icon:d.IconSmallId.Plus,tooltip:g.I18n.ts("Increase thickness"),onClick:(a)=>{this.executeShapeCommand(a,"thickness",(a)=>{var b=null==a.border.thickness?
-1:a.border.thickness;b=0>b?0:b+this.getThicknessStepEditor(a);a.border=Object.assign(Object.assign({},a.border),{thickness:b})})}}]}));a.createPropertyBarItem((a)=>a.colorPicker({id:"shape-editor-border-color",parent:d.PropertyBarId.Left,weight:4,tooltip:g.I18n.ts("Border color"),title:g.I18n.ts("Border color"),showThemeColors:!0,icon:d.IconSmallId.BorderColor,fills:{hasAlpha:!0,current:H.FillKind.solid,solidFill:{fillKind:H.FillKind.solid,color:c.borderColor}},onChange:(a,b)=>this.longRunningExecutor.update("shape-border-color",
a,b,(a,b)=>{this.getEditedObjectsMutable(a).forEach((a)=>{a.is(e.base.ObjectKind.shape)&&(a.border=Object.assign(Object.assign({},a.border),{color:b.newFill.color}))});this.updateState(a)},(a)=>{this.logShapeChanges(a)})}))}if(c.type===z.arc){const p=b.arcPresets.filter((a)=>a.kind===c.arcKind),h=(a,b)=>a.imageCheckbox({id:b.style,imgUrl:b.smallThumbnail,checked:c.presetStyleClass===b.style,hasLightColor:b.hasLightColor,onCheck:(a,c)=>{c&&this.executeArcCommand(a,"set preset",(a)=>{x.avro.Avro.createDefaultLogger().logModifiedObject({object_type:a,
modify_action:"STYLE_CHANGE",topic_relationship:a,object_id:a.id});a.arcStyle=b.style})}});a.createPropertyBarItem((a)=>a.popupButton((a)=>({id:"arc-editor-presets",tooltipText:g.I18n.ts("Presets"),content:{text:g.I18n.ts("Presets")},weight:0,parent:d.PropertyBarId.Left,height:d.PopupHeight.Full,popupHeader:[a.sectionHeader({content:g.I18n.ts("Presets")})],popupContent:p.map((b)=>h(a,b))})));a.createPropertyBarItem((a)=>a.colorPicker({id:"arc-editor-background-color",weight:1,parent:d.PropertyBarId.Left,
tooltip:g.I18n.ts("Line color"),title:g.I18n.ts("Line color"),showThemeColors:!0,icon:d.IconSmallId.FillColor,fills:c.fills,onChange:(a,b)=>this.longRunningExecutor.update("arc-line-color",a,b,(a,b)=>{this.getEditedObjectsMutable(a).forEach((a)=>{a.is(e.base.ObjectKind.arc)&&(a.fill=b.newFill.color)});this.updateState(a)},(a)=>{this.getEditedObjectsMutable(a).forEach((a)=>{a.is(e.base.ObjectKind.arc)&&this.logArcChange(a)})})}));a.createPropertyBarItem((a)=>a.separator({id:"arc-separator",size:d.PropertyBarSeparatorSize.Small,
parent:d.PropertyBarId.Left,weight:2}));a.createPropertyBarItem((a)=>a.submenu({id:"arc-editor-thickness",title:g.I18n.ts("Thickness"),tooltip:g.I18n.ts("Thickness"),parent:d.PropertyBarId.Left,weight:3,icon:d.IconSmallId.BorderWeight,items:[{id:"arc-editor-decrease-thickness",icon:d.IconSmallId.Minus,tooltip:g.I18n.ts("Decrease thickness"),onClick:(a)=>{this.executeArcCommand(a,"thickness",(a)=>{this.changeArcThickness(a,this.getDecreasedLineArrowThickness(a))})}},{id:"arc-editor-increase-thickness",
icon:d.IconSmallId.Plus,tooltip:g.I18n.ts("Increase thickness"),onClick:(a)=>{this.executeArcCommand(a,"thickness",(a)=>{this.changeArcThickness(a,this.getIncreasedLineArrowThickness(a))})}}]}))}}logShapeChanges(b){this.getEditedObjectsMutable(b).forEach((a)=>{x.avro.Avro.createDefaultLogger().logModifiedObject({object_type:"SHAPE",modify_action:"STYLE_CHANGE",topic_relationship:a,object_id:a.id})})}createUpdatePresetMenuItem(b,a){null!=b.activePresetSelector&&a.createMenuItem({id:"context-menu-update-preset",
kind:d.MenuItemKind.context,title:g.I18n.ts("Update style preset")+(N.isActive("js-developer-features")?" (DEV: "+b.activePresetSelector+")":""),weight:69,onClick:(a)=>{this.session.document.executeApiCommand(a,{name:"update style preset",run:(a)=>{this.getEditedObjectsMutable(a).forEach((a)=>{(a.is(e.base.ObjectKind.shape)||a.is(e.base.ObjectKind.arc))&&a.updatePresetStyle()})}})}})}changeArcThickness(b,a){this.logArcChange(b);b.thickness=a}logArcChange(b){const a="arrow"===b.arcKind?"ARROW":"LINE";
x.avro.Avro.createDefaultLogger().logModifiedObject({object_type:a,modify_action:"STYLE_CHANGE",topic_relationship:b,object_id:b.id})}getIncreasedLineArrowThickness(b){const a=b.thickness+this.getThicknessStepEditor(b),c="arrow"===b.arcKind?a*O():0;return I.Geometry.distance(b.start,b.end)>c?a:b.thickness}getDecreasedLineArrowThickness(b){const a=b.thickness-this.getThicknessStepEditor(b);return 0>a?b.thickness:a}getThicknessStepEditor(b){var a=this.session.positionFinder.getCameraLayoutBox().referenceFrame.point({x:0,
y:0});const c=this.session.positionFinder.getCameraLayoutBox().referenceFrame.point({x:0,y:1});a=a.withReferenceFrame(b.layoutBox.referenceFrame);b=c.withReferenceFrame(b.layoutBox.referenceFrame);return I.Geometry.distance(a,b)}executeShapeCommand(b,a,c){this.session.document.executeApiCommand(b,{name:a,run:(a)=>{this.getEditedObjectsMutable(a).forEach((a)=>{a.is(e.base.ObjectKind.shape)&&(x.avro.Avro.createDefaultLogger().logModifiedObject({object_type:"SHAPE",modify_action:"STYLE_CHANGE",topic_relationship:a,
object_id:a.id}),c(a))});this.updateState(a)}})}executeArcCommand(b,a,c){this.session.document.executeApiCommand(b,{name:a,run:(a)=>{this.getEditedObjectsMutable(a).forEach((a)=>{a.is(e.base.ObjectKind.arc)&&c(a)});this.updateState(a)}})}registerSidebar(b,a){b.createSidebar((b)=>({id:a.id,root:{title:a.title,content:[...this.createLibrarySection(b,a.id),b.simpleList((b)=>({items:a.presets.map((a)=>b.droppableImage({src:{url:a.thumbnail},onDrop:(b,c)=>{this.session.document.executeApiCommand(b,{name:"drop",
run:(e)=>{e=this.session.insertTarget.getSimpleObjectParent(e);if("shape"===a.presetKind){var d=e.add.shape(a.kind,a.style);d.width=a.width;d.height=a.height;d.fitInto(this.session.positionFinder.findLayoutBox(e,d.width,d.height,c.stageX,c.stageY));x.avro.Avro.createDefaultLogger().logNewObject({object_type:d,topic_relationship:d,parent_type:d,object_id:d.id});x.avro.Avro.createDefaultLogger().logInsertShape({shape_source:null==c.stageX?"DOUBLE_CLICK":"DRAG_DROP"});this.session.selection.setSelection(b,
[d])}else{d=e.add.arc(a.kind,a.style);const h=d.layoutBox.size.width;d.fitInto(this.session.positionFinder.findLayoutBox(e,h,h,c.stageX,c.stageY));x.avro.Avro.createDefaultLogger().logNewObject({object_type:d,topic_relationship:d,parent_type:d,object_id:d.id});this.session.selection.setSelection(b,[d])}}})}})),itemLayout:d.ListItemLayout.fixed,itemType:d.ListItemType.large,flexGrow:1}))]},onOpen:()=>a.log.openSidebar(x.avro.Avro.createDefaultLogger()),onCloseButtonClicked:()=>a.log.closeSidebar(x.avro.Avro.createDefaultLogger())}));
return b.createMenuItem({kind:d.MenuItemKind.largeButton,enabled:!0,onClick:()=>{a.log.menuClick(x.avro.Avro.createDefaultLogger());this.uiRoot.sidebar.toggle(a.id)},parent:d.TabMenuId.Insert,icon:a.menu.iconId,weight:a.menu.weight,id:`${a.id}-editor-button`,title:a.title})}createLibrarySection(b,a){return"Online"===this.uiRoot.getState().networkStatus?[b.sectionHeader({content:g.I18n.ts("My Library")}),b.button(d.ButtonSize.Large,d.ButtonAlign.Start,(b)=>[b.button({id:"open-my-library-button",color:d.ButtonColor.Blue,
content:{text:g.I18n.ts("Add from my library")},onClick:()=>{this.pluginAccess.send(J.favorites,J.createOpenFavoritesFromAnotherSidebarMessage(a===v.ShapeAndArcEditorPlugin.shapeSidebarId?"shapes":"arcs"))}})]),b.separator()]:[]}generateThumbnails(b){let a=[],c=[],d=[];this.session.document.read((b)=>{var h=new Set([e.base.ShapeStyle.Poly1,e.base.ShapeStyle.Poly2,e.base.ShapeStyle.Poly3,e.base.ShapeStyle.Poly4,e.base.ShapeStyle.Poly5]);const g=new Set([e.base.ArcStyle.Line1,e.base.ArcStyle.Line2,
e.base.ArcStyle.Line3,e.base.ArcStyle.Line4,e.base.ArcStyle.Line5]),k=new Set([e.base.ArcStyle.Chainlink,e.base.ArcStyle.ChainlinkCamelCase]),f=[],p=(a,b,c)=>f.push({className:a,typeName:b,cb:c});for(let {className:e}of b.styleSheet.styleSheets){const b=e;h.has(b)&&p(e,"ZShape",(c)=>{a.push(C.createShapePreset(n.ShapePresetKind.rectangle,c,b),C.createShapePreset(n.ShapePresetKind.circle,c,b),C.createShapePreset(n.ShapePresetKind.square,c,b),C.createShapePreset(n.ShapePresetKind.triangle,c,b))});const f=
e;g.has(f)&&(p(e,"ZLine",(a)=>{c.push(B.createArcPreset("line",a,f))}),p(e,"ZArrow",(a)=>{c.push(B.createArcPreset("arrow",a,f))}));k.has(f)&&(p(e,"ZLine",(a)=>{d.push(B.createArcPreset("line",a,f))}),p(e,"ZArrow",(a)=>{d.push(B.createArcPreset("arrow",a,f))}))}h=f.map((a)=>({classNames:[a.className],typeName:a.typeName}));b=b.styleSheet.resolve(h);for(h=0;h<f.length;h++)f[h].cb(b[h])});b.setState({shapePresets:a.filter((a)=>null!=a),arcPresets:c.filter((a)=>null!=a),chainLinkPresets:d.filter((a)=>
null!=a)})}flatten(b){if(!b.every((a)=>a.is(G.topic)&&1===a.simpleChildren(e.base.ChildVisibilityKind.outsideAndInside).length))return b;let a=[];b.forEach((b)=>{b.is(G.topic)&&a.push(...b.simpleChildren(e.base.ChildVisibilityKind.outsideAndInside))});return a}getEditedObjectsReadonly(b){return this.getEditedObjects(b,(a)=>this.session.selection.getReadonlySelectionInfo(a))}getEditedObjectsMutable(b){return this.getEditedObjects(b,(a)=>this.session.selection.getSelectionInfo(a))}getEditedObjects(b,
a){let c=a(b).allObjects;a=this.uiRoot.getState().currentTopicId;if(0===c.length){if(null==a)return[];b=b.lookup.base(a);if(!b||!b.is(G.topic))return[];c=b.simpleChildren(e.base.ChildVisibilityKind.inside).filter((a)=>e.CetModelEditor.isTopicShapeObjectKILLME(a)).map((a)=>a)}c=this.flatten(c);[...c].forEach((a)=>{a.is(e.base.ObjectKind.topic)&&(c=c.filter((b)=>b!==a).concat(a.simpleChildren(e.base.ChildVisibilityKind.outside).filter((a)=>e.CetModelEditor.isTopicShapeObjectKILLME(a)).map((a)=>a)))});
return c}};v.ShapeAndArcEditorPlugin.shapeSidebarId="sidebar-shape-editor";v.ShapeAndArcEditorPlugin.arcSidebarId="sidebar-arc-editor";f={};Object.defineProperty(f,"__esModule",{value:!0});f.lazyModule={createPlugin(){return new v.ShapeAndArcEditorPlugin}};return f});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_shape_and_arc_editor",["require","prezi.geometry","prezi_cet_model_editor","prezi_editor_commander","prezi_featureswitcher","prezi_i18n","prezi_logger","prezi_plugin_api","prezi_plugin_meta","prezi_utils","prezi_widgets"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_shape_and_arc_editor.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi.geometry"),require("prezi_cet_model_editor"),require("prezi_editor_commander"),require("prezi_featureswitcher"),require("prezi_i18n"),require("prezi_logger"),require("prezi_plugin_api"),require("prezi_plugin_meta"),require("prezi_utils"),require("prezi_widgets"));}else{this["prezi_shape_and_arc_editor"]=__factory(this["prezi.geometry"],this["prezi_cet_model_editor"],this["prezi_editor_commander"],this["prezi_featureswitcher"],this["prezi_i18n"],this["prezi_logger"],this["prezi_plugin_api"],this["prezi_plugin_meta"],this["prezi_utils"],this["prezi_widgets"]);}}).call(this);
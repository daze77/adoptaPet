;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-25-g6015dbc";},getModuleName:function(){return "prezi_path_editing";},getModuleVersion:function(){return "release-2021w06-base-26-gaeb382e";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi_cet_model_editor":dependencies[0],"prezi_commenting":dependencies[1],"prezi_featureswitcher":dependencies[2],"prezi_i18n":dependencies[3],"prezi_logger":dependencies[4],"prezi_plugin_api":dependencies[5],"prezi_plugin_meta":dependencies[6],"prezi_thumbnail_render":dependencies[7],"prezi_utils":dependencies[8]}};})());};})(arguments);var moduleImpl=(function(){return module(function(q){var h=q.dependencies.prezi_cet_model_editor,I=q.dependencies.prezi_commenting,f=q.dependencies.prezi_i18n,r=q.dependencies.prezi_logger,e=q.dependencies.prezi_plugin_api,A=q.dependencies.prezi_plugin_meta,D=q.dependencies.prezi_thumbnail_render,t=q.dependencies.prezi_utils,B={},C=this&&B.__awaiter||function(a,c,b,g){function d(a){return a instanceof b?a:new b(function(b){b(a)})}return new (b||(b=Promise))(function(b,y){function m(a){try{e(g.next(a))}catch(E){y(E)}}function k(a){try{e(g["throw"](a))}catch(E){y(E)}}
function e(a){a.done?b(a.value):d(a.value).then(m,k)}e((g=g.apply(a,c||[])).next())})};Object.defineProperty(B,"__esModule",{value:!0});var J=h.base.createPathLabelMapFromApi,H=h.base.isKindDescendantOf,l=h.base.isRefInstanceOf,K=h.base.readerIs,d=h.base.ObjectKind;const F=D.ThumbnailSize._224;var n;(function(a){a.main="main";a.deck="deck";a.frame="frame";a.text="text"})(n||(n={}));var p;(function(a){a.fadeIn="fadeIn";a.fadeOut="fadeOut";a.zoomTo="zoomTo";a.zoomOut="zoomOut"})(p||(p={}));var v;(function(a){a[a.Add=
0]="Add";a[a.Remove=1]="Remove"})(v||(v={}));B.PathEditingPlugin=class{constructor(){this.currentTopicRef=null;this.zoomToVideo=q.getResourceUrl("/Zoom-to.mp4");this.zoomOutVideo=q.getResourceUrl("/Zoom-out.mp4");this.ZoomAreaVideo=q.getResourceUrl("/Zoom-to-area.mp4");this.fadeInVideo=q.getResourceUrl("/Fade-in.mp4");this.fadeOutVideo=q.getResourceUrl("/Fade-out.mp4");this.zoomToImage=q.getResourceUrl("/Zoom-to.png");this.zoomOutImage=q.getResourceUrl("/Zoom-out.png");this.ZoomAreaImage=q.getResourceUrl("/Zoom-to-area.png");
this.fadeInImage=q.getResourceUrl("/Fade-in.png");this.fadeOutImage=q.getResourceUrl("/Fade-out.png");this.icons=new Map([[d.fadeIn,e.IconSmallId.FadeIn],[d.fadeOut,e.IconSmallId.FadeOut]]);this.titles=new Map([[d.fadeIn,f.I18n.ts("Fade in")],[d.fadeOut,f.I18n.ts("Fade out")]])}init(a){this.topicLess=this.session.document.read((a)=>0===a.overview.topicChildren.length);this.uiRoot=a.declareUI(null,(a,b)=>this.declareUI(a,b));a.onCurrentTopicChange((a)=>{this.session.document.read((b)=>{var c;this.currentTopicRef=
null===(c=b.lookup.simpleObjectParent(a))||void 0===c?void 0:c.ref;this.readStateFromDocument(b,!0)})});a.onDocumentChange(()=>{this.session.document.read((a)=>{this.readStateFromDocument(a,!0)});this.setStateFromSelectionInfo()});a.onSelectionChange((a)=>{this.uiRoot.setState({selectionInfo:a});this.updateAnimationStateOnSelectionChange(a);this.setStateFromSelectionInfo()});I.CommentingModule.getCommentingController().then((a)=>{this.commentingController=a;this.session.document.read((a)=>{this.readStateFromDocument(a,
!0)});this.commentingController.getCommentingUpdatedStream().onValue(()=>{Promise.resolve().then(()=>{this.session.document.read((a)=>{this.readStateFromDocument(a,!0)})})})});D.ThumbnailRenderModule.getThumbnailService().then((a)=>{this.thumbnailService=a;a.monitorPath({size:F,needHighQuality:!0,includePathElement:(a)=>l(a,h.base.ObjectKind.visitOverview)||l(a,h.base.ObjectKind.visitPlanet)||l(a,h.base.ObjectKind.visitStack)||l(a,h.base.ObjectKind.visitPage)||l(a,h.base.ObjectKind.backToParent)||
l(a,h.base.ObjectKind.zoom)}).getThumbnailStream().onValue((a)=>this.updateStateFromThumbnail(a.pathElementRef,a,!0))})}getCurrentVisit(a,c){c=c.filter(K(d.pathParent)).find((a)=>a.target.id===this.currentTopicRef.id);if(null==c)return a.structuredPath.editorPath;t.Utils.assert(!c.is(d.visitStack),`Current topic is a stack! id: ${c.id}`);return c}setStateFromSelectionInfo(){var a,c,b,g;let k=this.uiRoot.getState();if(null!=k){const m=k.selectionInfo;if(null!=m){const y=m.allObjects.filter((a)=>{var b;
return null!=(null===(b=k.targetIdMap)||void 0===b?void 0:b.get(a.id))});1<y.length?this.uiRoot.setState({activePathElementRef:null}):1!==y.length||null!=k.activePathElementRef&&(null===(a=k.pathElementIdToTargetId)||void 0===a?void 0:a.get(k.activePathElementRef.id))===y[0].id||(a=null===(b=null===(c=this.uiRoot.getState())||void 0===c?void 0:c.targetIdMap)||void 0===b?void 0:b.get(y[0].id),this.uiRoot.setState({activePathElementRef:a}),this.uiRoot.scrollIntoView(a.id));if(1!==m.allObjects.length)c=
null;else{const a=m.allObjects[0];c=l(a,d.stackTopic)?this.session.document.read((b)=>{var c;const g=b.lookup.resolve(a);if(null==g)return null;const y=g.pageChildren[0];return null===(c=b.structuredPath.pathElementsInOrder.find((a)=>a.is(d.visitPage)&&a.target===y))||void 0===c?void 0:c.ref}):null===(g=k.targetIdMap)||void 0===g?void 0:g.get(m.allObjects[0].id)}this.uiRoot.setState({startPointCtxAction:null==c?null:k.currentStartPointRef&&c.id===k.currentStartPointRef.id?{kind:v.Remove}:{kind:v.Add,
pathElementRef:c}})}}}updateAnimationStateOnSelectionChange(a){this.uiRoot.setState({canAddZoomToObjectAnimation:this.canAddAnimation(a,p.zoomTo),canAddFadeAnimation:this.canAddAnimation(a,p.fadeIn)})}scrollToAdded(a,c){c=c.id;this.readStateFromDocument(a,!0);for(const b of a.structuredPath.pathElementsInOrder)if((b.is(d.pathParent)||b.is(d.zoom))&&b.target.id===c){this.uiRoot.scrollIntoView(b.id);break}}declareUI(a,c){const b=a.targetRef;if(null!=a&&null!=this.currentTopicRef){c.createAction({shortcut:A.pathEditing.shortcuts.addTopic,
enabled:!0,onExecute:(c)=>{this.topicLess?this.addZoomArea(c,a):b.kind===d.stackTopic?this.addPage(c,a):this.addTopic(c,h.base.ObjectKind.planetTopic,a)}});c.createMenuItem({id:"insertMenu/topic",kind:e.MenuItemKind.largeButton,enabled:!0,parent:e.TabMenuId.Insert,weight:0,title:this.topicLess?f.I18n.ts("Zoom area"):b.kind===d.stackTopic?f.I18n.ts("Page"):b.kind===d.overview?f.I18n.ts("Topic"):f.I18n.ts("Subtopic"),icon:e.IconSmallId.NewTopic,color:e.NamedColors.topicButton,onClick:(c)=>{r.avro.Avro.createDefaultLogger().logClickTabMenuItem({tab_menu_item:"TOPIC"});
this.topicLess?this.addZoomArea(c,a):b.kind===d.stackTopic?this.addPage(c,a):this.addTopic(c,h.base.ObjectKind.planetTopic,a)}});this.createContextMenuItems(a,c);c.createLeftSidebar((b)=>({root:{header:this.createButtons(a,b),content:this.createList(a,b),footer:this.createFooter(a,b)}}));c.createSidebar((b)=>({id:"sidebar-animations",root:{title:f.I18n.ts("Animations"),content:this.getAnimationLists(b,a),footer:null}}));if(a.canAddFadeAnimation||a.canAddZoomToObjectAnimation)c.createPropertyBarItem((b)=>
this.createPropertyBarAnimationButton(a,b)),c.createMenuItem({kind:e.MenuItemKind.context,title:f.I18n.ts("Add animation"),id:"context-menu-add-animation",weight:65,onClick:()=>C(this,void 0,void 0,function*(){this.uiRoot.sidebar.toggle("sidebar-animations")})});c.createMenuItem({kind:e.MenuItemKind.largeButton,id:"animation-insert-menuitem",title:f.I18n.ts("Animation"),icon:e.IconSmallId.Animation,onClick:()=>{r.avro.Avro.createDefaultLogger().logClickTabMenuItem({tab_menu_item:"ANIMATION"});this.uiRoot.sidebar.open("sidebar-animations")},
parent:e.TabMenuId.Insert,weight:6})}}getAnimationLists(a,c){let b=[];const g={id:"zoom-item-1",title:f.I18n.ts("Zoom area"),src:{url:this.ZoomAreaImage},onClick:(a)=>this.addZoomArea(a,c),hoverContent:{type:e.HoverContentType.video,url:this.ZoomAreaVideo},dataLookup:"zoom-area-image"},d={id:"zoom-item-2",title:this.zoomOutName(c),src:{url:this.zoomOutImage},onClick:(a)=>{this.session.document.executeApiCommand(a,{name:"Insert zoom out",run:(a)=>{this.addAnimation(this.uiRoot.getState(),a,p.zoomOut)}})},
hoverContent:{type:e.HoverContentType.video,url:this.zoomOutVideo},dataLookup:"zoom-out-image"};c.canAddFadeAnimation&&(b.push(a.sectionHeader({content:f.I18n.ts("Fade animations")})),b.push(a.simpleList((a)=>({items:[a.image({id:"fade-item-1",title:f.I18n.ts("Fade in"),src:{url:this.fadeInImage},onClick:(a)=>{this.session.document.executeApiCommand(a,{name:"Insert fade in animation",run:(a)=>this.addAnimation(c,a,p.fadeIn)})},hoverContent:{type:e.HoverContentType.video,url:this.fadeInVideo},dataLookup:"fade-in-image"}),
a.image({id:"fade-item-2",title:f.I18n.ts("Fade out"),src:{url:this.fadeOutImage},onClick:(a)=>{this.session.document.executeApiCommand(a,{name:"Insert fade out animation",run:(a)=>this.addAnimation(c,a,p.fadeOut)})},hoverContent:{type:e.HoverContentType.video,url:this.fadeOutVideo},dataLookup:"fade-out-image"})],itemLayout:e.ListItemLayout.fixed,itemType:e.ListItemType.large,showTitle:!0}))));b.push(a.sectionHeader({content:f.I18n.ts("Zoom animations")}));c.canAddZoomToObjectAnimation?b.push(a.simpleList((a)=>
({items:[a.image(g),a.image(d),a.image({id:"zoom-item-3",title:f.I18n.ts("Zoom to"),src:{url:this.zoomToImage},onClick:(a)=>{this.session.document.executeApiCommand(a,{name:"Insert zoom to",run:(a)=>{this.addAnimation(this.uiRoot.getState(),a,p.zoomTo)}})},hoverContent:{type:e.HoverContentType.video,url:this.zoomToVideo},dataLookup:"zoom-to-image"})],itemLayout:e.ListItemLayout.fixed,itemType:e.ListItemType.large,showTitle:!0}))):b.push(a.simpleList((a)=>({items:[a.image(g),a.image(d)],itemLayout:e.ListItemLayout.fixed,
itemType:e.ListItemType.large,showTitle:!0})));let m="";c.canAddFadeAnimation?c.canAddZoomToObjectAnimation||(m=f.I18n.ts("Select an object to use zoom-to animations.")):m=f.I18n.ts("Select an object to use zoom-to, fade-in and fade-out animations.");c.canAddFadeAnimation&&c.canAddZoomToObjectAnimation||b.push(a.infoMessage(m));return b}getActiveListItemIds(a){var c;return null!==(c=null===a||void 0===a?void 0:a.timelineIds)&&void 0!==c?c:[]}createList(a,c){return[c.timelineList((b)=>{var c;return{id:"timeline-structure-list",
activeId:null===(c=a.activePathElementRef)||void 0===c?void 0:c.id,items:this.getActiveListItemIds(a).map((c)=>this.createListItemFromPathItem(b,a.listItemMap.get(c),a.aspectRatio)),onReorderStart:(b)=>this.onReorderStart(a,b),onReorderEnd:(b,c)=>this.onReorderEnd(a,b,c),animate:a.animate}})]}getActivePathElement(a,c){var b;return 0<=this.getActiveListItemIds(c).indexOf(null===(b=c.activePathElementRef)||void 0===b?void 0:b.id)?a.lookup.resolve(c.activePathElementRef):null}createPropertyBarAnimationButton(a,
c){return c.button({id:"path-editing-animation",weight:0,parent:e.PropertyBarId.Right,icon:e.IconSmallId.Animation,tooltip:f.I18n.ts("Add animation"),onClick:()=>C(this,void 0,void 0,function*(){r.avro.Avro.createDefaultLogger().logClickPropertyBar({property_item:"ANIMATION"});this.uiRoot.sidebar.toggle("sidebar-animations")})})}addZoomArea(a,c){this.session.document.executeApiCommand(a,{name:"Add zoom area",run:(b)=>{const d=b.lookup.resolve(c.currentVisitRef),k=d.target.add.zoomArea();r.avro.Avro.createDefaultLogger().logNewObject({object_type:k,
topic_relationship:k,parent_type:k,object_id:k.id});k.fitInto(this.session.positionFinder.findLayoutBox(d.target,k.layoutBox.size.width,k.layoutBox.size.height,null,null));this.session.selection.setSelection(a,[k]);this.addAnimation(c,b,p.zoomTo)}})}addZoomOut(a,c){this.session.document.executeApiCommand(a,{name:"Insert zoom out",run:(a)=>{this.addAnimation(c,a,p.zoomOut)}})}canAddAnimation(a,c){switch(c){case p.fadeIn:case p.fadeOut:return 0===a.allObjects.length||1===a.allObjects.length&&H(a.allObjects[0].kind,
d.zoomArea)?!1:!0;case p.zoomTo:return 1===a.allObjects.length&&0===a.groups.length&&H(a.allObjects[0].kind,d.simpleObject);case p.zoomOut:return!0;default:t.Utils.assertNever(c)}}onReorderStart(a,c){const b=this.getActiveListItemIds(a),g=a.listItemMap.get(b[c.fromIndex]),k=b.map((a,b)=>({itemId:a,index:b})).filter((b)=>l(a.listItemMap.get(b.itemId).pathElementRef,d.backToParent)).map((a)=>a.index);if(l(a.targetRef,d.stackTopic)){const d=[],e=[];let h=null;b.forEach((b,c)=>{b=a.listItemMap.get(b);
b.kind===n.deck&&(h={pageIndex:d.length,itemInfos:[]},d.push(h));c={itemIndex:c,item:b,pageInfo:h};e.push(c);h.itemInfos.push(c)});const f=e[c.fromIndex].pageInfo;if(g.kind!==n.deck)return c=e.map((a,b)=>a.pageInfo===f&&a!==f.itemInfos[0]?null:b).filter((a)=>null!=a),{forbiddenIndices:[...k,...c]};{var m=e.map((a,b)=>{b=a.pageInfo.pageIndex>f.pageIndex?b-f.itemInfos.length:b;return a.item.kind===n.deck||a.pageInfo===f?null:b}).filter((a)=>null!=a);const a=f.itemInfos.length;return{forbiddenIndices:[...k.map((b)=>
b-a+1),...m],startIndex:c.fromIndex,count:a}}}return g.kind===n.text||(null===(m=a.listItemMap.get(b[0]))||void 0===m?void 0:m.kind)===n.main?{forbiddenIndices:[...k,0]}:{forbiddenIndices:k}}onReorderEnd(a,c,b){const g=this.getActiveListItemIds(a);t.Utils.arrayEquals(g,this.getActiveListItemIds(this.uiRoot.getState()))&&this.session.document.executeApiCommand(c,{name:"left-sidebar-reorder",run:(c)=>{var m=c.lookup.resolve(a.targetRef),k=a.listItemMap.get(g[b.fromIndex]);k=c.lookup.resolve(k.pathElementRef);
var e=k.is(d.visitOverview)||k.is(d.visitStack)||k.is(d.visitPlanet)||k.is(d.visitPage)?"THUMBNAIL":"ANIMATION";r.avro.Avro.createDefaultLogger().logDragObject({object_type:e,topic_relationship:"CONTENT",object_id:e.toLowerCase()});m.is(d.stackTopic)?k.is(d.freePathChild)?(k.copyTo(k.parent,k.index+b.toIndex-b.fromIndex+(b.toIndex>b.fromIndex?1:0)),k.delete()):k.is(d.visitPage)&&(m=b.toIndex>b.fromIndex?b.toIndex+b.count:b.toIndex,e=k.target,m===g.length-1?k.index=e.parent.pageChildren.length-1:(m=
c.lookup.resolve(a.listItemMap.get(g[m]).pathElementRef),t.Utils.assert(m.is(d.visitPage),""),k.index=b.toIndex>b.fromIndex?m.target.index-1:m.target.index)):(t.Utils.assert(1===b.count,""),k.is(d.visitStack)||k.is(d.visitPlanet)?k.index=b.toIndex-1:k.is(d.freePathChild)&&(k.copyTo(k.parent,b.toIndex>k.index?b.toIndex:b.toIndex-1),k.delete()));this.readStateFromDocument(c,!1)}})}addTopic(a,c,b){const g=b.targetRef;g.kind!==d.stackTopic&&this.session.document.executeApiCommand(a,{name:`Add ${c}`,run:(k)=>
{const m=k.lookup.resolve(g),e=k.lookup.resolve(b.currentVisitRef);if(null!=m&&null!=e){var f=0;f=this.getActivePathElement(k,b);f=null!=f&&f.is(d.pathChild)?e===f?0:f.index+1:e.children.length;var p=0,u=e.children;for(let a=0;a<f;a++)u[a].is(d.freePathChild)||p++;var w=c===h.base.ObjectKind.planetTopic?m.layout.add.planet(p):c===h.base.ObjectKind.stackTopic?m.layout.add.stack(p):t.Utils.assertNever(c);this.logAfterTopicOrPageInsert(w);e.children.find((a)=>(a.kind===d.visitPlanet||a.kind===d.visitStack)&&
a.target===w).index=f;k.animate(w).dropIn();this.scrollToAdded(k,w);this.session.selection.setSelection(a,[w])}}})}addPage(a,c){const b=c.targetRef;b.kind===d.stackTopic&&this.session.document.executeApiCommand(a,{name:"Add Page",run:(a)=>{var d=a.lookup.resolve(b);const g=a.lookup.resolve(c.currentVisitRef);if(null!=d&&null!=g)switch(g.kind){case h.base.ObjectKind.visitOverview:case h.base.ObjectKind.visitPlanet:t.Utils.fail(`currentVisit element should not be ${g.kind}`);break;case h.base.ObjectKind.visitPage:d=
d.add.page(g.index+1),this.logAfterTopicOrPageInsert(d),this.scrollToAdded(a,d)}}})}createContextMenuItems(a,c){const b=a.targetRef;b.kind===d.stackTopic?null!=a.selectionInfo&&0!==a.selectionInfo.allObjects.length||c.createMenuItem({kind:e.MenuItemKind.context,title:f.I18n.ts("Insert page"),id:"add-page-context-menu-button",weight:130,onClick:(b)=>this.addPage(b,a)}):null!=a.selectionInfo&&0!==a.selectionInfo.allObjects.length||c.createMenuItem({kind:e.MenuItemKind.context,title:b.kind===d.overview?
f.I18n.ts("Insert topic"):f.I18n.ts("Insert subtopic"),id:"context-menu-new-topic",weight:130,onClick:(b)=>this.addTopic(b,h.base.ObjectKind.planetTopic,a)});const g=a.startPointCtxAction;if(null!=g)switch(g.kind){case v.Add:c.createMenuItem({kind:e.MenuItemKind.context,title:f.I18n.ts("Set as starting point"),id:"context-menu-set-start-point",weight:80,onClick:(a)=>{this.session.document.executeApiCommand(a,{name:"set custom start point",run:(a)=>{const b=a.lookup.resolve(g.pathElementRef);null!=
b&&(a.structuredPath.customStartPoint=b)}})}});break;case v.Remove:c.createMenuItem({kind:e.MenuItemKind.context,title:f.I18n.ts("Remove starting point"),id:"context-menu-remove-start-point",weight:80,onClick:(a)=>{this.session.document.executeApiCommand(a,{name:"remove custom start point",run:(a)=>{a.structuredPath.customStartPoint=null}})}});break;default:t.Utils.assertNever(g)}}createGreenButton(a,c){const b=a.targetRef,g=(()=>{if(b.kind===d.stackTopic)return{id:"add-page-button",text:f.I18n.ts("Page"),
onClick:(b)=>this.addPage(b,a),actions:[{id:"add-page",title:f.I18n.ts("Page"),icon:e.IconSmallId.StackTopic,onClick:(b)=>this.addPage(b,a)}]};const c=[{content:f.I18n.ts("Topics")},{id:"add-planet",title:f.I18n.ts("Planet topic"),icon:e.IconSmallId.PlanetTopic,onClick:(b)=>this.addTopic(b,h.base.ObjectKind.planetTopic,a)},{id:"add-stack",title:f.I18n.ts("Stack topic"),icon:e.IconSmallId.StackTopic,onClick:(b)=>this.addTopic(b,h.base.ObjectKind.stackTopic,a)}];return this.topicLess?{id:"add-zoom-area-button",
text:f.I18n.ts("Zoom area"),onClick:(b)=>this.addZoomArea(b,a),actions:c}:{id:"add-topic-button",text:b.kind===d.overview?f.I18n.ts("Topic"):f.I18n.ts("Subtopic"),onClick:(b)=>this.addTopic(b,h.base.ObjectKind.planetTopic,a),actions:c}})();return c.comboMenuButton({color:e.ButtonColor.Green,id:g.id,content:{text:g.text,icon:e.IconSmallId.Plus},onClick:(a)=>g.onClick(a),onOpen:()=>{var b;r.avro.Avro.createDefaultLogger().logShowTopicInsertOptions({topic_level:(null===(b=a.targetRef)||void 0===b?void 0:
b.kind)===d.overview?"MAIN_TOPIC":"SUB_TOPIC",topic_sidebar_trigger:null})},actions:[...g.actions,e.DropdownMenuSeparator,{content:f.I18n.ts("Zooming Animations")},{id:"add-zoom-area",icon:e.IconSmallId.Fullscreen,title:f.I18n.ts("Zoom area"),onClick:(b)=>this.addZoomArea(b,a)},{id:"zoom-out",icon:e.IconSmallId.ZoomOut,title:this.zoomOutName(a),onClick:(b)=>this.addZoomOut(b,a)}]})}createNavigationButtons(a,c){return[c.button({color:e.ButtonColor.Ghost,id:"home-button",content:{icon:e.IconSmallId.Home},
onClick:(a)=>{this.session.document.read((b)=>{r.avro.Avro.createDefaultLogger().logNavigatePrezi({navigation_type:"GO_TO_OVERVIEW",action_index:0,step_index:0,total_step_number:0});this.session.navigation.flyTo(a,b.overview)})}}),null==a.backToRef?null:c.button({color:e.ButtonColor.Ghost,id:"back-button",content:{icon:e.IconSmallId.ZoomOut,text:f.I18n.ts("Go back")},onClick:(b)=>{this.session.document.read((c)=>{c=c.lookup.resolve(a.backToRef);null!=c&&(c.kind!==d.overview&&r.avro.Avro.createDefaultLogger().logOpenedTopic({object_type:c.parent.kind===
d.overview?"TOPIC":"SUBTOPIC",object_id:a.backToRef.id}),r.avro.Avro.createDefaultLogger().logNavigatePrezi({navigation_type:a.backToRef.kind===d.overview?"GO_TO_OVERVIEW":"GO_UP",action_index:0,step_index:0,total_step_number:0}),this.session.navigation.flyTo(b,c))})}})].filter((a)=>null!=a)}createButtons(a,c){return[c.button(e.ButtonSize.Large,e.ButtonAlign.Start,(b)=>[this.createGreenButton(a,b)]),c.separator(!0),c.button(e.ButtonSize.Small,e.ButtonAlign.Start,(b)=>this.createNavigationButtons(a,
b))]}createListItemFromPathItem(a,c,b){const g=(a)=>{var c,d;const g=null!==(d=null!==(c=a.thumbnail.canvas)&&void 0!==c?c:a.thumbnail.fastCanvas)&&void 0!==d?d:a.thumbnail.prevCanvas,k=null!=a.thumbnail.fastCanvas;return{id:a.id,dataLookup:a.id,title:a.title,label:a.label,src:null!=g?{canvas:g}:{aspectRatio:b},onClick:(b)=>this.navigateTo(b,a.pathElementRef),onShowActions:()=>{r.avro.Avro.createDefaultLogger().logOpenObjectContextMenu({object_type:"THUMBNAIL",object_id:this.targetIdFromPathElementRefForLog(a.pathElementRef)})},
requestImage:null==a.thumbnail.canvas?()=>{this.requestRenderPathElement(a.pathElementRef,k)}:null,actions:this.getItemActions(a),badges:a.kind!==n.main?a.badges.filter((a)=>a!==e.IconSmallId.Animation):a.badges,canStartReorder:a.canStartReorder}};var k=(b)=>a.deck(Object.assign(Object.assign({},g(b)),{showDeck:b.showDeck}));switch(c.kind){case n.main:return a.main(Object.assign({},g(c)));case n.deck:return k(c);case n.frame:return a.frame(Object.assign({},g(c)));case n.text:return k=(a)=>{this.session.document.read((b)=>
{b=b.lookup.resolve(c.pathElementRef);r.avro.Avro.createDefaultLogger().logPreviewAnimation({animation_type:b.kind===d.fadeIn?"FADE_IN":b.kind===d.fadeOut?"FADE_OUT":t.Utils.assertNever(b)});this.session.navigation.previewAnimation(a,b)})},a.text({dataLookup:c.id,icon:c.icon,tooltipText:c.tooltipText,title:c.title,text:c.text,onClick:k,onDeleteClick:(a)=>{this.session.document.executeApiCommand(a,{name:"delete path element",run:(a)=>{r.avro.Avro.createDefaultLogger().logDeleteObject({delete_type:"CONTEXT_DELETE",
object_id:null,object_type:"ANIMATION",topic_relationship:"CONTENT"});a=a.lookup.resolve(c.pathElementRef);null!=a&&(a.is(d.fadeIn)||a.is(d.fadeOut))&&(a.delete(),r.avro.Avro.createDefaultLogger().logDeletedObject({delete_type:"CONTEXT_DELETE",object_id:null,object_type:"ANIMATION",topic_relationship:"CONTENT"}))}})},timelineAction:{onClick:k,title:f.I18n.ts("Preview"),id:`preview-${c.id}`,icon:e.IconSmallId.Play},canStartReorder:c.canStartReorder});default:t.Utils.assertNever(c)}}audioButtonOnClick(a){this.pluginAccess.send(A.pathAudio,
A.createOpenAudioSidebarFromLeftSidebar(a.id))}navigateTo(a,c){this.session.document.read((b)=>{b=b.lookup.resolve(c);null!=b&&(this.session.selection.setSelection(a,[]),this.session.navigation.goToPathElement(a,b),b.kind!==h.base.ObjectKind.visitStack&&b.kind!==h.base.ObjectKind.visitPlanet&&b.kind!==h.base.ObjectKind.visitPage||r.avro.Avro.createDefaultLogger().logOpenedTopic({object_type:b.parent.is(h.base.ObjectKind.visitOverview)?"TOPIC":"SUBTOPIC",object_id:b.target.id}),c.kind===h.base.ObjectKind.visitPage&&
this.uiRoot.setState({currentVisitRef:c}),this.uiRoot.setState({activePathElementRef:b.ref}),this.uiRoot.scrollIntoView(b.id))})}getThumbnailId(a){return a.id}createThumbnailForPathElement(a){var c,b=null===(c=this.thumbnailService)||void 0===c?void 0:c.getCachedCanvasForPathElement(a,F);c=null!=b?b.canvas:null;const d=null==b||b.dirty?null:b.canvas;b=null!=b&&!b.dirty&&b.highQuality?b.canvas:null;return{id:this.getThumbnailId(a),pathElementRef:a.ref,prevCanvas:c,fastCanvas:d,canvas:b}}createBasePathItem(a){return{id:a.id,
pathElementRef:a.ref}}createBaseImagePathItem(a,c,b){return Object.assign(Object.assign({},this.createBasePathItem(a)),{title:a.title,thumbnail:this.createThumbnailForPathElement(a),actions:{canAddAnimation:a.is(d.visitPlanet),canDuplicate:!b&&(a.is(d.visitPlanet)||a.is(d.visitStack)||a.is(d.visitPage)),canAddAudio:a.is(d.visitOverview)||a.is(d.visitPlanet)||a.is(d.visitPage)||a.is(d.zoom)||a.is(d.backToParent),customStartPoint:{canSet:a.is(d.visitPlanet)||a.is(d.visitPage)||a.is(d.zoom)||a.is(d.backToParent),
isSet:(null===c||void 0===c?void 0:c.id)===a.id},canDelete:a.is(d.visitPage)?1<a.target.parent.pageChildren.length:!a.is(d.backToParent)&&!a.is(d.visitOverview),canAddNarrative:!0},badges:this.getBadges(a,c)})}getBadges(a,c){const b=[];(null===c||void 0===c?void 0:c.id)===a.id&&b.push(e.IconSmallId.CustomStartingpoint);a.is(d.visitStack)?a.children.some((a)=>a.children.some((a)=>a.is(d.freePathChild)))&&b.push(e.IconSmallId.Animation):a.is(d.visitPlanet)&&a.children.some((a)=>a.is(d.freePathChild))&&
b.push(e.IconSmallId.Animation);(a.is(d.visitOverview)||a.is(d.visitPlanet)||a.is(d.visitPage)||a.is(d.zoom))&&null!=this.commentingController&&this.commentingController.hasUnresolvedCommentOnTargetEntityOrChild(a.target.id)&&b.push(e.IconSmallId.Comment);c=a.is(d.visitStack)?a.children[0]:a;null!=c.narrative&&0<c.narrative.length&&b.push(e.IconSmallId.PresenterNotes);(a.is(d.visitOverview)||a.is(d.visitPlanet)||a.is(d.visitPage)||a.is(d.backToParent)||a.is(d.zoom))&&null!=a.audio&&b.push(e.IconSmallId.Audio);
return b}createTextPathItem(a){return Object.assign(Object.assign({},this.createBasePathItem(a)),{kind:n.text,icon:this.icons.get(a.kind),title:null,tooltipText:this.titles.get(a.kind),text:a.title,canStartReorder:!0})}showAsText(a){return a.is(d.fadeIn)||a.is(d.fadeOut)}getSelectTargetId(a){if(a.is(d.pathParent)||a.is(d.zoom))return a.target.id;if(a.is(d.fadeOut)||a.is(d.fadeIn)||a.is(d.backToParent))return null;t.Utils.assertNever(a)}readStateFromDocument(a,c){if(null!=this.currentTopicRef){var b=
a.structuredPath.pathElementsInOrder,g=new Set(a.structuredPath.viewPathElementsInOrder.map((a)=>a.id)),e=J(a);b=this.getCurrentVisit(a,b);var f=this.uiRoot.getState(),h=this.session.selection.getReadonlySelectionInfo(a),z=a.structuredPath.customStartPoint,r=(a)=>{if(a.is(d.backToParent))return Object.assign(Object.assign({kind:n.deck},this.createBaseImagePathItem(a,z,!1)),{label:e.get(a.id).outsideLabel,showDeck:!1,canStartReorder:!1});if(a.is(d.visitPlanet)||a.is(d.visitStack))return Object.assign(Object.assign({kind:n.deck},
this.createBaseImagePathItem(a,z,!1)),{label:e.get(a.id).outsideLabel,showDeck:a.is(d.visitPlanet)?0<a.target.topicChildren.length:0<a.target.pageChildren.length,canStartReorder:!0});if(a.is(d.visitPage))return Object.assign(Object.assign({kind:n.deck},this.createBaseImagePathItem(a,z,!1)),{label:e.get(a.id).outsideLabel,showDeck:!1,canStartReorder:!0});if(a.is(d.zoom))return Object.assign(Object.assign({kind:n.frame},this.createBaseImagePathItem(a,z,!1)),{label:e.get(a.id).outsideLabel,canStartReorder:!0});
t.Utils.assertNever(a)},u=b.is(d.visitPage)?b.parent:b,w=b.is(d.visitPage)?t.Utils.flatten(b.parent.children.map((a)=>[a,...a.children])):u.children;(u.is(d.visitPlanet)||u.is(d.visitStack))&&g.has(u.backToParent.id)&&(w=[...w,u.backToParent]);g=new Map;var q=new Map;for(var l of[u,...w]){var x=this.getSelectTargetId(l);null!=x&&(g.has(x)||g.set(x,l.ref),q.set(l.id,x))}l=new Map;x=Object.assign(Object.assign({kind:n.main},this.createBaseImagePathItem(u,z,!0)),{label:e.get(u.id).insideLabel,canStartReorder:!1});
l.set(x.id,x);for(var v of w)x=this.showAsText(v)?this.createTextPathItem(v):r(v),l.set(x.id,x);v=u.is(d.visitStack)?[]:[u.id];a=a.aspectRatio;this.uiRoot.setState({animate:c,targetRef:u.target.ref,backToRef:u.is(d.pathChild)?u.parent.target.ref:null,listItemMap:l,timelineIds:[...v,...w.map((a)=>a.id)],targetIdMap:g,pathElementIdToTargetId:q,canAddZoomToObjectAnimation:this.canAddAnimation(h,p.zoomTo),canAddFadeAnimation:this.canAddAnimation(h,p.fadeIn),currentVisitRef:b.ref,activePathElementRef:null===
f||void 0===f?void 0:f.activePathElementRef,aspectRatio:a,currentStartPointRef:null===z||void 0===z?void 0:z.ref})}}requestRenderPathElement(a,c){return C(this,void 0,void 0,function*(){const b=yield D.ThumbnailRenderModule.getThumbnailService(),d=(c)=>C(this,void 0,void 0,function*(){const d=yield b.renderPathElement(a,{size:F,needHighQuality:c}).getThumbnail();null!=d&&this.updateStateFromThumbnail(a,d,c)});d(!0);c||d(!1)})}updateStateFromThumbnail(a,c,b){const d=this.uiRoot.getState();if(null!=
d&&null!=d.listItemMap){var e=(a)=>{var d,g;const e=a.thumbnail;return b?(null===(d=e.canvas)||void 0===d?void 0:d.id)===c.canvas.id?a:Object.assign(Object.assign({},a),{thumbnail:Object.assign(Object.assign({},e),{canvas:c.canvas})}):(null===(g=e.fastCanvas)||void 0===g?void 0:g.id)===c.canvas.id?a:Object.assign(Object.assign({},a),{thumbnail:Object.assign(Object.assign({},e),{fastCanvas:c.canvas})})};for(const b of d.listItemMap.values())switch(b.kind){case n.text:break;case n.deck:case n.frame:case n.main:let c=
b;c.id===a.id&&(c=e(c));if(b!==c){a=new Map(d.listItemMap);a.set(c.id,c);this.uiRoot.setState({listItemMap:a});return}break;default:t.Utils.assertNever(b)}}}getItemActions(a){return[a.actions.canAddAudio?{id:"audio-item",icon:e.IconSmallId.Audio,title:f.I18n.ts("Edit sound"),onClick:()=>{this.audioButtonOnClick(a.pathElementRef)}}:null,a.actions.canAddAnimation?{id:"animation-item",icon:e.IconSmallId.Animation,title:f.I18n.ts("Add animation"),onClick:(c)=>{a.pathElementRef.kind===d.visitPlanet&&this.session.document.read((b)=>
{b=b.lookup.resolve(a.pathElementRef);null!=b&&b.is(d.visitPlanet)&&(this.session.selection.setSelection(c,[b.target]),this.uiRoot.sidebar.toggle("sidebar-animations"))})}}:null,a.actions.customStartPoint.canSet&&!a.actions.customStartPoint.isSet?{id:"set-custom-start-point",icon:e.IconSmallId.CustomStartingpoint,title:f.I18n.ts("Set custom start point"),onClick:(c)=>{this.session.document.executeApiCommand(c,{name:"set custom start point",run:(b)=>{const c=b.lookup.resolve(a.pathElementRef);null!=
c&&(b.structuredPath.customStartPoint=c)}})}}:a.actions.customStartPoint.isSet?{id:"remove-custom-start-point",icon:e.IconSmallId.CustomStartingpoint,title:f.I18n.ts("Remove custom start point"),onClick:(a)=>{this.session.document.executeApiCommand(a,{name:"remove custom start point",run:(a)=>{a.structuredPath.customStartPoint=null}})}}:null,a.actions.canAddNarrative?{id:"open-narrative",icon:e.IconSmallId.PresenterNotes,title:f.I18n.ts("Presenter notes"),onClick:(c)=>{this.pluginAccess.send(A.narrativeEditor,
{kind:"openSidebar",uat:c,body:a.pathElementRef.id})}}:null,a.actions.canDuplicate?e.DropdownMenuSeparator:null,a.actions.canDuplicate?{id:"duplicate-item",icon:e.IconSmallId.Copy,title:f.I18n.ts("Duplicate"),onClick:(c)=>{this.session.document.executeApiCommand(c,{name:"duplicate",run:(b)=>{var c=b.lookup.resolve(a.pathElementRef);if(null!=c)if(c.is(d.visitPlanet)||c.is(d.visitStack)){var e=c.target.copy();e=c.target.parent.layout.add.inserter(e);e.isValid()&&(c=c.target.parent.topicChildren.indexOf(c.target)+
1,c=e.insert(c),1===c.topics.length&&b.animate(c.topics[0]).dropIn())}else c.is(d.visitPage)&&(b=c.target.copy(),b=c.target.parent.add.inserter(b),b.isValid()&&(c=c.target.parent.pageChildren.indexOf(c.target)+1,b.insert(c)))}})}}:null,a.actions.canDelete?e.DropdownMenuSeparator:null,a.actions.canDelete?{id:"delete-element",icon:e.IconSmallId.Trash,title:f.I18n.ts("Delete"),onClick:(c)=>{this.session.document.executeApiCommand(c,{name:"delete path element",run:(b)=>{b=b.lookup.resolve(a.pathElementRef);
if(null!=b&&!b.is(d.backToParent)&&!b.is(d.visitOverview))if(b.is(d.fadeIn)||b.is(d.fadeOut)||b.is(d.zoom))b.delete();else if(b.is(d.visitPage)&&1<b.target.parent.pageChildren.length){var c={delete_type:"CONTEXT_DELETE",object_type:"THUMBNAIL",object_id:b.target.id,topic_relationship:"CONTENT"};r.avro.Avro.createDefaultLogger().logDeleteObject(c);b.target.delete();r.avro.Avro.createDefaultLogger().logDeletedObject(c)}else if(b.is(d.visitStack)||b.is(d.visitPlanet))c={delete_type:"CONTEXT_DELETE",
object_type:"THUMBNAIL",object_id:b.target.id,topic_relationship:"CONTENT"},r.avro.Avro.createDefaultLogger().logDeleteObject(c),b.target.delete(),r.avro.Avro.createDefaultLogger().logDeletedObject(c)}})}}:null].filter((a)=>null!=a).filter((a,b,d)=>a!==e.DropdownMenuSeparator||0<b&&b<d.length-1)}createFooter(a,c){return[c.button(e.ButtonSize.Small,e.ButtonAlign.Center,(a)=>[a.button({id:"path-settings",color:e.ButtonColor.Gray,content:{text:f.I18n.ts("Path settings"),icon:e.IconSmallId.Path},onClick:()=>
{this.pluginAccess.send(A.pathGenerationStrategy,{request:"openDialog"})}})])]}showPathChild(a){this.uiRoot.scrollIntoView(a.id)}zoomOutName(a){return l(a.targetRef,d.stackTopic)?f.I18n.ts("Zoom out to Page"):l(a.targetRef,d.overview)?f.I18n.ts("Zoom out to Overview"):l(a.targetRef,d.planetTopic)&&l(a.backToRef,d.overview)?f.I18n.ts("Zoom out to Topic"):f.I18n.ts("Zoom out to Subtopic")}addAnimation(a,c,b){var e,f;let m=c.lookup.resolve(a.currentVisitRef),l=m;const n=this.session.selection.getSelectionInfo(c);
if(this.canAddAnimation(n,b)){let g=-1;if(b===p.fadeIn&&1===n.allObjects.length){var q=n.allObjects[0];q.is(d.topic)&&(q=c.lookup.resolve(a.targetIdMap.get(q.id)),null!=q&&q.is(d.pathChild)&&(g=q.index))}if(-1===g){const b=this.getActivePathElement(c,a);if(null!=b)if(b===m||b.kind===h.base.ObjectKind.visitOverview||b.kind===h.base.ObjectKind.visitPage)l=b,g=null!==(e=l.children.findIndex((a)=>a.is(h.base.ObjectKind.visitOverview)||a.is(h.base.ObjectKind.visitPlanet)||a.is(h.base.ObjectKind.visitStack)||
a.is(h.base.ObjectKind.visitPage)||a.is(h.base.ObjectKind.zoom)))&&void 0!==e?e:-1;else switch(b.kind){case h.base.ObjectKind.fadeOut:case h.base.ObjectKind.fadeIn:case h.base.ObjectKind.zoom:case h.base.ObjectKind.visitPlanet:case h.base.ObjectKind.visitStack:l=b.parent;g=null!==(f=l.children.findIndex((a,c)=>c>b.index&&(a.is(h.base.ObjectKind.visitOverview)||a.is(h.base.ObjectKind.visitPlanet)||a.is(h.base.ObjectKind.visitStack)||a.is(h.base.ObjectKind.visitPage)||a.is(h.base.ObjectKind.zoom))))&&
void 0!==f?f:-1;break;case h.base.ObjectKind.backToParent:t.Utils.fail(`active path element should not be ${b.kind}`);break;default:t.Utils.assertNever(b)}}-1===g&&(g=l.children.length);a=b===p.fadeIn?l.add.fadeIn(g,n.nonGroupedObjects,n.groups):b===p.fadeOut?l.add.fadeOut(g,n.nonGroupedObjects,n.groups):b===p.zoomTo?l.add.zoom(g,n.allObjects[0]):b===p.zoomOut?l.add.zoom(g,m.target):t.Utils.assertNever(b);r.avro.Avro.createDefaultLogger().logAddAnimation({animation_type:b===p.fadeIn?"FADE_IN":b===
p.fadeOut?"FADE_OUT":b===p.zoomTo?n.allObjects[0].kind===h.base.ObjectKind.zoomArea?"ZOOM_AREA":"ZOOM_TO_OBJECT":b===p.zoomOut?m.target.kind===h.base.ObjectKind.overview?"ZOOM_OUT_TO_OVERVIEW":"ZOOM_OUT_TO_TOPIC":t.Utils.assertNever(b)});this.showPathChild(a)}}logAfterTopicOrPageInsert(a){const c=a.parent;r.avro.Avro.createDefaultLogger().logNewObject({object_type:c.is(h.base.ObjectKind.overview)?"TOPIC":"SUBTOPIC",topic_relationship:"CONTENT",parent_type:c.is(h.base.ObjectKind.overview)?"OVERVIEW":
"TOPIC",object_id:a.id});let b=0,d=c;for(;!d.is(h.base.ObjectKind.overview);)b++,d=d.parent;r.avro.Avro.createDefaultLogger().logInsertTopic({dynamic_topic:null,topic_depth:b,topic_id:null,topic_sidebar_section:null,topic_type:a.kind===h.base.ObjectKind.planetTopic?c.is(h.base.ObjectKind.overview)?"TOPIC_PLANET":"SUBTOPIC_PLANET":a.kind===h.base.ObjectKind.stackTopic?c.is(h.base.ObjectKind.overview)?"TOPIC_STACK":"SUBTOPIC_STACK":a.kind===h.base.ObjectKind.page?"SUBTOPIC_PAGE":t.Utils.assertNever(a)})}targetIdFromPathElementRefForLog(a){return l(a,
d.visitPage)||l(a,d.visitPlanet)||l(a,d.visitStack)||l(a,d.zoom)?this.session.document.read((c)=>{var b,d;return null===(d=null===(b=c.lookup.resolve(a))||void 0===b?void 0:b.target)||void 0===d?void 0:d.id}):null}};var G={};Object.defineProperty(G,"__esModule",{value:!0});G.lazyModule={createPlugin(){return new B.PathEditingPlugin}};return G});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_path_editing",["require","prezi_cet_model_editor","prezi_commenting","prezi_featureswitcher","prezi_i18n","prezi_logger","prezi_plugin_api","prezi_plugin_meta","prezi_thumbnail_render","prezi_utils"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_path_editing.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi_cet_model_editor"),require("prezi_commenting"),require("prezi_featureswitcher"),require("prezi_i18n"),require("prezi_logger"),require("prezi_plugin_api"),require("prezi_plugin_meta"),require("prezi_thumbnail_render"),require("prezi_utils"));}else{this["prezi_path_editing"]=__factory(this["prezi_cet_model_editor"],this["prezi_commenting"],this["prezi_featureswitcher"],this["prezi_i18n"],this["prezi_logger"],this["prezi_plugin_api"],this["prezi_plugin_meta"],this["prezi_thumbnail_render"],this["prezi_utils"]);}}).call(this);
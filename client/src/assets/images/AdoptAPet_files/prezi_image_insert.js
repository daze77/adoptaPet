;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-25-g6015dbc";},getModuleName:function(){return "prezi_image_insert";},getModuleVersion:function(){return "release-2021w06-base-26-gaeb382e";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi_cet_model_editor":dependencies[0],"prezi_cet_renderer":dependencies[1],"prezi_editor_commander":dependencies[2],"prezi_editor_store_mode":dependencies[3],"prezi_externalassetprovider":dependencies[4],"prezi_featureswitcher":dependencies[5],"prezi_i18n":dependencies[6],"prezi_logger":dependencies[7],"prezi_plugin_api":dependencies[8],"prezi_plugin_meta":dependencies[9],"prezi_utils":dependencies[10]}};})());};})(arguments);var moduleImpl=(function(){return module(function(p){function G(a){return`<svg xmlns="http://www.w3.org/2000/svg"
				viewBox="${[-60,-60,120,120]}"
				width="${120}" height="${120}">
				${a}
			</svg>`}function J(a,b,c){b=c/b;return`<rect
		fill="${a}"
		x="${-c/2}"
		y="${-b/2}"
		width="${c}"
		height="${b}"
		/>`}var t=p.dependencies.prezi_cet_model_editor,z=p.dependencies.prezi_featureswitcher,f=p.dependencies.prezi_i18n,r=p.dependencies.prezi_logger,d=p.dependencies.prezi_plugin_api,A=p.dependencies.prezi_cet_renderer,h=p.dependencies.prezi_editor_commander,v=p.dependencies.prezi_editor_store_mode,H=p.dependencies.prezi_plugin_meta,I=p.dependencies.prezi_externalassetprovider,x=p.dependencies.prezi_utils,y={generateFixedAspectImageUrl:function(a){return{url:x.Utils.svgToUrl(G(J("#929AA3",a,100)))}},
generateCustomAspectImageUrl:function(){return{url:x.Utils.svgToUrl(G('<rect\n\t\tstroke="#929AA3"\n\t\tstroke-width="2"\n\t\tstroke-dasharray="3"\n\t\tstroke-dashoffset="1"\n\t\tstroke-linejoin="round"\n\t\tstroke-linecap="butt"\n\t\tfill="#ffffff"\n\n\t\tx="-50"\n\t\ty="-50"\n\t\twidth="100"\n\t\theight="100"\n\t\t/>'))}}};Object.defineProperty(y,"__esModule",{value:!0});var g={},C=this&&g.__awaiter||function(a,b,c,m){function e(a){return a instanceof c?a:new c(function(b){b(a)})}return new (c||
(c=Promise))(function(c,k){function w(a){try{f(m.next(a))}catch(B){k(B)}}function d(a){try{f(m["throw"](a))}catch(B){k(B)}}function f(a){a.done?c(a.value):e(a.value).then(w,d)}f((m=m.apply(a,b||[])).next())})};Object.defineProperty(g,"__esModule",{value:!0});var u=t.base.ObjectKind,D=t.base.AssetKind,E=t.base.isRefInstanceOf,l;(function(a){a.hidden="hidden";a.disabled="disabled";a.enabled="enabled";a.checked="checked"})(l||(l={}));var q;(function(a){a[a.placeholder=0]="placeholder";a[a.nonPlaceholder=
1]="nonPlaceholder";a[a.none=2]="none"})(q||(q={}));var n;(function(a){a.insert="insert";a.replace="replace"})(n||(n={}));g.ImageInsertPlugin=class{constructor(){this.imageMaskingCommander=h.EditorCommander.createImageMaskingCommander()}init(a){this.logger=r.LoggerModule.getLoggerManager().createLogger("ImageInsertPlugin");this.externalAssetProvider=I.ExternalAssetProviderModule.getExternalAssetProvider(a);a.onURLDrop((a,{data:c,stageX:m,stageY:e})=>{c=c.url;return-1<["jpg","jpeg","gif","png"].indexOf(c.pathname.split(".").pop().toLowerCase())?
(this.insertImageFromURLOrFile(a,c.toString(),m,e,"DRAG_DROP"),!0):!1});a.onFileDrop({allowImage:!0},(a,{data:c,stageX:m,stageY:e})=>C(this,void 0,void 0,function*(){this.insertImageFromURLOrFile(a,c.file,m,e,c.source)}));a.onLicenseChange((a)=>{a=z.isActive("js-image-insert-plugin-force-paywall")?!1:a.pitchImageIntegration;this.uiRoot.setState({userCanSearch:a})});a.onNetworkStatusChange((a)=>{this.uiRoot.setState({networkStatus:a})});this.uiRoot=a.declareUI({sidebarOpen:!1,search:{term:null,page:0},
images:[],recommendedImages:null,progress:d.ListProgress.idle,hasError:!1,selection:[],mode:n.insert,selectedItemKey:null,userCanSearch:!1,shouldShowReplaceImage:!1,selectedImagePlaceholder:q.none,searchText:"",maskImageButtonState:l.hidden,autoOpen:!1,maskAspectRatios:new Map,networkStatus:d.NetworkStatus.Online},(a,c)=>{0===a.selection.length&&c.createMenuItem(this.createContextMenuItem());c.createMenuItem(this.createTabMenuItemDescription());c.createSidebar((a)=>this.createSidebarArgs(a));const {selection:b}=
this.uiRoot.getState();E(b[0],u.image)&&this.createImageMaskingSpecificButtons(c,b[0]);a.shouldShowReplaceImage&&(c.createMenuItem({kind:d.MenuItemKind.context,id:"replace-image",title:f.I18n.ts("Replace image"),weight:66,onClick:()=>this.openImageInsertSidebar(n.replace),enabled:!0}),c.createPropertyBarItem((a)=>a.button({id:"image-replace",weight:0,parent:d.PropertyBarId.Left,enabled:!0,title:f.I18n.ts("Replace\u2026"),onClick:()=>{this.openImageInsertSidebar(n.replace)}})));if(this.shouldShowTogglePlaceholder()){var {selectedImagePlaceholder:a}=
this.uiRoot.getState();c.createMenuItem({kind:d.MenuItemKind.context,id:"toggle-image-as-placeholder",title:a===q.placeholder?f.I18n.ts("Unset placeholder"):f.I18n.ts("Set as placeholder"),weight:100,onClick:(a)=>{this.toggleSelectedImagePlaceholder(a)},enabled:!0})}});a.onSelectionChange((a)=>{const b=a.allObjects,{mode:m,maskAspectRatios:e}=this.uiRoot.getState();a=this.getSelectedImagePlaceholder(b);"replace"===m&&this.uiRoot.sidebar.close(g.ImageInsertPlugin.SIDEBAR_ID);this.uiRoot.setState({mode:n.insert,
selection:b,selectedItemKey:null,shouldShowReplaceImage:this.shouldShowReplaceImage(b),selectedImagePlaceholder:a});if(1===b.length){const a=this.session.document.read((a)=>{a=a.lookup.resolve(b[0]);return a.is(t.base.ObjectKind.image)?{maskImageButtonState:a.isPlaceholder?l.disabled:l.enabled,maskAspectRatios:e.has(b[0].id)?e:e.set(b[0].id,h.MaskAspectRatio.custom)}:{maskImageButtonState:l.hidden}});this.uiRoot.setState(a)}else this.uiRoot.setState({maskImageButtonState:l.hidden});a===q.placeholder&&
this.openImageInsertSidebar(n.replace,!0)});a.onDocumentChange(()=>{const {selection:a}=this.uiRoot.getState();if(1===a.length){const b=this.session.document.read((b)=>{const c=b.lookup.resolve(a[0]);return c.is(t.base.ObjectKind.image)?this.isImageBeingMasked(b,c)?{maskImageButtonState:l.checked}:c.isPlaceholder?{maskImageButtonState:l.disabled}:{maskImageButtonState:l.enabled}:{maskImageButtonState:l.hidden}});this.uiRoot.setState(b)}else this.uiRoot.setState({maskImageButtonState:l.hidden})})}uploadImage(a){return"image/gif"===
("string"===typeof a?x.Utils.getMimeTypeFromExtension(a):a.type)?this.session.document.progressiveAssetManager.uploadAnimatedImage(a):this.session.document.progressiveAssetManager.uploadImage(a)}insertImageFromURLOrFile(a,b,c,d,e){return this.session.document.executeApiCommand(a,{name:"insert image",run:(w)=>{const k=this.session.insertTarget.getSimpleObjectParent(w),m=this.session.positionFinder.findLayoutBox(k,42,42,c,d),f=this.uploadImage(b),g=f.token.kind===D.animatedImage?k.add.animatedImage(f.token):
k.add.image(f.token);g.fitInto(m);r.avro.Avro.createDefaultLogger().logNewObject({object_type:g,topic_relationship:g,parent_type:k.is(t.base.ObjectKind.overview)?"OVERVIEW":"TOPIC",object_id:g.id});this.uiRoot.setState({maskImageButtonState:l.hidden});this.session.selection.setSelection(a,[g]);r.avro.Avro.createDefaultLogger().logInsertImage({image_type:null,image_destination:null,image_source:e});const h=w.intent.userIntentId;w=f.finished;w.then((a)=>{this.logger.info({action:"media_insert",object:"media",
trigger:"machine",payload:Object.assign(Object.assign({},a),{type:"IMAGE",user_intent_id:h,duration:0})})}).catch(()=>{});return w}})}replaceImageFromURLOrFile(a,b,c){const {selection:d}=this.uiRoot.getState();if(1!==d.length)this.logger.error({action:"replace",object:"image",trigger:"machine",payload:{error:`selection length is ${d.length}`}});else{var e=this.uploadImage(b).token;b=this.session.document.executeApiCommand(a,{name:"Replace Image",run:(a)=>{a=a.lookup.resolve(d[0]);if(e.kind===D.animatedImage){if(a.is(u.animatedImage))a.imageAsset=
e;else if(a.is(u.image)){var b=a.parent.add.animatedImage(e);b.fitInto(a.layoutBox.extendToSquare());b.moveBehind(a);a.delete()}return null}if(a.is(u.animatedImage))return b=a.parent.add.image(e),b.fitInto(a.layoutBox.extendToSquare()),b.moveBehind(a),a.delete(),null;if(a.is(u.image)){b=a.isPlaceholder;const c=a.layoutBox;a.isPlaceholder=!1;a.imageAsset=e;a.mask=this.imageMaskingCommander.imageMaskForLayoutBox(c,a.imageAsset);a.fitInto(c);return b?a.ref:null}return null}});this.uiRoot.setState({selectedImagePlaceholder:q.nonPlaceholder});
null!=b&&this.toggleMaskEditing(b,!0,a);r.avro.Avro.createDefaultLogger().logInsertImage({image_type:null,image_destination:null,image_source:c})}}processMessage(a){switch(a){case "openImageInsertSidebar":return this.openImageInsertSidebar(n.insert);case "openImageReplaceSidebar":return this.openImageInsertSidebar(n.replace);default:x.Utils.assertNever(a)}}createImageMaskingSpecificButtons(a,b){const {maskImageButtonState:c,maskAspectRatios:m}=this.uiRoot.getState();if(c!==l.hidden){var e=(a)=>a.simpleList((a)=>
({items:[a.image({id:g.ImageInsertPlugin.MASK_ASPECT_RATIO_IDS.get(h.MaskAspectRatio.fix1By1),src:y.generateFixedAspectImageUrl(1),title:"1:1",dataLookup:"mask-aspect-1-1",onClick:(a)=>this.updateMaskAspectRatio(a,b,h.MaskAspectRatio.fix1By1)}),a.image({id:g.ImageInsertPlugin.MASK_ASPECT_RATIO_IDS.get(h.MaskAspectRatio.fix16By9),src:y.generateFixedAspectImageUrl(16/9),title:"16:9",dataLookup:"mask-aspect-16-9",onClick:(a)=>this.updateMaskAspectRatio(a,b,h.MaskAspectRatio.fix16By9)}),a.image({id:g.ImageInsertPlugin.MASK_ASPECT_RATIO_IDS.get(h.MaskAspectRatio.fix4By3),
src:y.generateFixedAspectImageUrl(4/3),title:"4:3",dataLookup:"mask-aspect-4-3",onClick:(a)=>this.updateMaskAspectRatio(a,b,h.MaskAspectRatio.fix4By3)}),a.image({id:g.ImageInsertPlugin.MASK_ASPECT_RATIO_IDS.get(h.MaskAspectRatio.custom),src:y.generateCustomAspectImageUrl(),title:"Custom",dataLookup:"mask-aspect-custom",onClick:(a)=>this.updateMaskAspectRatio(a,b,h.MaskAspectRatio.custom)})],itemLayout:d.ListItemLayout.fixed,itemType:d.ListItemType.large,flexGrow:1,activeId:g.ImageInsertPlugin.MASK_ASPECT_RATIO_IDS.get(m.get(b.id)),
showTitle:!0}));a.createPropertyBarItem((a)=>a.comboButton((a)=>({id:"mask-image",weight:2,parent:d.PropertyBarId.Left,checked:c===l.checked?d.CheckedState.checked:d.CheckedState.unchecked,disabled:!(c===l.enabled||c===l.checked),color:d.ButtonColor.Green,content:{icon:d.IconSmallId.Crop},popupHeader:[a.sectionHeader({content:f.I18n.ts("Crop Image")})],popupContent:[e(a)],onClick:(a)=>this.toggleMaskEditing(b,!1,a)})))}}updateMaskAspectRatio(a,b,c){r.avro.Avro.createDefaultLogger().logSelectImageAspectRatio({image_aspect_ratio_option:g.ImageInsertPlugin.MASK_ASPECT_RATIO_LOG_PROPS.get(c)});
const d=this.uiRoot.getState().maskAspectRatios;d.get(b.id)!==c&&(this.session.document.executeApiCommand(a,{name:"Change Mask Aspect Ratio",run:(a)=>{var e=a.lookup.resolve(b);if(e.is(t.base.ObjectKind.image)){a=a.toDecorator(e);e=this.imageMaskingCommander.updateMaskAspectRatio(a.mask,c,a.imageAsset);const k=this.imageMaskingCommander.getLayoutBoxForNewMask(a.mask,e,a.layoutBox);a.mask=e;a.fitInto(k);e=A.CetRendererModule.getImageMaskEditingStateComponentKey();a.set(e,!0);this.uiRoot.setState({maskAspectRatios:d.set(b.id,
c),maskImageButtonState:l.checked})}}}),h.EditorCommander.getImageMaskingApi_KILL_ME_HACK().setMaskingMode({kind:v.MaskingModeKind.on,maskedImageId:b.id,target:v.MaskEditTarget.mask,isFixedAspect:null!=c&&c!==h.MaskAspectRatio.custom}))}toggleMaskEditing(a,b,c){const d=this.session.document.read((c)=>{const d=c.lookup.resolve(a);return d.is(t.base.ObjectKind.image)?this.getNewMaskingMode(d,this.isImageBeingMasked(c,d),b):{kind:v.MaskingModeKind.off}});this.session.document.executeApiCommand(c,{name:"set-masking-in-progress",
run:(c)=>{var d=c.lookup.resolve(a);if(d.is(t.base.ObjectKind.image)){c=c.toDecorator(d);d=A.CetRendererModule.getImageMaskEditingStateComponentKey();var k=c.get(d);k=null==k?!0:!k;c.set(d,k);k?this.uiRoot.setState({maskImageButtonState:l.checked}):this.uiRoot.setState({maskImageButtonState:l.enabled});k&&r.avro.Avro.createDefaultLogger().logOpenImageMaskingMode(b?{open_image_masking_source:"PLACEHOLDER_ICON"}:{open_image_masking_source:"EDIT_MASK"})}}});h.EditorCommander.getImageMaskingApi_KILL_ME_HACK().setMaskingMode(d)}createTabMenuItemDescription(){return{kind:d.MenuItemKind.largeButton,
enabled:!0,icon:d.IconSmallId.Image,onClick:()=>{r.avro.Avro.createDefaultLogger().logClickTabMenuItem({tab_menu_item:"IMAGE"});this.toggleImageInsertSidebar()},parent:d.TabMenuId.Insert,weight:3,id:g.ImageInsertPlugin.SIDEBAR_ID,title:f.I18n.ts("Image")}}createContextMenuItem(){return{kind:d.MenuItemKind.context,enabled:!0,onClick:()=>{this.toggleImageInsertSidebar()},weight:129,id:g.ImageInsertPlugin.CONTEXT_MENU_ID,title:f.I18n.ts("Insert image")}}getNewMaskingMode(a,b,c){if(!0===b)return{kind:v.MaskingModeKind.off};
b=this.uiRoot.getState().maskAspectRatios.get(a.id);return{kind:v.MaskingModeKind.on,maskedImageId:a.id,target:!c&&this.isFullImageMasked(a)?v.MaskEditTarget.mask:v.MaskEditTarget.image,isFixedAspect:null!=b&&b!==h.MaskAspectRatio.custom}}isFullImageMasked(a){const b=a.imageAsset;a=a.mask;return 2>Math.abs(b.width-a.width)&&2>Math.abs(b.height-a.height)}openImageInsertSidebar(a,b=!1){r.avro.Avro.createDefaultLogger().logShowImageInsertOptions();this.uiRoot.setState({mode:a,selectedItemKey:null,sidebarOpen:!0,
autoOpen:b});this.initImageResults();this.uiRoot.sidebar.open(g.ImageInsertPlugin.SIDEBAR_ID)}toggleImageInsertSidebar(){const {sidebarOpen:a,mode:b}=this.uiRoot.getState(),c=a&&b===n.insert;c?r.avro.Avro.createDefaultLogger().logCloseImageSidebar():r.avro.Avro.createDefaultLogger().logShowImageInsertOptions();this.uiRoot.setState({mode:n.insert,selectedItemKey:null});c?(this.uiRoot.sidebar.toggle(g.ImageInsertPlugin.SIDEBAR_ID),this.uiRoot.setState({sidebarOpen:!1})):(this.initImageResults(),this.uiRoot.sidebar.open(g.ImageInsertPlugin.SIDEBAR_ID),
this.uiRoot.setState({sidebarOpen:!0}))}initImageResults(){const {recommendedImages:a,userCanSearch:b}=this.uiRoot.getState();!a&&b&&this.searchForImages()}createSidebarArgs(a){const {mode:b,progress:c,search:{term:m,page:e},userCanSearch:h}=this.uiRoot.getState();let k=[...this.createTopBar(a)];if(h){if(c!==d.ListProgress.working||0!==e)m?k.push(a.sectionHeader({content:f.I18n.ts("Results")})):k.push(a.sectionHeader({content:f.I18n.ts("Recommended Images")}));k=k.concat(this.createImageResult(a))}else k=
k.concat(a.sectionHeader({content:f.I18n.ts("Free images")}),this.createFreeImagesList(a),a.sectionHeader({content:f.I18n.ts("Premium images")}),this.createPremiumImagesList(a));a=f.I18n.ts("Insert Images",{context:"sidebar title"});const K=f.I18n.ts("Replace Images",{context:"sidebar title"});return{id:g.ImageInsertPlugin.SIDEBAR_ID,root:{title:b===n.insert?a:K,content:k},onClose:()=>{this.uiRoot.setState({sidebarOpen:!1})},onCloseButtonClicked:()=>{r.avro.Avro.createDefaultLogger().logCloseImageSidebar()}}}createLibrarySection(a){return"Online"===
this.uiRoot.getState().networkStatus?[a.sectionHeader({content:f.I18n.ts("My Library")}),a.button(d.ButtonSize.Large,d.ButtonAlign.Start,(a)=>[a.button({id:"open-my-library-button",color:d.ButtonColor.Blue,content:{text:f.I18n.ts("Add from my library")},onClick:()=>{this.pluginAccess.send(H.favorites,H.createOpenFavoritesFromAnotherSidebarMessage("image"))}})]),a.separator()]:[]}createTopBar(a){const {userCanSearch:b,searchText:c,autoOpen:m}=this.uiRoot.getState(),e=f.I18n.ts("Search..."),g=(a,c)=>
{b?this.searchForImages(c):this.uiRoot.dialog.showBuiltIn(d.BuiltinDialog.upgradeLicenseImageSearch)};return[...this.createLibrarySection(a),a.sectionHeader({content:f.I18n.ts("Upload your file")}),a.button(d.ButtonSize.Large,d.ButtonAlign.Start,(a)=>[a.upload({id:"image-upload",color:d.ButtonColor.Gray,content:{text:f.I18n.ts("Upload image")},fileFilter:{allowImage:!0},onFileSelected:(a,{file:b,source:c})=>{const d=this.uiRoot.getState().mode;switch(d){case n.insert:this.insertImageFromURLOrFile(a,
b,null,null,c);break;case n.replace:this.replaceImageFromURLOrFile(a,b,c);break;default:x.Utils.assertNever(d)}}}),a.button({id:"upload-info",color:d.ButtonColor.Ghost,content:{icon:d.IconSmallId.Info},onClick:()=>{const a=f.I18n.ts("https://prez.is/l97qcl1/");window.open(a,"_blank_info")},tooltipText:f.I18n.ts("Supported image formats")})]),a.separator(),a.sectionHeader({content:z.isActive("js-image-provider-v2-force-storyblocks")?f.I18n.ts("Image search"):f.I18n.ts("Images by Unsplash")}),a.searchField({id:"search-input-field",
onSearchButtonClick:(a)=>g(a,this.uiRoot.getState().searchText),onEnter:(a)=>g(a,this.uiRoot.getState().searchText),onValueChange:(a,c)=>{this.uiRoot.setState({searchText:c});this.isEmptyString(c)&&b&&g(a,null)},placeholderText:e,value:c,autofocus:!m})]}createImageResult(a){const {search:{term:b},images:c,progress:g,hasError:e}=this.uiRoot.getState();return e?this.createErrorResult(a,()=>{this.searchForImages(b)}):this.shouldNoResultBeShown()?[a.illustration(f.I18n.ts("No results"),d.IllustrationLargeLightId.NoResults)]:
this.createImageList({sidebarUi:a,triggerPaywall:!1,images:c,shouldRequestAdditionalItems:!0,progress:g})}createFreeImagesList(a){const {hostname:b,protocol:c,origin:f}=window.location;let e="localhost"===b?f+"/":c;const h=[...Array(g.ImageInsertPlugin.FREE_IMAGE_COUNT)].map((a,b)=>({id:`free-image-${b}`,thumbnail_url:p.getResourceUrl(`free-images-thumbnails/${b}.jpeg`),url:`${e}${p.getResourceUrl(`free-images/${b}.jpeg`)}`}));return this.createImageList({sidebarUi:a,triggerPaywall:!1,images:h,shouldRequestAdditionalItems:!1,
progress:0!==h.length?d.ListProgress.finished:d.ListProgress.working})}createPremiumImagesList(a){const b=[...Array(g.ImageInsertPlugin.PREMIUM_IMAGE_COUNT)].map((a,b)=>({id:`premium-image-${b}`,thumbnail_url:p.getResourceUrl(`premium-images/${b}.jpg`),url:p.getResourceUrl(`premium-images/${b}.jpg`)}));return this.createImageList({sidebarUi:a,triggerPaywall:!0,images:b,shouldRequestAdditionalItems:!1,progress:0!==b.length?d.ListProgress.finished:d.ListProgress.working})}createImageList(a){const {sidebarUi:b,
triggerPaywall:c,images:f,shouldRequestAdditionalItems:e,progress:g}=a,{mode:k,selectedItemKey:h}=this.uiRoot.getState();return[b.simpleList((a)=>({activeId:h,items:f?f.map((b,d)=>{d=this.getListItemKey(b,d);return this.createListItem({itemUi:a,image:b,mode:k,key:d,triggerPaywall:c})}):[],itemLayout:d.ListItemLayout.dynamic,itemType:d.ListItemType.large,requestAdditionalItems:()=>{e&&this.requestAdditionalItems()},progress:g,flexGrow:e?1:null}))]}requestAdditionalItems(){return C(this,void 0,void 0,
function*(){const {term:a,page:b}=this.uiRoot.getState().search;this.searchForImages(a,b+1)})}createListItem(a){const {itemUi:b,image:c,mode:g,key:e,triggerPaywall:h}=a;a=h||c.provider?this.externalAssetProvider.generateImageInfo(c):null;if(h)return b.lock({tooltipText:f.I18n.ts("Unlock"),src:{url:c.thumbnail_url},title:a.tooltip,onClick:()=>this.uiRoot.dialog.showBuiltIn(d.BuiltinDialog.upgradeLicenseImageSearch)});switch(g){case n.replace:return b.image({id:e,src:{url:c.thumbnail_url},info:a,onClick:(a)=>
{this.uiRoot.setState({selectedItemKey:e});this.replaceImageFromURLOrFile(a,c.url,"SIDEBAR_SEARCH")}});case n.insert:return b.droppableImage({src:{url:c.thumbnail_url},info:a,onDrop:(a,b)=>{const {mode:d}=this.uiRoot.getState();"replace"===d&&this.uiRoot.setState({mode:n.insert,selectedItemKey:null});a=this.insertImageFromURLOrFile(a,c.url,b.stageX,b.stageY,"SIDEBAR_SEARCH");null!=c.provider&&a.then((a)=>{a.kind===D.image&&this.externalAssetProvider.registerAsset({provider:c.provider,assetId:c.id,
mediaUrl:a.url,preziOid:this.session.document.preziMetaData.preziOid}).catch(()=>!0)})}})}}getListItemKey(a,b){return`${b}-${this.getKeyFromUrl(a.url)}`}getKeyFromUrl(a){return null!=a?a.substring(Math.max(0,a.length-32),a.length):null}createErrorResult(a,b){return[a.illustration(f.I18n.ts("Something went wrong"),d.IllustrationLargeLightId.Error),a.button(d.ButtonSize.Small,d.ButtonAlign.Center,(a)=>[a.button({id:"image-search-try-again",color:d.ButtonColor.Ghost,content:{text:f.I18n.ts("Try again")},
onClick:b})])]}searchForImages(a=null,b=0){return C(this,void 0,void 0,function*(){a=a?a.trim():null;const {recommendedImages:c,images:g}=this.uiRoot.getState(),e=0===b?[]:g,f={term:a,page:b};this.uiRoot.setState({search:f,images:e,progress:d.ListProgress.working,hasError:!1,selectedItemKey:null});let h,l=!1;try{this.isEmptyString(a)?c&&0===b?h=c:(h=(yield this.externalAssetProvider.getRelevantImages(I.Usecase.NEXT_IMAGE,b)).assets,0===b&&this.uiRoot.setState({recommendedImages:h})):(r.avro.Avro.createDefaultLogger().logSearchImage({search_term:f.term}),
h=(yield this.externalAssetProvider.search(a,b)).assets)}catch(L){l=!0,h=[]}this.uiRoot.setState({images:e.concat(h),progress:0===h.length?d.ListProgress.finished:d.ListProgress.idle,hasError:l})})}isEmptyString(a){return!a||0===a.trim().length}isImageBeingMasked(a,b){a=a.toDecorator(b);b=A.CetRendererModule.getImageMaskEditingStateComponentKey();return a.get(b)}shouldNoResultBeShown(){const {progress:a,images:b}=this.uiRoot.getState();return a===d.ListProgress.working?!1:b&&0===b.length}shouldShowReplaceImage(a){return 1===
a.length&&(E(a[0],u.animatedImage)||E(a[0],u.image))}getSelectedImagePlaceholder(a){return 1!==a.length?q.none:this.session.document.read((b)=>{b=b.lookup.resolve(a[0]);return null!=b&&b.is(u.image)?b.isPlaceholder?q.placeholder:q.nonPlaceholder:q.none})}shouldShowTogglePlaceholder(){return z.isActive("js-developer-features")&&this.uiRoot.getState().selectedImagePlaceholder!==q.none}toggleSelectedImagePlaceholder(a){const {selection:b}=this.uiRoot.getState();if(1===b.length)try{this.session.document.executeApiCommand(a,
{name:"toggle image placeholder",run:(a)=>{a=a.lookup.resolve(b[0]);a.is(u.image)&&(a.isPlaceholder=!a.isPlaceholder,this.uiRoot.setState({selectedImagePlaceholder:a.isPlaceholder?q.placeholder:q.nonPlaceholder}))}})}catch(c){}}};g.ImageInsertPlugin.SIDEBAR_ID="sidebar-image-insert";g.ImageInsertPlugin.CONTEXT_MENU_ID="context-menu-image-insert";g.ImageInsertPlugin.FREE_IMAGE_COUNT=15;g.ImageInsertPlugin.PREMIUM_IMAGE_COUNT=16;g.ImageInsertPlugin.MASK_ASPECT_RATIO_IDS=new Map([[h.MaskAspectRatio.fix1By1,
"mask-aspect-1-1"],[h.MaskAspectRatio.fix16By9,"mask-aspect-16-9"],[h.MaskAspectRatio.fix4By3,"mask-aspect-4-3"],[h.MaskAspectRatio.custom,"mask-aspect-custom"]]);g.ImageInsertPlugin.MASK_ASPECT_RATIO_LOG_PROPS=new Map([[h.MaskAspectRatio.fix1By1,"ONE_BY_ONE"],[h.MaskAspectRatio.fix16By9,"SIXTEEN_BY_NINE"],[h.MaskAspectRatio.fix4By3,"FOUR_BY_THREE"],[h.MaskAspectRatio.custom,"CUSTOM"]]);var F={};Object.defineProperty(F,"__esModule",{value:!0});F.lazyModule={createPlugin(){return new g.ImageInsertPlugin}};
return F});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_image_insert",["require","prezi_cet_model_editor","prezi_cet_renderer","prezi_editor_commander","prezi_editor_store_mode","prezi_externalassetprovider","prezi_featureswitcher","prezi_i18n","prezi_logger","prezi_plugin_api","prezi_plugin_meta","prezi_utils"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_image_insert.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi_cet_model_editor"),require("prezi_cet_renderer"),require("prezi_editor_commander"),require("prezi_editor_store_mode"),require("prezi_externalassetprovider"),require("prezi_featureswitcher"),require("prezi_i18n"),require("prezi_logger"),require("prezi_plugin_api"),require("prezi_plugin_meta"),require("prezi_utils"));}else{this["prezi_image_insert"]=__factory(this["prezi_cet_model_editor"],this["prezi_cet_renderer"],this["prezi_editor_commander"],this["prezi_editor_store_mode"],this["prezi_externalassetprovider"],this["prezi_featureswitcher"],this["prezi_i18n"],this["prezi_logger"],this["prezi_plugin_api"],this["prezi_plugin_meta"],this["prezi_utils"]);}}).call(this);
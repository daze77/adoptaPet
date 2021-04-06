;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-25-g6015dbc";},getModuleName:function(){return "prezi_video_insert";},getModuleVersion:function(){return "release-2021w06-base-26-gaeb382e";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi_cet_model_editor":dependencies[0],"prezi_i18n":dependencies[1],"prezi_logger":dependencies[2],"prezi_plugin_api":dependencies[3],"prezi_plugin_meta":dependencies[4]}};})());};})(arguments);var moduleImpl=(function(){return module(function(d){var h=d.dependencies.prezi_cet_model_editor,e=d.dependencies.prezi_i18n,g=d.dependencies.prezi_logger,a=d.dependencies.prezi_plugin_api,k=d.dependencies.prezi_plugin_meta,f={};Object.defineProperty(f,"__esModule",{value:!0});const l={j:"",$:!1,w:!1,networkStatus:a.NetworkStatus.Online};f.i=class{constructor(){this.logger=g.LoggerModule.getLoggerManager().createLogger("VideoInsertPlugin")}init(c){c.onLicenseChange((b)=>{this.logger.info({object:"videoSidebarOnLicenseChange",action:"change",
trigger:"change",payload:{videoUpload:b.videoUpload}});this.f.setState({$:b.videoUpload})});c.onFileDrop({allowVideo:!0},(b,a)=>{const c=this.session.document.progressiveAssetManager.uploadVideo(a.data.file);this.u(b,c.token,"file_drop",{stageX:a.stageX,stageY:a.stageY})});c.onURLDrop((a,c)=>this.session.document.progressiveAssetManager.isYoutubeUrl(c.data.url.toString())?(this.v(a,c.data.url.toString()),!0):!1);c.onNetworkStatusChange((a)=>{this.f.setState({networkStatus:a})});this.f=c.declareUI(l,
(c,d)=>{d.createSidebar((b)=>({id:f.i.o,root:{title:e.I18n.ts("Video"),content:[...this.aa(b),b.sectionHeader({content:e.I18n.ts("Upload your file")}),b.button(a.ButtonSize.Large,a.ButtonAlign.Start,(b)=>[c.$?b.upload({color:a.ButtonColor.Gray,id:"video-upload",content:{text:e.I18n.ts("Upload video")},fileFilter:{allowVideo:!0},onFileSelected:(b,{file:c,source:a})=>{g.avro.Avro.createDefaultLogger().logInsertVideo({video_source:a});c=this.session.document.progressiveAssetManager.uploadVideo(c);this.u(b,
c.token,"upload_file_selector")}}):b.button({id:"video-upload",color:a.ButtonColor.Gray,content:{text:e.I18n.ts("Upload video")},onClick:()=>{this.f.dialog.showBuiltIn(a.BuiltinDialog.upgradeLicenseInsertVideo)}}),b.button({id:"upload-info",color:a.ButtonColor.Ghost,content:{icon:a.IconSmallId.Info},onClick:()=>{const c=e.I18n.ts("https://prezi.com/business/kb/create-your-prezi/adding-video/");window.open(c,"_blank_info")},tooltipText:e.I18n.ts("Supported video formats")})]),b.separator(),b.sectionHeader({content:e.I18n.ts("Embed Youtube")}),
b.inputField({id:"youtube-url",placeholderText:"http://",value:c.j,onEnter:(c)=>{this.v(c,this.f.getState().j)},onValueChange:(c,b)=>{this.f.setState({j:b})},bottomText:e.I18n.ts("Powerered by YouTube")}),b.button(a.ButtonSize.Small,a.ButtonAlign.End,(b)=>[b.button({id:"youtube-upload",color:a.ButtonColor.Gray,content:{text:e.I18n.ts("Insert")},onClick:(b)=>{this.v(b,c.j)}})]),b.separator(),b.label(e.I18n.ts("YouTube videos will not be available while presenting offline."))],footer:[b.label(e.I18n.ts("Any media you insert must comply with Prezi Terms of Use.")),
b.button(a.ButtonSize.Small,a.ButtonAlign.Start,(b)=>[b.button({id:"video-terms-of-use",color:a.ButtonColor.Ghost,content:{text:e.I18n.ts("Prezi Terms of Use")},onClick:()=>{const b=e.I18n.ts("https://prezi.com/terms-of-use/");window.open(b,"_blank_terms")}})])]},onCloseButtonClicked:()=>{g.avro.Avro.createDefaultLogger().logCloseVideoSidebar()},onOpen:()=>{this.f.setState({w:!0})},onClose:()=>{this.f.setState({w:!1})}}));d.createMenuItem({kind:a.MenuItemKind.largeButton,id:"video-insert-menuitem",
title:e.I18n.ts("Video"),icon:a.IconSmallId.Video,onClick:()=>{g.avro.Avro.createDefaultLogger().logClickTabMenuItem({tab_menu_item:"VIDEO"});this.f.sidebar.open(f.i.o)},parent:a.TabMenuId.Insert,weight:55})})}aa(c){return"Online"===this.f.getState().networkStatus?[c.sectionHeader({content:e.I18n.ts("My Library")}),c.button(a.ButtonSize.Large,a.ButtonAlign.Start,(b)=>[b.button({id:"open-my-library-button",color:a.ButtonColor.Blue,content:{text:e.I18n.ts("Add from my library")},onClick:()=>{this.pluginAccess.send(k.favorites,
k.createOpenFavoritesFromAnotherSidebarMessage("video"))}})]),c.separator()]:[]}v(c,b){g.avro.Avro.createDefaultLogger().logInsertVideo({video_source:"URL"});b=this.session.document.progressiveAssetManager.createYoutubeAsset(b);null!=b&&this.u(c,b,"click_on_insert")}u(c,b,a,e=null){this.session.document.executeApiCommand(c,{name:"video insert",run:(a)=>{var d=this.session.insertTarget.getSimpleObjectParent(a);const f=null==e?this.session.positionFinder.findLayoutBox(d,1,1):this.session.positionFinder.findLayoutBox(d,
1,1,e.stageX,e.stageY);d=d.add.video(b);d.position=f.center;a=this.ba(a);null!=a&&a.add.zoom(a.children.length,d);this.session.selection.setSelection(c,[d])}},{trigger:a})}ba(a){const b=this.session.insertTarget.getSimpleObjectParent(a).id;return a.structuredPath.pathElementsInOrder.find((a)=>(a.is(h.base.ObjectKind.visitOverview)||a.is(h.base.ObjectKind.visitPlanet)||a.is(h.base.ObjectKind.visitPage))&&a.target.id===b)}processMessage(a){if("openVideoInsertSidebar"===a)this.openVideoInsertSidebar();
else throw Error(`unexpected message: ${a}`);}openVideoInsertSidebar(){this.f.getState().w||(g.avro.Avro.createDefaultLogger().logShowVideoInsertOptions(),this.f.sidebar.open(f.i.o))}unload(){}};f.i.o="video-sidebar";d={};Object.defineProperty(d,"__esModule",{value:!0});d.lazyModule={createPlugin(){return new f.i}};return d});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_video_insert",["require","prezi_cet_model_editor","prezi_i18n","prezi_logger","prezi_plugin_api","prezi_plugin_meta"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_video_insert.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi_cet_model_editor"),require("prezi_i18n"),require("prezi_logger"),require("prezi_plugin_api"),require("prezi_plugin_meta"));}else{this["prezi_video_insert"]=__factory(this["prezi_cet_model_editor"],this["prezi_i18n"],this["prezi_logger"],this["prezi_plugin_api"],this["prezi_plugin_meta"]);}}).call(this);
;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-25-g6015dbc";},getModuleName:function(){return "prezi_text_editor";},getModuleVersion:function(){return "release-2021w06-base-26-gaeb382e";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi.geometry":dependencies[0],"prezi_cet_model":dependencies[1],"prezi_cet_model_editor":dependencies[2],"prezi_editor_commander":dependencies[3],"prezi_featureswitcher":dependencies[4],"prezi_font_provider":dependencies[5],"prezi_i18n":dependencies[6],"prezi_logger":dependencies[7],"prezi_plugin_api":dependencies[8],"prezi_plugin_meta":dependencies[9],"prezi_service_fontcatalogue":dependencies[10],"prezi_utils":dependencies[11],"prezi_widgets":dependencies[12]}};})());};})(arguments);var moduleImpl=(function(){return module(function(l){var g=l.dependencies.prezi_cet_model_editor,p=l.dependencies.prezi_logger,C=l.dependencies["prezi.geometry"],e=l.dependencies.prezi_plugin_api,z=l.dependencies.prezi_utils,x=l.dependencies.prezi_editor_commander,h=l.dependencies.prezi_i18n,D=l.dependencies.prezi_service_fontcatalogue,t=l.dependencies.prezi_widgets,E=l.dependencies.prezi_cet_model,A=l.dependencies.prezi_featureswitcher,F=l.dependencies.prezi_plugin_meta,G=l.dependencies.prezi_font_provider,q={};Object.defineProperty(q,
"__esModule",{value:!0});var u=g.base.TextAlignment,v=g.base.TextListType,y=g.base.ObjectKind,H=g.base.readerIs;l={color:{r:0,g:0,b:0},fontStyle:g.base.FontStyle.Normal,fontWeight:g.base.FontWeight.Normal,fontSize:10};const I={i:l,aa:l,za:l,hb:l,oa:new Map,w:new Map,Ma:new Map,ba:null,ia:null,qa:null,ua:null,ta:!0,Ja:!0,ra:!0,sa:!0,ca:{solidFill:{fillKind:t.FillKind.solid,color:{r:0,g:0,b:0,a:1}},canPickClearFill:!0,current:t.FillKind.solid,hasAlpha:!0},backgroundCornerRadius:0,selection:[],currentTopic:null,
visible:!1,va:null,fa:null,na:!1,ya:!1};var r;(function(a){a.DocumentChange="documentChange";a.SelectionChange="selectionChange";a.Typing="typing"})(r||(r={}));const n=new Map([["title",{weight:0,title:h.I18n.ts("Title"),ea:1}],["subtitle",{weight:1,title:h.I18n.ts("Subtitle"),ea:20/24}],["subtitle_2",{weight:2,title:h.I18n.ts("Subtitle 2"),ea:20/24}],["body",{weight:3,title:h.I18n.ts("Body"),ea:14/24}],["body_2",{weight:4,title:h.I18n.ts("Body 2"),ea:14/24}]]);q.v=class{constructor(){this.mb=[12671,
12673,12678,44341,44411,59594,44425,44445,44473,44501,44551,44558,44559,44561,44564,44639,44781,44809,44880,44991,45152,47556,50509,50511,50514,50603,50609,50716,50717,50941,50967,50995,52044];this.Ia="hangul";this.Ga="cjk";this.Ha="kata-or-hira"}static Oa(){null==q.v.Pa&&(q.v.Pa=E.CetModel.createValueComponentKey("originalPlaceholderInto",!1,!1));return q.v.Pa}init(a){this.$=x.createLongRunningExecutor(this.session);this.la=G.FontProviderModule.getFontProvider(a);this.la.onUserSelectedFontsChange(()=>
this.Ba());this.f=a.declareUI(I,(a,c)=>{this.Za(a,c);a.visible&&(this.$a(a,c),this.Ua(a,c),this.Va(c),this.Wa(a,this.pluginDescription,c),this.Ta(a,c),this.Ya(a,c),this.Sa(a,c),this.Xa(c),this.ab(a,c))});A.isActive("js-autotitle")&&this.session.document.preziMetaData.title===h.I18n.ts("Untitled presentation")||this.f.setState({na:!0});this.Ba();a.onStyleSheetChange(()=>{this.bb();this.session.document.read((a)=>{this.ob(a);this.pa(a)})});a.onSelectionChange(()=>{this.f.getState().na||this.session.document.preziMetaData.title===
h.I18n.ts("Untitled presentation")||this.f.setState({na:!0});this.Ca(r.Ra)});a.onDocumentChange(()=>{this.f.getState().visible&&this.Ca(r.ha)});a.onTextSelectionChange((a)=>{this.f.getState().visible&&this.Ca(r.Ra);null!=a&&null!=a.id||this.$.close("text edit")});a.onTextDrop((a,c)=>this.u(a,"paste text",(b)=>{const d=this.session.selection.getTextSelectionInfo(),m={text:c.data.text.slice(0,3E3),characterPropss:null==c.data.characterPropss?null:c.data.characterPropss.slice(0,3E3)};if(null!=d)return this.Aa(b,
d.id,(c)=>null!=c?(this.ma(c,(c)=>{this.ka(b,c,(b)=>{this.fillText({textEditor:b,ga:m,offset:d.offset,length:d.length});this.session.selection.setTextSelection(a,Object.assign(Object.assign({},d),{offset:d.offset+m.text.length,length:0}))})}),!0):!1);var f=this.session.selection.getSelectionInfo(b).allObjects;f=1===f.length?f[0]:null;null!=f&&f.is(y.text)&&f.isPlaceholder?(this.Aa(b,f.id,(a)=>{this.ma(a,(a)=>{this.ka(b,a,(a)=>{this.fillText({textEditor:a,ga:m})})})}),this.session.selection.setTextSelection(a,
{offset:m.text.length,length:0,caretPosition:e.CaretPosition.End,id:f.id})):this.xa(a,b,m,!1,null);return!0}));a.onTextEdit((a,c)=>{const b=this.session.selection.getTextSelectionInfo(),k=this.f.getState().aa;let m=!1;const f=!this.f.getState().na;return null!=b?(this.$.update("text edit",a,{isFinal:!1},(d)=>{this.Aa(d,b.id,(f)=>{null!=f&&this.ma(f,(f)=>{this.ka(d,f,(d)=>{m&&p.avro.Avro.createDefaultLogger().logModifiedObject({object_type:"TEXT",modify_action:"REPLACE",topic_relationship:d,object_id:d.id});
switch(c.kind){case e.TextEditEventKind.Insert:d.setText(c.text,b.offset,b.length).setAllCharacterProps(k);this.session.selection.setTextSelection(a,Object.assign(Object.assign({},b),{offset:b.offset+c.text.length,length:0}));break;case e.TextEditEventKind.Command:switch(c.command){case e.TextEditCommandKind.Tab:d.getTextRange(b.offset,b.length).getParagraphs().forEach((a)=>{const b=a.getParagraphProps().indent;a.setAllParagraphProps({indent:c.modifiers.shiftKey?Math.max(0,b-1):b+1})});break;case e.TextEditCommandKind.Delete:0<
b.length?(d.setText("",b.offset,b.length),this.session.selection.setTextSelection(a,Object.assign(Object.assign({},b),{offset:b.offset,length:0}))):b.offset<d.length&&(d.setText("",b.offset,1),this.session.selection.setTextSelection(a,Object.assign(Object.assign({},b),{offset:b.offset,length:0})));break;case e.TextEditCommandKind.Backspace:var f=b.length;let k=b.offset;(c.modifiers.os===e.OsKind.Windows?c.modifiers.ctrlKey:c.modifiers.altKey)&&0===f&&(k=d.getWordBoundaryToLeft(k),f=b.length+(b.offset-
k));if(0<f)d.setText("",k,f),this.session.selection.setTextSelection(a,{id:b.id,offset:k,caretPosition:e.CaretPosition.End,length:0});else{f=d.getTextRange(k,0).getParagraphs()[0];const c=f.getParagraphProps(),m=0===k||"\n"===d.getTextRange(k-1,1).getText();m&&c.listType===v.Bullet?f.setAllParagraphProps({listType:v.None}):m&&0<c.indent?f.setAllParagraphProps({indent:c.indent-1}):0<k&&(d.setText("",k-1,1),this.session.selection.setTextSelection(a,{id:b.id,offset:k-1,caretPosition:e.CaretPosition.End,
length:0}))}break;case e.TextEditCommandKind.Enter:d.setText("\n",b.offset,b.length);this.session.selection.setTextSelection(a,Object.assign(Object.assign({},b),{offset:b.offset+1,length:0}));break;default:throw z.Utils.assertNever(c.command);}}})})});this.Da(d,r.qb)},(a)=>{const c=this.f.getState();f&&c.ba===this.gb(a)&&this.session.document.setDocumentTitle(a.lookup.text(b.id).getText())},()=>{m=!0;window.setTimeout(()=>this.$.close("text edit"),1E3)}),!0):!1});a.onCurrentTopicChange((a)=>this.f.setState({currentTopic:a}));
a.onNetworkStatusChange((a)=>{this.f.setState({ya:a===e.NetworkStatus.Offline});this.f.getState().visible&&this.Ba()})}gb(a){const b=a.overview.contentChildren.map((a)=>a.is(g.base.ObjectKind.text)?a.textStyle:null);return["title","subtitle","subtitle_2","body","body_2"].find((a)=>-1!==b.indexOf(a))}flatten(a){if(!a.every((a)=>a.is(y.topic)&&1===a.simpleChildren(g.base.ChildVisibilityKind.outsideAndInside).length))return a;let b=[];a.forEach((a)=>{a.is(y.topic)&&b.push(...a.simpleChildren(g.base.ChildVisibilityKind.outsideAndInside))});
return b}fb(a){return this.flatten(this.session.selection.getReadonlySelectionInfo(a).allObjects)}j(a){return this.flatten(this.session.selection.getSelectionInfo(a).allObjects)}Ca(a){this.session.document.read((b)=>{this.Da(b,a)})}Da(a,b){let c=!1;var d=this.session.selection.getReadonlySelectionInfo(a).allObjects,k=this.fb(a);if(0<k.length){const f=k.filter(H(g.base.ObjectKind.text));if(f.length===k.length){c=!0;k=new Set(f.filter((a)=>null!=a.textStyle).map((a)=>a.textStyle));const e=new Set(f.filter((a)=>
null!=a.font).map((a)=>a.font.fontFamily)),g=[];let h=0;f.forEach((a)=>{g.some((b)=>b===a.background||null!=b&&null!=a.background&&b.r===a.background.r&&b.g===a.background.g&&b.b===a.background.b&&b.a===a.background.a)||g.push(a.background);null!=a.background&&(h=Math.max(h,Math.min(a.backgroundCornerRadius/this.La(a),1)))});const w=this.session.selection.getTextSelectionInfo(),l=new Set(f.map((a)=>{a=this.da(a,w).getParagraphs();return a[a.length-1].getParagraphProps().alignment})),B=new Set(f.map((a)=>
{a=this.da(a,w).getParagraphs();return a[a.length-1].getParagraphProps().listType})),p=new Set(f.map((a)=>{a=a.presetSelector;return null==a?null:(a.typeName||"*")+"."+(a.className||"*")})),n=this.getCharacterProps(a,f,w);var m=this.f.getState();const q=b===r.ha&&this.ja(m.za,n.Fa)?m.i:n.Fa;m=b===r.ha&&this.ja(m.za,n.wa)?m.aa:n.wa;d={ba:1===k.size?k.values().next().value:null,ia:1===e.size?e.values().next().value:null,qa:1===l.size?l.values().next().value:null,ua:1===B.size?B.values().next().value:
null,Ja:f[0].font&&f[0].font.hasNormal,ra:f[0].font&&f[0].font.hasBold,ta:f[0].font&&f[0].font.hasItalic,sa:f[0].font&&f[0].font.hasBoldItalic,i:q,aa:m,za:n.Fa,hb:n.wa,ca:{solidFill:{fillKind:t.FillKind.solid,color:1<=g.length?g[0]:null},current:1<=g.length&&null==g[0]?t.FillKind.clear:t.FillKind.solid,canPickClearFill:!0,hasAlpha:!0},backgroundCornerRadius:h,va:1===p.size?p.values().next().value:null,selection:d.map((a)=>a.id)};this.ja(d,this.f.getState())||this.f.setState(d);b!==r.ha&&this.f.getState().visible||
this.pa(a)}else this.f.setState({selection:d.map((a)=>a.id)})}else this.f.setState({selection:d.map((a)=>a.id)});c!==this.f.getState().visible&&this.f.setState({visible:c})}Ba(){var {ya:a}=this.f.getState();a=a?D.getBuiltinFontDescriptionsOrderedByName():this.la.getUserSelectedFonts();a=new Map(a.map((a)=>[a.fontFamily,{preset:{imageUrl:a.imageUri,hasLightColor:!1},fontDescription:a}]));this.f.setState({w:a});this.session.document.read((a)=>{this.pa(a)})}pa(a){a=this.eb(a);const b=this.f.getState().w;
for(let [c,d]of a)b.has(c)||this.la.createFontPresetData(d,this.session.document.progressiveAssetManager).then((a)=>{const b=this.f.getState();this.f.setState({w:(new Map(b.w)).set(c,{preset:a,fontDescription:d})})});this.f.setState({Ma:a})}Za(a,b){0===a.selection.length&&b.createMenuItem({kind:e.MenuItemKind.context,id:"ctx-text-editing-insert-text",weight:128,title:h.I18n.ts("Insert text",{context:"Insert text block from context menu"}),onClick:(a,b)=>{this.u(a,"insert text",(d)=>{this.xa(a,d,{text:h.I18n.ts("Click to edit text"),
characterPropss:null},!0,b)})}});b.createMenuItem({kind:e.MenuItemKind.largeButton,parent:e.TabMenuId.Insert,icon:e.IconSmallId.Text,id:"insert-text-menu-item",title:h.I18n.ts("Text"),weight:2,onClick:(a)=>{p.avro.Avro.createDefaultLogger().logClickTabMenuItem({tab_menu_item:"TEXT"});p.avro.Avro.createDefaultLogger().logInsertTextbox({text_type:null});this.u(a,"insert text",(b)=>{this.xa(a,b,{text:h.I18n.ts("Click to edit text"),characterPropss:null},!0,null)})}})}$a(a,b){const c=n.size+10,d=(b,d,
c)=>b.imageCheckbox({id:d,imgUrl:c.imageUrl,checked:a.ba===d,hasLightColor:c.hasLightColor,onCheck:(a,b)=>{b&&this.u(a,"Change text style",(a)=>{this.j(a).forEach((b)=>{b.is(g.base.ObjectKind.text)&&(b=a.toDecorator(b),b.textStyle=d,b.caretOffset=b.getText().length,b.selection=null,this.o(b))})})}});b.createPropertyBarItem((b)=>b.popupButton((b)=>({id:"text-editor-preset-dropdown",tooltipText:h.I18n.ts("Presets"),content:{text:null==a.ba?h.I18n.ts("Presets"):this.Na(a.ba)},weight:0,parent:e.PropertyBarId.Left,
height:e.PopupHeight.Full,popupHeader:[b.sectionHeader({content:h.I18n.ts("Text Presets")})],popupContent:[...a.oa.entries()].sort(([a],[b])=>{const d=n.has(a)?n.get(a).weight:c,f=n.has(b)?n.get(b).weight:c;return d!==c&&f!==c?d-f:a.localeCompare(b)}).map(([a,c])=>d(b,a,c))})));b.createPropertyBarItem((a)=>a.separator({id:"preset-separator",size:e.PropertyBarSeparatorSize.Small,weight:0,parent:e.PropertyBarId.Left}))}Ua(a,b){const c=(b,c)=>{var d;const f=null===(d=a.w.get(c.fontFamily))||void 0===
d?void 0:d.preset;return null==f?null:b.imageCheckbox({id:c.fontFamily,imgUrl:f.imageUrl,checked:a.ia===c.fontFamily,onCheck:(a,b)=>{b&&a.doAsync(this.session.document.progressiveAssetManager.downloadFont(c),(a,b)=>{a.isValid()&&this.u(a,"setFontFamilyCmd",(a)=>{this.j(a).forEach((a)=>{a.is(g.base.ObjectKind.text)&&(a.font=b,this.o(a))});this.pa(a)})})}})};b.createPropertyBarItem((b)=>{const d=(a,b)=>a.fontFamily.localeCompare(b.fontFamily),m=(a,b)=>a.fontDescription.fontFamily.localeCompare(b.fontDescription.fontFamily);
return b.popupButton((b)=>{var f=[...a.Ma.values()].sort(d).map((a)=>c(b,a)).filter((a)=>null!=a),k=[...a.w.values()].sort(m).map((a)=>c(b,a.fontDescription)).filter((a)=>null!=a);f={id:"text-editor-font-dropdown",tooltipText:h.I18n.ts("Font"),content:{text:null==a.ia?h.I18n.ts("Font-family"):a.ia},weight:0,parent:e.PropertyBarId.Left,popupHeader:[b.sectionHeader({content:h.I18n.ts("Font")})],popupHeight:e.PopupHeight.Short,popupContent:[b.sectionHeader({content:h.I18n.ts("Used in the document")}),
...f,b.separator(),...k]};k=[b.button(e.ButtonSize.Large,e.ButtonAlign.Start,(b)=>[b.button({id:"showMoreFontsButton",color:e.ButtonColor.Gray,content:{text:h.I18n.ts("More fonts")},onClick:()=>{p.avro.Avro.createDefaultLogger().logOpenMoreFontsDialog({font_dialog_source:"PROPERTY_BAR_DROPDOWN"});this.pluginAccess.send(F.fontSelector,{kind:"openFontSelectorModal"})},disabled:a.ya})])];return f=Object.assign(Object.assign({},f),{popupFooter:k})})});b.createPropertyBarItem((a)=>a.separator({id:"font-separator",
size:e.PropertyBarSeparatorSize.Small,weight:0,parent:e.PropertyBarId.Left}))}Va(a){a.createPropertyBarItem((a)=>a.button({id:"text-editor-decrease-font-size",weight:2,parent:e.PropertyBarId.Left,tooltip:h.I18n.ts("Decrease size"),icon:e.IconSmallId.DecreaseTextSize,onClick:(a)=>{p.avro.Avro.createDefaultLogger().logClickPropertyBar({property_item:"ANY"});this.setCharacterProps(a,"font_size",(a)=>({fontSize:Math.max(10,a.fontSize-2)}))}}));a.createPropertyBarItem((a)=>a.button({id:"text-editor-increase-font-size",
weight:3,parent:e.PropertyBarId.Left,tooltip:h.I18n.ts("Increase size"),icon:e.IconSmallId.IncreaseTextSize,onClick:(a)=>{p.avro.Avro.createDefaultLogger().logClickPropertyBar({property_item:"ANY"});this.setCharacterProps(a,"font_size",(a)=>({fontSize:Math.min(40,a.fontSize+2)}))}}));a.createPropertyBarItem((a)=>a.separator({id:"font-size-separator",size:e.PropertyBarSeparatorSize.Small,weight:3,parent:e.PropertyBarId.Left}))}Wa(a,b,c){const {ra:d,ta:k,sa:m}=a;let f={};a.i.fontWeight!==g.base.FontWeight.Bold||
d||m||(f=Object.assign(Object.assign({},f),{fontWeight:g.base.FontWeight.Normal}));a.i.fontStyle!==g.base.FontStyle.Italic||k||m||(f=Object.assign(Object.assign({},f),{fontStyle:g.base.FontStyle.Normal}));const h=Object.assign(Object.assign({},a.i),f),l=(a)=>({fontWeight:a.fontWeight===g.base.FontWeight.Bold?g.base.FontWeight.Normal:g.base.FontWeight.Bold}),n=(a)=>({fontStyle:a.fontStyle===g.base.FontStyle.Italic?g.base.FontStyle.Normal:g.base.FontStyle.Italic}),w=c.createAction({shortcut:b.shortcuts.bold,
enabled:null!=h&&this.Ea(a,l(h)),onExecute:(a)=>{p.avro.Avro.createDefaultLogger().logClickPropertyBar({property_item:"ANY"});this.setCharacterProps(a,"bold",(a)=>l(a))}}),q=c.createAction({shortcut:b.shortcuts.italic,enabled:null!=h&&this.Ea(a,n(h)),onExecute:(a)=>{p.avro.Avro.createDefaultLogger().logClickPropertyBar({property_item:"ANY"});this.setCharacterProps(a,"italic",(a)=>n(a))}});c.createPropertyBarItem((a)=>a.button({id:"text-editor-bold",weight:4,parent:e.PropertyBarId.Left,checked:null!=
h&&h.fontWeight===g.base.FontWeight.Bold?e.CheckedState.checked:e.CheckedState.unchecked,action:w}));c.createPropertyBarItem((a)=>a.button({id:"text-editor-italic",weight:5,parent:e.PropertyBarId.Left,checked:null!=h&&h.fontStyle===g.base.FontStyle.Italic?e.CheckedState.checked:e.CheckedState.unchecked,action:q}))}Ta(a,b){b.createPropertyBarItem((b)=>b.colorPicker({id:"text-editor-text-color",parent:e.PropertyBarId.Left,weight:6,tooltip:h.I18n.ts("Color"),title:"Text color",showThemeColors:!0,customColors:null==
a.fa?[]:[a.fa],icon:e.IconSmallId.TextForeground,fills:{solidFill:{fillKind:t.FillKind.solid,color:null!=a.i?Object.assign(Object.assign({},a.i.color),{a:1}):{r:0,g:0,b:0,a:1}},current:t.FillKind.solid,hasAlpha:!1},onChange:(a,b)=>this.$.update("text-font-color",a,b,(b,d)=>{this.kb(a,b,()=>({color:d.newFill.color}))},(a)=>{this.j(a).forEach((a)=>{a.is(g.base.ObjectKind.simpleObject)&&this.o(a)})})}));const c={id:"text-editor-background-color",showThemeColors:!0,expanded:!0,fills:a.ca,customColors:null==
a.fa?[]:[a.fa],onChange:(a,b)=>this.$.update("text-background-color",a,b,(a,b)=>{this.j(a).forEach((a)=>{if(a.is(g.base.ObjectKind.text)){const d=b.newFill;switch(d.fillKind){case t.FillKind.clear:a.background=null;break;case t.FillKind.solid:a.background=d.color;break;default:throw Error(d);}}this.f.setState({ca:b.fills})})},(a)=>{this.j(a).forEach((a)=>{a.is(g.base.ObjectKind.simpleObject)&&this.o(a)})})};b.createPropertyBarItem((b)=>b.popupButton((b)=>({id:"text-editor-background-color-popup",
content:{icon:e.IconSmallId.TextBackground,fills:Object.assign(Object.assign({},a.ca),{radialFill:null,linearFill:null})},weight:7,parent:e.PropertyBarId.Left,popupHeader:[b.sectionHeader({content:h.I18n.ts("Background color")})],rb:!0,popupContent:[b.colorPicker(c),...null==a.ca.solidFill.color?[]:[b.separator(),b.slider({title:h.I18n.ts("Corner Radius"),onChange:(a,b)=>this.$.update("text-background-corner-radius",a,b,(a,b)=>{const d=this.j(a).map((a)=>a.is(g.base.ObjectKind.text)?this.La(a):null).filter((a)=>
null!=a).reduceRight((a,b)=>Math.min(a,b));this.j(a).forEach((a)=>{a.is(g.base.ObjectKind.text)&&(a.backgroundCornerRadius=b.value*d)});this.f.setState({backgroundCornerRadius:b.value})},(a)=>{this.j(a).forEach((a)=>{a.is(g.base.ObjectKind.text)&&(this.o(a),p.avro.Avro.createDefaultLogger().logModifyCornerRadiusSetting({corner_radius_nr:b.value,object_type:"TEXT"}))})}),value:this.f.getState().backgroundCornerRadius})]]})));b.createPropertyBarItem((a)=>a.separator({id:"font-color-separator",size:e.PropertyBarSeparatorSize.Small,
weight:7,parent:e.PropertyBarId.Left}))}La(a){const b=(a.layoutBox.size.height-a.glyphBox.size.height)/2,c=(a.layoutBox.size.width-a.glyphBox.size.width)/2;return Math.min(Math.min(a.layoutBox.size.height,a.layoutBox.size.width)/2,b+c+Math.sqrt(2*b*c))}Sa(a,b){let c=e.IconSmallId.AlignLeft;switch(a.qa){case u.Center:c=e.IconSmallId.AlignCenter;break;case u.Justify:c=e.IconSmallId.AlignJustify;break;case u.Left:c=e.IconSmallId.AlignLeft;break;case u.Right:c=e.IconSmallId.AlignRight;break;case null:c=
e.IconSmallId.AlignLeft;break;default:throw z.Utils.assertNever(a.qa,"alignment");}const d=(a,b)=>({id:`text-editor-alignment-${b}`,icon:a,checked:c===a?e.CheckedState.checked:e.CheckedState.unchecked,onClick:(a)=>{this.setParagraphProps(a,"alignment",()=>({alignment:b}))}});b.createPropertyBarItem((a)=>a.submenu({id:"text-editor-alignment",weight:9,parent:e.PropertyBarId.Left,icon:c,tooltip:h.I18n.ts("Alignment"),items:[d(e.IconSmallId.AlignLeft,u.Left),d(e.IconSmallId.AlignCenter,u.Center),d(e.IconSmallId.AlignRight,
u.Right),d(e.IconSmallId.AlignJustify,u.Justify)]}))}Ya(a,b){b.createPropertyBarItem((b)=>b.button({id:"text-editor-listtype",weight:8,parent:e.PropertyBarId.Left,tooltip:h.I18n.ts("Bullet list"),icon:e.IconSmallId.BulletPoint,checked:a.ua===v.Bullet?e.CheckedState.checked:e.CheckedState.unchecked,onClick:(b)=>{this.setParagraphProps(b,"listtype",()=>({listType:a.ua===v.Bullet?v.None:v.Bullet}))}}));b.createPropertyBarItem((a)=>a.separator({id:"listtypet-separator",size:e.PropertyBarSeparatorSize.Small,
weight:8,parent:e.PropertyBarId.Left}))}Xa(a){a.createPropertyBarItem((a)=>a.button({id:"text-editor-decrease-indent",weight:10,parent:e.PropertyBarId.Left,tooltip:h.I18n.ts("Decrease indentation"),icon:e.IconSmallId.Outdent,onClick:(a)=>{this.setParagraphProps(a,"indent",(a)=>({indent:Math.max(0,a.indent-1)}))}}));a.createPropertyBarItem((a)=>a.button({id:"text-editor-increase-indent",weight:11,parent:e.PropertyBarId.Left,tooltip:h.I18n.ts("Increase indentation"),icon:e.IconSmallId.Indent,onClick:(a)=>
{this.setParagraphProps(a,"indent",(a)=>({indent:a.indent+1}))}}))}setParagraphProps(a,b,c){const d=this.session.selection.getTextSelectionInfo();this.u(a,"set"+b+"Cmd",(a)=>{this.j(a).forEach((b)=>{b.is(g.base.ObjectKind.text)&&(this.ma(a.toDecorator(b),(a)=>{this.da(a,d).getParagraphs().forEach((a)=>{const b=c(a.getParagraphProps());a.setAllParagraphProps(b)})}),this.o(b))})});null!=d&&this.session.selection.setTextSelection(a,d)}Ea(a,b){b=Object.assign(Object.assign({},a.i),b);return b.fontWeight===
g.base.FontWeight.Bold&&b.fontStyle===g.base.FontStyle.Italic?a.sa:b.fontWeight===g.base.FontWeight.Normal&&b.fontStyle===g.base.FontStyle.Italic?a.ta:b.fontWeight===g.base.FontWeight.Bold&&b.fontStyle===g.base.FontStyle.Normal?a.ra:b.fontWeight===g.base.FontWeight.Normal&&b.fontStyle===g.base.FontStyle.Normal?a.Ja:!1}setCharacterProps(a,b,c){this.Qa(a,c,(d,c,e)=>{this.u(a,"set"+b+"Cmd",(a)=>{this.Ka(a,d,c,e)})})}Ka(a,b,c,d){this.j(a).forEach((e)=>{if(e.is(g.base.ObjectKind.text)){var k=e.textBox.topLeft,
f=this.da(e,b);0<f.length&&f.setAllCharacterProps(c);f=e.position;e.position={x:f.x+(k.x-e.textBox.topLeft.x),y:f.y+(k.y-e.textBox.topLeft.y)};a.toDecorator(e).inEditFontSize=d.fontSize;this.o(e)}})}kb(a,b,c){this.Qa(a,c,(a,c,e)=>this.Ka(b,a,c,e))}Qa(a,b,c){var d=this.f.getState().i;if(null!=d){var e=this.session.selection.getTextSelectionInfo();b=b(d);if(this.Ea(this.f.getState(),b)){d=Object.assign(Object.assign({},d),b);var g=Object.assign(Object.assign({},this.f.getState().aa),b);c(e,b,d);null!=
e&&this.session.selection.setTextSelection(a,e);this.f.setState({i:d,aa:g})}}}u(a,b,c){return this.session.document.executeApiCommand(a,{name:b,run:(a)=>{const b=c(a);this.Da(a,r.ha);return b}})}o(a){p.avro.Avro.createDefaultLogger().logModifiedObject({object_type:"TEXT",modify_action:"STYLE_CHANGE",topic_relationship:a,object_id:a.id})}da(a,b){return null!=b&&b.id===a.id?a.getTextRange(b.offset,b.length):a}bb(){this.session.document.read((a)=>{this.f.setState({oa:new Map});a.styleSheet.styleSheets.forEach((a)=>
{if("zText"===a.typeName&&null!=a.className&&null!=a.styleBlock.text.font){const b=a.className,d=a.styleBlock;this.la.createPresetData(d.text.font.description,d.text.font.weight,d.text.font.style,d.fill&&d.fill.color,null!=d.text.background&&d.text.background.display?{a:d.text.background.alpha,color:d.text.background.color}:null,this.getFontSize(a.className),this.session.document.progressiveAssetManager,this.Na(b),216,48).then((a)=>{const d=this.f.getState();this.f.setState({oa:(new Map(d.oa)).set(b,
a)})}).catch(()=>{})}})})}Na(a){return n.has(a)?n.get(a).title:a.replace("_"," ")}eb(a){return new Map(a.styleSheet.fontDescriptions.filter((a)=>a.hasNormal).map((a)=>[a.fontFamily,a]))}ma(a,b){const c=a.textBox.topLeft;b(a);b=a.position;a.position={x:b.x+(c.x-a.textBox.topLeft.x),y:b.y+(c.y-a.textBox.topLeft.y)}}Aa(a,b,c){a=a.toDecorator(a.lookup.text(b));null!=a&&a.isPlaceholder&&(b=C.Geometry.distance(a.glyphBox.topLeft,a.glyphBox.topRight),a.set(q.v.Oa(),{jb:a.wrapWidth,ga:a.getTextWithStyle(),
pb:b}),0===a.wrapWidth&&(a.wrapWidth=b),a.isPlaceholder=!1,a.clearText());c=c(a);if(null!=a&&"\n"===a.getText()&&(b=a.get(q.v.Oa()),null!=b)){const d=a.getCharacterProps()[0];a.setTextWithStyle(b.ga);a.setAllCharacterProps(d);a.wrapWidth===b.pb&&(a.wrapWidth=b.jb);a.isPlaceholder=!0}return c}getCharacterProps(a,b,c){const d=b[0],e=this.da(d,c);b=null;b=0===e.length?d.id===c.id?0<c.offset&&"\n"===d.getText()[c.offset-1]?d.getTextRange(c.offset,1).getCharacterProps()[0]:d.getTextRange(Math.max(0,c.offset-
1),1).getCharacterProps()[0]:d.getTextRange(d.length-1,1).getCharacterProps()[0]:e.getCharacterProps()[e.length-1];a=a.styleSheet.styleSheets.find((a)=>a.className===d.textStyle&&(null==a.typeName||"zText"===a.typeName));c=b;null!=a&&(c={fontWeight:a.styleBlock.text.font.weight!==b.fontWeight?b.fontWeight:null,fontStyle:a.styleBlock.text.font.style!==b.fontStyle?b.fontStyle:null,color:this.nb(a.styleBlock.fill.color,b.color)?null:b.color,fontSize:b.fontSize});return{Fa:b,wa:c}}nb(a,b){return null==
a&&null==b||null!=a&&null!=b&&a.r===b.r&&a.g===b.g&&a.b===b.b}xa(a,b,c,d,g){let h=this.session.insertTarget.getSimpleObjectParent(b);const f=b.toDecorator(h.add.text());var k=this.session.coverEdit.getMode(b);let l=1;if(k.kind===e.CoverEditModeKind.Advanced||k.kind===e.CoverEditModeKind.InsideAdvanced)k=k.topic.layoutBox.withReferenceFrame(h.zoomLayoutBox.referenceFrame),f.position=k.center,l=k.size.width/h.zoomLayoutBox.size.width*1.5,f.scale(l);f.isPlaceholder=d;this.ka(b,f,(a)=>{this.fillText({textEditor:a,
ga:c,ib:!0,lb:l});d&&(a.position={x:a.position.x-a.textBox.size.width,y:a.position.y-a.textBox.size.height})});f.fitInto(this.session.positionFinder.findLayoutBox(h,1,1,g?g.stageX:null,g?g.stageY:null));this.session.selection.setSelection(a,[f]);p.avro.Avro.createDefaultLogger().logNewObject({object_type:f,topic_relationship:f,parent_type:f,object_id:f.id})}fillText({textEditor:a,ga:b,ib:c,offset:d,length:e,lb:g=1}){void 0===d&&(d=0);void 0===e&&(e=a.getText().length);0>=a.wrapWidth&&!a.isPlaceholder&&
(a.wrapWidth=600*g);const f=a.glyphBox.size.height;a.setText(b.text,d,e);null!=b.characterPropss&&0<b.characterPropss.length&&b.characterPropss.length===b.text.length&&a.getTextRange(d,b.text.length).setCharacterProps(b.characterPropss);b=Math.max(600*g,f);if(c||a.glyphBox.size.height>b)c=Math.sqrt(a.glyphBox.size.height/b),1>c&&(c/=.5),a.scale(1/c),a.wrapWidth*=c}ka(a,b,c){c(b);x.EditorCommander.createCounterpartUpdater(a).updateCounterpartTexts(b.id,x.UpdateOrigin.current);b.isPlaceholder&&(a=this.cb(b.getText()),
null!=a&&(h.I18n.getLanguage()===h.I18n.LANGUAGE_KOREAN&&a===this.Ia||h.I18n.getLanguage()===h.I18n.LANGUAGE_JAPANESE&&(a===this.Ha||a===this.Ga))&&b.updateFontToSupportCurrentLanguage())}cb(a){const b=a.length;for(let c=0;c<b;c++){const b=a.charCodeAt(c);if(12593<=b&&12643>=b||44032<=b&&55197>=b||-1!==this.mb.indexOf(b))return this.Ia;if(12288<=b&&12351>=b||12352<=b&&12447>=b||12448<=b&&12543>=b||65280<=b&&65519>=b)return this.Ha;if(19968<=b&&40879>=b)return this.Ga}return null}ja(a,b){for(const c of Object.keys(a)){const d=
a[c],e=b[c];if(d!==e&&(null==d||null==e||"object"!==typeof d||!this.ja(d,e)))return!1}return!0}ab(a,b){null!=a.va&&b.createMenuItem({id:"context-menu-update-preset",kind:e.MenuItemKind.context,title:h.I18n.ts("Update style preset")+(A.isActive("js-developer-features")?" (DEV: "+a.va+")":""),weight:69,onClick:(a)=>{this.session.document.executeApiCommand(a,{name:"update style preset",run:(a)=>{this.session.selection.getSelectionInfo(a).allObjects.forEach((a)=>{a.is(y.text)&&a.updatePresetStyle()})}})}})}getFontSize(a){return n.has(a)?
n.get(a).ea:1}ob(a){a=x.EditorCommander.createColorMixCommander().schemeFromPrezi(a.styleSheet);null!=a&&(a=a.colorScheme,null!=a&&null!=a.primaryTextColor&&null!=a.secondaryTextColor&&this.f.setState({fa:{id:"scheme-text-colors",title:h.I18n.ts("SCHEME TEXT COLORS"),weight:0,colors:[a.primaryTextColor.getRGBData(),a.secondaryTextColor.getRGBData()]}}))}};l={};Object.defineProperty(l,"__esModule",{value:!0});l.lazyModule={createPlugin(){return new q.v}};return l});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_text_editor",["require","prezi.geometry","prezi_cet_model","prezi_cet_model_editor","prezi_editor_commander","prezi_featureswitcher","prezi_font_provider","prezi_i18n","prezi_logger","prezi_plugin_api","prezi_plugin_meta","prezi_service_fontcatalogue","prezi_utils","prezi_widgets"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_text_editor.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi.geometry"),require("prezi_cet_model"),require("prezi_cet_model_editor"),require("prezi_editor_commander"),require("prezi_featureswitcher"),require("prezi_font_provider"),require("prezi_i18n"),require("prezi_logger"),require("prezi_plugin_api"),require("prezi_plugin_meta"),require("prezi_service_fontcatalogue"),require("prezi_utils"),require("prezi_widgets"));}else{this["prezi_text_editor"]=__factory(this["prezi.geometry"],this["prezi_cet_model"],this["prezi_cet_model_editor"],this["prezi_editor_commander"],this["prezi_featureswitcher"],this["prezi_font_provider"],this["prezi_i18n"],this["prezi_logger"],this["prezi_plugin_api"],this["prezi_plugin_meta"],this["prezi_service_fontcatalogue"],this["prezi_utils"],this["prezi_widgets"]);}}).call(this);
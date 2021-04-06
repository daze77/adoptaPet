;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-25-g6015dbc";},getModuleName:function(){return "prezi_font_provider";},getModuleVersion:function(){return "release-2021w06-base-26-gaeb382e";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi.geometry":dependencies[0],"prezi_cet_model_editor":dependencies[1],"prezi_editor_commander":dependencies[2],"prezi_featureswitcher":dependencies[3],"prezi_logger":dependencies[4],"prezi_plugin_api":dependencies[5],"prezi_service_fontcatalogue":dependencies[6],"prezi_utils":dependencies[7]}};})());};})(arguments);var moduleImpl=(function(){return module(function(n){var v=n.dependencies.prezi_editor_commander,x=n.dependencies.prezi_utils,f=n.dependencies.prezi_service_fontcatalogue,t=n.dependencies.prezi_logger,m={},z=this&&m.aa||function(a,b,c,d){function e(a){return a instanceof c?a:new c(function(b){b(a)})}return new (c||(c=Promise))(function(g,c){function f(a){try{l(d.next(a))}catch(h){c(h)}}function y(a){try{l(d["throw"](a))}catch(h){c(h)}}function l(a){a.done?g(a.value):e(a.value).then(f,y)}l((d=d.apply(a,b||[])).next())})};Object.defineProperty(m,
"__esModule",{value:!0});m.$=class{fa(){return z(this,void 0,void 0,function*(){var a=yield(yield fetch("https://fonts.prezi.com/metadata/public-font-index.json",{cache:"no-cache"})).json();a=Object.values(a).filter((a)=>this.ia(a)).map((a)=>this.ca(a));if(0<a.length)return a;throw Error("not found any valid fonts");})}ia(a){const {fontFamily:b,fontFaces:c,category:d,subsets:e,thumbnails:g}=a;return"string"!==typeof b||Object.values(k.FontCategory).every((a)=>a!==d)||!Array.isArray(e)||e.some((a)=>
Object.values(k.FontScript).every((b)=>b!==a))||!Array.isArray(c)||"string"!==typeof(null===g||void 0===g?void 0:g.default)||"string"!==typeof(null===g||void 0===g?void 0:g.quickBrownFox)?(console.warn(`font ${b} is not valid: ${a}`),!1):!0}ca(a){const {fontFamily:b,displayName:c,origin:d,license:e,fontFaces:g}=a;return{fontFamily:b,displayName:c,category:a.category,subsets:a.subsets,origin:d,license:e,fontFaces:g,thumbnailUrls:{default:"https://fonts.prezi.com/svg/"+a.thumbnails.default,quickBrownFox:"https://fonts.prezi.com/svg/"+
a.thumbnails.quickBrownFox}}}};var p={};Object.defineProperty(p,"__esModule",{value:!0});p.i=class{constructor(a){this.service=a}getUserFontSelection(){return this.service.read("GET",[],{})}saveUserFontSelection(a){return this.service.access("POST",[],{},a)}};p.i.ba=["api","v4","usersettings","selected_fonts"];var q={},r=this&&q.aa||function(a,b,c,d){function e(a){return a instanceof c?a:new c(function(b){b(a)})}return new (c||(c=Promise))(function(c,f){function g(a){try{l(d.next(a))}catch(h){f(h)}}
function k(a){try{l(d["throw"](a))}catch(h){f(h)}}function l(a){a.done?c(a.value):e(a.value).then(g,k)}l((d=d.apply(a,b||[])).next())})};Object.defineProperty(q,"__esModule",{value:!0});q.w=class{constructor(a){this.fonts={status:"loading"};this.o=[];this.f=[];this.v=[];this.logger=t.LoggerModule.getLoggerManager().createLogger("FontProviderImpl");this.da=new m.$;this.u=a.service(p.i.ba,(a)=>new p.i(a));this.ea();this.ga()}getFontCatalogue(){switch(this.fonts.status){case "ok":return{status:"ok",
catalogue:Array.from(this.fonts.catalogue.values())};default:return this.fonts}}onFontCatalogueChange(a){this.o.push(a)}ha(){const a=this.getFontCatalogue();this.o.forEach((b)=>b(a))}getUserSelectedFonts(){if("ok"===this.fonts.status){const a=this.fonts.catalogue;return(0<this.f.length?[...this.f].sort((a,c)=>a.localeCompare(c)):f.getBuiltinFontDescriptionsOrderedByName().map((a)=>a.fontFamily)).filter((b)=>a.has(b)).map((b)=>a.get(b)).map((a)=>this.createFontDescriptionFromMetadata(a))}return f.getBuiltinFontDescriptionsOrderedByName()}onUserSelectedFontsChange(a){this.v.push(a)}createFontPresetData(a,
b){return"ok"===this.fonts.status&&this.fonts.catalogue.has(a.fontFamily)?(a=this.fonts.catalogue.get(a.fontFamily),Promise.resolve({imageUrl:a.thumbnailUrls.default,hasLightColor:!1})):this.createPresetData(a,f.FontWeight.Normal,f.FontStyle.Normal,{r:0,g:0,b:0},null,1,b,a.fontFamily,180,36)}j(){const a=this.getUserSelectedFonts();this.v.forEach((b)=>b(a))}ea(){r(this,void 0,void 0,function*(){try{const a=yield this.da.fa();this.fonts={status:"ok",catalogue:new Map(a.map((a)=>[a.fontFamily,a]))}}catch(a){this.fonts=
{status:"error"},t.LoggerModule.logException(this.logger,"font_provider","catalogue_load_failed",a)}this.ha();this.j()})}createFontDescriptionFromMetadata(a){const b=a.fontFaces.find((a)=>a.style===f.FontStyle.Normal&&a.weight===f.FontWeight.Normal),c=a.fontFaces.find((a)=>a.style===f.FontStyle.Normal&&a.weight===f.FontWeight.Bold),d=a.fontFaces.find((a)=>a.style===f.FontStyle.Italic&&a.weight===f.FontWeight.Normal),e=a.fontFaces.find((a)=>a.style===f.FontStyle.Italic&&a.weight===f.FontWeight.Bold);
return{fontFamily:a.fontFamily,hasNormal:null!=b,hasBold:null!=c,hasItalic:null!=d,hasBoldItalic:null!=e,normalKeg:null===b||void 0===b?void 0:b.file,boldKeg:null===c||void 0===c?void 0:c.file,italicKeg:null===d||void 0===d?void 0:d.file,boldItalicKeg:null===e||void 0===e?void 0:e.file,imageUri:a.thumbnailUrls.default}}ga(){r(this,void 0,void 0,function*(){this.f=yield this.u.getUserFontSelection();this.j()})}saveUserFontSelection(a){return r(this,void 0,void 0,function*(){yield this.u.saveUserFontSelection(a);
this.f=a;this.j()})}createPresetData(a,b,c,d,e,f,k,p,n,l){return r(this,void 0,void 0,function*(){var g=(yield(yield k.downloadFont(a)).getCompatibleDrawer(b,c)).getPath(p,0,0,100),h=g.getBoundingBox();g=g.drawSvg();var m=h.x2-h.x1;h=h.y2-h.y1;const u=.15*m;m+=u;const q=h+u,r=null==e?null:`rgba(${e.color.r}, ${e.color.g}, ${e.color.b}, ${e.a})`,w=.75*Math.min(n/m,l/q)*f,t=null==d?"black":v.toCssColor(d);g=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${[0,0,n,l]}" height="${l}" width="${n}">
					${`<g
					${null==t?"":`fill="${t}"`}
					transform="translate(${null==e?0:u/2*w},${(l-w*h)/2}) scale(${w})"
				>
					${null==r?"":`<rect
						x="${-u/2}"
						y="${-u/2}"
						width="${m}"
						height="${q}"
						fill="${r}" />`}
					${g}
				</g>`}
				</svg>`;h=null!=e?v.hasLightColor(e.color,e.a):null!=d?v.hasLightColor(d,1):!1;return{imageUrl:x.Utils.svgToUrl(g),hasLightColor:h}})}};var k={};Object.defineProperty(k,"__esModule",{value:!0});(function(a){a.SansSerif="sansSerif";a.Serif="serif";a.Display="display";a.Handwriting="handwriting";a.Monospace="monospace"})(k.FontCategory||(k.FontCategory={}));(function(a){a.Arabic="Arabic";a.Bengali="Bengali";a.ChineseHongKong="ChineseHongKong";a.ChineseSimplified="ChineseSimplified";a.ChineseTraditional=
"ChineseTraditional";a.Cyrillic="Cyrillic";a.CyrillicExtended="CyrillicExtended";a.Devanagari="Devanagari";a.Ethiopic="Ethiopic";a.Greek="Greek";a.GreekExtended="GreekExtended";a.Gujarati="Gujarati";a.Gurmukhi="Gurmukhi";a.Hebrew="Hebrew";a.Japanese="Japanese";a.Kannada="Kannada";a.Khmer="Khmer";a.Korean="Korean";a.Lao="Lao";a.Latin="Latin";a.LatinExtended="LatinExtended";a.Malayalam="Malayalam";a.Myanmar="Myanmar";a.Oriya="Oriya";a.Sinhala="Sinhala";a.Tamil="Tamil";a.Telugu="Telugu";a.Thai="Thai";
a.Tibetan="Tibetan";a.Vietnamese="Vietnamese"})(k.FontScript||(k.FontScript={}));(function(a){let b;a.getFontProvider=function(a){null==b&&(b=new q.w(a));return b}})(k.FontProviderModule||(k.FontProviderModule={}));return k});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_font_provider",["require","prezi.geometry","prezi_cet_model_editor","prezi_editor_commander","prezi_featureswitcher","prezi_logger","prezi_plugin_api","prezi_service_fontcatalogue","prezi_utils"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_font_provider.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi.geometry"),require("prezi_cet_model_editor"),require("prezi_editor_commander"),require("prezi_featureswitcher"),require("prezi_logger"),require("prezi_plugin_api"),require("prezi_service_fontcatalogue"),require("prezi_utils"));}else{this["prezi_font_provider"]=__factory(this["prezi.geometry"],this["prezi_cet_model_editor"],this["prezi_editor_commander"],this["prezi_featureswitcher"],this["prezi_logger"],this["prezi_plugin_api"],this["prezi_service_fontcatalogue"],this["prezi_utils"]);}}).call(this);
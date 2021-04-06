;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-25-g6015dbc";},getModuleName:function(){return "prezi_ace_editor";},getModuleVersion:function(){return "release-2021w06-base-26-gaeb382e";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{}};})());};})(arguments);var moduleImpl=(function(){return module(function(Spaghetti) {
var prezi_ace_editor=null;
var module$Ace_module$default = {};
Object.defineProperty(module$Ace_module$default, "__esModule", {value:true});
(function(AceModule) {
  function create(source, callback) {
    require([Spaghetti.getResourceUrl("ace/ace.js")], () => {
      const editor = ace.edit(source);
      callback(editor);
    });
  }
  AceModule.create = create;
})(module$Ace_module$default.AceModule || (module$Ace_module$default.AceModule = {}));
prezi_ace_editor = module$Ace_module$default;


return prezi_ace_editor;

})

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_ace_editor",["require"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_ace_editor.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)();}else{this["prezi_ace_editor"]=__factory();}}).call(this);
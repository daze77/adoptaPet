;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-25-g6015dbc";},getModuleName:function(){return "prezi_bbpptximportapitypes";},getModuleVersion:function(){return "release-2021w06-base-26-gaeb382e";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{}};})());};})(arguments);var moduleImpl=(function(){return module(function(){var b={};Object.defineProperty(b,"__esModule",{value:!0});(function(a){a=a.ImportStatusEnum||(a.ImportStatusEnum={});a[a.InProgress="inProgress"]="InProgress";a[a.Done="done"]="Done"})(b.ModelImport||(b.ModelImport={}));(function(a){a=a.AlignEnum||(a.AlignEnum={});a[a.Left="left"]="Left";a[a.Center="center"]="Center";a[a.Right="right"]="Right";a[a.Justify="justify"]="Justify"})(b.Paragraph||(b.Paragraph={}));(function(a){a=a.FormatEnum||(a.FormatEnum={});a[a.Ppt="ppt"]="Ppt";a[a.Pptx=
"pptx"]="Pptx"})(b.PowerPointStructure||(b.PowerPointStructure={}));return b});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_bbpptximportapitypes",["require"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_bbpptximportapitypes.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)();}else{this["prezi_bbpptximportapitypes"]=__factory();}}).call(this);
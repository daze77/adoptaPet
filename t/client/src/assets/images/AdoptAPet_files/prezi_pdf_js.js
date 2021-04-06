;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-25-g6015dbc";},getModuleName:function(){return "prezi_pdf_js";},getModuleVersion:function(){return "release-2021w06-base-26-gaeb382e";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{}};})());};})(arguments);var moduleImpl=(function(){return module(function(Spaghetti) {
var prezi_pdf_js=null;
var module$PdfJsModule$default = {};
module$PdfJsModule$default.load = function(callback) {
  if (require.config) {
    require.config({paths:{"pdfjs-dist":Spaghetti.getResourceUrl("pdfjs-dist")}});
    require(["pdfjs-dist/build/pdf"], (pdf) => {
      pdfjsLib = pdf;
      pdfjsLib.GlobalWorkerOptions.workerSrc = Spaghetti.getResourceUrl("pdfjs-dist/build/pdf.worker.js");
      callback(pdfjsLib);
    });
  } else {
    const window = global.window;
    global.window = undefined;
    const _require = require;
    try {
      pdfjsLib = _require("pdfjs-dist");
    } finally {
      global.window = window;
    }
    callback(pdfjsLib);
  }
};
module$PdfJsModule$default.pageView = function(page) {
  return page["view"];
};
Object.defineProperty(module$PdfJsModule$default, "__esModule", {value:true});
var module$api$PdfJs_module$default = {};
Object.defineProperty(module$api$PdfJs_module$default, "__esModule", {value:true});
module$api$PdfJs_module$default.PdfJsModule = module$PdfJsModule$default;
prezi_pdf_js = module$api$PdfJs_module$default;


return prezi_pdf_js;

})

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_pdf_js",["require"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_pdf_js.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)();}else{this["prezi_pdf_js"]=__factory();}}).call(this);
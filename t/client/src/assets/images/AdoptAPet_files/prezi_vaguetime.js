;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-25-g6015dbc";},getModuleName:function(){return "prezi_vaguetime";},getModuleVersion:function(){return "release-2021w06-base-26-gaeb382e";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi_i18n":dependencies[0]}};})());};})(arguments);var moduleImpl=(function(){return module(function(Spaghetti) {
var prezi_vaguetime=null;
var prezi_i18n=Spaghetti["dependencies"]["prezi_i18n"];
var module$node_modules$prezi_i18n$default = prezi_i18n;
var module$PreziVagueTimeModule$default = {};
Object.defineProperty(module$PreziVagueTimeModule$default, "__esModule", {value:true});
const PHRASES$$module$PreziVagueTimeModule = {default:{past:() => module$node_modules$prezi_i18n$default.I18n.ts("just now"), future:() => module$node_modules$prezi_i18n$default.I18n.ts("soon")}, year:{singular:{past:() => module$node_modules$prezi_i18n$default.I18n.ts("one year ago"), future:() => module$node_modules$prezi_i18n$default.I18n.ts("in a year")}, plural:{past:(t) => module$node_modules$prezi_i18n$default.I18n.tsFormat("{} years ago", String(t)), future:(t) => module$node_modules$prezi_i18n$default.I18n.tsFormat("in {} years", 
String(t))}}, month:{singular:{past:() => module$node_modules$prezi_i18n$default.I18n.ts("one month ago"), future:() => module$node_modules$prezi_i18n$default.I18n.ts("in a month")}, plural:{past:(t) => module$node_modules$prezi_i18n$default.I18n.tsFormat("{} months ago", String(t)), future:(t) => module$node_modules$prezi_i18n$default.I18n.tsFormat("in {} months", String(t))}}, week:{singular:{past:() => module$node_modules$prezi_i18n$default.I18n.ts("one week ago"), future:() => module$node_modules$prezi_i18n$default.I18n.ts("in a week")}, 
plural:{past:(t) => module$node_modules$prezi_i18n$default.I18n.tsFormat("{} weeks ago", String(t)), future:(t) => module$node_modules$prezi_i18n$default.I18n.tsFormat("in {} weeks", String(t))}}, day:{singular:{past:() => module$node_modules$prezi_i18n$default.I18n.ts("one day ago"), future:() => module$node_modules$prezi_i18n$default.I18n.ts("in a day")}, plural:{past:(t) => module$node_modules$prezi_i18n$default.I18n.tsFormat("{} days ago", String(t)), future:(t) => module$node_modules$prezi_i18n$default.I18n.tsFormat("in {} days", 
String(t))}}, hour:{singular:{past:() => module$node_modules$prezi_i18n$default.I18n.ts("one hour ago"), future:() => module$node_modules$prezi_i18n$default.I18n.ts("in an hour")}, plural:{past:(t) => module$node_modules$prezi_i18n$default.I18n.tsFormat("{} hours ago", String(t)), future:(t) => module$node_modules$prezi_i18n$default.I18n.tsFormat("in {} hours", String(t))}}, minute:{singular:{past:() => module$node_modules$prezi_i18n$default.I18n.ts("one minute ago"), future:() => module$node_modules$prezi_i18n$default.I18n.ts("in a minute")}, 
plural:{past:(t) => module$node_modules$prezi_i18n$default.I18n.tsFormat("{} minutes ago", String(t)), future:(t) => module$node_modules$prezi_i18n$default.I18n.tsFormat("in {} minutes", String(t))}}};
const TIMES$$module$PreziVagueTimeModule = [[PHRASES$$module$PreziVagueTimeModule.year, 31557600000], [PHRASES$$module$PreziVagueTimeModule.month, 2629800000], [PHRASES$$module$PreziVagueTimeModule.week, 604800000], [PHRASES$$module$PreziVagueTimeModule.day, 86400000], [PHRASES$$module$PreziVagueTimeModule.hour, 3600000], [PHRASES$$module$PreziVagueTimeModule.minute, 60000]];
module$PreziVagueTimeModule$default.PreziVagueTimeModule = class {
  static get(options) {
    const units = module$PreziVagueTimeModule$default.PreziVagueTimeModule.normaliseUnits(options.units);
    const now = Date.now();
    const from = module$PreziVagueTimeModule$default.PreziVagueTimeModule.normaliseTime(options.from, units, now);
    const to = module$PreziVagueTimeModule$default.PreziVagueTimeModule.normaliseTime(options.to, units, now);
    let difference = from - to;
    let isPast;
    if (difference >= 0) {
      isPast = true;
    } else {
      isPast = false;
      difference = -difference;
    }
    return module$PreziVagueTimeModule$default.PreziVagueTimeModule.estimate(difference, isPast);
  }
  static normaliseUnits(units) {
    if (typeof units == null) {
      return module$api$PreziVagueTime_module$default.PreziVagueTimeModuleUnits.MilliSec;
    }
    return units;
  }
  static normaliseTime(time, units, defaultTime) {
    if (time == null) {
      return defaultTime;
    }
    if (units === module$api$PreziVagueTime_module$default.PreziVagueTimeModuleUnits.Second) {
      time *= 1000;
    }
    return time;
  }
  static estimate(difference, isPast) {
    for (let pair of TIMES$$module$PreziVagueTimeModule) {
      const phrases = pair[0];
      const timeUnit = pair[1];
      if (difference >= timeUnit) {
        const vagueTime = Math.floor(difference / timeUnit);
        const tenses = vagueTime > 1 ? phrases.plural : phrases.singular;
        return (isPast ? tenses.past : tenses.future)(vagueTime);
      }
    }
    return (isPast ? PHRASES$$module$PreziVagueTimeModule.default.past : PHRASES$$module$PreziVagueTimeModule.default.future)(0);
  }
};
var module$api$PreziVagueTime_module$default = {};
Object.defineProperty(module$api$PreziVagueTime_module$default, "__esModule", {value:true});
(function(PreziVagueTimeModuleUnits) {
  PreziVagueTimeModuleUnits[PreziVagueTimeModuleUnits.Second=0]="Second";
  PreziVagueTimeModuleUnits[PreziVagueTimeModuleUnits.MilliSec=1]="MilliSec";
})(module$api$PreziVagueTime_module$default.PreziVagueTimeModuleUnits || (module$api$PreziVagueTime_module$default.PreziVagueTimeModuleUnits = {}));
function get$$module$api$PreziVagueTime_module(options) {
  return module$PreziVagueTimeModule$default.PreziVagueTimeModule.get(options);
}
module$api$PreziVagueTime_module$default.get = get$$module$api$PreziVagueTime_module;
prezi_vaguetime = module$api$PreziVagueTime_module$default;


return prezi_vaguetime;

})

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_vaguetime",["require","prezi_i18n"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_vaguetime.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi_i18n"));}else{this["prezi_vaguetime"]=__factory(this["prezi_i18n"]);}}).call(this);
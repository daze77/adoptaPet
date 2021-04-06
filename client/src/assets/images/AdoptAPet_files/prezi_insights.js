;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-25-g6015dbc";},getModuleName:function(){return "prezi_insights";},getModuleVersion:function(){return "release-2021w06-base-26-gaeb382e";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi_featureswitcher":dependencies[0],"prezi_logger":dependencies[1],"prezi_utils":dependencies[2]}};})());};})(arguments);var moduleImpl=(function(){return module(function(Spaghetti) {
var prezi_insights=null;
var prezi_featureswitcher=Spaghetti["dependencies"]["prezi_featureswitcher"];
var prezi_logger=Spaghetti["dependencies"]["prezi_logger"];
var prezi_utils=Spaghetti["dependencies"]["prezi_utils"];
var module$node_modules$prezi_featureswitcher$default = prezi_featureswitcher;
var module$node_modules$prezi_logger$default = prezi_logger;
var module$node_modules$prezi_utils$default = prezi_utils;
var module$PreziInsights$default = {};
Object.defineProperty(module$PreziInsights$default, "__esModule", {value:true});
module$PreziInsights$default.PreziInsightsImpl = class {
  static init(newSessionId) {
    if (module$node_modules$prezi_featureswitcher$default.isActive("js-track-insights") && !!module$PreziInsights$default.PreziInsightsImpl.URL_UTILS.getTrackingOid()) {
      module$PreziInsights$default.PreziInsightsImpl.logger = module$node_modules$prezi_logger$default.LoggerModule.getLoggerManager().createLogger("PreziInsights");
      module$PreziInsights$default.PreziInsightsImpl.sessionId = newSessionId;
      const logEntryStream = module$node_modules$prezi_logger$default.LoggerModule.getLoggerManager().getLogEntryStream();
      logEntryStream.filter((logEntry) => !!logEntry.track_insights).onValue((logEntry) => {
        module$PreziInsights$default.PreziInsightsImpl.stopActivityTimer();
        module$PreziInsights$default.PreziInsightsImpl.updateActivityTime();
        switch(logEntry.track_insights.event) {
          case module$api$Insights_module$default.InsighstEvent.LOADED:
            module$PreziInsights$default.PreziInsightsImpl.activeTimeInSec = 0;
            module$PreziInsights$default.PreziInsightsImpl.pathStepCount = logEntry.track_insights.path_step_count;
            break;
          case module$api$Insights_module$default.InsighstEvent.STARTED:
            module$PreziInsights$default.PreziInsightsImpl.isPresentationStarted = true;
            module$PreziInsights$default.PreziInsightsImpl.logActivityOnCurrentStep();
            module$PreziInsights$default.PreziInsightsImpl.startActivityTimer();
            module$PreziInsights$default.PreziInsightsImpl.replenishActiveTimePool();
            break;
          case module$api$Insights_module$default.InsighstEvent.PREV_STEP:
            module$PreziInsights$default.PreziInsightsImpl.pathStepCount = logEntry.track_insights.path_step_count;
            module$PreziInsights$default.PreziInsightsImpl.logStepChange(logEntry);
            module$PreziInsights$default.PreziInsightsImpl.startActivityTimer();
            module$PreziInsights$default.PreziInsightsImpl.replenishActiveTimePool();
            break;
          case module$api$Insights_module$default.InsighstEvent.NEXT_STEP:
            module$PreziInsights$default.PreziInsightsImpl.pathStepCount = logEntry.track_insights.path_step_count;
            module$PreziInsights$default.PreziInsightsImpl.logStepChange(logEntry);
            module$PreziInsights$default.PreziInsightsImpl.startActivityTimer();
            module$PreziInsights$default.PreziInsightsImpl.replenishActiveTimePool();
            break;
          case module$api$Insights_module$default.InsighstEvent.SEEKBAR:
            module$PreziInsights$default.PreziInsightsImpl.pathStepCount = logEntry.track_insights.path_step_count;
            module$PreziInsights$default.PreziInsightsImpl.logStepChange(logEntry);
            module$PreziInsights$default.PreziInsightsImpl.startActivityTimer();
            module$PreziInsights$default.PreziInsightsImpl.replenishActiveTimePool();
            break;
          case module$api$Insights_module$default.InsighstEvent.CONVERSATIONAL:
            module$PreziInsights$default.PreziInsightsImpl.pathStepCount = logEntry.track_insights.path_step_count;
            module$PreziInsights$default.PreziInsightsImpl.logStepChange(logEntry);
            module$PreziInsights$default.PreziInsightsImpl.startActivityTimer();
            module$PreziInsights$default.PreziInsightsImpl.replenishActiveTimePool();
            break;
          case module$api$Insights_module$default.InsighstEvent.ACTIVE:
            if (module$PreziInsights$default.PreziInsightsImpl.isPresentationStarted) {
              module$PreziInsights$default.PreziInsightsImpl.activeTimeInSec = 0;
              module$PreziInsights$default.PreziInsightsImpl.logActivityOnCurrentStep();
              module$PreziInsights$default.PreziInsightsImpl.startActivityTimer();
            }
            break;
          case module$api$Insights_module$default.InsighstEvent.INACTIVE:
            module$PreziInsights$default.PreziInsightsImpl.logActivityOnCurrentStep();
            break;
          case module$api$Insights_module$default.InsighstEvent.CLOSE:
            module$PreziInsights$default.PreziInsightsImpl.logActivityOnCurrentStep();
        }
        module$PreziInsights$default.PreziInsightsImpl.lastLoggedActivityTimeStamp = module$PreziInsights$default.PreziInsightsImpl.activityTimeStamp;
      });
    }
  }
  static replenishActiveTimePool() {
    module$PreziInsights$default.PreziInsightsImpl.activeTimePoolInSec = module$PreziInsights$default.PreziInsightsImpl.MAX_ACTIVE_TIME_POOL_SEC;
    module$PreziInsights$default.PreziInsightsImpl.startActivityTimer();
  }
  static drainActiveTimePool(sec) {
    module$PreziInsights$default.PreziInsightsImpl.activeTimePoolInSec -= sec;
    if (module$PreziInsights$default.PreziInsightsImpl.activeTimePoolInSec < 0) {
      module$PreziInsights$default.PreziInsightsImpl.stopActivityTimer();
    }
  }
  static logStepChange(logEntry) {
    module$PreziInsights$default.PreziInsightsImpl.isPresentationStarted = true;
    module$PreziInsights$default.PreziInsightsImpl.currentPosition = logEntry.track_insights.current_step_number;
    module$PreziInsights$default.PreziInsightsImpl.logActivityOnCurrentStep();
    module$PreziInsights$default.PreziInsightsImpl.currentPosition = logEntry.track_insights.following_step_number;
  }
  static logActivityOnCurrentStep() {
    if (module$PreziInsights$default.PreziInsightsImpl.isPresentationStarted) {
      module$PreziInsights$default.PreziInsightsImpl.sendViewEvent({tracking_oid:module$PreziInsights$default.PreziInsightsImpl.URL_UTILS.getTrackingOid(), session_id:module$PreziInsights$default.PreziInsightsImpl.sessionId, current_step_number:module$PreziInsights$default.PreziInsightsImpl.currentPosition, total_step_count:module$PreziInsights$default.PreziInsightsImpl.pathStepCount, active_time:Math.max(0, Math.min(module$PreziInsights$default.PreziInsightsImpl.activeTimeInSec, module$PreziInsights$default.PreziInsightsImpl.activeTimePoolInSec))});
      module$PreziInsights$default.PreziInsightsImpl.drainActiveTimePool(module$PreziInsights$default.PreziInsightsImpl.activeTimeInSec);
    }
  }
  static startActivityTimer() {
    if (module$PreziInsights$default.PreziInsightsImpl.activeTimePoolInSec > 0) {
      if (module$PreziInsights$default.PreziInsightsImpl.activityTimerHandler == null) {
        module$PreziInsights$default.PreziInsightsImpl.lastLoggedActivityTimeStamp = Date.now();
        module$PreziInsights$default.PreziInsightsImpl.activityTimerHandler = window.setInterval(() => {
          module$PreziInsights$default.PreziInsightsImpl.updateActivityTime();
          module$PreziInsights$default.PreziInsightsImpl.logActivityOnCurrentStep();
          module$PreziInsights$default.PreziInsightsImpl.lastLoggedActivityTimeStamp = module$PreziInsights$default.PreziInsightsImpl.activityTimeStamp;
        }, module$PreziInsights$default.PreziInsightsImpl.ACTIVE_LOG_INTERVAL);
      }
    }
  }
  static stopActivityTimer() {
    if (module$PreziInsights$default.PreziInsightsImpl.activityTimerHandler != null) {
      clearInterval(module$PreziInsights$default.PreziInsightsImpl.activityTimerHandler);
      module$PreziInsights$default.PreziInsightsImpl.activityTimerHandler = null;
    }
  }
  static updateActivityTime() {
    module$PreziInsights$default.PreziInsightsImpl.activityTimeStamp = Date.now();
    module$PreziInsights$default.PreziInsightsImpl.activeTimeInSec = !!module$PreziInsights$default.PreziInsightsImpl.lastLoggedActivityTimeStamp ? (module$PreziInsights$default.PreziInsightsImpl.activityTimeStamp - module$PreziInsights$default.PreziInsightsImpl.lastLoggedActivityTimeStamp) / 1000 : 0;
  }
  static sendViewEvent(viewEvent) {
    module$PreziInsights$default.PreziInsightsImpl.logger.info({action:"log_view_event", object:"path_step_time_increment", trigger:"insight", payload:{"time_on_path_step":viewEvent.active_time, "path_step":viewEvent.current_step_number}});
    $.ajax({url:module$PreziInsights$default.PreziInsightsImpl.API_ADD_VIEW_EVENT_URL, method:"POST", data:JSON.stringify(viewEvent), contentType:"application/json; charset=utf-8", dataType:"json"});
  }
};
module$PreziInsights$default.PreziInsightsImpl.ACTIVE_LOG_INTERVAL = 10000;
module$PreziInsights$default.PreziInsightsImpl.API_ADD_VIEW_EVENT_URL = "/api/v1/insights/view-event/";
module$PreziInsights$default.PreziInsightsImpl.URL_UTILS = module$node_modules$prezi_utils$default.Utils.createUrlUtils();
module$PreziInsights$default.PreziInsightsImpl.MAX_ACTIVE_TIME_POOL_SEC = 60;
module$PreziInsights$default.PreziInsightsImpl.currentPosition = 0;
module$PreziInsights$default.PreziInsightsImpl.pathStepCount = 0;
module$PreziInsights$default.PreziInsightsImpl.activityTimerHandler = 0;
module$PreziInsights$default.PreziInsightsImpl.lastLoggedActivityTimeStamp = 0;
module$PreziInsights$default.PreziInsightsImpl.activityTimeStamp = 0;
module$PreziInsights$default.PreziInsightsImpl.activeTimeInSec = 0;
module$PreziInsights$default.PreziInsightsImpl.activeTimePoolInSec = module$PreziInsights$default.PreziInsightsImpl.MAX_ACTIVE_TIME_POOL_SEC;
module$PreziInsights$default.PreziInsightsImpl.isPresentationStarted = false;
var module$api$Insights_module$default = {};
Object.defineProperty(module$api$Insights_module$default, "__esModule", {value:true});
(function(InsighstEvent) {
  InsighstEvent.ACTIVE = "visible";
  InsighstEvent.INACTIVE = "hidden";
  InsighstEvent.CLOSE = "close";
  InsighstEvent.LOADED = "loaded";
  InsighstEvent.NEXT_STEP = "next_step";
  InsighstEvent.PREV_STEP = "previous_step";
  InsighstEvent.SEEKBAR = "seekbar_navigation";
  InsighstEvent.CONVERSATIONAL = "conversational";
  InsighstEvent.STARTED = "started";
})(module$api$Insights_module$default.InsighstEvent || (module$api$Insights_module$default.InsighstEvent = {}));
module$api$Insights_module$default.PreziInsights = module$PreziInsights$default.PreziInsightsImpl;
prezi_insights = module$api$Insights_module$default;


return prezi_insights;

})

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_insights",["require","prezi_featureswitcher","prezi_logger","prezi_utils"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_insights.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi_featureswitcher"),require("prezi_logger"),require("prezi_utils"));}else{this["prezi_insights"]=__factory(this["prezi_featureswitcher"],this["prezi_logger"],this["prezi_utils"]);}}).call(this);
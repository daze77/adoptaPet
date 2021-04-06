;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "8.0.3";},getModuleName:function(){return "prezi.sockjs";},getModuleVersion:function(){return "1.0-32-gfe7435f_155";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{}};})());};})(arguments);var moduleImpl=(function(){return module(function(Spaghetti) {
'use strict';
var prezi=(prezi||{});
prezi.sockjs=null;

/*
 * .
 */
var prezi;
(function (prezi) {
    var sockjs;
    (function (sockjs) {
        var Transport;
        (function (Transport) {
            Transport[Transport.WEBSOCKET = 0] = "WEBSOCKET";
            Transport[Transport.XHR_STREAMING = 1] = "XHR_STREAMING";
            Transport[Transport.XDR_STREAMING = 2] = "XDR_STREAMING";
            Transport[Transport.EVENTSOURCE = 3] = "EVENTSOURCE";
            Transport[Transport.IFRAME_EVENTSOURCE = 4] = "IFRAME_EVENTSOURCE";
            Transport[Transport.HTMLFILE = 5] = "HTMLFILE";
            Transport[Transport.IFRAME_HTMLFILE = 6] = "IFRAME_HTMLFILE";
            Transport[Transport.XHR_POLLING = 7] = "XHR_POLLING";
            Transport[Transport.XDR_POLLING = 8] = "XDR_POLLING";
            Transport[Transport.IFRAME_XHR_POLLING = 9] = "IFRAME_XHR_POLLING";
            Transport[Transport.JSONP_POLLING = 10] = "JSONP_POLLING";
        })(Transport = sockjs.Transport || (sockjs.Transport = {}));
        var __SockJsModuleProxy = (function () {
            function __SockJsModuleProxy() {
                this.Transport = prezi.sockjs.Transport;
            }
            __SockJsModuleProxy.prototype.createSockJsConnection = function (endpoint, transports) {
                return prezi.sockjs.SockJsModule.createSockJsConnection(endpoint, transports);
            };
            return __SockJsModuleProxy;
        }());
        sockjs.__SockJsModuleProxy = __SockJsModuleProxy;
        function __createSpaghettiModule() {
            return new prezi.sockjs.__SockJsModuleProxy();
        }
        sockjs.__createSpaghettiModule = __createSpaghettiModule;
    })(sockjs = prezi.sockjs || (prezi.sockjs = {}));
})(prezi || (prezi = {}));
var prezi;
(function (prezi) {
    var sockjs;
    (function (sockjs_1) {
        var transportMap = {
            "websocket": sockjs_1.Transport.WEBSOCKET,
            "xhr-streaming": sockjs_1.Transport.XHR_STREAMING,
            "xdr-streaming": sockjs_1.Transport.XDR_POLLING,
            "eventsource": sockjs_1.Transport.EVENTSOURCE,
            "iframe-eventsource": sockjs_1.Transport.IFRAME_EVENTSOURCE,
            "htmlfile": sockjs_1.Transport.HTMLFILE,
            "iframe-htmlfile": sockjs_1.Transport.IFRAME_HTMLFILE,
            "xhr-polling": sockjs_1.Transport.XHR_POLLING,
            "xdr-polling": sockjs_1.Transport.XDR_POLLING,
            "iframe-xhr-polling": sockjs_1.Transport.IFRAME_XHR_POLLING,
            "jsonp-polling": sockjs_1.Transport.JSONP_POLLING
        };
        var SockJsConnectionImpl = (function () {
            function SockJsConnectionImpl(endpoint, options) {
                var _this = this;
                this.endpoint = endpoint;
                this.sockjs_external = null;
                this.onOpenCallback = null;
                this.onMessageCallback = null;
                this.onCloseCallback = null;
                this.onErrorCallback = null;
                this.requireSockjs(function (sockjs) {
                    _this.sockjs_external = new sockjs(endpoint, options);
                    _this.sockjs_external['onopen'] = function (event) {
                        if (_this.onOpenCallback != null) {
                            var transport = transportMap[_this.sockjs_external['transport']];
                            _this.onOpenCallback({ "transport": transport });
                        }
                    };
                    _this.sockjs_external['onmessage'] = function (event) {
                        if (_this.onMessageCallback != null) {
                            _this.onMessageCallback(event);
                        }
                    };
                    _this.sockjs_external['onclose'] = function (event) {
                        if (_this.onCloseCallback != null) {
                            _this.onCloseCallback(event);
                        }
                    };
                    _this.sockjs_external['onerror'] = function (event) {
                        if (_this.onErrorCallback != null) {
                            _this.onErrorCallback(event);
                        }
                    };
                });
            }
            SockJsConnectionImpl.prototype.onOpen = function (callback) {
                this.onOpenCallback = callback;
            };
            SockJsConnectionImpl.prototype.onMessage = function (callback) {
                this.onMessageCallback = callback;
            };
            SockJsConnectionImpl.prototype.onClose = function (callback) {
                this.onCloseCallback = callback;
            };
            SockJsConnectionImpl.prototype.onError = function (callback) {
                this.onErrorCallback = callback;
            };
            SockJsConnectionImpl.prototype.send = function (message) {
                if (this.sockjs_external != null) {
                    this.sockjs_external['send'](message);
                }
                else {
                    throw new Error("sockjs is not initialized yet, wait for onOpen before send!");
                }
            };
            SockJsConnectionImpl.prototype.close = function (code, reason) {
                if (this.sockjs_external != null) {
                    this.sockjs_external['close'](code, reason);
                }
                else {
                    throw new Error("sockjs is not initialized yet, wait for onClose before send!");
                }
            };
            SockJsConnectionImpl.prototype.requireSockjs = function (cb) {
                if (require.config) {
                    require.config({
                        paths: {
                            "sockjs-client": Spaghetti.getResourceUrl('sockjs.min')
                        }
                    });
                    require(["sockjs-client"], function () {
                        var modules = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            modules[_i] = arguments[_i];
                        }
                        cb(modules[0]);
                    });
                }
                else {
                    //node js
                    setTimeout(function () {
                        cb(require('sockjs-client'));
                    }, 0);
                }
            };
            return SockJsConnectionImpl;
        }());
        sockjs_1.SockJsConnectionImpl = SockJsConnectionImpl;
    })(sockjs = prezi.sockjs || (prezi.sockjs = {}));
})(prezi || (prezi = {}));
var prezi;
(function (prezi) {
    var sockjs;
    (function (sockjs) {
        var SockJsModule = (function () {
            function SockJsModule() {
            }
            SockJsModule.createSockJsConnection = function (endpoint, transports) {
                if (transports != null) {
                    var whitelist = [];
                    for (var i = 0; i < transports.length; i++) {
                        switch (transports[i]) {
                            case sockjs.Transport.WEBSOCKET:
                                whitelist.push("websocket");
                                break;
                            case sockjs.Transport.XHR_STREAMING:
                                whitelist.push("xhr-streaming");
                                break;
                            case sockjs.Transport.XDR_STREAMING:
                                whitelist.push("xdr-streaming");
                                break;
                            case sockjs.Transport.EVENTSOURCE:
                                whitelist.push("eventsource");
                                break;
                            case sockjs.Transport.IFRAME_EVENTSOURCE:
                                whitelist.push("iframe-eventsource");
                                break;
                            case sockjs.Transport.HTMLFILE:
                                whitelist.push("htmlfile");
                                break;
                            case sockjs.Transport.IFRAME_HTMLFILE:
                                whitelist.push("iframe-htmlfile");
                                break;
                            case sockjs.Transport.XHR_POLLING:
                                whitelist.push("xhr-polling");
                                break;
                            case sockjs.Transport.XDR_POLLING:
                                whitelist.push("xdr-polling");
                                break;
                            case sockjs.Transport.IFRAME_XHR_POLLING:
                                whitelist.push("iframe-xhr-polling");
                                break;
                            case sockjs.Transport.JSONP_POLLING:
                                whitelist.push("jsonp-polling");
                                break;
                        }
                        ;
                    }
                    var options = {
                        'protocols_whitelist': whitelist,
                        'debug': false,
                        'devel': false
                    };
                    return new sockjs.SockJsConnectionImpl(endpoint, options);
                }
                return new sockjs.SockJsConnectionImpl(endpoint);
            };
            return SockJsModule;
        }());
        sockjs.SockJsModule = SockJsModule;
    })(sockjs = prezi.sockjs || (prezi.sockjs = {}));
})(prezi || (prezi = {}));

return prezi.sockjs.__createSpaghettiModule(Spaghetti);

})

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi.sockjs",["require"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi.sockjs.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)();}else{this["prezi.sockjs"]=__factory();}}).call(this);
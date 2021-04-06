
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"778",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"quantity"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 600*",["escape",["macro",4],8,16],"})();"]
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0.0",
      "vtp_name":"licensePrice"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",7],8,16],";return parseFloat(a)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"simplePackageName"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"isEdu"
    },{
      "function":"__jsm",
      "convert_undefined_to":["template",["macro",9],":",["macro",7],":",["macro",10]],
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",9],8,16],";a=a.replace(\/_\/g,\"\");var b=",["escape",["macro",11],8,16],";return b\u0026\u0026!a.startsWith(\"EDU\")?\"EDU\"+a:a})();"]
    },{
      "function":"__v",
      "vtp_name":"userId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"trialLength"
    },{
      "function":"__v",
      "vtp_name":"countryCode",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",15],8,16],",b=\"US DE GB FR CA NL IN AU NZ MX AR HU SE IR HU NZ CH\".split(\" \");return 0\u003C=b.indexOf(a)?a:\"ROW\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"currency"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",17],
      "vtp_defaultValue":"1",
      "vtp_map":["list",["map","key","MXN","value","0.0495469269"],["map","key","GBP","value","1.3963485094"],["map","key","EUR","value","1.2084"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",12],8,16],"+\"_\"+",["escape",["macro",14],8,16],",d=",["escape",["macro",7],8,16],",b=",["escape",["macro",16],8,16],",a;if(0\u003E=d)return 0;\"US\"===b\u0026\u0026(a={ENJOY_14:.46,PRO_14:.34,PROPLUS_14:.36,STANDARD_14:.46,EDUPLUS_14:.6,PLUS_14:.34,PREMIUM_14:.05});\"DE\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.44,EDUPLUS_14:.34,PLUS_14:.34,PREMIUM_14:.01});\"GB\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.24,EDUPLUS_14:.34,PLUS_14:.34,PREMIUM_14:.05});\"FR\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,\nPROPLUS_14:.36,STANDARD_14:.41,EDUPLUS_14:.48,PLUS_14:.48,PREMIUM_14:.01});\"CA\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.39,EDUPLUS_14:.41,PLUS_14:.41,PREMIUM_14:.17});\"NL\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.39,EDUPLUS_14:.52,PLUS_14:.52,PREMIUM_14:.01});\"IN\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.24,EDUPLUS_14:.33,PLUS_14:.33,PREMIUM_14:.01});\"AU\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.36,EDUPLUS_14:.4,PLUS_14:.4,\nPREMIUM_14:.09});\"NZ\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.6,EDUPLUS_14:.45,PLUS_14:.45,PREMIUM_14:.1});\"AR\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.24,EDUPLUS_14:.49,PLUS_14:.49,PREMIUM_14:.01});\"MX\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.2,EDUPLUS_14:.31,PLUS_14:.31,PREMIUM_14:.02});\"HU\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.27,EDUPLUS_14:.19,PLUS_14:.19,PREMIUM_14:.05});\"IR\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,\nPROPLUS_14:.36,STANDARD_14:.17,EDUPLUS_14:.32,PLUS_14:.32,PREMIUM_14:.05});\"SE\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.3,EDUPLUS_14:.46,PLUS_14:.46,PREMIUM_14:.01});\"CH\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.51,EDUPLUS_14:.65,PLUS_14:.65,PREMIUM_14:.01});\"ROW\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.27,EDUPLUS_14:.31,PLUS_14:.31,PREMIUM_14:.03});multiplier=a.hasOwnProperty(c)?a[c]:1;return parseFloat((d*",["escape",["macro",18],8,16],"*multiplier).toFixed(2))})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",12],8,16],"+\"_\"+",["escape",["macro",14],8,16],",d=",["escape",["macro",7],8,16],",b=",["escape",["macro",16],8,16],",a;if(0\u003E=d)return 0;\"US\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.47,PLUS_14:.27,EDUPLUS_14:.6,PREMIUM_14:.05});\"DE\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.31,PLUS_14:.26,EDUPLUS_14:.26,PREMIUM_14:.02});\"GB\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.19,PLUS_14:.18,EDUPLUS_14:.18,PREMIUM_14:.05});\"FR\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,\nPROPLUS_14:.36,STANDARD_14:.28,PLUS_14:.31,EDUPLUS_14:.31,PREMIUM_14:.01});\"CA\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.41,PLUS_14:.29,EDUPLUS_14:.29,PREMIUM_14:.04});\"NL\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.39,PLUS_14:.28,EDUPLUS_14:.28,PREMIUM_14:.01});\"IN\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.12,PLUS_14:.18,EDUPLUS_14:.18,PREMIUM_14:.02});\"ROW\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.26,PLUS_14:.24,EDUPLUS_14:.24,\nPREMIUM_14:.03});multiplier=a.hasOwnProperty(c)?a[c]:1;return parseFloat((d*",["escape",["macro",18],8,16],"*multiplier).toFixed(2))})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],"+\"_\"+",["escape",["macro",14],8,16],",b=",["escape",["macro",7],8,16],";if(0\u003E=b)return 0;var c={ENJOY_7:.31,PRO_7:.19,PROPLUS_7:.08,STANDARD_7:.32,EDUPLUS_7:.5,PLUS_7:.19,PREMIUM_7:.08,ENJOY_14:.31,PRO_14:.19,PROPLUS_14:.08,STANDARD_14:.32,EDUPLUS_14:.5,PLUS_14:.19,PREMIUM_14:.08};multiplier=c.hasOwnProperty(a)?c[a]:1;return parseFloat((b*",["escape",["macro",18],8,16],"*multiplier).toFixed(2))})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"email_domain"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-2156578-43",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"optimizely-dimension-number"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"optimizely-dimension-value"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"optimizely-referrer"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"packageName"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",28],
      "vtp_defaultValue":["template","NO_MATCH_",["macro",28]],
      "vtp_map":["list",["map","key","PUBLIC_NOEXPORT_NOPRESENTERTOOLS_NOADVANCEDTHEMES_NOIMAGEEFFECTS","value","PUBLIC"],["map","key","PUBLIC_NOEXPORT_PRIVACY","value","PUBLIC"],["map","key","PUBLIC_NOEXPORT_NOPRESENTERTOOLS","value","PUBLIC"],["map","key","PUBLIC_NOEXPORT_PRIVACY_NOPRESENTERTOOLS","value","PUBLIC"],["map","key","PUBLIC_NOEXPORT","value","PUBLIC"],["map","key","PUBLIC","value","PUBLIC"],["map","key","ENJOY_4GB_NOEXPORT_NOPRESENTERTOOLS_NOADVANCEDTHEMES_NOIMAGEEFFECTS","value","ENJOY"],["map","key","ENJOY_4GB_NOEXPORT_NOPRESENTERTOOLS","value","ENJOY"],["map","key","ENJOY_NOEXPORT","value","ENJOY"],["map","key","ENJOY_4GB_NOSUPPORT_NOEXPORT","value","ENJOY"],["map","key","ENJOY_4GB_NOEXPORT","value","ENJOY"],["map","key","ENJOY_4GB_NOSUPPORT","value","EDUENJOY"],["map","key","ENJOY_NO_PAUSE","value","ENJOY"],["map","key","ENJOY_4GB","value","ENJOY"],["map","key","ENJOY","value","ENJOY"],["map","key","PRO_NO_CREATE_NO_DESKTOP","value","PRO"],["map","key","PRO_NO_LIMIT","value","PRO"],["map","key","PRO_WITH_TRAINING","value","PRO"],["map","key","PRO_NO_LIMIT_WITH_TRAINING","value","PRO"],["map","key","PRO","value","PRO"],["map","key","PRO_PLUS_NO_LIMIT_WITH_TRAINING","value","PROPLUS"],["map","key","PITCH_BASIC","value","BASIC"],["map","key","PITCH_STANDARD","value","STANDARD"],["map","key","PITCH_PLUS","value","PLUS"],["map","key","PITCH_PREMIUM","value","PREMIUM"],["map","key","PITCH_ONLY","value","BUSINESS"],["map","key","PITCH_EDU_STANDARD","value","EDUSTANDARD"],["map","key","PITCH_EDU_PLUS","value","EDUPLUS"],["map","key","EDU_ENJOY_4GB_NOSUPPORT","value","EDUENJOY"],["map","key","EDU_PRO_NO_LIMIT","value","EDUPRO"],["map","key","EDU_PRO_NO_LIMIT_WITH_TRAINING","value","EDUPRO"],["map","key","PITCH_EDU_STANDARD_NO_COMMENT","value","EDUSTANDARD"],["map","key","PITCH_PLUS_NO_COMMENT","value","PLUS"],["map","key","PITCH_STANDARD_NO_COMMENT","value","STANDARD"],["map","key","PITCH_EDU_PLUS_NO_COMMENT","value","EDUPLUS"],["map","key","PITCH_PREMIUM_NO_COMMENT","value","PREMIUM"],["map","key","PITCH_BASIC_NO_COMMENT","value","BASIC"],["map","key","PITCH_PLUS_NO_COMMENT_LIVE_PREZI","value","PLUS"],["map","key","PITCH_EDU_PLUS_NO_COMMENT_LIVE_PREZI","value","EDUPLUS"],["map","key","PITCH_PREMIUM_NO_COMMENT_LIVE_PREZI","value","PREMIUM"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",29],8,16],"+\"_\"+",["escape",["macro",14],8,16],",d=",["escape",["macro",7],8,16],",b=",["escape",["macro",16],8,16],",a;if(0\u003Ed)return 0;\"US\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.27,EDUPLUS_14:.27,PLUS_14:.27,PREMIUM_14:.05});\"DE\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.31,EDUPLUS_14:.26,PLUS_14:.26,PREMIUM_14:.02});\"GB\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.19,EDUPLUS_14:.18,PLUS_14:.18,PREMIUM_14:.05});\"FR\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,\nPROPLUS_14:.36,STANDARD_14:.28,EDUPLUS_14:.31,PLUS_14:.31,PREMIUM_14:.01});\"CA\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.41,EDUPLUS_14:.29,PLUS_14:.29,PREMIUM_14:.04});\"NL\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.39,EDUPLUS_14:.28,PLUS_14:.28,PREMIUM_14:.01});\"IN\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.12,EDUPLUS_14:.18,PLUS_14:.18,PREMIUM_14:.02});\"ROW\"===b\u0026\u0026(a={ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.26,EDUPLUS_14:.24,PLUS_14:.24,\nPREMIUM_14:.03});multiplier=a.hasOwnProperty(c)?a[c]:1;return d*multiplier})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"putmaId"
    },{
      "function":"__v",
      "vtp_name":"occupationCategory",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"paymentFrequency"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],"+\"_\"+",["escape",["macro",33],8,16],";switch(a){case \"EDUPLUS_M\":case \"EDUPLUS_Y\":case \"EDUPRO_M\":case \"EDUPRO_Y\":simpleConversionLabel=\"VCESCMXS_IMBEO2Q0t0D\";break;case \"EDUSTANDARD_M\":case \"EDUSTANDARD_Y\":case \"EDUENJOY_M\":case \"EDUENJOY_Y\":case \"PUBLIC_Y\":case \"EDU_UNLISTED_VIDEO_Y\":case \"EDU_VIDEO_PRIVACY_Y\":case \"UNLISTED_VIDEO_Y\":case \"VIDEO_PRIVACY_Y\":case \"EDUUNLISTEDVIDEO_Y\":case \"EDUVIDEOPRIVACY_Y\":case \"UNLISTEDVIDEO_Y\":case \"VIDEOPRIVACY_Y\":case \"MAC_Y\":case \"WIN_Y\":case \"WEB_Y\":case \"BASIC_Y\":simpleConversionLabel=\n\"g6MeCPyFk4QBEO2Q0t0D\";break;case \"ENJOY_Y\":case \"ENJOY_M\":case \"STANDARD_M\":case \"STANDARD_Y\":simpleConversionLabel=\"Jf-FCPen_IMBEO2Q0t0D\";break;case \"PRO_Y\":case \"PRO_M\":case \"PLUS_M\":case \"PLUS_Y\":simpleConversionLabel=\"Nva9COSci4QBEO2Q0t0D\";break;case \"PROPLUS_Y\":case \"PROPLUS_M\":case \"PREMIUM_M\":case \"PREMIUM_Y\":simpleConversionLabel=\"EZRYCOr2koQBEO2Q0t0D\";break;case \"EDUPREMIUM_M\":case \"EDUPREMIUM_Y\":simpleConversionLabel=\"MPjECIj9gdEBEO2Q0t0D\";break;case \"PREZI_BUSINESS_Y\":simpleConversionLabel=\n\"n6yrCPGDk4QBEO2Q0t0D\";break;default:simpleConversionLabel=\"bSQACOati4QBEO2Q0t0D\"}return simpleConversionLabel})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],"+\"_\"+",["escape",["macro",33],8,16],";switch(a){case \"EDUPLUS_Y\":case \"EDUPRO_Y\":conversionLabel=\"2UbICKu32YQBEJPvoP0C\";break;case \"EDUPRO_M\":case \"EDUPLUS_M\":conversionLabel=\"2UbICKu32YQBEJPvoP0C\";break;case \"PRO_M\":conversionLabel=\"euACCPW0yoQBEJPvoP0C\";break;case \"PRO_Y\":conversionLabel=\"euACCPW0yoQBEJPvoP0C\";break;case \"EDUSTANDARD_M\":case \"EDUSTANDARD_Y\":case \"EDUENJOY_M\":case \"EDUENJOY_Y\":case \"PUBLIC_M\":case \"PUBLIC_Y\":case \"BASIC_M\":case \"BASIC_Y\":conversionLabel=\n\"bB9qCMSv2YQBEJPvoP0C\";break;case \"ENJOY_M\":case \"STANDARD_M\":conversionLabel=\"qhSFCKaP4YQBEJPvoP0C\";break;case \"ENJOY_Y\":case \"STANDARD_Y\":conversionLabel=\"qhSFCKaP4YQBEJPvoP0C\";break;case \"PLUS_M\":conversionLabel=\"euACCPW0yoQBEJPvoP0C\";break;case \"PLUS_Y\":conversionLabel=\"euACCPW0yoQBEJPvoP0C\";break;case \"PROPLUS_M\":case \"PREMIUM_M\":case \"PROPLUS_Y\":case \"PREMIUM_Y\":conversionLabel=\"UBCOCIHEyoQBEJPvoP0C\";break;case \"BUSINESS_Y\":conversionLabel=\"PlGqCPWH4YQBEJPvoP0C\";break;default:conversionLabel=\n\"Xnz7CKGK4YQBEJPvoP0C\"}return conversionLabel})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],";switch(a){case \"ENJOY\":case \"STANDARD\":conversionLabel=\"KsneCLr04YQBEO2Q0t0D\";break;case \"EDUPRO\":case \"EDUPLUS\":conversionLabel=\"QHVHCPLeyJ0BEO2Q0t0D\";break;case \"PRO\":case \"PLUS\":conversionLabel=\"CGZnCNf24YQBEO2Q0t0D\";break;case \"PREMIUM\":case \"PROPLUS\":conversionLabel=\"8I8fCNaly4QBEO2Q0t0D\";break;default:conversionLabel=\"bSQACOati4QBEO2Q0t0D\"}return conversionLabel})();"]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-75765194-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",2],8,16],",b={\"\/signup\/enjoy\/\":\"ENJOY\",\"\/signup\/pro\/\":\"PRO\",\"\/signup\/proplus\/\":\"PROPLUS\",\"\/signup\/edu\/pro\/\":\"EDUPRO\",\"\/signup\/edu\/plus\/\":\"EDUPLUS\",\"\/signup\/standard\/\":\"STANDARD\",\"\/signup\/plus\/\":\"PLUS\",\"\/signup\/premium\/\":\"PREMIUM\",\"\/signup\/edu\/standard\/\":\"EDUSTANDARD\",\"\/signup\/edu\/plus\/\":\"EDUPLUS\",\"\/upgrade\/plan\/enjoy\/\":\"ENJOY\",\"\/upgrade\/plan\/pro\/\":\"PRO\",\"\/upgrade\/plan\/proplus\/\":\"PROPLUS\",\"\/upgrade\/plan\/edu\/pro\/\":\"EDUPRO\",\"\/upgrade\/plan\/edu\/plus\/\":\"EDUPLUS\",\"\/upgrade\/plan\/standard\/\":\"STANDARD\",\n\"\/upgrade\/plan\/plus\/\":\"PLUS\",\"\/upgrade\/plan\/premium\/\":\"PREMIUM\",\"\/upgrade\/plan\/edu\/standard\/\":\"EDUSTANDARD\",\"\/upgrade\/plan\/edu\/plus\/\":\"EDUPLUS\"};return b.hasOwnProperty(a)?b[a]:\"\"})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pricingRegion"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"licenseTypeOid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",12],8,16],"+\"_\"+",["escape",["macro",14],8,16],",d=",["escape",["macro",7],8,16],",b=",["escape",["macro",16],8,16],",a;if(0\u003E=d)return 0;\"US\"===b\u0026\u0026(a={ENJOY_7:.5,PRO_7:.41,PROPLUS_7:.36,STANDARD_7:.5,EDUPLUS_7:.6,PLUS_7:.41,PREMIUM_7:.05,ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.5,EDUPLUS_14:.6,PLUS_14:.41,PREMIUM_14:.05});\"DE\"===b\u0026\u0026(a={ENJOY_7:.31,PRO_7:.36,PROPLUS_7:.36,STANDARD_7:.44,EDUPLUS_7:.34,PLUS_7:.34,PREMIUM_7:.01,ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.44,EDUPLUS_14:.34,\nPLUS_14:.34,PREMIUM_14:.01});\"GB\"===b\u0026\u0026(a={ENJOY_7:.31,PRO_7:.36,PROPLUS_7:.36,STANDARD_7:.24,EDUPLUS_7:.34,PLUS_7:.34,PREMIUM_7:.05,ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.24,EDUPLUS_14:.34,PLUS_14:.34,PREMIUM_14:.05});\"FR\"===b\u0026\u0026(a={ENJOY_7:.31,PRO_7:.36,PROPLUS_7:.36,STANDARD_7:.41,EDUPLUS_7:.48,PLUS_7:.48,PREMIUM_7:.01,ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.41,EDUPLUS_14:.48,PLUS_14:.48,PREMIUM_14:.01});\"CA\"===b\u0026\u0026(a={ENJOY_7:.31,PRO_7:.36,PROPLUS_7:.36,STANDARD_7:.39,EDUPLUS_7:.41,\nPLUS_7:.41,PREMIUM_7:.17,ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.39,EDUPLUS_14:.41,PLUS_14:.41,PREMIUM_14:.17});\"NL\"===b\u0026\u0026(a={ENJOY_7:.31,PRO_7:.36,PROPLUS_7:.36,STANDARD_7:.39,EDUPLUS_7:.52,PLUS_7:.52,PREMIUM_7:.01,ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.39,EDUPLUS_14:.52,PLUS_14:.52,PREMIUM_14:.01});\"IN\"===b\u0026\u0026(a={ENJOY_7:.31,PRO_7:.36,PROPLUS_7:.36,STANDARD_7:.24,EDUPLUS_7:.33,PLUS_7:.33,PREMIUM_7:.01,ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.24,EDUPLUS_14:.33,\nPLUS_14:.33,PREMIUM_14:.01});\"AU\"===b\u0026\u0026(a={ENJOY_7:.31,PRO_7:.36,PROPLUS_7:.36,STANDARD_7:.36,EDUPLUS_7:.4,PLUS_7:.4,PREMIUM_7:.09,ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.36,EDUPLUS_14:.4,PLUS_14:.4,PREMIUM_14:.09});\"NZ\"===b\u0026\u0026(a={ENJOY_7:.31,PRO_7:.36,PROPLUS_7:.36,STANDARD_7:.6,EDUPLUS_7:.45,PLUS_7:.45,PREMIUM_7:.1,ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.6,EDUPLUS_14:.45,PLUS_14:.45,PREMIUM_14:.1});\"AR\"===b\u0026\u0026(a={ENJOY_7:.31,PRO_7:.36,PROPLUS_7:.36,STANDARD_7:.24,EDUPLUS_7:.49,\nPLUS_7:.49,PREMIUM_7:.01,ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.24,EDUPLUS_14:.49,PLUS_14:.49,PREMIUM_14:.01});\"MX\"===b\u0026\u0026(a={ENJOY_7:.31,PRO_7:.36,PROPLUS_7:.36,STANDARD_7:.2,EDUPLUS_7:.31,PLUS_7:.31,PREMIUM_7:.02,ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.2,EDUPLUS_14:.31,PLUS_14:.31,PREMIUM_14:.02});\"HU\"===b\u0026\u0026(a={ENJOY_7:.31,PRO_7:.36,PROPLUS_7:.36,STANDARD_7:.27,EDUPLUS_7:.19,PLUS_7:.19,PREMIUM_7:.05,ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.27,EDUPLUS_14:.19,PLUS_14:.19,\nPREMIUM_14:.05});\"IR\"===b\u0026\u0026(a={ENJOY_7:.31,PRO_7:.36,PROPLUS_7:.36,STANDARD_7:.17,EDUPLUS_7:.32,PLUS_7:.32,PREMIUM_7:.05,ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.17,EDUPLUS_14:.32,PLUS_14:.32,PREMIUM_14:.05});\"SE\"===b\u0026\u0026(a={ENJOY_7:.31,PRO_7:.36,PROPLUS_7:.36,STANDARD_7:.3,EDUPLUS_7:.46,PLUS_7:.46,PREMIUM_7:.01,ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.3,EDUPLUS_14:.46,PLUS_14:.46,PREMIUM_14:.01});\"CH\"===b\u0026\u0026(a={ENJOY_7:.31,PRO_7:.36,PROPLUS_7:.36,STANDARD_7:.51,EDUPLUS_7:.65,PLUS_7:.65,\nPREMIUM_7:.01,ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.51,EDUPLUS_14:.65,PLUS_14:.65,PREMIUM_14:.01});\"ROW\"===b\u0026\u0026(a={ENJOY_7:.31,PRO_7:.36,PROPLUS_7:.36,STANDARD_7:.27,EDUPLUS_7:.31,PLUS_7:.31,PREMIUM_7:.03,ENJOY_14:.31,PRO_14:.36,PROPLUS_14:.36,STANDARD_14:.27,EDUPLUS_14:.31,PLUS_14:.31,PREMIUM_14:.03});multiplier=a.hasOwnProperty(c)?a[c]:1;return parseFloat((d*",["escape",["macro",18],8,16],"*multiplier).toFixed(2))})();"]
    },{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1\u003C[\"BR\",\"MX\"].indexOf(\"",["escape",["macro",15],7],"\")})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",10],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"other",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^\\\/(product|education|pricing|presentation-template|gallery|business|the-science)\\\/$","value","$1-page"],["map","key","^\\\/upgrade\\\/embedded\\\/features\\\/(\\w*)\\\/$","value","$1-paywall"],["map","key","^\\\/upgrade\\\/next\\\/$","value","upgrade-pricing-page"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return!(!window.Site||!window.Site.planData)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"affiliateProductId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[];var a=window.Site\u0026\u0026window.Site.planData;var c=",["escape",["macro",48],8,16],";if(c)return c;if(\"\/signup\/business\/buynow\/\"==window.location.pathname)return\"tmspitchsilver0y600\";if(!a)return\"\";a=a.billingPeriods;0\u003Ca.yearly.licenseTypeOid.length\u0026\u0026b.push(a.yearly.licenseTypeOid);0\u003Ca.monthly.licenseTypeOid.length\u0026\u0026b.push(a.monthly.licenseTypeOid);return b.join(\",\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1\u003C[\"BR\",\"MX\"].indexOf(\"",["escape",["macro",15],7],"\")})();"]
    },{
      "function":"__c",
      "vtp_value":"77261PRE"
    },{
      "function":"__d",
      "vtp_elementSelector":"html",
      "vtp_attributeName":"lang",
      "vtp_selectorType":"CSS"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"\"})();"]
    },{
      "function":"__c",
      "vtp_value":["macro",54]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"affiliateOrderId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"affiliateSalesPrice"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"affiliateSalesCurrency"
    },{
      "function":"__f"
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__aev",
      "vtp_varType":"TARGET"
    },{
      "function":"__aev",
      "vtp_varType":"URL"
    },{
      "function":"__v",
      "vtp_name":"isStevie",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"occupationSubcategory",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"licenseType",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"registrationDate",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"teamSize",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",2],8,16],";a=a.split(\"\/\");return a[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",2],8,16],";a=a.split(\"\/\");return a[2]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",29],8,16],"+\"_\"+",["escape",["macro",33],8,16],";switch(a){case \"PUBLIC_M\":case \"PUBLIC_Y\":conversionLabel=\"TZJGCLXhv28Q7ZDS3QM\";break;case \"ENJOY_M\":case \"ENJOY_Y\":conversionLabel=\"anr3CMTJ0m8Q7ZDS3QM\";break;case \"EDUENJOY_M\":case \"EDUENJOY_Y\":conversionLabel=\"KZX3CIPepwUQ7ZDS3QM\";break;case \"EDUSTANDARD_M\":case \"EDUSTANDARD_Y\":conversionLabel=\"0Z6pCIS013AQ7ZDS3QM\";break;case \"PRO_M\":case \"PRO_Y\":conversionLabel=\"pj10CKnS0m8Q7ZDS3QM\";break;case \"PROPLUS_M\":case \"PROPLUS_Y\":conversionLabel=\n\"v1cVCLbrv28Q7ZDS3QM\";break;case \"BASIC_M\":case \"BASIC_Y\":conversionLabel=\"0E3cCILtv28Q7ZDS3QM\";break;case \"STANDARD_M\":conversionLabel=\"714eCKDtv28Q7ZDS3QM\";break;case \"STANDARD_Y\":conversionLabel=\"s2t8CKTb2G8Q7ZDS3QM\";break;case \"PLUS_M\":conversionLabel=\"PI8eCIzb2G8Q7ZDS3QM\";break;case \"PLUS_Y\":conversionLabel=\"qS8VCI_b2G8Q7ZDS3QM\";break;case \"PREMIUM_M\":conversionLabel=\"5TmWCODZ0m8Q7ZDS3QM\";break;case \"PREMIUM_Y\":conversionLabel=\"WIfMCPjZ0m8Q7ZDS3QM\";break;case \"BUSINESS_Y\":conversionLabel=\"sffLCK3e2G8Q7ZDS3QM\";\nbreak;default:conversionLabel=\"5gJQCIvU8V8Q7ZDS3QM\"}return conversionLabel})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",2],8,16],",b={\"\/business\/conversational-presenting\/\":\"busin001\",\"\/business\/customers\/\":\"busin000\",\"\/business\/workshop\/\":\"busin00\",\"\/business\/\":\"busin0\",\"\/signup\/business\/trial\/\":\"prezi00t\",\"\/\":\"prezi0\",\"\/gallery\/\":\"galle0\",\"\/features\/\":\"featu0\",\"\/contact\/\":\"conta00\",\"\/about\/\":\"compa0\",\"\/community\/\":\"commu0\",\"\/mobility\/\":\"appsi0\",\"\/customers\/\":\"prezi00k\",\"\/create\/\":\"produ0\",\"\/present\/\":\"produ000\",\"\/support\/\":\"prezi00c\",\"\/collaborate\/\":\"produ00\",\"\/pricing\/\":\"prici0\",\"\/windows\/\":\"prezi00\",\n\"\/contact\/sales\/grouplicense\/\":\"prezi005\",\"\/signup\/pro\/\":\"prezi006\",\"\/contact\/feedback\/\":\"prezi003\",\"\/teams\/\":\"prezi00j\",\"\/mac\/\":\"prezi000\",\"\/iphone\/\":\"prezi002\",\"\/ipad\/\":\"prezi001\",\"\/pricing\/edu\":\"prezi009\",\"\/signup\/public\/\":\"prezi008\",\"\/signup\/enjoy\/\":\"prezi007\",\"\/signup\/edu\/pro\/\":\"prezi00a\",\"\/signup\/edu\/enjoy\/\":\"prezi00-\"};return b.hasOwnProperty(a)?b[a]:\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hashedUserId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.timerEventNumber"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"virtualPage"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",12],
      "vtp_defaultValue":["template","NO_MATCH_",["macro",12]],
      "vtp_map":["list",["map","key","PUBLIC","value","PUBLIC"],["map","key","ENJOY","value","STANDARD"],["map","key","EDUENJOY","value","EDUENJOY"],["map","key","PRO","value","PLUS"],["map","key","PROPLUS","value","PREMIUM"],["map","key","BASIC","value","PUBLIC"],["map","key","STANDARD","value","STANDARD"],["map","key","PLUS","value","PLUS"],["map","key","PREMIUM","value","PREMIUM"],["map","key","BUSINESS","value","BUSINESS"],["map","key","EDUSTANDARD","value","EDUSTANDARD"],["map","key","EDUPLUS","value","EDUPLUS"],["map","key","EDUENJOY","value","EDUENJOY"],["map","key","EDUPRO","value","EDUPRO"],["map","key","EDUVIDEOPRIVACY","value","EDUVIDEOPRIVACY"],["map","key","VIDEOPRIVACY","value","VIDEOPRIVACY"],["map","key","EDUPREMIUM","value","EDUPREMIUM"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],"+\"_\"+",["escape",["macro",33],8,16],";switch(a){case \"EDUPLUS_M\":case \"EDUPLUS_Y\":case \"EDUPRO_M\":case \"EDUPRO_Y\":simpleConversionLabel=\"2UbICKu32YQBEJPvoP0C\";break;case \"EDUSTANDARD_M\":case \"EDUSTANDARD_Y\":case \"EDUENJOY_M\":case \"EDUENJOY_Y\":case \"PUBLIC_Y\":case \"EDU_UNLISTED_VIDEO_Y\":case \"EDU_VIDEO_PRIVACY_Y\":case \"UNLISTED_VIDEO_Y\":case \"VIDEO_PRIVACY_Y\":case \"EDUUNLISTEDVIDEO_Y\":case \"EDUVIDEOPRIVACY_Y\":case \"UNLISTEDVIDEO_Y\":case \"VIDEOPRIVACY_Y\":case \"MAC_Y\":case \"WIN_Y\":case \"WEB_Y\":case \"BASIC_Y\":simpleConversionLabel=\n\"bB9qCMSv2YQBEJPvoP0C\";break;case \"ENJOY_Y\":case \"ENJOY_M\":case \"STANDARD_M\":case \"STANDARD_Y\":simpleConversionLabel=\"qhSFCKaP4YQBEJPvoP0C\";break;case \"PRO_Y\":case \"PRO_M\":case \"PLUS_M\":case \"PLUS_Y\":simpleConversionLabel=\"euACCPW0yoQBEJPvoP0C\";break;case \"PROPLUS_Y\":case \"PROPLUS_M\":case \"PREMIUM_M\":case \"PREMIUM_Y\":simpleConversionLabel=\"UBCOCIHEyoQBEJPvoP0C\";break;case \"PREZI_BUSINESS_Y\":simpleConversionLabel=\"PlGqCPWH4YQBEJPvoP0C\";break;default:simpleConversionLabel=\"Xnz7CKGK4YQBEJPvoP0C\"}return simpleConversionLabel})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",15],8,16],",b=\"US DE GB FR CA NL IN AU NZ AR HU SE IR HU NZ CH\".split(\" \");return 0\u003C=b.indexOf(a)?a:\"LATAM\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"affiliateEventId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"affiliatePlan"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"affiliatesPaymentFrequency"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"",["escape",["macro",85],7],"|",["escape",["macro",86],7],"\"})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",87],
      "vtp_map":["list",["map","key","Standard|Y","value","417904"],["map","key","Edu Plus|Y","value","417907"],["map","key","Standard|M","value","417902"],["map","key","Prezi Business Silver|Y","value","417908"],["map","key","Plus|M","value","417903"],["map","key","Plus|Y","value","417905"],["map","key","Premium|Y","value","417906"],["map","key","Video Privacy|Y","value","418813"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"mrvSaleCode"
    },{
      "function":"__k",
      "convert_undefined_to":"en",
      "vtp_decodeCookie":false,
      "vtp_name":"django_language"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__r"
    },{
      "function":"__hid"
    }],
  "tags":[{
      "function":"__ua",
      "priority":10,
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",30],
      "vtp_eventCategory":"New user",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",24],
      "vtp_eventAction":"Trial start",
      "vtp_eventLabel":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":266
    },{
      "function":"__ua",
      "priority":10,
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Leads",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",24],
      "vtp_eventAction":"Free and Student lead",
      "vtp_eventLabel":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":267
    },{
      "function":"__ua",
      "priority":10,
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",30],
      "vtp_eventCategory":"New user",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",24],
      "vtp_eventAction":"Student reg",
      "vtp_eventLabel":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":279
    },{
      "function":"__ua",
      "priority":10,
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Leads",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",24],
      "vtp_eventAction":"Quality lead",
      "vtp_eventLabel":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":280
    },{
      "function":"__ua",
      "priority":5,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",30],
      "vtp_eventCategory":"New user",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",24],
      "vtp_eventAction":"Registration",
      "vtp_eventLabel":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":265
    },{
      "function":"__ua",
      "priority":5,
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Leads",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",24],
      "vtp_eventAction":"All leads",
      "vtp_eventLabel":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":268
    },{
      "function":"__ua",
      "metadata":["map"],
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-2156578-3",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":48
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",5],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1001687149",
      "vtp_conversionLabel":"kxLwCJnjmpUBEO2Q0t0D",
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":74
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Registrations v2",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",12],
      "vtp_eventLabel":["macro",13],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_eventValue":["macro",19],
      "vtp_fieldsToSet":["list",["map","fieldName","currencyCode","value",["macro",17]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-65967224-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":97
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Upgrades",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",12],
      "vtp_eventLabel":["macro",13],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_eventValue":["macro",19],
      "vtp_fieldsToSet":["list",["map","fieldName","currencyCode","value",["macro",17]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-65967224-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":98
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-78878804-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":146
    },{
      "function":"__baut",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_tagId":"5624605",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":192
    },{
      "function":"__baut",
      "metadata":["map"],
      "setup_tags":["list",["tag",11,0]],
      "once_per_event":true,
      "vtp_eventValue":["macro",21],
      "vtp_eventCategory":"REGISTRATION",
      "vtp_tagId":"5624605",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":["macro",12],
      "vtp_eventLabel":["macro",13],
      "tag_id":193
    },{
      "function":"__baut",
      "metadata":["map"],
      "setup_tags":["list",["tag",11,0]],
      "once_per_event":true,
      "vtp_eventValue":["macro",22],
      "vtp_eventCategory":"UPGRADE",
      "vtp_tagId":"5624605",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":["macro",12],
      "vtp_eventLabel":["macro",13],
      "tag_id":194
    },{
      "function":"__baut",
      "setup_tags":["list",["tag",11,0]],
      "once_per_event":true,
      "vtp_eventCategory":"PREZIBUSINESS",
      "vtp_tagId":"5624605",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"TRIAL",
      "tag_id":195
    },{
      "function":"__bzi",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_id":"47463",
      "tag_id":212
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-2156578-40",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":215
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-2156578-39",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":216
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"1001687149",
      "vtp_customParamsFormat":"NONE",
      "vtp_conversionLabel":"b1TSCIv8tAUQ7ZDS3QM",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",6],
      "vtp_enableRdpCheckbox":true,
      "tag_id":246
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1001687149",
      "vtp_conversionLabel":"fSg7CNCBnXkQ7ZDS3QM",
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":252
    },{
      "function":"__gclidw",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "vtp_enableCookieFlagsFeature":false,
      "vtp_enableUrlPassthroughFeature":true,
      "tag_id":253
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Optimizely",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",24],
      "vtp_eventAction":"Assigned to Campaign",
      "vtp_dimension":["list",["map","index",["macro",25],"dimension",["macro",26]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":254
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","referrer","value",["macro",27]]],
      "vtp_eventCategory":"Optimizely",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",24],
      "vtp_eventAction":"Redirect Referrer Override",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":256
    },{
      "function":"__bzi",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_id":"70210",
      "tag_id":263
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":271
    },{
      "function":"__ua",
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list",["map","index","1","group","Classic view pages"]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-2156578-3",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":282
    },{
      "function":"__ua",
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list",["map","index","1","group","Next view pages"]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-2156578-3",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":285
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_currencyCode":"USD",
      "vtp_conversionId":"1001687149",
      "vtp_conversionLabel":["macro",34],
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":292
    },{
      "function":"__ua",
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list",["map","index","1","group","Lite Viewer mobile view pages"]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-2156578-3",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":293
    },{
      "function":"__ua",
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list",["map","index","1","group","Mobile Embed views"]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-2156578-3",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":294
    },{
      "function":"__awct",
      "metadata":["map"],
      "setup_tags":["list",["tag",32,0]],
      "once_per_event":true,
      "vtp_enableNewCustomerReporting":false,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",13],
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":["macro",21],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"799553427",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":["macro",35],
      "vtp_rdp":false,
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":295
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",13],
      "vtp_conversionValue":["macro",22],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_currencyCode":"USD",
      "vtp_conversionId":"1001687149",
      "vtp_conversionLabel":["macro",36],
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":296
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":true,
      "vtp_eventName":"conversion",
      "vtp_conversionId":"799553427",
      "vtp_customParamsFormat":"NONE",
      "vtp_rdp":false,
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",6],
      "vtp_enableRdpCheckbox":true,
      "tag_id":298
    },{
      "function":"__awct",
      "metadata":["map"],
      "setup_tags":["list",["tag",32,0]],
      "once_per_event":true,
      "vtp_enableNewCustomerReporting":false,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",13],
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":["macro",22],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"799553427",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":["macro",35],
      "vtp_rdp":false,
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":300
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"AW-958692981",
      "vtp_customParamsFormat":"NONE",
      "vtp_rdp":false,
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",6],
      "vtp_enableRdpCheckbox":true,
      "tag_id":304
    },{
      "function":"__awct",
      "metadata":["map"],
      "setup_tags":["list",["tag",32,0]],
      "once_per_event":true,
      "vtp_enableNewCustomerReporting":false,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"799553427",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":["macro",35],
      "vtp_rdp":false,
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":311
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",13],
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":["macro",21],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_currencyCode":"USD",
      "vtp_conversionId":"1001687149",
      "vtp_conversionLabel":["macro",34],
      "vtp_rdp":false,
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":312
    },{
      "function":"__ua",
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list",["map","index","1","group","Desktop Embed views"]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-2156578-3",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":324
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",37],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":335
    },{
      "function":"__awct",
      "metadata":["map"],
      "setup_tags":["list",["tag",32,0]],
      "once_per_event":true,
      "vtp_enableNewCustomerReporting":false,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"799553427",
      "vtp_conversionLabel":"ezJiCOKZyP0BEJPvoP0C",
      "vtp_rdp":false,
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":349
    },{
      "function":"__awct",
      "metadata":["map"],
      "setup_tags":["list",["tag",32,0]],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"799553427",
      "vtp_conversionLabel":"JaNjCPGUsbEBEJPvoP0C",
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":350
    },{
      "function":"__pntr",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_tagId":"2613350385760",
      "vtp_eventName":"",
      "tag_id":361
    },{
      "function":"__pntr",
      "metadata":["map"],
      "setup_tags":["list",["tag",41,0]],
      "once_per_event":true,
      "vtp_setCustomParams":false,
      "vtp_tagId":"2613350385760",
      "vtp_eventName":"checkout",
      "vtp_currency":"usd",
      "vtp_value":["macro",19],
      "vtp_order_id":["macro",13],
      "vtp_product_category":["macro",12],
      "tag_id":362
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1001687149",
      "vtp_conversionLabel":"JZ0pCLuI8dkBEO2Q0t0D",
      "vtp_rdp":false,
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":810
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":811
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":820
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":833
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":834
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":844
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":846
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":847
    },{
      "function":"__awct",
      "metadata":["map"],
      "setup_tags":["list",["tag",32,0]],
      "once_per_event":true,
      "vtp_enableNewCustomerReporting":false,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"799553427",
      "vtp_conversionLabel":"ikMtCPudyP0BEJPvoP0C",
      "vtp_rdp":false,
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":856
    },{
      "function":"__awct",
      "metadata":["map"],
      "setup_tags":["list",["tag",32,0]],
      "once_per_event":true,
      "vtp_enableNewCustomerReporting":false,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",13],
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"799553427",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"PlGqCPWH4YQBEJPvoP0C",
      "vtp_rdp":false,
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":857
    },{
      "function":"__awct",
      "metadata":["map"],
      "setup_tags":["list",["tag",32,0]],
      "once_per_event":true,
      "vtp_enableNewCustomerReporting":false,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"799553427",
      "vtp_conversionLabel":"Q__tCO7iy_4BEJPvoP0C",
      "vtp_rdp":false,
      "vtp_url":["macro",6],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":859
    },{
      "function":"__cl",
      "tag_id":860
    },{
      "function":"__cl",
      "tag_id":861
    },{
      "function":"__cl",
      "tag_id":862
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/cdn.optimizely.com\/js\/6739031.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":42
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EpiAId=\"52912\";piCId=\"2234\";(function(){function a(){var b=document.createElement(\"script\");b.type=\"text\/javascript\";b.src=(\"https:\"==document.location.protocol?\"https:\/\/pi\":\"http:\/\/cdn\")+\".pardot.com\/pd.js\";var a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)}window.attachEvent?window.attachEvent(\"onload\",a):window.addEventListener(\"load\",a,!1)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":45
    },{
      "function":"__html",
      "metadata":["map"],
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(a,d,c){var b=new Date;b.setTime(b.getTime()+864E5*c);c=\"; expires\\x3d\"+b.toGMTString();b=\"; path\\x3d\/\";document.cookie=a+\"\\x3d\"+d+c+b}function getParam(a){return(a=RegExp(\"[?\\x26]\"+a+\"\\x3d([^\\x26]*)\").exec(window.location.search))\u0026\u0026decodeURIComponent(a[1].replace(\/\\+\/g,\" \"))}var gclid=getParam(\"gclid\");if(gclid){var gclsrc=getParam(\"gclsrc\");gclsrc\u0026\u0026-1===gclsrc.indexOf(\"aw\")||setCookie(\"gclid\",gclid,30)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":69
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar capterra_vkey=\"df183cc3965dc5370d01491dfd49339e\",capterra_vid=\"2099417\",capterra_prefix=\"https:\"==document.location.protocol?\"https:\/\/ct.capterra.com\":\"http:\/\/ct.capterra.com\";(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=capterra_prefix+\"\/capterra_tracker.js?vid\\x3d\"+capterra_vid+\"\\x26vkey\\x3d\"+capterra_vkey;var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":93
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c,e,f,d,b){a.hj=a.hj||function(){(a.hj.q=a.hj.q||[]).push(arguments)};a._hjSettings={hjid:67374,hjsv:5};d=c.getElementsByTagName(\"head\")[0];b=c.createElement(\"script\");b.async=1;b.src=e+a._hjSettings.hjid+f+a._hjSettings.hjsv;d.appendChild(b)})(window,document,\"\/\/static.hotjar.com\/c\/hotjar-\",\".js?sv\\x3d\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":111
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"salesFormSubmission\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":122
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"salesFormFailure\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":123
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"registration\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":125
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"qualityLead\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":136
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"freemiumLead\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":137
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"PlusRegistration\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":139
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"StandardRegistration\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":140
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"BasicRegistration\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":141
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"EduStandardRegistration\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":142
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"EduPlusRegistration\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":143
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,e,f,b,c,a){c=\"\";b=\"https:\/\/www.g2crowd.com\/attribution_tracking\/conversions\/\"+d+\".js?p\\x3d\"+encodeURI(e)+\"\\x26e\\x3d\"+c;a=document.createElement(\"script\");a.type=\"application\/javascript\";a.src=b;f.getElementsByTagName(\"head\")[0].appendChild(a)})(\"57\",document.location.href,document);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":148
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg src=\"https:\/\/click.prezi.com:443\/conversion?version=1\u0026amp;conversion_items=items\u0026amp;conversion_value=value\" alt=\"\" width=\"0\" height=\"0\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":150
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"joinTeamFormSubmission\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":157
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"trialFormSubmission\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":158
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");\nwindow.fb_pixel_initiated||(fbq(\"dataProcessingOptions\",[]),fbq(\"init\",\"291059134405770\"),fbq(\"track\",\"PageView\"),window.fb_pixel_initiated=!0);\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=291059134405770\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":163
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"291059134405770\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Lead\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=291059134405770\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":164
    },{
      "function":"__html",
      "setup_tags":["list",["tag",76,0]],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{content_type:\"new_visitor\"});\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":171
    },{
      "function":"__html",
      "setup_tags":["list",["tag",76,0]],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{content_type:\"existing_user\"});\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":172
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",76,0]],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\",{content_name:\"",["escape",["macro",39],7],"\",content_type:\"new_visitor\"});\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":173
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",76,0]],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"CompleteRegistration\",{content_name:\"",["escape",["macro",39],7],"\",value:",["escape",["macro",19],8,16],",currency:\"USD\"});\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":174
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToWishlist\");\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":176
    },{
      "function":"__html",
      "setup_tags":["list",["tag",76,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddPaymentInfo\");\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":177
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"PremiumRegistration\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":178
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"ContinuedToPayment\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":179
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"NoMatchRegistration\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":180
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"PaidRegistration\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":181
    },{
      "function":"__html",
      "setup_tags":["list",["tag",76,0]],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\",{content_name:\"",["escape",["macro",39],7],"\",content_type:\"new_visitor\"});\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":188
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"EnjoyRegistration\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":189
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"ProRegistration\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":190
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"ProPlusRegistration\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":191
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"PublicRegistration\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":198
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"EduEnjoyRegistration\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":199
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"EduProRegistration\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":200
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"StudentRegistration\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":201
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"BusinessRegistration\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":202
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"EducatorRegistration\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":203
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar capterra_vkey=\"df183cc3965dc5370d01491dfd49339e\",capterra_vid=\"2099417\",capterra_prefix=\"https:\"==document.location.protocol?\"https:\/\/ct.capterra.com\":\"http:\/\/ct.capterra.com\";(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=capterra_prefix+\"\/capterra_tracker.js?vid\\x3d\"+capterra_vid+\"\\x26vkey\\x3d\"+capterra_vkey;var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":205
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"paidUpgrades\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":211
    },{
      "function":"__html",
      "setup_tags":["list",["tag",15,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cimg src=\"https:\/\/dc.ads.linkedin.com\/collect\/?fmt=gif\u0026amp;url=prezi.com\/freebutton\u0026amp;pid=70210\" width=\"1\" height=\"1\" border=\"0\" alt=\"\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":213
    },{
      "function":"__html",
      "setup_tags":["list",["tag",15,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cimg src=\"https:\/\/dc.ads.linkedin.com\/collect\/?fmt=gif\u0026amp;url=prezi.com\/freebutton\u0026amp;pid=47463\" width=\"1\" height=\"1\" border=\"0\" alt=\"\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":220
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",23,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/px.ads.linkedin.com\/collect\/?pid=70210\u0026amp;conversionId=3828428\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":221
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"paidLogins\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":228
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"dailyLogins\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":229
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"StandardandPlusTrialStart\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":230
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"PlusMonthlyRegistration\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":231
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"PlusYearlyTrialStart\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":232
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"StandardMonthlyRegistration\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":233
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"StandardYearlyTrialStart\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":234
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"StandardPlusMonthlyRegistration\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":235
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"StandardPlusYearlyTrialStart\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":236
    },{
      "function":"__html",
      "setup_tags":["list",["tag",76,1]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar path=",["escape",["macro",2],8,16],",featureName=path.match(\/([^\\\/]*)\\\/*$\/)[1];fbq(\"track\",\"Search\",{content_ids:[featureName]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":242
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar DATALAYER_OBJECT_NAME=\"dataLayer\",referrerOverride=function(d){var c=window[DATALAYER_OBJECT_NAME]||[];c.push({event:\"optimizely-referrer-override\",\"optimizely-referrer\":d})},sendCampaignData=function(d,c,h,g,f,k,b,a,e){if(g=optimizely.get(\"data\")\u0026\u0026optimizely.get(\"data\").campaigns[c]\u0026\u0026optimizely.get(\"data\").campaigns[c].integrationSettings\u0026\u0026optimizely.get(\"data\").campaigns[c].integrationSettings.google_universal_analytics\u0026\u0026optimizely.get(\"data\").campaigns[c].integrationSettings.google_universal_analytics.universal_analytics_slot)d=\nd?d+\"(\"+c+\")\":c,h=h.join(\",\"),f=f?f+\"(\"+k+\")\":h+\"(\"+k+\")\",b=b?b+\"(\"+a+\")\":a,e=e?\"holdback\":\"treatment\",e=[d,f,b,e].join(\":\"),b=window[DATALAYER_OBJECT_NAME]||[],b.push({event:\"campaign-decided\",\"optimizely-dimension-value\":e,\"optimizely-dimension-number\":g})},initNewOptimizelyIntegration=function(d,c){var h=!1,g=function(b){var a=window.optimizely.get\u0026\u0026window.optimizely.get(\"state\"),e=a.getRedirectInfo()\u0026\u0026a.getRedirectInfo().referrer;!h\u0026\u0026e\u0026\u0026(d(e),h=!0);a=a.getCampaignStates({isActive:!0});a=a[b];\ne=a.campaignName;if(0\u003Ca.audiences.length){var f=a.audiences.map(function(a){return a.name});var g=a.audiences.map(function(a){return a.id})}else f=[\"everyone_else\"],g=[0];var k=a.experiment.name,l=a.experiment.id,m=a.variation.name,n=a.variation.id;c(e,b,f,g,k,l,m,n,a.isInCampaignHoldback)},f=function(){window.optimizely=window.optimizely||[];window.optimizely.push({type:\"addListener\",filter:{type:\"lifecycle\",name:\"campaignDecided\"},handler:function(b){b=b.data.campaign.id;g(b)}})},k=function(){var b=\nwindow.optimizely.get\u0026\u0026window.optimizely.get(\"state\");if(b){b=b.getCampaignStates({isActive:!0});for(var a in b)g(a)}};k();f()},initOptimizelyIntegration=function(d,c){initNewOptimizelyIntegration(d,c)};\"optimizely\"in window\u0026\u0026initOptimizelyIntegration(referrerOverride,sendCampaignData);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":255
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"75aa344edeef4dbfa3b3dd7cb5f40e6f\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/75aa344edeef4dbfa3b3dd7cb5f40e6f\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":269
    },{
      "function":"__html",
      "setup_tags":["list",["tag",114,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eqp(\"track\",\"Generic\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":270
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"user\",attributes:{countryCode:",["escape",["macro",15],8,16],",pricingRegion:",["escape",["macro",41],8,16],",licenseTypeOid:",["escape",["macro",42],8,16],",occupationCategory:",["escape",["macro",32],8,16],",paymentFrequency:",["escape",["macro",33],8,16],",simplePackageName:",["escape",["macro",9],8,16],",isEdu:",["escape",["macro",11],8,16],"}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":289
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"75aa344edeef4dbfa3b3dd7cb5f40e6f\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/75aa344edeef4dbfa3b3dd7cb5f40e6f\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Eqp(\"track\",\"GenerateLead\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":299
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{content_name:\"",["escape",["macro",12],7],"\",value:\"",["escape",["macro",43],7],"\",event_type:\"",["escape",["macro",44],7],"\",currency:\"USD\",trial_length:\"",["escape",["macro",14],7],"\",payment_frequency:\"",["escape",["macro",33],7],"\"});\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":301
    },{
      "function":"__html",
      "setup_tags":["list",["tag",114,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eqp(\"track\",\"CompleteRegistration\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":310
    },{
      "function":"__html",
      "metadata":["map"],
      "unlimited":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.driftt=window.drift=window.driftt||[];if(!a.init){if(a.invoked)return void(window.console\u0026\u0026console.error\u0026\u0026console.error(\"Drift snippet included twice.\"));a.invoked=!0;a.methods=\"identify config track reset debug show ping page hide off on\".split(\" \");a.factory=function(c){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(c),a.push(b),a}};a.methods.forEach(function(c){a[c]=a.factory(c)});a.load=function(c){var b=3E5,d=Math.ceil(new Date\/b)*b;b=\ndocument.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.crossorigin=\"anonymous\";b.src=\"https:\/\/js.driftt.com\/include\/\"+d+\"\/\"+c+\".js\";c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c)}}}();drift.SNIPPET_VERSION=\"0.3.1\";drift.load(\"7gxn2zbgw37b\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":317
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",76,0]],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"InitiateCheckout\",{value:",["escape",["macro",5],8,16],",content_id:\"",["escape",["macro",13],7],"\",currency:\"USD\"});\u003C\/script\u003E\n\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":321
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar trackUniqPreziViews=function(){var c,a=\/\\\/([a-z0-9-_%]{12})\\\/\/gm;(a=a.exec(window.location.pathname))\u0026\u0026(c=a[1]);try{var e=window.localStorage;a=\"__storage_test__\";e.setItem(a,a);e.removeItem(a);var d=!0}catch(b){d=b instanceof DOMException\u0026\u0026(22===b.code||1014===b.code||\"QuotaExceededError\"===b.name||\"NS_ERROR_DOM_QUOTA_REACHED\"===b.name)\u0026\u00260!==e.length}d\u0026\u0026c\u0026\u0026(d=window.localStorage.getItem(\"uniqPreziViews\")||\"[]\",uniqPrezis=JSON.parse(d),-1==uniqPrezis.indexOf(c)\u0026\u0026(uniqPrezis.push(c),window.localStorage.setItem(\"uniqPreziViews\",\nJSON.stringify(uniqPrezis)),window.dataLayer.push({event:\"UniqViewPageVisit\"})))};\"loading\"===document.readyState?document.addEventListener(\"DOMContentLoaded\",trackUniqPreziViews):trackUniqPreziViews();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":322
    },{
      "function":"__html",
      "setup_tags":["list",["tag",76,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"UniqViewPageVisit\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":323
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{content_name:\"",["escape",["macro",12],7],"\",value:\"",["escape",["macro",19],7],"\",event_type:\"",["escape",["macro",44],7],"\",currency:\"USD\",trial_length:\"",["escape",["macro",14],7],"\",payment_frequency:\"",["escape",["macro",33],7],"\"});\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":334
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript language=\"JavaScript\" type=\"text\/gtmscript\"\u003Evar tp_rtrgt_random=1E16*Math.random(),tp_rtrgt_url=\"http\"+(\"https:\"==document.location.protocol?\"s\":\"\")+\":\/\/hal9000.redintelligence.net\/retarget?a\\x3d51091\\x26version\\x3d1\",tp_rtrgt_iframe=\"i\"+tp_rtrgt_random;window.tp_rtrgt_iframes=window.tp_rtrgt_iframes||[];window.tp_rtrgt_iframes[tp_rtrgt_iframe]=document.createElement(\"iframe\");window.tp_rtrgt_iframes[tp_rtrgt_iframe].height=\"1\";window.tp_rtrgt_iframes[tp_rtrgt_iframe].width=\"1\";window.tp_rtrgt_iframes[tp_rtrgt_iframe].scrolling=\"no\";\nwindow.tp_rtrgt_iframes[tp_rtrgt_iframe].cssText=\"position:absolute;visibility:hidden;left:0px;top:0px;width:1px;height:1px;border:0\";window.tp_rtrgt_iframes[tp_rtrgt_iframe].src=tp_rtrgt_url;var tp_rtrgt_first_script=document.getElementsByTagName(\"script\")[0];tp_rtrgt_first_script.parentNode.appendChild(window.tp_rtrgt_iframes[tp_rtrgt_iframe]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":345
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript language=\"JavaScript\" type=\"text\/gtmscript\"\u003Evar tp_rtrgt_segment=\"",["escape",["macro",46],7],"\",tp_rtrgt_random=1E16*Math.random(),tp_rtrgt_url=\"http\"+(\"https:\"==document.location.protocol?\"s\":\"\")+\":\/\/hal9000.redintelligence.net\/retarget?a\\x3d51091\\x26version\\x3d1\";tp_rtrgt_url+=\"\\x26segment\\x3d\"+tp_rtrgt_segment;var tp_rtrgt_iframe=\"i\"+tp_rtrgt_random;window.tp_rtrgt_iframes=window.tp_rtrgt_iframes||[];window.tp_rtrgt_iframes[tp_rtrgt_iframe]=document.createElement(\"iframe\");window.tp_rtrgt_iframes[tp_rtrgt_iframe].height=\"1\";\nwindow.tp_rtrgt_iframes[tp_rtrgt_iframe].width=\"1\";window.tp_rtrgt_iframes[tp_rtrgt_iframe].scrolling=\"no\";window.tp_rtrgt_iframes[tp_rtrgt_iframe].cssText=\"position:absolute;visibility:hidden;left:0px;top:0px;width:1px;height:1px;border:0\";window.tp_rtrgt_iframes[tp_rtrgt_iframe].src=tp_rtrgt_url;var tp_rtrgt_first_script=document.getElementsByTagName(\"script\")[0];tp_rtrgt_first_script.parentNode.appendChild(window.tp_rtrgt_iframes[tp_rtrgt_iframe]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":346
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript language=\"JavaScript\" type=\"text\/gtmscript\"\u003Evar tp_rtrgt_items=\"",["escape",["macro",49],7],"\",tp_rtrgt_segment=\"\",tp_rtrgt_random=1E16*Math.random(),tp_rtrgt_url=\"http\"+(\"https:\"==document.location.protocol?\"s\":\"\")+\":\/\/hal9000.redintelligence.net\/retarget?a\\x3d51091\\x26version\\x3d1\\x26event\\x3dbasket\\x26cat\\x3d16783\";tp_rtrgt_url+=\"\\x26segment\\x3d\"+tp_rtrgt_segment;tp_rtrgt_url+=\"\\x26items\\x3d\"+tp_rtrgt_items;var tp_rtrgt_iframe=\"i\"+tp_rtrgt_random;window.tp_rtrgt_iframes=window.tp_rtrgt_iframes||[];window.tp_rtrgt_iframes[tp_rtrgt_iframe]=document.createElement(\"iframe\");\nwindow.tp_rtrgt_iframes[tp_rtrgt_iframe].height=\"1\";window.tp_rtrgt_iframes[tp_rtrgt_iframe].width=\"1\";window.tp_rtrgt_iframes[tp_rtrgt_iframe].scrolling=\"no\";window.tp_rtrgt_iframes[tp_rtrgt_iframe].cssText=\"position:absolute;visibility:hidden;left:0px;top:0px;width:1px;height:1px;border:0\";window.tp_rtrgt_iframes[tp_rtrgt_iframe].src=tp_rtrgt_url;var tp_rtrgt_first_script=document.getElementsByTagName(\"script\")[0];tp_rtrgt_first_script.parentNode.appendChild(window.tp_rtrgt_iframes[tp_rtrgt_iframe]);\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":347
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript language=\"JavaScript\" type=\"text\/gtmscript\"\u003Evar tp_rtrgt_items=\"",["escape",["macro",49],7],"\",tp_rtrgt_segment=\"\",tp_rtrgt_random=1E16*Math.random(),tp_rtrgt_url=\"http\"+(\"https:\"==document.location.protocol?\"s\":\"\")+\":\/\/hal9000.redintelligence.net\/retarget?a\\x3d51091\\x26version\\x3d1\\x26event\\x3dtransaction\\x26cat\\x3d16783\";tp_rtrgt_url+=\"\\x26segment\\x3d\"+tp_rtrgt_segment;tp_rtrgt_url+=\"\\x26items\\x3d\"+tp_rtrgt_items;var tp_rtrgt_iframe=\"i\"+tp_rtrgt_random;window.tp_rtrgt_iframes=window.tp_rtrgt_iframes||[];window.tp_rtrgt_iframes[tp_rtrgt_iframe]=document.createElement(\"iframe\");\nwindow.tp_rtrgt_iframes[tp_rtrgt_iframe].height=\"1\";window.tp_rtrgt_iframes[tp_rtrgt_iframe].width=\"1\";window.tp_rtrgt_iframes[tp_rtrgt_iframe].scrolling=\"no\";window.tp_rtrgt_iframes[tp_rtrgt_iframe].cssText=\"position:absolute;visibility:hidden;left:0px;top:0px;width:1px;height:1px;border:0\";window.tp_rtrgt_iframes[tp_rtrgt_iframe].src=tp_rtrgt_url;var tp_rtrgt_first_script=document.getElementsByTagName(\"script\")[0];tp_rtrgt_first_script.parentNode.appendChild(window.tp_rtrgt_iframes[tp_rtrgt_iframe]);\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":348
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"\/\/s.marvellousmachine.net\/ifrpx?type=0\u0026amp;cid=",["escape",["macro",51],12],"\u0026amp;language=",["escape",["macro",52],12],"\u0026amp;extref=",["escape",["macro",53],12],"\" width=\"0\" height=\"0\" scrolling=\"no\" frameborder=\"0\" marginwidth=\"0px\" marginheight=\"0px\" style=\"width:0px;height:0px;border:0px;overflow:hidden;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":356
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"\/\/s.marvellousmachine.net\/?type=3\u0026amp;cid=",["escape",["macro",51],12],"\u0026amp;language=",["escape",["macro",52],12],"\u0026amp;results=\u0026amp;category=",["escape",["macro",55],12],"\u0026amp;extref=",["escape",["macro",53],12],"\" width=\"0\" height=\"0\" scrolling=\"no\" frameborder=\"0\" marginwidth=\"0px\" marginheight=\"0px\" style=\"width:0px;height:0px;border:0px;overflow:hidden;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":357
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"\/\/s.marvellousmachine.net\/?type=2\u0026amp;cid=",["escape",["macro",51],12],"\u0026amp;language=",["escape",["macro",52],12],"\u0026amp;productids=",["escape",["macro",49],12],"\u0026amp;salecode=",["escape",["macro",56],12],"\u0026amp;price=",["escape",["macro",57],12],"\u0026amp;curr=",["escape",["macro",58],12],"\u0026amp;extref=",["escape",["macro",53],12],"\" width=\"0\" height=\"0\" scrolling=\"no\" frameborder=\"0\" marginwidth=\"0px\" marginheight=\"0px\" style=\"width:0px;height:0px;border:0px;overflow:hidden;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":358
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"\/\/s.marvellousmachine.net\/?type=4\u0026amp;cid=",["escape",["macro",51],12],"\u0026amp;language=",["escape",["macro",52],12],"\u0026amp;basket=",["escape",["macro",49],12],"\u0026amp;price=\u0026amp;curr=\u0026amp;extref=",["escape",["macro",53],12],"\" width=\"0\" height=\"0\" scrolling=\"no\" frameborder=\"0\" marginwidth=\"0px\" marginheight=\"0px\" style=\"width:0px;height:0px;border:0px;overflow:hidden;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":359
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"\/\/s.marvellousmachine.net\/?type=1\u0026amp;cid=",["escape",["macro",51],12],"\u0026amp;language=",["escape",["macro",52],12],"\u0026amp;productid=",["escape",["macro",49],12],"\u0026amp;category=",["escape",["macro",55],12],"\u0026amp;price=\u0026amp;curr=\u0026amp;extref=",["escape",["macro",53],12],"\" width=\"0\" height=\"0\" scrolling=\"no\" frameborder=\"0\" marginwidth=\"0px\" marginheight=\"0px\" style=\"width:0px;height:0px;border:0px;overflow:hidden;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":363
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",61,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eif(0\u003C$(\".product-features\").length){var pricingPageType=window.location.pathname.split(\"\/\")[2];[\"present\",\"video\",\"design\"].includes(pricingPageType)||(pricingPageType=\"generic\");var heatmapName=pricingPageType+\"_pricing_page_heatmap\";hj(\"trigger\",heatmapName)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":797
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",61,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003ESite.surfaceTeamOptions\u0026\u0026hj(\"trigger\",\"surface_edu_discounts_in_business_buynow\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":818
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",61,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar tabPanes=document.getElementsByClassName(\"tab-pane\"),hasLongTitle=0\u003Cdocument.querySelectorAll(\".modal-body h3:first-child b\").length,targetVariant;targetVariant=1\u003CtabPanes.length\u0026\u0026hasLongTitle?\"paywall-platform-offering-biz-only-variant-a\":1\u003CtabPanes.length\u0026\u0026!hasLongTitle?\"paywall-platform-offering-biz-only-variant-c\":1===tabPanes.length?\"paywall-platform-offering-biz-only-variant-b\":\"paywall-platform-offering-biz-only-control\";hj(\"trigger\",targetVariant);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":823
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ehj(\"trigger\",\"prezi-video\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":850
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ehj(\"trigger\",\"presentation-template\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":852
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",61,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(d){function b(){var a=document.querySelector(\".pricing-tabs__item.active\");a\u0026\u0026(a=a.dataset.lookup,a.endsWith(\"edu\")\u0026\u0026!c\u0026\u0026(c=!0,a=(a=document.querySelector(\"[data-lookup\\x3dpricing-page-edu-tab-edu-pro-card]\"))?\"variant\":\"control\",a=\"edu_pro__\"+a,hj(\"trigger\",a)))}var c=!1;b();d(\"#pricing-carousel\").on(\"slid.bs.carousel\",b)})(jQuery);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":853
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",61,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.querySelector(\"a[data-lookup\\x3dpricing-page-nav-edu]\");if(a){a=a.dataset.title;switch(a){case \"Students \\x26 Educators\":var b=\"edu_tab_control\";break;case \"Educators \\x26 Students\":b=\"edu_tab_lead_with_educators\";break;case \"Educators\":b=\"edu_tab_only_educators\"}hj(\"trigger\",b)}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":854
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",61,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.querySelector(\"#signup-success-invite-app-root\");a\u0026\u0026hj(\"trigger\",\"success_with_invite_colleagues\")})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":855
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*preprod.prezi.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"^\\\/[a-z0-9-_%]{12}\\\/.*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"login-failed"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"terms-of-use"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"Page not found"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"desktop-eula"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"^\\\/p\\\/([a-z0-9-_]){12}\\\/(?!embed).*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"create-prezi"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"^\\\/m\\\/[a-z0-9-_%]{12}\\\/.*",
      "ignore_case":true
    },{
      "function":"_ew",
      "arg0":["macro",2],
      "arg1":"embed\/"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"^(\\\/view)*\\\/m*\\\/[a-zA-Z0-9-_%]*\\\/.*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"preprod"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"BuyNowSubmission"
    },{
      "function":"_gt",
      "arg0":["macro",8],
      "arg1":"0"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"BASIC"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"EDUVIDEOPRIVACY"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"signup"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"upgrade"
    },{
      "function":"_cn",
      "arg0":["macro",20],
      "arg1":"blog.prezi.com"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"http:\/\/support.prezi.com"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"^\\\/p\\\/([a-zA-Z0-9._-]){12}\\\/"
    },{
      "function":"_sw",
      "arg0":["macro",2],
      "arg1":"\/live\/"
    },{
      "function":"_sw",
      "arg0":["macro",2],
      "arg1":"\/p\/create-prezi\/"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"^\\\/view\\\/(m\\\/)?([a-zA-Z0-9]){20}\\\/$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"^\\\/view\\\/(m\\\/)?([a-zA-Z0-9]){20}\\\/embed\\\/?",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"^\\\/p\\\/edit\\\/([a-zA-Z0-9._-]){12}\\\/"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"^\\\/([a-zA-Z0-9._-]){12}\\\/"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"^\\\/v\\\/.*"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"test"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"trialFormSubmission"
    },{
      "function":"_sw",
      "arg0":["macro",10],
      "arg1":"\/business\/support\/"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"salesFormSubmission"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"campaign-decided"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"optimizely-referrer-override"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"ebookLead"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"gmail."
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"hotmail.com"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"yahoo.com"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"qq.com"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"naver.com"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"outlook.com"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"k12"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"edu"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"student"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"org"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"school"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"itsem."
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"ipn."
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"iteso."
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"unam."
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"cbtis."
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"gnail."
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"aol."
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"live."
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"web."
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"ymail."
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"yanderex."
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"icloud."
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"mail."
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"\/pricing\/"
    },{
      "function":"_ew",
      "arg0":["macro",10],
      "arg1":"\/business\/"
    },{
      "function":"_ew",
      "arg0":["macro",10],
      "arg1":"\/the-science\/"
    },{
      "function":"_ew",
      "arg0":["macro",10],
      "arg1":"\/contact\/sales\/"
    },{
      "function":"_ew",
      "arg0":["macro",10],
      "arg1":"\/product\/"
    },{
      "function":"_ew",
      "arg0":["macro",10],
      "arg1":"\/gallery\/"
    },{
      "function":"_cn",
      "arg0":["macro",32],
      "arg1":"student"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"BASIC|EDUVIDEOPRIVACY|EDUSTANDARD"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"signup"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"^\\\/(view|p)\\\/[a-zA-Z0-9-_%]*\\\/embed\\\/*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"^\\\/embed\\\/preview\\\/[a-zA-Z0-9-_%]*",
      "ignore_case":true
    },{
      "function":"_sw",
      "arg0":["macro",10],
      "arg1":"\/jobs\/"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"\/"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/signup\/"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"pricing\/"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"signup"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"\/trial-start\/"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/cms\/for-business\/"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"\/education\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"pricing-options"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*\\.com\\\/(?!login-failed)[a-z0-9-_%]{12}\\\/.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"\/design\/"
    },{
      "function":"_sw",
      "arg0":["macro",2],
      "arg1":"\/video"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/v\/"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"^\\\/dashboard\\\/?$"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"\/cms\/prezi-education\/"
    },{
      "function":"_cn",
      "arg0":["macro",38],
      "arg1":"\/welcome#\/get-started-with-prezi"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"^(\\\/video\\\/?)$|(\\\/prezi-video\\\/?)$"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"\/presentation-template\/"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"salesFormFailure"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"PLUS"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"EDU"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"STANDARD"
    },{
      "function":"_eq",
      "arg0":["macro",29],
      "arg1":"EDUSTANDARD"
    },{
      "function":"_eq",
      "arg0":["macro",29],
      "arg1":"EDUPLUS"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"Online Presentation Tools"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"prezi.com\/index\/\\d+\/$"
    },{
      "function":"_ew",
      "arg0":["macro",10],
      "arg1":"\/login\/"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"joinTeamFormSubmission"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"\/signup\/success"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"\/upgrade\/success"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"\/embedded\/success"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"webinarRegistration"
    },{
      "function":"_sw",
      "arg0":["macro",2],
      "arg1":"\/upgrade\/"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/upgrade\/success"
    },{
      "function":"_sw",
      "arg0":["macro",2],
      "arg1":"\/signup\/"
    },{
      "function":"_sw",
      "arg0":["macro",2],
      "arg1":"\/signup\/business\/"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/success"
    },{
      "function":"_css",
      "arg0":["macro",40],
      "arg1":"#submit-user-form-button"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"PREMIUM"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"NO_MATCH"
    },{
      "function":"_sw",
      "arg0":["macro",2],
      "arg1":"\/upgrade\/plan\/"
    },{
      "function":"_eq",
      "arg0":["macro",29],
      "arg1":"EDUPRO"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"PRO"
    },{
      "function":"_eq",
      "arg0":["macro",29],
      "arg1":"PROPLUS"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"PUBLIC"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"EDUENJOY"
    },{
      "function":"_cn",
      "arg0":["macro",32],
      "arg1":"business"
    },{
      "function":"_cn",
      "arg0":["macro",32],
      "arg1":"education"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"BASIC"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"EDUSTANDARD"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"your_page_daily_push"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"M"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"Y"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"prezi.com\/upgrade\/embedded\/features\/"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"\/business\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"Prezi Business | Presentation \u0026 Analytics Software for Teams"
    },{
      "function":"_sw",
      "arg0":["macro",2],
      "arg1":"\/signup\/business\/buynow\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"prezi.com\/learn"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"\/dashboard\/next\/?$"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"UniqViewPageVisit"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",10],
      "arg1":"^\\\/(product|education|pricing|presentation-template|gallery|business|the-science)\\\/$"
    },{
      "function":"_re",
      "arg0":["macro",10],
      "arg1":"^\\\/upgrade\\\/embedded\\\/features\\\/[a-z0-9_-]*\\\/$"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"\/upgrade\/next\/"
    },{
      "function":"_re",
      "arg0":["macro",10],
      "arg1":"\\\/signup\\\/(standard|plus|premium|verify\\\/edu\\\/plus|)\\\/"
    },{
      "function":"_eq",
      "arg0":["macro",47],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",10],
      "arg1":"\\\/upgrade\\\/(embedded\\\/)?plan\\\/.*"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"\/signup\/business\/buynow\/"
    },{
      "function":"_re",
      "arg0":["macro",10],
      "arg1":"\\\/(signup(\\\/business)?|upgrade(\\\/embedded)?)\\\/success\\\/"
    },{
      "function":"_eq",
      "arg0":["macro",50],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"\/pricing\/"
    },{
      "function":"_re",
      "arg0":["macro",10],
      "arg1":"\\\/signup\\\/(standard|plus|premium|edu\\\/plus)\\\/"
    }],
  "rules":[
    [["if",0],["add",6,11,15,18,20,23,32,34,41,76,114,54,55,56]],
    [["if",13],["unless",12],["add",7,60,121]],
    [["if",14,17],["unless",12,15,16],["add",8,12,0,30,36,87,98,100,115,124]],
    [["if",14,18],["unless",12],["add",9,13,31,33,98,99,100,118]],
    [["if",0,19],["add",10]],
    [["if",30],["unless",12,29],["add",14,73,75,101]],
    [["if",0,20],["add",16],["block",11,15,18,20,23,32,34,41,58,76,114]],
    [["if",0,31],["add",17]],
    [["if",32],["unless",12,29],["add",19,1,5,52,62,66,83,102,117]],
    [["if",33],["add",21]],
    [["if",34],["add",22]],
    [["if",35],["unless",12],["add",23,77,119]],
    [["if",17],["unless",12],["add",4,42,64,116]],
    [["if",0,60],["add",24,46,61,72,78,113]],
    [["if",0,61],["add",24,72,113]],
    [["if",0,62],["add",24]],
    [["if",0,63],["add",24]],
    [["if",0,64],["add",24,61]],
    [["if",0,65],["add",24]],
    [["if",17,66],["unless",12],["add",2,95]],
    [["if",32],["unless",12,29,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59],["add",3,65,73],["block",1,66]],
    [["if",0,2],["unless",3,4,5,6],["add",25,122],["block",6]],
    [["if",0,7],["unless",5,8],["add",26,122],["block",6]],
    [["if",67,68],["unless",12],["add",27,35,69,82]],
    [["if",0,9],["unless",5,10],["add",28],["block",6]],
    [["if",0,10,11],["unless",5],["add",29],["block",6]],
    [["if",0,69],["unless",5],["add",37]],
    [["if",0,70],["unless",5],["add",37]],
    [["if",0,71],["add",38]],
    [["if",0,72],["add",39,50,61]],
    [["if",0,73],["add",40]],
    [["if",0,74],["add",43,44,48,134]],
    [["if",0,75],["add",45,47]],
    [["if",0,76],["add",49,139,140],["block",76]],
    [["if",0,77],["add",51]],
    [["if",0,78],["add",53,61]],
    [["if",0,79],["add",57,72]],
    [["if",0,80],["unless",1],["add",58,59]],
    [["if",0,82],["add",61]],
    [["if",0,83],["add",61]],
    [["if",0,84],["add",61]],
    [["if",0,85],["add",61]],
    [["if",0,86],["add",61]],
    [["if",0,87],["add",61]],
    [["if",0,88],["add",61,137]],
    [["if",0,89],["add",61,138]],
    [["if",90],["unless",12],["add",63]],
    [["if",17,91],["unless",12,92],["add",67,105]],
    [["if",17,93],["unless",12,92],["add",68,105]],
    [["if",17,94],["unless",12],["add",70]],
    [["if",17,95],["unless",12],["add",71]],
    [["if",0,96,97],["add",72]],
    [["if",0,98],["add",72]],
    [["if",0,99],["add",72]],
    [["if",100],["unless",12,29],["add",74]],
    [["if",104],["unless",12],["add",77,119]],
    [["if",0,105],["unless",106],["add",79]],
    [["if",0,107],["unless",108,109],["add",80]],
    [["if",107,110,111],["add",81,85]],
    [["if",17,112],["unless",12,92],["add",84]],
    [["if",17,113],["unless",12],["add",86]],
    [["if",0,114],["add",88]],
    [["if",17,115],["unless",12],["add",89,94]],
    [["if",17,116],["unless",12,91,92],["add",90]],
    [["if",17,117],["unless",12,92],["add",91]],
    [["if",17,118],["unless",12],["add",92]],
    [["if",17,119],["unless",12],["add",93]],
    [["if",17,120],["unless",12],["add",96]],
    [["if",17,121],["unless",12],["add",97]],
    [["if",124],["unless",12,118,119,122,123],["add",103]],
    [["if",124],["unless",12],["add",104]],
    [["if",17,91,125],["unless",12,92],["add",106,110]],
    [["if",17,91,126],["unless",12,92],["add",107,111]],
    [["if",17,93,125],["unless",12,92],["add",108,110]],
    [["if",17,93,126],["unless",12,92],["add",109,111]],
    [["if",0,127],["add",112,136]],
    [["if",18],["unless",12],["add",116]],
    [["if",0,128,129],["add",120]],
    [["if",0,130],["add",120]],
    [["if",0,131],["add",120]],
    [["if",133],["add",123]],
    [["if",0,96,134],["add",125]],
    [["if",0,134,135],["add",126]],
    [["if",0,134,136],["add",126]],
    [["if",0,134,137],["add",126]],
    [["if",0,134,138,139],["add",127]],
    [["if",0,134,139,140],["add",127]],
    [["if",0,134,141],["add",127]],
    [["if",0,134,142],["add",128]],
    [["if",0,96,143],["add",129]],
    [["if",0,143,144],["add",130]],
    [["if",0,137,143],["add",130]],
    [["if",0,142,143],["add",131]],
    [["if",0,139,143,145],["add",132]],
    [["if",0,141,143],["add",132]],
    [["if",0,139,140,143],["add",132]],
    [["if",0,136,143],["add",133]],
    [["if",0,141],["add",135]],
    [["if",0,101],["add",141],["block",76]],
    [["if",0,102],["add",141],["block",76]],
    [["if",0,1],["block",6,10,11,15,16,17,18,20,23,24,25,26,28,29,32,34,37,38,41,58,61,72,76,78,79,80,81,88,112,113,114,119,120]],
    [["if",0,21],["unless",8],["block",11,15,18,20,32,34,41,58,114]],
    [["if",0,22],["block",11,15,18,20,23,32,34,41,58,76,114]],
    [["if",0,23],["block",11,15,18,20,23,32,34,41,58,76,114]],
    [["if",0,24],["block",11,15,18,20,23,32,34,41,58,76,114]],
    [["if",0,25],["block",11,15,18,20,23,32,34,41,58,76,114]],
    [["if",0,26],["unless",8],["block",11,15,18,20,32,34,41,58,114]],
    [["if",0,27],["block",11,15,18,23,32,34,41,58,114]],
    [["if",0,28],["block",11,15,18,23,32,34,41,58,114]],
    [["if",0,81],["block",58,72]],
    [["if",0,103],["block",76]],
    [["if",0,132],["block",121]]]
},
"runtime":[[50,"__pntr",[46,"a"],[52,"b",["require","copyFromWindow"]],[52,"c",["require","createArgumentsQueue"]],[52,"d",["require","injectScript"]],[52,"e",["require","logToConsole"]],[52,"f",["require","makeTableMap"]],["e",[0,"GTM PTag v1.3; tagId: ",[17,[15,"a"],"tagId"]]],[52,"g",[28,["b","pintrk"]]],[52,"h",["c","pintrk","pintrk.queue"]],[22,[15,"g"],[46,[53,[52,"k",[8,"np","gtm"]],[22,[17,[15,"a"],"em"],[46,[43,[15,"k"],"em",[17,[15,"a"],"em"]]]],[22,[2,[15,"a"],"hasOwnProperty",[7,"aem_enabled"]],[46,[43,[15,"k"],"aem_enabled",[20,[17,[15,"a"],"aem_enabled"],"yes"]]]],[22,[2,[15,"a"],"hasOwnProperty",[7,"md_scraping_enabled"]],[46,[43,[15,"k"],"md_frequency",[39,[17,[15,"a"],"md_scraping_enabled"],1,0]]]],["h","load",[2,[17,[15,"a"],"tagId"],"toString",[7]],[15,"k"]],["h","page"]]],[46,[22,[17,[15,"a"],"em"],[46,[53,[52,"k",[8,"em",[17,[15,"a"],"em"]]],["h","set",[15,"k"]]]]]]],[22,[20,[17,[15,"a"],"eventName"],""],[46,[53,[52,"k",[8]],[22,[2,[15,"a"],"hasOwnProperty",[7,"aem_enabled"]],[46,[43,[15,"k"],"aem_enabled",[20,[17,[15,"a"],"aem_enabled"],"yes"]]]],["h","set",[15,"k"]]]]],[52,"i",[51,"",[7],[41,"k"],[3,"k",[8]],[22,[17,[15,"a"],"setCustomParams"],[46,[3,"k",["f",[17,[15,"a"],"values"],"name","value"]]]],[43,[15,"k"],"np","gtm"],[52,"l",[51,"",[7,"n"],[22,[21,[16,[15,"a"],[15,"n"]],[44]],[46,[43,[15,"k"],[15,"n"],[16,[15,"a"],[15,"n"]]]]]]],[52,"m",[51,"",[7,"n"],[22,[21,[16,[15,"a"],[15,"n"]],[44]],[46,[22,[20,[17,[15,"k"],"line_items"],[44]],[46,[43,[15,"k"],"line_items",[7,[8]]]]],[43,[16,[17,[15,"k"],"line_items"],0],[15,"n"],[16,[15,"a"],[15,"n"]]]]]]],[38,[17,[15,"a"],"eventName"],[46,"watchvideo","viewcategory","custom","signup","lead","search","addtocart","checkout","pagevisit"],[46,[5,[46]],[5,[46]],[5,[46,[4]]],[5,[46]],[5,[46,["l","lead_type"],[4]]],[5,[46,["l","search_query"],[4]]],[5,[46]],[5,[46,["l","order_id"],["l","order_quantity"],["l","value"],["l","currency"]]],[5,[46,["m","product_id"],["m","product_category"],[4]]],[9,[46,[4]]]]],[22,[21,[17,[15,"a"],"eventName"],""],[46,["e",[0,"Firing Pinterest event: ",[17,[15,"a"],"eventName"]]],["e","Event Data:"],["e",[15,"k"]],["h","track",[17,[15,"a"],"eventName"],[15,"k"]]]],[2,[15,"a"],"gtmOnSuccess",[7]]]],[52,"j",[51,"",[7],["e","Pinterest Error: Loading JS failed!"],[2,[15,"a"],"gtmOnFailure",[7]]]],["d","https://s.pinimg.com/ct/core.js",[15,"i"],[15,"j"],"PinterestJS"]],[50,"__bzi",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","setInWindow"]],["c","_linkedin_data_partner_id",[17,[15,"a"],"id"]],["b","https://snap.licdn.com/li.lms-analytics/insight.min.js",[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]]]
,"permissions":{"__pntr":{"access_globals":{"keys":[{"key":"pintrk","read":true,"write":true,"execute":true},{"key":"pintrk.queue","read":true,"write":true,"execute":true}]},"logging":{"environments":"debug"},"inject_script":{"urls":["https:\/\/s.pinimg.com\/ct\/core.js"]}},"__bzi":{"access_globals":{"keys":[{"key":"_linkedin_data_partner_id","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__pntr","__bzi"]}

};

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ca=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ca(a)}},ea="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;
if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={a:!0},ja={};try{ja.__proto__=ia;ha=ja.a;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var la=fa,ma=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.wi=b.prototype},na=this||self,ra=function(a){if(a&&a!=na)return oa(a.document);null===qa&&(qa=oa(na.document));return qa},sa=/^[\w+/_-]+[=]{0,2}$/,qa=null,oa=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");
if(c&&sa.test(c))return c}return""},ta=function(a){return a};var xa=function(a,b){this.g=a;this.o=b};var za=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},Aa=function(){this.D={};this.s=!1;this.J={}};Aa.prototype.get=function(a){return this.D["dust."+a]};Aa.prototype.set=function(a,b){this.s||(a="dust."+a,this.J.hasOwnProperty(a)||(this.D[a]=b))};Aa.prototype.has=function(a){return this.D.hasOwnProperty("dust."+a)};
var Ba=function(a){var b=[],c;for(c in a.D)a.D.hasOwnProperty(c)&&b.push(c.substr(5));return b},Ca=function(a,b){b="dust."+b;a.s||a.J.hasOwnProperty(b)||delete a.D[b]};var Da=function(a){this.o=new Aa;this.g=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(za(b)?this.g[Number(b)]=a[Number(b)]:this.o.set(b,a[b]))};aa=Da.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.g.length;c++){var d=this.g[c];null===d||void 0===d?b.push(""):d instanceof Da?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"===a){if(!za(b))throw Error("RangeError: Length property must be a valid integer.");this.g.length=Number(b)}else za(a)?this.g[Number(a)]=b:this.o.set(a,b)};aa.get=function(a){return"length"===a?this.length():za(a)?this.g[Number(a)]:this.o.get(a)};aa.length=function(){return this.g.length};aa.Jb=function(){for(var a=Ba(this.o),b=0;b<this.g.length;b++)a.push(b+"");return new Da(a)};var Ea=function(a,b){za(b)?delete a.g[Number(b)]:Ca(a.o,b)};aa=Da.prototype;aa.pop=function(){return this.g.pop()};
aa.push=function(a){return this.g.push.apply(this.g,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.g.shift()};aa.splice=function(a,b,c){return new Da(this.g.splice.apply(this.g,arguments))};aa.unshift=function(a){return this.g.unshift.apply(this.g,Array.prototype.slice.call(arguments))};aa.has=function(a){return za(a)&&this.g.hasOwnProperty(a)||this.o.has(a)};var Ga=function(){function a(f,g){if(b[f]){if(b[f].Hc+g>b[f].max)throw Error("Quota exceeded");b[f].Hc+=g}}var b={},c=void 0,d=void 0,e={Nh:function(f){c=f},yf:function(){c&&a(c,1)},Ph:function(f){d=f},Ua:function(f){d&&a(d,f)},$h:function(f,g){b[f]=b[f]||{Hc:0};b[f].max=g},th:function(f){return b[f]&&b[f].Hc||0},reset:function(){b={}},hh:a};e.onFnConsume=e.Nh;e.consumeFn=e.yf;e.onStorageConsume=e.Ph;e.consumeStorage=e.Ua;e.setMax=e.$h;e.getConsumed=e.th;e.reset=e.reset;e.consume=e.hh;return e};var Ia=function(a,b){this.s=a;this.N=function(c,d,e){return c.apply(d,e)};this.D=b;this.o=new Aa;this.g=this.J=void 0};Ia.prototype.add=function(a,b){Ja(this,a,b,!1)};var Ja=function(a,b,c,d){if(!a.o.s)if(a.s.Ua(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.o;e.set(b,c);e.J["dust."+b]=!0}else a.o.set(b,c)};
Ia.prototype.set=function(a,b){this.o.s||(!this.o.has(a)&&this.D&&this.D.has(a)?this.D.set(a,b):(this.s.Ua(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.o.set(a,b)))};Ia.prototype.get=function(a){return this.o.has(a)?this.o.get(a):this.D?this.D.get(a):void 0};Ia.prototype.has=function(a){return!!this.o.has(a)||!(!this.D||!this.D.has(a))};var Ka=function(a){var b=new Ia(a.s,a);a.J&&(b.J=a.J);b.N=a.N;b.g=a.g;return b};var La={},Na=function(a,b){La[a]=La[a]||[];La[a][b]=!0},Oa=function(a){for(var b=[],c=La[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var Pa=function(){},Qa=function(a){return"function"==typeof a},k=function(a){return"string"==typeof a},Ra=function(a){return"number"==typeof a&&!isNaN(a)},Sa=function(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&Na("TAGGING",4):Na("TAGGING",5);return b},Ta=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ua=function(a,b){if(a&&Sa(a))for(var c=
0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Wa=function(a,b){if(!Ra(a)||!Ra(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ya=function(a,b){for(var c=new Xa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Za=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},$a=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},ab=
function(a){return Math.round(Number(a))||0},eb=function(a){return"false"==String(a).toLowerCase()?!1:!!a},fb=function(a){var b=[];if(Sa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},gb=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},hb=function(){return(new Date).getTime()},Xa=function(){this.prefix="gtm.";this.values={}};Xa.prototype.set=function(a,b){this.values[this.prefix+a]=b};Xa.prototype.get=function(a){return this.values[this.prefix+a]};
var ib=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},jb=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},kb=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},nb=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},qb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},rb=function(a,b){var c=n;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=
Ta(b,d))return}return d},tb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},vb=/^\w{1,9}$/,wb=function(a){var b=[];Za(a,function(c,d){vb.test(c)&&d&&b.push(c)});return b.join(",")};var xb=function(a,b){Aa.call(this);this.N=a;this.ra=b};ma(xb,Aa);xb.prototype.toString=function(){return this.N};xb.prototype.Jb=function(){return new Da(Ba(this))};xb.prototype.g=function(a,b){a.s.yf();return this.ra.apply(new yb(this,a),Array.prototype.slice.call(arguments,1))};xb.prototype.o=function(a,b){try{return this.g.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};
var Ab=function(a,b){for(var c,d=0;d<b.length&&!(c=zb(a,b[d]),c instanceof xa);d++);return c},zb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof xb))throw Error("Attempting to execute non-function "+b[0]+".");return c.g.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.J;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}},yb=function(a,b){this.o=a;this.g=b},z=function(a,b){var c=a.g;return Sa(b)?zb(c,b):b},F=function(a){return a.o.N};var Cb=function(){Aa.call(this)};ma(Cb,Aa);Cb.prototype.Jb=function(){return new Da(Ba(this))};var Gb={control:function(a,b){return new xa(a,z(this,b))},fn:function(a,b,c){var d=this.g,e=z(this,b);if(!(e instanceof Da))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.g.s.Ua(a.length+f.length);return new xb(a,function(){return function(g){var h=Ka(d);void 0===h.g&&(h.g=this.g.g);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=z(this,l[m]),l[m]instanceof xa)return l[m];for(var p=e.get("length"),q=
0;q<p;q++)q<l.length?h.add(e.get(q),l[q]):h.add(e.get(q),void 0);h.add("arguments",new Da(l));var r=Ab(h,f);if(r instanceof xa)return"return"===r.g?r.o:r}}())},list:function(a){var b=this.g.s;b.Ua(arguments.length);for(var c=new Da,d=0;d<arguments.length;d++){var e=z(this,arguments[d]);"string"===typeof e&&b.Ua(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.g.s,c=new Cb,d=0;d<arguments.length-1;d+=2){var e=z(this,arguments[d])+"",f=z(this,arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ua(g);c.set(e,f)}return c},undefined:function(){}};var Hb=function(){this.s=Ga();this.g=new Ia(this.s)},Ib=function(a,b,c){var d=new xb(b,c);d.s=!0;a.g.set(b,d)};Hb.prototype.Lc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.o(c)};Hb.prototype.o=function(a){for(var b,c=0;c<arguments.length;c++)b=zb(this.g,arguments[c]);return b};Hb.prototype.D=function(a,b){var c=Ka(this.g);c.g=a;for(var d,e=1;e<arguments.length;e++)d=d=zb(c,arguments[e]);return d};var Jb=function(a){if(a instanceof Jb)return a;this.ya=a};Jb.prototype.toString=function(){return String(this.ya)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Kb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Lb=function(a){if(null==a)return String(a);var b=Kb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Mb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Nb=function(a){if(!a||"object"!=Lb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Mb(a,"constructor")&&!Mb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Mb(a,b)},G=function(a,b){var c=b||("array"==Lb(a)?[]:{}),d;for(d in a)if(Mb(a,d)){var e=a[d];"array"==Lb(e)?("array"!=Lb(c[d])&&(c[d]=[]),c[d]=G(e,c[d])):Nb(e)?(Nb(c[d])||(c[d]={}),c[d]=G(e,c[d])):c[d]=e}return c};var Qb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=Ba(h),p=0;p<m.length;p++)l[m[p]]=g(h.get(m[p]))},g=function(h){var l=Ta(d,h);if(-1<l)return e[l];if(h instanceof Da){var m=[];d.push(h);e.push(m);for(var p=h.Jb(),q=0;q<p.length();q++)m[p.get(q)]=g(h.get(p.get(q)));return m}if(h instanceof Cb){var r={};d.push(h);e.push(r);f(h,r);return r}if(h instanceof xb){var u=function(){for(var t=Array.prototype.slice.call(arguments,0),v=0;v<t.length;v++)t[v]=Pb(t[v],b,!!c);var x=b?b.s:Ga(),A=new Ia(x);
b&&(A.g=b.g);return g(h.g.apply(h,[A].concat(t)))};d.push(h);e.push(u);f(h,u);return u}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Pb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=Ta(d,
h);if(-1<l)return e[l];if(Sa(h)||$a(h)){var m=new Da([]);d.push(h);e.push(m);for(var p in h)h.hasOwnProperty(p)&&m.set(p,g(h[p]));return m}if(Nb(h)){var q=new Cb;d.push(h);e.push(q);f(h,q);return q}if("function"===typeof h){var r=new xb("",function(t){for(var v=Array.prototype.slice.call(arguments,0),x=0;x<v.length;x++)v[x]=Qb(z(this,v[x]),b,!!c);return g((0,this.g.N)(h,h,v))});d.push(h);e.push(r);f(h,r);return r}var u=typeof h;if(null===h||"string"===u||"number"===u||"boolean"===u)return h;};return g(a)};var Rb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Sb=function(a){if(void 0===a||Sa(a)||Nb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Ub={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof Da)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new Da(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.g(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.g(a,this.get(e),e,this)&&d.push(this.get(e));return new Da(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.g(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.g(a,this.get(e),e,this));return new Da(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Rb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):Ea(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new Da(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.g(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Rb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.g(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):Ea(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Vb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Wb=new xa("break"),Xb=new xa("continue"),Yb=function(a,b){return z(this,a)+z(this,b)},Zb=function(a,b){return z(this,a)&&z(this,b)},$b=function(a,b,c){a=z(this,a);b=z(this,b);c=z(this,c);if(!(c instanceof Da))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=Ta(Vb,b)){var d=Qb(c);return Pb(a[b].apply(a,d),this.g)}throw Error("TypeError: "+b+" is not a function");}if(a instanceof Da){if(a.has(b)){var e=a.get(b);if(e instanceof xb){var f=Rb(c);f.unshift(this.g);return e.g.apply(e,f)}throw Error("TypeError: "+b+" is not a function");}if(0<=Ta(Ub.supportedMethods,b)){var g=
Rb(c);g.unshift(this.g);return Ub[b].apply(a,g)}}if(a instanceof xb||a instanceof Cb){if(a.has(b)){var h=a.get(b);if(h instanceof xb){var l=Rb(c);l.unshift(this.g);return h.g.apply(h,l)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof xb?a.N:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Rb(c))}if(a instanceof Jb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},ac=function(a,b){a=z(this,a);if("string"!==
typeof a)throw Error("Invalid key name given for assignment.");var c=this.g;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=z(this,b);c.set(a,d);return d},bc=function(a){var b=Ka(this.g),c=Ab(b,Array.prototype.slice.apply(arguments));if(c instanceof xa)return c},cc=function(){return Wb},dc=function(a){for(var b=z(this,a),c=0;c<b.length;c++){var d=z(this,b[c]);if(d instanceof xa)return d}},ec=function(a){for(var b=this.g,c=0;c<arguments.length-1;c+=2){var d=arguments[c];
if("string"===typeof d){var e=z(this,arguments[c+1]);Ja(b,d,e,!0)}}},hc=function(){return Xb},ic=function(a,b,c){var d=new Da;b=z(this,b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.g.add(a,z(this,f))},jc=function(a,b){return z(this,a)/z(this,b)},kc=function(a,b){a=z(this,a);b=z(this,b);var c=a instanceof Jb,d=b instanceof Jb;return c||d?c&&d?a.ya==b.ya:!1:a==b},lc=function(a){for(var b,c=0;c<arguments.length;c++)b=
z(this,arguments[c]);return b};function mc(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=Ab(f,d);if(g instanceof xa){if("break"===g.g)break;if("return"===g.g)return g}}}function nc(a,b,c){if("string"===typeof b)return mc(a,function(){return b.length},function(f){return f},c);if(b instanceof Cb||b instanceof Da||b instanceof xb){var d=b.Jb(),e=d.length();return mc(a,function(){return e},function(f){return d.get(f)},c)}}
var oc=function(a,b,c){a=z(this,a);b=z(this,b);c=z(this,c);var d=this.g;return nc(function(e){d.set(a,e);return d},b,c)},pc=function(a,b,c){a=z(this,a);b=z(this,b);c=z(this,c);var d=this.g;return nc(function(e){var f=Ka(d);Ja(f,a,e,!0);return f},b,c)},qc=function(a,b,c){a=z(this,a);b=z(this,b);c=z(this,c);var d=this.g;return nc(function(e){var f=Ka(d);f.add(a,e);return f},b,c)},sc=function(a,b,c){a=z(this,a);b=z(this,b);c=z(this,c);var d=this.g;return rc(function(e){d.set(a,e);return d},b,c)},tc=
function(a,b,c){a=z(this,a);b=z(this,b);c=z(this,c);var d=this.g;return rc(function(e){var f=Ka(d);Ja(f,a,e,!0);return f},b,c)},uc=function(a,b,c){a=z(this,a);b=z(this,b);c=z(this,c);var d=this.g;return rc(function(e){var f=Ka(d);f.add(a,e);return f},b,c)};
function rc(a,b,c){if("string"===typeof b)return mc(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof Da)return mc(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var vc=function(a,b,c,d){function e(p,q){for(var r=0;r<f.length();r++){var u=f.get(r);q.add(u,p.get(u))}}var f=z(this,a);if(!(f instanceof Da))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.g;d=z(this,d);var h=Ka(g);for(e(g,h);zb(h,b);){var l=Ab(h,d);if(l instanceof xa){if("break"===l.g)break;if("return"===l.g)return l}var m=Ka(g);e(h,m);zb(m,c);h=m}},wc=function(a){a=z(this,a);var b=this.g,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},xc=function(a,b){var c;a=z(this,a);b=z(this,b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof Cb||a instanceof Da||a instanceof xb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:za(b)&&(c=a[b]);else if(a instanceof Jb)return;return c},yc=function(a,b){return z(this,a)>z(this,
b)},Bc=function(a,b){return z(this,a)>=z(this,b)},Cc=function(a,b){a=z(this,a);b=z(this,b);a instanceof Jb&&(a=a.ya);b instanceof Jb&&(b=b.ya);return a===b},Dc=function(a,b){return!Cc.call(this,a,b)},Ec=function(a,b,c){var d=[];z(this,a)?d=z(this,b):c&&(d=z(this,c));var e=Ab(this.g,d);if(e instanceof xa)return e},Fc=function(a,b){return z(this,a)<z(this,b)},Gc=function(a,b){return z(this,a)<=z(this,b)},Hc=function(a,b){return z(this,a)%z(this,b)},Ic=function(a,b){return z(this,a)*z(this,b)},Jc=function(a){return-z(this,
a)},Kc=function(a){return!z(this,a)},Lc=function(a,b){return!kc.call(this,a,b)},Pc=function(){return null},Qc=function(a,b){return z(this,a)||z(this,b)},Rc=function(a,b){var c=z(this,a);z(this,b);return c},Sc=function(a){return z(this,a)},Tc=function(a){return Array.prototype.slice.apply(arguments)},Uc=function(a){return new xa("return",z(this,a))},Vc=function(a,b,c){a=z(this,a);b=z(this,b);c=z(this,c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof
xb||a instanceof Da||a instanceof Cb)&&a.set(b,c);return c},Wc=function(a,b){return z(this,a)-z(this,b)},Xc=function(a,b,c){a=z(this,a);var d=z(this,b),e=z(this,c);if(!Sa(d)||!Sa(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===z(this,d[h]))if(f=z(this,e[h]),f instanceof xa){var l=f.g;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=z(this,e[e.length-1]),f instanceof xa&&("return"===f.g||"continue"===
f.g)))return f},Yc=function(a,b,c){return z(this,a)?z(this,b):z(this,c)},Zc=function(a){a=z(this,a);return a instanceof xb?"function":typeof a},$c=function(a){for(var b=this.g,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},ad=function(a,b,c,d){var e=z(this,d);if(z(this,c)){var f=Ab(this.g,e);if(f instanceof xa){if("break"===f.g)return;if("return"===f.g)return f}}for(;z(this,a);){var g=Ab(this.g,e);if(g instanceof xa){if("break"===g.g)break;if("return"===g.g)return g}z(this,
b)}},bd=function(a){return~Number(z(this,a))},cd=function(a,b){return Number(z(this,a))<<Number(z(this,b))},dd=function(a,b){return Number(z(this,a))>>Number(z(this,b))},ed=function(a,b){return Number(z(this,a))>>>Number(z(this,b))},fd=function(a,b){return Number(z(this,a))&Number(z(this,b))},gd=function(a,b){return Number(z(this,a))^Number(z(this,b))},hd=function(a,b){return Number(z(this,a))|Number(z(this,b))};var jd=function(){this.g=new Hb;id(this)};jd.prototype.Lc=function(a){return kd(this.g.o(a))};
var pd=function(a,b){return kd(ld.g.D(a,b))},id=function(a){var b=function(d,e){var f=a.g,g=String(e);Gb.hasOwnProperty(d)&&Ib(f,g||d,Gb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){Ib(a.g,String(d),e)};c(0,Yb);c(1,Zb);c(2,$b);c(3,ac);c(53,bc);c(4,cc);c(5,dc);c(52,ec);c(6,hc);c(9,dc);c(50,ic);c(10,jc);c(12,kc);c(13,lc);c(47,oc);c(54,pc);c(55,qc);c(63,vc);c(64,sc);c(65,tc);c(66,uc);c(15,wc);c(16,xc);c(17,xc);c(18,yc);c(19,Bc);c(20,Cc);c(21,Dc);c(22,Ec);
c(23,Fc);c(24,Gc);c(25,Hc);c(26,Ic);c(27,Jc);c(28,Kc);c(29,Lc);c(45,Pc);c(30,Qc);c(32,Rc);c(33,Rc);c(34,Sc);c(35,Sc);c(46,Tc);c(36,Uc);c(43,Vc);c(37,Wc);c(38,Xc);c(39,Yc);c(40,Zc);c(41,$c);c(42,ad);c(58,bd);c(57,cd);c(60,dd);c(61,ed);c(56,fd);c(62,gd);c(59,hd)},rd=function(){var a=ld,b=qd();Ib(a.g,"require",b)},sd=function(a,b){a.g.g.N=b};
function kd(a){if(a instanceof xa||a instanceof xb||a instanceof Da||a instanceof Cb||a instanceof Jb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};var td=function(){var a=function(b){return{toString:function(){return b}}};return{$f:a("consent"),ad:a("consent_always_fire"),te:a("convert_case_to"),ue:a("convert_false_to"),ve:a("convert_null_to"),we:a("convert_true_to"),xe:a("convert_undefined_to"),gi:a("debug_mode_metadata"),Ta:a("function"),Og:a("instance_name"),Qg:a("live_only"),Rg:a("malware_disabled"),Sg:a("metadata"),ji:a("original_activity_id"),ki:a("original_vendor_template_id"),Ug:a("once_per_event"),kf:a("once_per_load"),mi:a("priority_override"),
qf:a("setup_tags"),rf:a("tag_id"),sf:a("teardown_tags")}}();
var ud=[],vd={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},wd=function(a){return vd[a]},xd=/[\x00\x22\x26\x27\x3c\x3e]/g;var Bd=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Cd={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Dd=function(a){return Cd[a]};ud[7]=function(a){return String(a).replace(Bd,Dd)};
ud[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Bd,Dd)+"'"}};var Jd=/['()]/g,Kd=function(a){return"%"+a.charCodeAt(0).toString(16)};ud[12]=function(a){var b=
encodeURIComponent(String(a));Jd.lastIndex=0;return Jd.test(b)?b.replace(Jd,Kd):b};var Ld=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Md={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Nd=function(a){return Md[a]};ud[16]=function(a){return a};var Pd;
var Qd=[],Rd=[],Sd=[],Td=[],Ud=[],Vd={},Wd,Xd,Yd,Zd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},$d=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Vd[c],e={},f;for(f in a)if(a.hasOwnProperty(f))if(0===f.indexOf("vtp_"))d&&b&&b.vf&&b.vf(a[f]),e[void 0!==d?f:f.substr(4)]=a[f];else if(f===td.ad.toString()&&a[f]){}return void 0!==d?d(e):Pd(c,e,b)},be=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=ae(a[e],b,c));return d},ae=function(a,b,c){if(Sa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(ae(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=Qd[f];if(!g||b.Ud(g))return;c[f]=!0;try{var h=be(g,b,c);h.vtp_gtmEventId=b.id;d=$d(h,b);Yd&&(d=Yd.ih(d,h))}catch(A){b.Kf&&
b.Kf(A,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[ae(a[l],b,c)]=ae(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,p=1;p<a.length;p++){var q=ae(a[p],b,c);Xd&&(m=m||q===Xd.zc);d.push(q)}return Xd&&m?Xd.lh(d):d.join("");case "escape":d=ae(a[1],b,c);if(Xd&&Sa(a[1])&&"macro"===a[1][0]&&Xd.Bh(a))return Xd.Sh(d);d=String(d);for(var r=2;r<a.length;r++)ud[a[r]]&&(d=ud[a[r]](d));return d;case "tag":var u=a[1];if(!Td[u])throw Error("Unable to resolve tag reference "+
u+".");return d={Cf:a[2],index:u};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=ce(t,b,c),x=!!a[4];return x||2!==v?x!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},ce=function(a,b,c){try{return Wd(be(a,b,c))}catch(d){JSON.stringify(a)}return 2};var de=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.o=a;this.g=c};ma(de,Error);function ee(a,b){if(Sa(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)ee(a[c],b[c])}};var fe=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.s=a;this.o=b;this.g=[]};ma(fe,Error);var he=function(){return function(a,b){a instanceof fe||(a=new fe(a,ge));b&&a.g.push(b);throw a;}};function ge(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ra(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var ie=null,le=function(a){function b(q){for(var r=0;r<q.length;r++)d[q[r]]=!0}var c=[],d=[];ie=je(a);for(var e=0;e<Rd.length;e++){var f=Rd[e],g=ke(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],p=0;p<Td.length;p++)c[p]&&!d[p]&&(m[p]=!0);return m},ke=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=ie(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=ie(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},je=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=ce(Sd[c],a));return b[c]}};var me={ih:function(a,b){b[td.te]&&"string"===typeof a&&(a=1==b[td.te]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(td.ve)&&null===a&&(a=b[td.ve]);b.hasOwnProperty(td.xe)&&void 0===a&&(a=b[td.xe]);b.hasOwnProperty(td.we)&&!0===a&&(a=b[td.we]);b.hasOwnProperty(td.ue)&&!1===a&&(a=b[td.ue]);return a}};var ne=function(){this.g={}};function oe(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new de(c,d,g);}}function pe(a,b,c){return function(){var d=arguments[0];if(d){var e=a.g[d],f=a.g.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));oe(e,b,d,g);oe(f,b,d,g)}}}};var te=function(a){var b=qe.F,c=this;this.o=new ne;this.g={};var d={},e=pe(this.o,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Za(a,function(f,g){var h={};Za(g,function(l,m){var p=re(l,m);h[l]=p.assert;d[l]||(d[l]=p.O)});c.g[f]=function(l,m){var p=h[l];if(!p)throw se(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);p.apply(void 0,q);e.apply(void 0,q)}})},ve=function(a){return ue.g[a]||
function(){}};function re(a,b){var c=Zd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=se;try{return $d(c)}catch(d){return{assert:function(e){throw new de(e,{},"Permission "+e+" is unknown.");},O:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function se(a,b,c){return new de(a,b,c)};var we=!1;var xe={};xe.fi=eb('');xe.oh=eb('');var ye=we,ze=xe.oh,Ae=xe.fi;
var Oe=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Pe=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Oe(b,"/*")&&(b=b.slice(0,-2));Oe(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Qe=/^[a-z0-9-]+$/i,Se=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Ue=function(a,b){var c;if(!(c=!Te(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Qe.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!Se.exec(m))throw Error("Invalid Wildcard");var p=m.slice(8),q=p.slice(0,p.indexOf("/")),r;var u=l.hostname,t=q;if(0!==t.indexOf("*."))r=u.toLowerCase()===t.toLowerCase();else{t=t.slice(2);var v=u.toLowerCase().indexOf(t.toLowerCase());r=-1===v?!1:u.length===t.length?
!0:u.length!==t.length+v?!1:"."===u[v-1]}if(r){var x=p.slice(p.indexOf("/"));h=Pe(l.pathname+l.search,x)?!0:!1}else h=!1;if(h)return!0}return!1},Te=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};var Ve=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,We={Fn:"function",DustMap:"Object",List:"Array"},H=function(a,b,c){for(var d=0;d<b.length;d++){var e=Ve.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var p=typeof l;l instanceof xb?p="Fn":l instanceof Da?p="List":l instanceof Cb?p="DustMap":
l instanceof Jb&&(p="OpaqueValue");if(p!=h)throw Error("Error in "+a+". Argument "+f+" has type "+p+", which does not match required type "+(We[h]||h)+".");}}};function Xe(a){return""+a}
function Ye(a,b){var c=[];return c};var Ze=function(a,b){var c=new xb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=z(this,d[e]);return b.apply(this,d)});c.s=!0;return c},$e=function(a,b){var c=new Cb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Qa(e)?c.set(d,Ze(a+"_"+d,e)):(Ra(e)||k(e)||"boolean"==typeof e)&&c.set(d,e)}c.s=!0;return c};var af=function(a,b){H(F(this),["apiName:!string","message:?string"],arguments);var c={},d=new Cb;return d=$e("AssertApiSubject",c)};var bf=function(a,b){H(F(this),["actual:?*","message:?string"],arguments);var c={},d=new Cb;
return d=$e("AssertThatSubject",c)};function cf(a){return function(){for(var b=[],c=this.g,d=0;d<arguments.length;++d)b.push(Qb(arguments[d],c));return Pb(a.apply(null,b))}}var ef=function(){for(var a=Math,b=df,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=cf(a[e].bind(a)))}return c};var ff=function(a){var b;return b};var gf=function(a){var b;return b};var hf=function(a){H(F(this),["uri:!string"],arguments);return encodeURI(a)};var jf=function(a){H(F(this),["uri:!string"],arguments);return encodeURIComponent(a)};var kf=function(a){H(F(this),["message:?string"],arguments);};var lf=function(a,b){H(F(this),["min:!number","max:!number"],arguments);return Wa(a,b)};var mf=function(a,b,c){var d=a.g.g;if(!d)throw Error("Missing program state.");d.eh.apply(null,Array.prototype.slice.call(arguments,1))};var nf=function(){mf(this,"read_container_data");var a=new Cb;a.set("containerId",'GTM-MQ6FG2');a.set("version",'778');a.set("environmentName",'');a.set("debugMode",ye);a.set("previewMode",Ae);a.set("environmentMode",ze);a.s=!0;return a};var of=function(){return(new Date).getTime()};var pf=function(a){if(null===a)return"null";if(a instanceof Da)return"array";if(a instanceof xb)return"function";if(a instanceof Jb){a=a.ya;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var qf=function(a){function b(c){return function(d){try{return c(d)}catch(e){(ye||Ae)&&a.call(this,e.message)}}}return{parse:b(function(c){return Pb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Qb(c))})}};var rf=function(a){return ab(Qb(a,this.g))};var sf=function(a){return Number(Qb(a,this.g))};var tf=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var uf=function(a,b,c){var d=null,e=!1;H(F(this),["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new Cb;for(var f=0;f<a.length();f++){var g=a.get(f);g instanceof Cb&&g.has(b)&&g.has(c)&&(d.set(g.get(b),g.get(c)),e=!0)}return e?d:null};var df="floor ceil round max min abs pow sqrt".split(" ");var vf=function(){var a={};return{uh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},ai:function(b,c){a[b]=c},reset:function(){a={}}}},wf=function(a,b){H(F(this),["apiName:!string","mock:?*"],arguments);};var xf=function(){this.g={};this.o={};};xf.prototype.get=function(a,b){var c=this.g.hasOwnProperty(a)?this.g[a]:void 0;return c};
xf.prototype.add=function(a,b,c){if(this.g.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.o.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.g[a]=c?void 0:Qa(b)?Ze(a,b):$e(a,b)};
var yf=function(a,b,c){if(a.o.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.g.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.o[b]=Qa(c)?Ze(b,c):$e(b,c)};function zf(){var a={};return a};var J={Gb:"_ee",Dd:"_syn",ni:"_uei",wd:"_eu",li:"_pci",jd:"event_callback",qc:"event_timeout",aa:"gtag.config",va:"gtag.get",sa:"purchase",cb:"refund",Qa:"begin_checkout",$a:"add_to_cart",ab:"remove_from_cart",ig:"view_cart",Be:"add_to_wishlist",Ea:"view_item",Ae:"view_promotion",ze:"select_promotion",dd:"select_item",mc:"view_item_list",ye:"add_payment_info",hg:"add_shipping_info",Ga:"value_key",Fa:"value_callback",ja:"allow_ad_personalization_signals",rd:"restricted_data_processing",wb:"allow_google_signals",
ka:"cookie_expires",zb:"cookie_update",Db:"session_duration",wc:"session_engaged_time",xa:"user_properties",Ia:"transport_url",R:"ads_data_redaction",vd:"user_data",sc:"first_party_collection",C:"ad_storage",K:"analytics_storage",bd:"region",se:"wait_for_update"};
J.af=[J.sa,J.cb,J.Qa,J.$a,J.ab,J.ig,J.Be,J.Ea,J.Ae,J.ze,J.mc,J.dd,J.ye,J.hg];J.$e=[J.ja,J.wb,J.zb];J.bf=[J.ka,J.qc,J.Db,J.wc];var Bf=function(a){Na("GTM",a)};var Cf=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Df=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Ef,Ff=function(){if(void 0===Ef){var a=null,b=na.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ta,createScript:ta,createScriptURL:ta})}catch(c){na.console&&na.console.error(c.message)}Ef=a}else Ef=a}return Ef};var Hf=function(a,b){this.g=b===Gf?a:""};Hf.prototype.toString=function(){return this.g+""};var Gf={},If=function(a){var b=Ff(),c=b?b.createScriptURL(a):a;return new Hf(c,Gf)};var Jf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Kf;a:{var Lf=na.navigator;if(Lf){var Mf=Lf.userAgent;if(Mf){Kf=Mf;break a}}Kf=""}var Nf=function(a){return-1!=Kf.indexOf(a)};var Pf=function(a,b,c){this.g=c===Of?a:""};Pf.prototype.toString=function(){return this.g.toString()};var Qf=function(a){return a instanceof Pf&&a.constructor===Pf?a.g:"type_error:SafeHtml"},Of={},Rf=function(a){var b=Ff(),c=b?b.createHTML(a):a;return new Pf(c,null,Of)},Sf=new Pf(na.trustedTypes&&na.trustedTypes.emptyHTML||"",0,Of);var Tf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Qf(Sf);return!c.parentElement}),Uf=function(a,b){if(Tf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Qf(b)},Vf=function(a,b){a.src=b instanceof Hf&&b.constructor===Hf?b.g:"type_error:TrustedResourceUrl";var c=ra(a.ownerDocument&&a.ownerDocument.defaultView);
c&&a.setAttribute("nonce",c)};var n=window,K=document,Wf=navigator,Xf=K.currentScript&&K.currentScript.src,Yf=function(a,b){var c=n[a];n[a]=void 0===c?b:c;return n[a]},Zf=function(a){var b=K.getElementsByTagName("script")[0]||K.body||K.head;b.parentNode.insertBefore(a,b)},$f=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},ag={async:1,nonce:1,onerror:1,onload:1,src:1,type:1},bg=function(a,b,c,d){var e=K.createElement("script");
d&&Za(d,function(g,h){g=g.toLowerCase();ag.hasOwnProperty(g)||e.setAttribute(g,h)});e.type="text/javascript";e.async=!0;Vf(e,If(a));$f(e,b);c&&(e.onerror=c);var f=ra();f&&e.setAttribute("nonce",f);Zf(e);return e},cg=function(){if(Xf){var a=Xf.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},dg=function(a,b){var c=K.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=K.body&&K.body.lastChild||K.body||
K.head;d.parentNode.insertBefore(c,d);$f(c,b);void 0!==a&&(c.src=a);return c},eg=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},fg=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},gg=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},M=function(a){n.setTimeout(a,0)},hg=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},ig=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},jg=function(a){var b=K.createElement("div"),c=Rf("A<div>"+a+"</div>");Uf(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},kg=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},lg=function(a){Wf.sendBeacon&&Wf.sendBeacon(a)||eg(a)},mg=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var ng=function(){var a={};this.g=function(b,c){return null!=a[b]?a[b]:c};this.o=function(){a[1933]=!0}};ng.g=void 0;ng.o=function(){return ng.g?ng.g:ng.g=new ng};var og=function(a){var b;b=void 0===b?!1:b;return ng.o().g(a,b)};var pg=[];function qg(){var a=Yf("google_tag_data",{});a.ics||(a.ics={entries:{},set:ug,update:vg,addListener:wg,notifyListeners:xg,active:!1,usedDefault:!1});return a.ics}
function ug(a,b,c,d,e,f){var g=qg();g.active=!0;g.usedDefault=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,p=c&&k(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||p===e||(p===d?m!==e:!p&&!m)){var q=!!(f&&0<f&&void 0===l.update),r={region:p,initial:"granted"===b,update:l.update,quiet:q};if(""!==d||!1!==l.initial)h[a]=r;q&&n.setTimeout(function(){h[a]===r&&r.quiet&&(r.quiet=!1,yg(a),xg(),Na("TAGGING",2))},f)}}}
function vg(a,b){var c=qg();c.active=!0;if(void 0!=b){var d=zg(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=zg(a);f.quiet?(f.quiet=!1,yg(a)):g!==d&&yg(a)}}function wg(a,b){pg.push({xf:a,qh:b})}function yg(a){for(var b=0;b<pg.length;++b){var c=pg[b];Sa(c.xf)&&-1!==c.xf.indexOf(a)&&(c.Mf=!0)}}function xg(a){for(var b=0;b<pg.length;++b){var c=pg[b];if(c.Mf){c.Mf=!1;try{c.qh({wf:a})}catch(d){}}}}
var zg=function(a){var b=qg().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},Ag=function(a){return(qg().entries[a]||{}).initial},Bg=function(a){return!(qg().entries[a]||{}).quiet},Cg=function(){return og(1933)?qg().active:!1},Dg=function(){return qg().usedDefault},Eg=function(a,b){qg().addListener(a,b)},Fg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Bg(b[e]))return!0;return!1}if(c()){var d=!1;Eg(b,function(e){d||c()||(d=!0,a(e))})}else a({})},Gg=
function(a,b){if(!1===zg(b)){var c=!1;Eg([b],function(d){!c&&zg(b)&&(a(d),c=!0)})}};function Hg(a){for(var b=[],c=0;c<Ig.length;c++){var d=a(Ig[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var Ig=[J.C,J.K],Jg=function(a){var b=a[J.bd];b&&Bf(40);var c=a[J.se];c&&Bf(41);for(var d=Sa(b)?b:[b],e=0;e<d.length;++e)for(var f in a)if(a.hasOwnProperty(f)&&f!==J.bd&&f!==J.se)if(-1<Ta(Ig,f)){var g=f,h=a[f],l=d[e];qg().set(g,h,l,"CA","CA-ON",c)}else{}},Kg=function(a,
b){for(var c in a)if(a.hasOwnProperty(c))if(-1<Ta(Ig,c)){var d=c,e=a[c];qg().update(d,e)}else{}qg().notifyListeners(b)},Lg=function(a){var b=zg(a);return void 0!=b?b:!0},Mg=function(){return"G1"+Hg(zg)},Ng=function(a,b){Eg(a,b)},Og=function(a,b){Fg(a,b)};var Qg=function(a){return Pg?K.querySelectorAll(a):null},Rg=function(a,b){if(!Pg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!K.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Sg=!1;if(K.querySelectorAll)try{var Tg=K.querySelectorAll(":root");Tg&&1==Tg.length&&Tg[0]==K.documentElement&&(Sg=!0)}catch(a){}var Pg=Sg;var Ug=function(a){if(K.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!n.getComputedStyle)return!0;var c=n.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=n.getComputedStyle(d,
null))}return!1};var ch=/:[0-9]+$/,dh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},gh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=eh(a.protocol)||eh(n.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
n.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||n.location.hostname).replace(ch,"").toLowerCase());return fh(a,b,c,d,e)},fh=function(a,b,c,d,e){var f,g=eh(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=hh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(ch,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Na("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Ta(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=dh(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},eh=function(a){return a?a.replace(":",
"").toLowerCase():""},hh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},ih=function(a){var b=K.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Na("TAGGING",1),c="/"+c);var d=b.hostname.replace(ch,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},jh=function(a){function b(m){var p=m.split("=")[0];return 0>d.indexOf(p)?m:p+"=0"}function c(m){return m.split("&").map(b).filter(function(p){return void 0!=
p}).join("&")}var d="gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),e=ih(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var kh=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),lh=new RegExp(/support|noreply/i),mh=["SCRIPT","IMG","SVG","PATH","BR"],nh=["BR"];function oh(a){var b;if(a===K.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=oh(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
function ph(a,b){if(1>=a.length)return a;var c=a.filter(b);return 0==c.length?a:c}function qh(a){if(0==a.length)return null;var b;b=ph(a,function(c){return!lh.test(c.$c)});b=ph(b,function(c){return"INPUT"===c.element.tagName.toUpperCase()});b=ph(b,function(c){return!Ug(c.element)});return b[0]}
function rh(){var a;var b=[],c=K.body;if(c){for(var d=c.querySelectorAll("*"),e=0;e<d.length&&1E4>e;e++){var f=d[e];if(!(0<=mh.indexOf(f.tagName.toUpperCase()))){for(var g=!1,h=0;h<f.childElementCount&&1E4>h;h++)if(!(0<=nh.indexOf(f.children[h].tagName.toUpperCase()))){g=!0;break}g||b.push(f)}}a={elements:b,status:1E4<d.length?"2":"1"}}else a={elements:b,status:"4"};for(var l=a,m=l.elements,p=[],q=0;q<m.length;q++){var r=m[q],u=r.textContent;r.value&&(u=r.value);if(u){var t=u.match(kh);if(t){var v=
t[0],x;if(n.location){var A=fh(n.location,"host",!0);x=0<=v.toLowerCase().indexOf(A)}else x=!1;x||p.push({element:r,$c:v})}}}var w=qh(p),y=[];if(w){var B=w.element;y.push({$c:w.$c,querySelector:oh(B),tagName:B.tagName,isVisible:!Ug(B),type:1,Jf:!0})}return{elements:y,status:10<p.length?"3":l.status}}var qe={},N=null,Fh=Math.random();qe.F="GTM-MQ6FG2";qe.Dc="3o0";qe.ii="";qe.bg="ChAI8OqqgwYQpMuKk4ymwpIMEiMA4PfrV1lQQi2KhUbHktJn50686L5bn9Rpfux3MsLK1Cyd8BoC+MA\x3d";var Gh={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Hh={__paused:!0,__tg:!0},Ih;for(Ih in Gh)Gh.hasOwnProperty(Ih)&&(Hh[Ih]=!0);var Jh="www.googletagmanager.com/gtm.js";
var Kh=Jh,Lh=eb(""),Mh=null,Nh=null,Oh="//www.googletagmanager.com/a?id="+qe.F+"&cv=778",Ph={},Qh={},Rh=function(){var a=N.sequence||1;N.sequence=a+1;return a};qe.ag="";var Sh={},Th=new Xa,Uh={},Vh={},Yh={name:"dataLayer",set:function(a,b){G(tb(a,b),Uh);Wh()},get:function(a){return Xh(a,2)},reset:function(){Th=new Xa;Uh={};Wh()}},Xh=function(a,b){return 2!=b?Th.get(a):Zh(a)},Zh=function(a,b){var c=a.split(".");b=b||[];for(var d=Uh,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Ta(b,d))return}return d},$h=function(a,b){Vh.hasOwnProperty(a)||(Th.set(a,b),G(tb(a,b),Uh),Wh())},ai=function(){for(var a=["gtm.allowlist","gtm.blocklist",
"gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],b=0;b<a.length;b++){var c=a[b],d=Xh(c,1);if(Sa(d)||Nb(d))d=G(d);Vh[c]=d}},Wh=function(a){Za(Vh,function(b,c){Th.set(b,c);G(tb(b,void 0),Uh);G(tb(b,c),Uh);a&&delete Vh[b]})},bi=function(a,b,c){Sh[a]=Sh[a]||{};var d=1!==c?Zh(b):Th.get(b);"array"===Lb(d)||"object"===Lb(d)?Sh[a][b]=G(d):Sh[a][b]=d},ci=function(a,b){if(Sh[a])return Sh[a][b]},di=function(a,b){Sh[a]&&delete Sh[a][b]};var gi={},hi=function(a,b){if(n._gtmexpgrp&&n._gtmexpgrp.hasOwnProperty(a))return n._gtmexpgrp[a];void 0===gi[a]&&(gi[a]=Math.floor(Math.random()*b));return gi[a]};var ii=function(a){var b=1,c,d,e;if(a)for(b=0,d=a.length-1;0<=d;d--)e=a.charCodeAt(d),b=(b<<6&268435455)+e+(e<<14),c=b&266338304,b=0!=c?b^c>>21:b;return b};function ji(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var ki=function(a){ki[" "](a);return a};ki[" "]=function(){};function li(a){if(!og(1937))return!0;try{return ki(a.cookie),!0}catch(b){return!1}};var oi=function(a,b,c,d){return mi(d)?ji(a,String(b||ni()),c):[]},ri=function(a,b,c,d,e){if(mi(e)){var f=pi(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=qi(f,function(g){return g.Kc},b);if(1===f.length)return f[0].id;f=qi(f,function(g){return g.Yb},c);return f[0]?f[0].id:void 0}}};function si(a,b,c,d){var e=ni(),f=document;li(f)&&(f.cookie=a);var g=ni();return e!=g||void 0!=c&&0<=oi(b,g,!1,d).indexOf(c)}
var wi=function(a,b,c,d){function e(x,A,w){if(null==w)return delete h[A],x;h[A]=w;return x+"; "+A+"="+w}function f(x,A){if(null==A)return delete h[A],x;h[A]=!0;return x+"; "+A}if(!mi(c.Ca))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=ti(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.Lh);g=e(g,"samesite",
c.Wh);c.Yh&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var p=ui(),q=void 0,r=!1,u=0;u<p.length;++u){var t="none"!==p[u]?p[u]:void 0,v=e(g,"domain",t);v=f(v,c.flags);try{d&&d(a,h)}catch(x){q=x;continue}r=!0;if(!vi(t,c.path)&&si(v,a,b,c.Ca))return 0}if(q&&!r)throw q;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return vi(m,c.path)?1:si(g,a,b,c.Ca)?0:1},xi=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return wi(a,b,c)};
function qi(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function pi(a,b,c){for(var d=[],e=oi(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Kc:1*l[0]||1,Yb:1*l[1]||1}))}}return d}
var ti=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},yi=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,zi=/(^|\.)doubleclick\.net$/i,vi=function(a,b){return zi.test(document.location.hostname)||"/"===b&&yi.test(a)},ni=function(){return li(document)?document.cookie:""},ui=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;
zi.test(e)||yi.test(e)||a.push("none");return a},mi=function(a){if(!og(1933)||!a||!Cg())return!0;if(!Bg(a))return!1;var b=zg(a);return null==b?!0:!!b};var Ai=function(){for(var a=Math.round(2147483647*Math.random()),b=li(K)?K.cookie:null,c=Wf.userAgent+(b||"")+(K.referrer||""),d=c.length,e=n.history.length;0<e;)c+=e--^d++;return[a^ii(c)&2147483647,Math.round(hb()/1E3)].join(".")},Di=function(a,b,c,d,e){var f=Bi(b);return ri(a,f,Ci(c),d,e)},Ei=function(a,b,c,d){var e=""+Bi(c),f=Ci(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Bi=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Ci=function(a){if(!a||"/"===a)return 1;
"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Fi(a,b,c){var d,e=Number(null!=a.ob?a.ob:void 0);0!==e&&(d=new Date((b||hb())+1E3*(e||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Gi=["1"],Hi={},Ki=function(a){var b=Ii(a.prefix),c=Hi[b];c&&Ji(b,c,a)},Mi=function(a){var b=Ii(a.prefix);if(!Hi[b]&&!Li(b,a.path,a.domain)){var c=Ai();if(0===Ji(b,c,a)){var d=Yf("google_tag_data",{});d._gcl_au?Na("GTM",57):d._gcl_au=c}Li(b,a.path,a.domain)}};function Ji(a,b,c){var d=Ei(b,"1",c.domain,c.path),e=Fi(c);e.Ca="ad_storage";return xi(a,d,e)}function Li(a,b,c){var d=Di(a,b,c,Gi,"ad_storage");d&&(Hi[a]=d);return d}function Ii(a){return(a||"_gcl")+"_au"};var Ni=function(a){for(var b=[],c=K.cookie.split(";"),d=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({ne:f[1],value:f[2],timestamp:Number(f[2].split(".")[1])||0})}b.sort(function(g,h){return h.timestamp-g.timestamp});return b};
function Oi(a,b){var c=Ni(a),d={};if(!c||!c.length)return d;for(var e=0;e<c.length;e++){var f=c[e].value.split(".");if(!("1"!=f[0]||b&&3>f.length||!b&&3!==f.length)&&Number(f[1])){d[c[e].ne]||(d[c[e].ne]=[]);var g={version:f[0],timestamp:1E3*Number(f[1]),na:f[2]};b&&3<f.length&&(g.labels=f.slice(3));d[c[e].ne].push(g)}}return d};function Pi(){for(var a=Qi,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Ri(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Qi,Si;
function Ti(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=Si[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Qi=Qi||Ri();Si=Si||Pi();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var Ui;var Yi=function(){var a=Vi,b=Wi,c=Xi(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){fg(K,"mousedown",d);fg(K,"keyup",d);fg(K,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Zi=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Xi().decorators.push(f)},$i=function(a,b,c){for(var d=Xi().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,p=!!g.sameHost;if(l&&(p||m!==K.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[q])||p&&0<=l[q].indexOf(m)){h=!0;break a}h=!1}if(h){var r=g.placement;void 0==r&&(r=g.fragment?2:1);r===b&&kb(e,g.callback())}}return e},Xi=function(){var a=Yf("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var aj=/(.*?)\*(.*?)\*(.*)/,bj=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,cj=/^(?:www\.|m\.|amp\.)+/,dj=/([^?#]+)(\?[^#]*)?(#.*)?/;function ej(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var kj=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,g,h=String(d);Qi=Qi||Ri();Si=Si||Pi();for(var l=[],m=0;m<h.length;m+=3){var p=m+1<h.length,q=m+2<h.length,r=h.charCodeAt(m),u=p?h.charCodeAt(m+1):0,t=q?h.charCodeAt(m+2):0,v=r>>2,x=(r&3)<<4|u>>4,A=(u&15)<<2|t>>6,w=t&63;q||(w=64,p||(A=64));l.push(Qi[v],Qi[x],Qi[A],Qi[w])}g=l.join("");f.call(e,g)}}var y=b.join("*");return["1",jj(y),
y].join("*")},jj=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Ui)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Ui=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Ui[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},mj=function(){return function(a){var b=ih(n.location.href),
c=b.search.replace("?",""),d=dh(c,"_gl",!1,!0)||"";a.query=lj(d)||{};var e=gh(b,"fragment").match(ej("_gl"));a.fragment=lj(e&&e[3]||"")||{}}},nj=function(a){var b=mj(),c=Xi();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(kb(d,e.query),a&&kb(d,e.fragment));return d},lj=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=aj.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],p=
0;p<b;++p)if(m===jj(h,p)){l=!0;break a}l=!1}if(l){for(var q={},r=h?h.split("*"):[],u=0;u<r.length;u+=2)q[r[u]]=Ti(r[u+1]);return q}}}}catch(t){}};function oj(a,b,c,d){function e(p){var q=p,r=ej(a).exec(q),u=q;if(r){var t=r[2],v=r[4];u=r[1];v&&(u=u+t+v)}p=u;var x=p.charAt(p.length-1);p&&"&"!==x&&(p+="&");return p+m}d=void 0===d?!1:d;var f=dj.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function pj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=$i(b,1,c),e=$i(b,2,c),f=$i(b,3,c);if(nb(d)){var g=kj(d);c?qj("_gl",g,a):rj("_gl",g,a,!1)}if(!c&&nb(e)){var h=kj(e);rj("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,p=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){rj(m,p,q,void 0);break a}if("form"===q.tagName.toLowerCase()){qj(m,p,q);break a}}"string"==typeof q&&oj(m,p,q,void 0)}}
function rj(a,b,c,d){if(c.href){var e=oj(a,b,c.href,void 0===d?!1:d);Jf.test(e)&&(c.href=e)}}
function qj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=K.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=oj(a,b,c.action);Jf.test(m)&&(c.action=m)}}}
var Vi=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||pj(e,e.hostname)}}catch(g){}},Wi=function(a){try{if(a.action){var b=gh(ih(a.action),"host");pj(a,b)}}catch(c){}},sj=function(a,b,c,d){Yi();Zi(a,b,"fragment"===c?2:1,!!d,!1)},tj=function(a,b){Yi();Zi(a,[fh(n.location,"host",!0)],b,!0,!0)},uj=function(){var a=K.location.hostname,b=bj.exec(K.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(cj,""),l=e.replace(cj,""),m;if(!(m=h===l)){var p="."+l;m=h.substring(h.length-p.length,h.length)===p}return m},vj=function(a,b){return!1===a?!1:a||b||uj()};var wj={};var xj=/^\w+$/,yj=/^[\w-]+$/,zj=/^~?[\w-]+$/,Aj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"},Bj=function(){if(!og(1933)||!Cg())return!0;var a=zg("ad_storage");return null==a?!0:!!a},Cj=function(a,b){Bg("ad_storage")?Bj()?a():Gg(a,"ad_storage"):b?Na("TAGGING",3):Fg(function(){Cj(a,!0)},["ad_storage"])},Ej=function(a){return Dj(a).map(function(b){return b.na})},Dj=function(a){var b=[];if(!li(K)||!K.cookie)return b;var c=oi(a,K.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=
{},e=0;e<c.length;d={ic:d.ic},e++){var f=Fj(c[e]);if(null!=f){var g=f,h=g.version;d.ic=g.na;var l=g.timestamp,m=g.labels,p=Ua(b,function(q){return function(r){return r.na===q.ic}}(d));p?(p.timestamp=Math.max(p.timestamp,l),p.labels=Gj(p.labels,m||[])):b.push({version:h,na:d.ic,timestamp:l,labels:m})}}b.sort(function(q,r){return r.timestamp-q.timestamp});return Hj(b)};
function Gj(a,b){for(var c={},d=[],e=0;e<a.length;e++)c[a[e]]=!0,d.push(a[e]);for(var f=0;f<b.length;f++)c[b[f]]||d.push(b[f]);return d}function Ij(a){return a&&"string"==typeof a&&a.match(xj)?a:"_gcl"}
var Kj=function(){var a=ih(n.location.href),b=gh(a,"query",!1,void 0,"gclid"),c=gh(a,"query",!1,void 0,"gclsrc"),d=gh(a,"query",!1,void 0,"wbraid"),e=gh(a,"query",!1,void 0,"dclid");if(!b||!c||!d){var f=a.hash.replace("#","");b=b||dh(f,"gclid",!1,void 0);c=c||dh(f,"gclsrc",!1,void 0);d=d||dh(f,"wbraid",!1,void 0)}return Jj(b,c,e,d)},Jj=function(a,b,c,d){var e={},f=function(g,h){e[h]||(e[h]=[]);e[h].push(g)};e.gclid=a;e.gclsrc=b;e.dclid=c;void 0!==d&&yj.test(d)&&(e.gbraid=d,f(d,"gb"));if(void 0!==
a&&a.match(yj))switch(b){case void 0:f(a,"aw");break;case "aw.ds":f(a,"aw");f(a,"dc");break;case "ds":f(a,"dc");break;case "3p.ds":f(a,"dc");break;case "gf":f(a,"gf");break;case "ha":f(a,"ha")}c&&f(c,"dc");return e},Lj=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b}return!1},Nj=function(a){var b=Kj();Cj(function(){Mj(b,a)})};
function Mj(a,b,c,d){function e(p,q){var r=Oj(p,f);r&&(xi(r,q,g),h=!0)}b=b||{};d=d||[];var f=Ij(b.prefix);c=c||hb();var g=Fi(b,c,!0);g.Ca="ad_storage";var h=!1,l=Math.round(c/1E3),m=function(p){var q=["GCL",l,p];0<d.length&&q.push(d.join("."));return q.join(".")};a.aw&&(!0===b.xi?e("aw",m("~"+a.aw[0])):e("aw",m(a.aw[0])));a.dc&&e("dc",m(a.dc[0]));a.gf&&e("gf",m(a.gf[0]));a.ha&&e("ha",m(a.ha[0]));a.gp&&e("gp",m(a.gp[0]));(void 0==wj.enable_gbraid_cookie_write?0:wj.enable_gbraid_cookie_write)&&!h&&
a.gb&&e("gb",m(a.gb[0]))}
var Qj=function(a,b){var c=nj(!0);Cj(function(){for(var d=Ij(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Aj[f]){var g=Oj(f,d),h=c[g];if(h){var l=Math.min(Pj(h),hb()),m;b:{var p=l,q=g;if(li(K))for(var r=oi(q,K.cookie,void 0,"ad_storage"),u=0;u<r.length;++u)if(Pj(r[u])>p){m=!0;break b}m=!1}if(!m){var t=Fi(b,l,!0);t.Ca="ad_storage";xi(g,h,t)}}}}Mj(Jj(c.gclid,c.gclsrc),b)})},Oj=function(a,b){var c=Aj[a];if(void 0!==c)return b+c},Pj=function(a){return 0!==Rj(a.split(".")).length?1E3*(Number(a.split(".")[1])||
0):0};function Fj(a){var b=Rj(a.split("."));return 0===b.length?null:{version:b[0],na:b[2],timestamp:1E3*(Number(b[1])||0),labels:b.slice(3)}}function Rj(a){return 3>a.length||"GCL"!==a[0]&&"1"!==a[0]||!/^\d+$/.test(a[1])||!zj.test(a[2])?[]:a}
var Sj=function(a,b,c,d,e){if(Sa(b)&&li(K)){var f=Ij(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=Oj(a[l],f);if(m){var p=oi(m,K.cookie,void 0,"ad_storage");p.length&&(h[m]=p.sort()[p.length-1])}}return h};Cj(function(){sj(g,b,c,d)})}},Hj=function(a){return a.filter(function(b){return zj.test(b.na)})},Tj=function(a,b){if(li(K)){for(var c=Ij(b.prefix),d={},e=0;e<a.length;e++)Aj[a[e]]&&(d[a[e]]=Aj[a[e]]);Cj(function(){Za(d,function(f,g){var h=oi(c+g,K.cookie,void 0,"ad_storage");h.sort(function(u,
t){return Pj(t)-Pj(u)});if(h.length){var l=h[0],m=Pj(l),p=0!==Rj(l.split(".")).length?l.split(".").slice(3):[],q={},r;r=0!==Rj(l.split(".")).length?l.split(".")[2]:void 0;q[f]=[r];Mj(q,b,m,p)}})})}};function Uj(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Vj=function(a){function b(e,f,g){g&&(e[f]=g)}if(Cg()){var c=Kj();if(Uj(c,a)){var d={};b(d,"gclid",c.gclid);b(d,"dclid",c.dclid);b(d,"gclsrc",c.gclsrc);b(d,"wbraid",c.gbraid);tj(function(){return d},3);tj(function(){var e={};return e._up="1",e},1)}}};function Wj(a,b){var c=Ij(b),d=Oj(a,c);if(!d)return 0;for(var e=Dj(d),f=0,g=0;g<e.length;g++)f=Math.max(f,e[g].timestamp);return f}
function Xj(a){var b=0,c;for(c in a)for(var d=a[c],e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp));return b};var Yj=/^\d+\.fls\.doubleclick\.net$/,Zj=!1;Zj=!0;function ak(a,b){Bg(J.C)?Lg(J.C)?a():Gg(a,J.C):b?Bf(42):Og(function(){ak(a,!0)},[J.C])}function bk(a){var b=ih(n.location.href),c=gh(b,"host",!1);if(c&&c.match(Yj)){var d=gh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}function ck(a){return Kj()[a]||[]}
function dk(a,b,c){if("aw"===a||"dc"===a||"gb"===a){var d=bk("gcl"+a);if(d)return d.split(".")}var e=Ij(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Lg(J.C)&&c,g=ck(a);if(0<g.length)return f?["0"]:g}var h=Oj(a,e);return h?Ej(h):[]}function ek(a){var b=[];Za(a,function(c,d){d=Hj(d);for(var e=[],f=0;f<d.length;f++)e.push(d[f].na);e.length&&b.push(c+":"+e.join(","))});return b.join(";")}
var fk=function(a){var b=bk("gac");return b?!Lg(J.C)&&a?"0":decodeURIComponent(b):ek(Bj()?Oi():{})},gk=function(a){var b=bk("gacgb");return b?!Lg(J.C)&&a?"0":decodeURIComponent(b):ek(Bj()?Oi("_gac_gb",!0):{})},ik=function(a,b){if(Zj)hk(a,b,"dc");else{var c=ck("dc");ak(function(){Mi(b);var d=Hi[Ii(b.prefix)],e=!1;if(d&&0<c.length){var f=N.joined_au=N.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+d;lg(l);e=f[g]=!0}}null==
a&&(a=e);a&&d&&Ki(b)})}},hk=function(a,b,c){var d=Kj(),e=[],f=d.gclid,g=d.dclid,h=d.gclsrc||"aw";!f||"aw.ds"!==h&&"aw"!==h&&"ds"!==h||c&&!Lj(h,c)||e.push({na:f,Ff:h});!g||c&&"dc"!==c||e.push({na:g,Ff:"ds"});ak(function(){Mi(b);var l=Hi[Ii(b.prefix)],m=!1;if(l&&0<e.length)for(var p=N.joined_auid=N.joined_auid||{},q=0;q<e.length;q++){var r=e[q],u=r.na,t=r.Ff,v=(b.prefix||"_gcl")+"."+t+"."+u;if(!p[v]){var x="https://adservice.google.com/pagead/regclk";x=x+"?gclid="+u+"&auid="+l+"&gclsrc="+t;lg(x);m=p[v]=!0}}null==a&&(a=
m);a&&l&&Ki(b)})},jk=function(a){var b;if(bk("gclaw")||bk("gac")||0<ck("aw").length)b=!1;else{var c;if(0<ck("gb").length)c=!0;else{var d=Math.max(Wj("aw",a),Xj(Bj()?Oi():{}));c=Math.max(Wj("gb",a),Xj(Bj()?Oi("_gac_gb",!0):{}))>d}b=c}return b};var kk=/[A-Z]+/,lk=/\s/,mk=function(a){if(k(a)&&(a=gb(a),!lk.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(kk.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],H:d}}}}},ok=function(a){for(var b={},c=0;c<a.length;++c){var d=mk(a[c]);d&&(b[d.id]=d)}nk(b);var e=[];Za(b,function(f,g){e.push(g)});return e};
function nk(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.H[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var pk=function(){var a=!1;return a};var rk=function(a,b,c,d){return(2===qk()||d||"http:"!=n.location.protocol?a:b)+c},qk=function(){var a=cg(),b;if(1===a)a:{var c=Kh;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=K.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Fk=function(a){return Lg(J.C)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=jh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},Gk=function(){var a;if(!(a=Lh)){var b;if(!0===n._gtmdgs)b=!0;else{var c=Wf&&Wf.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=ab("1");return hi(1,100)<d?hi(2,2):-1},Hk=function(a){var b;
if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var Ik=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Jk={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Kk={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Lk="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Mk=function(){var a=!1;return a},Ok=function(a){var b=Xh("gtm.allowlist")||Xh("gtm.whitelist");b&&Bf(9);Mk()&&(b="google gtagfl lcl zone oid op".split(" "));var c=b&&qb(fb(b),Jk),d=Xh("gtm.blocklist")||
Xh("gtm.blacklist");d||(d=Xh("tagTypeBlacklist"))&&Bf(3);d?Bf(8):d=[];Nk()&&(d=fb(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Ta(fb(d),"google")&&Bf(2);var e=d&&qb(fb(d),Kk),f={};return function(g){var h=g&&g[td.Ta];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Qh[h]||[],m=a(h,l);if(b){var p;if(p=
m)a:{if(0>Ta(c,h))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>Ta(c,l[q])){Bf(11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var r=!1;if(d){var u=0<=Ta(e,h);if(u)r=u;else{var t=Ya(e,l||[]);t&&Bf(10);r=t}}var v=!m||r;v||!(0<=Ta(l,"sandboxedScripts"))||c&&-1!==Ta(c,"sandboxedScripts")||(v=Ya(e,Lk));return f[h]=v}},Nk=function(){return Ik.test(n.location&&n.location.hostname)};var Pk={active:!0,isAllowed:function(){return!0}},Qk=function(a){var b=N.zones;return b?b.checkState(qe.F,a):Pk},Rk=function(a){var b=N.zones;!b&&a&&(b=N.zones=a());return b};var Sk=function(){},Tk=function(){};var Uk=!1,Vk=0,Wk=[];function Xk(a){if(!Uk){var b=K.createEventObject,c="complete"==K.readyState,d="interactive"==K.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Uk=!0;for(var e=0;e<Wk.length;e++)M(Wk[e])}Wk.push=function(){for(var f=0;f<arguments.length;f++)M(arguments[f]);return 0}}}function Yk(){if(!Uk&&140>Vk){Vk++;try{K.documentElement.doScroll("left"),Xk()}catch(a){n.setTimeout(Yk,50)}}}var Zk=function(a){Uk?a():Wk.push(a)};var al=function(a,b){this.g=!1;this.D=[];this.J={tags:[]};this.N=!1;this.o=this.s=0;$k(this,a,b)},bl=function(a,b,c,d){if(Hh.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Nb(d)&&(e=G(d,e));e.id=c;e.status="timeout";return a.J.tags.push(e)-1},cl=function(a,b,c,d){var e=a.J.tags[b];e&&(e.status=c,e.executionTime=d)},dl=function(a){if(!a.g){for(var b=a.D,c=0;c<b.length;c++)b[c]();a.g=!0;a.D.length=0}},$k=function(a,b,c){Qa(b)&&a.Nb(b);c&&n.setTimeout(function(){return dl(a)},Number(c))};
al.prototype.Nb=function(a){var b=this,c=jb(function(){return M(function(){a(qe.F,b.J)})});this.g?c():this.D.push(c)};var el=function(a){a.s++;return jb(function(){a.o++;a.N&&a.o>=a.s&&dl(a)})};var fl=function(){function a(d){return!Ra(d)||0>d?0:d}if(!N._li&&n.performance&&n.performance.timing){var b=n.performance.timing.navigationStart,c=Ra(Yh.get("gtm.start"))?Yh.get("gtm.start"):0;N._li={cst:a(c-b),cbt:a(Nh-b)}}};var jl={},kl=function(){return n.GoogleAnalyticsObject&&n[n.GoogleAnalyticsObject]},ll=!1;
var ml=function(a){n.GoogleAnalyticsObject||(n.GoogleAnalyticsObject=a||"ga");var b=n.GoogleAnalyticsObject;if(n[b])n.hasOwnProperty(b)||Bf(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);n[b]=c}fl();return n[b]},nl=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=kl();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},ol=function(a){if(!Cg())return;var b=kl();b(a+"require","linker");b(a+
"linker:passthrough",!0);};
var ql=function(a){},pl=function(){return n.GoogleAnalyticsObject||"ga"},rl=function(a,b){return function(){var c=kl(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var wl=function(){return"&tc="+Td.filter(function(a){return a}).length},zl=function(){2022<=xl().length&&yl()},Bl=function(){Al||(Al=n.setTimeout(yl,500))},yl=function(){Al&&(n.clearTimeout(Al),Al=void 0);void 0===Cl||Dl[Cl]&&!El&&!Fl||(Gl[Cl]||Hl.Ch()||0>=Il--?(Bf(1),Gl[Cl]=!0):(Hl.Uh(),eg(xl()),Dl[Cl]=!0,Jl=Kl=Ll=Fl=El=""))},xl=function(){var a=Cl;if(void 0===a)return"";var b=Oa("GTM"),c=Oa("TAGGING");return[Ml,Dl[a]?"":"&es=1",Nl[a],b?"&u="+b:"",c?"&ut="+c:"",wl(),El,Fl,Ll?Ll:"",Kl,Jl,"&z=0"].join("")},
Pl=function(){Ml=Ol()},Ol=function(){return[Oh,"&v=3&t=t","&pid="+Wa(),"&rv="+qe.Dc].join("")},Ql="0.005000">Math.random(),Ml=Ol(),Dl={},El="",Fl="",Jl="",Kl="",Ll="",Cl=void 0,Nl={},Gl={},Al=void 0,Hl=function(a,b){var c=0,d=0;return{Ch:function(){if(c<a)return!1;hb()-d>=b&&(c=0);return c>=a},Uh:function(){hb()-d>=b&&(c=0);c++;d=hb()}}}(2,1E3),Il=1E3,Rl=function(a,b,c){if(Ql&&!Gl[a]&&b){a!==Cl&&(yl(),Cl=a);var d,e=String(b[td.Ta]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;El=El?El+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(Vd[g]?"1":"2")+d;Jl=Jl?Jl+"."+h:"&ti="+h;Bl();zl()}},Sl=function(a,b,c){if(Ql&&!Gl[a]){a!==Cl&&(yl(),Cl=a);var d=c+b;Fl=Fl?Fl+"."+d:"&epr="+d;Bl();zl()}},Tl=function(a,b,c){};
var Ul=function(){return!1},Vl=function(){var a={};return function(b,c,d){}};function Wl(a,b,c,d){var e=Td[a],f=Xl(a,b,c,d);if(!f)return null;var g=ae(e[td.qf],c,[]);if(g&&g.length){var h=g[0];f=Wl(h.index,{onSuccess:f,onFailure:1===h.Cf?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Xl(a,b,c,d){function e(){if(f[td.Rg])h();else{var x=be(f,c,[]);var y=bl(c.La,String(f[td.Ta]),Number(f[td.rf]),x[td.Sg]),B=!1;x.vtp_gtmOnSuccess=function(){if(!B){B=!0;var D=hb()-E;Rl(c.id,Td[a],"5");cl(c.La,y,"success",
D);g()}};x.vtp_gtmOnFailure=function(){if(!B){B=!0;var D=hb()-E;Rl(c.id,Td[a],"6");cl(c.La,y,"failure",D);h()}};x.vtp_gtmTagId=f.tag_id;x.vtp_gtmEventId=c.id;Rl(c.id,f,"1");var C=function(){var D=hb()-E;Rl(c.id,f,"7");cl(c.La,y,"exception",D);B||(B=!0,h())};var E=hb();try{$d(x,c)}catch(D){C(D)}}}var f=Td[a],g=b.onSuccess,h=b.onFailure,l=b.terminate;if(c.Ud(f))return null;var m=ae(f[td.sf],c,[]);if(m&&m.length){var p=m[0],q=Wl(p.index,{onSuccess:g,onFailure:h,terminate:l},c,d);if(!q)return null;g=q;h=2===p.Cf?l:q}if(f[td.kf]||f[td.Ug]){var r=f[td.kf]?Ud:
c.bi,u=g,t=h;if(!r[a]){e=jb(e);var v=Yl(a,r,e);g=v.onSuccess;h=v.onFailure}return function(){r[a](u,t)}}return e}function Yl(a,b,c){var d=[],e=[];b[a]=Zl(d,e,c);return{onSuccess:function(){b[a]=$l;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=am;for(var f=0;f<e.length;f++)e[f]()}}}function Zl(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function $l(a){a()}function am(a,b){b()};var dm=function(a,b){for(var c=[],d=0;d<Td.length;d++)if(a[d]){var e=Td[d];var f=el(b.La);try{var g=Wl(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(g){var h=c,l=h.push,m=d,p=e["function"];if(!p)throw"Error: No function name given for function call.";var q=Vd[p];l.call(h,{Uf:m,Nf:q?q.priorityOverride||0:0,Lc:g})}else bm(d,b),f()}catch(t){f()}}var r=b.La;r.N=!0;r.o>=r.s&&dl(r);c.sort(cm);for(var u=0;u<c.length;u++)c[u].Lc();
return 0<c.length};function cm(a,b){var c,d=b.Nf,e=a.Nf;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.Uf,h=b.Uf;f=g>h?1:g<h?-1:0}return f}function bm(a,b){if(!Ql)return;var c=function(d){var e=b.Ud(Td[d])?"3":"4",f=ae(Td[d][td.qf],b,[]);f&&f.length&&c(f[0].index);Rl(b.id,Td[d],e);var g=ae(Td[d][td.sf],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var em=!1,jm=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(em)return!1;em=!0}var d=Qk(b),e=!1;if(!d.active){if("gtm.js"!==c)return!1;e=!0;d=Qk(Number.MAX_SAFE_INTEGER)}Ql&&!Gl[b]&&Cl!==b&&(yl(),Cl=b,Jl=El="",Nl[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,Bl());var f=a.eventCallback,g=a.eventTimeout,h={id:b,name:c,Ud:Ok(d.isAllowed),bi:[],Kf:function(){Bf(6)},vf:fm(b),La:new al(f,
g)};gm(b,h.La);var l=le(h);e&&(l=hm(l));var m=dm(l,h);"gtm.js"!==c&&"gtm.sync"!==c||ql(qe.F);switch(c){case "gtm.init":m&&Bf(20)}return im(l,m)};function fm(a){return function(b){Ql&&(Sb(b)||Tl(a,"input",b))}}
function gm(a,b){bi(a,"event",1);bi(a,"ecommerce",1);bi(a,"gtm");bi(a,"eventModel");}function hm(a){for(var b=[],c=0;c<a.length;c++)a[c]&&Gh[String(Td[c][td.Ta])]&&(b[c]=!0);return b}function im(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Td[c]&&!Hh[String(Td[c][td.Ta])])return!0;return!1}function km(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return ih(""+c+b).href}}function lm(a,b){return mm()?km(a,b):void 0}function mm(){var a=!1;return a};var nm=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0},om=function(a){var b=new nm;b.eventModel=a;return b},pm=function(a,b){a.targetConfig=b;return a},qm=function(a,b){a.containerConfig=b;return a},rm=function(a,b){a.remoteConfig=b;return a},sm=function(a,b){a.globalConfig=
b;return a},tm=function(a,b){a.onSuccess=b;return a},um=function(a,b){a.setContainerTypeLoaded=b;return a},vm=function(a,b){a.getContainerTypeLoaded=b;return a},wm=function(a,b){a.onFailure=b;return a};nm.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var xm=function(a){function b(e){Za(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Za(c,function(e){d.push(e)});return d};var ym;if(3===qe.Dc.length)ym="g";else{var zm="G";ym=zm}
var Am={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:ym,OPT:"o"},Bm=function(a){var b=qe.F.split("-"),c=b[0].toUpperCase(),d=Am[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===qe.Dc.length){var g="w";f="2"+g}else f="";return f+d+qe.Dc+e};var Cm=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var Dm=function(){return Nf("iPhone")&&!Nf("iPod")&&!Nf("iPad")};Nf("Opera");Nf("Trident")||Nf("MSIE");Nf("Edge");!Nf("Gecko")||-1!=Kf.toLowerCase().indexOf("webkit")&&!Nf("Edge")||Nf("Trident")||Nf("MSIE")||Nf("Edge");-1!=Kf.toLowerCase().indexOf("webkit")&&!Nf("Edge")&&Nf("Mobile");Nf("Macintosh");Nf("Windows");Nf("Linux")||Nf("CrOS");var Em=na.navigator||null;Em&&(Em.appVersion||"").indexOf("X11");Nf("Android");Dm();Nf("iPad");Nf("iPod");Dm()||Nf("iPad")||Nf("iPod");Kf.toLowerCase().indexOf("kaios");var Fm=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var Gm=function(){};var Hm=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},Im=function(a,b){this.o=a;this.g=null;this.D={};this.N=0;this.J=void 0===b?500:b;this.s=null};ma(Im,Gm);
var Km=function(a){return"function"===typeof a.o.__tcfapi||null!=Jm(a)};
Im.prototype.addEventListener=function(a){var b={},c=Df(function(){return a(b)}),d=0;-1!==this.J&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.J));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=Hm(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{Lm(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};Im.prototype.removeEventListener=function(a){a&&a.listenerId&&Lm(this,"removeEventListener",null,a.listenerId)};
var Nm=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=Mm(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&("DE"===a.publisherCC||og(1936)&&"CH"===a.publisherCC)?!0:m&&Mm(a.purpose.consents,b)}else l=!0;else l=
1===h?a.purpose&&a.vendor?Mm(a.purpose.legitimateInterests,b)&&Mm(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},Mm=function(a,b){return!(!a||!a[b])},Lm=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.o.__tcfapi){var e=a.o.__tcfapi;e(b,2,c,d)}else if(Jm(a)){Om(a);var f=++a.N;a.D[f]=c;if(a.g){var g={};a.g.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},Jm=function(a){if(a.g)return a.g;a.g=Fm(a.o,"__tcfapiLocator");return a.g},
Om=function(a){a.s||(a.s=function(b){try{var c;c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.D[c.callId](c.returnValue,c.success)}catch(d){}},Cm(a.o,a.s))};var Pm=!0;Pm=!1;var Qm={1:0,3:0,4:0,7:3,9:3,10:3};function Rm(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var Sm=Rm("",550),Tm=Rm("",500);function Um(){var a=N.tcf||{};return N.tcf=a}
var Vm=function(a,b){this.s=a;this.g=b;this.o=hb();},Wm=function(a){},Xm=function(a){},cn=function(){var a=Um(),b=new Im(n,Pm?3E3:-1),c=new Vm(b,a);if((Ym()?!0===n.gtag_enable_tcf_support:!1!==n.gtag_enable_tcf_support)&&!a.active&&("function"===typeof n.__tcfapi||Km(b))){a.active=!0;a.$b={};Zm();var d=null;Pm?d=n.setTimeout(function(){$m(a);an(a);d=null},Tm):a.tcString="tcunavailable";try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)$m(a),an(a),Wm(c);
else{var f;a.gdprApplies=e.gdprApplies;if(!1===e.gdprApplies)f=bn(),b.removeEventListener(e);else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in Qm)if(Qm.hasOwnProperty(h))if("1"===h){var l,m=e,p=!0;p=void 0===p?!1:p;var q;var r=m;!1===r.gdprApplies?q=!0:(void 0===r.internalErrorState&&(r.internalErrorState=Hm(r)),q="error"===r.cmpStatus||0!==r.internalErrorState||"loaded"===r.cmpStatus&&("tcloaded"===r.eventStatus||"useractioncomplete"===
r.eventStatus)?!0:!1);l=q?!1===m.gdprApplies||"tcunavailable"===m.tcString||void 0===m.gdprApplies&&!p||"string"!==typeof m.tcString||!m.tcString.length?!0:Nm(m,"1",0):!1;g["1"]=l}else g[h]=Nm(e,h,Qm[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.$b=f,an(a),Wm(c))}}),Xm(c)}catch(e){d&&(clearTimeout(d),d=null),$m(a),an(a)}}};function $m(a){a.type="e";a.tcString="tcunavailable";Pm&&(a.$b=bn())}function Zm(){var a={};Jg((a.ad_storage="denied",a.wait_for_update=Sm,a))}
var Ym=function(){var a=!1;a=!0;return a};function bn(){var a={},b;for(b in Qm)Qm.hasOwnProperty(b)&&(a[b]=!0);return a}function an(a){var b={};Kg((b.ad_storage=a.$b["1"]?"granted":"denied",b))}
var dn=function(){var a=Um();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},en=function(){var a=Um();return a.active?a.tcString||"":""},fn=function(){var a=Um();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},gn=function(a){if(!Qm.hasOwnProperty(String(a)))return!0;var b=Um();return b.active&&b.$b?!!b.$b[String(a)]:!0};var hn=!1;function jn(a){var b=String(n.location).split(/[?#]/)[0],c=qe.bg||n._CONSENT_MODE_SALT;return a?c?String(ii(b+a+c)):"0":""}
function kn(a){function b(t){var v;N.reported_gclid||(N.reported_gclid={});v=N.reported_gclid;var x;x=hn&&g&&(!Cg()||Lg(J.C))?l+"."+(f.prefix||"_gcl")+(t?"gcu":"gcs"):l+(t?"gcu":"gcs");if(!v[x]){v[x]=!0;var A=[],w={},y=function(Q,T){T&&(A.push(Q+"="+encodeURIComponent(T)),w[Q]=!0)},B="https://www.google.com";if(Cg()){var C=Lg(J.C);y("gcs",Mg());t&&y("gcu","1");Dg()&&y("gcd","G1"+Hg(Ag));N.dedupe_gclid||
(N.dedupe_gclid=""+Ai());y("rnd",N.dedupe_gclid);if((!l||m&&"aw.ds"!==m)&&Lg(J.C)){var E=Ej("_gcl_aw");y("gclaw",E.join("."))}y("url",String(n.location).split(/[?#]/)[0]);y("dclid",ln(d,p));var D=!1;D=!0;C||!d&&!D||(B="https://pagead2.googlesyndication.com")}
y("gdpr_consent",en()),y("gdpr",fn());"1"===nj(!1)._up&&y("gtm_up","1");y("gclid",ln(d,l));y("gclsrc",m);if(!(w.gclid||w.dclid||w.gclaw)&&(y("gbraid",ln(d,q)),!w.gbraid&&Cg()&&Lg(J.C))){var I=Ej("_gcl_gb");y("gclgb",I.join("."))}y("gtm",Bm(!e));hn&&g&&Lg(J.C)&&(Mi(f||{}),y("auid",Hi[Ii(f.prefix)]||""));
a.Bf&&y("did",a.Bf);var P=B+"/pagead/landing?"+A.join("&");lg(P)}}var c=!!a.Id,d=!!a.oa,e=a.U,f=void 0===a.Ic?{}:a.Ic,g=void 0===a.Pc?!0:a.Pc,h=Kj(),l=h.gclid||"",m=h.gclsrc,p=h.dclid||"",q=h.gbraid||"",r=!c&&((!l||m&&"aw.ds"!==m?!1:!0)||q),u=Cg();if(r||u)u?Og(function(){b();Lg(J.C)||Gg(function(t){return b(!0,t.wf)},J.C)},[J.C]):b()}function ln(a,b){var c=a&&!Lg(J.C);return b&&c?"0":b}var Yn=function(){var a=!0;gn(7)&&gn(9)&&gn(10)||(a=!1);var b=!0;b=!1;b&&!Vn()&&(a=!1);return a},Vn=function(){var a=!0;gn(3)&&gn(4)||(a=!1);return a};var uo=!1;function vo(){var a=N;return a.gcq=a.gcq||new wo}
var xo=function(a,b,c){vo().register(a,b,c)},yo=function(a,b,c,d){vo().push("event",[b,a],c,d)},zo=function(a,b){vo().push("config",[a],b)},Ao=function(a,b,c,d){vo().push("get",[a,b],c,d)},Bo=function(a){return vo().getRemoteConfig(a)},Co={},Do=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.o=null;this.g=!1},Eo=function(a,b,c,d,e){this.type=a;this.s=b;this.U=c||"";this.g=d;this.o=e},wo=function(){this.D={};this.o={};this.g=[];this.s={AW:!1,UA:!1}},
Fo=function(a,b){var c=mk(b);return a.D[c.containerId]=a.D[c.containerId]||new Do},Go=function(a,b,c){if(b){var d=mk(b);if(d&&1===Fo(a,b).status){Fo(a,b).status=2;var e={};Ql&&(e.timeoutId=n.setTimeout(function(){Bf(38);Bl()},3E3));a.push("require",[e],d.containerId);Co[d.containerId]=hb();if(pk()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=n.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=lm(c,g)||h;bg(l)}}}},Ho=function(a,b,c,d){if(d.U){var e=Fo(a,d.U),f=e.o;if(f){var g=G(c),h=G(e.targetConfig[d.U]),l=G(e.containerConfig),m=G(e.remoteConfig),p=G(a.o),q=Xh("gtm.uniqueEventId"),r=mk(d.U).prefix,u=vm(um(wm(tm(sm(rm(qm(pm(om(g),h),l),m),p),function(){
Sl(q,r,"2");}),function(){Sl(q,r,"3");}),function(t,v){a.s[t]=v}),function(t){return a.s[t]});try{Sl(q,r,"1");f(d.U,b,d.s,u)}catch(t){Sl(q,r,"4");}}}};aa=wo.prototype;
aa.register=function(a,b,c){var d=Fo(this,a);if(3!==d.status){d.o=b;d.status=3;if(c){G(d.remoteConfig,c);d.remoteConfig=c}var e=mk(a),f=Co[e.containerId];if(void 0!==f){var g=N[e.containerId].bootstrap,h=e.prefix.toUpperCase();N[e.containerId]._spx&&(h=h.toLowerCase());var l=Xh("gtm.uniqueEventId"),m=h,p=hb()-g;if(Ql&&!Gl[l]){l!==Cl&&(yl(),Cl=l);var q=m+"."+Math.floor(g-f)+
"."+Math.floor(p);Kl=Kl?Kl+","+q:"&cl="+q}delete Co[e.containerId]}this.flush()}};aa.push=function(a,b,c,d){var e=Math.floor(hb()/1E3);Go(this,c,b[0][J.Ia]||this.o[J.Ia]);uo&&c&&Fo(this,c).g&&(d=!1);this.g.push(new Eo(a,e,c,b,d));d||this.flush()};aa.insert=function(a,b,c){var d=Math.floor(hb()/1E3);0<this.g.length?this.g.splice(1,0,new Eo(a,d,c,b,!1)):this.g.push(new Eo(a,d,c,b,!1))};
aa.flush=function(a){for(var b=this,c=[],d=!1,e={};this.g.length;){var f=this.g[0];if(f.o)uo?!f.U||Fo(this,f.U).g?(f.o=!1,this.g.push(f)):c.push(f):(f.o=!1,this.g.push(f));else switch(f.type){case "require":if(3!==Fo(this,f.U).status&&!a){uo&&this.g.push.apply(this.g,c);return}Ql&&n.clearTimeout(f.g[0].timeoutId);break;case "set":Za(f.g[0],function(r,u){G(tb(r,u),b.o)});break;case "config":e.qa={};Za(f.g[0],function(r){return function(u,t){G(tb(u,t),r.qa)}}(e));var g=!!e.qa[J.yc];delete e.qa[J.yc];
var h=Fo(this,f.U),l=mk(f.U),m=l.containerId===l.id;g||(m?h.containerConfig={}:h.targetConfig[f.U]={});h.g&&g||Ho(this,J.aa,e.qa,f);h.g=!0;delete e.qa[J.Gb];m?G(e.qa,h.containerConfig):G(e.qa,h.targetConfig[f.U]);uo&&(d=!0);break;case "event":e.hc={};Za(f.g[0],function(r){return function(u,t){G(tb(u,t),r.hc)}}(e));Ho(this,f.g[1],e.hc,f);break;case "get":var p={},q=(p[J.Ga]=f.g[0],p[J.Fa]=f.g[1],p);Ho(this,J.va,q,f)}this.g.shift();e={qa:e.qa,hc:e.hc}}uo&&(this.g.push.apply(this.g,c),d&&this.flush())};
aa.getRemoteConfig=function(a){return Fo(this,a).remoteConfig};function Io(a,b){var c=this;};function Jo(a,b,c){};function Ko(a,b,c,d){};function Lo(a){};var Mo=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":mg(a,"className"),"gtm.elementId":a["for"]||hg(a,"id")||"","gtm.elementTarget":a.formTarget||mg(a,"target")||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||mg(a,"href")||a.src||a.code||a.codebase||"";return d},No=function(a){N.hasOwnProperty("autoEventsSettings")||(N.autoEventsSettings={});var b=N.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});
return b[a]},Oo=function(a,b,c){No(a)[b]=c},Po=function(a,b,c,d){var e=No(a),f=ib(e,b,d);e[b]=c(f)},Qo=function(a,b,c){var d=No(a);return ib(d,b,c)};var Ro={},So=[];
var Zo=function(a,b){};

function bp(a,b){};var cp=/^\s*$/,dp,ep=!1;
function pp(a,b){}function qp(a,b,c){};var rp=!!n.MutationObserver,sp=void 0,tp=function(a){if(!sp){var b=function(){var c=K.body;if(c)if(rp)(new MutationObserver(function(){for(var e=0;e<sp.length;e++)M(sp[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;fg(c,"DOMNodeInserted",function(){d||(d=!0,M(function(){d=!1;for(var e=0;e<sp.length;e++)M(sp[e])}))})}};sp=[];K.body?b():M(b)}sp.push(a)};var vp=["www.youtube.com","www.youtube-nocookie.com"],wp,xp=!1,yp=0;
function Ip(a,b){}function Jp(a,b){return!0};function Kp(a,b,c){};function Lp(a,b){var c;return c};function Mp(a){};function Np(a){};var Op=!1,Pp=[];function Qp(){if(!Op){Op=!0;for(var a=0;a<Pp.length;a++)M(Pp[a])}}var Rp=function(a){Op?M(a):Pp.push(a)};function Sp(a){H(F(this),["listener:!Fn"],arguments);mf(this,"process_dom_events","window","load");Rp(Qb(a))};function Tp(a){var b;return b};function Up(a,b){var c;var d=!1;var e=Pb(c,this.g,d);void 0===e&&void 0!==c&&Bf(45);return e};function Vp(a){var b;H(F(this),["path:!string"],arguments);mf(this,"access_globals","read",a);var c=a.split("."),d=n,e;for(e=0;e<c.length-1;e++)if(d=d[c[e]],null==d||d===n||d===K)return;b=d[c[e]];var f=!1;var g=Pb(b,this.g,f);void 0===g&&void 0!==b&&Bf(45);return g};function Wp(a,b){var c=null,d=!1;H(F(this),["functionPath:!string","arrayPath:!string"],arguments);mf(this,"access_globals","readwrite",a);mf(this,"access_globals","readwrite",b);var e=[n,K],f=a.split("."),g=rb(f,e),h=f[f.length-1];if(void 0===g)throw Error("Path "+a+" does not exist.");var l=g[h];if(l&&!Qa(l))return null;
if(l)return Pb(l,this.g,d);var m;l=function(){if(!Qa(m.push))throw Error("Object at "+b+" in window is not an array.");m.push.call(m,arguments)};g[h]=l;var p=b.split("."),q=rb(p,e),r=p[p.length-1];if(void 0===q)throw Error("Path "+p+" does not exist.");m=q[r];void 0===m&&(m=[],q[r]=m);c=function(){l.apply(l,Array.prototype.slice.call(arguments,0))};return Pb(c,this.g,d)};function Xp(a){var b;var g=!1;return Pb(b,this.g,g)};var Yp=function(a){var b;return b};function Zp(a,b){b=void 0===b?!0:b;var c;return c};function $p(a){var b=null;return b};function aq(a,b){var c;return c};function bq(a,b){var c;return c};function cq(a){var b="";return b};function dq(a,b){var c;return c};function eq(a){var b="";return b};function fq(){mf(this,"get_user_agent");return n.navigator.userAgent};function gq(a,b){};var hq={};function iq(a,b,c,d,e,f){f?e[f]?(e[f][0].push(c),e[f][1].push(d)):(e[f]=[[c],[d]],bg(a,function(){for(var g=e[f][0],h=0;h<g.length;h++)M(g[h]);g.push=function(l){M(l);return 0}},function(){for(var g=e[f][1],h=0;h<g.length;h++)M(g[h]);e[f]=null},b)):bg(a,c,d,b)}
function jq(a,b,c,d){H(F(this),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);mf(this,"inject_script",a);var e=this.g;iq(a,void 0,function(){b&&b.o(e)},function(){c&&c.o(e)},hq,d);}var kq=Object.freeze({dl:1,id:1}),lq={};
function mq(a,b,c,d){};function nq(a){var b=!0;return b};var oq=function(){return!1},pq={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};function qq(){try{mf(this,"logging")}catch(c){return}if(!console)return;for(var a=Array.prototype.slice.call(arguments,0),b=0;b<a.length;b++)a[b]=Qb(a[b],this.g);console.log.apply(console,a);};function rq(a){var b=void 0;return b};function sq(a,b){var c=!1;return c};function tq(){var a="";return a};function uq(){var a="";return a};function vq(){};function wq(a,b,c,d){d=void 0===d?!1:d;};function xq(a,b,c){};function yq(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};function zq(a){H(F(this),["consentSettings:!DustMap"],arguments);for(var b=a.Jb(),c=b.length(),d=0;d<c;d++){var e=b.get(d);e!==J.bd&&mf(this,"access_consent",e,"write")}Jg(Qb(a))};function Aq(a,b,c){H(F(this),["path:!string","value:?*","overrideExisting:?boolean"],arguments);mf(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=n,g;for(g=0;g<e.length-1;g++)if(f=f[e[g]],void 0===f||f===n||f===K)return!1;if(void 0===f[e[g]]||c)return f[e[g]]=Qb(b,this.g,d),!0;
return!1};function Bq(a,b,c){}
;var Cq=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function Dq(a,b,c,d){var e=this;};function Eq(a,b,c){}
;var Fq={},Gq={};Fq.getItem=function(a){var b=null;return b};
Fq.setItem=function(a,b){};
Fq.removeItem=function(a){};Fq.clear=function(){};var Hq=function(a){var b;return b};function Iq(a){H(F(this),["consentSettings:!DustMap"],arguments);var b=Qb(a),c;for(c in b)b.hasOwnProperty(c)&&mf(this,"access_consent",c,"write");Kg(b)};var qd=function(){var a=new xf;pk()?(a.add("injectHiddenIframe",Pa),a.add("injectScript",Pa)):(a.add("injectHiddenIframe",gq),a.add("injectScript",jq));var b=xq;a.add("Math",ef());a.add("TestHelper",zf());a.add("addEventCallback",Lo);a.add("aliasInWindow",Jp);a.add("assertApi",af);a.add("assertThat",bf);a.add("callInWindow",
Lp);a.add("callLater",Mp);a.add("copyFromDataLayer",Up);a.add("copyFromWindow",Vp);a.add("createArgumentsQueue",Wp);a.add("createQueue",Xp);a.add("decodeUri",ff);a.add("decodeUriComponent",gf);a.add("encodeUri",hf);a.add("encodeUriComponent",jf);a.add("fail",kf);a.add("fromBase64",Yp,!("atob"in n));a.add("generateRandom",lf);a.add("getContainerVersion",nf);a.add("getCookieValues",Zp);a.add("getQueryParameters",aq);a.add("getReferrerQueryParameters",bq);a.add("getReferrerUrl",cq);a.add("getTimestamp",
of);a.add("getTimestampMillis",of);a.add("getType",pf);a.add("getUrl",eq);a.add("localStorage",pq,!oq());a.add("logToConsole",qq);a.add("makeInteger",rf);a.add("makeNumber",sf);a.add("makeString",tf);a.add("makeTableMap",uf);a.add("mock",wf);a.add("parseUrl",rq);a.add("queryPermission",sq);a.add("readCharacterSet",tq);a.add("readTitle",uq);a.add("sendPixel",b);a.add("setCookie",yq);a.add("setInWindow",Aq);a.add("sha256",Dq);a.add("templateStorage",Fq);a.add("toBase64",Hq,!("btoa"in n));a.add("JSON",
qf(function(d){var e=this.g.g;e&&e.log.call(this,"error",d)}));var c=!1;c&&a.add("setDefaultConsentState",zq);
pk()?yf(a,"internal.injectScript",Pa):yf(a,"internal.injectScript",mq);return function(d){var e;if(a.g.hasOwnProperty(d))e=a.get(d,this);else{var f;if(f=a.o.hasOwnProperty(d)){var g=!1,h=this.g.g;if(h){var l=h.Tb();if(l){0!==l.indexOf("__cvt_")&&(g=!0);}}f=g}if(f)e=a.o.hasOwnProperty(d)?a.o[d]:void 0;else throw Error(d+" is not a valid API name.");}return e}};var ld,ue;
function Jq(){var a=data.runtime||[],b=data.runtime_lines;ld=new jd;Kq();Pd=function(e,f,g){Lq(f);var h=new Cb;Za(f,function(u,t){var v=Pb(t);void 0===v&&void 0!==t&&Bf(44);h.set(u,v)});ld.g.g.J=he();var l={eh:ve(e),eventId:void 0!==g?g.id:void 0,Nb:void 0!==g?function(u){return g.La.Nb(u)}:void 0,Tb:function(){return e},log:function(){}};if(Ul()){var m=Vl(),
p=void 0,q=void 0;l.ia={Ob:{},mb:function(u,t,v){1===t&&(p=u);7===t&&(q=v);m(u,t,v)},Xd:vf()};l.log=function(u,t){if(p){var v=Array.prototype.slice.call(arguments,1);m(p,4,{level:u,source:q,message:v})}}}var r=pd(l,[e,h]);ld.g.g.J=void 0;r instanceof xa&&"return"===r.g&&(r=r.o);return Qb(r)};rd();for(var c=0;c<a.length;c++){var d=a[c];if(!Sa(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&ee(d,b[c]);ld.Lc(d)}}
function Lq(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Qa(b)&&(a.gtmOnSuccess=function(){M(b)});Qa(c)&&(a.gtmOnFailure=function(){M(c)})}function Kq(){var a=ld;N.SANDBOXED_JS_SEMAPHORE=N.SANDBOXED_JS_SEMAPHORE||0;sd(a,function(b,c,d){N.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{N.SANDBOXED_JS_SEMAPHORE--}})}function Mq(a){void 0!==a&&Za(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Qh[e]=Qh[e]||[];Qh[e].push(b)}})};var Nq="HA GF G UA AW DC".split(" "),Oq=!1,Pq={},Qq=!1;function Rq(a,b){var c={event:a};b&&(c.eventModel=G(b),b[J.jd]&&(c.eventCallback=b[J.jd]),b[J.qc]&&(c.eventTimeout=b[J.qc]));return c}function Sq(){return Oq}
var Vq={config:function(a){var b;return b},consent:function(a){function b(){Sq()&&
G(a[2],{subcommand:a[1]})}if(3===a.length){Bf(39);var c=Rh(),d=a[1];"default"===d?(b(),Jg(a[2])):"update"===d&&(b(),Kg(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&k(b)){var c;if(2<a.length){if(!Nb(a[2])&&void 0!=a[2]||3<a.length)return;c=a[2]}var d=Rq(b,c);return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime)return Qq=!0,Sq(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=ue.o;d.g[b]?d.g[b].push(c):d.g[b]=[c]}},set:function(a){var b;2==a.length&&Nb(a[1])?b=G(a[1]):3==a.length&&k(a[1])&&(b={},Nb(a[2])||Sa(a[2])?b[a[1]]=
G(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},Wq={policy:!0};var Xq=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Zq=function(a){var b=Yq(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var pr=function(a){if(or(a))return a;this.g=a};pr.prototype.xh=function(){return this.g};var or=function(a){return!a||"object"!==Lb(a)||Nb(a)?!1:"getUntrustedUpdateValue"in a};pr.prototype.getUntrustedUpdateValue=pr.prototype.xh;var qr=[],rr=!1,sr=!1,tr=!1,ur=function(a){return n["dataLayer"].push(a)},vr=function(a){var b=N["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function wr(a){var b=a._clear;Za(a,function(d,e){"_clear"!==d&&(b&&$h(d,void 0),$h(d,e))});Mh||(Mh=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Rh(),a["gtm.uniqueEventId"]=c,$h("gtm.uniqueEventId",c));return jm(a)}function xr(){var a=qr[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if($a(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function yr(){for(var a=!1;!tr&&0<qr.length;){var b=!1;if(b&&!sr&&xr()){var c={};qr.unshift((c.event=
"gtm.init",c));sr=!0}var d=!1;if(d&&!rr&&xr()){var e={};qr.unshift((e.event="gtm.init_consent",e));rr=!0}tr=!0;delete Uh.eventModel;Wh();var f=qr.shift();if(null!=f){var g=or(f);
if(g){var h=f;f=or(h)?h.getUntrustedUpdateValue():void 0;ai()}try{if(Qa(f))try{f.call(Yh)}catch(v){}else if(Sa(f)){var l=f;if(k(l[0])){var m=l[0].split("."),p=m.pop(),q=l.slice(1),r=Xh(m.join("."),2);if(void 0!==r&&null!==r)try{r[p].apply(r,q)}catch(v){}}}else{if($a(f)){a:{var u=f;if(u.length&&k(u[0])){var t=Vq[u[0]];if(t&&(!g||!Wq[u[0]])){f=t(u);break a}}f=void 0}if(!f){tr=!1;continue}}a=wr(f)||a}}finally{g&&Wh(!0)}}tr=!1}
return!a}function zr(){var a=yr();try{Xq(n["dataLayer"],qe.F)}catch(b){}return a}
var Br=function(){var a=Yf("dataLayer",[]),b=Yf("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Zk(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Rp(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<N.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new pr(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);qr.push.apply(qr,e);if(300<
this.length)for(Bf(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return yr()&&h};var d=a.slice(0);qr.push.apply(qr,d);Ar()&&M(zr)},Ar=function(){var a=!0;return a};var Cr={};Cr.zc=new String("undefined");
var Dr=function(a){this.g=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Cr.zc?b:a[d]);return c.join("")}};Dr.prototype.toString=function(){return this.g("undefined")};Dr.prototype.valueOf=Dr.prototype.toString;Cr.Xg=Dr;Cr.Bd={};Cr.lh=function(a){return new Dr(a)};var Er={};Cr.Vh=function(a,b){var c=Rh();Er[c]=[a,b];return c};Cr.zf=function(a){var b=a?0:1;return function(c){var d=Er[c];if(d&&"function"===typeof d[b])d[b]();Er[c]=void 0}};Cr.Bh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Cr.Sh=function(a){if(a===Cr.zc)return a;var b=Rh();Cr.Bd[b]=a;return'google_tag_manager["'+qe.F+'"].macro('+b+")"};Cr.Mh=function(a,b,c){a instanceof Cr.Xg&&(a=a.g(Cr.Vh(b,c)),b=Pa);return{yh:a,onSuccess:b}};var Fr=["input","select","textarea"],Gr=["button","hidden","image","reset","submit"],Hr=function(a){var b=a.tagName.toLowerCase();return!Ua(Fr,function(c){return c===b})||"input"===b&&Ua(Gr,function(c){return c===a.type.toLowerCase()})?!1:!0},Ir=function(a){return a.form?a.form.tagName?a.form:K.getElementById(a.form):kg(a,["form"],100)},Jr=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(Hr(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var Ur=n.clearTimeout,Vr=n.setTimeout,O=function(a,b,c){if(pk()){b&&M(b)}else return bg(a,b,c)},Wr=function(){return new Date},Xr=function(){return n.location.href},Yr=function(a){return gh(ih(a),"fragment")},Zr=function(a){return hh(ih(a))},$r=function(a,b){return Xh(a,b||2)},as=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=ur(a)):d=ur(a);return d},bs=function(a,b){n[a]=b},R=function(a,b,c){b&&
(void 0===n[a]||c&&!n[a])&&(n[a]=b);return n[a]},cs=function(a,b,c){return oi(a,b,void 0===c?!0:!!c)},ds=function(a,b,c){return 0===xi(a,b,c)},es=function(a,b){if(pk()){b&&M(b)}else dg(a,b)},fs=function(a){return!!Qo(a,"init",!1)},gs=function(a){Oo(a,"init",!0)},hs=function(a){var b=Kh+"?id="+encodeURIComponent(a)+"&l=dataLayer";O(rk("https://","http://",b))},is=function(a,b,c){Ql&&(Sb(a)||Tl(c,b,a))};var js=Cr.Mh;function Gs(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Hs=new Xa;function Is(a,b,c){var d=c?"i":void 0;try{var e=String(b)+d,f=Hs.get(e);f||(f=new RegExp(b,d),Hs.set(e,f));return f.test(a)}catch(g){return!1}}
function Js(a,b){function c(g){var h=ih(g),l=gh(h,"protocol"),m=gh(h,"host",!0),p=gh(h,"port"),q=gh(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Ks(a){return Ls(a)?1:0}
function Ls(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Sa(c)){for(var d=0;d<c.length;d++){var e=G(a,{});G({arg1:c[d],any_of:void 0},e);if(Ks(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(m){}}f=!1}return f;case "_ew":return Gs(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Ta(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":return Is(b,c,a.ignore_case);case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Js(b,c)}return!1};var Ms=encodeURI,W=encodeURIComponent,Ns=eg;var Os=function(a,b){if(!a)return!1;var c=gh(ih(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Ps=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function uu(){return n.gaGlobal=n.gaGlobal||{}}var vu=function(){var a=uu();a.hid=a.hid||Wa();return a.hid},wu=function(a,b){var c=uu();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var gv=window,hv=document,iv=function(a){var b=gv._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===gv["ga-disable-"+a])return!0;try{var c=gv.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=ji("AMP_TOKEN",String(hv.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return hv.getElementById("__gaOptOutExtension")?!0:!1};var jv={};function lv(a){delete a.eventModel[J.Gb];nv(a.eventModel)}var nv=function(a){Za(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[J.xa]||{};Za(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var qv=function(a,b,c){yo(b,c,a)},rv=function(a,b,c){yo(b,c,a,!0)},xv=function(a,b){};
function sv(a,b){}var Y={h:{}};

Y.h.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.i="jsm";Y.__jsm.m=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=R("google_tag_manager");var d=c&&c.e&&c.e(b);is(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
Y.h.sp=["google"],function(){(function(a){Y.__sp=a;Y.__sp.i="sp";Y.__sp.m=!0;Y.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure,d=function(){var g=R("google_trackConversion");if(Qa(g)){var h={};"DATA_LAYER"==a.vtp_customParamsFormat?h=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(h=Ps(a.vtp_customParams,
"key","value"));var l={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:h,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:Bm()};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(h.event=a.vtp_eventName),a.vtp_eventValue&&(l.google_conversion_value=a.vtp_eventValue),a.vtp_eventItems&&(l.google_gtag_event_data={items:a.vtp_eventItems}));var m=function(p,q){(l.google_additional_params=l.google_additional_params||{})[p]=
q};a.vtp_rdp&&(l.google_restricted_data_processing=!0);a.vtp_userId&&(l.google_user_id=a.vtp_userId);m("gdpr_consent",en()),m("gdpr",fn());g(l)||c()}else c()},e=function(){O(b,d,c)},f=!1;Cg()&&!f?Og(function(){Lg(J.C)?e():Gg(e,J.C)},[J.C]):(fl(),e())})}();
Y.h.c=["google"],function(){(function(a){Y.__c=a;Y.__c.i="c";Y.__c.m=!0;Y.__c.priorityOverride=0})(function(a){is(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Y.h.d=["google"],function(){(function(a){Y.__d=a;Y.__d.i="d";Y.__d.m=!0;Y.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType)try{var e=Qg(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}catch(f){b=null}else b=K.getElementById(a.vtp_elementId);b&&(d?c=hg(b,d):c=ig(b));return gb(String(b&&c))})}();
Y.h.e=["google"],function(){(function(a){Y.__e=a;Y.__e.i="e";Y.__e.m=!0;Y.__e.priorityOverride=0})(function(a){return String(ci(a.vtp_gtmEventId,"event"))})}();
Y.h.f=["google"],function(){(function(a){Y.__f=a;Y.__f.i="f";Y.__f.m=!0;Y.__f.priorityOverride=0})(function(a){var b=$r("gtm.referrer",1)||K.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?gh(ih(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Zr(String(b)):String(b)})}();
Y.h.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Mo(c,"gtm.click");as(d)}}(function(b){Y.__cl=b;Y.__cl.i="cl";Y.__cl.m=!0;Y.__cl.priorityOverride=0})(function(b){if(!fs("cl")){var c=R("document");fg(c,"click",a,!0);gs("cl")}M(b.vtp_gtmOnSuccess)})}();
Y.h.j=["google"],function(){(function(a){Y.__j=a;Y.__j.i="j";Y.__j.m=!0;Y.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=R(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];is(c,"j",a.vtp_gtmEventId);return c})}();Y.h.k=["google"],function(){(function(a){Y.__k=a;Y.__k.i="k";Y.__k.m=!0;Y.__k.priorityOverride=0})(function(a){return cs(a.vtp_name,$r("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Y.h.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Y.__access_globals=b;Y.__access_globals.i="access_globals";Y.__access_globals.m=!0;Y.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(p,q,r){if(!k(r))throw d(p,{},"Key must be a string.");if("read"===q){if(-1<Ta(e,r))return}else if("write"===q){if(-1<Ta(f,r))return}else if("readwrite"===q){if(-1<Ta(f,r)&&-1<Ta(e,r))return}else if("execute"===q){if(-1<Ta(g,r))return}else throw d(p,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(p,{},"Prohibited "+q+" on global variable: "+
r+".");},O:a}})}();Y.h.r=["google"],function(){(function(a){Y.__r=a;Y.__r.i="r";Y.__r.m=!0;Y.__r.priorityOverride=0})(function(a){return Wa(a.vtp_min,a.vtp_max)})}();
Y.h.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.i="u";Y.__u.m=!0;Y.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:$r("gtm.url",1))||Xr();var d=b[a("vtp_component")];if(!d||"URL"==d)return Zr(String(c));var e=ih(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Sa(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var p=0;p<m.length;p++){var q=gh(e,"QUERY",void 0,void 0,m[p]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=gh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Y.h.v=["google"],function(){(function(a){Y.__v=a;Y.__v.i="v";Y.__v.m=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=$r(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;is(d,"v",a.vtp_gtmEventId);return d})}();
Y.h.ua=["google"],function(){function a(q){return Lg(q)}function b(q,r){var u=!1;if(Cg()&&!u&&!e[q]){var t=function(){var v=kl(),x="gtm"+Rh(),A=m(r),w={name:x};l(A,w,!0);v("create",q,w);v(function(){v.remove(x)})};Gg(t,J.K);Gg(t,J.C);e[q]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,
allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h={urlPassthrough:!0},
l=function(q,r,u){var t=0;if(q)for(var v in q)if(!h[v]&&q.hasOwnProperty(v)&&(u&&f[v]||!u&&void 0===f[v])){var x=g[v]?eb(q[v]):q[v];"anonymizeIp"!=v||x||(x=void 0);r[v]=x;t++}return t},m=function(q){var r={};q.vtp_gaSettings&&G(Ps(q.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),r);G(Ps(q.vtp_fieldsToSet,"fieldName","value"),r);Lg(J.K)||(r.storage="none");Lg(J.C)||(r.allowAdFeatures=!1,r.storeGac=!1);Yn()||(r.allowAdFeatures=!1);Vn()||(r.allowAdPersonalizationSignals=!1);q.vtp_transportUrl&&
(r._x_19=q.vtp_transportUrl);if(eb(r.urlPassthrough)){r._useUp=!0;var u=!1;Cg()&&!u&&(r._cs=a)}return r},
p=function(q){function r(pa,ba){void 0!==ba&&D("set",pa,ba)}var u={},t={},v={},x={};if(q.vtp_gaSettings){var A=q.vtp_gaSettings;G(Ps(A.vtp_contentGroup,"index","group"),t);G(Ps(A.vtp_dimension,"index","dimension"),v);G(Ps(A.vtp_metric,"index","metric"),x);var w=G(A);w.vtp_fieldsToSet=void 0;w.vtp_contentGroup=void 0;w.vtp_dimension=void 0;w.vtp_metric=void 0;q=G(q,w)}G(Ps(q.vtp_contentGroup,"index","group"),t);G(Ps(q.vtp_dimension,"index","dimension"),v);G(Ps(q.vtp_metric,"index","metric"),x);var y=
m(q),B=ml(q.vtp_functionName);if(Qa(B)){var C="",E="";q.vtp_setTrackerName&&"string"==typeof q.vtp_trackerName?""!==q.vtp_trackerName&&(E=q.vtp_trackerName,C=E+"."):(E="gtm"+Rh(),C=E+".");var D=function(pa){var ba=[].slice.call(arguments,0);ba[0]=C+ba[0];B.apply(window,ba)},I=function(pa,ba){return void 0===ba?ba:pa(ba)},P=function(pa,ba){if(ba)for(var Db in ba)ba.hasOwnProperty(Db)&&D("set",pa+Db,ba[Db])},Q=function(){},T={name:E};l(y,T,!0);var va=q.vtp_trackingId||u.trackingId;B("create",va,T);D("set","&gtm",Bm(!0));var V=!1;Cg()&&!V&&(D("set","&gcs",Mg()),b(va,q));y._x_19&&(null==Xf&&delete y._x_19,y._x_20&&!d[E]&&(d[E]=!0,B(rl(E,String(y._x_20)))));q.vtp_enableRecaptcha&&D("require","recaptcha","recaptcha.js");(function(pa,ba){void 0!==q[ba]&&D("set",pa,q[ba])})("nonInteraction","vtp_nonInteraction");P("contentGroup",t);P("dimension",v);P("metric",x);var L={};l(y,L,!1)&&D("set",L);var X;q.vtp_enableLinkId&&D("require","linkid","linkid.js");D("set","hitCallback",function(){var pa=y&&y.hitCallback;Qa(pa)&&pa();q.vtp_gtmOnSuccess()});var Z=function(pa,ba){return void 0===q[pa]?u[ba]:q[pa]};if("TRACK_EVENT"==q.vtp_trackType){q.vtp_enableEcommerce&&(D("require","ec","ec.js"),Q());var wa={hitType:"event",eventCategory:String(Z("vtp_eventCategory",
"category")),eventAction:String(Z("vtp_eventAction","action")),eventLabel:I(String,Z("vtp_eventLabel","label")),eventValue:I(ab,Z("vtp_eventValue","value"))};l(X,wa,!1);D("send",wa);}else if("TRACK_SOCIAL"==q.vtp_trackType){}else if("TRACK_TRANSACTION"==q.vtp_trackType){}else if("TRACK_TIMING"==q.vtp_trackType){}else if("DECORATE_LINK"==q.vtp_trackType){}else if("DECORATE_FORM"==
q.vtp_trackType){}else if("TRACK_DATA"==q.vtp_trackType){}else{q.vtp_enableEcommerce&&(D("require","ec","ec.js"),Q());if(q.vtp_doubleClick||"DISPLAY_FEATURES"==q.vtp_advertisingFeaturesType){var Va="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","displayfeatures",void 0,{cookieName:Va})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==q.vtp_advertisingFeaturesType){var lb="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","adfeatures",
{cookieName:lb})}X?D("send","pageview",X):D("send","pageview");eb(y.urlPassthrough)&&ol(C)}if(!c){var sb=q.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";q.vtp_useInternalVersion&&!q.vtp_useDebugVersion&&(sb="internal/"+sb);c=!0;var Ob=lm(y._x_19,"/analytics.js"),
mb=rk("https:","http:","//www.google-analytics.com/"+sb,y&&!!y.forceSSL);O("analytics.js"===sb&&Ob?Ob:mb,function(){var pa=kl();pa&&pa.loaded||q.vtp_gtmOnFailure();},q.vtp_gtmOnFailure)}}else M(q.vtp_gtmOnFailure)};(function(q){Y.__ua=q;Y.__ua.i="ua";Y.__ua.m=!0;Y.__ua.priorityOverride=0})(function(q){Og(function(){p(q)},[J.K,J.C])})}();


Y.h.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Y.__inject_script=b;Y.__inject_script.i="inject_script";Y.__inject_script.m=!0;Y.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!k(f))throw d(e,{},"Script URL must be a string.");try{if(Ue(ih(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},O:a}})}();




Y.h.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gb"],b=!1;(function(c){Y.__gclidw=c;Y.__gclidw.i="gclidw";Y.__gclidw.m=!0;Y.__gclidw.priorityOverride=100})(function(c){M(c.vtp_gtmOnSuccess);var d,e,f,g;c.vtp_enableCookieOverrides&&(f=c.vtp_cookiePrefix,d=c.vtp_path,e=c.vtp_domain,c.vtp_enableCookieFlagsFeature&&(g=c.vtp_cookieFlags));var h=null;c.vtp_enableCookieUpdateFeature&&(h=
!0,void 0!==c.vtp_cookieUpdate&&(h=!!c.vtp_cookieUpdate));var l={prefix:f,path:d,domain:e,flags:g};c.vtp_enableCrossDomainFeature&&(c.vtp_enableCrossDomain&&!1===c.vtp_acceptIncoming||(c.vtp_enableCrossDomain||uj())&&Qj(a,l));Nj(l);Tj(["aw","dc"],l);b?hk(h,l):ik(h,l);var m=f;if(c.vtp_enableCrossDomainFeature&&c.vtp_enableCrossDomain&&c.vtp_linkerDomains){var p=c.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Sj(a,p,c.vtp_urlPosition,!!c.vtp_formDecoration,m)}var q=$r(J.R);kn({Id:!1,oa:void 0!=
q&&!1!==q,Ic:l,Pc:!0});c.vtp_enableUrlPassthroughFeature&&c.vtp_enableUrlPassthrough&&Vj(["aw","dc","gb"])});}();


Y.h.aev=["google"],function(){function a(u,t){var v=ci(u,"gtm");if(v)return v[t]}function b(u,t,v,x){x||(x="element");var A=u+"."+t,w;if(p.hasOwnProperty(A))w=p[A];else{var y=a(u,x);if(y&&(w=v(y),p[A]=w,q.push(A),35<q.length)){var B=q.shift();delete p[B]}}return w}function c(u,t,v){var x=a(u,r[t]);return void 0!==x?x:v}function d(u,t){if(!u)return!1;var v=e(Xr());Sa(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var x=[v],A=0;A<t.length;A++){var w=t[A];if(w.hasOwnProperty("is_regex"))if(w.is_regex)try{w=
new RegExp(w.domain)}catch(B){continue}else w=w.domain;if(w instanceof RegExp){if(w.test(u))return!1}else{var y=w;if(0!=y.length){if(0<=e(u).indexOf(y))return!1;x.push(e(y))}}}return!Os(u,x)}function e(u){m.test(u)||(u="http://"+u);return gh(ih(u),"HOST",!0)}function f(u,t,v){switch(u){case "SUBMIT_TEXT":return b(t,"FORM."+u,g,"formSubmitElement")||v;case "LENGTH":var x=b(t,"FORM."+u,h);return void 0===x?v:x;case "INTERACTED_FIELD_ID":return l(t,"id",v);case "INTERACTED_FIELD_NAME":return l(t,"name",
v);case "INTERACTED_FIELD_TYPE":return l(t,"type",v);case "INTERACTED_FIELD_POSITION":var A=a(t,"interactedFormFieldPosition");return void 0===A?v:A;case "INTERACT_SEQUENCE_NUMBER":var w=a(t,"interactSequenceNumber");return void 0===w?v:w;default:return v}}function g(u){switch(u.tagName.toLowerCase()){case "input":return hg(u,"value");case "button":return ig(u);default:return null}}function h(u){if("form"===u.tagName.toLowerCase()&&u.elements){for(var t=0,v=0;v<u.elements.length;v++)Hr(u.elements[v])&&
t++;return t}}function l(u,t,v){var x=a(u,"interactedFormField");return x&&hg(x,t)||v}var m=/^https?:\/\//i,p={},q=[],r={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(u){Y.__aev=u;Y.__aev.i="aev";Y.__aev.m=!0;Y.__aev.priorityOverride=
0})(function(u){var t=u.vtp_gtmEventId,v=u.vtp_defaultValue,x=u.vtp_varType;switch(x){case "TAG_NAME":var A=a(t,"element");return A&&A.tagName||v;case "TEXT":return b(t,x,ig)||v;case "URL":var w;a:{var y=String(a(t,"elementUrl")||v||""),B=ih(y),C=String(u.vtp_component||"URL");switch(C){case "URL":w=y;break a;case "IS_OUTBOUND":w=d(y,u.vtp_affiliatedDomains);break a;default:w=gh(B,C,u.vtp_stripWww,u.vtp_defaultPages,u.vtp_queryKey)}}return w;case "ATTRIBUTE":var E;if(void 0===u.vtp_attribute)E=c(t,
x,v);else{var D=u.vtp_attribute,I=a(t,"element");E=I&&hg(I,D)||v||""}return E;case "MD":var P=u.vtp_mdValue,Q=b(t,"MD",Qr);return P&&Q?Tr(Q,P)||v:Q||v;case "FORM":return f(String(u.vtp_component||"SUBMIT_TEXT"),t,v);default:var T=c(t,x,v);is(T,"aev",u.vtp_gtmEventId);return T}})}();Y.h.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.i="gas";Y.__gas.m=!0;Y.__gas.priorityOverride=0})(function(a){var b=G(a),c=b;c[td.Ta]=null;c[td.Og]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Y.h.awct=["google"],function(){var a=!1,b=[],c=function(g){var h=R("google_trackConversion"),l=g.gtm_onFailure;"function"==typeof h?h(g)||l():l()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}};(function(g){Y.__awct=g;Y.__awct.i="awct";Y.__awct.m=!0;Y.__awct.priorityOverride=
0})(function(g){function h(C,E,D){return"DATA_LAYER"===C?$r(D):g[E]}function l(){v("gdpr_consent",en()),v("gdpr",fn());}function m(){var C=[];return C}function p(C){var E=!0,D=[];if(C){D=m();}E&&b.push(r)}function q(){Dg()&&v("gcd","G1"+Hg(Ag));}fl();var r={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:g.vtp_conversionId,google_conversion_label:g.vtp_conversionLabel,
google_conversion_value:g.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:g.vtp_gtmOnSuccess,gtm_onFailure:g.vtp_gtmOnFailure,google_gtm:Bm()};r.google_gtm_experiments={capi:!0};g.vtp_rdp&&(r.google_restricted_data_processing=!0);void 0!=$r(J.R)&&!1!==$r(J.R)&&(r.google_gtm_url_processor=function(C){return C=Fk(C)});var u=function(C){return function(E,D,I){var P=h(C,D,I);P&&(r[E]=P)}},
t=u("JSON");t("google_conversion_currency","vtp_currencyCode");t("google_conversion_order_id","vtp_orderId");g.vtp_enableProductReporting&&(t=u(g.vtp_productReportingDataSource),t("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),t("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),t("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),t("google_basket_discount","vtp_discount","discount"),t("google_conversion_items","vtp_items","items"),r.google_conversion_items&&
r.google_conversion_items.map&&(r.google_conversion_items=r.google_conversion_items.map(function(C){return{value:C.price,quantity:C.quantity,item_id:C.id}})));var v=function(C,E){void 0!==E&&((r.google_additional_conversion_params=r.google_additional_conversion_params||{})[C]=E)},x=function(C){return function(E,D,I,P){var Q=h(C,D,I);P(Q)&&v(E,Q)}};var A=$r("developer_id"),w=wb(Nb(A)?A:{});w&&v("did",w);
(function(){if(!g.vtp_enableShippingData)return;v("delopc",g.vtp_deliveryPostalCode);v("oedeld",g.vtp_estimatedDeliveryDate);v("delc",g.vtp_deliveryCountry);v("shf",g.vtp_shippingFee);if(g.vtp_enableProductReporting){var C=h(g.vtp_productReportingDataSource,"vtp_items","items");v("iedeld",Hk(C))}})();g.vtp_transportUrl&&(r.google_transport_url=g.vtp_transportUrl);var y=lm(g.vtp_transportUrl,"/pagead/conversion_async.js");
y||(y=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js");g.vtp_enableNewCustomerReporting&&(t=x(g.vtp_newCustomerReportingDataSource),t("vdnc","vtp_awNewCustomer","new_customer",function(C){return void 0!=C&&""!==C}),t("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(C){return void 0!=C&&""!==C}));var B=!g.hasOwnProperty("vtp_enableConversionLinker")||g.vtp_enableConversionLinker;
B?(g.vtp_conversionCookiePrefix&&(r.google_gcl_cookie_prefix=g.vtp_conversionCookiePrefix),r.google_read_gcl_cookie_opt_out=!1):r.google_read_gcl_cookie_opt_out=!0;"1"===nj(!1)._up&&v("gtm_up","1");l();(function(){var C=!1;!Cg()||C?p(!0):Og(function(){l();var E=Lg(J.C),D=void 0!=$r(J.R)&&!1!==$r(J.R),I=!1;
I=!0;g.vtp_transportUrl||E||!D&&!I||(r.google_transport_url="https://pagead2.googlesyndication.com/");v("gcs",Mg());q();p(E);E||Gg(function(){l();r=G(r);!g.vtp_transportUrl&&r.google_transport_url&&delete r.google_transport_url;v("gcs",Mg());q();v("gcu","1");p(!0)},J.C)},[J.C])})();a||(a=!0,O(y,f(),e(y)))})}();
Y.h.remm=["google"],function(){(function(a){Y.__remm=a;Y.__remm.i="remm";Y.__remm.m=!0;Y.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var l=new RegExp(h,e);if(l.test(b)){var m=c[g].value;a.vtp_replaceAfterMatch&&(m=String(b).replace(l,m));f=m;break}}is(f,"remm",a.vtp_gtmEventId);return f})}();
Y.h.baut=["nonGoogleScripts"],function(){var a=!1;(function(b){Y.__baut=b;Y.__baut.i="baut";Y.__baut.m=!0;Y.__baut.priorityOverride=0})(function(b){function c(){var h=R(d);if(Array.isArray(h)){var l;try{l=Cf(R("UET"),{ti:b.vtp_tagId,q:h,tm:"gtm001"})}catch(m){}l?(n[d]=l,l.push("pageLoad"),b.vtp_gtmOnSuccess()):M(b.vtp_gtmOnFailure)}else b.vtp_gtmOnSuccess()}var d=b.vtp_uetqName||"uetq",e=R(d,[],!0);if("VARIABLE_REVENUE"==b.vtp_eventType)e.push({gv:b.vtp_goalValue}),
b.vtp_gtmOnSuccess();else if("CUSTOM"==b.vtp_eventType){var f={},g=function(h,l){void 0!==b[h]&&(f[l]=b[h])};g("vtp_goalValue","gv");g("vtp_eventCategory","ec");g("vtp_eventAction","ea");g("vtp_eventLabel","el");g("vtp_eventValue","ev");e.push(f);b.vtp_gtmOnSuccess()}else if(Array.isArray(e))if(a)c();else try{O("https://bat.bing.com/bat.js",function(){a=!0;c()},b.vtp_gtmOnFailure)}catch(h){M(b.vtp_gtmOnFailure)}else b.vtp_gtmOnSuccess()})}();
Y.h.logging=["google"],function(){function a(){return{}}(function(b){Y.__logging=b;Y.__logging.i="logging";Y.__logging.m=!0;Y.__logging.priorityOverride=0})(function(b){var c=b.vtp_environments||"debug",d=b.vtp_createPermissionError;return{assert:function(e){var f;if(f="all"!==c&&!0){var g=!1;f=!g}if(f)throw d(e,{},"Logging is not enabled in all environments");},O:a}})}();Y.h.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.i="smm";Y.__smm.m=!0;Y.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Ps(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;is(d,"smm",a.vtp_gtmEventId);return d})}();



Y.h.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.i="paused";Y.__paused.m=!0;Y.__paused.priorityOverride=0})(function(a){M(a.vtp_gtmOnFailure)})}();
Y.h.hid=["google"],function(){(function(a){Y.__hid=a;Y.__hid.i="hid";Y.__hid.m=!0;Y.__hid.priorityOverride=0})(function(){return Cr.zc})}();
Y.h.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=K.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var p=h.getAttribute("data-gtmsrc");p&&(m.src=p,$f(m,l));d.insertBefore(m,null);p||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];h.firstChild;)q.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,q,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(r){M(g)}}}var c=function(d){if(K.body){var e=
d.vtp_gtmOnFailure,f=js(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.yh,h=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(K.body,jg(g),h,e)()}else Vr(function(){c(d)},
200)};Y.__html=c;Y.__html.i="html";Y.__html.m=!0;Y.__html.priorityOverride=0}();








var yv={};yv.macro=function(a){if(Cr.Bd.hasOwnProperty(a))return Cr.Bd[a]},yv.onHtmlSuccess=Cr.zf(!0),yv.onHtmlFailure=Cr.zf(!1);yv.dataLayer=Yh;yv.callback=function(a){Ph.hasOwnProperty(a)&&Qa(Ph[a])&&Ph[a]();delete Ph[a]};yv.bootstrap=0;yv._spx=!1;function zv(){N[qe.F]=yv;kb(Qh,Y.h);Xd=Xd||Cr;Yd=me}
function Av(){ng.o().o();N=n.google_tag_manager=n.google_tag_manager||{};cn();wj.enable_gbraid_cookie_write=!0;if(N[qe.F]){var a=N.zones;a&&a.unregisterChild(qe.F);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Qd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Td.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)Sd.push(g[h]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],q={},r=0;r<p.length;r++)q[p[r][0]]=Array.prototype.slice.call(p[r],1);Rd.push(q)}Vd=Y;Wd=Ks;var u=data.permissions||{},t=data.sandboxed_scripts,v=data.security_groups;Jq();ue=new te(u);if(void 0!==
t)for(var x=["sandboxedScripts"],A=0;A<t.length;A++){var w=t[A].replace(/^_*/,"");Qh[w]=x}Mq(v);zv();Br();Uk=!1;Vk=0;if("interactive"==K.readyState&&!K.createEventObject||"complete"==K.readyState)Xk();else{fg(K,"DOMContentLoaded",Xk);fg(K,"readystatechange",Xk);if(K.createEventObject&&K.documentElement.doScroll){var y=!0;try{y=!n.frameElement}catch(D){}y&&Yk()}fg(n,"load",Xk)}Op=!1;"complete"===K.readyState?Qp():fg(n,"load",Qp);a:{if(!Ql)break a;n.setInterval(Pl,864E5);}
Nh=(new Date).getTime();}}
(function(a){if(!n["__TAGGY_INSTALLED"]){var b=!1;if(K.referrer){var c=ih(K.referrer);b="cct.google"===fh(c,"host")}if(!b){var d=oi("googTaggyReferrer");b=d.length&&d[0].length}b&&(n["__TAGGY_INSTALLED"]=!0,bg("https://cct.google/taggy/agent.js"))}var f=function(){var q=n["google.tagmanager.debugui2.queue"];q||(q=[],n["google.tagmanager.debugui2.queue"]=q,bg("https://www.googletagmanager.com/debug/bootstrap"));return q},g="x"===gh(n.location,"query",!1,void 0,"gtm_debug");if(!g&&K.referrer){var h=ih(K.referrer);g="tagassistant.google.com"===fh(h,"host")}if(!g){var l=oi("__TAG_ASSISTANT");g=l.length&&l[0].length}n.__TAG_ASSISTANT_API&&(g=!0);if(g&&Xf){var m=f(),p={messageType:"CONTAINER_STARTING",
data:{scriptSource:Xf,resume:function(){a()},containerProduct:"GTM"}};qe.ag&&(p.data.initialPublish=!0);m.push(p)}else a()})(Av);

})()

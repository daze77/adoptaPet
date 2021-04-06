var module$node_modules$react$default = React;
var module$node_modules$react_dom$default = ReactDOM;
var module$CenterBlock$default = {};
Object.defineProperty(module$CenterBlock$default, "__esModule", {value:true});
class CenterBlock$$module$CenterBlock extends module$node_modules$react$default.Component {
  constructor(props) {
    super(props);
    this.LOADING_PROGRESS_RADIUS = 43;
  }
  callToAction(label) {
    return module$node_modules$react$default.createElement("div", {onClick:this.props.onCallToActionClick, className:"action-container", key:"action-container"}, module$node_modules$react$default.createElement("div", {className:"action-icon", key:"action-icon"}), module$node_modules$react$default.createElement("span", {className:"action-text", key:"action-text"}, label));
  }
  progressAnimation() {
    const progressComposite = module$node_modules$react$default.createElement("div", {className:"progress-composite", key:"progress-composite"}, module$node_modules$react$default.createElement("div", {className:"progress-anim", key:"progress-anim"}), module$node_modules$react$default.createElement("svg", {className:"progress-svg", key:"progress-svg", viewBox:"0 0 90 90"}, module$node_modules$react$default.createElement("circle", {r:this.LOADING_PROGRESS_RADIUS, cx:45, cy:45, fill:"transparent", strokeDasharray:"270.17"})));
    return module$node_modules$react$default.createElement("div", {className:"progress-container", key:"progress-container"}, progressComposite, module$node_modules$react$default.createElement("span", {className:"text-animation", key:"text-animation"}, this.props.labels.loading));
  }
  getLabel() {
    switch(this.props.mode) {
      case 4:
        return this.props.labels.edit;
      case 2:
        return this.props.labels.restart;
      case 0:
        return this.props.labels.present;
      case 1:
      default:
        return this.props.labels.continue;
    }
  }
  render() {
    let children;
    if (this.props.mode === 3) {
      children = [this.progressAnimation()];
    } else {
      children = [this.callToAction(this.getLabel())];
    }
    $(".progress-svg circle").css({strokeDashoffset:this.calculateDashOffset(this.LOADING_PROGRESS_RADIUS, this.props.loadPercentage)});
    return module$node_modules$react$default.createElement("div", {className:"center-block-container"}, module$node_modules$react$default.createElement("div", {className:"center-block"}, ...children));
  }
  calculateDashOffset(radius, percentage) {
    if (isNaN(percentage)) {
      return 100;
    } else {
      if (percentage < 0) {
        percentage = 0;
      }
      if (percentage > 100) {
        percentage = 100;
      }
      const circumference = Math.PI * (radius * 2);
      return (100 - percentage) / 100 * circumference;
    }
  }
}
module$CenterBlock$default.centerBlockFactory = module$node_modules$react$default.createFactory(CenterBlock$$module$CenterBlock);
var module$i18n$default = {};
Object.defineProperty(module$i18n$default, "__esModule", {value:true});
module$i18n$default.PreziPageI18n = class {
};
module$i18n$default.PreziPageI18n.translations = {};
var module$ContentBlock$default = {};
Object.defineProperty(module$ContentBlock$default, "__esModule", {value:true});
class ContentBlock$$module$ContentBlock extends module$node_modules$react$default.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const children = [];
    let className = "";
    if (!this.props.isLoggedIn || this.props.isRevocableLink) {
      if (this.props.title.length > 100) {
        className = "very-long-title";
      } else {
        if (this.props.title.length > 60) {
          className = "long-title";
        }
      }
      children.push(module$node_modules$react$default.createElement("h1", {className, key:"content-title"}, this.props.title));
    }
    children.push(module$node_modules$react$default.createElement("div", {className:"content-row owner", key:"content-owner"}, module$node_modules$react$default.createElement("div", {className:"bullet no-border user-icon", key:"icon-user"}), module$node_modules$react$default.createElement("span", {key:"content-owner-text"}, module$node_modules$react$default.createElement("p", {key:"content-owner-by"}, module$i18n$default.PreziPageI18n.translations["BY"] + " " + this.props.ownerName), module$node_modules$react$default.createElement("p", 
    {key:"content-owner-modified"}, module$i18n$default.PreziPageI18n.translations["LAST_MODIFIED"] + " " + this.props.modifiedDate))));
    children.push(module$node_modules$react$default.createElement("div", {className:"content-row description", key:"content-desc"}, module$node_modules$react$default.createElement("p", null, this.props.description)));
    return module$node_modules$react$default.createElement("div", {className:"content-block", key:"content-blockzzz"}, ...children);
  }
}
module$ContentBlock$default.contentBlockFactory = module$node_modules$react$default.createFactory(ContentBlock$$module$ContentBlock);
var module$FeatureSwitcher$default = {};
Object.defineProperty(module$FeatureSwitcher$default, "__esModule", {value:true});
module$FeatureSwitcher$default.FeatureSwitcher = class {
  constructor(featureList) {
    this.features = featureList.split(",") || [];
  }
  isActive(feature) {
    for (let l = this.features.length; l--;) {
      if (this.features[l] === feature) {
        return true;
      }
    }
    return false;
  }
};
var module$Logger$default = {};
module$Logger$default.boolToInt = function(b) {
  return b ? 1 : 0;
};
Object.defineProperty(module$Logger$default, "__esModule", {value:true});
module$Logger$default.Logger = class {
  static initLogger(preziLogger, preziOptions) {
    preziLogger.LoggerModule.initForPreziPage(preziOptions.hostName, preziOptions.appSource, preziOptions.appVersion, preziOptions.userId, preziOptions.preziId, preziOptions.ownerId, preziOptions.organizationId, preziOptions.putmaId, false, preziOptions.userCanEdit, preziOptions.createNew);
    module$Logger$default.Logger.loggerManager = preziLogger.LoggerModule.getLoggerManager();
  }
  static createLogger(name) {
    return this.loggerManager.createLogger(name);
  }
};
var module$Loader$default = {};
Object.defineProperty(module$Loader$default, "__esModule", {value:true});
module$Loader$default.Loader = class {
  constructor(pageMode, preziOptions, onProgressEvent, onComponentsLoaded, logEntry, preziPageInterface, onErrorPageLoaded) {
    this.pageMode = pageMode;
    this.preziOptions = preziOptions;
    this.onProgressEvent = onProgressEvent;
    this.onComponentsLoaded = onComponentsLoaded;
    this.logEntry = logEntry;
    this.preziPageInterface = preziPageInterface;
    this.onErrorPageLoaded = onErrorPageLoaded;
    this.templateLogHelper = {logTemplateFallbackToStatic:(error, url) => {
      if (this.logger == null) {
        return;
      }
      const logDict = {action:"templateservice_fallback_to_static_public", object:"template", trigger:"machine", payload:{"error_message":error, "url":url, "_type":"debug"}};
      if (error === "timeout") {
        this.logger.warn(logDict);
      } else {
        this.logger.error(logDict);
      }
    }};
    onProgressEvent({eventType:null, progress:15});
    this.requireBasicModules(() => {
      if (!this.areSystemRequirementsMet()) {
        this.loadErrorPage();
      } else {
        if (this.pageMode === 4) {
          this.loadJustEditorInit();
        } else {
          if (this.pageMode === 3) {
            this.loadTemplateChooser();
          } else {
            this.loadTopMenuThenEditor();
          }
        }
      }
    });
  }
  requireBasicModules(callback) {
    window.require(["jqueryUi", "bluebird", "prezi_featureswitcher", "prezi_logger", "prezi_i18n"], (jQuery, bluebird, featureSwitcher, loggerModule, i18n) => {
      window["Promise"] = bluebird;
      featureSwitcher.initFeatureSwitcher(this.preziOptions.abtestVariants, this.preziOptions.featureList || "", "");
      this.featureSwitcher = featureSwitcher;
      this.initLogger(loggerModule);
      this.avro = loggerModule.avro;
      i18n.I18n.init(this.preziOptions.language || "en");
      callback();
    });
  }
  loadTemplateChooser() {
    window.require(["prezi_templateservice", "prezi_templatechooser", "prezi_dragon"], this.handleTemplateChooserLoaded.bind(this));
  }
  loadTopMenuThenEditor() {
    window.require(["prezi_koi_topmenu"], this.handleTopMenuLoaded.bind(this));
  }
  loadErrorPage() {
    window.require(["prezi_error_page"], this.handleErrorPageLoaded.bind(this));
  }
  isWebGlAvailable() {
    try {
      const webGLContextAttributes = {alpha:true, depth:true, stencil:true};
      const canvas = document.createElement("canvas");
      return (canvas.getContext("webgl", webGLContextAttributes) || canvas.getContext("experimental-webgl", webGLContextAttributes)) != null;
    } catch (error) {
      return false;
    }
  }
  isWebAssemblyAvailable() {
    try {
      if (typeof WebAssembly === "object" && typeof WebAssembly.instantiate === "function") {
        const module = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
        if (module instanceof WebAssembly.Module) {
          return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;
        }
      }
    } catch (e) {
    }
    return false;
  }
  areSystemRequirementsMet() {
    const isWebAssemblyOk = !this.featureSwitcher.isActive("js-check-webassembly") || this.isWebAssemblyAvailable();
    const isWebGlOk = this.isWebGlAvailable();
    return isWebAssemblyOk && isWebGlOk;
  }
  handleErrorPageLoaded(errorPage) {
    this.logger.info({action:"show", object:"webgl_context_error_page", trigger:"loader", payload:{"_type":"debug"}});
    const containerId = $("#prezi-viewer").length ? "prezi-viewer" : "prezi-player";
    errorPage.showWebglContextErrorPage({rootElementId:containerId, isDesktop:false, userId:this.preziOptions.userId, hostName:this.preziOptions.hostName}).then(() => {
      this.logger.info({action:"success", object:"webgl_context_error_page", trigger:"loader", payload:{"_type":"debug"}});
      this.onErrorPageLoaded();
    }).catch(() => {
      this.logger.info({action:"failure", object:"webgl_context_error_page", trigger:"loader", payload:{"_type":"debug"}});
    });
  }
  handleTopMenuLoaded(koiTopMenu) {
    this.onComponentsLoaded({topMenuComponent:koiTopMenu.BrowserTopMenu});
    this.loadJustEditorInit();
  }
  loadTemplatePreview() {
    window.require(["prezi_templatepreview"], this.handleTemplatePreviewLoaded.bind(this));
  }
  handleTemplatePreviewLoaded(templatePreviewModule) {
    this.preziPageInterface.setTemplatePreviewController(templatePreviewModule.createTemplatePreviewController());
    this.loadJustEditorInit();
  }
  loadJustEditorInit() {
    window.require(["prezi_editor_init"], this.handleEditorInitLoaded.bind(this));
  }
  handleEditorInitLoaded(editorModule) {
    editorModule.EditorInitModule.main(this.preziOptions, this.preziPageInterface);
    window.preziPlayerJS.getLoadingProgress().onValue(this.onProgressEvent);
  }
  handleTemplateChooserLoaded(templateService, templateChooser, dragon) {
    const provider = this.createTemplateProvider(templateService.TemplateServiceModule);
    const service = templateService.TemplateServiceModule.createTemplateService(provider);
    this.onComponentsLoaded({templateChooserUI:templateChooser.TemplateChooserUI, templateService:service, dragon, avro:this.avro});
    this.loadTemplatePreview();
  }
  preloadTemplates(templateService, templateList, hidePrivate) {
    return Promise.all([templateService.getTemplates(templateList, hidePrivate), templateService.getCategories(templateList, hidePrivate), templateService.getColors(templateList, hidePrivate)]).then(([templates]) => {
      this.avro.Avro.createDefaultLogger().logLoadedTemplateList({nr_templates_loaded:templates.length, template_list_key:templateList});
    });
  }
  setAvro(avro) {
    this.avro = avro;
  }
  createTemplateProvider(TemplateServiceModule) {
    let type;
    if (this.featureSwitcher.isActive("js-use-local-template-service")) {
      type = 0;
    } else {
      if (this.preziOptions.hostName === "localhost") {
        type = 1;
      } else {
        if (this.preziOptions.hostName === "//preprod.prezi.com") {
          type = 2;
        } else {
          type = 3;
        }
      }
    }
    return TemplateServiceModule.createTemplateProvider(this.templateLogHelper, type);
  }
  initLogger(loggerModule) {
    module$Logger$default.Logger.initLogger(loggerModule, this.preziOptions);
    this.logger = module$Logger$default.Logger.createLogger("prezi.prezipage.Loader");
    this.logger.info({action:"start", object:"info_overlay", trigger:"machine", payload:this.logEntry});
  }
  setEditorMode() {
    switch(this.pageMode) {
      case 0:
        window.preziPlayerJS.activateEditMode();
        break;
      case 1:
      case 2:
      case 4:
      case 5:
        window.preziPlayerJS.activatePresentMode();
    }
  }
  static loadComplete(progress) {
    return progress.eventType === 2;
  }
  static loadError(progress) {
    return progress.eventType === 4;
  }
};
var module$TemplateChooserContainer$default = {};
Object.defineProperty(module$TemplateChooserContainer$default, "__esModule", {value:true});
module$TemplateChooserContainer$default.TemplateChooserContainer = (props) => {
  if (props.templateChooserUI == null) {
    return null;
  }
  var JSCompiler_object_inline_container_0 = {zIndex:1, height:"100vh"};
  return module$node_modules$react$default.createElement("div", {style:JSCompiler_object_inline_container_0, className:"instant-templatechooser"}, module$node_modules$react$default.createElement(props.templateChooserUI, Object.assign({}, props)));
};
var module$TopMenuBlock$default = {};
Object.defineProperty(module$TopMenuBlock$default, "__esModule", {value:true});
class TopMenuBlock$$module$TopMenuBlock extends module$node_modules$react$default.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleShareButtonClick() {
    this.props.interruptLoadingRequest();
    this.props.onShareButtonClick();
  }
  getCommonTopMenuProps() {
    const noOp = () => {
    };
    const isEditMode = this.props.mode === 0;
    return {canEdit:this.props.canEdit, isCollaborator:this.props.isCollaborator, isEditMode, title:this.props.title, openPopupIds:[], preziPageMode:true, userCanLivePresent:this.props.userCanLivePresent, callbacks:{switchToEditMode:noOp, titleEditAction:noOp, showInfo:noOp, shareViewLinkPopup:this.handleShareButtonClick.bind(this), toggleFileMenu:noOp, help:noOp}, dropDownMenus:null};
  }
  render() {
    return module$node_modules$react$default.createElement("div", {className:"topmenu-container"}, module$node_modules$react$default.createElement(this.props.topMenuComponent, this.getCommonTopMenuProps()));
  }
}
module$TopMenuBlock$default.topMenuBlockFactory = module$node_modules$react$default.createFactory(TopMenuBlock$$module$TopMenuBlock);
var module$ViewerIdentificationBlock$default = {};
Object.defineProperty(module$ViewerIdentificationBlock$default, "__esModule", {value:true});
class ViewerIdentificationBlock$$module$ViewerIdentificationBlock extends module$node_modules$react$default.Component {
  constructor(props) {
    super(props);
  }
  isFormValid() {
    return this.state.viewerName !== "" && this.state.viewerEmail !== "";
  }
  componentWillMount() {
    this.setState({viewerName:this.props.userName, viewerEmail:this.props.userEmail});
  }
  render() {
    let children;
    const buttonDisabled = this.isFormValid() ? "" : " btn-disabled";
    let titleText = module$i18n$default.PreziPageI18n.translations["VI_FORM_TITLE"];
    if (this.props.sharerFirstName === "" && this.props.sharerLastName === "") {
      titleText = module$i18n$default.PreziPageI18n.translations["VI_FORM_TITLE_ANONYM"];
    }
    let descriptionText = module$i18n$default.PreziPageI18n.translations["VI_FORM_DESCRIPTION"];
    if (this.props.sharerFirstName === "" && this.props.sharerLastName === "") {
      descriptionText = module$i18n$default.PreziPageI18n.translations["VI_FORM_DESCRIPTION_ANONYM"];
    }
    children = [module$node_modules$react$default.createElement("div", {className:"content-row viewer-identification ui-input-focus", key:"viewer-identification"}, module$node_modules$react$default.createElement("h2", {key:"vi-title", id:"vi-title", className:"text-gray-4 btm-24"}, titleText), module$node_modules$react$default.createElement("div", {key:"vi-description", id:"vi-description", className:"text-gray-4 btm-30"}, descriptionText), module$node_modules$react$default.createElement("input", 
    {key:"vi-name-input", id:"vi-name-input", className:"ui-input-focus p-form-control form-dark vi-inputs btm-12", type:"text", placeholder:module$i18n$default.PreziPageI18n.translations["VI_FORM_NAME_PLACEHOLDER"], value:this.state.viewerName, onChange:(event) => {
      this.setState({viewerName:event.target.value});
    }}), module$node_modules$react$default.createElement("input", {key:"vi-email-input", id:"vi-email-input", className:"ui-input-focus p-form-control form-dark vi-inputs btm-24", type:"text", placeholder:module$i18n$default.PreziPageI18n.translations["VI_FORM_EMAIL_PLACEHOLDER"], value:this.state.viewerEmail, onChange:(event) => {
      this.setState({viewerEmail:event.target.value});
    }}), module$node_modules$react$default.createElement("button", {key:"vi-submit", id:"vi-submit", className:"btn-lg blue" + buttonDisabled, onClick:() => {
      this.props.onFormSubmit(this.state.viewerName, this.state.viewerEmail);
    }}, module$i18n$default.PreziPageI18n.translations["VI_FORM_SUBMIT"]))];
    const footer = module$node_modules$react$default.createElement("div", {className:"footer-container"}, module$node_modules$react$default.createElement("p", {className:"copyright text-center text-gray-3"}, module$node_modules$react$default.createElement("span", {}, module$i18n$default.PreziPageI18n.translations["VI_FOOTER_TEXT"]), module$node_modules$react$default.createElement("a", {className:"terms text-gray-3", href:"/terms-of-use/"}, module$i18n$default.PreziPageI18n.translations["VI_FOOTER_LINK_TEXT"])));
    return module$node_modules$react$default.createElement("div", {className:"viewer-identification-block-container"}, module$node_modules$react$default.createElement("div", {className:"center-position-placeholder"}), module$node_modules$react$default.createElement("div", {className:"viewer-identification-block"}, ...children), footer);
  }
}
module$ViewerIdentificationBlock$default.viewerIdentificationBlockFactory = module$node_modules$react$default.createFactory(ViewerIdentificationBlock$$module$ViewerIdentificationBlock);
var module$OnboardingVideo$default = {};
Object.defineProperty(module$OnboardingVideo$default, "__esModule", {value:true});
const videoContainerStyle$$module$OnboardingVideo = {position:"relative"};
const modalStyle$$module$OnboardingVideo = {width:"100%", maxWidth:"600px", marginTop:"110px"};
const bodyWrapperStyle$$module$OnboardingVideo = {padding:"0 24px 24px"};
const titleStyle$$module$OnboardingVideo = {fontSize:"14px", paddingTop:"14px", marginBottom:0};
const separatorStyle$$module$OnboardingVideo = {margin:"14px -24px 24px"};
module$OnboardingVideo$default.OnboardingVideo = class extends module$node_modules$react$default.Component {
  constructor(props) {
    super(props);
    this.state = {closed:false};
    this.setVideoRef = (videoRef) => {
      this.videoRef = videoRef;
      if (videoRef != null) {
        videoRef.setAttribute("controlsList", "nodownload noremoteplayback nofullscreen");
        videoRef.setAttribute("disablePictureInPicture", "true");
      }
    };
    this.closeModal = () => {
      this.setState({closed:true});
    };
    this.onClose = () => {
      this.glassboxLogger.logCloseOnboardingVideo();
      this.closeModal();
    };
    this.onPause = () => {
      this.glassboxLogger.logPauseOnboardingVideo();
    };
    this.onVolumeChange = () => {
      this.glassboxLogger.logToggleOnboardingVideoSound({onboarding_video_sound_status:this.videoRef.muted ? "MUTE" : "UNMUTE"});
    };
    this.onEnded = () => {
      this.glassboxLogger.logFinishedOnboardingVideo();
      this.closeModal();
    };
    this.glassboxLogger = props.logger.Avro.createDefaultLogger();
  }
  componentDidUpdate(prevProps) {
    if (!prevProps.startPlaying && this.props.startPlaying && this.videoRef != null) {
      this.videoRef.play();
      this.glassboxLogger.logLoadedOnboardingVideo();
    }
  }
  render() {
    const Modal = this.props.dragon.Modal;
    const modalContainerStyle = this.props.startPlaying ? null : {display:"none"};
    if (this.state.closed) {
      return null;
    }
    return module$node_modules$react$default.createElement("span", {id:"onboarding-video-modal", style:modalContainerStyle}, module$node_modules$react$default.createElement(Modal, {style:modalStyle$$module$OnboardingVideo, onClose:this.onClose}, module$node_modules$react$default.createElement("div", {style:bodyWrapperStyle$$module$OnboardingVideo}, module$node_modules$react$default.createElement("h3", {className:"caps", style:titleStyle$$module$OnboardingVideo}, "While your presentation is loading"), 
    module$node_modules$react$default.createElement("hr", {style:separatorStyle$$module$OnboardingVideo}), module$node_modules$react$default.createElement("div", {style:videoContainerStyle$$module$OnboardingVideo}, module$node_modules$react$default.createElement("video", {width:"100%", ref:this.setVideoRef, muted:true, controls:true, id:"onboarding-video", preload:"auto", onPause:this.onPause, onVolumeChange:this.onVolumeChange, onEnded:this.onEnded}, module$node_modules$react$default.createElement("source", 
    {src:"https://client-js.prezi.com/act-onboarding/onboarding.mp4", type:"video/mp4"}))))));
  }
};
var module$node_modules$react_transition_group$default = ReactTransitionGroup;
var module$PreziPage$default = {};
Object.defineProperty(module$PreziPage$default, "__esModule", {value:true});
function isSegmentationIntended$$module$PreziPage() {
  return window.location.search.startsWith("?segment");
}
module$PreziPage$default.PreziPage = class extends module$node_modules$react$default.Component {
  constructor() {
    super(...arguments);
    this.featureSwitcher = new module$FeatureSwitcher$default.FeatureSwitcher(this.props.preziOptions.featureList);
    this.state = {showLoadingProgress:false, isEditorReady:false, pageMode:2, loadEditorAsap:true, loadPercentage:15, topMenuComponent:null, isShareVisible:false, isContentVisible:true, fullBgStyle:"", infoLayerMode:0, viewerIdentificationState:0, templatePreviewController:null, templatePreviewCetController:null, startEditingController:null, pushNotificationController:null, templateListLoadingStatus:"not_started", shouldShowSegmentation:false, waitingForSegmentationResponse:isSegmentationIntended$$module$PreziPage(), 
    selectedTemplate:this.props.preziOptions.selectedTemplate || null, useSimplifiedTemplateChooser:this.props.preziOptions.simplifiedTemplateChooser || false, skipToPrivacyForm:false, ppwUpgradeToEduPlusEnabled:this.props.preziOptions.ppwUpgradeToEduPlusEnabled || false, afterCreateAction:null, privacyPaywallEnabled:this.props.preziOptions.privacyPaywallEnabled || false, shouldShowPrivacyForm:this.props.preziOptions.privacyPaywallEnabled || false, segmentationAnswer:null, showOnboardingVideo:this.featureSwitcher.isActive("js-editor-first-steps-onboarding-video") && 
    !this.featureSwitcher.isActive("js-classic-to-next-onboarding"), onboardingStartPlaying:false, defaultTemplateCategory:this.props.preziOptions.selectedTemplateCategory};
    this.handleMessage = (event) => {
      if (event.origin === window.location.origin && event.data !== null && event.data.type === "welcome-finished") {
        const seg = event.data.segmentation;
        if (seg != null) {
          const isEduSegment = seg.segmentation_answer === "student" || seg.segmentation_answer === "educator";
          this.setState({ppwUpgradeToEduPlusEnabled:isEduSegment});
        }
        switch(event.data.choice) {
          case "blank":
            if (this.state.privacyPaywallEnabled) {
              this.setState({selectedTemplate:"blank_-_white:blank_-_white_default", skipToPrivacyForm:true, shouldShowSegmentation:false, afterCreateAction:"storyblocks"});
            } else {
              this.startEditingWithTemplateId("blank_-_white:blank_-_white_default", false, false, "storyblocks", true);
            }
            break;
          case "brand":
            this.startEditingWithTemplateId("branding_v1", false, false, "branding", false);
            break;
          case "pptx":
            this.startEditingWithTemplateId("ppt_20_min_w48", true, false, null, false);
            break;
          case "skip":
          case "template-chooser":
            this.setState({useSimplifiedTemplateChooser:true, shouldShowSegmentation:false, segmentationAnswer:seg.segmentation_answer});
        }
      }
    };
    this.closeOverlay = () => {
      this.setInfoLayerMode(2);
      this.loader.setEditorMode();
    };
  }
  componentWillMount() {
    window.document.title = "Prezi";
    const urlState = this.parseURLState();
    module$i18n$default.PreziPageI18n.translations = this.props.preziOptions.translations;
    if (this.props.preziOptions.isFollower) {
      this.setInfoLayerMode(2);
    }
    if (this.props.isFollower) {
      this.setState({pageMode:5});
    } else {
      if (!this.props.isLoggedIn) {
        this.setState({pageMode:4});
      } else {
        if (this.props.preziOptions.createNew) {
          if (this.props.preziOptions.fromTemplate) {
            this.setState({pageMode:6});
          } else {
            if (this.props.preziOptions.pptCreation) {
              this.setState({pageMode:7});
            } else {
              this.setState({pageMode:3});
            }
          }
          if (isSegmentationIntended$$module$PreziPage()) {
            this.checkIfSegmentationShouldBeShown();
          }
        } else {
          if (this.props.canEdit && !urlState.isPresent) {
            this.setState({pageMode:0});
          } else {
            if (this.props.canEdit && urlState.isPresent) {
              this.setState({pageMode:1});
            } else {
              this.setState({pageMode:2});
            }
          }
        }
      }
    }
    this.infoOverlayLogEntry = {default_editor_mode:this.state.pageMode === 3 || this.state.pageMode === 0 ? "edit" : "present", is_logged_in:module$Logger$default.boolToInt(this.props.isLoggedIn), is_new_prezi:module$Logger$default.boolToInt(this.props.preziOptions.createNew), is_share_url:module$Logger$default.boolToInt(urlState.isShare), permission:this.props.canEdit ? "edit" : "view"};
    this.startEditingControllerPromise = new Promise((resolve) => {
      this.setStartEditingController = (controller) => {
        const startEditingController = {startEditing:(createOptions, action) => {
          this.setState({onboardingStartPlaying:true});
          controller.startEditing(createOptions, action);
        }};
        this.setState({startEditingController});
        resolve(startEditingController);
      };
    });
    if (this.props.isFollower) {
      this.setState({loadEditorAsap:true});
    } else {
      if (this.props.canEdit) {
        this.setState({showLoadingProgress:true, isContentVisible:false, loadEditorAsap:true});
      } else {
        if (this.props.preziOptions.userCanComment) {
          this.setState({showLoadingProgress:true, isContentVisible:false, loadEditorAsap:true});
        } else {
          if (this.props.preziOptions.userCanPresent && this.props.preziOptions.startInLivePreziMode) {
            this.setState({showLoadingProgress:true, isContentVisible:false, loadEditorAsap:true});
          } else {
            this.setState({loadEditorAsap:false});
          }
        }
      }
    }
    this.loadPreviewOrFallback(this.props.preview);
  }
  loadPreviewOrFallback(url) {
    const coverImage = new Image;
    const fallBackUrl = this.props.fallbackPreview;
    coverImage.addEventListener("load", () => {
      this.setState({fullBgStyle:"url(" + url + ") no-repeat center center / cover"});
    });
    coverImage.addEventListener("error", () => {
      if (url !== fallBackUrl) {
        this.loadPreviewOrFallback(fallBackUrl);
      }
    });
    coverImage.src = url;
  }
  startEditingWithTemplateId(templateId, pptWorkflow, preziVideoTemplate, afterCreateAction, showOnboardingVideo = true) {
    this.startEditingControllerPromise.then((startEditingController) => {
      this.setState({showOnboardingVideo});
      startEditingController.startEditing({templateId, pptTemplateFromSegmentation:pptWorkflow, preziVideoTemplate}, afterCreateAction);
    });
    this.setState({pageMode:7, shouldShowSegmentation:false});
  }
  componentDidMount() {
    this.setViewerIdentificationState();
    window.addEventListener("message", this.handleMessage);
  }
  componentWillUnmount() {
    window.removeEventListener("message", this.handleMessage);
  }
  componentWillUpdate(nextProps, nextState) {
    if (!this.loader && !nextState.waitingForSegmentationResponse && [3, 0].indexOf(nextState.viewerIdentificationState) === -1) {
      const preziPageLoaderInterface = {setTemplatePreviewController:(templatePreviewController) => {
        this.setState({templatePreviewController});
      }, setTemplatePreviewCetController:(templatePreviewCetController) => {
        this.setState({templatePreviewCetController});
      }, setPushNotificationController:(pushNotificationController) => {
        this.setState({pushNotificationController});
      }, setStartEditingController:this.setStartEditingController};
      this.loader = new module$Loader$default.Loader(this.state.pageMode, this.props.preziOptions, this.handleProgressEvent.bind(this), this.handleComponentsLoaded.bind(this), this.infoOverlayLogEntry, preziPageLoaderInterface, this.handleErrorPageLoaded.bind(this));
    }
  }
  componentDidUpdate() {
    if (this.state.templateService && !this.state.waitingForSegmentationResponse && !this.state.shouldShowSegmentation && this.state.templateListLoadingStatus === "not_started") {
      this.setState({templateListLoadingStatus:"loading"});
      this.preLoadTemplates(this.state.segmentationAnswer, this.state.useSimplifiedTemplateChooser, this.state.templateService);
    }
  }
  parseURLState() {
    return {isPresent:/^#present$/.test(window.location.hash), isShare:/^#share$/.test(window.location.hash)};
  }
  checkIfSegmentationShouldBeShown() {
    this.setState({waitingForSegmentationResponse:true});
    $.ajax({url:"/api/v1/personalization/profile/boxfish/", type:"GET", success:(data) => {
      if (data["messages"]["to_show"].indexOf("dashboard-segmentation") >= 0) {
        this.setState({shouldShowSegmentation:true});
      } else {
        if (isSegmentationIntended$$module$PreziPage()) {
          let queryParamsToPreserve = window.location.search.replace(/\?segment&?/, "");
          queryParamsToPreserve = queryParamsToPreserve ? `?${queryParamsToPreserve}` : queryParamsToPreserve;
          window.location.replace("/dashboard/next/" + queryParamsToPreserve);
        }
      }
    }, error:(jqXHR, textStatus, errorThrown) => {
      console.error(jqXHR, textStatus, errorThrown);
    }, complete:() => {
      this.setState({waitingForSegmentationResponse:false});
    }, contentType:"application/json"});
  }
  handleCallToActionClick() {
    if (!this.state.isEditorReady) {
      this.setState({loadEditorAsap:true, showLoadingProgress:true});
    } else {
      if (this.state.infoLayerMode === 1) {
        this.setInfoLayerMode(2);
        this.loader.setEditorMode();
        preziPlayerJS.getPlayer().focusToStep(0);
      } else {
        this.loader.setEditorMode();
        this.setInfoLayerMode(2);
      }
    }
  }
  handleMiniOverlayClick(event) {
    if ($(module$node_modules$react_dom$default.findDOMNode(this)).has(event.target).length === 0) {
      this.setInfoLayerMode(2);
    }
  }
  handleProgressEvent(event) {
    const isPreziLoaded = module$Loader$default.Loader.loadComplete(event);
    const isPreziLoadError = module$Loader$default.Loader.loadError(event);
    this.setState({loadPercentage:event.progress});
    if (isPreziLoaded || isPreziLoadError) {
      this.setState({isEditorReady:true});
      if (this.state.loadEditorAsap || isPreziLoadError) {
        this.loader.setEditorMode();
        this.setState({infoLayerMode:2});
      } else {
        preziPlayerJS.activateInfoMode();
      }
    }
    if (event.eventType === 5) {
      preziPlayerJS.getEditor().getEditorStore().getUserLicenseInformationStream().onValue((uli) => {
        const privacyPaywallEnabled = !uli.pitchPrivacyPrivate && !this.featureSwitcher.isActive("gm-cb-disable-privacy-paywall");
        if (this.state.privacyPaywallEnabled !== privacyPaywallEnabled) {
          this.setState({privacyPaywallEnabled});
        }
      });
    }
  }
  handleErrorPageLoaded() {
    this.setInfoLayerMode(2);
  }
  handleViewerIdentificationFormSubmit(viewerName, viewerEmail) {
    if (this.state.viewerIdentificationState !== 3) {
      return;
    }
    $.ajax({url:"/api/v1/insights/viewers/" + this.props.preziOptions.preziLinkToken + "/", type:"POST", success:() => {
      this.setState({viewerIdentificationState:2});
    }, error:(jqXHR, textStatus, errorThrown) => {
      console.error(jqXHR, textStatus, errorThrown);
      this.setState({viewerIdentificationState:2});
    }, data:JSON.stringify({"name":viewerName, "email":viewerEmail}), contentType:"application/json"});
  }
  getTemplateListKey(segmentationAnswer, simplifiedTemplateChooser) {
    if (simplifiedTemplateChooser) {
      switch(segmentationAnswer) {
        case "educator":
        case "student":
          if (this.featureSwitcher.isActive("abtest-template-lists-abtest-simplified-edu-b")) {
            return "simplified_edu_list_b_variant";
          } else {
            return "simplified_edu_list";
          }
        case "business":
          if (this.featureSwitcher.isActive("abtest-template-lists-abtest-simplified-business-b")) {
            return "simplified_business_list_b_variant";
          } else {
            return "simplified_business_list";
          }
        default:
          if (this.featureSwitcher.isActive("abtest-template-lists-abtest-simplified-default-b")) {
            return "simplified_default_list_b_variant";
          } else {
            return "simplified_default_list";
          }
      }
    } else {
      return "normal_list";
    }
  }
  handleComponentsLoaded(components) {
    this.setState(components);
  }
  preLoadTemplates(segmentationAnswer, useSimplifiedTemplateChooser, templateService) {
    const templateList = this.featureSwitcher.isActive("js-template-lists") ? this.getTemplateListKey(segmentationAnswer, useSimplifiedTemplateChooser) : "";
    const hidePrivate = !!useSimplifiedTemplateChooser;
    this.loader.preloadTemplates(templateService, templateList, hidePrivate).then(() => {
      this.setState({templateListLoadingStatus:"loaded"});
    });
  }
  handleInterruptLoadingRequest() {
    this.setState({showLoadingProgress:false, loadEditorAsap:false});
  }
  contentBlock() {
    return module$ContentBlock$default.contentBlockFactory({key:"content-block-component", isLoggedIn:this.props.isLoggedIn, title:this.props.title, ownerName:this.props.ownerName, modifiedDate:this.props.modifiedDate, description:this.props.description, isRevocableLink:this.props.preziOptions.preziLinkToken !== null, onShareSettingsClick:this.toggleShare.bind(this)});
  }
  centerBlock() {
    let centerBlockMode;
    if (this.state.showLoadingProgress && this.state.isEditorReady) {
      return null;
    }
    if (this.state.showLoadingProgress && !this.state.isEditorReady) {
      centerBlockMode = 3;
    } else {
      if (this.state.infoLayerMode === 1) {
        centerBlockMode = 2;
      } else {
        if (this.props.canEdit) {
          centerBlockMode = 4;
        } else {
          centerBlockMode = 0;
        }
      }
    }
    return module$CenterBlock$default.centerBlockFactory({key:"center-block-component", mode:centerBlockMode, loadPercentage:this.state.loadPercentage, labels:{present:module$i18n$default.PreziPageI18n.translations["PRESENT"], loading:module$i18n$default.PreziPageI18n.translations["LOADING"], continue:module$i18n$default.PreziPageI18n.translations["CONTINUE"], restart:module$i18n$default.PreziPageI18n.translations["RESTART"], edit:module$i18n$default.PreziPageI18n.translations["EDIT"]}, onCallToActionClick:this.handleCallToActionClick.bind(this)});
  }
  topMenuBlock() {
    return module$TopMenuBlock$default.topMenuBlockFactory({key:"topmenu-block-component", canEdit:this.props.canEdit, isCollaborator:this.featureSwitcher.isActive("js-prezipage-is-collaborator") ? this.props.preziOptions.isCollaborator : this.props.canEdit, title:this.props.title, topMenuComponent:this.state.topMenuComponent, mode:this.state.pageMode, onShareButtonClick:this.toggleShare.bind(this), interruptLoadingRequest:this.handleInterruptLoadingRequest.bind(this), createPreziUrl:this.props.preziOptions.createPreziUrl, 
    userCanLivePresent:this.props.preziOptions.userCanEdit || this.props.preziOptions.userCanComment || this.props.preziOptions.userCanPresent});
  }
  viewerIdentificationBlock() {
    return module$ViewerIdentificationBlock$default.viewerIdentificationBlockFactory({key:"viewer-identification-block-component", onFormSubmit:this.handleViewerIdentificationFormSubmit.bind(this), prezilinkToken:this.props.preziOptions.preziLinkToken, sharerFirstName:this.props.preziOptions.sharerFirstName, sharerLastName:this.props.preziOptions.sharerLastName, userName:this.props.preziOptions.viewerName, userEmail:this.props.preziOptions.email});
  }
  closeOverlayButton() {
    let className = "close-overlay-button";
    if (this.state.infoLayerMode === 1) {
      className = "restart-close";
    }
    return module$node_modules$react$default.createElement("div", {key:"close-overlay-button", className, onClick:this.closeOverlay}, module$node_modules$react$default.createElement("i", {className:"icon-cross", key:"close-button"}));
  }
  setViewerIdentificationState() {
    if (!this.featureSwitcher.isActive("js-viewer-identification-boxfish") || this.props.preziOptions.preziLinkToken == null || !this.props.preziOptions.prezilink["viewer_identification"] || !this.props.preziOptions.prezilink["visible_on_analytics"]) {
      this.setState({viewerIdentificationState:1});
    } else {
      $.ajax({url:"/api/v1/insights/viewers/" + this.props.preziOptions.preziLinkToken + "/", type:"GET", success:(data) => {
        if (data.is_identified) {
          this.setState({viewerIdentificationState:2});
        } else {
          this.setState({viewerIdentificationState:3});
        }
      }, error:(jqXHR, textStatus, errorThrown) => {
        console.error(jqXHR, textStatus, errorThrown);
        this.setState({viewerIdentificationState:1});
      }, contentType:"application/json"});
    }
  }
  toggleShare() {
    this.setState({isShareVisible:!this.state.isShareVisible});
  }
  setInfoLayerMode(mode) {
    if (typeof this.boundHandleMiniOverlayClick === "undefined") {
      this.boundHandleMiniOverlayClick = this.handleMiniOverlayClick.bind(this);
    }
    if (mode === 3) {
      $(document).on("mousedown mousewheel", this.boundHandleMiniOverlayClick);
    } else {
      $(document).off("mousedown mousewheel", this.boundHandleMiniOverlayClick);
    }
    const isContentVisible = mode !== 2;
    this.setState({infoLayerMode:mode, isContentVisible, showLoadingProgress:false});
    if (mode === 1) {
      preziPlayerJS.activateInfoMode();
    }
  }
  getPreziPageContentChildren() {
    const children = [];
    if (this.state.infoLayerMode !== 3) {
      children.push(this.createFullBGDiv());
    }
    children.push(module$node_modules$react$default.createElement("div", {className:"full-gradient", key:"gradient-block"}));
    if (this.state.isContentVisible) {
      children.push(this.contentBlock());
    }
    if (this.state.infoLayerMode === 3) {
      children.push(this.closeOverlayButton());
    } else {
      children.push(this.centerBlock());
      if (this.props.isLoggedIn && this.state.pageMode !== 3 && this.state.topMenuComponent) {
        children.push(this.topMenuBlock());
      }
      if (this.state.infoLayerMode === 1) {
        children.push(this.closeOverlayButton());
      }
    }
    return children;
  }
  createFullBGDiv() {
    let fullBgClassName = "full-bg";
    if (this.state.fullBgStyle === "") {
      fullBgClassName += " faded-out";
    }
    if (!/Edge/.test(navigator.userAgent)) {
      fullBgClassName += " blurred";
    }
    const style = {background:this.state.fullBgStyle};
    return module$node_modules$react$default.createElement("div", {className:fullBgClassName, style, key:"bg-block"});
  }
  render() {
    let result;
    if (this.state.viewerIdentificationState === 0) {
      return module$node_modules$react$default.createElement("div", {id:"prezipage-loader-container"}, this.createFullBGDiv());
    } else {
      if (this.state.viewerIdentificationState === 3) {
        return module$node_modules$react$default.createElement("div", {id:"prezipage-loader-container"}, this.createFullBGDiv(), this.viewerIdentificationBlock());
      } else {
        if (this.state.pageMode === 3 && this.state.shouldShowSegmentation) {
          let src = "/dashboard/next/segmentation/";
          if (this.props.preziOptions.frontendBundleWelcomeVersion != null) {
            src += `?frontend-bundle-welcome=${this.props.preziOptions.frontendBundleWelcomeVersion}`;
          }
          const style = {position:"absolute", zIndex:10, width:"100%", height:"100%", border:0};
          window.document.title = (module$i18n$default.PreziPageI18n.translations["WELCOME"] || "Welcome") + " | Prezi";
          result = module$node_modules$react$default.createElement("iframe", {id:"segmentation-iframe", style, src});
        } else {
          if (this.state.pageMode === 3 && !this.state.waitingForSegmentationResponse && this.state.templateListLoadingStatus === "loaded" && this.state.templateChooserUI != null && this.state.templateService != null) {
            if (this.state.isEditorReady) {
              result = null;
            } else {
              const workflow = this.state.templateService.getTemplateWorkflowMode(this.state.useSimplifiedTemplateChooser, this.props.preziOptions.pptRegistration);
              result = module$TemplateChooserContainer$default.TemplateChooserContainer({selectedTemplateIdFromUrl:this.state.selectedTemplate, startAtPrivacyForm:this.state.skipToPrivacyForm, templatePreviewController:this.state.templatePreviewController, templatePreviewCetController:this.state.templatePreviewCetController, pushNotificationController:this.state.pushNotificationController, startEditingController:this.state.startEditingController, templateChooserUI:this.state.templateChooserUI, templateService:this.state.templateService, 
              privacyPaywallEnabled:this.state.privacyPaywallEnabled, shouldShowPrivacyForm:this.state.shouldShowPrivacyForm, ppwUpgradeToEduPlusEnabled:this.state.ppwUpgradeToEduPlusEnabled, simplifiedTemplateChooser:this.state.useSimplifiedTemplateChooser, onlyTutorialCompatibleTemplates:this.props.preziOptions.onlyTutorialCompatibleTemplates, workflow, afterCreateAction:this.state.afterCreateAction, segmentationAnswer:this.state.segmentationAnswer, hostname:this.props.preziOptions.hostName, templateListKey:this.getTemplateListKey(this.state.segmentationAnswer, 
              this.state.useSimplifiedTemplateChooser), defaultTemplateCategory:this.state.defaultTemplateCategory});
            }
          } else {
            let infoModeContent;
            let miniModeContent;
            const children = this.getPreziPageContentChildren();
            if (this.state.infoLayerMode === 3) {
              miniModeContent = module$node_modules$react$default.createElement("div", {className:"mini-overlay"}, ...children);
            } else {
              if (this.state.infoLayerMode !== 2) {
                infoModeContent = module$node_modules$react$default.createElement("div", {className:"info-overlay"}, ...children);
              }
            }
            const slideGroup = miniModeContent == null ? null : module$node_modules$react$default.createElement(module$node_modules$react_transition_group$default.CSSTransition, {key:"slide-group", classNames:"slide", timeout:{enter:1000, exit:1000}}, miniModeContent);
            const fadeGroup = infoModeContent == null ? null : module$node_modules$react$default.createElement(module$node_modules$react_transition_group$default.CSSTransition, {key:"fade-group", classNames:"fade", timeout:{enter:1000, exit:1000}}, infoModeContent);
            result = module$node_modules$react$default.createElement("div", {id:"prezipage-loader-container"}, slideGroup, fadeGroup);
          }
        }
      }
    }
    if (this.state.dragon && this.state.showOnboardingVideo) {
      const onboardingVideo = module$node_modules$react$default.createElement(module$OnboardingVideo$default.OnboardingVideo, {dragon:this.state.dragon, logger:this.state.avro, startPlaying:this.state.onboardingStartPlaying});
      return module$node_modules$react$default.createElement("span", null, [result, onboardingVideo]);
    }
    return result;
  }
};
var module$api$PreziPage_module$default = {};
Object.defineProperty(module$api$PreziPage_module$default, "__esModule", {value:true});
module$api$PreziPage_module$default.forceModuleGeneration = 0;
function main$$module$api$PreziPage_module(props, container) {
  return module$node_modules$react_dom$default.render(module$node_modules$react$default.createElement(module$PreziPage$default.PreziPage, props), container);
}
const prezi$$module$api$PreziPage_module = window["prezi"] || (window["prezi"] = {});
const prezipage$$module$api$PreziPage_module = prezi$$module$api$PreziPage_module["prezipage"] || (prezi$$module$api$PreziPage_module["prezipage"] = {});
prezipage$$module$api$PreziPage_module["main"] = main$$module$api$PreziPage_module;
prezi_prezipage = module$api$PreziPage_module$default;


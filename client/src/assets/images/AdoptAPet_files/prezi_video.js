;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-25-g6015dbc";},getModuleName:function(){return "prezi_video";},getModuleVersion:function(){return "release-2021w06-base-26-gaeb382e";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi_bacon":dependencies[0]}};})());};})(arguments);var moduleImpl=(function(){return module(function(Spaghetti) {
var prezi_video=null;
var prezi_bacon=Spaghetti["dependencies"]["prezi_bacon"];
var module$node_modules$prezi_bacon$default = prezi_bacon;
var module$FlowplayerImpl$default = {};
Object.defineProperty(module$FlowplayerImpl$default, "__esModule", {value:true});
module$FlowplayerImpl$default.FlowplayerImpl = class {
  constructor(element) {
    this.flowplayerApi = flowplayer(element);
  }
  bind(eventName, callback) {
    this.flowplayerApi["bind"](eventName, callback);
  }
  seek(time, callback) {
    this.flowplayerApi["seek"](time, callback);
  }
  load() {
    this.flowplayerApi["load"]();
  }
  resume() {
    this.flowplayerApi["resume"]();
  }
  play() {
    this.flowplayerApi["play"]();
  }
  pause() {
    this.flowplayerApi["pause"]();
  }
  mute(value) {
    this.flowplayerApi["mute"](value);
  }
  unload() {
    this.flowplayerApi["unload"]();
  }
  hookIntoRejectedPlay(onError) {
    const videoTag = $("video", flowplayer)[0];
    if (videoTag != null && videoTag["play"] != null) {
      const origPlayFunc = videoTag["play"];
      videoTag["play"] = () => {
        const playPromise = origPlayFunc.apply(videoTag);
        if (playPromise != null && playPromise.catch != null) {
          playPromise.catch(onError);
        }
      };
    }
  }
  getVideoTime() {
    try {
      return this.flowplayerApi["video"]["time"];
    } catch (e) {
      return 0;
    }
  }
  getVideoWidth() {
    try {
      return this.flowplayerApi["video"]["width"];
    } catch (e) {
      return 0;
    }
  }
  getVideoHeight() {
    try {
      return this.flowplayerApi["video"]["height"];
    } catch (e) {
      return 0;
    }
  }
  getSeekable() {
    try {
      return this.flowplayerApi["video"]["seekable"];
    } catch (e) {
      return 0;
    }
  }
  getVideoDuration() {
    try {
      return this.flowplayerApi["video"]["duration"];
    } catch (e) {
      return 0;
    }
  }
  getVideoBuffer() {
    return this.flowplayerApi["video"]["buffer"];
  }
  isHtml5() {
    return this.flowplayerApi["engine"] === "html5";
  }
  getSplashState() {
    return this.flowplayerApi["splash"];
  }
};
var module$VideoControlUIImpl$default = {};
Object.defineProperty(module$VideoControlUIImpl$default, "__esModule", {value:true});
const BUTTONS_SPACE$$module$VideoControlUIImpl = 2 * (10 + 30) + 4 * 1;
const PROGRESS_BAR_LEFT$$module$VideoControlUIImpl = BUTTONS_SPACE$$module$VideoControlUIImpl + 10;
module$VideoControlUIImpl$default.VideoControlUIImpl = class {
  constructor(urlBase) {
    this.isPlaying = false;
    this.isMuted = false;
    this.urlBase = urlBase;
    this.createUIElement();
  }
  createUIElement() {
    this.element = $('<div class="video_control"></div>');
    this.element.css({position:"absolute", height:50, background:"#333333", opacity:0.9});
    this.playButton = $('<button class="toggle_play" />');
    this.playButton.css({marginTop:10, marginLeft:10, padding:0, height:30, width:30, border:1 + "px solid #000", cursor:"pointer", background:module$VideoControlUIImpl$default.VideoControlUIImpl.PLAY.replace("$$URL_BASE$$", this.urlBase)});
    this.volumeButton = $('<button class="toggle_volume" />');
    this.volumeButton.css({marginTop:10, marginLeft:10, padding:0, height:30, width:30, border:1 + "px solid #000", cursor:"pointer", background:module$VideoControlUIImpl$default.VideoControlUIImpl.VOLUME_ON.replace("$$URL_BASE$$", this.urlBase)});
    this.progressBar = $('<div class="progress_bar"></div>');
    this.progressBar.css({position:"absolute", top:20, left:PROGRESS_BAR_LEFT$$module$VideoControlUIImpl, right:10, height:10, overflow:"hidden", border:"1px solid #999999", boxSizing:"border-box", "-moz-box-sizing":"border-box", "-webkit-box-sizing":"border-box"});
    this.progressBarBuffer = $('<div class="progress_bar_buffer"></div>');
    this.progressBarBuffer.css({position:"absolute", top:1, left:1, height:6, overflow:"hidden", background:"#999999", cursor:"pointer"});
    this.progressBar.append(this.progressBarBuffer);
    this.progressBarProgress = $('<div class="progress_bar_progress"></div>');
    this.progressBarProgress.css({position:"absolute", top:1, left:1, height:6, overflow:"hidden", background:"#cccccc", cursor:"pointer"});
    this.progressBar.append(this.progressBarProgress);
    this.element.append(this.playButton);
    this.element.append(this.volumeButton);
    this.element.append(this.progressBar);
    this.setWidth(400);
    this.setLength(100);
    this.setPlaybackPosition(100);
    this.setBufferPosition(100);
  }
  setIsPlaying(value) {
    this.isPlaying = value;
    if (this.isPlaying) {
      this.playButton.css("background", module$VideoControlUIImpl$default.VideoControlUIImpl.PAUSE.replace("$$URL_BASE$$", this.urlBase));
    } else {
      this.playButton.css("background", module$VideoControlUIImpl$default.VideoControlUIImpl.PLAY.replace("$$URL_BASE$$", this.urlBase));
    }
  }
  getIsPlaying() {
    return this.isPlaying;
  }
  setIsMuted(value) {
    this.isMuted = value;
    if (this.isMuted) {
      this.volumeButton.css("background", module$VideoControlUIImpl$default.VideoControlUIImpl.VOLUME_OFF.replace("$$URL_BASE$$", this.urlBase));
    } else {
      this.volumeButton.css("background", module$VideoControlUIImpl$default.VideoControlUIImpl.VOLUME_ON.replace("$$URL_BASE$$", this.urlBase));
    }
  }
  getIsMuted() {
    return this.isMuted;
  }
  setWidth(value) {
    this.width = value;
    this.element.css("width", this.width + "px");
    this.setPlaybackPosition(this.playbackPosition);
  }
  getWidth() {
    return this.width;
  }
  updateProgressBarWidth() {
    this.progressBarWidth = this.width - BUTTONS_SPACE$$module$VideoControlUIImpl - 2 * 10;
    this.progressBar.css("width", this.progressBarWidth + "px");
  }
  setLength(value) {
    this.length = value;
  }
  getLength() {
    return this.length;
  }
  animatePlaybackPosition(value) {
    this.playbackPosition = value;
    this.progressBarProgress.stop(true, false).animate({width:this.progressWidth(this.playbackPosition) + "px"}, "fast");
  }
  setPlaybackPosition(value) {
    this.playbackPosition = value;
    this.progressBarProgress.stop(true, true);
    this.progressBarProgress.css("width", this.progressWidth(this.playbackPosition) + "px");
  }
  getPlaybackPosition() {
    return this.playbackPosition;
  }
  setBufferPosition(value) {
    this.bufferPosition = value;
    this.progressBarBuffer.css("width", this.progressWidth(this.bufferPosition) + "px");
  }
  getBufferPosition() {
    return this.bufferPosition;
  }
  progressWidth(pos) {
    const w = this.progressBarWidth - 4;
    const pw = w * (pos / this.length) + 0.5 | 0;
    return Math.min(w, pw);
  }
  getElement() {
    return this.element;
  }
  getPlayButton() {
    return this.playButton;
  }
  getVolumeButton() {
    return this.volumeButton;
  }
  getProgressBar() {
    return this.progressBar;
  }
};
module$VideoControlUIImpl$default.VideoControlUIImpl.VOLUME_ON = "url($$URL_BASE$$img/volume_on.png) no-repeat center center";
module$VideoControlUIImpl$default.VideoControlUIImpl.VOLUME_OFF = "url($$URL_BASE$$img/volume_off.png) no-repeat center center";
module$VideoControlUIImpl$default.VideoControlUIImpl.PLAY = "url($$URL_BASE$$img/play.png) no-repeat center center";
module$VideoControlUIImpl$default.VideoControlUIImpl.PAUSE = "url($$URL_BASE$$img/pause.png) no-repeat center center";
var module$VideoPlayButtonUIImpl$default = {};
Object.defineProperty(module$VideoPlayButtonUIImpl$default, "__esModule", {value:true});
module$VideoPlayButtonUIImpl$default.VideoPlayButtonUIImpl = class {
  constructor(urlBase) {
    this.isHighlight = false;
    this.urlBase = urlBase;
    this.createUIElement();
  }
  createUIElement() {
    this.element = $('<div class="video_play"></div>');
    this.element.css("position", "absolute");
    this.element.css("width", "160px");
    this.element.css("height", "132px");
    this.element.css("background", "#333333");
    this.element.css("opacity", "0.9");
    this.playButton = $('<div class="play"></div>');
    this.playButton.css("position", "absolute");
    this.playButton.css("top", "0px");
    this.playButton.css("left", "0px");
    this.playButton.css("width", "160px");
    this.playButton.css("height", "132px");
    this.playButton.css("cursor", "pointer");
    this.playButton.css("background", module$VideoPlayButtonUIImpl$default.VideoPlayButtonUIImpl.PLAY.replace("$$URL_BASE$$", this.urlBase));
    this.element.append(this.playButton);
    this.setIsHighlight(true);
  }
  setIsHighlight(value) {
    this.isHighlight = value;
    if (this.isHighlight) {
      this.element.css("background", "#666666");
    } else {
      this.element.css("background", "#333333");
    }
  }
  getIsHighlight() {
    return this.isHighlight;
  }
  getElement() {
    return this.element;
  }
  getPlayButton() {
    return this.playButton;
  }
};
module$VideoPlayButtonUIImpl$default.VideoPlayButtonUIImpl.PLAY = "url($$URL_BASE$$img/big_play.png) no-repeat 60px center";
var module$VimeoApiImpl$default = {};
Object.defineProperty(module$VimeoApiImpl$default, "__esModule", {value:true});
module$VimeoApiImpl$default.VimeoApiImpl = class {
  constructor(id, onReady) {
    this.id = id;
    this.onReady = onReady;
    require(["//f.vimeocdn.com/js/froogaloop2.min.js"], () => {
      this.initializePlayer();
    });
  }
  initializePlayer() {
    this.vimeoPlayer = $f($("#" + this.id)[0]);
    this.vimeoPlayer.addEvent("ready", this.onReady);
  }
  playVideo() {
    this.vimeoPlayer["api"]("play");
  }
  pauseVideo() {
    this.vimeoPlayer["api"]("pause");
  }
  stopVideo() {
    this.vimeoPlayer["api"]("stop");
  }
  setVolume(value) {
    this.vimeoPlayer["api"]("setVolume", value);
  }
  seekTo(seconds) {
    this.vimeoPlayer["api"]("seekTo", seconds);
  }
  unload() {
    this.vimeoPlayer["api"]("unload");
  }
  addEvent(eventType, handler) {
    this.vimeoPlayer["addEvent"](eventType, handler);
  }
  removeEvent(eventType) {
    this.vimeoPlayer["removeEvent"](eventType);
  }
};
var module$YoutubeApiImpl$default = {};
Object.defineProperty(module$YoutubeApiImpl$default, "__esModule", {value:true});
module$YoutubeApiImpl$default.YoutubeApiImpl = class {
  constructor(id, options) {
    this.id = id;
    this.options = options;
    if (module$YoutubeApiImpl$default.YoutubeApiImpl.youtubeApiLoaded) {
      this.initializePlayer();
    } else {
      require(["//www.youtube.com/iframe_api"], () => {
        window.onYouTubeIframeAPIReady = () => {
          module$YoutubeApiImpl$default.YoutubeApiImpl.youtubeApiLoaded = true;
          this.initializePlayer();
        };
      });
    }
  }
  initializePlayer() {
    this.youtubePlayer = new YT.Player(this.id, this.options);
  }
  playVideo() {
    this.youtubePlayer["playVideo"]();
  }
  pauseVideo() {
    this.youtubePlayer["pauseVideo"]();
  }
  getDuration() {
    return this.youtubePlayer["getDuration"]();
  }
  clearVideo() {
    this.youtubePlayer["clearVideo"]();
  }
  mute() {
    this.youtubePlayer["mute"]();
  }
  unMute() {
    this.youtubePlayer["unMute"]();
  }
  getCurrentTime() {
    return this.youtubePlayer["getCurrentTime"]();
  }
  getVideoLoadedFraction() {
    return this.youtubePlayer["getVideoLoadedFraction"]();
  }
  seekTo(seconds, allowSeekAhead) {
    if (this.youtubePlayer["seekTo"]) {
      this.youtubePlayer["seekTo"](seconds, allowSeekAhead);
    }
  }
  stopVideo() {
    this.youtubePlayer["stopVideo"]();
  }
  getPlayerState() {
    return this.youtubePlayer["getPlayerState"]();
  }
};
module$YoutubeApiImpl$default.YoutubeApiImpl.youtubeApiLoaded = false;
var module$VideoImpl$default = {};
Object.defineProperty(module$VideoImpl$default, "__esModule", {value:true});
module$VideoImpl$default.VideoImpl = class {
  constructor() {
    this.isControlsCreated = false;
    this.isFlowplayerInitialized = false;
    this.isControlVisible = true;
    this.videoEventBus = module$node_modules$prezi_bacon$default.Bacon.newBus();
  }
  createControls() {
    this.videoControlUI = new module$VideoControlUIImpl$default.VideoControlUIImpl(Spaghetti.getResourceUrl(""));
    this.videoPlayButtonUI = new module$VideoPlayButtonUIImpl$default.VideoPlayButtonUIImpl(Spaghetti.getResourceUrl(""));
    this.isControlsCreated = true;
  }
  getVideoControlUI() {
    if (this.isControlsCreated) {
      return this.videoControlUI;
    } else {
      this.createControls();
      return this.videoControlUI;
    }
  }
  getPlayButtonUI() {
    if (this.isControlsCreated) {
      return this.videoPlayButtonUI;
    } else {
      this.createControls();
      return this.videoPlayButtonUI;
    }
  }
  getVideoEventStream() {
    return this.videoEventBus;
  }
  initializeFlowplayer(element) {
    if (!this.isFlowplayerInitialized) {
      initFlowplayerJs();
      this.setFlowplayerGlobalConfig();
      this.isFlowplayerInitialized = true;
    }
    element["flowplayer"]();
  }
  getFlowplayerInstance(element) {
    const flowplayerApi = new module$FlowplayerImpl$default.FlowplayerImpl(element);
    return flowplayerApi;
  }
  setFlowplayerGlobalConfig() {
    if (!this.isFlowplayerInitialized) {
      initFlowplayerJs();
      this.isFlowplayerInitialized = true;
    }
    flowplayer["conf"] = {"keyboard":0, "tooltip":0, "flashfit":1, "key":"$167125282199567, $158501677958103"};
  }
  initializeYoutubePlayer(id, options) {
    const youtubeApi = new module$YoutubeApiImpl$default.YoutubeApiImpl(id, options);
    return youtubeApi;
  }
  initializeVimeoPlayer(id, onReady) {
    const vimeoPlayer = new module$VimeoApiImpl$default.VimeoApiImpl(id, onReady);
    return vimeoPlayer;
  }
  setControlVisibility(isControlVisible) {
    this.isControlVisible = isControlVisible;
  }
  getControlVisibility() {
    return this.isControlVisible;
  }
  propagateEvent(event) {
    this.videoEventBus.push(event);
  }
};
var module$api$Video_module$default = {};
Object.defineProperty(module$api$Video_module$default, "__esModule", {value:true});
(function(YoutubePlayerState) {
  YoutubePlayerState[YoutubePlayerState.UNSTARTED=-1]="UNSTARTED";
  YoutubePlayerState[YoutubePlayerState.ENDED=0]="ENDED";
  YoutubePlayerState[YoutubePlayerState.PLAYING=1]="PLAYING";
  YoutubePlayerState[YoutubePlayerState.PAUSED=2]="PAUSED";
  YoutubePlayerState[YoutubePlayerState.BUFFERING=3]="BUFFERING";
  YoutubePlayerState[YoutubePlayerState.CUED=4]="CUED";
})(module$api$Video_module$default.YoutubePlayerState || (module$api$Video_module$default.YoutubePlayerState = {}));
(function(VideoEventType) {
  VideoEventType[VideoEventType.Play=0]="Play";
  VideoEventType[VideoEventType.Pause=1]="Pause";
})(module$api$Video_module$default.VideoEventType || (module$api$Video_module$default.VideoEventType = {}));
(function(VideoModule) {
  function createVideo() {
    return new module$VideoImpl$default.VideoImpl;
  }
  VideoModule.createVideo = createVideo;
})(module$api$Video_module$default.VideoModule || (module$api$Video_module$default.VideoModule = {}));
prezi_video = module$api$Video_module$default;


var style = document.createElement('style');
style.textContent = '.flowplayer{position:relative;width:100%;background-size:contain;background-repeat:no-repeat;background-position:center center;display:inline-block;}\n.flowplayer *{font-weight:inherit;font-family:inherit;font-style:inherit;text-decoration:inherit;font-size:100%;padding:0;border:0;margin:0;list-style-type:none}\n.flowplayer a:focus{outline:0}\n.flowplayer video{width:100%}\n.flowplayer.is-ipad video{-webkit-transform:translateX(-2048px);}\n.is-ready.flowplayer.is-ipad video{-webkit-transform:translateX(0)}\n.flowplayer .fp-engine,.flowplayer .fp-ui,.flowplayer .fp-message{position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer;z-index:1}\n.flowplayer .fp-message{display:none;text-align:center;padding-top:5%;cursor:default;}\n.flowplayer .fp-message h2{font-size:120%;margin-bottom:1em}\n.flowplayer .fp-message p{color:#666;font-size:95%}\n.flowplayer .fp-controls{position:absolute;bottom:0;width:100%;}\n.no-background.flowplayer .fp-controls{background-color:transparent !important;background-image:-moz-linear-gradient(transparent,transparent) !important;background-image:-webkit-gradient(linear,0 0,0 100%,from(transparent),to(transparent)) !important}\n.is-fullscreen.flowplayer .fp-controls{bottom:3px}\n.is-mouseover.flowplayer .fp-controls{bottom:0}\n.flowplayer .fp-waiting{display:none;margin:19% auto;text-align:center;}\n.flowplayer .fp-waiting *{-webkit-box-shadow:0 0 5px #333;-moz-box-shadow:0 0 5px #333;box-shadow:0 0 5px #333}\n.flowplayer .fp-waiting em{width:1em;height:1em;-webkit-border-radius:1em;-moz-border-radius:1em;border-radius:1em;background-color:rgba(255,255,255,0.8);display:inline-block;-webkit-animation:pulse .6s infinite;-moz-animation:pulse .6s infinite;animation:pulse .6s infinite;margin:.3em;opacity:0;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);}\n.flowplayer .fp-waiting em:nth-child(1){-webkit-animation-delay:.3s;-moz-animation-delay:.3s;animation-delay:.3s}\n.flowplayer .fp-waiting em:nth-child(2){-webkit-animation-delay:.45s;-moz-animation-delay:.45s;animation-delay:.45s}\n.flowplayer .fp-waiting em:nth-child(3){-webkit-animation-delay:.6s;-moz-animation-delay:.6s;animation-delay:.6s}\n.flowplayer .fp-waiting p{color:#ccc;font-weight:bold}\n.flowplayer .fp-speed{font-size:30px;background-color:#333;background-color:rgba(51,51,51,0.8);color:#eee;margin:0 auto;text-align:center;width:120px;padding:.1em 0 0;opacity:0;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);-webkit-transition:opacity .5s;-moz-transition:opacity .5s;transition:opacity .5s;}\n.flowplayer .fp-speed.fp-hilite{opacity:1;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100)}\n.flowplayer .fp-help{position:absolute;top:0;left:-9999em;z-index:100;background-color:#333;background-color:rgba(51,51,51,0.9);width:100%;height:100%;opacity:0;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);-webkit-transition:opacity .2s;-moz-transition:opacity .2s;transition:opacity .2s;text-align:center;}\n.is-help.flowplayer .fp-help{left:0;opacity:1;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100)}\n.flowplayer .fp-help .fp-help-section{margin:3%;direction:ltr}\n.flowplayer .fp-help .fp-help-basics{margin-top:6%}\n.flowplayer .fp-help p{color:#eee;margin:.5em 0;font-size:14px;line-height:1.5;display:inline-block;margin:1% 2%}\n.flowplayer .fp-help em{background:#eee;-webkit-border-radius:.3em;-moz-border-radius:.3em;border-radius:.3em;margin-right:.4em;padding:.3em .6em;color:#333}\n.flowplayer .fp-help small{font-size:90%;color:#aaa}\n.flowplayer .fp-help .fp-close{display:block}\n@media (max-width: 600px){.flowplayer .fp-help p{font-size:9px}\n}.flowplayer .fp-subtitle{position:absolute;bottom:40px;left:-99999em;z-index:10;text-align:center;width:100%;opacity:0;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);-webkit-transition:opacity .3s;-moz-transition:opacity .3s;transition:opacity .3s;}\n.flowplayer .fp-subtitle p{display:inline;background-color:#333;background-color:rgba(51,51,51,0.9);color:#eee;padding:.1em .4em;font-size:16px;line-height:1.6;}\n.flowplayer .fp-subtitle p:after{content:\'\';clear:both}\n.flowplayer .fp-subtitle.fp-active{left:0;opacity:1;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100)}\n.flowplayer .fp-fullscreen,.flowplayer .fp-unload,.flowplayer .fp-mute,.flowplayer .fp-embed,.flowplayer .fp-close,.flowplayer .fp-play{background-image:url(img\/white.png);background-size:37px 300px;}\n.is-rtl.flowplayer .fp-fullscreen,.is-rtl.flowplayer .fp-unload,.is-rtl.flowplayer .fp-mute,.is-rtl.flowplayer .fp-embed,.is-rtl.flowplayer .fp-close,.is-rtl.flowplayer .fp-play{background-image:url(img\/white_rtl.png)}\n.color-light.flowplayer .fp-fullscreen,.color-light.flowplayer .fp-unload,.color-light.flowplayer .fp-mute,.color-light.flowplayer .fp-embed,.color-light.flowplayer .fp-close,.color-light.flowplayer .fp-play{background-image:url(img\/black.png);}\n.is-rtl.color-light.flowplayer .fp-fullscreen,.is-rtl.color-light.flowplayer .fp-unload,.is-rtl.color-light.flowplayer .fp-mute,.is-rtl.color-light.flowplayer .fp-embed,.is-rtl.color-light.flowplayer .fp-close,.is-rtl.color-light.flowplayer .fp-play{background-image:url(img\/black_rtl.png)}\n@media (-webkit-min-device-pixel-ratio: 2){.color-light.flowplayer .fp-fullscreen,.color-light.flowplayer .fp-unload,.color-light.flowplayer .fp-mute,.color-light.flowplayer .fp-embed,.color-light.flowplayer .fp-close,.color-light.flowplayer .fp-play{background-image:url(img\/black@x2.png)}\n.is-rtl.color-light.flowplayer .fp-fullscreen,.is-rtl.color-light.flowplayer .fp-unload,.is-rtl.color-light.flowplayer .fp-mute,.is-rtl.color-light.flowplayer .fp-embed,.is-rtl.color-light.flowplayer .fp-close,.is-rtl.color-light.flowplayer .fp-play{background-image:url(img\/black_rtl@x2.png)}\n}@media (-webkit-min-device-pixel-ratio: 2){.flowplayer .fp-fullscreen,.flowplayer .fp-unload,.flowplayer .fp-mute,.flowplayer .fp-embed,.flowplayer .fp-close,.flowplayer .fp-play{background-image:url(img\/white@x2.png)}\n.is-rtl.flowplayer .fp-fullscreen,.is-rtl.flowplayer .fp-unload,.is-rtl.flowplayer .fp-mute,.is-rtl.flowplayer .fp-embed,.is-rtl.flowplayer .fp-close,.is-rtl.flowplayer .fp-play{background-image:url(img\/white_rtl@x2.png)}\n}.flowplayer .fp-flash-disabled{background:#333;width:390px;margin:0 auto;position:absolute;bottom:0;color:#fff}\n.is-splash.flowplayer .fp-ui,.is-paused.flowplayer .fp-ui{background:url(img\/play_white.png) center no-repeat;background-size:12%;}\n.is-rtl.is-splash.flowplayer .fp-ui,.is-rtl.is-paused.flowplayer .fp-ui{background:url(img\/play_white_rtl.png) center no-repeat;background-size:12%}\n@media (-webkit-min-device-pixel-ratio: 2){.is-splash.flowplayer .fp-ui,.is-paused.flowplayer .fp-ui{background:url(img\/play_white@x2.png) center no-repeat;background-size:12%}\n.is-rtl.is-splash.flowplayer .fp-ui,.is-rtl.is-paused.flowplayer .fp-ui{background:url(img\/play_white_rtl@x2.png) center no-repeat;background-size:12%}\n}.color-light.is-splash.flowplayer .fp-ui,.color-light.is-paused.flowplayer .fp-ui{background-image:url(img\/play_black.png);}\n.is-rtl.color-light.is-splash.flowplayer .fp-ui,.is-rtl.color-light.is-paused.flowplayer .fp-ui{background-image:url(img\/play_black_rtl.png)}\n@media (-webkit-min-device-pixel-ratio: 2){.color-light.is-splash.flowplayer .fp-ui,.color-light.is-paused.flowplayer .fp-ui{background-image:url(img\/play_black@x2.png);}\n.is-rtl.color-light.is-splash.flowplayer .fp-ui,.is-rtl.color-light.is-paused.flowplayer .fp-ui{background-image:url(img\/play_black_rtl@x2.png)}\n}.is-fullscreen.flowplayer .fp-ui{background-size:auto}\n.is-seeking.flowplayer .fp-ui,.is-loading.flowplayer .fp-ui{background-image:none}\n.flowplayer .fp-logo{position:absolute;top:auto;left:15px;bottom:30px;cursor:pointer;display:none;z-index:100;}\n.flowplayer .fp-logo img{width:100%}\n.is-embedded.flowplayer .fp-logo{display:block}\n.fixed-controls.flowplayer .fp-logo{bottom:15px}\n.flowplayer .fp-fullscreen,.flowplayer .fp-unload,.flowplayer .fp-close{position:absolute;top:5px;left:auto;right:5px;display:block;width:30px;height:23px;background-position:12px -197px;cursor:pointer;}\n.is-rtl.flowplayer .fp-fullscreen,.is-rtl.flowplayer .fp-unload,.is-rtl.flowplayer .fp-close{right:auto;left:5px;background-position:18px -197px}\n.flowplayer .fp-unload,.flowplayer .fp-close{background-position:14px -175px;display:none;}\n.is-rtl.flowplayer .fp-unload,.is-rtl.flowplayer .fp-close{background-position:14px -175px}\n.flowplayer .fp-play{display:none;width:27px;height:20px;background-position:9px -24px;position:absolute;bottom:0;left:0;}\n.is-rtl.flowplayer .fp-play{background-position:18px -24px;left:auto;right:0}\n.play-button.flowplayer .fp-play{display:block}\n.is-paused.flowplayer .fp-play{background-position:9px 7px;}\n.is-rtl.is-paused.flowplayer .fp-play{background-position:18px 7px}\n.flowplayer.is-ready.is-closeable .fp-unload{display:block}\n.flowplayer.is-ready.is-closeable .fp-fullscreen{display:none}\n.flowplayer.is-fullscreen .fp-fullscreen{background-position:10px -217px;display:block !important;}\n.is-rtl.flowplayer.is-fullscreen .fp-fullscreen{background-position:21px -217px}\n.flowplayer.is-fullscreen .fp-unload,.flowplayer.is-fullscreen .fp-close{display:none !important}\n.flowplayer .fp-timeline{height:3px;position:relative;overflow:hidden;top:5px;height:10px;margin:0 150px 0 45px;}\n.no-volume.flowplayer .fp-timeline{margin-right:60px}\n.no-mute.flowplayer .fp-timeline{margin-right:140px}\n.no-mute.no-volume.flowplayer .fp-timeline{margin-right:45px}\n.play-button.flowplayer .fp-timeline{margin-left:67px}\n.is-rtl.flowplayer .fp-timeline{margin:0 45px 0 150px;}\n.no-volume.is-rtl.flowplayer .fp-timeline{margin-left:60px}\n.no-mute.is-rtl.flowplayer .fp-timeline{margin-left:140px}\n.no-mute.no-volume.is-rtl.flowplayer .fp-timeline{margin-left:45px}\n.play-button.is-rtl.flowplayer .fp-timeline{margin-right:67px}\n.is-long.flowplayer .fp-timeline{margin:0 180px 0 75px;}\n.no-volume.is-long.flowplayer .fp-timeline{margin-right:90px}\n.no-mute.is-long.flowplayer .fp-timeline{margin-right:75px}\n.play-button.is-long.flowplayer .fp-timeline{margin-left:97px}\n.is-rtl.is-long.flowplayer .fp-timeline{margin:75px 0 180px 0;}\n.no-volume.is-rtl.is-long.flowplayer .fp-timeline{margin-left:90px}\n.no-mute.is-rtl.is-long.flowplayer .fp-timeline{margin-left:75px}\n.play-button.is-rtl.is-long.flowplayer .fp-timeline{margin-left:97px}\n.aside-time.flowplayer .fp-timeline,.no-time.flowplayer .fp-timeline{margin:0 110px 0 5px}\n.aside-time.no-volume.flowplayer .fp-timeline,.no-time.no-volume.flowplayer .fp-timeline{margin-right:20px}\n.aside-time.no-mute.flowplayer .fp-timeline,.no-time.no-mute.flowplayer .fp-timeline{margin-right:5px}\n.play-button.no-time.flowplayer .fp-timeline,.play-button.aside-time.flowplayer .fp-timeline{margin-left:27px}\n.is-rtl.aside-time.flowplayer .fp-timeline,.is-rtl.no-time.flowplayer .fp-timeline{margin:0 5px 0 110px}\n.is-rtl.aside-time.no-volume.flowplayer .fp-timeline,.is-rtl.no-time.no-volume.flowplayer .fp-timeline{margin-left:20px}\n.is-rtl.aside-time.no-mute.flowplayer .fp-timeline,.is-rtl.no-time.no-mute.flowplayer .fp-timeline{margin-left:5px}\n.is-rtl.play-button.no-time.flowplayer .fp-timeline,.is-rtl.play-button.aside-time.flowplayer .fp-timeline{margin-right:27px}\n.flowplayer .fp-buffer,.flowplayer .fp-progress{position:absolute;top:0;left:auto;height:100%;cursor:col-resize}\n.flowplayer .fp-buffer{-webkit-transition:width .25s linear;-moz-transition:width .25s linear;transition:width .25s linear}\n.flowplayer.is-touch .fp-timeline{overflow:visible}\n.flowplayer.is-touch .fp-progress{-webkit-transition:width .2s linear;-moz-transition:width .2s linear;transition:width .2s linear}\n.flowplayer.is-touch .fp-timeline.is-dragging .fp-progress{-webkit-transition:right .1s linear,border .1s linear,top .1s linear,left .1s linear;-moz-transition:right .1s linear,border .1s linear,top .1s linear,left .1s linear;transition:right .1s linear,border .1s linear,top .1s linear,left .1s linear}\n.flowplayer.is-touch.is-mouseover .fp-progress:after,.flowplayer.is-touch.is-mouseover .fp-progress:before{content:\'\';display:block;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;position:absolute;right:-5px}\n.flowplayer.is-touch.is-rtl.is-mouseover .fp-progress:after,.flowplayer.is-touch.is-rtl.is-mouseover .fp-progress:before{right:auto;left:-5px}\n.flowplayer.is-touch.is-rtl.is-mouseover .fp-progress:after{left:-10px;-webkit-box-shadow:-1px 0 4px rgba(0,0,0,0.5);-moz-box-shadow:-1px 0 4px rgba(0,0,0,0.5);box-shadow:-1px 0 4px rgba(0,0,0,0.5)}\n.flowplayer.is-touch.is-mouseover .fp-progress:before{width:10px;height:10px}\n.flowplayer.is-touch.is-mouseover .fp-progress:after{height:10px;width:10px;top:-5px;right:-10px;border:5px solid rgba(255,255,255,0.65);-webkit-box-shadow:1px 0 4px rgba(0,0,0,0.5);-moz-box-shadow:1px 0 4px rgba(0,0,0,0.5);box-shadow:1px 0 4px rgba(0,0,0,0.5)}\n.flowplayer.is-touch.is-mouseover .fp-timeline.is-dragging .fp-progress:after{border:10px solid #fff;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;-webkit-transition:inherit;-moz-transition:inherit;transition:inherit;top:-10px;right:-15px}\n.flowplayer.is-touch.is-rtl.is-mouseover .fp-timeline.is-dragging .fp-progress:after{left:-15px;right:auto;border:10px solid #fff}\n.flowplayer .fp-volume{position:absolute;top:7.5px;right:5px;}\n.is-rtl.flowplayer .fp-volume{right:auto;left:5px}\n.flowplayer .fp-mute{position:relative;width:10px;height:15px;float:left;top:-5px;cursor:pointer;background-position:-2px -99px;}\n.is-rtl.flowplayer .fp-mute{float:right;background-position:-25px -99px}\n.no-mute.flowplayer .fp-mute{display:none}\n.flowplayer .fp-volumeslider{width:90px;height:5px;cursor:col-resize;float:left;}\n.is-rtl.flowplayer .fp-volumeslider{float:right}\n.no-volume.flowplayer .fp-volumeslider{display:none}\n.flowplayer .fp-volumelevel{height:100%}\n.flowplayer .fp-time{text-shadow:0 0 1px #000;font-size:12px;font-weight:bold;color:#fff;width:100%;}\n.flowplayer .fp-time.is-inverted .fp-duration{display:none}\n.flowplayer .fp-time.is-inverted .fp-remaining{display:inline}\n.flowplayer .fp-time em{width:35px;height:10px;line-height:10px;text-align:center;position:absolute;bottom:5px}\n.no-time.flowplayer .fp-time{display:none}\n.is-long.flowplayer .fp-time em{width:65px}\n.flowplayer .fp-elapsed{left:5px;}\n.play-button.flowplayer .fp-elapsed{left:27px}\n.is-rtl.flowplayer .fp-elapsed{left:auto;right:5px;}\n.play-button.is-rtl.flowplayer .fp-elapsed{right:27px}\n.flowplayer .fp-remaining,.flowplayer .fp-duration{right:110px;color:#eee;}\n.no-volume.flowplayer .fp-remaining,.no-volume.flowplayer .fp-duration{right:20px}\n.no-mute.flowplayer .fp-remaining,.no-mute.flowplayer .fp-duration{right:100px}\n.no-mute.no-volume.flowplayer .fp-remaining,.no-mute.no-volume.flowplayer .fp-duration{right:5px}\n.is-rtl.flowplayer .fp-remaining,.is-rtl.flowplayer .fp-duration{right:auto;left:110px;}\n.no-volume.is-rtl.flowplayer .fp-remaining,.no-volume.is-rtl.flowplayer .fp-duration{left:20px}\n.no-mute.is-rtl.flowplayer .fp-remaining,.no-mute.is-rtl.flowplayer .fp-duration{left:100px}\n.no-mute.no-volume.is-rtl.flowplayer .fp-remaining,.no-mute.no-volume.is-rtl.flowplayer .fp-duration{left:5px}\n.flowplayer .fp-remaining{display:none}\n.flowplayer.color-light .fp-time{color:#222;text-shadow:0 0 1px #fff}\n.flowplayer.color-light .fp-remaining,.flowplayer.color-light .fp-duration{color:#666}\n.flowplayer.aside-time .fp-time{position:absolute;top:5px;left:5px;bottom:auto !important;width:85px;}\n.flowplayer.aside-time .fp-time strong,.flowplayer.aside-time .fp-time em{position:static}\n.flowplayer.aside-time .fp-time .fp-elapsed{margin-right:5px;}\n.is-rtl.flowplayer.aside-time .fp-time .fp-elapsed{margin-right:auto;margin-left:5px}\n.flowplayer.is-long.aside-time .fp-time{width:130px}\n.flowplayer.is-splash,.flowplayer.is-poster{cursor:pointer;}\n.flowplayer.is-splash .fp-controls,.flowplayer.is-poster .fp-controls,.flowplayer.is-splash .fp-fullscreen,.flowplayer.is-poster .fp-fullscreen,.flowplayer.is-splash .fp-unload,.flowplayer.is-poster .fp-unload,.flowplayer.is-splash .fp-time,.flowplayer.is-poster .fp-time,.flowplayer.is-splash .fp-embed,.flowplayer.is-poster .fp-embed{display:none !important}\n.flowplayer.is-poster .fp-engine{top:-9999em}\n.flowplayer.is-loading .fp-waiting{display:block}\n.flowplayer.is-loading .fp-controls,.flowplayer.is-loading .fp-time{display:none}\n.flowplayer.is-loading .fp-ui{background-position:-9999em}\n.flowplayer.is-loading video.fp-engine{position:absolute;top:-9999em}\n.flowplayer.is-seeking .fp-waiting{display:block}\n.flowplayer.is-fullscreen{position:fixed !important;top:0 !important;left:0 !important;border:0 !important;margin:0 !important;width:100% !important;height:100% !important;max-width:100% !important;z-index:99999 !important;-webkit-box-shadow:0 !important;-moz-box-shadow:0 !important;box-shadow:0 !important;background-image:none !important;background-color:#333;}\n.is-rtl.flowplayer.is-fullscreen{left:auto !important;right:0 !important}\n.flowplayer.is-error{border:1px solid #909090;background:#fdfdfd !important;}\n.flowplayer.is-error h2{font-weight:bold;font-size:large;margin-top:10%}\n.flowplayer.is-error .fp-message{display:block}\n.flowplayer.is-error object,.flowplayer.is-error video,.flowplayer.is-error .fp-controls,.flowplayer.is-error .fp-time,.flowplayer.is-error .fp-subtitle{display:none}\n.flowplayer.is-ready.is-muted .fp-mute{opacity:.5;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=50)}\n.flowplayer.is-mouseout .fp-controls{height:0;-webkit-transition:height .15s .3s;-moz-transition:height .15s .3s;transition:height .15s .3s}\n.flowplayer.is-mouseout .fp-timeline{margin:0 !important}\n.flowplayer.is-mouseout .fp-timeline{-webkit-transition:height .15s .3s,top .15s .3s,margin .15s .3s;-moz-transition:height .15s .3s,top .15s .3s,margin .15s .3s;transition:height .15s .3s,top .15s .3s,margin .15s .3s;height:4px;top:0;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}\n.flowplayer.is-mouseout .fp-fullscreen,.flowplayer.is-mouseout .fp-unload,.flowplayer.is-mouseout .fp-elapsed,.flowplayer.is-mouseout .fp-remaining,.flowplayer.is-mouseout .fp-duration,.flowplayer.is-mouseout .fp-embed,.flowplayer.is-mouseout .fp-volume,.flowplayer.is-mouseout .fp-play{opacity:0;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);-webkit-transition:opacity .15s .3s;-moz-transition:opacity .15s .3s;transition:opacity .15s .3s}\n.flowplayer.is-mouseover .fp-controls,.flowplayer.fixed-controls .fp-controls{height:20px}\n.flowplayer.is-mouseover .fp-fullscreen,.flowplayer.fixed-controls .fp-fullscreen,.flowplayer.is-mouseover .fp-unload,.flowplayer.fixed-controls .fp-unload,.flowplayer.is-mouseover .fp-elapsed,.flowplayer.fixed-controls .fp-elapsed,.flowplayer.is-mouseover .fp-remaining,.flowplayer.fixed-controls .fp-remaining,.flowplayer.is-mouseover .fp-duration,.flowplayer.fixed-controls .fp-duration,.flowplayer.is-mouseover .fp-embed,.flowplayer.fixed-controls .fp-embed,.flowplayer.is-mouseover .fp-logo,.flowplayer.fixed-controls .fp-logo,.flowplayer.is-mouseover .fp-volume,.flowplayer.fixed-controls .fp-volume,.flowplayer.is-mouseover .fp-play,.flowplayer.fixed-controls .fp-play{opacity:1;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100)}\n.flowplayer.fixed-controls .fp-volume{display:block}\n.flowplayer.fixed-controls .fp-controls{bottom:-20px;}\n.is-fullscreen.flowplayer.fixed-controls .fp-controls{bottom:0}\n.flowplayer.fixed-controls .fp-time em{bottom:-15px;opacity:1;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);}\n.is-fullscreen.flowplayer.fixed-controls .fp-time em{bottom:5px}\n.flowplayer.is-disabled .fp-progress{background-color:#999}\n.flowplayer.is-flash-disabled{background-color:#333;}\n.flowplayer.is-flash-disabled object.fp-engine{z-index:100}\n.flowplayer.is-flash-disabled .fp-flash-disabled{display:block;z-index:101}\n.flowplayer .fp-embed{position:absolute;top:5px;left:5px;display:block;width:25px;height:20px;background-position:3px -237px;}\n.is-rtl.flowplayer .fp-embed{background-position:22px -237px;left:auto;right:5px}\n.flowplayer .fp-embed-code{position:absolute;display:none;top:10px;left:40px;background-color:#333;padding:3px 5px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;-webkit-box-shadow:0 0 3px #ccc;-moz-box-shadow:0 0 3px #ccc;box-shadow:0 0 3px #ccc;font-size:12px;}\n.flowplayer .fp-embed-code:before{content:\'\';width:0;height:0;position:absolute;top:2px;left:-10px;border:5px solid transparent;border-right-color:#333}\n.is-rtl.flowplayer .fp-embed-code{left:auto;right:40px;}\n.is-rtl.flowplayer .fp-embed-code:before{left:auto;right:-10px;border-right-color:transparent;border-left-color:#333}\n.flowplayer .fp-embed-code textarea{width:400px;height:16px;font-family:monaco,\"courier new\",verdana;color:#777;white-space:nowrap;resize:none;overflow:hidden;border:0;outline:0;background-color:transparent;color:#ccc}\n.flowplayer .fp-embed-code label{display:block;color:#999}\n.flowplayer.is-embedding .fp-embed,.flowplayer.is-embedding .fp-embed-code{display:block;opacity:1;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100)}\n.flowplayer.aside-time .fp-embed{left:85px;}\n.is-rtl.flowplayer.aside-time .fp-embed{left:auto;right:85px}\n.flowplayer.aside-time .fp-embed-code{left:115px;}\n.is-rtl.flowplayer.aside-time .fp-embed-code{left:auto;right:115px}\n.flowplayer.aside-time.is-embedding .fp-time{opacity:1;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100)}\n.flowplayer.is-long.aside-time .fp-embed{left:130px;}\n.is-rtl.flowplayer.is-long.aside-time .fp-embed{left:auto;right:130px}\n.flowplayer.no-time .fp-embed{left:5px !important;}\n.is-rtl.flowplayer.no-time .fp-embed{left:auto;right:5px !important}\n.flowplayer.is-live .fp-timeline,.flowplayer.is-live .fp-duration,.flowplayer.is-live .fp-remaining{display:none}\n.flowplayer .fp-context-menu{position:absolute;display:none;z-index:1001;background-color:#fff;padding:10px;border:1px solid #aaa;-webkit-box-shadow:0 0 4px #888;-moz-box-shadow:0 0 4px #888;box-shadow:0 0 4px #888;width:170px;}\n.flowplayer .fp-context-menu li{text-align:center;padding:10px;color:#444;margin:0 -10px 0 -10px;}\n.flowplayer .fp-context-menu li a{color:#00a7c8;font-size:110%}\n.flowplayer .fp-context-menu li:hover:not(.copyright){background-color:#eee}\n.flowplayer .fp-context-menu li.copyright{margin:0;padding-left:110px;background-image:url(\"img\/flowplayer.png\");background-repeat:no-repeat;background-size:100px 20px;background-position:5px 5px;border-bottom:1px solid #bbb;}\n@media (-webkit-min-device-pixel-ratio: 2){.flowplayer .fp-context-menu li.copyright{background-image:url(\"img\/flowplayer@2x.png\")}\n}@-moz-keyframes pulse{0%{opacity:0}\n100%{opacity:1}\n}@-webkit-keyframes pulse{0%{opacity:0}\n100%{opacity:1}\n}@-o-keyframes pulse{0%{opacity:0}\n100%{opacity:1}\n}@-ms-keyframes pulse{0%{opacity:0}\n100%{opacity:1}\n}@keyframes pulse{0%{opacity:0}\n100%{opacity:1}\n}.flowplayer .fp-controls{background-color:#333;background-color:rgba(51,51,51,0.6)}\n.flowplayer.fixed-controls .fp-controls{background-color:#333}\n.flowplayer .fp-timeline{background-color:#666}\n.flowplayer .fp-buffer{background-color:#eee}\n.flowplayer .fp-progress{background-color:#00a7c8}\n.flowplayer .fp-volumeslider{background-color:#000}\n.flowplayer .fp-volumelevel{background-color:#fff}\n.flowplayer .fp-play{height:24px}\n.flowplayer.is-touch.is-mouseover .fp-progress:before{background-color:#00a7c8}\n.flowplayer.color-light .fp-controls{background-color:rgba(255,255,255,0.6)}\n.flowplayer.color-light.fixed-controls .fp-controls{background-color:#fff}\n.flowplayer.color-light .fp-volumeslider{background-color:#ddd}\n.flowplayer.color-light .fp-volumelevel{background-color:#222}\n.flowplayer.color-alt .fp-progress{background-color:#fff}\n.flowplayer.color-alt.is-touch.is-mouseover .fp-progress:before{background-color:#fff}\n.flowplayer.color-alt .fp-buffer{background-color:#999}\n.flowplayer.color-alt2 .fp-progress{background-color:#900}\n.flowplayer.color-alt2.is-touch.is-mouseover .fp-progress:before{background-color:#900}\n';
document.body.appendChild(style);
function initFlowplayerJs() {/*!

 Flowplayer Unlimited v5.4.6 (2013-12-17) | flowplayer.org/license

 */
!function($) {

	/*
	 jQuery.browser for 1.9+

	 We all love feature detection but that's sometimes not enough.

	 @author Tero Piirainen
	 */
	!function($) {

		if (!$.browser) {

			var b = $.browser = {},
				ua = navigator.userAgent.toLowerCase(),
				match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
					/(safari)[ \/]([\w.]+)/.exec(ua) ||
					/(webkit)[ \/]([\w.]+)/.exec(ua) ||
					/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
					/(msie) ([\w.]+)/.exec(ua) ||
					ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];

			if (match[1]) {
				b[match[1]] = true;
				b.version = match[2] || "0";
			}

		}

	}(jQuery);
// auto-install (any video tag with parent .flowplayer)
	$(function() {
		if (typeof $.fn.flowplayer == 'function') {
			$("video").parent(".flowplayer").flowplayer();
		}
	});

	var instances = [],
		extensions = [],
		UA = window.navigator.userAgent;


	/* flowplayer()  */
	window.flowplayer = function(fn) {
		return $.isFunction(fn) ? extensions.push(fn) :
				typeof fn == 'number' || fn === undefined ? instances[fn || 0] :
			$(fn).data("flowplayer");
	};

	$(window).on('beforeunload', function() {
		$.each(instances, function(i, api) {
			if (api.conf.splash) {
				api.unload();
			} else {
				api.bind("error", function () {
					$(".flowplayer.is-error .fp-message").remove();
				});
			}
		});
	});

	var supportLocalStorage = false;
	try {
		if (typeof window.localStorage == "object") {
			window.localStorage.flowplayerTestStorage = "test";
			supportLocalStorage = true;
		}
	} catch (ignored) {}

	$.extend(flowplayer, {

		version: '5.4.6',

		engine: {},

		conf: {},

		support: {},

		defaults: {

			debug: false,

			// true = forced playback
			disabled: false,

			// first engine to try
			engine: 'html5',

			fullscreen: window == window.top,

			// keyboard shortcuts
			keyboard: true,

			// default aspect ratio
			ratio: 9 / 16,

			adaptiveRatio: false,

			// scale flash object to video's aspect ratio in normal mode?
			flashfit: false,

			rtmp: 0,

			splash: false,

			live: false,

			swf: "//releases.flowplayer.org/5.4.6/commercial/flowplayer.swf",

			speeds: [0.25, 0.5, 1, 1.5, 2],

			tooltip: true,

			// initial volume level
			volume: !supportLocalStorage ? 1 : localStorage.muted == "true" ? 0 : !isNaN(localStorage.volume) ? localStorage.volume || 1 : 1,

			// http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#error-codes
			errors: [

				// video exceptions
				'',
				'Video loading aborted',
				'Network error',
				'Video not properly encoded',
				'Video file not found',

				// player exceptions
				'Unsupported video',
				'Skin not found',
				'SWF file not found',
				'Subtitles not found',
				'Invalid RTMP URL',
				'Unsupported video format. Try installing Adobe Flash.'
			],
			errorUrls: ['','','','','','','','','','',
				'http://get.adobe.com/flashplayer/'
			],
			playlist: []

		}

	});

// keep track of players
	var playerCount = 1;

// jQuery plugin
	$.fn.flowplayer = function(opts, callback) {

		if (typeof opts == 'string') opts = { swf: opts }
		if ($.isFunction(opts)) { callback = opts; opts = {} }

		return !opts && this.data("flowplayer") || this.each(function() {

			// private variables
			var root = $(this).addClass("is-loading"),
				conf = $.extend({}, flowplayer.defaults, flowplayer.conf, opts, root.data()),
				videoTag = $("video", root).addClass("fp-engine").removeAttr("controls"),
				urlResolver = videoTag.length ? new URLResolver(videoTag) : null,
				storage = {},
				lastSeekPosition,
				engine;

			if (conf.playlist.length) { // Create initial video tag if called without
				var preload = videoTag.attr('preload'), placeHolder;
				if (videoTag.length) videoTag.replaceWith(placeHolder = $('<p />'));
				videoTag = $('<video crossOrigin="Anonymous" />').addClass('fp-engine');
				placeHolder ? placeHolder.replaceWith(videoTag) : root.prepend(videoTag);
				if (flowplayer.support.video) videoTag.attr('preload', preload);
				if (typeof conf.playlist[0] === 'string') videoTag.attr('src', conf.playlist[0]);
				else {
					$.each(conf.playlist[0], function(i, plObj) {
						for (var type in plObj) {
							if (plObj.hasOwnProperty(type)) {
								videoTag.append($('<source />').attr({type: 'video/' + type, src: plObj[type]}));
							}
						}
					});
				}
				urlResolver = new URLResolver(videoTag);

			}

			//stop old instance
			var oldApi = root.data('flowplayer');
			if (oldApi) oldApi.unload();

			root.data('fp-player_id', root.data('fp-player_id') || playerCount++);

			try {
				storage = window.localStorage || storage;
			} catch(e) {}

			var isRTL = (this.currentStyle && this.currentStyle['direction'] === 'rtl')
				|| (window.getComputedStyle && window.getComputedStyle(this, null).getPropertyValue('direction') === 'rtl');

			if (isRTL) root.addClass('is-rtl');

			/*** API ***/
			var api = oldApi || {

				// properties
				conf: conf,
				currentSpeed: 1,
				volumeLevel: typeof conf.volume === "undefined" ? storage.volume * 1 : conf.volume,
				video: {},

				// states
				disabled: false,
				finished: false,
				loading: false,
				muted: storage.muted == "true" || conf.muted,
				paused: false,
				playing: false,
				ready: false,
				splash: false,
				rtl: isRTL,

				// methods
				load: function(video, callback) {

					if (api.error || api.loading || api.disabled) return;

					// resolve URL
					video = urlResolver.resolve(video);
					$.extend(video, engine.pick(video.sources));

					if (video.src) {
						var e = $.Event("load");
						root.trigger(e, [api, video, engine]);

						if (!e.isDefaultPrevented()) {
							engine.load(video);

							// callback
							if ($.isFunction(video)) callback = video;
							if (callback) root.one("ready", callback);
						} else {
							api.loading = false;
						}
					}

					return api;
				},

				pause: function(fn) {
					if (api.ready && !api.seeking && !api.disabled && !api.loading) {
						engine.pause();
						api.one("pause", fn);
					}
					return api;
				},

				resume: function() {

					if (api.ready && api.paused && !api.disabled) {
						engine.resume();
						
						// Firefox (+others?) does not fire "resume" after finish
						if (api.finished) {
							api.trigger("resume", [api]);
							api.finished = false;
						}
					}

					return api;
				},

				toggle: function() {
					return api.ready ? api.paused ? api.resume() : api.pause() : api.load();
				},

				/*
				 seek(1.4)   -> 1.4s time
				 seek(true)  -> 10% forward
				 seek(false) -> 10% backward
				 */
				seek: function(time, callback) {
					if (api.ready) {

						if (typeof time == "boolean") {
							var delta = api.video.duration * 0.1;
							time = api.video.time + (time ? delta : -delta);
						}
						time = lastSeekPosition = Math.min(Math.max(time, 0), api.video.duration).toFixed(1);
						var ev = $.Event('beforeseek');
						root.trigger(ev, [api, time]);
						if (!ev.isDefaultPrevented()) {
							engine.seek(time);
							if ($.isFunction(callback)) root.one("seek", callback);
						} else {
							api.seeking = false;
							root.toggleClass("is-seeking", api.seeking); // remove loading indicator
						}
					}
					return api;
				},

				/*
				 seekTo(1) -> 10%
				 seekTo(2) -> 20%
				 seekTo(3) -> 30%
				 ...
				 seekTo()  -> last position
				 */
				seekTo: function(position, fn) {
					var time = position === undefined ? lastSeekPosition : api.video.duration * 0.1 * position;
					return api.seek(time, fn);
				},

				mute: function(flag) {
					if (flag === undefined) flag = !api.muted;
					storage.muted = api.muted = flag;
					storage.volume = !isNaN(storage.volume) ? storage.volume : conf.volume; // make sure storage has volume
					api.volume(flag ? 0 : storage.volume, true);
					api.trigger("mute", flag);
					$("video", root).prop('muted', flag);
					return api;
				},

				volume: function(level, skipStore) {
					if (api.ready) {
						level = Math.min(Math.max(level, 0), 1);
						if (!skipStore) storage.volume = level;
						engine.volume(level);
					}

					return api;
				},

				speed: function(val, callback) {

					if (api.ready) {

						// increase / decrease
						if (typeof val == "boolean") {
							val = conf.speeds[$.inArray(api.currentSpeed, conf.speeds) + (val ? 1 : -1)] || api.currentSpeed;
						}

						engine.speed(val);
						if (callback) root.one("speed", callback);
					}

					return api;
				},


				stop: function() {
					if (api.ready) {
						api.pause();
						api.seek(0, function() {
							root.trigger("stop");
						});
					}
					return api;
				},

				unload: function() {
					if (!root.hasClass("is-embedding")) {

						if (conf.splash) {
							api.trigger("unload");
							engine.unload();
						} else {
							api.stop();
						}
					}
					return api;
				},

				disable: function(flag) {
					if (flag === undefined) flag = !api.disabled;

					if (flag != api.disabled) {
						api.disabled = flag;
						api.trigger("disable", flag);
					}
					return api;
				}

			};

			api.conf = $.extend(api.conf, conf);


			/* event binding / unbinding */
			$.each(['bind', 'one', 'unbind'], function(i, key) {
				api[key] = function(type, fn) {
					root[key](type, fn);
					return api;
				};
			});

			api.trigger = function(event, arg) {
				root.trigger(event, [api, arg]);
				return api;
			};


			/*** Behaviour ***/
			if (!root.data('flowplayer')) { // Only bind once
				root.bind("boot", function() {

					// conf
					$.each(['autoplay', 'loop', 'preload', 'poster'], function(i, key) {
						var val = videoTag.attr(key);
						if (val !== undefined) conf[key] = val ? val : true;
					});

					// splash
					if (conf.splash || root.hasClass("is-splash") || !flowplayer.support.firstframe) {
						api.forcedSplash = !conf.splash && !root.hasClass("is-splash");
						api.splash = conf.splash = conf.autoplay = true;
						root.addClass("is-splash");
						if (flowplayer.support.video) videoTag.attr("preload", "none");
					}

					if (conf.live || root.hasClass('is-live')) {
						api.live = conf.live = true;
						root.addClass('is-live');
					}

					// extensions
					$.each(extensions, function(i) {
						this(api, root);
					});

					// 1. use the configured engine
					engine = flowplayer.engine[conf.engine];
					if (engine) engine = engine(api, root);

					if (engine.pick(urlResolver.initialSources)) {
						api.engine = conf.engine;

						// 2. failed -> try another
					} else {
						$.each(flowplayer.engine, function(name, impl) {
							if (name != conf.engine) {
								engine = this(api, root);
								if (engine.pick(urlResolver.initialSources)) api.engine = name;
								return false;
							}
						});
					}

					// instances
					instances.push(api);

					// no engine
					if (!api.engine) return api.trigger("error", { code: flowplayer.support.flashVideo ? 5 : 10 });

					// start
					conf.splash ? api.unload() : api.load();

					// disabled
					if (conf.disabled) api.disable();

					//initial volumelevel
					engine.volume(api.volumeLevel);

					// initial callback
					root.one("ready", callback);


				}).bind("load", function(e, api, video) {

					// unload others
					if (conf.splash) {
						$(".flowplayer").filter(".is-ready, .is-loading").not(root).each(function() {
							var api = $(this).data("flowplayer");
							if (api.conf.splash) api.unload();
						});
					}

					// loading
					root.addClass("is-loading");
					api.loading = true;


				}).bind("ready", function(e, api, video) {
					video.time = 0;
					api.video = video;

					function notLoading() {
						root.removeClass("is-loading");
						api.loading = false;
					}

					if (conf.splash) root.one("progress", notLoading);
					else notLoading();

					// saved state
					if (api.muted) api.mute(true);
					else api.volume(api.volumeLevel);


				}).bind("unload", function(e) {
					if (conf.splash) videoTag.remove();
					root.removeClass("is-loading");
					api.loading = false;


				}).bind("ready unload", function(e) {
					var is_ready = e.type == "ready";
					root.toggleClass("is-splash", !is_ready).toggleClass("is-ready", is_ready);
					api.ready = is_ready;
					api.splash = !is_ready;


				}).bind("progress", function(e, api, time) {
					api.video.time = time;


				}).bind("speed", function(e, api, val) {
					api.currentSpeed = val;

				}).bind("volume", function(e, api, level) {
					api.volumeLevel = Math.round(level * 100) / 100;
					if (!api.muted) storage.volume = level;
					else if (level) api.mute(false);


				}).bind("beforeseek seek", function(e) {
					api.seeking = e.type == "beforeseek";
					root.toggleClass("is-seeking", api.seeking);

				}).bind("ready pause resume unload finish stop", function(e, _api, video) {

					// PAUSED: pause / finish
					api.paused = /pause|finish|unload|stop/.test(e.type);

					// SHAKY HACK: first-frame / preload=none
					if (e.type == "ready") {
						api.paused = conf.preload == 'none';
						if (video) {
							api.paused = !video.duration || !conf.autoplay && (conf.preload != 'none');
						}
					}

					// the opposite
					api.playing = !api.paused;

					// CSS classes
					root.toggleClass("is-paused", api.paused).toggleClass("is-playing", api.playing);

					// sanity check
					if (!api.load.ed) api.pause();

				}).bind("finish", function(e) {
					api.finished = true;

				}).bind("error", function() {
					videoTag.remove();
				});
			}

			// boot
			root.trigger("boot", [api, root]).data("flowplayer", api);

		});

	};

	!function() {

		var parseIpadVersion = function(UA) {
			var e = /Version\/(\d\.\d)/.exec(UA);
			if (e && e.length > 1) {
				return parseFloat(e[1], 10);
			}
			return 0;
		};

		var s = flowplayer.support,
			browser = $.browser,
			video = $("<video loop autoplay preload/>")[0],
			IS_IE = browser.msie,
			UA = navigator.userAgent,
			IS_IPAD = /iPad|MeeGo/.test(UA) && !/CriOS/.test(UA),
			IS_IPAD_CHROME = /iPad/.test(UA) && /CriOS/.test(UA),
			IS_IPHONE = /iP(hone|od)/i.test(UA) && !/iPad/.test(UA),
			IS_ANDROID = /Android/.test(UA) && !/Firefox/.test(UA),
			IS_ANDROID_FIREFOX = /Android/.test(UA) && /Firefox/.test(UA),
			IS_SILK = /Silk/.test(UA),
			IS_WP = /IEMobile/.test(UA),
			IPAD_VER = IS_IPAD ? parseIpadVersion(UA) : 0,
			ANDROID_VER = IS_ANDROID ? parseFloat(/Android\ (\d\.\d)/.exec(UA)[1], 10) : 0;
		$.extend(s, {
			subtitles: !!video.addTextTrack,
			fullscreen: !IS_ANDROID &&
				(typeof document.webkitCancelFullScreen == 'function' && !/Mac OS X 10_5.+Version\/5\.0\.\d Safari/.test(UA) ||
					document.mozFullScreenEnabled ||
					typeof document.exitFullscreen == 'function'),
			inlineBlock: !(IS_IE && browser.version < 8),
			touch: ('ontouchstart' in window),
			dataload: !IS_IPAD && !IS_IPHONE && !IS_WP,
			zeropreload: !IS_IE && !IS_ANDROID, // IE supports only preload=metadata
			volume: !IS_IPAD && !IS_ANDROID && !IS_IPHONE && !IS_SILK && !IS_IPAD_CHROME,
			cachedVideoTag: !IS_IPAD && !IS_IPHONE && !IS_IPAD_CHROME && !IS_WP,
			firstframe: !IS_IPHONE && !IS_IPAD && !IS_ANDROID && !IS_SILK && !IS_IPAD_CHROME && !IS_WP && !IS_ANDROID_FIREFOX,
			inlineVideo: !IS_IPHONE && !IS_WP && (!IS_ANDROID || ANDROID_VER >= 3),
			hlsDuration: !browser.safari || IS_IPAD || IS_IPHONE || IS_IPAD_CHROME,
			seekable: !IS_IPAD && !IS_IPAD_CHROME
		});

		// flashVideo
		try {
			var plugin = navigator.plugins["Shockwave Flash"],
				ver = IS_IE ? new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable('$version') : plugin.description;
			if (!IS_IE && !plugin[0].enabledPlugin) s.flashVideo = false;
			else {

				ver = ver.split(/\D+/);
				if (ver.length && !ver[0]) ver = ver.slice(1);

				s.flashVideo = ver[0] > 9 || ver[0] == 9 && ver[3] >= 115;
			}

		} catch (ignored) {}
		try {
			s.video = !!video.canPlayType;
			s.video && video.canPlayType('video/mp4');
		} catch (e) {
			s.video = false;
		}

		// animation
		s.animation = (function() {
			var vendors = ['','Webkit','Moz','O','ms','Khtml'], el = $("<p/>")[0];

			for (var i = 0; i < vendors.length; i++) {
				if (el.style[vendors[i] + 'AnimationName'] !== 'undefined') return true;
			}
		})();



	}();


	/* The most minimal Flash embedding */

// movie required in opts
	function embed(swf, flashvars) {

		var id = "obj" + ("" + Math.random()).slice(2, 15),
			tag = '<object class="fp-engine" id="' + id+ '" name="' + id + '" ';

		tag += $.browser.msie ? 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">' :
			' data="' + swf  + '" type="application/x-shockwave-flash">';

		var opts = {
			width: "100%",
			height: "100%",
			allowscriptaccess: "always",
			wmode: "transparent",
			quality: "high",
			flashvars: "",

			// https://github.com/flowplayer/flowplayer/issues/13#issuecomment-9369919
			movie: swf + ($.browser.msie ? "?" + id : ""),
			name: id
		};

		// flashvars
		$.each(flashvars, function(key, value) {
			opts.flashvars += key + "=" + value + "&";
		});

		// parameters
		$.each(opts, function(key, value) {
			tag += '<param name="' + key + '" value="'+ value +'"/>';
		});

		tag += "</object>";

		return $(tag);
	}


// Flash is buggy allover
	if (window.attachEvent) {
		window.attachEvent("onbeforeunload", function() {
			__flash_savedUnloadHandler = __flash_unloadHandler = function() {};
		});
	}


	flowplayer.engine.flash = function(player, root) {

		var conf = player.conf,
			video = player.video,
			callbackId,
			objectTag,
			api;

		var engine = {

			pick: function(sources) {

				if (flowplayer.support.flashVideo) {

					// always pick video/flash first
					var flash = $.grep(sources, function(source) { return source.type == 'flash'; })[0];
					if (flash) return flash;

					for (var i = 0, source; i < sources.length; i++) {
						source = sources[i];
						if (/mp4|flv/.test(source.type)) return source;
					}
				}
			},

			load: function(video) {

				function escapeURL(url) {
					return url.replace(/&amp;/g, '%26').replace(/&/g, '%26').replace(/=/g, '%3D');
				}

				var html5Tag = $("video", root),
					url = escapeURL(video.src);
				is_absolute = /^https?:/.test(url);

				// html5 tag not needed (pause needed for firefox)
				try {
					if (html5Tag.length > 0 && flowplayer.support.video) html5Tag[0].pause();
				} catch (e) {
					// Omit errors on calling pause(), see https://github.com/flowplayer/flowplayer/issues/490
				}
				var removeTag = function() {
					html5Tag.remove();
				};
				var hasSupportedSource = function(sources) {
					return $.grep(sources, function(src) {
						return !!html5Tag[0].canPlayType('video/' + src.type);
					}).length > 0;
				};
				if (flowplayer.support.video &&
					html5Tag.prop('autoplay') &&
					hasSupportedSource(video.sources)) html5Tag.one('timeupdate', removeTag);
				else removeTag();

				// convert to absolute
				if (!is_absolute && !conf.rtmp) url = $("<img/>").attr("src", url)[0].src;

				if (api) {
					api.__play(url);

				} else {

					callbackId = "fp" + ("" + Math.random()).slice(3, 15);

					var opts = {
						hostname: conf.embedded ? conf.hostname : location.hostname,
						url: url,
						callback: "jQuery."+ callbackId
					};
					if (root.data("origin")) {
						opts.origin = root.data("origin");
					}

					if (is_absolute) delete conf.rtmp;

					// optional conf
					$.each(['key', 'autoplay', 'preload', 'rtmp', 'loop', 'debug', 'preload', 'splash', 'bufferTime'], function(i, key) {
						if (conf[key]) opts[key] = conf[key];
					});

					// issue #376
					if (opts.rtmp) {
						opts.rtmp = escapeURL(opts.rtmp);
					}

					objectTag = embed(conf.swf, opts);

					objectTag.prependTo(root);

					api = objectTag[0];

					// throw error if no loading occurs
					setTimeout(function() {
						try {
							if (!api.PercentLoaded()) {
								return root.trigger("error", [player, { code: 7, url: conf.swf }]);
							}
						} catch (e) {}
					}, 5000);

					// detect disabled flash
					setTimeout(function() {
						if (typeof api.PercentLoaded === 'undefined') {
							root.trigger('flashdisabled', [player]);
						}
					}, 1000);

					// listen
					$[callbackId] = function(type, arg) {

						if (conf.debug && type != "status") console.log("--", type, arg);

						var event = $.Event(type);

						switch (type) {

							// RTMP sends a lot of finish events in vain
							// case "finish": if (conf.rtmp) return;
							case "ready": arg = $.extend(video, arg); break;
							case "click": event.flash = true; break;
							case "keydown": event.which = arg; break;
							case "seek": video.time = arg; break;

							case "status":
								player.trigger("progress", arg.time);

								if (arg.buffer < video.bytes && !video.buffered) {
									video.buffer = arg.buffer / video.bytes * video.duration;
									player.trigger("buffer", video.buffer);
								} else if (!video.buffered) {
									video.buffered = true;
									player.trigger("buffered");
								}

								break;

						}

						if (type != 'buffered') {
							// add some delay so that player is truly ready after an event
							setTimeout(function() { player.trigger(event, arg); }, 1)
						}

					};

				}

			},

			// not supported yet
			speed: $.noop,


			unload: function() {
				api && api.__unload && api.__unload();
				delete $[callbackId];
				$("object", root).remove();
				api = 0;
			}

		};

		$.each("pause,resume,seek,volume".split(","), function(i, name) {

			engine[name] = function(arg) {
				try {
					if (player.ready) {

						if (name == 'seek' && player.video.time && !player.paused) {
							player.trigger("beforeseek");
						}

						if (arg === undefined) {
							api["__" + name]();

						} else {
							api["__" + name](arg);
						}

					}
				} catch (e) {
					if (typeof api["__" + name] === 'undefined') { //flash lost it's methods
						return root.trigger('flashdisabled', [player]);
					}
					throw e;
				}
			};

		});

		var win = $(window);

		// handle Flash object aspect ratio
		player.bind("ready fullscreen fullscreen-exit", function(e) {
			var origH = root.height(),
				origW = root.width();
			if (player.conf.flashfit || /full/.test(e.type)) {

				var fs = player.isFullscreen,
					truefs = fs && FS_SUPPORT,
					ie7 = !flowplayer.support.inlineBlock,
					screenW = fs ? (truefs ? screen.width : win.width()) : origW,
					screenH = fs ? (truefs ? screen.height : win.height()) : origH,

				// default values for fullscreen-exit without flashfit
					hmargin = 0,
					vmargin = 0,
					objwidth = ie7 ? origW : '',
					objheight = ie7 ? origH : '',

					aspectratio, dataratio;

				if (player.conf.flashfit || e.type === "fullscreen") {
					aspectratio = player.video.width / player.video.height,
						dataratio = player.video.height / player.video.width,
						objheight = Math.max(dataratio * screenW),
						objwidth = Math.max(aspectratio * screenH);
					objheight = objheight > screenH ? objwidth * dataratio : objheight;
					objheight = Math.min(Math.round(objheight), screenH);
					objwidth = objwidth > screenW ? objheight * aspectratio : objwidth;
					objwidth = Math.min(Math.round(objwidth), screenW);
					vmargin = Math.max(Math.round((screenH + vmargin - objheight) / 2), 0);
					hmargin = Math.max(Math.round((screenW + hmargin - objwidth) / 2), 0);
				}

				$("object", root).css({
					width: objwidth,
					height: objheight,
					marginTop: vmargin,
					marginLeft: hmargin
				});
			}
		});

		return engine;

	};


	var VIDEO = $('<video/>')[0];

// HTML5 --> Flowplayer event
	var EVENTS = {

		// fired
		ended: 'finish',
		pause: 'pause',
		play: 'resume',
		progress: 'buffer',
		timeupdate: 'progress',
		volumechange: 'volume',
		ratechange: 'speed',
		//seeking: 'beforeseek',
		seeked: 'seek',
		// abort: 'resume',

		// not fired
		loadeddata: 'ready',
		// loadedmetadata: 0,
		// canplay: 0,

		// error events
		// load: 0,
		// emptied: 0,
		// empty: 0,
		error: 'error',
		dataunavailable: 'error'

	};

	function round(val, per) {
		per = per || 100;
		return Math.round(val * per) / per;
	}

	function getType(type) {
		return /mpegurl/i.test(type) ? "application/x-mpegurl" : "video/" + type;
	}

	function canPlay(type) {
		if (!/^(video|application)/.test(type))
			type = getType(type);
		return !!VIDEO.canPlayType(type).replace("no", '');
	}

	function findFromSourcesByType(sources, type) {
		var arr = $.grep(sources, function(s) {
			return s.type === type;
		});
		return arr.length ? arr[0] : null;
	}

	var videoTagCache;
	var createVideoTag = function(video) {
		if (videoTagCache) {
			return videoTagCache.attr({type: getType(video.type), src: video.src});
		}
		return (videoTagCache = $("<video/>", {
            crossOrigin: "Anonymous",
			src: video.src,
			type: getType(video.type),
			'class': 'fp-engine',
			'autoplay': 'autoplay',
			preload: 'none',
			'x-webkit-airplay': 'allow'
		}));
	}

	flowplayer.engine.html5 = function(player, root) {

		var videoTag = $("video", root),
			support = flowplayer.support,
			track = $("track", videoTag),
			conf = player.conf,
			self,
			timer,
			api;

		return self = {

			pick: function(sources) {
				if (support.video) {
					if (conf.videoTypePreference) {
						var mp4source = findFromSourcesByType(sources, conf.videoTypePreference);
						if (mp4source) return mp4source;
					}
					for (var i = 0, source; i < sources.length; i++) {
						if (canPlay(sources[i].type)) return sources[i];
					}
				}
			},

			load: function(video) {

				if (conf.splash && !api) {

					videoTag = createVideoTag(video).prependTo(root);

					if (!support.inlineVideo) {
						videoTag.css({
							position: 'absolute',
							top: '-9999em'
						});
					}

					if (track.length) videoTag.append(track.attr("default", ""));

					if (conf.loop) videoTag.attr("loop", "loop");

					api = videoTag[0];

				} else {

					api = videoTag[0];
					var sources = videoTag.find('source');
					if (!api.src && sources.length) {
						api.src = video.src;
						sources.remove();
					}

					// change of clip
					if (player.video.src && video.src != player.video.src) {
						videoTag.attr("autoplay", "autoplay");
						api.src = video.src;

						// preload=none or no initial "loadeddata" event
					} else if (conf.preload == 'none' || !support.dataload) {

						if (support.zeropreload) {
							player.trigger("ready", video).trigger("pause").one("ready", function() {
								root.trigger("resume", [player]);
							});

						} else {
							player.one("ready", function() {
								root.trigger("pause", [player]);
							});
						}
					}

				}

				listen(api, $("source", videoTag).add(videoTag), video);

				// iPad (+others?) demands load()
				if (conf.preload != 'none' || !support.zeropreload || !support.dataload) api.load();
				if (conf.splash) api.load();
			},

			pause: function() {
				api.pause();
			},

			resume: function() {
				api.play();
			},

			speed: function(val) {
				api.playbackRate = val;
			},

			seek: function(time) {
				try {
					var pausedState = player.paused;
					api.currentTime = time;
					if (pausedState) api.pause();
				} catch (ignored) {}
			},

			volume: function(level) {
				api.volume = level;
			},

			unload: function() {
				$("video.fp-engine", root).remove();
				if (!support.cachedVideoTag) videoTagCache = null;
				timer = clearInterval(timer);
				api = 0;
			}

		};

		function listen(api, sources, video) {
			// listen only once

			if (api.listeners && api.listeners.hasOwnProperty(root.data('fp-player_id'))) return;
			(api.listeners || (api.listeners = {}))[root.data('fp-player_id')] = true;

			sources.bind("error", function(e) {
				try {
					if (e.originalEvent && $(e.originalEvent.originalTarget).is('img')) return e.preventDefault();
					if (canPlay($(e.target).attr("type"))) {
						player.trigger("error", { code: 4 });
					}
				} catch (er) {
					// Most likely: https://bugzilla.mozilla.org/show_bug.cgi?id=208427
				}
			});

			$.each(EVENTS, function(type, flow) {

				api.addEventListener(type, function(e) {

					// safari hack for bad URL (10s before fails)
					if (flow == "progress" && e.srcElement && e.srcElement.readyState === 0) {
						setTimeout(function() {
							if (!player.video.duration) {
								flow = "error";
								player.trigger(flow, { code: 4 });
							}
						}, 10000);
					}

					if (conf.debug && !/progress/.test(flow)) console.log(type, "->", flow, e);

					// no events if player not ready
					if (!player.ready && !/ready|error/.test(flow) || !flow || !$("video", root).length) { return; }

					var event = $.Event(flow), arg;

					switch (flow) {

						case "ready":

							arg = $.extend(video, {
								duration: api.duration,
								width: api.videoWidth,
								height: api.videoHeight,
								url: api.currentSrc,
								src: api.currentSrc
							});

							try {
								arg.seekable = api.seekable && api.seekable.end(null);

							} catch (ignored) {}

							// buffer
							timer = timer || setInterval(function() {

								try {
									arg.buffer = api.buffered.end(null);

								} catch (ignored) {}

								if (arg.buffer) {
									if (round(arg.buffer, 1000) < round(arg.duration, 1000) && !arg.buffered) {
										player.trigger("buffer", e);

									} else if (!arg.buffered) {
										arg.buffered = true;
										player.trigger("buffer", e).trigger("buffered", e);
										clearInterval(timer);
										timer = 0;
									}
								}

							}, 250);

							if (!conf.live && !arg.duration && !support.hlsDuration && type === "loadeddata") {
								var durationChanged = function() {
									arg.duration = api.duration;
									try {
										arg.seekable = api.seekable && api.seekable.end(null);

									} catch (ignored) {}
									player.trigger(event, arg);
									api.removeEventListener('durationchange', durationChanged);
								};
								api.addEventListener('durationchange', durationChanged);
								return;
							}

							break;

						case "progress": case "seek":

						var dur = player.video.duration

						if (api.currentTime > 0) {
							arg = Math.max(api.currentTime, 0);
							break;

						} else if (flow == 'progress') {
							return;
						}


						case "speed":
							arg = round(api.playbackRate);
							break;

						case "volume":
							arg = round(api.volume);
							break;

						case "error":
							try {
								arg = (e.srcElement || e.originalTarget).error;
							} catch (er) {
								// Most likely https://bugzilla.mozilla.org/show_bug.cgi?id=208427
								return;
							}
					}

					player.trigger(event, arg);

				}, false);

			});

		}

	};
	var TYPE_RE = /\.(\w{3,4})(\?.*)?$/i;

	function parseSource(el) {

		var src = el.attr("src"),
			type = el.attr("type") || "",
			suffix = src.split(TYPE_RE)[1];

		type = /mpegurl/.test(type) ? "mpegurl" : type.replace("video/", "");

		return { src: src, suffix: suffix || type, type: type || suffix };
	}

	/* Resolves video object from initial configuration and from load() method */
	function URLResolver(videoTag) {

		var self = this,
			sources = [];

		// initial sources
		$("source", videoTag).each(function() {
			sources.push(parseSource($(this)));
		});

		if (!sources.length) sources.push(parseSource(videoTag));

		self.initialSources = sources;

		self.resolve = function(video) {
			if (!video) return { sources: sources };

			if ($.isArray(video)) {

				video = { sources: $.map(video, function(el) {
					var type, ret = $.extend({}, el);
					$.each(el, function(key, value) { type = key; });
					ret.type = type;
					ret.src = el[type];
					delete ret[type];
					return ret;
				})};

			} else if (typeof video == 'string') {

				video = { src: video, sources: [] };

				$.each(sources, function(i, source) {
					if (source.type != 'flash') {
						video.sources.push({
							type: source.type,
							src: video.src.replace(TYPE_RE, "." + source.suffix + "$2")
						});
					}
				});
			}

			return video;
		};

	};
	/* A minimal jQuery Slider plugin with all goodies */

// skip IE policies
// document.ondragstart = function () { return false; };


// execute function every <delay> ms
	$.throttle = function(fn, delay) {
		var locked;

		return function () {
			if (!locked) {
				fn.apply(this, arguments);
				locked = 1;
				setTimeout(function () { locked = 0; }, delay);
			}
		};
	};


	$.fn.slider2 = function(rtl) {

		var IS_IPAD = /iPad/.test(navigator.userAgent) && !/CriOS/.test(navigator.userAgent);

		return this.each(function() {

			var root = $(this),
				doc = $(document),
				progress = root.children(":last"),
				disabled,
				offset,
				width,
				height,
				vertical,
				size,
				maxValue,
				max,
				skipAnimation = false,

			/* private */
				calc = function() {
					offset = root.offset();
					width = root.width();
					height = root.height();

					/* exit from fullscreen can mess this up.*/
					// vertical = height > width;

					size = vertical ? height : width;
					max = toDelta(maxValue);
				},

				fire = function(value) {
					if (!disabled && value != api.value && (!maxValue || value < maxValue)) {
						root.trigger("slide", [ value ]);
						api.value = value;
					}
				},

				mousemove = function(e) {
					var pageX = e.pageX;
					if (!pageX && e.originalEvent && e.originalEvent.touches && e.originalEvent.touches.length) {
						pageX = e.originalEvent.touches[0].pageX;
					}
					var delta = vertical ? e.pageY - offset.top : pageX - offset.left;
					delta = Math.max(0, Math.min(max || size, delta));

					var value = delta / size;
					if (vertical) value = 1 - value;
					if (rtl) value = 1 - value;
					return move(value, 0, true);
				},

				move = function(value, speed) {
					if (speed === undefined) { speed = 0; }
					if (value > 1) value = 1;

					var to = (Math.round(value * 1000) / 10) + "%";

					if (!maxValue || value <= maxValue) {
						if (!IS_IPAD) progress.stop(); // stop() broken on iPad
						if (skipAnimation) {
							progress.css('width', to);
						} else {
							progress.animate(vertical ? { height: to } : { width: to }, speed, "linear");
						}
					}

					return value;
				},

				toDelta = function(value) {
					return Math.max(0, Math.min(size, vertical ? (1 - value) * height : value * width));
				},

			/* public */
				api = {

					max: function(value) {
						maxValue = value;
					},

					disable: function(flag) {
						disabled = flag;
					},

					slide: function(value, speed, fireEvent) {
						calc();
						if (fireEvent) fire(value);
						move(value, speed);
					},

					// Should animation be handled via css
					disableAnimation: function(value) {
						skipAnimation = value !== false;
					}

				};

			calc();

			// bound dragging into document
			root.data("api", api).bind("mousedown.sld touchstart", function(e) {
				e.preventDefault();

				if (!disabled) {

					// begin --> recalculate. allows dynamic resizing of the slider
					var delayedFire = $.throttle(fire, 100);
					calc();
					api.dragging = true;
					root.addClass('is-dragging');
					fire(mousemove(e));

					doc.bind("mousemove.sld touchmove", function(e) {
						e.preventDefault();
						delayedFire(mousemove(e));

					}).one("mouseup touchend", function() {
						api.dragging = false;
						root.removeClass('is-dragging');
						doc.unbind("mousemove.sld touchmove");
					});

				}

			});

		});

	};

	function zeropad(val) {
		val = parseInt(val, 10);
		return val >= 10 ? val : "0" + val;
	}

// display seconds in hh:mm:ss format
	function format(sec) {

		sec = sec || 0;

		var h = Math.floor(sec / 3600),
			min = Math.floor(sec / 60);

		sec = sec - (min * 60);

		if (h >= 1) {
			min -= h * 60;
			return h + ":" + zeropad(min) + ":" + zeropad(sec);
		}

		return zeropad(min) + ":" + zeropad(sec);
	}

	flowplayer(function(api, root) {

		var conf = api.conf,
			support = flowplayer.support,
			hovertimer;
		root.find('.fp-ratio,.fp-ui').remove();
		root.addClass("flowplayer").append('\
      <div class="ratio"/>\
      <div class="ui">\
         <div class="waiting"><em/><em/><em/></div>\
         <a class="fullscreen"/>\
         <a class="unload"/>\
         <p class="speed"/>\
         <div class="controls">\
            <a class="play"></a>\
            <div class="timeline">\
               <div class="buffer"/>\
               <div class="progress"/>\
            </div>\
            <div class="volume">\
               <a class="mute"></a>\
               <div class="volumeslider">\
                  <div class="volumelevel"/>\
               </div>\
            </div>\
         </div>\
         <div class="time">\
            <em class="elapsed">00:00</em>\
            <em class="remaining"/>\
            <em class="duration">00:00</em>\
         </div>\
         <div class="message"><h2/><p/></div>\
      </div>'.replace(/class="/g, 'class="fp-')
		);

		function find(klass) {
			return $(".fp-" + klass, root);
		}

		// widgets
		var progress = find("progress"),
			buffer = find("buffer"),
			elapsed = find("elapsed"),
			remaining = find("remaining"),
			waiting = find("waiting"),
			ratio = find("ratio"),
			speed = find("speed"),
			durationEl = find("duration"),
			origRatio = ratio.css("paddingTop"),

		// sliders
			timeline = find("timeline").slider2(api.rtl),
			timelineApi = timeline.data("api"),

			volume = find("volume"),
			fullscreen = find("fullscreen"),
			volumeSlider = find("volumeslider").slider2(api.rtl),
			volumeApi = volumeSlider.data("api"),
			noToggle = root.is(".fixed-controls, .no-toggle");

		timelineApi.disableAnimation(root.hasClass('is-touch'));

		// aspect ratio
		function setRatio(val) {
			if ((root.css('width') === '0px' || root.css('height') === '0px') || val !== flowplayer.defaults.ratio) {
				if (!parseInt(origRatio, 10)) ratio.css("paddingTop", val * 100 + "%");
			}
			if (!support.inlineBlock) $("object", root).height(root.height());
		}

		function hover(flag) {
			root.toggleClass("is-mouseover", flag).toggleClass("is-mouseout", !flag);
		}

		// loading...
		if (!support.animation) waiting.html("<p>loading &hellip;</p>");

		setRatio(conf.ratio);

		// no fullscreen in IFRAME
		try {
			if (!conf.fullscreen) fullscreen.remove();

		} catch (e) {
			fullscreen.remove();
		}


		api.bind("ready", function() {

			var duration = api.video.duration;

			timelineApi.disable(api.disabled || !duration);

			conf.adaptiveRatio && setRatio(api.video.height / api.video.width);

			// initial time & volume
			durationEl.add(remaining).html(format(duration));

			// do we need additional space for showing hour
			((duration >= 3600) && root.addClass('is-long')) || root.removeClass('is-long');
			volumeApi.slide(api.volumeLevel);


		}).bind("unload", function() {
			if (!origRatio) ratio.css("paddingTop", "");

			// buffer
		}).bind("buffer", function() {
			var video = api.video,
				max = video.buffer / video.duration;

			if (!video.seekable && support.seekable) timelineApi.max(max);
			if (max < 1) buffer.css("width", (max * 100) + "%");
			else buffer.css({ width: '100%' });

		}).bind("speed", function(e, api, val) {
			speed.text(val + "x").addClass("fp-hilite");
			setTimeout(function() { speed.removeClass("fp-hilite") }, 1000);

		}).bind("buffered", function() {
			buffer.css({ width: '100%' });
			timelineApi.max(1);

			// progress
		}).bind("progress", function() {

			var time = api.video.time,
				duration = api.video.duration;

			if (!timelineApi.dragging) {
				timelineApi.slide(time / duration, api.seeking ? 0 : 250);
			}

			elapsed.html(format(time));
			remaining.html("-" + format(duration - time));

		}).bind("finish resume seek", function(e) {
			root.toggleClass("is-finished", e.type == "finish");

		}).bind("stop", function() {
			elapsed.html(format(0));
			timelineApi.slide(0, 100);

		}).bind("finish", function() {
			elapsed.html(format(api.video.duration));
			timelineApi.slide(1, 100);
			root.removeClass("is-seeking");

			// misc
		}).bind("beforeseek", function() {
			progress.stop();

		}).bind("volume", function() {
			volumeApi.slide(api.volumeLevel);


		}).bind("disable", function() {
			var flag = api.disabled;
			timelineApi.disable(flag);
			volumeApi.disable(flag);
			root.toggleClass("is-disabled", api.disabled);

		}).bind("mute", function(e, api, flag) {
			root.toggleClass("is-muted", flag);

		}).bind("error", function(e, api, error) {
			root.removeClass("is-loading").addClass("is-error");

			if (error) {
				error.message = conf.errors[error.code];
				api.error = true;

				var el = $(".fp-message", root);
				$("h2", el).text((api.engine || 'html5') + ": " + error.message);
				$("p", el).text(error.url || api.video.url || api.video.src || conf.errorUrls[error.code]);
				root.unbind("mouseenter click").removeClass("is-mouseover");
			}


			// hover
		}).bind("mouseenter mouseleave", function(e) {
			if (noToggle) return;

			var is_over = e.type == "mouseenter",
				lastMove;

			// is-mouseover/out
			hover(is_over);

			if (is_over) {

				root.bind("pause.x mousemove.x volume.x", function() {
					hover(true);
					lastMove = new Date;
				});

				hovertimer = setInterval(function() {
					if (new Date - lastMove > 5000) {
						hover(false)
						lastMove = new Date;
					}
				}, 100);

			} else {
				root.unbind(".x");
				clearInterval(hovertimer);
			}


			// allow dragging over the player edge
		}).bind("mouseleave", function() {

			if (timelineApi.dragging || volumeApi.dragging) {
				root.addClass("is-mouseover").removeClass("is-mouseout");
			}

			// click
		}).bind("click.player", function(e) {
			if ($(e.target).is(".fp-ui, .fp-engine") || e.flash) {
				e.preventDefault();
				return api.toggle();
			}
		}).bind('contextmenu', function(ev) {
			ev.preventDefault();
			var o = root.offset(),
				w = $(window),
				left = ev.clientX - o.left,
				t = ev.clientY - o.top + w.scrollTop();
			var menu = root.find('.fp-context-menu').css({
				left: left + 'px',
				top: t + 'px',
				display: 'block'
			}).on('click', function(ev) {
				ev.stopPropagation();
			});
			$('html').on('click.outsidemenu', function(ev) {
				menu.hide();
				$('html').off('click.outsidemenu');
			});
		}).bind('flashdisabled', function() {
			root.addClass('is-flash-disabled').one('ready', function() {
				root.removeClass('is-flash-disabled').find('.fp-flash-disabled').remove();
			}).append('<div class="fp-flash-disabled">Adobe Flash is disabled for this page, click player area to enable.</div>');
		});

		// poster -> background image
		if (conf.poster) root.css("backgroundImage", "url(" + conf.poster + ")");

		var bc = root.css("backgroundColor"),
			has_bg = root.css("backgroundImage") != "none" || bc && bc != "rgba(0, 0, 0, 0)" && bc != "transparent";

		// is-poster class
		if (has_bg && !conf.splash && !conf.autoplay) {

			api.bind("ready stop", function() {
				root.addClass("is-poster").one("progress", function() {
					root.removeClass("is-poster");
				});
			});

		}

		// default background color if not present
		if (!has_bg && api.forcedSplash) {
			root.css("backgroundColor", "#555");
		}

		$(".fp-toggle, .fp-play", root).click(api.toggle);

		/* controlbar elements */
		$.each(['mute', 'fullscreen', 'unload'], function(i, key) {
			find(key).click(function() {
				api[key]();
			});
		});

		timeline.bind("slide", function(e, val) {
			api.seeking = true;
			api.seek(val * api.video.duration);
		});

		volumeSlider.bind("slide", function(e, val) {
			api.volume(val);
		});

		// times
		find("time").click(function(e) {
			$(this).toggleClass("is-inverted");
		});

		hover(noToggle);

	});

	var focused,
		focusedRoot,
		IS_HELP = "is-help";

	// keyboard. single global listener
	$(document).bind("keydown.fp", function(e) {

		var el = focused,
			metaKeyPressed = e.ctrlKey || e.metaKey || e.altKey,
			key = e.which,
			conf = el && el.conf;

		if (!el || !conf.keyboard || el.disabled) return;

		// help dialog (shift key not truly required)
		if ($.inArray(key, [63, 187, 191]) != -1) {
			focusedRoot.toggleClass(IS_HELP);
			return false;
		}

		// close help / unload
		if (key == 27 && focusedRoot.hasClass(IS_HELP)) {
			focusedRoot.toggleClass(IS_HELP);
			return false;
		}

		if (!metaKeyPressed && el.ready) {

			e.preventDefault();

			// slow motion / fast forward
			if (e.shiftKey) {
				if (key == 39) el.speed(true);
				else if (key == 37) el.speed(false);
				return;
			}

			// 1, 2, 3, 4 ..
			if (key < 58 && key > 47) return el.seekTo(key - 48);

			switch (key) {
				case 38: case 75: el.volume(el.volumeLevel + 0.15); break;        // volume up
				case 40: case 74: el.volume(el.volumeLevel - 0.15); break;        // volume down
				case 39: case 76: el.seeking = true; el.seek(true); break;        // forward
				case 37: case 72: el.seeking = true; el.seek(false); break;       // backward
				case 190: el.seekTo(); break;                                     // to last seek position
				case 32: el.toggle(); break;                                      // spacebar
				case 70: conf.fullscreen && el.fullscreen(); break;               // toggle fullscreen
				case 77: el.mute(); break;                                        // mute
				case 81: el.unload(); break;                                      // unload/stop
			}

		}

	});

	flowplayer(function(api, root) {

		// no keyboard configured
		if (!api.conf.keyboard) return;

		// hover
		root.bind("mouseenter mouseleave", function(e) {
			focused = !api.disabled && e.type == 'mouseenter' ? api : 0;
			if (focused) focusedRoot = root;
		});

		// TODO: add to player-layout.html
		root.append('\
      <div class="fp-help">\
         <a class="fp-close"></a>\
         <div class="fp-help-section fp-help-basics">\
            <p><em>space</em>play / pause</p>\
            <p><em>q</em>unload | stop</p>\
            <p><em>f</em>fullscreen</p>\
            <p><em>shift</em> + <em>&#8592;</em><em>&#8594;</em>slower / faster <small>(latest Chrome and Safari)</small></p>\
         </div>\
         <div class="fp-help-section">\
            <p><em>&#8593;</em><em>&#8595;</em>volume</p>\
            <p><em>m</em>mute</p>\
         </div>\
         <div class="fp-help-section">\
            <p><em>&#8592;</em><em>&#8594;</em>seek</p>\
            <p><em>&nbsp;. </em>seek to previous\
            </p><p><em>1</em><em>2</em>&hellip;<em>6</em> seek to 10%, 20%, &hellip;60% </p>\
         </div>\
      </div>\
   ');

		if (api.conf.tooltip) {
			$(".fp-ui", root).attr("title", "Hit ? for help").on("mouseout.tip", function() {
				$(this).removeAttr("title").off("mouseout.tip");
			});
		}

		$(".fp-close", root).click(function() {
			root.toggleClass(IS_HELP);
		});

	});

	var VENDOR = $.browser.mozilla ? "moz": "webkit",
		FS_ENTER = "fullscreen",
		FS_EXIT = "fullscreen-exit",
		FULL_PLAYER,
		FS_SUPPORT = flowplayer.support.fullscreen,
		FS_NATIVE_SUPPORT = typeof document.exitFullscreen == 'function',
		ua = navigator.userAgent.toLowerCase(),
		IS_SAFARI = /(safari)[ \/]([\w.]+)/.exec(ua) && !/(chrome)[ \/]([\w.]+)/.exec(ua);


// esc button
	$(document).bind(FS_NATIVE_SUPPORT ? "fullscreenchange" : VENDOR + "fullscreenchange", function(e) {
		var el = $(document.webkitCurrentFullScreenElement || document.mozFullScreenElement || document.fullscreenElement || e.target);
		if (el.length && !FULL_PLAYER) {
			FULL_PLAYER = el.trigger(FS_ENTER, [el]);
		} else {
			FULL_PLAYER.trigger(FS_EXIT, [FULL_PLAYER]);
			FULL_PLAYER = null;
		}

	});


	flowplayer(function(player, root) {

		if (!player.conf.fullscreen) return;

		var win = $(window),
			fsResume = {index: 0, pos: 0, play: false},
			scrollTop;

		player.isFullscreen = false;

		player.fullscreen = function(flag) {

			if (player.disabled) return;

			if (flag === undefined) flag = !player.isFullscreen;

			if (flag) scrollTop = win.scrollTop();

			if ((VENDOR == "webkit" || IS_SAFARI) && player.engine == "flash") {
				// play current index on fullscreen toggle
				fsResume.index = player.video.index;
				if (player.conf.rtmp)
				// avoid restart
					$.extend(fsResume, {pos: player.video.time, play: player.playing});
			}

			if (FS_SUPPORT) {

				if (flag) {
					if (FS_NATIVE_SUPPORT) {
						root[0].requestFullscreen();
					} else {
						root[0][VENDOR + 'RequestFullScreen'](Element.ALLOW_KEYBOARD_INPUT);
						if (IS_SAFARI && !document.webkitCurrentFullScreenElement && !document.mozFullScreenElement) { // Element.ALLOW_KEYBOARD_INPUT not allowed
							root[0][VENDOR + 'RequestFullScreen']();
						}
					}

				} else {
					if (FS_NATIVE_SUPPORT) {
						document.exitFullscreen();
					} else {
						document[VENDOR + 'CancelFullScreen']();
					}
				}

			} else {
				player.trigger(flag ? FS_ENTER : FS_EXIT, [player]);
			}

			return player;
		};

		var lastClick;

		root.bind("mousedown.fs", function() {
			if (+new Date - lastClick < 150 && player.ready) player.fullscreen();
			lastClick = +new Date;
		});

		player.bind(FS_ENTER, function(e) {
			root.addClass("is-fullscreen");
			player.isFullscreen = true;

		}).bind(FS_EXIT, function(e) {
			var oldOpacity;
			if (!FS_SUPPORT && player.engine === "html5") {
				oldOpacity = root.css('opacity') || '';
				root.css('opacity', 0);
			}
			root.removeClass("is-fullscreen");
			if (!FS_SUPPORT && player.engine === "html5") setTimeout(function() { root.css('opacity', oldOpacity); });
			player.isFullscreen = false;
			win.scrollTop(scrollTop);

		}).bind("ready", function () {
			if (fsResume.index > 0) {
				player.play(fsResume.index);
				// above loads "different" clip, resume position below
				fsResume.index = 0;
			} else if (fsResume.pos && !isNaN(fsResume.pos)) {
				var fsreset = function () {
					if (!fsResume.play)
						player.pause();
					$.extend(fsResume, {pos: 0, play: false});
				};

				if (player.conf.live) {
					player.resume();
					fsreset();
				} else {
					player.resume().seek(fsResume.pos, fsreset);
				}
			}
		});

	});


	flowplayer(function(player, root) {

		var conf = $.extend({ active: 'is-active', advance: true, query: ".fp-playlist a" }, player.conf),
			klass = conf.active;

		// getters
		function els() {
			return $(conf.query, root);
		}

		function active() {
			return $(conf.query + "." + klass, root);
		}


		player.play = function(i) {
			if (i === undefined) return player.resume();
			if (typeof i === 'number' && !player.conf.playlist[i]) return player;
			else if (typeof i != 'number') player.load.apply(null, arguments);
			player.unbind('resume.fromfirst'); // Don't start from beginning if clip explicitely chosen
			player.video.index = i;
			player.load(typeof player.conf.playlist[i] === 'string' ?
					player.conf.playlist[i].toString() :
					$.map(player.conf.playlist[i], function(item) { return $.extend({}, item); })
			);
			return player;
		};

		player.next = function(e) {
			e && e.preventDefault();
			var current = player.video.index;
			if (current != -1) {
				current = current === player.conf.playlist.length - 1 ? 0 : current + 1;
				player.play(current);
			}
			return player;
		};

		player.prev = function(e) {
			e && e.preventDefault();
			var current = player.video.index;
			if (current != -1) {
				current = current === 0 ? player.conf.playlist.length - 1 : current - 1;
				player.play(current);
			}
			return player;
		};

		$('.fp-next', root).click(player.next);
		$('.fp-prev', root).click(player.prev);

		if (conf.advance) {
			root.unbind("finish.pl").bind("finish.pl", function(e, player) {

				// next clip is found or loop
				var next = player.video.index + 1;
				if (next < player.conf.playlist.length || conf.loop) {
					next = next === player.conf.playlist.length ? 0 : next;
					root.removeClass('is-finished');
					setTimeout(function() { // Let other finish callbacks fire first
						player.play(next);
					});

					// stop to last clip, play button starts from 1:st clip
				} else {
					root.addClass("is-playing"); // show play button

					// If we have multiple items in playlist, start from first
					if (player.conf.playlist.length > 1) player.one("resume.fromfirst", function() {
						player.play(0);
						return false;
					});
				}
			});
		}

		var playlistInitialized = false;
		if (player.conf.playlist.length) { // playlist configured by javascript, generate playlist
			playlistInitialized = true;
			var plEl = root.find('.fp-playlist');
			if (!plEl.length) {
				plEl = $('<div class="fp-playlist"></div>');
				var cntrls = $('.fp-next,.fp-prev', root);
				if (!cntrls.length) $('video', root).after(plEl);
				else cntrls.eq(0).before(plEl);
			}
			plEl.empty();
			$.each(player.conf.playlist, function(i, item) {
				var href;
				if (typeof item === 'string') {
					href = item;
				} else {
					for (var key in item[0]) {
						if (item[0].hasOwnProperty(key)) {
							href = item[0][key];
							break;
						}
					}
				}
				plEl.append($('<a />').attr({
					href: href,
					'data-index': i
				}));
			});
		}

		if (els().length) {
			if (!playlistInitialized) {
				player.conf.playlist = [];
				els().each(function() {
					var src = $(this).attr('href');
					$(this).attr('data-index', player.conf.playlist.length);
					player.conf.playlist.push(src);
				});
			}

			/* click -> play */
			root.on("click", conf.query, function(e) {
				e.preventDefault();
				var el = $(e.target).closest(conf.query);
				var toPlay = Number(el.attr('data-index'));
				if (toPlay != -1) {
					player.play(toPlay);
				}
			});

			// playlist wide cuepoint support
			var has_cuepoints = els().filter("[data-cuepoints]").length;

			// highlight
			player.bind("load", function(e, api, video) {
				var prev = active().removeClass(klass),
					prevIndex = prev.attr('data-index'),
					index = video.index = player.video.index || 0,
					el = $('a[data-index="' + index + '"]', root).addClass(klass),
					is_last = index == player.conf.playlist.length - 1;
				// index
				root.removeClass("video" + prevIndex).addClass("video" + index).toggleClass("last-video", is_last);

				// video properties
				video.index = api.video.index = index;
				video.is_last = api.video.is_last = is_last;

				// cuepoints
				if (has_cuepoints) player.cuepoints = el.data("cuepoints");


				// without namespace callback called only once. unknown rason.
			}).bind("unload.pl", function() {
				active().toggleClass(klass);

			});

		}

		if (player.conf.playlist.length) {
			// disable single clip looping
			player.conf.loop = false;
		}


	});

	var CUE_RE = / ?cue\d+ ?/;

	flowplayer(function(player, root) {

		var lastTime = 0;

		player.cuepoints = player.conf.cuepoints || [];

		function setClass(index) {
			root[0].className = root[0].className.replace(CUE_RE, " ");
			if (index >= 0) root.addClass("cue" + index);
		}

		player.bind("progress", function(e, api, time) {

			// avoid throwing multiple times
			if (lastTime && time - lastTime < 0.015) return lastTime = time;
			lastTime = time;

			var cues = player.cuepoints || [];

			for (var i = 0, cue; i < cues.length; i++) {

				cue = cues[i];
				if (!isNaN(cue)) cue = { time: cue };
				if (cue.time < 0) cue.time = player.video.duration + cue.time;
				cue.index = i;

				// progress_interval / 2 = 0.125
				if (Math.abs(cue.time - time) < 0.125 * player.currentSpeed) {
					setClass(i);
					root.trigger("cuepoint", [player, cue]);
				}

			}

			// no CSS class name
		}).bind("unload seek", setClass);

		if (player.conf.generate_cuepoints) {

			player.bind("load", function() {

				// clean up cuepoint elements of previous playlist items
				$(".fp-cuepoint", root).remove();

			}).bind("ready", function() {

				var cues = player.cuepoints || [],
					duration = player.video.duration,
					timeline = $(".fp-timeline", root).css("overflow", "visible");

				$.each(cues, function(i, cue) {

					var time = cue.time || cue;
					if (time < 0) time = duration + cue;

					var el = $("<a/>").addClass("fp-cuepoint fp-cuepoint" + i)
						.css("left", (time / duration * 100) + "%");

					el.appendTo(timeline).mousedown(function() {
						player.seek(time);

						// preventDefault() doesn't work
						return false;
					});

				});

			});

		}

	});
	flowplayer(function(player, root, engine) {

		var track = $("track", root),
			conf = player.conf;

		if (flowplayer.support.subtitles) {

			player.subtitles = track.length && track[0].track;

			// use native when supported
			if (conf.nativesubtitles && conf.engine == 'html5') return;
		}

		// avoid duplicate loads
		track.remove();

		var TIMECODE_RE = /^(([0-9]{2}:)?[0-9]{2}:[0-9]{2}[,.]{1}[0-9]{3}) --\> (([0-9]{2}:)?[0-9]{2}:[0-9]{2}[,.]{1}[0-9]{3})(.*)/;

		function seconds(timecode) {
			var els = timecode.split(':');
			if (els.length == 2) els.unshift(0);
			return els[0] * 60 * 60 + els[1] * 60 + parseFloat(els[2].replace(',','.'));
		}

		player.subtitles = [];

		var url = track.attr("src");

		if (!url) return;
		setTimeout(function() {
			$.get(url, function(txt) {

				for (var i = 0, lines = txt.split("\n"), len = lines.length, entry = {}, title, timecode, text, cue; i < len; i++) {

					timecode = TIMECODE_RE.exec(lines[i]);

					if (timecode) {

						// title
						title = lines[i - 1];

						// text
						text = "<p>" + lines[++i] + "</p><br/>";
						while ($.trim(lines[++i]) && i < lines.length) text +=  "<p>" + lines[i] + "</p><br/>";

						// entry
						entry = {
							title: title,
							startTime: seconds(timecode[1]),
							endTime: seconds(timecode[2] || timecode[3]),
							text: text
						};

						cue = { time: entry.startTime, subtitle: entry };

						player.subtitles.push(entry);
						player.cuepoints.push(cue);
						player.cuepoints.push({ time: entry.endTime, subtitleEnd: title });

						// initial cuepoint
						if (entry.startTime === 0) {
							player.trigger("cuepoint", cue);
						}

					}

				}

			}).fail(function() {
				player.trigger("error", {code: 8, url: url });
				return false;
			});
		});
		var wrap = $("<div class='fp-subtitle'/>").appendTo(root),
			currentPoint;

		player.bind("cuepoint", function(e, api, cue) {

			if (cue.subtitle) {
				currentPoint = cue.index;
				wrap.html(cue.subtitle.text).addClass("fp-active");

			} else if (cue.subtitleEnd) {
				wrap.removeClass("fp-active");
				currentPoint = cue.index;
			}

		}).bind("seek", function(e, api, time) {
			// Clear future subtitles if seeking backwards
			if (currentPoint && player.cuepoints[currentPoint] && player.cuepoints[currentPoint].time > time) {
				wrap.removeClass('fp-active');
				currentPoint = null;
			}
			$.each(player.cuepoints || [], function(i, cue) {
				var entry = cue.subtitle;
				//Trigger cuepoint if start time before seek position and end time nonexistent or in the future
				if (entry && currentPoint != cue.index) {
					if (time >= cue.time && (!entry.endTime || time <= entry.endTime)) player.trigger("cuepoint", cue);
				} // Also handle cuepoints that act as the removal trigger
				else if (cue.subtitleEnd && time >= cue.time && cue.index == currentPoint + 1) player.trigger("cuepoint", cue);
			});

		});

	});



	flowplayer(function(player, root) {

		var id = player.conf.analytics, time = 0, last = 0;

		if (id) {

			// load Analytics script if needed
			if (typeof _gat == 'undefined') $.getScript("//google-analytics.com/ga.js");

			function track(e) {

				if (time && typeof _gat != 'undefined') {
					var tracker = _gat._getTracker(id),
						video = player.video;

					tracker._setAllowLinker(true);

					// http://code.google.com/apis/analytics/docs/tracking/eventTrackerGuide.html
					tracker._trackEvent(
						"Video / Seconds played",
							player.engine + "/" + video.type,
							root.attr("title") || video.src.split("/").slice(-1)[0].replace(TYPE_RE, ''),
						Math.round(time / 1000)
					);
					time = 0;
				}

			}

			player.bind("load unload", track).bind("progress", function() {

				if (!player.seeking) {
					time += last ? (+new Date - last) : 0;
					last = +new Date;
				}

			}).bind("pause", function() {
				last = 0;
			});

			$(window).unload(track);

		}

	});var isIeMobile = /IEMobile/.test(UA);
	if (flowplayer.support.touch || isIeMobile) {

		flowplayer(function(player, root) {
			var isAndroid = /Android/.test(UA) && !/Firefox/.test(UA) && !/Opera/.test(UA),
				isSilk = /Silk/.test(UA),
				androidVer = isAndroid ? parseFloat(/Android\ (\d\.\d)/.exec(UA)[1], 10) : 0;

			// custom load for android
			if (isAndroid) {
				player.conf.videoTypePreference = "mp4"; // Android has problems with webm aspect ratio
				if (!/Chrome/.test(UA) && androidVer < 4) {
					var originalLoad = player.load;
					player.load = function(video, callback) {
						var ret = originalLoad.apply(player, arguments);
						player.trigger('ready', [player, player.video]);
						return ret;
					};
				}
			}

			// hide volume
			if (!flowplayer.support.volume) {
				root.addClass("no-volume no-mute");
			}
			root.addClass("is-touch");
			root.find('.fp-timeline').data('api').disableAnimation();

			// fake mouseover effect with click
			var hasMoved = false;
			root.bind('touchmove', function() {
				hasMoved = true;
			}).bind("touchend click", function(e) {
				if (hasMoved) { //not intentional, most likely scrolling
					hasMoved = false;
					return;
				}

				if (player.playing && !root.hasClass("is-mouseover")) {
					root.addClass("is-mouseover").removeClass("is-mouseout");
					return false;
				}

				if (player.paused && root.hasClass("is-mouseout") && !player.splash) {
					player.toggle();
				}

				if (player.paused && isIeMobile) { // IE on WP7 need an additional api.play() call
					$('video.fp-engine', root)[0].play();
				}

			});

			// native fullscreen
			if (player.conf.native_fullscreen && typeof $('<video />')[0].webkitEnterFullScreen === 'function') {
				player.fullscreen = function() {
					var video = $('video.fp-engine', root);
					video[0].webkitEnterFullScreen();
					video.one('webkitendfullscreen', function() {
						video.prop('controls', true).prop('controls', false);
					});
				};
			}


			// Android browser gives video.duration == 1 until second 'timeupdate' event
			(isAndroid || isSilk) && player.bind("ready", function() {

				var video = $('video.fp-engine', root);
				video.one('canplay', function() {
					video[0].play();
				});
				video[0].play();

				player.bind("progress.dur", function() {

					var duration = video[0].duration;

					if (duration !== 1) {
						player.video.duration = duration;
						$(".fp-duration", root).html(format(duration));
						player.unbind("progress.dur");
					}
				});
			});


		});

	}

	flowplayer(function(player, root) {

		// no embedding
		if (player.conf.embed === false) return;

		var conf = player.conf,
			ui = $(".fp-ui", root),
			trigger = $("<a/>", { "class": "fp-embed", title: 'Copy to your site'}).appendTo(ui),
			target = $("<div/>", { 'class': 'fp-embed-code'})
				.append("<label>Paste this HTML code on your site to embed.</label><textarea/>").appendTo(ui),
			area = $("textarea", target);

		player.embedCode = function() {

			var video = player.video,
				width = video.width || root.width(),
				height = video.height || root.height(),
				el = $("<div/>", { 'class': 'flowplayer', css: { width: width, height: height }}),
				tag = $("<video/>").appendTo(el);

			// configuration
			$.each(['origin', 'analytics', 'key', 'rtmp'], function(i, key) {
				if (conf[key]) el.attr("data-" + key, conf[key]);
			});

			//logo
			if (conf.logo) {
				el.attr('data-logo', $('<img />').attr('src', conf.logo)[0].src);
			}

			// sources
			$.each(video.sources, function(i, src) {
				var path = src.src;
				if (!/^https?:/.test(src.src) && src.type !== 'flash' || !conf.rtmp) {
					path = $("<img/>").attr("src", src.src)[0].src;
				}
				tag.append($("<source/>", { type: "video/" + src.type, src: path }));
			});

			var scriptAttrs = { src: "//embed.flowplayer.org/5.4.6/embed.min.js" };
			if ($.isPlainObject(conf.embed)) {
				scriptAttrs['data-swf'] = conf.embed.swf;
				scriptAttrs['data-library'] = conf.embed.library;
				scriptAttrs['src'] = conf.embed.script || scriptAttrs['src'];
				if (conf.embed.skin) { scriptAttrs['data-skin'] = conf.embed.skin; }
			}

			var code = $("<foo/>", scriptAttrs).append(el);
			return $("<p/>").append(code).html().replace(/<(\/?)foo/g, "<$1script");
		};

		root.fptip(".fp-embed", "is-embedding");

		area.click(function() {
			this.select();
		});

		trigger.click(function() {
			area.text(player.embedCode());
			area[0].focus();
			area[0].select();
		});

	});


	$.fn.fptip = function(trigger, active) {

		return this.each(function() {

			var root = $(this);

			function close() {
				root.removeClass(active);
				$(document).unbind(".st");
			}

			$(trigger || "a", this).click(function(e) {

				e.preventDefault();

				root.toggleClass(active);

				if (root.hasClass(active)) {

					$(document).bind("keydown.st", function(e) {
						if (e.which == 27) close();

						// click:close
					}).bind("click.st", function(e) {
						if (!$(e.target).parents("." + active).length) close();
					});
				}

			});

		});

	};

}(jQuery);
flowplayer(function(e,t){function l(e){var t=n("<a/>")[0];return t.href=e,t.hostname}function c(e){var t="ab.ca,ac.ac,ac.at,ac.be,ac.cn,ac.il,ac.in,ac.jp,ac.kr,ac.th,ac.uk,adm.br,adv.br,ah.cn,am.br,arq.br,art.br,arts.ro,asn.au,asso.fr,asso.mc,bc.ca,bio.br,biz.pl,biz.tr,bj.cn,br.com,cn.com,cng.br,cnt.br,co.ac,co.at,co.gl,co.id,co.il,co.in,co.jp,co.kr,co.mg,co.ms,co.nz,co.th,co.uk,co.ve,co.vi,co.za,com.ag,com.ai,com.ar,com.au,com.br,com.cn,com.cy,com.de,com.do,com.ec,com.es,com.fj,com.fr,com.gl,com.gt,com.hk,com.hr,com.hu,com.kg,com.ki,com.lc,com.mg,com.mm,com.ms,com.mt,com.mu,com.mx,com.my,com.nf,com.ng,com.ni,com.pa,com.ph,com.pl,com.pt,com.qa,com.ro,com.ru,com.sb,com.sc,com.sg,com.sv,com.tr,com.tw,com.ua,com.uy,com.ve,com.vn,cq.cn,de.com,de.org,ecn.br,edu.au,edu.cn,edu.hk,edu.mm,edu.my,edu.pt,edu.qa,edu.tr,eng.br,ernet.in,esp.br,etc.br,eti.br,eu.com,eu.int,eu.lv,firm.in,firm.ro,fm.br,fot.br,fst.br,g12.br,gb.com,gb.net,gd.cn,gen.in,go.jp,go.kr,go.th,gov.au,gov.az,gov.br,gov.cn,gov.il,gov.in,gov.mm,gov.my,gov.qa,gov.sg,gov.tr,gov.tw,gs.cn,gv.ac,gv.at,gx.cn,gz.cn,he.cn,hi.cn,hk.cn,hl.cn,hu.com,id.au,idv.tw,in.ua,ind.br,ind.in,inf.br,info.pl,info.ro,info.tr,info.ve,iwi.nz,jl.cn,jor.br,js.cn,k12.il,k12.tr,kr.com,lel.br,ln.cn,ltd.uk,maori.nz,mb.ca,me.uk,med.br,mi.th,mil.br,mo.cn,muni.il,nb.ca,ne.jp,ne.kr,net.ag,net.ai,net.au,net.br,net.cn,net.do,net.gl,net.hk,net.il,net.in,net.kg,net.ki,net.lc,net.mg,net.mm,net.mu,net.ni,net.nz,net.pl,net.ru,net.sb,net.sc,net.sg,net.th,net.tr,net.tw,net.uk,net.ve,nf.ca,nm.cn,nm.kr,no.com,nom.br,nom.ni,nom.ro,ns.ca,nt.ca,nt.ro,ntr.br,nx.cn,odo.br,off.ai,on.ca,or.ac,or.at,or.jp,or.kr,or.th,org.ag,org.ai,org.au,org.br,org.cn,org.do,org.es,org.gl,org.hk,org.in,org.kg,org.ki,org.lc,org.mg,org.mm,org.ms,org.nf,org.ni,org.nz,org.pl,org.ro,org.ru,org.sb,org.sc,org.sg,org.tr,org.tw,org.uk,org.ve,pe.ca,plc.uk,ppg.br,presse.fr,pro.br,psc.br,psi.br,qc.ca,qc.com,qh.cn,rec.br,rec.ro,res.in,sa.com,sc.cn,sch.ul,se.com,se.net,sh.cn,sk.ca,slg.br,sn.cn,store.ro,tj.cn,tm.fr,tm.mc,tm.ro,tmp.br,tur.br,tv.br,tv.tr,tw.cn,uk.com,uk.net,us.com,uy.com,vet.br,waw.pl,web.ve,www.ro,xj.cn,xz.cn,yk.ca,yn.cn,zj.cn,zlg.br".split(",");e=e.toLowerCase();var r=e.split("."),i=r.length;if(i<2)return e;var s=r.slice(-2).join(".");return i>=3&&n.inArray(s,t)>=0?r.slice(-3).join("."):s}function h(e,t){t!="localhost"&&!parseInt(t.split(".").slice(-1))&&(t=c(t));var n=0;for(var r=t.length-1;r>=0;r--)n+=t.charCodeAt(r)*17247184777;n=(""+n).substring(0,7);for(r=0;r<e.length;r++)if(n===e[r].substring(1,8))return 1}var n=jQuery,r=e.conf,i=r.swf.indexOf("flowplayer.org")&&r.e&&t.data("origin"),s=i?l(i):location.hostname,o=r.key;location.protocol=="file:"&&(s="localhost"),e.load.ed=1,r.hostname=s,r.origin=i||location.href,i&&t.addClass("is-embedded"),typeof o=="string"&&(o=o.split(/,\s*/));if(o&&typeof h=="function"&&h(o,s))r.logo&&t.append(n("<a>",{"class":"fp-logo",href:i}).append(n("<img/>",{src:r.logo})));else{var u=n("<a/>").attr("href","http://flowplayer.org").appendTo(t),a=n(".fp-controls",t),f=n('<div class="fp-context-menu"><ul><li class="copyright">&copy; 2013</li><li><a href="http://flowplayer.org">About Flowplayer</a></li><li><a href="http://flowplayer.org/license">GPL based license</a></li></ul></div>').appendTo(t);e.bind("pause resume finish unload",function(e,r){var i=-1;r.video.src&&n.each([["org","flowplayer","drive"],["org","flowplayer","my"]],function(e,t){return i=r.video.src.indexOf("://"+t.reverse().join(".")),i===-1}),/pause|resume/.test(e.type)&&r.engine!="flash"&&i!=4&&i!=5?(u.show().css({position:"absolute",left:16,bottom:36,zIndex:99999,width:100,height:20,backgroundImage:"url("+[".png","logo","/",".net",".cloudfront","d32wqyuo10o653","//"].reverse().join("")+")"}),r.load.ed=u.is(":visible")&&n.contains(t[0],f[0]),r.load.ed||r.pause()):u.hide()})}});}
return prezi_video;

})

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_video",["require","prezi_bacon"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_video.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi_bacon"));}else{this["prezi_video"]=__factory(this["prezi_bacon"]);}}).call(this);
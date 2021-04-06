;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-25-g6015dbc";},getModuleName:function(){return "prezi_photo_editor";},getModuleVersion:function(){return "release-2021w06-base-26-gaeb382e";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi_cet_model_editor":dependencies[0],"prezi_i18n":dependencies[1],"prezi_logger":dependencies[2],"prezi_plugin_api":dependencies[3],"prezi_utils":dependencies[4]}};})());};})(arguments);var moduleImpl=(function(){return module(function(Spaghetti) {
var prezi_photo_editor=null;
var prezi_cet_model_editor=Spaghetti["dependencies"]["prezi_cet_model_editor"];
var prezi_i18n=Spaghetti["dependencies"]["prezi_i18n"];
var prezi_logger=Spaghetti["dependencies"]["prezi_logger"];
var prezi_plugin_api=Spaghetti["dependencies"]["prezi_plugin_api"];
var prezi_utils=Spaghetti["dependencies"]["prezi_utils"];
var module$node_modules$prezi_cet_model_editor$default = prezi_cet_model_editor;
var module$node_modules$prezi_i18n$default = prezi_i18n;
var module$node_modules$prezi_logger$default = prezi_logger;
var module$node_modules$prezi_plugin_api$default = prezi_plugin_api;
var module$node_modules$prezi_utils$default = prezi_utils;
var module$LanguageObjects$default = {};
Object.defineProperty(module$LanguageObjects$default, "__esModule", {value:true});
const i18nLanguageObject$$module$LanguageObjects = {"pesdk":{"common":{"title":{"error":module$node_modules$prezi_i18n$default.I18n.ts("Error")}, "text":{"loading":module$node_modules$prezi_i18n$default.I18n.ts("Loading...")}, "button":{"cancel":module$node_modules$prezi_i18n$default.I18n.ts("Cancel")}}, "editor":{"button":{"export":module$node_modules$prezi_i18n$default.I18n.ts("Export"), "newImageChangesLostWarningYes":module$node_modules$prezi_i18n$default.I18n.ts("Yes"), "newImageChangesLostWarningNo":module$node_modules$prezi_i18n$default.I18n.ts("No"), 
"discardChangesWarningKeep":module$node_modules$prezi_i18n$default.I18n.ts("Keep changes"), "discardChangesWarningDiscard":module$node_modules$prezi_i18n$default.I18n.ts("Discard changes"), "close":module$node_modules$prezi_i18n$default.I18n.ts("Update")}, "title":{"newImageChangesLostWarning":module$node_modules$prezi_i18n$default.I18n.ts("New Image"), "imageResizedWarning_maxMegaPixels":module$node_modules$prezi_i18n$default.I18n.ts("Image resized"), "imageResizedWarning_maxDimensions":module$node_modules$prezi_i18n$default.I18n.ts("Image resized"), 
"fontLoadingError":module$node_modules$prezi_i18n$default.I18n.ts("Failed to load font"), "discardChangesWarning":module$node_modules$prezi_i18n$default.I18n.ts("Discard changes?")}, "text":{"newImageChangesLostWarning":module$node_modules$prezi_i18n$default.I18n.ts("Any unsaved changes will be lost. Continue?"), "imageResizedWarning_maxMegaPixels":module$node_modules$prezi_i18n$default.I18n.ts("Your image exceeds the maximum size of ${maxMegaPixels}megapixels and has therefore been resized to ${width}x${height} pixels."), 
"imageResizedWarning_maxDimensions":module$node_modules$prezi_i18n$default.I18n.ts("Due to hardware limitations your image has been resized to ${width}x${height} pixels."), "renderingError":module$node_modules$prezi_i18n$default.I18n.ts("An error has occurred while rendering the image."), "exporting":module$node_modules$prezi_i18n$default.I18n.ts("Exporting..."), "resizing":module$node_modules$prezi_i18n$default.I18n.ts("Resizing..."), "loadingFonts":module$node_modules$prezi_i18n$default.I18n.ts("Loading fonts..."), 
"fontLoadingError":module$node_modules$prezi_i18n$default.I18n.ts("The following fonts could not be loaded: ${fonts}."), "webcamUnavailableError":module$node_modules$prezi_i18n$default.I18n.ts("Unable to display webcam image (Error: ${error})"), "invalidFileTypeError":module$node_modules$prezi_i18n$default.I18n.ts("The file type ${fileType} is not supported."), "imageLoadingError":module$node_modules$prezi_i18n$default.I18n.ts("Failed to load image. This can have multiple reasons, e.g. the file is corrupted or the file type is not supported."), 
"discardChangesWarning":module$node_modules$prezi_i18n$default.I18n.ts("You have unsaved changes. Are you sure you want to discard the changes?")}}, "library":{"title":{"name":module$node_modules$prezi_i18n$default.I18n.ts("Library")}, "button":{"fileDropZone":module$node_modules$prezi_i18n$default.I18n.ts("Drag image here or click to browse for one."), "fileDropZoneHovered":module$node_modules$prezi_i18n$default.I18n.ts("Drop to upload.")}, "placeholder":{"search":module$node_modules$prezi_i18n$default.I18n.ts("Search Library")}, 
"text":{"noResults":module$node_modules$prezi_i18n$default.I18n.ts("No results")}}, "transform":{"title":{"name":module$node_modules$prezi_i18n$default.I18n.ts("Transform")}, "button":{"reset":module$node_modules$prezi_i18n$default.I18n.ts("Reset Default")}, "asset":{"imgly_transforms_common":{"name":module$node_modules$prezi_i18n$default.I18n.ts("Common Crops"), "asset":{"imgly_transform_common_custom":module$node_modules$prezi_i18n$default.I18n.ts("Custom"), "imgly_transform_common_square":module$node_modules$prezi_i18n$default.I18n.ts("Square"), 
"imgly_transform_common_4-3":module$node_modules$prezi_i18n$default.I18n.ts("4:3"), "imgly_transform_common_16-9":module$node_modules$prezi_i18n$default.I18n.ts("16:9")}}, "imgly_transforms_facebook":{"name":module$node_modules$prezi_i18n$default.I18n.ts("Facebook"), "asset":{"imgly_transform_facebook_ad":module$node_modules$prezi_i18n$default.I18n.ts("Ad"), "imgly_transform_facebook_post":module$node_modules$prezi_i18n$default.I18n.ts("Post"), "imgly_transform_facebook_cover":module$node_modules$prezi_i18n$default.I18n.ts("Cover"), 
"imgly_transform_facebook_profile":module$node_modules$prezi_i18n$default.I18n.ts("Profile Pic")}}}, "placeholder":{"width":module$node_modules$prezi_i18n$default.I18n.ts("w"), "height":module$node_modules$prezi_i18n$default.I18n.ts("h")}}, "filter":{"asset":{"identity":module$node_modules$prezi_i18n$default.I18n.ts("None"), "imgly_lut_celsius":module$node_modules$prezi_i18n$default.I18n.ts("Celsius"), "imgly_lut_chest":module$node_modules$prezi_i18n$default.I18n.ts("Chest"), "imgly_lut_fixie":module$node_modules$prezi_i18n$default.I18n.ts("Fixie"), 
"imgly_lut_fridge":module$node_modules$prezi_i18n$default.I18n.ts("Fridge"), "imgly_lut_front":module$node_modules$prezi_i18n$default.I18n.ts("Front"), "imgly_lut_k2":module$node_modules$prezi_i18n$default.I18n.ts("K2"), "imgly_lut_mellow":module$node_modules$prezi_i18n$default.I18n.ts("Mellow"), "imgly_lut_sin":module$node_modules$prezi_i18n$default.I18n.ts("Sin"), "imgly_lut_texas":module$node_modules$prezi_i18n$default.I18n.ts("Texas"), "imgly_lut_ad1920":module$node_modules$prezi_i18n$default.I18n.ts("1920 A.D."), 
"imgly_lut_ancient":module$node_modules$prezi_i18n$default.I18n.ts("Ancient"), "imgly_lut_bleached":module$node_modules$prezi_i18n$default.I18n.ts("Bleached"), "imgly_lut_bleachedblue":module$node_modules$prezi_i18n$default.I18n.ts("Bleached Blue"), "imgly_lut_blues":module$node_modules$prezi_i18n$default.I18n.ts("Blues"), "imgly_lut_blueshadows":module$node_modules$prezi_i18n$default.I18n.ts("Blue Shadows"), "imgly_lut_breeze":module$node_modules$prezi_i18n$default.I18n.ts("Breeze"), "imgly_lut_bw":module$node_modules$prezi_i18n$default.I18n.ts("B & W"), 
"imgly_lut_classic":module$node_modules$prezi_i18n$default.I18n.ts("Classic"), "imgly_lut_colorful":module$node_modules$prezi_i18n$default.I18n.ts("Colorful"), "imgly_lut_cool":module$node_modules$prezi_i18n$default.I18n.ts("Cool"), "imgly_lut_cottoncandy":module$node_modules$prezi_i18n$default.I18n.ts("Cotton Candy"), "imgly_lut_creamy":module$node_modules$prezi_i18n$default.I18n.ts("Creamy"), "imgly_lut_eighties":module$node_modules$prezi_i18n$default.I18n.ts("Eighties"), "imgly_lut_elder":module$node_modules$prezi_i18n$default.I18n.ts("Elder"), 
"imgly_lut_evening":module$node_modules$prezi_i18n$default.I18n.ts("Evening"), "imgly_lut_fall":module$node_modules$prezi_i18n$default.I18n.ts("Fall"), "imgly_lut_food":module$node_modules$prezi_i18n$default.I18n.ts("Food"), "imgly_lut_glam":module$node_modules$prezi_i18n$default.I18n.ts("Glam"), "imgly_lut_gobblin":module$node_modules$prezi_i18n$default.I18n.ts("Gobblin"), "imgly_lut_highcarb":module$node_modules$prezi_i18n$default.I18n.ts("High Carb"), "imgly_lut_highcontrast":module$node_modules$prezi_i18n$default.I18n.ts("High Contrast"), 
"imgly_lut_k1":module$node_modules$prezi_i18n$default.I18n.ts("K1"), "imgly_lut_k6":module$node_modules$prezi_i18n$default.I18n.ts("K6"), "imgly_lut_kdynamic":module$node_modules$prezi_i18n$default.I18n.ts("KDynamic"), "imgly_lut_keen":module$node_modules$prezi_i18n$default.I18n.ts("Keen"), "imgly_lut_lenin":module$node_modules$prezi_i18n$default.I18n.ts("Lenin"), "imgly_lut_litho":module$node_modules$prezi_i18n$default.I18n.ts("Litho"), "imgly_lut_lomo100":module$node_modules$prezi_i18n$default.I18n.ts("Lomo 100"), 
"imgly_lut_lucid":module$node_modules$prezi_i18n$default.I18n.ts("Lucid"), "imgly_lut_neat":module$node_modules$prezi_i18n$default.I18n.ts("Neat"), "imgly_lut_nogreen":module$node_modules$prezi_i18n$default.I18n.ts("No Green"), "imgly_lut_orchid":module$node_modules$prezi_i18n$default.I18n.ts("Orchid"), "imgly_lut_pale":module$node_modules$prezi_i18n$default.I18n.ts("Pale"), "imgly_lut_pitched":module$node_modules$prezi_i18n$default.I18n.ts("Pitched"), "imgly_lut_plate":module$node_modules$prezi_i18n$default.I18n.ts("Plate"), 
"imgly_lut_pola669":module$node_modules$prezi_i18n$default.I18n.ts("Pola 669"), "imgly_lut_polasx":module$node_modules$prezi_i18n$default.I18n.ts("Pola SX"), "imgly_lut_pro400":module$node_modules$prezi_i18n$default.I18n.ts("Pro 400"), "imgly_lut_quozi":module$node_modules$prezi_i18n$default.I18n.ts("Quozi"), "imgly_lut_sepiahigh":module$node_modules$prezi_i18n$default.I18n.ts("Sepia High"), "imgly_lut_settled":module$node_modules$prezi_i18n$default.I18n.ts("Settled"), "imgly_lut_seventies":module$node_modules$prezi_i18n$default.I18n.ts("Seventies"), 
"imgly_lut_soft":module$node_modules$prezi_i18n$default.I18n.ts("Soft"), "imgly_lut_steel":module$node_modules$prezi_i18n$default.I18n.ts("Steel"), "imgly_lut_summer":module$node_modules$prezi_i18n$default.I18n.ts("Summer"), "imgly_lut_sunset":module$node_modules$prezi_i18n$default.I18n.ts("Sunset"), "imgly_lut_tender":module$node_modules$prezi_i18n$default.I18n.ts("Tender"), "imgly_lut_twilight":module$node_modules$prezi_i18n$default.I18n.ts("Twilight"), "imgly_lut_winter":module$node_modules$prezi_i18n$default.I18n.ts("Winter"), 
"imgly_lut_x400":module$node_modules$prezi_i18n$default.I18n.ts("X400")}, "title":{"name":module$node_modules$prezi_i18n$default.I18n.ts("Filters")}}, "adjustments":{"button":{"reset":module$node_modules$prezi_i18n$default.I18n.ts("Reset Default")}, "title":{"name":module$node_modules$prezi_i18n$default.I18n.ts("Adjust"), "basics":module$node_modules$prezi_i18n$default.I18n.ts("Basics"), "refinements":module$node_modules$prezi_i18n$default.I18n.ts("Refinements")}, "text":{"brightness":module$node_modules$prezi_i18n$default.I18n.ts("Brightness"), 
"saturation":module$node_modules$prezi_i18n$default.I18n.ts("Saturation"), "contrast":module$node_modules$prezi_i18n$default.I18n.ts("Contrast"), "gamma":module$node_modules$prezi_i18n$default.I18n.ts("Gamma"), "clarity":module$node_modules$prezi_i18n$default.I18n.ts("Clarity"), "exposure":module$node_modules$prezi_i18n$default.I18n.ts("Exposure"), "shadows":module$node_modules$prezi_i18n$default.I18n.ts("Shadows"), "highlights":module$node_modules$prezi_i18n$default.I18n.ts("Highlights"), "whites":module$node_modules$prezi_i18n$default.I18n.ts("Whites"), 
"blacks":module$node_modules$prezi_i18n$default.I18n.ts("Blacks"), "temperature":module$node_modules$prezi_i18n$default.I18n.ts("Temperature")}}, "focus":{"title":{"name":module$node_modules$prezi_i18n$default.I18n.ts("Focus")}, "button":{"none":module$node_modules$prezi_i18n$default.I18n.ts("None"), "radial":module$node_modules$prezi_i18n$default.I18n.ts("Radial"), "mirrored":module$node_modules$prezi_i18n$default.I18n.ts("Mirrored"), "linear":module$node_modules$prezi_i18n$default.I18n.ts("Linear"), 
"gaussian":module$node_modules$prezi_i18n$default.I18n.ts("Gaussian")}}, "brush":{"title":{"name":module$node_modules$prezi_i18n$default.I18n.ts("Brush"), "width":module$node_modules$prezi_i18n$default.I18n.ts("Width"), "hardness":module$node_modules$prezi_i18n$default.I18n.ts("Hardness"), "settings":module$node_modules$prezi_i18n$default.I18n.ts("Brush Settings")}}, "frame":{"title":{"name":module$node_modules$prezi_i18n$default.I18n.ts("Frames"), "opacity":module$node_modules$prezi_i18n$default.I18n.ts("Opacity"), 
"width":module$node_modules$prezi_i18n$default.I18n.ts("Width")}, "button":{"fill":module$node_modules$prezi_i18n$default.I18n.ts("Fill"), "replace":module$node_modules$prezi_i18n$default.I18n.ts("Replace"), "none":module$node_modules$prezi_i18n$default.I18n.ts("None")}, "asset":{"imgly_frame_dia":module$node_modules$prezi_i18n$default.I18n.ts("Dia"), "imgly_frame_art_decor":module$node_modules$prezi_i18n$default.I18n.ts("Art Decor"), "imgly_frame_black_passepartout":module$node_modules$prezi_i18n$default.I18n.ts("Black Passepartout"), 
"imgly_frame_lowpoly_shadow":module$node_modules$prezi_i18n$default.I18n.ts("Low Poly"), "imgly_frame_wood_passepartout":module$node_modules$prezi_i18n$default.I18n.ts("Wood Passepartout")}}}};
module$LanguageObjects$default.PhotoEditorLanguages = {"en":i18nLanguageObject$$module$LanguageObjects};
var module$PhotoEditorPlugin$default = {};
var __awaiter$$module$PhotoEditorPlugin = this && module$PhotoEditorPlugin$default.__awaiter || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(module$PhotoEditorPlugin$default, "__esModule", {value:true});
var Avro$$module$PhotoEditorPlugin = module$node_modules$prezi_logger$default.avro.Avro;
var ObjectKind$$module$PhotoEditorPlugin = module$node_modules$prezi_cet_model_editor$default.base.ObjectKind;
module$PhotoEditorPlugin$default.PhotoEditorPlugin = class {
  initPhotoEditor(uat, selectedImageId) {
    uat.doAsync(this.opendDialogAndEdit(selectedImageId), (aat, file) => {
      if (aat.isValid()) {
        this.session.document.executeApiCommand(aat, {name:"edit image", run:(api) => {
          const uploadedImage = this.session.document.progressiveAssetManager.uploadImage(file);
          const image = api.lookup.image(selectedImageId);
          const layoutBox = image.layoutBox;
          image.imageAsset = uploadedImage.token;
          image.fitInto(layoutBox);
        }});
      }
    });
  }
  opendDialogAndEdit(selectedImageId) {
    return __awaiter$$module$PhotoEditorPlugin(this, void 0, void 0, function*() {
      const image = yield this.session.document.read((api) => {
        const asset = api.lookup.image(selectedImageId).imageAsset;
        return this.session.document.progressiveAssetManager.downloadImageAsset(asset);
      });
      const editedImage = yield this.editImage(image);
      return yield this.srcToFile(editedImage, "photoEditor.png", "image/png");
    });
  }
  init(applicationApi) {
    applicationApi.onDocumentChange(() => {
      const selectedImageId = this.uiRoot.getState().selectedImageId;
      if (selectedImageId != null) {
        this.session.document.read((cb) => {
          const image = cb.lookup.image(selectedImageId);
          this.uiRoot.setState({isEnabled:image != null && image.imageAsset.url != null && !image.isPlaceholder});
        });
      }
    });
    applicationApi.onSelectionChange((selectionInfo) => {
      const selection = selectionInfo.allObjects.map((ref) => ref.id);
      this.session.document.read((cb) => {
        if (selection.length === 1) {
          const transformedObject = cb.lookup.transformedObject(selection[0]);
          if (transformedObject != null && transformedObject.is(ObjectKind$$module$PhotoEditorPlugin.image)) {
            this.uiRoot.setState({selectedImageId:transformedObject.id, isEnabled:transformedObject.imageAsset.url != null && !transformedObject.isPlaceholder});
          } else {
            this.uiRoot.setState({selectedImageId:null});
          }
        } else {
          this.uiRoot.setState({selectedImageId:null});
        }
      });
    });
    applicationApi.onLicenseChange((license) => {
      this.uiRoot.setState({license});
    });
    this.uiRoot = applicationApi.declareUI({selectedImageId:null, license:null, isEnabled:true}, (state, ui) => {
      if (state.license && state.license.pitchImageIntegration) {
        if (state.selectedImageId != null) {
          ui.createPropertyBarItem((propertybarUi) => propertybarUi.separator({id:"photo-editor-property-bar-separator", weight:1, parent:module$node_modules$prezi_plugin_api$default.PropertyBarId.Left, size:module$node_modules$prezi_plugin_api$default.PropertyBarSeparatorSize.Small}));
          ui.createPropertyBarItem((propertybarUi) => propertybarUi.button({id:"photo-editor-property-bar-button", weight:1, parent:module$node_modules$prezi_plugin_api$default.PropertyBarId.Left, icon:module$node_modules$prezi_plugin_api$default.IconSmallId.EditImage, tooltip:module$node_modules$prezi_i18n$default.I18n.ts("Advanced image editing..."), enabled:state.isEnabled, onClick:(uat) => {
            Avro$$module$PhotoEditorPlugin.createDefaultLogger().logPhotoEditorOpen();
            this.initPhotoEditor(uat, state.selectedImageId);
          }}));
          ui.createMenuItem({kind:module$node_modules$prezi_plugin_api$default.MenuItemKind.context, id:"photo-editor-context-menu-item", title:module$node_modules$prezi_i18n$default.I18n.ts("Advanced image editing"), weight:67, enabled:state.isEnabled, onClick:(uat) => {
            Avro$$module$PhotoEditorPlugin.createDefaultLogger().logPhotoEditorOpen();
            this.initPhotoEditor(uat, state.selectedImageId);
          }});
        }
      }
    });
  }
  srcToFile(image, fileName, mimeType) {
    return fetch(image.src).then(function(res) {
      return res.arrayBuffer();
    }).then(function(buf) {
      return module$node_modules$prezi_utils$default.Utils.createFile(buf, fileName, mimeType);
    });
  }
  editImage(image) {
    return new Promise((resolve) => {
      let iframeId = null;
      const receiveMessage = (event) => {
        if (event.data.kind === "getPhotoSDKParameters") {
          const canvas = document.createElement("canvas");
          canvas.width = image.width;
          canvas.height = image.height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(image, 0, 0);
          event.source.postMessage({image:canvas.toDataURL(), languages:module$LanguageObjects$default.PhotoEditorLanguages}, event.origin);
        }
        if (event.data.kind === "PhotoSDKResult") {
          image.src = event.data.image;
          Avro$$module$PhotoEditorPlugin.createDefaultLogger().logPhotoEditorSave({is_image_changed:event.data.isEdited});
          if (event.data.isEdited) {
            resolve(image);
          }
          this.uiRoot.dialog.hide(iframeId);
        }
      };
      window.addEventListener("message", receiveMessage);
      iframeId = this.uiRoot.dialog.showIFrame({url:Spaghetti.getResourceUrl("index.html"), size:module$node_modules$prezi_plugin_api$default.DialogType.full, onClose:() => {
        window.removeEventListener("message", receiveMessage);
      }});
    });
  }
};
var module$api$PhotoEditor_module$default = {};
Object.defineProperty(module$api$PhotoEditor_module$default, "__esModule", {value:true});
module$api$PhotoEditor_module$default.lazyModule = {createPlugin() {
  return new module$PhotoEditorPlugin$default.PhotoEditorPlugin;
}};
prezi_photo_editor = module$api$PhotoEditor_module$default;


return prezi_photo_editor;

})

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_photo_editor",["require","prezi_cet_model_editor","prezi_i18n","prezi_logger","prezi_plugin_api","prezi_utils"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_photo_editor.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi_cet_model_editor"),require("prezi_i18n"),require("prezi_logger"),require("prezi_plugin_api"),require("prezi_utils"));}else{this["prezi_photo_editor"]=__factory(this["prezi_cet_model_editor"],this["prezi_i18n"],this["prezi_logger"],this["prezi_plugin_api"],this["prezi_utils"]);}}).call(this);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Core;
(function (Core) {
    var Controller;
    (function (Controller) {
        var AnimationController = (function (_super) {
            __extends(AnimationController, _super);
            function AnimationController() {
                var _this = _super.call(this) || this;
                _this.init();
                _this.initEvents();
                return _this;
            }
            return AnimationController;
        }(PIXI.utils.EventEmitter));
        Controller.AnimationController = AnimationController;
    })(Controller = Core.Controller || (Core.Controller = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Controller;
    (function (Controller) {
        var DataController = (function (_super) {
            __extends(DataController, _super);
            function DataController() {
                var _this = _super.call(this) || this;
                _this._currencyPosition = "suffix";
                _this.init();
                _this.initEvents();
                return _this;
            }
            return DataController;
        }(PIXI.utils.EventEmitter));
        Controller.DataController = DataController;
    })(Controller = Core.Controller || (Core.Controller = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Controller;
    (function (Controller) {
        var GameController = (function (_super) {
            __extends(GameController, _super);
            function GameController(data) {
                var _this = _super.call(this) || this;
                Dev.Config.GameConfig.StartConfig = data;
                _this.initProperties();
                return _this;
            }
            GameController.prototype.initProperties = function () {
                this.createManagers();
                this.init();
                this.initResource();
            };
            GameController.prototype.createManagers = function () {
                new Core.Managers.TickerManager();
                if (Dev.Config.GameConfig.StartConfig.fpsMeter)
                    new Core.Modules.StatElement();
                new Core.Managers.AnimationManager();
                new Core.Managers.DisplayManager();
                new Core.Managers.StageManager();
                new Core.Managers.ResourceManager();
            };
            return GameController;
        }(PIXI.utils.EventEmitter));
        Controller.GameController = GameController;
    })(Controller = Core.Controller || (Core.Controller = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Controller;
    (function (Controller) {
        var ResourceController = (function (_super) {
            __extends(ResourceController, _super);
            function ResourceController() {
                var _this = _super.call(this) || this;
                _this.init();
                _this.initEvents();
                return _this;
            }
            return ResourceController;
        }(PIXI.utils.EventEmitter));
        Controller.ResourceController = ResourceController;
    })(Controller = Core.Controller || (Core.Controller = {}));
})(Core || (Core = {}));
var Dev;
(function (Dev) {
    var Common;
    (function (Common) {
        var Controller;
        (function (Controller) {
            var SoundController = (function () {
                function SoundController() {
                    this._isMuteSound = true;
                    this._isMuteMusic = false;
                    this._isMuteSoundFx = false;
                    this._soundFXVolume = .5;
                    this._backgroundSoundVolume = 1;
                }
                SoundController.prototype.muteBackgroundSound = function () {
                };
                SoundController.prototype.muteSpecialsSound = function () {
                };
                SoundController.prototype.muteSound = function (mute) {
                    if (mute) {
                        this.muteSpecialsSound();
                        this.muteBackgroundSound();
                    }
                    else {
                        this.unMuteSpecialsSound();
                        this.unMuteBackgroundSound();
                    }
                };
                SoundController.prototype.unMuteSpecialsSound = function () {
                };
                SoundController.prototype.unMuteBackgroundSound = function () {
                };
                SoundController.prototype.isMuteMusic = function (index) {
                    this._isMuteMusic = index;
                    if (!this._isMuteMusic && this._isMuteSound) {
                        this.unMuteBackgroundSound();
                    }
                    else {
                        this.muteBackgroundSound();
                    }
                };
                SoundController.prototype.isMuteSoundFx = function (index) {
                    this._isMuteSoundFx = index;
                    if (!this._isMuteSoundFx && this._isMuteSound) {
                        this.unMuteSpecialsSound();
                    }
                    else {
                        this.muteSpecialsSound();
                    }
                };
                SoundController.prototype.isMuteSound = function (index) {
                    this._isMuteSound = index;
                    if (this._isMuteSound) {
                        this.isMuteSoundFx(this._isMuteSoundFx);
                        this.isMuteMusic(this._isMuteMusic);
                    }
                    else {
                        this.muteSound(false);
                    }
                };
                return SoundController;
            }());
            Controller.SoundController = SoundController;
        })(Controller = Common.Controller || (Common.Controller = {}));
    })(Common = Dev.Common || (Dev.Common = {}));
})(Dev || (Dev = {}));
var Core;
(function (Core) {
    var Enum;
    (function (Enum) {
        var Anchor;
        (function (Anchor) {
            Anchor[Anchor["MiddleLeft"] = 0] = "MiddleLeft";
            Anchor[Anchor["MiddleRight"] = 1] = "MiddleRight";
            Anchor[Anchor["MiddleCenter"] = 2] = "MiddleCenter";
            Anchor[Anchor["UpLeft"] = 3] = "UpLeft";
            Anchor[Anchor["UpRight"] = 4] = "UpRight";
            Anchor[Anchor["UpCenter"] = 5] = "UpCenter";
            Anchor[Anchor["DownLeft"] = 6] = "DownLeft";
            Anchor[Anchor["DownRight"] = 7] = "DownRight";
            Anchor[Anchor["DownCenter"] = 8] = "DownCenter";
        })(Anchor = Enum.Anchor || (Enum.Anchor = {}));
        var Shape;
        (function (Shape) {
            Shape[Shape["Circle"] = 0] = "Circle";
            Shape[Shape["Rectangle"] = 1] = "Rectangle";
            Shape[Shape["RoundRect"] = 2] = "RoundRect";
            Shape[Shape["Line"] = 3] = "Line";
        })(Shape = Enum.Shape || (Enum.Shape = {}));
    })(Enum = Core.Enum || (Core.Enum = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Managers;
    (function (Managers) {
        var AnimationManager = (function (_super) {
            __extends(AnimationManager, _super);
            function AnimationManager() {
                var _this = _super.call(this) || this;
                AnimationManager.Instance = _this;
                return _this;
            }
            AnimationManager.prototype.playNextAnimations = function () {
                this._animationState = Dev.Enum.AnimationStateType.AnimationPlaying;
                if (this._animations.length == 0) {
                    this._animationState = Dev.Enum.AnimationStateType.AnimationStopped;
                    this.emit(Dev.Enum.AnimListener.AnimStopped);
                    return;
                }
                else {
                    var animations = Object.keys(Dev.Enum.AnimListener);
                    for (var i = 0; i < animations.length; i++) {
                        if (this._animations[0] == Dev.Enum.AnimListener[animations[i]]) {
                            this.emit(this._animations[0]);
                        }
                    }
                    delete this._animations[0];
                    this._animations.splice(0, 1);
                }
            };
            AnimationManager.prototype.deleteAnimations = function () {
                if (this._animations) {
                    for (var i = 0; i < this._animations.length; i++) {
                        delete this._animations[i];
                    }
                }
            };
            AnimationManager.prototype.sortScenarioAnimation = function (animations) {
                this.deleteAnimations();
                this._animations = animations;
                this.playNextAnimations();
            };
            Object.defineProperty(AnimationManager.prototype, "animationState", {
                get: function () {
                    return this._animationState;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AnimationManager.prototype, "animations", {
                get: function () {
                    return this._animations;
                },
                enumerable: true,
                configurable: true
            });
            return AnimationManager;
        }(PIXI.utils.EventEmitter));
        Managers.AnimationManager = AnimationManager;
    })(Managers = Core.Managers || (Core.Managers = {}));
})(Core || (Core = {}));
var Dev;
(function (Dev) {
    var Enum;
    (function (Enum) {
        var DisplayListener;
        (function (DisplayListener) {
            DisplayListener["Resize"] = "resize";
            DisplayListener["OrientationChanged"] = "OrientationChanged";
        })(DisplayListener = Enum.DisplayListener || (Enum.DisplayListener = {}));
        ;
        var Orientation;
        (function (Orientation) {
            Orientation[Orientation["Landscape"] = 0] = "Landscape";
            Orientation[Orientation["Portrait"] = 1] = "Portrait";
            Orientation[Orientation["None"] = 2] = "None";
        })(Orientation = Enum.Orientation || (Enum.Orientation = {}));
        var ScaleModeType;
        (function (ScaleModeType) {
            ScaleModeType[ScaleModeType["Full"] = 0] = "Full";
            ScaleModeType[ScaleModeType["MaxHeight"] = 1] = "MaxHeight";
            ScaleModeType[ScaleModeType["SafeArea"] = 2] = "SafeArea";
        })(ScaleModeType = Enum.ScaleModeType || (Enum.ScaleModeType = {}));
    })(Enum = Dev.Enum || (Dev.Enum = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Config;
    (function (Config) {
        var ScaleModeType = Dev.Enum.ScaleModeType;
        var GameConfig = (function () {
            function GameConfig() {
            }
            GameConfig.DisplayConfig = {
                width: 1280,
                height: 720,
                resizeMode: ScaleModeType.Full,
                landscape: true,
                portrait: true
            };
            return GameConfig;
        }());
        Config.GameConfig = GameConfig;
    })(Config = Dev.Config || (Dev.Config = {}));
})(Dev || (Dev = {}));
var Core;
(function (Core) {
    var Managers;
    (function (Managers) {
        var GameInformation = Dev.Config.GameConfig;
        var ResizeModeType = Dev.Enum.ScaleModeType;
        var Orientation = Dev.Enum.Orientation;
        var DisplayListener = Dev.Enum.DisplayListener;
        var DisplayManager = (function (_super) {
            __extends(DisplayManager, _super);
            function DisplayManager() {
                var _this = _super.call(this) || this;
                _this.to = 0;
                DisplayManager.instance = _this;
                var w = GameInformation.DisplayConfig.width;
                var h = GameInformation.DisplayConfig.height;
                _this.initProperties(w, h);
                return _this;
            }
            ;
            DisplayManager.prototype.initProperties = function (w, h) {
                var targetCanvasName = GameInformation.StartConfig.targetCanvasName;
                this._targetCanvas = document.getElementById(targetCanvasName);
                this._app = new PIXI.Application({
                    width: w,
                    height: h,
                    backgroundColor: 0x0000,
                    antialias: true
                });
                this._app.renderer.view.id = "videoslot";
                if (this._targetCanvas != undefined)
                    this._targetCanvas.appendChild(this._app.view);
                else
                    document.body.appendChild(this._app.view);
                if (GameInformation.StartConfig.maxHeight != undefined && GameInformation.StartConfig.maxHeight != 0)
                    GameInformation.DisplayConfig.resizeMode = ResizeModeType.MaxHeight;
                this._rendererContainer = this._app.stage;
                this._renderer = this._app.renderer;
                this._width = w;
                this._height = h;
                this._currentOrientation = Dev.Enum.Orientation.None;
                document.getElementById("videoslot");
                this.onResizeHandler();
                this.initEvents();
            };
            DisplayManager.prototype.initEvents = function () {
                if (Dev.Config.GameConfig.StartConfig.fullScreen) {
                    document.body.ontouchend = this.onFullscreenChange.bind(this);
                    document.body.onclick = this.onFullscreenChange.bind(this);
                }
                window.addEventListener(DisplayListener.Resize, this.onResizeHandler.bind(this));
            };
            DisplayManager.prototype.onFullscreenChange = function () {
                var elem = document.documentElement;
                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                }
                else if (elem["mozRequestFullScreen"]) {
                    elem["mozRequestFullScreen"]();
                }
                else if (elem["webkitRequestFullscreen"]) {
                    elem["webkitRequestFullscreen"]();
                }
                else if (elem["msRequestFullscreen"]) {
                    elem["msRequestFullscreen"]();
                }
            };
            DisplayManager.prototype.onResizeHandler = function () {
                var _this = this;
                this.setResizeMode();
                clearTimeout(this.to);
                this.to = setTimeout(function () {
                    _this.setOrientationMode();
                }, 50);
            };
            DisplayManager.prototype.setOrientationMode = function () {
                var width, height;
                switch (GameInformation.DisplayConfig.resizeMode) {
                    case ResizeModeType.Full:
                        width = window.innerWidth;
                        height = window.innerHeight;
                        if (height >= width && this._currentOrientation != Orientation.Portrait) {
                            this.currentOrientation = Orientation.Portrait;
                        }
                        else if (height < width && this._currentOrientation != Orientation.Landscape) {
                            this.currentOrientation = Orientation.Landscape;
                        }
                        break;
                    case ResizeModeType.MaxHeight:
                        width = this._targetCanvas.clientWidth;
                        height = this._targetCanvas.clientHeight;
                        if (width <= 450 && this._currentOrientation != Orientation.Portrait) {
                            this.currentOrientation = Orientation.Portrait;
                        }
                        else if (width > 450 && this._currentOrientation != Orientation.Landscape) {
                            this.currentOrientation = Orientation.Landscape;
                        }
                        break;
                    case ResizeModeType.SafeArea:
                        break;
                }
            };
            DisplayManager.prototype.setResizeMode = function () {
                var r;
                var w, h;
                switch (GameInformation.DisplayConfig.resizeMode) {
                    case ResizeModeType.Full:
                        h = window.innerHeight;
                        r = Math.min(window.innerWidth / GameInformation.DisplayConfig.width, window.innerHeight / GameInformation.DisplayConfig.height);
                        w = Math.ceil(GameInformation.DisplayConfig.width * r);
                        h = Math.ceil(GameInformation.DisplayConfig.height * r);
                        this._renderer.resize(w, h);
                        this._rendererContainer.scale.y = this._rendererContainer.scale.x = r;
                        break;
                    case ResizeModeType.MaxHeight:
                        var maxHeight = GameInformation.StartConfig.maxHeight;
                        w = this._targetCanvas.clientHeight;
                        r = Math.min(this._targetCanvas.clientWidth / GameInformation.DisplayConfig.width, this._targetCanvas.clientHeight / GameInformation.DisplayConfig.height);
                        w = Math.ceil(GameInformation.DisplayConfig.width * r);
                        h = Math.ceil(GameInformation.DisplayConfig.height * r);
                        if (h < maxHeight)
                            maxHeight = h;
                        this._renderer.resize(this._targetCanvas.clientWidth, maxHeight);
                        this._rendererContainer.scale.y = this._rendererContainer.scale.x = r;
                        var clientW = this._targetCanvas.clientWidth;
                        var displayW = GameInformation.DisplayConfig.width * r;
                        this._rendererContainer.position.x = (clientW - displayW) / 2;
                        break;
                    case ResizeModeType.SafeArea:
                        break;
                }
            };
            Object.defineProperty(DisplayManager.prototype, "renderer", {
                get: function () {
                    return this._renderer;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DisplayManager.prototype, "rendererContainer", {
                get: function () {
                    return this._rendererContainer;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DisplayManager.prototype, "width", {
                get: function () {
                    return this._width;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DisplayManager.prototype, "height", {
                get: function () {
                    return this._height;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DisplayManager.prototype, "currentOrientation", {
                get: function () {
                    return this._currentOrientation;
                },
                set: function (value) {
                    this._currentOrientation = value;
                    this.emit(Dev.Enum.DisplayListener.OrientationChanged, value);
                },
                enumerable: true,
                configurable: true
            });
            return DisplayManager;
        }(PIXI.utils.EventEmitter));
        Managers.DisplayManager = DisplayManager;
    })(Managers = Core.Managers || (Core.Managers = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Managers;
    (function (Managers) {
        var ResourceManager = (function (_super) {
            __extends(ResourceManager, _super);
            function ResourceManager() {
                var _this = _super.call(this) || this;
                ResourceManager.Instance = _this;
                _this._cdnPath = Dev.Config.GameConfig.StartConfig.cdnPath;
                return _this;
            }
            ResourceManager.prototype.assetLoading = function () {
                this._loader = new PIXI.Loader();
                this.addTextures();
                this.addSpines();
                this.addWebFonts();
                this._loader.load();
                this._loader.onProgress.add(this.onProgress.bind(this));
                this._loader.onError.add(this.onError.bind(this));
                this._loader.onLoad.add(this.onLoad.bind(this));
                this._loader.onComplete.add(this.onComplete.bind(this));
            };
            ResourceManager.prototype.assetPreLoading = function () {
                this._loader = new PIXI.Loader();
                this.addPreTextures();
                this._loader.load();
                this._loader.onProgress.add(this.onPreProgress.bind(this));
                this._loader.onError.add(this.onPreError.bind(this));
                this._loader.onLoad.add(this.onPreLoad.bind(this));
                this._loader.onComplete.add(this.onPreComplete.bind(this));
            };
            ResourceManager.prototype.addTextures = function () {
                var textures = Object.keys(Dev.Enum.Texture);
                for (var i = 0; i < textures.length; i++)
                    this._loader.add(this._cdnPath + Dev.Enum.Texture[textures[i]]);
            };
            ResourceManager.prototype.addPreTextures = function () {
                var textures = Object.keys(Dev.Enum.PreTexture);
                for (var i = 0; i < textures.length; i++)
                    this._loader.add(this._cdnPath + Dev.Enum.PreTexture[textures[i]]);
            };
            ResourceManager.prototype.addWebFonts = function () {
                var webFonts = Object.keys(Dev.Enum.WebFont);
                for (var i = 0; i < webFonts.length; i++) {
                    WebFont.load({
                        custom: {
                            families: [Dev.Enum.WebFont[webFonts[i]]],
                            urls: [this._cdnPath + Dev.Enum.WebFont.FontUrl]
                        }
                    });
                }
            };
            ResourceManager.prototype.addSpines = function () {
                var spines = Object.keys(Dev.Enum.SpineAnimation);
                for (var i = 0; i < spines.length; i++)
                    this._loader.add(this._cdnPath + Dev.Enum.SpineAnimation[spines[i]]);
            };
            ResourceManager.prototype.onError = function () {
            };
            ResourceManager.prototype.onLoad = function () {
                this.emit(Dev.Enum.ResourceListener.AssetLoading);
            };
            ResourceManager.prototype.onComplete = function () {
                this.emit(Dev.Enum.ResourceListener.AssetLoadCompleted);
            };
            ResourceManager.prototype.onProgress = function () {
            };
            ResourceManager.prototype.onPreError = function () {
            };
            ResourceManager.prototype.onPreLoad = function () {
            };
            ResourceManager.prototype.onPreComplete = function () {
                this.emit(Dev.Enum.ResourceListener.AssetPreLoadCompleted);
            };
            ResourceManager.prototype.onPreProgress = function () {
            };
            ResourceManager.prototype.getSpineData = function (resourceName) {
                return this._loader.resources[resourceName].spineData;
            };
            return ResourceManager;
        }(PIXI.utils.EventEmitter));
        Managers.ResourceManager = ResourceManager;
    })(Managers = Core.Managers || (Core.Managers = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Managers;
    (function (Managers) {
        var StageManager = (function () {
            function StageManager() {
                this._stages = {};
                this._currentStage = null;
                var dR = Dev.Config.GameConfig.DisplayConfig;
                var aI = Dev.Config.AssetConfig;
                StageManager.Instance = this;
                this._stageContainer = new Core.Modules.Container(0, 0, Managers.DisplayManager.instance.rendererContainer, "StageContainer");
                this._bg = new Core.Modules.Graphic(dR.width / 2, dR.height / 2, dR.width * 3, dR.height * 3, aI.StageRect, this._stageContainer);
            }
            StageManager.prototype.createStage = function (stage, stageName, tween) {
                if (this._stages[stageName] == null) {
                    this._stages[stageName] = new stage();
                    this._stages[stageName].name = stageName;
                    this._stageContainer.addChild(this._stages[stageName]);
                    if (tween) {
                        TweenMax.fromTo(this._bg, 1, { alpha: 1 }, { alpha: 0 });
                        TweenMax.fromTo(this._stages[stageName], 1, { alpha: 0 }, { alpha: 1 });
                    }
                    else {
                        this._bg.alpha = 0;
                        this._stages[stageName].alpha = 1;
                    }
                    this._stageContainer.addChild(this._bg);
                }
                this._currentStage = stage;
            };
            StageManager.prototype.changeStage = function (stage, tween) {
                StageManager.Instance.removeStage(this._currentStage, tween);
                if (tween) {
                    Core.Managers.TickerManager.instance.addTimeout("stageChange", 1, function () {
                        StageManager.Instance.startStage(stage, tween);
                    }, false);
                }
                else {
                    StageManager.Instance.startStage(stage, tween);
                }
            };
            StageManager.prototype.startStage = function (stage, tween) {
                this.createStage(stage, stage.name, tween);
                this._stages[stage.name].init();
                this._stages[stage.name].initEvents();
            };
            StageManager.prototype.getStage = function (stage) {
                return this._stages[stage.name];
            };
            StageManager.prototype.removeStage = function (stage, tween) {
                var _this = this;
                var stageName = stage.name;
                if (tween) {
                    TweenMax.fromTo(this._bg, 1, { alpha: 0 }, { alpha: 1 });
                    TweenMax.fromTo(this._stages[stageName], 1, { alpha: 1 }, { alpha: 0, onComplete: function () {
                            _this._stages[stageName].dispose();
                            _this._stages[stageName].destroy({ children: true, baseTexture: true });
                            delete _this._stages[stageName];
                        } });
                }
                else {
                    this._bg.alpha = 0;
                    this._stages[stageName].alpha = 0;
                    this._stages[stageName].dispose();
                    this._stages[stageName].destroy({ children: true, baseTexture: true });
                    delete this._stages[stageName];
                }
            };
            Object.defineProperty(StageManager.prototype, "stageContainer", {
                get: function () {
                    return this._stageContainer;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(StageManager.prototype, "currentStage", {
                get: function () {
                    return this._currentStage;
                },
                enumerable: true,
                configurable: true
            });
            return StageManager;
        }());
        Managers.StageManager = StageManager;
    })(Managers = Core.Managers || (Core.Managers = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Managers;
    (function (Managers) {
        var TickerManager = (function (_super) {
            __extends(TickerManager, _super);
            function TickerManager() {
                var _this = _super.call(this) || this;
                _this._tickers = {};
                _this._gTimes = {};
                _this._intervals = {};
                TickerManager.instance = _this;
                return _this;
            }
            TickerManager.prototype.addTimeout = function (key, duration, callback, loop) {
                var _this = this;
                if (!this._tickers[key]) {
                    var ticker = new PIXI.Ticker();
                    ticker.autoStart = true;
                    ticker.minFPS = 1;
                    this._tickers[key] = ticker;
                    this._gTimes[key] = performance.now();
                    this._intervals[key] = setInterval(function () {
                        _this.addLoop(key, duration, callback, loop);
                    }, duration);
                }
            };
            TickerManager.prototype.addLoop = function (key, duration, callback, loop) {
                var g_TICK = duration * 1000;
                var timeNow = performance.now();
                var timeDiff = timeNow - this._gTimes[key];
                if (timeDiff < g_TICK) {
                    return;
                }
                callback.call("", this);
                if (loop) {
                    this._gTimes[key] = performance.now();
                }
                else {
                    this.removeTicker(key);
                }
            };
            TickerManager.prototype.removeTicker = function (key) {
                if (this._tickers[key] != null && this._tickers[key] != undefined)
                    this._tickers[key].destroy();
                if (this._intervals[key] != null && this._intervals[key] != undefined)
                    clearInterval(this._intervals[key]);
                delete this._tickers[key];
                delete this._intervals[key];
                delete this._gTimes[key];
            };
            Object.defineProperty(TickerManager.prototype, "tickers", {
                get: function () {
                    return this._tickers;
                },
                enumerable: true,
                configurable: true
            });
            return TickerManager;
        }(PIXI.Ticker));
        Managers.TickerManager = TickerManager;
    })(Managers = Core.Managers || (Core.Managers = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var ButtonStates;
        (function (ButtonStates) {
            ButtonStates["Disabled"] = "Disabled";
            ButtonStates["Down"] = "Down";
            ButtonStates["Out"] = "Out";
            ButtonStates["Over"] = "Over";
        })(ButtonStates = Modules.ButtonStates || (Modules.ButtonStates = {}));
        var ButtonEvents;
        (function (ButtonEvents) {
            ButtonEvents["pointerdown"] = "pointerdown";
            ButtonEvents["pointerup"] = "pointerup";
            ButtonEvents["pointerover"] = "pointerover";
            ButtonEvents["pointerout"] = "pointerout";
            ButtonEvents["pointertap"] = "pointertap";
        })(ButtonEvents = Modules.ButtonEvents || (Modules.ButtonEvents = {}));
        var Button = (function (_super) {
            __extends(Button, _super);
            function Button(x, y, c, cB, p, w, h) {
                var _this = _super.call(this) || this;
                _this._frames = null;
                _this._state = ButtonStates.Out;
                _this._callback = null;
                _this._isEnabled = true;
                w && (_this.width = w);
                h && (_this.height = h);
                _this.anchor.set(0.5, 0.5);
                _this.position.set(x, y);
                _this.buttonMode = true;
                _this.interactive = true;
                _this._frames = c.frames;
                cB && (_this._callback = cB);
                c.name ? _this.name = c.name : _this.name = "button";
                p && p.addChild(_this);
                _this.state = ButtonStates.Out;
                _this.initEvent();
                return _this;
            }
            Button.prototype.initEvent = function () {
                this.on(ButtonEvents.pointerdown, this.onButtonDown);
                this.on(ButtonEvents.pointerup, this.onButtonUp);
                this.on(ButtonEvents.pointerover, this.onButtonOver);
                this.on(ButtonEvents.pointerout, this.onButtonOut);
                this.on(ButtonEvents.pointerout, this.onButtonOut);
            };
            Button.prototype.onButtonDown = function () {
                this.state = ButtonStates.Down;
            };
            Button.prototype.onButtonUp = function () {
                this._callback.call("", this);
            };
            Button.prototype.onButtonOver = function () {
                this.state = ButtonStates.Over;
            };
            Button.prototype.onButtonOut = function () {
                this.state = ButtonStates.Out;
            };
            Object.defineProperty(Button.prototype, "state", {
                set: function (state) {
                    this._state = state;
                    switch (state) {
                        case ButtonStates.Out:
                            this.texture = PIXI.Texture.from(this._frames.out);
                            break;
                        case ButtonStates.Over:
                            this.texture = PIXI.Texture.from(this._frames.over);
                            break;
                        case ButtonStates.Down:
                            this.texture = PIXI.Texture.from(this._frames.down);
                            break;
                        case ButtonStates.Disabled:
                            this.texture = PIXI.Texture.from(this._frames.disabled);
                            break;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Button.prototype.changeButtonConfig = function (buttonConfig) {
                this._frames = buttonConfig.frames;
                this.state = this._state;
            };
            Button.prototype.changeTexture = function (texture) {
                this.texture = PIXI.Texture.from(texture);
            };
            Object.defineProperty(Button.prototype, "isEnabled", {
                set: function (enable) {
                    this._isEnabled = enable;
                    if (!this._isEnabled) {
                        this.state = ButtonStates.Disabled;
                    }
                    else {
                        this.state = ButtonStates.Out;
                    }
                    this.interactive = enable;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Button.prototype, "zIndex", {
                get: function () {
                    return this._zIndex;
                },
                set: function (zIndex) {
                    this._zIndex = zIndex;
                },
                enumerable: true,
                configurable: true
            });
            return Button;
        }(PIXI.Sprite));
        Modules.Button = Button;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Container = (function (_super) {
            __extends(Container, _super);
            function Container(x, y, p, n) {
                var _this = _super.call(this) || this;
                if (n)
                    _this.name = n;
                if (p)
                    p.addChild(_this);
                if (x)
                    _this.position.x = x;
                if (y)
                    _this.position.y = y;
                return _this;
            }
            return Container;
        }(PIXI.Container));
        Modules.Container = Container;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Container2d = (function (_super) {
            __extends(Container2d, _super);
            function Container2d(x, y, p, n) {
                var _this = _super.call(this) || this;
                var r = Dev.Config.GameConfig.DisplayConfig;
                if (n)
                    _this.name = n;
                if (p)
                    p.addChild(_this);
                _this.position.x = x;
                _this.position.y = y;
                return _this;
            }
            Container2d.prototype.setAffine = function (affine) {
                this.proj.affine = affine;
            };
            Container2d.prototype.setAxisX = function (pos, factor) {
                this.proj.setAxisX(pos, factor);
            };
            Container2d.prototype.setAxisY = function (pos, factor) {
                this.proj.setAxisY(pos, factor);
            };
            return Container2d;
        }(PIXI.projection.Container2d));
        Modules.Container2d = Container2d;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Graphic = (function (_super) {
            __extends(Graphic, _super);
            function Graphic(x, y, w, h, c, p, a) {
                var _this = _super.call(this) || this;
                _this._config = c;
                _this._width = w;
                _this._height = h;
                c.name ? _this.name = c.name : _this.name = "mask";
                _this._position = { x: x, y: y };
                _this._config.anchor = a;
                c.alpha ? _this.alpha = c.alpha : _this.alpha = 1;
                p && p.addChild(_this);
                _this.setShape(c);
                _this.setAnchor(a);
                _this.scale.set(1, 1);
                return _this;
            }
            Graphic.prototype.setShape = function (c) {
                switch (c.shape) {
                    case Core.Enum.Shape.Circle:
                        var fill = c.fill ? c.fill : 0x000000;
                        var radius = c.radius ? c.radius : 1000;
                        var alpha = c.alpha ? c.alpha : 1;
                        this.beginFill(fill, alpha).drawCircle(0, 0, radius).endFill();
                        break;
                    case Core.Enum.Shape.Rectangle:
                        fill = c.fill ? c.fill : 0x00000;
                        alpha = c.alpha ? c.alpha : 1;
                        this.beginFill(fill, alpha)
                            .drawRect(0, 0, this._width, this._height)
                            .endFill();
                        break;
                    case Core.Enum.Shape.Line:
                        fill = c.fill ? c.fill : 0x00000;
                        alpha = c.alpha ? c.alpha : 1;
                        this.lineStyle(this._width, fill, 1, .5);
                        this.endFill();
                        break;
                    case Core.Enum.Shape.RoundRect:
                        fill = c.fill ? c.fill : 0x00000;
                        alpha = c.alpha ? c.alpha : 1;
                        radius = c.radius ? c.radius : 1000;
                        this.beginFill(fill, alpha);
                        this.drawRoundedRect(0, 0, this._width, this._height, radius);
                        this.endFill();
                        break;
                }
            };
            Graphic.prototype.setAnchor = function (anchor) {
                if (anchor != null) {
                    switch (anchor) {
                        case Core.Enum.Anchor.UpLeft:
                            this.pivot.set(0, 0);
                            break;
                        case Core.Enum.Anchor.UpCenter:
                            this.pivot.set(0.5, 0);
                            break;
                        case Core.Enum.Anchor.UpRight:
                            this.pivot.set(1, 0);
                            break;
                        case Core.Enum.Anchor.MiddleLeft:
                            this.pivot.set(0, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleCenter:
                            this.position.set(this._position.x - this._width / 2, this._position.y - this.height / 2);
                            break;
                        case Core.Enum.Anchor.MiddleRight:
                            this.pivot.set(1, 0.5);
                            break;
                        case Core.Enum.Anchor.DownLeft:
                            this.pivot.set(0, 1);
                            break;
                        case Core.Enum.Anchor.DownCenter:
                            this.pivot.set(0.5, 1);
                            break;
                        case Core.Enum.Anchor.DownRight:
                            this.pivot.set(1, 1);
                            break;
                    }
                }
                else {
                    this.position.set(this._position.x - this._width / 2, this._position.y - this.height / 2);
                }
            };
            Graphic.prototype.drawLine = function (endPoint, width) {
                this.lineTo(endPoint.x, endPoint.y);
                this.width = width;
            };
            Object.defineProperty(Graphic.prototype, "zIndex", {
                get: function () {
                    return this._zIndex;
                },
                set: function (zIndex) {
                    this._zIndex = zIndex;
                },
                enumerable: true,
                configurable: true
            });
            Graphic.prototype.setPosition = function (x, y) {
                this._position.x = x;
                this._position.y = y;
                this.setAnchor(this._config.anchor);
            };
            return Graphic;
        }(PIXI.Graphics));
        Modules.Graphic = Graphic;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Plane2d = (function (_super) {
            __extends(Plane2d, _super);
            function Plane2d(x, y, p, aC, n) {
                var _this = _super.call(this) || this;
                var r = Dev.Config.GameConfig.DisplayConfig;
                if (n)
                    _this.name = n;
                if (p)
                    p.addChild(_this);
                _this.position.x = x + r.width / 2;
                _this.position.y = y + r.height / 2;
                if (!aC)
                    aC = { yP: new PIXI.Point(0, r.height / 2), yFactor: -1 };
                if (aC.xP)
                    _this.setAxisX(aC.xP, aC.xFactor);
                if (aC.yP)
                    _this.setAxisY(aC.yP, aC.yFactor);
                return _this;
            }
            Plane2d.prototype.setAxisX = function (pos, factor) {
                this.proj.setAxisX(pos, factor);
            };
            Plane2d.prototype.setAxisY = function (pos, factor) {
                this.proj.setAxisY(pos, factor);
            };
            return Plane2d;
        }(PIXI.projection.Container2d));
        Modules.Plane2d = Plane2d;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var SequenceAnimation = (function (_super) {
            __extends(SequenceAnimation, _super);
            function SequenceAnimation(c, x, y, p, n) {
                var _this = _super.call(this, SequenceAnimation.generateTextures(c.resource, c.to)) || this;
                _this._config = c;
                _this.position.set(x, y);
                _this.name = n;
                _this.loop = c.loop;
                p.addChild(_this);
                _this.setAnchor(Core.Enum.Anchor.MiddleCenter);
                return _this;
            }
            SequenceAnimation.generateTextures = function (frame, length) {
                var textures = [];
                for (var i = 0; i < length; i++) {
                    var index = void 0;
                    if (i < 10) {
                        index = "0000" + i;
                    }
                    else if (i < 100) {
                        index = "000" + i;
                    }
                    else {
                        index = "00" + i;
                    }
                    var texture = PIXI.Texture.from(frame + index);
                    textures.push(texture);
                }
                return textures;
            };
            SequenceAnimation.prototype.setAnchor = function (anchor) {
                if (anchor != null) {
                    switch (anchor) {
                        case Core.Enum.Anchor.UpLeft:
                            this.anchor.set(0, 0);
                            break;
                        case Core.Enum.Anchor.UpCenter:
                            this.anchor.set(0.5, 0);
                            break;
                        case Core.Enum.Anchor.UpRight:
                            this.anchor.set(1, 0);
                            break;
                        case Core.Enum.Anchor.MiddleLeft:
                            this.anchor.set(0, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleCenter:
                            this.anchor.set(0.5, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleRight:
                            this.anchor.set(1, 0.5);
                            break;
                        case Core.Enum.Anchor.DownLeft:
                            this.anchor.set(0, 1);
                            break;
                        case Core.Enum.Anchor.DownCenter:
                            this.anchor.set(0.5, 1);
                            break;
                        case Core.Enum.Anchor.DownRight:
                            this.anchor.set(1, 1);
                            break;
                    }
                }
                else {
                    this.anchor.set(0.5, 0.5);
                }
            };
            SequenceAnimation.prototype.playAnimation = function () {
                this.gotoAndPlay(this._config.from);
                this.animationSpeed = this._config.time;
                this.loop = this._config.loop;
            };
            return SequenceAnimation;
        }(PIXI.AnimatedSprite));
        Modules.SequenceAnimation = SequenceAnimation;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Spine = (function (_super) {
            __extends(Spine, _super);
            function Spine(x, y, c, p, w, h, a, n) {
                var _this = _super.call(this, Core.Managers.ResourceManager.Instance.getSpineData(c.skeletonDataName)) || this;
                _this._animationsConfig = c.animations;
                w && (_this.width = w);
                h && (_this.height = h);
                n ? _this.name = n : _this.name = "spine";
                _this.position.set(x, y);
                _this._spineConfig = c;
                _this._anchor = a;
                _this.setAnchor(a);
                p.addChild(_this);
                return _this;
            }
            Spine.prototype.setPosition = function (x, y) {
                this.position.set(x, y);
                this.setAnchor(this._anchor);
            };
            Spine.prototype.setAnchor = function (anchor) {
                if (anchor != null || anchor != undefined) {
                    switch (anchor) {
                        case Core.Enum.Anchor.UpLeft:
                            this.pivot.set(0, 0);
                            break;
                        case Core.Enum.Anchor.UpCenter:
                            this.pivot.set(0.5, 0);
                            break;
                        case Core.Enum.Anchor.UpRight:
                            this.pivot.set(1, 0);
                            break;
                        case Core.Enum.Anchor.MiddleLeft:
                            this.pivot.set(0, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleCenter:
                            this.position.set(this.position.x - this.width / 2, this.position.y - this.height / 2);
                            break;
                        case Core.Enum.Anchor.MiddleRight:
                            this.pivot.set(1, 0.5);
                            break;
                        case Core.Enum.Anchor.DownLeft:
                            this.pivot.set(0, 1);
                            break;
                        case Core.Enum.Anchor.DownCenter:
                            this.pivot.set(0.5, 1);
                            break;
                        case Core.Enum.Anchor.DownRight:
                            this.pivot.set(1, 1);
                            break;
                        default:
                            this.position.set(this.position.x - this.width / 2, this.position.y - this.height / 2);
                            break;
                    }
                }
                else {
                    this.position.set(this.position.x - this.width / 2, this.position.y - this.height / 2);
                }
            };
            Spine.prototype.playAnimation = function (animationName) {
                var config = this._animationsConfig[animationName];
                config.time ? this.state.timeScale = config.time : this.state.timeScale = 1;
                this.state.setAnimation(0, config.resource, config.loop);
            };
            Spine.prototype.setMix = function (fromName, toName) {
                var fC = this._animationsConfig[fromName];
                var tC = this._animationsConfig[toName];
                var time = 1;
                tC.time ? time = tC.time : time = 1;
                this.stateData.setMix(fC.resource, tC.resource, 3);
            };
            Object.defineProperty(Spine.prototype, "zIndex", {
                get: function () {
                    return this._zIndex;
                },
                set: function (zIndex) {
                    this._zIndex = zIndex;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Spine.prototype, "animConfig", {
                get: function () {
                    return this._animationsConfig;
                },
                set: function (value) {
                    this._animationsConfig = value;
                },
                enumerable: true,
                configurable: true
            });
            return Spine;
        }(PIXI.spine.Spine));
        Modules.Spine = Spine;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Sprite = (function (_super) {
            __extends(Sprite, _super);
            function Sprite(x, y, c, p, w, h, a) {
                var _this = _super.call(this, PIXI.Texture.from(c.frame)) || this;
                w && (_this.width = w);
                h && (_this.height = h);
                c.name ? _this.name = c.name : _this.name = "button";
                _this.setAnchor(a);
                _this.position.set(x, y);
                p && p.addChild(_this);
                return _this;
            }
            Sprite.prototype.changeSprite = function (frameName) {
                this.texture = PIXI.Texture.from(frameName);
            };
            Sprite.prototype.setAnchor = function (anchor) {
                if (anchor != null) {
                    switch (anchor) {
                        case Core.Enum.Anchor.UpLeft:
                            this.anchor.set(0, 0);
                            break;
                        case Core.Enum.Anchor.UpCenter:
                            this.anchor.set(0.5, 0);
                            break;
                        case Core.Enum.Anchor.UpRight:
                            this.anchor.set(1, 0);
                            break;
                        case Core.Enum.Anchor.MiddleLeft:
                            this.anchor.set(0, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleCenter:
                            this.anchor.set(0.5, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleRight:
                            this.anchor.set(1, 0.5);
                            break;
                        case Core.Enum.Anchor.DownLeft:
                            this.anchor.set(0, 1);
                            break;
                        case Core.Enum.Anchor.DownCenter:
                            this.anchor.set(0.5, 1);
                            break;
                        case Core.Enum.Anchor.DownRight:
                            this.anchor.set(1, 1);
                            break;
                    }
                }
                else {
                    this.anchor.set(0.5, 0.5);
                }
            };
            Object.defineProperty(Sprite.prototype, "zIndex", {
                get: function () {
                    return this._zIndex;
                },
                set: function (zIndex) {
                    this._zIndex = zIndex;
                },
                enumerable: true,
                configurable: true
            });
            return Sprite;
        }(PIXI.Sprite));
        Modules.Sprite = Sprite;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Sprite2d = (function (_super) {
            __extends(Sprite2d, _super);
            function Sprite2d(x, y, w, h, c, p, a) {
                var _this = _super.call(this, PIXI.Texture.from(c.frame)) || this;
                var r = Dev.Config.GameConfig.DisplayConfig;
                w && (_this.width = w);
                h && (_this.height = h);
                c.name ? _this.name = c.name : _this.name = "sprite2d";
                _this.setAnchor(a);
                _this.position.set(x, y);
                p && p.addChild(_this);
                return _this;
            }
            Sprite2d.prototype.changeSprite = function (frameName) {
                this.texture = PIXI.Texture.from(frameName);
            };
            Sprite2d.prototype.setAxisX = function (pos, factor) {
                this.proj.setAxisX(pos, factor);
            };
            Sprite2d.prototype.setAxisY = function (pos, factor) {
                this.proj.setAxisY(pos, factor);
            };
            Sprite2d.prototype.setAnchor = function (anchor) {
                if (anchor != null) {
                    switch (anchor) {
                        case Core.Enum.Anchor.UpLeft:
                            this.anchor.set(0, 0);
                            break;
                        case Core.Enum.Anchor.UpCenter:
                            this.anchor.set(0.5, 0);
                            break;
                        case Core.Enum.Anchor.UpRight:
                            this.anchor.set(1, 0);
                            break;
                        case Core.Enum.Anchor.MiddleLeft:
                            this.anchor.set(0, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleCenter:
                            this.anchor.set(0.5, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleRight:
                            this.anchor.set(1, 0.5);
                            break;
                        case Core.Enum.Anchor.DownLeft:
                            this.anchor.set(0, 1);
                            break;
                        case Core.Enum.Anchor.DownCenter:
                            this.anchor.set(0.5, 1);
                            break;
                        case Core.Enum.Anchor.DownRight:
                            this.anchor.set(1, 1);
                            break;
                    }
                }
                else {
                    this.anchor.set(0.5, 0.5);
                }
            };
            Object.defineProperty(Sprite2d.prototype, "zIndex", {
                get: function () {
                    return this._zIndex;
                },
                set: function (zIndex) {
                    this._zIndex = zIndex;
                },
                enumerable: true,
                configurable: true
            });
            return Sprite2d;
        }(PIXI.projection.Sprite2d));
        Modules.Sprite2d = Sprite2d;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var SpriteText = (function (_super) {
            __extends(SpriteText, _super);
            function SpriteText(x, y, w, h, c, p) {
                var _this = _super.call(this, x, y, c.sConfig, p, w, h) || this;
                _this._text = new Modules.Text(0, 0, c.tConfig, _this, w, h);
                if (c.name)
                    _this.name = c.name;
                return _this;
            }
            Object.defineProperty(SpriteText.prototype, "textAsset", {
                get: function () {
                    return this._text;
                },
                enumerable: true,
                configurable: true
            });
            return SpriteText;
        }(Modules.Sprite));
        Modules.SpriteText = SpriteText;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Stage = (function (_super) {
            __extends(Stage, _super);
            function Stage(x, y, p, n) {
                return _super.call(this, x, y, p, n) || this;
            }
            Stage.prototype.initDisplayEvents = function () {
                var dI = Dev.Enum.DisplayListener;
                this.game.on(dI.OrientationChanged, this.onOrientationChanged.bind(this));
            };
            Stage.prototype.onOrientationChanged = function (value) {
                switch (value) {
                    case Dev.Enum.Orientation.Landscape:
                        this.setVisualLandscape();
                        break;
                    case Dev.Enum.Orientation.Portrait:
                        this.setVisualPortrait();
                        break;
                }
            };
            return Stage;
        }(Modules.Container));
        Modules.Stage = Stage;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var StatElement = (function () {
            function StatElement() {
                var stats = new Stats();
                document.body.appendChild(stats.domElement);
                function animate() {
                    var time = performance.now() / 1000;
                    stats.begin();
                    stats.end();
                    requestAnimationFrame(animate);
                }
                animate();
            }
            return StatElement;
        }());
        Modules.StatElement = StatElement;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Text = (function (_super) {
            __extends(Text, _super);
            function Text(x, y, c, p, w, h) {
                var _this = _super.call(this, c.text, c.textStyle) || this;
                if (c.name)
                    _this.name = c.name;
                w && (_this.width = w);
                h && (_this.height = h);
                _this.position.set(x, y);
                _this.anchor.set(.5, .5);
                p.addChild(_this);
                _this.setAnchor(c.anchor);
                return _this;
            }
            Text.prototype.setTextConfig = function (config) {
                this.style = new PIXI.TextStyle(config.textStyle);
                this.text = config.text;
            };
            Text.prototype.setAnchor = function (anchor) {
                if (anchor != null) {
                    switch (anchor) {
                        case Core.Enum.Anchor.UpLeft:
                            this.anchor.set(0, 0);
                            break;
                        case Core.Enum.Anchor.UpCenter:
                            this.anchor.set(0.5, 0);
                            break;
                        case Core.Enum.Anchor.UpRight:
                            this.anchor.set(1, 0);
                            break;
                        case Core.Enum.Anchor.MiddleLeft:
                            this.anchor.set(0, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleCenter:
                            this.anchor.set(0.5, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleRight:
                            this.anchor.set(1, 0.5);
                            break;
                        case Core.Enum.Anchor.DownLeft:
                            this.anchor.set(0, 1);
                            break;
                        case Core.Enum.Anchor.DownCenter:
                            this.anchor.set(0.5, 1);
                            break;
                        case Core.Enum.Anchor.DownRight:
                            this.anchor.set(1, 1);
                            break;
                    }
                }
                else {
                    this.anchor.set(0.5, 0.5);
                }
            };
            return Text;
        }(PIXI.Text));
        Modules.Text = Text;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Text2d = (function (_super) {
            __extends(Text2d, _super);
            function Text2d(x, y, z, w, h, c, p) {
                var _this = _super.call(this, c.text, c.textStyle) || this;
                if (c.name)
                    _this.name = c.name;
                w && (_this.width = w);
                h && (_this.height = h);
                _this.position.set(x, y, z);
                _this.anchor.set(.5, .5);
                p && p.addChild(_this);
                _this.setAnchor(c.anchor);
                return _this;
            }
            Text2d.prototype.setTextConfig = function (config) {
                this.style = new PIXI.TextStyle(config.textStyle);
                this.text = config.text;
            };
            Text2d.prototype.setAnchor = function (anchor) {
                if (anchor != null) {
                    switch (anchor) {
                        case Core.Enum.Anchor.UpLeft:
                            this.anchor.set(0, 0);
                            break;
                        case Core.Enum.Anchor.UpCenter:
                            this.anchor.set(0.5, 0);
                            break;
                        case Core.Enum.Anchor.UpRight:
                            this.anchor.set(1, 0);
                            break;
                        case Core.Enum.Anchor.MiddleLeft:
                            this.anchor.set(0, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleCenter:
                            this.anchor.set(0.5, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleRight:
                            this.anchor.set(1, 0.5);
                            break;
                        case Core.Enum.Anchor.DownLeft:
                            this.anchor.set(0, 1);
                            break;
                        case Core.Enum.Anchor.DownCenter:
                            this.anchor.set(0.5, 1);
                            break;
                        case Core.Enum.Anchor.DownRight:
                            this.anchor.set(1, 1);
                            break;
                    }
                }
                else {
                    this.anchor.set(0.5, 0.5);
                }
            };
            return Text2d;
        }(PIXI.projection.Text2d));
        Modules.Text2d = Text2d;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Dev;
(function (Dev) {
    var Enum;
    (function (Enum) {
        var AnimationStateType;
        (function (AnimationStateType) {
            AnimationStateType["AnimationPlaying"] = "AnimationPlaying";
            AnimationStateType["AnimationStopped"] = "AnimationStopped";
        })(AnimationStateType = Enum.AnimationStateType || (Enum.AnimationStateType = {}));
        var AnimListener;
        (function (AnimListener) {
            AnimListener["AnimStopped"] = "AnimStopped";
            AnimListener["MatchSymbolWin"] = "MatchSymbolWin";
            AnimListener["LoopMatchSymbolWin"] = "LoopMatchSymbolWin";
            AnimListener["PlayNextAnimation"] = "PlayNextAnimation";
            AnimListener["SortScenarioAnimation"] = "SortScenarioAnimation";
        })(AnimListener = Enum.AnimListener || (Enum.AnimListener = {}));
        ;
        var AnimNames;
        (function (AnimNames) {
            AnimNames["MatchFrame"] = "matchAnim/";
        })(AnimNames = Enum.AnimNames || (Enum.AnimNames = {}));
    })(Enum = Dev.Enum || (Dev.Enum = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Config;
    (function (Config) {
        var Listener = Dev.Enum.AnimListener;
        var AnimConfig = (function () {
            function AnimConfig() {
            }
            AnimConfig.AnimationSort = [
                Listener.MatchSymbolWin,
                Listener.LoopMatchSymbolWin
            ];
            AnimConfig.SymbolAnimation = {};
            AnimConfig.Animation = {
                ease: {
                    logoScale: "bounce.out",
                    logoAlpha: "bounce.out",
                    boxFillsAlpha: "power1.inOut",
                    bgCurrentSwitch: "power0",
                    bgNextSwitch: "power0",
                    bgIdle: "sine.inOut",
                    bgIdleBubble: "power0"
                },
                duration: {
                    logoScale: .75,
                    logoAlpha: .75,
                    boxFillsAlpha: .25,
                    bgCurrentSwitch: .25,
                    bgNextSwitch: .25,
                    bgIdle: .75,
                    bgIdleRandTimeMin: 5,
                    bgIdleRandTimeMax: 10,
                },
                speed: {
                    boxFillsOffset: .35
                }
            };
            return AnimConfig;
        }());
        Config.AnimConfig = AnimConfig;
    })(Config = Dev.Config || (Dev.Config = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Enum;
    (function (Enum) {
        var ResourceListener;
        (function (ResourceListener) {
            ResourceListener["AssetLoadCompleted"] = "AssetLoadCompleted";
            ResourceListener["AssetLoading"] = "AssetLoading";
            ResourceListener["AddTextures"] = "AddTextures";
            ResourceListener["AddSounds"] = "AddSounds";
            ResourceListener["AddSpines"] = "AddSpines";
            ResourceListener["AddWebFonts"] = "AddWebFonts";
            ResourceListener["AddPreTextures"] = "AddPreTextures";
            ResourceListener["AssetPreLoadCompleted"] = "AssetPreLoadCompleted";
        })(ResourceListener = Enum.ResourceListener || (Enum.ResourceListener = {}));
        var SpineAnimation;
        (function (SpineAnimation) {
        })(SpineAnimation = Enum.SpineAnimation || (Enum.SpineAnimation = {}));
        var WebFont;
        (function (WebFont) {
            WebFont["LuckiestGuy"] = "Luckiest Guy";
            WebFont["BOB"] = "BoB";
            WebFont["FontUrl"] = "assets/fonts/stylesheet.css";
        })(WebFont = Enum.WebFont || (Enum.WebFont = {}));
        var PreTexture;
        (function (PreTexture) {
            PreTexture["Logo"] = "assets/gfx/Background/logo.png";
        })(PreTexture = Enum.PreTexture || (Enum.PreTexture = {}));
        var Texture;
        (function (Texture) {
            Texture["SevenSymbol"] = "assets/gfx/Symbols/7.png";
            Texture["BarSymbol"] = "assets/gfx/Symbols/BAR.png";
            Texture["Bar2xSymbol"] = "assets/gfx/Symbols/2xBAR.png";
            Texture["Bar3xSymbol"] = "assets/gfx/Symbols/3xBAR.png";
            Texture["CherrySymbol"] = "assets/gfx/Symbols/Cherry.png";
            Texture["SpinOut"] = "assets/gfx/Buttons/Spin.png";
            Texture["SpinOver"] = "assets/gfx/Buttons/SpinOver.png";
            Texture["SpinDisabled"] = "assets/gfx/Buttons/SpinDisabled.png";
            Texture["StopOut"] = "assets/gfx/Buttons/SpinStop.png";
            Texture["StopOver"] = "assets/gfx/Buttons/SpinStopOver.png";
            Texture["StopDisabled"] = "assets/gfx/Buttons/SpinStopDisabled.png";
            Texture["Bg"] = "assets/gfx/Background/bg.jpg";
            Texture["UIRefBg"] = "assets/gfx/Background/ui_ref.png";
            Texture["Frame"] = "assets/gfx/Background/frame.png";
        })(Texture = Enum.Texture || (Enum.Texture = {}));
    })(Enum = Dev.Enum || (Dev.Enum = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Config;
    (function (Config) {
        var Shape = Core.Enum.Shape;
        var Texture = Dev.Enum.Texture;
        var PreTexture = Dev.Enum.PreTexture;
        var AssetConfig = (function () {
            function AssetConfig() {
            }
            AssetConfig.ResourceManager = Core.Managers.ResourceManager.Instance;
            AssetConfig.StageRect = {
                shape: Shape.Rectangle,
                name: "StageBg",
                fill: 0x00000,
                alpha: 0
            };
            AssetConfig.SpinButton = {
                frames: {
                    out: Texture.SpinOut,
                    over: Texture.SpinOver,
                    down: Texture.SpinOver,
                    disabled: Texture.SpinDisabled
                }
            };
            AssetConfig.StopButton = {
                frames: {
                    out: Texture.StopOut,
                    over: Texture.StopOver,
                    down: Texture.StopOver,
                    disabled: Texture.StopDisabled
                }
            };
            AssetConfig.MenuButton = {
                frames: {
                    out: "home_out",
                    over: "home_over",
                    down: "home_down",
                    disabled: "home_disabled"
                },
                name: "Menu Button"
            };
            AssetConfig.GeneralTextStyle = new PIXI.TextStyle({
                fontFamily: "Montserrat, sans-serif",
                fontSize: "16px",
                fontWeight: "bold",
                fill: "#d08f38",
                stroke: 0x000000,
                strokeThickness: 3,
                align: "center"
            });
            AssetConfig.GeneralBoldTextStyle = new PIXI.TextStyle({
                fontFamily: "Montserrat, sans-serif",
                fontSize: "22px",
                fontWeight: "bold",
                fill: "#ffffff",
                stroke: 0x000000,
                strokeThickness: 3,
                align: "center"
            });
            AssetConfig.GenericText = {
                text: "Generic Text",
                textStyle: AssetConfig.GeneralTextStyle,
                name: "Generic Text"
            };
            AssetConfig.WinAmountTextStyle = new PIXI.TextStyle({
                fontFamily: Dev.Enum.WebFont.LuckiestGuy,
                fontSize: "75px",
                fontWeight: "bold",
                fill: 0xe37ce9,
                stroke: 0x00000,
                strokeThickness: 5,
                align: "center"
            });
            AssetConfig.WinAmountText = {
                text: "",
                textStyle: AssetConfig.WinAmountTextStyle,
                name: "Win Amount"
            };
            AssetConfig.GenericBoldText = {
                text: "Generic Bold Text",
                textStyle: AssetConfig.GeneralBoldTextStyle,
                name: "Generic Text"
            };
            AssetConfig.Bg = {
                frame: Texture.Bg,
                name: "Background"
            };
            AssetConfig.UIRefBg = {
                frame: Texture.UIRefBg,
                name: "UıRefBg"
            };
            AssetConfig.Frame = {
                frame: Texture.Frame,
                name: "Frame"
            };
            AssetConfig.Logo = {
                frame: PreTexture.Logo,
                name: "Logo"
            };
            AssetConfig.LoadingCircleBg = {
                shape: Shape.RoundRect,
                name: "LoadingCircle",
                radius: 10,
                fill: 0xe37ce9
            };
            AssetConfig.SlotWinLine = {
                shape: Shape.Line,
                name: "SlotWinline",
                fill: 0xb60000
            };
            AssetConfig.LoadingCircleFill = {
                shape: Shape.RoundRect,
                name: "LoadingCircle",
                radius: 10,
                fill: 0x24d2fe
            };
            AssetConfig.PopupRect = {
                shape: Shape.Rectangle,
                name: "PopupBg",
                fill: 0x00000,
                alpha: 0
            };
            AssetConfig.GeneralReelMask = {
                shape: Shape.Rectangle,
                name: "GeneralReelMask",
                fill: 0x00000,
                alpha: 0
            };
            AssetConfig.FrameGraphic = {
                shape: Shape.RoundRect,
                name: "Frame",
                radius: 5,
                fill: 0x644d26,
                alpha: 0.5
            };
            AssetConfig.LoadingBg = {
                shape: Shape.Rectangle,
                name: "LoadingBg",
                fill: 0x00000,
                alpha: 0
            };
            return AssetConfig;
        }());
        Config.AssetConfig = AssetConfig;
    })(Config = Dev.Config || (Dev.Config = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Enum;
    (function (Enum) {
        var Listeners;
        (function (Listeners) {
            Listeners["OnSpinBarAction"] = "OnSpinBarAction";
            Listeners["OnSpinMachineAction"] = "OnSpinMachineAction";
            Listeners["OnWinLinesAction"] = "OnWinLinesAction";
        })(Listeners = Enum.Listeners || (Enum.Listeners = {}));
        var SpinAction;
        (function (SpinAction) {
            SpinAction["StartSpin"] = "StartSpin";
            SpinAction["StopSpin"] = "StopSpin";
            SpinAction["SkipSpin"] = "SkipSpin";
            SpinAction["QuickSpin"] = "QuickSpin";
            SpinAction["ForceSpin"] = "ForceSpin";
        })(SpinAction = Enum.SpinAction || (Enum.SpinAction = {}));
        var SlotAnimState;
        (function (SlotAnimState) {
            SlotAnimState["MatchIconFinished"] = "MatchIconAnimFinished";
            SlotAnimState["SliderBarFinished"] = "SliderBarAnimFinished";
            SlotAnimState["MatchSymbolWinFinished"] = "MatchSymbolWinFinished";
            SlotAnimState["WinLineStarted"] = "WinLineFinished";
            SlotAnimState["MatchSymbolWinStarted"] = "MatchSymbolWinStarted";
            SlotAnimState["SpinStarted"] = "SpinStarted";
            SlotAnimState["SpinCompleted"] = "SpinCompleted";
            SlotAnimState["SpinStopped"] = "SpinStopped";
            SlotAnimState["SpinSkipped"] = "SpinSkipped";
            SlotAnimState["SpinQuicked"] = "SpinQuicked";
            SlotAnimState["SpinForceStopped"] = "SpinForceStopped";
            SlotAnimState["ReelSpinCompleted"] = "ReelSpinCompleted";
        })(SlotAnimState = Enum.SlotAnimState || (Enum.SlotAnimState = {}));
        var SpinButtonState;
        (function (SpinButtonState) {
            SpinButtonState["Normal"] = "Normal";
            SpinButtonState["Quick"] = "Quick";
            SpinButtonState["Stop"] = "Stop";
            SpinButtonState["Auto"] = "Auto";
            SpinButtonState["Skip"] = "Skip";
        })(SpinButtonState = Enum.SpinButtonState || (Enum.SpinButtonState = {}));
        var SpinMode;
        (function (SpinMode) {
            SpinMode["FreeSpin"] = "FreeSpin";
            SpinMode["NormalSpin"] = "NormalSpin";
        })(SpinMode = Enum.SpinMode || (Enum.SpinMode = {}));
        var MachineType;
        (function (MachineType) {
            MachineType["Reel"] = "reel";
        })(MachineType = Enum.MachineType || (Enum.MachineType = {}));
        var WinlineType;
        (function (WinlineType) {
            WinlineType["LinearAnimation"] = "LinearAnimation";
            WinlineType["FadeIn"] = "NoAnimation";
        })(WinlineType = Enum.WinlineType || (Enum.WinlineType = {}));
        var WinType;
        (function (WinType) {
            WinType["BigWin"] = "bigWin";
            WinType["SuperWin"] = "superWin";
            WinType["MegaWin"] = "megaWin";
            WinType["SymbolWin"] = "symbolWin";
            WinType["FreeSpinStartWin"] = "freeSpinWin";
        })(WinType = Enum.WinType || (Enum.WinType = {}));
        var LineType;
        (function (LineType) {
            LineType[LineType["top"] = 0] = "top";
            LineType[LineType["center"] = 1] = "center";
            LineType[LineType["bottom"] = 2] = "bottom";
        })(LineType = Enum.LineType || (Enum.LineType = {}));
        var WinAnimationType;
        (function (WinAnimationType) {
            WinAnimationType["CoinThrow"] = "CoinThrow";
            WinAnimationType["CoinScaleUp"] = "CoinScaleUp";
            WinAnimationType["FadeInOut"] = "Default";
        })(WinAnimationType = Enum.WinAnimationType || (Enum.WinAnimationType = {}));
    })(Enum = Dev.Enum || (Dev.Enum = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Enum;
    (function (Enum) {
        var SlotSymbol;
        (function (SlotSymbol) {
            SlotSymbol[SlotSymbol["SevenSymbol"] = 0] = "SevenSymbol";
            SlotSymbol[SlotSymbol["BarSymbol"] = 1] = "BarSymbol";
            SlotSymbol[SlotSymbol["Bar2xSymbol"] = 2] = "Bar2xSymbol";
            SlotSymbol[SlotSymbol["Bar3xSymbol"] = 3] = "Bar3xSymbol";
            SlotSymbol[SlotSymbol["CherrySymbol"] = 4] = "CherrySymbol";
        })(SlotSymbol = Enum.SlotSymbol || (Enum.SlotSymbol = {}));
        var DataListener;
        (function (DataListener) {
            DataListener["error"] = "error";
            DataListener["freeSpin"] = "freeSpin";
            DataListener["spin"] = "spin";
            DataListener["reSpin"] = "reSpin";
            DataListener["bonus"] = "bonus";
            DataListener["gamble"] = "gamble";
            DataListener["gambleSelected"] = "gambleSelected";
            DataListener["takeWin"] = "takeWin";
            DataListener["jackpot"] = "jackpot";
            DataListener["history"] = "history";
            DataListener["message"] = "message";
            DataListener["fakeSymbol"] = "fakeSymbol";
            DataListener["randomSymbol"] = "randomSymbol";
            DataListener["updateBalance"] = "updateBalance";
        })(DataListener = Enum.DataListener || (Enum.DataListener = {}));
        ;
    })(Enum = Dev.Enum || (Dev.Enum = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Config;
    (function (Config) {
        var DataConfig = (function () {
            function DataConfig() {
            }
            DataConfig.PayoutData = [
                {
                    combination: [
                        { count: 3, symbol: Dev.Enum.SlotSymbol.CherrySymbol }
                    ],
                    payout: { coins: 2000, cents: 2000 },
                    lineIndex: Dev.Enum.LineType.top
                },
                {
                    combination: [
                        { count: 3, symbol: Dev.Enum.SlotSymbol.SevenSymbol }
                    ],
                    payout: { coins: 150, cents: 150 },
                    lineIndex: Dev.Enum.LineType.top
                },
                {
                    combination: [
                        { count: 3, symbol: Dev.Enum.SlotSymbol.BarSymbol }
                    ],
                    payout: { coins: 10, cents: 10 },
                    lineIndex: Dev.Enum.LineType.top
                },
                {
                    combination: [
                        { count: 3, symbol: Dev.Enum.SlotSymbol.Bar3xSymbol }
                    ],
                    payout: { coins: 50, cents: 50 },
                    lineIndex: Dev.Enum.LineType.top
                },
                {
                    combination: [
                        { count: 1, symbol: Dev.Enum.SlotSymbol.SevenSymbol },
                        { count: 1, symbol: Dev.Enum.SlotSymbol.CherrySymbol }
                    ],
                    payout: { coins: 75, cents: 75 },
                    lineIndex: Dev.Enum.LineType.top
                },
                {
                    combination: [
                        { count: 3, symbol: Dev.Enum.SlotSymbol.Bar2xSymbol }
                    ],
                    payout: { coins: 20, cents: 20 },
                    lineIndex: Dev.Enum.LineType.top
                },
                {
                    combination: [
                        { count: 1, symbol: Dev.Enum.SlotSymbol.BarSymbol }
                    ],
                    payout: { coins: 5, cents: 5 },
                    lineIndex: Dev.Enum.LineType.top
                },
                {
                    combination: [
                        { count: 3, symbol: Dev.Enum.SlotSymbol.CherrySymbol }
                    ],
                    payout: { coins: 1000, cents: 1000 },
                    lineIndex: Dev.Enum.LineType.center
                },
                {
                    combination: [
                        { count: 3, symbol: Dev.Enum.SlotSymbol.SevenSymbol }
                    ],
                    payout: { coins: 150, cents: 150 },
                    lineIndex: Dev.Enum.LineType.center
                }, {
                    combination: [
                        { count: 3, symbol: Dev.Enum.SlotSymbol.Bar3xSymbol }
                    ],
                    payout: { coins: 50, cents: 50 },
                    lineIndex: Dev.Enum.LineType.center
                }, {
                    combination: [
                        { count: 3, symbol: Dev.Enum.SlotSymbol.Bar2xSymbol }
                    ],
                    payout: { coins: 20, cents: 20 },
                    lineIndex: Dev.Enum.LineType.center
                }, {
                    combination: [
                        { count: 3, symbol: Dev.Enum.SlotSymbol.BarSymbol }
                    ],
                    payout: { coins: 10, cents: 10 },
                    lineIndex: Dev.Enum.LineType.center
                },
                {
                    combination: [
                        { count: 1, symbol: Dev.Enum.SlotSymbol.BarSymbol }
                    ],
                    payout: { coins: 5, cents: 5 },
                    lineIndex: Dev.Enum.LineType.center
                },
                {
                    combination: [
                        { count: 3, symbol: Dev.Enum.SlotSymbol.CherrySymbol }
                    ],
                    payout: { coins: 4000, cents: 4000 },
                    lineIndex: Dev.Enum.LineType.bottom
                },
                {
                    combination: [
                        { count: 3, symbol: Dev.Enum.SlotSymbol.SevenSymbol }
                    ],
                    payout: { coins: 150, cents: 150 },
                    lineIndex: Dev.Enum.LineType.bottom
                },
                {
                    combination: [
                        { count: 1, symbol: Dev.Enum.SlotSymbol.CherrySymbol },
                        { count: 1, symbol: Dev.Enum.SlotSymbol.SevenSymbol }
                    ],
                    payout: { coins: 75, cents: 75 },
                    lineIndex: Dev.Enum.LineType.center
                },
                {
                    combination: [
                        { count: 1, symbol: Dev.Enum.SlotSymbol.CherrySymbol },
                        { count: 1, symbol: Dev.Enum.SlotSymbol.SevenSymbol }
                    ],
                    payout: { coins: 75, cents: 75 },
                    lineIndex: Dev.Enum.LineType.bottom
                },
                {
                    combination: [
                        { count: 3, symbol: Dev.Enum.SlotSymbol.Bar3xSymbol }
                    ],
                    payout: { coins: 50, cents: 50 },
                    lineIndex: Dev.Enum.LineType.bottom
                },
                {
                    combination: [
                        { count: 3, symbol: Dev.Enum.SlotSymbol.Bar2xSymbol }
                    ],
                    payout: { coins: 20, cents: 20 },
                    lineIndex: Dev.Enum.LineType.bottom
                },
                {
                    combination: [
                        { count: 3, symbol: Dev.Enum.SlotSymbol.BarSymbol }
                    ],
                    payout: { coins: 10, cents: 10 },
                    lineIndex: Dev.Enum.LineType.bottom
                },
                {
                    combination: [
                        { count: 1, symbol: Dev.Enum.SlotSymbol.BarSymbol }
                    ],
                    payout: { coins: 5, cents: 5 },
                    lineIndex: Dev.Enum.LineType.bottom
                }
            ];
            return DataConfig;
        }());
        Config.DataConfig = DataConfig;
    })(Config = Dev.Config || (Dev.Config = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Config;
    (function (Config) {
        var SlotConfig = (function () {
            function SlotConfig() {
            }
            SlotConfig.MachineType = Dev.Enum.MachineType.Reel;
            SlotConfig.ReelMachine = {
                reelMask: {
                    normalScale: { x: 600, y: 395, pY: 355, pX: Dev.Config.GameConfig.DisplayConfig.width / 2 },
                    frameScale: { x: 650, y: 500, pY: 342, pX: Dev.Config.GameConfig.DisplayConfig.width / 2 }
                },
                win: {},
                machine: {
                    type: Dev.Enum.MachineType.Reel,
                    reelMatrix: { row: 3, column: 3 }
                },
                symbol: {
                    scale: { x: 120, y: 125 },
                    offset: { x: 48, y: 5 },
                    winSpriteScale: { x: 50, y: 50 }
                },
                speed: {},
                duration: {
                    spinningDuration: 2,
                    reelStopOffset: .5,
                    fallDown: .5,
                    fallUp: .5,
                    fallDownReelOffset: .1,
                    fallUpReelOffset: .1,
                    spin: .5,
                    reelStop: .25,
                    forceReelStop: .5,
                    slider: .5,
                    matchIconFallDown: 1,
                    matchIconLeftSide: 1,
                    barFill: .8
                },
                count: {
                    yoyo: 25,
                    forceYoyo: -25,
                    fallDown: 25,
                    fallUp: 25,
                    fallDownEndPositionY: 590,
                    matchIconEndPositionY: -460
                },
                ease: {
                    fallDown: "backout(0.5)",
                    fallUp: "backout(0.5)",
                    winSymbolMatch: "power0",
                    slider: "power0",
                    barFill: "sine.out",
                    forceReelStop: "backout(0.5)",
                    reelStop: "sine.out",
                    spin: "power0"
                },
                winLine: {
                    winLinesPath: [
                        [
                            { row: 0, column: 0, thickness: 8 },
                            { row: 0, column: 1, thickness: 9.75 },
                            { row: 0, column: 2, thickness: 9.75 }
                        ],
                        [
                            { row: 1, column: 0, thickness: 8 },
                            { row: 1, column: 1, thickness: 9.75 },
                            { row: 1, column: 2, thickness: 9.75 }
                        ],
                        [
                            { row: 2, column: 0, thickness: 8 },
                            { row: 2, column: 1, thickness: 9.75 },
                            { row: 2, column: 2, thickness: 9.75 }
                        ]
                    ],
                    type: Dev.Enum.WinlineType.LinearAnimation
                },
                slotSymbols: [
                    {
                        frame: Dev.Enum.Texture.SevenSymbol,
                        name: "7Symbol",
                        tint: 0xffff00
                    },
                    {
                        frame: Dev.Enum.Texture.BarSymbol,
                        name: "BarSymbol",
                        tint: 0xffff00
                    },
                    {
                        frame: Dev.Enum.Texture.Bar2xSymbol,
                        name: "Bar2xSymbol",
                        tint: 0xffff00
                    },
                    {
                        frame: Dev.Enum.Texture.Bar3xSymbol,
                        name: "Bar3xSymbol",
                        tint: 0xffff00
                    },
                    {
                        frame: Dev.Enum.Texture.CherrySymbol,
                        name: "CherrySymbol",
                        tint: 0xffff00
                    }
                ]
            };
            return SlotConfig;
        }());
        Config.SlotConfig = SlotConfig;
    })(Config = Dev.Config || (Dev.Config = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Controller;
    (function (Controller) {
        var AnimationType = Dev.Enum.AnimListener;
        var AnimationManager = Core.Managers.AnimationManager;
        var AnimationController = (function (_super) {
            __extends(AnimationController, _super);
            function AnimationController() {
                var _this = _super.call(this) || this;
                _this.AnimListener = Dev.Enum.AnimListener;
                return _this;
            }
            AnimationController.prototype.init = function () {
            };
            AnimationController.prototype.initEvents = function () {
                var _this = this;
                var _loop_1 = function (i) {
                    AnimationManager.Instance.on(this_1.animations()[i], function () {
                        _this.emit(_this.animations()[i]);
                    });
                };
                var this_1 = this;
                for (var i = 0; i < this.animations().length; i++) {
                    _loop_1(i);
                }
                AnimationManager.Instance.on(Dev.Enum.AnimListener.AnimStopped, function () {
                    _this.emit(Dev.Enum.AnimListener.AnimStopped);
                });
                this.on(Dev.Enum.AnimListener.PlayNextAnimation, function () {
                    AnimationManager.Instance.playNextAnimations();
                });
                this.on(Dev.Enum.AnimListener.AnimStopped, function () {
                });
                this.on(Dev.Enum.AnimListener.SortScenarioAnimation, function (data) {
                    _this.sortScenarioAnimation(data);
                });
            };
            AnimationController.prototype.sortScenarioAnimation = function (data) {
                var animations = new Array();
                for (var i = 0; i < Dev.Config.AnimConfig.AnimationSort.length; i++) {
                    switch (Dev.Config.AnimConfig.AnimationSort[i]) {
                        case AnimationType.LoopMatchSymbolWin:
                            if (data.win != null)
                                animations.push(AnimationType.LoopMatchSymbolWin);
                            break;
                        case AnimationType.MatchSymbolWin:
                            if (data.win != null)
                                animations.push(AnimationType.MatchSymbolWin);
                            break;
                    }
                }
                AnimationManager.Instance.sortScenarioAnimation(animations);
            };
            AnimationController.prototype.deleteAnimations = function () {
                AnimationManager.Instance.deleteAnimations();
            };
            AnimationController.prototype.animations = function () {
                return Dev.Config.AnimConfig.AnimationSort;
            };
            return AnimationController;
        }(Core.Controller.AnimationController));
        Controller.AnimationController = AnimationController;
    })(Controller = Dev.Controller || (Dev.Controller = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Controller;
    (function (Controller) {
        var DataController = (function (_super) {
            __extends(DataController, _super);
            function DataController() {
                var _this = _super.call(this) || this;
                _this._data = {
                    balance: 500,
                    currencySymbol: "Euro",
                    earn: { coins: 0, cents: 0 },
                    totalEarn: { coins: 0, cents: 0 },
                    bet: { betLines: 10, betLevelValues: null, coinValues: null },
                    win: null,
                    symbolMatrix: [
                        [_this.randomSymbolIndex(), _this.randomSymbolIndex(), _this.randomSymbolIndex()],
                        [_this.randomSymbolIndex(), _this.randomSymbolIndex(), _this.randomSymbolIndex()],
                        [_this.randomSymbolIndex(), _this.randomSymbolIndex(), _this.randomSymbolIndex()]
                    ]
                };
                _this._developmentMode = false;
                return _this;
            }
            DataController.prototype.init = function () {
            };
            DataController.prototype.dataAction = function (data) {
                if (data.currentAction != undefined) {
                    switch (data.currentAction) {
                        case Dev.Enum.DataListener.fakeSymbol:
                            console.log("developmentMode on");
                            this._developmentMode = true;
                            this._data.symbolMatrix = data.symbolMatrix;
                            console.log("Symbol matrix = " + this._data.symbolMatrix);
                            console.log("Please spin");
                            this.fakePayCalculate();
                            break;
                        case Dev.Enum.DataListener.randomSymbol:
                            console.log("developmentMode false");
                            this._developmentMode = false;
                            console.log("Please spin");
                            this.fakePayCalculate();
                            break;
                        case Dev.Enum.DataListener.updateBalance:
                            console.log("Updated Balance");
                            console.log("Current Balance = " + data.balance);
                            this.emit(Dev.Enum.DataListener.updateBalance, data);
                            break;
                    }
                }
            };
            DataController.prototype.fakePayCalculate = function () {
                if (!this._developmentMode) {
                    this._data.symbolMatrix = [
                        [this.randomSymbolIndex(), this.randomSymbolIndex(), this.randomSymbolIndex()],
                        [this.randomSymbolIndex(), this.randomSymbolIndex(), this.randomSymbolIndex()],
                        [this.randomSymbolIndex(), this.randomSymbolIndex(), this.randomSymbolIndex()]
                    ];
                }
                var wins = new Array();
                var symbolCounts = new Array();
                for (var t = 0; t < 5; t++) {
                    var symbolCount = new Array();
                    symbolCounts.push(symbolCount);
                }
                for (var i = 0; i < this._data.symbolMatrix.length; i++) {
                    for (var t = 0; t < 5; t++)
                        symbolCounts[t].push(0);
                    for (var j = 0; j < this._data.symbolMatrix[i].length; j++) {
                        var symbolIndex = this._data.symbolMatrix[i][j];
                        symbolCounts[symbolIndex][i]++;
                    }
                }
                var payoutData = Dev.Config.DataConfig.PayoutData;
                for (var i = 0; i < payoutData.length; i++) {
                    if (this.checkCombination(payoutData, symbolCounts, i)) {
                        var win = {
                            winType: Dev.Enum.WinType.SymbolWin,
                            lineIndex: payoutData[i].lineIndex,
                            currency: payoutData[i].payout
                        };
                        wins.push(win);
                    }
                }
                if (wins.length != 0)
                    this._data.win = wins;
                else
                    this._data.win = null;
            };
            DataController.prototype.checkCombination = function (payoutData, symbolCounts, index) {
                var checks = new Array();
                for (var j = 0; j < payoutData[index].combination.length; j++) {
                    checks.push(false);
                    var symbolCount = symbolCounts[payoutData[index].combination[j].symbol];
                    if (payoutData[index].combination[j].count == symbolCount[payoutData[index].lineIndex]) {
                        checks[j] = true;
                    }
                }
                for (var m = 0; m < checks.length; m++) {
                    if (!checks[m])
                        return false;
                }
                return true;
            };
            DataController.prototype.randomSymbolIndex = function () {
                var random = 0 + Math.floor(Math.random() * Math.floor(5));
                return random;
            };
            DataController.prototype.initEvents = function () {
                var _this = this;
                window.addEventListener(Dev.Enum.DataListener.message, function (data) { _this.dataAction(data.data); });
            };
            Object.defineProperty(DataController.prototype, "data", {
                get: function () {
                    return this._data;
                },
                enumerable: true,
                configurable: true
            });
            return DataController;
        }(Core.Controller.DataController));
        Controller.DataController = DataController;
    })(Controller = Dev.Controller || (Dev.Controller = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Controller;
    (function (Controller) {
        var GameController = (function (_super) {
            __extends(GameController, _super);
            function GameController(data) {
                var _this = _super.call(this, data) || this;
                GameController.Instance = _this;
                return _this;
            }
            GameController.prototype.init = function () {
                this.resourceController = new Controller.ResourceController();
            };
            GameController.prototype.initResource = function () {
                var listener = Dev.Enum.ResourceListener;
                this.once(listener.AssetLoadCompleted, this.onAssetLoadedCompleted);
            };
            GameController.prototype.initEventData = function () {
                var _this = this;
                var dataListener = Object.keys(Dev.Enum.DataListener);
                var _loop_2 = function (i) {
                    var dataName = Dev.Enum.DataListener[dataListener[i]];
                    this_2.dataController.on(dataName, function (data) {
                        _this.emit(dataName, data);
                    });
                };
                var this_2 = this;
                for (var i = 0; i < dataListener.length; i++) {
                    _loop_2(i);
                }
            };
            GameController.prototype.initEventAnimation = function () {
                var _this = this;
                var _loop_3 = function (i) {
                    this_3.animationController.on(this_3.animationController.animations()[i], function () {
                        _this.emit(_this.animationController.animations()[i]);
                    });
                };
                var this_3 = this;
                for (var i = 0; i < this.animationController.animations().length; i++) {
                    _loop_3(i);
                }
                this.animationController.on(Dev.Enum.AnimListener.AnimStopped, function () {
                    _this.emit(Dev.Enum.AnimListener.AnimStopped);
                });
                this.on(Dev.Enum.AnimListener.PlayNextAnimation, function () {
                    _this.animationController.emit(Dev.Enum.AnimListener.PlayNextAnimation);
                });
                this.on(Dev.Enum.AnimListener.SortScenarioAnimation, function (data) {
                    _this.animationController.emit(Dev.Enum.AnimListener.SortScenarioAnimation, data);
                });
            };
            GameController.prototype.initEventsDisplay = function () {
                var display = Core.Managers.DisplayManager.instance;
                display.on(Dev.Enum.DisplayListener.OrientationChanged, this.onOrientationChanged.bind(this));
            };
            GameController.prototype.onOrientationChanged = function (value) {
                this.emit(Dev.Enum.DisplayListener.OrientationChanged, value);
            };
            GameController.prototype.onAssetLoadedCompleted = function () {
                this.animationController = new Controller.AnimationController();
                this.dataController = new Controller.DataController();
                this.initEventsDisplay();
                this.initEventData();
                this.initEventAnimation();
            };
            return GameController;
        }(Core.Controller.GameController));
        Controller.GameController = GameController;
    })(Controller = Dev.Controller || (Dev.Controller = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Controller;
    (function (Controller) {
        var MachineController = (function (_super) {
            __extends(MachineController, _super);
            function MachineController(container) {
                var _this = _super.call(this) || this;
                _this._slotMachine = {};
                _this._currentSpinButtonAction = Dev.Enum.SpinAction.StartSpin;
                _this._machineType = Dev.Config.SlotConfig.MachineType;
                _this._container = new Core.Modules.Container(0, 40, container, "SlotMachineContainer");
                _this._game = Controller.GameController.Instance;
                _this.initProperties();
                return _this;
            }
            MachineController.prototype.initProperties = function () {
                this.initSlotMachine(this._machineType);
                this._controlBar = new Dev.Modules.ControlBar(this._container);
                this._winLines = new Dev.Modules.Winlines(this._container);
                this.initEvents();
                this._controlBar.updateData(this._game.dataController.data, false);
                this._slotMachine[this._currentMachineType].updateSlotSymbolIndex(this._game.dataController.data.symbolMatrix);
            };
            MachineController.prototype.initEvents = function () {
                this.initSlotBarEvents();
                this.initSlotMachineEvents();
                this.initWinLinesEvents();
            };
            MachineController.prototype.initSlotMachine = function (type) {
                switch (this._machineType) {
                    case Dev.Enum.MachineType.Reel:
                        this._currentMachineType = Dev.Modules.SliderMachine.toString();
                        this._slotMachine[this._currentMachineType] = new Dev.Modules.SliderMachine(this._container);
                        break;
                }
            };
            MachineController.prototype.initSlotBarEvents = function () {
                var mL = Dev.Enum.Listeners;
                this._controlBar.on(mL.OnSpinBarAction, this.checkSlotBarAction.bind(this));
            };
            MachineController.prototype.initSlotMachineEvents = function () {
                var mL = Dev.Enum.Listeners;
                this._slotMachine[this._currentMachineType].on(mL.OnSpinMachineAction, this.checkSlotAnimState.bind(this));
            };
            MachineController.prototype.initWinLinesEvents = function () {
                var mL = Dev.Enum.Listeners;
                this._winLines.on(mL.OnWinLinesAction, this.onAnimationAction.bind(this));
                this._winLines.on(mL.OnWinLinesAction, this.checkSlotAnimState.bind(this));
            };
            MachineController.prototype.changeSlotMachineType = function (type) {
                this._machineType = type;
                this._slotMachine[this._currentMachineType].destroy();
                this.initSlotMachine(type);
            };
            MachineController.prototype.onDataAction = function (action, data) {
                switch (action) {
                    case Dev.Enum.DataListener.message:
                        this._currentSpinButtonAction = Dev.Enum.SpinAction.StopSpin;
                        this.checkSlotBarAction();
                        break;
                    case Dev.Enum.DataListener.updateBalance:
                        this._controlBar.updateCredit(data);
                        break;
                }
            };
            MachineController.prototype.onAnimationAction = function (action) {
                var machine = this._slotMachine[this._currentMachineType];
                var data = this._game.dataController.data;
                switch (action) {
                    case Dev.Enum.AnimListener.MatchSymbolWin:
                        this._winLines.playWinlineAnimation(machine.winLineInfo, data.win, 0, machine.matrixSymbols, .5, false);
                        break;
                    case Dev.Enum.AnimListener.LoopMatchSymbolWin:
                        this._winLines.playWinlineAnimation(machine.winLineInfo, data.win, 0, machine.matrixSymbols, .5, true);
                        break;
                    case Dev.Enum.AnimListener.PlayNextAnimation:
                        this.emit(Dev.Enum.AnimListener.PlayNextAnimation);
                        break;
                    case Dev.Enum.AnimListener.SortScenarioAnimation:
                        this.emit(Dev.Enum.AnimListener.SortScenarioAnimation, data);
                        break;
                    case Dev.Enum.AnimListener.AnimStopped:
                        this._controlBar.setButtonState(Dev.Enum.SpinButtonState.Normal, true);
                        this._currentSpinButtonAction = Dev.Enum.SpinAction.StartSpin;
                        break;
                }
            };
            MachineController.prototype.checkSlotBarAction = function () {
                var _this = this;
                var machine = this._slotMachine[this._currentMachineType];
                switch (this._currentSpinButtonAction) {
                    case Dev.Enum.SpinAction.StartSpin:
                        this._winLines.stopLoopAnimation();
                        this._game.dataController.fakePayCalculate();
                        this._slotMachine[this._currentMachineType].playSpinAnimation();
                        var spinningDuration = Dev.Config.SlotConfig.ReelMachine.duration.spinningDuration;
                        Core.Managers.TickerManager.instance.addTimeout("fakeData", spinningDuration, function () {
                            _this._slotMachine[_this._currentMachineType].updateSlotSymbolIndex(_this._game.dataController.data.symbolMatrix);
                            _this.onDataAction(Dev.Enum.DataListener.message, _this._game.dataController.data);
                        }, false);
                        this._controlBar.setButtonState(Dev.Enum.SpinButtonState.Stop, false);
                        this._currentSpinButtonAction = Dev.Enum.SpinAction.ForceSpin;
                        break;
                    case Dev.Enum.SpinAction.ForceSpin:
                        this._slotMachine[this._currentMachineType].playForceStopAnimation();
                        this._controlBar.setButtonState(Dev.Enum.SpinButtonState.Stop, true);
                        break;
                    case Dev.Enum.SpinAction.SkipSpin:
                        break;
                    case Dev.Enum.SpinAction.QuickSpin:
                        break;
                    case Dev.Enum.SpinAction.StopSpin:
                        this._slotMachine[this._currentMachineType].playStopAnimation();
                        this._controlBar.setButtonState(Dev.Enum.SpinButtonState.Stop, false);
                        break;
                }
            };
            MachineController.prototype.checkSlotAnimState = function (animationAction, data) {
                switch (animationAction) {
                    case Dev.Enum.SlotAnimState.SpinStarted:
                        this._controlBar.setButtonState(Dev.Enum.SpinButtonState.Stop, false);
                        this._game.dataController.data.balance--;
                        this._controlBar.updateCredit(this._game.dataController.data);
                        this._currentSpinButtonAction = Dev.Enum.SpinAction.ForceSpin;
                        this._controlBar.updateData(this._game.dataController.data, false);
                        break;
                    case Dev.Enum.SlotAnimState.SpinCompleted:
                        this._controlBar.setButtonState(Dev.Enum.SpinButtonState.Normal, true);
                        this._currentSpinButtonAction = Dev.Enum.SpinAction.StartSpin;
                        break;
                    case Dev.Enum.SlotAnimState.SpinQuicked:
                        break;
                    case Dev.Enum.SlotAnimState.SpinSkipped:
                        break;
                    case Dev.Enum.SlotAnimState.SpinForceStopped:
                        this._controlBar.setButtonState(Dev.Enum.SpinButtonState.Normal, true);
                        this._currentSpinButtonAction = Dev.Enum.SpinAction.StartSpin;
                        this.onAnimationAction(Dev.Enum.AnimListener.SortScenarioAnimation);
                        break;
                    case Dev.Enum.SlotAnimState.SpinStopped:
                        this.onAnimationAction(Dev.Enum.AnimListener.SortScenarioAnimation);
                        break;
                    case Dev.Enum.SlotAnimState.MatchSymbolWinFinished:
                        this._controlBar.setButtonState(Dev.Enum.SpinButtonState.Normal, true);
                        this._currentSpinButtonAction = Dev.Enum.SpinAction.StartSpin;
                        break;
                    case Dev.Enum.SlotAnimState.SliderBarFinished:
                        this.onAnimationAction(Dev.Enum.AnimListener.PlayNextAnimation);
                        break;
                    case Dev.Enum.SlotAnimState.MatchSymbolWinStarted:
                        this.onAnimationAction(Dev.Enum.AnimListener.PlayNextAnimation);
                        break;
                    case Dev.Enum.SlotAnimState.WinLineStarted:
                        this._controlBar.updateWin(data, true);
                        break;
                }
            };
            Object.defineProperty(MachineController.prototype, "slotMachine", {
                get: function () {
                    return this._slotMachine[this._currentMachineType];
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MachineController.prototype, "container", {
                get: function () {
                    return this._container;
                },
                enumerable: true,
                configurable: true
            });
            return MachineController;
        }(PIXI.utils.EventEmitter));
        Controller.MachineController = MachineController;
    })(Controller = Dev.Controller || (Dev.Controller = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Stages;
    (function (Stages) {
        var GameController = Dev.Controller.GameController;
        var LoaderStage = (function (_super) {
            __extends(LoaderStage, _super);
            function LoaderStage() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._loadingBorders = [];
                _this._loadingFills = [];
                return _this;
            }
            LoaderStage.prototype.init = function () {
                this.game = GameController.Instance;
                this._container = new Core.Modules.Container(0, 0, this, "Container");
                this.playLogoAnimation();
            };
            LoaderStage.prototype.playLogoAnimation = function () {
                var dR = Dev.Config.GameConfig.DisplayConfig;
                var aC = Dev.Config.AssetConfig;
                var aI = Dev.Config.AnimConfig.Animation;
                this._bg = new Core.Modules.Graphic(dR.width / 2, dR.height / 2, dR.width * 2, dR.height * 2, aC.LoadingBg, this._container);
                this._logo = new Core.Modules.Sprite(dR.width / 2, 300, aC.Logo, this._container);
                TweenMax.fromTo(this._logo.scale, aI.duration.logoScale, { x: 0, y: 0 }, { x: 1, y: 1, ease: aI.ease.logoScale });
                TweenMax.fromTo(this._logo, aI.duration.logoAlpha, { alpha: 0 }, { alpha: 1, ease: aI.ease.logoAlpha });
                for (var i = 0; i < 3; i++) {
                    this._loadingBorders.push(new Core.Modules.Graphic(dR.width / 2 - 50 + i * 50, dR.height / 2 + 220, 35, 35, aC.LoadingCircleBg, this._container));
                    this._loadingFills.push(new Core.Modules.Graphic(17.5, 17.5, 35, 35, aC.LoadingCircleFill, this._loadingBorders[i]));
                    this._loadingFills[i].alpha = 0;
                }
                this._sequence = new TimelineMax({ repeat: -1, delay: .75 });
                var offset = aI.speed.boxFillsOffset;
                this._sequence.to(this._loadingFills[0], aI.duration.boxFillsAlpha, { alpha: 1, ease: aI.ease.boxFillsAlpha });
                this._sequence.to(this._loadingFills[0], aI.duration.boxFillsAlpha, { alpha: 0, ease: aI.ease.boxFillsAlpha });
                this._sequence.to(this._loadingFills[1], aI.duration.boxFillsAlpha, { alpha: 1, ease: aI.ease.boxFillsAlpha }, "-=" + offset);
                this._sequence.to(this._loadingFills[1], aI.duration.boxFillsAlpha, { alpha: 0, ease: aI.ease.boxFillsAlpha });
                this._sequence.to(this._loadingFills[2], aI.duration.boxFillsAlpha, { alpha: 1, ease: aI.ease.boxFillsAlpha }, "-=" + offset);
                this._sequence.to(this._loadingFills[2], aI.duration.boxFillsAlpha, { alpha: 0, ease: aI.ease.boxFillsAlpha });
            };
            LoaderStage.prototype.initEvents = function () {
            };
            LoaderStage.prototype.setVisualPortrait = function () {
            };
            LoaderStage.prototype.setVisualLandscape = function () {
            };
            LoaderStage.prototype.dispose = function () {
                this._sequence.kill();
            };
            return LoaderStage;
        }(Core.Modules.Stage));
        Stages.LoaderStage = LoaderStage;
    })(Stages = Dev.Stages || (Dev.Stages = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Controller;
    (function (Controller) {
        var ResourceManager = Core.Managers.ResourceManager;
        var StageManager = Core.Managers.StageManager;
        var LoaderStage = Dev.Stages.LoaderStage;
        var ResourceController = (function (_super) {
            __extends(ResourceController, _super);
            function ResourceController() {
                return _super.call(this) || this;
            }
            ResourceController.prototype.init = function () {
            };
            ResourceController.prototype.initEvents = function () {
                var listener = Dev.Enum.ResourceListener;
                var resource = ResourceManager.Instance;
                resource.once(listener.AssetLoading, this.assetLoading.bind(this));
                resource.on(listener.AssetLoadCompleted, this.assetsLoadCompleted.bind(this));
                resource.once(listener.AssetPreLoadCompleted, resource.assetLoading.bind(resource));
                resource.assetPreLoading();
            };
            ResourceController.prototype.assetLoading = function () {
                StageManager.Instance.startStage(LoaderStage, true);
            };
            ResourceController.prototype.assetsLoadCompleted = function () {
                var listener = Dev.Enum.ResourceListener;
                var stage = StageManager.Instance;
                Core.Managers.TickerManager.instance.addTimeout("loaded", 2, function () {
                    stage.changeStage(Dev.Stages.MainStage, true);
                    Controller.GameController.Instance.emit(listener.AssetLoadCompleted);
                }, false);
            };
            return ResourceController;
        }(Core.Controller.ResourceController));
        Controller.ResourceController = ResourceController;
    })(Controller = Dev.Controller || (Dev.Controller = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Modules;
    (function (Modules) {
        var Background = (function (_super) {
            __extends(Background, _super);
            function Background(container) {
                var _this = _super.call(this) || this;
                _this._container = new Core.Modules.Container(0, 0, container, "BackgroundContainer");
                _this.initProperties();
                return _this;
            }
            Background.prototype.initProperties = function () {
                var r = Dev.Config.GameConfig.DisplayConfig;
                var aI = Dev.Config.AssetConfig;
                var a = Core.Enum.Anchor;
                this._bg = new Core.Modules.Sprite(r.width / 2, r.height / 2, aI.Bg, this._container, r.width, r.height);
            };
            return Background;
        }(PIXI.utils.EventEmitter));
        Modules.Background = Background;
    })(Modules = Dev.Modules || (Dev.Modules = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Modules;
    (function (Modules) {
        var ControlBar = (function (_super) {
            __extends(ControlBar, _super);
            function ControlBar(container) {
                var _this = _super.call(this) || this;
                _this._container = new Core.Modules.Container(0, -40, container, "SlotBarContainer");
                _this.initProperties();
                return _this;
            }
            ControlBar.prototype.initProperties = function () {
                var r = Dev.Config.GameConfig.DisplayConfig;
                var aI = Dev.Config.AssetConfig;
                this._refBg = new Core.Modules.Sprite(r.width / 2, r.height / 2, aI.UIRefBg, this._container, r.width, r.height);
                this._win = new Core.Modules.Text(r.width - 160, 668, aI.GenericText, this._container);
                this._winAmount = new Core.Modules.Text(r.width - 160, 700, aI.GenericBoldText, this._container);
                this._total = new Core.Modules.Text(160, 668, aI.GenericText, this._container);
                this._totalAmount = new Core.Modules.Text(160, 700, aI.GenericBoldText, this._container);
                this._balance = new Core.Modules.Text(120, 15, aI.GenericText, this._container);
                this._balanceAmount = new Core.Modules.Text(120, 35, aI.GenericBoldText, this._container);
                this._spinButton = new Core.Modules.Button(r.width / 2, 650, aI.SpinButton, this.onSpinAction.bind(this), this._container);
                this.setButtonState(Dev.Enum.SpinButtonState.Normal, true);
                this._win.text = "WIN";
                this._balance.text = "BALANCE";
                this._total.text = "TOTAL WIN";
                this._winAmount.text = "0";
                this._balanceAmount.text = "5000";
                this._totalAmount.text = "0";
            };
            ControlBar.prototype.updateData = function (data, animation) {
                this.updateCredit(data);
                this._winSum = { cents: 0, coins: 0 };
                this._data = data;
                this._winAmount.text = this.resolveFormat(this._winSum.cents, "suffix", false);
                this._totalAmount.text = this.resolveFormat(data.totalEarn.cents, "suffix", false);
                if (animation) {
                    TweenMax.fromTo(this._winAmount.scale, .35, { x: 1, y: 1 }, { x: 1.5, y: 1.5, yoyo: true, yoyoEase: "back.out(2)", repeat: 1 });
                    TweenMax.fromTo(this._totalAmount.scale, .35, { x: 1, y: 1 }, { x: 1.5, y: 1.5, yoyo: true, yoyoEase: "back.out(2)", repeat: 1 });
                }
            };
            ControlBar.prototype.updateWin = function (win, animation) {
                this._winSum.cents += win.cents;
                this._winSum.coins += win.coins;
                this._data.totalEarn.cents += win.cents;
                this._data.totalEarn.coins += win.coins;
                this._totalAmount.text = this.resolveFormat(this._data.totalEarn.cents, "suffix", false);
                this._winAmount.text = this.resolveFormat(this._winSum.cents, "suffix", false);
                if (animation) {
                    TweenMax.fromTo(this._winAmount.scale, .35, { x: 1, y: 1 }, { x: 1.5, y: 1.5, yoyo: true, yoyoEase: "back.out(2)", repeat: 1 });
                    TweenMax.fromTo(this._totalAmount.scale, .35, { x: 1, y: 1 }, { x: 1.5, y: 1.5, yoyo: true, yoyoEase: "back.out(2)", repeat: 1 });
                }
            };
            ControlBar.prototype.updateCredit = function (data) {
                this._balanceAmount.text = this.resolveFormat(data.balance, "suffix", true);
            };
            ControlBar.prototype.resolveFormat = function (amount, currencyPosition, coin) {
                if (coin) {
                    return amount + " COIN";
                }
                var dec = 2;
                var int = 3;
                var d = ".";
                var t = ",";
                var r = ("\\d(?=(\\d{" + (int || 3) + "})+" + (dec > 0 ? "\\D" : "$") + ")");
                var n = amount.toFixed(Math.max(0, ~~dec));
                var b = (d ? n.replace(".", d) : n).replace(new RegExp(r, "g"), "$&" + (t || ","));
                var p = currencyPosition;
                switch (p) {
                    case "suffix":
                        b = (b + " " + this._data.currencySymbol);
                        break;
                    case "prefix":
                        b = (this._data.currencySymbol + " " + b);
                        break;
                }
                return b;
            };
            ControlBar.prototype.onSpinAction = function () {
                var listener = Dev.Enum.Listeners;
                this.emit(listener.OnSpinBarAction);
            };
            ControlBar.prototype.setButtonState = function (buttonState, enabled) {
                this._spinButton.isEnabled = enabled;
                switch (buttonState) {
                    case Dev.Enum.SpinButtonState.Normal:
                        this._spinButton.changeButtonConfig(Dev.Config.AssetConfig.SpinButton);
                        break;
                    case Dev.Enum.SpinButtonState.Auto:
                        break;
                    case Dev.Enum.SpinButtonState.Quick:
                        break;
                    case Dev.Enum.SpinButtonState.Skip:
                        break;
                    case Dev.Enum.SpinButtonState.Stop:
                        this._spinButton.changeButtonConfig(Dev.Config.AssetConfig.StopButton);
                        break;
                }
            };
            return ControlBar;
        }(PIXI.utils.EventEmitter));
        Modules.ControlBar = ControlBar;
    })(Modules = Dev.Modules || (Dev.Modules = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Modules;
    (function (Modules) {
        var SpinDirection;
        (function (SpinDirection) {
            SpinDirection[SpinDirection["up"] = 0] = "up";
            SpinDirection[SpinDirection["down"] = 1] = "down";
            SpinDirection[SpinDirection["left"] = 2] = "left";
            SpinDirection[SpinDirection["right"] = 3] = "right";
            SpinDirection[SpinDirection["none"] = 4] = "none";
        })(SpinDirection = Modules.SpinDirection || (Modules.SpinDirection = {}));
        var Machine = (function (_super) {
            __extends(Machine, _super);
            function Machine(slotMachineConfig, container) {
                var _this = _super.call(this) || this;
                _this.matrixSymbols = new Array();
                _this.slotMachineConfig = slotMachineConfig;
                _this.container = new Core.Modules.Container(0, 0, container, "MachineContainer");
                _this.baseReelContainer = new Core.Modules.Container(0, -10, _this.container, "ReelContainer");
                _this.initProperties();
                return _this;
            }
            Machine.prototype.initProperties = function () {
                this.createReelContainers();
                this.init();
            };
            Machine.prototype.createReelContainers = function () {
                this.reelContainers = new Array();
                var column = this.slotMachineConfig.machine.reelMatrix.column;
                var dR = Dev.Config.GameConfig.DisplayConfig;
                var row = this.slotMachineConfig.machine.reelMatrix.row;
                for (var i = 0; i < column; i++) {
                    var sS = this.slotMachineConfig.symbol.scale;
                    var sO = this.slotMachineConfig.symbol.offset;
                    var pX = dR.width / 2 - (Math.floor(column / 2) - i) * (sO.x + sS.x);
                    var pY = dR.height / 2 - (Math.floor(row / 2) * (sS.y + sO.y));
                    if (column % 2 == 0) {
                        pX += sS.x / 2;
                    }
                    if (row % 2 == 0) {
                        pY += sS.y / 2;
                    }
                    this.reelContainerPositionY = pY;
                    var container = new Core.Modules.Container(pX, pY, this.baseReelContainer, "ReelContainer");
                    this.reelContainers.push(container);
                    this.createSlotSymbol(container, i);
                }
                this.matrixSymbols = this.transpose(this.matrixSymbols);
            };
            Machine.prototype.transpose = function (matrix) {
                var rows = matrix.length, cols = matrix[0].length;
                var grid = [];
                for (var j = 0; j < cols; j++) {
                    grid[j] = Array(rows);
                }
                for (var i = 0; i < rows; i++) {
                    for (var j = 0; j < cols; j++) {
                        grid[j][i] = matrix[i][j];
                    }
                }
                return grid;
            };
            Machine.prototype.createSlotSymbol = function (container, reelIndex) {
                var symbols = new Array();
                for (var i = -1; i < this.slotMachineConfig.machine.reelMatrix.row; i++) {
                    var random = 0 + Math.floor(Math.random() * Math.floor(this.slotMachineConfig.slotSymbols.length));
                    var symbol = new Modules.Symbol(this.slotMachineConfig, random, this.reelContainers[reelIndex], { r: i, c: reelIndex });
                    if (i >= 0)
                        symbols.push(symbol);
                }
                this.matrixSymbols.push(symbols);
            };
            Machine.prototype.updateSlotSymbolIndex = function (symbolMatrix) {
                for (var i = 0; i < this.matrixSymbols.length; i++) {
                    for (var j = 0; j < this.matrixSymbols[i].length; j++) {
                        this.matrixSymbols[i][j].index = symbolMatrix[i][j];
                    }
                }
            };
            Machine.prototype.playFallDownContainer = function (reelSpinMask) {
                var sC = this.slotMachineConfig;
                var t1 = this.reelContainers[0].position.y;
                var t2 = this.reelContainers[0].position.y + sC.count.fallDown;
                for (var i = 0; i < this.reelContainers.length; i++) {
                    var timeline = new TimelineMax({ delay: i * sC.duration.fallDownReelOffset });
                    this.reelContainers[i].position.y -= sC.count.fallDownEndPositionY;
                    timeline.to(this.reelContainers[i], sC.duration.fallDown, { ease: sC.ease.fallDown, y: t2 });
                    timeline.to(this.reelContainers[i], sC.duration.fallUp, { ease: sC.ease.fallUp, y: t1 });
                }
            };
            Machine.prototype.destroy = function () {
                this.dispose();
                this.container.destroy({ children: true, baseTexture: true });
            };
            return Machine;
        }(PIXI.utils.EventEmitter));
        Modules.Machine = Machine;
    })(Modules = Dev.Modules || (Dev.Modules = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Modules;
    (function (Modules) {
        var SliderMachine = (function (_super) {
            __extends(SliderMachine, _super);
            function SliderMachine(container) {
                return _super.call(this, Dev.Config.SlotConfig.ReelMachine, container) || this;
            }
            SliderMachine.prototype.init = function () {
                var r = Dev.Config.GameConfig.DisplayConfig;
                var aI = Dev.Config.AssetConfig;
                this.winLineInfo = Dev.Config.SlotConfig.ReelMachine.winLine;
                this.winInfo = Dev.Config.SlotConfig.ReelMachine.win;
                var frameScale = Dev.Config.SlotConfig.ReelMachine.reelMask.frameScale;
                var frameGraphic = new Core.Modules.Graphic(frameScale.pX, frameScale.pY, frameScale.x, frameScale.y, aI.FrameGraphic, this.container);
                this._frame = new Core.Modules.Sprite(frameScale.pX, frameScale.pY, aI.Frame, this.container, frameScale.x, frameScale.y);
                this.container.addChild(this.reelContainers[0].parent);
                this.initMask();
                this.playFallDownContainer(this._reelSpinMask);
                this.initEvents();
            };
            SliderMachine.prototype.initEvents = function () {
            };
            SliderMachine.prototype.initMask = function () {
                var r = Dev.Config.GameConfig.DisplayConfig;
                var aI = Dev.Config.AssetConfig;
                var maskScale = Dev.Config.SlotConfig.ReelMachine.reelMask.normalScale;
                this._reelSpinMask = new Core.Modules.Graphic(maskScale.pX, maskScale.pY, maskScale.x, maskScale.y, aI.GeneralReelMask, this.reelContainers[0].parent);
                this.reelContainers[0].parent.mask = this._reelSpinMask;
            };
            SliderMachine.prototype.playForceStopAnimation = function () {
                var _this = this;
                var y = Dev.Config.SlotConfig.ReelMachine.count.matchIconEndPositionY;
                var sI = Dev.Config.SlotConfig;
                var sM = sI.ReelMachine;
                var reelStopSpeed = sM.duration.reelStop;
                var reelStopOffsetDuration = sM.duration.fallDownReelOffset;
                var ease = sM.ease.reelStop;
                var yoyoCount = sM.count.yoyo;
                if (this._stopTimeline)
                    this._stopTimeline.kill();
                this._stopTimeline = new TimelineMax();
                this.on(Dev.Enum.SlotAnimState.ReelSpinCompleted, function (reelIndex) {
                    _this._playTimeline[reelIndex].restart();
                    _this._playTimeline[reelIndex].kill();
                    _this.reelContainers[reelIndex].filters = null;
                    TweenMax.to(_this.reelContainers[reelIndex], reelStopSpeed, {
                        ease: ease, y: "+=" + yoyoCount, yoyo: true, repeat: 1,
                        onComplete: function () {
                            if (reelIndex == _this.reelContainers.length - 1) {
                                _this.emit(Dev.Enum.Listeners.OnSpinMachineAction, Dev.Enum.SlotAnimState.SpinStopped);
                                _this.removeListener(Dev.Enum.SlotAnimState.ReelSpinCompleted);
                            }
                        }
                    });
                });
            };
            SliderMachine.prototype.playMatchAnimation = function (wins, index, offsetDuration) {
            };
            SliderMachine.prototype.playStopAnimation = function () {
                var _this = this;
                var sI = Dev.Config.SlotConfig;
                var sM = sI.ReelMachine;
                var reelStopSpeed = sM.duration.reelStop;
                var ease = sM.ease.reelStop;
                var yoyoCount = sM.count.yoyo;
                if (this._stopTimeline)
                    this._stopTimeline.kill();
                this._stopTimeline = new TimelineMax();
                var index = 0;
                this.on(Dev.Enum.SlotAnimState.ReelSpinCompleted, function (reelIndex) {
                    if (reelIndex == index) {
                        var reelStopOffsetDuration = sM.duration.reelStopOffset;
                        if (index == 0)
                            reelStopOffsetDuration = 0;
                        index++;
                        _this._stopTimeline.call(function () {
                            _this._playTimeline[reelIndex].restart();
                            _this._playTimeline[reelIndex].kill();
                            TweenMax.to(_this.reelContainers[reelIndex].children, sM.duration.reelStop, {
                                onStart: function () {
                                    _this.reelContainers[reelIndex].filters = null;
                                },
                                ease: sM.ease.reelStop,
                                y: "+=" + (sM.count.yoyo),
                                yoyo: true,
                                repeat: 1,
                                onComplete: function () {
                                    if (reelIndex == _this.reelContainers.length - 1) {
                                        _this.emit(Dev.Enum.Listeners.OnSpinMachineAction, Dev.Enum.SlotAnimState.SpinStopped);
                                        _this.removeListener(Dev.Enum.SlotAnimState.ReelSpinCompleted);
                                    }
                                }
                            });
                        }, null, "+=" + (reelStopOffsetDuration));
                    }
                });
            };
            SliderMachine.prototype.playLoopAnimation = function (wins, duration, loopingTime) {
                var _this = this;
                if (this._loopTimeline) {
                    this._loopTimeline.restart();
                    this._loopTimeline.kill();
                    Core.Managers.TickerManager.instance.removeTicker("Loop");
                }
                this._loopTimeline = new TimelineMax({ delay: duration, repeatDelay: loopingTime + 1, repeat: -1 });
                this._loopTimeline.call(function () {
                    _this.playMatchAnimation(wins, 0, duration);
                });
            };
            SliderMachine.prototype.stopLoopAnimation = function () {
                if (this._loopTimeline) {
                    this._loopTimeline.restart();
                    this._loopTimeline.kill();
                    for (var i = 0; i < this.matrixSymbols.length; i++) {
                        for (var j = 0; j < this.matrixSymbols[i].length; j++) {
                            this.matrixSymbols[i][j].tint = 0xffffff;
                        }
                    }
                }
            };
            SliderMachine.prototype.playSpinAnimation = function () {
                var _this = this;
                this.emit(Dev.Enum.Listeners.OnSpinMachineAction, Dev.Enum.SlotAnimState.SpinStarted);
                var sC = this.slotMachineConfig;
                var duration = sC.duration.spin;
                var moveY = sC.symbol.scale.y * (sC.machine.reelMatrix.row) + sC.symbol.offset.y * (sC.machine.reelMatrix.row - 1);
                this._playTimeline = [];
                var _loop_4 = function (i) {
                    var timeline = new TimelineMax({ repeat: -1, delay: i * sC.duration.fallUpReelOffset });
                    this_4.reelContainers[i].filters = [new PIXI.filters.BlurFilter(1)];
                    timeline.to(this_4.reelContainers[i].children, duration, {
                        ease: sC.ease.spin,
                        y: "+=" + (moveY + sC.symbol.scale.y),
                        modifiers: {
                            y: function (y) {
                                return y / (moveY) < 1 ? y : y % (moveY) - sC.symbol.scale.y;
                            }
                        },
                        onComplete: function () {
                            _this.emit(Dev.Enum.SlotAnimState.ReelSpinCompleted, i);
                        }
                    });
                    this_4._playTimeline.push(timeline);
                };
                var this_4 = this;
                for (var i = 0; i < this.reelContainers.length; i++) {
                    _loop_4(i);
                }
            };
            SliderMachine.prototype.playQuickSpinAnimation = function () {
            };
            SliderMachine.prototype.playSkippedAnimation = function () {
            };
            SliderMachine.prototype.dispose = function () {
            };
            return SliderMachine;
        }(Modules.Machine));
        Modules.SliderMachine = SliderMachine;
    })(Modules = Dev.Modules || (Dev.Modules = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Modules;
    (function (Modules) {
        var Symbol = (function (_super) {
            __extends(Symbol, _super);
            function Symbol(mI, sI, p, rM) {
                var _this = this;
                var offset = mI.symbol.offset;
                var scale = mI.symbol.scale;
                _this = _super.call(this, 0, (scale.y + offset.y) * (rM.r), mI.slotSymbols[sI], p, scale.x, scale.y) || this;
                _this._index = sI;
                _this._container = p;
                _this._machineInfo = mI;
                _this._symbolConfig = mI.slotSymbols[sI];
                _this._reelMatrix = rM;
                _this.initProperties();
                return _this;
            }
            Symbol.prototype.initProperties = function () {
            };
            Object.defineProperty(Symbol.prototype, "symbolConfig", {
                get: function () {
                    return this._symbolConfig;
                },
                set: function (config) {
                    this._symbolConfig = config;
                    var mI = this._machineInfo;
                    this.changeSprite(config.frame);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Symbol.prototype, "index", {
                get: function () {
                    return this._index;
                },
                set: function (index) {
                    this._index = index;
                    this.symbolConfig = this._machineInfo.slotSymbols[index];
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Symbol.prototype, "reelMatrix", {
                get: function () {
                    return this._reelMatrix;
                },
                enumerable: true,
                configurable: true
            });
            return Symbol;
        }(Core.Modules.Sprite));
        Modules.Symbol = Symbol;
    })(Modules = Dev.Modules || (Dev.Modules = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Modules;
    (function (Modules) {
        var Winlines = (function (_super) {
            __extends(Winlines, _super);
            function Winlines(container) {
                var _this = _super.call(this) || this;
                _this._winLines = new Array();
                _this._baseContainer = container;
                _this.initProperties();
                return _this;
            }
            Winlines.prototype.initProperties = function () {
                this._winLineAnimTimeline = new TimelineMax();
            };
            Winlines.prototype.playWinlineAnimation = function (wI, wS, index, mS, duration, loop) {
                var _this = this;
                var r = Dev.Config.GameConfig.DisplayConfig;
                var aI = Dev.Config.AssetConfig;
                var lineIndex = wS[index].lineIndex;
                var path = wI.winLinesPath[lineIndex];
                var line;
                this.stopLoopAnimation();
                this._container = new Core.Modules.Container(0, 0, this._baseContainer, "WinLinesContainer");
                this._winLines = new Array();
                if (loop == true) {
                    this.emit(Dev.Enum.Listeners.OnWinLinesAction, Dev.Enum.SlotAnimState.MatchSymbolWinFinished);
                }
                for (var j = 0; j < path.length - 1; j++) {
                    var currentRow = path[j].row;
                    var currentColumn = path[j].column;
                    var nextRow = path[j + 1].row;
                    var nextColumn = path[j + 1].column;
                    var width = mS[currentRow][currentColumn].parent.position.x;
                    var x = mS[currentRow][currentColumn].parent.position.x;
                    var y = mS[currentRow][currentColumn].getGlobalPosition().y - 15;
                    line = new Core.Modules.Graphic(x, y, path[j].thickness, null, Dev.Config.AssetConfig.SlotWinLine, this._container);
                    width -= mS[nextRow][nextColumn].parent.position.x;
                    width = Math.abs(width);
                    x = mS[nextRow][nextColumn].parent.position.x;
                    y = mS[nextRow][nextColumn].getGlobalPosition().y - mS[currentRow][currentColumn].getGlobalPosition().y;
                    y = currentRow == nextRow ? 0 : y;
                    line.drawLine(new PIXI.Point(x, y), width + path[j].thickness / 3.2);
                    this._winLines.push(line);
                }
                this._amount = new Core.Modules.Text(r.width / 2, r.height / 2, aI.WinAmountText, this._container);
                switch (wI.type) {
                    case Dev.Enum.WinlineType.LinearAnimation:
                        this._container.alpha = 1;
                        this._winLineAnimTimeline.fromTo(this._container, .5, { alpha: 0 }, { alpha: 1, sine: "power0" });
                        this._amount.text = wS[index].currency.cents.toString();
                        this._amount.position.y = 210 + lineIndex * 120;
                        break;
                    case Dev.Enum.WinlineType.FadeIn:
                        this._winLineAnimTimeline.fromTo(this._container, .5, { alpha: 0, sine: "power0" }, { alpha: 1 });
                        break;
                }
                if (loop == false)
                    this.emit(Dev.Enum.Listeners.OnWinLinesAction, Dev.Enum.SlotAnimState.WinLineStarted, wS[index].currency);
                this._winLineAnimTimeline.to(this._container, .5, { alpha: 0, yoyo: true, sine: "power0", delay: duration,
                    onStart: function () {
                    },
                    onComplete: function () {
                        if (index < wS.length - 1) {
                            index++;
                            if (loop == false)
                                _this.playWinlineAnimation(wI, wS, index, mS, duration, false);
                            if (loop)
                                _this.playWinlineAnimation(wI, wS, index, mS, duration, true);
                        }
                        else {
                            if (loop == false)
                                _this.emit(Dev.Enum.Listeners.OnWinLinesAction, Dev.Enum.AnimListener.PlayNextAnimation);
                            if (loop == true) {
                                _this.playWinlineAnimation(wI, wS, 0, mS, duration, true);
                            }
                        }
                    } });
            };
            Winlines.prototype.stopLoopAnimation = function () {
                if (this._winLineAnimTimeline) {
                    this._winLineAnimTimeline.restart();
                    this._winLineAnimTimeline.kill();
                    if (this._container) {
                        this._container.destroy({ children: true, baseTexture: false, texture: false });
                        this._container.alpha = 0;
                    }
                    this._winLineAnimTimeline = new TimelineMax();
                }
            };
            return Winlines;
        }(PIXI.utils.EventEmitter));
        Modules.Winlines = Winlines;
    })(Modules = Dev.Modules || (Dev.Modules = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Stages;
    (function (Stages) {
        var GameController = Dev.Controller.GameController;
        var DisplayManager = Core.Managers.DisplayManager;
        var AnimInfo = Dev.Config.AnimConfig;
        var MainStage = (function (_super) {
            __extends(MainStage, _super);
            function MainStage() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MainStage.prototype.init = function () {
                this.game = GameController.Instance;
                this._background = new Dev.Modules.Background(this);
                this._slotMachineController = new Dev.Controller.MachineController(this);
                this.onOrientationChanged(DisplayManager.instance.currentOrientation);
            };
            MainStage.prototype.initEvents = function () {
                this.initDisplayEvents();
                this.initAnimationEvents();
                this.initDataEvents();
            };
            MainStage.prototype.onAnimationAction = function (action) {
                switch (action) {
                    case Dev.Enum.AnimListener.MatchSymbolWin:
                        this._slotMachineController.onAnimationAction(action);
                        break;
                    case Dev.Enum.AnimListener.LoopMatchSymbolWin:
                        this._slotMachineController.onAnimationAction(action);
                        break;
                    case Dev.Enum.AnimListener.AnimStopped:
                        this._slotMachineController.onAnimationAction(action);
                        break;
                }
            };
            MainStage.prototype.onDataAction = function (action, data) {
                switch (action) {
                    case Dev.Enum.DataListener.message:
                        this.game.emit(Dev.Enum.AnimListener.SortScenarioAnimation, data);
                        break;
                }
                this._slotMachineController.onDataAction(action, data);
            };
            MainStage.prototype.initAnimationEvents = function () {
                var _this = this;
                var animSort = AnimInfo.AnimationSort;
                var aI = Dev.Enum.AnimListener;
                for (var i = 0; i < animSort.length; i++) {
                    this.game.on(animSort[i], this.onAnimationAction.bind(this, animSort[i]));
                }
                this.game.on(Dev.Enum.AnimListener.AnimStopped, function () {
                    _this._slotMachineController.onAnimationAction(Dev.Enum.AnimListener.AnimStopped);
                });
                this._slotMachineController.on(Dev.Enum.AnimListener.PlayNextAnimation, function () {
                    _this.game.emit(Dev.Enum.AnimListener.PlayNextAnimation);
                });
                this._slotMachineController.on(Dev.Enum.AnimListener.SortScenarioAnimation, function (data) {
                    _this.game.emit(Dev.Enum.AnimListener.SortScenarioAnimation, data);
                });
            };
            MainStage.prototype.initDataEvents = function () {
                var _this = this;
                var dataListener = Object.keys(Dev.Enum.DataListener);
                var _loop_5 = function (i) {
                    var dataName = Dev.Enum.DataListener[dataListener[i]];
                    this_5.game.on(dataName, function (data) {
                        _this.onDataAction(dataName, data);
                    });
                };
                var this_5 = this;
                for (var i = 0; i < dataListener.length; i++) {
                    _loop_5(i);
                }
            };
            MainStage.prototype.setVisualPortrait = function () {
            };
            MainStage.prototype.setVisualLandscape = function () {
            };
            MainStage.prototype.dispose = function () {
            };
            return MainStage;
        }(Core.Modules.Stage));
        Stages.MainStage = MainStage;
    })(Stages = Dev.Stages || (Dev.Stages = {}));
})(Dev || (Dev = {}));

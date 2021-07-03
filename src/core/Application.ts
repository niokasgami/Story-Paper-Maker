import {PIXI} from "../globals";
import {Utils} from "../Common";

/**
 * the Main class who initialize the pixi js canvas
 * @class Application
 */
class Application {

    /**
     * the pixi applications.
     * @type {PIXI.Application}
     * @private
     */
    private static _app: PIXI.Application;

    /**
     * the pixi applications
     * @returns {PIXI.Application}
     */
    public static get app(): PIXI.Application {
        return this._app;
    }

    /**
     * the pixi renderer
     * @returns {PIXI.Renderer | PIXI.AbstractRenderer}
     */
    public static get renderer(): PIXI.Renderer | PIXI.AbstractRenderer {
        return this._app.renderer;
    }

    /**
     * return the renderer type. can be either webgl or canvas
     * @type {string}
     */
    public static renderType = "webgl";

    /**
     * the screen width
     * @type {number}
     */
    public static width: number;

    /**
     * the screen height
     * @type {number}
     */
    public static height: number;


    constructor() {
        Utils.isStaticClass();
    }

    /**
     * initialize the engine
     */
    public static initialize() {
        this.checkWebglAvailability();
        this.width = 680;
        this.height = 680;
        this.createApplication();
    }

    public static checkWebglAvailability() {
        if (!PIXI.utils.isWebGLSupported()) {
            this.renderType = "canvas";
        }
        PIXI.utils.sayHello(this.renderType);
    }


    /**
     * set the stage where the game will run.
     * @param {PIXI.Container} stage
     */
    public static setStage(stage: PIXI.Container) {
        this._app.stage = stage;
    }

    /**
     * set the screen size
     * @param {number} width - the screen width
     * @param {number} height - the screen height
     */
    public static setScreenSize(width: number, height: number) {
        this.width = width;
        this.height = height;
        this._app.renderer.resize(this.width, this.height);
    }

    /**
     * create the pixi application and bind it to the canvas
     */
    public static createApplication() {
        this._app = new PIXI.Application({
            width: this.width,
            height: this.height
        });
        document.appendChild(this._app.view)
        this.setApplicationSetting();
    }

    /**
     * set the pixi application options.
     */
    public static setApplicationSetting() {
        const renderer = this._app.renderer;
        renderer.backgroundColor = 0xF2C3C1;
        renderer.view.style.position = "absolute";
        renderer.view.style.display = "block";
        renderer.view.style.right = "0%";
        renderer.view.style.top = "0%";
        renderer.resize(window.innerWidth, window.innerHeight);
    }

    /**
     * start the game loop
     */
    public static start() {
        this._app.start();
    }

    /**
     * stop the game loop
     */
    public static stop() {
        this._app.stop();
    }
}
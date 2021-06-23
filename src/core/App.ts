import * as PIXI from "pixi.js";
import {Utils} from "../Common";
import {Point} from "./Point";

/**
 * the Main class who initialize the pixi js canvas
 * @class App
 */
class App {

    private static _app: PIXI.Application;
    private static _canvas: HTMLCanvasElement;
    public static width: number;
    public static height: number;


    constructor() {
        Utils.isStaticClass();
    }

    /**
     * initialize the engine 
     */
    public static init(){

    }

    public static run(){

    }

    public static setStage(stage: PIXI.Container){
        this._app.stage = stage;
    }

    /**
     * set the screen size
     * @param {number} width - the screen width
     * @param {number} height - the screen height
     */
    public static setScreenSize(width: number, height: number){
        this.width = width;
        this.height = height;
    }

    /**
     * create the pixi application and bind it to the canvas
     */
    public static createApplication(){
        this._app = new PIXI.Application({
            width: this.width,
            height: this.height
        });
    }
}
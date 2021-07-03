import {Utils} from "../Common";
import * as PIXI from "pixi.js";


/// JUST IDEA

class ImageLoader {

    public static assets: Record<string, PIXI.Sprite> = {};
    constructor() {
        Utils.isStaticClass()
    }

    public static create(key: string, path : string){
        ImageLoader.assets[key] = PIXI.Sprite.from(path);
    }

    public static get(key: string): PIXI.Sprite {
        return ImageLoader.assets[key];
    }

}

const tile = ImageLoader.get("test");
tile.height = 10;

class Class extends PIXI.Container{
    constructor() {
        super();
        this.addChild(tile);
    }
}
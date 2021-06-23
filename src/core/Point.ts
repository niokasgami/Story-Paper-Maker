import * as PIXI from "pixi.js";


/**
 * the class who hold coordinates in x and y
 * @class Point
 */
class Point extends PIXI.Point {

    /**
     * the class who hold coordinates in x and y
     * @param {number} x - the x-axis coordinate
     * @param {number} y - the y-axis coordinate
     */
    constructor(x = 0, y = 0) {
        super(x, y);
    }
}

export {Point}
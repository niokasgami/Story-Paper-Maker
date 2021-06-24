import * as PIXI from "pixi.js";

//========================================================================================
// ASSETS
//========================================================================================

/**
 * the assets to load
 * @type {{path: string, key: string}[]}
 */
const assets = [
    {key: "dummy", path: "test/dummy.png"}
];

//========================================================================================

//========================================================================================
// create Applications
//========================================================================================
let type = "webgl";
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas";
}

PIXI.utils.sayHello(type);

let app = new PIXI.Application({
    width: 256,
    height: 256
});

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

//Changes the CSS elements of the pixi layout. Here's my personal preference, feel free to change it.
app.renderer.backgroundColor = 0xF2C3C1;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.view.style.right = "0%";
app.renderer.view.style.top = "0%";
app.renderer.resize(window.innerWidth, window.innerHeight);

//========================================================================================

//========================================================================================
// Create and load Loader
//========================================================================================

const Loader = new PIXI.Loader();

/**
 * load the assets.
 */
function loadAssets() {
    for (let i = 0; i < assets.length; i++) {
        Loader.add(assets[i].path);
        if (i >= assets.length) {
            Loader.load(setup);
        }
    }
}

function getAssets(key: string) {
    const index = findByKey(key);
    return Loader.resources[index];
}

function findByKey(key: string): string {
    for (let i = 0; i < assets.length; i++) {
        if (assets[i].key === key) {
            return assets[i].path;
        }
    }
}

//========================================================================================

//========================================================================================
// Setup the game
//========================================================================================

function setup() {
    startLoop();
    let sprite = new PIXI.Sprite(getAssets("dummy").texture);
}

function startLoop() {
    app.ticker.add(delta => update(delta));
}

function update(delta) {

}



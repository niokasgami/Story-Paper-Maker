/*
  this file was added for the purpose of fixing typescript errors with local library.
  quite the hassle. It's due to the fact that electron/browser does not support ambiant node modules.
  such as import * as PIXI from "pixi.js";

  Until a workaround is found this method will stay for libraries.
  It also preserved to help keep intelisenses.
 */

import {ELECTRON_TYPE, PIXI_TYPE} from "./references";

// @ts-ignore
import * as pixiRef from "../libs/pixi.js";

export const PIXI = pixiRef;
const electron = require("electron");

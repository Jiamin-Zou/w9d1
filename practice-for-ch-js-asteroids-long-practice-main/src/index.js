// import MovingObject from "./moving_object.js";

// window.MovingObject = MovingObject;

import Game from "./game.js";
import GameView from "./game_view.js";


const canvas = document.getElementById("game-canvas");
canvas.width = Game.DIM_X;
canvas.height = Game.DIM_Y;
const ctx = canvas.getContext("2d");

const gv = new GameView(ctx)

gv.start()
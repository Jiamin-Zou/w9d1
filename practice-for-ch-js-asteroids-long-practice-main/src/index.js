// import MovingObject from "./moving_object.js";

// window.MovingObject = MovingObject;

import Game from "./game.js";


const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

const ga = new Game();
ga.draw(ctx);
ga.moveObjects();
setInterval(() => { ga.draw(ctx); ga.moveObjects();},50) 

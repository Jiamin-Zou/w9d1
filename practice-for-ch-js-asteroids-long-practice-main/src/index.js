// import MovingObject from "./moving_object.js";

// window.MovingObject = MovingObject;

import Asteroid from "./asteroid.js";


const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

const mo = new Asteroid({ pos: [30, 30] });

  mo.draw(ctx);
//   setInterval(() => {mo.move(); mo.draw(ctx)},20)


import MovingObject from "./moving_object.js";

window.MovingObject = MovingObject;

const canvas = document.getElementById("game-canvas");
canvas.width = 600;
canvas.height = 600;
const ctx = canvas.getContext("2d");

// const mo = new MovingObject({
//     pos: [150, 150],
//     vel: [10, 10],
//     radius: 50,
//     color: "red"
//   });

//   mo.draw(ctx);
//   setInterval(() => {mo.move(); mo.draw(ctx)},20)


import Asteroid from "./asteroid.js";

class Game {
    static DIM_X = 1500;
    static DIM_Y = 900;
    static NUM_ASTEROIDS = 10;

    constructor(){
        this.asteroids = [];
        this.addAsteroids();
    }

    addAsteroids() {
        while (this.asteroids.length < Game.NUM_ASTEROIDS) {
            const position = this.randomPosition();
            const ast = new Asteroid({pos: position});
            this.asteroids.push(ast);
        }
    }

    draw(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        this.asteroids.forEach( asteroid => {
            asteroid.draw(ctx);
        })
    }
    
    moveObjects() {
        this.asteroids.forEach( asteroid => {
            asteroid.move();
        })

    }
  
    randomPosition() {
      const randX = Math.floor(Math.random() * Game.DIM_X);
      const randY = Math.floor(Math.random() * Game.DIM_Y);
      const randPos = [randX, randY];

      return randPos;
    }
  }

  export default Game;
import Asteroid from "./asteroid.js";
import Ship from "./ship.js";

class Game {
    static DIM_X = 1500;
    static DIM_Y = 900;
    static NUM_ASTEROIDS = 5;

    constructor(){
        this.asteroids = [];
        const position = this.randomPosition();
        this.ship = new Ship({pos: position, game: this})
        this.addAsteroids();
    }

    allObjects() {
        return this.asteroids.concat([this.ship]);
    }

    addAsteroids() {
        while (this.asteroids.length < Game.NUM_ASTEROIDS) {
            const position = this.randomPosition();
            const ast = new Asteroid({pos: position, game: this});
            this.asteroids.push(ast);
        }
    }

    draw(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        this.allObjects().forEach( obj => {
            obj.draw(ctx);
        })
    }
    
    moveObjects() {
        this.allObjects().forEach( obj => {
            obj.move();
        })
    }

    wrap(pos) {
        let x = pos[0];
        let y = pos[1];
        if (x < 0) { 
            x += Game.DIM_X;
        } else if (x > Game.DIM_X){
            x -= Game.DIM_X;
        }
        
        if (y < 0) { 
            y += Game.DIM_Y;
        } else if (y > Game.DIM_Y){
            y -= Game.DIM_Y;
        }

        return [x, y];
    }
    
    checkCollisions() {
        const allObj = this.allObjects();
        for (let i = 0; i < allObj.length - 1; i++) {
            for (let j = i + 1;  j < allObj.length; j++) {
                const obj1 = allObj[i];
                const obj2 = allObj[j];
                if ( obj1.isCollidedWith(obj2))  {
                    // alert("COLLISION")
                    const collision = obj1.collideWith(obj2);
                    if (collision) return;
                }
            }
        }
    }

    step() {
        this.moveObjects();
        this.checkCollisions();
    }

    remove(asteroid) {
        const idx = this.asteroids.indexOf(asteroid);
        this.asteroids.splice(idx, 1);
    }
  
    randomPosition() {
      const randX = Math.floor(Math.random() * Game.DIM_X);
      const randY = Math.floor(Math.random() * Game.DIM_Y);
      const randPos = [randX, randY];

      return randPos;
    }
  }

  export default Game;
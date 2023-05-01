class MovingObject {
    constructor (options) {
        this.pos = options.pos;
        this.vel = options.vel;
        this.radius = options.radius;
        this.color = options.color;
        this.game = options.game;
    }

    draw(ctx) {
        ctx.beginPath();
        const x = this.pos[0];
        const y = this.pos[1];
        ctx.arc(x, y, this.radius, 0, 2 * Math.PI, true)
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
        this.pos = this.game.wrap(this.pos);
    }
    
    isCollidedWith(otherObject) {
        const c1 = this.pos;
        const c2 = otherObject.pos;
        const distance = Math.sqrt( (c1[0] - c2[0]) ** 2 + (c1[1] - c2[1]) ** 2 )
        return distance < (this.radius + otherObject.radius)

    }

    collideWith(otherObject) {
        this.game.remove(this)
        this.game.remove(otherObject);
        return true;
    }

  }
  
  export default MovingObject;
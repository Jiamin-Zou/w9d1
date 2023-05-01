class MovingObject {
    constructor (options) {
        this.pos = options.pos;
        this.vel = options.vel;
        this.radius = options.radius;
        this.color = options.color;
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
    }
  }
  
  export default MovingObject;
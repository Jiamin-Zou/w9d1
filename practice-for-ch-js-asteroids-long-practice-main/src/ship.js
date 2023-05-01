import MovingObject from "./moving_object.js";

class Ship extends MovingObject {
    static RADIUS = 18;
    static COLOR = "green";

    constructor(options) {
        options.vel = [0, 0];
        options.radius = Ship.RADIUS;
        options.color = Ship.COLOR;
        super(options);
    }

    relocate() {
        this.pos = this.game.randomPosition();
        this.vel = [0, 0]
    }

}

export default Ship;
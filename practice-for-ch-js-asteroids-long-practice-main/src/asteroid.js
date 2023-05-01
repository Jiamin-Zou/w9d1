import * as Util from "./util.js";
import MovingObject from "./moving_object.js";

class Asteroid extends MovingObject {
    static RADIUS = 25;
    static COLOR = "red";

    constructor(options) {
        options.vel = Util.randomVec(5);
        options.radius = Asteroid.RADIUS;
        options.color = Asteroid.COLOR;
        super(options);
    }

}

export default Asteroid;
import * as Util from "./util.js";
import MovingObject from "./moving_object.js";
import Ship from "./ship.js"
class Asteroid extends MovingObject {
    static RADIUS = 25;
    static COLOR = "red";

    constructor(options) {
        options.vel = Util.randomVec(5);
        options.radius = Asteroid.RADIUS;
        options.color = Asteroid.COLOR;
        super(options);
    }

    collideWith(otherObject) {
        if (otherObject instanceof Ship) {
            otherObject.relocate();
            return true;
        } else {
            this.game.remove(this)
            this.game.remove(otherObject);
            return true;
        }
    }
    

}

export default Asteroid;
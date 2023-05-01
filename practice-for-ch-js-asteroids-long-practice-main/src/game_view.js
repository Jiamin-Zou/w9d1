import Game from "./game.js";

class GameView {
    constructor(ctx) {
        this.game = new Game();
        this.ctx = ctx;
    }

    start() {
        setInterval( ()=> {
            this.game.step();
            this.game.draw(this.ctx)
        }, 20)
    }
}

export default GameView;
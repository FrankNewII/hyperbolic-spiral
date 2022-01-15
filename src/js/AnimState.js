import Star from "./Star";
import Utils from "./Utils";

export default class Anim {

    constructor(ctx, countPoints, alpha, speed, bg) {
        this.ctx = ctx;
        this.alpha = alpha;
        this.speed = speed;
        this.points = [];
        this.countPoints = countPoints;
        this._bgGradient = bg;
    }

    clearPoints() {
        this.points.length = 0;
        return this;
    }

    generatePoints() {
        let count = this.countPoints;

        while (count--) this.points.push(new Star(window.innerWidth / 2, window.innerHeight / 2, Utils.random(50, 360), Utils.random(.5, 5)));

        return this;
    }

    draw() {
        this.ctx.clearRect(0, 0, window.innerWidth * 2, window.innerHeight * 2);

        this.ctx.fillStyle = this._bgGradient;

        this.ctx.fillRect(0, 0, window.innerWidth * 2, window.innerHeight * 2);
        this.points.forEach(point => point.move(this.alpha, this.speed).draw(this.ctx));
    }
}

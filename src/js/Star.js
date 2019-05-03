import Point from './Point';
import Utils from "./Utils";

const COLORS = [
    '#FFF',
    '#ffad07',
    '#c6e9ff',
];

export default class Star extends Point {

    constructor(x, y, a, size, color) {
        super(x, y);

        this._moveX = x;
        this._moveY = y;
        this.a = a;this.size = size;
        this.color = color || COLORS[Math.round(Utils.random(0, COLORS.length - 1))];
    }

    draw(ctx) {

        let r = this.size / 2;
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.globalAlpha = (1 / 360) * this.a;
        ctx.fillStyle = this.color;

        ctx.arc(this._moveX - r, this._moveY - r, r, 0, 360);
        ctx.stroke();
        ctx.fill();

    }

    move(alpha, speed) {
        let a = this.a = this.a + this.a / speed;

        this._moveX = Math.cos(a) / a * alpha + this.x;
        this._moveY = Math.sin(a) / a * alpha + this.y;

        return this;
    }
}

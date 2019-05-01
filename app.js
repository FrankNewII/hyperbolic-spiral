let alpha = 5000;

document
    .getElementById('changeAlpha')
    .addEventListener('keydown', function (e) {
    console.log(e);
        alpha = +e.target.value;
});

const points = [];

const img = new Image(0,0);
img.src = 'BH_LMC.png';

document.body.appendChild(img);
img.onload = function () {
    init();
    draw();
};

const canvas = document.getElementById('canvas');
canvas.setAttribute('width', window.innerWidth * 2 );
canvas.setAttribute('height', window.innerHeight * 2 );

canvas.style.width = '100%';
canvas.style.height = '100%';

const ctx = canvas.getContext('2d');

let pointsCount = 100;

function init() {
    while(pointsCount) {
        points.push(new Star(window.innerWidth, window.innerHeight, pointsCount, 6));

        pointsCount--;
    }
}



function draw() {

    ctx.drawImage(img, 0, 0);

    points.forEach( point => point.move(alpha).draw(ctx));


    requestAnimationFrame(draw);
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Star extends Point {

    constructor(x, y, a, size) {
        super( x, y );
        this._moveX = x;
        this._moveY = y;
        this.a = a;
        this.size = size;
    }

    draw(ctx) {
        let r = this.size / 2;
        ctx.beginPath();
        ctx.strokeStyle = '1px solid #FFF';
        ctx.fillStyle = 'white';
        ctx.arc(this._moveX - r, this._moveY - r, r, 0, 360 );
        ctx.stroke();
        ctx.fill();
    }

    move(alpha) {
        let a = this.a = this.a + this.a / 10000;

        this._moveX = Math.cos(a) / a * alpha + this.x;
        this._moveY =  Math.sin(a) / a * alpha + this.y;

        return this;
    }
}

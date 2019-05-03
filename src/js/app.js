import AnimState from "./AnimState";



const img = new Image(0);

img.src = require('../images/BH_LMC.png');

document.body.appendChild(img);

const canvas = document.getElementById('canvas');

canvas.setAttribute('width', window.innerWidth );
canvas.setAttribute('height', window.innerHeight );

canvas.style.width = '100%';
canvas.style.height = '100%';

const ctx = canvas.getContext('2d');

const state = new AnimState(ctx, 1000, 62e3, 3e5);

img.onload = function () {
    state.generatePoints().draw();
};

document
    .getElementById('changeAlpha')
    .addEventListener('keydown', e => state.alpha = +e.target.value );

document
    .getElementById('changeAngle')
    .addEventListener('change', e => state.points[0].a = +e.target.value );

document
    .getElementById('changeSize')
    .addEventListener('change', e => state.points[0].size = +e.target.value );

document
    .getElementById('changeSpeed')
    .addEventListener('change', e => state.speed = +e.target.value );


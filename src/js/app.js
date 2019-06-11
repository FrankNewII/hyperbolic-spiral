import AnimState from "./AnimState";

const canvas = document.getElementById('canvas');

canvas.setAttribute('width', window.innerWidth );
canvas.setAttribute('height', window.innerHeight );

canvas.style.width = '100%';
canvas.style.height = '100%';

const ctx = canvas.getContext('2d');

let bgGradient = ctx.createLinearGradient(window.innerWidth / 2,0, window.innerWidth / 2, window.innerHeight);
bgGradient.addColorStop(0, '#000');
bgGradient.addColorStop(.25, '#000');
bgGradient.addColorStop(.50, '#000');
bgGradient.addColorStop(.75, '#001515');
bgGradient.addColorStop(1, '#033035');

const state = new AnimState(ctx, 1000, 62e3, 3e5, bgGradient);

state.generatePoints().draw();

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


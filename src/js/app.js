import AnimState from "./AnimState";
import Utils from "./Utils";

const canvas = document.getElementById('canvas');

canvas.setAttribute('width', window.innerWidth);
canvas.setAttribute('height', window.innerHeight);

canvas.style.width = '100%';
canvas.style.height = '100%';

const ctx = canvas.getContext('2d');

let bgGradient = ctx.createLinearGradient(window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
bgGradient.addColorStop(0, '#000');
bgGradient.addColorStop(.25, '#000');
bgGradient.addColorStop(.50, '#000');
bgGradient.addColorStop(.75, '#001515');
bgGradient.addColorStop(1, '#033035');

const state = new AnimState(ctx, 1000, 62e3, 3e5, bgGradient);

state.generatePoints().draw();

setInterval(function () {
    state.draw();
    ctx.beginPath();
    ctx.strokeStyle = '#fff';
    ctx.arc(178, 115, Utils.getRadiusByLengthAndHeightSegment(5, 18), 3.8, 6);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.strokeStyle = '#fff';
    ctx.arc(199, 125, Utils.getRadiusByLengthAndHeightSegment(4, 32), Utils.radToDeg(150), Utils.radToDeg(210));
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(179, 138, Utils.getRadiusByLengthAndHeightSegment(5.5, 18), Utils.radToDeg(20), Utils.radToDeg(165));

    ctx.stroke();
    ctx.beginPath();
    ctx.arc(181, 117,
        Utils.getRadiusByLengthAndHeightSegment(1.5, 18),
        -.6,
        .9);
    ctx.moveTo(189, 142);
    ctx.lineTo(193, 135);
    ctx.stroke();
    ctx.closePath();

}, 1000 / 24);


document
    .getElementById('changeAlpha')
    .addEventListener('keydown', e => state.alpha = +e.target.value);

document
    .getElementById('changeAngle')
    .addEventListener('change', e => state.points[0].a = +e.target.value);

document
    .getElementById('changeSize')
    .addEventListener('change', e => state.points[0].size = +e.target.value);

document
    .getElementById('changeSpeed')
    .addEventListener('change', e => state.speed = +e.target.value);


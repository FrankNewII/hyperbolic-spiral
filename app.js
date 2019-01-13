var absc = document.createElement('div');
var arr = [];
var a = 1;
var alpha = 5000;

document.body.innerHTML = '';
document.body.style['position'] = 'relative';
document.body.style['overflow-x'] = 'hidden';
document.body.style['width'] = '100vw';
document.body.style['background'] = 'black';

absc.style['left'] = '50%';
absc.style['top'] = '50%';
absc.style['transform'] = 'translate(-50%, -50%)';
absc.style['position'] = 'absolute';
absc.style['height'] = '1px';
absc.style['width'] = '1px';

while(a < 1000) {
    var el2 = document.createElement('div');

    el2.a = a;
    el2.style['top'] = (alpha * ( Math.sin(a) / (a) ) ) + 'px';
    el2.style['left'] = (alpha * ( Math.cos(a) / (a) ) ) + 'px';
    el2.style['position'] = 'relative';
    el2.style['pointerEvents'] = 'none';
    el2.style['height'] = '2px';
    el2.style['width'] = '2px';
    el2.style['borderRadius'] = '50%';
    el2.style['boxShadow'] = '0 0 10px white';
    el2.style['backgroundColor'] = '#bccdf7';
    //el2.innerText = a;
    arr.push(el2);
    absc.appendChild(el2);

    a++;
}

document.body.appendChild(absc);
console.log('X:'+a+'='+(2 * ( Math.cos(a) / a ) ), 'Y:'+a+'='+(2 * ( Math.sin(a) / a ) ) );

setInterval(function () {
    arr.forEach( el => {
        var a = el.a = el.a + el.a / 1000;

        el.style['top'] = (alpha * ( Math.sin(a) / (a) ) ) + 'px';
        el.style['left'] = (alpha * ( Math.cos(a) / (a) ) ) + 'px';
    })
}, 1000 / 24)
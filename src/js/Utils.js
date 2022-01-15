export default class Utils {
    static random(min, max) {
        return (max - min) * Math.random() + min;
    }

    static factorial(i) {
        let fact = 1;

        for (;i;i--) {
            fact *= i;
        }

        return fact;
    }

    static getRadiusByLengthAndHeightSegment(h, l) {
        const a = Math.atan(2 * h / l ) * 4;
        return h / (1 - Math.cos(a / 2) );
    }

    static radToDeg(deg) {
        return Math.PI / 180 * deg;
    }

    static getAngle(h, l) {
        return 2 * Math.acos(1 - h / Utils.getRadiusByLengthAndHeightSegment(h, l));
    }

    static getLength(a, r) {
        return  Math.PI * a * r / 180;
    }
}

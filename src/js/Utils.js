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
}

export class Boid {
    x: number;
    y: number;
    xVel: number;
    yVel: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.xVel = Math.random() - 0.5;
        this.yVel = Math.random() - 0.5;
    }
}

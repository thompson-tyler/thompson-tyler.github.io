import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Boid } from './boid';
import { Node } from './node';
import { NODES, NODE_SCALE_X, NODE_SCALE_Y } from './title-nodes';

@Component({
    selector: 'app-boid-canvas',
    templateUrl: './boid-canvas.component.html',
    styleUrls: ['./boid-canvas.component.scss'],
})
export class BoidCanvasComponent implements OnInit {

    @ViewChild('canvas', { static: true })
    private canvas: ElementRef<HTMLCanvasElement>;
    @ViewChild('title', { static: true })
    private title: ElementRef<HTMLDivElement>;
    private ctx: CanvasRenderingContext2D;

    frameNum: number = 0;
    updateInterval: number = 4;

    width: number;
    height: number;
    isMobile: boolean;

    COH: number = 0.02;
    SEP: number = 24;
    ALI: number = 0.1;
    FLOCK: number = 0.04;
    RAN: number = 32;
    RAN2: number = this.RAN * this.RAN;
    SPEED: number = 1;
    NUMBOIDS: number = 200;

    boids: Boid[];
    scaledNodes: Node[];

    constructor() {}

    ngOnInit(): void {
        // set canvas width to the width of the viewport
        this.canvas.nativeElement.width = window.visualViewport.width;

        // get canvas context
        this.ctx = this.canvas.nativeElement.getContext('2d')!;

        // store dimensions of canvas
        this.width = this.canvas.nativeElement.width;
        this.height = this.canvas.nativeElement.height;

        // place boids
        this.placeBoids();

        // place nodes
        this.placeNodes();

        // begins animation loop
        this.animate();
    }

    placeBoids(): void {
        // settings up array of boids
        this.boids = [];
        for (let i = 0; i < this.NUMBOIDS; i++) {
            this.boids.push(
                new Boid(
                    Math.random() * this.width,
                    Math.random() * this.height
                )
            );
        }
    }

    scaleBoidPos(scale: number) {
        for (let boid of this.boids) {
            boid.x *= scale;
        }
    }

    placeNodes(): void {
        // clear nodes
        this.scaledNodes = [];

        // setting up array of letter nodes
        this.scaledNodes = [];
        for (let node of NODES) {
            this.scaledNodes.push({
                x: (node.x / NODE_SCALE_X) * this.width,
                y: (node.y / NODE_SCALE_Y) * this.height,
            });
        }
    }

    animate(): void {
        // update nodes if desktop is resized
        if (!this.isMobile && this.width != window.visualViewport.width) {
            this.placeNodes();
            this.scaleBoidPos(window.visualViewport.width / this.width);
            this.canvas.nativeElement.width = window.visualViewport.width;
            this.width = window.visualViewport.width;
        }

        // set isMobile
        this.isMobile = window.innerWidth < 900;

        // render if not on mobile
        if (!this.isMobile) {
            // show canvas
            this.canvas.nativeElement.style.display = 'block';
            this.title.nativeElement.style.display = 'none';

            // clear canvas
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

            this.updateBoids();
            this.renderBoids();

            this.frameNum++;
        } // otherwise hide canvas
        else {
            this.canvas.nativeElement.style.display = 'none';
            this.title.nativeElement.style.display = 'block';
        }
        requestAnimationFrame(this.animate.bind(this));
    }

    updateBoids(): void {
        for (let boid of this.boids) {
            // only updates velocities every /updateInterval/ frames and if scrolled to top of page
            if (this.frameNum % this.updateInterval == 0) {
                // this.cohesion(boid);
                // this.alignment(boid);
                this.separation(boid);

                // flock to nodes if scrolled to top of page
                if (window.scrollY <= 0)
                    this.flockToNodes(boid);

                this.avoidEdge(boid);

                this.normalizeVel(boid);
            }

            boid.x += boid.xVel;
            boid.y += boid.yVel;

            this.constrainPos(boid);
        }
    }

    // render all boids to the canvas
    renderBoids(): void {

        // dim color if not scrolled to top of page
        if (window.scrollY <= 0)
            this.ctx.fillStyle = '#e7b351';
        else
            // 
            this.ctx.fillStyle = '#91753f';

        for (let boid of this.boids) {
            this.ctx.beginPath();
            this.ctx.arc(boid.x, boid.y, 8, 0, 2 * Math.PI);
            this.ctx.fill();
        }
    }

    // debug function which renders all nodes to the canvas
    renderNodes(): void {
        for (let node of this.scaledNodes) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = 'red';
            this.ctx.arc(node.x, node.y, 4, 0, 2 * Math.PI);
            this.ctx.stroke();
        }
    }

    // boids tend to flock towards each other
    cohesion(b1: Boid): void {
        let distToSqr;
        let aveX = 0;
        let aveY = 0;
        let numNeighbors = 0;

        for (let b2 of this.boids) {
            distToSqr = this.distSqr(b1, b2);

            if (distToSqr <= this.RAN2 && distToSqr != 0) {
                numNeighbors++;
                aveX += b2.x;
                aveY += b2.y;
            }
        }
        if (numNeighbors != 0) {
            aveX /= numNeighbors;
            aveY /= numNeighbors;
            b1.xVel += (aveX - b1.x) * this.COH;
            b1.yVel += (aveY - b1.y) * this.COH;
        }
    }

    // boids avoid other boids if they're too close
    separation(b1: Boid): void {
        let distToSqr;
        for (let b2 of this.boids) {
            distToSqr = this.distSqr(b1, b2);
            if (distToSqr <= this.RAN2 && distToSqr != 0) {
                b1.xVel -= ((b2.x - b1.x) / distToSqr) * this.SEP;
                b1.yVel -= ((b2.y - b1.y) / distToSqr) * this.SEP;
            }
        }
    }

    // boids tend to move in the same direction as other boids
    alignment(b1: Boid): void {
        let distToSqr;
        let aveXVel = 0;
        let aveYVel = 0;
        let numNeighbors = 0;

        for (let b2 of this.boids) {
            distToSqr = this.distSqr(b1, b2);
            if (distToSqr <= this.RAN2 && distToSqr != 0) {
                numNeighbors++;
                aveXVel += b2.xVel;
                aveXVel += b2.yVel;
            }
        }
        if (numNeighbors != 0) {
            aveXVel /= numNeighbors;
            aveYVel /= numNeighbors;
            b1.xVel += aveXVel * this.ALI;
            b1.yVel += aveYVel * this.ALI;
        }
    }

    // boids flock towards letter nodes
    flockToNodes(boid: Boid): void {
        let distToSqr;

        for (let node of this.scaledNodes) {
            distToSqr = this.distSqr(boid, node);
            if (distToSqr <= this.RAN2 && distToSqr != 0) {
                boid.xVel += (node.x - boid.x) * this.FLOCK;
                boid.yVel += (node.y - boid.y) * this.FLOCK;
            }
        }
    }

    // returns the distance between two objects, squared
    distSqr(n1: Node, n2: Node): number;

    distSqr(b: Boid, n: Node): number;

    distSqr(b1: Boid, b2: Boid): number {
        return (b1.x - b2.x) * (b1.x - b2.x) + (b1.y - b2.y) * (b1.y - b2.y);
    }

    // normalizes a boid's velocity
    normalizeVel(boid: Boid): void {
        let mag = Math.sqrt(Math.pow(boid.xVel, 2) + Math.pow(boid.yVel, 2));
        if (mag != 0) {
            boid.xVel /= mag;
            boid.xVel *= this.SPEED;
            boid.yVel /= mag;
            boid.yVel *= this.SPEED;
        }
    }

    // boid steers away from edge of canvas
    avoidEdge(boid: Boid): void {
        if (boid.x >= this.width - this.RAN) {
            boid.xVel -= 16 / (this.width - boid.x + 1);
        }
        if (boid.x <= this.RAN) {
            boid.xVel += 16 / (boid.x + 1);
        }
        if (boid.y >= this.height - this.RAN) {
            boid.yVel -= 16 / (this.height - boid.y + 1);
        }
        if (boid.y <= this.RAN) {
            boid.yVel += 16 / (boid.y + 1);
        }
    }

    // constrain boid position to within canvas
    constrainPos(boid: Boid): void {
        if (boid.x >= this.width) {
            boid.x = this.width - 1;
        } else if (boid.x <= 0) {
            boid.x = 0;
        }
        if (boid.y >= this.height) {
            boid.y = this.height - 1;
        } else if (boid.y <= 0) {
            boid.y = 0;
        }
    }
}

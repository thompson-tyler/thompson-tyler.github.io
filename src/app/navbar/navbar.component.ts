import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime, map, pairwise, filter } from 'rxjs/operators';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
    ngAfterViewInit() {
        var isMobile =
            window
                .getComputedStyle(document.body, '::after')
                .getPropertyValue('content')
                .indexOf('mobile') != -1;

        if (isMobile) {
            enum Direction {
                Up = 'Up',
                Down = 'Down',
            }
            const scroll$ = fromEvent(window, 'scroll').pipe(
                throttleTime(10),
                map(() => window.pageYOffset),
                pairwise(),
                map(
                    ([y1, y2]): Direction =>
                        y2 < y1 ? Direction.Up : Direction.Down
                )
            );

            const scrollUp$ = scroll$.pipe(
                filter((direction) => direction === Direction.Up)
            );

            const scrollDown$ = scroll$.pipe(
                filter((direction) => direction === Direction.Down)
            );

            scrollUp$.subscribe(() => (this.navHidden = false));
            scrollDown$.subscribe(() => (this.navHidden = true));
        }
    }

    navHidden: boolean = false;
    isOpen: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    openNavMenu(): void {
        this.isOpen = true;
    }

    closeNavMenu(): void {
        this.isOpen = false;
    }
}

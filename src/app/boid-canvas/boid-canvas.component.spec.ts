import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoidCanvasComponent } from './boid-canvas.component';

describe('BoidCanvasComponent', () => {
  let component: BoidCanvasComponent;
  let fixture: ComponentFixture<BoidCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoidCanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoidCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

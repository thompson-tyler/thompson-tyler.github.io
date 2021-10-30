import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwarmProjectComponent } from './swarm-project.component';

describe('SwarmProjectComponent', () => {
  let component: SwarmProjectComponent;
  let fixture: ComponentFixture<SwarmProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwarmProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwarmProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

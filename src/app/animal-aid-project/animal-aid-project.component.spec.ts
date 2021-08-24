import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalAidProjectComponent } from './animal-aid-project.component';

describe('AnimalAidProjectComponent', () => {
  let component: AnimalAidProjectComponent;
  let fixture: ComponentFixture<AnimalAidProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalAidProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalAidProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

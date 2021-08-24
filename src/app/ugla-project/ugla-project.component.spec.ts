import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UGLAProjectComponent } from './ugla-project.component';

describe('UGLAProjectComponent', () => {
  let component: UGLAProjectComponent;
  let fixture: ComponentFixture<UGLAProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UGLAProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UGLAProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderConstructionBannerComponent } from './under-construction-banner.component';

describe('UnderConstructionBannerComponent', () => {
  let component: UnderConstructionBannerComponent;
  let fixture: ComponentFixture<UnderConstructionBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderConstructionBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderConstructionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

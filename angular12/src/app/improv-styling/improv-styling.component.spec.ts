import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovStylingComponent } from './improv-styling.component';

describe('ImprovStylingComponent', () => {
  let component: ImprovStylingComponent;
  let fixture: ComponentFixture<ImprovStylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprovStylingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprovStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

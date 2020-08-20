import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarNavigationComponent } from './progress-bar-navigation.component';

describe('ProgressBarNavigationComponent', () => {
  let component: ProgressBarNavigationComponent;
  let fixture: ComponentFixture<ProgressBarNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

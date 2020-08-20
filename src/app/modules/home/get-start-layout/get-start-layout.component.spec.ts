import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStartLayoutComponent } from './get-start-layout.component';

describe('GetStartLayoutComponent', () => {
  let component: GetStartLayoutComponent;
  let fixture: ComponentFixture<GetStartLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStartLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStartLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

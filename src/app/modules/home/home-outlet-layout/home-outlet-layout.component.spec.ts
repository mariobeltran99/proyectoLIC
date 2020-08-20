import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOutletLayoutComponent } from './home-outlet-layout.component';

describe('HomeOutletLayoutComponent', () => {
  let component: HomeOutletLayoutComponent;
  let fixture: ComponentFixture<HomeOutletLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOutletLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOutletLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

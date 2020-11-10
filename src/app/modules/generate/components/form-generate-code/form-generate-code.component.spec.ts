import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGenerateCodeComponent } from './form-generate-code.component';

describe('FormGenerateCodeComponent', () => {
  let component: FormGenerateCodeComponent;
  let fixture: ComponentFixture<FormGenerateCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGenerateCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGenerateCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

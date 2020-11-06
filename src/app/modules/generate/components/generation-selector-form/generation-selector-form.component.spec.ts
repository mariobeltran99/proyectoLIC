import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationSelectorFormComponent } from './generation-selector-form.component';

describe('GenerationSelectorFormComponent', () => {
  let component: GenerationSelectorFormComponent;
  let fixture: ComponentFixture<GenerationSelectorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerationSelectorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerationSelectorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

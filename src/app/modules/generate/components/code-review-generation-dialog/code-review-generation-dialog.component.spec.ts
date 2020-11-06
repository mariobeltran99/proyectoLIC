import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeReviewGenerationDialogComponent } from './code-review-generation-dialog.component';

describe('CodeReviewGenerationDialogComponent', () => {
  let component: CodeReviewGenerationDialogComponent;
  let fixture: ComponentFixture<CodeReviewGenerationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeReviewGenerationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeReviewGenerationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

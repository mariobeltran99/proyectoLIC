import { Component } from '@angular/core';

@Component({
  selector: 'mfw-form-generation',
  template: `
    <div class="mfw-container">
      <mfw-generation-selector-form></mfw-generation-selector-form>
      <mfw-forms-list></mfw-forms-list>
    </div>
  `,
  styles: [`
    .mfw-container {
      margin: 0 auto;
      max-width: 100%;
      padding: 30px;
    }
  `]
})
export class FormGenerationComponent { }

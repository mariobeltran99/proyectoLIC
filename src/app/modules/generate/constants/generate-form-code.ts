import { FormTypes } from '../declarations/form-options.enum';
import { FormTypeOption } from '../interfaces/form-type-option';

export const generateFormCode = (formItems: FormTypeOption[], action: string = null, method: string = 'post') => {
  let html = '';
  html += `<form action='${action}' method='${method}' class='form-body'>`;
  for (const formItem of formItems) {
    switch (formItem.type) {
      case FormTypes.TEXT:
      case FormTypes.EMAIL:
      case FormTypes.NUMBER:
      case FormTypes.CHECKBOX:
      case FormTypes.PASSWORD: {
        html += '<div class=\'form-item\'>';
        html += `<label>${formItem?.label}</label>`;
        html += `<input mfw-form-input-type type='${formItem.type}' ${formItem?.args} />`;
        html += '</div>';
        break;
      }
      case FormTypes.TEXTAREA: {
        html += '<div class=\'form-item\'>';
        html += `<label>${formItem?.label}</label>`;
        html += `<textarea mfw-form-textarea-type ${formItem?.args}></textarea>`;
        html += '</div>';
        break;
      }
    }
  }
  html += '<div class=\'form-actions\'><button mfw-form-submit type=\'submit\'>Submit</button></div>';
  html += `</form>`;

  return html;
};

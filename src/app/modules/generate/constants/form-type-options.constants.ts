import { FormTypes } from '../declarations/form-options.enum';
import { FormTypeOption } from '../interfaces/form-type-option';

const FormTypeOptionsConstant: FormTypeOption[] = [
  {
    id: 1,
    name: 'Text field',
    type: FormTypes.TEXT
  },
  {
    id: 2,
    name: 'Text area (large text box)',
    type: FormTypes.TEXTAREA
  },
  {
    id: 3,
    name: 'Email field',
    type: FormTypes.EMAIL
  },
  {
    id: 4,
    name: 'Checkbox',
    type: FormTypes.CHECKBOX
  },
  {
    id: 5,
    name: 'Password field',
    type: FormTypes.PASSWORD
  },
  {
    id: 6,
    name: 'Number field',
    type: FormTypes.NUMBER
  }
];

export const getFormTypeOptions = () => {
  return FormTypeOptionsConstant.sort((a, b) => a?.id - b?.id);
};

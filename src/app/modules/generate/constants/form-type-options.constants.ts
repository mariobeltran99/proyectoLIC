import { FormTypes } from '../declarations/form-options.enum';
import { FormTypeOption } from '../interfaces/form-type-option';

const FormTypeOptionsConstant: FormTypeOption[] = [
  {
    id: 1,
    name: 'Tipo text',
    type: FormTypes.TEXT
  },
  {
    id: 2,
    name: 'Textarea',
    type: FormTypes.TEXTAREA
  },
  {
    id: 3,
    name: 'Tipo email',
    type: FormTypes.EMAIL
  },
  {
    id: 4,
    name: 'Checkbox',
    type: FormTypes.CHECKBOX
  },
  {
    id: 5,
    name: 'Tipo contraseña',
    type: FormTypes.PASSWORD
  },
  {
    id: 6,
    name: 'Tipo numero',
    type: FormTypes.NUMBER
  }
];

export const getFormTypeOptions = () => {
  return FormTypeOptionsConstant.sort((a, b) => a?.id - b?.id);
};

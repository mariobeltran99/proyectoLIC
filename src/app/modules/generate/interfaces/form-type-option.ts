import { FormTypes } from '../declarations/form-options.enum';

export interface FormTypeOption {
  id?: number;
  name: string;
  label?: string;
  type: FormTypes;
  args?: string;
}

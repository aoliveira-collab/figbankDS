// url=https://www.figma.com/design/d4uJBUbsWeFMdQcJWUoPLI/FigBank-Design-System?node-id=10:47
// source=./Input
// component=Input
import figma from 'figma';

const instance = figma.selectedInstance;
const labelText = instance.getString('Label Text');
const value = instance.getString('Value');
const helperText = instance.getString('Helper Text');
const state = instance.getEnum('State', {
  Default: 'Default',
  Focused: 'Focused',
  Error: 'Error',
  Disabled: 'Disabled',
});
const disabled = state === 'Disabled';
const hasError = state === 'Error';

export default {
  example: figma.code`<Input labelText="${labelText}" helperText="${helperText}" value="${value}" ${disabled ? 'disabled' : ''} ${hasError ? 'state="Error"' : ''} />`,
  imports: ['import { Input } from "./Input";'],
  id: 'input',
  metadata: {
    nestable: false,
    props: {
      labelText: { type: 'string' },
      helperText: { type: 'string' },
      value: { type: 'string' },
      state: { type: 'string' },
      disabled: { type: 'boolean' },
    },
  },
};

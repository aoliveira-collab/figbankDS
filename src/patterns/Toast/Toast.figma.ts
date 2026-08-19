// url=https://www.figma.com/design/d4uJBUbsWeFMdQcJWUoPLI/FigBank-Design-System?node-id=10:185
// source=./Toast
// component=Toast
import figma from 'figma';

const instance = figma.selectedInstance;
const message = instance.getString('Message');
const type = instance.getEnum('Type', {
  Success: 'Success',
  Error: 'Error',
  Warning: 'Warning',
  Info: 'Info',
});

export default {
  example: figma.code`<Toast type="${type}" message="${message}" />`,
  imports: ['import { Toast } from "./Toast";'],
  id: 'toast',
  metadata: {
    nestable: false,
    props: {
      type: { type: 'string' },
      message: { type: 'string' },
    },
  },
};

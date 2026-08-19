// url=https://www.figma.com/design/d4uJBUbsWeFMdQcJWUoPLI/FigBank-Design-System?node-id=10:26
// source=./Button
// component=Button
import figma from 'figma';

const instance = figma.selectedInstance;
const label = instance.getString('Label');
const variant = instance.getEnum('Type', {
  Primary: 'Primary',
  Secondary: 'Secondary',
  Destructive: 'Destructive',
  Ghost: 'Ghost',
});
const state = instance.getEnum('State', {
  Default: 'Default',
  Pressed: 'Pressed',
  Disabled: 'Disabled',
});

export default {
  example: figma.code`<Button variant="${variant}" state="${state}" label="${label}" />`,
  imports: ['import { Button } from "./Button";'],
  id: 'button',
  metadata: {
    nestable: false,
    props: {
      variant: { type: 'string' },
      state: { type: 'string' },
      label: { type: 'string' },
    },
  },
};

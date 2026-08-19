// url=https://www.figma.com/design/d4uJBUbsWeFMdQcJWUoPLI/FigBank-Design-System?node-id=10:97
// source=./Divider
// component=Divider
import figma from 'figma';

const instance = figma.selectedInstance;
const variant = instance.getEnum('Type', {
  Subtle: 'Subtle',
  Section: 'Section',
});

export default {
  example: figma.code`<Divider variant="${variant}" />`,
  imports: ['import { Divider } from "./Divider";'],
  id: 'divider',
  metadata: {
    nestable: true,
    props: {
      variant: { type: 'string' },
    },
  },
};

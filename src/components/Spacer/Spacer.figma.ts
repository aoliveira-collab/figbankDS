// url=https://www.figma.com/design/d4uJBUbsWeFMdQcJWUoPLI/FigBank-Design-System?node-id=10:98
// source=./Spacer
// component=Spacer
import figma from 'figma';

export default {
  example: figma.code`<Spacer size={16} />`,
  imports: ['import { Spacer } from "./Spacer";'],
  id: 'spacer',
  metadata: {
    nestable: true,
    props: {
      size: { type: 'number' },
    },
  },
};

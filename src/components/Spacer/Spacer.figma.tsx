import figma from '@figma/code-connect';
import { Spacer } from './Spacer';

figma.connect(
  Spacer,
  'https://www.figma.com/design/d4uJBUbsWeFMdQcJWUoPLI/FigBank-Design-System?node-id=10:98',
  {
    example: () => <Spacer size={16} />,
  }
);
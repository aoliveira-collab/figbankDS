import figma from '@figma/code-connect';
import { Divider } from './Divider';

figma.connect(
  Divider,
  'https://www.figma.com/design/d4uJBUbsWeFMdQcJWUoPLI/FigBank-Design-System?node-id=10:97',
  {
    props: {
      variant: figma.enum('Type', {
        Subtle: 'Subtle',
        Section: 'Section',
      }),
    },
    example: (props) => <Divider variant={props.variant} />,
  }
);
import figma from '@figma/code-connect';
import { Button } from './Button';

figma.connect(
  Button,
  'https://www.figma.com/design/d4uJBUbsWeFMdQcJWUoPLI/FigBank-Design-System?node-id=10:26',
  {
    props: {
      variant: figma.enum('Type', {
        Primary: 'Primary',
        Secondary: 'Secondary',
        Destructive: 'Destructive',
        Ghost: 'Ghost',
      }),
      state: figma.enum('State', {
        Default: 'Default',
        Pressed: 'Pressed',
        Disabled: 'Disabled',
      }),
      label: figma.string('Label'),
    },
    example: (props) => (
      <Button variant={props.variant} state={props.state} label={props.label} />
    ),
  }
);
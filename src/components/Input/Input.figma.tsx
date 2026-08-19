import figma from '@figma/code-connect';
import { Input } from './Input';

figma.connect(
  Input,
  'https://www.figma.com/design/d4uJBUbsWeFMdQcJWUoPLI/FigBank-Design-System?node-id=10:47',
  {
    props: {
      labelText: figma.string('Label Text'),
      helperText: figma.string('Helper Text'),
      value: figma.string('Value'),
      disabled: figma.enum('State', {
        Default: false,
        Focused: false,
        Error: false,
        Disabled: true,
      }),
      state: figma.enum('State', {
        Default: undefined,
        Focused: undefined,
        Error: 'Error',
        Disabled: undefined,
      }),
    },
    example: (props) => (
      <Input
        labelText={props.labelText}
        helperText={props.helperText}
        value={props.value}
        disabled={props.disabled}
        state={props.state}
      />
    ),
  }
);
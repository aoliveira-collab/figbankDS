import figma from '@figma/code-connect';
import { StatusBadge } from './StatusBadge';

figma.connect(
  StatusBadge,
  'https://www.figma.com/design/d4uJBUbsWeFMdQcJWUoPLI/FigBank-Design-System?node-id=10:78',
  {
    props: {
      label: figma.string('Label'),
      status: figma.enum('Status', {
        Active: 'Active',
        Blocked: 'Blocked',
        Virtual: 'Virtual',
        Pending: 'Pending',
        Info: 'Info',
      }),
      styleVariant: figma.enum('Style', {
        Filled: 'Filled',
        Outlined: 'Outlined',
      }),
    },
    example: (props) => (
      <StatusBadge
        label={props.label}
        status={props.status}
        styleVariant={props.styleVariant}
      />
    ),
  }
);

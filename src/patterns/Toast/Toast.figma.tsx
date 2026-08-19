import figma from '@figma/code-connect';
import { Toast } from './Toast';

figma.connect(
  Toast,
  'https://www.figma.com/design/d4uJBUbsWeFMdQcJWUoPLI/FigBank-Design-System?node-id=10:185',
  {
    props: {
      type: figma.enum('Type', {
        Success: 'Success',
        Error: 'Error',
        Warning: 'Warning',
        Info: 'Info',
      }),
      message: figma.string('Message'),
    },
    example: (props) => <Toast type={props.type} message={props.message} />,
  }
);
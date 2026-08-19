import figma from '@figma/code-connect';
import { BottomSheet } from './BottomSheet';

figma.connect(
  BottomSheet,
  'https://www.figma.com/design/d4uJBUbsWeFMdQcJWUoPLI/FigBank-Design-System?node-id=10:212',
  {
    props: {
      state: figma.enum('State', {
        Confirmation: 'Confirmation',
        Success: 'Success',
      }),
    },
    example: (props) => (
      <BottomSheet
        state={props.state}
        title="Confirm transfer"
        recipient="Alex Chen"
        account="•••• 2048"
        amount="R$ 1,250.00"
      />
    ),
  }
);
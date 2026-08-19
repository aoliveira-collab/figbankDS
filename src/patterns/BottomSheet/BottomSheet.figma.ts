// url=https://www.figma.com/design/d4uJBUbsWeFMdQcJWUoPLI/FigBank-Design-System?node-id=10:212
// source=./BottomSheet
// component=BottomSheet
import figma from 'figma';

const instance = figma.selectedInstance;
const state = instance.getEnum('State', {
  Confirmation: 'Confirmation',
  Success: 'Success',
});

export default {
  example: figma.code`<BottomSheet state="${state}" title="Confirm transfer" recipient="Alex Chen" account="•••• 2048" amount="R$ 1,250.00" />`,
  imports: ['import { BottomSheet } from "./BottomSheet";'],
  id: 'bottom-sheet',
  metadata: {
    nestable: false,
    props: {
      state: { type: 'string' },
      title: { type: 'string' },
      recipient: { type: 'string' },
      account: { type: 'string' },
      amount: { type: 'string' },
    },
  },
};

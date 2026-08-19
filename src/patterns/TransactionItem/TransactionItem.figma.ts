// url=https://www.figma.com/design/d4uJBUbsWeFMdQcJWUoPLI/FigBank-Design-System?node-id=10:168
// source=./TransactionItem
// component=TransactionItem
import figma from 'figma';

const instance = figma.selectedInstance;
const merchant = instance.getString('Merchant');
const date = instance.getString('Date');
const amount = instance.getString('Amount');
const type = instance.getEnum('Type', {
  Expense: 'Expense',
  Income: 'Income',
  Pending: 'Pending',
});

export default {
  example: figma.code`<TransactionItem type="${type}" title="${merchant}" subtitle="${date}" amount="${amount}" icon={<span /> } />`,
  imports: ['import { TransactionItem } from "./TransactionItem";'],
  id: 'transaction-item',
  metadata: {
    nestable: false,
    props: {
      type: { type: 'string' },
      title: { type: 'string' },
      subtitle: { type: 'string' },
      amount: { type: 'string' },
      icon: { type: 'slot' },
    },
  },
};

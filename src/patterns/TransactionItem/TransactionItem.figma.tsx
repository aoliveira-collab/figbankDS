import figma from '@figma/code-connect';
import { TransactionItem } from './TransactionItem';

figma.connect(
  TransactionItem,
  'https://www.figma.com/design/d4uJBUbsWeFMdQcJWUoPLI/FigBank-Design-System?node-id=10:168',
  {
    props: {
      type: figma.enum('Type', {
        Expense: 'Expense',
        Income: 'Income',
        Pending: 'Pending',
      }),
      title: figma.string('Merchant'),
      subtitle: figma.string('Date'),
      amount: figma.string('Amount'),
    },
    example: (props) => (
      <TransactionItem
        type={props.type}
        title={props.title}
        subtitle={props.subtitle}
        amount={props.amount}
        icon={<span />}
      />
    ),
  }
);
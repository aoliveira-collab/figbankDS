import figma from '@figma/code-connect';
import { BankCard } from './BankCard';

figma.connect(
  BankCard,
  'https://www.figma.com/design/d4uJBUbsWeFMdQcJWUoPLI/FigBank-Design-System?node-id=10:144',
  {
    props: {
      state: figma.enum('State', {
        Active: 'Active',
        Blocked: 'Blocked',
        Virtual: 'Virtual',
      }),
      holderName: figma.string('Cardholder'),
      cardNumber: figma.string('Card Number'),
      expiry: figma.string('Expiry'),
    },
    example: (props) => (
      <BankCard
        state={props.state}
        holderName={props.holderName}
        cardNumber={props.cardNumber}
        expiry={props.expiry}
      />
    ),
  }
);
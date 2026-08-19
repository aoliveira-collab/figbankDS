// url=https://www.figma.com/design/d4uJBUbsWeFMdQcJWUoPLI/FigBank-Design-System?node-id=10:144
// source=./BankCard
// component=BankCard
import figma from 'figma';

const instance = figma.selectedInstance;
const holderName = instance.getString('Cardholder');
const cardNumber = instance.getString('Card Number');
const expiry = instance.getString('Expiry');
const state = instance.getEnum('State', {
  Active: 'Active',
  Blocked: 'Blocked',
  Virtual: 'Virtual',
});

export default {
  example: figma.code`<BankCard state="${state}" holderName="${holderName}" cardNumber="${cardNumber}" expiry="${expiry}" />`,
  imports: ['import { BankCard } from "./BankCard";'],
  id: 'bank-card',
  metadata: {
    nestable: false,
    props: {
      state: { type: 'string' },
      holderName: { type: 'string' },
      cardNumber: { type: 'string' },
      expiry: { type: 'string' },
    },
  },
};

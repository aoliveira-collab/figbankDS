// url=https://www.figma.com/design/d4uJBUbsWeFMdQcJWUoPLI/FigBank-Design-System?node-id=10:79
// source=./BottomNavigation
// component=BottomNavigation
import figma from 'figma';

export default {
  example: figma.code`<BottomNavigation items={[{ key: 'home', label: 'Home', icon: <span />, active: true }, { key: 'cards', label: 'Cards', icon: <span /> }, { key: 'profile', label: 'Profile', icon: <span /> }]} />`,
  imports: ['import { BottomNavigation } from "./BottomNavigation";'],
  id: 'bottom-navigation',
  metadata: {
    nestable: false,
    props: {
      items: { type: 'array' },
    },
  },
};

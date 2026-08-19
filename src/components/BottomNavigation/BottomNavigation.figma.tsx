import figma from '@figma/code-connect';
import { BottomNavigation } from './BottomNavigation';

figma.connect(
  BottomNavigation,
  'https://www.figma.com/design/d4uJBUbsWeFMdQcJWUoPLI/FigBank-Design-System?node-id=10:79',
  {
    example: () => (
      <BottomNavigation
        items={[
          { key: 'home', label: 'Home', icon: <span />, active: true },
          { key: 'cards', label: 'Cards', icon: <span /> },
          { key: 'profile', label: 'Profile', icon: <span /> },
        ]}
      />
    ),
  }
);
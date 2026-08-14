# FigBank Design System

Design system em React + TypeScript gerado a partir do arquivo Figma
[**FigBank Design System**](https://www.figma.com/design/d4uJBUbsWeFMdQcJWUoPLI/FigBank-Design-System) —
uma experiência bancária mobile-first com estética escura premium.

> ⚠️ **Status:** estrutura inicial gerada automaticamente a partir da análise do Figma.
> O mapeamento **Code Connect** (Figma ↔ componentes de código) ainda não foi realizado —
> `figma.config.json` contém apenas a configuração base para isso.

## Stack

- **React 18** + **TypeScript**
- **Vite** (build de biblioteca + dev server de preview)
- **CSS Modules** com tokens expostos via **CSS Custom Properties** (`src/tokens/tokens.css`)

## Estrutura

```
figma.config.json      # Config base do Figma Code Connect (mapeamento ainda não iniciado)
index.html              # Página de preview (dev server)
LICENSE
package.json
package-lock.json
README.md
scripts/
  sync-tokens.ts        # Placeholder para automação futura de sync de tokens via Figma API
src/
  tokens/                # Design tokens extraídos das Figma Variables
    colors.ts
    spacing.ts
    radius.ts
    typography.ts
    tokens.css           # CSS custom properties (--color-*, --spacing-*, --radius-*, etc.)
    index.ts
  components/            # Componentes base (página "🧩 Components" do Figma)
    Button/
    Input/
    StatusBadge/
    Divider/
    Spacer/
    BottomNavigation/
  patterns/              # Composições de domínio (página "📐 Patterns" do Figma)
    BankCard/
    TransactionItem/
    Toast/
    BottomSheet/
  preview.tsx            # Style-guide interativo servido em `npm run dev`
  index.ts                # Barrel export público do pacote
tsconfig.json
vite.config.ts
```

## Origem dos tokens e componentes

Extraídos diretamente do arquivo Figma via Figma MCP (`get_design_context`, variáveis locais):

| Página Figma       | Conteúdo                                                                 |
|--------------------|---------------------------------------------------------------------------|
| 🎨 Foundations     | Cores (base, accent, semantic, text), spacing, radius, tipografia        |
| 🧩 Components      | Button, Input, Status Badge, Bottom Navigation, Divider, Spacer          |
| 📐 Patterns        | Bank Card, Transaction Item, Toast, Bottom Sheet                         |

Os componentes **Button**, **Input** e **Status Badge** foram gerados a partir do
design context completo do Figma (cores, paddings e tipografia exatos por variante/estado).
**Bottom Navigation**, **Bank Card**, **Transaction Item**, **Toast** e **Bottom Sheet**
foram reconstruídos a partir da estrutura e dos tokens observados — recomenda-se validar
visualmente contra o Figma antes de publicar em produção.

## Como usar

```bash
npm install
npm run dev       # abre o preview em http://localhost:5173
npm run build     # gera dist/ (ESM + CJS) para publicação do pacote
```

```tsx
import { Button, Input, BankCard } from "@figbank/design-system";
import "@figbank/design-system/dist/tokens.css"; // ou importe tokens.css diretamente do src

function App() {
  return (
    <>
      <BankCard state="Active" />
      <Input labelText="Email" />
      <Button variant="Primary">Continuar</Button>
    </>
  );
}
```

## Próximos passos sugeridos

1. **Code Connect**: mapear cada componente de código ao node correspondente no Figma
   (`figma.config.json` já está preparado para isso).
2. **Testes visuais**: adicionar Storybook ou Chromatic para regressão visual.
3. **Publicação**: configurar CI/CD para publicar o pacote no npm/GitHub Packages.
4. **Automação de tokens**: implementar `scripts/sync-tokens.ts` para manter os tokens
   sincronizados automaticamente com as Figma Variables.

## Licença

MIT — veja [LICENSE](./LICENSE).

/**
 * scripts/sync-tokens.ts
 *
 * Placeholder para automação futura: buscar as Figma Variables via API/MCP
 * e regenerar src/tokens/*.ts + tokens.css automaticamente, evitando
 * divergência entre o Figma e o código.
 *
 * Hoje os tokens em src/tokens foram extraídos manualmente do arquivo:
 * https://www.figma.com/design/d4uJBUbsWeFMdQcJWUoPLI/FigBank-Design-System
 * (coleções: color/base, color/accent, color/semantic, color/text, spacing, radius, typography)
 *
 * Uso futuro sugerido:
 *   FIGMA_TOKEN=xxx FIGMA_FILE_KEY=d4uJBUbsWeFMdQcJWUoPLI npm run tokens:sync
 */

async function main() {
  const fileKey = process.env.FIGMA_FILE_KEY;
  const token = process.env.FIGMA_TOKEN;

  if (!fileKey || !token) {
    console.log(
      "[sync-tokens] FIGMA_FILE_KEY e/ou FIGMA_TOKEN não definidos.\n" +
        "Este script ainda não está implementado — os tokens atuais foram extraídos manualmente.\n" +
        "Implemente aqui a chamada à Figma REST API (GET /v1/files/:file_key/variables/local) " +
        "para automatizar a geração de src/tokens/*.ts e tokens.css."
    );
    return;
  }

  // TODO: implementar chamada real à Figma API e geração de arquivos.
  console.log(`[sync-tokens] Sincronização automática ainda não implementada para o arquivo ${fileKey}.`);
}

main();

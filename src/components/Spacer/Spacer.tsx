import styles from "./Spacer.module.css";

export interface SpacerProps {
  /** Altura do espaçador em px — deve ser um valor da escala de spacing tokens. */
  size?: 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 64 | 80;
}

/**
 * Spacer — mapeado do componente "Spacer" (node 10:98).
 * Utilitário de espaçamento vertical entre elementos de layout.
 */
export function Spacer({ size = 16 }: SpacerProps) {
  return <div className={styles.spacer} style={{ height: size }} aria-hidden="true" />;
}

export default Spacer;

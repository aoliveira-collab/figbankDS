import styles from "./Divider.module.css";

export type DividerType = "Subtle" | "Section";

export interface DividerProps {
  variant?: DividerType;
  className?: string;
}

/**
 * Divider — mapeado do component set "Divider" (node 10:97).
 * "Subtle": linha fina de separação de itens. "Section": traço mais espesso entre seções.
 */
export function Divider({ variant = "Subtle", className }: DividerProps) {
  return (
    <hr
      className={[styles.divider, variant === "Section" ? styles.section : styles.subtle, className]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

export default Divider;

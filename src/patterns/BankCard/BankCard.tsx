import styles from "./BankCard.module.css";
import { StatusBadge } from "../../components/StatusBadge";

export type BankCardState = "Active" | "Blocked" | "Virtual";

export interface BankCardProps {
  state?: BankCardState;
  holderName?: string;
  cardNumber?: string;
  expiry?: string;
  className?: string;
}

const stateBadgeMap: Record<BankCardState, { label: string; status: "Active" | "Blocked" | "Virtual" }> = {
  Active: { label: "Active", status: "Active" },
  Blocked: { label: "Blocked", status: "Blocked" },
  Virtual: { label: "Virtual", status: "Virtual" },
};

/**
 * BankCard — mapeado do component set "Bank Card" (node 10:144), página Patterns.
 * Reconstruído a partir dos tokens e da estrutura observada no Figma (Top Row com chip
 * e badge, número mascarado, Bottom Row com nome e validade).
 * Recomenda-se validar visualmente contra o Figma antes de publicar em produção.
 */
export function BankCard({
  state = "Active",
  holderName = "JOÃO SILVA",
  cardNumber = "•••• •••• •••• 4242",
  expiry = "08/29",
  className,
}: BankCardProps) {
  const badge = stateBadgeMap[state];
  return (
    <div className={[styles.card, styles[state.toLowerCase()], className].filter(Boolean).join(" ")}>
      <div className={styles.topRow}>
        <span className={styles.chip} aria-hidden="true" />
        <StatusBadge label={badge.label} status={badge.status} styleVariant="Outlined" />
      </div>
      <p className={styles.number}>{cardNumber}</p>
      <div className={styles.bottomRow}>
        <span className={styles.name}>{holderName}</span>
        <span className={styles.expiry}>{expiry}</span>
      </div>
    </div>
  );
}

export default BankCard;

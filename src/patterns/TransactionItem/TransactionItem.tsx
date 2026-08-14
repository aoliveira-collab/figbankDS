import type { ReactNode } from "react";
import styles from "./TransactionItem.module.css";

export type TransactionType = "Expense" | "Income" | "Pending";

export interface TransactionItemProps {
  type?: TransactionType;
  icon: ReactNode;
  title: string;
  subtitle?: string;
  amount: string;
  className?: string;
}

/**
 * TransactionItem — mapeado do component set "Transaction Item" (node 10:168), página Patterns.
 * Tipos: Expense (valor negativo), Income (valor positivo), Pending (com badge "Pending").
 */
export function TransactionItem({
  type = "Expense",
  icon,
  title,
  subtitle,
  amount,
  className,
}: TransactionItemProps) {
  return (
    <div className={[styles.item, className].filter(Boolean).join(" ")}>
      <span className={styles.categoryIcon}>{icon}</span>
      <div className={styles.info}>
        <span className={styles.title}>{title}</span>
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      </div>
      <div className={styles.amountWrapper}>
        <span
          className={[
            styles.amount,
            type === "Income" ? styles.income : type === "Pending" ? styles.pending : styles.expense,
          ].join(" ")}
        >
          {amount}
        </span>
        {type === "Pending" && <span className={styles.pendingBadge}>Pending</span>}
      </div>
    </div>
  );
}

export default TransactionItem;

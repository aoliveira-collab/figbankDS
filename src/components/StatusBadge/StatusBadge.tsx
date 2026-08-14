import styles from "./StatusBadge.module.css";

export type StatusBadgeStatus = "Active" | "Blocked" | "Virtual" | "Pending" | "Info";
export type StatusBadgeStyleVariant = "Filled" | "Outlined";

export interface StatusBadgeProps {
  label?: string;
  status?: StatusBadgeStatus;
  styleVariant?: StatusBadgeStyleVariant;
  className?: string;
}

const statusClassMap: Record<StatusBadgeStatus, string> = {
  Active: styles.active,
  Blocked: styles.blocked,
  Virtual: styles.virtual,
  Pending: styles.pending,
  Info: styles.info,
};

/**
 * StatusBadge — mapeado do component set "Status Badge" (node 10:78).
 * Combinações: status × { Filled, Outlined }.
 */
export function StatusBadge({
  label = "Status",
  status = "Active",
  styleVariant = "Filled",
  className,
}: StatusBadgeProps) {
  return (
    <span
      className={[
        styles.badge,
        statusClassMap[status],
        styleVariant === "Outlined" ? styles.outlined : styles.filled,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className={styles.dot} />
      {label}
    </span>
  );
}

export default StatusBadge;

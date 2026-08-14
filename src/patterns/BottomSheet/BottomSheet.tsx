import type { ReactNode } from "react";
import styles from "./BottomSheet.module.css";
import { Button } from "../../components/Button";

export type BottomSheetState = "Confirmation" | "Success";

export interface BottomSheetProps {
  state?: BottomSheetState;
  title?: string;
  recipient?: string;
  account?: string;
  amount?: string;
  onConfirm?: () => void;
  onDone?: () => void;
  children?: ReactNode;
  className?: string;
}

/**
 * BottomSheet — mapeado do component set "Bottom Sheet" (node 10:212), página Patterns.
 * Estados: Confirmation (recipient/account/amount + botão Confirmar) e Success (botão Concluir).
 */
export function BottomSheet({
  state = "Confirmation",
  title,
  recipient,
  account,
  amount,
  onConfirm,
  onDone,
  children,
  className,
}: BottomSheetProps) {
  return (
    <div className={[styles.sheet, className].filter(Boolean).join(" ")}>
      <span className={styles.handle} aria-hidden="true" />
      {state === "Confirmation" ? (
        <>
          <p className={styles.title}>{title ?? "Confirm transfer"}</p>
          <div className={styles.details}>
            {recipient && (
              <div className={styles.row}>
                <span className={styles.rowLabel}>Recipient</span>
                <span className={styles.rowValue}>{recipient}</span>
              </div>
            )}
            {account && (
              <div className={styles.row}>
                <span className={styles.rowLabel}>Account</span>
                <span className={styles.rowValue}>{account}</span>
              </div>
            )}
            {amount && (
              <div className={styles.row}>
                <span className={styles.rowLabel}>Amount</span>
                <span className={styles.rowValueAmount}>{amount}</span>
              </div>
            )}
          </div>
          <div className={styles.actions}>
            <Button variant="Primary" onClick={onConfirm} style={{ width: "100%" }}>
              Confirm
            </Button>
          </div>
        </>
      ) : (
        <>
          <p className={styles.title}>{title ?? "Transfer complete"}</p>
          {children}
          <div className={styles.actions}>
            <Button variant="Primary" onClick={onDone} style={{ width: "100%" }}>
              Done
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default BottomSheet;

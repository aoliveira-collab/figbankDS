import styles from "./Toast.module.css";

export type ToastType = "Success" | "Error" | "Warning" | "Info";

export interface ToastProps {
  type?: ToastType;
  message: string;
  className?: string;
}

/**
 * Toast — mapeado do component set "Toast" (node 10:185), página Patterns.
 * Tipos: Success, Error, Warning, Info — cada um com uma barra de acento lateral (`Accent`)
 * e um círculo de 28px (`Ellipse`), ambos na cor semântica do tipo.
 */
export function Toast({ type = "Info", message, className }: ToastProps) {
  return (
    <div className={[styles.toast, styles[type.toLowerCase()], className].filter(Boolean).join(" ")} role="status">
      <span className={styles.accent} aria-hidden="true" />
      <span className={styles.icon} aria-hidden="true" />
      <p className={styles.message}>{message}</p>
    </div>
  );
}

export default Toast;

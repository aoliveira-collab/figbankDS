import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

export type ButtonType = "Primary" | "Secondary" | "Destructive" | "Ghost";
export type ButtonState = "Default" | "Pressed" | "Disabled";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "disabled"> {
  /** Variante visual — corresponde à variante "Type" no Figma. */
  variant?: ButtonType;
  /** Estado forçado (uso interno / storybook). O estado "Pressed" normal já é tratado via :active no CSS. */
  state?: ButtonState;
  label?: string;
}

/**
 * Button — mapeado do component set "Button" (node 10:26) do FigBank Design System.
 * Variantes: Primary, Secondary, Destructive, Ghost × Default/Pressed/Disabled.
 */
export function Button({
  variant = "Primary",
  state = "Default",
  label,
  children,
  className,
  ...rest
}: ButtonProps) {
  const isDisabled = state === "Disabled";
  return (
    <button
      type="button"
      disabled={isDisabled}
      className={[styles.button, styles[variant.toLowerCase()], className]
        .filter(Boolean)
        .join(" ")}
      data-state={state}
      {...rest}
    >
      {label ?? children ?? "Button Label"}
    </button>
  );
}

export default Button;

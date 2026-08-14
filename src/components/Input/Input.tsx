import { useId, type InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

export type InputState = "Default" | "Focused" | "Error" | "Disabled";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "disabled"> {
  labelText?: string;
  helperText?: string;
  /** Estado forçado (ex.: "Error"); "Focused" já é tratado nativamente via :focus. */
  state?: Exclude<InputState, "Focused" | "Default">;
  disabled?: boolean;
}

/**
 * Input — mapeado do component set "Input" (node 10:47) do FigBank Design System.
 * Estados: Default, Focused (:focus), Error, Disabled.
 */
export function Input({
  labelText = "Label",
  helperText = "Helper text",
  state,
  disabled,
  className,
  id,
  ...rest
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const isError = state === "Error";

  return (
    <div className={[styles.wrapper, disabled ? styles.disabled : ""].filter(Boolean).join(" ")}>
      <label
        htmlFor={inputId}
        className={[styles.label, isError ? styles.labelError : ""].filter(Boolean).join(" ")}
      >
        {labelText}
      </label>
      <div className={[styles.field, isError ? styles.fieldError : ""].filter(Boolean).join(" ")}>
        <input
          id={inputId}
          disabled={disabled}
          className={[styles.input, className].filter(Boolean).join(" ")}
          {...rest}
        />
      </div>
      <p className={[styles.helper, isError ? styles.helperError : ""].filter(Boolean).join(" ")}>
        {helperText}
      </p>
    </div>
  );
}

export default Input;

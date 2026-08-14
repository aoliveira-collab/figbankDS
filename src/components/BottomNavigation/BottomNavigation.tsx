import type { ReactNode } from "react";
import styles from "./BottomNavigation.module.css";

export interface BottomNavItem {
  key: string;
  label: string;
  icon: ReactNode;
  active?: boolean;
}

export interface BottomNavigationProps {
  items: BottomNavItem[];
  onItemSelect?: (key: string) => void;
  className?: string;
}

/**
 * BottomNavigation — mapeado do componente "Bottom Navigation" (node 10:79).
 * Barra de navegação inferior fixa, mobile-first, com itens ícone + label.
 * OBS: este componente foi reconstruído a partir da estrutura e dos tokens do Figma
 * (não passou por get_design_context linha a linha) — recomenda-se validar visualmente
 * contra o node 10:79 antes de publicar em produção.
 */
export function BottomNavigation({ items, onItemSelect, className }: BottomNavigationProps) {
  return (
    <nav className={[styles.nav, className].filter(Boolean).join(" ")}>
      {items.map((item) => (
        <button
          key={item.key}
          type="button"
          className={[styles.item, item.active ? styles.active : ""].filter(Boolean).join(" ")}
          onClick={() => onItemSelect?.(item.key)}
          aria-current={item.active ? "page" : undefined}
        >
          <span className={styles.icon}>{item.icon}</span>
          <span className={styles.label}>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

export default BottomNavigation;

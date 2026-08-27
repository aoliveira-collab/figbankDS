import { createRoot } from "react-dom/client";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { StatusBadge } from "./components/StatusBadge";
import { Divider } from "./components/Divider";
import { BankCard } from "./patterns/BankCard";
import { Toast } from "./patterns/Toast";
import "./tokens/tokens.css";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ color: "var(--color-text-secondary)", fontSize: 14, fontWeight: 600, marginBottom: 16 }}>
        {title}
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "flex-start" }}>{children}</div>
    </section>
  );
}

function App() {
  return (
    <div
      style={{
        background: "var(--color-base-950)",
        minHeight: "100vh",
        padding: 32,
        fontFamily: "var(--font-family-base)",
      }}
    >
      <h1 style={{ color: "var(--color-text-primary)", marginBottom: 32 }}>FigBank Design System — Preview</h1>

      <Section title="Button">
        <Button variant="Primary">Primary</Button>
        <Button variant="Secondary">Secondary</Button>
        <Button variant="Destructive">Destructive</Button>
        <Button variant="Ghost">Ghost</Button>
        <Button variant="Primary" state="Disabled">
          Disabled
        </Button>
      </Section>

      <Section title="Input">
        <div style={{ width: 320 }}>
          <Input labelText="Email" placeholder="you@example.com" />
        </div>
        <div style={{ width: 320 }}>
          <Input labelText="Password" state="Error" helperText="Senha inválida" />
        </div>
      </Section>

      <Section title="Status Badge">
        <StatusBadge status="Active" label="Active" />
        <StatusBadge status="Blocked" label="Blocked" />
        <StatusBadge status="Virtual" label="Virtual" />
        <StatusBadge status="Pending" label="Pending" styleVariant="Outlined" />
        <StatusBadge status="Info" label="Info" styleVariant="Outlined" />
      </Section>

      <Section title="Divider">
        <div style={{ width: 320 }}>
          <Divider />
        </div>
      </Section>

      <Section title="Bank Card">
        <BankCard state="Active" />
        <BankCard state="Blocked" holderName="MARIA SOUZA" />
        <BankCard state="Virtual" holderName="PEDRO LIMA" />
      </Section>

      <Section title="Toast">
        <Toast type="Success" message="Transferência realizada com sucesso." />
        <Toast type="Error" message="Não foi possível concluir a transação." />
        <Toast type="Warning" message="Seu limite diário está próximo do fim." />
        <Toast type="Info" message="Novo extrato disponível." />
      </Section>
    </div>
  );
}

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
}

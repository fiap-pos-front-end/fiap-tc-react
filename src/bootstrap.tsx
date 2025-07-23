import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import ReactPage from "./ReactPage";

// rodar local
// const local = document.getElementById("root")!;
// if (local) {
//   mount("root");
// }

export function mount(containerId: string, initialPath: string = "/") {
  const el = document.getElementById(containerId);
  if (!el) {
    console.error(`Container "${containerId}" não encontrado!`);
    return;
  }

  const root = createRoot(el);
  root.render(
    <MemoryRouter initialEntries={[initialPath]} initialIndex={0}>
      <ReactPage />
    </MemoryRouter>
  );
}

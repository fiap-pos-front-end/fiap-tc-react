import ReactDOM from "react-dom/client";
import ReactPage from "./ReactPage";

const container = document.getElementById("root");
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<ReactPage />);
}

export function mount(containerId: string) {
  const container = document.getElementById(containerId);
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<ReactPage />);
  } else {
    console.error(`Container with id ${containerId} not found!`);
  }
}

import React from "react";
import ReactDOM from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import AboutUs from "./pages/about-us";
import HomePage from "./components/Home";

const routesMap: Record<string, React.ReactNode> = {
  "/": <HomePage />,
  "/about-us": <AboutUs />,
};

export function mount(containerId: string, route: string = "/") {
  const container = document.getElementById(containerId);
  if (!container) return;

  const root = ReactDOM.createRoot(container);
  root.render(
    <MemoryRouter initialEntries={[route]}>
      {routesMap[route] ?? <div>404</div>}
    </MemoryRouter>
  );
}

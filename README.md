# Fiap Tech Challenge React

**Microfrontend React Remote** para o Shell de Microfrontends do FIAP Tech Challenge.

---

## Tecnologias

- **React** 19.x
- **TypeScript** 5.x
- **Webpack** 5 + Module Federation
- **Vite** 4.x (plugin-react)
- **Chart.js** + **react-chartjs-2**
- **mitt** (Event Bus)
- **ESLint** (configuração customizada)

## Estrutura de Pastas

```
fiap-tc-react/
├─ public/            # Assets estáticos
├─ src/
│  ├─ assets/         # Logos e imagens
│  ├─ components/     # Gráficos
│  ├─ hooks/          # Hooks customizados
│  ├─ pages/          # Páginas
│  ├─ bootstrap.tsx   # Ponto de entrada federado
│  ├─ main.tsx        # Inicialização standalone
│  └─ index.css       # Estilos globais
├─ index.html         # Template Webpack
├─ vite.config.ts     # Configuração Vite
├─ webpack.config.cjs # Configuração Webpack Dev + Federation
└─ package.json       # Scripts e dependências
```

## Scripts disponíveis

```bash
npm run start     # Dev com Webpack (http://localhost:4300)
npm run build     # Build de produção via Webpack (output: dist/)
```

## Como executar

Utilize o `start:all` no projeto fiap-tc-shell.

## Integração com Shell (Angular)

No shell Angular, adicione no crie um component `ReactWrapperComponent`:

```ts
import { Component } from "@angular/core";
import { loadRemoteModule } from "@angular-architects/module-federation";

@Component({
  selector: "app-react-wrapper",
  template: '<div id="react-container"></div>',
})
export class ReactWrapperComponent {
  async ngAfterViewInit() {
    const remoteModule = await loadRemoteModule({
      type: "module",
      remoteEntry: URL_MFE_REACT,
      exposedModule: "./mount",
    });

    remoteModule.mount("react-container");
  }
}
```

Utlize conforme necessário:

```html
<app-react-wrapper />
```

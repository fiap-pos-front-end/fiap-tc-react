const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const React = require("react");
const { renderToString } = require("react-dom/server");
const NotFoundPage = require("./src/pages/NotFoundPage.tsx").default;

const app = express();
const PORT = process.env.PORT || 4300;
const clientDist = path.resolve(__dirname, "../dist");

app.use(cors());

app.use(express.static(clientDist));

app.use((req, res) => {
  const appHtml = renderToString(React.createElement(NotFoundPage));
  const template = fs.readFileSync(path.join(clientDist, "index.html"), "utf8");
  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );
  res.status(404).send(html);
});

app.listen(PORT, () => {
  console.log(`⚡ SSR rodando em http://localhost:${PORT}`);
});

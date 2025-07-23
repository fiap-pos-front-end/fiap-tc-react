global.React = require("react");

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const { renderToString } = require("react-dom/server");
const AboutUs = require("./src/pages/AboutUs.tsx").default;

const app = express();
const PORT = process.env.PORT || 4300;
const clientDist = path.resolve(__dirname, "../dist");

app.use(cors());

app.use(express.static(clientDist));

app.get("/sobre-nos", (req, res) => {
  const appHtml = renderToString(React.createElement(AboutUs));
  const template = fs.readFileSync(path.join(clientDist, "index.html"), "utf8");
  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );
  res.status(200).send(html);
});

app.listen(PORT, () => {
  console.log(`⚡ SSR rodando em http://localhost:${PORT}`);
});

import { Handler } from "aws-lambda";
import { renderToString } from "react-dom/server";
import React from "react";
import { AboutUs } from "./about-us";
import fs from "fs";
import path from "path";

export const handler: Handler = async () => {
  const template = fs.readFileSync(
    path.join(__dirname, "template.html"),
    "utf8"
  );

  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${renderToString(React.createElement(AboutUs))}</div>`
  );

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: html,
  };
};

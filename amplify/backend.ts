import { defineBackend } from "@aws-amplify/backend";
import { lambda, staticSite } from "@aws-amplify/backend";

const ssr = lambda({
  name: "ssr",
  entry: "./amplify/functions/ssr/index.ts",
  runtime: "nodejs18.x",
});

defineBackend({
  ssr,
  hosting: staticSite({
    path: "./dist",
    buildCommands: ["npm install", "npm run build"],
    errorPage: "index.html",
    rewrites: [
      {
        source: "/sobre-nos",
        destination: ssr.url,
      },
    ],
  }),
});

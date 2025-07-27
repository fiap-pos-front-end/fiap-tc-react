import { defineFunction } from "@aws-amplify/backend";

export const ssr = defineFunction({
  name: "ssr",
  entry: "./index.ts",
});

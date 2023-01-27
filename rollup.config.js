import path from "path";
import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const bundle = (config, module) => ({
  ...config,
  input: `src/${module}/index.ts`,
});

export default function (args) {
  let c = Object.keys(args).find((key) => key.startsWith("config-"));

  c = c.slice("config-".length).replace(/_/g, "/");

  return [
    bundle(
      {
        plugins: [
          esbuild({ minify: true, tsconfig: path.resolve("./tsconfig.json") }),
          nodeResolve(),
        ],
        output: [
          {
            format: "es",
            file: `dist/esm/${c}.mjs`,
          },
          {
            format: "cjs",
            file: `dist/${c}.cjs`,
          },
        ],
      },
      c
    ),
    bundle(
      {
        plugins: [dts()],
        output: [
          {
            format: "es",
            file: `dist/esm/${c}.d.mts`,
          },
          {
            format: "cjs",
            file: `dist/${c}.d.ts`,
          },
        ],
      },
      c
    ),
  ];
}

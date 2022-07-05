import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import banner2 from "rollup-plugin-banner2";

import pkg from "../package.json";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "playground/src/modular-engine-preview/index.cjs",
        format: "cjs",
        plugins: [],
      },
      {
        file: "playground/src/modular-engine-preview/index.mjs",
        format: "esm",
        plugins: [],
      },
      {
        file: pkg.main,
        format: "cjs",
        plugins: [terser()],
      },
      {
        file: pkg.module,
        format: "esm",
        plugins: [terser()],
      },
    ],
    plugins: [
      banner2(() => `/* eslint-disable */`),
      typescript({
        rollupCommonJSResolveHack: false,
        clean: true,
      }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];

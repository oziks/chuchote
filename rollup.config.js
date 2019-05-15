import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

const defaultConfig = {
  input: "src/chuchote.ts",
  plugins: [
    typescript({
      typescript: require("typescript")
    })
  ]
};

export default [
  // browser-friendly UMD build
  {
    ...defaultConfig,
    output: {
      name: pkg.name,
      file: pkg.browser,
      format: "umd"
    }
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    ...defaultConfig,
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" }
    ]
  }
];

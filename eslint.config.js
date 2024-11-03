/** @type {import("eslint").Linter.FlatConfig} */
const eslintConfig = [
    {
      files: ["**/*.js", "**/*.jsx"],
      languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        globals: {
          browser: true,
          node: true,
        },
        parserOptions: {
          babelOptions: {
            presets: ["@babel/preset-react"], // For JSX handling
          },
        },
      },
      plugins: {
        react: require("eslint-plugin-react"),
      },
      rules: {
        "no-console": "warn",
      },
    },
    {
      files: ["**/*.ts", "**/*.tsx"],
      languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      parser: require("@typescript-eslint/parser"),
      plugins: {
        "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      },
      rules: {
        "no-console": "warn",
      },
    },
  ];
  
  module.exports = eslintConfig;
  
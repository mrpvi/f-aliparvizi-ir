import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "dist/**",
      "build/**",
      "out/**",
      "*.log",
      "*.config.ts",
      "*.config.js",
      "*.config.mjs",
      "postcss.config.mjs",
      "next.config.ts",
      "tsconfig.json",
    ],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
      globals: {
        console: "readonly",
        process: "readonly",
        global: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        exports: "writable",
        module: "writable",
        require: "readonly",
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
      "@typescript-eslint": tsEslintPlugin,
    },
    rules: {
      ...eslintPluginPrettier.configs.recommended.rules,
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      ...tsEslintPlugin.configs.recommended.rules,
      "no-console": ["warn", { allow: ["error"] }],
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
  ),
];

export default eslintConfig;
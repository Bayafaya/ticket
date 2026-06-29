import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import jsdoc from "eslint-plugin-jsdoc";
import importPlugin from "eslint-plugin-import";
import i18next from "eslint-plugin-i18next";
import nextPlugin from "@next/eslint-plugin-next";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  jsdoc.configs["flat/recommended"],
  i18next.configs["flat/recommended"],
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      jsdoc: jsdoc,
      import: importPlugin,
      next: nextPlugin,
    },
    rules: {
      "no-restricted-imports": [
        "error",
        {
          name: "next/link",
          message: "Please import from `@/i18n/navigation` instead.",
        },
        {
          name: "next/navigation",
          importNames: [
            "redirect",
            "permanentRedirect",
            "useRouter",
            "usePathname",
          ],
          message: "Please import from `@/i18n/navigation` instead.",
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "no-console": "warn",
      eqeqeq: "error",
      indent: [
        "error",
        2,
        { SwitchCase: 1, ignoredNodes: ["TemplateLiteral"] },
      ],
      "react/jsx-indent": ["error", 2],
      "react/jsx-indent-props": ["error", 2],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "react-hooks/exhaustive-deps": "error",
      "react-hooks/rules-of-hooks": "error",
      "jsdoc/require-jsdoc": "off",
      "import/no-unresolved": "error",
      "import/newline-after-import": "error",
      "import/no-extraneous-dependencies": "error",
      "next/no-img-element": "error",
      "next/no-html-link-for-pages": "error",
      "next/no-sync-scripts": "error",
      "react/jsx-no-target-blank": "error",
      "no-eval": "error",
      "max-lines": [
        "warn",
        {
          max: 200,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["sibling", "parent"],
            "index",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
    },
  },
];

export default eslintConfig;

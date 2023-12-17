module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:lodash/recommended",
    "plugin:jest/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "react-hooks",
    "import",
    "lodash",
    "jest",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/no-duplicates": "error",
    "import/no-unresolved": "error",
    "import/named": "error",
    "react/no-typos": "error",
    "react/no-unused-state": "error",
    "react/jsx-no-bind": "error",
    "lodash/import-scope": ["error", "member"],
    "lodash/chaining": ["error", "implicit"],
    "no-unused-vars": ["error", { argsIgnorePattern: "_" }],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": [
      "error",
      {
        additionalHooks:
          "(useDeepCompareEffect|useDeepCompareCallback|useDeepCompareMemo)",
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
    react: {
      version: "detect",
    },
  },
  globals: {
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true,
  },
};

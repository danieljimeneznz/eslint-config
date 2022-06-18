module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/prefer-namespace-keyword": ["error"],
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/type-annotation-spacing": ["error"],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: ["default"],
        format: ["strictCamelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: ["typeLike"],
        format: ["StrictPascalCase"],
      },
      {
        selector: ["variable"],
        modifiers: ["const"],
        format: ["strictCamelCase ", "UPPER_CASE"],
      },
      {
        selector: ["memberLike"],
        modifiers: ["private"],
        leadingUnderscore: "require",
      },
      {
        selector: ["interface"],
        prefix: ["I"],
      },
    ],
  },
};

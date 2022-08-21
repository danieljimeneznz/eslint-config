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
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        SwitchCase: 1,
      },
    ],
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
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: ["typeLike"],
        format: ["PascalCase"],
      },
      {
        selector: ["variable"],
        modifiers: ["const"],
        format: ["camelCase", "UPPER_CASE", "snake_case"],
        leadingUnderscore: "allow",
      },
      {
        selector: ["variable"],
        modifiers: ["destructured"],
        format: ["camelCase", "UPPER_CASE", "snake_case"],
        leadingUnderscore: "allow",
      },
      {
        selector: ["memberLike"],
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "require",
      },
      {
        selector: ["interface"],
        format: ["PascalCase"],
      },
    ],
  },
};

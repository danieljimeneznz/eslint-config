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
        selector: ["typeLike", "enumMember"],
        format: ["PascalCase"],
      },
      {
        selector: ["parameter"],
        modifiers: ["destructured"],
        format: null,
      },
      {
        selector: ["property", "objectLiteralProperty"],
        format: null,
      },
      {
        selector: [
          "classProperty",
          "objectLiteralProperty",
          "typeProperty",
          "classMethod",
          "objectLiteralMethod",
          "typeMethod",
          "accessor",
          "enumMember"
        ],
        modifiers: ["requiresQuotes"],
        format: null,
      },
      {
        selector: ["variable"],
        modifiers: ["const"],
        types: ["function"],
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: ["variable"],
        modifiers: ["destructured"],
        format: null,
      },
      {
        selector: ["variable"],
        modifiers: ["const"],
        types: ["boolean", "string", "number", "array"],
        format: ["camelCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
      },
      {
        selector: ["memberLike"],
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "require",
      },
    ],
  },
};

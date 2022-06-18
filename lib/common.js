module.exports = {
  extends: ["eslint:recommended"],
  env: {
    node: true,
    es6: true,
    mocha: true,
  },
  plugins: ["prefer-arrow", "import"],
  rules: {
    complexity: ["error", 8],
    eqeqeq: ["error", "smart"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    camelcase: ["error", { properties: "always" }],
    "linebreak-style": ["error", "unix"],
    "brace-style": ["error", "1tbs"],
    "eol-last": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "no-multi-spaces": ["error"],
    "no-trailing-spaces": ["error"],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "space-before-blocks": ["error"],
    "import/no-default-export": "error",
    "arrow-body-style": ["error", "as-needed"],
    "no-return-await": ["error"],
    "require-await": ["error"],
    "default-case-last": ["error"],
    "no-console": "off",
    "linebreak-style": "off",
    "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
    "comma-spacing": ["error", { before: false, after: true }],
    "generator-star-spacing": ["error", { before: false, after: true }],
    "arrow-spacing": ["error", { before: true, after: true }],
    "keyword-spacing": ["error", { before: true, after: true }],
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
      },
    ],
    semi: ["error", "always"],
    "prefer-const": [
      "error",
      {
        destructuring: "all",
      },
    ],
    "max-lines": [
      "error",
      {
        max: 600,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    "max-len": [
      "error",
      {
        code: 120,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignorePattern: true,
      },
    ],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "never",
        exports: "never",
        functions: "never",
      },
    ],
    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: true,
      },
    ],
    "func-style": [
      "error",
      "expression",
      {
        allowArrowFunctions: true,
      },
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          "external",
          "builtin",
          "internal",
          "sibling",
          "parent",
          "index",
        ],
      },
    ],
  },
};

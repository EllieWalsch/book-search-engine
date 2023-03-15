module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "standard",
    "prettier",
  ],
  overrides: [
    {
      files: ["*.js"],
      processor: "@graphql-eslint/graphql",
    },
    {
      files: ["*.graphql"],
      extends: [
        "plugin:@graphql-eslint/schema-recommended",
        "plugin:@graphql-eslint/operations-recommended",
      ],
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "use-encapsulation"],
  rules: { "use-encapsulation/prefer-custom-hooks": 1 },
  settings: {
    react: {
      version: "detect",
    },
  },
};

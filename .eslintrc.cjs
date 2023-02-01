module.exports = {
  env: {
    es2019: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "ES2022",
    sourceType: "commonjs"
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-extra-semi": "off"
  },
  ignorePatterns: ["node_modules", "build", "coverage", ".cache", "archive"]
}

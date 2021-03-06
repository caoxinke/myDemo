module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: "eslint:recommended",
  rules: {
    // enable additional rules
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],

    // override default options for rules from base configurations
    "comma-dangle": ["error", "always"],
    "no-cond-assign": ["error", "always"],

    // disable rules from base configurations
    "no-console": "off",
  },
  parserOptions: {
    sourceType: "module",
  },
};

module.exports = {
  parser: "@babel/eslint-parser",
  extends: ["airbnb","prettier"],
  env: { browser: true, es6: true },
  parserOptions:{
    requireConfigFile:false,
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js"] }],
    "react/prop-types": 0,
    "react/prefer-stateless-function": 0,
    "react/no-array-index-key": 0,
    "no-console": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-one-expression-per-line": 0,
  },
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      pragma: "React",
      version: "18.1.0",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
};

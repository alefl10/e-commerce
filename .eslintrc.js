module.exports = {
	"parser": "babel-eslint",
    "extends": ["airbnb", "plugin:react/recommended"],
    "rules": {
      "no-console": 0,
      "import/no-dynamic-require": 0,
      "func-names": ["error", "never"],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "indent": [2, "tab"],
      "no-tabs": 0,
      "arrow-parens": ["error", "as-needed"],
      "react/jsx-indent": "off",
      "react/jsx-indent-props": "off",
    }
  };
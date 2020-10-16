const RULESTATE = {
  OFF: 'off',
  WARN: 'warn',
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    'plugin:react/recommended',
    "plugin:@typescript-eslint/recommended",
    'airbnb',
    'prettier',
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    // 'prettier/prettier': RULESTATE.WARN,
    'no-console': RULESTATE.OFF,
    'global-require': RULESTATE.OFF,
    'import/no-dynamic-require': RULESTATE.OFF,
    // A temporary hack related to IDE not resolving correct package.json
    'import/no-extraneous-dependencies': RULESTATE.OFF,
    'import/prefer-default-export': RULESTATE.OFF,
    'react/destructuring-assignment': RULESTATE.WARN,
    'no-return-assign': RULESTATE.WARN,
    "react/react-in-jsx-scope": 0,
    'react/jsx-props-no-spreading': RULESTATE.WARN,
    'react/no-access-state-in-setstate': RULESTATE.WARN,
    'react/prefer-stateless-function': RULESTATE.WARN,
    'react/static-property-placement': RULESTATE.OFF,
    'react/no-array-index-key': RULESTATE.WARN,
  },
};

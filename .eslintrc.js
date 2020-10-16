const RULESTATE = {
  OFF: 0
}

module.exports = {
  env: {
    browser: true,
    es2020: true,
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
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    // 'prettier/prettier': 1,
    '@typescript-eslint/no-use-before-define': 1,
    'no-console': RULESTATE.OFF,
    'global-require': 0,
    'import/no-dynamic-require': 0,
    // A temporary hack related to IDE not resolving correct package.json
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'react/destructuring-assignment': 1,
    'no-return-assign': 1,
    "react/react-in-jsx-scope": 0,
    'react/jsx-props-no-spreading': 1,
    'react/no-access-state-in-setstate': 1,
    'react/prefer-stateless-function': 1,
    'react/static-property-placement': 0,
    'react/no-array-index-key': 1,
    'react/jsx-filename-extension': [ 2, 
      { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }
    ],
  },
};

// const RULESTATE = {
//   OFF: 'off',
//   WARN: 'warn',
// };

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
    rules: {
    // A temporary hack related to IDE not resolving correct package.json
    // 'import/no-extraneous-dependencies': RULESTATE.OFF,
    // 'import/prefer-default-export': RULESTATE.OFF,
    // 'react/destructuring-assignment': RULESTATE.WARN,
    // 'no-return-assign': RULESTATE.WARN,
    // 'react/jsx-props-no-spreading': RULESTATE.WARN,
    // 'react/no-access-state-in-setstate': RULESTATE.WARN,
    // 'react/prefer-stateless-function': RULESTATE.WARN,
    // 'react/static-property-placement': RULESTATE.OFF,
    // 'prettier/prettier': RULESTATE.WARN,
    // 'react/no-array-index-key': RULESTATE.WARN,
  },
};



// module.exports = {
//   extends: 'erb/typescript',
//   rules: {
//     // A temporary hack related to IDE not resolving correct package.json
//     'import/no-extraneous-dependencies': RULESTATE.OFF,
//     'import/prefer-default-export': RULESTATE.OFF,
//     'react/destructuring-assignment': RULESTATE.WARN,
//     'no-return-assign': RULESTATE.WARN,
//     'react/jsx-props-no-spreading': RULESTATE.WARN,
//     'react/no-access-state-in-setstate': RULESTATE.WARN,
//     'react/prefer-stateless-function': RULESTATE.WARN,
//     'react/static-property-placement': RULESTATE.OFF,
//     'prettier/prettier': RULESTATE.WARN,
//     'react/no-array-index-key': RULESTATE.WARN,
//   },
//   parserOptions: {
//     ecmaVersion: 2020,
//     sourceType: 'module',
//     project: './tsconfig.json',
//     tsconfigRootDir: __dirname,
//     createDefaultProgram: true,
//   },
//   settings: {
//     'import/resolver': {
//       // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
//       node: {},
//       // webpack: {
//       //   config: require.resolve('./configs/webpack.config.eslint.js'),
//       // },
//     },
//     'import/parsers': {
//       '@typescript-eslint/parser': ['.ts', '.tsx'],
//     },
//   },
// };

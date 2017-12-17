module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  rules: {
    'prettier/prettier': [
      1,
      {
        bracketSpacing: true,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
  plugins: ['prettier', 'react'],
  parser: 'babel-eslint',
};

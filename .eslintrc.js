module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  rules: {
    'import/prefer-default-export': 0,
    'prettier/prettier': [
      1,
      {
        bracketSpacing: true,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'react/jsx-filename-extension': 0,
  },
  plugins: ['prettier', 'react'],
  parser: 'babel-eslint',
};

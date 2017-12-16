module.exports = {
  extends: ['prettier', 'prettier/react'],
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
  plugins: ['prettier'],
  parser: 'babel-eslint',
};

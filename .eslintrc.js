module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  ecmaFeatures: {
    'prettier/prettier': [
      1,
      {
        bracketSpacing: true,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    // 'max-len': 10,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-unescaped-entities': 0,
    'no-console': 0,
    'no-param-reassign': 0,
    'import/prefer-default-export': 0,
    'no-return-assign': 0,
    'default-param-last': 0,
  },
};

module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],

  rules: {
    // override/add rules settings here, such as:
    // 使用两个空格进行缩进，
    // indent: [
    //   2,
    //   2,
    //   {
    //     SwitchCase: 1, // case 针对 switch 语句使用 2 个空格缩进
    //   },
    // ],
    'vue/multi-word-component-names': 'off',
  },
};

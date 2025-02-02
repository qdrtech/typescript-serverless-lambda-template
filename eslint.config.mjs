// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      "*.config.js",
      "build/**/*" // ignores all content under the 'build/' folder
    ]
  }
);
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true, // Next.js는 서버 사이드 렌더링을 지원하므로 node 환경도 추가
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended", // React 플러그인과 기본 규칙 추가
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended", // Prettier와의 통합을 위해 추가
    "next", // Next.js의 기본 ESLint 설정을 추가
    "next/core-web-vitals", // Next.js의 Core Web Vitals 규칙 추가
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module", // 모듈 시스템을 사용하도록 설정
  },
  plugins: [
    "react-refresh",
    "@typescript-eslint", // TypeScript 플러그인 추가
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-extra-boolean-cast": "off",
    "no-debugger": "off",
    "no-unused-vars": [
      "warn", // 개발 과정에서 경고로 설정
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false,
        varsIgnorePattern: "^_", // _로 시작하는 경우 무시
        argsIgnorePattern: "^_",
      },
    ],
    "react/no-unescaped-entities": "off",
    "react/react-in-jsx-scope": "off", // Next.js에서는 React를 자동으로 임포트하지 않으므로 이 규칙을 끄기
    "@typescript-eslint/explicit-module-boundary-types": "off", // 필요에 따라 조정 가능
  },
};

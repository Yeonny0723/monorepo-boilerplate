# Monorepo Boilerplate

### 사용 기술

Framework: NextJS <br/>
Monorepo Tool: Turborepo <br/>
CICD: Vercel <br/>
Package Manager: yarn berry <br/>

### 프로젝트 구조

```
turborepo-demo/
├── apps/
│ ├── web/ # 애플리케이션의 소스 코드
│ └── docs/ # 문서화 애플리케이션 (storybook, tsdocs, api 문서 등)
├── packages/
│ ├── eslint-config/ # 공통 ESLint 규칙 설정
│ ├── typescript-config/ # 공통 typescript 설정
│ ├── ui/ # 공통 라이브러리와 모듈
│ ├── utils/ # 공통 유틸리티 함수
│ └── services/ # 공통 서비스
├── package.json # 모노레포의 루트 package.json
└── turbo.json # Turbo의 설정 파일
```

## 실행

```
# 커밋 템플릿 등록
git config --global commit.template .gitmessage.txt


# 전체 실행
yarn turbo run dev

# 특정 앱 실행
yarn turbo run dev --filter=my-app

# 특정 패키지 실행
yarn turbo run dev --filter=my-package

```

## 참고 링크

[공식문서](https://turbo.build/repo/docs) <br/>

[Turborepo + Yarn berry를 이용한 Monorepo 구축 방법](https://techblog.uplus.co.kr/turborepo-yarn-berry%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-monorepo-%EA%B5%AC%EC%B6%95-%EB%B0%A9%EB%B2%95-e09d58da9fdf) <br/>

[Step-by-Step Monorepo Tutorial: Turbo Repo, Vite, Next, Tailwind, and Storybook](https://www.youtube.com/watch?v=exCTI9nOc-E) <br/>

## 오류

1. internal package 생성 후, 캐시를 정리하여 올바르게 인식되도록 함.

```
yarn install
```

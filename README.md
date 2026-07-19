# QA Study

VitePress로 정리하는 QA 인프런 강의 공부 노트입니다.

## 공부 방향

- 주제: QA 실무와 테스트 기본기
- 방식: 강의 내용을 그대로 옮기지 않고, 개념을 내 언어로 요약합니다.
- 목표: QA 학습 내용을 검색 가능한 문서 사이트로 쌓아 갑니다.

## 실행

```bash
npm.cmd install
npm.cmd run docs:dev
```

로컬 문서 사이트는 기본적으로 `http://localhost:5173`에서 열립니다.

## 작성 규칙

- 각 문서는 `한 문장 정의 -> 핵심 개념 -> 실무 예시 -> 헷갈리는 점 -> 질문` 순서로 정리합니다.
- 강의 문장은 길게 복사하지 않고, 필요한 경우 짧은 인용과 강의 정보를 남깁니다.
- 강의 노트는 `class` 폴더 안에 추가합니다.
- 나중에 다시 찾기 쉽도록 파일명은 가능하면 영어 소문자와 하이픈을 사용합니다.

## 배포

Vercel에서는 아래 설정을 사용합니다.

- Build Command: `npm run docs:build`
- Output Directory: `.vitepress/dist`

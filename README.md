# QA Study

인프런 QA 강의를 들으며 정리한 실무 QA 학습 노트입니다.  
강의 내용을 그대로 옮기기보다, 테스트 설계와 수행 과정에서 다시 참고하기 쉬운 형태로 재구성합니다.

## 사이트

[https://qa-study-inflearn.vercel.app/](https://qa-study-inflearn.vercel.app/)

## 공부 방향

- QA 실무 흐름을 이해합니다.
- 테스트 케이스와 체크리스트를 구조적으로 정리합니다.
- 버그 리포트 작성과 협업 흐름을 학습합니다.
- 면접이나 실무 복습 때 다시 찾기 쉬운 문서로 쌓아 갑니다.

## 문서 구성

```text
.
├─ class/              # 강의별 학습 노트
├─ .vitepress/         # VitePress 설정
├─ public/             # 정적 파일
├─ index.md            # 문서 사이트 홈
└─ guide.md            # 작성 가이드
```

## 정리 방식

각 강의 노트는 아래 흐름을 기준으로 정리합니다.

1. 핵심 요약
2. 주요 개념
3. 실무 체크포인트
4. 예시 또는 템플릿
5. 복습 질문

## 실행

의존성을 설치한 뒤 로컬 문서 서버를 실행합니다.

```bash
npm.cmd install
npm.cmd run docs:dev
```

로컬 문서 사이트는 기본적으로 `http://localhost:5173`에서 열립니다.

## 빌드

```bash
npm.cmd run docs:build
```

## 배포

Vercel 배포 설정은 아래와 같습니다.

- Build Command: `npm run docs:build`
- Output Directory: `.vitepress/dist`

## 작성 원칙

- 강의 문장을 길게 그대로 복사하지 않습니다.
- 이해한 내용을 QA 관점에서 다시 정리합니다.
- 테스트 목적, 사전 조건, 절차, 기대 결과처럼 실무에서 쓰는 단위로 구조화합니다.
- 새 강의 노트는 `class` 폴더에 추가합니다.

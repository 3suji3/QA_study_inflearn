# QA Study

인프런 QA 강의를 들으며 정리한 실무 QA 학습 노트입니다.  
테스트 설계, 체크리스트, 결함 보고, 면접 준비를 처음 보는 사람도 따라 읽을 수 있게 정리합니다.

## 바로 보기

- 문서 사이트: [https://qa-study-inflearn.vercel.app/](https://qa-study-inflearn.vercel.app/)
- GitHub: [https://github.com/3suji3/QA_study_inflearn](https://github.com/3suji3/QA_study_inflearn)

## 무엇을 정리하나요?

이 저장소는 QA 입문자가 실무 흐름을 이해하고, 직접 테스트 문서를 만들어볼 수 있도록 구성한 학습 기록입니다.

| 영역 | 내용 |
| --- | --- |
| QA 기본 흐름 | 기능 확인, 테스트 수행, 이슈 공유, 배포 판단 |
| 테스트 설계 | 테스트 범위, 우선순위, 정상/예외 케이스 분류 |
| 실무 문서 | 테스트 케이스, 체크리스트, 버그 리포트 |
| 면접 준비 | 실습 결과물을 면접 답변과 포트폴리오로 연결 |
| 보너스 지식 | 테스트 종류, 결함 관리, 릴리즈 판단, 테스트 환경 |

## 추천 학습 순서

1. `class/1`부터 `class/3`까지 읽으며 QA 업무 흐름을 잡습니다.
2. `class/4`부터 `class/9`까지 읽으며 테스트 설계와 수행 방식을 익힙니다.
3. `class/10`부터 `class/14`까지 읽으며 면접과 포트폴리오에 연결합니다.
4. `bonus/`와 `appendix/` 문서로 실무 보충 지식과 QA 영어를 복습합니다.

## 폴더 구조

```text
.
├─ class/              # 강의별 학습 노트
├─ bonus/              # 실무 보너스 지식
├─ appendix/           # QA 영어 부록
├─ .vitepress/         # VitePress 설정과 테마
├─ public/             # 정적 파일
├─ index.md            # 문서 사이트 홈
└─ guide.md            # 작성 가이드
```

## 로컬 실행

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

| 항목 | 값 |
| --- | --- |
| Build Command | `npm run docs:build` |
| Output Directory | `.vitepress/dist` |

## 작성 원칙

- 강의 문장을 길게 그대로 복사하지 않습니다.
- 이해한 내용을 QA 관점에서 다시 정리합니다.
- 테스트 목적, 사전 조건, 절차, 기대 결과처럼 실무에서 쓰는 단위로 구조화합니다.
- 면접 섹션은 모든 글에 억지로 넣지 않고, 자연스럽게 이어지는 주제에만 추가합니다.
- 새 강의 노트는 `class` 폴더에 추가합니다.

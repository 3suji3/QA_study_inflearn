# QA 영어 기초 표현 정리

::: tip 핵심 요약
QA 영어는 어려운 문법보다 자주 나오는 표현을 먼저 익히는 것이 중요하다. 퀴즈와 실무 문서에서 반복되는 단어를 한국어 의미와 함께 외우면 훨씬 덜 막힌다.
:::

## 퀴즈에서 자주 보이는 질문 패턴

영어 퀴즈는 문장 전체를 완벽하게 해석하려고 하면 어렵다. 먼저 핵심 단어를 찾으면 된다.

| 영어 표현 | 쉬운 해석 | 읽는 요령 |
| --- | --- | --- |
| What is the first priority? | 첫 번째 우선순위는 무엇인가? | `first priority`를 찾기 |
| Which is a critical risk factor? | 중요한 위험 요소는 무엇인가? | `critical`, `risk factor`를 찾기 |
| What type of testing verifies...? | 어떤 테스트가 검증하는가? | `what type of testing` 뒤를 보기 |
| Which is NOT...? | 아닌 것은 무엇인가? | `NOT`을 반드시 체크 |
| values like 7, 8, 16, 17 | 7, 8, 16, 17 같은 값 | 경계값 문제일 가능성이 큼 |

::: warning 주의
`NOT`이 들어간 문제는 반대로 고르는 문제다. 보기 중 “맞는 것”이 아니라 “아닌 것”을 찾아야 한다.
:::

## QA 핵심 단어

| 영어 | 한국어 의미 | 쉽게 기억하기 |
| --- | --- | --- |
| Test Scope | 테스트 범위 | 어디까지 테스트할지 |
| Priority | 우선순위 | 무엇을 먼저 볼지 |
| User Impact | 사용자 영향도 | 사용자가 얼마나 불편한지 |
| Risk Factor | 위험 요소 | 문제가 날 가능성 또는 영향 |
| Critical | 치명적인, 중요한 | 꼭 봐야 하는 |
| Newly Added Feature | 신규 추가 기능 | 새로 만든 기능 |
| High User Impact | 사용자 영향이 큼 | 많은 사용자가 영향받음 |
| Recovery Difficulty | 복구 난이도 | 문제가 생겼을 때 되돌리기 어려운 정도 |

## 테스트 종류 표현

| 영어 | 한국어 의미 | 설명 |
| --- | --- | --- |
| Normal Flow Test | 정상 흐름 테스트 | 사용자가 기대한 대로 성공하는지 확인 |
| Happy Path | 정상 성공 경로 | 문제없이 성공하는 이상적인 흐름 |
| Exception Handling Test | 예외 처리 테스트 | 오류 상황에서 적절히 반응하는지 확인 |
| Boundary Value Analysis | 경계값 분석 | 7, 8, 16, 17처럼 경계 근처 값 테스트 |
| Equivalence Partitioning | 동등 분할 | 비슷한 값들을 그룹으로 나누어 대표값 테스트 |
| Security Test | 보안 테스트 | 권한, 인증, 데이터 보호 확인 |
| Ad-hoc Testing | 임의 테스트 | 정해진 케이스 없이 자유롭게 탐색 |
| Exploratory Testing | 탐색적 테스트 | 배우고 의심하면서 동시에 테스트 |

## 테스트 케이스 문서 표현

| 영어 | 한국어 의미 | 필수 여부 |
| --- | --- | --- |
| Test Objective | 테스트 목적 | 필수 |
| Preconditions | 사전 조건 | 필수 |
| Test Steps | 테스트 절차 | 필수 |
| Expected Result | 기대 결과 | 필수 |
| Actual Result | 실제 결과 | 실행 후 기록 |
| Test Data | 테스트 데이터 | 있으면 좋음 |
| Test Executor Name | 테스트 실행자 이름 | 보통 필수 핵심 요소는 아님 |
| Pass / Fail | 통과 / 실패 | 실행 결과 판정 |

퀴즈에서 “standard test case document의 core component가 아닌 것”을 묻는다면, 보통 `Test Executor Name`처럼 실행 추적용 정보가 정답 후보가 될 수 있다.

## 오류 메시지에서 자주 보는 표현

| 영어 표현 | 한국어 의미 |
| --- | --- |
| Required field | 필수 입력 항목 |
| Invalid email format | 이메일 형식 오류 |
| Password must be at least 8 characters | 비밀번호는 최소 8자 이상이어야 함 |
| Already in use | 이미 사용 중 |
| Network error | 네트워크 오류 |
| Server error | 서버 오류 |
| Timeout | 시간 초과 |
| Please try again later | 나중에 다시 시도해주세요 |

## 초보자용 읽기 순서

영어 문제가 나오면 아래 순서로 보면 덜 어렵다.

1. `NOT`이 있는지 먼저 본다.
2. `What type`, `Which`, `What is` 같은 질문 형태를 확인한다.
3. `priority`, `risk`, `happy path`, `boundary` 같은 QA 키워드를 찾는다.
4. 보기를 전부 번역하려 하지 말고, 아는 QA 키워드부터 지운다.
5. 모르는 단어는 문맥보다 테스트 개념과 연결해서 추측한다.

## 미니 예시

| 문제 속 표현 | 떠올릴 답 |
| --- | --- |
| high user impact | 테스트 범위 설정에서 우선순위 높음 |
| newly added features | 위험도 때문에 집중 테스트 필요 |
| happy path | 정상 흐름 테스트 |
| 7, 8, 16, 17 | 경계값 분석 |
| NOT a core component | 필수 요소가 아닌 것 찾기 |

## 복습 질문

- `Happy Path`는 어떤 테스트를 말할까?
- `Boundary Value Analysis`가 나오면 어떤 값을 떠올려야 할까?
- `Which is NOT` 문제를 풀 때 가장 먼저 확인해야 하는 단어는 무엇일까?

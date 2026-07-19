# 테스트 케이스 영어

::: tip 핵심 요약
테스트 케이스 영어는 정해진 필드명이 반복된다. `Objective`, `Preconditions`, `Steps`, `Expected Result`, `Actual Result`를 먼저 익히면 문서를 읽고 쓰기 쉬워진다.
:::

## 테스트 케이스 필드

| 영어 | 한국어 의미 | 작성 예시 |
| --- | --- | --- |
| Test Case ID | 테스트 케이스 ID | SIGNUP-001 |
| Title | 제목 | Sign up with valid email |
| Test Objective | 테스트 목적 | Verify that a user can sign up successfully. |
| Preconditions | 사전 조건 | The user is on the sign-up page. |
| Test Data | 테스트 데이터 | Email: new_user@test.com |
| Test Steps | 테스트 절차 | Enter email, password, and click Sign up. |
| Expected Result | 기대 결과 | A success message is displayed. |
| Actual Result | 실제 결과 | 실행 후 기록 |
| Status | 상태 | Pass, Fail, Blocked |

## 자주 쓰는 동사

| 영어 | 한국어 의미 | 예문 |
| --- | --- | --- |
| Verify | 확인하다, 검증하다 | Verify that the login button is enabled. |
| Check | 확인하다 | Check the error message. |
| Enter | 입력하다 | Enter a valid email address. |
| Click | 클릭하다 | Click the Sign up button. |
| Select | 선택하다 | Select the payment method. |
| Submit | 제출하다 | Submit the form. |
| Display | 표시하다 | The success message is displayed. |
| Redirect | 이동시키다 | The user is redirected to the login page. |
| Validate | 유효성을 검사하다 | Validate the password format. |
| Prevent | 막다, 방지하다 | Prevent duplicate account creation. |

## 테스트 목적 작성 패턴

| 패턴 | 뜻 | 예시 |
| --- | --- | --- |
| Verify that ... | ...인지 확인한다 | Verify that a user can sign up with valid information. |
| Check whether ... | ...인지 확인한다 | Check whether an error message appears. |
| Ensure that ... | 반드시 ...인지 확인한다 | Ensure that duplicate email registration is blocked. |

초보자라면 `Verify that ...` 패턴만 먼저 익혀도 충분하다.

## 테스트 절차 작성 패턴

테스트 절차는 짧은 명령문으로 쓰는 경우가 많다.

| 영어 절차 | 한국어 의미 |
| --- | --- |
| Navigate to the sign-up page. | 회원가입 페이지로 이동한다. |
| Enter a valid email address. | 유효한 이메일 주소를 입력한다. |
| Enter a password with at least 8 characters. | 8자 이상의 비밀번호를 입력한다. |
| Select the required terms checkbox. | 필수 약관 체크박스를 선택한다. |
| Click the Sign up button. | 가입하기 버튼을 클릭한다. |

## 기대 결과 작성 패턴

| 영어 표현 | 한국어 의미 |
| --- | --- |
| A success message is displayed. | 성공 메시지가 표시된다. |
| The user is redirected to the login page. | 사용자가 로그인 페이지로 이동된다. |
| The error message is displayed. | 오류 메시지가 표시된다. |
| The form is not submitted. | 폼이 제출되지 않는다. |
| The account is not created. | 계정이 생성되지 않는다. |
| The input value remains unchanged. | 입력값이 그대로 유지된다. |

## 회원가입 테스트 케이스 예시

| Field | Example |
| --- | --- |
| Test Case ID | SIGNUP-001 |
| Title | Sign up with valid information |
| Objective | Verify that a user can sign up successfully. |
| Preconditions | The user is on the sign-up page. |
| Test Data | New email, valid password, required terms selected |
| Steps | 1. Enter valid information. 2. Select required terms. 3. Click Sign up. |
| Expected Result | A success message is displayed and the user is redirected to the login page. |
| Status | Pass / Fail |

## 실무에서 조심할 표현

| 어색한 표현 | 더 나은 표현 | 이유 |
| --- | --- | --- |
| The page is moved. | The user is redirected to the page. | 페이지 이동은 `redirected`를 자주 씀 |
| Error is come out. | An error message is displayed. | 메시지가 표시된다는 표현 |
| Click signup. | Click the Sign up button. | 어떤 버튼인지 명확히 적기 |
| It is success. | The sign-up is successful. | 자연스러운 상태 표현 |

## 복습 질문

- `Expected Result`와 `Actual Result`는 각각 무엇을 의미할까?
- 테스트 절차에서 `Enter`, `Click`, `Select`는 어떤 행동을 나타낼까?
- `The account is not created`는 어떤 상황의 기대 결과로 쓸 수 있을까?

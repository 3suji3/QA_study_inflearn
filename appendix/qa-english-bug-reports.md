# 버그 리포트 영어

::: tip 핵심 요약
버그 리포트 영어는 멋진 문장보다 재현 가능하고 오해 없는 표현이 중요하다. 제목, 재현 절차, 기대 결과, 실제 결과, 환경 정보를 명확하게 쓰면 된다.
:::

## 버그 리포트 필드

| 영어 | 한국어 의미 | 설명 |
| --- | --- | --- |
| Summary | 요약, 제목 | 문제를 한 줄로 설명 |
| Description | 설명 | 문제 상황을 조금 더 자세히 설명 |
| Steps to Reproduce | 재현 절차 | 같은 문제를 다시 발생시키는 단계 |
| Expected Result | 기대 결과 | 정상이라면 나와야 하는 결과 |
| Actual Result | 실제 결과 | 실제로 발생한 문제 |
| Environment | 환경 정보 | OS, 브라우저, 앱 버전 등 |
| Attachment | 첨부 파일 | 스크린샷, 영상, 로그 |
| Severity | 심각도 | 영향 크기 |
| Priority | 우선순위 | 처리 순서 |

## 좋은 제목 패턴

버그 제목은 `어디에서 + 무엇을 했을 때 + 어떤 문제가 발생` 형태가 좋다.

| 패턴 | 예시 |
| --- | --- |
| [화면] 문제 현상 | [Sign-up] Error message is not displayed for invalid email |
| When ..., ... | When entering a duplicate email, the sign-up button remains enabled |
| Cannot ... | Cannot complete payment after selecting a credit card |

## 재현 절차 표현

| 영어 표현 | 한국어 의미 |
| --- | --- |
| Go to the sign-up page. | 회원가입 페이지로 이동한다. |
| Enter an already registered email. | 이미 가입된 이메일을 입력한다. |
| Leave the password field empty. | 비밀번호 필드를 비워둔다. |
| Click the Submit button. | 제출 버튼을 클릭한다. |
| Observe the result. | 결과를 확인한다. |

재현 절차는 누구나 따라 할 수 있게 짧고 순서대로 적는다.

## 기대 결과와 실제 결과

| 구분 | 예시 |
| --- | --- |
| Expected Result | An error message should be displayed. |
| Actual Result | No error message is displayed. |
| Expected Result | The account should not be created. |
| Actual Result | The account is created even with an invalid email. |
| Expected Result | The user should remain on the sign-up page. |
| Actual Result | The user is redirected to a blank page. |

`should`는 기대 결과를 쓸 때 자주 사용한다. “정상이라면 이렇게 되어야 한다”는 느낌이다.

## 자주 쓰는 문제 표현

| 영어 | 한국어 의미 |
| --- | --- |
| is not displayed | 표시되지 않는다 |
| is displayed incorrectly | 잘못 표시된다 |
| is not clickable | 클릭할 수 없다 |
| remains enabled | 활성화된 상태로 남아 있다 |
| redirects to a blank page | 빈 페이지로 이동한다 |
| crashes | 앱이나 화면이 종료된다 |
| freezes | 멈춘다 |
| fails to load | 로드에 실패한다 |
| duplicate data is created | 중복 데이터가 생성된다 |

## 환경 정보 표현

| 영어 | 예시 |
| --- | --- |
| OS | Windows 11, macOS Sonoma, Android 14 |
| Browser | Chrome 126, Edge 126, Safari |
| Device | iPhone 15, Galaxy S24 |
| App Version | v1.2.0 |
| Environment | Staging, Production, QA |
| Network | Wi-Fi, 5G, offline |

## 버그 리포트 예시

```text
Summary:
[Sign-up] Error message is not displayed for duplicate email

Steps to Reproduce:
1. Go to the sign-up page.
2. Enter an already registered email.
3. Enter a valid password.
4. Click the Sign up button.

Expected Result:
An error message should be displayed and the account should not be created.

Actual Result:
No error message is displayed and the user cannot understand why sign-up failed.

Environment:
Chrome 126 / Windows 11 / Staging
```

## 초보자용 작성 공식

아래 공식만 익혀도 기본 버그 리포트는 쓸 수 있다.

```text
When I [action], [problem] occurs.
Expected: [normal result]
Actual: [current problem]
```

예시:

```text
When I enter a duplicate email, no error message is displayed.
Expected: The duplicate email error message should be displayed.
Actual: No message is displayed.
```

## 복습 질문

- `Steps to Reproduce`에는 어떤 내용을 적어야 할까?
- 버그 리포트에서 `should`는 주로 어디에 쓰일까?
- `No error message is displayed`는 어떤 문제를 말할까?

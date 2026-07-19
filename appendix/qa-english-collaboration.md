# 협업 영어 표현

::: tip 핵심 요약
QA 협업 영어는 Jira, Slack, PR, 테스트 리포트에서 상태를 공유하고 요청하는 표현이 많다. 짧고 명확하게 쓰는 것이 가장 중요하다.
:::

## 이슈 상태 표현

| 영어 | 한국어 의미 | 설명 |
| --- | --- | --- |
| Open | 열림 | 아직 처리되지 않은 이슈 |
| In Progress | 진행 중 | 담당자가 작업 중 |
| Fixed | 수정됨 | 개발 수정 완료 |
| Ready for QA | QA 확인 준비됨 | QA가 재테스트할 수 있는 상태 |
| Reopened | 다시 열림 | 수정 후에도 문제가 남아 다시 오픈 |
| Closed | 종료됨 | 확인 완료 후 닫힘 |
| Deferred | 연기됨 | 이번 배포에서는 처리하지 않음 |
| Duplicate | 중복 이슈 | 이미 등록된 같은 문제 |

## QA가 자주 쓰는 코멘트

| 상황 | 영어 표현 | 한국어 의미 |
| --- | --- | --- |
| 재현됨 | I can reproduce this issue. | 이 이슈를 재현할 수 있습니다. |
| 재현 안 됨 | I cannot reproduce this issue. | 이 이슈를 재현할 수 없습니다. |
| 수정 확인 | Verified as fixed. | 수정 완료로 확인했습니다. |
| 다시 발생 | The issue still occurs. | 이슈가 여전히 발생합니다. |
| 추가 정보 요청 | Could you provide more details? | 자세한 정보를 제공해주실 수 있나요? |
| 로그 요청 | Could you share the logs? | 로그를 공유해주실 수 있나요? |
| 환경 확인 | Could you confirm the environment? | 환경 정보를 확인해주실 수 있나요? |

## 개발자에게 확인 요청하기

부드럽게 요청할 때는 `Could you ...?`를 쓰면 좋다.

| 영어 표현 | 한국어 의미 |
| --- | --- |
| Could you check this issue? | 이 이슈 확인해주실 수 있나요? |
| Could you confirm if this is expected behavior? | 이게 의도된 동작인지 확인해주실 수 있나요? |
| Could you share the root cause? | 원인을 공유해주실 수 있나요? |
| Could you let me know when it is ready for QA? | QA 확인 가능한 상태가 되면 알려주실 수 있나요? |

## 기획자나 PM에게 확인하기

| 영어 표현 | 한국어 의미 |
| --- | --- |
| Is this the expected behavior? | 이게 기대 동작인가요? |
| Should this field be required? | 이 필드는 필수여야 하나요? |
| What should happen when the request fails? | 요청이 실패하면 어떻게 동작해야 하나요? |
| Should we show an error message here? | 여기서 오류 메시지를 보여줘야 하나요? |
| Is this scenario in scope for this release? | 이 시나리오는 이번 릴리스 범위에 포함되나요? |

## 테스트 진행 상황 공유

| 영어 표현 | 한국어 의미 |
| --- | --- |
| Testing is in progress. | 테스트 진행 중입니다. |
| Smoke test has been completed. | 스모크 테스트가 완료되었습니다. |
| Regression test is still in progress. | 회귀 테스트는 아직 진행 중입니다. |
| No critical issues found so far. | 현재까지 치명적인 이슈는 발견되지 않았습니다. |
| One blocker issue was found. | 차단 이슈 1건이 발견되었습니다. |
| QA sign-off is pending. | QA 승인은 대기 중입니다. |
| QA sign-off is complete. | QA 승인이 완료되었습니다. |

## 배포 판단 표현

| 영어 표현 | 한국어 의미 |
| --- | --- |
| Ready for release | 배포 준비 완료 |
| Not ready for release | 배포 준비 미완료 |
| Release is blocked by this issue. | 이 이슈 때문에 배포가 차단됩니다. |
| This issue should be fixed before release. | 이 이슈는 배포 전에 수정되어야 합니다. |
| This can be handled in the next release. | 이건 다음 릴리스에서 처리해도 됩니다. |

## 초보자용 Slack/Jira 문장

```text
I found an issue on the sign-up page.
Steps and screenshots are attached.
Could you check this when you have time?
```

뜻:

- 회원가입 페이지에서 이슈를 발견했습니다.
- 재현 절차와 스크린샷을 첨부했습니다.
- 시간 되실 때 확인해주실 수 있나요?

## 조심하면 좋은 표현

| 피하고 싶은 표현 | 더 나은 표현 | 이유 |
| --- | --- | --- |
| You made a bug. | I found an issue. | 사람을 탓하는 느낌을 줄임 |
| Fix it quickly. | Could you check this issue? | 요청을 부드럽게 표현 |
| It is wrong. | This does not match the expected result. | 기대 결과와 비교해서 설명 |
| I don't know. | I need to check more details. | 확인이 더 필요하다고 표현 |

## 복습 질문

- `Ready for QA`는 어떤 상태를 말할까?
- 수정 확인 후 쓸 수 있는 짧은 표현은 무엇일까?
- 기획자에게 기대 동작을 확인할 때 어떤 문장을 쓸 수 있을까?

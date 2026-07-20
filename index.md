---
layout: home

hero:
  name: QA Study
  text: 실무 QA를 구조적으로 익히는 학습 노트
  tagline: 인프런 QA 강의를 바탕으로 테스트 설계, 체크리스트, 결함 보고, 면접 준비까지 다시 보기 쉽게 정리합니다.
  actions:
    - theme: brand
      text: 처음부터 읽기
      link: /class/1.%20%EC%8B%A4%EB%AC%B4%20QA%EC%9D%98%20%ED%95%98%EB%A3%A8%20%ED%9D%90%EB%A6%84%20%ED%8C%8C%EC%95%85%ED%95%98%EA%B8%B0
    - theme: alt
      text: 보너스 지식
      link: /bonus/qa-practical-knowledge
    - theme: alt
      text: GitHub
      link: https://github.com/3suji3/QA_study_inflearn

features:
  - title: 테스트 설계
    details: 기능을 정상 흐름, 입력값 유효성, 예외 상황으로 나누고 테스트 케이스로 바꿉니다.
  - title: 실무 체크리스트
    details: 테스트 전, 중, 후에 확인할 항목을 구조화해 누락을 줄입니다.
  - title: 면접과 포트폴리오
    details: 학습 결과물을 면접 답변, 이력서 문장, 포트폴리오 자료로 연결합니다.
---

## 이 사이트는 무엇인가요?

QA 입문자가 강의 내용을 다시 찾기 쉽도록 정리한 학습 노트입니다. 단순 요약이 아니라 “실무에서 어떻게 생각하고 판단해야 하는가”를 중심으로 정리합니다.

| 목표 | 설명 |
| --- | --- |
| QA 업무 흐름 이해 | 기능 확인부터 배포 판단까지의 흐름을 익힙니다. |
| 테스트 설계 연습 | 테스트 범위, 우선순위, 케이스 구조를 정리합니다. |
| 실무 문서 감각 | 테스트 케이스, 체크리스트, 버그 리포트 형식을 익힙니다. |
| 면접 준비 | 실습 결과물을 구조화된 답변으로 바꾸는 연습을 합니다. |

## 추천 학습 순서

처음부터 순서대로 읽어도 되고, 필요한 영역만 골라 읽어도 됩니다.

### 1. QA 기본 흐름

| 문서 | 읽고 나면 알 수 있는 것 |
| --- | --- |
| [실무 QA의 하루 흐름 파악하기](/class/1.%20%EC%8B%A4%EB%AC%B4%20QA%EC%9D%98%20%ED%95%98%EB%A3%A8%20%ED%9D%90%EB%A6%84%20%ED%8C%8C%EC%95%85%ED%95%98%EA%B8%B0) | QA가 하루 동안 어떤 순서로 일하는지 |
| [핵심 결과물 미리보기 및 목표 설정](/class/2.%20%ED%95%B5%EC%8B%AC%20%EA%B2%B0%EA%B3%BC%EB%AC%BC%20%EB%AF%B8%EB%A6%AC%EB%B3%B4%EA%B8%B0%20%EB%B0%8F%20%EB%AA%A9%ED%91%9C%20%EC%84%A4%EC%A0%95) | 테스트 케이스와 체크리스트가 왜 필요한지 |
| [실습용 웹 서비스 컨셉 이해](/class/3.%20%EC%8B%A4%EC%8A%B5%EC%9A%A9%20%EC%9B%B9%20%EC%84%9C%EB%B9%84%EC%8A%A4%20%EC%BB%A8%EC%85%89%20%EC%9D%B4%ED%95%B4) | 회원가입, 로그인, 마이페이지를 테스트 대상으로 보는 법 |

### 2. 테스트 설계와 수행

| 문서 | 읽고 나면 알 수 있는 것 |
| --- | --- |
| [QA 관점에서 서비스 기능 분석하기](/class/4.%20QA%20%EA%B4%80%EC%A0%90%EC%97%90%EC%84%9C%20%EC%84%9C%EB%B9%84%EC%8A%A4%20%EA%B8%B0%EB%8A%A5%20%EB%B6%84%EC%84%9D%ED%95%98%EA%B8%B0) | 성공 조건, 실패 조건, 사용자 실수를 질문으로 바꾸는 법 |
| [실무 테스트 범위 설정 전략](/class/5.%20%EC%8B%A4%EB%AC%B4%20%ED%85%8C%EC%8A%A4%ED%8A%B8%20%EB%B2%94%EC%9C%84%20%EC%84%A4%EC%A0%95%20%EC%A0%84%EB%9E%B5) | 모든 것을 테스트할 수 없을 때 우선순위를 정하는 법 |
| [테스트 분할 및 케이스 구조 이해](/class/6.%20%ED%85%8C%EC%8A%A4%ED%8A%B8%20%EB%B6%84%ED%95%A0%20%EB%B0%8F%20%EC%BC%80%EC%9D%B4%EC%8A%A4%20%EA%B5%AC%EC%A1%B0%20%EC%9D%B4%ED%95%B4) | 정상 흐름, 유효성, 예외 상황으로 케이스를 나누는 법 |
| [실제 테스트케이스 작성 실습](/class/7.%20%EC%8B%A4%EC%A0%9C%20%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%BC%80%EC%9D%B4%EC%8A%A4%20%EC%9E%91%EC%84%B1%20%EC%8B%A4%EC%8A%B5) | 테스트 목적, 사전 조건, 절차, 기대 결과를 작성하는 법 |
| [실무 QA의 관찰 포인트 이해](/class/8.%20%EC%8B%A4%EB%AC%B4%20QA%EC%9D%98%20%EA%B4%80%EC%B0%B0%20%ED%8F%AC%EC%9D%B8%ED%8A%B8%20%EC%9D%B4%ED%95%B4) | 화면 변화, 오류 메시지, 데이터 흐름을 관찰하는 법 |
| [실무 QA 체크리스트 적용하기](/class/9.%20%EC%8B%A4%EB%AC%B4%20QA%20%EC%B2%B4%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%8A%B8%20%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0) | 테스트 전, 중, 후 체크리스트를 적용하는 법 |

### 3. 면접과 포트폴리오

| 문서 | 읽고 나면 알 수 있는 것 |
| --- | --- |
| [QA 면접 단골 질문 분석](/class/10.%20QA%20%EB%A9%B4%EC%A0%91%20%EB%8B%A8%EA%B3%A8%20%EC%A7%88%EB%AC%B8%20%EB%B6%84%EC%84%9D) | 면접 질문의 의도를 읽는 법 |
| [실습 결과물로 면접 답변 구성하기](/class/11.%20%EC%8B%A4%EC%8A%B5%20%EA%B2%B0%EA%B3%BC%EB%AC%BC%EB%A1%9C%20%EB%A9%B4%EC%A0%91%20%EB%8B%B5%EB%B3%80%20%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0) | 테스트 결과물을 면접 답변으로 바꾸는 법 |
| [신입 및 이직자 면접 실수 피하기](/class/12.%20%EC%8B%A0%EC%9E%85%20%EB%B0%8F%20%EC%9D%B4%EC%A7%81%EC%9E%90%20%EB%A9%B4%EC%A0%91%20%EC%8B%A4%EC%88%98%20%ED%94%BC%ED%95%98%EA%B8%B0) | 추상적인 답변을 피하고 구조적으로 말하는 법 |
| [핵심 학습 결과물 총정리](/class/13.%20%ED%95%B5%EC%8B%AC%20%ED%95%99%EC%8A%B5%20%EA%B2%B0%EA%B3%BC%EB%AC%BC%20%EC%B4%9D%EC%A0%95%EB%A6%AC) | 지금까지 만든 결과물의 의미 |
| [학습 결과물 실무 및 면접 활용 전략](/class/14.%20%ED%95%99%EC%8A%B5%20%EA%B2%B0%EA%B3%BC%EB%AC%BC%20%EC%8B%A4%EB%AC%B4%20%EB%B0%8F%20%EB%A9%B4%EC%A0%91%20%ED%99%9C%EC%9A%A9%20%EC%A0%84%EB%9E%B5) | 이력서, 포트폴리오, 입사 후 업무에 연결하는 법 |

### 4. 보너스

| 문서 | 읽고 나면 알 수 있는 것 |
| --- | --- |
| [실무 QA 보너스 지식 지도](/bonus/qa-practical-knowledge) | 현장에서 추가로 알아두면 좋은 지식의 전체 지도 |
| [테스트 종류와 전략](/bonus/test-types-and-strategy) | Smoke, Regression, Functional 같은 테스트 종류 |
| [결함 관리와 릴리즈 판단](/bonus/defect-and-release) | 결함 상태, 심각도, 우선순위, Go/No-Go 판단 |
| [테스트 환경과 데이터 관리](/bonus/test-environment-and-data) | 테스트 환경, 테스트 데이터, 로그와 증거 자료 |
| [QA 영어 기초 로드맵](/appendix/qa-english-basics) | 실무 QA 영어 표현을 공부하는 순서 |

## 기억할 한 문장

> QA는 버그를 많이 찾는 사람이 아니라, 사용자가 문제없이 쓸 수 있는지 판단하는 사람이다.

## 배포 링크

[https://qa-study-inflearn.vercel.app/](https://qa-study-inflearn.vercel.app/)

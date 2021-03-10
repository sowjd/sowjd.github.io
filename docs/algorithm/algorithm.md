---
layout: default
title: Algorithm
last_modified_date: 2021-03-10
has_toc: false
permalink: /docs/algorithm/
---
## What is "Algorithm"
문제 해결을 위한 논리적인 과정

## Algorithm 분석
1. 시간복잡도(Time Complexity) : 알고리즘의 수행 시간
2. 공간복잡도(Space Complexity) : 알고리즘이 수행하는데 필요한 공간(메모리)

## 점근적 표기법(Asymptotic notation)
- 알고리즘 분석에 사용
- 함수에서 상수항, 상수 계수 등 불필요한 부분들을 제거한 표기법<br>
  → 함수의 증가 양상(성장률)을 쉽게 파악하기 위함
- 데이터 크기를 기준으로 알고리즘의 객관적 지표를 제시할 수 있다.

1. **Big O Notation (빅 오 표기법)**
- 점근적 상한선(Asymptotic upper bound)
- 알고리즘의 최악의 상황에도 비교하는 함수와 같거나 혹은 좋다.
- 어떠한 경우라도 점근적 상한선을 넘지 않는다.

2. **Big Ω Notation (빅 오메가 표기법)**
- 점근적 하한선(Asymptotic lower bound)
- 알고리즘이 아무리 좋아도 비교하는 함수와 같거나 나쁘다.
- 최소한 점근적 하한선만큼 걸린다.

3. **Θ Notation (세타 표기법)**
- 점근적 상한선과 점근적 하한선의 교집합 (Asymptotic tighter bound)
- 알고리즘이 최상⋅최악의 상황에도 상⋅하한선 사이에 존재한다.


<img width="590" alt="image" src="https://user-images.githubusercontent.com/30143099/110595408-4fa7cb80-81c1-11eb-97d6-be2da41b221f.png">

*Reference <https://ledgku.tistory.com/31>*{: .fs-2}


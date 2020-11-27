---
layout: default
title: "[3주차] 연산자"
last_modified_date: 2020-11-28
parent: STUDY HALLE
grand_parent: Java
permalink: /docs/java/study-halle/week3
---

## 목표
{: .no_toc }
자바가 제공하는 다양한 연산자 학습하기

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

---

## 연산자 (Operator)
연산을 위한 기호, 심볼

---

## 산술 연산자 (Arithmetic Operators)
- Binary Operator(두 개의 operands를 필요로 하는 연산자)
- 연산가능 데이터 타입: char, byte, short, int, long, float, double
- char, byte, short형 연산 시 JVM Specification에 따라 int형으로 프로모션 되기 때문에<br>
  타입 캐스팅을 해주거나, 결과를 저장하는 변수의 타입을 int로 설정해야 함
- 정수형간 나누기의 경우 계산결과가 실수값이더라도, 두 operands는 정수형이기 때문에 결과는 정수값이다
- 두 operand의 타입이 다를 경우, 범위가 큰 타입을 따라 나머지 하나가 타입 프로모션 됨

### 종류
{: .no_toc }
- `Addition(+)` String 연결 연산자로도 쓰임

```java
System.out.println("Total: " + 3 + 4); // Total: 34
```
- `Subtraction(-)`
- `Multiplication(*)`
- `Division (/)` 0 또는 0.0으로 나눌 경우

```java
System.out.println(0/0);  // java.lang.ArithmeticException: / by zero
System.out.println(1/0);  // java.lang.ArithmeticException: / by zero

System.out.println(0.0/0);    // NaN
System.out.println(1.0/0);    // Infinity
System.out.println(-1.0/0.0); // -Infinity
```

- `Modulo(%)`

---

## 비트 연산자 (Bitwise Operators)
- 비트 간 연산을 수행
- 연산가능 데이터 타입: 0과 1로 표현 가능한 정수형

| 연산자 | 논리 |
|:----:|:----|
| & | AND, 두 비트가 모두 1일 경우 1 |
| \| | OR, 두 비트 중 하나가 1일 경우 1 |
| ^ | XOR, 한 비트가 1이고 나머지 한 비트가 0 경우 1 |
| ~ | NOT, 비트 보수 (0 ⇔ 1) |

```
  0101          0101          0101      
& 1001        | 1001        ^ 1001        ~ 0101
------        ------        ------        ------
  0001          1101          1100          1010
```

### 비트 이동 연산자 (Shift Operators)
`<number> <operator> <num of shift>`<br> ⇒  `<number>`를 32-bit 2진수로 바꾼 후 shift
<div class="code-example" markdown="1">
**왜 32-bit일까?**<br>
앞서 언급한 것 처럼 비트 연산은 0과 1로 표현할 수 있는 정수형만 가능한데<br>
정수형에서 가장 큰 double type이 8-byte 즉, 32-bit의 크기를 가지기 때문
</div>

| 연산자 | 연산식 | 동작 |
|:----:|:----:|:----|
| \<< | num \<< n | Left shift<br>n개 만큼 비트를 왼쪽으로 밀기<br>오른쪽 비트는 **0**으로 채움<br> ⇒ 부호 유지, num * 2^n과 결과 동일 |
| \>> | num \>> n | Signed right shift<br>n개 만큼 비트를 오른쪽으로 밀기<br>왼쪽 비트는 **부호비트**로 채움<br> ⇒ 부호 유지, num이 양수인 경우 num / 2^n과 결과 동일 |
| \>>> | num \>>> n | Unsigned right shift<br>shift 수 만큼 비트를 오른쪽으로 밀기<br>왼쪽 비트는 **0**으로 채움<br> ⇒ 음수의 경우 부호 바뀜, num이 양수인 경우 num / 2^n과 결과 동일 |

💡 음수의 2진수 표현에는 [2의 보수법](https://dream-space.tistory.com/21)이 사용된다
```java
10 << 2   // 0000 0000 0000 1010 << 2 = 0000 0000 0010 1000 = 40 = 10 * 2^2
-1 << 2   // 1111 1111 1111 1111 << 2 = 1111 1111 1111 1100 = -4 = -1 * 2^2

10 >> 2   // 0000 0000 0000 1010 >> 2 = 0000 0000 0000 0010 = 2 = 10/4
-1 >> 2   // 1111 1111 1111 1111 >> 2 = 1111 1111 1111 1111 = -1

10 >>> 2  // 0000 0000 0000 1010 >>> 2 = 0000 0000 0000 0010 = 2 = 10/4
-1 >>> 2  // 1111 1111 1111 1111 >>> 2 = 0011 1111 1111 1111 = 16383
```

참고 링크<br>
<https://coding-factory.tistory.com/521>{: .fs-2}<br>
<https://www.geeksforgeeks.org/bitwise-operators-in-java/>{: .fs-2}

---

## 관계 연산자, 비교 연산자 (Comparison Operators)
두 operands를 비교하여 true 또는 false를 반환
- `<`&nbsp; `>`&nbsp; `<=`&nbsp; `>=`&nbsp; primitive type 사용 (boolean 제외)
- `==`&nbsp; `!=`&nbsp; 값을 비교하거나 두 operands가 reference type일 경우 객체의 주소값을 비교<br>
  ⭐️ String의 경우 `A.equals(B)` 로 비교

---

## 논리 연산자 (Logical Operators)
두 항을 비교하여 true 또는 false를 반환

| 연산자 | 연산식 | 동작 |
|:----:|:----:|:----|
| && | x < 1 && y > 3 | 두 항이 모두 참인 경우 true<br>앞 항이 거짓이면 뒷 항은 체크X ⇒ 단락회로평가(Short Circuit Evaluation) |
| \|\| | x < 1 \|\| y > 3 | 두 항 중 하나가 참인 경우 true<br>앞항이 참이면 뒷 항은 체크X ⇒ 단락회로평가(Short Circuit Evaluation) |
| ! | !(x < 1) | 참인 경우 false, 거짓인 경우 true |


---

## instanceof
- `<instance> instanceof <clss>`&nbsp; `<instance>`가 `<class>`형인지 판단<br>
  &nbsp; ∴ known as "Type Comparison Operator"
- **is-a relationship**이 성립한다면 true를 반환<br>
  *참고 [Inheritance (IS-A) vs. Composition (HAS-A) Relationship](https://www.w3resource.com/java-tutorial/inheritance-composition-relationship.php)*{: .fs-3}

---

## 대입 연산자 (Assignment Operator)
- `=`&nbsp; `+=`&nbsp; `-=`&nbsp; `*=`&nbsp; `/=`&nbsp; `%=`<br>

새로 알게된 것 ↓

| 연산자 | 연산식 | 풀어 쓴 식 |
|:----:|:----:|:---------:|
| &= | x &= 3 | x = x & 3 |
| \|= | x \|= 3 | x = x \| 3 |
| ^= | x ^= 3 | x = x ^ 3 |
| \>>= | x \>>= 3 | x = x \>> 3 |
| \<<= | x \<<= 3 | x = x \<<3 |

*출처 <https://www.w3schools.com/java/java_operators.asp>*{: .fs-2}

---

## 화살표(->) 연산자
TODO

---

## 3항 연산자
TODO

---

## 연산자 우선 순위
TODO

---

## Java 13. switch 연산자
TODO

<!--
산술 연산자
비트 연산자
관계 연산자
논리 연산자
instanceof
assignment(=) operator
화살표(->) 연산자
3항 연산자
연산자 우선 순위
(optional) Java 13. switch 연산자
-->
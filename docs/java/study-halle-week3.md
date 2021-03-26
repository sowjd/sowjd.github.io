---
layout: default
title: "[3주차] 연산자"
last_modified_date: 2021-03-26
parent: STUDY HALLE
grand_parent: Java
permalink: /docs/java/study-halle/week3
---
## 목표
{: .no_toc }
**자바가 제공하는 다양한 연산자 학습하기**

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
- `이항 연산자 (Binary Operator)`&nbsp; 두 개의 operands가 있어야 하는 연산자
- `단항 연산자 (Unary Operator)`&nbsp; 한 개의 operand에 대해 연산을 수행

---

## 산술 연산자 (Arithmetic Operators)
- 연산 가능 데이터 타입: char, byte, short, int, long, float, double
- char, byte, short형 연산 시 JVM Specification에 따라 int형으로 프로모션되기 때문에<br>
  타입 캐스팅을 해주거나 결과를 저장하는 변수의 타입을 int로 설정해야 함
- 정수형 간 나누기의 경우 계산 결과가 실수값이더라도, 두 operands는 정수형이기 때문에 결과는 정수값이다
- 두 operands의 타입이 다를 경우, 범위가 큰 타입을 따라 나머지 하나가 타입 프로모션된다

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
- 연산 가능 데이터 타입: 0과 1로 표현 가능한 정수형

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
`<number> <operator> <num of shift>`<br>
&nbsp; ⇒  `<number>`를 2진수(int는 32-bit, long은 64-bit)로 바꾼 후 shift

| 연산자 | 연산식 | 동작 |
|:----:|:----:|:----|
| \<< | num \<< n | Left shift<br>n개 만큼 비트를 왼쪽으로 밀기<br>오른쪽 비트는 **0**으로 채움<br> ⇒ 부호 유지, num * 2^n과 결과 동일 |
| \>> | num \>> n | Signed right shift<br>n개 만큼 비트를 오른쪽으로 밀기<br>왼쪽 비트는 **부호 비트**로 채움<br> ⇒ 부호 유지, num이 양수면 num / 2^n과 결과 동일 |
| \>>> | num \>>> n | Unsigned right shift<br>shift 수 만큼 비트를 오른쪽으로 밀기<br>왼쪽 비트는 **0**으로 채움<br> ⇒ 음수의 경우 부호 바뀜, num이 양수면 num / 2^n과 결과 동일 |

💡 음수의 2진수 표현에는 [2의 보수법](https://dream-space.tistory.com/21)이 사용된다
```java
10 << 2   // 00000000 00000000 00000000 00001010 << 2 = 00000000 00000000 00000000 00101000 = 40 = 10 * 2^2
-1 << 2   // 11111111 11111111 11111111 11111111 << 2 = 11111111 11111111 11111111 11111100 = -4 = -1 * 2^2

10 >> 2   // 00000000 00000000 00000000 00001010 >> 2 = 00000000 00000000 00000000 00000010 = 2 = 10/4
-1 >> 2   // 11111111 11111111 11111111 11111111 >> 2 = 11111111 11111111 11111111 11111111 = -1

10 >>> 2  // 00000000 00000000 00000000 00001010 >>> 2 = 00000000 00000000 00000000 00000010 = 2 = 10/4
-1 >>> 2  // 11111111 11111111 11111111 11111111 >>> 2 = 00111111 11111111 11111111 11111111 = 1073741823
```

참고 링크<br>
<https://coding-factory.tistory.com/521>{: .fs-3}<br>
<https://www.geeksforgeeks.org/bitwise-operators-in-java/>{: .fs-3}

---

## 관계 연산자, 비교 연산자 (Comparison Operators)
두 operands를 비교하여 true 또는 false를 반환
- `<`&nbsp; `>`&nbsp; `<=`&nbsp; `>=`&nbsp; primitive type 사용 (boolean 제외)
- `==`&nbsp; `!=`&nbsp; 값을 비교하거나 두 operands가 reference type일 경우 **객체의 주소값**을 비교<br>
  ⭐️ String type은 `A.equals(B)` 로 비교

---

## 논리 연산자 (Logical Operators)
두 항을 비교하여 true 또는 false를 반환

| 연산자 | 연산식 | 동작 |
|:----:|:----:|:----|
| && | x < 1 && y > 3 | 두 항이 모두 참인 경우 true<br>앞 항이 거짓이면 뒷 항은 체크X ⇒ 단락 회로 평가(Short Circuit Evaluation) |
| \|\| | x < 1 \|\| y > 3 | 두 항 중 하나가 참인 경우 true<br>앞항이 참이면 뒷 항은 체크X ⇒ 단락 회로 평가(Short Circuit Evaluation) |
| ! | !(x < 1) | 참인 경우 false, 거짓인 경우 true |

---

## instanceof 연산자 
- `<instance> instanceof <clss>`&nbsp; `<instance>`가 `<class>`형인지 판단<br>
  ∴ known as "Type Comparison Operator"
- **is-a relationship**이 성립한다면 true를 반환<br>
  *참고 [Inheritance (IS-A) vs. Composition (HAS-A) Relationship](https://www.w3resource.com/java-tutorial/inheritance-composition-relationship.php)*{: .fs-3}

---

## 대입 연산자 (Assignment Operator)
- `=`&nbsp; `+=`&nbsp; `-=`&nbsp; `*=`&nbsp; `/=`&nbsp; `%=`<br>

새로 알게 된 것 ↓

| 연산자 | 연산식 | 풀어 쓴 식 |
|:----:|:----:|:---------:|
| &= | x &= 3 | x = x & 3 |
| \|= | x \|= 3 | x = x \| 3 |
| ^= | x ^= 3 | x = x ^ 3 |
| \>>= | x \>>= 3 | x = x \>> 3 |
| \<<= | x \<<= 3 | x = x \<<3 |

*출처 <https://www.w3schools.com/java/java_operators.asp>*{: .fs-2}

---

## 화살표 연산자 -> (Lambda Arrow Operator)
람다식에 쓰이는 연산자
<div class="code-example" markdown="1">
**람다식(Lambda Expression)**<br>
익명 클래스처럼 이름(식별자, identifier)이 없는 메소드<br>
```java
// Syntax  (parameter) -> { method body }

(a, b) -> { return (a >= b) ? a : b; }

event -> System.out.println("Welcome!")
```
</div>

---

## 3항 연산자 (Ternary Operator)
Syntax&nbsp; `<if statement> ? <true case> : <false case>`<br>
&nbsp; ⇒ 조건문의 결과에 따라 `<true case>` 또는 `<false case>` 를 반환
- 간단한 if-else 구문의 경우 3항 연산자를 사용하여 간결하게 표현할 수 있다
- 중첩 사용도 가능하지만 가독성을 위해 지양하는 것이 좋다

```java
int max = (a >= b) ? a : b;

public int getMax(int a, int b) {
    return (a >= b) ? a : b;
}
```

---

## 연산자 우선 순위

| 우선순위 | 연산자 |
|:------:|:-----:|
| 0 | 괄호로 묶인 연산 `()` |
| 1 | postfix `++` `--` |
| 2 | infix `++` `--`<br>부호 `+` `-`<br>단항 연산자 `~` `!` |
| 3 | 산술 연산자 `*` `/` `%` |
| 4 | 산술 연산자 `+` `-` |
| 5 | 비트 이동 연산자 `<<` `>>` `>>>` |
| 6 | 비교 연산자 `<` `>` `<=` `>=`<br>타입 비교 연산자 `instanceof` |
| 7 | 비교 연산자 `==` `!=` |
| 8 | 비트 연산자 `&` |
| 9 | 비트 연산자 `^` |
| 10 | 비트 연산자 `|` |
| 11 | 논리 연산자 `&&` |
| 12 | 논리 연산자 `||` |
| 13 | 3항 연산자 `?` |
| 14 | 대입 연산자 `=` `+=` `-=` `*=` `/=` `%=` `&=` `^=` `|=` `<<=` `>>=` `>>>=` |

*참고 <https://docs.oracle.com/javase/tutorial/java/nutsandbolts/operators.html>*{: .fs-2}

---

## Java 13. switch 연산자 (Switch Expression)
1. 화살표 연산자`->` 사용: 다음 case로 진행하지 않도록 하는 break문이 필요 없어짐
2. switch expression의 값 명시를 위한 break문을 `yield` 키워드로 변경하여 사용<br>

*참고 <https://docs.oracle.com/en/java/javase/13/language/switch-expressions.html>*{: .fs-3}
```java
public enum Day { SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY; }

Day day = Day.WEDNESDAY;

// e.g. for 1
System.out.println(
    switch (day) {
        case MONDAY, FRIDAY, SUNDAY -> 6;
        case TUESDAY                -> 7;
        case THURSDAY, SATURDAY     -> 8;
        case WEDNESDAY              -> 9;
        default -> throw new IllegalStateException("Invalid day: " + day);
        }
    );

// e.g. for 2
int numLetters = switch (day) {
    case MONDAY, FRIDAY, SUNDAY -> {
        System.out.println(6);
        yield 6;
    }
    case TUESDAY -> {
        System.out.println(7);
        yield 7;
    }
    case THURSDAY, SATURDAY -> {
        System.out.println(8);
        yield 8;
    }
    case WEDNESDAY -> {
        System.out.println(9);
        yield 9;
    }
    default -> {
        throw new IllegalStateException("Invalid day: " + day);
    }
};
```
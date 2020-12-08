---
layout: default
title: "[4주차] 제어문"
last_modified_date: 2020-12-08
parent: STUDY HALLE
grand_parent: Java
permalink: /docs/java/study-halle/week4
---
## 목표
{: .no_toc }
**자바가 제공하는 제어문 학습하기**

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

---

## if/else statement
expression의 결과값이 `true`이면 if문을 실행, `false`이면 else문을 실행 (else문이 없으면 skip)

```java
Syntax
if (expression) {
    statement
}

if (expression) {
    statement
} else {
    statement
}
```
```java
// e.g.
int age = 20;
if (age < 19) {
    System.out.println("You are not an adult.");
} else {
    System.out.println("You are not adult.");
}
```

### else if
{: .no_toc }
조건이 추가로 필요한 경우 사용

```java
// e.g.
if (word.equals("a")) {
    System.out.println("It's an apple");
} else if (word.equals("b")) {
    System.out.println("It's a banana");
} else if (word.equals("c")) {
    System.out.println("It's a carrot");
} else {
    System.out.println("There are no corresponding results");
}
```


### nested if/else statement
{: .no_toc }
if와 else의 짝을 block`{}`으로 명시하지 않는다면, else는 **가까이**에 있는 if와 짝이 된다

```java
if(num > 0)
    if(num == 1)
        System.out.println("just one");
else
    System.out.println("more than one");    // if(num == 1)와 짝, indentation 상관 X
```

---

## switch statement
- if/else문과 비슷하나, 하나의 변수에 의해 처리가 나누어진다<br>
- 해당하는 case가 없으면 default 실행
- case 끝에 break문이 없으면 인터프리터는 switch문이 끝났다고 인식하지 않기 때문에<br>
  이후에 매칭되는 case가 있는지 확인한다

### switch문에서 비교가능한 타입
{: .no_toc }
- byte, Byte
- short, Short
- int, Integer
- char, Character
- enum
- String

\* null값이면 NullPointerException 발생

```java
// e.g.
String word = "p";
switch (word) {
    case "a":
        System.out.println("It's an apple");
        break;
    case b":
        System.out.println("It's a banana");
        break;
    case "c":
        System.out.println("It's a carrot");
        break;
    default:
        System.out.println("There are no corresponding results");
}
```
*참고 <https://www.baeldung.com/java-switch>*{: .fs-3}

---

## while statement
반복적 동작을 가능하게 한다

```java
Syntax
while (expression) {
    statement
}
```

- expression의 결과값이 `true`이면 statement를 실행, `false`이면 skip<br>
- statement 실행 후 expression 재판단<br>
  ∴ 무한루프에 빠지지 않도록 주의해야 함!

```java
// e.g.
int count = 0;
while (count < 10) {
    System.out.println(count + 1);
    count++;
}
```
---

## do statement

```java
Syntax
do {
    statement
} while (expression);
```

- 최초 한번은 statement 무조건 실행
- 1회 실행 후 expression의 결과값이 `true`이면 statement를 다시 실행, `false`이면 skip
- `while (expression);`에서 끝에 `;`이 붙는다

```java
// e.g.
int count = 0;
do {
    System.out.println(count + 1);
    count++;
} while (count < 10);
```

---

## for statement
반복에 사용되는 변수의 초기화, 조건, 갱신에 대해 정의할 수 있다 

```java
Syntax
for(initialize; expression; update) {
    statement
}
```

- 최초 실행) `initialize` → `test` 결과가 true (false면 exit) → `statement` → `update`
- 2회 이상) `test` 결과가 true (false면 exit) → `statement` → `update`

```java
// e.g.
for(int i = 0; i < 10; i++) {
    System.out.println(i + 1);
}
```

---

## foreach statement
객체의 collection을 반복할 때 사용 (객체가 null이 안 되도록 조심!)

```java
Syntax
for( declaration : expression ) {
    statement
}
```
특징
- 인덱스 사용 불가 (즉, statement안에 들어온 요소가 몇 번째 요소인지 알 수 없다)
- collection의 끝에서부터 거꾸로 반복 불가

```java
int[] primes = new int[] {2,3,5,7,11,13,17,19,23,29};
for(int n : primes)
    System.out.println(n);
```

*참고 Java in a Nutshell 7th edition*{: .fs-3}
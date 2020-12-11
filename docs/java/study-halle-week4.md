---
layout: default
title: "[4주차] 제어문"
last_modified_date: 2020-12-12
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

---

## 과제 1. live-study 대시 보드를 만드는 코드를 작성하세요.
<div class="code-example" markdown="1">
- 깃헙 이슈 1번부터 18번까지 댓글을 순회하며 댓글을 남긴 사용자를 체크 할 것.
- 참여율을 계산하세요. 총 18회에 중에 몇 %를 참여했는지 소숫점 두자리가지 보여줄 것.
- [Github 자바 라이브러리](https://github-api.kohsuke.org)를 사용하면 편리합니다.
- 깃헙 API를 익명으로 호출하는데 제한이 있기 때문에 본인의 깃헙 프로젝트에 이슈를 만들고 테스트를 하시면 더 자주 테스트할 수 있습니다.
</div>

### 해결 과정
1. IntelliJ에서 Maven Project 생성
2. pom.xml 파일에 Github 자바 라이브러리 추가
3. [라이브러리 도큐먼트](https://github-api.kohsuke.org/apidocs/index.html) 참고하여 코드작성
- 이슈 1번 ~ 18번까지 커멘트를 단 사용자 아이디와 그 수를 취득
        - 1주차 ~ 18주차까지 참여정보를 담는 WeekInfo 클래스 생성<br>
- 마크다운 표 형식에 맞게 출력 ( = dashboard 출력)
4. 깃헙 저장소에 이슈 만들고 동작 테스트

### 결과물
[깃허브 저장소 보기](https://github.com/sowjd/live-study-assignment/tree/main/dashboard)<br>
<script src="https://gist.github.com/sowjd/6c71b3613c8b7f6f6a8072c68d3c2644.js"></script>
<script src="https://gist.github.com/sowjd/03259e05126bd12aa6418b827a0537e1.js"></script>

<div class="code-example" markdown="1">
| 참여자 | 1주차<br>193/224<br>(86.16%) | 2주차<br>155/224<br>(69.20%) | 3주차<br>148/224<br>(66.07%) | 4주차<br>104/224<br>(46.43%) | 5주차<br>0/224<br>(0.00%) | 6주차<br>0/224<br>(0.00%) | 7주차<br>0/224<br>(0.00%) | 8주차<br>0/224<br>(0.00%) | 9주차<br>0/224<br>(0.00%) | 10주차<br>0/224<br>(0.00%) | 11주차<br>0/224<br>(0.00%) | 12주차<br>0/224<br>(0.00%) | 13주차<br>0/224<br>(0.00%) | 14주차<br>0/224<br>(0.00%) | 15주차<br>0/224<br>(0.00%) | 16주차<br>0/224<br>(0.00%) | 17주차<br>0/224<br>(0.00%) | 18주차<br>0/224<br>(0.00%) | 참석율 |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | --- |
| 0417taehyun |✅|✅|✅|||||||||||||||| 16.67% |
| 1031nice |✅|✅|✅|✅||||||||||||||| 22.22% |
| 2yeseul |✅|✅||||||||||||||||| 11.11% |
| 372dev |✅|✅|✅|||||||||||||||| 16.67% |
| 9m1i9n1 |✅|✅|✅|||||||||||||||| 16.67% |
| Ahnyezi ||||✅||||||||||||||| 5.56% |

~ 이후 생략 ~
</div>
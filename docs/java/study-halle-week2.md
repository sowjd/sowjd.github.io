---
layout: default
title: "[2주차] 프리미티브 타입, 변수, 배열 사용법"
last_modified_date: 2020-11-21
parent: STUDY HALLE
grand_parent: Java
permalink: /docs/java/study-halle/week2
---

## 목표
{: .no_toc }
**자바의 프리미티브 타입, 변수 그리고 배열을 사용하는 방법 익히기**

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

---

## 자바 데이터 타입
### 프리미티브 타입(Primitive type)
- 변수 선언 시 메모리 공간에 직접 데이터를 저장
- 메모리의 stack 영역에 할당됨

### 레퍼런스 타입(Reference type)
- 변수 선언 시 메모리 공간에 참조할 주소값을 저장
- 메모리의 heap 영역에 생성되어 stack에서 참조

---

## 프리미티브 타입 종류와 값의 범위 그리고 기본값
<img width="580px" src="https://user-images.githubusercontent.com/30143099/99681659-bcd40b80-2ac1-11eb-890e-8d6f0c83dc33.png">

`Is boolean 1bit or 1byte?`<br>
&nbsp; true와 false 두 가지의 데이터만 표현하기 때문에 1bit의 정보지만, 실제 크기는 정확히 정의되지 않음<br>
&nbsp; *(참고 <https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html>)*{: .fs-2}

`char` [유니코드](https://namu.wiki/w/유니코드)를 저장

`byte, short` 사이즈가 큰 배열을 사용할 때 메모리 절약이 중요하다면 사용
 *(e.g. 임베디드 프로그래밍)*{: .fs-2}

`float, double` [IEEE 754-1985](https://en.wikipedia.org/wiki/IEEE_754-1985) 표준을 채택<br>
&nbsp; 실수값의 정확도가 중요한 경우 `java.math.BigDecimal` 클래스를 사용<br>
&nbsp; ∵ [부동 소수점 표현 방식](https://gsmesie692.tistory.com/94)은 오차가 존재
    (컴퓨터에서 실수값은 근사치)

---

## 리터럴 Literal
- 소스 코드에서 상수값으로 표현되는 문자<br>
  `e.g. 1, 1.0, 'A', "abc", true, false, null`

### boolean 리터럴
only `true`, `false`만 존재

### 문자 리터럴
```java
char c1 = 'A';
char c2 = '\u0100'; // 유니코드 문자
char c3 = '\'';     // '
char c4 = '\"';     // "
char c5 = '\t';     // tab
char c6 = '\b';     // backspace

String s = "abc";
```

### 정수 리터럴
```java
int i = 15;         // 10진수
int i1 = 0b1111;    // 2진수, 0b로 시작
int i2 = 017;       // 8진수, 0으로 시작
int i3 = 0xf;       // 16진수, 0x로 시작

long l1 = 9999999999L;      // long 타입은 L을 붙어줌
long l2 = 2_150_000_000L;   // 가독성을 위해 숫자 사이에 _삽입 가능
```

### 실수 리터럴
```java
// float 타입은 f나 F를 붙어줌
float f1 = 0.13fF;
float f2 = .13F;
float f3 = 13E-2F;

double d = 0.13;
```

---

## 변수 선언 및 초기화
- `변수` 변할 수 있는 수
- `변수명` 변수의 메모리 공간에 붙여진 이름<br>
  *참고 [좋은 코드를 위한 자바 변수명 네이밍](https://woowacourse.github.io/javable/2020-04-24/variable_naming)*{: .fs-3}
- `변수 선언` 자료형에 따라 메모리 공간이 할당되고 변수명으로 이름이 붙여짐
- `초기화` 변수에 처음으로 저장하는 값

```java
int year = 2020;
int month = 11, day = 20; 
```

### 변수의 종류
- `지역 변수` 메소드 안에서 선언된 변수
- `전역 변수(멤버 변수)` 클래스 안에서 선언된 변수
    - `클래스 변수` 인스턴스끼리 공유하는 변수
    - `인스턴스 변수` 인스턴스별 다른 값을 가지는 변수

```java
  class StudentInfo {
     // 멤버 변수
     public static final String SCHOOL_NAME = "ABC school";  // 클래스 변수
     public String name;     // 인스턴스 변수
     private int grade;      // 인스턴스 변수
     
     public String getGradeKr() { 
         String gradeKr = grade + "학년";  // 지역 변수
         return gradeKr;
     }
 }
 ```

---

## 변수의 스코프와 라이프타임
- `스코프(Scope)` 변수에 접근할 수 있는 범위, 영역
- `라이프타임(lifetime)` 메모리에서 변수의 수명

### 지역변수
- `스코프` 메소드 내부
- `라이프타임` 메소드를 실행하는 동안

### 멤버 변수

|변수 종류|스코프|라이프타임|
|:-----|:----|:-----|
|인스턴스 변수|클래스 내부|인스턴스가 메모리에 있는 동안|
|클래스 변수|클래스 내부|메모리에 클래스 로드 ~ 프로그램 종료|

---

## 타입 변환(Type Conversion)
변수의 자료형을 바꾸는 것
- `타입 캐스팅(Type Casting)` 캐스트 연산자(cast operator)에 의해 타입이 바뀜
- `타입 프로모션(Type Promotion)` 컴파일러에 의해 자동으로 타입이 바뀜
<img width="450px" src="https://user-images.githubusercontent.com/30143099/99870719-ac827480-2c18-11eb-9e4c-c9c031503cd3.png">
```java
int i = 3;
byte b = (byte) i;  // type casting
double d = i;       // type promotion
```
&nbsp; _+ 참고 [Automatic conversions in Integer arithmetic](http://www.mathcs.emory.edu/~cheung/Courses/170/Syllabus/04/int1e.html)_{: .fs-3}

---

## 배열
배열은 레퍼런스 타입과 같이, 메모리의 heap 영역에 생성되어 stack에서 참조됨

### 1차원 배열 선언하기
```java
int[] num = new int[10];
String[] week = new String[]{"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"};
```
<img width="400px" src="https://user-images.githubusercontent.com/30143099/99871477-67614100-2c1e-11eb-86e2-bc693ec35bf7.png">

### 2차원 배열 선언하기
```java
int[][] arr1 = new int[2][3];
int[][] arr2 = { {1,2,3}, {4,5,6} };
```
<img width="380px" src="https://user-images.githubusercontent.com/30143099/99871681-cd9a9380-2c1f-11eb-9a22-4b5d11c6df7b.png">

---

## 타입 추론(Type Inference)
- 컴파일러가 스스로 타입을 유추해내는 것
- 자바에서 타입 추론은 `제네릭`, `람다`, `var`가 있다.
- Java 10부터 지원

### var
Local Variable Type Inference
- 지역 변수에 타입 추론을 지원하는 자료형
- 키워드가 아니라 하나의 자료형이므로 하위버전 호환성을 보장한다.<br>
  ∴ 이전에 var을 변수명, 메소드 명, 패키지 명으로 썼다 하더라도 영향은 없지만<br>
  &nbsp;&nbsp; var을 자료형으로 쓴 코드가 있다면 재컴파일 해야 함!

```java
var ls = new ArrayList<String>();
```
*참고 <https://www.baeldung.com/java-10-local-variable-type-inference>*{: .fs-3}

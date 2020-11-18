---
layout: default
title: "[1주차] 자바코드 실행과정"
parent: STUDY HALLE
grand_parent: Java
permalink: /docs/java/study-halle/week1
---

## 목표
{: .no_toc }
자바 소스 파일(.java)을 JVM으로 실행하는 과정 이해하기

## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}
---
## 자바 파일 실행과정
<img width="600" alt="image" src="https://user-images.githubusercontent.com/30143099/99238453-1677d400-283d-11eb-9a8c-30c399370586.png"> 

---

## 컴파일이란?
- Compile time에 소스코드를 bytecode로 바꾸는 것
<div class="code-example" markdown="1">
*이론적으로 컴파일이란 기계어로 바꾸는 것을 의미하지만,<br>
클래스 파일을 빌드하는 별도의 과정이 컴파일과 비슷하기 때문에 컴파일이라고 한다.*

*실제 기계어로 바꾸는 것은 JIT 컴파일러*
</div>

- 자바 컴파일러(javac.exe) 사용<br>
```$ javac <file name>.java```

### javac options
- `-classpath <path>` 컴파일 시 참조할 클래스들의 경로를 지정
- `-d <directory>` 컴파일 후 생성된 .class 파일의 저장경로를 지정
- `-deprecation` 소스코드에서 @deprecated인 멤버나 클래스를 사용한 위치를 표시
- `-encoding <encoding name>` 소스파일의 encoding을 지정
- `-g` 디버깅 테이블 생성
<div class="code-example" markdown="1">
*디버깅 테이블: 디버깅 툴에서 사용되는 정보<br>
&nbsp; e.g.) line numbers, local variables*
</div>
- `-nowarn` 경고 출력 X

출처: [영어](http://www.cs.yorku.ca/tech/other/java/docs/tooldocs/solaris/javac.html#:~:text=The%20javac%20command%20compiles%20Java,to%20interprete%20the%20Java%20bytecodes.&text=Unless%20you%20specify%20the%20%2Dd,as%20the%20corresponding%20source%20file)
/ [한국어](http://digital2u.co.kr/board/form/view/java/1199/1/0)

### What happens in compile?
- [여기에서](https://catch-me-java.tistory.com/9) "2. JAVA의 컴파일 하는법" 참고

---

## 바이트코드란?
- JVM이 이해할 수 있는 명령어
- CPU처럼 하드웨어 프로세서가 이해할 수 있는 언어는 아니기 때문에 기계어는 아님!
- 명령어의 크기가 1바이트라서 바이트코드라고 불린다.

---

## JVM이란?
Java Virtual Machine
- 바이트코드를 자바 프로그램으로 실행할 수 있도록 runtime 환경을 제공해주는 프로그램
- 가상머신만 설치되어 있으면 바이트코드를 자바 프로그램을 실행 할 수 있으므로 “write once, run anywhere” (WORA) 라고 불린다.<br>
  ∴ 자바 프로그램은 운영체제로부터 독립적, JVM은 운영체제에 종속적

### JVM 구성 요소
<img alt="image" src="https://miro.medium.com/max/1400/1*tve0gLb0il_4eY2IYlvuaw.png" />
*출처 <https://medium.com/swlh/internals-of-compiler-and-jvm-f4d4dfd7092b>*
{: .fs-2}
1. 클래스 로더 시스템: 클래스 파일을 로드

2. 메모리 ⇒ The Runtime Data Area<br>
 - `메소드(Method Area)` 클래스 레벨의 데이터와 static 변수들을 저장, 공유 공간
 - `힙(Heap Area)` 객체(인스턴스)를 저장, 공유 공간
 - `스택(Stack Area)` Thread마다 생성됨<br>
 - `PC Registers` 현재 실행 중인 명령의 주소를 저장, 각 thread마다 분리된 PC register를 가지고 있다.
 - `네이티브 메소드 스택(Native Method Stack)` 네이티브 메소드 정보를 저장, 각 thread마다 분리된 네이티브 메소드 스택을 가지고 있다.

3. 실행엔진
 - `인터프리터(Interpreter)` 바이트코드를 line by line으로 실행, 같은 메소드를 호출하더라도 
 2) JIT 컴파일러
 
 
JVM이란 무엇인가
✅컴파일 하는 방법
✅javac 옵션 조사
실행하는 방법 
✅바이트코드란 무엇인가
JIT 컴파일러란 무엇이며 어떻게 동작하는지
JVM 구성 요소
JDK와 JRE의 차이


## Next Post
{: .no_toc .text-delta }
[next](../study-halle/week2)
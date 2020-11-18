---
layout: default
title: "[1주차] 자바 코드 실행과정"
last_modified_date: 2020-11-18
parent: STUDY HALLE
grand_parent: Java
permalink: /docs/java/study-halle/week1
---

## 목표
{: .no_toc }
**자바 소스 파일(.java)을 JVM으로 실행하는 과정 이해하기**

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

---

## 자바 파일 실행과정
<img width="600" alt="image" src="https://user-images.githubusercontent.com/30143099/99238453-1677d400-283d-11eb-9a8c-30c399370586.png"> 

---

## 컴파일이란?
- Compile time에 소스 코드를 bytecode로 바꾸는 것
<div class="code-example" markdown="1">
*이론적으로 컴파일이란 기계어로 바꾸는 것을 의미하지만<br>
바이트코드로 변환하는 과정이 자바 프로그램을 실행하기 위한 하나의 단계이므로 컴파일이라고 한다.*

*실제 기계어로 바꾸는 것은 JIT 컴파일러*
</div>

- 자바 컴파일러(javac.exe) 사용<br>
`$ javac <file name>.java`

### javac options
- `-classpath <path>` 컴파일 시 참조할 클래스들의 경로를 지정
- `-d <directory>` 컴파일 후 생성된 .class 파일의 저장경로를 지정
- `-deprecation` 소스 코드에서 @deprecated인 멤버나 클래스를 사용한 위치를 표시
- `-encoding <encoding name>` 소스 파일의 encoding을 지정
- `-g` 디버깅 테이블 생성
<div class="code-example" markdown="1">
*디버깅 테이블: 디버깅 툴에서 사용되는 정보<br>
&nbsp; e.g.) line numbers, local variables*
</div>
- `-nowarn` 경고 출력 X

*참고 [영어](http://www.cs.yorku.ca/tech/other/java/docs/tooldocs/solaris/javac.html#:~:text=The%20javac%20command%20compiles%20Java,to%20interprete%20the%20Java%20bytecodes.&text=Unless%20you%20specify%20the%20%2Dd,as%20the%20corresponding%20source%20file)
/ [한국어](http://digital2u.co.kr/board/form/view/java/1199/1/0)*{: .fs-2}

### What happens in compile?
- [2. JAVA의 컴파일 하는법](https://catch-me-java.tistory.com/9) 참고

---

## 바이트코드란?
- JVM이 이해할 수 있는 명령어
- CPU처럼 하드웨어 프로세서가 이해할 수 있는 언어는 아니기 때문에 기계어는 아님!
- OP code가 1바이트라서 바이트코드라고 불린다.
<div class="code-example" markdown="1">
*OP code(Operation Code)<br>
&nbsp; 수행할 연산자(함수 연산, 자료 전달 연산, 제어 연산, 입출력 연산)를 표시*
</div>

---

## JVM이란?
Java Virtual Machine
- 바이트코드를 자바 프로그램으로 실행할 수 있도록 runtime 환경을 제공해주는 프로그램
- 가상머신만 설치되어 있으면 바이트코드를 자바 프로그램으로 실행할 수 있으므로 “write once, run anywhere” (WORA) 라고 불린다.<br>
  ∴ 플랫폼에 독립적이라는 자바의 장점이 JVM에서 비롯됨 (but, JVM은 플랫폼에 종속적)

### JVM 구성 요소
<img alt="image" src="https://miro.medium.com/max/1400/1*tve0gLb0il_4eY2IYlvuaw.png">
*출처 <https://medium.com/swlh/internals-of-compiler-and-jvm-f4d4dfd7092b>*
{: .fs-2}
1. 클래스 로더 시스템<br>
클래스 파일을 `Loading`, `Linking`, `Initialization` 단계를 거쳐 메모리 영역으로 로드한다.

2. 메모리 ⇒ The Runtime Data Area<br>
 - `Method` 클래스 레벨의 데이터와 static 변수들을 저장, 공유 공간
 - `Heap` 객체(인스턴스)를 저장, 공유 공간
 - `Stack` thread마다 생성됨, [frame](https://johngrib.github.io/wiki/jvm-stack/)을 저장
 - `PC Registers` 현재 실행 중인 명령의 주소를 저장, thread마다 분리된 PC register를 가지고 있다.
 - `Native Method Stack` 네이티브 메소드 정보를 저장, thread마다 분리된 네이티브 메소드 스택을 가지고 있다.

3. 실행 엔진
 - `Interpreter` 바이트코드를 line by line으로 실행, 같은 메소드를 호출하더라도 새롭게 interpret
 - `JIT Compiler` Just-in-Time Compiler<br>
   반복 호출되는 바이트코드를 이미 컴파일된 네이티브 코드로 변환 ⇒ interpreter 효율 ↑
 - `Garbase Collector` 참조되지 않는 객체를 모으고 제거
 
4. 네이티브 메소드 인터페이스(JNI)<br>
실행 시 필요한 네이티브 라이브러리들을 네이티브 메소드 라이브러리에서 가져옴

5. 네이티브 메소드 라이브러리<br>
실행 시 필요한 자바가 아닌 라이브러리(C/C++)


### JIT 컴파일러 동작 방식
<img src="https://user-images.githubusercontent.com/30143099/99388219-9626a100-2918-11eb-8e0a-8b5bd557bcdd.png">
*출처 <https://en.wikibooks.org/wiki/Java_Programming/The_Java_Platform>*{: .fs-2}
- `클라이언트 컴파일러(C1)` 빠르게 실행되지만 덜 최적화된 코드
- `서버 컴파일러(C2)` 실행에 약간의 시간이 들지만 최적화된 코드
- `계층형 컴파일` 현재는 위 두 JIT 컴파일러를 모두 사용<br>
   ⇒ 처음에는 C1으로 컴파일했다가 호출 빈도가 증가하면 C2로 재컴파일

*참고 <https://www.baeldung.com/graal-java-jit-compiler>*{: .fs-2}

---

## JDK와 JRE의 차이
<img width="400px" src="https://user-images.githubusercontent.com/30143099/99476286-96b04d80-2993-11eb-9985-6b305479a6b8.png">
- `JDK` Java Development Kit<br>
   JRE에 개발 툴(Java compiler, 디버거 등)이 포함된 패키지<br>
- `JRE` Java Runtime Environment<br>
   자바 프로그램을 실행하는 환경 (개발할 수 있는 환경 X)

---

## 실행하는 방법
- 자바 명령어 사용<br>
`$ java <class file name>`

### 컴파일 버전과 실행 버전
- 컴파일(javac) 버전이 실행(java) 버전보다 낮으면 괜찮지만, 높으면 아래와 같은 에러가 발생
<div class="code-example" markdown="1">
Error: A JNI error has occurred, please check your installation and try again Exception in thread "main" java.lang.UnsupportedClassVersionError: MainClass has been compiled by a more recent version of the Java Runtime ... 
</div>
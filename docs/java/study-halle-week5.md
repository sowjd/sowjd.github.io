---
layout: default
title: "[5주차] 클래스"
last_modified_date: 2020-12-18
parent: STUDY HALLE
grand_parent: Java
permalink: /docs/java/study-halle/week5
---
## 목표
{: .no_toc }
**자바의 Class에 대해 학습하기**

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

---

## Class
- 변수, 메소드 등의 정의를 통해 어떻게 작동시킬지 명시한 것<br>
- 자바 프로그램에서 핵심적인 요소로 클래스 없이 자바 코드를 작성할 수 없다

---

## 클래스 정의
1. 클래스명<br>
**Naming Convention**<br>
- 클래스명은 첫 글자를 대문자로 하는 명사일 것
- 첫 글자를 따서 줄이거나 약어는 지양할 것

2. 상속, 인터페이스<br>
- `extends` 키워드를 사용하여 superclass 지정 가능
- `implements` 키워드를 사용하여 구현할 interface 지정 가능

3. 클래스 멤버: **변수, 메소드, 생성자**<br>
- `static` 키워드 사용 가능<br>
 💡static 키워드를 사용하면?<br>
  &nbsp; &nbsp; ① 프로그램이 실행될 때 메모리에 올라간다<br>
  &nbsp; &nbsp; ② 객체를 생성하지 않아도 사용 가능하다<br>
  &nbsp; &nbsp; ③ 모든 객체가 공유한다<br>
- access modifiers(접근 제어자) 키워드 사용 가능

| Accessible to | public | protected | default | private |
|---------------|:------:|:---------:|:-------:|:-------:|
| Defining class | Yes | Yes | Yes | Yes |
| Class in same package | Yes | Yes | Yes | No |
| Subclass in different package | Yes | Yes | No | No |
| Nonsubclass different package | Yes | No | No | No |

```java
public class Integer extends Number implements Serializable, Comparable {
    // class members here
}
```
*출처 Java in a Nutshell 7th edition*{: .fs-3}

---

### 중첩 타입, 내부 클래스
- 외부에 노출하지 않고 사용하고자 할 때
- 외부 클래스와 밀접한 관계가 있을 때
- 코드에서 극소한 부분에만 쓰일 때
- 컴파일 시 클래스 단위로 .class파일이 생성됨 (A.class, B.class)

1) Static member types<br>
&nbsp; `static` 키워드로 선언된 것<br>
&nbsp; *static 키워드를 사용하지 않더라도 중첩 interface, enum, annotation은 static*
```java
class A {
    static class B {
    }
}

// 외부에서 접근
int numFromB = B.num;
```
2) Nonstatic member classes<br>
&nbsp; `static` 키워드로 선언되지 않은 것
```java
class A {
    class B {
    }
}
```

3) Local classes<br>
&nbsp; 클래스의 메소드 내에 선언 (지역 변수와 같은 맥락)<br>
&nbsp; *interface, enum, annotation은 지역으로 정의될 수 없다*
```java
class A {
    public void method() {
        class B {
        }
    }
}
```

4) Anonymous classes<br>
의미있는 이름이 붙여지지 않은 local class<br>
```java
interface B {
    void method();
}

class A {
    B b = new B() {
        @Override
        public void method() { 
        } 
    };
}
```

---

## 메소드 정의
```java
Syntax
<접근 제어자> <static nonstatic> <반환 타입> <메소드명> (<파라미터>) {
    // define body
}

class Main {
    public static void main(String args[]) {
        System.out.println("Hello World!");
    }
}
```

---

## 생성자 정의
클래스가 인스턴스화 될 때, 즉 new 키워드로 인스턴스가 생성될 때 초기화를 담당
- 꼭 정의하지 않아도 됨
- 여러 개의 생성자 정의 가능

```java
public Person{
    String name;
    
    Person() {
        this("Jen");
    }

    Person(String name) {
        this.name = name;
    }
}

Person jen = new Person();
Person kim = new Person("kim");
```
---

## this 키워드
지역변수와 클래스의 멤버변수가 이름이 동일할 경우, 인스턴스 필드의 변수임을 명시
```java
public Person{
    String name;    // Person 타입의 인스턴스가 생성될 때마다 값을 다르게 가질 수 있는 인스턴스 필드

    Person(String name) {
        this.name = name;   // 클래스 멤버변수 name에 파라미터 name 값을 할당
    }
}
```

---

## Instance
클래스가 heap 메모리에 올라간 것<br>
`new` 키워드는 클래스의 **컨스트럭터를 작동**시키기 때문에 인스턴스를 생성한다
```java
Person jen = new Person();
Person kim = new Person("kim");
```
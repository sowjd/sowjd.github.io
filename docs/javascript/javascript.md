---
layout: default
title: JavaScript
last_modified_date: 2020-11-24
permalink: /docs/javascript
---
# Theory
{: .no_toc }

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

---

## What is JavaScript?
- The **only programming language** for the Web
- Backend has many options (Java, Python, Ruby, ...)<br>
but, frontend we can only have JavaScript

<div class="code-example" markdown="1">
HTML은 Markup Laguage, 태그를 사용하여 표시하는 언어<br>
CSS는 Style Sheet, 꾸며주는 언어<br>
∴ [프로그래밍 언어](https://ko.wikipedia.org/wiki/프로그래밍_언어)(기계가 동작하도록 명령을 시키는 언어)가 아님!
</div>

## Why JavaScript?
- All computers(browsers) can understand

### Super Powers of JavaScript
for example...
- get location
- make real-time stuff and interactive stuff
- make mobile/native applications, video games

something awesome😲 <https://world-draw.appspot.com/draw>{: .fs-2}

## ECMA Script
- Specification/manual/instruction of JavaScript
- Browsers take ECMA Script and try to implement it in their ways

## VanillaJS
JavaScript without library, low Javascript<br>
&nbsp; ⇒&nbsp; fast, light-weight, cross-platform framework

## \<script> Tag in HTML
\<body> 태그 안 맨 끝에 삽입<br>
*참고 [\<script> 태그는 어디에 위치해야 할까요?](https://velog.io/@takeknowledge/script-태그는-어디에-위치해야-할까요)*{: .fs-2}

## Variables

| keywords | scope | redeclaration | reassign | ect |
|:----------:|:----------:|:----------:|:----------:|:-:|
| var | function | 𝖮 | 𝖮 | Not Recommended |
| const | block({}) | 𝖷 | 𝖷 | since ES6 |
| let | block({}) | 𝖷 | 𝖮 | since ES6 |

## Data Type
### Primitive Type

| Type | Value |
|:-----|:------|
| Boolean | `true` or `false` |
| NULL | only `null` |
| Undefined | only `undefined` (값을 assign하지 않은 변수일 경우) |
| Number | -(2^53 -1) ~ 2^53 -1 범위의 정수 및 [실수(64-bit IEEE 754)](https://en.wikipedia.org/wiki/Double-precision_floating-point_format),<br> `+Infinity`, `-Infinity`, `NaN` |
| String | textual data |
| Symbol | unique and immutable value |

*참고 <https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures>*{: .fs-2}

```javascript

```
https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Values,_variables,_and_literals

### Reference Type
`Object` &nbsp; Object class, 배열, 함수, 사용자 정의 클래스

### Array
out of index인 경우, exception을 발생하지 않고 undefinded를 출력

### Object
```javascript
// ex1
let info = {
  name: "Jen",
  age: 34,
  favfruits: ["banana", "apple"]
}

// ex2
const calculator = {
  plus: function(a, b){
    return a+b;
  }
}

console.log(calculator.plus(4, 5))
```

### Function
A piece of instructions that can be used as many times we want




## Print
```javascript
let name = "Jen"
let fruit = "Oranges"
console.log(`${name} likes ${fruit}`)
```
### Print Emoji's
https://dev.to/beumsk/how-to-add-emoji-s-in-your-website-using-html-css-or-javascript-4g6g

eventListener https://developer.mozilla.org/ko/docs/Web/Events


<br>
위 내용은 [[노마드 코더] 바닐라 JS로 크롬 앱 만들기](https://nomadcoders.co/javascript-for-beginners/lobby)
를 참고하여 정리한 내용입니다.
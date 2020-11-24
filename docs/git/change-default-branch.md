---
layout: default
title: 기본브랜치 변경 (master → main)
last_modified_date: 2020-11-24
parent: Git
permalink: /docs/git/change-default-branch
---

# Git CLI 기본브랜치 변경 (master → main)
<br>
GitHub에서 기본 브랜치를 `master`에서 `main`으로 바꾸었다.<br>
앞으로 생성되는 github 원격저장소의 기본브랜치 이름은 `main`이 된다.

따라서, `main` 에 적응(?)하기 위해 설정을 변경하기로 했다.
-  참고 블로그 <https://blog.outsider.ne.kr/1503>


##  1. Git version upgrade (ver 2.28.0 이상)
- Homebrew를 사용하고 있다면 `$ brew update` 후 <br>
  `$ brew upgrade git` 을 실행 (최신 버전으로 설치됨)

##  2. Git 기본브랜치 설정변경
`$ git config --global init.defaultBranch main` 실행<br>
`$ cat ~/.gitconfig` 로 아래 내용이 있는지 확인
```
[init]
	defaultBranch = main
```
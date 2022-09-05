---
layout: default
title: Git
last_modified_date: 2022-09-05
has_children: true
has_toc: false
permalink: /docs/git/
---

# CLI Command
그만 찾아보고 외우자

## git add 취소
`$ git reset`<br>
`$ git reset <file>`

## git commit 취소
`$ git reset HEAD^`&nbsp;&nbsp;&nbsp;최신 커밋 취소<br>
`$ git reset HEAD~n`&nbsp;&nbsp;&nbsp;최신 n개의 커밋 취소

## git push 취소
1. `$ git reset <commit id>`
2. `$ git commit -m "commit messages"`
3. `$ git push origin <branch name> -f`

## 특정 commit으로 이동
clone한 후에 `$ git reset --hard <commit id>`로 이동 (명령어 한 줄로 할 수 없다는게 아쉽군..)

## 원격저장소
`$ git remote -v`&nbsp;&nbsp;&nbsp;연결되어 있는 원격저장소 확인<br>
`$ git remote remove <name>`&nbsp;&nbsp;&nbsp;원격저장소 연결 끊기 (보통 &lt;name&gt;은 `origin`임)<br>
`$ git remote add <name> <url>`&nbsp;&nbsp;&nbsp;원격저장소 연결하기

## 브랜치
`$ git branch`&nbsp;&nbsp;&nbsp;로컬 브랜치 리스트<br>
`$ git branch -r`&nbsp;&nbsp;&nbsp;원격 브랜치 리스트<br>
`$ git branch -a`&nbsp;&nbsp;&nbsp;로컬 + 원격 브랜치 리스트<br>
`$ git branch <name>`&nbsp;&nbsp;&nbsp;브랜치 생성<br>
`$ git checkout -b <name>`&nbsp;&nbsp;&nbsp;브랜치 변경<br>
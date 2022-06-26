---
layout: default
title: Git
last_modified_date: 2022-06-26
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
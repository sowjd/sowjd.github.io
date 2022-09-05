---
layout: default
title: GitHub Pages 로컬에서 실행
last_modified_date: 2022-09-05
parent: Git
permalink: /docs/git/github-pages-locally
---

# [MacOS] GitHub Pages 로컬에서 실행하기

## Install Ruby
`$ brew update`<br>
`$ brew install rbenv`<br>
`$ rbenv versions`&nbsp;&nbsp;&nbsp;system이라고 뜸 (맥에 설치되어 있는 루비)<br>
`$ rbenv install -l`&nbsp;&nbsp;&nbsp;설치할 수 있는 루비 버전 확인<br>
`$ rbenv install 3.0.4`&nbsp;&nbsp;&nbsp;시간 좀 걸림<br>
`$ rbenv versions`&nbsp;&nbsp;&nbsp;설치한 3.0.4 버전도 같이 뜸<br>
`$ rbenv global 3.0.4`&nbsp;&nbsp;&nbsp;3.0.4 버전을 사용<br>
`$ vim ~/.zshrc`&nbsp;&nbsp;&nbsp;Shell에 아래 내용 쓰고 저장
```
[[ -d ~/.rbenv  ]] && \
  export PATH=${HOME}/.rbenv/bin:${PATH} && \
  eval "$(rbenv init -)"
```
`$ source ~/.zshrc`&nbsp;&nbsp;&nbsp;Shell에 적용

## Install Jekyll
`$ gem install jekyll`

## Install Bundler
`$ gem install bundler -v 2.1.4`&nbsp;&nbsp;&nbsp; 버전 2.1.4로 설치할 것<br>
`$ bundle _2.1.4_ install`<br>
`$ bundle add webrick`&nbsp;&nbsp;&nbsp;Ruby 3.0 이상부터 webrick이 설치되지 않기 때문에 추가해줘야 에러가 발생하지 않음

## Install Theme
프로젝트 폴더로 이동<br>
`$ gem install just-the-docs`

## Run Jekyll Server
`$ bundle exec jekyll serve` <http://localhost:4000> 접속





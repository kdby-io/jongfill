# Jongfill

Jongfill은 문장에 포함된 한글 문자들을 주어진 종성으로 채웁니다. **특정 인물**과 전혀 연관이 없습니다.

## 설치하기

```
npm i -S jongfill
```

## 사용하기

```js
const jongFill = require('jongfill');

jongFill('ㅎ', '죄송합니다') // 죟솧핳닣닿
jongFill('ㅎ', '죄송합니다', { replace: false }) // 죟송합닣닿

jongFill('ㄵ', 'Jongfill은 문장에 포함된 한글 문자들을 주어진 종성으로 채웁니다.')
// Jongfill읁 묹잕엕 폱핝됝 핝귽묹잕듡읁 줁얹짅 졵섡읁롡 챉욵닍닩.

```

## 라이센스
[WTFPL](http://www.wtfpl.net/txt/copying/)
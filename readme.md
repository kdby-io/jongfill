# Jongfill

Jongfill은 문장에 포함된 한글 문자들을 주어진 종성으로 채웁니다.

파이썬에서 [zfill](https://docs.python.org/3/library/stdtypes.html#str.zfill) 혹은 MySQL에서 [zerofill](https://dev.mysql.com/doc/refman/5.5/en/numeric-type-attributes.html)

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
// Jongfill읁 묹잕엕 폱핝됝 핝귽묹잕듡읁 줁얹짅 졵섡읁롡 챉욵닍다.

```
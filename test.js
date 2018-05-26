const test = require('ava')
const jongFill = require('.')

test('invalid filler', t => {
  const error = t.throws(() => {
    jongFill('a', 'Hello, 세상!')
  });

  t.is(
    t.throws(() => jongFill('a', 'Hello, 세상!')).message,
    'A filler must be a Jongseong or an empty string.'
  );
})

test('non-hangul in text', t => {
  t.is(
    jongFill('ㄱ', 'Hello, 세상!'),
    'Hello, 섹삭!'
  )
})

test('disable replace', t => {
  t.is(
    jongFill('ㄲ', '키스의 고유 조건은 입술끼리 만나야 되고 특별한 요령은 필요치 않다', { replace: false }),
    '킦슦읚 곢윢 졲건은 입술끾릮 만낚앾 됚곢 특별한 욖령은 필욖칚 않닦'
  )
})

test('disable replace with empty string filler', t => {
  t.is(
    jongFill('', '키스의 고유 조건은 입술끼리 만나야 되고 특별한 요령은 필요치 않다', { replace: false }),
    '키스의 고유 조건은 입술끼리 만나야 되고 특별한 요령은 필요치 않다'
  )
})

test('enable replace', t => {
  t.is(
    jongFill('ㄲ', '키스의 고유 조건은 입술끼리 만나야 되고 특별한 요령은 필요치 않다'),
    '킦슦읚 곢윢 졲걲윾 읶숚끾릮 맊낚앾 됚곢 튺벾핚 욖렦윾 픾욖칚 앆닦'
  )
})

test('enable replace with empty string filler', t => {
  t.is(
    jongFill('', '키스의 고유 조건은 입술끼리 만나야 되고 특별한 요령은 필요치 않다'),
    '키스의 고유 조거으 이수끼리 마나야 되고 트벼하 요려으 피요치 아다'
  )
})

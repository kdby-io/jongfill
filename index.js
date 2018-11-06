const HANGUL_OFFSET = ('가').charCodeAt(0)  // 0xAC00
const HANGUL_LIMIT = ('힣').charCodeAt(0)
const FILLERS = [
  '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',
]

const getFillerCode = filler => {
  const fillerCode = FILLERS.indexOf(filler)
  if (fillerCode === -1)
    throw new Error("A filler must be a Jongseong or an empty string.")

  return fillerCode
}

const isHangul = charCode => {
  return HANGUL_OFFSET <= charCode && charCode <= HANGUL_LIMIT
}

const getJong = charCode => {
  return (charCode - HANGUL_OFFSET) % 28
}


const jongFill = (filler, text, options = { replace: true }) => {
  const fillerCode = getFillerCode(filler)
  const filledText = text.split('')
    .map(char => char.charCodeAt(0))
    .map(charCode => {
      if (!isHangul(charCode)) return charCode

      const jong = getJong(charCode)
      if (jong && !options.replace) return charCode

      return charCode - jong + fillerCode
    })
    .map(charCode => String.fromCharCode(charCode))
    .join('')

  return filledText
}

module.exports = jongFill

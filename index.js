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

const isHangul = char => {
  const charCode = char.charCodeAt(0)
  return HANGUL_OFFSET <= charCode && charCode <= HANGUL_LIMIT
}

const getJong = char => {
  const charCode = char.charCodeAt(0)
  return (charCode - HANGUL_OFFSET) % 28
}


const jongFill = (filler, text, options = { replace: true }) => {
  const fillerCode = getFillerCode(filler)
  const filledText = text.split('').map(char => {
    if (!isHangul(char)) return char

    const jong = getJong(char)
    if (jong && !options.replace) return char

    const filledCharCode = char.charCodeAt(0) - jong + fillerCode
    return String.fromCharCode(filledCharCode)
  }).join('')

  return filledText
}

module.exports = jongFill

const zalgoUp = [
  '\u030d', /*     ̍     */		'\u030e', /*     ̎     */		'\u0304', /*     ̄     */		'\u0305', /*     ̅     */
  '\u033f', /*     ̿     */		'\u0311', /*     ̑     */		'\u0306', /*     ̆     */		'\u0310', /*     ̐     */
  '\u0352', /*     ͒     */		'\u0357', /*     ͗     */		'\u0351', /*     ͑     */		'\u0307', /*     ̇     */
  '\u0308', /*     ̈     */		'\u030a', /*     ̊     */		'\u0342', /*     ͂     */		'\u0343', /*     ̓     */
  '\u0344', /*     ̈́     */		'\u034a', /*     ͊     */		'\u034b', /*     ͋     */		'\u034c', /*     ͌     */
  '\u0303', /*     ̃     */		'\u0302', /*     ̂     */		'\u030c', /*     ̌     */		'\u0350', /*     ͐     */
  '\u0300', /*     ̀     */		'\u0301', /*     ́     */		'\u030b', /*     ̋     */		'\u030f', /*     ̏     */
  '\u0312', /*     ̒     */		'\u0313', /*     ̓     */		'\u0314', /*     ̔     */		'\u033d', /*     ̽     */
  '\u0309', /*     ̉     */		'\u0363', /*     ͣ     */		'\u0364', /*     ͤ     */		'\u0365', /*     ͥ     */
  '\u0366', /*     ͦ     */		'\u0367', /*     ͧ     */		'\u0368', /*     ͨ     */		'\u0369', /*     ͩ     */
  '\u036a', /*     ͪ     */		'\u036b', /*     ͫ     */		'\u036c', /*     ͬ     */		'\u036d', /*     ͭ     */
  '\u036e', /*     ͮ     */		'\u036f', /*     ͯ     */		'\u033e', /*     ̾     */		'\u035b', /*     ͛     */
  '\u0346', /*     ͆     */		'\u031a' /*     ̚     */
]

const zalgoDown = [
  '\u0316', /*     ̖     */		'\u0317', /*     ̗     */		'\u0318', /*     ̘     */		'\u0319', /*     ̙     */
  '\u031c', /*     ̜     */		'\u031d', /*     ̝     */		'\u031e', /*     ̞     */		'\u031f', /*     ̟     */
  '\u0320', /*     ̠     */		'\u0324', /*     ̤     */		'\u0325', /*     ̥     */		'\u0326', /*     ̦     */
  '\u0329', /*     ̩     */		'\u032a', /*     ̪     */		'\u032b', /*     ̫     */		'\u032c', /*     ̬     */
  '\u032d', /*     ̭     */		'\u032e', /*     ̮     */		'\u032f', /*     ̯     */		'\u0330', /*     ̰     */
  '\u0331', /*     ̱     */		'\u0332', /*     ̲     */		'\u0333', /*     ̳     */		'\u0339', /*     ̹     */
  '\u033a', /*     ̺     */		'\u033b', /*     ̻     */		'\u033c', /*     ̼     */		'\u0345', /*     ͅ     */
  '\u0347', /*     ͇     */		'\u0348', /*     ͈     */		'\u0349', /*     ͉     */		'\u034d', /*     ͍     */
  '\u034e', /*     ͎     */		'\u0353', /*     ͓     */		'\u0354', /*     ͔     */		'\u0355', /*     ͕     */
  '\u0356', /*     ͖     */		'\u0359', /*     ͙     */		'\u035a', /*     ͚     */		'\u0323' /*     ̣     */
]

const zalgoMid = [
  '\u0315', /*     ̕     */		'\u031b', /*     ̛     */		'\u0340', /*     ̀     */		'\u0341', /*     ́     */
  '\u0358', /*     ͘     */		'\u0321', /*     ̡     */		'\u0322', /*     ̢     */		'\u0327', /*     ̧     */
  '\u0328', /*     ̨     */		'\u0334', /*     ̴     */		'\u0335', /*     ̵     */		'\u0336', /*     ̶     */
  '\u034f', /*     ͏     */		'\u035c', /*     ͜     */		'\u035d', /*     ͝     */		'\u035e', /*     ͞     */
  '\u035f', /*     ͟     */		'\u0360', /*     ͠     */		'\u0362', /*     ͢     */		'\u0338', /*     ̸     */
  '\u0337', /*     ̷     */		'\u0361', /*     ͡     */		'\u0489' /*     ҉_     */
]

function getRandomInt (max) {
  return Math.floor(Math.random() * max)
}

function getRandomZalgoChar (array) {
  let index = Math.floor(Math.random() * array.length)
  return array[index]
}

function isZalgoChar (givenChar) {
  for (const char of zalgoUp) {
    if (givenChar === char) return true
  }

  for (const char of zalgoMid) {
    if (givenChar === char) return true
  }

  for (const char of zalgoDown) {
    if (givenChar === char) return true
  }

  return false
}

function zalgo (txt, mode, dir) {
  if (!mode) mode = 'min'
  if (!dir) dir = 'up,mid,down'

  let newTxt = ''

  for (let i = 0; i < txt.length; i++) {
    if (isZalgoChar(txt.substr(i, 1)))
      continue

    newTxt += txt.charAt(i)

    let num_up
    let num_mid
    let num_down

    if (mode === 'min') {
      num_up = getRandomInt(8)
      num_mid = getRandomInt(2)
      num_down = getRandomInt(8)
    } else if (mode === 'normal') {
      num_up = getRandomInt(16) / 2 + 1
      num_mid = getRandomInt(6) / 2
      num_down = getRandomInt(16) / 2 + 1
    } else if (mode === 'max') {
      num_up = getRandomInt(64) / 4 + 3
      num_mid = getRandomInt(16) / 4 + 1
      num_down = getRandomInt(64) / 4 + 3
    }

    let directions = dir.split(',')
    if (directions.indexOf('up') !== -1) {
      for (let j = 0; j < num_up; j++) {
        newTxt += getRandomZalgoChar(zalgoUp)
      }
    }
    if (directions.indexOf('mid') !== -1) {
      for (let j = 0; j < num_mid; j++) {
        newTxt += getRandomZalgoChar(zalgoMid)
      }
    }
    if (directions.indexOf('down') !== -1) {
      for (let j = 0; j < num_down; j++) {
        newTxt += getRandomZalgoChar(zalgoDown)
      }
    }
  }

  return newTxt
}

module.exports = zalgo

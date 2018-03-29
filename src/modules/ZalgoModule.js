const Module = require('./Module')
const zalgo = require('../utils/zalgo')

class ZalgoModule extends Module {
  onMessage (message) {
    if (message.author.bot || message.channel.type !== 'text') return

    if (message.content.toLowerCase().startsWith(ZalgoModule.PREFIX)) {
      let fullCommand = message.content.substring(ZalgoModule.PREFIX.length);
      let matches = fullCommand.match(/^(min|normal|max)(?:\.(.*?))? (.*)$/i)
      if (matches) {
        let content = matches[3]
        let amount = matches[1].toLowerCase()
        let directions = matches[2] ? matches[2].toLowerCase() : null

        message.channel.send(zalgo(content, amount, directions))
      }
    }
  }
}

ZalgoModule.PREFIX = 'zalgo.'

module.exports = ZalgoModule

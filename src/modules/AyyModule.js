const Module = require('./Module')

class AyyModule extends Module {
  onMessage (message) {
    if (message.author.bot || message.channel.type !== 'text') return

    if (message.content.toLowerCase() === 'ayy') {
      message.channel.send('lmao')
    }
  }
}

module.exports = AyyModule

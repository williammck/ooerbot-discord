const Module = require('./Module')

class CapsModule extends Module {
  onMessage (message) {
    if (message.author.bot || message.channel.type !== 'text') return

    if (message.content === message.content.toUpperCase()) {
      message.channel.send('CAPS LOCK IS CRUISE CONTROL FOR COOL')
    }
  }
}

module.exports = CapsModule

const Module = require('./Module')

class MentionModule extends Module {
  onMessage (message) {
    if (message.author.bot || message.channel.type !== 'text') return

    if (message.mentions.users.get(this.client.user.id)) {
      message.channel.send(message.author.toString())
    }
  }
}

module.exports = MentionModule

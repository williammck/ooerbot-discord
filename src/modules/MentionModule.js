const Module = require('./Module')

class MentionModule extends Module {
  onMessage (message) {
    if (message.author.bot || message.channel.type !== 'text') return

    if (message.mentions.users.get(this.client.user.id)) {
      message.channel.send(message.author.toString())
    }

    if (!message.mentions.everyone) {
      let mentionMsgTxt = '';
      if (message.mentions.users.size) {
        for (let user of message.mentions.users.array()) {
          mentionMsgTxt += user.toString() + ' '
        }
      }
      if (message.mentions.roles.size) {
        for (let role of message.mentions.roles.array()) {
          mentionMsgTxt += role.toString() + ' '
        }
      }
      if (mentionMsgTxt.length) message.channel.send(mentionMsgTxt)
    }
  }
}

module.exports = MentionModule

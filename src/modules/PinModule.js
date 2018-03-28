const Discord = require('discord.js')
const Module = require('./Module')

class PinModule extends Module {
  onChannelPinsUpdate (channel) {
    const pinBoard = PinModule.getPinBoard(channel.guild)

    if (!pinBoard || channel.id === pinBoard.id) return

    channel.fetchPinnedMessages().then(messages => {
      const message = messages.first()
      if (!message) return

      PinModule.pinMessageToBoard(pinBoard, message)
    })
  }

  static pinMessageToBoard (pinBoard, message) {
    const canPostToBoard = pinBoard.permissionsFor(pinBoard.guild.me).has([
      Discord.Permissions.FLAGS.SEND_MESSAGES,
      Discord.Permissions.FLAGS.EMBED_LINKS
    ])
    if (!canPostToBoard) return

    pinBoard.send('', {
      embed: {
        color: 0xFF00FF, // god-awful pink
        author: {
          name: PinModule.getMessageAuthorName(message),
          icon_url: message.author.avatarURL
        },
        title: '#' + channel.name,
        description: message.content,
        image: {
          url: PinModule.getMessageImageURL(message)
        },
        timestamp: message.createdAt
      }
    })

    PinModule.unpinMessage(message)
  }

  static getPinBoard (guild) {
    return guild.channels.find('name', PinModule.PIN_BOARD_NAME)
  }

  static getMessageAuthorName (message) {
    let name = ''
    if (message.author.bot) name += '[BOT] '
    if (message.member) {
      // Let's try and get their nickname if they're a member
      name += message.member.displayName + ` (${message.author.tag})`
    } else {
      // If the user is no longer on our server
      name += message.author.tag
    }

    return name
  }

  static getMessageImageURL (message) {
    let imageURL = null
    if (message.embeds.length && message.embeds[0].thumbnail) {
      imageURL = message.embeds[0].thumbnail.proxyURL
    } else if (message.attachments.size && message.attachments.first().proxyURL) {
      imageURL = message.attachments.first().proxyURL
    }

    return imageURL
  }

  static unpinMessage (message) {
    let channel = message.channel
    const canManageChannel = channel.permissionsFor(channel.guild.me).has(
      Discord.Permissions.FLAGS.MANAGE_MESSAGES
    )

    if (canManageChannel) {
      message.unpin()
    }
  }
}

PinModule.PIN_BOARD_NAME = 'pinboard'

module.exports = PinModule

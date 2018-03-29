const Module = require('./Module')
const axios = require('axios')

class DadModule extends Module {
  onMessage (message) {
    if (message.author.bot || message.channel.type !== 'text') return

    if (message.content.toLowerCase() === DadModule.PREFIX + 'joke') {
      axios.get('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json',
          'User-Agent': 'OoerBot-Discord (williammck, /r/Ooer Discord: https://discord.gg/dE5mqFq)'
        }
      })
        .then(response => {
          message.channel.send(response.data.joke)
        })
        .catch(error => {
          message.channel.send("Sorry for letting you down, son. I'm all out of jokes.")
        })
    }

    if (message.content.toLowerCase().replace(/[\u2018\u2019]/g, "'").startsWith("i'm")) {
      message.channel.send(`Hi, *${message.content.substring(4)}*, I'm dad!`)
    }
  }
}

DadModule.PREFIX = 'dad.'

module.exports = DadModule

const Module = require('./Module')

class ActivityModule extends Module {
  onReady () {
    this.client.user.setActivity('on my compuOH MAN PLS TO HELP')
  }
}

module.exports = ActivityModule

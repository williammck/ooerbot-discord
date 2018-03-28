const ActivityModule = require('./ActivityModule')
const PinModule = require('./PinModule')

exports.initialize = function initialize (client) {
  const modules = [ActivityModule, PinModule]

  for (let module of modules) {
    new module(client)
  }
}

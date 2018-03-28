const ActivityModule = require('./ActivityModule')
const PinModule = require('./PinModule')

function bindEventsOnModule (client, module, instance) {
  let properties = Object.getOwnPropertyNames(module.prototype).filter(p => p.startsWith('on'))

  for (let property of properties) {
    let event = property.substring(2)
    event = event.charAt(0).toLowerCase() + event.substr(1);

    client.on(event, instance[property].bind(instance))
  }
}

exports.initialize = function initialize (client) {
  const modules = [ActivityModule, PinModule]

  for (let module of modules) {
    let instance = new module(client)
    bindEventsOnModule(client, module, instance)
  }
}

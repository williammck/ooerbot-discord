class Module {
  constructor (client) {
    this.client = client
    this.bindEvents()
  }

  bindEvents () {
    const proto = Object.getPrototypeOf(this)
    let properties = Object.getOwnPropertyNames(proto).filter(p => p.startsWith('on'))

    for (let property of properties) {
      let event = property.substring(2)
      event = event.charAt(0).toLowerCase() + event.substr(1);

      this.client.on(event, this[property].bind(this))
    }
  }
}

module.exports = Module

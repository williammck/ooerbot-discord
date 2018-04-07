const ActivityModule = require('./ActivityModule')
const AyyModule = require('./AyyModule')
const CapsModule = require('./CapsModule')
const DadModule = require('./DadModule')
const MentionModule = require('./MentionModule')
const PinModule = require('./PinModule')
const ZalgoModule = require('./ZalgoModule')

exports.initialize = function initialize (client) {
  const modules = [
    ActivityModule,
    AyyModule,
    CapsModule,
    DadModule,
    MentionModule,
    //PinModule,
    ZalgoModule
  ]

  for (let module of modules) {
    new module(client)
  }
}

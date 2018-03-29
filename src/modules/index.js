const ActivityModule = require('./ActivityModule')
const PinModule = require('./PinModule')
const DadModule = require('./DadModule')
const MentionModule = require('./MentionModule')
const AyyModule = require('./AyyModule')
const ZalgoModule = require('./ZalgoModule')

exports.initialize = function initialize (client) {
  const modules = [
    ActivityModule,
    //PinModule,
    DadModule,
    MentionModule,
    AyyModule,
    ZalgoModule
  ]

  for (let module of modules) {
    new module(client)
  }
}

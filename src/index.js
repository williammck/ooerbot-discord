const Discord = require('discord.js')
const client = new Discord.Client()
const secrets = require('../secrets')
const modules = require('./modules')

modules.initialize(client)

client.login(secrets.account_token)

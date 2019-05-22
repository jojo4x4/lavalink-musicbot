const Discord = require('discord.js');
const config = require('./config.json');
const Music = require('discord.js-lavalink-musicbot');

const bot = new Discord.Client();
const music = new Music(bot, {});

bot.login(config.token);
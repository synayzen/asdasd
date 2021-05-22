const Discord = require('discord.js');
const moment = require('moment');
const useful = require('useful-tools')

exports.run = (client, message, args) => {
  const tarih = new Date()
  
  message.channel.send(`Tarih Ve Saat; ***${useful.tarih(tarih)}***`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['zaman', 'vakit','tarih'],
  permLevel: 0
};

exports.help = {
  name: 'saat', //DevTR
  description: 'Saatı gösterir.',
  usage: 'saat'
}; 
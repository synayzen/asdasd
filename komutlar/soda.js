const Discord = require('discord.js');
const funnyWords = require("funny-words");

exports.run = async (client, message, args) => {
if(!message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`İkram edeceğin istediğin kişiyi etiketlemelisin.`)).then(a => a.delete({timeout: 10000}))
var gifler = [
  "https://i1.wp.com/brightestyoungthings.com/wp-content/uploads/2016/07/gatsby.gif?fit=800%2C333&quality=100&ssl=1",
  "https://img-s1.onedio.com/id-54d9bed27d134bd2051a864e/rev-0/w-635/f-jpg-gif-webp-webm-mp4/s-01d5c31d1e8a2e6afc2e98350b8cfd2153173fdd.webp",
  "https://cf.kizlarsoruyor.com/a49591/37114663-b35c-48be-bfae-53fba3dc2871.gif"
];
let resimler = gifler[Math.floor(Math.random() * gifler.length)];
if(message.author.id === message.mentions.members.first().id) return message.channel.send(new Discord.MessageEmbed().setColor('#00567e').setTitle('Dur Orda!').setDescription('Aç gözlü olma oğlum ikram ediceksin.')).then(a => a.delete({timeout: 10000}))
message.channel.send(`> ${message.author} ${message.mentions.members.first()} **kişisine soda ikram ediyor..**`, new Discord.MessageAttachment(resimler));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'soda'
};
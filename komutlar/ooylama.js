const Discord = require('discord.js');

 exports.run = (client, message, args) => {
 if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply('Bu komutu kullanmak için yetkin yetersiz')
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.send(

     new Discord.MessageEmbed()

     .addField(`Yazı Yazman Gerek.`)).then(m => m.delete(5000));

     console.log("oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
     message.channel.send(

       new Discord.MessageEmbed()

       .setColor("#ffd100")
       .setThumbnail(client.user.avatarURL())
       .setTimestamp()
       .setFooter('⚔ 𝗔𝘀𝘀𝗮𝘀𝗶𝗻𝘀 𝗰𝗿𝗲𝗲𝗱', client.user.avatarURL())

       .addField(`\` ⚔ \`𝗔𝘀𝘀𝗮𝘀𝗶𝗻'𝘀 𝗰𝗿𝗲𝗲𝗱 | Oylama`, `**${question}**`)).then(function(message) {

         message.react('🎬');

         message.react('<:uno2:835486751904366592>');

         message.react('<:Amongus:835487282533761054>');
       });
     };
     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['oylama'],
       permLevel: 2
};
exports.help = {
  name: 'ooylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: 'ooylama <oylamaismi>'
};
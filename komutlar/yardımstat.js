const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Yardım Menüsü`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('#ffd500')
 .setDescription(`

 > ➬ <a:ritim:841388788818247731> İstatistikler <a:ritim:841388788818247731>
 
 > ➠ \`.stat <@etiket> \` -> Belirtilen üyenin tüm ses ve chat bilgilerini gösterir.

 > ➠ \`.top \` -> Top 10 istatistikler.\``)
       
 .setFooter(`⚔ 𝗔𝘀𝘀𝗮𝘀𝗶𝗻'𝘀 𝗰𝗿𝗲𝗲𝗱 Sunar .`)
    .setTimestamp()
    .setImage("https://cdn.discordapp.com/attachments/801730953055567922/840272184302633020/-Assassins-Creed-_8.png")
message.channel.send(embed) 

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',   
  description: '',
  usage: ''
};
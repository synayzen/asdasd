const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Yardım Menüsü`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('#0c2379')
 .setDescription(`
 > ➬ \`.davetlerim \` -> Davetlerini gösterir.

 > ➬ \`.davetler [üye] \` -> Kullanıcının davetlerini gösterir.

 > ➬ \`.inv-top \` -> Davet sıralamasını gösterir.

 > ➬\`.rütbeler \`-> Rütbeleri gösterir.\``)
 
    .setFooter(`⚔ 𝗔𝘀𝘀𝗮𝘀𝗶𝗻'𝘀 𝗰𝗿𝗲𝗲𝗱 Sunar .`)
    .setTimestamp()
    .setImage("https://cdn.discordapp.com/attachments/801730953055567922/844177110691479553/Assassins-Creed_5.png")
message.channel.send(embed) 

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'invite-yardım',   
  description: '',
  usage: ''
};
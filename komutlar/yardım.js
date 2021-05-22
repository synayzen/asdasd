const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Yardım Menüsü`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('#d402db')
 .setDescription(`
 > ➬ \`.eğlence \` -> Eğlence Komutlarını gösterir.

 > ➬ \`.kullanıcı-yardım \` -> Kullanıcı Komutlarını gösterir.

 > ➬ \`.moderasyon \` -> Moderasyon Komutlarını gösterir.

 > ➬ \`.invite-yardım \` -> Davetlerim Komutlarını gösterir.

 > ➬ \`.seviye-yardım \` -> Seviye Komutlarını gösterir.profil-kurulum

 > ➬ \`.profil-kurulum \` -> Profil Komutlarını gösterir.

 > ➬\`.istatistik \`-> İstatistik Komutlarını gösterir.\``)
 
    .setFooter(`⚔ 𝗔𝘀𝘀𝗮𝘀𝗶𝗻'𝘀 𝗰𝗿𝗲𝗲𝗱 Sunar .`)
    .setTimestamp()
    .setImage("https://cdn.discordapp.com/attachments/801730953055567922/840268560147415080/-Assassins-Creed-.png")
message.channel.send(embed) 

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',   
  description: '',
  usage: ''
};
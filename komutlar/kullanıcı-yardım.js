
const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Yardım Menüsü`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('BLUE')
 .setDescription(`
 > ➥ \` !afk [isterseniz sebep] \` -> afk olduğunuzu belirtme.

 > ➥ \` !istatistik [üye] \` -> Kullanıcı Bilginizi gösterir.
 
 > ➥ \` .gel <@etiket> \` -> yanınıza gelmenizi isteyen kişiyi etiketle .
 
 > ➥ \` .git <@etiket> \` -> yanına gitmek istediğin kişiyi etiketle.

 > ➥ \` !çek [üye]  \` -> istediğiniz kişiyi yanınıza çekersiniz.

 > ➥ \` !git [üye] \` -> istediğiniz kişinin yanınıza gidersiniz.
 
 > ➥ \` .bot-bilgi \` -> Botun  tüm bilgilerini gösterir 
 
 > ➥ \` .canlıdestek \` -> 📞canlı-destek sağlar.

 > ➥ \` .davet \` -> davet linkini gösterir.

 > ➥ \` .oylama <oylamaismi> \` -> Oylama yapmanızı sağlar.
 
 > ➥ \` .yapımcım \` -> yapımcım.
 
 > ➥ \` .sikayet <Şikayet> \` -> Şikayet de bulunursunuz.\``)
 .setFooter(`⚔ 𝗔𝘀𝘀𝗮𝘀𝗶𝗻'𝘀 𝗰𝗿𝗲𝗲𝗱 Sunar `)
    .setTimestamp()
    .setImage("https://cdn.discordapp.com/attachments/801730953055567922/840269992263024709/-Assassins-Creed-_5.png")
message.channel.send(embed) 

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı-yardım',   
  description: '',
  usage: ''
};


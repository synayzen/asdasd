const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Yardım Menüsü`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('BLUE')
 .setDescription(`

> ➬ \` .isim <NAME> \` -> İsminizi ayarlarsınız.
 
> ➠ \`.cinsiyet erkek/kız \` -> Cinsiyetinizi belirtirsiniz. \n **Fakat cinsiyetini küçük yazdığına dikkat et <a:nlem:822085975269834822>**

> ➠ \`.yaş <YAŞIN> \` -> Yaşınızı belirtirsiniz.

> ➠ \`.doğumgünü <GÜNÜ AYI> \` -> Doğum günüzü belirtirsiniz.

> ➠ \`.şehir <ŞEHİR> \` -> Yaşadığın şehri belirtirsiniz.

> ➠ \`.favorioyun <OYUN> \` -> Sevdiğiniz oyunu belirtirsiniz.

> ➠ \`.favorişarkı <Şarkı> \` -> Sevdiğiniz şarkıyı belirtirsiniz.

 > ➠ \`.profilim \` -> Profilinizi görürsünüz.`)
       
 .setFooter(`⚔ 𝗔𝘀𝘀𝗮𝘀𝗶𝗻'𝘀 𝗰𝗿𝗲𝗲𝗱 Sunar .`)
    .setTimestamp()
    .setImage("")
message.channel.send(embed) 

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'profil-kurulum',   
  description: '',
  usage: ''
};
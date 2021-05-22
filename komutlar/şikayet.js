const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.MessageEmbed()
.setDescription('Kullanım: .sikayet <Şikayet>'));
const embed = new Discord.MessageEmbed()
.setColor('#d402db')
.setDescription('Şikayetiniz Bildirildi!')
message.channel.send(embed)
const embed2 = new Discord.MessageEmbed()
.setColor("#d402db")
.setDescription(`**${message.author.tag}** adlı kullanıcının Şikayeti:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("Şikayet", type)
.setThumbnail(message.author.avatarURL())
client.channels.cache.get('801730943949209601').send(embed2); // Kanal ID  BURAYI KESİNLİKLE DÜZENLEYİNİZ!
client.channels.cache.get('801730943949209601').send("<@&800629483865899008>")
  
};



exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'şikayet',
  description: 'Şikayet de bulunursunuz..',
  usage: 'sikayet <Şikayet>'
};
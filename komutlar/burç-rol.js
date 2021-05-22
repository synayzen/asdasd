const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if(!message.member.roles.cache.get("664472621248806922") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setDescription("Bu Komutu Kullanmaya Yetkin Yok.")).setColor('BLACK')

	if (!message.guild) return message.author.send('Bu Komutu Sadece Sunucularda Kulanabilirsiniz.');

    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    var jaus =  message.guild.members.cache.filter(r=>r.roles.cache.has("792076267016159273")).size.toString()
    var erkek =  message.guild.members.cache.filter(r=>r.roles.cache.has("799724048162095165")).size.toString()
    var kız =  message.guild.members.cache.filter(r=>r.roles.cache.has("799724047817768970")).size.toString()
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let jaus2 = '⚔'
    const jausunuz = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .setDescription(`
        **__Burç Rol Seçimi;__** \n 
        ♈️**:** \` Koç \` \n 
        ♉️ **:** \`Boğa \` \n
        ♊️**:**  \` İkizler \` \n 
        ♋️ **:**  \` Yengeç \` \n 
        ♌️ **:**  \` Aslan \` \n 
        ♍️**:**  \`Başak \` \n 
        ♎️ **:**  \` Terazi \` \n 
        ♏️ **:**  \` Akrep \` \n 
        ♐️**:**  \` Yay \` \n 
        ♑️ **:**  \` Oğlak \` \n 
        ♒️ **:**  \` Kova \`  \n 
        ♓️ **:**  \` Balık \``)

    .setFooter(`Aşağıda ki emojilere tıklayarak, burcunuzun rolünü seçebilirsiniz.`)
    message.channel.send(jausunuz)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['botbilgi'],
    permLevel: 0
};

exports.help = {
    name: 'Burçrol',
    description: 'Burçrol',
    usage: 'Burçrol'
};


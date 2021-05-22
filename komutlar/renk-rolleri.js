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
        **__Booster Renk Seçimi;__** \n 
        <:Balksz8:837753310899208223> **:** \` Beyaz \` \n 
        <:Balksz211:837753281937145976> **:**  \` Siyah \` \n 
        <:assassins_g:822359310935261195> **:** \` Kırmızı \` \n 
        <:Balksz14:842012152511725639> **:**  \` Mavi \` \n 
        <:Balksz1167:837754596512104469> **:** \` Kahverengi \` \n 
        <:Balksz13:837754990742470687> **:**  \` Mor \` \n 
        <:assassins_f:822359346376736788> **:** \` Yeşil \` \n 
        <:assassins_d:822360043315920896> **:**  \` Sarı \` \n 
        <:assassins_c:822361078968090656> **:**  \` Turuncu \``)

    .setFooter(`Aşağıda ki emojilere tıklayarak, almak istediğiniz rengi seçebilirsiniz.`)
    message.channel.send(jausunuz)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['botbilgi'],
    permLevel: 0
};

exports.help = {
    name: 'renk-rolleri',
    description: 'renk-rolleri',
    usage: 'renk-rolleri'
};


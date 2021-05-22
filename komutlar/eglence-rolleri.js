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
        **__Eğlence Rol Seçimi;__** \n 
        <:kabe:842008738238824468> **:** \` Elhamdülillah \` \n 
        <:ressam:842008820393312276> **:** \` Ressam \` \n
        <:air1:834812662101180466> **:**  \` Şair \` \n 
        <:akamatik:834820740757979186> **:**  \` Şakamatik \` \n 
        <:sesi_gzel:837368790131015770> **:**  \` Sesi Güzel \` \n 
        <:doyuyor:842008947916800000> **:**  \` Doymuyor \` \n 
        <:zzz:837368289998929981> **:**  \` Gececi \` \n 
        <:sava1:837424875751604265> **:**  \` Savaşçı \` \n 
        <:sporcu1:842009012304085012> **:**  \` Sporcu \` \n 
        <:yazlm:842009040048357376> **:**  \` Yazılımcı \` \n 
        <:filozof:842010446114193408> **:**  \` Filozof \` \n 
        <:bayan_hocam:842008886129983498> **:**  \` Hocacım \` \n 
        <:hoca:837407584453394503> **:**  \` Hocam \``)

    .setFooter(`Aşağıda ki emojilere tıklayarak, eğlence rolünü seçebilirsiniz.`)
    message.channel.send(jausunuz)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['botbilgi'],
    permLevel: 0
};

exports.help = {
    name: 'eğlence-rol',
    description: 'eğlence-rol',
    usage: 'eğlence-rol'
};

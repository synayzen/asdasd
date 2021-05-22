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
        **__Oyun Rol Seçimi;__** \n 
        <:Amongus:835487282533761054> **:** \` Among Us \` \n 
        <:bf1:841999981375258674> **:** \`Battlefield 1 \` \n
        <:CSGO:842000003504930847> **:**  \` Counter-Strike Global Offensive \` \n 
        <:warzone:842000245633056798> **:**  \` Call of Duty®: Warzone \` \n 
        <:dota2:842000022899392542> **:**  \` Dota 2 \` \n 
        <:FORNTE:842000049570971648> **:**  \` Fortnite \` \n 
        <:GARTC:842000065408532510> **:**  \` Gartic.io \` \n 
        <:EuroTruckSimulator2:842000036552507412>  **:** \`Euro Truck Simulator 2 \` \n
        <:GTAV:842000077475151902> **:**  \` Gta V \` \n 
        <:Balksz1:842004430567768064> **:**  \` League Of Legends \` \n 
        <:MOBLELEGENDS:842000113613537310> **:**  \` Mobile Legends: Bang Bang \` \n 
        <:MNECRAFT:842000102494830632> **:**  \` Minecraft \` \n 
        <:rainbowsixege1:842000168031092767> **:**  \` Tom Clancy's Rainbow Six Siege \` \n 
        <:uno2:835486751904366592> **:**  \` Uno \` \n 
        <:payday21:842000127945867264> **:**  \` Pay Day 2 \` \n 
        <:Rocketleague:842000187182153728> **:**  \` Rocket League \` \n 
        <:PUGB:842002716108259372> **:**  \` Pubg \` \n 
        <:PUBGMOBLE:842000147952697354> **:**  \` Pubg Mobile \`  \n 
        <:Valorant:842000216809799701> **:**  \` Valorant \`  \n 
        <:zula:842000264479244289> **:**  \` Zula \``)

    .setFooter(`Aşağıda ki emojilere tıklayarak, oynadığınız oyunların rolünü seçebilirsiniz.`)
    message.channel.send(jausunuz)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['botbilgi'],
    permLevel: 0
};

exports.help = {
    name: 'oyunrolleri',
    description: 'oyunrolleri',
    usage: 'oyunrolleri'
};


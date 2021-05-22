const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const motion = new Discord.MessageEmbed()
    .setColor("#00ee00")
    .setAuthor(`⚔ 𝗔𝘀𝘀𝗮𝘀𝗶𝗻'𝘀 𝗰𝗿𝗲𝗲𝗱 𝗕𝗼𝘁`, client.user.avatarURL)
    .addField(
      `> Neden Biz ?`,
      `**Çünkü kalite asla tesadüf değildir. <:assassins_:822360019626491954>**`
    )
    .addField(
      `<a:assassins_beyazdc:820723367195836416> Botumuzu Davet Etmek isterseniz Sunucumuza gelip kurucuya mesaj atabilirsiniz`,
      `[Botu Davet Et!](https://discord.gg/S6HQbMvpfm) <a:Assassins_pixelkalp:800605439322488872>`
    )
    .addField(
      `<a:assassins_beyazdc:820723367195836416> Destek Sunucusuna Katılmak İsterseniz`,
      `[Destek Sunucusu](https://discord.gg/S6HQbMvpfm) <a:Assassins_pixelkalp:800605439322488872>`
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/801730953813688340/831913750486319124/assassins1.gif"
    );
  message.channel.send(motion);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "",
  usage: ""
};

//-------------------------------------//

// .addField(
//     `> Kod Paylaşım Sunusuna Katılmak İsterseniz`,
//      `[Kod Paylaşım Sunucumuz](https://discord.gg/6W4cyF2)`
//    )
//    .addField(
//      `> Sitemize Göz Atmak isterseniz`,
//      `[Sitemiz](https://discord.com/)`
//    )

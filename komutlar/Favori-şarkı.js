const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {
  let favorişarkı = args.slice(0).join(" ");
  if (!favorişarkı) return message.channel.send("<a:ykleniyor:838420861294739516> | **Lütfen Şarkını yaz.**");
  message.channel.send("<a:mavitick:838420820711178270> | **Favori Şarkın ``" + favorişarkı + "`` olarak ayarlandı!**");
  db.set(`pfavorişarkı_${message.author.id}`, favorişarkı);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "favorişarkı",
  description: "",
  usage: "",
  kategori: "Profil"
};
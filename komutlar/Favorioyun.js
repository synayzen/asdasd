const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {
  let favorioyun = args.slice(0).join(" ");
  if (!favorioyun) return message.channel.send("<a:ykleniyor:838420861294739516> | **Lütfen Oyununu yaz.**");
  message.channel.send("<a:mavitick:838420820711178270> | **Favori Oyunun ``" + favorioyun + "`` olarak ayarlandı!**");
  db.set(`pfavorioyun_${message.author.id}`, favorioyun);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "favorioyun",
  description: "",
  usage: "",
  kategori: "Profil"
};
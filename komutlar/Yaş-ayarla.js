const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {

  let yas = args.slice(0).join(" ");
  if (!yas)
    return message.channel.send(
      "<a:ykleniyor:838420861294739516> | **Lütfen yaşını yaz.**"
    );
  message.channel.send(
    "<a:mavitick:838420820711178270> | **Yaşın ``" + yas + "`` olarak ayarlandı!**"
  );
  db.set(`pyas_${message.author.id}`, yas);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "yaş",
  description: "",
  usage: "",
  kategori: "Profil"
};
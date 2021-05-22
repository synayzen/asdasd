const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {

  let dogumgunu = args.slice(0).join(" ");
  if (!dogumgunu)
    return message.channel.send(
      "<a:ykleniyor:838420861294739516> | **Lütfen Doğum gününü  yaz.**"
    );
  message.channel.send(
    "<a:mavitick:838420820711178270> | **Doğum günün ``" + dogumgunu + "`` olarak ayarlandı!**"
  );
  db.set(`pdogumgunu_${message.author.id}`, dogumgunu);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "doğumgünü",
  description: "",
  usage: "",
  kategori: "Profil"
};
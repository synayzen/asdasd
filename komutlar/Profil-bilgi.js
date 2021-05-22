const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || message.author;
  if (user.bot) return message.channel.send("Botların profili olmaz!");
 
  let isim = await db.fetch(`pisim_${user.id}`);
  let isimYazi;
  if (isim == null) isimYazi = "<a:Assassinsok:836253273169854464>  `İsim ayarlanmamış!`";
  else isimYazi = `<a:Assassinsok:836253273169854464>  \`${isim}\``;
  
  let favorioyun = db.fetch(`pfavorioyun_${message.author.id}`);
  let favoriYazi;
  if (favorioyun == null) favoriYazi = "<a:Assassinsok:836253273169854464>  `Oyun ayarlanmamış!`";
  else favoriYazi = `<a:Assassinsok:836253273169854464> \`${favorioyun}\``;
  
    let favorişarkı = db.fetch(`pfavorişarkı_${message.author.id}`);
  let favorisYazi;
  if (favorişarkı == null) favorisYazi = "<a:Assassinsok:836253273169854464>  `Şarkı ayarlanmamış!`";
  else favorisYazi = `<a:Assassinsok:836253273169854464>  \`${favorişarkı}\``;
 
  let cinsiyet = await db.fetch(`pcinsiyet_${user.id}`);
  let csYazi;
  if (cinsiyet == null) csYazi = "<a:Assassinsok:836253273169854464> `Cinsiyet ayarlanmamış!`";
  if (cinsiyet == "kız") csYazi = "<a:Assassinsok:836253273169854464>  `Kız`";
  if (cinsiyet == "erkek") csYazi = "<a:Assassinsok:836253273169854464>  `Erkek`";
  if (cinsiyet == "yok") csYazi = "<a:Assassinsok:836253273169854464>  `Belirtmek istemiyor.`";
 
  let yas = await db.fetch(`pyas_${user.id}`);
  let yasYazi;
  if (yas == null) yasYazi = "<a:Assassinsok:836253273169854464>  `Yaş ayarlanmamış!`";
  else yasYazi = `<a:Assassinsok:836253273169854464>  \`${yas}\``;

let Şehir = await db.fetch(`pŞehir_${user.id}`);
  let ŞehirYazi;
  if (Şehir == null) ŞehirYazi = "<a:Assassinsok:836253273169854464>  `Şehir ayarlanmamış!`";
  else ŞehirYazi = `<a:Assassinsok:836253273169854464>  \`${Şehir}\``;
 
 let dogumgunu= await db.fetch(`pdogumgunu_${user.id}`);
  let dogumgunuYazi;
  if (dogumgunu == null) dogumgunuYazi = "<a:Assassinsok:836253273169854464>  `Doğum günü ayarlanmamış!`";
  else dogumgunuYazi = ` <a:Assassinsok:836253273169854464>  \` ${dogumgunu} \``;

  const embed = new Discord.MessageEmbed()
    .setAuthor(`${user.username} Adlı Kullanıcının Profili`, user.displayAvatarURL({dynamic : true}))
  .setThumbnail(user.displayAvatarURL({dynamic : true}))
  .setColor('#d402db')
    .addField("『 İsim 』", isimYazi)
    .addField("『 Yaş 』", yasYazi)
    .addField("『 Doğum Günü 』", dogumgunuYazi)
    .addField("『 Şehir 』", ŞehirYazi)
    .addField("『 Cinsiyet 』", csYazi)
    .addField("『 Favori Oyun 』", favoriYazi)
    .addField("『 Favori Şarkı 』", favorisYazi)
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Profil"],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "profilim",
  description: "Profil",
  usage: "Profil",
  kategori: "Profil"
};
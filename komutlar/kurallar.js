const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.delete();
message.channel.createWebhook(message.author.username, {avatar: message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'}).then(async web => {
const hook = new Discord.WebhookClient(web.id, web.token);
const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/801730953055567922/841315853412466748/Assassins-Creed_3.png');
hook.send(`\`${message.guild.name}\` **Sunucu Kuralları**

<a:Assassinsok:836253273169854464>   **\`Ağır\` ve \`kişi hedefli\` küfür kullanmayınız.**
<a:Assassinsok:836253273169854464>   **Özelden veya genelden \`reklam\` yapmayınız.**
<a:Assassinsok:836253273169854464>   **\`Flood\`, \`spam\` ve \`siyasi\`, \`cinsel\` muhabbet benzerlerini yapmayınız.**
<a:Assassinsok:836253273169854464>   **\`Irkçı\`, \`cinsiyetçi\`, \`homofobik\` davranmayınız,Üyeleri Rahatsız etmeyiniz.**
<a:Assassinsok:836253273169854464>   **Gereksiz yere \`spoiler\`, \`embed\` vs. kullanmayınız,etiket atmayınız.**
<a:Assassinsok:836253273169854464>   **Discord'un \`kullanım\` şartlarına uyunuz.**

<a:pembee:841227464403058737> 𝗬𝗲𝘁𝗸𝗶𝗹𝗶𝗹𝗲𝗿 𝘃𝗲𝗿𝗲𝗰𝗲𝗸𝗹𝗲𝗿𝗶 𝗰𝗲𝘇𝗮 𝗸𝗼𝗻𝘂𝘀𝘂𝗻𝗱𝗮 𝗶𝗻𝘀𝗶𝘆𝗮𝘁𝗶𝗳 𝗸𝘂𝗹𝗹𝗮𝗻𝗮𝗯𝗶𝗹𝗶𝗿𝗹𝗲𝗿 𝘃𝗲 𝘀𝘂𝗻𝘂𝗰𝘂 𝗶𝗰̧𝗶𝗻 𝘇𝗮𝗿𝗮𝗿𝗹ı 𝗼𝗹𝗱𝘂𝗴̆𝘂𝗻𝘂 𝗱𝘂̈𝘀̧𝘂̈𝗻𝗱𝘂̈𝗸𝗹𝗲𝗿𝗶 𝗸𝗶𝘀̧𝗶𝗹𝗲𝗿𝗲 𝘀𝗲𝗯𝗲𝗽 𝗯𝗲𝗹𝗶𝗿𝘁𝗺𝗲𝗸𝘀𝗶𝘇𝗶𝗻 𝘆𝗶𝗻𝗲 𝗮𝘆𝗻ı 𝗶𝗻𝗶𝘀𝗶𝘆𝗮𝘁𝗶𝗳𝗹𝗲 𝗰𝗲𝘇𝗮 𝘃𝗲𝗿𝗲𝗯𝗶𝗹𝗶𝗿𝗹𝗲𝗿.

<a:mor_alev:838421339827470367> Sunucumuza girdiğiniz andan itibaren kuralları okumuş, anlamış ve kabul etmiş sayılırsınız, eğer kuralları
kabul etmiyorsanız sunucumuza katılım sağlayabilirsiniz. <a:esenquin4:836248943427059713>

`, attachment).then(() => hook.delete())
})
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kurallar'
};
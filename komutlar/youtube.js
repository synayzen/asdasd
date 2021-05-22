const Discord = require("discord.js");
const client = new(require("discord.js").Client)
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')

exports.run = async (client, message, args) => {
  if(!message.member.voice.channel) return message.reply('Youtube linki ayarlıyabilmem için bir ses kanalına girmelisin')
const embed = new MessageEmbed()
fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "755600276941176913",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(invite => {
                    embed.setDescription(`[Youtube giriş linki](https://discord.gg/${invite.code}) Bu linke tıklıyarak youtube girebilirsin.`)
                    embed.setThumbnail('https://icon-library.com/images/youtube-small-icon/youtube-small-icon-27.jpg')
                    embed.setColor('RANDOM')
                        message.channel.send(embed)
                })
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["youtube"],
  permLevel: 0
};

exports.help = {
  name: 'yt',
  description: 'Ses kanalında youtube ye girmenizi sağlar',
  usage: 'yt'
};
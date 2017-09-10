exports.conf = {
  enabled: true,
  ignoreBots: true,
  ignoreSelf: true,
};

exports.run = async (client, msg) => {
     if(!msg.guild || !msg.member || !msg.guild.member(client.user).hasPermission("BAN_MEMBERS") || !msg.member.bannable) return;
  
     // Ignore if 1 mention and it's a bot (bot interaction)
     if(msg.mentions.users.size == 1 && msg.mentions.users.first().bot) return;

     if (msg.mentions.users.size > msg.guild.settings.mentionThreshold) {
          msg.member.ban(1).then( member=> {
      msg.sendMessage(`:no_entry_sign: User ${msg.author.username}#${msg.author.discriminator} (${msg.author.id}) has just been banned for mentioning too many users. :hammer:
  Users that have been mentioned, we apologize for the annoyance. Please don't be mad!`);
     if(!msg.guild.settings.modlogs) return
     const embed = new client.methods.Embed()
     .setAuthor(client.user.username, client.user.avatarURL())
     .setColor(0xff4500)
     .setTimestamp()
     .setDescription(`**Action:** Auto-ban\n**Target:** ${msg.author.user.username}\n**Reason:** Exceeding mention threshold.`);
   return msg.guild.channels.get(msg.guild.settings.modlogs).send({embed})
    })
    
     }
}


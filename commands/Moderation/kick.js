
exports.run = (client, msg, [member, ...reason]) => {
  const modLog = msg.guild.settings.modlogs;
  if (!modLog) throw `No mod-log channel configured. Configure a mod-log channel using ${msg.guild.settings.prefix}conf set modlogs #channel.`;
  const channel = msg.guild.channels.get(modLog);
  if (!channel) throw "There isn't the specified mod-log channel in this guild.";
  if (channel.postable === false) throw "I cannot send messages to the configured modLog channel.";
  if (!msg.guild.member(member).kickable) return msg.reply("I cannot kick that member");
  member.kick().catch(console.error);
  msg.channel.send(`${member.user.tag} was kicked.`);
  const embed = new client.methods.Embed()
    .setAuthor(msg.author.tag, msg.author.avatarURL())
    .setColor(0xff4500)
    .setTimestamp()
    .setDescription(`**Action:** Kick\n**Target:** ${member.user.username}\n**Reason:** ${reason.join(" ")}`);
  return msg.guild.channels.get(modLog).send({ embed });
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text"],
  aliases: ["k"],
  permLevel: 2,
  botPerms: ["KICK_MEMBERS"],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "kick",
  description: "Kicks a mentioned user.",
  usage: "<member:member><reason:str>[...]",
  usageDelim: " ",
  type: "commands",
};

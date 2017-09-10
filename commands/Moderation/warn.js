
exports.run = (client, msg, [member, ...reason]) => {
  const modLog = msg.guild.settings.modlogs;
  if (!modLog) throw `No mod-log channel configured. Configure a mod-log channel using ${msg.guild.settings.prefix}conf set modlogs #channel.`;
  const channel = msg.guild.channels.get(modLog);
  if (!channel) throw "There isn't the specified mod-log channel in this guild.";
  if (channel.postable === false) throw "I cannot send messages to the configured modLog channel.";
  const embed = new client.methods.Embed()
    .setAuthor(msg.author.tag, msg.author.avatarURL())
    .setColor(0xFFFF00)
    .setTimestamp()
    .setDescription(`**Action:** Warn\n**Target:** ${member.user.username}\n**Reason:** ${reason.join(" ")}`);
  member.send(`You have been issued a warning by a moderator: \n\n Reason: ${reason.join(" ")}\n Server: ${msg.guild.name}`);
  msg.channel.send(`Succesfully warned ${member.user.username}`);
  return msg.guild.channels.get(modLog).send({ embed });
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text"],
  aliases: ["w"],
  permLevel: 2,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "warn",
  description: "Warns the mentioned user.",
  usage: "<member:member><reason:str>[...]",
  usageDelim: " ",
  type: "commands",
};

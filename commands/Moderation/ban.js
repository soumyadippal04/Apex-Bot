
exports.run = (client, msg, [member, ...reason]) => {
  const modLog = msg.guild.settings.modlogs;
  if (!modLog) throw `No mod-log channel configured. Configure a mod-log channel using ${msg.guild.settings.prefix}conf set modlogs #channel.`;
  const channel = msg.guild.channels.get(modLog);
  if (!channel) throw "There isn't the specified mod-log channel in this guild.";
  if (channel.postable === false) throw "I cannot send messages to the configured modLog channel.";
  if (!msg.guild.member(member).bannable) return msg.reply("I cannot ban that member");
  msg.guild.ban(member).catch(console.error);
  msg.channel.send(`${member.user.tag} was banned.`);
  const embed = new client.methods.Embed()
    .setAuthor(msg.author.tag, msg.author.avatarURL())
    .setColor(0xff0000)
    .setTimestamp()
    .setDescription(`**Action:** Ban\n**Target:** ${member.user.username}\n**Reason:** ${reason.join(" ")}`);
  return msg.guild.channels.get(modLog).send({ embed });
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text"],
  aliases: ["b"],
  permLevel: 3,
  botPerms: ["BAN_MEMBERS"],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "ban",
  description: "Bans a mentioned user.",
  usage: "<member:member><reason:str>[...]",
  usageDelim: " ",
  type: "commands",
};

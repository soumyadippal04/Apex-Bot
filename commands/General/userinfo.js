
exports.run = async (client, msg) => {
  const member = msg.mentions.members.first() || msg.member;
  const embed = new client.methods.Embed()
    .setColor(3447003)
    .setTimestamp()
    .setFooter(client.user.username, client.user.avatarURL)
    .setAuthor(member.user.username)
    .setDescription(`Is a member in ${msg.guild.name}. Status: ${member.user.presence.status}`)
    .addField("Joined Discord", member.user.createdAt.toLocaleString(), true)
    .addField(`Joined ${msg.guild.name}`, member.joinedAt.toLocaleString(), true)
    .addField("Roles", member.roles.map(r => r.name).join(", "));
  msg.send({ embed });
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "userinfo",
  description: "Shows info about the mentioned user or the author.",
  usage: "<user:user>",
  usageDelim: "",
};

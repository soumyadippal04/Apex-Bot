
exports.run = async (client, msg, [member, ...role]) => {
  const roleName = role.join(" ");
  const r = msg.guild.roles.find("name", roleName);
  if (!roleName) return msg.reply("That role could not be found.");
  try {
    await member.addRole(r);
  } catch (e) {
    throw `An error occured while adding ${r.name}! \`\`\`${e.stack}\`\`\``;
  }
  return msg.channel.send(`Added role ${r.name} to ${member.user.username}!`);
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text"],
  aliases: ["addrole"],
  permLevel: 2,
  botPerms: ["MANAGE_ROLES"],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "sr",
  description: "Adds a role to the mentioned user.",
  usage: "<member:member><role:str>[...]",
  usageDelim: " ",
  type: "commands",
};

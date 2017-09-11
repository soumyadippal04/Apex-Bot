exports.run = async (client, msg, [member, ...role]) => {
  const roleName = role.join(" ");
  const r = msg.guild.roles.find("name", roleName);
  if (!roleName) return msg.reply("That role could not be found.");
  try {
    await member.removeRole(r);
  } catch (e) {
    throw `An error occured while removing ${r.name}! \`\`\`${e.stack}\`\`\``;
  }
  return msg.channel.send(`Removed role ${r.name} from ${member.user.username}!`);
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text"],
  aliases: ["removerole"],
  permLevel: 2,
  botPerms: ["MANAGE_ROLES"],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "dr",
  description: "Removes a role from the mentioned user.",
  usage: "<member:member><role:str>[...]",
  usageDelim: " ",
  type: "commands",
};


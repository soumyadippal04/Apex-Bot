const announcement = require("../../Util/announcement");

exports.run = async (client, msg) => {
  const role = announcement(msg);
  await msg.member.addRole(role);
  return msg.send(`Added role ${role.name}!`);
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredSettings: [],
};

exports.help = {
  name: "subscribe",
  description: "Subscribe to this server's announcements.",
  usage: "",
  usageDelim: "",
};

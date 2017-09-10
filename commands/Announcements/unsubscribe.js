const announcement = require("../../Util/announcement");

exports.run = async (client, msg) => {
  const role = announcement(msg);
  await msg.member.removeRole(role);
  return msg.send(" | Success");
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
  name: "unsubscribe",
  description: "Unsubscribe to this servers' announcements.",
  usage: "",
  usageDelim: "",
};

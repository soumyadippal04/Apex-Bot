const generateName = require("sillyname");

exports.run = (client, msg) => {
  const sillyName = generateName();
  msg.channel.send(sillyName);
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "sillyname",
  description: "Generates a random silly name.",
  usage: "",
  usageDelim: "",
  type: "commands",
};

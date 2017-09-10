const cool = require("cool-ascii-faces");

exports.run = (client, msg) => {
  msg.channel.send(cool());
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: ["asc"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: ["cool-ascii-faces"],
};

exports.help = {
  name: "asciifaces",
  description: "Generates a random ascii face.",
  usage: "",
  usageDelim: "",
  type: "commands",
};

const leet = require("leet");

exports.run = (client, msg, args) => {
  const text = leet.convert(args.join(" "));
  msg.channel.send(text);
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "leet",
  description: "Converts boring old text into 1337 like a boss.",
  usage: "<text:str>",
  usageDelim: "",
};

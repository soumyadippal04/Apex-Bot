exports.run = async (client, msg) => {
  const snek = require("snekfetch");
  const joek = await snek
    .get("https://icanhazdadjoke.com/")
    .set("Accept", "application/json");
  msg.channel.send(joek.body.joke);
};

exports.help = {
  name: "pun",
  description: "Generates a pun.",
  usage: "",
  usageDelim: "",
  extendedHelp: "",
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};


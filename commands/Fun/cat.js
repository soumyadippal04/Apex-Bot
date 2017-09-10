const snek = require("snekfetch");

exports.run = async (client, msg) => {
  try {
    const m = await msg.channel.send("Fetching random cat...");
    const { body } = await snek.get("http://random.cat/meow");
    await msg.send({ files: [{ attachment: body.file, name: `cat.${body.file.split(".")[2]}` }] });
    await m.delete();
  } catch (e) {
    console.log(e);
  }
};

exports.help = {
  name: "cat",
  description: "Shows you a random cat.",
  usage: "",
  usageDelim: "",
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

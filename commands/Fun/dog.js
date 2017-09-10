const snek = require("snekfetch");

exports.run = async (client, msg) => {
  try {
    const m = await msg.channel.send("Fetching random dog...");
    const { body } = await snek.get("https://api.thedogapi.co.uk/v2/dog.php?limit=1");
    await msg.send({ files: [{ attachment: body.data[0].url, name: `${body.data[0].id}.jpg` }] });
    await m.delete();
  } catch (e) {
    console.log(e);
  }
};

exports.help = {
  name: "dog",
  description: "Shows you a random dog.",
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

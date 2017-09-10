const { caseNumber } = require("../../Util/caseNumber.js");

exports.run = async (client, msg, supportmsg) => {
  const modlog = client.channels.find("name", "support");
  const caseNum = await caseNumber(client, modlog);
  const reply = await msg.channel.send("Processing...");
  const embed = new client.methods.Embed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setColor(165868)
    .setDescription(`Message by ${msg.author.tag}\n${supportmsg.join(" ")}`)
    .setTimestamp()
    .setFooter(`Case ${caseNum}`);
  await client.channels.get("355663488900792330").send({ embed });
  reply.edit(`Success! Case #${caseNum}`);
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
  cooldown: 300000,
};

exports.help = {
  name: "contact",
  description: "Makes a request and sends it to Apex Bots official support channel.",
  usage: "<supportmsg:str>",
  usageDelim: "",
  extendedHelp: "Can be used to report bugs, errors, or give feedback/suggestions. This command has a 5 minute cool down. Abusing it will result in you bring unable to use this command again.",
  type: "commands",
};


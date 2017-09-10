
exports.run = (client, msg, args) => {
  const embed = new client.methods.Embed()
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .setColor(0x00AE86)
    .setDescription(args.join(" "))
    .setTimestamp();
  msg.delete().catch((e) => {});// eslint-disable-line no-unused-vars
  msg.sendMessage({ embed });
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "embed",
  description: "Embeds your message",
  usage: "<text:str>",
  usageDelim: "",
};

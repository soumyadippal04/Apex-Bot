exports.run = (client, message, args) => {
  const messagecount = parseInt(args.join(" "));
  message.channel.messages.fetch({
    limit: messagecount,
  }).then(messages => message.channel.bulkDelete(messages));
  message.reply(" | Success").then((sent) => {
    sent.delete({ timeout: 5000 });
  });
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text"],
  aliases: ["clear", "p"],
  permLevel: 2,
  botPerms: ["MANAGE_MESSAGES"],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "purge",
  description: "Deletes the specified messages.",
  usage: "<args:integer>",
  usageDelim: "",
  type: "commands",
};

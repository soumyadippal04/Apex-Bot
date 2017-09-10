exports.run = (client, msg, [member]) => {
  try {
    msg.channel.overwritePermissions(member, {
      SEND_MESSAGES: false,
    });
  } catch (e) {
    throw `❌ | An error occured while muting ${member.user.username}! \`\`\`${e.stack}\`\`\``;
  }
  msg.channel.send(`Successfully muted ${member.user.username}`);
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
};

exports.help = {
  name: "mute",
  description: "Mutes the mentioned user.",
  usage: "<member:member>",
  usageDelim: "",
  type: "commands",
};

exports.run = (client, msg, [member]) => {
  try {
    msg.channel.overwritePermissions(member, {
      SEND_MESSAGES: true,
    });
  } catch (e) {
    throw `❌ | An error occured while unmuting ${member.user.username}! \`\`\`${e.stack}\`\`\``;
  }
  msg.channel.send(`Successfully unmuted ${member.user.username}`);
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
  name: "unmute",
  description: "Unmutes the mentioned user.",
  usage: "<member:member>",
  usageDelim: "",
  type: "commands",
};

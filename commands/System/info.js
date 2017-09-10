exports.run = (client, msg) => {
  msg.channel.send(`= Apex Botchelon =
    • Invite the bot to your guild using: https://discordapp.com/oauth2/authorize?client_id=331366307872243714&scope=bot&permissions=470147287
    • Report any errors and feedback to Stitch #9441
    • Bot support server: https://discord.gg/tc7Prth`, { code: "asciidoc" });
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["details", "what"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "info",
  description: "Provides some information about this bot.",
  usage: "",
  usageDelim: "",
};

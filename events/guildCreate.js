exports.run = (client, guild) => {
  if (!guild.available) return;
  client.settings.guilds.create(guild).catch(e => client.emit("log", e, "error"));
    client.channels.get("336452692178108446").send(`Joined ${guild.name}! Currently in ${client.guilds.size} servers!`)
  const channel = guild.channels.filter(c=> c.permissionsFor(guild.defaultRole).has("SEND_MESSAGES")).sort((a,b) => a.position - b.postion).first();
  channel.send(`= Apex Botchelon =
    • Thanks for inviting me to your guild! Let's hope I'm really useful to you!
    • I'm assuming you've invited me with the correct permissions. If a command doesn't work for any apparent reason, check my permissions again.
    • To use moderator commands: Configure your moderator roles using -conf set modRole <yourModRoleName>. Use -conf list to check other mod, admin roles, and prefixes.
    • The bot is currently in Alpha state, so please bear errors and report them to Stitch#9441. Send Stitch feedback as well.
    • Use -help to get started! Have fun!
    `, {code: "asciidoc"})
};
